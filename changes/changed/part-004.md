# Changed — Bundle Modifications Report (Part 004 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `4 / 65` (**317** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 40. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L580-L586` → after: `L1512-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1512-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1512-L1570) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L580-L586)

```diff
-       return function(DD) {
-         if (Array.isArray(DD)) return Kz(DD)
-       }(DD) || function(DD) {
-         if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
-       }(DD) || sz(DD) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       let {
+         editor: ip,
+         className: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Ip.H)(), {
+         schematicData: Ap,
+         formEnabled: Pp,
+         publishFormEnabled: Wp
+       } = ip, yp = !Pp || !Wp;
+       return (0, Dp.jsxs)("div", {
+         className: op()("PublishButtonContainer", cp),
+         children: [ip.canEditSourceWorld && (0, Dp.jsxs)(xp.f, {
+           onClick: ip.editSourceWorld,
+           disabled: yp,
+ ... (43 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L588-L607` → after: `L1572-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1572-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1572-L1581) · [Before (L588-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L588-L607)

```diff
- 
-     function pz(DD, zD) {
-       return function(DD) {
-         if (Array.isArray(DD)) return DD
-       }(DD) || function(DD, zD) {
-         var wD = null == DD ? null : "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
-         if (null == wD) return;
-         var pD, sD, KD = [],
-           rD = !0,
-           LD = !1;
-         try {
-           for (wD = wD.call(DD); !(rD = (pD = wD.next()).done) && (KD.push(pD.value), !zD || KD.length !== zD); rD = !0);
-         } catch (cD) {
-           LD = !0, sD = cD
-         } finally {
-           try {
- ... (4 more removed lines; see GitHub link above)
+   },
+   5103: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => op
+     });
+     var Op = cp(1211);
+     async function op(pp) {
+       const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
+         headers: {
+           Accept: "application/json"
```

#### 42. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L609-L612` → after: `L1583-L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1583-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1583-L1586) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L609-L612)

```diff
-         return KD
-       }(DD, zD) || sz(DD, zD) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       });
+       if (404 === ip.status || 403 === ip.status) return null;
+       if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
+       return await ip.json()
```

#### 43. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L616-L619` → after: `L1607-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1607-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1607-L1628) · [Before (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L616-L619)

```diff
-       if (DD) {
-         if ("string" === typeof DD) return Kz(DD, zD);
-         var wD = Object.prototype.toString.call(DD).slice(8, -1);
-         return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? Kz(DD, zD) : void 0
+       return {
+         schematicId: pp.schematicId,
+         name: pp.name,
+         description: pp.description,
+         gamePublished: ip,
+         gameCategory: pp.gameCategory,
+         defaultGamemode: pp.defaultGamemode,
+         voidDeathHeight: pp.voidDeathHeight,
+         disableKeepInventory: pp.disableKeepInventory,
+         disableTpRequests: pp.disableTpRequests,
+         disableLobbySpawn: pp.disableLobbySpawn,
+         disableMobs: pp.disableMobs,
+         disableSpawnProtection: pp.disableSpawnProtection,
+         disableFallDamage: pp.disableFallDamage,
+         worldBorder: pp.worldBorder,
+         hideLobbyCode: pp.hideLobbyCode,
+ ... (6 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L623-L627` → after: `L1632-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1632-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1632-L1641) · [Before (L623-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L623-L627)

```diff
-     function Kz(DD, zD) {
-       (null == zD || zD > DD.length) && (zD = DD.length);
-       for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
-       return pD
-     }
+     function wp(pp) {
+       let {
+         onNavigateAway: ip,
+         inSourceWorld: cp = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: wp
+       } = (0, Wp.b)(), vp = (0, yp.useNavigatePreserveSearch)(), [tp, Hp] = (0, Op.useState)({
+         ...pp
+       }), [dp, ep] = (0, Op.useState)("Enter"), [jp, kp] = (0, Op.useState)(void 0), mp = (0, Op.useRef)(Up(pp, pp.gamePublished)), Rp = (0, Op.useRef)(void 0), qp = "Enter" === dp, Mp = wp.playerHasRank("developer") || wp.playerHasRank("admin") || "Enter" === dp && !1 !== tp.sch … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L629-L635` → after: `L1643-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1643-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1643-L1647) · [Before (L629-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L629-L635)

```diff
-     function rz(DD, zD) {
-       var wD = Object.keys(DD);
-       if (Object.getOwnPropertySymbols) {
-         var pD = Object.getOwnPropertySymbols(DD);
-         zD && (pD = pD.filter((function(zD) {
-           return Object.getOwnPropertyDescriptor(DD, zD).enumerable
-         }))), wD.push.apply(wD, pD)
+       function Ep(pp, ip) {
+         Hp((cp => ({
+           ...cp,
+           [pp]: ip
+         })))
```

#### 46. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L637-L638` → after: `L1649-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1649-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1649-L1651) · [Before (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L637-L638)

```diff
-       return wD
-     }
+       const Xp = (0, Op.useCallback)((pp => {
+         Rp.current = pp, kp(pp)
+       }), []);
```

#### 47. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L640-L646` → after: `L1653-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1653-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1653-L1676) · [Before (L640-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L640-L646)

```diff
-     function Lz(DD) {
-       for (var zD = 1; zD < arguments.length; zD++) {
-         var wD = null != arguments[zD] ? arguments[zD] : {};
-         zD % 2 ? rz(Object(wD), !0).forEach((function(zD) {
-           cz(DD, zD, wD[zD])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : rz(Object(wD)).forEach((function(zD) {
-           Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
+       function lp(pp) {
+         ep("Loading");
+         const ip = Up(tp, pp),
+           cp = jp !== Rp.current ? jp : void 0;
+         Dp.b.updateSchematic(wp, ip, cp).then((cp => {
+           let {
+             customTexturePackKey: Op
+           } = cp;
+           ep("Success"), Ep("customTexturePackKey", Op), mp.current = ip, Rp.current = void 0, kp(void 0), setTimeout((() => {
+             Ep("gamePublished", pp), ep("Enter")
+           }), 1e3)
+         })).catch((pp => {
+           var ip;
+           (console.error("Failed to save schematic:", pp), ep("Error"), pp instanceof Sp.e && pp.errorMessageForUser) && Pp.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+             subtitle: pp.errorMessageForUser,
+ ... (8 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L649-L889` → after: `L1679-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1679-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1679-L1699) · [Before (L649-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L649-L889)

```diff
-       return DD
-     }
- 
-     function cz(DD, zD, wD) {
-       return zD in DD ? Object.defineProperty(DD, zD, {
-         value: wD,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : DD[zD] = wD, DD
-     }
- 
-     function gz(DD, zD) {
-       if (null == DD) return {};
-       var wD, pD, sD = function(DD, zD) {
-         if (null == DD) return {};
- ... (225 more removed lines; see GitHub link above)
+       return {
+         schematicData: tp,
+         updateSchematicData: Ep,
+         setTexturePack: kp,
+         initializeTexturePack: Xp,
+         updateState: dp,
+         formEnabled: qp,
+         publishFormEnabled: Mp,
+         hasUnsavedChanges: Cp,
+         canEditSourceWorld: !cp,
+         saveSchematic: lp,
+         unpublishSchematic: function() {
+           Pp.NotificationProvider.showPromptPopup({
+             icon: "rocket-launch",
+             title: "worldBuilder:unpublishAsGameConfirmTitle",
+             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
+ ... (5 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1009-L1013` → after: `L1702-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1702-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1702-L1711) · [Before (L1009-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L1009-L1013)

```diff
-         xz = function(DD) {
-           return QD ? null : Pz(DD)
-         },
-         Tz = function(DD) {
-           XD && DD.stopPropagation()
+         editSourceWorld: function() {
+           ep("Loading"), Ap.b.getSourceWorld(tp.schematicId).then((pp => {
+             Yp.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, Lp.k)("other"), vp((0, op.c)("classic", pp)), null === ip || void 0 === ip || ip()
+           })).catch((pp => {
+             console.error("Failed to get source world:", pp), ep("Error"), setTimeout((() => {
+               ep("Enter")
+             }), 1e3)
+           }))
```

#### 50. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1015-L1111` → after: `L1713-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1713-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1713-L1717) · [Before (L1015-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L1015-L1111)

```diff
-         bz = (0, pD.useMemo)((function() {
-           return function() {
-             var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               zD = DD.refKey,
-               wD = void 0 === zD ? "ref" : zD,
-               pD = DD.role,
-               KD = DD.onKeyDown,
-               rD = DD.onFocus,
-               LD = DD.onBlur,
-               cD = DD.onClick,
-               gD = DD.onDragEnter,
-               RD = DD.onDragOver,
-               AD = DD.onDragLeave,
-               UD = DD.onDrop,
-               fD = gz(DD, Dz);
-             return Lz(Lz(cz({
- ... (81 more removed lines; see GitHub link above)
+         playGame: function() {
+           Yp.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), vp((0, xp.u)((0, Ip.t)(tp.schematicId), tp)), null === ip || void 0 === ip || ip()
+         }
```

#### 51. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1114-L1116` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/107.js#L1720-L1721) · [Before (L1114-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/107.js#L1114-L1116)

```diff
- 
-     function Bz() {}
-   }
+   },
+   5054: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/108.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/108.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141)

#### 1. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L4-L80` → after: `L4-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/108.js#L4-L63) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/108.js#L4-L80)

```diff
-   5034: (DD, zD, wD) => {
-     function pD(DD) {
-       return pD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
-         return typeof DD
-       } : function(DD) {
-         return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
-       }, pD(DD)
-     }
-     Object.defineProperty(zD, "__esModule", {
-       value: !0
-     }), zD.default = void 0;
-     var sD = AD(wD(1044)),
-       KD = function(DD, zD) {
-         if (!zD && DD && DD.__esModule) return DD;
-         if (null === DD || "object" !== pD(DD) && "function" !== typeof DD) return {
-           default: DD
- ... (61 more removed lines; see GitHub link above)
+   36565: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Lp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(62),
+       Sp = cp(4664),
+       xp = cp(1112);
+ 
+     function Lp(pp) {
+       let {
+         locked: ip,
+         children: cp
+       } = pp;
+       const Op = (0, Ip.useRef)(null),
+ ... (44 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L82-L218` → after: `L65-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L65-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/108.js#L65-L93) · [Before (L82-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/108.js#L82-L218)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var KD, rD = !0,
-         LD = !1;
-       return {
-         s: function() {
-           wD = wD.call(DD)
-         },
-         n: function() {
-           var DD = wD.next();
-           return rD = DD.done, DD
-         },
-         e: function(DD) {
-           LD = !0, KD = DD
-         },
-         f: function() {
- ... (121 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function wp(pp) {
+       let {
+         flow: ip,
+         close: cp,
+         onCreating: xp,
+         onCreated: Up,
+         onFailedClosed: wp,
+         join: vp
+       } = pp;
+       const {
+         t: tp
+       } = (0, Sp.H)(), [Hp, dp] = (0, op.useState)(Op.s), [ep, jp] = (0, op.useState)(!1), [kp, mp] = (0, op.useState)(""), Rp = (0, Ap.b)();
+       (0, op.useEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L644` → after: `L97-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L97-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/108.js#L97-L259) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/108.js#L644)

```diff
-         return DD
+       });
+       return (0, yp.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, yp.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, yp.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: tp("homePage:myWorld")
+           })
+         }), (0, yp.jsx)(Lp.b, {
+           locked: ep,
+           children: (0, yp.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, yp.jsx)(Pp.e, {
+               value: Hp.defaultGamemode,
+               onChange: pp => {
+ ... (147 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L646-L684` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/108.js#L261-L268) · [Before (L646-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/108.js#L646-L684)

```diff
-       AD = function(DD) {
-         return DD && DD.ownerDocument && DD.ownerDocument.defaultView || KD
-       },
-       UD = nD(0, 0, 0, 0);
- 
-     function fD(DD) {
-       return parseFloat(DD) || 0
-     }
- 
-     function ID(DD) {
-       for (var zD = [], wD = 1; wD < arguments.length; wD++) zD[wD - 1] = arguments[wD];
-       return zD.reduce((function(zD, wD) {
-         return zD + fD(DD["border-" + wD + "-width"])
-       }), 0)
-     }
- 
- ... (23 more removed lines; see GitHub link above)
+       Pp = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 5. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L686-L800` → after: `L270-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L270-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/108.js#L270-L361) · [Before (L686-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/108.js#L686-L800)

```diff
-       return nD(sD.left, sD.top, LD, cD)
-     }
-     var GD = "undefined" !== typeof SVGGraphicsElement ? function(DD) {
-       return DD instanceof AD(DD).SVGGraphicsElement
-     } : function(DD) {
-       return DD instanceof AD(DD).SVGElement && "function" === typeof DD.getBBox
-     };
- 
-     function hD(DD) {
-       return sD ? GD(DD) ? function(DD) {
-         var zD = DD.getBBox();
-         return nD(0, 0, zD.width, zD.height)
-       }(DD) : BD(DD) : UD
-     }
- 
-     function nD(DD, zD, wD, pD) {
- ... (99 more removed lines; see GitHub link above)
+   },
+   36557: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Yp,
+       i: () => Dp
+     });
+     cp(62);
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(4719),
+       Sp = cp(322),
+       xp = cp(1201),
+       Lp = cp(1112);
+ 
+     function Yp(pp) {
+       let {
+ ... (76 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [109, 397];
+ export const ids = [109];
```

#### 2. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L5` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L4-L25) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L4-L5)

```diff
-   4988: (DD, zD, wD) => {
-     var pD = wD(4997);
+   5097: (pp, ip) => {
+     ip.e = function(pp, ip) {
+       if (pp && ip) {
+         var cp = Array.isArray(ip) ? ip : ip.split(","),
+           Op = pp.name || "",
+           op = (pp.type || "").toLowerCase(),
+           Ip = op.replace(/\/.*$/, "");
+         return cp.some((function(pp) {
+           var ip = pp.trim().toLowerCase();
+           return "." === ip.charAt(0) ? Op.toLowerCase().endsWith(ip) : ip.endsWith("/*") ? Ip === ip.replace(/\/.*$/, "") : op === ip
+         }))
+       }
+       return !0
+     }
+   },
+   5076: (pp, ip, cp) => {
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L27-L35) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L7)

```diff
-     function sD() {}
+     function Sp(pp, ip, cp, Op) {
+       return new(cp || (cp = Promise))((function(op, Ip) {
+         function Sp(pp) {
+           try {
+             Lp(Op.next(pp))
+           } catch (ip) {
+             Ip(ip)
+           }
+         }
```

#### 4. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9-L14` → after: `L37-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L37-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L37-L126) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L9-L14)

```diff
-     function KD() {}
-     KD.resetWarningCache = sD, DD.exports = function() {
-       function DD(DD, zD, wD, sD, KD, rD) {
-         if (rD !== pD) {
-           var LD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw LD.name = "Invariant Violation", LD
+         function xp(pp) {
+           try {
+             Lp(Op.throw(pp))
+           } catch (ip) {
+             Ip(ip)
+           }
+         }
+ 
+         function Lp(pp) {
+           var ip;
+           pp.done ? op(pp.value) : (ip = pp.value, ip instanceof cp ? ip : new cp((function(pp) {
+             pp(ip)
+           }))).then(Sp, xp)
+         }
+         Lp((Op = Op.apply(pp, ip || [])).next())
+       }))
+ ... (74 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L18-L19` → after: `L132-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L132-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L132-L149) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L18-L19)

```diff
-       function zD() {
-         return DD
+     function Lp(pp, ip) {
+       var cp = "function" === typeof Symbol && pp[Symbol.iterator];
+       if (!cp) return pp;
+       var Op, op, Ip = cp.call(pp),
+         Sp = [];
+       try {
+         for (;
+           (void 0 === ip || ip-- > 0) && !(Op = Ip.next()).done;) Sp.push(Op.value)
+       } catch (xp) {
+         op = {
+           error: xp
+         }
+       } finally {
+         try {
+           Op && !Op.done && (cp = Ip.return) && cp.call(Ip)
+         } finally {
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L21-L45` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L151) · [Before (L21-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L21-L45)

```diff
-       DD.isRequired = DD;
-       var wD = {
-         array: DD,
-         bigint: DD,
-         bool: DD,
-         func: DD,
-         number: DD,
-         object: DD,
-         string: DD,
-         symbol: DD,
-         any: DD,
-         arrayOf: zD,
-         element: DD,
-         elementType: DD,
-         instanceOf: zD,
-         node: DD,
- ... (9 more removed lines; see GitHub link above)
+       return Sp
```

#### 7. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L66-L78` → after: `L154-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L154-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L154-L254) · [Before (L66-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L66-L78)

```diff
-     function RD() {
-       const {
-         t: DD
-       } = (0, KD.E)(), zD = (0, pD.useNavigatePreserveSearch)();
-       return (0, LD.b)(), (0, gD.jsxs)("div", {
-         className: "ShaderPackPublishPage AnimFadeIn",
-         children: [(0, gD.jsx)("div", {
-           className: "ShaderPackPublishBack",
-           children: (0, gD.jsx)(sD.d, {
-             onClick: () => {
-               zD(cD.S)
-             },
-             children: DD("shaderPackListing:backToPacks")
+     function Yp(pp, ip, cp) {
+       if (cp || 2 === arguments.length)
+         for (var Op, op = 0, Ip = ip.length; op < Ip; op++) !Op && op in ip || (Op || (Op = Array.prototype.slice.call(ip, 0, op)), Op[op] = ip[op]);
+       return pp.concat(Op || Array.prototype.slice.call(ip))
+     }
+     Object.create;
+     "function" === typeof SuppressedError && SuppressedError;
+     var Dp = new Map([
+       ["aac", "audio/aac"],
+       ["abw", "application/x-abiword"],
+       ["arc", "application/x-freearc"],
+       ["avif", "image/avif"],
+       ["avi", "video/x-msvideo"],
+       ["azw", "application/vnd.amazon.ebook"],
+       ["bin", "application/octet-stream"],
+       ["bmp", "image/bmp"],
+ ... (85 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L80-L91` → after: `L256-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L256-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L256-L268) · [Before (L80-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L80-L91)

```diff
-         }), (0, gD.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: DD("shaderPackListing:publishTitle")
-         }), (0, gD.jsx)(rD.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: DD => {
-             zD((0, cD.Y)(DD.packId), {
-               replace: !0
-             })
-           }
-         })]
-       })
+         }
+         return pp
+       }(pp);
+       if ("string" !== typeof cp.path) {
+         var Op = pp.webkitRelativePath;
+         Object.defineProperty(cp, "path", {
+           value: "string" === typeof ip ? ip : "string" === typeof Op && Op.length > 0 ? Op : pp.name,
+           writable: !1,
+           configurable: !1,
+           enumerable: !0
+         })
+       }
+       return cp
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L93-L108` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L270) · [Before (L93-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L93-L108)

```diff
-   },
-   6601: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => UD,
-       d: () => fD,
-       g: () => AD,
-       k: () => ID
-     });
-     var pD = wD(58),
-       sD = wD(6594),
-       KD = wD(1495),
-       rD = wD(6590),
-       LD = wD(6603),
-       cD = wD(1127);
-     const gD = "shaderPackListingView",
-       RD = "shaderPackListingFilterOpen";
+     var Pp = [".DS_Store", "Thumbs.db"];
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L110-L113` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L272-L273) · [Before (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L110-L113)

```diff
-     function AD() {
-       var DD;
-       const [zD, wD] = (0, LD.d)(gD, sD.H[0]);
-       return [null !== (DD = sD.H.find((DD => DD === zD))) && void 0 !== DD ? DD : sD.H[0], wD]
+     function Wp(pp) {
+       return "object" === typeof pp && null !== pp
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L116-L119` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L276-L279) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L116-L119)

```diff
-     function UD() {
-       (0, pD.useEffect)((() => () => {
-         window.location.pathname.startsWith(rD.S) || (0, rD.k)()
-       }), [])
+     function yp(pp) {
+       return tp(pp.target.files).map((function(pp) {
+         return Ap(pp)
+       }))
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L122-L123` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L282-L296) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L122-L123)

```diff
-     function fD() {
-       return (0, LD.d)(RD, !1)
+     function Up(pp) {
+       return Sp(this, void 0, void 0, (function() {
+         return xp(this, (function(ip) {
+           switch (ip.label) {
+             case 0:
+               return [4, Promise.all(pp.map((function(pp) {
+                 return pp.getFile()
+               })))];
+             case 1:
+               return [2, ip.sent().map((function(pp) {
+                 return Ap(pp)
+               }))]
+           }
+         }))
+       }))
```

#### 13. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L126-L135` → after: `L299-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L299-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L299-L314) · [Before (L126-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L126-L135)

```diff
-     function ID() {
-       const {
-         userContext: DD,
-         isUserContextUpdating: zD
-       } = (0, cD.c)(), [wD, sD] = (0, pD.useState)(null), rD = (0, pD.useRef)(new Set);
- 
-       function LD(DD, zD) {
-         sD((wD => {
-           const pD = new Set(wD);
-           return zD ? pD.add(DD) : pD.delete(DD), pD
+     function wp(pp, ip) {
+       return Sp(this, void 0, void 0, (function() {
+         var cp;
+         return xp(this, (function(Op) {
+           switch (Op.label) {
+             case 0:
+               return pp.items ? (cp = tp(pp.items).filter((function(pp) {
+                 return "file" === pp.kind
+               })), "drop" !== ip ? [2, cp] : [4, Promise.all(cp.map(Hp))]) : [3, 2];
+             case 1:
+               return [2, vp(dp(Op.sent()))];
+             case 2:
+               return [2, vp(tp(pp.files).map((function(pp) {
+                 return Ap(pp)
+               })))]
+           }
```

#### 14. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L137-L160` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L316) · [Before (L137-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L137-L160)

```diff
-       }
-       return (0, pD.useEffect)((() => {
-         if (zD) return;
-         let wD = !1;
-         return KD.d.getFavouriteShaderPacks(DD).then((DD => {
-           wD || sD(new Set(DD))
-         })).catch((DD => {
-           console.error("Failed to get favourite shader packs", DD), wD || sD(new Set)
-         })), () => {
-           wD = !0
-         }
-       }), [DD, zD]), {
-         isFavourite: DD => null === wD ? null : wD.has(DD),
-         toggle: function(zD) {
-           if (null === wD || rD.current.has(zD)) return;
-           rD.current.add(zD);
- ... (8 more removed lines; see GitHub link above)
+       }))
```

#### 15. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L198` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L320-L322) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L198)

```diff
-       return `${rD}/${encodeURIComponent(DD)}`
+       return pp.filter((function(pp) {
+         return -1 === Pp.indexOf(pp.name)
+       }))
```

#### 16. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L203` → after: `L326-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L326-L331) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L203)

```diff
-       gD = DD
+       if (null === pp) return [];
+       for (var ip = [], cp = 0; cp < pp.length; cp++) {
+         var Op = pp[cp];
+         ip.push(Op)
+       }
+       return ip
```

#### 17. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L206-L207` → after: `L334-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L334-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L334-L337) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L206-L207)

```diff
-     function AD() {
-       return gD
+     function Hp(pp) {
+       if ("function" !== typeof pp.webkitGetAsEntry) return ep(pp);
+       var ip = pp.webkitGetAsEntry();
+       return ip && ip.isDirectory ? kp(ip) : ep(pp)
```

#### 18. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L210-L211` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L340-L343) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L210-L211)

```diff
-     function UD() {
-       gD = null
+     function dp(pp) {
+       return pp.reduce((function(pp, ip) {
+         return Yp(Yp([], Lp(pp), !1), Lp(Array.isArray(ip) ? dp(ip) : [ip]), !1)
+       }), [])
```

#### 19. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L215` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L347-L350) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L215)

```diff
-       return DD.playerHasRank("developer") || DD.playerHasRank("admin")
+       var ip = pp.getAsFile();
+       if (!ip) return Promise.reject("".concat(pp, " is not a File"));
+       var cp = Ap(ip);
+       return Promise.resolve(cp)
```

#### 20. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L226-L227` → after: `L353-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L353-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L353-L394) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L226-L227)

```diff
-     function GD(DD, zD) {
-       return DD.withFeatures.includes(zD) ? "with" : DD.withoutFeatures.includes(zD) ? "without" : null
+     function jp(pp) {
+       return Sp(this, void 0, void 0, (function() {
+         return xp(this, (function(ip) {
+           return [2, pp.isDirectory ? kp(pp) : mp(pp)]
+         }))
+       }))
+     }
+ 
+     function kp(pp) {
+       var ip = pp.createReader();
+       return new Promise((function(pp, cp) {
+         var Op = [];
+         ! function op() {
+           var Ip = this;
+           ip.readEntries((function(ip) {
+             return Sp(Ip, void 0, void 0, (function() {
+ ... (26 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L231` → after: `L398-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L398-L409) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L231)

```diff
-       return null === DD ? "with" : "with" === DD ? "without" : null
+       return Sp(this, void 0, void 0, (function() {
+         return xp(this, (function(ip) {
+           return [2, new Promise((function(ip, cp) {
+             pp.file((function(cp) {
+               var Op = Ap(cp, pp.fullPath);
+               ip(Op)
+             }), (function(pp) {
+               cp(pp)
+             }))
+           }))]
+         }))
+       }))
```

#### 22. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L235` → after: `L414-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L414-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L414-L420) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L235)

```diff
-       return "with" === DD ? "only" : null === DD ? "include" : void 0
+       return function(pp) {
+         if (Array.isArray(pp)) return Qp(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || lp(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 23. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L239-L243` → after: `L424-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L424-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L424-L429) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L239-L243)

```diff
-       const wD = GD(DD, zD),
-         pD = DD => DD.filter((DD => DD !== zD));
-       return {
-         withFeatures: null === wD ? [...DD.withFeatures, zD] : pD(DD.withFeatures),
-         withoutFeatures: "with" === wD ? [...DD.withoutFeatures, zD] : pD(DD.withoutFeatures)
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 24. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L255-L266` → after: `L435-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L435-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L435-L441) · [Before (L255-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L255-L266)

```diff
-       var zD, wD, sD;
-       const rD = DD.get(OD),
-         LD = (null !== (zD = DD.get(ED)) && void 0 !== zD ? zD : PD).split(","),
-         cD = DD.get(XD);
-       return {
-         section: "favourites" === rD || "mine" === rD ? rD : "explore",
-         sort: null !== (wD = pD.A.find((zD => zD === DD.get(JD)))) && void 0 !== wD ? wD : VD,
-         withFeatures: ID.filter((DD => LD.includes(DD) && !LD.includes(`-${DD}`))),
-         withoutFeatures: ID.filter((DD => LD.includes(`-${DD}`))),
-         searchQuery: (null === (sD = DD.get(QD)) || void 0 === sD ? void 0 : sD.slice(0, pD.K)) || null,
-         pageNumber: (0, KD.g)(DD.get(KD.d)),
-         banned: "only" === cD ? "with" : "include" === cD ? null : "without"
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Mp(Object(cp), !0).forEach((function(ip) {
+           Ep(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Mp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 25. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L271-L273` → after: `L456-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L456-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L456-L478) · [Before (L271-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L271-L273)

```diff
-       var wD;
-       const pD = dD(zD);
-       (0, KD.j)(DD, OD, "explore" === zD.section ? null : zD.section), (0, KD.j)(DD, JD, zD.sort === VD ? null : zD.sort), (0, KD.j)(DD, ED, pD === PD ? null : pD), (0, KD.j)(DD, QD, zD.searchQuery), (0, KD.j)(DD, XD, null !== (wD = nD(zD.banned)) && void 0 !== wD ? wD : null), ( … [truncated]
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null == cp) return;
+         var Op, op, Ip = [],
+           Sp = !0,
+           xp = !1;
+         try {
+           for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
+         } catch (Lp) {
+           xp = !0, op = Lp
+         } finally {
+           try {
+             Sp || null == cp.return || cp.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L276-L286` → after: `L481-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L481-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L481-L536) · [Before (L276-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L276-L286)

```diff
-     function TD(DD) {
-       const zD = new URLSearchParams;
-       return xD(zD, {
-         section: "explore",
-         sort: VD,
-         withFeatures: "strict" === DD ? [DD] : [DD, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${rD}?${zD.toString()}`
+     function lp(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return Qp(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? Qp(pp, ip) : void 0
+       }
+     }
+ 
+     function Qp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
+     var Jp = "file-invalid-type",
+       Bp = "file-too-large",
+       Np = "file-too-small",
+ ... (40 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L290` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L540) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L290)

```diff
-       return dD(DD) === PD
+       return void 0 !== pp && null !== pp
```

#### 28. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L294` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L544) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L294)

```diff
-       return null !== DD.searchQuery || "with" === DD.banned || dD(DD) !== PD
+       return "function" === typeof pp.isPropagationStopped ? pp.isPropagationStopped() : "undefined" !== typeof pp.cancelBubble && pp.cancelBubble
```

#### 29. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L298-L314` → after: `L548-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L548-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L548-L551) · [Before (L298-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L298-L314)

```diff
-       return ID.flatMap((zD => {
-         const wD = GD(DD, zD);
-         return "with" === wD ? [zD] : "without" === wD ? [`-${zD}`] : []
-       })).join(",")
-     }
-     const SD = {
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       iD = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
- ... (1 more removed lines; see GitHub link above)
+       return pp.dataTransfer ? Array.prototype.some.call(pp.dataTransfer.types, (function(pp) {
+         return "Files" === pp || "application/x-moz-file" === pp
+       })) : !!pp.target && !!pp.target.files
+     }
```

#### 30. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L317` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L554) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L317)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / DD))
+       pp.preventDefault()
```

#### 31. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L320-L349` → after: `L557-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L557-L563) · [Before (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L320-L349)

```diff
-     function WD(DD, zD, wD, sD) {
-       const KD = [];
-       DD.isBanned && KD.push({
-         tone: "warning",
-         text: sD("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: rD
-       } = DD;
-       if (null === DD.brokenError || rD && !rD.error || KD.push({
-           tone: "warning",
-           text: sD("shaderPackListing:ownerBroken"),
-           detail: DD.brokenError
-         }), null !== rD && void 0 !== rD && rD.error) KD.push({
-         tone: "warning",
- ... (14 more removed lines; see GitHub link above)
+     function zp() {
+       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+       return function(pp) {
+         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
+         return ip.some((function(ip) {
+           return !Gp(pp) && ip && ip.apply(void 0, [pp].concat(Op)), Gp(pp)
+         }))
```

#### 32. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L359` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L568) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L359)

```diff
-       return Math.max(1, Math.round(DD / 1024))
+       return "audio/*" === pp || "video/*" === pp || "image/*" === pp || "text/*" === pp || /\w+\/[-+.\w]+/g.test(pp)
```

#### 33. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L362-L363` → after: `L571-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L571-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L571-L586) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L362-L363)

```diff
-     function ZD(DD, zD, wD) {
-       return DD instanceof sD.c && DD.errorMessageForUser ? DD.errorMessageForUser : zD(wD)
+     function Kp(pp) {
+       return /^.*\.[\w]+$/.test(pp)
+     }
+     var Vp = ["children"],
+       ii = ["open"],
+       ci = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
+       Oi = ["refKey", "onChange", "onClick"];
+ 
+     function oi(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return xi(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || Si(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 34. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L374-L378` → after: `L590-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L590-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L590-L612) · [Before (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L374-L378)

```diff
-       var wD;
-       const [KD, rD] = (0, pD.useState)(null !== (wD = sD.h.getItem(DD)) && void 0 !== wD ? wD : zD);
-       return [KD, zD => {
-         sD.h.setItem(DD, zD), rD(zD)
-       }]
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null == cp) return;
+         var Op, op, Ip = [],
+           Sp = !0,
+           xp = !1;
+         try {
+           for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
+         } catch (Lp) {
+           xp = !0, op = Lp
+         } finally {
+           try {
+             Sp || null == cp.return || cp.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L380-L391` → after: `L614-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L614-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L614-L620) · [Before (L380-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L380-L391)

```diff
-   },
-   6693: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => sD,
-       c: () => KD
-     });
-     var pD = wD(35);
-     const sD = "shaderPack";
-     async function KD() {
-       var DD;
-       let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
+ 
+     function Si(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return xi(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? xi(pp, ip) : void 0
+       }
```

#### 36. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L436` → after: `L624-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L624-L626) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L436)

```diff
-       return DD.slice(0, zD).replace(/[\uD800-\uDBFF]$/, "")
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 37. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L442-L445` → after: `L629-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L629-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L629-L637) · [Before (L442-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L442-L445)

```diff
-     function fD(DD) {
-       const zD = DD,
-         wD = null === zD || void 0 === zD ? void 0 : zD.files;
-       return "number" === typeof(null === zD || void 0 === zD ? void 0 : zD.apiVersion) && "string" === typeof zD.name && (null === zD.author || "string" === typeof zD.author) && (void 0 === zD.keepCircleShadows || "boolean" === typeof zD.keepCircleShadows) && "object" === typeof … [truncated]
+     function Li(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 38. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L451` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L641-L649) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L451)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Li(Object(cp), !0).forEach((function(ip) {
+           Di(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Li(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 39. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L456-L458` → after: `L652-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L652-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L652-L658) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L456-L458)

```diff
-     function MD(DD) {
-       var zD;
-       return DD === hD || null !== (zD = null === DD || void 0 === DD ? void 0 : DD.startsWith(nD)) && void 0 !== zD && zD
+     function Di(pp, ip, cp) {
+       return ip in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 40. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L462` → after: `L662-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L662-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L662-L674) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L462)

```diff
-       return `shaderPacks/${DD}/${zD}.json`
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp, Op, op = {},
+           Ip = Object.keys(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || (op[cp] = pp[cp]);
+         return op
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
+       }
+       return op
```

#### 41. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L465-L466` → after: `L753-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L753-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L753-L1076) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L465-L466)

```diff
-     function JD(DD, zD, wD, pD) {
-       return null === zD.renderId ? ED(DD, zD.baselineVersion, wD, pD) : `${DD}/${function(DD,zD,wD,pD){return`shaderPacks/${DD}/${zD}/${wD}-${pD}.webp`}(zD.packId,zD.renderId,wD,pD)}`
+     function Ui() {
+       var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+         ip = Yi(Yi({}, Wi), pp),
+         cp = ip.accept,
+         op = ip.disabled,
+         Ip = ip.getFilesFromEvent,
+         Sp = ip.maxSize,
+         xp = ip.minSize,
+         Lp = ip.multiple,
+         Yp = ip.maxFiles,
+         Dp = ip.onDragEnter,
+         Ap = ip.onDragLeave,
+         Pp = ip.onDragOver,
+         Wp = ip.onDrop,
+         yp = ip.onDropAccepted,
+         Up = ip.onDropRejected,
+ ... (308 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L469-L470` → after: `L1079-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1079-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/109.js#L1079-L1112) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/109.js#L469-L470)

```diff
-     function ED(DD, zD, wD, pD) {
-       return `${DD}/${function(DD,zD,wD){return`shaderPacks/baseline/${DD}/${zD}-${wD}.webp`}(zD,wD,pD)}`
+     function wi(pp, ip) {
+       switch (ip.type) {
+         case "focus":
+           return Yi(Yi({}, pp), {}, {
+             lE: !0
+           });
+         case "blur":
+           return Yi(Yi({}, pp), {}, {
+             lE: !1
+           });
+         case "openDialog":
+           return Yi(Yi({}, yi), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+           return Yi(Yi({}, pp), {}, {
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/110.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/110.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a)

#### 1. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L101` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L4) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L4-L101)

```diff
-   8898: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => Gz
-     });
-     var pD = wD(1523),
-       sD = wD(20),
-       KD = wD(4684),
-       rD = wD(58),
-       LD = wD(1442);
-     var cD = wD(1925),
-       gD = wD(1511),
-       RD = wD(1355),
-       AD = wD(1200),
-       UD = wD(157),
-       fD = wD(197),
-       ID = wD(1008),
- ... (82 more removed lines; see GitHub link above)
+   5127: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L103-L133` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L6-L10) · [Before (L103-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L103-L133)

```diff
-       let {
-         onApply: zD,
-         onSkip: wD
-       } = DD;
-       const {
-         t: pD
-       } = (0, AD.E)();
-       return (0, rD.useEffect)((() => {
-         aD.g.skipPlayWait()
-       }), []), (0, uD.jsx)(kD.g, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, uD.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [pD("customTexturePack:downloadPrompt"), (0, uD.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
- ... (15 more removed lines; see GitHub link above)
+       return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Op(pp)
```

#### 3. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L135-L152` → after: `L12-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L12-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L12-L35) · [Before (L135-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L135-L152)

```diff
-     async function tD() {
-       let DD = !1;
-       const zD = RD.NotificationProvider.showCustomPopup({
-         body: zD => (0, uD.jsx)(vD, {
-           onApply: () => {
-             DD = !0, zD()
-           },
-           onSkip: zD
-         }),
-         disableExitButton: !0,
-         disablePressBackgroundToClose: !0
-       });
-       return await zD.getResult(), DD
-     }
-     let FD = {
-       wanted: !1
- ... (2 more removed lines; see GitHub link above)
+     Object.defineProperty(ip, "__esModule", {
+       value: !0
+     }), ip.default = void 0;
+     var op = Ap(cp(1049)),
+       Ip = function(pp, ip) {
+         if (!ip && pp && pp.__esModule) return pp;
+         if (null === pp || "object" !== Op(pp) && "function" !== typeof pp) return {
+           default: pp
+         };
+         var cp = Dp(ip);
+         if (cp && cp.has(pp)) return cp.get(pp);
+         var op = {},
+           Ip = Object.defineProperty && Object.getOwnPropertyDescriptor;
+         for (var Sp in pp)
+           if ("default" !== Sp && Object.prototype.hasOwnProperty.call(pp, Sp)) {
+             var xp = Ip ? Object.getOwnPropertyDescriptor(pp, Sp) : null;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L155` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L38-L43) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L155)

```diff
-       DD.setGamePackConfirm(tD), YD = DD
+       if ("function" !== typeof WeakMap) return null;
+       var ip = new WeakMap,
+         cp = new WeakMap;
+       return (Dp = function(pp) {
+         return pp ? cp : ip
+       })(pp)
```

#### 5. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L160-L168` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L47-L48) · [Before (L160-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L160-L168)

```diff
-       let {
-         schematicId: zD,
-         texturePackKey: wD,
-         onClose: pD
-       } = DD;
-       const [sD, KD] = (0, rD.useState)("prompt"), [LD, cD] = (0, rD.useState)(null), gD = (0, qD.c)();
- 
-       function RD() {
-         pD()
+       return pp && pp.__esModule ? pp : {
+         default: pp
```

#### 6. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L170-L187` → after: `L50-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L50-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L50-L73) · [Before (L170-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L170-L187)

```diff
-       return "prompt" === sD ? (0, uD.jsx)(vD, {
-         onApply: async function() {
-           KD("downloading");
-           try {
-             const DD = await async function(DD, zD) {
-               const wD = await (0, eD.c)(zD);
-               if (wD) return {
-                 pack: wD,
-                 key: zD
-               };
-               const pD = await MD.userContextManager.getCurrentUserContext(),
-                 sD = (await nD.d.getGame(pD, DD, !0)).customTexturePackKey;
-               if (!sD) return null;
-               const KD = await (0, eD.c)(sD);
-               if (!KD) throw new Error("The texture pack could not be found");
-               return {
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function Pp(pp, ip) {
+       var cp = "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+       if (!cp) {
+         if (Array.isArray(pp) || (cp = function(pp, ip) {
+             if (!pp) return;
+             if ("string" === typeof pp) return Wp(pp, ip);
+             var cp = Object.prototype.toString.call(pp).slice(8, -1);
+             "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+             if ("Map" === cp || "Set" === cp) return Array.from(pp);
+             if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Wp(pp, ip)
+           }(pp)) || ip && pp && "number" === typeof pp.length) {
+           cp && (pp = cp);
+           var Op = 0,
+             op = function() {};
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L189-L195` → after: `L75-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L75-L79) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L189-L195)

```diff
-             }(zD, wD);
-             if (!gD.current) return;
-             if (!DD) return void pD();
-             if ((0, ZD.i)(DD.pack)) return void KD("refused");
-             yD.b.setFromJson(DD.pack, "customGame"), await yD.b.saveTemporaryTexturePack(DD.key), gD.current && (0, CD.reloadBloxd)()
-           } catch (DD) {
-             cD(DD instanceof Error ? DD.message : String(DD)), KD("error")
+             },
+             e: function(pp) {
+               throw pp
+             },
+             f: op
```

#### 8. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L198-L216` → after: `L90-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L90-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L90-L92) · [Before (L198-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L198-L216)

```diff
-         onSkip: RD
-       }) : "downloading" === sD ? (0, uD.jsx)(kD.g, {
-         icon: "download",
-         title: "customTexturePack:downloading",
-         subtitle: (0, uD.jsx)("div", {
-           className: "CustomTexturePackDownloaderLogoLoaderContainer",
-           children: (0, uD.jsx)(mD.e, {
-             showFace: !0
-           })
-         })
-       }) : "error" === sD ? (0, uD.jsx)(kD.g, {
-         icon: "face-worried",
-         title: "customTexturePack:errorTitle",
-         subtitle: LD,
-         confirm: {
-           text: "customTexturePack:refreshPage",
- ... (3 more removed lines; see GitHub link above)
+         n: function() {
+           var pp = cp.next();
+           return Sp = pp.done, pp
```

#### 9. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L218-L228` → after: `L94-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L94-L102) · [Before (L218-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L218-L228)

```diff
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: RD
-         }
-       }) : "refused" === sD ? (0, uD.jsx)(kD.g, {
-         icon: "face-worried",
-         title: "customTexturePack:cantApplyTitle",
-         subtitle: "customTexturePack:gamePackHasExternalUrls",
-         confirm: {
-           text: "general:continue",
-           onClick: RD
+         e: function(pp) {
+           xp = !0, Ip = pp
+         },
+         f: function() {
+           try {
+             Sp || null == cp.return || cp.return()
+           } finally {
+             if (xp) throw Ip
+           }
```

#### 10. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L230` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L104) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L230)

```diff
-       }) : null
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L244-L246` → after: `L107-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L107-L110) · [Before (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L244-L246)

```diff
-     function Uz() {
-       const DD = sD.e.get("clientEscMenuOptions");
-       cD.gameBridge.send("setLookSensitivity", sD.e.get("isTouchScreen") ? (0, Az.q)(DD) : DD.mouseSensitivity)
+     function Wp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 12. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L249-L260` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L113-L116) · [Before (L249-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L249-L260)

```diff
-     function fz(DD) {
-       const zD = DD.asError();
-       if (zD.debugResult.sw || (0, gz.c)(zD.debugResult.error)) return;
-       console.log("Failed to join lobby:", zD.message);
-       const wD = "timedOut" === zD.debugResult.gameServerUnreachable;
-       (0, sz.reportClientError)("matchmake_failed", zD.message, wD ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : UD.n[zD.code]);
-       const {
-         error: pD
-       } = zD.debugResult;
-       if (pD instanceof iD.m && "default" !== pD.packSource) {
-         const DD = (0, Kz.d)("js", "game" === pD.packSource ? "game" : "page", (0, Kz.h)(pD));
-         (0, sz.reportClientError)("texture_pack", pD, DD)
+     function yp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Op.key, Op)
```

#### 13. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L264-L267` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L120-L123) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L264-L267)

```diff
-     function Iz(DD) {
-       if (null === DD || void 0 === DD || !DD.isError()) return !1;
-       const zD = DD.asError();
-       return zD.code === UD.n.REQUEST_TO_MATCHMAKING && !(0, gz.c)(zD.debugResult.error)
+     function Up(pp, ip) {
+       return Up = Object.setPrototypeOf || function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Up(pp, ip)
```

#### 14. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L269-L307` → after: `L125-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L125-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L125-L130) · [Before (L269-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L269-L307)

```diff
-     async function Bz(DD, zD, wD) {
-       const pD = (0, Lz.H)(zD);
-       async function rD(DD, zD, wD, pD) {
-         var rD;
-         if (pD.aborted) return null;
-         null === sD.e.get("gameEntrySource") && (0, sD.k)("directPlayUrl"), Rz.v && (0, oD.c)().catch((() => {})), sD.e.set({
-           gameState: "findingLobby"
-         }), VD.l.KG("loadingScreenState", "loadingPage:findingLobby");
-         const LD = await MD.userContextManager.getCurrentUserContext();
-         cD.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: zD,
-           discordContext: DD instanceof ND.f ? DD.getSerialisableParams() : null
-         }), (0, pz.e)(null !== (rD = aD.g.playInputAt()) && void 0 !== rD ? rD : performance.now());
-         const gD = await async function(DD, zD, wD, pD, sD) {
-           try {
-             await KD.reqLibsLoadedPromise
- ... (23 more removed lines; see GitHub link above)
+ 
+     function wp(pp) {
+       var ip = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
```

#### 15. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L309-L313` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L132) · [Before (L309-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L309-L313)

```diff
-           var KD;
-           let LD = DD,
-             cD = await rD(LD, zD, wD, sD);
-           for (let DD = 0; pD && DD < Lz.j && (Iz(cD) && await (0, Lz.K)((0, Lz.q)(DD), sD)); DD++) LD = (0, Lz.r)(LD, DD + 1, "string" === typeof LD && (0, GD.J)(LD)), cD = await rD(LD, zD, wD, sD);
-           return null !== (KD = cD) && void 0 !== KD && KD.isError() && fz(cD), cD
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
```

#### 16. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L315-L318` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L134) · [Before (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L315-L318)

```diff
-           if ((0, sz.reportClientError)("matchmake_failed", LD, "unexpected"), cD.gameBridge.send("leaveGame", {
-               reloadPath: sD.aborted ? null : "/"
-             }), sD.aborted) return null;
-           throw LD
+           return !1
```

#### 17. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L320-L329` → after: `L136-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L136-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L136-L148) · [Before (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L320-L329)

```diff
-       }), (async DD => {
-         var wD;
-         if (pD) return;
-         const sD = (0, TD.E)();
-         null !== sD && (await sD, DD.aborted) || (null !== (wD = WD.e[zD]) && void 0 !== wD && wD.playAdBeforeMatchmaking ? (aD.g.skipPlayWait(), await new Promise((DD => {
-           (0, TD.gb)((() => {
-             DD(!0)
-           }), "video_start")
-         }))) : (0, TD.gb)((() => {}), "video_start"))
-       }))
+       }();
+       return function() {
+         var cp, op = tp(pp);
+         if (ip) {
+           var Ip = tp(this).constructor;
+           cp = Reflect.construct(op, arguments, Ip)
+         } else cp = op.apply(this, arguments);
+         return function(pp, ip) {
+           if (ip && ("object" === Op(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return vp(pp)
+         }(this, cp)
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L332-L357` → after: `L151-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L151-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L151-L183) · [Before (L332-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L332-L357)

```diff
-     function Gz() {
-       const {
-         t: DD
-       } = (0, AD.E)(), zD = (0, gD.useNavigatePreserveSearch)(), wD = (0, pD.s)(), fD = (0, pD.C)(), BD = (0, rD.useRef)({
-         t: DD,
-         navigate: zD
-       });
-       BD.current = {
-         t: DD,
-         navigate: zD
-       };
-       const OD = (0, rD.useRef)("");
-       OD.current = wD.pathname + wD.search;
-       const {
-         gameState: JD,
-         clientEscMenuOptions: QD
- ... (10 more removed lines; see GitHub link above)
+     function vp(pp) {
+       if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return pp
+     }
+ 
+     function tp(pp) {
+       return tp = Object.setPrototypeOf ? Object.getPrototypeOf : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, tp(pp)
+     }
+ 
+     function Hp(pp, ip, cp) {
+       return ip in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+ ... (17 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L359-L411` → after: `L185-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L185-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L185-L236) · [Before (L359-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L359-L411)

```diff
-       }), [WD]), (0, rD.useEffect)((() => {
-         var DD;
-         (0, KD.needGameClientNow)();
-         const {
-           t: zD,
-           navigate: pD
-         } = BD.current, rD = (0, zz.c)(fD, wD.search);
-         if (fD.lobbyName && !new URLSearchParams(wD.search).has("lobby")) return void pD((0, lD.c)(rD.gameNameWithVariation, rD.lobbyName), {
-           replace: !0
-         });
-         let LD = Promise.resolve({
-           shouldMatchmake: !0
-         });
-         if ("/play/discord-custom-lobby" === wD.pathname) {
-           const DD = sD.e.get("discordContext");
-           if (!DD) return void pD("/");
- ... (37 more removed lines; see GitHub link above)
+       },
+       ep = function(pp) {
+         ! function(pp, ip) {
+           if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+           Object.defineProperty(pp, "prototype", {
+             value: Object.create(ip && ip.prototype, {
+               constructor: {
+                 value: pp,
+                 writable: !0,
+                 configurable: !0
+               }
+             }),
+             writable: !1
+           }), ip && Up(pp, ip)
+         }(Sp, pp);
+         var ip, cp, Op, Ip = wp(Sp);
+ ... (36 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L413-L429` → after: `L238-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L238-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L238-L318) · [Before (L413-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L413-L429)

```diff
-             const sD = pD.customTexturePackKey;
-             if (!sD) return void(yD.b.isUsingTemporaryTexturePack() && ((0, CD.reloadBloxd)(), await new Promise((() => {}))));
-             if (yD.b.isUsingTemporaryTexturePack() && yD.b.getTemporaryTexturePackSource() === sD) return;
-             const KD = RD.NotificationProvider.showCustomPopup({
-               body: DD => (0, uD.jsx)(Dz, {
-                 schematicId: wD,
-                 texturePackKey: sD,
-                 onClose: DD
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0
-             });
-             await KD.getResult()
-           }(bD), zD = LD;
-           LD = DD.catch((DD => {
-             console.error("Failed to check for custom texture pack", DD)
- ... (1 more removed lines; see GitHub link above)
+           })), Hp(vp(cp), "handleEnd", (function(pp) {
+             var ip = cp.props.onChangeComplete;
+             cp.setState({
+               active: !1
+             }, (function() {
+               ip && ip(pp)
+             })), document.removeEventListener("mousemove", cp.handleDrag), document.removeEventListener("mouseup", cp.handleEnd)
+           })), Hp(vp(cp), "handleKeyDown", (function(pp) {
+             pp.preventDefault();
+             var ip, Op = pp.keyCode,
+               op = cp.props,
+               Ip = op.value,
+               Sp = op.min,
+               xp = op.max,
+               Lp = op.step,
+               Yp = op.onChange;
+ ... (65 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L431-L489` → after: `L320-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L320-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L320-L367) · [Before (L431-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L431-L489)

```diff
-         const WD = null !== VD.current;
-         VD.current = null, (0, rz.f)(null);
-         const ND = () => {
-           JD ? (0, gD.navigateToHomePage)() : (PD.current = WD, pD(-1))
-         };
-         let ZD = !1;
-         const kD = wD.pathname + wD.search,
-           mD = () => !ZD && OD.current === kD;
-         return LD.then((DD => {
-           let {
-             shouldMatchmake: wD,
-             discordContext: KD
-           } = DD;
-           mD() && (wD ? Bz(null !== KD && void 0 !== KD ? KD : rD.lobbyName, KD ? "classic" : rD.gameNameWithVariation, rD.directJoinVmUrl).then((DD => {
-             if (null !== DD && mD())
-               if (DD.isError()) {
- ... (43 more removed lines; see GitHub link above)
+         return ip = Sp, (cp = [{
+           key: "componentDidMount",
+           value: function() {
+             this.handleUpdate(), new xp.default(this.handleUpdate).observe(this.slider)
+           }
+         }, {
+           key: "render",
+           value: function() {
+             var pp = this,
+               ip = this.props,
+               cp = ip.value,
+               Op = ip.orientation,
+               Ip = ip.className,
+               Sp = ip.tooltip,
+               xp = ip.reverse,
+               Lp = ip.labels,
+ ... (32 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L491-L512` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L369-L372) · [Before (L491-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L491-L512)

```diff
-                 ID.then((DD => {
-                   if (DD) {
-                     (0, sD.k)(gD);
-                     const DD = (0, lD.c)(rD.gameNameWithVariation, rD.lobbyName);
-                     "low" === LD ? pD(DD) : (0, CD.reloadBloxd)(DD)
-                   }
-                 })), cD.gameBridge.send("leaveGame", {
-                   reloadPath: "/"
-                 }), ND()
-               } else {
-                 const {
-                   gameNameWithVariation: zD,
-                   lobbyName: wD
-                 } = DD.getValue();
-                 VD.current = {
-                   gameNameWithVariation: zD,
- ... (6 more removed lines; see GitHub link above)
+               } catch (Qp) {
+                 Mp.e(Qp)
+               } finally {
+                 Mp.f()
```

#### 23. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L514-L523` → after: `L374-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L374-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L374-L406) · [Before (L514-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L514-L523)

```diff
-           })).catch((DD => {
-             if (!mD()) return;
-             RD.NotificationProvider.showPromptPopup({
-               icon: "face-dizzy",
-               title: "Unexpected Error",
-               subtitle: (0, uD.jsxs)(uD.Fragment, {
-                 children: [zD("homePage:pleaseCopyError"), (0, uD.jsx)("div", {
-                   style: {
-                     fontSize: "0.9rem",
-                     paddingTop: "1rem"
+             }
+             return (0, Yp.jsxs)("div", {
+               ref: function(ip) {
+                 pp.slider = ip
+               },
+               className: (0, op.default)("rangeslider", "rangeslider-".concat(Op), {
+                 "rangeslider-reverse": xp
+               }, Ip),
+               onMouseDown: this.handleDrag,
+               onMouseUp: this.handleEnd,
+               onTouchStart: this.handleStart,
+               onTouchEnd: this.handleEnd,
+               "aria-valuemin": Dp,
+               "aria-valuemax": Ap,
+               "aria-valuenow": cp,
+               "aria-orientation": Op,
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L525-L526` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L408-L410) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L525-L526)

```diff
-                   children: (0, uD.jsx)(jD.c, {
-                     errorString: DD.stack
+                   className: "rangeslider__handle-tooltip",
+                   children: (0, Yp.jsx)("span", {
+                     children: this.handleFormat(cp)
```

#### 25. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L529-L573` → after: `L416-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L416-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L416-L446) · [Before (L529-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L529-L573)

```diff
-               }),
-               confirmText: zD("general:tryAgain"),
-               cancelText: zD("general:cancel")
-             }).getResult().then((DD => {
-               !0 === DD && (0, CD.reloadBloxd)((0, lD.c)(rD.gameNameWithVariation, rD.lobbyName))
-             })), ND()
-           })) : pD(-1))
-         })), () => {
-           ZD = !0
-         }
-       }), [fD, wD.search, wD.pathname]), (0, rD.useEffect)((() => {
-         QD.disableFullscreen && (0, bD.f)() ? (0, bD.i)() : !QD.disableFullscreen && (0, bD.g)() && (0, bD.q)()
-       }), [JD, QD]), (0, rD.useEffect)((() => {
-         "inGame" === JD && Uz()
-       }), [JD, QD]), (0, rD.useEffect)((() => {
-         "inGame" !== JD && sD.e.set({
- ... (29 more removed lines; see GitHub link above)
+               }), Lp && this.renderLabels(mp)]
+             })
+           }
+         }]) && yp(ip.prototype, cp), Op && yp(ip, Op), Object.defineProperty(ip, "prototype", {
+           writable: !1
+         }), Sp
+       }(Ip.Component);
+     Hp(ep, "propTypes", {
+       min: Sp.default.number,
+       max: Sp.default.number,
+       step: Sp.default.number,
+       value: Sp.default.number,
+       orientation: Sp.default.string,
+       tooltip: Sp.default.bool,
+       reverse: Sp.default.bool,
+       labels: Sp.default.object,
+ ... (15 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L575-L584` → after: `L448-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L448-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L448-L465) · [Before (L575-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L575-L584)

```diff
-     var pD = wD(1211);
-     async function sD(DD) {
-       const zD = await fetch(`${pD.clientSideServerUrls.s3Url}/${DD}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === zD.status || 403 === zD.status) return null;
-       if (!zD.ok) throw new Error(`Failed to download the texture pack (${zD.status})`);
-       return await zD.json()
+     var jp = ep;
+     ip.default = jp
+   },
+   5122: (pp, ip, cp) => {
+     var Op;
+     ip.b = void 0;
+     var op = ((Op = cp(5127)) && Op.__esModule ? Op : {
+       default: Op
+     }).default;
+     ip.b = op
+   },
+   5137: (pp, ip) => {
+     Object.defineProperty(ip, "__esModule", {
+       value: !0
+     }), ip.capitalize = function(pp) {
+       return pp.charAt(0).toUpperCase() + pp.substr(1)
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L587-L593` → after: `L468-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L468-L469) · [Before (L587-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L587-L593)

```diff
-   8919: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => rD
-     });
-     var pD = wD(1339),
-       sD = wD(1232),
-       KD = wD(619);
+   5085: (pp, ip, cp) => {
+     var Op = cp(5088);
```

#### 28. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L595-L607` → after: `L471-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L471-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L471-L478) · [Before (L595-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L595-L607)

```diff
-     function rD(DD) {
-       return DD = function(DD, zD) {
-         var wD;
-         const pD = new URLSearchParams(zD),
-           sD = pD.get("lobby"),
-           KD = pD.get("vm"),
-           rD = null !== (wD = sD) && void 0 !== wD ? wD : DD.lobbyName,
-           LD = null !== KD && void 0 !== KD ? KD : DD.directJoinVmUrl;
-         if (rD === DD.lobbyName && LD === DD.directJoinVmUrl) return DD;
-         return {
-           ...DD,
-           lobbyName: rD,
-           directJoinVmUrl: LD
+     function op() {}
+ 
+     function Ip() {}
+     Ip.resetWarningCache = op, pp.exports = function() {
+       function pp(pp, ip, cp, op, Ip, Sp) {
+         if (Sp !== Op) {
+           var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw xp.name = "Invariant Violation", xp
```

#### 29. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L609-L612` → after: `L480-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L480-L482) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L609-L612)

```diff
-       }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), DD = function(DD) {
-         if ((0, KD.B)(DD.directJoinVmUrl)) return DD;
-         const zD = (0, sD.V)(DD.directJoinVmUrl);
-         null === zD && (DD.directJoinVmUrl = void 0);
+       }
+ 
+       function ip() {
```

#### 30. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L614-L617` → after: `L484-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L484-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L484-L509) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L614-L617)

```diff
-       }(DD = function(DD) {
-         if ((0, KD.B)(DD.gameNameWithVariation)) return DD;
-         return DD.gameNameWithVariation = (0, pD.i)(DD.gameNameWithVariation), DD
-       }(DD))
+       }
+       pp.isRequired = pp;
+       var cp = {
+         array: pp,
+         bigint: pp,
+         bool: pp,
+         func: pp,
+         number: pp,
+         object: pp,
+         string: pp,
+         symbol: pp,
+         any: pp,
+         arrayOf: ip,
+         element: pp,
+         elementType: pp,
+         instanceOf: ip,
+ ... (10 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L620-L633` → after: `L512-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L512-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L512-L516) · [Before (L620-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L620-L633)

```diff
-   8915: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => KD,
-       c: () => sD
-     });
-     let pD = !1;
- 
-     function sD() {
-       pD = !0
-     }
- 
-     function KD() {
-       return pD
-     }
+   5081: (pp, ip, cp) => {
+     pp.exports = cp(5085)()
+   },
+   5088: pp => {
+     pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
```

#### 32. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L635-L639` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L518-L520) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L635-L639)

```diff
-   8907: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => fD,
-       c: () => UD,
-       g: () => ID
+   5129: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => mp
```

#### 33. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L641-L647` → after: `L522-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L522-L523) · [Before (L641-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L641-L647)

```diff
-     var pD = wD(3139),
-       sD = wD(2264),
-       KD = wD(2119),
-       rD = wD(4673),
-       LD = wD(3494),
-       cD = wD(8915);
-     let gD = null;
+     var Op = function() {
+         if ("undefined" !== typeof Map) return Map;
```

#### 34. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L649-L655` → after: `L525-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L525-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L525-L579) · [Before (L649-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L649-L655)

```diff
-     function RD() {
-       return Promise.all([wD.e(74), wD.e(77), wD.e(89), wD.e(211), wD.e(76), wD.e(210), wD.e(134), wD.e(196), wD.e(139), wD.e(87), wD.e(218), wD.e(63)]).then((() => wD(40590)))
-     }
- 
-     function AD() {
-       Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(89), wD.e(86), wD.e(269), wD.e(189), wD.e(223), wD.e(247), wD.e(218), wD.e(46)]).then((() => wD(40914))).catch((() => {}))
-     }
+         function pp(pp, ip) {
+           var cp = -1;
+           return pp.some((function(pp, Op) {
+             return pp[0] === ip && (cp = Op, !0)
+           })), cp
+         }
+         return function() {
+           function ip() {
+             this.__entries__ = []
+           }
+           return Object.defineProperty(ip.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
+             },
+             enumerable: !0,
+             configurable: !0
+ ... (39 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L657-L668` → after: `L581-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L581-L583) · [Before (L657-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L657-L668)

```diff
-     function UD() {
-       return rD.c.cancelDownloadForJoin(), (0, LD.b)(), (0, sD.c)(), (0, cD.c)(), (0, KD.l)(), AD(), Promise.all([wD.e(77), wD.e(89), wD.e(211), wD.e(210), wD.e(134), wD.e(139), wD.e(58)]).then((() => wD(40967))).then((DD => {
-         let {
-           startJoinLoad: zD
-         } = DD;
-         zD()
-       }), (() => {})), gD ??= RD().then((DD => (DD.startWasmPlay(), DD.followPageUiPack((DD => {
-         pD.b.showGamePack(DD)
-       })), DD)), (DD => {
-         throw gD = null, DD
-       })), gD
-     }
+             function Ip() {
+               cp && (cp = !1, pp()), Op && Lp()
+             }
```

#### 36. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L670-L672` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L585-L587) · [Before (L670-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L670-L672)

```diff
-     function fD() {
-       return AD(), wD.e(271).then((() => wD(40972))).catch((() => {})), RD().then((() => {}))
-     }
+             function xp() {
+               Sp(Ip)
+             }
```

#### 37. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L674-L689` → after: `L589-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L589-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L589-L649) · [Before (L674-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L674-L689)

```diff
-     function ID() {
-       return RD().then((DD => {
-         DD.startWasmPreviews(), DD.prefetchWasmPreviews()
-       }))
-     }
-   },
-   8901: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       g: () => rD,
-       i: () => LD,
-       m: () => gD,
-       q: () => cD
-     });
-     var pD = wD(197),
-       sD = wD(4657);
+             function Lp() {
+               var pp = Date.now();
+               if (cp) {
+                 if (pp - op < 2) return;
+                 Op = !0
+               } else cp = !0, Op = !1, setTimeout(xp, ip);
+               op = pp
+             }
+             return Lp
+           }(this.refresh.bind(this), 20)
+         }
+         return pp.prototype.addObserver = function(pp) {
+           ~this.observers_.indexOf(pp) || this.observers_.push(pp), this.connected_ || this.connect_()
+         }, pp.prototype.removeObserver = function(pp) {
+           var ip = this.observers_,
+             cp = ip.indexOf(pp);
+ ... (45 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L692` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L652) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L692)

```diff
-       return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
+       return parseFloat(pp) || 0
```

#### 39. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L696` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L656-L659) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L696)

```diff
-       return "object" === typeof DD && null !== DD ? DD.code : void 0
+       for (var ip = [], cp = 1; cp < arguments.length; cp++) ip[cp - 1] = arguments[cp];
+       return ip.reduce((function(ip, cp) {
+         return ip + Wp(pp["border-" + cp + "-width"])
+       }), 0)
```

#### 40. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L700-L701` → after: `L663-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L663-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L663-L686) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L700-L701)

```diff
-       var zD;
-       return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
+       var ip = pp.clientWidth,
+         cp = pp.clientHeight;
+       if (!ip && !cp) return Pp;
+       var Op = Ap(pp).getComputedStyle(pp),
+         op = function(pp) {
+           for (var ip = {}, cp = 0, Op = ["top", "right", "bottom", "left"]; cp < Op.length; cp++) {
+             var op = Op[cp],
+               Ip = pp["padding-" + op];
+             ip[op] = Wp(Ip)
+           }
+           return ip
+         }(Op),
+         Ip = op.left + op.right,
+         Sp = op.top + op.bottom,
+         xp = Wp(Op.width),
+         Lp = Wp(Op.height);
+ ... (8 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L705` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L695-L698) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L705)

```diff
-       return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       return op ? wp(pp) ? function(pp) {
+         var ip = pp.getBBox();
+         return tp(0, 0, ip.width, ip.height)
+       }(pp) : Up(pp) : Pp
```

#### 42. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L707-L711` → after: `L700-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L700-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/110.js#L700-L707) · [Before (L707-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/110.js#L707-L711)

```diff
-     const gD = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+ 
+     function tp(pp, ip, cp, Op) {
+       return {
+         x: pp,
+         y: ip,
+         width: cp,
+         height: Op
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/111.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/111.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4)

#### 1. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L2)

```diff
- export const ids = [111];
+ export const ids = [111, 402];
```

#### 2. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L4-L21` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L4-L5) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L4-L21)

```diff
-   5021: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => ID,
-       c: () => MD,
-       e: () => BD,
-       g: () => nD
-     });
-     var pD = wD(58),
-       sD = wD(5026),
-       KD = wD(4395),
-       rD = wD(1366),
-       LD = wD(5049),
-       cD = wD(1044),
-       gD = wD.n(cD),
-       RD = wD(1355),
-       AD = wD(1737),
- ... (2 more removed lines; see GitHub link above)
+   5085: (pp, ip, cp) => {
+     var Op = cp(5088);
```

#### 3. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L23-L68` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L7) · [Before (L23-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L23-L68)

```diff
-     function ID(DD) {
-       let {
-         label: zD,
-         onClick: wD,
-         checked: pD,
-         circleInfoText: sD,
-         className: LD,
-         disabled: cD,
-         note: RD
-       } = DD;
-       return (0, fD.jsxs)("div", {
-         "aria-disabled": cD || void 0,
-         "data-pad-focusable": !0,
-         className: gD()("SettingBox CheckboxContainer", {
-           [LD]: LD,
-           SettingBoxDisabled: cD
- ... (30 more removed lines; see GitHub link above)
+     function op() {}
```

#### 4. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L70-L179` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L9-L14) · [Before (L70-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L70-L179)

```diff
-     function BD(DD) {
-       let {
-         name: zD,
-         onChange: wD,
-         min: sD,
-         max: KD,
-         step: LD,
-         initValue: cD,
-         circleInfoText: RD,
-         format: AD,
-         className: UD,
-         padStep: ID,
-         disabled: BD = !1,
-         selectableMax: GD,
-         cappedNote: nD,
-         onChangeComplete: MD
- ... (94 more removed lines; see GitHub link above)
+     function Ip() {}
+     Ip.resetWarningCache = op, pp.exports = function() {
+       function pp(pp, ip, cp, op, Ip, Sp) {
+         if (Sp !== Op) {
+           var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw xp.name = "Invariant Violation", xp
```

#### 5. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L181-L234` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L16) · [Before (L181-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L181-L234)

```diff
-       }), []);
-       const xD = (0, pD.useRef)(!1);
-       return (0, UD.c)(XD, {
-         adjust: DD => {
-           if (ED) return;
-           const zD = null !== JD && void 0 !== JD ? JD : Math.max(LD, Math.round((rD - KD) / 20 / LD) * LD),
-             pD = PD(wD + DD * zD * (RD ? -1 : 1));
-           pD !== wD && (null === MD || void 0 === MD || MD(), cD(pD), null === OD || void 0 === OD || OD())
-         },
-         setFraction: DD => {
-           if (ED) return;
-           const zD = PD(KD + (RD ? 1 - DD : DD) * (rD - KD));
-           zD !== wD && (xD.current || (xD.current = !0, null === MD || void 0 === MD || MD()), cD(zD))
-         },
-         endDrag: () => {
-           xD.current && (xD.current = !1, null === OD || void 0 === OD || OD())
- ... (38 more removed lines; see GitHub link above)
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L236-L258` → after: `L18-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L18-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L18-L45) · [Before (L236-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L236-L258)

```diff
-     function MD(DD) {
-       let {
-         label: zD,
-         options: wD,
-         value: pD,
-         onChange: sD,
-         circleInfoText: KD
-       } = DD;
-       return (0, fD.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, fD.jsxs)("div", {
-           className: "SliderText",
-           children: [zD, KD && (0, fD.jsx)(rD.b, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: KD
-           })]
- ... (7 more removed lines; see GitHub link above)
+       function ip() {
+         return pp
+       }
+       pp.isRequired = pp;
+       var cp = {
+         array: pp,
+         bigint: pp,
+         bool: pp,
+         func: pp,
+         number: pp,
+         object: pp,
+         string: pp,
+         symbol: pp,
+         any: pp,
+         arrayOf: ip,
+         element: pp,
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L261` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L48-L54) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L261)

```diff
-   6702: (DD, zD, wD) => {
+   5081: (pp, ip, cp) => {
+     pp.exports = cp(5085)()
+   },
+   5088: pp => {
+     pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
+   },
+   6737: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L265-L290` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L58-L64) · [Before (L265-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L265-L290)

```diff
-     var pD = wD(58),
-       sD = wD(1523),
-       KD = wD(6594),
-       rD = wD(1232),
-       LD = wD(351),
-       cD = wD(1346),
-       gD = wD(1511),
-       RD = wD(1447),
-       AD = wD(1366),
-       UD = wD(2600),
-       fD = wD(2739),
-       ID = wD(4572),
-       BD = wD(1127),
-       GD = wD(1495),
-       hD = wD(103),
-       nD = wD(1200);
- ... (10 more removed lines; see GitHub link above)
+     var Op = cp(1538),
+       op = cp(1480),
+       Ip = cp(1201),
+       Sp = cp(6743),
+       xp = cp(6716),
+       Lp = cp(6698),
+       Yp = cp(1112);
```

#### 9. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L292-L297` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L66) · [Before (L292-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L292-L297)

```diff
-     function CD(DD) {
-       let {
-         details: zD,
-         owner: wD,
-         onChanged: sD
-       } = DD;
+     function Dp() {
```

#### 10. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L300-L393` → after: `L69-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L69-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L69-L74) · [Before (L300-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L300-L393)

```diff
-       } = (0, nD.E)(), LD = (0, gD.useNavigatePreserveSearch)(), {
-         userContext: AD
-       } = (0, BD.c)(), [UD, fD] = (0, pD.useState)(!1), [ID, hD] = (0, pD.useState)(null), [MD, OD] = (0, pD.useState)(!1), {
-         packId: CD,
-         name: xD,
-         description: TD,
-         live: bD
-       } = zD;
-       async function jD(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD;
-         fD(!0), hD(null);
-         try {
-           await DD(), zD()
-         } catch (wD) {
-           console.error("Failed to change a shader pack", wD), hD((0, XD.u)(wD, rD, "shaderPackListing:ownerActionFailed"))
-         } finally {
- ... (78 more removed lines; see GitHub link above)
+       } = (0, Ip.H)(), ip = (0, Op.useNavigatePreserveSearch)();
+       return (0, xp.b)(), (0, Yp.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, Yp.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, Yp.jsx)(op.d, {
```

#### 11. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L395-L398` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L76) · [Before (L395-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L395-L398)

```diff
-               jD((() => GD.d.updateShaderPack(AD, {
-                 packId: CD,
-                 listed: !wD.listed
-               })))
+               ip(Lp.R)
```

#### 12. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L400-L450` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L78) · [Before (L400-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L400-L450)

```diff
-             children: [(0, VD.jsx)(ED.e, {
-               name: wD.listed ? "eye-slash" : "eye"
-             }), " ", rD(wD.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
-           }), !wD.isBanned && (0, VD.jsxs)(RD.f, {
-             disabled: UD,
-             onClick: () => {
-               OD(!MD)
-             },
-             children: [(0, VD.jsx)(ED.e, {
-               name: "upload"
-             }), " ", rD("shaderPackListing:uploadVersion")]
-           }), (0, VD.jsxs)(RD.T, {
-             disabled: UD || wD.isBanned,
-             onClick: () => {
-               !async function() {
-                 !0 === await QD.NotificationProvider.showPromptPopup({
- ... (35 more removed lines; see GitHub link above)
+             children: pp("shaderPackListing:backToPacks")
```

#### 13. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L452-L535` → after: `L80-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L80-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L80-L88) · [Before (L452-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L452-L535)

```diff
-         })]
-       })
-     }
-     var xD = wD(79),
-       TD = wD(1886),
-       bD = wD(1282),
-       jD = wD(5057),
-       dD = wD(1211),
-       SD = wD(6601),
-       iD = wD(6597),
-       lD = wD(6608);
- 
-     function WD(DD) {
-       let {
-         item: zD
-       } = DD;
- ... (68 more removed lines; see GitHub link above)
+         }), (0, Yp.jsx)("h1", {
+           className: "ShaderPackPublishTitle",
+           children: pp("shaderPackListing:publishTitle")
+         }), (0, Yp.jsx)(Sp.ShaderPackPublishForm, {
+           existing: null,
+           onPublished: pp => {
+             ip((0, Lp.V)(pp.packId), {
+               replace: !0
+             })
```

#### 14. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L541-L572` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L110-L113) · [Before (L541-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L541-L572)

```diff
-     function ND(DD) {
-       let {
-         fullUrl: zD,
-         largeUrl: wD,
-         alt: sD,
-         onClose: KD
-       } = DD;
-       const rD = (0, pD.useRef)(null);
-       return (0, bD.u)("popup", rD, KD), (0, pD.useEffect)((() => {
-         function DD(DD) {
-           "Escape" === DD.key && (DD.stopPropagation(), KD())
-         }
-         return window.addEventListener("keydown", DD, !0), () => {
-           window.removeEventListener("keydown", DD, !0)
-         }
-       }), [KD]), (0, xD.createPortal)((0, VD.jsxs)("div", {
- ... (16 more removed lines; see GitHub link above)
+     function Ap() {
+       var pp;
+       const [ip, cp] = (0, xp.d)(Yp, op.J[0]);
+       return [null !== (pp = op.J.find((pp => pp === ip))) && void 0 !== pp ? pp : op.J[0], cp]
```

#### 15. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L576-L658` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L116-L119) · [Before (L576-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L576-L658)

```diff
-     function yD(DD) {
-       let {
-         item: zD,
-         packUrl: wD,
-         baselineUrl: sD
-       } = DD;
-       const {
-         t: rD
-       } = (0, nD.E)(), [LD, cD] = (0, pD.useState)(50), gD = (0, pD.useRef)(!1), RD = (0, pD.useRef)(null), {
-         width: AD,
-         height: UD
-       } = KD.s.large;
- 
-       function fD(DD) {
-         cD((zD => (0, TD.f)(zD + DD, 0, 100)))
-       }
- ... (67 more removed lines; see GitHub link above)
+     function Pp() {
+       (0, Op.useEffect)((() => () => {
+         window.location.pathname.startsWith(Sp.R) || (0, Sp.g)()
+       }), [])
```

#### 16. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L661-L675` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L122-L123) · [Before (L661-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L661-L675)

```diff
-     function kD(DD) {
-       let {
-         side: zD,
-         onClick: wD,
-         children: pD
-       } = DD;
-       return (0, VD.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${zD}`,
-         onClick: wD,
-         children: (0, VD.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: pD
-         })
-       })
+     function Wp() {
+       return (0, xp.d)(Dp, !1)
```

#### 17. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L689` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L126) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L689)

```diff
-     function uD(DD) {
+     function yp() {
```

#### 18. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L691-L692` → after: `L128-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L128-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L128-L137) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L691-L692)

```diff
-         userContext: zD
-       } = (0, BD.c)(), [sD, KD] = (0, pD.useState)(null), [rD, LD] = (0, pD.useState)(!1), [cD, gD] = (0, pD.useState)(!1), [RD, AD] = (0, pD.useState)(null), UD = null === DD || void 0 === DD ? void 0 : DD.packId, fD = null === DD || void 0 === DD ? void 0 : DD.sourceHash;
+         userContext: pp,
+         isUserContextUpdating: ip
+       } = (0, Lp.b)(), [cp, op] = (0, Op.useState)(null), Sp = (0, Op.useRef)(new Set);
+ 
+       function xp(pp, ip) {
+         op((cp => {
+           const Op = new Set(cp);
+           return ip ? Op.add(pp) : Op.delete(pp), Op
+         }))
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L694` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L139) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L694)

```diff
-         if (LD(!1), AD(null), void 0 === UD) return;
+         if (ip) return;
```

#### 20. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L696-L699` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L141-L142) · [Before (L696-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L696-L699)

```diff
-         return Promise.all([(0, hD.hasUsableWebGpuAdapter)(), (0, oD.c)()]).then((zD => {
-           let [wD, pD] = zD;
-           var sD;
-           DD || (KD(wD), LD((null === pD || void 0 === pD || null === (sD = pD.listing) || void 0 === sD ? void 0 : sD.packId) === UD && pD.listing.sourceHash === fD))
+         return Ip.b.getFavouriteShaderPacks(pp).then((pp => {
+           cp || op(new Set(pp))
```

#### 21. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L701` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L144) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L701)

```diff
-           console.error("Failed to check whether this shader pack can be used", zD), DD || KD(!1)
+           console.error("Failed to get favourite shader packs", pp), cp || op(new Set)
```

#### 22. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L706-L732` → after: `L149-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L149-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L149-L158) · [Before (L706-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L706-L732)

```diff
-         webGpuUsable: sD,
-         inUse: rD,
-         busy: cD,
-         errorKey: RD,
-         use: () => {
-           null !== DD && async function(DD) {
-             gD(!0), AD(null);
-             try {
-               const {
-                 installListedShaderPack: pD
-               } = await Promise.all([wD.e(77), wD.e(133), wD.e(113)]).then((() => wD(40420))), sD = await pD({
-                 packId: DD.packId,
-                 sourceHash: DD.sourceHash,
-                 name: DD.name,
-                 ownerName: DD.ownerName,
-                 description: DD.description
- ... (11 more removed lines; see GitHub link above)
+         isFavourite: pp => null === cp ? null : cp.has(pp),
+         toggle: function(ip) {
+           if (null === cp || Sp.current.has(ip)) return;
+           Sp.current.add(ip);
+           const Op = !cp.has(ip);
+           xp(ip, Op), (Op ? Ip.b.favouriteShaderPack(pp, ip) : Ip.b.unfavouriteShaderPack(pp, ip)).catch((pp => {
+             console.error("Failed to change a favourite shader pack", pp), xp(ip, !Op)
+           })).finally((() => {
+             Sp.current.delete(ip)
+           }))
```

#### 23. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L738-L766` → after: `L198-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L198-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L198-L203) · [Before (L738-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L738-L766)

```diff
-       let {
-         packUse: zD
-       } = DD;
-       const {
-         t: wD
-       } = (0, nD.E)(), {
-         webGpuUsable: pD,
-         inUse: sD,
-         busy: KD,
-         errorKey: rD,
-         use: LD
-       } = zD;
-       return (0, VD.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, VD.jsxs)(RD.o, {
-           disabled: !0 !== pD || sD,
- ... (13 more removed lines; see GitHub link above)
+       return `${Sp}/${encodeURIComponent(pp)}`
+     }
+     let Yp = null;
+ 
+     function Dp(pp) {
+       Yp = pp
```

#### 24. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L771-L778` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L272-L274) · [Before (L771-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L771-L778)

```diff
-       const {
-         t: zD
-       } = (0, nD.E)(), wD = (0, gD.useNavigatePreserveSearch)(), {
-         packId: KD
-       } = (0, sD.C)(), {
-         userContext: rD,
-         isUserContextUpdating: LD
-       } = (0, BD.c)(), [AD, UD] = (0, pD.useState)(null), [fD, hD] = (0, pD.useState)(null), [MD, OD] = (0, pD.useState)(0), JD = (0, pD.useRef)(0);
+       const Op = Qp(ip);
+       (0, Ip.g)(pp, dp, "explore" === ip.section ? null : ip.section), (0, Ip.g)(pp, ep, ip.sort === Rp ? null : ip.sort), (0, Ip.g)(pp, jp, Op === qp ? null : Op), (0, Ip.g)(pp, kp, ip.searchQuery), (0, Ip.g)(pp, mp, null !== (cp = tp(ip.banned)) && void 0 !== cp ? cp : null), ( … [truncated]
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L780-L840` → after: `L276-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L276-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L276-L286) · [Before (L780-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L780-L840)

```diff
-       function ED() {
-         var DD;
-         null !== (DD = (0, gD.getPreviousLocation)()) && void 0 !== DD && DD.startsWith(XD.S) ? wD(-1) : wD(XD.S)
-       }(0, ID.e)(ED), (0, SD.b)(), (0, pD.useEffect)((() => {
-         if (LD || void 0 === KD) return;
-         const DD = ++JD.current;
-         hD(null), GD.d.getShaderPack(rD, KD).then((zD => {
-           JD.current === DD && UD(zD)
-         })).catch((zD => {
-           JD.current === DD && (console.error("Failed to get the shader pack", zD), UD(null), hD({
-             error: zD
-           }))
-         }))
-       }), [KD, rD, LD, MD]);
-       const QD = () => {
-           OD((DD => DD + 1))
- ... (45 more removed lines; see GitHub link above)
+     function Ep(pp) {
+       const ip = new URLSearchParams;
+       return Cp(ip, {
+         section: "explore",
+         sort: Rp,
+         withFeatures: "strict" === pp ? [pp] : [pp, "strict"],
+         withoutFeatures: [],
+         searchQuery: null,
+         pageNumber: 1,
+         banned: "without"
+       }), `${Sp}?${ip.toString()}`
```

#### 26. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L844-L862` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L290) · [Before (L844-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L844-L862)

```diff
-       let {
-         item: zD,
-         favourites: wD,
-         packUse: pD
-       } = DD;
-       const sD = wD.isFavourite(zD.packId);
-       return (0, VD.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [hD.featureFlags.settings.canUseShaderPacks && (0, VD.jsx)(vD, {
-           packUse: pD
-         }), (0, VD.jsx)(RD.x, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             wD.toggle(zD.packId)
-           },
-           isLiked: !0 === sD,
- ... (3 more removed lines; see GitHub link above)
+       return Qp(pp) === qp
```

#### 27. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L866-L954` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L294) · [Before (L866-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L866-L954)

```diff
-       let {
-         item: zD,
-         ownerPreview: wD,
-         bloxdhubSlug: pD,
-         actions: sD
-       } = DD;
-       const {
-         t: LD
-       } = (0, nD.E)(), cD = (0, fD.p)(), RD = null === pD ? null : (0, KD.f)(pD);
-       return (0, VD.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [zD.description && (0, VD.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: zD.description
-         }), (0, VD.jsxs)("div", {
-           className: "ShaderPackFeatureList",
- ... (73 more removed lines; see GitHub link above)
+       return null !== pp.searchQuery || "with" === pp.banned || Qp(pp) !== qp
```

#### 28. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L958-L962` → after: `L298-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L298-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L298-L326) · [Before (L958-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L958-L962)

```diff
-       let {
-         label: zD,
-         time: wD,
-         now: pD
-       } = DD;
+       return yp.flatMap((ip => {
+         const cp = wp(pp, ip);
+         return "with" === cp ? [ip] : "without" === cp ? [`-${ip}`] : []
+       })).join(",")
+     }
+     const Jp = {
+         popular: "shaderPackListing:sortPopular",
+         updated: "shaderPackListing:sortUpdated",
+         newest: "shaderPackListing:sortNewest"
+       },
+       Bp = {
+         forest: "shaderPackListing:viewForest",
+         desert: "shaderPackListing:viewDesert",
+         water: "shaderPackListing:viewWater",
+         night: "shaderPackListing:viewNight",
+         cave: "shaderPackListing:viewCave"
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L964-L971` → after: `L328-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L328-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L328-L348) · [Before (L964-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L964-L971)

```diff
-         t: sD,
-         selectedLanguage: KD
-       } = (0, nD.E)(), rD = new Date(wD);
-       let cD = rD.toLocaleDateString();
-       if (pD - wD <= 30 * LD.f) {
-         const DD = (0, nD.n)(KD.code, "shaderPackListing:timeAgo");
-         cD = sD("shaderPackListing:timeAgo", {
-           time: (0, LD.fb)(DD, wD, pD)
+         pending: Sp
+       } = pp;
+       if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
+           tone: "warning",
+           text: op("shaderPackListing:ownerBroken"),
+           detail: pp.brokenError
+         }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
+         tone: "warning",
+         text: op(ip ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, Op.n)(Sp.error) ? null : Sp.error
+       });
+       else if (Sp) {
+         const pp = null === Sp.renderNotBefore ? 0 : Sp.renderNotBefore - cp,
+           Op = String(Math.ceil(pp / 6e4)),
+           xp = op(ip ? pp > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : pp > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: Op
+ ... (5 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L974-L983` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L351-L355) · [Before (L974-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L974-L983)

```diff
-       return (0, VD.jsx)(AD.f, {
-         tooltipInner: rD.toLocaleString(),
-         children: (0, VD.jsxs)("div", {
-           children: [(0, VD.jsx)("dt", {
-             children: zD
-           }), (0, VD.jsx)("dd", {
-             children: cD
-           })]
-         })
-       })
+       return pp.listed || Ip.push({
+         tone: "info",
+         text: op("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), Ip
```

#### 31. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L995-L1033` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L359-L363) · [Before (L995-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L995-L1033)

```diff
-       let {
-         options: zD,
-         value: wD,
-         onChange: pD,
-         ariaLabel: rD,
-         className: LD,
-         reselectable: cD = !1,
-         keepsFocus: gD = !1,
-         padTabs: RD
-       } = DD;
-       const AD = void 0 !== RD;
-       return (0, KD.jsx)("div", {
-         className: sD()("SegmentedToggle", LD),
-         role: "group",
-         "aria-label": rD,
-         "data-pad-tabs": RD,
- ... (23 more removed lines; see GitHub link above)
+       return Math.max(1, Math.round(pp / 1024))
+     }
+ 
+     function bp(pp, ip, cp) {
+       return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
```

#### 32. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1036` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L366) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1036)

```diff
-   5057: (DD, zD, wD) => {
+   6724: (pp, ip, cp) => {
```

#### 33. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1038-L1039` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L368) · [Before (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1038-L1039)

```diff
-       b: () => KD,
-       c: () => rD
+       d: () => Ip
```

#### 34. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1041-L1065` → after: `L370-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L370-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L370-L379) · [Before (L1041-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1041-L1065)

```diff
-     var pD = wD(58);
-     const sD = new WeakMap,
-       KD = DD => {
-         var zD;
-         const wD = DD.closest("[data-pad-slider]");
-         return wD && null !== (zD = sD.get(wD)) && void 0 !== zD ? zD : null
-       },
-       rD = (DD, zD) => {
-         const wD = (0, pD.useRef)(zD);
-         wD.current = zD, (0, pD.useEffect)((() => {
-           if (DD.current) return ((DD, zD) => (sD.set(DD, zD), () => {
-             sD.get(DD) === zD && sD.delete(DD)
-           }))(DD.current, {
-             adjust: DD => {
-               wD.current.adjust(DD)
-             },
- ... (9 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(44);
+ 
+     function Ip(pp, ip) {
+       var cp;
+       const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
+       return [Ip, ip => {
+         op.h.setItem(pp, ip), Sp(ip)
+       }]
+     }
```

#### 35. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1067` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L381) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1067)

```diff
-   6693: (DD, zD, wD) => {
+   6804: (pp, ip, cp) => {
```

#### 36. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1069-L1070` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L383-L384) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1069-L1070)

```diff
-       b: () => sD,
-       c: () => KD
+       e: () => op,
+       f: () => Ip
```

#### 37. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1072` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L386) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1072)

```diff
-     var pD = wD(35);
+     var Op = cp(44);
```

#### 38. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L1077` → after: `L391-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L391-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/111.js#L391-L470) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/111.js#L1077)

```diff
-       return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
+       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
+     }
+   },
+   6704: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => Ip,
+       D: () => xp,
+       G: () => Sp,
+       J: () => Op,
+       M: () => Pp,
+       P: () => Dp,
+       S: () => dp,
+       V: () => Ap,
+       W: () => Yp,
+       d: () => yp,
+       g: () => wp,
+ ... (64 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/112.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/112.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e)

#### 1. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L4-L7)

```diff
-   5091: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => RD,
-       h: () => gD
+   9030: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => ei
```

#### 2. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L9-L18` → after: `L8-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L8-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L8-L100) · [Before (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L9-L18)

```diff
-     var pD = wD(58),
-       sD = wD(1447),
-       KD = wD(1200),
-       rD = wD(103),
-       LD = wD(3128),
-       cD = wD(1096);
- 
-     function gD() {
-       return !(0, rD.isMobile)()
-     }
+     var Op = cp(1543),
+       op = cp(25),
+       Ip = cp(4747),
+       Sp = cp(62),
+       xp = cp(1476);
+     var Lp = cp(1956),
+       Yp = cp(1538),
+       Dp = cp(1372),
+       Ap = cp(1201),
+       Pp = cp(156),
+       Wp = cp(195),
+       yp = cp(1014),
+       Up = cp(1024),
+       wp = cp(1234),
+       vp = cp(2420),
+       tp = cp(1520),
+ ... (77 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L22-L24` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L104-L105) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L22-L24)

```diff
-         disabled: zD,
-         openFolderPicker: wD,
-         onFiles: rD
+         onApply: ip,
+         onSkip: cp
```

#### 4. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L28-L39` → after: `L109-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L109-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L109-L195) · [Before (L28-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L28-L39)

```diff
-       } = (0, KD.E)(), AD = (0, pD.useRef)(null);
-       return (0, cD.jsxs)("div", {
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
-         children: [(0, cD.jsx)("input", {
-           ref: AD,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(DD) {
-             const zD = Array.from(DD.target.files);
-             DD.target.value = "", rD(zD)
+       } = (0, Ap.H)();
+       return (0, Sp.useEffect)((() => {
+         Gp.e.skipPlayWait()
+       }), []), (0, rp.jsx)(ap.j, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, rp.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [Op("customTexturePack:downloadPrompt"), (0, rp.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: Op("customTexturePack:authorWarning")
+           }), (0, rp.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: Op("customTexturePack:existingPackSaved")
+           })]
+         }),
+ ... (71 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L41-L46` → after: `L197-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L197-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L197-L213) · [Before (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L41-L46)

```diff
-         }), gD() && (0, cD.jsx)(sD.f, {
-           disabled: zD,
-           onClick: wD,
-           children: RD("general:chooseFolder")
-         }), (0, cD.jsx)(sD.f, {
-           disabled: zD,
+         },
+         onSkip: Dp
+       }) : "downloading" === op ? (0, rp.jsx)(ap.j, {
+         icon: "download",
+         title: "customTexturePack:downloading",
+         subtitle: (0, rp.jsx)("div", {
+           className: "CustomTexturePackDownloaderLogoLoaderContainer",
+           children: (0, rp.jsx)(np.c, {
+             showFace: !0
+           })
+         })
+       }) : "error" === op ? (0, rp.jsx)(ap.j, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: xp,
+         confirm: {
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L48-L51` → after: `L215-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L215-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L215-L606) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L48-L51)

```diff
-             (0, LD.e)(AD.current)
-           },
-           children: RD("general:chooseZip")
-         })]
+             window.location.reload()
+           }
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: Dp
+         }
+       }) : "refused" === op ? (0, rp.jsx)(ap.j, {
+         icon: "face-worried",
+         title: "customTexturePack:cantApplyTitle",
+         subtitle: "customTexturePack:gamePackHasExternalUrls",
+         confirm: {
+           text: "general:continue",
+           onClick: Dp
+         }
+       }) : null
+ ... (376 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L55` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L610) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L55)

```diff
-   5070: (DD, zD, wD) => {
+   5103: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L57-L58` → after: `L612-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L612-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L612-L678) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L57-L58)

```diff
-       d: () => LD,
-       g: () => rD,
+       d: () => op
+     });
+     var Op = cp(1211);
+     async function op(pp) {
+       const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === ip.status || 403 === ip.status) return null;
+       if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
+       return await ip.json()
+     }
+   },
+   9049: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (51 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L61-L62` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L681) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L61-L62)

```diff
-     var pD = wD(5076);
-     const sD = [DD => DD.strict ? "strict" : "nonStrict", DD => DD.program];
+     let Op = null;
```

#### 10. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L65-L108` → after: `L684-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L684-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L684-L702) · [Before (L65-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L65-L108)

```diff
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const pD = {};
-       for (const sD in wD) pD[sD] = `\0${sD}\0`;
-       return DD(zD, pD).replace(/\0(\w+)\0/g, ((DD, zD) => wD[zD]))
-     }
- 
-     function rD(DD) {
-       return null === DD.file ? null : DD.line > 0 ? `${DD.file}:${DD.line}` : DD.file
-     }
- 
-     function LD(DD) {
-       const zD = new Map(DD.map((DD => [cD(DD).join("."), DD])));
-       if (0 === zD.size) return [];
-       const wD = RD([...zD.values()]);
-       return 0 === wD[0].length ? [] : wD
-     }
- ... (28 more removed lines; see GitHub link above)
+       return `${ip}\n${null!==pp&&void 0!==pp?pp:""}`
+     }
+ 
+     function Ip(pp) {
+       Op = pp
+     }
+ 
+     function Sp(pp) {
+       const ip = Op;
+       return Op = null, null !== ip && ip.key === pp ? ip.settled : null
+     }
+ 
+     function xp(pp, ip, cp, Op) {
+       let op = !1;
+       null !== ip && setTimeout((() => {
+         Op() && !op && ip()
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L111-L113` → after: `L705-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L705-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L705-L709) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L111-L113)

```diff
-   6624: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       ShaderPackPublishForm: () => MD
+   9041: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Wp,
+       f: () => Pp,
+       j: () => yp
```

#### 12. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L115-L331` → after: `L711-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L711-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L711-L747) · [Before (L115-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L115-L331)

```diff
-     var pD = wD(58),
-       sD = wD(6594),
-       KD = wD(206),
-       rD = wD(5084),
-       LD = wD(1057),
-       cD = wD(1447),
-       gD = wD(1687),
-       RD = wD(1127),
-       AD = wD(6630),
-       UD = wD(6637),
-       fD = wD(1495),
-       ID = wD(1200),
-       BD = wD(6645),
-       GD = wD(6682),
-       hD = wD(6590),
-       nD = wD(1096);
- ... (201 more removed lines; see GitHub link above)
+     var Op = cp(3246),
+       op = cp(2343),
+       Ip = cp(2174),
+       Sp = cp(4739),
+       xp = cp(3607),
+       Lp = cp(9046);
+     let Yp = null;
+ 
+     function Dp() {
+       return Promise.all([cp.e(75), cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(160), cp.e(137), cp.e(198), cp.e(140), cp.e(88), cp.e(275), cp.e(64)]).then((() => cp(40873)))
+     }
+ 
+     function Ap() {
+       Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(90), cp.e(87), cp.e(273), cp.e(191), cp.e(228), cp.e(252), cp.e(275), cp.e(47)]).then((() => cp(41212))).catch((() => {}))
+     }
+ 
+ ... (21 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L334` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L750) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L334)

```diff
-   5076: (DD, zD, wD) => {
+   9034: (pp, ip, cp) => {
```

#### 14. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L336-L338` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L752-L756) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L336-L338)

```diff
-       b: () => pD.i,
-       d: () => sD,
-       h: () => pD.q
+       b: () => Ip,
+       f: () => Sp,
+       h: () => xp,
+       l: () => Yp,
+       o: () => Lp
```

#### 15. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L340-L525` → after: `L758-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L758-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/112.js#L758-L781) · [Before (L340-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/112.js#L340-L525)

```diff
-     var pD = wD(5084);
-     const sD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((zD => ({
-       strict: DD,
-       program: zD
-     })))))
-   },
-   5084: (DD, zD, wD) => {
-     wD.d(zD, {
-       A: () => UD,
-       d: () => LD,
-       e: () => rD,
-       i: () => pD,
-       m: () => BD,
-       n: () => AD,
-       q: () => sD,
-       r: () => KD,
- ... (170 more removed lines; see GitHub link above)
+     var Op = cp(195),
+       op = cp(4719);
+ 
+     function Ip(pp) {
+       return Sp(pp) === Op.e.gameOrPluginOnPlayerAuthRejected.code
+     }
+ 
+     function Sp(pp) {
+       return "object" === typeof pp && null !== pp ? pp.code : void 0
+     }
+ 
+     function xp(pp) {
+       var ip;
+       return null !== (ip = Object.keys(op.c).find((ip => op.c[ip] === pp))) && void 0 !== ip ? ip : null
+     }
+ 
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L2)

```diff
- export const ids = [113, 116, 136, 137];
+ export const ids = [113];
```

#### 2. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L4)

```diff
-   5076: (DD, zD, wD) => {
+   5113: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6-L19` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L6-L9) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L6-L19)

```diff
-       b: () => pD.i,
-       d: () => sD,
-       h: () => pD.q
-     });
-     var pD = wD(5084);
-     const sD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((zD => ({
-       strict: DD,
-       program: zD
-     })))))
-   },
-   40420: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => AD,
-       installListedShaderPack: () => RD
+       b: () => yp,
+       f: () => Hp,
+       i: () => Up,
+       l: () => tp
```

#### 4. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L21-L38` → after: `L11-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L11-L67) · [Before (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L21-L38)

```diff
-     var pD = wD(6594),
-       sD = wD(5084),
-       KD = wD(1211),
-       rD = wD(6645),
-       LD = wD(5076),
-       cD = wD(6691),
-       gD = wD(6682);
-     async function RD(DD) {
-       const zD = await (0, rD.loadPageShaderPackCompiler)();
-       if (null === zD) return {
-         kind: "failed",
-         reason: "compiler"
-       };
-       const wD = await AD(DD, zD);
-       return "failed" === wD.kind ? wD : await (0, cD.saveShaderPack)(wD.stored, zD) ? ((0, cD.markShaderPackChangePending)(), wD) : {
-         kind: "failed",
- ... (2 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(5122),
+       Ip = cp(4462),
+       Sp = cp(1387),
+       xp = cp(5146),
+       Lp = cp(1049),
+       Yp = cp.n(Lp),
+       Dp = cp(1372),
+       Ap = cp(1765),
+       Pp = cp(5149),
+       Wp = cp(1112);
+ 
+     function yp(pp) {
+       let {
+         label: ip,
+         onClick: cp,
+ ... (41 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L40-L56` → after: `L69-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L69-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L69-L196) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L40-L56)

```diff
-     async function AD(DD, zD) {
-       const wD = await async function(DD) {
-         let {
-           packId: zD,
-           sourceHash: wD
-         } = DD;
-         try {
-           const DD = await fetch(`${KD.clientSideServerUrls.s3Url}/${(0,pD.M)(zD,wD)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!DD.ok) return console.error(`Failed to download shader pack ${zD} (${DD.status})`), null;
-           const sD = await DD.json();
-           return "object" !== typeof sD || null === sD ? (console.error(`Shader pack ${zD}'s source isn't an object`), null) : sD
-         } catch (sD) {
- ... (1 more removed lines; see GitHub link above)
+ 
+     function Up(pp) {
+       let {
+         name: ip,
+         onChange: cp,
+         min: op,
+         max: Ip,
+         step: xp,
+         initValue: Lp,
+         circleInfoText: Dp,
+         format: Ap,
+         className: Pp,
+         padStep: yp,
+         disabled: Up = !1,
+         selectableMax: wp,
+         cappedNote: tp,
+ ... (112 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L58-L83` → after: `L198-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L198-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L198-L201) · [Before (L58-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L58-L83)

```diff
-       }(DD);
-       if (null === wD) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, LD.h)(wD.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const rD = (0, sD.v)(wD.files);
-       if ("string" === typeof rD) return console.error(`A listed shader pack breaks the pack rules: ${rD}`), {
-         kind: "failed",
-         reason: "invalid"
-       };
-       const RD = await (0, gD.h)(zD, rD);
-       if (!1 === (null === RD || void 0 === RD ? void 0 : RD.ok)) return {
- ... (10 more removed lines; see GitHub link above)
+       }), (0, Wp.jsx)("div", {
+         ref: kp,
+         style: {
+           display: "contents"
```

#### 7. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L85-L91` → after: `L203-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L203-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L203-L220) · [Before (L85-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L85-L91)

```diff
-         files: rD
-       };
-       return {
-         kind: "loaded",
-         stored: (0, cD.toStoredShaderPack)(AD, RD, {
-           packId: DD.packId,
-           sourceHash: DD.sourceHash
+         children: (0, Wp.jsx)(op.b, {
+           value: cp,
+           min: Ip,
+           max: Sp,
+           step: xp,
+           onChange: Lp,
+           orientation: Yp,
+           reverse: Dp,
+           tooltip: yp,
+           labels: Up,
+           handleLabel: vp,
+           format: tp,
+           onChangeStart: () => {
+             null === Hp || void 0 === Hp || Hp(), null === Ap || void 0 === Ap || Ap(!0)
+           },
+           onChangeComplete: () => {
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L93` → after: `L222-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L222-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L222-L258) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L93)

```diff
-       }
+       })
+     }
+     async function tp() {
+       const pp = Dp.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await pp.getResult() && (0, Ap.reloadBloxd)()
+     }
+ 
+     function Hp(pp) {
+       let {
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L96` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L261) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L96)

```diff
-   6691: (DD, zD, wD) => {
+   6806: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L98-L111` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L263) · [Before (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L98-L111)

```diff
-       forgetShaderPackActiveHint: () => xD,
-       isOtherApiVersion: () => XD,
-       isShaderPackActive: () => OD,
-       isShaderPackChangePending: () => QD,
-       markShaderPackChangePending: () => ED,
-       pageShaderPackValidationVersion: () => VD,
-       reconcileStoredShaderPackHint: () => CD,
-       removeShaderPack: () => MD,
-       replaceShaderPack: () => GD,
-       saveShaderPack: () => BD,
-       shaderPackNeedsCheck: () => PD,
-       storedPackOutcome: () => JD,
-       storedShaderPackFiles: () => UD,
-       toStoredShaderPack: () => AD
+       default: () => Kp
```

#### 11. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L113-L120` → after: `L265-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L265-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L265-L292) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L113-L120)

```diff
-     var pD = wD(5084),
-       sD = wD(5076),
-       KD = wD(35),
-       rD = wD(3462),
-       LD = wD(6693),
-       cD = wD(6664);
-     const gD = "shaderPackChangePending";
-     let RD = null;
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(6704),
+       Sp = cp(1234),
+       xp = cp(337),
+       Lp = cp(1569),
+       Yp = cp(1361),
+       Dp = cp(1538),
+       Ap = cp(1480),
+       Pp = cp(1387),
+       Wp = cp(1626),
+       yp = cp(2671),
+       Up = cp(2814),
+       wp = cp(4648),
+       vp = cp(1141),
+       tp = cp(1520),
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L122-L128` → after: `L294-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L294-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L294-L318) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L122-L128)

```diff
-     function AD(DD, zD, wD) {
-       return {
-         manifest: DD.manifest,
-         files: (0, pD.z)(DD.files),
-         validation: zD,
-         ...wD && {
-           listing: wD
+     function Ep(pp) {
+       let {
+         details: ip,
+         owner: cp,
+         onChanged: op
+       } = pp;
+       const {
+         t: Sp
+       } = (0, dp.H)(), xp = (0, Dp.useNavigatePreserveSearch)(), {
+         userContext: Lp
+       } = (0, vp.b)(), [Pp, Wp] = (0, Op.useState)(!1), [yp, Up] = (0, Op.useState)(null), [wp, Hp] = (0, Op.useState)(!1), {
+         packId: ep,
+         name: jp,
+         description: Ep,
+         live: Xp
+       } = ip;
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L134-L137` → after: `L467-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L467-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L467-L540) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L134-L137)

```diff
-       return Object.keys(DD.files).map((zD => ({
-         path: zD,
-         source: DD.files[zD]
-       })))
+       let {
+         item: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, dp.H)(), [op] = (0, Np.h)(), [Sp, xp] = (0, Op.useState)(op), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(!1), {
+         s3Url: Pp
+       } = Bp.clientSideServerUrls, {
+         width: Wp,
+         height: yp
+       } = Ip.u.large, Up = (0, Ip.x)(Pp, ip, Sp, "large"), {
+         renderVersion: wp
+       } = ip;
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackPreviews",
+         children: [(0, Mp.jsx)(fp.e, {
+ ... (58 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L142-L162` → after: `L544-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L544-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L544-L574) · [Before (L142-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L142-L162)

```diff
-       const zD = fD.then(DD);
-       return fD = zD.catch((() => {})), zD
-     }
- 
-     function BD(DD, zD) {
-       return ID((() => hD(DD, zD)))
-     }
- 
-     function GD(DD, zD, wD) {
-       return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
-     }
-     async function hD(DD, zD) {
-       const wD = await KD.g.setItem(LD.b, DD);
-       return wD && TD(DD, zD), wD
-     }
-     async function nD() {
- ... (5 more removed lines; see GitHub link above)
+       let {
+         fullUrl: ip,
+         largeUrl: cp,
+         alt: op,
+         onClose: Ip
+       } = pp;
+       const Sp = (0, Op.useRef)(null);
+       return (0, Qp.x)("popup", Sp, Ip), (0, Op.useEffect)((() => {
+         function pp(pp) {
+           "Escape" === pp.key && (pp.stopPropagation(), Ip())
+         }
+         return window.addEventListener("keydown", pp, !0), () => {
+           window.removeEventListener("keydown", pp, !0)
+         }
+       }), [Ip]), (0, Xp.createPortal)((0, Mp.jsxs)("div", {
+         ref: Sp,
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L165-L167` → after: `L578-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L578-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L578-L589) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L165-L167)

```diff
-     function OD(DD, zD) {
-       return "active" === JD(DD, zD).kind
-     }
+     function np(pp) {
+       let {
+         item: ip,
+         packUrl: cp,
+         baselineUrl: op
+       } = pp;
+       const {
+         t: Sp
+       } = (0, dp.H)(), [xp, Lp] = (0, Op.useState)(50), Yp = (0, Op.useRef)(!1), Dp = (0, Op.useRef)(null), {
+         width: Ap,
+         height: Pp
+       } = Ip.u.large;
```

#### 16. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L169-L190` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L591-L592) · [Before (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L169-L190)

```diff
-     function JD(DD, zD) {
-       var wD;
-       return null === DD ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : XD(DD) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) || DD.validation.fromRecheck ? null === zD ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : PD(DD, zD) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : DD.validation.ok ? {
-         kind: "active"
- ... (6 more removed lines; see GitHub link above)
+       function Wp(pp) {
+         Lp((ip => (0, lp.h)(ip + pp, 0, 100)))
```

#### 17. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L194-L195` → after: `L595-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L595-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L595-L660) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L194-L195)

```diff
-     function ED() {
-       KD.k.setItem(gD, performance.timeOrigin)
+       function yp(pp) {
+         const ip = pp.currentTarget.getBoundingClientRect();
+         Lp((0, lp.h)((pp.clientX - ip.left) / ip.width * 100, 0, 100))
+       }
+       return (0, Jp.h)(Dp, {
+         adjust: pp => {
+           Wp(pp * ap)
+         },
+         setFraction: pp => {
+           Lp(100 * pp)
+         },
+         endDrag: () => {}
+       }), (0, Mp.jsxs)("div", {
+         ref: Dp,
+         className: "ShaderPackCompare",
+         "data-pad-slider": "",
+ ... (50 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L198-L199` → after: `L663-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L663-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L663-L677) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L198-L199)

```diff
-     function QD() {
-       return KD.k.getItem(gD) === performance.timeOrigin
+     function Fp(pp) {
+       let {
+         side: ip,
+         onClick: cp,
+         children: Op
+       } = pp;
+       return (0, Mp.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${ip}`,
+         onClick: cp,
+         children: (0, Mp.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: Op
+         })
+       })
```

#### 19. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L203` → after: `L692-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L692-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L692-L736) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L203)

```diff
-       return !(0, sD.h)(DD.manifest.apiVersion)
+       const {
+         userContext: ip
+       } = (0, vp.b)(), [op, Ip] = (0, Op.useState)(null), [Sp, xp] = (0, Op.useState)(!1), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(null), Pp = null === pp || void 0 === pp ? void 0 : pp.packId, Wp = null === pp || void 0 === pp ? void 0 : pp.sourceHash;
+       return (0, Op.useEffect)((() => {
+         if (xp(!1), Ap(null), void 0 === Pp) return;
+         let pp = !1;
+         return Promise.all([(0, Hp.hasUsableWebGpuAdapter)(), (0, rp.f)()]).then((ip => {
+           let [cp, Op] = ip;
+           var op;
+           pp || (Ip(cp), xp((null === Op || void 0 === Op || null === (op = Op.listing) || void 0 === op ? void 0 : op.packId) === Pp && Op.listing.sourceHash === Wp))
+         })).catch((ip => {
+           console.error("Failed to check whether this shader pack can be used", ip), pp || Ip(!1)
+         })), () => {
+           pp = !0
+         }
+       }), [Pp, Wp]), {
+ ... (29 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L207` → after: `L740-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L740-L768) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L207)

```diff
-       return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
+       let {
+         packUse: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, dp.H)(), {
+         webGpuUsable: Op,
+         inUse: op,
+         busy: Ip,
+         errorKey: Sp,
+         use: xp
+       } = ip;
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, Mp.jsxs)(Ap.o, {
+           disabled: !0 !== Op || op,
+ ... (13 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L210` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L771) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L210)

```diff
-     function PD(DD, zD) {
+     function Kp() {
```

#### 22. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L212` → after: `L773-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L773-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L773-L844) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L212)

```diff
-       return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
+       const {
+         t: ip
+       } = (0, dp.H)(), cp = (0, Dp.useNavigatePreserveSearch)(), {
+         packId: Ip
+       } = (0, op.A)(), {
+         userContext: Sp,
+         isUserContextUpdating: xp
+       } = (0, vp.b)(), [Pp, yp] = (0, Op.useState)(null), [Up, Hp] = (0, Op.useState)(null), [ep, jp] = (0, Op.useState)(0), kp = (0, Op.useRef)(0);
+ 
+       function mp() {
+         var pp;
+         null !== (pp = (0, Dp.getPreviousLocation)()) && void 0 !== pp && pp.startsWith(qp.R) ? cp(-1) : cp(qp.R)
+       }(0, wp.e)(mp), (0, Np.b)(), (0, Op.useEffect)((() => {
+         if (xp || void 0 === Ip) return;
+         const pp = ++kp.current;
+         Hp(null), tp.b.getShaderPack(Sp, Ip).then((ip => {
+ ... (56 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L216-L218` → after: `L848-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L848-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L848-L866) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L216-L218)

```diff
-       return ID((async () => {
-         TD(await (0, LD.c)(!0), DD)
-       }))
+       let {
+         item: ip,
+         favourites: cp,
+         packUse: Op
+       } = pp;
+       const op = cp.isFavourite(ip.packId);
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [Hp.featureFlags.settings.canUseShaderPacks && (0, Mp.jsx)(sp, {
+           packUse: Op
+         }), (0, Mp.jsx)(Ap.x, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             cp.toggle(ip.packId)
+           },
+           isLiked: !0 === op,
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L221-L224` → after: `L869-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L869-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L869-L958) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L221-L224)

```diff
-     function xD() {
-       return ID((async () => {
-         KD.h.removeItem(rD.e)
-       }))
+     function ii(pp) {
+       let {
+         item: ip,
+         ownerPreview: cp,
+         bloxdhubSlug: Op,
+         actions: op
+       } = pp;
+       const {
+         t: xp
+       } = (0, dp.H)(), Lp = (0, Up.o)(), Yp = null === Op ? null : (0, Ip.g)(Op);
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [ip.description && (0, Mp.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: ip.description
+         }), (0, Mp.jsxs)("div", {
+ ... (74 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L227-L228` → after: `L961-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L961-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L961-L987) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L227-L228)

```diff
-     function TD(DD, zD) {
-       OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
+     function ci(pp) {
+       let {
+         label: ip,
+         time: cp,
+         now: Op
+       } = pp;
+       const {
+         t: op,
+         selectedLanguage: Ip
+       } = (0, dp.H)(), Sp = new Date(cp);
+       let Lp = Sp.toLocaleDateString();
+       if (Op - cp <= 30 * xp.i) {
+         const pp = (0, dp.p)(Ip.code, "shaderPackListing:timeAgo");
+         Lp = op("shaderPackListing:timeAgo", {
+           time: (0, xp.cb)(pp, cp, Op)
+         })
+ ... (11 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L231-L234` → after: `L990-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L990-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L990-L992) · [Before (L231-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L231-L234)

```diff
-   6664: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       loadShaderPackTextures: () => rD,
-       shaderPackTextures: () => LD
+   5146: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
```

#### 27. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L236-L238` → after: `L994-L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L994-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L994-L996) · [Before (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L236-L238)

```diff
-     var pD = wD(5084);
-     let sD = null,
-       KD = null;
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(1112);
```

#### 28. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L240-L253` → after: `L998-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L998-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L998-L1037) · [Before (L240-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L240-L253)

```diff
-     function rD() {
-       return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: zD,
-           textureNameToIndex: wD,
-           textureAnimationData: KD
-         } = DD;
-         return sD ??= (0, pD.m)(wD, KD, zD), sD
-       })), KD
-     }
- 
-     function LD() {
-       if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return sD
+     function Sp(pp) {
+       let {
+         options: ip,
+         value: cp,
+         onChange: Op,
+         ariaLabel: Sp,
+         className: xp,
+         reselectable: Lp = !1,
+         keepsFocus: Yp = !1,
+         padTabs: Dp
+       } = pp;
+       const Ap = void 0 !== Dp;
+       return (0, Ip.jsx)("div", {
+         className: op()("SegmentedToggle", xp),
+         role: "group",
+         "aria-label": Sp,
+ ... (24 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L256` → after: `L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L1040) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L256)

```diff
-   6682: (DD, zD, wD) => {
+   5149: (pp, ip, cp) => {
```

#### 30. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L258` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L1042) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L258)

```diff
-       d: () => cD,
+       e: () => Ip,
```

#### 31. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L261-L333` → after: `L1045-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1045-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L1045-L1068) · [Before (L261-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L261-L333)

```diff
-     var pD = wD(6691),
-       sD = wD(6664),
-       KD = wD(119);
-     const rD = 100;
-     async function LD(DD, zD) {
-       var wD;
-       let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
-       const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
-       if (rD.errors.length > 0) return gD(DD, rD.errors, rD.offInStrict);
-       const LD = await async function(DD) {
-         if (!DD) return null;
-         try {
-           const zD = await (0, KD.x)(DD);
-           return zD ? await zD.requestDevice() : null
-         } catch (zD) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", zD), null
- ... (57 more removed lines; see GitHub link above)
+     var Op = cp(62);
+     const op = new WeakMap,
+       Ip = pp => {
+         var ip;
+         const cp = pp.closest("[data-pad-slider]");
+         return cp && null !== (ip = op.get(cp)) && void 0 !== ip ? ip : null
+       },
+       Sp = (pp, ip) => {
+         const cp = (0, Op.useRef)(ip);
+         cp.current = ip, (0, Op.useEffect)((() => {
+           if (pp.current) return ((pp, ip) => (op.set(pp, ip), () => {
+             op.get(pp) === ip && op.delete(pp)
+           }))(pp.current, {
+             adjust: pp => {
+               cp.current.adjust(pp)
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L337` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L1071) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L337)

```diff
-   5084: (DD, zD, wD) => {
+   6804: (pp, ip, cp) => {
```

#### 33. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L342-L348` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L1074) · [Before (L342-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L342-L348)

```diff
-       i: () => pD,
-       m: () => BD,
-       n: () => AD,
-       q: () => sD,
-       r: () => KD,
-       v: () => gD,
-       z: () => RD
+       f: () => Ip
```

#### 34. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L350-L516` → after: `L1076-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1076-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/113.js#L1076-L1081) · [Before (L350-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/113.js#L350-L516)

```diff
-     const pD = 5;
- 
-     function sD(DD) {
-       return DD === pD
-     }
- 
-     function KD(DD) {
-       return [...DD.features]
-     }
-     const rD = 262144,
-       LD = 256,
-       cD = 256;
- 
-     function gD(DD) {
-       if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
-       const zD = [];
- ... (151 more removed lines; see GitHub link above)
+     var Op = cp(44);
+     const op = "shaderPack";
+     async function Ip() {
+       var pp;
+       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/114.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/114.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731)

#### 1. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L2)

```diff
- export const ids = [114, 116, 136, 137];
+ export const ids = [114];
```

#### 2. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L4)

```diff
-   5076: (DD, zD, wD) => {
+   5173: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L7) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L8)

```diff
-       h: () => pD.q
+       e: () => Yp
```

#### 4. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L10` → after: `L9-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L9-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L9-L340) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L10)

```diff
-     var pD = wD(5084);
+     var Op = cp(62),
+       op = cp(1480),
+       Ip = cp(1201),
+       Sp = cp(104),
+       xp = cp(3235),
+       Lp = cp(1112);
+ 
+     function Yp() {
+       return !(0, Sp.isMobile)()
+     }
+ 
+     function Dp(pp) {
+       let {
+         disabled: ip,
+         openFolderPicker: cp,
+         onFiles: Sp
+ ... (316 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L16-L151` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L346) · [Before (L16-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L16-L151)

```diff
-   6691: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       forgetShaderPackActiveHint: () => xD,
-       isOtherApiVersion: () => XD,
-       isShaderPackActive: () => OD,
-       isShaderPackChangePending: () => QD,
-       markShaderPackChangePending: () => ED,
-       pageShaderPackValidationVersion: () => VD,
-       reconcileStoredShaderPackHint: () => CD,
-       removeShaderPack: () => MD,
-       replaceShaderPack: () => GD,
-       saveShaderPack: () => BD,
-       shaderPackNeedsCheck: () => PD,
-       storedPackOutcome: () => JD,
-       storedShaderPackFiles: () => UD,
-       toStoredShaderPack: () => AD
- ... (120 more removed lines; see GitHub link above)
+   5167: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L153-L192` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L348) · [Before (L153-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L153-L192)

```diff
-       b: () => sD,
-       c: () => KD
-     });
-     var pD = wD(35);
-     const sD = "shaderPack";
-     async function KD() {
-       var DD;
-       let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
-     }
-   },
-   6664: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       loadShaderPackTextures: () => rD,
-       shaderPackTextures: () => LD
-     });
- ... (24 more removed lines; see GitHub link above)
+       c: () => xp,
```

#### 7. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L194` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L350-L351) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L194)

```diff
-       i: () => pD,
+       f: () => Op,
+       j: () => Up,
```

#### 8. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L196-L198` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L353-L355) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L196-L198)

```diff
-       n: () => AD,
-       q: () => sD,
-       r: () => KD,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
```

#### 9. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L219` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L376) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L219)

```diff
-         if ("string" !== typeof pD) return `${wD} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 10. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L228` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L385) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L228)

```diff
-           if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 11. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L236` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L393) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L236)

```diff
-             if (zD.has(wD)) return `The pack has two files at ${wD}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 12. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L239` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L396) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L239)

```diff
-           return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 13. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L264-L267` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L421-L424) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L264-L267)

```diff
-       if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
-       if (DD.length > cD) return `A file path is over ${cD} characters.`;
-       if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
-       return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 14. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L300` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/114.js#L457) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/114.js#L300)

```diff
-           return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/115.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/115.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387)

#### 1. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115, 116, 136];
+ export const ids = [115, 118, 138, 139];
```

#### 2. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L4)

```diff
-   5076: (DD, zD, wD) => {
+   5159: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L6-L8)

```diff
-       b: () => pD.i,
-       d: () => sD,
-       h: () => pD.q
+       e: () => Op.f,
+       g: () => op,
+       k: () => Op.o
```

#### 4. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L10)

```diff
-     var pD = wD(5084);
+     var Op = cp(5167);
```

#### 5. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L16` → after: `L16-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L16-L96) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L16)

```diff
-   39186: (DD, zD, wD) => {
+   40674: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ap,
+       installListedShaderPack: () => Dp
+     });
+     var Op = cp(6704),
+       op = cp(5167),
+       Ip = cp(1211),
+       Sp = cp(6758),
+       xp = cp(5159),
+       Lp = cp(6798),
+       Yp = cp(6792);
+     async function Dp(pp) {
+       const ip = await (0, Sp.loadPageShaderPackCompiler)();
+       if (null === ip) return {
+         kind: "failed",
+ ... (65 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L18-L21` → after: `L98-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L98-L111) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L18-L21)

```diff
-       ShaderPackPage: () => cD,
-       harnessShaderPackMode: () => UD,
-       setHarnessUrlShaderPack: () => AD,
-       shaderPackPage: () => RD
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+       isShaderPackActive: () => dp,
+       isShaderPackChangePending: () => kp,
+       markShaderPackChangePending: () => jp,
+       pageShaderPackValidationVersion: () => Rp,
+       reconcileStoredShaderPackHint: () => Mp,
+       removeShaderPack: () => Hp,
+       replaceShaderPack: () => wp,
+       saveShaderPack: () => Up,
+       shaderPackNeedsCheck: () => qp,
+       storedPackOutcome: () => ep,
+       storedShaderPackFiles: () => Pp,
+       toStoredShaderPack: () => Ap
```

#### 7. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L23-L40` → after: `L113-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L113-L128) · [Before (L23-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L23-L40)

```diff
-     var pD = wD(103),
-       sD = wD(35),
-       KD = (wD(3466), wD(5076), wD(3462)),
-       rD = wD(6693);
-     wD(6664);
-     const LD = {
-       status: "none"
-     };
-     class cD {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, KD.i)(pD.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), gD().then((DD => {
-             DD && sD.h.removeItem(KD.e)
- ... (2 more removed lines; see GitHub link above)
+     var Op = cp(5167),
+       op = cp(5159),
+       Ip = cp(44),
+       Sp = cp(3564),
+       xp = cp(6804),
+       Lp = cp(6772);
+     const Yp = "shaderPackChangePending";
+     let Dp = null;
+ 
+     function Ap(pp, ip, cp) {
+       return {
+         manifest: pp.manifest,
+         files: (0, Op.v)(pp.files),
+         validation: ip,
+         ...cp && {
+           listing: cp
```

#### 8. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L42-L77` → after: `L130-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L130-L155) · [Before (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L42-L77)

```diff
-         return this.stored
-       }
-       prefetchHint() {
-         return (0, KD.h)(pD.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const DD = await this.load();
-         return "active" === DD.status ? DD.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((DD => (console.error("Failed to load the shader pack", DD), LD))).then((DD => (this.resolved ??= DD, DD))), this.pagePack
-       }
-       hasNone() {
-         var DD;
-         return "none" === (null === (DD = this.resolved) || void 0 === DD ? void 0 : DD.status)
-       }
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function Pp(pp) {
+       return Object.keys(pp.files).map((ip => ({
+         path: ip,
+         source: pp.files[ip]
+       })))
+     }
+     let Wp = Promise.resolve();
+ 
+     function yp(pp) {
+       const ip = Wp.then(pp);
+       return Wp = ip.catch((() => {})), ip
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L80-L90` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L158-L159) · [Before (L80-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L80-L90)

```diff
-       if (!(0, KD.j)(pD.featureFlags.settings.canUseShaderPacks)) return null;
-       try {
-         const DD = await (0, rD.c)(!0);
-         return DD || sD.h.setItem(KD.e, !1), DD
-       } catch (DD) {
-         return console.error("Failed to read the stored shader pack", DD), sD.h.removeItem(KD.e), null
-       }
-     }
-     const RD = new cD;
- 
-     function AD(DD, zD) {}
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L93` → after: `L162-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L162-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L162-L228) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L93)

```diff
-       return null
+       return yp(tp)
+     }
+ 
+     function dp(pp, ip) {
+       return "active" === ep(pp, ip).kind
+     }
+ 
+     function ep(pp, ip) {
+       var cp;
+       return null === pp ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : mp(pp) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
+ ... (51 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L96-L109` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L231) · [Before (L96-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L96-L109)

```diff
-   6693: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => sD,
-       c: () => KD
-     });
-     var pD = wD(35);
-     const sD = "shaderPack";
-     async function KD() {
-       var DD;
-       let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
-     }
-   },
-   6664: (DD, zD, wD) => {
+   6772: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L114` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L236) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L114)

```diff
-     var pD = wD(5084);
+     var Op = cp(5167);
```

#### 13. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L119` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L241) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L119)

```diff
-       return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
```

#### 14. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L125` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L247) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L125)

```diff
-         return sD ??= (0, pD.m)(wD, KD, zD), sD
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 15. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L134` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L256) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L134)

```diff
-   5084: (DD, zD, wD) => {
+   6792: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L139` → after: `L259-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L259-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L259-L342) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L139)

```diff
-       i: () => pD,
+       h: () => xp
+     });
+     var Op = cp(6798),
+       op = cp(6772),
+       Ip = cp(118);
+     const Sp = 100;
+     async function xp(pp, ip) {
+       var cp;
+       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
+       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
+       if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
+       const xp = await async function(pp) {
+         if (!pp) return null;
+         try {
+           const ip = await (0, Ip.s)(pp);
+           return ip ? await ip.requestDevice() : null
+ ... (68 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L141-L143` → after: `L344-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L344-L346) · [Before (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L141-L143)

```diff
-       n: () => AD,
-       q: () => sD,
-       r: () => KD,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
```

#### 18. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L164` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L367) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L164)

```diff
-         if ("string" !== typeof pD) return `${wD} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 19. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L173` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L376) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L173)

```diff
-           if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 20. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L181` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L384) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L181)

```diff
-             if (zD.has(wD)) return `The pack has two files at ${wD}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 21. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L184` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L387) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L184)

```diff
-           return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 22. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L209-L212` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L412-L415) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L209-L212)

```diff
-       if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
-       if (DD.length > cD) return `A file path is over ${cD} characters.`;
-       if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
-       return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 23. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L245` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/115.js#L448) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/115.js#L245)

```diff
-           return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/116.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/116.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6)

#### 1. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116, 136];
+ export const ids = [116, 118, 138, 139];
```

#### 2. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L4-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L4-L164) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L4)

```diff
-   6664: (DD, zD, wD) => {
+   5159: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op.f,
+       g: () => op,
+       k: () => Op.o
+     });
+     var Op = cp(5167);
+     const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
+       strict: pp,
+       program: ip
+     })))))
+   },
+   6798: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+ ... (145 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L9` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L169) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L9)

```diff
-     var pD = wD(5084);
+     var Op = cp(5167);
```

#### 4. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L14` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L174) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L14)

```diff
-       return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
```

#### 5. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L20` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L180) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L20)

```diff
-         return sD ??= (0, pD.m)(wD, KD, zD), sD
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 6. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L29` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L189) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L29)

```diff
-   5084: (DD, zD, wD) => {
+   5167: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L31-L32` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L191) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L31-L32)

```diff
-       A: () => UD,
-       d: () => LD,
+       c: () => xp,
```

#### 8. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L34` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L193-L194) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L34)

```diff
-       i: () => pD,
+       f: () => Op,
+       j: () => Up,
```

#### 9. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L36-L38` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L196-L198) · [Before (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L36-L38)

```diff
-       n: () => AD,
-       q: () => sD,
-       r: () => KD,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
```

#### 10. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L59` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L219) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L59)

```diff
-         if ("string" !== typeof pD) return `${wD} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 11. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L68` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L228) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L68)

```diff
-           if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 12. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L76` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L236) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L76)

```diff
-             if (zD.has(wD)) return `The pack has two files at ${wD}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 13. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L79` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L239) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L79)

```diff
-           return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 14. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L104-L107` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L264-L267) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L104-L107)

```diff
-       if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
-       if (DD.length > cD) return `A file path is over ${cD} characters.`;
-       if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
-       return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 15. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L140` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/116.js#L300) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/116.js#L140)

```diff
-           return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 1. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L3)

```diff
- export const ids = [117];
+ export const ids = [117, 118, 138];
```

#### 2. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L5-L19187` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L4) · [Before (L5-L19187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L5-L19187)

```diff
-   6242: function(DD, zD, wD) {
-     var pD;
-     ! function() {
-       var sD, KD = 1e9,
-         rD = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         LD = !0,
-         cD = "[DecimalError] ",
-         gD = cD + "Invalid argument: ",
-         RD = cD + "Exponent out of range: ",
-         AD = Math.floor,
- ... (19167 more removed lines; see GitHub link above)
+   5159: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19189-L19190` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L6-L8) · [Before (L19189-L19190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19189-L19190)

```diff
-       e: () => UD,
-       h: () => AD
+       e: () => Op.f,
+       g: () => op,
+       k: () => Op.o
```

#### 4. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19192-L19299` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L10-L14) · [Before (L19192-L19299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19192-L19299)

```diff
-     var pD = wD(6012);
- 
-     function sD(DD) {
-       return sD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
-         return typeof DD
-       } : function(DD) {
-         return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
-       }, sD(DD)
-     }
- 
-     function KD(DD, zD) {
-       var wD = Object.keys(DD);
-       if (Object.getOwnPropertySymbols) {
-         var pD = Object.getOwnPropertySymbols(DD);
-         zD && (pD = pD.filter((function(zD) {
-           return Object.getOwnPropertyDescriptor(DD, zD).enumerable
- ... (92 more removed lines; see GitHub link above)
+     var Op = cp(5167);
+     const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
+       strict: pp,
+       program: ip
+     })))))
```

#### 5. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19301-L19395` → after: `L16-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L16-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L16-L33) · [Before (L19301-L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19301-L19395)

```diff
-   5223: (DD, zD, wD) => {
-     wD.d(zD, {
-       B: () => ID,
-       F: () => fD,
-       I: () => MD,
-       c: () => PD,
-       e: () => XD,
-       h: () => JD,
-       k: () => VD,
-       n: () => OD,
-       p: () => ED,
-       q: () => QD,
-       u: () => GD,
-       x: () => hD,
-       y: () => BD
-     });
- ... (79 more removed lines; see GitHub link above)
+   39396: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       ShaderPackPage: () => Lp,
+       harnessShaderPackMode: () => Pp,
+       setHarnessUrlShaderPack: () => Ap,
+       shaderPackPage: () => Dp
+     });
+     var Op = cp(104),
+       op = cp(44),
+       Ip = (cp(3572), cp(5159), cp(3564)),
+       Sp = cp(6804);
+     cp(6772);
+     const xp = {
+       status: "none"
+     };
+     class Lp {
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19397-L19413` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L35-L40) · [Before (L19397-L19413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19397-L19413)

```diff
-   },
-   6012: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD
-     });
-     var pD = {
-       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
-       get: function(DD) {
-         return pD[DD]
-       },
-       set: function(DD, zD) {
-         if ("string" === typeof DD) pD[DD] = zD;
-         else {
-           var wD = Object.keys(DD);
-           wD && wD.length && wD.forEach((function(zD) {
-             pD[zD] = DD[zD]
- ... (1 more removed lines; see GitHub link above)
+       preload() {
+         if (null === this.stored) {
+           if ((0, Ip.f)(Op.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Yp().then((pp => {
+             pp && op.h.removeItem(Ip.d)
+           })), this.stored;
+           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
```

#### 7. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19416-L19470` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L44-L45) · [Before (L19416-L19470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19416-L19470)

```diff
-     }
-   },
-   6277: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD
-     });
-     var pD = function(DD, zD) {
-       var wD = DD.alwaysShow,
-         pD = DD.ifOverflow;
-       return wD && (pD = "extendDomain"), pD === zD
-     }
-   },
-   5480: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
- ... (39 more removed lines; see GitHub link above)
+       prefetchHint() {
+         return (0, Ip.e)(Op.featureFlags.settings.canUseShaderPacks)
```

#### 8. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19472-L19580` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L47-L49) · [Before (L19472-L19580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19472-L19580)

```diff
-       return DD
-     }
- 
-     function rD(DD, zD, wD) {
-       return (zD = function(DD) {
-         var zD = function(DD, zD) {
-           if ("object" != pD(DD) || !DD) return DD;
-           var wD = DD[Symbol.toPrimitive];
-           if (void 0 !== wD) {
-             var sD = wD.call(DD, zD || "default");
-             if ("object" != pD(sD)) return sD;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === zD ? String : Number)(DD)
-         }(DD, "string");
-         return "symbol" == pD(zD) ? zD : zD + ""
- ... (93 more removed lines; see GitHub link above)
+       async loadActive() {
+         const pp = await this.load();
+         return "active" === pp.status ? pp.pack : null
```

#### 9. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19582-L19627` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L51-L52) · [Before (L19582-L19627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19582-L19627)

```diff
-   },
-   5484: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => SD,
-       g: () => CD,
-       h: () => xD,
-       j: () => QD,
-       k: () => ND,
-       o: () => dD,
-       q: () => iD,
-       r: () => ZD,
-       u: () => WD,
-       x: () => TD
-     });
-     var pD = wD(5254),
-       sD = wD.n(pD),
- ... (30 more removed lines; see GitHub link above)
+       load() {
+         return this.pagePack ??= this.read().catch((pp => (console.error("Failed to load the shader pack", pp), xp))).then((pp => (this.resolved ??= pp, pp))), this.pagePack
```

#### 10. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19629-L19751` → after: `L54-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L54-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L54-L71) · [Before (L19629-L19751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19629-L19751)

```diff
-       return sD
-     }
- 
-     function JD(DD) {
-       return JD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
-         return typeof DD
-       } : function(DD) {
-         return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
-       }, JD(DD)
-     }
-     var ED = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
- ... (107 more removed lines; see GitHub link above)
+       hasNone() {
+         var pp;
+         return "none" === (null === (pp = this.resolved) || void 0 === pp ? void 0 : pp.status)
+       }
+       block(pp) {
+         this.resolved = {
+           status: "blocked",
+           messageKey: pp,
+           variants: null
+         }, this.pagePack = Promise.resolve(this.resolved)
+       }
+       compiler() {
+         return this.compiling ??= Promise.all([cp.e(78), cp.e(136), cp.e(142)]).then((() => cp(41994))).then((pp => (pp.prefetchCompiler(), pp))), this.compiling
+       }
+       async readStored() {
+         const pp = await Yp();
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19761-L19796` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L74-L76) · [Before (L19761-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19761-L19796)

```diff
-   },
-   5500: (DD, zD, wD) => {
-     function pD(DD, zD) {
-       for (var wD in DD)
-         if ({}.hasOwnProperty.call(DD, wD) && (!{}.hasOwnProperty.call(zD, wD) || DD[wD] !== zD[wD])) return !1;
-       for (var pD in zD)
-         if ({}.hasOwnProperty.call(zD, pD) && !{}.hasOwnProperty.call(DD, pD)) return !1;
-       return !0
-     }
-     wD.d(zD, {
-       d: () => pD
-     })
-   },
-   6250: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => RD
- ... (20 more removed lines; see GitHub link above)
+       async read() {
+         const pp = await this.preload();
+         return pp ? (await this.compiler()).compilePagePack(pp) : xp
```

#### 12. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19800-L19808` → after: `L79-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L79-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L79-L85) · [Before (L19800-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19800-L19808)

```diff
- 
-     function cD(DD) {
-       for (var zD = 1; zD < arguments.length; zD++) {
-         var wD = null != arguments[zD] ? arguments[zD] : {};
-         zD % 2 ? LD(Object(wD), !0).forEach((function(zD) {
-           gD(DD, zD, wD[zD])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : LD(Object(wD)).forEach((function(zD) {
-           Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
-         }))
+     async function Yp() {
+       if (!(0, Ip.i)(Op.featureFlags.settings.canUseShaderPacks)) return null;
+       try {
+         const pp = await (0, Sp.f)(!0);
+         return pp || op.h.setItem(Ip.d, !1), pp
+       } catch (pp) {
+         return console.error("Failed to read the stored shader pack", pp), op.h.removeItem(Ip.d), null
```

#### 13. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19813-L19872` → after: `L90-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L90-L93) · [Before (L19813-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19813-L19872)

```diff
-     function gD(DD, zD, wD) {
-       return (zD = function(DD) {
-         var zD = function(DD, zD) {
-           if ("object" != rD(DD) || !DD) return DD;
-           var wD = DD[Symbol.toPrimitive];
-           if (void 0 !== wD) {
-             var pD = wD.call(DD, zD || "default");
-             if ("object" != rD(pD)) return pD;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === zD ? String : Number)(DD)
-         }(DD, "string");
-         return "symbol" == rD(zD) ? zD : zD + ""
-       }(zD)) in DD ? Object.defineProperty(DD, zD, {
-         value: wD,
-         enumerable: !0,
- ... (44 more removed lines; see GitHub link above)
+     function Ap(pp, ip) {}
+ 
+     function Pp() {
+       return null
```

#### 14. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19875` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L96) · [Before (L19875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19875)

```diff
-   6021: (DD, zD, wD) => {
+   6804: (pp, ip, cp) => {
```

#### 15. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19877` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L98-L99) · [Before (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19877)

```diff
-       b: () => LD
+       e: () => op,
+       f: () => Ip
```

#### 16. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19879-L19885` → after: `L101-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L101-L106) · [Before (L19879-L19885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19879-L19885)

```diff
-     var pD = wD(6023),
-       sD = wD.n(pD),
-       KD = wD(5333),
-       rD = wD.n(KD);
- 
-     function LD(DD, zD, wD) {
-       return !0 === zD ? sD()(DD, wD) : rD()(zD) ? sD()(DD, zD) : DD
+     var Op = cp(44);
+     const op = "shaderPack";
+     async function Ip() {
+       var pp;
+       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
```

#### 17. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19888-L19894` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L109-L112) · [Before (L19888-L19894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19888-L19894)

```diff
-   5505: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => RD,
-       d: () => gD,
-       h: () => LD,
-       i: () => AD,
-       j: () => UD
+   6772: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       loadShaderPackTextures: () => Sp,
+       shaderPackTextures: () => xp
```

#### 18. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19896-L19898` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L114-L116) · [Before (L19896-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19896-L19898)

```diff
-     var pD = wD(58),
-       sD = wD(5144),
-       KD = wD.n(sD);
+     var Op = cp(5167);
+     let op = null,
+       Ip = null;
```

#### 19. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19900-L19905` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L118-L126) · [Before (L19900-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19900-L19905)

```diff
-     function rD(DD) {
-       return rD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
-         return typeof DD
-       } : function(DD) {
-         return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
-       }, rD(DD)
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
+         } = pp;
+         return op ??= (0, Op.j)(cp, Ip, ip), op
+       })), Ip
```

#### 20. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L19955-L20008` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L129-L130) · [Before (L19955-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L19955-L20008)

```diff
-     function hD(DD) {
-       if ("object" === typeof DD && null !== DD) {
-         var zD = DD.$$typeof;
-         switch (zD) {
-           case pD:
-             switch (DD = DD.type) {
-               case KD:
-               case LD:
-               case rD:
-               case UD:
-               case fD:
-                 return DD;
-               default:
-                 switch (DD = DD && DD.$$typeof) {
-                   case RD:
-                   case gD:
- ... (38 more removed lines; see GitHub link above)
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 21. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20012` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L134) · [Before (L20012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20012)

```diff
-   6184: (DD, zD, wD) => {
+   5167: (pp, ip, cp) => {
```

#### 22. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20015` → after: `L138-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L138-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L138-L145) · [Before (L20015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20015)

```diff
-       i: () => LD
+       f: () => Op,
+       j: () => Up,
+       m: () => Ap,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
+       v: () => Dp,
+       z: () => Pp
```

#### 23. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20017-L20069` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L147) · [Before (L20017-L20069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20017-L20069)

```diff
-     var pD = wD(6193),
-       sD = wD(6198);
- 
-     function KD() {
-       var DD, zD, wD = (0, sD.b)().unknown(void 0),
-         rD = wD.domain,
-         LD = wD.range,
-         cD = 0,
-         gD = 1,
-         RD = !1,
-         AD = 0,
-         UD = 0,
-         fD = .5;
- 
-       function ID() {
-         var wD = rD().length,
- ... (37 more removed lines; see GitHub link above)
+     const Op = 5;
```

#### 24. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20072-L20075` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L150) · [Before (L20072-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20072-L20075)

```diff
-       var zD = DD.copy;
-       return DD.padding = DD.paddingOuter, delete DD.paddingInner, delete DD.paddingOuter, DD.copy = function() {
-         return rD(zD())
-       }, DD
+       return pp === Op
```

#### 25. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20078-L20093` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L153-L154) · [Before (L20078-L20093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20078-L20093)

```diff
-     function LD() {
-       return rD(KD.apply(null, arguments).paddingInner(1))
-     }
-   },
-   6193: (DD, zD, wD) => {
-     function pD(DD, zD) {
-       switch (arguments.length) {
-         case 0:
-           break;
-         case 1:
-           this.range(DD);
-           break;
-         default:
-           this.range(zD).domain(DD)
-       }
-       return this
+     function Ip(pp) {
+       return [...pp.features]
```

#### 26. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20096-L20104` → after: `L160-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L160-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L160-L168) · [Before (L20096-L20104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20096-L20104)

```diff
-     function sD(DD, zD) {
-       switch (arguments.length) {
-         case 0:
-           break;
-         case 1:
-           "function" === typeof DD ? this.interpolator(DD) : this.range(DD);
-           break;
-         default:
-           this.domain(DD), "function" === typeof zD ? this.interpolator(zD) : this.range(zD)
+     function Yp(pp) {
+       if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
+       const ip = [];
+       for (const [cp, Op] of Object.entries(pp)) {
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         ip.push({
+           path: cp,
+           source: Op
+         })
```

#### 27. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20106-L20126` → after: `L170-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L170-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L170-L176) · [Before (L20106-L20126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20106-L20126)

```diff
-       return this
-     }
-     wD.d(zD, {
-       b: () => sD,
-       d: () => pD
-     })
-   },
-   6198: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => RD,
-       d: () => gD
-     });
-     class pD extends Map {
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LD;
-         if (super(), Object.defineProperties(this, {
- ... (5 more removed lines; see GitHub link above)
+       return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
+         function(pp) {
+           if (0 === pp.length) return "The pack has no .wgsl files.";
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
+           const ip = new Set;
+           for (const {
+               path: cp
```

#### 28. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20128-L20152` → after: `L178-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L178-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L178-L185) · [Before (L20128-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20128-L20152)

```diff
-           }), null != DD)
-           for (const [wD, pD] of DD) this.set(wD, pD)
-       }
-       get(DD) {
-         return super.get(sD(this, DD))
-       }
-       has(DD) {
-         return super.has(sD(this, DD))
-       }
-       set(DD, zD) {
-         return super.set(KD(this, DD), zD)
-       }
-       delete(DD) {
-         return super.delete(rD(this, DD))
-       }
-     }
- ... (9 more removed lines; see GitHub link above)
+             of pp) {
+             const pp = Wp(cp);
+             if (null !== pp) return pp;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
+             ip.add(cp)
+           }
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
+         }(ip) ?? ip
```

#### 29. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20155-L20161` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L188-L191) · [Before (L20155-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20155-L20161)

```diff
-     function KD(DD, zD) {
-       let {
-         _intern: wD,
-         _key: pD
-       } = DD;
-       const sD = pD(zD);
-       return wD.has(sD) ? wD.get(sD) : (wD.set(sD, zD), zD)
+     function Dp(pp) {
+       const ip = {};
+       for (const cp of pp) ip[cp.path] = cp.source;
+       return ip
```

#### 30. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20165-L20170` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L195) · [Before (L20165-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20165-L20170)

```diff
-       let {
-         _intern: wD,
-         _key: pD
-       } = DD;
-       const sD = pD(zD);
-       return wD.has(sD) && (zD = wD.get(sD), wD.delete(sD)), zD
+       return pp < ip ? -1 : pp > ip ? 1 : 0
```

#### 31. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20174-L20189` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L199-L202) · [Before (L20174-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20174-L20189)

```diff
-       return null !== DD && "object" === typeof DD ? DD.valueOf() : DD
-     }
-     var cD = wD(6193);
-     const gD = Symbol("implicit");
- 
-     function RD() {
-       var DD = new pD,
-         zD = [],
-         wD = [],
-         sD = gD;
- 
-       function KD(pD) {
-         let KD = DD.get(pD);
-         if (void 0 === KD) {
-           if (sD !== gD) return sD;
-           DD.set(pD, KD = zD.push(pD) - 1)
+       const ip = new TextEncoder;
+       let cp = 0;
+       for (const {
+           source: Op
```

#### 32. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20191-L20204` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L204-L205) · [Before (L20191-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20191-L20204)

```diff
-         return wD[KD % wD.length]
-       }
-       return KD.domain = function(wD) {
-         if (!arguments.length) return zD.slice();
-         zD = [], DD = new pD;
-         for (const pD of wD) DD.has(pD) || DD.set(pD, zD.push(pD) - 1);
-         return KD
-       }, KD.range = function(DD) {
-         return arguments.length ? (wD = Array.from(DD), KD) : wD.slice()
-       }, KD.unknown = function(DD) {
-         return arguments.length ? (sD = DD, KD) : sD
-       }, KD.copy = function() {
-         return RD(zD, wD).unknown(sD)
-       }, cD.d.apply(KD, arguments), KD
+         of pp) cp += ip.encode(Op).byteLength;
+       return cp
```

#### 33. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20214-L20221` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L209-L212) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20214-L20221)

```diff
-       return "object" === typeof DD && "length" in DD ? DD : Array.from(DD)
-     }
-   },
-   6131: (DD, zD, wD) => {
-     function pD(DD) {
-       return function() {
-         return DD
-       }
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 34. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20223-L20234` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L214) · [Before (L20223-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20223-L20234)

```diff
-     wD.d(zD, {
-       c: () => pD
-     })
-   },
-   6140: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => gD
-     });
-     const pD = Math.PI,
-       sD = 2 * pD,
-       KD = 1e-6,
-       rD = sD - KD;
+     const yp = /^(.*)\[rot\[([1-4])$/;
```

#### 35. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20236-L20304` → after: `L216-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L216-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L216-L293) · [Before (L20236-L20304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20236-L20304)

```diff
-     function LD(DD) {
-       this._ += DD[0];
-       for (let zD = 1, wD = DD.length; zD < wD; ++zD) this._ += arguments[zD] + DD[zD]
-     }
-     class cD {
-       constructor(DD) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == DD ? LD : function(DD) {
-           let zD = Math.floor(DD);
-           if (!(zD >= 0)) throw new Error(`invalid digits: ${DD}`);
-           if (zD > 15) return LD;
-           const wD = 10 ** zD;
-           return function(DD) {
-             this._ += DD[0];
-             for (let zD = 1, pD = DD.length; zD < pD; ++zD) this._ += Math.round(arguments[zD] * wD) / wD + DD[zD]
-           }
-         }(DD)
- ... (53 more removed lines; see GitHub link above)
+     function Up(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Op = new Map;
+       ip.forEach(((pp, ip) => {
+         let {
+           numAnimStates: cp,
+           animStartIdx: op
+         } = pp;
+         for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
+       }));
+       const op = Object.entries(pp),
+         Ip = new Map;
+       for (const [Up, wp] of op) {
+         const pp = yp.exec(Up);
+         "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
+       }
+ ... (62 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20306-L20307` → after: `L295-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L295-L298) · [Before (L20306-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20306-L20307)

```diff
-       toString() {
-         return this._
+       for (const yp of Pp.keys()) Wp.delete(yp);
+       for (const [yp, Up] of cp) {
+         const pp = Pp.get(Up);
+         void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
```

#### 37. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L20309-L20338` → after: `L300-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L300-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/117.js#L300-L312) · [Before (L20309-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/117.js#L20309-L20338)

```diff
-     }
- 
-     function gD(DD) {
-       let zD = 3;
-       return DD.digits = function(wD) {
-         if (!arguments.length) return zD;
-         if (null == wD) zD = null;
-         else {
-           const DD = Math.floor(wD);
-           if (!(DD >= 0)) throw new RangeError(`invalid digits: ${wD}`);
-           zD = DD
-         }
-         return DD
-       }, () => new cD(zD)
-     }
-     cD.prototype
- ... (14 more removed lines; see GitHub link above)
+       return {
+         named: [...Pp].sort(((pp, ip) => {
+           let [cp] = pp, [Op] = ip;
+           return cp < Op ? -1 : cp > Op ? 1 : 0
+         })).map((pp => {
+           let [ip, cp] = pp;
+           return {
+             name: ip,
+             id: cp
+           }
+         })),
+         aliases: [...Wp.values()],
+         layers: Ap
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 1. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L3)

```diff
- export const ids = [118];
+ export const ids = [118, 138];
```

#### 2. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L5)

```diff
-   6486: (DD, zD, wD) => {
+   6772: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L7-L13` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L6-L7) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L7-L13)

```diff
-       Graph: () => yD,
-       debug: () => bw,
-       default: () => dw,
-       graphlib: () => KD,
-       layout: () => Iw,
-       util: () => jw,
-       version: () => Kz
+       loadShaderPackTextures: () => Sp,
+       shaderPackTextures: () => xp
```

#### 4. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15-L614` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L9-L11) · [Before (L15-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L15-L614)

```diff
-     var pD = Object.defineProperty,
-       sD = (DD, zD, wD) => ((DD, zD, wD) => zD in DD ? pD(DD, zD, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: wD
-       }) : DD[zD] = wD)(DD, "symbol" != typeof zD ? zD + "" : zD, wD),
-       KD = {};
-     ((DD, zD) => {
-       for (var wD in zD) pD(DD, wD, {
-         get: zD[wD],
-         enumerable: !0
-       })
-     })(KD, {
-       Graph: () => yD,
-       alg: () => hD
- ... (584 more removed lines; see GitHub link above)
+     var Op = cp(5167);
+     let op = null,
+       Ip = null;
```

#### 5. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L616-L625` → after: `L13-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L13-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L13-L20) · [Before (L616-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L616-L625)

```diff
-     function dD(DD, zD, wD, pD, sD) {
-       Array.isArray(zD) || (zD = [zD]);
-       let KD = zD => {
-           var wD;
-           return null != (wD = DD.isDirected() ? DD.successors(zD) : DD.neighbors(zD)) ? wD : []
-         },
-         rD = {};
-       return zD.forEach((function(zD) {
-         if (!DD.hasNode(zD)) throw new Error("Graph does not have node: " + zD);
-         sD = SD(DD, zD, "post" === wD, rD, KD, pD, sD)
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
+         } = pp;
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 6. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L629-L677` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L24-L25) · [Before (L629-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L629-L677)

```diff
-     function SD(DD, zD, wD, pD, sD, KD, rD) {
-       return zD in pD || (pD[zD] = !0, wD || (rD = KD(rD, zD)), sD(zD).forEach((function(zD) {
-         rD = SD(DD, zD, wD, pD, sD, KD, rD)
-       })), wD && (rD = KD(rD, zD))), rD
-     }
- 
-     function iD(DD, zD, wD) {
-       return dD(DD, zD, wD, (function(DD, zD) {
-         return DD.push(zD), DD
-       }), [])
-     }
- 
-     function lD(DD, zD) {
-       return iD(DD, zD, "post")
-     }
- 
- ... (33 more removed lines; see GitHub link above)
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 7. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L680-L713` → after: `L28-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L28-L42) · [Before (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L680-L713)

```diff
- 
-     function ZD(DD, zD, wD, pD) {
-       return function(DD, zD, wD, pD) {
-         if (void 0 === wD) return QD(DD, zD, wD, pD);
-         let sD = !1,
-           KD = DD.nodes();
-         for (let rD = 0; rD < KD.length; rD++) {
-           let LD = KD[rD];
-           if (void 0 === LD) continue;
-           let cD = pD(LD);
-           for (let DD = 0; DD < cD.length; DD++) {
-             let zD = cD[DD];
-             if (!zD) continue;
-             let pD = zD.v === LD ? zD.v : zD.w;
-             wD({
-               v: pD,
- ... (18 more removed lines; see GitHub link above)
+   },
+   5167: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       e: () => Sp,
+       f: () => Op,
+       j: () => Up,
+       m: () => Ap,
+       o: () => op,
+       p: () => Ip,
+       s: () => Yp,
+       v: () => Dp,
+       z: () => Pp
+     });
+     const Op = 5;
```

#### 8. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L716-L737` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L45) · [Before (L716-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L716-L737)

```diff
-       let zD = new yD({
-         multigraph: DD.isMultigraph()
-       }).setGraph(DD.graph());
-       return DD.nodes().forEach((wD => {
-         DD.children(wD).length || zD.setNode(wD, DD.node(wD))
-       })), DD.edges().forEach((wD => {
-         zD.setEdge(wD, DD.edge(wD))
-       })), zD
-     }
- 
-     function eD(DD, zD) {
-       let wD, pD, sD = DD.x,
-         KD = DD.y,
-         rD = zD.x - sD,
-         LD = zD.y - KD,
-         cD = DD.width / 2,
- ... (6 more removed lines; see GitHub link above)
+       return pp === Op
```

#### 9. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L741-L771` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L49) · [Before (L741-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L741-L771)

```diff
-       let zD = Dz(tD(DD) + 1).map((() => []));
-       return DD.nodes().forEach((wD => {
-         let pD = DD.node(wD),
-           sD = pD.rank;
-         void 0 !== sD && (zD[sD] || (zD[sD] = []), zD[sD][pD.order] = wD)
-       })), zD
-     }
- 
-     function aD(DD, zD, wD, pD) {
-       let sD = {
-         width: 0,
-         height: 0
-       };
-       return arguments.length >= 4 && (sD.rank = wD, sD.order = pD), kD(DD, "border", sD, zD)
-     }
-     var uD = 65535;
- ... (15 more removed lines; see GitHub link above)
+       return [...pp.features]
```

#### 10. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L775-L787` → after: `L56-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L56-L63) · [Before (L775-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L775-L787)

```diff
-       let zD = DD.nodes().map((zD => {
-         let wD = DD.node(zD).rank;
-         return void 0 === wD ? Number.MIN_VALUE : wD
-       }));
-       return vD(Math.max, zD)
-     }
- 
-     function FD(DD, zD) {
-       let wD = Date.now();
-       try {
-         return zD()
-       } finally {
-         console.log(DD + " time: " + (Date.now() - wD) + "ms")
+       if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
+       const ip = [];
+       for (const [cp, Op] of Object.entries(pp)) {
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         ip.push({
+           path: cp,
+           source: Op
+         })
```

#### 11. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L797-L806` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L84-L85) · [Before (L797-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L797-L806)

```diff
-       return DD + "" + ++HD
-     }
- 
-     function Dz(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == zD && (zD = DD, DD = 0);
-       let pD = DD => DD < zD;
-       wD < 0 && (pD = DD => zD < DD);
-       let sD = [];
-       for (let KD = DD; pD(KD); KD += wD) sD.push(KD);
+       const ip = {};
+       for (const cp of pp) ip[cp.path] = cp.source;
```

#### 12. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L811-L842` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L90) · [Before (L811-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L811-L842)

```diff
-       let wD = {};
-       for (let pD of zD) void 0 !== DD[pD] && (wD[pD] = DD[pD]);
-       return wD
-     }
- 
-     function wz(DD, zD) {
-       let wD;
-       return wD = "string" == typeof zD ? DD => DD[zD] : zD, Object.entries(DD).reduce(((DD, zD) => {
-         let [pD, sD] = zD;
-         return DD[pD] = wD(sD, pD), DD
-       }), {})
-     }
-     var pz = "\0";
- 
-     function sz(DD, zD, wD) {
-       var pD, sD, KD, rD, LD, cD;
- ... (16 more removed lines; see GitHub link above)
+       return pp < ip ? -1 : pp > ip ? 1 : 0
```

#### 13. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L847-L985` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L94-L97) · [Before (L847-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L847-L985)

```diff
-       DD._prev._next = DD._next, DD._next._prev = DD._prev, delete DD._next, delete DD._prev
-     }
- 
-     function Lz(DD, zD) {
-       if ("_next" !== DD && "_prev" !== DD) return zD
-     }
-     var cz = class {
-         constructor() {
-           sD(this, "_sentinel");
-           let DD = {};
-           DD._next = DD._prev = DD, this._sentinel = DD
-         }
-         dequeue() {
-           let DD = this._sentinel,
-             zD = DD._prev;
-           if (zD !== DD) return rz(zD), zD
- ... (123 more removed lines; see GitHub link above)
+       const ip = new TextEncoder;
+       let cp = 0;
+       for (const {
+           source: Op
```

#### 14. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L987-L1044` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L99) · [Before (L987-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L987-L1044)

```diff
-         let LD = KD;
-         return zD && "function" == typeof zD.node && (LD = rD), DD.sources().forEach(LD), DD.nodes().forEach(LD), wD
-       }(DD, null != zD ? zD : null)).forEach((zD => {
-         let wD = DD.edge(zD);
-         DD.removeEdge(zD), wD.forwardName = zD.name, wD.reversed = !0, DD.setEdge(zD.w, zD.v, wD, qD("rev"))
-       }))
-     }
- 
-     function Iz(DD) {
-       DD.graph().dummyChains = [], DD.edges().forEach((zD => function(DD, zD) {
-         let wD, pD, sD, KD = zD.v,
-           rD = DD.node(KD).rank,
-           LD = zD.w,
-           cD = DD.node(LD).rank,
-           gD = zD.name,
-           RD = DD.edge(zD),
- ... (42 more removed lines; see GitHub link above)
+         of pp) cp += ip.encode(Op).byteLength;
```

#### 15. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1075-L1122` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L104-L107) · [Before (L1075-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L1075-L1122)

```diff
-       DD = function(DD) {
-         let zD = (new yD).setGraph(DD.graph());
-         return DD.nodes().forEach((wD => zD.setNode(wD, DD.node(wD)))), DD.edges().forEach((wD => {
-           let pD = zD.edge(wD.v, wD.w) || {
-               weight: 0,
-               minlen: 1
-             },
-             sD = DD.edge(wD);
-           zD.setEdge(wD.v, wD.w, {
-             weight: pD.weight + sD.weight,
-             minlen: Math.max(pD.minlen, sD.minlen)
-           })
-         })), zD
-       }(DD), Bz(DD);
-       let zD, wD, pD = hz(DD);
-       for (Cz(pD), Vz(pD, DD); zD = Tz(pD);) wD = bz(pD, DD, zD), jz(pD, DD, zD, wD)
- ... (32 more removed lines; see GitHub link above)
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 16. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1126-L1283` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L112-L119) · [Before (L1126-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L1126-L1283)

```diff
-       arguments.length < 2 && (zD = DD.nodes()[0]), xz(DD, {}, 1, zD)
-     }
- 
-     function xz(DD, zD, wD, pD, sD) {
-       let KD = wD,
-         rD = DD.node(pD);
-       zD[pD] = !0;
-       let LD = DD.neighbors(pD);
-       return LD && LD.forEach((sD => {
-         Object.hasOwn(zD, sD) || (wD = xz(DD, zD, wD, sD, pD))
-       })), rD.low = KD, rD.lim = wD++, sD ? rD.parent = sD : delete rD.parent, wD
-     }
- 
-     function Tz(DD) {
-       return DD.edges().find((zD => DD.edge(zD).cutvalue < 0))
-     }
- ... (142 more removed lines; see GitHub link above)
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Op = new Map;
+       ip.forEach(((pp, ip) => {
+         let {
+           numAnimStates: cp,
+           animStartIdx: op
+         } = pp;
+         for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
```

#### 17. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1285-L1326` → after: `L121-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L121-L132) · [Before (L1285-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L1285-L1326)

```diff
-       let gD = aD(DD, "_bt"),
-         RD = aD(DD, "_bb"),
-         AD = DD.node(rD);
-       DD.setParent(gD, rD), AD.borderTop = gD, DD.setParent(RD, rD), AD.borderBottom = RD, cD.forEach((LD => {
-         var cD;
-         Zz(DD, zD, wD, pD, sD, KD, LD);
-         let AD = DD.node(LD),
-           UD = AD.borderTop ? AD.borderTop : LD,
-           fD = AD.borderBottom ? AD.borderBottom : LD,
-           ID = AD.borderTop ? pD : 2 * pD,
-           BD = UD !== fD ? 1 : sD - (null != (cD = KD[rD]) ? cD : 0) + 1;
-         DD.setEdge(gD, UD, {
-           weight: ID,
-           minlen: BD,
-           nestingEdge: !0
-         }), DD.setEdge(fD, RD, {
- ... (26 more removed lines; see GitHub link above)
+       const op = Object.entries(pp),
+         Ip = new Map;
+       for (const [Up, wp] of op) {
+         const pp = yp.exec(Up);
+         "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
+       }
+       const Sp = pp => {
+           const ip = yp.exec(pp);
+           return ip && Ip.has(ip[1]) ? {
+             root: ip[1],
+             rotation: Number(ip[2]) - 1
+           } : null
```

#### 18. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1328-L1664` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L134-L137) · [Before (L1328-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L1328-L1664)

```diff
-         LD = sD[zD][KD - 1],
-         cD = kD(DD, "border", rD, wD);
-       sD[zD][KD] = cD, DD.setParent(cD, pD), LD && DD.setEdge(LD, cD, {
-         weight: 1
-       })
-     }
- 
-     function mz(DD) {
-       var zD;
-       let wD = null == (zD = DD.graph().rankdir) ? void 0 : zD.toLowerCase();
-       ("bt" === wD || "rl" === wD) && function(DD) {
-         DD.nodes().forEach((zD => az(DD.node(zD)))), DD.edges().forEach((zD => {
-           var wD;
-           let pD = DD.edge(zD);
-           null == (wD = pD.points) || wD.forEach(az), Object.hasOwn(pD, "y") && az(pD)
-         }))
- ... (321 more removed lines; see GitHub link above)
+         xp = new Set(op.map((pp => {
+           let [ip] = pp;
+           return Sp(ip)?.root ?? ip
+         }))),
```

#### 19. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1666-L2077` → after: `L139-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L139-L141) · [Before (L1666-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L1666-L2077)

```diff
-           pD.has(DD) || pD.set(DD, []), pD.get(DD).push(zD)
-         };
-       for (let KD of DD.nodes()) {
-         let zD = DD.node(KD);
-         if ("number" == typeof zD.rank && sD(zD.rank, KD), "number" == typeof zD.minRank && "number" == typeof zD.maxRank)
-           for (let DD = zD.minRank; DD <= zD.maxRank; DD++) DD !== zD.rank && sD(DD, KD)
-       }
-       return zD.map((function(zD) {
-         return zw(DD, zD, wD, pD.get(zD) || [])
-       }))
-     }
- 
-     function sw(DD, zD, wD, pD) {
-       let sD = !0,
-         KD = new yD;
-       DD.forEach((function(DD) {
- ... (396 more removed lines; see GitHub link above)
+           const Op = pp.replace(/_?0$/, "");
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
+         },
```

#### 20. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L2079-L2083` → after: `L143-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L143-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L143-L154) · [Before (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L2079-L2083)

```diff
-       sD.forEach((zD => {
-         let wD = DD.node(zD);
-         wD && wD.rankdir && KD[zD] && LD.set(zD, (DD.children(zD) || []).filter((DD => DD !== zD)))
-       }));
-       let cD = new Set([...LD.values()].flat()),
+       for (const [yp, Up] of op) Yp.set(Up, Lp(Sp(yp)?.root ?? yp, Up));
+       const Dp = op.reduce(((pp, ip) => {
+           let [, cp] = ip;
+           return Math.max(pp, cp + 1)
+         }), 0),
+         Ap = Array.from({
+           length: Dp
+         }, ((pp, ip) => ({
+           id: ip + 1,
+           rotation: 0
+         }))),
+         Pp = new Map,
```

#### 21. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L2085-L2177` → after: `L156-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L156-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L156-L180) · [Before (L2085-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L2085-L2177)

```diff
-       LD.forEach(((zD, wD) => {
-         cD.has(wD) || gD.set(wD, (zD => {
-           let wD = [],
-             pD = (DD.children(zD) || []).filter((DD => DD !== zD));
-           for (; pD.length > 0;) {
-             let zD = pD.shift();
-             wD.push(zD), (DD.children(zD) || []).filter((DD => DD !== zD)).forEach((DD => pD.push(DD)))
-           }
-           return wD
-         })(wD))
-       }));
-       let RD = new Set([...gD.values()].flat()),
-         AD = DD => {
-           for (let [zD, wD] of gD)
-             if (wD.includes(DD)) return zD;
-           return DD
- ... (77 more removed lines; see GitHub link above)
+       for (const [yp, Up] of op) {
+         const pp = Sp(yp),
+           ip = Op.get(Up);
+         if (void 0 !== ip) {
+           const cp = Yp.get(ip);
+           Wp.set(yp, {
+             name: yp,
+             texture: cp,
+             kind: "frame"
+           }), pp && !Wp.has(pp.root) && Wp.set(pp.root, {
+             name: pp.root,
+             texture: cp,
+             kind: "frame"
+           });
+           continue
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L2179-L2488` → after: `L182-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L182-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L182-L203) · [Before (L2179-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L2179-L2488)

```diff
-             node: pD,
-             parent: sD
-           } = zD;
-           DD.setNode(wD, pD), void 0 !== sD && DD.setParent(wD, sD)
-         })), rD.forEach((zD => {
-           let {
-             edge: wD,
-             label: pD
-           } = zD;
-           DD.setEdge(wD, pD)
-         })), pD.nodes().forEach((zD => {
-           if (zD === wD) return;
-           let sD = pD.node(zD),
-             KD = DD.node(zD);
-           KD && sD && "number" == typeof sD.x && "number" == typeof sD.y && (KD.x = RD + (sD.x - UD), KD.y = AD + (sD.y - fD))
-         })), delete gD._dagreClusterSubgraph
- ... (294 more removed lines; see GitHub link above)
+             rotation: pp.rotation
+           }, Pp.set(cp, ip), Wp.set(yp, {
+             name: yp,
+             texture: cp,
+             kind: "rotation"
+           })
+         } else Pp.set(cp, Up + 1)
+       }
+       for (const yp of Pp.keys()) Wp.delete(yp);
+       for (const [yp, Up] of cp) {
+         const pp = Pp.get(Up);
+         void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
+       }
+       return {
+         named: [...Pp].sort(((pp, ip) => {
+           let [cp] = pp, [Op] = ip;
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L2490-L2493` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/118.js#L205-L207) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/118.js#L2490-L2493)

```diff
-         }))
-       }(DD))), {
-         graph: DD,
-         rawNodes: gD
+         })),
+         aliases: [...Wp.values()],
+         layers: Ap
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (834 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4-L14` → after: `L5-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5-L26) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4-L14)

```diff
-   38234: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => KD
-     });
-     var pD = wD(38243),
-       sD = wD.n(pD);
- 
-     function KD(DD) {
-       var zD = [],
-         wD = [],
-         pD = null;
+   6328: function(pp, ip, cp) {
+     var Op;
+     ! function() {
+       var op, Ip = 1e9,
+         Sp = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         xp = !0,
+         Lp = "[DecimalError] ",
+         Yp = Lp + "Invalid argument: ",
+         Dp = Lp + "Exponent out of range: ",
+         Ap = Math.floor,
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17-L36` → after: `L29-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L29-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L29-L38) · [Before (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L17-L36)

```diff
-         var KD = pD[wD],
-           LD = pD[sD];
-         KD && LD && (function(DD, zD, wD, pD) {
-           if (DD.gLD) return zD.gLD ? function(DD, zD) {
-             var wD = (DD[3] - DD[0]) / 2,
-               pD = (zD[3] - zD[0]) / 2,
-               sD = DD[0] + wD - (zD[0] + pD),
-               KD = DD[2] + wD - (zD[2] + pD),
-               rD = wD + pD;
-             return sD * sD + KD * KD <= rD * rD
-           }(wD, pD) : rD(wD, pD);
-           if (zD.gLD) return rD(pD, wD);
-           return !0
-         }(KD, LD, zD[wD], zD[sD]) && function(DD, zD, wD) {
-           var pD = zD.cW,
-             sD = wD.cW;
- ... (4 more removed lines; see GitHub link above)
+         var cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap = pp.constructor,
+           Pp = Ap.precision;
+         if (!pp.s || !ip.s) return ip.s || (ip = new Ap(pp)), xp ? Cp(ip, Pp) : ip;
+         if (Yp = pp.d, Dp = ip.d, Sp = pp.e, op = ip.e, Yp = Yp.slice(), Ip = Sp - op) {
+           for (Ip < 0 ? (Op = Yp, Ip = -Ip, Lp = Dp.length) : (Op = Dp, op = Sp, Lp = Yp.length), Ip > (Lp = (Sp = Math.ceil(Pp / 7)) > Lp ? Sp + 1 : Lp + 1) && (Ip = Lp, Op.length = 1), Op.reverse(); Ip--;) Op.push(0);
+           Op.reverse()
+         }
+         for ((Lp = Yp.length) - (Ip = Dp.length) < 0 && (Ip = Lp, Op = Dp, Dp = Yp, Yp = Op), cp = 0; Ip;) cp = (Yp[--Ip] = Yp[Ip] + Dp[Ip] + cp) / yp | 0, Yp[Ip] %= yp;
+         for (cp && (Yp.unshift(cp), ++op), Lp = Yp.length; 0 == Yp[--Lp];) Yp.pop();
+         return ip.d = Yp, ip.e = op, xp ? Cp(ip, Pp) : ip
```

#### 3. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38-L66` → after: `L40-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L40-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L40-L189) · [Before (L38-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38-L66)

```diff
-       return {
-         name: "collideEntities",
-         order: 70,
-         state: {
-           gLD: !1,
-           cpD: 1,
-           gpD: 1,
-           callback: null,
-           rpD: 0,
-           LpD: 0
-         },
-         ZJ: null,
-         hT: null,
-         system: function(rD, LD) {
-           for (var cD = DD.yJ, gD = 0; gD < LD.length; gD++) {
-             var RD = LD[gD].cW,
- ... (13 more removed lines; see GitHub link above)
+ 
+       function Hp(pp, ip, cp) {
+         if (pp !== ~~pp || pp < ip || pp > cp) throw Error(Yp + pp)
+       }
+ 
+       function dp(pp) {
+         var ip, cp, Op, op = pp.length - 1,
+           Ip = "",
+           Sp = pp[0];
+         if (op > 0) {
+           for (Ip += Sp, ip = 1; ip < op; ip++)(cp = 7 - (Op = pp[ip] + "").length) && (Ip += Rp(cp)), Ip += Op;
+           (cp = 7 - (Op = (Sp = pp[ip]) + "").length) && (Ip += Rp(cp))
+         } else if (0 === Sp) return "0";
+         for (; Sp % 10 === 0;) Sp /= 10;
+         return Ip + Sp
+       }
+ ... (134 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L71-L76` → after: `L260-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L260-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L260-L278) · [Before (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L71-L76)

```diff
-         var wD = (DD[3] - DD[0]) / 2,
-           pD = DD[0] + wD,
-           sD = DD[2] + wD,
-           KD = LD(pD, zD[0], zD[3]) - pD,
-           rD = LD(sD, zD[2], zD[5]) - sD;
-         return KD * KD + rD * rD <= wD * wD
+         var cp, Op, Ip, Sp, Lp, Yp = 0,
+           Ap = 0,
+           Wp = pp.constructor,
+           yp = Wp.precision;
+         if (kp(pp) > 16) throw Error(Dp + kp(pp));
+         if (!pp.s) return new Wp(op);
+         for (null == ip ? (xp = !1, Lp = yp) : Lp = ip, Sp = new Wp(.03125); pp.abs().gte(.1);) pp = pp.times(Sp), Ap += 5;
+         for (Lp += Math.log(Pp(2, Ap)) / Math.LN10 * 2 + 5 | 0, cp = Op = Ip = new Wp(op), Wp.precision = Lp;;) {
+           if (Op = Cp(Op.times(pp), Lp), cp = cp.times(++Yp), dp((Sp = Ip.plus(ep(Op, cp, Lp))).d).slice(0, Lp) === dp(Ip.d).slice(0, Lp)) {
+             for (; Ap--;) Ip = Cp(Ip.times(Ip), Lp);
+             return Wp.precision = yp, null == ip ? (xp = !0, Cp(Ip, yp)) : Ip
+           }
+           Ip = Sp
+         }
+       }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L80` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L282-L283) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L80)

```diff
-         return DD < zD ? zD : DD > wD ? wD : DD
+         if (ip > pp.LN10.sd()) throw xp = !0, cp && (pp.precision = cp), Error(Lp + "LN10 precision limit exceeded");
+         return Cp(new pp(pp.LN10), ip)
```

#### 6. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L82-L102` → after: `L285-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L285-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L285-L288) · [Before (L82-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L82-L102)

```diff
-     }
-   },
-   38311: (DD, zD, wD) => {
-     function pD(DD) {
-       return {
-         name: "collideTerrain",
-         order: 0,
-         state: {
-           callback: null
-         },
-         ZJ: function(zD, wD) {
-           var pD = DD.entities;
-           pD.ALD(zD) && (pD.xDD(zD).body.GU = function(wD) {
-             var pD = DD.yJ.ULD(zD).callback;
-             pD && pD(wD, zD)
-           })
- ... (5 more removed lines; see GitHub link above)
+ 
+       function Rp(pp) {
+         for (var ip = ""; pp--;) ip += "0";
+         return ip
```

#### 7. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L104-L120` → after: `L290-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L290-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L290-L304) · [Before (L104-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L104-L120)

```diff
-     }
-     wD.r(zD), wD.d(zD, {
-       default: () => pD
-     })
-   },
-   38330: (DD, zD, wD) => {
-     function pD(DD) {
-       return {
-         name: "TDD",
-         order: 99,
-         state: {
-           lT: 1.5
-         },
-         ZJ: null,
-         hT: null,
-         system: function(zD, wD) {
- ... (1 more removed lines; see GitHub link above)
+ 
+       function qp(pp, ip) {
+         var cp, Op, Ip, Sp, Yp, Dp, Ap, Pp, Wp, yp = 1,
+           Up = pp,
+           wp = Up.d,
+           vp = Up.constructor,
+           tp = vp.precision;
+         if (Up.s < 1) throw Error(Lp + (Up.s ? "NaN" : "-Infinity"));
+         if (Up.eq(op)) return new vp(0);
+         if (null == ip ? (xp = !1, Pp = tp) : Pp = ip, Up.eq(10)) return null == ip && (xp = !0), mp(vp, Pp);
+         if (Pp += 10, vp.precision = Pp, Op = (cp = dp(wp)).charAt(0), Sp = kp(Up), !(Math.abs(Sp) < 15e14)) return Ap = mp(vp, Pp + 2, tp).times(Sp + ""), Up = qp(new vp(Op + "." + cp.slice(1)), Pp - 10).plus(Ap), vp.precision = tp, null == ip ? (xp = !0, Cp(Up, tp)) : Up;
+         for (; Op < 7 && 1 != Op || 1 == Op && cp.charAt(1) > 3;) Op = (cp = dp((Up = Up.times(pp)).d)).charAt(0), yp++;
+         for (Sp = kp(Up), Op > 1 ? (Up = new vp("0." + cp), Sp++) : Up = new vp(Op + "." + cp.slice(1)), Dp = Yp = Up = ep(Up.minus(op), Up.plus(op), Pp), Wp = Cp(Up.times(Up), Pp), Ip = 3;;) {
+           if (Yp = Cp(Yp.times(Wp), Pp), dp((Ap = Dp.plus(ep(Yp, new vp(Ip), Pp))).d).slice(0, Pp) === dp(Dp.d).slice(0, Pp)) return Dp = Dp.times(2), 0 !== Sp && (Dp = Dp.plus(mp(vp, Pp + 2, tp).times(Sp + ""))), Dp = ep(Dp, new vp(yp), Pp), vp.precision = tp, null == ip ? (xp = … [truncated]
+           Dp = Ap, Ip += 2
```

#### 8. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L125-L131` → after: `L308-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L308-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L308-L320) · [Before (L125-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L125-L131)

```diff
-     function sD(DD, zD, wD) {
-       if (wD.yJ.fLD(DD.cW)) {
-         var pD = wD.yJ.QzD(DD.cW).mesh;
-         if (pD.metadata) {
-           var sD = zD < DD.lT;
-           wD.wB.W4(pD, !sD)
-         }
+       function Mp(pp, ip) {
+         var cp, Op, op;
+         for ((cp = ip.indexOf(".")) > -1 && (ip = ip.replace(".", "")), (Op = ip.search(/e/i)) > 0 ? (cp < 0 && (cp = Op), cp += +ip.slice(Op + 1), ip = ip.substring(0, Op)) : cp < 0 && (cp = ip.length), Op = 0; 48 === ip.charCodeAt(Op);) ++Op;
+         for (op = ip.length; 48 === ip.charCodeAt(op - 1);) --op;
+         if (ip = ip.slice(Op, op)) {
+           if (op -= Op, cp = cp - Op - 1, pp.e = Ap(cp / 7), pp.d = [], Op = (cp + 1) % 7, cp < 0 && (Op += 7), Op < op) {
+             for (Op && pp.d.push(+ip.slice(0, Op)), op -= 7; Op < op;) pp.d.push(+ip.slice(Op, Op += 7));
+             Op = 7 - (ip = ip.slice(Op)).length
+           } else Op -= op;
+           for (; Op--;) ip += "0";
+           if (pp.d.push(+ip), xp && (pp.e > wp || pp.e < -wp)) throw Error(Dp + cp)
+         } else pp.s = 0, pp.e = 0, pp.d = [0];
+         return pp
```

#### 9. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L145-L148` → after: `L323-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L323-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L323-L345) · [Before (L145-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L145-L148)

```diff
-     function KD(DD) {
-       let zD = 0;
-       const wD = sD().create(),
-         pD = sD().create();
+       function Cp(pp, ip, cp) {
+         var Op, op, Ip, Sp, Lp, Yp, Wp, Up, vp = pp.d;
+         for (Sp = 1, Ip = vp[0]; Ip >= 10; Ip /= 10) Sp++;
+         if ((Op = ip - Sp) < 0) Op += 7, op = ip, Wp = vp[Up = 0];
+         else {
+           if ((Up = Math.ceil((Op + 1) / 7)) >= (Ip = vp.length)) return pp;
+           for (Wp = Ip = vp[Up], Sp = 1; Ip >= 10; Ip /= 10) Sp++;
+           op = (Op %= 7) - 7 + Sp
+         }
+         if (void 0 !== cp && (Lp = Wp / (Ip = Pp(10, Sp - op - 1)) % 10 | 0, Yp = ip < 0 || void 0 !== vp[Up + 1] || Wp % Ip, Yp = cp < 4 ? (Lp || Yp) && (0 == cp || cp == (pp.s < 0 ? 3 : 2)) : Lp > 5 || 5 == Lp && (4 == cp || Yp || 6 == cp && (Op > 0 ? op > 0 ? Wp / Pp(10, Sp -  … [truncated]
+         if (0 == Op ? (vp.length = Up, Ip = 1, Up--) : (vp.length = Up + 1, Ip = Pp(10, 7 - Op), vp[Up] = op > 0 ? (Wp / Pp(10, Sp - op) % Pp(10, op) | 0) * Ip : 0), Yp)
+           for (;;) {
+             if (0 == Up) {
+               (vp[0] += Ip) == yp && (vp[0] = 1, ++pp.e);
+               break
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L151-L162` → after: `L348-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L348-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L348-L365) · [Before (L151-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L151-L162)

```diff
-         if (rD.ILD === zD) return;
-         rD.ILD = zD;
-         const cD = DD.yJ.nwD(rD.UI);
-         cD && KD(cD, LD);
-         const gD = DD.yJ.AY(rD.cW),
-           RD = DD.yJ.AY(rD.UI);
-         if (RD)
-           if (rD.VwD ? rD.VwD(wD, LD, rD.offset) : sD().copy(wD, rD.offset), LD) sD().add(gD.sH, RD.sH, wD);
-           else {
-             const zD = gD.CU || DD.CU;
-             for (let DD = 0; DD < 3; DD++) pD[DD] = RD.position[DD] - zD[DD] + wD[DD];
-             DD.yJ.GLD(rD.cW, pD)
+         var cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap, Pp, Wp = pp.constructor,
+           Up = Wp.precision;
+         if (!pp.s || !ip.s) return ip.s ? ip.s = -ip.s : ip = new Wp(pp), xp ? Cp(ip, Up) : ip;
+         if (Yp = pp.d, Pp = ip.d, Op = ip.e, Dp = pp.e, Yp = Yp.slice(), Sp = Dp - Op) {
+           for ((Ap = Sp < 0) ? (cp = Yp, Sp = -Sp, Lp = Pp.length) : (cp = Pp, Op = Dp, Lp = Yp.length), Sp > (op = Math.max(Math.ceil(Up / 7), Lp) + 2) && (Sp = op, cp.length = 1), cp.reverse(), op = Sp; op--;) cp.push(0);
+           cp.reverse()
+         } else {
+           for ((Ap = (op = Yp.length) < (Lp = Pp.length)) && (Lp = op), op = 0; op < Lp; op++)
+             if (Yp[op] != Pp[op]) {
+               Ap = Yp[op] < Pp[op];
+               break
+             } Sp = 0
+         }
+         for (Ap && (cp = Yp, Yp = Pp, Pp = cp, ip.s = -ip.s), Lp = Yp.length, op = Pp.length - Lp; op > 0; --op) Yp[Lp++] = 0;
+         for (op = Pp.length; op > Sp;) {
+           if (Yp[--op] < Pp[op]) {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L164-L193` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L367) · [Before (L164-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L164-L193)

```diff
-         else rD.XwD || (rD.BLD && rD.BLD(rD.cW), DD.yJ.fW(rD.cW, DD.yJ.names.WE))
-       }
-       return {
-         name: "WE",
-         order: DD.room ? 50 : 97,
-         state: {
-           UI: 0,
-           offset: null,
-           VwD: null,
-           MwD: !0,
-           BLD: null,
-           XwD: !1,
-           ILD: 0
-         },
-         ZJ: function(wD, pD) {
-           pD.offset = pD.offset ? sD().clone(pD.offset) : sD().create();
- ... (14 more removed lines; see GitHub link above)
+           Yp[op] -= Pp[op]
```

#### 12. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L209-L216` → after: `L374-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L374-L379) · [Before (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L209-L216)

```diff
-     function gD(DD, zD) {
-       const wD = zD.nsD || zD;
-       void 0 === wD.iW?.aLightLevels && (wD.dW("aLightLevels", 4), wD.iW.aLightLevels = (0, KD.q)());
-       const {
-         iW: pD
-       } = zD;
-       !pD || void 0 !== pD.aLightLevels && null !== pD.aLightLevels && pD.aLightLevels !== wD.iW?.aLightLevels || (pD.aLightLevels = (0, KD.q)()), DD.wB.tzD && wD.material && DD.wB.tzD(wD.material)
-     }
+       function Xp(pp, ip, cp) {
+         var Op, op = kp(pp),
+           Ip = dp(pp.d),
+           Sp = Ip.length;
+         return ip ? (cp && (Op = cp - Sp) > 0 ? Ip = Ip.charAt(0) + "." + Ip.slice(1) + Rp(Op) : Sp > 1 && (Ip = Ip.charAt(0) + "." + Ip.slice(1)), Ip = Ip + (op < 0 ? "e" : "e+") + op) : op < 0 ? (Ip = "0." + Rp(-op - 1) + Ip, cp && (Op = cp - Sp) > 0 && (Ip += Rp(Op))) : op >=  … [truncated]
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L218-L222` → after: `L381-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L381-L383) · [Before (L218-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L218-L222)

```diff
-     function RD(DD, zD) {
-       const wD = (0, KD.m)(zD);
-       for (const pD of wD) gD(DD, pD);
-       return wD
-     }
+       function lp(pp, ip) {
+         if (pp.length > ip) return pp.length = ip, !0
+       }
```

#### 14. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L224-L277` → after: `L385-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L385-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L385-L410) · [Before (L224-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L224-L277)

```diff
-     function AD(DD) {
-       return {
-         name: "mesh",
-         order: 100,
-         state: {
-           Vl: null,
-           uwD: null,
-           mesh: null,
-           offset: null,
-           MLD: null,
-           uB: !1,
-           JLD: !0,
-           twD: !0,
-           ELD: null,
-           QLD: null,
-           XLD: -1
- ... (38 more removed lines; see GitHub link above)
+       function Qp(pp) {
+         if (!pp || "object" !== typeof pp) throw Error(Lp + "Object expected");
+         var ip, cp, Op, op = ["precision", 1, Ip, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
+         for (ip = 0; ip < op.length; ip += 3)
+           if (void 0 !== (Op = pp[cp = op[ip]])) {
+             if (!(Ap(Op) === Op && Op >= op[ip + 1] && Op <= op[ip + 2])) throw Error(Yp + cp + ": " + Op);
+             this[cp] = Op
+           } if (void 0 !== (Op = pp[cp = "LN10"])) {
+           if (Op != Math.LN10) throw Error(Yp + cp + ": " + Op);
+           this[cp] = new this(Op)
+         }
+         return this
+       }
+       Sp = function pp(ip) {
+         var cp, Op, op;
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L284-L296` → after: `L447-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L447-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L447-L459) · [Before (L284-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L284-L296)

```diff
-   38221: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       PhysicsState: () => KD,
-       default: () => rD,
-       setFloatingYValue: () => gD,
-       bLD: () => cD,
-       jLD: () => RD
-     });
-     var pD = wD(358),
-       sD = wD.n(pD);
-     class KD {
-       constructor() {
-         this.body = null, this.mp = null, this.AU = null
+   5469: (pp, ip, cp) => {
+     var Op = cp(5475),
+       op = cp(5477),
+       Ip = cp(5496),
+       Sp = cp(5498),
+       xp = cp(5506);
+ 
+     function Lp(pp) {
+       var ip = -1,
+         cp = null == pp ? 0 : pp.length;
+       for (this.clear(); ++ip < cp;) {
+         var Op = pp[ip];
+         this.set(Op[0], Op[1])
```

#### 16. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L301-L327` → after: `L476-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L476-L480) · [Before (L301-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L301-L327)

```diff
-       return {
-         name: "physics",
-         order: 40,
-         state: new KD,
-         ZJ: function(zD, wD) {
-           wD.AU = DD, wD.mp = null, wD.body = DD.physics.JU(), cD(wD, DD.yJ.AY(wD.cW))
-         },
-         hT: function(zD, wD) {
-           if (DD.yJ.hasPosition(wD.cW)) {
-             var pD = DD.yJ.AY(wD.cW);
-             RD(wD, pD), AD(wD, pD, 0, !1)
-           }
-           DD.physics.EU(wD.body)
-         },
-         system: function(zD, wD) {
-           for (var pD = 0; pD < wD.length; pD++) {
- ... (11 more removed lines; see GitHub link above)
+       var ip = -1,
+         cp = null == pp ? 0 : pp.length;
+       for (this.clear(); ++ip < cp;) {
+         var Op = pp[ip];
+         this.set(Op[0], Op[1])
```

#### 17. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L330` → after: `L483-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L483-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L483-L496) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L330)

```diff
-     var LD = sD().create();
+     Lp.prototype.clear = Op, Lp.prototype.delete = op, Lp.prototype.get = Ip, Lp.prototype.has = Sp, Lp.prototype.set = xp, pp.exports = Lp
+   },
+   5955: (pp, ip, cp) => {
+     var Op = cp(5398)(cp(5231), "Promise");
+     pp.exports = Op
+   },
+   5964: (pp, ip, cp) => {
+     var Op = cp(5398)(cp(5231), "Set");
+     pp.exports = Op
+   },
+   5791: (pp, ip, cp) => {
+     var Op = cp(5364),
+       op = cp(5794),
+       Ip = cp(5801);
```
