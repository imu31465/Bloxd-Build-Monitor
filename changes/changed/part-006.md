# Changed — Bundle Modifications Report (Part 006 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `6 / 56` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/135.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/135.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13)

#### 22. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L301-L325` → after: `L634-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L634-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L634-L641) · [Before (L301-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L301-L325)

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
- ... (9 more removed lines; see GitHub link above)
+       var rM, iM, OM;
+       return null !== (rM = null !== (iM = (0, ur.m)() ? function(MM) {
+         for (const [rM, iM] of Object.entries(Rr)) {
+           const OM = [rM, ...iM.map((MM => (0, jr.Kb)(rM, MM)))];
+           if (OM.includes(MM)) return OM
+         }
+         return null
+       }(MM) : null) && void 0 !== iM ? iM : null === (OM = Lr.e[MM]) || void 0 === OM ? void 0 : OM.listedVariations) && void 0 !== rM ? rM : null
```

#### 23. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L329` → after: `L645-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L645-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L645-L652) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L329)

```diff
-       return KG(rG)
+       const {
+         gameNameWithVariation: MM
+       } = (0, TM.D)();
+       if ((0, dM.useEffect)(tr.r, []), MM && (0, Or.r)(MM)) return (0, DM.jsx)(Zr, {
+         urlId: MM
+       }, MM);
+       const rM = MM && (0, Sr.m)(MM) ? MM : "firstParty";
+       return (0, DM.jsx)(or, {}, rM)
```

#### 24. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L332-L333` → after: `L655-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L655-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L655-L689) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L332-L333)

```diff
-     function EG(GG, bG) {
-       return "active" === oG(GG, bG).kind
+     function Zr(MM) {
+       let {
+         urlId: rM
+       } = MM;
+       const {
+         userContext: iM,
+         isUserContextUpdating: OM
+       } = (0, GM.b)(), SM = (0, dM.useMemo)((() => (0, qM.g)(rM)), [rM]);
+       (0, dM.useMemo)((() => {
+         if (null === SM) return;
+         const MM = IM.userContextManager.peekCurrentUserContext();
+         (null !== MM ? uM.c.getGame(MM, SM.schematicId) : IM.userContextManager.getCurrentUserContext().then((MM => uM.c.getGame(MM, SM.schematicId)))).catch((MM => {
+           console.error(`Failed to get the custom game ${SM.schematicId}`, MM), (0, qM.f)(rM)
+         }))
+       }), [SM, rM]);
+       const [jM, aM] = (0, dM.useState)(null), PM = (0, KM.d)();
+ ... (19 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L336-L358` → after: `L692-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L692-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L692-L1269) · [Before (L336-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L336-L358)

```diff
-     function oG(GG, bG) {
-       var ZG;
-       return null === GG ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iG(GG) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : WG(GG, bG) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : GG.validation.ok ? {
-         kind: "active"
- ... (7 more removed lines; see GitHub link above)
+     function or(MM) {
+       var rM, iM, aM, HM, gM, RM, pM, sM;
+       let {
+         gameNameWithVariation: kM,
+         knownCustomGame: ZM = null
+       } = MM;
+       const {
+         t: fM
+       } = (0, nM.A)();
+       (0, zr.j)();
+       const NM = (0, zr.q)(),
+         {
+           userContext: AM,
+           isUserContextUpdating: xM
+         } = (0, GM.b)(),
+         vM = (0, wr.d)(),
+ ... (562 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L361-L362` → after: `L1272-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1272-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1272-L1301) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L361-L362)

```diff
-     function XG() {
-       LG.l.setItem(YG, performance.timeOrigin)
+     function fr(MM) {
+       let {
+         variation: rM,
+         isSelected: iM,
+         children: OM
+       } = MM;
+       const nM = Lr.e[rM],
+         zM = (0, jM.m)(rM, (0, jM.p)(nM)),
+         LM = (0, SM.c)(zM),
+         mM = (0, aM.e)([(0, jM.j)(rM, (0, jM.d)(nM))]);
+       return (0, DM.jsxs)(VM.LinkPreserveSearch, {
+         to: (0, YM.x)(rM),
+         replace: !0,
+         className: hM()("GameInformationVariation", PM.k, {
+           SelectedGameInformationVariation: iM
+         }),
+ ... (14 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L365-L366` → after: `L1321-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1321-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1321-L1363) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L365-L366)

```diff
-     function uG() {
-       return LG.l.getItem(YG) === performance.timeOrigin
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

#### 28. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L370` → after: `L1369-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1369-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1369-L1376) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L370)

```diff
-       return !(0, SG.g)(GG.manifest.apiVersion)
+       yM.NotificationProvider.showCustomPopup({
+         body: () => (0, hM.jsx)(EM, {
+           ...MM
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 29. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L374` → after: `L1380-L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1380-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1380-L1469) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L374)

```diff
-       return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
+       let {
+         schematicId: rM,
+         canOverride: iM,
+         onApprovalChanged: LM
+       } = MM;
+       const {
+         t: mM
+       } = (0, dM.A)(), {
+         userContext: HM
+       } = (0, PM.b)(), yM = (0, aM.b)(), [lM, EM] = (0, OM.useState)(null), [UM, GM] = (0, OM.useState)(null), [CM, eM] = (0, OM.useState)(!1), bM = (0, OM.useCallback)((() => {
+         GM(null), jM.c.getGameApprovalInfo(HM, rM).then((MM => {
+           yM.current && EM(MM)
+         })).catch((MM => {
+           console.error("Failed to get game approval info", MM), yM.current && GM(mM("studio:approvalLoadFailed"))
+         }))
+       }), [HM, rM, yM, mM]);
+ ... (74 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L377-L379` → after: `L1488-L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1488-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1488-L1547) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L377-L379)

```diff
-     function WG(GG, bG) {
-       var ZG;
-       return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
+     function aM() {
+       const {
+         t: MM,
+         selectedLanguage: rM
+       } = (0, SM.A)();
+       return {
+         statusText: rM => MM(jM[rM]),
+         rowText: iM => {
+           const jM = (MM, iM) => (0, OM.db)((0, SM.n)(rM.code, MM), 0, iM);
+           switch (iM.kind) {
+             case "ownerAccountAge": {
+               const rM = iM.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: MM("studio:approvalAccountAgeLabel"),
+                 value: MM(rM, {
+                   age: jM(rM, iM.accountAgeMs),
+ ... (44 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L383-L385` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1551) · [Before (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L383-L385)

```diff
-       return KG((async () => {
-         FG(await (0, kG.e)(!0), GG)
-       }))
+       return null === MM.manualOverride && MM.rows.some((MM => "reportHold" === MM.kind && !MM.passed))
```

#### 32. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L389-L391` → after: `L1562-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1562-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1562-L1570) · [Before (L389-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L389-L391)

```diff
-       return KG((async () => {
-         LG.h.removeItem(yG.d)
-       }))
+       const [MM, rM] = (0, OM.useState)(!1);
+       return (0, OM.useLayoutEffect)((() => {
+         let MM = !0;
+         return (0, SM.e)().then((() => {
+           MM && rM(!0)
+         })), () => {
+           MM = !1
+         }
+       }), []), MM
```

#### 33. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L394-L395` → after: `L1581-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1581-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1581-L1603) · [Before (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L394-L395)

```diff
-     function FG(GG, bG) {
-       EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
+     function aM(MM) {
+       return MM = function(MM, rM) {
+         var iM;
+         const OM = new URLSearchParams(rM),
+           SM = OM.get("lobby"),
+           jM = OM.get("vm"),
+           aM = null !== (iM = SM) && void 0 !== iM ? iM : MM.lobbyName,
+           PM = null !== jM && void 0 !== jM ? jM : MM.directJoinVmUrl;
+         if (aM === MM.lobbyName && PM === MM.directJoinVmUrl) return MM;
+         return {
+           ...MM,
+           lobbyName: aM,
+           directJoinVmUrl: PM
+         }
+       }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), MM = function(MM) {
+         if ((0, jM.J)(MM.directJoinVmUrl)) return MM;
+ ... (7 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L398-L401` → after: `L1606-L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1606-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1606-L1609) · [Before (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L398-L401)

```diff
-   6627: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadShaderPackTextures: () => yG,
-       shaderPackTextures: () => kG
+   9517: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => jM,
+       e: () => SM
```

#### 35. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L403-L405` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1611) · [Before (L403-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L403-L405)

```diff
-     var wG = ZG(5062);
-     let SG = null,
-       LG = null;
+     let OM = !1;
```

#### 36. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L408-L415` → after: `L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1614) · [Before (L408-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L408-L415)

```diff
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: bG,
-           textureNameToIndex: ZG,
-           textureAnimationData: LG
-         } = GG;
-         return SG ??= (0, wG.j)(ZG, LG, bG), SG
-       })), LG
+       OM = !0
```

#### 37. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L423` → after: `L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1621) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L423)

```diff
-   6645: (GG, bG, ZG) => {
+   37305: (MM, rM, iM) => {
```

#### 38. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L425-L426` → after: `L1623-L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1623-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1623-L1624) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L425-L426)

```diff
-       e: () => UG,
-       g: () => kG
+       b: () => SM,
+       f: () => OM
```

#### 39. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L428-L502` → after: `L1626-L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L1626-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/135.js#L1626-L1627) · [Before (L428-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/135.js#L428-L502)

```diff
-     var wG = ZG(6653),
-       SG = ZG(6627),
-       LG = ZG(101);
-     const yG = 100;
-     async function kG(GG, bG) {
-       var ZG;
-       let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
-       const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
-       if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
-       const kG = await async function(GG) {
-         if (!GG) return null;
-         try {
-           const bG = await (0, LG.r)(GG);
-           return bG ? await bG.requestDevice() : null
-         } catch (bG) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
- ... (59 more removed lines; see GitHub link above)
+     const OM = "skyblockSkills",
+       SM = "skills_test_gym"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/136.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/136.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036)

#### 1. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L4-L23` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L4-L31) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L4-L23)

```diff
-   6608: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadPageShaderPackCompiler: () => fb
-     });
-     var wG = {};
-     ZG.r(wG), ZG.d(wG, {
-       uSG: () => SG,
-       EGG: () => LG,
-       default: () => RG,
-       iSG: () => yG,
-       CSG: () => kG,
-       initSync: () => eG,
-       Gp: () => UG,
-       QwG: () => YG,
-       WSG: () => VG,
-       mSG: () => pG,
- ... (4 more removed lines; see GitHub link above)
+   9349: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => aM,
+       d: () => jM
+     });
+     var OM = iM(2099);
+     const SM = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       jM = MM => "string" === typeof MM.icon && "" !== MM.icon && "string" === typeof MM.keycode && SM.test(MM.keycode),
+       aM = MM => "Space" === MM ? "_" : OM.k[MM]
+   },
+   34822: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => SM,
+       d: () => jM
+     });
+     let OM = !1;
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L26-L44` → after: `L34-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L34-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L34-L70) · [Before (L26-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L26-L44)

```diff
-       static __wrap(GG) {
-         const bG = Object.create(SG.prototype);
-         return bG.__wbg_ptr = GG, JG.register(bG, bG.__wbg_ptr, bG), bG
-       }
-       __destroy_into_raw() {
-         const GG = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, JG.unregister(this), GG
-       }
-       free() {
-         const GG = this.__destroy_into_raw();
-         qG.rGHs(GG, 0)
-       }
-       get vSG() {
-         let GG, bG;
-         try {
-           const ZG = qG.hszr(this.__wbg_ptr);
- ... (3 more removed lines; see GitHub link above)
+       constructor(MM) {
+         this.events = MM, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
+       }
+       addSample(MM, rM) {
+         if (null === MM) return this.recent.length = 0, void this.endEpisode(rM);
+         if (this.sampleSum += MM, this.sampleCount++, this.recent.push(MM), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, MM), this.episode.sum += MM, this.episode.count++), this.recent.length < 5) ret … [truncated]
+         const iM = function(MM) {
+           let rM = 0;
+           for (const iM of MM) rM += iM;
+           return rM / MM.length
+         }(this.recent);
+         this.minWindowAvg = null === this.minWindowAvg ? iM : Math.min(this.minWindowAvg, iM), null === this.episode && iM < 20 ? (this.episode = {
+           startedAtMs: rM - 5e3,
+           minFps: Math.min(...this.recent),
+           sum: 5 * iM,
+           count: 5
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L47-L66` → after: `L73-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L73-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L73-L252) · [Before (L47-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L47-L66)

```diff
-       get features() {
-         const GG = qG.r8Pt(this.__wbg_ptr);
-         var bG = zG(GG[0], GG[1]);
-         return qG.MiUz(GG[0], 4 * GG[1], 4), bG
-       }
-       get hooks() {
-         const GG = qG.q07X(this.__wbg_ptr);
-         var bG = EG(GG[0], GG[1]).slice();
-         return qG.MiUz(GG[0], 1 * GG[1], 1), bG
-       }
-       mapValidationMessage(GG, bG, ZG, wG, SG) {
-         let LG, yG;
-         try {
-           const YG = qG.jfrd(this.__wbg_ptr, GG, bG, ZG, rG(wG), rG(SG));
-           var kG = YG[0],
-             UG = YG[1];
- ... (4 more removed lines; see GitHub link above)
+     }
+ 
+     function SM(MM) {
+       return MM < 15 ? "<15" : MM < 30 ? "15-30" : MM < 50 ? "30-50" : "50+"
+     }
+ 
+     function jM(MM) {
+       return Math.round(10 * MM) / 10
+     }
+   },
+   34841: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => QM,
+       f: () => PM
+     });
+     var OM = iM(1073),
+ ... (164 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L69-L292` → after: `L255-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L255-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L255-L273) · [Before (L69-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L69-L292)

```diff
-       get moduleCodes() {
-         const GG = qG.bSLr(this.__wbg_ptr);
-         var bG = zG(GG[0], GG[1]);
-         return qG.MiUz(GG[0], 4 * GG[1], 4), bG
-       }
-       get aSG() {
-         let GG, bG;
-         try {
-           const ZG = qG.fprP(this.__wbg_ptr);
-           return GG = ZG[0], bG = ZG[1], uG(ZG[0], ZG[1])
-         } finally {
-           qG.MiUz(GG, bG, 1)
-         }
-       }
-       get reads() {
-         const GG = qG.Obr0(this.__wbg_ptr);
- ... (208 more removed lines; see GitHub link above)
+       releaseAll() {
+         let MM = !1;
+         for (let rM = 0; this.heldCount > 0 && rM < this.sQ.length; rM++) MM = this.release(rM) || MM;
+         this.mouseButtons = 0, MM && this.updateActionBits()
+       }
+       release(MM) {
+         const rM = this.sQ[MM];
+         if (0 === rM) return !1;
+         this.sQ[MM] = 0, this.heldCount--;
+         const iM = 0 !== (rM - 1 & 2);
+         return this.emit(MM, !1, 0 !== (rM - 1 & 1), iM), iM
+       }
+       updateActionBits() {
+         let MM = 0;
+         if (this.heldCount > 0) {
+           const rM = this.getKeyTable().actionBits;
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L295-L306` → after: `L276-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L276-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L276-L314) · [Before (L295-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L295-L306)

```diff
-       }
-     }
-     Symbol.dispose && (SG.prototype[Symbol.dispose] = SG.prototype.free);
-     const JG = "undefined" === typeof FinalizationRegistry ? {
-       register: () => {},
-       unregister: () => {}
-     } : new FinalizationRegistry((GG => qG.rGHs(GG, 1)));
- 
-     function rG(GG) {
-       FG === IG.length && IG.push(IG.length + 1);
-       const bG = FG;
-       return FG = IG[bG], IG[bG] = GG, bG
+         if (MM === this.actionBits) return;
+         this.actionBits = MM;
+         const rM = this.source.now();
+         for (const iM of this.actionsListeners) iM(MM, rM)
+       }
+       getKeyTable() {
+         return this.keyTable ??= function(MM, rM) {
+           const iM = new Uint8Array(JM.e.length),
+             OM = new Uint16Array(JM.e.length);
+           iM[0] = 1;
+           for (const SM of dM) iM[(0, JM.f)(SM)] = 1;
+           for (const [SM, jM] of Object.entries(MM)) {
+             if (rM.has(SM)) continue;
+             const MM = lM[SM],
+               aM = void 0 === MM ? 0 : (0, JM.h)(MM);
+             for (const rM of jM) {
+ ... (23 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L310-L319` → after: `L318-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L318-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L318-L323) · [Before (L310-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L310-L319)

```diff
-       GG >>>= 0;
-       const ZG = XG(),
-         wG = [];
-       for (let SG = GG; SG < GG + 4 * bG; SG += 4) wG.push(cG(ZG.getUint32(SG, !0)));
-       return wG
-     }
- 
-     function EG(GG, bG) {
-       return GG >>>= 0, WG().subarray(GG / 1, GG / 1 + bG)
-     }
+       return MM.push(rM), () => {
+         const iM = MM.indexOf(rM); - 1 !== iM && MM.splice(iM, 1)
+       }
+     }
+     const CM = "replayInput",
+       eM = new Set([...LM.A, ...LM.k].filter((MM => "replayViewerOpen" !== MM && "toggleFreeCam" !== MM)));
```

#### 7. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L323-L336` → after: `L327-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L327-L329) · [Before (L323-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L323-L336)

```diff
-       return null !== oG && oG.buffer === qG.memory.buffer || (oG = new DataView(qG.memory.buffer)), oG
-     }
- 
-     function uG(GG, bG) {
-       return function(GG, bG) {
-         PG += bG, PG >= jG && (lG = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), lG.decode(), PG = bG);
-         return lG.decode(WG().subarray(GG, GG + bG))
-       }(GG >>> 0, bG)
-     }
-     let iG = null;
-     let CG = null;
+       var MM;
+       return (null !== (MM = SM.d.get("customButtons")) && void 0 !== MM ? MM : []).filter(QM.d).map((MM => MM.keycode))
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L339-L447` → after: `L332-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L332-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L332-L355) · [Before (L339-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L339-L447)

```diff
-       return null !== CG && 0 !== CG.byteLength || (CG = new Uint8Array(qG.memory.buffer)), CG
-     }
- 
-     function mG(GG) {
-       return IG[GG]
-     }
-     let IG = new Array(1024).fill(void 0);
-     IG.push(void 0, null, !0, !1);
-     let FG = IG.length;
- 
-     function vG(GG, bG) {
-       const ZG = bG(4 * GG.length, 4) >>> 0;
-       return (null !== iG && 0 !== iG.byteLength || (iG = new Uint32Array(qG.memory.buffer)), iG).set(GG, ZG / 4), nG = GG.length, ZG
-     }
- 
-     function aG(GG, bG) {
- ... (93 more removed lines; see GitHub link above)
+       return null === bM && "0" !== String(mM.g.getItem(CM)) && (bM = new EM({
+         isInPlay: () => "inGame" === OM.d.get("gameState") && !(0, PM.r)() && !(0, jM.b)(),
+         isTyping: zM.isTextEntry,
+         getBindings: () => ({
+           ...LM.v,
+           customButtons: wM(),
+           pageKeys: (0, nM.e)()
+         }),
+         ignoredActions: eM,
+         onBindingsChanged: MM => {
+           aM.i.subscribe("customBindingsChanged", MM), SM.d.subscribe("customButtons", MM), SM.d.subscribeReset(MM), (0, nM.f)(MM)
+         },
+         now: HM.e
+       }), bM.listen(window, document)), bM
+     }
+   },
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L450-L573` → after: `L358-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L358-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L358-L367) · [Before (L450-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L450-L573)

```diff
-       return DG ? Promise.resolve(DG) : (NG || (NG = async function() {
-         let GG;
-         try {
-           GG = await (0, TG.G)(new ZG.U(ZG(6620)), (0, HG.e)("bloxd_wasm_shader_pack"))
-         } catch (bG) {
-           throw new tG((0, TG.L)(bG), bG)
-         }
-         try {
-           await RG({
-             module_or_path: GG
-           })
-         } catch (bG) {
-           throw new tG("instantiate", bG)
-         }
-         return DG = wG, DG
-       }(), NG.then(void 0, (() => {
- ... (108 more removed lines; see GitHub link above)
+       for (const MM of SM) MM()
+     }
+ 
+     function aM(MM) {
+       var rM;
+       return OM.set(MM, (null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : 0) + 1), jM(), () => {
+         const rM = OM.get(MM) - 1;
+         0 === rM ? OM.delete(MM) : OM.set(MM, rM), jM()
+       }
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L576-L629` → after: `L370-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L370-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L370-L377) · [Before (L576-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L576-L629)

```diff
-       return pb ??= async function() {
-         if ("undefined" === typeof WebAssembly) return Qb("unsupported", "This browser has no WebAssembly"), null;
-         const GG = (0, Yb.loadShaderPackTextures)().then((() => !0), (GG => (console.error("Could not load the shader pack textures, so shader packs can't run", GG), !1)));
-         try {
-           const bG = await async function() {
-             let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OG;
-             return kb(await GG())
-           }();
-           return await GG ? bG : null
-         } catch (bG) {
-           const GG = bG instanceof Error ? bG.message : String(bG);
-           return Qb(Ub.b[bG instanceof tG ? bG.stage : "instantiate"], GG), null
-         }
-       }(), pb
-     }
- 
- ... (38 more removed lines; see GitHub link above)
+       return [...OM.keys()]
+     }
+ 
+     function nM(MM) {
+       SM.push(MM)
+     }
+   },
+   7006: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L632-L752` → after: `L380-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L380-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/136.js#L380-L399) · [Before (L632-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/136.js#L632-L752)

```diff
-       h: () => oG,
-       k: () => rG,
-       o: () => JG
-     });
-     var wG = ZG(6636);
-     const SG = 6,
-       LG = 3,
-       yG = 1,
-       kG = 2,
-       UG = 4,
-       YG = 8,
-       VG = 16,
-       pG = 32,
-       fG = 64,
-       QG = 128,
-       KG = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- ... (105 more removed lines; see GitHub link above)
+       f: () => jM,
+       h: () => PM
+     });
+     const OM = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((MM => `Key${MM}`)), ...Array.from({
+         length: 10
+       }, ((MM, rM) => `Digit${rM}`)), ...Array.from({
+         length: 12
+       }, ((MM, rM) => `F${rM+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown … [truncated]
+         length: 10
+       }, ((MM, rM) => `Numpad${rM}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
+       SM = new Map(OM.map(((MM, rM) => [MM, rM])));
+ 
+     function jM(MM) {
+       var rM;
+       return null !== (rM = SM.get(MM)) && void 0 !== rM ? rM : 0
+     }
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/137.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/137.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a)

#### 1. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137];
+ export const ids = [137, 138];
```

#### 2. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L4)

```diff
-   36643: (GG, bG, ZG) => {
+   7031: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L6-L9)

```diff
-       d: () => DG,
-       h: () => BG,
-       j: () => OG,
-       l: () => tG
+       b: () => SM
```

#### 4. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L11-L18` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L8) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L11-L18)

```diff
-     var wG = ZG(2868),
-       SG = ZG(2881),
-       LG = ZG(6617),
-       yG = ZG(4708),
-       kG = ZG(2878),
-       UG = ZG(2872);
-     const YG = "bloxd-wasmDownloaded",
-       VG = 12;
+     var OM = iM(1303);
```

#### 5. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L21` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L11-L24) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L21)

```diff
-       return GG.pathname.slice(GG.pathname.lastIndexOf("/") + 1)
+       let {
+         href: rM,
+         children: iM
+       } = MM;
+       return (0, OM.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: rM,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [iM, " ", (0, OM.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L25-L31` → after: `L43-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L43-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L43-L51) · [Before (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L25-L31)

```diff
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const GG = JSON.parse(localStorage.getItem(YG) ?? "[]");
-         return Array.isArray(GG) ? GG.filter((GG => "string" === typeof GG)) : []
-       } catch (GG) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", GG), null
-       }
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("superBotXd:deepSeekNotice"), " ", (0, jM.jsx)(SM.b, {
+           href: aM,
+           children: MM("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L50-L125` → after: `L55-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L55-L66) · [Before (L50-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L50-L125)

```diff
-       return EG && !oG
-     }
-     class uG {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (XG()) try {
-           this.worker = CG(), QG(JG, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
-         const GG = this.worker;
- ... (60 more removed lines; see GitHub link above)
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("aiHelperChatGpt:notice"), " ", (0, jM.jsx)(SM.b, {
+           href: PM,
+           children: MM("aiHelperChatGpt:terms")
+         }), " ", (0, jM.jsx)(SM.b, {
+           href: nM,
+           children: MM("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L129-L236` → after: `L86-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L86-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L86-L96) · [Before (L129-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L129-L236)

```diff
-       if (globalThis.Worker !== KG) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(ZG.p + ZG.u(68), ZG.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const WG = Reflect.apply,
-       mG = ArrayBuffer,
-       IG = "undefined" === typeof Response ? void 0 : Response,
-       FG = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       vG = function() {
-         let GG;
-         void 0 !== FG && new FG({
-           __proto__: null,
-           start(bG) {
-             const {
- ... (92 more removed lines; see GitHub link above)
+       const {
+         t: MM
+       } = (0, OM.A)(), rM = !(0, jM.shouldUseUkPrivacyPolicy)();
+       return (0, HM.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, HM.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: MM("homePage:privacyPolicy")
+         }), (0, HM.jsx)("p", {
+           children: (0, HM.jsxs)("em", {
+             children: ["Last updated: ", zM.h.toLocaleDateString()]
```

#### 9. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L238-L369` → after: `L98-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L98-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L98-L1202) · [Before (L238-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L238-L369)

```diff
-         } catch (CG) {
-           throw new Error(`Fetching ${GG} failed: ${(0,kG.f)(CG)}`)
-         }
-         const {
-           ok: YG,
-           status: VG,
-           body: pG
-         } = function(GG, bG) {
-           try {
-             const {
-               ok: GG,
-               status: ZG
-             } = bG;
-             return {
-               ok: GG,
-               status: ZG,
- ... (116 more removed lines; see GitHub link above)
+         }), (0, HM.jsx)("p", {
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, HM.jsx)("h2", {
+           children: "1. Who We Are"
+         }), (0, HM.jsx)("p", {
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
+         }), (0, HM.jsx)("p", {
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+         }), (0, HM.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, HM.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, HM.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, HM.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+ ... (1089 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L372-L382` → after: `L1205-L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1205-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L1205-L1213) · [Before (L372-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L372-L382)

```diff
-     function nG(GG, bG, ZG) {
-       return void 0 === AG(GG.name) ? (0, UG.G)(GG.url(), bG, ZG) : (0, UG.G)(GG.url(), bG, {
-         ...ZG,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(GG) {
-             const bG = fG();
-             if (null === bG) return;
-             const ZG = pG(GG),
-               wG = bG.filter((GG => GG !== ZG));
-             wG.push(ZG);
+     function JM() {
+       const {
+         adMobPrivacyOptionsRequired: MM
+       } = (0, nM.m)(["adMobPrivacyOptionsRequired"]);
+       if (!MM) return null;
+       return (0, HM.jsx)(aM.e, {
+         className: "PrivacyChoicesButton",
+         onClick: () => {
+           (async () => {
```

#### 11. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L384` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L1215) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L384)

```diff
-               localStorage.setItem(YG, JSON.stringify(wG.slice(-VG)))
+               await QM.e.request("ads.showPrivacyOptions", {})
```

#### 12. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L386` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L1217) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L386)

```diff
-               console.warn(`Bloxd wasm: ${ZG} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, SG)
+               console.error("Failed to open AdMob privacy options:", MM)
```

#### 13. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L388-L389` → after: `L1219-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1219-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L1219-L1221) · [Before (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L388-L389)

```diff
-           }(GG.url()), ZG.onDownloaded?.()
-         }
+           })()
+         },
+         children: "Manage Privacy Choices"
```

#### 14. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L407-L537` → after: `L1225-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1225-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/137.js#L1225-L1238) · [Before (L407-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/137.js#L407-L537)

```diff
-     function tG(GG, bG, ZG) {
-       return null === eG ? eG = NG(GG, bG, ZG?.memoryMaximumBytes) : GG !== eG.build ? console.warn(`Bloxd wasm: ${GG.name} was asked for after ${eG.build.name} started loading, which this thread keeps`) : bG.name !== eG.workers.name && console.warn(`Bloxd wasm: ${bG.name} was as … [truncated]
-     }
- 
-     function DG(GG, bG) {
-       if (null !== eG) return (0, SG.e)([]);
-       const ZG = GG.filter((GG => !TG.has(GG.name))).map((GG => {
-         const ZG = new AbortController,
-           wG = {
-             compiled: nG(GG, (0, LG.e)(GG.name), {
-               priority: bG,
-               RZ: ZG.signal,
-               onDownloaded: () => {
-                 wG.downloaded = !0
-               },
-               retries: {
- ... (115 more removed lines; see GitHub link above)
+     function dM() {
+       return (0, HM.jsxs)(HM.Fragment, {
+         children: [(0, SM.isDiscordClient)() && (0, HM.jsx)(HM.Fragment, {
+           children: (0, HM.jsx)(aM.e, {
+             className: "PrivacyChoicesButton",
+             onClick: () => {
+               (0, PM.q)()
+             },
+             children: "Adjust Discord Privacy Choices"
+           })
+         }), (0, HM.jsx)(JM, {}), (0, HM.jsx)(LM.b, {
+           className: "PrivacyPolicyLinks"
+         }), (0, HM.jsx)(hM, {})]
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/138.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/138.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4)

#### 1. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/138.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/138.js#L4-L7)

```diff
-   6627: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       loadShaderPackTextures: () => yG,
-       shaderPackTextures: () => kG
+   7023: (MM, rM, iM) => {
+     iM.d(rM, {
+       WorldCodeAiChatGptNotice: () => zM,
+       WorldCodeAiDeepSeekNotice: () => QM,
+       e: () => aM,
+       g: () => nM,
+       j: () => PM
```

#### 2. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L9-L11` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/138.js#L12-L17) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/138.js#L9-L11)

```diff
-     var wG = ZG(5062);
-     let SG = null,
-       LG = null;
+     var OM = iM(1188),
+       SM = iM(7031),
+       jM = iM(1303);
+     const aM = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       PM = "https://openai.com/policies/terms-of-use/",
+       nM = "https://openai.com/policies/privacy-policy/";
```

#### 3. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L14-L21` → after: `L20-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L20-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/138.js#L20-L28) · [Before (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/138.js#L14-L21)

```diff
-       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: bG,
-           textureNameToIndex: ZG,
-           textureAnimationData: LG
-         } = GG;
-         return SG ??= (0, wG.j)(ZG, LG, bG), SG
-       })), LG
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("superBotXd:deepSeekNotice"), " ", (0, jM.jsx)(SM.b, {
+           href: aM,
+           children: MM("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
```

#### 4. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L25-L26` → after: `L32-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L32-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/138.js#L32-L43) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/138.js#L25-L26)

```diff
-       if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return SG
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("aiHelperChatGpt:notice"), " ", (0, jM.jsx)(SM.b, {
+           href: PM,
+           children: MM("aiHelperChatGpt:terms")
+         }), " ", (0, jM.jsx)(SM.b, {
+           href: nM,
+           children: MM("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/139.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/139.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28)

#### 1. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/139.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/139.js#L2)

```diff
- export const ids = [138, 139];
+ export const ids = [139];
```

#### 2. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/139.js#L4)

```diff
-   6653: (GG, bG, ZG) => {
+   7033: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/139.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/139.js#L6-L19)

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
+       default: () => jM
```

#### 4. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L21-L67` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/139.js#L8-L9) · [Before (L21-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/139.js#L21-L67)

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
- ... (31 more removed lines; see GitHub link above)
+     var OM = iM(1188),
+       SM = iM(1303);
```

#### 5. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L70-L161` → after: `L12-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L12-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/139.js#L12-L221) · [Before (L70-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/139.js#L70-L161)

```diff
-       return KG(rG)
-     }
- 
-     function EG(GG, bG) {
-       return "active" === oG(GG, bG).kind
-     }
- 
-     function oG(GG, bG) {
-       var ZG;
-       return null === GG ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iG(GG) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
- ... (76 more removed lines; see GitHub link above)
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, SM.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, SM.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: MM("homePage:termsOfService")
+         }), (0, SM.jsx)("p", {
+           children: (0, SM.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, SM.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, SM.jsx)("h3", {
+           children: "1. General Information"
+ ... (194 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/140.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/140.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846)

#### 1. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L4-L161` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L4-L6) · [Before (L4-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L4-L161)

```diff
-   39165: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => YG,
-       g: () => fG,
-       k: () => QG,
-       l: () => dG,
-       p: () => pG,
-       t: () => VG,
-       u: () => yG,
-       w: () => KG
-     });
-     var wG = ZG(326),
-       SG = ZG(1682);
-     const LG = "A valid external Instance reference no longer exists.";
- 
-     function yG(GG) {
- ... (142 more removed lines; see GitHub link above)
+   7042: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => JM
```

#### 2. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L163-L337` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L8-L17) · [Before (L163-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L163-L337)

```diff
-     var wG = ZG(333),
-       SG = ZG(264),
-       LG = ZG(273),
-       yG = ZG(17),
-       kG = ZG(2801),
-       UG = ZG(666),
-       YG = ZG(4531),
-       VG = ZG(2773),
-       pG = ZG(3441),
-       fG = ZG(80),
-       QG = ZG(326),
-       KG = ZG(29),
-       hG = ZG(318),
-       dG = ZG(101),
-       JG = ZG(626),
-       rG = ZG(111),
- ... (159 more removed lines; see GitHub link above)
+     var OM = iM(1608),
+       SM = iM(1641),
+       jM = iM(3358),
+       aM = iM(2412),
+       PM = iM(1520),
+       nM = iM(1591),
+       QM = iM(1142),
+       zM = iM(44),
+       LM = iM(1398),
+       mM = iM(1303);
```

#### 3. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L412-L413` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L21-L25) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L412-L413)

```diff
-         source: ZG,
-         asked: wG
+         iconName: rM,
+         iconCountPerGroup: iM,
+         animation: OM,
+         midShowerStart: SM = !1,
+         customClass: jM
```

#### 4. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L415-L557` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L27-L35) · [Before (L415-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L415-L557)

```diff
-       return wG || "default" === ZG ? (0, iG.j)(wG, GG.defaultCompatibility) : void 0
-     }
- 
-     function TG(GG) {
-       const bG = GG.override(),
-         ZG = GG.webGpuSetting(),
-         wG = null === bG && !0 !== ZG && GG.OQ(),
-         SG = null !== bG || null !== ZG || wG ? null : GG.claimed(),
-         LG = null !== bG ? "override" : !0 === ZG ? "setting" : wG ? "pack" : !1 === ZG ? "setting" : null !== SG ? "claim" : "default",
-         yG = function(GG) {
-           return "override" === GG || "setting" === GG
-         }(LG);
-       if ("webgl" === bG || "webgl1" === bG || "webgl" === SG || "setting" === LG && !1 === ZG) return {
-         source: LG,
-         asked: yG,
-         refused: "not_requested"
- ... (127 more removed lines; see GitHub link above)
+       const [aM, PM] = (0, zM.useState)({});
+       return (0, zM.useEffect)((() => {
+         const MM = {};
+         for (const rM of Array.from(Array(3).keys())) {
+           MM[rM] = [];
+           for (let OM = 0; OM < iM; OM++) MM[rM].push({
+             left: 100 * Math.random() + "%",
+             animationDelay: 20 * Math.random() * (SM ? -1 : 1) + "s"
+           })
```

#### 5. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L559-L678` → after: `L37-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L37-L50) · [Before (L559-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L559-L678)

```diff
-       }(GG, yG.e, ZG) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
-     }
-     const yb = "framePacing";
- 
-     function kb(GG) {
-       const bG = new URLSearchParams(GG).get(yb);
-       return null !== bG && /^\d{1,9}$/.test(bG) ? Number(bG) : void 0
-     }
- 
-     function Ub() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
-       try {
-         return "webgpu" === nG(new URLSearchParams(GG).get(VG.b))
-       } catch {
-         return !1
-       }
- ... (104 more removed lines; see GitHub link above)
+         PM(MM)
+       }), [iM, SM]), (0, mM.jsx)("div", {
+         className: `IconShower IconShowerAnimation${OM} ${null!==jM&&void 0!==jM?jM:""}`,
+         children: Object.keys(aM).map((MM => aM[MM].map((iM => (0, mM.jsx)("div", {
+           className: `Icon IconGroup${MM}`,
+           style: {
+             left: iM.left,
+             animationDelay: iM.animationDelay
+           },
+           children: (0, mM.jsx)(LM.b, {
+             name: rM
+           })
+         }, iM.left)))))
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L682-L965` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L55) · [Before (L682-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L682-L965)

```diff
-       UG.resolve()
-     }
- 
-     function QG(GG, bG, ZG, wG) {
-       if (null === GG) return {
-         errorKind: bG,
-         fingerprint: SG,
-         dedupe: `${bG}|${wG}`
-       };
-       const {
-         fingerprint: LG
-       } = GG.clientErrorKey(bG, ZG, wG);
-       return {
-         errorKind: bG,
-         fingerprint: LG,
-         dedupe: LG
- ... (268 more removed lines; see GitHub link above)
+       var MM;
```

#### 7. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L967-L1141` → after: `L57-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L57-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L57-L66) · [Before (L967-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L967-L1141)

```diff
-         kind: SG,
-         code: LG,
-         site: yG,
-         fatal: kG,
-         message: UG,
-         error: YG
-       } = GG, VG = !1 !== GG.toTransport && !rb.has(SG), pG = !kG && VG && !zb.has(SG), fG = {
-         kind: SG,
-         code: LG,
-         site: yG,
-         fatal: kG,
-         message: UG,
-         details: null !== (bG = GG.details) && void 0 !== bG ? bG : {}
-       }, QG = `${LG}@${yG}${void 0===GG.instance?"":`#${GG.instance}`}${kG?"!":""}`, KG = (null !== (wG = Xb.get(QG)) && void 0 !== wG ? wG : 0) + 1;
-       if (Xb.set(QG, KG), void 0 !== GG.countAs && 1 === KG && vb(GG.countAs), KG > 1 ? 0 === (KG & KG - 1) && cb((() => {
-           console.warn(`${MG} ${LG} at ${yG} reported ${KG} times`)
- ... (159 more removed lines; see GitHub link above)
+         t: rM
+       } = (0, hM.A)(), {
+         pack: iM
+       } = (0, OM.D)(), {
+         userContext: zM
+       } = (0, QM.b)();
+       if (iM) {
+         const MM = SM.d[iM];
+         if (null === MM || void 0 === MM || !MM.purchasable) return (0, mM.jsx)(nM.NavigatePreserveSearch, {
+           to: "/"
```

#### 8. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L1144-L1230` → after: `L69-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L69-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/140.js#L69-L103) · [Before (L1144-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/140.js#L1144-L1230)

```diff
-     }
- 
-     function nb(GG) {
-       if (GG !== pG.R.AudioUnknownSound && GG !== pG.R.PresentationClipUnplayable) return !1;
-       const {
-         gameNameWithVariation: bG,
-         lobbyName: ZG
-       } = (0, LG.d)();
-       return null !== bG && (!!(0, wG.h)(bG) || GG === pG.R.AudioUnknownSound && (0, SG.i)(bG, ZG))
-     }
- 
-     function gb(GG, bG) {
-       return GG === pG.R.RenderDeviceLost && 0 !== (bG & pG.X.RESTORE_UNHELD) ? "restoreUnheld" : void 0
-     }
- 
-     function eb(GG, bG) {
- ... (71 more removed lines; see GitHub link above)
+       const JM = iM ? SM.d[iM] : null,
+         dM = iM ? jM.k[(0, aM.j)(iM)] : null,
+         yM = void 0 !== (null === JM || void 0 === JM ? void 0 : JM.characterSet) || null !== JM && void 0 !== JM && JM.singleItem ? JM.displayName : `${null!==(MM=null===JM||void 0===JM?void 0:JM.displayName)&&void 0!==MM?MM:iM} Pack`,
+         lM = JM ? `Your ${yM} is Ready!` : "Welcome To Super Rank!",
+         EM = JM ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+         UM = JM ? !zM.getOwnedCosmeticPacks().includes(iM) : !zM.playerHasRank("super"),
+         GM = JM ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after … [truncated]
+       return (0, mM.jsxs)("div", {
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [dM && (0, mM.jsx)(dM, {}), !JM && (0, mM.jsx)(HM, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+           customClass: "SuperRankWelcomeIconShower"
+         }), (0, mM.jsx)("div", {
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/141.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/141.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5)

#### 1. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/141.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/141.js#L4-L9)

```diff
-   6629: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => EG,
-       h: () => oG,
-       k: () => rG,
-       o: () => JG
+   7046: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => mM
```

#### 2. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L11-L154` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/141.js#L8-L16) · [Before (L11-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/141.js#L11-L154)

```diff
-     var wG = ZG(6636);
-     const SG = 6,
-       LG = 3,
-       yG = 1,
-       kG = 2,
-       UG = 4,
-       YG = 8,
-       VG = 16,
-       pG = 32,
-       fG = 64,
-       QG = 128,
-       KG = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function hG(GG) {
-       if (!GG) return 0;
-       const bG = KG.indexOf(GG);
- ... (128 more removed lines; see GitHub link above)
+     var OM = iM(1396),
+       SM = iM(44),
+       jM = iM(94),
+       aM = iM(1608),
+       PM = iM(1232),
+       nM = iM(313),
+       QM = iM(656);
+     const zM = new URL(PM.o[nM.d.PRODUCTION]).origin;
+     var LM = iM(1303);
```

#### 3. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L157-L164` → after: `L19-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L19-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/141.js#L19-L41) · [Before (L157-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/141.js#L157-L164)

```diff
-       const GG = pG.map((GG => {
-         let {
-           name: bG,
-           type: ZG
-         } = GG;
-         return `    ${bG}: ${ZG},\n`
-       })).join("");
-       return `struct ${YG} {\n${GG}}\n@group(${wG}) @binding(${SG}) var<uniform> ${VG}: ${YG};\n`
+       const MM = (0, aM.D)();
+       return (0, SM.useEffect)((() => {
+         const rM = jM.currentUrl.getSearchParam("code");
+         jM.currentUrl.removeSearchParam("code"), null === rM && (console.error("No authorization code found in the URL"), window.close());
+         const iM = {
+           type: `oauth_authentication_${MM.providerName}`,
+           code: rM
+         };
+         for (const MM of (SM = window.location.origin) === zM ? [SM, `https://${QM.e}`] : [SM]) {
+           var OM;
+           null === (OM = window.opener) || void 0 === OM || OM.postMessage(iM, MM)
+         }
+         var SM;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/142.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/142.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0)

#### 1. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L4)

```diff
-   42184: (GG, bG, ZG) => {
+   7048: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L6-L8)

```diff
-       compilePagePack: () => YG,
-       prefetchCompiler: () => kG,
-       reconcileHint: () => UG
+       default: () => ZM
```

#### 3. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L10-L13` → after: `L8-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L8-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L8-L165) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L10-L13)

```diff
-     var wG = ZG(6608),
-       SG = ZG(6653),
-       LG = ZG(6627),
-       yG = ZG(6645);
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(1116),
+       aM = iM.n(jM),
+       PM = iM(313),
+       nM = iM(7054),
+       QM = iM(1398),
+       zM = iM(1591),
+       LM = iM(4937),
+       mM = iM(1520),
+       HM = iM(3530),
+       hM = iM(4945),
+       JM = iM(1763),
+       dM = iM(4934),
+       yM = iM(1142),
+       lM = iM(19),
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L16-L40` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L168) · [Before (L16-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L16-L40)

```diff
-       (0, wG.loadPageShaderPackCompiler)()
-     }
-     async function UG() {
-       const GG = await (0, wG.loadPageShaderPackCompiler)();
-       await (GG ? (0, SG.reconcileStoredShaderPackHint)(GG) : (0, SG.forgetShaderPackActiveHint)())
-     }
-     async function YG(GG) {
-       const bG = await (0, wG.loadPageShaderPackCompiler)();
-       if (!bG) return {
-         status: "none"
-       };
-       const ZG = await (0, yG.e)(GG, bG),
-         kG = (0, SG.storedPackOutcome)(ZG, bG);
-       if ("none" === kG.kind) return {
-         status: "none"
-       };
- ... (9 more removed lines; see GitHub link above)
+       var MM, rM, iM, jM;
```

#### 5. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L42-L51` → after: `L170-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L170-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L170-L186) · [Before (L42-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L42-L51)

```diff
-         name: YG,
-         keepCircleShadows: VG
-       } = ZG.manifest;
-       return {
-         status: "active",
-         pack: {
-           name: YG,
-           variants: UG.variants,
-           keepCircleShadows: !0 === VG
-         }
+         t: eM
+       } = (0, CM.A)(), bM = (0, zM.useNavigatePreserveSearch)(), tM = (0, SM.u)(), {
+         userContext: uM,
+         isUserContextUpdating: WM
+       } = (0, yM.b)(), [ZM, oM] = (0, RM.h)(), [fM, YM] = (0, RM.e)(), NM = (0, OM.useRef)(!1), [AM, xM] = (0, LM.k)(), vM = (0, wM.z)(AM), [FM, BM] = (0, OM.useState)(null !== (MM = vM.searchQuery) && void 0 !== MM ? MM : ""), XM = (0, OM.useRef)(null), {
+         searchQuery: IM
+       } = vM;
+       (0, OM.useEffect)((() => {
+         BM(null !== IM && void 0 !== IM ? IM : ""), XM.current && (XM.current.value = null !== IM && void 0 !== IM ? IM : "")
+       }), [IM]);
+       const [KM, qM] = (0, OM.useState)(null), [TM, VM] = (0, OM.useState)(!1), [cM, Mr] = (0, OM.useState)(!1), [rr, ir] = (0, OM.useState)(0), Or = (0, OM.useRef)(0), Sr = JSON.stringify(vM), jr = (0, wM.j)();
+ 
+       function ar() {
+         null !== jr ? (bM(jr), lM.d.set({
+           openEverythingMenuName: PM.m.SETTINGS,
+           openSettingsCategory: "nh"
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L53-L88` → after: `L188-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L188-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L188-L196) · [Before (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L53-L88)

```diff
-     }
-   },
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
- ... (20 more removed lines; see GitHub link above)
+ 
+       function Pr(MM) {
+         xM((rM => {
+           (0, wM.jb)(rM, {
+             ...vM,
+             pageNumber: 1,
+             ...MM
+           })
+         }))
```

#### 7. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L90-L255` → after: `L198-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L198-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L198-L205) · [Before (L90-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L90-L255)

```diff
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
-     function hG(GG, bG) {
- ... (150 more removed lines; see GitHub link above)
+ 
+       function nr() {
+         const MM = FM.trim() || null;
+         Pr({
+           searchQuery: MM,
+           ...null !== MM && !NM.current && (0, wM.n)(vM) && {
+             withFeatures: [],
+             withoutFeatures: []
```

#### 8. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L258-L268` → after: `L252-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L252-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/142.js#L252-L427) · [Before (L258-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/142.js#L258-L268)

```diff
-       return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
-     }
- 
-     function YG(GG, bG, ZG) {
-       return {
-         headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
-         ok: 0 === bG.length,
-         errors: bG.slice(0, yG),
-         moreErrors: Math.max(0, bG.length - yG),
-         offInStrict: ZG
-       }
+       return (0, gM.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+         children: [(0, gM.jsx)(mM.c, {
+           onClick: ar,
+           children: eM(null === jr ? "homePage:backToGames" : "shaderPackListing:backToSettings")
+         }), (0, gM.jsxs)("div", {
+           className: "ShaderPackBrowseHeader",
+           children: [(0, gM.jsxs)("div", {
+             className: "ShaderPackBrowseHeaderRow",
+             children: [(0, gM.jsx)("h1", {
+               className: "VisuallyHidden",
+               children: eM("shaderPackListing:title")
+             }), (0, gM.jsxs)("div", {
+               className: "ShaderPackBrowseTabs",
+               children: [(0, gM.jsx)("div", {
+                 className: aM()("ShaderPackBrowseSort", {
+ ... (160 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/143.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/143.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8)

#### 1. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L5-L2461` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/143.js#L4-L76) · [Before (L5-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/143.js#L5-L2461)

```diff
-   6716: (GG, bG, ZG) => {
-     var wG = ZG(6720);
-     bG.e = {
-       prefix: wG.prefix,
-       iconName: wG.iconName,
-       icon: [wG.width, wG.height, wG.aliases, wG.unicode, wG.svgPathData]
-     }, bG.h = bG.e, wG.prefix, wG.iconName, wG.width, wG.height, wG.aliases, wG.unicode, wG.svgPathData, wG.aliases
-   },
-   6728: (GG, bG, ZG) => {
-     var wG = ZG(6732);
-     bG.c = {
-       prefix: wG.prefix,
-       iconName: wG.iconName,
-       icon: [wG.width, wG.height, wG.aliases, wG.unicode, wG.svgPathData]
-     }, bG.f = bG.c, wG.prefix, wG.iconName, wG.width, wG.height, wG.aliases, wG.unicode, wG.svgPathData, wG.aliases
-   },
- ... (2441 more removed lines; see GitHub link above)
+   7061: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => PM
+     });
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1188),
+       aM = iM(1303);
+ 
+     function PM(MM) {
+       let {
+         item: rM,
+         className: iM
+       } = MM;
+       const {
+         t: OM
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L2464-L2471` → after: `L80-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L80-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/143.js#L80-L184) · [Before (L2464-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/143.js#L2464-L2471)

```diff
-       f: () => LG
-     });
-     var wG = {
-         prefix: "fas",
-         iconName: "shirt",
-         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
-       },
-       SG = wG,
+       h: () => LM,
+       l: () => hM
+     });
+     var OM = iM(44),
+       SM = iM(7054),
+       jM = iM(1573),
+       aM = iM(7051),
+       PM = iM(7077),
+       nM = iM(1142);
+     const QM = "shaderPackListingView",
+       zM = "shaderPackListingFilterOpen";
+ 
+     function LM() {
+       var MM;
+       const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
+       return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
+ ... (89 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/144.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/144.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5)

#### 1. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L4-L84` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L4-L6) · [Before (L4-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L4-L84)

```diff
-   8116: (GG, bG) => {
-     var ZG = "youtube",
-       wG = [61802],
-       SG = "f167",
-       LG = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     bG.c = {
-       prefix: "fab",
-       iconName: ZG,
-       icon: [576, 512, wG, SG, LG]
-     }, bG.f = bG.c
-   },
-   6853: (GG, bG) => {
-     Object.defineProperty(bG, "__esModule", {
-       value: !0
-     });
-     var ZG = "bolt",
- ... (65 more removed lines; see GitHub link above)
+   42177: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       ShaderPackCategory: () => WM
```

#### 2. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L86-L88` → after: `L8-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L8-L25) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L86-L88)

```diff
-     var wG = ZG(3271);
-     let SG = null,
-       LG = null;
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(1520),
+       aM = iM(1591),
+       PM = iM(1188),
+       nM = iM(83),
+       QM = iM(19),
+       zM = iM(1717),
+       LM = iM(7111),
+       mM = iM(308),
+       HM = iM(7142),
+       hM = iM(7134),
+       JM = iM(7148),
+       dM = iM(7051),
+       yM = iM(5401),
+       lM = iM(5430),
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L90-L108` → after: `L27-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L27-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L27-L51) · [Before (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L90-L108)

```diff
-     function yG() {
-       return LG ??= ZG.e(216).then((() => ZG(36657))).then((GG => {
-         let {
-           ITEM_SPRITES: bG,
-           ITEM_SPRITES_WITHOUT_FILE: ZG,
-           ITEM_FILES_WITHOUT_SPRITE: LG
-         } = GG;
-         SG = function(GG, bG, ZG) {
-           const SG = new Set,
-             LG = (0, wG.s)(bG);
-           let yG = 0;
-           for (const [wG, kG] of GG.entries()) wG === LG[yG] ? yG++ : SG.add(kG);
-           if ("" !== ZG)
-             for (const kG of ZG.split(wG.o)) SG.add(kG);
-           return SG
-         }(bG.split(wG.o), ZG, LG)
- ... (3 more removed lines; see GitHub link above)
+     function GM(MM, rM) {
+       const iM = (0, HM.storedPackOutcome)(MM, rM);
+       return "none" !== iM.kind || "noCompiler" === iM.reason
+     }
+     var CM = iM(1116),
+       eM = iM.n(CM),
+       bM = iM(5435),
+       wM = iM(1398),
+       tM = iM(7102),
+       gM = iM(1303);
+     const uM = {
+       ready: "shaderPack:statusReady",
+       readyAfterReload: "shaderPack:statusReadyAfterReload",
+       noWebGpu: "shaderPack:statusNoWebGpu",
+       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
+       failed: "shaderPack:statusFailed",
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L112-L113` → after: `L55-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L55-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L55-L99) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L112-L113)

```diff
-       var bG, ZG;
-       return null !== (bG = null === (ZG = SG) || void 0 === ZG ? void 0 : ZG.has(GG)) && void 0 !== bG && bG
+       let {
+         stored: rM,
+         checking: iM,
+         webGpuUsable: OM,
+         changePending: SM,
+         compiler: jM,
+         t: aM
+       } = MM;
+       const PM = function(MM, rM, iM, OM, SM) {
+           const jM = (0, HM.storedPackOutcome)(MM, SM);
+           return "none" === jM.kind ? "noCompiler" === jM.reason ? rM ? "checking" : "noCompiler" : "otherApiVersion" === jM.reason ? "wrongApiVersion" : "failed" : (0, UM.f)() ? "harnessBuild" : "blocked" === jM.kind ? (0, HM.shaderPackNeedsCheck)(MM, SM) ? rM ? "checking" : !1  … [truncated]
+         }(rM, iM, OM, SM, jM),
+         nM = "failed" === PM || "failedRecheck" === PM,
+         QM = nM || "wrongApiVersion" === PM || "noCompiler" === PM,
+         zM = "ready" === PM || "readyAfterReload" === PM ? rM.validation.offInStrict : [];
+       return (0, gM.jsxs)(gM.Fragment, {
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L125-L128` → after: `L102-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L102-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L102-L211) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L125-L128)

```diff
-     function yG() {
-       return SG ??= ZG.e(62).then((() => ZG(61162))).catch((GG => {
-         throw SG = null, GG
-       })), SG
+     function WM(MM) {
+       let {
+         setApplySettingsCallback: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, PM.A)(), [SM, aM] = (0, OM.useState)(null), [QM, zM] = (0, OM.useState)(null), [UM, CM] = (0, OM.useState)(null), [eM] = (0, OM.useState)(mM.k), [bM, wM] = (0, OM.useState)(!0), [tM, uM] = (0, OM.useState)(!1), {
+         loading: RM,
+         error: WM,
+         setError: DM,
+         onFiles: kM
+       } = (0, EM.e)((async MM => {
+         const rM = await (0, LM.loadPageShaderPackCompiler)();
+         if (!rM) return void DM(iM("shaderPack:compilerUnavailable"));
+         zM(rM);
+         const OM = (0, HM.toStoredShaderPack)(MM, await (0, hM.f)(rM, MM.files));
+ ... (94 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L131-L137` → after: `L214-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L214-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L214-L234) · [Before (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L131-L137)

```diff
-     function kG() {
-       return LG ??= Promise.all([yG(), (0, wG.f)()]).then((GG => {
-         let [bG] = GG;
-         return bG
-       }), (GG => {
-         throw LG = null, GG
-       })), LG
+     function sM(MM) {
+       let {
+         to: rM,
+         className: iM,
+         children: OM
+       } = MM;
+       const {
+         gameState: jM
+       } = (0, QM.m)(["gameState"]), {
+         pathname: PM,
+         search: nM
+       } = (0, SM.u)(), LM = "landingPage" !== jM && "studio" !== jM;
+       return (0, gM.jsx)(aM.LinkPreserveSearch, {
+         to: rM,
+         className: iM,
+         target: LM ? "_blank" : void 0,
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L140` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L237) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L140)

```diff
-   43037: (GG, bG, ZG) => {
+   7051: (MM, rM, iM) => {
```

#### 8. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L144` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L254) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L144)

```diff
-       i: () => gG,
+       h: () => mM,
```

#### 9. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L146-L149` → after: `L256-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L256-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L256-L263) · [Before (L146-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L146-L149)

```diff
-       k: () => RG,
-       l: () => bb,
-       m: () => nG,
-       p: () => qG
+       jb: () => uM,
+       n: () => pM,
+       q: () => HM,
+       r: () => WM,
+       u: () => YM,
+       w: () => hM,
+       x: () => yM,
+       z: () => gM
```

#### 10. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L151-L194` → after: `L265-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L265-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L265-L269) · [Before (L151-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L151-L194)

```diff
-     var wG = ZG(4487),
-       SG = ZG(4508),
-       LG = ZG(34492),
-       yG = ZG(3267),
-       kG = ZG(3265),
-       UG = ZG(1060),
-       YG = ZG(41199),
-       VG = ZG(80),
-       pG = ZG(1222),
-       fG = ZG(41344),
-       QG = ZG(41432),
-       KG = ZG(8116),
-       hG = ZG(7572),
-       dG = ZG(7712),
-       JG = ZG(7806),
-       rG = ZG(7954),
- ... (28 more removed lines; see GitHub link above)
+     var OM = iM(7054),
+       SM = iM(143),
+       jM = iM(4937);
+     const aM = "/shader-packs",
+       PM = `${aM}/publish`;
```

#### 11. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L197-L200` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L272) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L197-L200)

```diff
-       return GG.split(",").map((GG => {
-         const [bG, ZG = bG] = GG.slice(2).split("-");
-         return [parseInt(bG, 16), parseInt(ZG, 16)]
-       }))
+       return `${aM}/${encodeURIComponent(MM)}`
```

#### 12. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L202-L206` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L274) · [Before (L202-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L202-L206)

```diff
-     const vG = {
-         latin: FG(mG),
-         rest: FG(IG)
-       },
-       aG = new RegExp(`[${vG.rest.map((GG=>{let[bG,ZG]=GG;return`\\u{${bG.toString(16)}}-\\u{${ZG.toString(16)}}`})).join("")}]`, "u");
+     let QM = null;
```

#### 13. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L209-L211` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L277) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L209-L211)

```diff
-       return bG => {
-         console.warn(`[bloxd-wasm-client] the text font's ${GG} file did not load`, bG)
-       }
+       QM = MM
```

#### 14. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L231-L266` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L285-L286) · [Before (L231-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L231-L266)

```diff
-       AG++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? sG = "all" : "none" === sG && (sG = "notBoards")
-     }(0, UG.w)((() => {
-       (function() {
-         const GG = uG;
-         return uG = !1, GG
-       })() && nG(!1)
-     }));
-     const gG = new class {
-       constructor(GG) {
-         this.loaded = GG, this.latin = null, this.rest = null, this.restWanted = !1
-       }
-       load() {
-         if (null === this.latin) {
-           this.latin = new FontFace(WG, `url(${(0,CG.g)()}) format("woff2")`, {
-             unicodeRange: mG
-           }).load().then((GG => {
- ... (20 more removed lines; see GitHub link above)
+       QM = null
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L269` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L289) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L269)

```diff
-       Object.assign(PG, GG), PG.loadsFontRest && gG.loadRest(), nG(!1)
+       return MM.playerHasRank("developer") || MM.playerHasRank("admin")
```

#### 16. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L272-L273` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L300-L301) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L272-L273)

```diff
-     function RG(GG) {
-       GG !== MG && (MG = GG, nG())
+     function dM(MM, rM) {
+       return MM.withFeatures.includes(rM) ? "with" : MM.withoutFeatures.includes(rM) ? "without" : null
```

#### 17. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L277-L278` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L305) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L277-L278)

```diff
-       if ("none" === sG || null === GG) return;
-       GG(lG, "all" === sG ? 0 : jG, new Uint8Array(0)) && (sG = "none")
+       return null === MM ? "with" : "with" === MM ? "without" : null
```

#### 18. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L283-L322` → after: `L308-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L308-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L308-L310) · [Before (L283-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L283-L322)

```diff
-     function DG(GG, bG, ZG) {
-       var wG;
-       const SG = ZG ? `${GG}#${ZG.join(",")}` : GG,
-         LG = HG.get(SG);
-       if (LG) return LG.image;
-       const yG = {
-         image: null !== (wG = tG.get(SG)) && void 0 !== wG ? wG : null
-       };
-       return HG.set(SG, yG), bG().then((async GG => {
-         if (null === GG) return null;
-         const bG = new Image;
-         bG.crossOrigin = "anonymous", bG.src = GG, await bG.decode();
-         const wG = await createImageBitmap(bG);
-         if (!ZG) return wG;
-         try {
-           return function(GG, bG) {
- ... (24 more removed lines; see GitHub link above)
+     function lM(MM) {
+       return "with" === MM ? "only" : null === MM ? "include" : void 0
+     }
```

#### 19. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L324-L325` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L312-L318) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L324-L325)

```diff
-     function xG() {
-       (0, QG.g)().catch((() => {}))
+     function EM(MM, rM) {
+       const iM = dM(MM, rM),
+         OM = MM => MM.filter((MM => MM !== rM));
+       return {
+         withFeatures: null === iM ? [...MM.withFeatures, rM] : OM(MM.withFeatures),
+         withoutFeatures: "with" === iM ? [...MM.withoutFeatures, rM] : OM(MM.withoutFeatures)
+       }
```

#### 20. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L329-L384` → after: `L329-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L329-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L329-L340) · [Before (L329-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L329-L384)

```diff
-       return NG.has(GG) ? DG(`icon:${GG}`, (async () => {
-         var bG, ZG;
-         return null !== (bG = null === (ZG = (0, fG.k)()) || void 0 === ZG ? void 0 : ZG.textureUrl(GG)) && void 0 !== bG ? bG : (await (0, QG.d)()).ingameIconUrl(GG)
-       })) : null
-     }
-     let Gb = "unasked";
-     const bb = {
-       get canSeeRealPlayerNames() {
-         return VG.featureFlags.canSeeRealPlayerNames
-       },
-       get canSeePlayerWrittenText() {
-         return VG.featureFlags.canSeePlayerWrittenText
-       },
-       get localPlayerDbId() {
-         return MG
-       },
- ... (40 more removed lines; see GitHub link above)
+       var rM, iM, SM;
+       const aM = MM.get(UM),
+         PM = (null !== (rM = MM.get(CM)) && void 0 !== rM ? rM : tM).split(","),
+         nM = MM.get(bM);
+       return {
+         section: "favourites" === aM || "mine" === aM ? aM : "explore",
+         sort: null !== (iM = OM.y.find((rM => rM === MM.get(GM)))) && void 0 !== iM ? iM : wM,
+         withFeatures: hM.filter((MM => PM.includes(MM) && !PM.includes(`-${MM}`))),
+         withoutFeatures: hM.filter((MM => PM.includes(`-${MM}`))),
+         searchQuery: (null === (SM = MM.get(eM)) || void 0 === SM ? void 0 : SM.slice(0, OM.M)) || null,
+         pageNumber: (0, jM.d)(MM.get(jM.c)),
+         banned: "only" === nM ? "with" : "include" === nM ? null : "without"
```

#### 21. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L409-L410` → after: `L344-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L344-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L344-L347) · [Before (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L409-L410)

```diff
-     function VG(GG) {
-       return `bolder ${GG}px 'Jetbrains Mono'`
+     function uM(MM, rM) {
+       var iM;
+       const OM = sM(rM);
+       (0, jM.f)(MM, UM, "explore" === rM.section ? null : rM.section), (0, jM.f)(MM, GM, rM.sort === wM ? null : rM.sort), (0, jM.f)(MM, CM, OM === tM ? null : OM), (0, jM.f)(MM, eM, rM.searchQuery), (0, jM.f)(MM, bM, null !== (iM = lM(rM.banned)) && void 0 !== iM ? iM : null), ( … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L414` → after: `L351-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L351-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L351-L360) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L414)

```diff
-       return "object" === typeof GG && null !== GG
+       const rM = new URLSearchParams;
+       return uM(rM, {
+         section: "explore",
+         sort: wM,
+         withFeatures: "strict" === MM ? [MM] : [MM, "strict"],
+         withoutFeatures: [],
+         searchQuery: null,
+         pageNumber: 1,
+         banned: "without"
+       }), `${aM}?${rM.toString()}`
```

#### 23. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L417-L419` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L363-L364) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L417-L419)

```diff
-     function fG(GG, bG) {
-       const ZG = "number" === typeof GG ? GG : "string" === typeof GG ? Number(GG.replace("px", "")) : NaN;
-       return Number.isFinite(ZG) && ZG > 0 ? ZG : bG
+     function pM(MM) {
+       return sM(MM) === tM
```

#### 24. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L423` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L368) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L423)

```diff
-       return pG(GG) ? GG : void 0
+       return null !== MM.searchQuery || "with" === MM.banned || sM(MM) !== tM
```

#### 25. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L427-L428` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L372-L375) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L427-L428)

```diff
-       const bG = "number" === typeof GG ? yG.q[GG] : GG;
-       return "string" === typeof bG && Object.hasOwn(yG.i, bG) ? yG.i[bG] : void 0
+       return hM.flatMap((rM => {
+         const iM = dM(MM, rM);
+         return "with" === iM ? [rM] : "without" === iM ? [`-${rM}`] : []
+       })).join(",")
```

#### 26. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L431-L432` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L390-L391) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L431-L432)

```diff
-     function hG(GG, bG) {
-       return "string" === typeof GG ? GG : pG(GG) ? "string" === typeof GG.translationKey ? bG.translate(GG.translationKey, GG.params).map((GG => "string" === typeof GG ? GG : GG.icon)).join("") : "string" === typeof GG.entityName ? bG.shownPlayerName(GG.entityName) : "" : void 0 … [truncated]
+     function ZM(MM) {
+       return Math.round(100 * Math.max(0, 1 - 1 / MM))
```

#### 27. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L438-L461` → after: `L396-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L396-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L396-L417) · [Before (L438-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L438-L461)

```diff
-       for (const VG of GG) {
-         var LG, yG;
-         if (pG(VG) && "chatTag" in VG) {
-           SG.push({
-             kind: "rank",
-             rank: VG
-           });
-           continue
-         }
-         if (pG(VG) && "icon" in VG && !("mainRGB" in VG)) {
-           var YG;
-           SG.push({
-             kind: "icon",
-             icon: String(VG.icon),
-             size: fG(null === (YG = QG(VG.style)) || void 0 === YG ? void 0 : YG.fontSize, UG.DEFAULT_FONT_SIZE)
-           });
- ... (8 more removed lines; see GitHub link above)
+       MM.isBanned && jM.push({
+         tone: "warning",
+         text: SM("shaderPackListing:ownerBanned"),
+         detail: null
+       });
+       const {
+         pending: aM
+       } = MM;
+       if (null === MM.brokenError || aM && !aM.error || jM.push({
+           tone: "warning",
+           text: SM("shaderPackListing:ownerBroken"),
+           detail: MM.brokenError
+         }), null !== aM && void 0 !== aM && aM.error) jM.push({
+         tone: "warning",
+         text: SM(rM ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, OM.m)(aM.error) ? null : aM.error
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L486-L489` → after: `L420-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L420-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L420-L422) · [Before (L486-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L486-L489)

```diff
-           kind: "text",
-           text: hG(GG, ZG),
-           size: dG,
-           colour: JG
+           tone: "info",
+           text: PM,
+           detail: null
```

#### 29. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L492-L502` → after: `L425-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L425-L429) · [Before (L492-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L492-L502)

```diff
-       return SG
-     }
- 
-     function JG(GG) {
-       return void 0 !== GG && "rank" !== GG.kind
-     }
- 
-     function rG(GG, bG) {
-       const ZG = JG(GG),
-         wG = JG(bG);
-       return void 0 === GG && !wG || !ZG && void 0 === bG ? 0 : ZG !== wG ? .5 * UG.HORIZONTAL_PADDING : 0
+       return MM.listed || jM.push({
+         tone: "info",
+         text: SM("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), jM
```

#### 30. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L506` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L433) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L506)

```diff
-       return "rank" === GG.kind ? UG.DEFAULT_FONT_SIZE : GG.size
+       return Math.max(1, Math.round(MM / 1024))
```

#### 31. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L510-L513` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L437) · [Before (L510-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L510-L513)

```diff
-       return "icon" === GG.kind ? GG.size : "rank" === GG.kind ? function(GG, bG) {
-         const ZG = bG.rankIcon(GG.rank.icon);
-         return ZG ? YG * (ZG.width / ZG.height) : YG
-       }(GG, ZG) + UG.HORIZONTAL_PADDING : (ZG.glyphsShown(GG.text), bG.font = VG(GG.size), bG.measureText(GG.text).width)
+       return MM instanceof SM.e && MM.errorMessageForUser ? MM.errorMessageForUser : rM(iM)
```

#### 32. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L515-L691` → after: `L439-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L439-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L439-L473) · [Before (L515-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L515-L691)

```diff
- 
-     function oG(GG, bG, ZG) {
-       if (0 === GG.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
-       };
-       let wG = 0;
-       for (const yG of GG) wG = Math.max(wG, zG(yG));
-       const SG = [];
-       let LG = rG(void 0, GG[0]);
-       for (let yG = 0; yG < GG.length; yG++) {
-         const wG = LG;
-         LG += EG(GG[yG], bG, ZG), LG += rG(GG[yG], GG[yG + 1]), SG.push({
-           x: wG,
-           width: LG - wG
- ... (161 more removed lines; see GitHub link above)
+   },
+   7054: (MM, rM, iM) => {
+     iM.d(rM, {
+       D: () => aM,
+       E: () => OM,
+       I: () => mM,
+       M: () => zM,
+       Q: () => UM,
+       U: () => LM,
+       V: () => QM,
+       b: () => hM,
+       e: () => dM,
+       g: () => JM,
+       k: () => HM,
+       m: () => EM,
+       q: () => CM,
+ ... (19 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L693-L699` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L475-L476) · [Before (L693-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L693-L699)

```diff
-       }
-     }
-     var mG = ZG(4487),
-       IG = ZG(1230),
-       FG = ZG(2013);
-     const vG = 10,
-       aG = 3,
+       },
+       jM = ["popular", "updated", "newest"],
```

#### 34. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L701-L727` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L478-L479) · [Before (L701-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L701-L727)

```diff
-       lG = [{
-         healthFraction: .25,
-         colour: "#ff0000"
-       }, {
-         healthFraction: .5,
-         colour: "#ffaa00"
-       }, {
-         healthFraction: 1,
-         colour: "#00ff00"
-       }],
-       jG = 64,
-       PG = 69,
-       MG = {
-         icon: FG.c,
-         mainRGB: "transparent",
-         chatTag: [],
- ... (11 more removed lines; see GitHub link above)
+       PM = 32,
+       nM = 300;
```

#### 35. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L730` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L482) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L730)

```diff
-       return "string" === typeof GG ? fG(GG, bG) : bG
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
```

#### 36. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L734-L740` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L489-L491) · [Before (L734-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L734-L740)

```diff
-       return qG(GG.width, aG)
-     }
- 
-     function gG(GG, bG) {
-       var ZG;
-       const wG = null !== (ZG = GG.applyTo) && void 0 !== ZG ? ZG : "both";
-       return "both" === wG || wG === bG
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+       return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L744-L745` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L497) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L744-L745)

```diff
-       const bG = nG(GG);
-       return "glow" === GG.style ? bG * cG : Math.ceil(bG / 2) + 1
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
```

#### 38. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L747-L952` → after: `L499-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L499-L500) · [Before (L747-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L747-L952)

```diff
- 
-     function RG(GG, bG, ZG) {
-       var wG, SG;
-       const LG = null !== (wG = AG(GG.info)) && void 0 !== wG ? wG : {},
-         kG = "string" === typeof GG.name ? GG.name : "",
-         YG = LG.subtitle;
-       if (Array.isArray(LG.content) && 0 === LG.content.length && !(Array.isArray(YG) && YG.length > 0)) return null;
-       const VG = "number" === typeof GG.hideNameSeed ? GG.hideNameSeed : null,
-         pG = "" === kG || !0 === GG.mesh ? kG : (0, IG.b)(kG, !ZG.canSeeRealPlayerNames, VG);
-       if (!pG && !LG.content) return null;
-       const fG = "string" === typeof GG.colour ? GG.colour : "default",
-         QG = Object.hasOwn(yG.o, fG) ? yG.o[fG] : void 0,
-         hG = LG.content ? dG(LG.content, UG.DEFAULT_FONT_SIZE, ZG, QG) : [{
-           kind: "text",
-           text: pG,
-           size: UG.DEFAULT_FONT_SIZE,
- ... (190 more removed lines; see GitHub link above)
+     const yM = "Screenshot generation failed.",
+       lM = "Its screenshots couldn't be generated:";
```

#### 39. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L955-L967` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L503-L504) · [Before (L955-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L955-L967)

```diff
-       xG.i.load().then((() => {
-         if (GG()) return;
-         const bG = (0, SG.f)(1, 1, {
-           willReadFrequently: !0
-         });
-         var ZG;
-         bG && (ZG = bG.canvas, Kb.map((GG => Xb(GG, ZG))))
-       }))
-     }
-     let db = xG.p;
- 
-     function Jb() {
-       Ub.clear(), Yb.clear()
+       var rM;
+       return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
```

#### 40. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L971-L976` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L508) · [Before (L971-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L971-L976)

```diff
-       const ZG = GG.get(bG);
-       return void 0 !== ZG && (GG.delete(bG), GG.set(bG, ZG)), ZG
-     }
- 
-     function zb(GG, bG, ZG) {
-       GG.set(bG, ZG), GG.size > bb && GG.delete(GG.keys().next().value)
+       return `shaderPacks/${MM}/${rM}.json`
```

#### 41. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L979-L1056` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L511-L512) · [Before (L979-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L979-L1056)

```diff
-     function Eb(GG, bG, ZG) {
-       if (GG === BG.Nametag) {
-         let GG = rb(Ub, bG);
-         return void 0 === GG && (GG = RG(JSON.parse(bG), ZG, yb), zb(Ub, bG, GG)), GG
-       }
-       if (GG === BG.MultilineText) {
-         var SG;
-         const GG = JSON.parse(bG),
-           wG = JSON.stringify(null !== (SG = GG.box) && void 0 !== SG ? SG : null),
-           LG = "number" === typeof GG.shown ? GG.shown : null;
-         let yG = rb(Yb, wG);
-         void 0 === yG && (yG = WG(GG.box, ZG, yb), zb(Yb, wG, yG));
-         const kG = null === LG ? null : Math.min(Math.max(0, Math.floor(LG)), yG.chars),
-           UG = yG;
-         return {
-           width: UG.width,
- ... (62 more removed lines; see GitHub link above)
+     function GM(MM, rM, iM, OM) {
+       return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
```

#### 42. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L1060-L1106` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/144.js#L515-L516) · [Before (L1060-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/144.js#L1060-L1106)

```diff
-     function Xb(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (GG.length < 2) return [0, 0];
-         const LG = (0, SG.d)(bG);
-         if (!LG) return [0, 0];
-         const yG = db();
-         yG !== kb && (kb = yG, Jb());
-         const [kG] = GG, UG = Lb.decode(GG.subarray(1));
-         let YG;
-         kG !== BG.Board && kG !== BG.Leaderboard || !yb.canSeePlayerWrittenText || yb.glyphsShown(UG), LG.save();
-         try {
-           YG = Eb(kG, UG, LG)
-         } finally {
-           LG.restore()
- ... (31 more removed lines; see GitHub link above)
+     function CM(MM, rM, iM, OM) {
+       return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/145.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/145.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977)

#### 1. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/145.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/145.js#L2)

```diff
- export const ids = [145];
+ export const ids = [145, 151, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/145.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/145.js#L4)

```diff
-   8119: (GG, bG, ZG) => {
+   41591: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/145.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/145.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => SG
+       b: () => LM,
+       installListedShaderPack: () => zM
```

#### 4. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L8-L11` → after: `L9-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L9-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/145.js#L9-L497) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/145.js#L8-L11)

```diff
-     var wG = ZG(3766);
- 
-     function SG(GG) {
-       return wG.f.toBuffer(GG)
+     var OM = iM(7054),
+       SM = iM(5442),
+       jM = iM(1202),
+       aM = iM(7111),
+       PM = iM(5435),
+       nM = iM(7142),
+       QM = iM(7134);
+     async function zM(MM) {
+       const rM = await (0, aM.loadPageShaderPackCompiler)();
+       if (null === rM) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const iM = await LM(MM, rM);
+       return "failed" === iM.kind ? iM : await (0, nM.saveShaderPack)(iM.stored, rM) ? ((0, nM.markShaderPackChangePending)(), iM) : {
+         kind: "failed",
+ ... (473 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/146.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/146.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af)

#### 1. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/146.js#L4-L89) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/146.js#L4)

```diff
-   8127: (GG, bG, ZG) => {
+   44398: (MM, rM, iM) => {
+     iM.d(rM, {
+       startHarnessShaderPack: () => LM
+     });
+     var OM = iM(7054),
+       SM = iM(5442),
+       jM = iM(7131),
+       aM = iM(7111),
+       PM = iM(5435),
+       nM = iM(40300),
+       QM = iM(7120),
+       zM = iM(7134);
+     async function LM(MM, rM) {
+       const {
+         stored: iM,
+         info: LM
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L6-L8` → after: `L91-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L91-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/146.js#L91-L104) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/146.js#L6-L8)

```diff
-       BloxdDiscordSDK: () => hG,
-       DiscordLoginCancelledError: () => KG,
-       discordPopupTimeoutMs: () => QG
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
```

#### 3. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L10-L109` → after: `L106-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L106-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/146.js#L106-L238) · [Before (L10-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/146.js#L10-L109)

```diff
-     var wG = ZG(140),
-       SG = ZG(1185),
-       LG = ZG(1096),
-       yG = ZG(1117),
-       kG = ZG.n(yG),
-       UG = ZG(1163),
-       YG = ZG(29),
-       VG = ZG(604),
-       pG = ZG(1311),
-       fG = ZG(1036);
-     const QG = 6e5;
-     class KG extends Error {
-       constructor() {
-         super(...arguments), this.name = LG.discordLoginCancelledErrorName
-       }
-     }
- ... (84 more removed lines; see GitHub link above)
+     var OM = iM(5442),
+       SM = iM(5435),
+       jM = iM(30),
+       aM = iM(3855),
+       PM = iM(7148),
+       nM = iM(7120);
+     const QM = "shaderPackChangePending";
+     let zM = null;
+ 
+     function LM(MM, rM, iM) {
+       return {
+         manifest: MM.manifest,
+         files: (0, OM.w)(MM.files),
+         validation: rM,
+         ...iM && {
+           listing: iM
+ ... (117 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L113-L125` → after: `L241-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L241-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/146.js#L241-L268) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/146.js#L113-L125)

```diff
-           const wG = await kG()((async () => {
-             try {
-               return await (0, LG.postJsonWithMetricsCookiesAndJsonResponse)(`${UG.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: bG
-               }, {
-                 retries: 0
-               }, GG.getMetricsCookies())
-             } catch (ZG) {
-               if (dG(ZG)) throw new(kG().AbortError)(ZG);
-               throw ZG
-             }
-           }), {
-             retries: 3
+           const rM = await (0, jM.z)(MM);
+           return rM ? await rM.requestDevice() : null
+         } catch (rM) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
+         }
+       }(OM);
+       if (!PM) return null;
+       let nM = !1;
+       PM.lost.then((() => {
+         nM = !0
+       }));
+       try {
+         const rM = await Promise.all(aM.validationModules.map((rM => async function(MM, rM, iM) {
+           rM.pushErrorScope("validation");
+           const OM = rM.createShaderModule({
+               code: iM.code
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L127-L141` → after: `L270-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L270-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/146.js#L270-L381) · [Before (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/146.js#L127-L141)

```diff
-           ZG = wG.accessToken, YG.c.setItem(this.bloxdDiscordRefreshTokenKey, wG.refreshToken)
-         } catch (wG) {
-           return dG(wG) ? (YG.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", wG), null)
-         }
-         return {
-           accessToken: ZG
-         }
-       }
-       signOut() {
-         this.failPopup(new KG("Signed out of Discord during login")), YG.c.removeItem(this.bloxdDiscordRefreshTokenKey)
-       }
-     }
- 
-     function dG(GG) {
-       return GG instanceof wG.b && 435 === GG.httpCode
+           return aM
+         }(MM, PM, rM))));
+         return nM ? null : QM(MM, MM.ciM(rM.flat()), aM.offInStrict)
+       } catch (zM) {
+         return console.error("Couldn't validate the shader pack on WebGPU.", zM), null
+       } finally {
+         PM.destroy()
+       }
+     }
+     async function nM(MM, rM) {
+       var iM;
+       if (!(0, OM.shaderPackNeedsCheck)(MM, rM) || (0, OM.isOtherApiVersion)(MM)) return MM;
+       const SM = await PM(rM, (0, OM.storedShaderPackFiles)(MM));
+       if (!SM) return MM;
+       const jM = !1 === (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) && !MM.validation.fromRecheck,
+         aM = {
+ ... (96 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/147.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/147.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05)

#### 1. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L2)

```diff
- export const ids = [147];
+ export const ids = [147, 220];
```

#### 2. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4-L77` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L4-L21) · [Before (L4-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L4-L77)

```diff
-   8132: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       BloxdFirebaseSdk: () => fG
-     });
-     var wG = ZG(1815),
-       SG = ZG(2897),
-       LG = ZG(86),
-       yG = ZG(80),
-       kG = ZG(1634),
-       UG = ZG(2021);
-     const YG = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
- ... (58 more removed lines; see GitHub link above)
+   35026: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => jM
+     });
+     var OM = iM(332),
+       SM = iM(35029);
+ 
+     function jM(MM, rM, iM) {
+       const jM = Object.entries(rM).sort(((MM, rM) => rM[1] - MM[1])),
+         aM = (0, OM.ob)(MM);
+       aM.push(MM ? "\n\n" : "\n");
+       for (const [SM, hM] of jM) {
+         var PM, nM, QM;
+         const MM = null !== (PM = null === iM || void 0 === iM || null === (nM = iM[SM]) || void 0 === nM ? void 0 : nM.icon) && void 0 !== PM ? PM : `${SM} Enchantment`;
+         aM.push({
+           icon: MM,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L79-L80` → after: `L23-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L23-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L23-L38) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L79-L80)

```diff
-           onIdTokenChanged(GG) {
-             QG.onIdTokenChanged(JG, GG)
+         }), aM.push({
+           str: `${SM} ${null!==(QM=(0,OM.T)(hM))&&void 0!==QM?QM:hM}\n`
+         })
+       }
+       aM.push({
+         str: "\n"
+       });
+       for (const [OM, hM] of jM) {
+         var zM, LM, mM, HM;
+         const MM = null !== (zM = null === iM || void 0 === iM || null === (LM = iM[OM]) || void 0 === LM ? void 0 : LM.icon) && void 0 !== zM ? zM : `${OM} Enchantment`,
+           rM = null !== (mM = null === iM || void 0 === iM || null === (HM = iM[OM]) || void 0 === HM ? void 0 : HM.description) && void 0 !== mM ? mM : (0, SM.k)(OM);
+         aM.push({
+           icon: MM,
+           style: {
+             fontSize: "1.25rem",
+             opacity: .75
```

#### 4. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L82-L83` → after: `L40-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L40-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L40-L45) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L82-L83)

```diff
-           canSignIn() {
-             return !0
+         }), aM.push({
+           str: rM,
+           style: {
+             fontSize: "0.8em",
+             fontWeight: "normal",
+             opacity: .75
```

#### 5. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L85-L88` → after: `L47-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L47-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L47-L124) · [Before (L85-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L85-L88)

```diff
-           async signInWithPopup(GG) {
-             var bG;
-             const ZG = await QG.signInWithPopup(JG, oG[GG]);
-             return null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.user) && void 0 !== bG ? bG : null
+         }), aM.push({
+           str: "\n"
+         })
+       }
+       return aM
+     }
+   },
+   35035: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => QM,
+       c: () => lM,
+       f: () => dM,
+       j: () => nM,
+       l: () => yM,
+       o: () => zM,
+       q: () => mM,
+ ... (62 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L90-L96` → after: `L126-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L126-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L126-L196) · [Before (L90-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L90-L96)

```diff
-           async getCurrentUser(GG) {
-             const bG = JG.currentUser;
-             if (!bG) return null;
-             const {
-               signInProvider: ZG
-             } = await bG.getIdTokenResult(!1);
-             return ZG === wG.f[GG] ? bG : null
+         }))
+       }(eM.customDescription, eM)) && void 0 !== yM ? yM : null === (lM = rM[MM.name]) || void 0 === lM ? void 0 : lM.description) && void 0 !== dM ? dM : null === (EM = rM[bM]) || void 0 === EM ? void 0 : EM.description) && void 0 !== hM ? hM : "";
+       let RM = uM;
+       if (null !== (UM = eM.customAttributes) && void 0 !== UM && UM.enchantments) RM = (0, PM.e)(uM, eM.customAttributes.enchantments, eM.customAttributes.enchantmentData);
+       else if (iM[bM]) RM = (0, jM.ob)(uM), RM.push({
+         str: "\n"
+       }), RM.push({
+         str: "Enchantable",
+         style: {
+           fontSize: "0.8em",
+           fontWeight: "normal",
+           opacity: .4
+         }
+       });
+       else if (null !== (GM = eM.customAttributes) && void 0 !== GM && GM.mobSettings) {
+         var pM, WM;
+ ... (55 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L98-L99` → after: `L198-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L198-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L198-L203) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L98-L99)

```diff
-           async signOut(GG) {
-             null !== await this.getCurrentUser(GG) && await QG.signOut(JG)
+         }), RM.push({
+           str: " "
+         }), RM.push({
+           icon: null !== (sM = null === (DM = MM.tameInfo) || void 0 === DM ? void 0 : DM.saddleItemName) && void 0 !== sM ? sM : "Saddle",
+           style: {
+             fontSize: "1.5em"
```

#### 8. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L101-L106` → after: `L205-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L205-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L205-L219) · [Before (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L101-L106)

```diff
-         }
-         async function uG(GG, bG) {
-           const ZG = await kG.c.request(`${GG}.${bG}`, {});
-           if (null === ZG) return null;
-           const wG = "google" === GG ? QG.GoogleAuthProvider.credential(ZG.idToken) : zG.credential({
-             idToken: ZG.idToken
+         });
+         if (RM.push({
+             str: "\n"
+           }), RM.push({
+             str: "\n"
+           }), MM.petInfo && null !== (pM = MM.tameInfo) && void 0 !== pM && pM.supportsFriendship) {
+           const rM = aM.d.getIconsFromFriendshipPoints(MM.petInfo.friendshipPoints);
+           for (const MM of rM) RM.push({
+             icon: MM,
+             style: {
+               fontSize: "1.5em"
+             }
+           });
+           RM.push({
+             str: "\n"
```

#### 9. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L108` → after: `L221-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L221-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L221-L235) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L108)

```diff
-           return (await QG.signInWithCredential(JG, wG)).user
+           const iM = aM.d.getMobHungerLevel(MM.petInfo.lastFedAt);
+           for (const MM of aM.d.hungerLevelIcons[iM]) RM.push({
+             icon: MM,
+             style: {
+               fontSize: "1.5em"
+             }
+           });
+           RM.push({
+             str: " "
+           }), RM.push({
+             str: aM.d.hungerLevelTranslations[iM],
+             style: {
+               fontWeight: "bolder"
+             }
+           })
```

#### 10. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L110-L127` → after: `L237-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L237-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L237-L246) · [Before (L110-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L110-L127)

```diff
-         class iG extends fG {
-           setUserProperties(GG) {
-             bG.setUserProperties(hG, GG)
-           }
-           onIdTokenChanged(GG) {
-             QG.onIdTokenChanged(JG, GG)
-           }
-           canSignIn(GG) {
-             return null !== (0, UG.e)(GG)
-           }
-           async signInWithPopup(GG) {
-             const bG = (0, UG.e)(GG);
-             if (null === bG) return console.warn(`The app can't sign in with ${GG}; check canSignIn first`), null;
-             try {
-               return await uG(bG, "signIn")
-             } catch (ZG) {
- ... (2 more removed lines; see GitHub link above)
+         if (MM.tameInfo && null !== (WM = MM.tameInfo) && void 0 !== WM && WM.supportsFriendship) {
+           var kM, ZM;
+           let rM = null !== (kM = MM.tameInfo.likedFoods) && void 0 !== kM ? kM : [];
+           RM.push({
+             str: "\n"
+           }), RM.push({
+             icon: "Pixelated Heart",
+             style: {
+               fontSize: "1.5em",
+               color: aM.d.feedTextColours[aM.d.MobFoodType.Superliked]
```

#### 11. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L129-L136` → after: `L248-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L248-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L248-L253) · [Before (L129-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L129-L136)

```diff
-           }
-           async getCurrentUser(GG) {
-             const bG = JG.currentUser;
-             if (bG) {
-               const {
-                 signInProvider: ZG
-               } = await bG.getIdTokenResult(!1);
-               if (ZG === wG.f[GG]) return bG
+           }), RM.push({
+             str: " "
+           }), null !== (ZM = MM.petInfo) && void 0 !== ZM && ZM.superlikedFoodKnown ? (RM.push({
+             icon: MM.petInfo.superlikedFood,
+             style: {
+               fontSize: "1.5em"
```

#### 12. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L138-L143` → after: `L255-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L255-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L255-L274) · [Before (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L138-L143)

```diff
-             const ZG = (0, UG.e)(GG);
-             if (null === ZG) return null;
-             try {
-               return await uG(ZG, "getCurrentUser")
-             } catch (SG) {
-               return console.error(`Failed to get the current ${GG} user from the app:`, SG), null
+           }), rM = rM.filter((rM => rM !== MM.petInfo.superlikedFood))) : RM.push({
+             icon: "Question Mark",
+             style: {
+               fontSize: "1.5em"
+             }
+           }), RM.push({
+             str: "\n"
+           }), RM.push({
+             icon: "Pixelated Heart",
+             style: {
+               fontSize: "1.5em",
+               color: aM.d.feedTextColours[aM.d.MobFoodType.Liked]
+             }
+           }), RM.push({
+             str: " "
+           });
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L146-L156` → after: `L297-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L297-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L297-L303) · [Before (L146-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L146-L156)

```diff
-           async signOut(GG) {
-             const bG = (0, UG.e)(GG);
-             null !== bG && kG.c.request(`${bG}.signOut`, {}).catch((bG => {
-               console.error(`Failed to sign out of ${GG} in the app:`, bG)
-             }));
-             const ZG = JG.currentUser;
-             if (ZG) {
-               const {
-                 signInProvider: bG
-               } = await ZG.getIdTokenResult(!1);
-               bG === wG.f[GG] && await QG.signOut(JG)
+           RM.push({
+             str: "\n"
+           }), RM.push({
+             icon: "Pixelated Heart",
+             style: {
+               fontSize: "1.5em",
+               color: aM.d.feedTextColours[aM.d.MobFoodType.Disliked]
```

#### 14. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L160` → after: `L1409-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L1409-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/147.js#L1409-L1507) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/147.js#L160)

```diff
-         return (0, yG.isMobileApp)() ? (await kG.c.ready, new iG) : new XG
+       };
+ 
+     function PM(MM, rM) {
+       MM instanceof Promise ? MM.then(rM).catch((MM => {
+         console.error("Couldn't open the preview", MM)
+       })) : rM(MM)
+     }
+     class nM {
+       constructor(MM) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, PM(MM, (MM => {
+           this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height), null !== this.view && MM.show(this.view))
+         }))
+       }
+       show(MM) {
+         var rM;
+         this.view = MM, null === (rM = this.opened) || void 0 === rM || rM.show(MM)
+ ... (83 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/148.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/148.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162)

#### 1. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L2)

```diff
- export const ids = [148];
+ export const ids = [148, 151, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L4-L6)

```diff
-   8134: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       BloxdDiscordActivitySdk: () => zG
+   7102: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM
```

#### 3. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L8-L27` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L8-L9) · [Before (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L8-L27)

```diff
-     var wG = ZG(8142),
-       SG = ZG(1185),
-       LG = ZG(1151),
-       yG = ZG(604),
-       kG = ZG(1204),
-       UG = ZG(1702),
-       YG = ZG(1287),
-       VG = ZG(751),
-       pG = ZG(17),
-       fG = ZG(1036),
-       QG = ZG(2351),
-       KG = function(GG) {
-         return GG.APPLICATION_COMMANDS = "applications.commands", GG.IDENTIFY = "identify", GG.EMAIL = "email", GG.GUILDS = "guilds", GG.READ_DM_CHANNELS = "dm_channels.read", GG.WRITE_ACTIVITIES = "rpc.activities.write", GG
-       }(KG || {}),
-       hG = function(GG) {
-         return GG[GG.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", GG[GG.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", GG[GG.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", GG[GG.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", GG[GG.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", GG[GG.RATELIMITE … [truncated]
- ... (4 more removed lines; see GitHub link above)
+     var OM = iM(5430),
+       SM = iM(1303);
```

#### 4. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L29-L76` → after: `L11-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L11-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L11-L120) · [Before (L29-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L29-L76)

```diff
-         Minigames: "Playing",
-         Puzzle: "Solving",
-         Escape: "Escaping",
-         Parkour: "Parkouring",
-         "Cool Parkour": "Parkouring",
-         "Two Player Parkour": "Parkouring",
-         "Clutch Parkour": "Parkouring",
-         "Challenging Parkour": "Parkouring",
-         "Progressive Parkour": "Parkouring",
-         "Themed Parkour": "Parkouring",
-         Obby: "Parkouring",
-         Tower: "Climbing",
-         Roleplay: "Roleplaying",
-         Arena: "Battling",
-         Duels: "Duelling",
-         Shooting: "Shooting",
- ... (32 more removed lines; see GitHub link above)
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
+ 
+     function aM(MM) {
+       let {
+         diagnostics: rM,
+         more: iM = 0,
+         t: aM
+       } = MM;
+       return (0, SM.jsxs)("ul", {
+         className: "ShaderPackDiagnostics",
+         children: [rM.map(((MM, rM) => {
+ ... (94 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L78-L99` → after: `L122-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L122-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L122-L257) · [Before (L78-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L78-L99)

```diff
-             enabled: bG
-           } = await GG.commands.encourageHardwareAcceleration();
-           bG || console.warn("Hardware acceleration not enabled in the Discord client")
-         } catch (SG) {
-           console.error("Failed to encourage hardware acceleration in the Discord client", SG)
-         }
-         const ZG = new zG(GG);
-         return ZG.isMobilePlatform() && (ZG.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
-           ZG.applyDiscordSafeAreaNotch()
-         }))), ZG
-       }
-       async updateActivityDescription(GG) {
-         const bG = ++this.activityUpdateId;
-         let ZG, wG;
-         switch (GG) {
-           case "homePage":
- ... (6 more removed lines; see GitHub link above)
+             apiVersion: iM,
+             name: OM,
+             author: SM,
+             description: jM,
+             keepCircleShadows: aM
+           } = rM;
+           if (void 0 === iM) throw new mM.e("shaderPack:loadNoApiVersion", {
+             version: String(LM.e)
+           });
+           if (!(0, LM.k)(iM)) throw new mM.e("shaderPack:loadWrongApiVersion", {
+             packVersion: JSON.stringify(iM),
+             version: String(LM.e)
+           });
+           if ("string" !== typeof OM || "" === OM.trim()) throw new mM.e("shaderPack:loadNoName");
+           if (void 0 !== SM && null !== SM && "string" !== typeof SM) throw new mM.e("shaderPack:loadAuthorNotString");
+           if (void 0 !== jM && null !== jM && "string" !== typeof jM) throw new mM.e("shaderPack:loadDescriptionNotString");
+ ... (120 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L102-L113` → after: `L260-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L260-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L260-L488) · [Before (L102-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L102-L113)

```diff
-         bG === this.activityUpdateId && await this.discordSdk.commands.setActivity({
-           activity: {
-             type: dG.PLAYING,
-             details: ZG,
-             state: wG,
-             assets: {
-               large_image: "icon",
-               large_text: ZG
-             },
-             timestamps: {
-               start: this.startTime
-             }
+       }
+     }
+   },
+   7142: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+ ... (213 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L128-L270` → after: `L491-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L491-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/148.js#L491-L500) · [Before (L128-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/148.js#L128-L270)

```diff
-         const wG = `${bG} in ${ZG}`;
-         return (0, yG.L)(GG.lobbyName) ? {
-           primary: wG
-         } : {
-           primary: wG,
-           secondary: `Lobby ${GG.lobbyName}`
-         }
-       }
-       async getGameVerbAndTitle(GG) {
-         var bG;
-         const ZG = "Playing";
-         if ((0, yG.L)(GG)) return {
-           verb: ZG,
-           title: "Bloxd"
-         };
-         const wG = (0, VG.p)(GG);
- ... (127 more removed lines; see GitHub link above)
+       return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
+     }
+ 
+     function QM(MM, rM, iM) {
+       return {
+         headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
+         ok: 0 === rM.length,
+         errors: rM.slice(0, aM),
+         moreErrors: Math.max(0, rM.length - aM),
+         offInStrict: iM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/149.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/149.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353)

#### 1. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L4-L7)

```diff
-   8142: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => LL,
-       e: () => jZ
+   7111: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       loadPageShaderPackCompiler: () => mr
```

#### 2. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L11-L28` → after: `L10-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L10-L23) · [Before (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L11-L28)

```diff
-       c: () => ww,
-       h: () => yw,
-       g: () => Lw,
-       j: () => DZ,
-       m: () => tZ,
-       p: () => Iw,
-       r: () => xZ,
-       u: () => aw,
-       y: () => Xw,
-       z: () => vw,
-       C: () => NZ,
-       D: () => iw,
-       G: () => mw,
-       J: () => Fw,
-       P: () => OZ,
-       M: () => bw,
- ... (2 more removed lines; see GitHub link above)
+       mSM: () => SM,
+       zMM: () => jM,
+       default: () => FM,
+       HSM: () => aM,
+       hSM: () => PM,
+       initSync: () => vM,
+       HQ: () => nM,
+       ciM: () => QM,
+       JSM: () => zM,
+       dSM: () => LM,
+       qD: () => mM,
+       ySM: () => HM,
+       KD: () => hM,
+       lSM: () => JM
```

#### 3. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L362-L388` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L26-L28) · [Before (L362-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L362-L388)

```diff
-       constructor() {
-         this.value = "valid"
-       }
-       cK() {
-         "valid" === this.value && (this.value = "cK")
-       }
-       abort() {
-         "aborted" !== this.value && (this.value = "aborted")
-       }
-       static mergeArray(GG, bG) {
-         const ZG = [];
-         for (const wG of bG) {
-           if ("aborted" === wG.status) return EG;
-           "cK" === wG.status && GG.cK(), ZG.push(wG.value)
-         }
-         return {
- ... (11 more removed lines; see GitHub link above)
+       static __wrap(MM) {
+         const rM = Object.create(SM.prototype);
+         return rM.__wbg_ptr = MM, yM.register(rM, rM.__wbg_ptr, rM), rM
```

#### 4. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L390-L430` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L30-L32) · [Before (L390-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L390-L430)

```diff
-       static mergeObjectSync(GG, bG) {
-         const ZG = {};
-         for (const wG of bG) {
-           const {
-             key: bG,
-             value: SG
-           } = wG;
-           if ("aborted" === bG.status) return EG;
-           if ("aborted" === SG.status) return EG;
-           "cK" === bG.status && GG.cK(), "cK" === SG.status && GG.cK(), "__proto__" === bG.value || "undefined" === typeof SG.value && !wG.alwaysSet || (ZG[bG.value] = SG.value)
-         }
-         return {
-           status: GG.value,
-           value: ZG
-         }
-       }
- ... (25 more removed lines; see GitHub link above)
+       __destroy_into_raw() {
+         const MM = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, yM.unregister(this), MM
```

#### 5. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L432-L433` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L34-L36) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L432-L433)

```diff
-       get path() {
-         return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
+       free() {
+         const MM = this.__destroy_into_raw();
+         NM.OlPM(MM, 0)
```

#### 6. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L435-L447` → after: `L38-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L38-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L38-L44) · [Before (L435-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L435-L447)

```diff
-     }
-     const FG = (GG, bG) => {
-       if (CG(bG)) return {
-         success: !0,
-         data: bG.value
-       };
-       if (!GG.common.issues.length) throw new Error("Validation failed but no issues detected.");
-       return {
-         success: !1,
-         get error() {
-           if (this._error) return this._error;
-           const bG = new QG(GG.common.issues);
-           return this._error = bG, this._error
+       get USM() {
+         let MM, rM;
+         try {
+           const iM = NM.pZJJ(this.__wbg_ptr);
+           return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
+         } finally {
+           NM.sKiU(MM, rM, 1)
```

#### 7. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L450-L481` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L47-L50) · [Before (L450-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L450-L481)

```diff
-     };
- 
-     function vG(GG) {
-       if (!GG) return {};
-       const {
-         errorMap: bG,
-         invalid_type_error: ZG,
-         required_error: wG,
-         description: SG
-       } = GG;
-       if (bG && (ZG || wG)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
-       if (bG) return {
-         errorMap: bG,
-         description: SG
-       };
-       return {
- ... (16 more removed lines; see GitHub link above)
+       get features() {
+         const MM = NM.VdT8(this.__wbg_ptr);
+         var rM = EM(MM[0], MM[1]);
+         return NM.sKiU(MM[0], 4 * MM[1], 4), rM
```

#### 8. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L483-L494` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L52-L55) · [Before (L483-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L483-L494)

```diff
-       _getType(GG) {
-         return pG(GG.data)
-       }
-       _getOrReturnCtx(GG, bG) {
-         return bG || {
-           common: GG.parent.common,
-           data: GG.data,
-           parsedType: pG(GG.data),
-           schemaErrorMap: this._def.errorMap,
-           path: GG.path,
-           parent: GG.parent
-         }
+       get hooks() {
+         const MM = NM.Vifg(this.__wbg_ptr);
+         var rM = UM(MM[0], MM[1]).slice();
+         return NM.sKiU(MM[0], 1 * MM[1], 1), rM
```

#### 9. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L496-L506` → after: `L57-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L57-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L57-L66) · [Before (L496-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L496-L506)

```diff
-       _processInputParams(GG) {
-         return {
-           status: new zG,
-           ctx: {
-             common: GG.parent.common,
-             data: GG.data,
-             parsedType: pG(GG.data),
-             schemaErrorMap: this._def.errorMap,
-             path: GG.path,
-             parent: GG.parent
-           }
+       mapValidationMessage(MM, rM, iM, OM, SM) {
+         let jM, aM;
+         try {
+           const QM = NM.ZZHJ(this.__wbg_ptr, MM, rM, iM, lM(OM), lM(SM));
+           var PM = QM[0],
+             nM = QM[1];
+           if (QM[3]) throw PM = 0, nM = 0, sM(QM[2]);
+           return jM = PM, aM = nM, eM(PM, nM)
+         } finally {
+           NM.sKiU(jM, aM, 1)
```

#### 10. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L509-L668` → after: `L69-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L69-L72) · [Before (L509-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L509-L668)

```diff
-       _parseSync(GG) {
-         const bG = this._parse(GG);
-         if (WG(bG)) throw new Error("Synchronous parse encountered promise.");
-         return bG
-       }
-       _parseAsync(GG) {
-         const bG = this._parse(GG);
-         return Promise.resolve(bG)
-       }
-       parse(GG, bG) {
-         const ZG = this.safeParse(GG, bG);
-         if (ZG.success) return ZG.data;
-         throw ZG.error
-       }
-       safeParse(GG, bG) {
-         var ZG;
- ... (144 more removed lines; see GitHub link above)
+       get moduleCodes() {
+         const MM = NM.ZFKQ(this.__wbg_ptr);
+         var rM = EM(MM[0], MM[1]);
+         return NM.sKiU(MM[0], 4 * MM[1], 4), rM
```

#### 11. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L670-L814` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L74-L80) · [Before (L670-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L670-L814)

```diff
-       isNullable() {
-         return this.safeParse(null).success
-       }
-     }
-     const cG = /^c[^\s-]{8,}$/i,
-       lG = /^[a-z][a-z0-9]*$/,
-       jG = /^[0-9A-HJKMNP-TV-Z]{26}$/,
-       PG = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
-       MG = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
-     let AG;
-     const sG = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
-       qG = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1, … [truncated]
-     class nG extends aG {
-       _parse(GG) {
-         this._def.coerce && (GG.data = String(GG.data));
-         if (this._getType(GG) !== VG.string) {
- ... (129 more removed lines; see GitHub link above)
+       get GSM() {
+         let MM, rM;
+         try {
+           const iM = NM.Js5b(this.__wbg_ptr);
+           return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
+         } finally {
+           NM.sKiU(MM, rM, 1)
```

#### 12. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L817-L919` → after: `L83-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L83-L86) · [Before (L817-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L817-L919)

```diff
-       _regex(GG, bG, ZG) {
-         return this.refinement((bG => GG.test(bG)), {
-           validation: bG,
-           code: fG.invalid_string,
-           ...mG.errToObj(ZG)
-         })
-       }
-       _addCheck(GG) {
-         return new nG({
-           ...this._def,
-           checks: [...this._def.checks, GG]
-         })
-       }
-       email(GG) {
-         return this._addCheck({
-           kind: "email",
- ... (87 more removed lines; see GitHub link above)
+       get reads() {
+         const MM = NM.bQFX(this.__wbg_ptr);
+         var rM = EM(MM[0], MM[1]);
+         return NM.sKiU(MM[0], 4 * MM[1], 4), rM
```

#### 13. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L921-L926` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L88-L91) · [Before (L921-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L921-L926)

```diff
-       min(GG, bG) {
-         return this._addCheck({
-           kind: "min",
-           value: GG,
-           ...mG.errToObj(bG)
-         })
+       get validationModuleCodes() {
+         const MM = NM.oXQq(this.__wbg_ptr);
+         var rM = EM(MM[0], MM[1]);
+         return NM.sKiU(MM[0], 4 * MM[1], 4), rM
```

#### 14. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L928-L933` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L93-L96) · [Before (L928-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L928-L933)

```diff
-       max(GG, bG) {
-         return this._addCheck({
-           kind: "max",
-           value: GG,
-           ...mG.errToObj(bG)
-         })
+       get validationModuleKeys() {
+         const MM = NM.Ur8S(this.__wbg_ptr);
+         var rM = UM(MM[0], MM[1]).slice();
+         return NM.sKiU(MM[0], 1 * MM[1], 1), rM
```

#### 15. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L935-L1004` → after: `L98-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L98-L101) · [Before (L935-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L935-L1004)

```diff
-       length(GG, bG) {
-         return this._addCheck({
-           kind: "length",
-           value: GG,
-           ...mG.errToObj(bG)
-         })
-       }
-       nonempty(GG) {
-         return this.min(1, mG.errToObj(GG))
-       }
-       trim() {
-         return new nG({
-           ...this._def,
-           checks: [...this._def.checks, {
-             kind: "trim"
-           }]
- ... (54 more removed lines; see GitHub link above)
+       get variantFlags() {
+         const MM = NM.HLh6(this.__wbg_ptr);
+         var rM = UM(MM[0], MM[1]).slice();
+         return NM.sKiU(MM[0], 1 * MM[1], 1), rM
```

#### 16. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L4982-L5267` → after: `L106-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L106-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L106-L122) · [Before (L4982-L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L4982-L5267)

```diff
-       return RS(bG & ZG | ~bG & wG, GG, bG, SG, LG, yG)
-     }
- 
-     function HS(GG, bG, ZG, wG, SG, LG, yG) {
-       return RS(bG & wG | ZG & ~wG, GG, bG, SG, LG, yG)
-     }
- 
-     function tS(GG, bG, ZG, wG, SG, LG, yG) {
-       return RS(bG ^ ZG ^ wG, GG, bG, SG, LG, yG)
-     }
- 
-     function DS(GG, bG, ZG, wG, SG, LG, yG) {
-       return RS(ZG ^ (bG | ~wG), GG, bG, SG, LG, yG)
-     }
-     nS("v3", 48, (function(GG) {
-       if ("string" === typeof GG) {
- ... (270 more removed lines; see GitHub link above)
+       const nM = WM(MM, NM.DjZi),
+         QM = AM,
+         zM = WM(rM, NM.DjZi),
+         LM = AM,
+         mM = WM(iM, NM.DjZi),
+         HM = AM,
+         hM = pM(OM, NM.DjZi),
+         JM = AM,
+         dM = WM(jM, NM.DjZi),
+         yM = AM,
+         lM = WM(aM, NM.DjZi),
+         EM = AM,
+         UM = WM(PM, NM.DjZi),
+         GM = AM,
+         CM = NM.Gun2(nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM);
+       if (CM[2]) throw sM(CM[1]);
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5282-L5292` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L125-L128) · [Before (L5282-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5282-L5292)

```diff
-     function zL(GG, bG) {
-       var ZG, wG, SG, LG, yG, kG, UG, YG, VG = GG.constructor,
-         pG = VG.precision;
-       if (!GG.s || !bG.s) return bG.s || (bG = new VG(GG)), UL ? FL(bG, pG) : bG;
-       if (UG = GG.d, YG = bG.d, yG = GG.e, SG = bG.e, UG = UG.slice(), LG = yG - SG) {
-         for (LG < 0 ? (wG = UG, LG = -LG, kG = YG.length) : (wG = YG, SG = yG, kG = UG.length), LG > (kG = (yG = Math.ceil(pG / 7)) > kG ? yG + 1 : kG + 1) && (LG = kG, wG.length = 1), wG.reverse(); LG--;) wG.push(0);
-         wG.reverse()
-       }
-       for ((kG = UG.length) - (LG = YG.length) < 0 && (LG = kG, wG = YG, YG = UG, UG = wG), ZG = 0; LG;) ZG = (UG[--LG] = UG[LG] + YG[LG] + ZG) / hL | 0, UG[LG] %= hL;
-       for (ZG && (UG.unshift(ZG), ++SG), kG = UG.length; 0 == UG[--kG];) UG.pop();
-       return bG.d = UG, bG.e = SG, UL ? FL(bG, pG) : bG
+     function aM() {
+       const MM = NM.I93C();
+       var rM = EM(MM[0], MM[1]);
+       return NM.sKiU(MM[0], 4 * MM[1], 4), rM
```

#### 18. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5295-L5296` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L131-L134) · [Before (L5295-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5295-L5296)

```diff
-     function EL(GG, bG, ZG) {
-       if (GG !== ~~GG || GG < bG || GG > ZG) throw Error(VL + GG)
+     function PM() {
+       const MM = NM.xU0n();
+       var rM = EM(MM[0], MM[1]);
+       return NM.sKiU(MM[0], 4 * MM[1], 4), rM
```

#### 19. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5299-L5308` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L137-L138) · [Before (L5299-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5299-L5308)

```diff
-     function oL(GG) {
-       var bG, ZG, wG, SG = GG.length - 1,
-         LG = "",
-         yG = GG[0];
-       if (SG > 0) {
-         for (LG += yG, bG = 1; bG < SG; bG++)(ZG = 7 - (wG = GG[bG] + "").length) && (LG += WL(ZG)), LG += wG;
-         (ZG = 7 - (wG = (yG = GG[bG]) + "").length) && (LG += WL(ZG))
-       } else if (0 === yG) return "0";
-       for (; yG % 10 === 0;) yG /= 10;
-       return LG + yG
+     function nM() {
+       NM.Z87a()
```

#### 20. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5310-L5472` → after: `L140-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L140-L163) · [Before (L5310-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5310-L5472)

```diff
-     rL.absoluteValue = rL.abs = function() {
-       var GG = new this.constructor(this);
-       return GG.s && (GG.s = 1), GG
-     }, rL.comparedTo = rL.cmp = function(GG) {
-       var bG, ZG, wG, SG, LG = this;
-       if (GG = new LG.constructor(GG), LG.s !== GG.s) return LG.s || -GG.s;
-       if (LG.e !== GG.e) return LG.e > GG.e ^ LG.s < 0 ? 1 : -1;
-       for (bG = 0, ZG = (wG = LG.d.length) < (SG = GG.d.length) ? wG : SG; bG < ZG; ++bG)
-         if (LG.d[bG] !== GG.d[bG]) return LG.d[bG] > GG.d[bG] ^ LG.s < 0 ? 1 : -1;
-       return wG === SG ? 0 : wG > SG ^ LG.s < 0 ? 1 : -1
-     }, rL.decimalPlaces = rL.dp = function() {
-       var GG = this,
-         bG = GG.d.length - 1,
-         ZG = 7 * (bG - GG.e);
-       if (bG = GG.d[bG])
-         for (; bG % 10 == 0; bG /= 10) ZG--;
- ... (147 more removed lines; see GitHub link above)
+ 
+     function QM(MM, rM, iM, OM, SM) {
+       let jM, aM;
+       try {
+         const QM = WM(MM, NM.DjZi),
+           zM = AM,
+           LM = pM(rM, NM.DjZi),
+           mM = AM,
+           HM = WM(iM, NM.DjZi),
+           hM = AM,
+           JM = pM(OM, NM.DjZi),
+           dM = AM,
+           yM = function(MM, rM) {
+             const iM = rM(1 * MM.length, 1) >>> 0;
+             return tM().set(MM, iM / 1), AM = MM.length, iM
+           }(SM, NM.DjZi),
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5475-L5483` → after: `L167-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L167-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L167-L173) · [Before (L5475-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5475-L5483)

```diff
-       function bG(GG, bG, ZG, wG) {
-         var SG, LG;
-         if (ZG != wG) LG = ZG > wG ? 1 : -1;
-         else
-           for (SG = LG = 0; SG < ZG; SG++)
-             if (GG[SG] != bG[SG]) {
-               LG = GG[SG] > bG[SG] ? 1 : -1;
-               break
-             } return LG
+     function zM() {
+       let MM, rM;
+       try {
+         const iM = NM.CrML();
+         return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
+       } finally {
+         NM.sKiU(MM, rM, 1)
```

#### 22. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5486-L5488` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L177-L186) · [Before (L5486-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5486-L5488)

```diff
-       function ZG(GG, bG, ZG) {
-         for (var wG = 0; ZG--;) GG[ZG] -= wG, wG = GG[ZG] < bG[ZG] ? 1 : 0, GG[ZG] = wG * hL + GG[ZG] - bG[ZG];
-         for (; !GG[0] && GG.length > 1;) GG.shift()
+     function LM(MM) {
+       let rM, iM;
+       try {
+         const jM = NM.OAr6(MM);
+         var OM = jM[0],
+           SM = jM[1];
+         if (jM[3]) throw OM = 0, SM = 0, sM(jM[2]);
+         return rM = OM, iM = SM, eM(OM, SM)
+       } finally {
+         NM.sKiU(rM, iM, 1)
```

#### 23. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5490-L5509` → after: `L188-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L188-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L188-L200) · [Before (L5490-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5490-L5509)

```diff
-       return function(wG, SG, LG, yG) {
-         var kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG = wG.constructor,
-           WG = wG.s == SG.s ? 1 : -1,
-           mG = wG.d,
-           IG = SG.d;
-         if (!wG.s) return new CG(wG);
-         if (!SG.s) throw Error(YL + "Division by zero");
-         for (UG = wG.e - SG.e, uG = IG.length, oG = mG.length, KG = (QG = new CG(WG)).d = [], YG = 0; IG[YG] == (mG[YG] || 0);) ++YG;
-         if (IG[YG] > (mG[YG] || 0) && --UG, (rG = null == LG ? LG = CG.precision : yG ? LG + (iL(wG) - iL(SG)) + 1 : LG) < 0) return new CG(0);
-         if (rG = rG / 7 + 2 | 0, YG = 0, 1 == uG)
-           for (VG = 0, IG = IG[0], rG++;
-             (YG < oG || VG) && rG--; YG++) zG = VG * hL + (mG[YG] || 0), KG[YG] = zG / IG | 0, VG = zG % IG | 0;
-         else {
-           for ((VG = hL / (IG[0] + 1) | 0) > 1 && (IG = GG(IG, VG), mG = GG(mG, VG), uG = IG.length, oG = mG.length), EG = uG, dG = (hG = mG.slice(0, uG)).length; dG < uG;) hG[dG++] = 0;
-           (iG = IG.slice()).unshift(0), XG = IG[0], IG[1] >= hL / 2 && ++XG;
-           do {
- ... (4 more removed lines; see GitHub link above)
+     }
+ 
+     function mM() {
+       return NM.ueLP() >>> 0
+     }
+ 
+     function HM() {
+       let MM, rM;
+       try {
+         const iM = NM.yD5Q();
+         return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
+       } finally {
+         NM.sKiU(MM, rM, 1)
```

#### 24. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5511` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L202) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5511)

```diff
-     }();
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5514-L5526` → after: `L205-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L205-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L205-L217) · [Before (L5514-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5514-L5526)

```diff
-       var ZG, wG, SG, LG, yG, kG = 0,
-         UG = 0,
-         YG = GG.constructor,
-         VG = YG.precision;
-       if (iL(GG) > 16) throw Error(pL + iL(GG));
-       if (!GG.s) return new YG(yL);
-       for (null == bG ? (UL = !1, yG = VG) : yG = bG, LG = new YG(.03125); GG.abs().gte(.1);) GG = GG.times(LG), UG += 5;
-       for (yG += Math.log(QL(2, UG)) / Math.LN10 * 2 + 5 | 0, ZG = wG = SG = new YG(yL), YG.precision = yG;;) {
-         if (wG = FL(wG.times(GG), yG), ZG = ZG.times(++kG), oL((LG = SG.plus(XL(wG, ZG, yG))).d).slice(0, yG) === oL(SG.d).slice(0, yG)) {
-           for (; UG--;) SG = FL(SG.times(SG), yG);
-           return YG.precision = VG, null == bG ? (UL = !0, FL(SG, VG)) : SG
-         }
-         SG = LG
+       let iM, OM;
+       try {
+         const aM = WM(MM, NM.DjZi),
+           PM = AM,
+           nM = pM(rM, NM.DjZi),
+           QM = AM,
+           zM = NM.tXqn(aM, PM, nM, QM);
+         var SM = zM[0],
+           jM = zM[1];
+         if (zM[3]) throw SM = 0, jM = 0, sM(zM[2]);
+         return iM = SM, OM = jM, eM(SM, jM)
+       } finally {
+         NM.sKiU(iM, OM, 1)
```

#### 26. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5531-L5532` → after: `L222-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L222-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L222-L231) · [Before (L5531-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5531-L5532)

```diff
-       for (var bG = 7 * GG.e, ZG = GG.d[0]; ZG >= 10; ZG /= 10) bG++;
-       return bG
+       let rM, iM;
+       try {
+         const jM = NM.MkYg(lM(MM));
+         var OM = jM[0],
+           SM = jM[1];
+         if (jM[3]) throw OM = 0, SM = 0, sM(jM[2]);
+         return rM = OM, iM = SM, eM(OM, SM)
+       } finally {
+         NM.sKiU(rM, iM, 1)
+       }
```

#### 27. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5535-L5537` → after: `L234-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L234-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L234-L295) · [Before (L5535-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5535-L5537)

```diff
-     function CL(GG, bG, ZG) {
-       if (bG > GG.LN10.sd()) throw UL = !0, ZG && (GG.precision = ZG), Error(YL + "LN10 precision limit exceeded");
-       return FL(new GG(GG.LN10), bG)
+     function dM() {
+       return {
+         __proto__: null,
+         Z6AG: {
+           __proto__: null,
+           PmwO: function(MM, rM) {
+             return lM(Error(eM(MM, rM)))
+           },
+           kjdt: function(MM) {
+             return null === gM(MM)
+           },
+           fx3x: function(MM) {
+             return "string" === typeof gM(MM)
+           },
+           B2g5: function(MM, rM) {
+             const iM = gM(rM),
+ ... (46 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5541-L5542` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L304-L306) · [Before (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5541-L5542)

```diff
-       for (var bG = ""; GG--;) bG += "0";
-       return bG
+       RM === uM.length && uM.push(uM.length + 1);
+       const rM = RM;
+       return RM = uM[rM], uM[rM] = MM, rM
```

#### 29. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5546-L5559` → after: `L310-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L310-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L310-L314) · [Before (L5546-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5546-L5559)

```diff
-       var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG = 1,
-         fG = GG,
-         QG = fG.d,
-         KG = fG.constructor,
-         hG = KG.precision;
-       if (fG.s < 1) throw Error(YL + (fG.s ? "NaN" : "-Infinity"));
-       if (fG.eq(yL)) return new KG(0);
-       if (null == bG ? (UL = !1, YG = hG) : YG = bG, fG.eq(10)) return null == bG && (UL = !0), CL(KG, YG);
-       if (YG += 10, KG.precision = YG, wG = (ZG = oL(QG)).charAt(0), LG = iL(fG), !(Math.abs(LG) < 15e14)) return UG = CL(KG, YG + 2, hG).times(LG + ""), fG = mL(new KG(wG + "." + ZG.slice(1)), YG - 10).plus(UG), KG.precision = hG, null == bG ? (UL = !0, FL(fG, hG)) : fG;
-       for (; wG < 7 && 1 != wG || 1 == wG && ZG.charAt(1) > 3;) wG = (ZG = oL((fG = fG.times(GG)).d)).charAt(0), pG++;
-       for (LG = iL(fG), wG > 1 ? (fG = new KG("0." + ZG), LG++) : fG = new KG(wG + "." + ZG.slice(1)), kG = yG = fG = XL(fG.minus(yL), fG.plus(yL), YG), VG = FL(fG.times(fG), YG), SG = 3;;) {
-         if (yG = FL(yG.times(VG), YG), oL((UG = kG.plus(XL(yG, new KG(SG), YG))).d).slice(0, YG) === oL(kG.d).slice(0, YG)) return kG = kG.times(2), 0 !== LG && (kG = kG.plus(CL(KG, YG + 2, hG).times(LG + ""))), kG = XL(kG, new KG(pG), YG), KG.precision = hG, null == bG ? (UL = ! … [truncated]
-         kG = UG, SG += 2
-       }
+       MM >>>= 0;
+       const iM = CM(),
+         OM = [];
+       for (let SM = MM; SM < MM + 4 * rM; SM += 4) OM.push(sM(iM.getUint32(SM, !0)));
+       return OM
```

#### 30. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5563-L5574` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L318) · [Before (L5563-L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5563-L5574)

```diff
-       var ZG, wG, SG;
-       for ((ZG = bG.indexOf(".")) > -1 && (bG = bG.replace(".", "")), (wG = bG.search(/e/i)) > 0 ? (ZG < 0 && (ZG = wG), ZG += +bG.slice(wG + 1), bG = bG.substring(0, wG)) : ZG < 0 && (ZG = bG.length), wG = 0; 48 === bG.charCodeAt(wG);) ++wG;
-       for (SG = bG.length; 48 === bG.charCodeAt(SG - 1);) --SG;
-       if (bG = bG.slice(wG, SG)) {
-         if (SG -= wG, ZG = ZG - wG - 1, GG.e = fL(ZG / 7), GG.d = [], wG = (ZG + 1) % 7, ZG < 0 && (wG += 7), wG < SG) {
-           for (wG && GG.d.push(+bG.slice(0, wG)), SG -= 7; wG < SG;) GG.d.push(+bG.slice(wG, wG += 7));
-           wG = 7 - (bG = bG.slice(wG)).length
-         } else wG -= SG;
-         for (; wG--;) bG += "0";
-         if (GG.d.push(+bG), UL && (GG.e > JL || GG.e < -JL)) throw Error(pL + ZG)
-       } else GG.s = 0, GG.e = 0, GG.d = [0];
-       return GG
+       return MM >>>= 0, tM().subarray(MM / 1, MM / 1 + rM)
```

#### 31. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5577-L5598` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L322-L323) · [Before (L5577-L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5577-L5598)

```diff
-     function FL(GG, bG, ZG) {
-       var wG, SG, LG, yG, kG, UG, YG, VG, pG = GG.d;
-       for (yG = 1, LG = pG[0]; LG >= 10; LG /= 10) yG++;
-       if ((wG = bG - yG) < 0) wG += 7, SG = bG, YG = pG[VG = 0];
-       else {
-         if ((VG = Math.ceil((wG + 1) / 7)) >= (LG = pG.length)) return GG;
-         for (YG = LG = pG[VG], yG = 1; LG >= 10; LG /= 10) yG++;
-         SG = (wG %= 7) - 7 + yG
-       }
-       if (void 0 !== ZG && (kG = YG / (LG = QL(10, yG - SG - 1)) % 10 | 0, UG = bG < 0 || void 0 !== pG[VG + 1] || YG % LG, UG = ZG < 4 ? (kG || UG) && (0 == ZG || ZG == (GG.s < 0 ? 3 : 2)) : kG > 5 || 5 == kG && (4 == ZG || UG || 6 == ZG && (wG > 0 ? SG > 0 ? YG / QL(10, yG - SG … [truncated]
-       if (0 == wG ? (pG.length = VG, LG = 1, VG--) : (pG.length = VG + 1, LG = QL(10, 7 - wG), pG[VG] = SG > 0 ? (YG / QL(10, yG - SG) % QL(10, SG) | 0) * LG : 0), UG)
-         for (;;) {
-           if (0 == VG) {
-             (pG[0] += LG) == hL && (pG[0] = 1, ++GG.e);
-             break
-           }
- ... (6 more removed lines; see GitHub link above)
+     function CM() {
+       return null !== GM && GM.buffer === NM.memory.buffer || (GM = new DataView(NM.memory.buffer)), GM
```

#### 32. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5602-L5625` → after: `L327-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L327-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L327-L339) · [Before (L5602-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5602-L5625)

```diff
-       var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG = GG.constructor,
-         QG = fG.precision;
-       if (!GG.s || !bG.s) return bG.s ? bG.s = -bG.s : bG = new fG(GG), UL ? FL(bG, QG) : bG;
-       if (UG = GG.d, pG = bG.d, wG = bG.e, YG = GG.e, UG = UG.slice(), yG = YG - wG) {
-         for ((VG = yG < 0) ? (ZG = UG, yG = -yG, kG = pG.length) : (ZG = pG, wG = YG, kG = UG.length), yG > (SG = Math.max(Math.ceil(QG / 7), kG) + 2) && (yG = SG, ZG.length = 1), ZG.reverse(), SG = yG; SG--;) ZG.push(0);
-         ZG.reverse()
-       } else {
-         for ((VG = (SG = UG.length) < (kG = pG.length)) && (kG = SG), SG = 0; SG < kG; SG++)
-           if (UG[SG] != pG[SG]) {
-             VG = UG[SG] < pG[SG];
-             break
-           } yG = 0
-       }
-       for (VG && (ZG = UG, UG = pG, pG = ZG, bG.s = -bG.s), kG = UG.length, SG = pG.length - kG; SG > 0; --SG) UG[kG++] = 0;
-       for (SG = pG.length; SG > yG;) {
-         if (UG[--SG] < pG[SG]) {
- ... (8 more removed lines; see GitHub link above)
+       return function(MM, rM) {
+         ZM += rM, ZM >= kM && (DM = new TextDecoder("utf-8", {
+           ignoreBOM: !0,
+           fatal: !0
+         }), DM.decode(), ZM = rM);
+         return DM.decode(tM().subarray(MM, MM + rM))
+       }(MM >>> 0, rM)
+     }
+     let bM = null;
+     let wM = null;
+ 
+     function tM() {
+       return null !== wM && 0 !== wM.byteLength || (wM = new Uint8Array(NM.memory.buffer)), wM
```

#### 33. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5628-L5632` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L342-L343) · [Before (L5628-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5628-L5632)

```diff
-     function aL(GG, bG, ZG) {
-       var wG, SG = iL(GG),
-         LG = oL(GG.d),
-         yG = LG.length;
-       return bG ? (ZG && (wG = ZG - yG) > 0 ? LG = LG.charAt(0) + "." + LG.slice(1) + WL(wG) : yG > 1 && (LG = LG.charAt(0) + "." + LG.slice(1)), LG = LG + (SG < 0 ? "e" : "e+") + SG) : SG < 0 ? (LG = "0." + WL(-SG - 1) + LG, ZG && (wG = ZG - yG) > 0 && (LG += WL(wG))) : SG >= yG … [truncated]
+     function gM(MM) {
+       return uM[MM]
```

#### 34. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5636` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L350-L351) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5636)

```diff
-       if (GG.length > bG) return GG.length = bG, !0
+       const iM = rM(4 * MM.length, 4) >>> 0;
+       return (null !== bM && 0 !== bM.byteLength || (bM = new Uint32Array(NM.memory.buffer)), bM).set(MM, iM / 4), AM = MM.length, iM
```

#### 35. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5639-L5650` → after: `L354-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L354-L358) · [Before (L5639-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5639-L5650)

```diff
-     function lL(GG) {
-       if (!GG || "object" !== typeof GG) throw Error(YL + "Object expected");
-       var bG, ZG, wG, SG = ["precision", 1, kL, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
-       for (bG = 0; bG < SG.length; bG += 3)
-         if (void 0 !== (wG = GG[ZG = SG[bG]])) {
-           if (!(fL(wG) === wG && wG >= SG[bG + 1] && wG <= SG[bG + 2])) throw Error(VL + ZG + ": " + wG);
-           this[ZG] = wG
-         } if (void 0 !== (wG = GG[ZG = "LN10"])) {
-         if (wG != Math.LN10) throw Error(VL + ZG + ": " + wG);
-         this[ZG] = new this(wG)
-       }
-       return this
+     function WM(MM, rM) {
+       const iM = rM(4 * MM.length, 4) >>> 0,
+         OM = CM();
+       for (let SM = 0; SM < MM.length; SM++) OM.setUint32(iM + 4 * SM, lM(MM[SM]), !0);
+       return AM = MM.length, iM
```

#### 36. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5655-L5680` → after: `L361-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L361-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L361-L369) · [Before (L5655-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5655-L5680)

```diff
-       function LG(GG) {
-         var bG = this;
-         if (!(bG instanceof LG)) return new LG(GG);
-         if (bG.constructor = LG, GG instanceof LG) return bG.s = GG.s, bG.e = GG.e, void(bG.d = (GG = GG.d) ? GG.slice() : GG);
-         if ("number" === typeof GG) {
-           if (0 * GG !== 0) throw Error(VL + GG);
-           if (GG > 0) bG.s = 1;
-           else {
-             if (!(GG < 0)) return bG.s = 0, bG.e = 0, void(bG.d = [0]);
-             GG = -GG, bG.s = -1
-           }
-           return GG === ~~GG && GG < 1e7 ? (bG.e = 0, void(bG.d = [GG])) : IL(bG, GG.toString())
-         }
-         if ("string" !== typeof GG) throw Error(VL + GG);
-         if (45 === GG.charCodeAt(0) ? (GG = GG.slice(1), bG.s = -1) : bG.s = 1, !KL.test(GG)) throw Error(VL + GG);
-         IL(bG, GG)
- ... (10 more removed lines; see GitHub link above)
+     function sM(MM) {
+       const rM = gM(MM);
+       return function(MM) {
+         MM < 1028 || (uM[MM] = RM, RM = MM)
+       }(MM), rM
+     }
+     let DM = new TextDecoder("utf-8", {
+       ignoreBOM: !0,
+       fatal: !0
```

#### 37. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5682-L5763` → after: `L371-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L371-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L371-L379) · [Before (L5682-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5682-L5763)

```diff
-     yL = new jL(1);
-     var PL;
-     ! function(GG) {
-       GG.AED = "aed", GG.AFN = "afn", GG.ALL = "all", GG.AMD = "amd", GG.ANG = "ang", GG.AOA = "aoa", GG.ARS = "ars", GG.AUD = "aud", GG.AWG = "awg", GG.AZN = "azn", GG.BAM = "bam", GG.BBD = "bbd", GG.BDT = "bdt", GG.BGN = "bgn", GG.BHD = "bhd", GG.BIF = "bif", GG.BMD = "bmd", GG … [truncated]
-     }(PL || (PL = {}));
-     PL.AED, PL.AFN, PL.ALL, PL.AMD, PL.ANG, PL.AOA, PL.ARS, PL.AUD, PL.AWG, PL.AZN, PL.BAM, PL.BBD, PL.BDT, PL.BGN, PL.BHD, PL.BIF, PL.BMD, PL.BND, PL.BOB, PL.BOV, PL.BRL, PL.BSD, PL.BTN, PL.BWP, PL.BYR, PL.BYN, PL.BZD, PL.CAD, PL.CDF, PL.CHE, PL.CHF, PL.CHW, PL.CLF, PL.CLP, PL.C … [truncated]
-     var ML = {
-       exports: {}
-     };
-     ! function(GG, bG) {
-       var ZG = "__lodash_hash_undefined__",
-         wG = 9007199254740991,
-         LG = "[object Arguments]",
-         yG = "[object Array]",
-         kG = "[object Boolean]",
-         UG = "[object Date]",
- ... (66 more removed lines; see GitHub link above)
+     DM.decode();
+     const kM = 2146435072;
+     let ZM = 0;
+     const oM = new TextEncoder;
+     "encodeInto" in oM || (oM.encodeInto = function(MM, rM) {
+       const iM = oM.encode(MM);
+       return rM.set(iM), {
+         read: MM.length,
+         written: iM.length
```

#### 38. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5766-L5805` → after: `L384-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L384-L386) · [Before (L5766-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5766-L5805)

```diff
-       function RG(GG) {
-         var bG = -1,
-           ZG = Array(GG.size);
-         return GG.forEach((function(GG) {
-           ZG[++bG] = GG
-         })), ZG
-       }
-       var TG = Array.prototype,
-         HG = Function.prototype,
-         tG = Object.prototype,
-         DG = cG["__core-js_shared__"],
-         NG = function() {
-           var GG = /[^.]+$/.exec(DG && DG.keys && DG.keys.IE_PROTO || "");
-           return GG ? "Symbol(src)_1." + GG : ""
-         }(),
-         OG = HG.toString,
- ... (24 more removed lines; see GitHub link above)
+     function xM(MM, rM) {
+       return YM = MM, NM = MM.exports, fM = rM, GM = null, bM = null, wM = null, NM.itXl(), NM
+     }
```

#### 39. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5807-L5812` → after: `L388-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L388-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L388-L431) · [Before (L5807-L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5807-L5812)

```diff
-       function Xb(GG) {
-         var bG = -1,
-           ZG = GG ? GG.length : 0;
-         for (this.clear(); ++bG < ZG;) {
-           var wG = GG[bG];
-           this.set(wG[0], wG[1])
+     function vM(MM) {
+       if (void 0 !== NM) return NM;
+       void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
+         module: MM
+       } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const rM = dM();
+       MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
+       return xM(new WebAssembly.Instance(MM, rM), MM)
+     }
+     async function FM(MM) {
+       if (void 0 !== NM) return NM;
+       void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
+         module_or_path: MM
+       } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
+       const rM = dM();
+       ("string" === typeof MM || "function" === typeof Request && MM instanceof Request || "function" === typeof URL && MM instanceof URL) && (MM = fetch(MM));
+ ... (28 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5816-L5821` → after: `L449-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L449-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L449-L455) · [Before (L5816-L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5816-L5821)

```diff
-       function ub(GG) {
-         var bG = -1,
-           ZG = GG ? GG.length : 0;
-         for (this.clear(); ++bG < ZG;) {
-           var wG = GG[bG];
-           this.set(wG[0], wG[1])
+     function TM() {
+       return KM ? Promise.resolve(KM) : (qM || (qM = async function() {
+         let MM;
+         try {
+           MM = await (0, BM.E)(new iM.U(iM(7118)), (0, XM.b)("bloxd_wasm_shader_pack"))
+         } catch (rM) {
+           throw new IM((0, BM.J)(rM), rM)
```

#### 41. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5823-L5830` → after: `L457-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L457-L462) · [Before (L5823-L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5823-L5830)

```diff
-       }
- 
-       function ib(GG) {
-         var bG = -1,
-           ZG = GG ? GG.length : 0;
-         for (this.clear(); ++bG < ZG;) {
-           var wG = GG[bG];
-           this.set(wG[0], wG[1])
+         try {
+           await FM({
+             module_or_path: MM
+           })
+         } catch (rM) {
+           throw new IM("instantiate", rM)
```

#### 42. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5832-L5853` → after: `L464-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L464-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L464-L469) · [Before (L5832-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5832-L5853)

```diff
-       }
- 
-       function Cb(GG) {
-         var bG = -1,
-           ZG = GG ? GG.length : 0;
-         for (this.__data__ = new ib; ++bG < ZG;) this.add(GG[bG])
-       }
- 
-       function Wb(GG) {
-         this.__data__ = new ub(GG)
-       }
- 
-       function mb(GG, bG) {
-         var ZG = bZ(GG) || GZ(GG) ? function(GG, bG) {
-             for (var ZG = -1, wG = Array(GG); ++ZG < GG;) wG[ZG] = bG(ZG);
-             return wG
- ... (6 more removed lines; see GitHub link above)
+         return KM = OM, KM
+       }(), qM.then(void 0, (() => {
+         qM = null
+       }))), qM)
+     }
+     var VM = iM(7124);
```

#### 43. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5855-L5932` → after: `L471-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L471-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L471-L476) · [Before (L5855-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5855-L5932)

```diff
-       function Ib(GG, bG) {
-         for (var ZG = GG.length; ZG--;)
-           if (Bb(GG[ZG][0], bG)) return ZG;
-         return -1
-       }
-       Xb.prototype.clear = function() {
-         this.__data__ = Qb ? Qb(null) : {}
-       }, Xb.prototype.delete = function(GG) {
-         return this.has(GG) && delete this.__data__[GG]
-       }, Xb.prototype.get = function(GG) {
-         var bG = this.__data__;
-         if (Qb) {
-           var wG = bG[GG];
-           return wG === ZG ? void 0 : wG
-         }
-         return xG.call(bG, GG) ? bG[GG] : void 0
- ... (62 more removed lines; see GitHub link above)
+     function cM(MM) {
+       let [rM, iM, OM, SM] = MM;
+       const jM = {
+         file: rM,
+         line: iM,
+         message: OM
```

#### 44. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5935-L5942` → after: `L481-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L481-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L481-L483) · [Before (L5935-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5935-L5942)

```diff
-       function ab(GG, bG) {
-         return GG && vb(GG, bG, VZ)
-       }
- 
-       function cb(GG, bG) {
-         for (var ZG = 0, wG = (bG = Tb(bG, GG) ? [bG] : sb(bG)).length; null != GG && ZG < wG;) GG = GG[Nb(bG[ZG++])];
-         return ZG && ZG == wG ? GG : void 0
-       }
+     function Mr(MM) {
+       return JSON.parse(MM).map(cM)
+     }
```

#### 45. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5944-L5946` → after: `L485-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L485-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L485-L488) · [Before (L5944-L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5944-L5946)

```diff
-       function lb(GG, bG) {
-         return null != GG && bG in Object(GG)
-       }
+     function rr(MM, rM) {
+       if (!Number.isInteger(MM) || MM < 0 || MM > 4294967295) throw new Error(`${rM} ${MM} is not a whole number from 0 to 4294967295`);
+       return MM
+     }
```

#### 46. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L5948-L6036` → after: `L490-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L490-L495) · [Before (L5948-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L5948-L6036)

```diff
-       function jb(GG, bG, ZG, wG, SG) {
-         return GG === bG || (null == GG || null == bG || !LZ(GG) && !yZ(bG) ? GG !== GG && bG !== bG : function(GG, bG, ZG, wG, SG, VG) {
-           var KG = bZ(GG),
-             zG = bZ(bG),
-             XG = yG,
-             uG = yG;
-           KG || (XG = (XG = eb(GG)) == LG ? QG : XG);
-           zG || (uG = (uG = eb(bG)) == LG ? QG : uG);
-           var iG = XG == QG && !nG(GG),
-             CG = uG == QG && !nG(bG),
-             WG = XG == uG;
-           if (WG && !iG) return VG || (VG = new Wb), KG || YZ(GG) ? qb(GG, bG, ZG, wG, SG, VG) : function(GG, bG, ZG, wG, SG, LG, yG) {
-             switch (ZG) {
-               case oG:
-                 if (GG.byteLength != bG.byteLength || GG.byteOffset != bG.byteOffset) return !1;
-                 GG = GG.buffer, bG = bG.buffer;
- ... (73 more removed lines; see GitHub link above)
+     function ir(MM) {
+       return [MM.named.map((MM => MM.name)), Uint32Array.from(MM.named, (MM => rr(MM.id, "Texture ID")))]
+     }
+     const Or = new WeakMap;
+     const Sr = new WeakMap,
+       jr = new WeakSet;
```

#### 47. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6038-L6040` → after: `L497-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L497-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L497-L502) · [Before (L6038-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6038-L6040)

```diff
-       function Pb(GG) {
-         return !(!LZ(GG) || (bG = GG, NG && NG in bG)) && (wZ(GG) || nG(GG) ? Gb : mG).test(Ob(GG));
-         var bG
+     function ar(MM, rM) {
+       if (jr.has(MM)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
+       try {
+         return rM()
+       } catch (iM) {
+         throw iM instanceof WebAssembly.RuntimeError && jr.add(MM), iM
```

#### 48. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6043-L6109` → after: `L506-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L506-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L506-L534) · [Before (L6043-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6043-L6109)

```diff
-       function Mb(GG) {
-         return "function" == typeof GG ? GG : null == GG ? pZ : "object" == typeof GG ? bZ(GG) ? function(GG, bG) {
-           if (Tb(GG) && Hb(bG)) return tb(Nb(GG), bG);
-           return function(ZG) {
-             var wG = function(GG, bG, ZG) {
-               var wG = null == GG ? void 0 : cb(GG, bG);
-               return void 0 === wG ? ZG : wG
-             }(ZG, GG);
-             return void 0 === wG && wG === bG ? function(GG, bG) {
-               return null != GG && function(GG, bG, ZG) {
-                 bG = Tb(bG, GG) ? [bG] : sb(bG);
-                 var wG, SG = -1,
-                   LG = bG.length;
-                 for (; ++SG < LG;) {
-                   var yG = Nb(bG[SG]);
-                   if (!(wG = null != GG && ZG(GG, yG))) break;
- ... (51 more removed lines; see GitHub link above)
+     function Pr(MM) {
+       let rM = Sr.get(MM);
+       if (!rM) {
+         let iM, OM;
+         rM = {
+           zMM: (rM, iM) => ar(MM, (() => function(MM, rM, iM) {
+             const OM = MM.zMM(rM.map((MM => MM.path)), rM.map((MM => MM.source)), ...ir(iM), iM.aliases.map((MM => MM.name)), iM.aliases.map((MM => MM.texture)), iM.aliases.map((MM => MM.kind)));
+             let SM = !1;
+             try {
+               const MM = OM.validationModuleCodes,
+                 rM = Array.from(OM.validationModuleKeys, ((rM, iM) => ({
+                   key: (0, VM.g)(rM),
+                   code: MM[iM]
+                 }))),
+                 iM = {
+                   errors: Mr(OM.USM),
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6111-L6128` → after: `L536-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L536-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L536-L566) · [Before (L6111-L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6111-L6128)

```diff
-           }(GG);
-           var bG
-         }(GG)
-       }
- 
-       function Ab(GG) {
-         if (! function(GG) {
-             var bG = GG && GG.constructor,
-               ZG = "function" == typeof bG && bG.prototype || tG;
-             return GG === ZG
-           }(GG)) return kb(GG);
-         var bG = [];
-         for (var ZG in Object(GG)) xG.call(GG, ZG) && "constructor" != ZG && bG.push(ZG);
-         return bG
-       }
- 
- ... (2 more removed lines; see GitHub link above)
+           }(MM, rM, iM))),
+           mapValidationMessage: (rM, iM) => {
+             const OM = Or.get(rM);
+             if (!OM) throw new Error("mapValidationMessage takes a validation module this compiler made");
+             return cM(JSON.parse(ar(MM, (() => OM.pack.mapValidationMessage(OM.index, iM.lineNum, iM.linePos, iM.message, iM.type)))))
+           },
+           ciM: rM => ar(MM, (() => function(MM, rM) {
+             const iM = new Int32Array(rM.length),
+               OM = [];
+             return rM.forEach(((MM, rM) => {
+               iM[rM] = MM.variants ? MM.variants.length : -1;
+               for (const iM of MM.variants ?? []) OM.push((0, VM.f)(iM))
+             })), Mr(MM.ciM(rM.map((MM => MM.file)), Uint32Array.from(rM, (MM => rr(MM.line, "Diagnostic line"))), rM.map((MM => MM.message)), iM, Uint8Array.from(OM)))
+           }(MM, rM))),
+           KD: rM => ar(MM, (() => MM.KD(...ir(rM)))),
+           get SHADER_PACK_HEADER_VERSION() {
+ ... (15 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6131-L6160` → after: `L575-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L575-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L575-L587) · [Before (L6131-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6131-L6160)

```diff
-       function qb(GG, bG, ZG, wG, SG, LG) {
-         var yG = 2 & SG,
-           kG = GG.length,
-           UG = bG.length;
-         if (kG != UG && !(yG && UG > kG)) return !1;
-         var YG = LG.get(GG);
-         if (YG && LG.get(bG)) return YG == bG;
-         var VG = -1,
-           pG = !0,
-           fG = 1 & SG ? new Cb : void 0;
-         for (LG.set(GG, bG), LG.set(bG, GG); ++VG < kG;) {
-           var QG = GG[VG],
-             KG = bG[VG];
-           if (wG) var hG = yG ? wG(KG, QG, VG, bG, GG, LG) : wG(QG, KG, VG, GG, bG, LG);
-           if (void 0 !== hG) {
-             if (hG) continue;
- ... (14 more removed lines; see GitHub link above)
+     function mr() {
+       return Lr ??= async function() {
+         if ("undefined" === typeof WebAssembly) return Hr("unsupported", "This browser has no WebAssembly"), null;
+         const MM = (0, Qr.loadShaderPackTextures)().then((() => !0), (MM => (console.error("Could not load the shader pack textures, so shader packs can't run", MM), !1)));
+         try {
+           const rM = await async function() {
+             let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TM;
+             return Pr(await MM())
+           }();
+           return await MM ? rM : null
+         } catch (rM) {
+           const MM = rM instanceof Error ? rM.message : String(rM);
+           return Hr(nr.e[rM instanceof IM ? rM.stage : "instantiate"], MM), null
```

#### 51. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6162-L6163` → after: `L589-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L589-L590) · [Before (L6162-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6162-L6163)

```diff
-         return LG.delete(GG), LG.delete(bG), pG
-       }
+       }(), Lr
+     }
```

#### 52. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6165-L6171` → after: `L592-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L592-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L592-L618) · [Before (L6165-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6165-L6171)

```diff
-       function nb(GG, bG) {
-         var ZG = GG.__data__;
-         return function(GG) {
-           var bG = typeof GG;
-           return "string" == bG || "number" == bG || "symbol" == bG || "boolean" == bG ? "__proto__" !== GG : null === GG
-         }(bG) ? ZG["string" == typeof bG ? "string" : "hash"] : ZG.map
-       }
+     function Hr(MM, rM) {
+       (0, nr.i)(zr, `Shader pack wasm ${MM}, so shader packs can't run: ${rM}`, rM, `shader_pack_${MM}`)
+     }
+   },
+   7118: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/bloxd_wasm_shader_pack_bg.3abc4329b19aa8a1b898.wasm"
+   },
+   7116: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM
+     });
+     var OM = iM(3188);
+     const SM = {
+       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
+       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
+       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
+ ... (11 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6173-L6180` → after: `L620-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L620-L624) · [Before (L6173-L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6173-L6180)

```diff
-       function gb(GG, bG) {
-         var ZG = function(GG, bG) {
-           return null == GG ? void 0 : GG[bG]
-         }(GG, bG);
-         return Pb(ZG) ? ZG : void 0
-       }
-       var eb = function(GG) {
-         return BG.call(GG)
+     function aM(MM) {
+       const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
+       if (void 0 !== rM) return {
+         sha256: rM,
+         onMismatch: jM.B
```

#### 54. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6183-L6262` → after: `L649-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L649-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L649-L654) · [Before (L6183-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6183-L6262)

```diff
-       function Rb(GG, bG) {
-         return !!(bG = null == bG ? wG : bG) && ("number" == typeof GG || IG.test(GG)) && GG > -1 && GG % 1 == 0 && GG < bG
-       }
- 
-       function Tb(GG, bG) {
-         if (bZ(GG)) return !1;
-         var ZG = typeof GG;
-         return !("number" != ZG && "symbol" != ZG && "boolean" != ZG && null != GG && !kZ(GG)) || (uG.test(GG) || !XG.test(GG) || null != bG && GG in Object(bG))
-       }
- 
-       function Hb(GG) {
-         return GG === GG && !LZ(GG)
-       }
- 
-       function tb(GG, bG) {
-         return function(ZG) {
- ... (64 more removed lines; see GitHub link above)
+     function JM(MM) {
+       if (!MM) return 0;
+       const rM = hM.indexOf(MM);
+       if (rM <= 0) throw new Error(`"${MM}" is not a shader pack hook function`);
+       return rM
+     }
```

#### 55. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6264-L6266` → after: `L656-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L656-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L656-L661) · [Before (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6264-L6266)

```diff
-       function Bb(GG, bG) {
-         return GG === bG || GG !== GG && bG !== bG
-       }
+     function dM(MM) {
+       if (0 === MM) return null;
+       const rM = hM[MM];
+       if (void 0 === rM) throw new Error(`${MM} is not a shader pack hook function id`);
+       return rM
+     }
```

#### 56. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6268-L6271` → after: `L663-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L663-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L663-L667) · [Before (L6268-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6268-L6271)

```diff
-       function GZ(GG) {
-         return function(GG) {
-           return yZ(GG) && ZZ(GG)
-         }(GG) && xG.call(GG, "callee") && (!Lb.call(GG, "callee") || BG.call(GG) == LG)
+     function yM(MM) {
+       const rM = OM.e.length;
+       return {
+         strict: MM >= rM,
+         program: OM.e[MM % rM]
```

#### 57. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6273-L6274` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L669) · [Before (L6273-L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6273-L6274)

```diff
-       xb.Cache = ib;
-       var bZ = Array.isArray;
+     }
```

#### 58. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6276-L6278` → after: `L671-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L671-L673) · [Before (L6276-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6276-L6278)

```diff
-       function ZZ(GG) {
-         return null != GG && SZ(GG.length) && !wZ(GG)
-       }
+     function lM(MM) {
+       return Number(MM.strict) * OM.e.length + OM.e.indexOf(MM.program)
+     }
```

#### 59. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6280-L6283` → after: `L675-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L675-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L675-L677) · [Before (L6280-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6280-L6283)

```diff
-       function wZ(GG) {
-         var bG = LZ(GG) ? BG.call(GG) : "";
-         return bG == VG || "[object GeneratorFunction]" == bG
-       }
+     function EM(MM) {
+       return "" === MM ? [] : MM.split(" ")
+     }
```

#### 60. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6285-L6286` → after: `L679-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L679-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L679-L689) · [Before (L6285-L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6285-L6286)

```diff
-       function SZ(GG) {
-         return "number" == typeof GG && GG > -1 && GG % 1 == 0 && GG <= wG
+     function UM(MM) {
+       const rM = {
+         variantFlags: new Uint8Array(SM),
+         hooks: new Uint8Array(SM * jM),
+         moduleCodes: Array(SM).fill(""),
+         reads: Array(2 * SM).fill("")
+       };
+       for (const iM of MM) {
+         const MM = lM(iM.key),
+           OM = (MM, rM) => null === iM.hooks.surface || iM.reads.fragment.includes(MM) ? 0 : rM;
+         rM.variantFlags[MM] = (iM.sceneDepth ? aM : 0) | (iM.movesVertices ? PM : 0) | (iM.sunShadow ? nM : 0) | (iM.airShadow ? QM : 0) | (iM.discards ? zM : 0) | OM("localPosition", LM) | OM("enchantSpeed", mM) | OM("enchantTier", HM), rM.hooks[MM * jM] = JM(iM.hooks.vertex), r … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6289-L6292` → after: `L694-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L694-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L694-L731) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6289-L6292)

```diff
-       function LZ(GG) {
-         var bG = typeof GG;
-         return !!GG && ("object" == bG || "function" == bG)
-       }
+     function GM(MM) {
+       const {
+         hooks: rM,
+         moduleCodes: iM,
+         reads: OM
+       } = MM;
+       return Array.from(MM.variantFlags, ((MM, SM) => {
+         const LM = SM * jM;
+         return {
+           key: yM(SM),
+           hooks: {
+             vertex: dM(rM[LM]),
+             surface: dM(rM[LM + 1]),
+             light: dM(rM[LM + 2])
+           },
+           moduleCode: iM[SM],
+ ... (22 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6294-L6296` → after: `L733-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L733-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L733-L741) · [Before (L6294-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6294-L6296)

```diff
-       function yZ(GG) {
-         return !!GG && "object" == typeof GG
-       }
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

#### 63. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6298-L6305` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L743-L745) · [Before (L6298-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6298-L6305)

```diff
-       function kZ(GG) {
-         return "symbol" == typeof GG || yZ(GG) && BG.call(GG) == rG
-       }
-       var UZ, YZ = AG ? (UZ = AG, function(GG) {
-         return UZ(GG)
-       }) : function(GG) {
-         return yZ(GG) && SZ(GG.length) && !!FG[BG.call(GG)]
-       };
+     function jM(MM) {
+       return `${MM.strict?"strict":"allow"}.${MM.program}`
+     }
```

#### 64. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6307-L6309` → after: `L747-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L747-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L747-L749) · [Before (L6307-L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6307-L6309)

```diff
-       function VZ(GG) {
-         return ZZ(GG) ? mb(GG) : Ab(GG)
-       }
+     function aM(MM) {
+       return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
+     }
```

#### 65. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6311-L6329` → after: `L751-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L751-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/149.js#L751-L753) · [Before (L6311-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/149.js#L6311-L6329)

```diff
-       function pZ(GG) {
-         return GG
-       }
-       GG.exports = function(GG, bG, ZG) {
-         var wG, SG = bZ(GG) || YZ(GG);
-         if (bG = Mb(bG), null == ZG)
-           if (SG || LZ(GG)) {
-             var LG = GG.constructor;
-             ZG = SG ? bZ(GG) ? new LG : [] : wZ(LG) ? LZ(wG = wb(GG)) ? Sb(wG) : {} : {}
-           } else ZG = {};
-         return (SG ? sG : ab)(GG, (function(GG, wG, SG) {
-           return bG(ZG, GG, wG, SG)
-         })), ZG
-       }
-     }(ML, ML.exports);
-     "function" === typeof SuppressedError && SuppressedError;
- ... (3 more removed lines; see GitHub link above)
+     function PM(MM, rM) {
+       return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/150.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/150.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166)

#### 1. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L4-L7` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L4-L9) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L4-L7)

```diff
-   8147: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       BloxdMsnAccountSdk: () => pG,
-       MsnSdkAdaptor: () => hG
+   37257: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => KM,
+       h: () => cM,
+       j: () => TM,
+       k: () => IM
```

#### 2. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L9-L15` → after: `L11-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L11-L22) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L9-L15)

```diff
-     var wG = ZG(1280),
-       SG = ZG(1143),
-       LG = ZG(3449),
-       yG = ZG(604),
-       kG = ZG(1691);
-     const UG = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
-     let YG = null;
+     var OM = iM(3185),
+       SM = iM(3205),
+       jM = iM(7116),
+       aM = iM(5069),
+       PM = iM(3196),
+       nM = iM(3188);
+     const QM = "bloxd-wasmDownloaded",
+       zM = 12;
+ 
+     function LM(MM) {
+       return MM.pathname.slice(MM.pathname.lastIndexOf("/") + 1)
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L18-L21` → after: `L25-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L25-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L25-L50) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L18-L21)

```diff
-       return YG ??= async function() {
-         await (0, SG.b)(UG, {}, !1);
-         for (let GG = 0; GG < 50 && !window.$msstart; GG++) await (0, yG.R)(100)
-       }(), YG
+       try {
+         if ("undefined" === typeof localStorage) return null;
+         const MM = JSON.parse(localStorage.getItem(QM) ?? "[]");
+         return Array.isArray(MM) ? MM.filter((MM => "string" === typeof MM)) : []
+       } catch (MM) {
+         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", MM), null
+       }
+     }
+     const HM = Reflect.apply,
+       hM = "undefined" === typeof Worker ? void 0 : Worker,
+       JM = hM?.prototype.postMessage,
+       dM = hM?.prototype.terminate,
+       yM = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
+       lM = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
+       EM = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
+       UM = function() {
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L24-L26` → after: `L53-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L53-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L53-L78) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L24-L26)

```diff
-       constructor() {}
-       static async setup() {
-         if (null !== (0, kG.e)()) return new pG;
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
+         const MM = this.worker;
+         if (this.worker = null, null !== MM && this.failed) throw HM(dM, MM, []), new Error("it did not run");
+         return MM
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L28-L30` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L80) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L28-L30)

```diff
-           await Promise.race([VG(), (0, yG.R)(1e4).then((() => {
-             throw new Error("Not loaded after 10000ms")
-           }))])
+           this.worker = jM?.take() ?? wM()
```

#### 6. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L32-L136` → after: `L82-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L82-L97) · [Before (L32-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L32-L136)

```diff
-           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", GG), null
-         }
-         return window.$msstart ? new pG : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
-       }
-       async getSignedInUser() {
-         const GG = (0, kG.e)();
-         if (null !== GG) return GG;
-         try {
-           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, yG.R)(1e4).then((() => {
-             throw new Error("No answer after 10000ms")
-           }))])
-         } catch (bG) {
-           return "USER_NOT_CONSENTED" !== (null === bG || void 0 === bG ? void 0 : bG.code) && console.error("Failed to get the signed-in MSN Play player:", bG), null
-         }
-       }
-       async signIn() {
- ... (89 more removed lines; see GitHub link above)
+           throw GM = !0, new Error(`The zstd decoder's worker did not start: ${(0,PM.g)(QM)}`)
+         }
+         const aM = this.worker;
+         this.decoded = (0, SM.i)(((rM, SM) => {
+           this.reject = SM;
+           const jM = (MM, rM) => {
+             HM(yM, aM, [MM, rM])
+           };
+           jM("message", (MM => {
+             OM();
+             try {
+               const OM = HM(lM, MM, []);
+               if (!0 === OM) rM();
+               else {
+                 if ("string" === typeof OM) throw OM.startsWith(PM.e) && (GM = !0), new Error(OM);
+                 iM(OM, HM(nM.u, OM, []))
```

#### 7. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L179-L182` → after: `L348-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L348-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L348-L463) · [Before (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L179-L182)

```diff
-           window.adStartSoPause(null, {
-             preventMovement: !0
-           }), ZG()
-         } else wG(`AD: Can't play MSN ${GG} ad because sdk is not loaded`)
+           try {
+             return NM(await AM(MM, jM, OM), "warm")
+           } catch (aM) {
+             const OM = await xM(MM, rM, iM, null);
+             if (null === OM) throw SM && iM.onMismatch(), aM;
+             return console.warn(`${MM.url().href} from the HTTP cache failed: ${(0,PM.g)(aM)}: loaded its copy instead`), NM(OM, SM ? "warm-refused" : "warm-broken")
+           }
+         }(MM, OM, rM, iM);
+         aM = await xM(MM, OM, rM, jM)
+       } finally {
+         jM?.stop()
+       }
+       var QM;
+       return null !== aM ? NM(aM, "cold-worker") : NM(await AM(MM, rM, iM), "cold-wasm")
+     }
+ 
+ ... (100 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L187-L209` → after: `L468-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L468-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/150.js#L468-L537) · [Before (L187-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/150.js#L187-L209)

```diff
-       let bG, ZG;
-       switch (GG.placement) {
-         case "top":
-           bG = (window.innerWidth - GG.width) / 2, ZG = fG;
-           break;
-         case "right":
-           bG = window.innerWidth - GG.width - fG, ZG = window.innerHeight / 2 - GG.height / 2 - 10;
-           break;
-         case "left":
-           bG = fG, ZG = window.innerHeight / 2 - GG.height / 2 - 10
-       }
-       return {
-         x1: bG,
-         y1: ZG,
-         x2: bG + GG.width,
-         y2: ZG + GG.height
- ... (7 more removed lines; see GitHub link above)
+       return XM.get(MM)
+     }
+ 
+     function VM(MM) {
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
+ ... (54 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 1. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/151.js#L4)

```diff
-   8155: (GG, bG, ZG) => {
+   7120: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/151.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/151.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => LG
+       loadShaderPackTextures: () => aM,
+       shaderPackTextures: () => PM
```

#### 3. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L62` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/151.js#L9-L26) · [Before (L8-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/151.js#L8-L62)

```diff
-     var wG = ZG(1280),
-       SG = ZG(1143);
-     class LG extends wG.e {
-       constructor(GG) {
-         super(), this.setOnEndCb = GG, this.name = "gamedistribution"
-       }
-       static async setup() {
-         let GG;
-         let bG;
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: ZG => {
-             const wG = () => {
-               bG && (window.adCompleteSoResume(), bG = !1), GG && (GG(), GG = null)
-             };
-             switch (ZG.name) {
- ... (39 more removed lines; see GitHub link above)
+     var OM = iM(5442);
+     let SM = null,
+       jM = null;
+ 
+     function aM() {
+       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: rM,
+           textureNameToIndex: iM,
+           textureAnimationData: jM
+         } = MM;
+         return SM ??= (0, OM.j)(iM, jM, rM), SM
+       })), jM
+     }
+ 
+     function PM() {
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/152.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/152.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f)

#### 1. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/152.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/152.js#L2)

```diff
- export const ids = [152];
+ export const ids = [151, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/152.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/152.js#L4)

```diff
-   8163: (GG, bG, ZG) => {
+   7142: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L6` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/152.js#L6-L19) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/152.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => LG
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
```

#### 4. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L8-L42` → after: `L21-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/152.js#L21-L36) · [Before (L8-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/152.js#L8-L42)

```diff
-     var wG = ZG(1280),
-       SG = ZG(1143);
-     class LG extends wG.e {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const GG = document.getElementsByClassName("ads-popup");
-         for (const bG of GG) bG instanceof HTMLElement && (bG.style.position = "fixed")
-       }
-       doAdBreakComplete() {
- ... (19 more removed lines; see GitHub link above)
+     var OM = iM(5442),
+       SM = iM(5435),
+       jM = iM(30),
+       aM = iM(3855),
+       PM = iM(7148),
+       nM = iM(7120);
+     const QM = "shaderPackChangePending";
+     let zM = null;
+ 
+     function LM(MM, rM, iM) {
+       return {
+         manifest: MM.manifest,
+         files: (0, OM.w)(MM.files),
+         validation: rM,
+         ...iM && {
+           listing: iM
```

#### 5. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L45-L51` → after: `L39-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L39-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/152.js#L39-L98) · [Before (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/152.js#L45-L51)

```diff
-       onGameplayStop() {}
-       onGameEntered() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
+     }
+ 
+     function mM(MM) {
+       return Object.keys(MM.files).map((rM => ({
+         path: rM,
+         source: MM.files[rM]
+       })))
+     }
+     let HM = Promise.resolve();
+ 
+     function hM(MM) {
+       const rM = HM.then(MM);
+       return HM = rM.catch((() => {})), rM
+     }
+ 
+     function JM(MM, rM) {
+ ... (44 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L53` → after: `L100-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L100-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/152.js#L100-L161) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/152.js#L53)

```diff
-       onGameExited() {}
+     }
+ 
+     function CM() {
+       jM.k.setItem(QM, performance.timeOrigin)
+     }
+ 
+     function eM() {
+       return jM.k.getItem(QM) === performance.timeOrigin
+     }
+ 
+     function bM(MM) {
+       return !(0, SM.k)(MM.manifest.apiVersion)
+     }
+ 
+     function wM(MM) {
+       return zM ??= MM.KD((0, nM.shaderPackTextures)()), zM
+ ... (46 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/153.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/153.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3)

#### 1. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L4-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L4-L749) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L4)

```diff
-   8169: (GG, bG, ZG) => {
+   34880: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       e: () => aM
+     });
+     var OM = iM(243),
+       SM = iM(114),
+       jM = iM(34885);
+ 
+     function aM() {
+       var MM, rM, iM;
+       return null !== (MM = (0, OM.p)(null !== (rM = null === (iM = (0, SM.o)()) || void 0 === iM ? void 0 : iM.renderer) && void 0 !== rM ? rM : null, (0, SM.k)())) && void 0 !== MM ? MM : "unknown"
+     }
+ 
+     function PM(MM, rM, iM, OM, SM) {
+       const aM = null === rM ? "untimed" : `${Math.round(rM)} ms`;
+ ... (730 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L6-L25` → after: `L751-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L751-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L751-L1977) · [Before (L6-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L6-L25)

```diff
-       AdMobSdkAdaptor: () => VG
-     });
-     var wG = ZG(1280),
-       SG = ZG(17),
-       LG = ZG(1634),
-       yG = ZG(116),
-       kG = ZG(3449),
-       UG = ZG(352);
-     const YG = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
- ... (4 more removed lines; see GitHub link above)
+       BUILT_IN_ANIMATIONS_SITE: () => TM,
+       CORE_ERRORS_SITE: () => NM,
+       EVENT_OVERFLOW_SITE: () => qM,
+       FIRST_VIEW_SITE: () => Mr,
+       JOIN_SITE: () => xM,
+       LEAVE_SITE: () => vM,
+       MAIN_THREAD_SITE: () => rr,
+       MODEL_FEED_SITE: () => FM,
+       MODEL_POOL_SITE: () => BM,
+       NON_FATAL_LOKI_REPORTS_PER_PAGE: () => jr,
+       NON_FATAL_REPORTS_PER_SESSION: () => er,
+       PREVIEW_ANIMATIONS_SITE: () => KM,
+       RENDER_RELOAD_SITE: () => IM,
+       REQUEST_DEVICE_SITE: () => ir,
+       TEXTURE_NAMES_SITE: () => XM,
+       TEXTURE_PACK_FEED_SITE: () => VM,
+ ... (1211 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L27-L37` → after: `L1979-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L1979-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L1979-L1982) · [Before (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L27-L37)

```diff
-       mobileIos: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/4652945503",
-           leaderboard_4: "ca-app-pub-5991928098122027/2921518285",
-           leaderboard_5: "ca-app-pub-5991928098122027/7518781992",
-           skyscraper_1: "ca-app-pub-5991928098122027/8344778507",
-           skyscraper_2: "ca-app-pub-5991928098122027/3781201590",
-           square_1: "ca-app-pub-5991928098122027/2468119924"
-         },
-         rewarded: "ca-app-pub-5991928098122027/5014392212",
-         interstitial: "ca-app-pub-5991928098122027/4405533493"
+       builtInAnimations: {
+         site: TM,
+         prefix: "BUILTIN",
+         name: "the built-in animations"
```

#### 4. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L40` → after: `L1985-L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L1985-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L1985-L2040) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L40)

```diff
-     class VG extends wG.e {
+ 
+     function Ti(MM, rM, iM, OM) {
+       const {
+         site: SM,
+         prefix: jM,
+         name: aM
+       } = qi[MM], {
+         stage: PM,
+         error: nM
+       } = iM;
+       return pr({
+         kind: MM,
+         code: "decode" === PM ? null === nM ? `${jM}-decode` : `${jM}-trap` : nM instanceof uM.e ? `${jM}-${nM.status}` : `${jM}-network`,
+         site: SM,
+         fatal: !1,
+         message: "decode" === PM ? `${aM} did not decode` : `${aM} could not load`,
+ ... (40 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L42-L50` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2042) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L42-L50)

```diff
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = YG[GG], LG.c.on("ads.bannerStatus", (GG => {
-           let {
-             placementId: bG,
-             shown: ZG,
-             error: wG
-           } = GG;
-           const SG = !this.bannerFirstResponseSeen.has(bG);
-           this.bannerFirstResponseSeen.add(bG), SG ? ZG ? console.log(`AD ${bG}: AdMob banner loaded`) : console.warn(`AD ${bG}: AdMob banner failed to load: ${wG}`) : ZG || console.warn(`AD ${bG}: AdMob banner refresh failed: ${wG}`)
-         }))
+         this.aL = MM, this.waitedMs = 0, this.lastMs = null
```

#### 6. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L52-L63` → after: `L2044-L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2044-L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2044-L2047) · [Before (L52-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L52-L63)

```diff
-       static async setup() {
-         const GG = "mobileIos" === yG.siteUsed ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${GG}`), new VG(GG)
-       }
-       muteGameDuring(GG) {
-         return this.fullScreenAdsInFlight++, SG.e.set({
-           soundOnFromAd: !1
-         }), GG.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && SG.e.set({
-             soundOnFromAd: !0
-           })
-         }))
+       frame(MM, rM) {
+         if (rM) return !0;
+         const iM = null === this.lastMs ? 0 : MM - this.lastMs;
+         return this.lastMs = MM, iM <= 900 && (this.waitedMs += iM), !(this.waitedMs < SM) && (this.aL(), !0)
```

#### 7. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L65-L73` → after: `L2049-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2049-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2049-L2417) · [Before (L65-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L65-L73)

```diff
-       playRewarded(GG, bG) {
-         const ZG = this.adUnitIds.rewarded;
-         this.muteGameDuring(LG.c.request("ads.showRewarded", {
-           placementId: ZG
-         })).then((ZG => {
-           let {
-             rewarded: wG
-           } = ZG;
-           wG ? GG() : bG()
+     }
+ 
+     function aM(MM, rM) {
+       return 0 === (MM & OM.T.ChunkRequested) ? "no_chunk_request" : 0 === (MM & OM.T.ChunkStored) ? "chunk_not_stored" : 0 === (MM & OM.T.MeshLanded) ? "not_meshed" : null === rM ? "no_frame_drawn" : 0 === rM.terrainParts ? "no_terrain_parts" : rM.terrainCompiling > 0 ? "terrain … [truncated]
+     }
+   },
+   41677: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM,
+       c: () => yM,
+       e: () => JM,
+       h: () => dM,
+       i: () => mM,
+       m: () => HM,
+       p: () => zM,
+       r: () => LM,
+ ... (353 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L75-L76` → after: `L2419-L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2419-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2419-L2427) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L75-L76)

```diff
-           console.warn(`AD ${ZG}: AdMob rewarded failed:`, GG), bG()
-         }))
+           this.pending.get(MM) === rM && this.giveUp(MM, rM, "", iM)
+         })) : this.fetchFound(MM, rM, iM)
+       }
+       fetchFound(MM, rM, iM) {
+         null !== iM && this.refusedPack.get(MM) === iM ? Promise.resolve(this.files.shippedUrl(MM)).then((OM => {
+           this.fetch(MM, rM, OM, iM)
+         }), (OM => {
+           this.pending.get(MM) === rM && this.giveUp(MM, rM, iM, OM)
+         })) : this.fetch(MM, rM, iM)
```

#### 9. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L78-L83` → after: `L2429-L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2429-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2429-L2439) · [Before (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L78-L83)

```diff
-       playVideoAd(GG, bG) {
-         const ZG = this.adUnitIds.interstitial;
-         this.muteGameDuring(LG.c.request("ads.showInterstitial", {
-           placementId: ZG
-         })).then((() => {
-           GG()
+       fetch(MM, rM, iM, OM) {
+         this.pending.get(MM) === rM && (rM.url = iM, rM.inPlaceOf = OM, null !== iM ? this.load(MM, rM, iM) : this.buildFile(MM, rM, "", zM))
+       }
+       load(MM, rM, iM) {
+         const OM = this.ML.get(MM);
+         (null === OM || void 0 === OM ? void 0 : OM.url) !== iM ? this.fetchFile(iM).then((OM => {
+           var SM, jM;
+           this.pending.get(MM) === rM && (this.keptTotal += OM.byteLength - (null !== (SM = null === (jM = this.ML.get(MM)) || void 0 === jM ? void 0 : jM.glb.byteLength) && void 0 !== SM ? SM : 0), this.ML.set(MM, {
+             url: iM,
+             glb: OM
+           }), this.buildFile(MM, rM, iM, OM))
```

#### 10. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L85` → after: `L2441-L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2441-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2441-L2460) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L85)

```diff
-           console.warn(`AD ${ZG}: AdMob interstitial failed:`, bG), GG()
+           this.pending.get(MM) === rM && this.fallBack(MM, rM, iM, OM)
+         })) : this.buildFile(MM, rM, iM, OM.glb)
+       }
+       buildFile(MM, rM, iM, OM) {
+         let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const aM = OM.byteLength > 0 && (0, jM.l)(iM) ? (MM | jM.e) >>> 0 : MM;
+         this.queueRecord(MM, rM, iM, OM, this.build(aM, OM), SM)
+       }
+       queueRecord(MM, rM, iM, OM, jM, PM) {
+         jM.then((jM => {
+           if (this.pending.get(MM) !== rM) return;
+           if (SM.s + (0, SM.oe)(jM.byteLength) > SM.Gc) return void this.ringRefused(MM, rM, iM, new LM(`${JM(iM)}'s record is ${jM.byteLength-aM.b} bytes, past the cmd ring's ${SM.Gc}`), PM);
+           const nM = {
+             file: MM,
+             url: iM,
+             payload: jM,
+ ... (4 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L88-L97` → after: `L2463-L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2463-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L2463-L3574) · [Before (L88-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L88-L97)

```diff
-       renderBanner(GG) {
-         const bG = (0, kG.e)(GG),
-           ZG = this.adUnitIds.banners[bG];
-         if (void 0 === ZG) return;
-         const wG = document.getElementById(GG.divId);
-         if (!wG) return void console.warn(`AD ${bG}: AdMob renderBanner called but div ${GG.divId} is not in DOM`);
-         const SG = wG.getBoundingClientRect(),
-           yG = window.innerWidth,
-           YG = window.innerHeight;
-         if (0 === yG || 0 === YG) return void console.warn(`AD ${bG}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+       async fallBack(MM, rM, iM, OM) {
+         var SM;
+         let jM = null,
+           aM = OM;
+         try {
+           jM = await this.files.shippedUrl(MM)
+         } catch (PM) {
+           aM = PM
+         }
+         this.pending.get(MM) === rM && (null !== jM && jM !== iM ? (null === (SM = this.onPackFileFailed) || void 0 === SM || SM.call(this, MM, OM), rM.ask || this.drawn.get(MM) !== jM ? (rM.url = jM, rM.inPlaceOf = iM, this.load(MM, rM, jM)) : this.pending.delete(MM)) : this.giv … [truncated]
+       }
+       ringRefused(MM, rM, iM, OM) {
+         let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         (0, jM.l)(iM) ? this.fallBack(MM, rM, iM, OM): this.giveUp(MM, rM, iM, OM, SM)
+       }
+       giveUp(MM, rM, iM, SM) {
+ ... (1096 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L99-L102` → after: `L3576-L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L3576-L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L3576-L3579) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L99-L102)

```diff
-           x1: UG.c.clamp(SG.left / yG * 100, 0, 100),
-           y1: UG.c.clamp(SG.top / YG * 100, 0, 100),
-           x2: UG.c.clamp(SG.right / yG * 100, 0, 100),
-           y2: UG.c.clamp(SG.bottom / YG * 100, 0, 100)
+           mine: iM.mine,
+           done: this.restoreLanded(iM, MM).finally((() => {
+             this.restoring === OM && (this.restoring = null)
+           }))
```

#### 13. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L104-L107` → after: `L3581-L3600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R3581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L3581-L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L3581-L3600) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L104-L107)

```diff
-         this.bannerPlacementByBloxdId.set(bG, ZG), console.log(`AD ${bG}: AdMob renderBanner placementId=${ZG} box=`, VG), LG.c.emit("ads.showBanner", {
-           placementId: ZG,
-           ...VG
-         })
+         return this.restoring = OM, OM.done
+       }
+       async restoreLanded(MM, rM) {
+         const iM = () => this.landed !== MM.mine,
+           {
+             ML: OM
+           } = MM;
+         if (null !== OM) return this.stopped() ? null : this.core.setTerrainTextures(OM.names, OM.textures, OM.sizes);
+         let SM = rM;
+         for (let jM = 0;; jM++) {
+           const rM = this.retryMs.at(jM),
+             OM = {
+               allOrNothingExcept: void 0 === rM ? void 0 : MM.failed
+             },
+             aM = await this.loadAndHandOver(MM.sources, MM.load, SM, iM, OM);
+           if (!1 !== aM || void 0 === rM || this.stopped()) return aM;
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L109-L113` → after: `L3602-L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R3602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L3602-L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L3602-L3845) · [Before (L109-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L109-L113)

```diff
-       clearBanner(GG) {
-         const bG = (0, kG.e)(GG),
-           ZG = this.bannerPlacementByBloxdId.get(bG);
-         void 0 !== ZG && (this.bannerPlacementByBloxdId.delete(bG), this.bannerFirstResponseSeen.delete(ZG), console.log(`AD ${bG}: AdMob clearBanner placementId=${ZG}`), LG.c.emit("ads.hideBanner", {
-           placementId: ZG
+       stopped() {
+         return !0 === this.core.isStopped
+       }
+       async loadAndHandOver(MM, rM, iM, OM) {
+         let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
+         if (this.stopped()) return null;
+         const jM = this.core.terrainTextureNames();
+         var aM;
+         if (0 === jM.length) return null === (aM = SM.onTaken) || void 0 === aM || aM.call(SM, null, new Set), !0;
+         let PM, QM;
+         try {
+           PM = await MM(), QM = await HM(jM, PM, rM.decode)
+         } catch (dM) {
+           return OM() ? null : (iM({
+             name: null,
+             url: null,
+ ... (228 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L116` → after: `L3848-L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L3848-L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/153.js#L3848-L3862) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/153.js#L116)

```diff
-       canShowBloxdAd(GG) {
+     }
+   },
+   41812: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => PM,
+       g: () => nM
+     });
+     var OM = iM(114);
+     let SM = !1;
+ 
+     function jM() {
+       let MM = null;
+       try {
+         return MM = document.createElement("canvas").getContext("webgl2"), null !== MM
+       } catch {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 1. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/154.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/154.js#L4)

```diff
-   8178: (GG, bG, ZG) => {
+   7124: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L6-L12` → after: `L6-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L6-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/154.js#L6-L165) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/154.js#L6-L12)

```diff
-       b: () => YG
-     });
-     var wG = ZG(2897);
-     const SG = [1, 8, 9],
-       LG = 5,
-       yG = 200,
-       kG = 150;
+       b: () => UM,
+       c: () => GM,
+       f: () => lM,
+       g: () => yM
+     });
+     var OM = iM(7131);
+     const SM = 6,
+       jM = 3,
+       aM = 1,
+       PM = 2,
+       nM = 4,
+       QM = 8,
+       zM = 16,
+       LM = 32,
+       mM = 64,
+       HM = 128,
+ ... (144 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L15-L41` → after: `L168-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L168-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/154.js#L168-L187) · [Before (L15-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/154.js#L15-L41)

```diff
-       let ZG = 0;
-       GG("addEventListener", 2, ((GG, yG) => {
-         if (!yG) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const kG = function(GG) {
-           const bG = "useractioncomplete" === GG.eventStatus || "tcloaded" === GG.eventStatus && !!GG.tcString;
-           return GG.gdprApplies && bG ? SG.every((bG => !0 === GG.purpose.consents[bG])) : null
-         }(GG);
-         if (null === kG) return;
-         const UG = ++ZG;
-         if (!kG) return void(0, wG.updateAnalyticsConsent)(!1);
-         if ("nitro" === bG) return void(0, wG.updateAnalyticsConsent)(!0);
-         const YG = window.__tcfapi;
-         YG ? YG("getNonIABVendorConsents", 2, ((GG, bG) => {
-           var SG;
-           UG === ZG && (0, wG.updateAnalyticsConsent)(bG && !0 === (null === (SG = GG.nonIabVendorConsents) || void 0 === SG ? void 0 : SG[LG]))
-         })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
- ... (11 more removed lines; see GitHub link above)
+       const iM = new DataView(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mM),
+         [OM, SM, jM, aM, PM, nM] = LM;
+       iM.setFloat32(OM.offset, rM.seconds, !0), iM.setUint32(SM.offset, rM.lit ? 1 : 0, !0);
+       for (let QM = 0; QM < 3; QM++) iM.setInt32(jM.offset + 4 * QM, rM.renderOffset[QM], !0), iM.setFloat32(aM.offset + 4 * QM, rM.mMM[QM], !0), iM.setFloat32(PM.offset + 4 * QM, rM.eyePosition[QM], !0), iM.setFloat32(nM.offset + 4 * QM, rM.shadowDirection[QM], !0)
+     }
+ 
+     function JM(MM) {
+       const rM = new Uint32Array(Math.max(1, MM.length));
+       return MM.forEach(((MM, iM) => {
+         let {
+           id: OM,
+           rotation: SM
+         } = MM;
+         rM[iM] = 65535 & OM | (3 & SM) << 16
+       })), rM
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L44` → after: `L190-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L190-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/154.js#L190-L222) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/154.js#L44)

```diff
-   8172: (GG, bG, ZG) => {
+   7131: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM,
+       h: () => aM,
+       l: () => PM,
+       m: () => SM,
+       o: () => jM
+     });
+     const OM = ["terrain", "liquid", "model"];
+ 
+     function SM() {
+       const MM = [];
+       for (const rM of [!1, !0])
+         for (const iM of OM) MM.push({
+           strict: rM,
+           program: iM
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L46-L111` → after: `L224-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L224-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/154.js#L224-L245) · [Before (L46-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/154.js#L46-L111)

```diff
-       AdinPlaySdkAdaptor: () => YG
-     });
-     var wG = ZG(1280),
-       SG = ZG(1143),
-       LG = ZG(233),
-       yG = ZG(8178),
-       kG = ZG(2897);
-     const UG = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
-     class YG extends wG.e {
-       constructor() {
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = UG
-       }
-       static async setup() {
-         return (0, LG.canonicaliseZonesWhenIdle)(UG), (0, kG.setUpGtag)(), await (0, SG.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, yG.b)("inMobi"), new YG
-       }
-       playRewarded(GG, bG) {
- ... (50 more removed lines; see GitHub link above)
+       SHADER_PACK_INPUTS_BINDING: () => jM.b,
+       SHADER_PACK_INPUTS_GROUP: () => jM.f,
+       SHADER_PACK_INPUTS_SIZE: () => jM.h,
+       SHADER_PACK_INPUTS_VAR: () => jM.i,
+       SHADER_PACK_MODES: () => jM.l,
+       SHADER_PACK_PROGRAMS: () => OM.e,
+       SHADER_PACK_SCENE_DEPTH_BINDING: () => jM.n,
+       SHADER_PACK_SUN_SHADOW_BINDINGS: () => jM.p,
+       SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => jM.q,
+       SHADER_PACK_TEXTURES_BINDING: () => jM.r,
+       encodeTextureLayers: () => jM.s,
+       flattenVariants: () => SM.b,
+       isVariantOff: () => OM.h,
+       packRunsIn: () => OM.l,
+       shaderPackInputsWgsl: () => jM.w,
+       shaderPackVariantKeys: () => OM.m,
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/155.js#L4-L190) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/155.js#L4)

```diff
-   8178: (GG, bG, ZG) => {
+   44389: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       compilePagePack: () => QM,
+       prefetchCompiler: () => PM,
+       reconcileHint: () => nM
+     });
+     var OM = iM(7111),
+       SM = iM(7142),
+       jM = iM(7120),
+       aM = iM(7134);
+ 
+     function PM() {
+       (0, OM.loadPageShaderPackCompiler)()
+     }
+     async function nM() {
+       const MM = await (0, OM.loadPageShaderPackCompiler)();
+ ... (171 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L6` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/155.js#L192-L193) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/155.js#L6)

```diff
-       b: () => YG
+       e: () => nM,
+       f: () => PM
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L8-L104` → after: `L195-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L195-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/155.js#L195-L255) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/155.js#L8-L104)

```diff
-     var wG = ZG(2897);
-     const SG = [1, 8, 9],
-       LG = 5,
-       yG = 200,
-       kG = 150;
- 
-     function UG(GG, bG) {
-       let ZG = 0;
-       GG("addEventListener", 2, ((GG, yG) => {
-         if (!yG) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const kG = function(GG) {
-           const bG = "useractioncomplete" === GG.eventStatus || "tcloaded" === GG.eventStatus && !!GG.tcString;
-           return GG.gdprApplies && bG ? SG.every((bG => !0 === GG.purpose.consents[bG])) : null
-         }(GG);
-         if (null === kG) return;
-         const UG = ++ZG;
- ... (81 more removed lines; see GitHub link above)
+     var OM = iM(7142),
+       SM = iM(7120),
+       jM = iM(106);
+     const aM = 100;
+     async function PM(MM, rM) {
+       var iM;
+       let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (iM = navigator.gpu) && void 0 !== iM ? iM : null;
+       const aM = MM.zMM(rM, (0, SM.shaderPackTextures)());
+       if (aM.errors.length > 0) return QM(MM, aM.errors, aM.offInStrict);
+       const PM = await async function(MM) {
+         if (!MM) return null;
+         try {
+           const rM = await (0, jM.z)(MM);
+           return rM ? await rM.requestDevice() : null
+         } catch (rM) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
+ ... (45 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L107-L182` → after: `L258-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L258-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/155.js#L258-L267) · [Before (L107-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/155.js#L107-L182)

```diff
-         let UG = !1;
-         const YG = (GG, bG) => {
-             if (!UG) {
-               if (!GG) return console.log(`AD: Nitro video not filled: ${bG}`), void yG(!1);
-               UG = !0, clearTimeout(JG), JG = setTimeout((() => {
-                 console.log("AD: Nitro video never completed"), yG(!1)
-               }), 12e4)
-             }
-           },
-           VG = GG => {
-             var bG;
-             (null === (bG = GG.detail) || void 0 === bG ? void 0 : bG.id) === kG && YG("filled" === GG.detail.status, GG.detail.status)
-           },
-           pG = GG => {
-             var bG, ZG;
-             (null === (bG = GG.detail) || void 0 === bG || null === (ZG = bG.adInfo) || void 0 === ZG ? void 0 : ZG.adUnitCode) === kG && YG("blank" !== GG.detail.type, GG.detail.type)
- ... (60 more removed lines; see GitHub link above)
+       return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
+     }
+ 
+     function QM(MM, rM, iM) {
+       return {
+         headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
+         ok: 0 === rM.length,
+         errors: rM.slice(0, aM),
+         moreErrors: Math.max(0, rM.length - aM),
+         offInStrict: iM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 1. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/156.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/156.js#L4-L6)

```diff
-   8187: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       AdsenseForGamesSdkAdaptor: () => LG
+   7154: (MM, rM, iM) => {
+     iM.d(rM, {
+       encodeBinaryMessageWithMetricsCookies: () => SM
```

#### 2. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L8-L50` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/156.js#L8-L11) · [Before (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/156.js#L8-L50)

```diff
-     var wG = ZG(1280),
-       SG = ZG(1143);
-     class LG extends wG.e {
-       constructor() {
-         super(), this.name = "adsense"
-       }
-       static async setup() {
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(GG) {
-           window.adsbygoogle.push(GG)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, SG.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
- ... (27 more removed lines; see GitHub link above)
+     var OM = iM(4129);
+ 
+     function SM(MM) {
+       return OM.i.toBuffer(MM)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L4)

```diff
-   8191: (GG, bG, ZG) => {
+   7167: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L6)

```diff
-       AditudeSdkAdaptor: () => yG
+       BloxdDiscordSDK: () => JM,
+       DiscordLoginCancelledError: () => hM,
+       discordPopupTimeoutMs: () => HM
```

#### 3. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L8-L14` → after: `L10-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L10-L21) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L8-L14)

```diff
-     var wG = ZG(1280),
-       SG = ZG(1143);
-     const LG = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class yG extends wG.e {
+     var OM = iM(143),
+       SM = iM(1232),
+       jM = iM(1144),
+       aM = iM(1154),
+       PM = iM.n(aM),
+       nM = iM(1202),
+       QM = iM(30),
+       zM = iM(625),
+       LM = iM(1429),
+       mM = iM(1211);
+     const HM = 6e5;
+     class hM extends Error {
```

#### 4. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L16` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L23) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(...arguments), this.name = jM.discordLoginCancelledErrorName
```

#### 5. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L18-L35` → after: `L25-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L25-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L25-L35) · [Before (L18-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L18-L35)

```diff
-       static async setup() {
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, SG.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new yG
-       }
-       playVideoAd(GG, bG) {
-         this.playVideoOrRewarded("video", GG, GG)
-       }
-       playRewarded(GG, bG) {
-         this.playVideoOrRewarded("rewarded", GG, bG)
-       }
-       renderBanner(GG) {
-         const bG = this.getBaseDivId(GG.adId, GG.width, GG.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: GG.divId,
- ... (2 more removed lines; see GitHub link above)
+     }
+     class JM {
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const MM = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (rM => {
+           var iM;
+           if (rM.origin !== MM || "oauth_authentication_discord" !== (null === (iM = rM.data) || void 0 === iM ? void 0 : iM.type)) return;
+           if ("string" !== typeof rM.data.code || !rM.data.code) return void this.failPopup(new hM("Discord authentication was cancelled on Discord"));
+           const OM = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === OM || void 0 === OM || OM(rM.data.code)
```

#### 6. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L38-L39` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L38-L39) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L38-L39)

```diff
-       getBaseDivId(GG, bG, ZG) {
-         return `pb-slot-bloxdio-${bG}-${ZG}${GG>1?`-${GG}`:""}`
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L41)

```diff
-       playVideoOrRewarded(GG, bG, ZG) {
+       failPopup(MM) {
```

#### 8. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L43-L77` → after: `L43-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L43-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/157.js#L43-L60) · [Before (L43-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/157.js#L43-L77)

```diff
-         let SG = !1;
-         const yG = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", SG = !0
-           },
-           kG = (GG, bG) => {
-             console.error(`AD: Error while playing Aditude video ad: ${GG}:`, bG), yG(), ZG()
-           };
-         if (console.log(`AD: Requesting Aditude ${GG} ad`), void 0 === (null === (wG = window.tude) || void 0 === wG ? void 0 : wG.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${GG} ad playing`), void kG("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: LG[GG],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((ZG => {
- ... (19 more removed lines; see GitHub link above)
+         const iM = this.popupWindowPromiseReject;
+         null === (rM = this.popupWindow) || void 0 === rM || rM.close(), this.resetPopupState(), null === iM || void 0 === iM || iM(MM)
+       }
+       openDiscordOAuthWindow() {
+         const MM = mM.e.discordClientID;
+         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${MM}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
+       }
+       async showDiscordAuthPrompt() {
+         return new Promise(((MM, rM) => {
+           LM.NotificationProvider.showPromptPopup({
+             title: "Discord Login Required",
+             confirmText: "Continue",
+             confirmTooltip: "Open Discord login window",
+             cancelText: "Cancel",
+             cancelTooltip: "Cancel Discord login"
+           }).getResult().then((iM => {
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L4-L6)

```diff
-   8917: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => kG
+   7173: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       BloxdFirebaseSdk: () => mM
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L8-L58` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L8-L13) · [Before (L8-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L8-L58)

```diff
-     var wG = ZG(17),
-       SG = ZG(1151),
-       LG = ZG(5019),
-       yG = ZG(1067);
- 
-     function kG(GG) {
-       let {
-         note: bG
-       } = GG;
-       const {
-         t: ZG
-       } = (0, SG.w)(), {
-         clientEscMenuOptions: kG
-       } = (0, wG.o)(["clientEscMenuOptions"]);
-       return (0, yG.jsx)(LG.c, {
-         label: ZG("touchSettings:actionButtons"),
- ... (35 more removed lines; see GitHub link above)
+     var OM = iM(1940),
+       SM = iM(3241),
+       jM = iM(94),
+       aM = iM(83),
+       PM = iM(1771),
+       nM = iM(2157);
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L60-L62` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L15-L20) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L60-L62)

```diff
-       floating: "settingsMenu:joystickFloating",
-       fixed_shown: "settingsMenu:joystickFixed",
-       fixed_hidden: "settingsMenu:joystickHidden"
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L64-L588` → after: `L22-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L22-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L22-L30) · [Before (L64-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L64-L588)

```diff
-     var uG = ZG(8926);
-     var iG = ZG(1415),
-       CG = ZG(1311),
-       WG = ZG(8933),
-       mG = ZG(1359),
-       IG = ZG(1016),
-       FG = ZG(8942),
-       vG = ZG(2441);
-     const aG = {
-         sprint: "joystick",
-         jump: "cluster",
-         crouch: "cluster",
-         attack: "cluster",
-         use: "cluster",
-         extra: "cluster",
-         game: "cluster",
- ... (509 more removed lines; see GitHub link above)
+     var zM = iM(3258),
+       LM = iM(1810);
+     class mM {
+       constructor() {}
+       static async setup() {
+         try {
+           return await mM.setupInternal()
+         } catch (MM) {
+           return console.error("Failed to setup Firebase SDK:", MM), null
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1088-L1166` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L33-L37) · [Before (L1088-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1088-L1166)

```diff
-     }
- 
-     function eb(GG, bG, ZG) {
-       let {
-         keysAbove: wG
-       } = ZG;
-       const SG = [...GG.documentElement.classList].filter((GG => !Ab.has(GG) && !qb.has(GG))),
-         LG = [...bG.documentElement.classList].filter((GG => qb.has(GG))),
-         yG = [Pb, Mb.hotbar, Mb.hasShop, Mb.hasBag];
-       wG && yG.push(Mb.keysAbove), bG.documentElement.className = [...SG, ...yG, ...LG].join(" ")
-     }
-     const Rb = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
- 
-     function Tb(GG, bG, ZG, wG, SG) {
-       const LG = (0, vG.G)(ZG, wG, "joystick"),
-         yG = (0, fb.I)((0, fb.S)(ZG, wG, SG), wG),
- ... (63 more removed lines; see GitHub link above)
+       static async setupInternal() {
+         const MM = await Promise.all([iM.e(293), iM.e(292)]).then((() => iM(41593))),
+           rM = await Promise.all([iM.e(293), iM.e(294)]).then((() => iM(41619))),
+           HM = await Promise.all([iM.e(293), iM.e(295)]).then((() => iM(41628))),
+           hM = MM.initializeApp({
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1168-L1303` → after: `L39-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L39-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L39-L66) · [Before (L1168-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1168-L1303)

```diff
-             cluster: null !== bG && void 0 !== bG ? bG : void 0
-           }
-         };
-       let pG = null;
-       const fG = GG => {
-           pG = GG;
-           const bG = SG(GG);
-           return bG && {
-             ...bG,
-             boxes: VG(bG.boxes)
-           }
-         },
-         QG = kG ? {
-           ...kG,
-           boxes: VG(kG.boxes)
-         } : fG(GG),
- ... (120 more removed lines; see GitHub link above)
+             measurementId: SM.bloxdGa4MeasurementId
+           });
+         (0, SM.setUpGtag)(), window.gtag("config", SM.bloxdGa4MeasurementId), (0, SM.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const JM = rM.getAnalytics(hM),
+           dM = {
+             portal: jM.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         rM.setUserProperties(JM, dM);
+         const yM = HM.initializeAuth(hM, {
+           persistence: [HM.indexedDBLocalPersistence, HM.browserLocalPersistence, HM.browserSessionPersistence],
+           popupRedirectResolver: (0, aM.isMobileApp)() ? void 0 : HM.browserPopupRedirectResolver
+         });
+         HM.useDeviceLanguage(yM);
+         const lM = new HM.GoogleAuthProvider;
+         lM.setCustomParameters({
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1305-L1593` → after: `L68-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L68-L73) · [Before (L1305-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1305-L1593)

```diff
-       return {
-         busy: EG,
-         handlers: {
-           onPointerDown: GG => {
-             var bG;
-             if (!kG || zG.current || !GG.target.closest(".HudPreviewHandle")) return;
-             const wG = ZG.current.getBoundingClientRect(),
-               SG = {
-                 x: (GG.clientX - wG.left) / YG,
-                 y: (GG.clientY - wG.top) / YG
-               },
-               LG = (0, FG.t)(SG, fG, 40 / YG),
-               yG = null !== QG ? qG.get(QG) : void 0,
-               UG = void 0 !== yG && null !== (0, FG.t)(SG, fG.filter((GG => {
-                 let {
-                   id: bG
- ... (273 more removed lines; see GitHub link above)
+         window.gtag("set", {
+           cookie_flags: "SameSite=None;Secure"
+         }), await new Promise((MM => {
+           const rM = HM.onIdTokenChanged(yM, (iM => {
+             rM(), MM()
+           }))
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1595-L1640` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L75-L77) · [Before (L1595-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1595-L1640)

```diff
-         for (const ZG of YG.querySelectorAll(`[${HG}]`)) bG.observe(ZG);
-         return null === (GG = YG.fonts) || void 0 === GG || GG.ready.then(uG), () => {
-           bG.disconnect()
-         }
-       }), [YG, uG, UG, yG]), {
-         doc: YG,
-         boxes: pG.boxes,
-         pieces: pG.pieces,
-         insets: QG,
-         keysAbove: hG,
-         ready: JG,
-         settled: zG
-       }
-     }
-     const JZ = ["Above", "Below", "Left", "Right"];
- 
- ... (30 more removed lines; see GitHub link above)
+         class CM extends mM {
+           setUserProperties(MM) {
+             rM.setUserProperties(JM, MM)
```

#### 9. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1642-L1779` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L79-L80) · [Before (L1642-L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1642-L1779)

```diff
-         },
-         pG = VZ(ZG, GG),
-         fG = {
-           left: 0,
-           top: 0,
-           right: SG.width,
-           bottom: SG.height
-         };
-       return JZ[(0, FG.p)(JZ.map((GG => VG[GG])), pG, {
-         bounds: fG
-       })]
-     }
- 
-     function zZ() {
-       const [GG, bG] = (0, Ub.b)();
-       return (0, SG.useMemo)((() => ({
- ... (122 more removed lines; see GitHub link above)
+           onIdTokenChanged(MM) {
+             HM.onIdTokenChanged(yM, MM)
```

#### 10. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1781-L1826` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L82-L83) · [Before (L1781-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1781-L1826)

```diff
-         });
-       (0, SG.useLayoutEffect)((() => {
-         MG.current = Ub.busy
-       }), [Ub.busy]);
-       const Qb = (0, SG.useRef)([]),
-         Kb = (0, SG.useRef)(uG.hudElements);
-       (0, SG.useEffect)((() => {
-         for (const SG of Object.keys(uG.hudElements)) {
-           var GG, bG, ZG, wG;
-           (null !== (GG = null === (bG = uG.hudElements[SG]) || void 0 === bG ? void 0 : bG[2]) && void 0 !== GG ? GG : 1) > (null !== (ZG = null === (wG = Kb.current[SG]) || void 0 === wG ? void 0 : wG[2]) && void 0 !== ZG ? ZG : 1) && VG(SG) && !(0, Vb.C)(SG, uG.hudElements[SG] … [truncated]
-         }
-         Kb.current = uG.hudElements
-       }), [uG.hudElements, VG, DG]), (0, SG.useEffect)((() => {
-         if (!NG) return;
-         const GG = (0, FG.x)(EG.width, EG.height, HG);
-         for (const ZG of ((GG, bG, ZG, wG) => {
- ... (30 more removed lines; see GitHub link above)
+           canSignIn() {
+             return !0
```

#### 11. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1828-L2053` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L85) · [Before (L1828-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L1828-L2053)

```diff
-         }
-       }), [RG, NG]), (0, SG.useImperativeHandle)(rG, (() => ({
-         setScale: (GG, bG) => {
-           kb((0, vG.jb)(ZG, LG, GG, {
-             scale: bG
-           }))
-         },
-         setOpacity: GG => {
-           xG({
-             ...ZG,
-             hudKeyOpacity: GG
-           })
-         },
-         keepLocks: (GG, bG) => (wb(), bZ(GG, bG, LG, EG, BG, {
-           canKeep: Lb
-         })),
- ... (210 more removed lines; see GitHub link above)
+           async signInWithPopup(MM) {
```

#### 12. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2055` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L87-L88) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2055)

```diff
-             window.removeEventListener("popstate", ZG), !GG && null !== (bG = window.history.state) && void 0 !== bG && bG[XZ] && window.history.back()
+             const iM = await HM.signInWithPopup(yM, GM[MM]);
+             return null !== (rM = null === iM || void 0 === iM ? void 0 : iM.user) && void 0 !== rM ? rM : null
```

#### 13. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2057-L2076` → after: `L90-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L90-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L90-L92) · [Before (L2057-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2057-L2076)

```diff
-         }), [])
-       }(VG), (0, SG.useEffect)((() => {
-         function GG(GG) {
-           "Escape" === GG.key && (GG.stopPropagation(), VG())
-         }
-         return window.addEventListener("keydown", GG, !0), () => {
-           window.removeEventListener("keydown", GG, !0)
-         }
-       }), [VG]);
-       const {
-         selected: KG
-       } = pG, hG = (0, SG.useRef)(null), dG = (0, SG.useRef)(null), [JG, rG] = (0, SG.useState)(!1);
-       oZ(dG, !JG);
-       const [zG, EG] = (0, SG.useState)(null), [XG, uG] = (0, SG.useState)([]), [iG, CG] = vb(), WG = (0, SG.useRef)(pG.selected);
-       WG.current = pG.selected;
-       const mG = (0, SG.useRef)({}),
- ... (4 more removed lines; see GitHub link above)
+           async getCurrentUser(MM) {
+             const rM = yM.currentUser;
+             if (!rM) return null;
```

#### 14. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2078-L2341` → after: `L94-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L94-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L94-L96) · [Before (L2078-L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2078-L2341)

```diff
-               innerWidth: SG,
-               innerHeight: LG
-             } = window, yG = GG.offsetWidth, kG = GG.offsetHeight, UG = Math.max(Hb()[0], 6), YG = [];
-             for (const fG of [UG, .2 * LG, .5 * LG - kG / 2, .33 * LG])
-               for (const GG of [.5, .3, .7]) YG.push({
-                 left: Math.max(0, Math.min(SG - yG - 6, Math.max(6, SG * GG - yG / 2))),
-                 top: fG
-               });
-             const VG = YG.map((GG => ({
-                 left: GG.left - 6,
-                 top: GG.top - 6,
-                 right: GG.left + yG + 6,
-                 bottom: GG.top + kG + 6
-               }))),
-               pG = VZ(bG, ZG);
-             return YG[(0, FG.p)(VG, pG, {
- ... (248 more removed lines; see GitHub link above)
+               signInProvider: iM
+             } = await rM.getIdTokenResult(!1);
+             return iM === OM.j[MM] ? rM : null
```

#### 15. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2343-L2430` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L98-L99) · [Before (L2343-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2343-L2430)

```diff
-         }) : (0, oG.jsx)(EZ, {
-           ...bG
-         }),
-         zG = GG => (0, oG.jsxs)(YG.K, {
-           className: "HudLayoutFullScreenButton",
-           ariaLabel: UG("hudLayout:fullScreen"),
-           analyticsClick: {
-             id: "hud_layout.full_screen"
-           },
-           onClick: LG,
-           children: [(0, oG.jsx)(IG.c, {
-             name: "expand"
-           }), GG && (0, oG.jsx)("span", {
-             children: UG("hudLayout:fullScreen")
-           })]
-         });
- ... (72 more removed lines; see GitHub link above)
+           async signOut(MM) {
+             null !== await this.getCurrentUser(MM) && await HM.signOut(yM)
```

#### 16. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2470-L2577` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L102-L106) · [Before (L2470-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2470-L2577)

```diff
-       }(yG, UG), [hG, dG] = (0, SG.useState)([]), [JG, rG] = (0, SG.useState)(null), [zG, EG] = vb(), XG = (0, SG.useCallback)(((GG, bG, ZG) => {
-         dG(bG), EG(ZG);
-         const wG = Object.keys(GG);
-         rG((GG => (null === GG || void 0 === GG ? void 0 : GG.size) === wG.length && wG.every((bG => GG.has(bG))) ? GG : new Set(wG)))
-       }), [EG]), {
-         gameState: uG
-       } = (0, VG.o)(["gameState"]), WG = (0, vZ.l)(), mG = (0, aZ.o)(), [IG] = (0, SG.useState)((() => {
-         var GG, bG, ZG, wG;
-         return "inGame" === uG ? (0, Kb.s)(document, WG, {
-           rightOfCamera: null !== (GG = null === (bG = mG.rightOfCamera) || void 0 === bG ? void 0 : bG.icon) && void 0 !== GG ? GG : null,
-           leftEnd: null !== (ZG = null === (wG = mG.leftEnd) || void 0 === wG ? void 0 : wG.icon) && void 0 !== ZG ? ZG : null
-         }) : Kb.d
-       })), FG = (0, SG.useRef)(null), aG = (0, SG.useRef)(null), cG = function(GG) {
-         const [bG, ZG] = (0, SG.useState)((() => .4 * window.innerHeight));
-         return (0, SG.useLayoutEffect)((() => {
-           var bG;
- ... (92 more removed lines; see GitHub link above)
+         async function eM(MM, rM) {
+           const iM = await PM.e.request(`${MM}.${rM}`, {});
+           if (null === iM) return null;
+           const OM = "google" === MM ? HM.GoogleAuthProvider.credential(iM.idToken) : EM.credential({
+             idToken: iM.idToken
```

#### 17. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2579-L2664` → after: `L108-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L108-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L108-L127) · [Before (L2579-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2579-L2664)

```diff
-           if (wG) return wG;
-           const SG = ZG && xG.has(bG) ? GG("hudLayout:lockedNote") : null,
-             LG = ZG && AG.has(bG) ? GG("hudLayout:contextSlotNote") : null;
-           return SG || LG ? (0, oG.jsxs)(oG.Fragment, {
-             children: [SG && (0, oG.jsx)("span", {
-               children: SG
-             }), LG && (0, oG.jsx)("span", {
-               children: LG
-             })]
-           }) : ZG && "cluster" === bG ? GG("hudLayout:clusterNote") : ZG && "inventory" === bG ? GG("hudLayout:inventoryNote") : ZG && "menu" === bG ? GG("hudLayout:menuNote") : ZG && (0, Vb.C)(bG, yG.hudElements[bG]) && yb(bG) ? GG("hudLayout:rowIconNote") : ZG && "arrows" === b … [truncated]
-             name: tG(bG, jG, GG, MG)
-           }) : null
-         }
-       };
-       return (0, oG.jsxs)("div", {
-         ref: aG,
- ... (70 more removed lines; see GitHub link above)
+           return (await HM.signInWithCredential(yM, OM)).user
+         }
+         class bM extends mM {
+           setUserProperties(MM) {
+             rM.setUserProperties(JM, MM)
+           }
+           onIdTokenChanged(MM) {
+             HM.onIdTokenChanged(yM, MM)
+           }
+           canSignIn(MM) {
+             return null !== (0, nM.d)(MM)
+           }
+           async signInWithPopup(MM) {
+             const rM = (0, nM.d)(MM);
+             if (null === rM) return console.warn(`The app can't sign in with ${MM}; check canSignIn first`), null;
+             try {
+ ... (4 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2666-L2689` → after: `L129-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L129-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L129-L136) · [Before (L2666-L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2666-L2689)

```diff
-           }), (0, oG.jsx)(QG.c, {
-             label: GG("hudLayout:snapCentre"),
-             checked: bG.hudSnapCentre,
-             onClick: GG => {
-               (0, vG.db)(GG)
-             },
-             circleInfoText: GG("hudLayout:snapCentreInfo")
-           }), (0, oG.jsx)(WZ, {
-             ...Ub
-           }), (0, oG.jsx)(QG.e, {
-             label: GG("hudLayout:shape"),
-             options: vG.O.map((bG => ({
-               value: bG,
-               label: GG(`hudLayout:shape_${bG}`)
-             }))),
-             value: bG.hudShape,
- ... (8 more removed lines; see GitHub link above)
+           }
+           async getCurrentUser(MM) {
+             const rM = yM.currentUser;
+             if (rM) {
+               const {
+                 signInProvider: iM
+               } = await rM.getIdTokenResult(!1);
+               if (iM === OM.j[MM]) return rM
```

#### 19. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2691-L2707` → after: `L138-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L138-L143) · [Before (L2691-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2691-L2707)

```diff
-           }), (0, oG.jsx)(QG.f, {
-             name: GG("hudLayout:opacity"),
-             min: vG.i,
-             max: 1,
-             step: .05,
-             initValue: bG.hudKeyOpacity,
-             format: GG => `${Math.round(100*GG)}%`,
-             circleInfoText: GG("hudLayout:opacityInfo"),
-             onChange: GG => {
-               var bG;
-               null === (bG = FG.current) || void 0 === bG || bG.setOpacity(GG)
-             },
-             onChangeComplete: GG => {
-               (0, vG.ab)(GG), (0, iG.reportAnalyticsClick)({
-                 id: "hud_layout.edit",
-                 value: "opacity"
- ... (1 more removed lines; see GitHub link above)
+             const iM = (0, nM.d)(MM);
+             if (null === iM) return null;
+             try {
+               return await eM(iM, "getCurrentUser")
+             } catch (SM) {
+               return console.error(`Failed to get the current ${MM} user from the app:`, SM), null
```

#### 20. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L2753-L2871` → after: `L146-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L146-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L146-L156) · [Before (L2753-L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L2753-L2871)

```diff
-         }), bG && (0, oG.jsx)(AZ, {})]
-       })
-     }, function() {
-       const {
-         t: GG
-       } = (0, wG.w)(), {
-         joystickMode: bG,
-         touchSpeedCurve: ZG,
-         autorun: SG,
-         jumpLock: LG,
-         touchEdgeGuard: yG
-       } = (0, VG.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
-       return (0, oG.jsxs)(oG.Fragment, {
-         children: [(0, oG.jsx)(QG.e, {
-           label: GG("settingsMenu:joystick"),
-           options: EG.Ub.map((bG => ({
- ... (103 more removed lines; see GitHub link above)
+           async signOut(MM) {
+             const rM = (0, nM.d)(MM);
+             null !== rM && PM.e.request(`${rM}.signOut`, {}).catch((rM => {
+               console.error(`Failed to sign out of ${MM} in the app:`, rM)
+             }));
+             const iM = yM.currentUser;
+             if (iM) {
+               const {
+                 signInProvider: rM
+               } = await iM.getIdTokenResult(!1);
+               rM === OM.j[MM] && await HM.signOut(yM)
```

#### 21. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L3190-L3233` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/158.js#L160) · [Before (L3190-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/158.js#L3190-L3233)

```diff
-       },
-       QG = (GG, bG, ZG) => {
-         if (GG.readOnly) return;
-         const SG = GG instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
-         Object.getOwnPropertyDescriptor(SG, "value").set.call(GG, bG.value), pG(GG) && GG.setSelectionRange(bG.start, bG.end), (0, wG.g)(GG, new InputEvent("input", {
-           bubbles: !0,
-           inputType: ZG
-         }))
-       };
-     let KG = !1;
-     const hG = (GG, bG) => !!document.execCommand(GG, !1, bG) || (KG || (KG = !0, console.warn(`execCommand("${GG}") failed; the on-screen keyboard is setting the value directly`)), !1),
-       dG = (GG, bG) => {
-         hG("insertText", bG) || QG(GG, function(GG, bG) {
-           let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-           const wG = GG.value.slice(0, GG.start),
-             SG = GG.value.slice(GG.end);
- ... (28 more removed lines; see GitHub link above)
+         return (0, aM.isMobileApp)() ? (await PM.e.ready, new bM) : new CM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/159.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/159.js#L4-L15)

```diff
-   36955: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => LG,
-       f: () => hG,
-       h: () => dG,
-       j: () => kG,
-       k: () => fG,
-       m: () => JG,
-       p: () => pG,
-       r: () => zG,
-       t: () => KG,
-       x: () => rG
+   7180: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       BloxdDiscordActivitySdk: () => EM
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L17-L26` → after: `L8-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L8-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/159.js#L8-L271) · [Before (L17-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/159.js#L17-L26)

```diff
-     var wG = ZG(17),
-       SG = ZG(19);
-     const LG = "clientGameInventoryButtonsChanged",
-       yG = new Map;
- 
-     function kG() {
-       return [...yG.values()].sort(((GG, bG) => {
-         var ZG, wG;
-         return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
-       }))
+     var OM = iM(7185),
+       SM = iM(1232),
+       jM = iM(1188),
+       aM = iM(625),
+       PM = iM(1258),
+       nM = iM(1830),
+       QM = iM(1373),
+       zM = iM(821),
+       LM = iM(19),
+       mM = iM(1211),
+       HM = iM(2482),
+       hM = function(MM) {
+         return MM.APPLICATION_COMMANDS = "applications.commands", MM.IDENTIFY = "identify", MM.EMAIL = "email", MM.GUILDS = "guilds", MM.READ_DM_CHANNELS = "dm_channels.read", MM.WRITE_ACTIVITIES = "rpc.activities.write", MM
+       }(hM || {}),
+       JM = function(MM) {
+         return MM[MM.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", MM[MM.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", MM[MM.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", MM[MM.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", MM[MM.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", MM[MM.RATELIMITE … [truncated]
+ ... (248 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L4)

```diff
-   39487: (GG, bG, ZG) => {
+   7185: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L7` → after: `L12-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L12-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L12-L28) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L7)

```diff
-       g: () => yG
+       g: () => nO,
+       f: () => PO,
+       h: () => Ti,
+       l: () => qi,
+       m: () => pO,
+       n: () => MO,
+       q: () => DO,
+       u: () => bO,
+       x: () => sO,
+       y: () => Vi,
+       z: () => tO,
+       D: () => RO,
+       H: () => WO,
+       K: () => ci,
+       J: () => OO,
+       M: () => uO,
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L10` → after: `L30-L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L30-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L30-L3158) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L9-L10)

```diff
-     var wG = ZG(19);
-     let SG = !1;
+     var SM = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+ 
+     function jM(MM) {
+       return MM && MM.__esModule && Object.prototype.hasOwnProperty.call(MM, "default") ? MM.default : MM
+     }
+     var aM = {
+       exports: {}
+     };
+     ! function(MM) {
+       var rM = Object.prototype.hasOwnProperty,
+         iM = "~";
+ 
+       function OM() {}
+ 
+       function SM(MM, rM, iM) {
+         this.jL = MM, this.context = rM, this.once = iM || !1
+ ... (3113 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L12` → after: `L3160-L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3160-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L3160-L3831) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L12)

```diff
-     function LG() {
+         function GM(MM, rM, OM) {
+           var SM, jM, aM = MM.length,
+             PM = new Array(aM),
+             zM = -rM,
+             LM = iM;
+           for (SM = 0; SM < aM; SM++) jM = MM[SM] + zM, zM = Math.floor(jM / LM), jM %= LM, PM[SM] = jM < 0 ? jM + LM : jM;
+           return "number" === typeof(PM = HM(PM)) ? (OM && (PM = -PM), new QM(PM)) : new nM(PM, OM)
+         }
+ 
+         function CM(MM, rM) {
+           var OM, SM, jM, aM, PM = MM.length,
+             nM = rM.length,
+             QM = JM(PM + nM),
+             zM = iM;
+           for (jM = 0; jM < PM; ++jM) {
+             aM = MM[jM];
+ ... (656 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L17` → after: `L3836-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3836-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L3836-L3841) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L17)

```diff
-       SG !== GG && (SG = GG, wG.l.xh("replayViewer|videoExportChanged"))
+       const rM = [];
+       for (let iM = 0; iM < MM.length; iM++) {
+         let OM = Number(MM[iM]);
+         for (let MM = 0; OM || MM < rM.length; MM++) OM += 10 * (rM[MM] || 0), rM[MM] = OM % 16, OM = (OM - rM[MM]) / 16
+       }
+       return rM
```
