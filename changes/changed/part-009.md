# Changed — Bundle Modifications Report (Part 009 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `9 / 86` (**282** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/135.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/135.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e)

#### 7. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L257-L290` → after: `L30-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L30-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L30-L50) · [Before (L257-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L257-L290)

```diff
-         className: "GameEventPanelGoals",
-         children: [(0, iB.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: YB(DB ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, iB.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: OB.prizeGoals.map(((BB, OB) => {
-             const DB = null === GB ? null : Math.min(GB[OB], BB.target);
-             return (0, iB.jsxs)(ZB.Fragment, {
-               children: [OB > 0 && (0, iB.jsx)("div", {
-                 className: "GameEventPanelGoalsOr",
-                 children: YB("gameEvents:goalsOr")
-               }), (0, iB.jsxs)("div", {
-                 className: pB()("GameEventPanelGoal", {
-                   GameEventPanelGoalDone: DB === BB.target
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

#### 8. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L294-L298` → after: `L54-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L54-L69) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L294-L298)

```diff
-     var wB = GB(1591),
-       EB = GB(1658),
-       cB = GB(1074),
-       hB = GB(760),
-       aB = GB(3926);
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

#### 9. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L301-L394` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L72) · [Before (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L301-L394)

```diff
-       let {
-         gameNameWithVariation: OB
-       } = BB;
-       const GB = (0, wB.x)(OB),
-         [YB, DB] = (0, ZB.useState)(null);
-       if ((0, ZB.useEffect)((() => {
-           if (!GB) return;
-           let BB = !0;
-           return (0, EB.j)(GB).then((OB => {
-             BB && DB(OB)
-           })).catch((BB => {
-             console.error(`Failed to load the page copy for ${GB.name}`, BB)
-           })), () => {
-             BB = !1
-           }
-         }), [GB]), !GB || !YB || YB.name !== GB.name) return null;
- ... (78 more removed lines; see GitHub link above)
+       return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L421-L442` → after: `L76-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L76-L79) · [Before (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L421-L442)

```diff
-       let {
-         preview: OB,
-         isBroken: GB
-       } = BB;
-       const YB = null === OB ? null : (0, QB.f)(OB, "small"),
-         oB = (0, DB.e)(null !== YB && void 0 !== YB ? YB : QB.q);
-       return null === OB ? (0, iB.jsx)("div", {
-         className: pB()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: GB
-         }),
-         children: (0, iB.jsx)(TB.b, {
-           name: GB ? "triangle-exclamation" : "star"
-         })
-       }) : (0, iB.jsx)("div", {
-         className: pB()("FeaturedGamesPopupSlotThumbnail", jB.h),
-         style: (0, jB.e)(oB),
- ... (6 more removed lines; see GitHub link above)
+       const iW = new Map(WW.map((WW => [cW(WW).join("."), WW])));
+       if (0 === iW.size) return [];
+       const OW = tW([...iW.values()]);
+       return 0 === OW[0].length ? [] : OW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L446-L551` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L83) · [Before (L446-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L446-L551)

```diff
-       let {
-         schematicId: OB,
-         gameName: GB
-       } = BB;
-       const {
-         userContext: DB
-       } = (0, VB.d)(), QB = (0, pO.c)(), [oB, jB] = (0, ZB.useState)(null), [yB, JB] = (0, ZB.useState)(null), [MB, PB] = (0, ZB.useState)(!1), lB = (0, ZB.useCallback)((() => {
-         JB(null), KB.b.getFeaturedGames(DB).then((BB => {
-           QB.current && jB(BB.slots)
-         })).catch((BB => {
-           console.error("Failed to get featured games", BB), QB.current && JB("Failed to load featured games")
-         }))
-       }), [DB, QB]);
-       (0, ZB.useEffect)((() => {
-         lB()
-       }), [lB]);
- ... (90 more removed lines; see GitHub link above)
+       return EW.map((iW => iW(WW)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L553-L557` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L85) · [Before (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L553-L557)

```diff
-     var NO = GB(5146),
-       RO = GB(5014),
-       WO = GB(3873);
-     const AO = 8,
-       VO = 12;
+     const wW = EW.map((WW => new Set(mW.c.map(WW)).size));
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L560-L582` → after: `L88-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L88-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L88-L98) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L560-L582)

```diff
-       let {
-         customLobbies: OB,
-         favouriteLobbies: GB,
-         toggleLikeLobby: YB,
-         showReport: DB
-       } = BB;
-       const [QB, oB] = (0, ZB.useState)(AO);
-       return (0, ZB.useEffect)((() => {
-         if (QB >= OB.length) return;
-         let BB = !0;
-         return (0, WO.e)().then((() => {
-           BB && oB(QB + VO)
-         })), () => {
-           BB = !1
-         }
-       }), [QB, OB.length]), (0, iB.jsx)(iB.Fragment, {
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L614-L630` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L102-L106) · [Before (L614-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L614-L630)

```diff
-       const GB = PO.e[BB.schematicId];
-       return {
-         listedVariations: [],
-         backgroundImage: (0, QB.f)(BB, "large"),
-         badges: [],
-         category: BB.gameCategory,
-         title: void 0 !== (null === GB || void 0 === GB ? void 0 : GB.title) ? OB(GB.title) : BB.name,
-         variationTitle: null,
-         description: void 0 !== (null === GB || void 0 === GB ? void 0 : GB.description) ? OB(GB.description) : BB.description,
-         ownerSocialPreviewWithoutLocation: "owner" in BB ? BB.owner : null,
-         ccu: BB.ccu,
-         favourites: BB.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in BB ? BB.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
-         canCreateCustomLobbies: !0,
- ... (1 more removed lines; see GitHub link above)
+       const OW = new Map;
+       for (const EW of WW) {
+         var mW;
+         const WW = iW(EW);
+         OW.set(WW, [...null !== (mW = OW.get(WW)) && void 0 !== mW ? mW : [], EW])
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L658` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L135-L136) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L658)

```diff
-         urlId: OB
+         existing: sW,
+         onPublished: KW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L662` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L140) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L662)

```diff
-       } = (0, yB.H)(), {
+       } = (0, AW.B)(), {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L665-L784` → after: `L143-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L143-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L143-L163) · [Before (L665-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L665-L784)

```diff
-       } = (0, VB.d)(), QB = (0, ZB.useMemo)((() => (0, vB.i)(OB)), [OB]);
-       (0, ZB.useMemo)((() => {
-         if (null === QB) return;
-         const BB = CB.userContextManager.peekCurrentUserContext();
-         (null !== BB ? KB.b.getGame(BB, QB.schematicId) : CB.userContextManager.getCurrentUserContext().then((BB => KB.b.getGame(BB, QB.schematicId)))).catch((BB => {
-           null === (0, KB.j)(BB) && console.error(`Failed to get the custom game ${QB.schematicId}`, BB), (0, vB.e)(OB)
-         }))
-       }), [QB, OB]);
-       const [oB, jB] = (0, ZB.useState)(null), JB = (0, HB.d)();
-       (0, ZB.useEffect)((() => {
-         if (null !== QB || DB) return;
-         let BB = !0;
-         return KB.b.getGameByUrlId(YB, OB).then((YB => {
-           BB && (YB.takenDown ? XO(GB, YB) : jB({
-             urlId: OB,
-             game: YB
- ... (104 more removed lines; see GitHub link above)
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

#### 18. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L786-L907` → after: `L165-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L165-L180) · [Before (L786-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L786-L907)

```diff
-         const lB = [],
-           pB = !1 === YB ? [] : zB;
-         for (const JB of pB)(0, zO.Q)(JB) || lB.includes(JB) || lB.push(JB);
-         return {
-           recentlyPlayedPublicLobbies: PB,
-           recentlyPlayedCustomLobbies: lB
-         }
-       }(YO.gameNameWithVariation, aB, hO.showWorldsInsteadOfCustomLobbies, hO.canCreateCustomLobbies)), [YO.gameNameWithVariation, aB, hO.showWorldsInsteadOfCustomLobbies, hO.canCreateCustomLobbies]), [CO, HO] = (0, ZB.useState)(!0), [vO, sO] = (0, ZB.useState)([]), [xO, tO] = (0 … [truncated]
-         (0, NB.unstable_batchedUpdates)((() => {
-           VO(BB), cO((OB => ({
-             ...iO(BB, XB),
-             isFavourite: OB.isFavourite
-           })))
-         }))
-       }), [XB]);
-       (0, ZB.useEffect)((() => {
- ... (106 more removed lines; see GitHub link above)
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

#### 19. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L909-L927` → after: `L182-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L182-L186) · [Before (L909-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L909-L927)

```diff
-         }), [cB, xO]),
-         qG = (null === AO || void 0 === AO ? void 0 : AO.schematicId) === (0, DO.r)(BO.gameNameWithVariation) ? AO : null,
-         ZG = qG && (0, wB.A)(BO.gameNameWithVariation, (BB => XB(BB)), qG);
-       (0, tB.h)(qG && (0, wB.p)(BO.gameNameWithVariation, qG));
-       const NG = bB.featureFlags.canUseCustomLobbies && !0 === hO.canCreateCustomLobbies,
-         RG = (0, iB.jsx)("div", {
-           className: "GameInformationPageContentAnchor",
-           children: (0, iB.jsx)(eB, {
-             gameNameWithVariation: YO.gameNameWithVariation
-           })
-         });
-       return (0, iB.jsx)(iB.Fragment, {
-         children: (0, iB.jsxs)("article", {
-           className: pB()("GameInformation", {
-             GameInformationFadeIn: aO,
-             GameInformationReleaseCountdown: "releaseCountdown" === (null === (lB = hO.countdownInformation) || void 0 === lB ? void 0 : lB.type)
- ... (3 more removed lines; see GitHub link above)
+         }), JW && (0, kW.jsxs)("div", {
+           className: "ShaderPackPublishSummary",
+           children: [(0, kW.jsx)("div", {
+             className: "ShaderPackPublishPackName",
+             children: JW.pack.manifest.name
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L929-L1279` → after: `L188-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L188-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L188-L210) · [Before (L929-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L929-L1279)

```diff
-             className: "GameInformationInner",
-             children: [(0, iB.jsxs)("div", {
-               className: "GameInformationTop",
-               children: [(0, iB.jsxs)("div", {
-                 className: "GameInformationTopBackgroundContainer",
-                 children: [(0, iB.jsx)("div", {
-                   className: "GameInformationTopBackgroundColor"
-                 }), (0, iB.jsx)("div", {
-                   className: pB()("GameInformationTopBackgroundImage", jB.h),
-                   style: (0, jB.e)(eO),
-                   children: (0, iB.jsx)(jB.d, {
-                     image: eO
-                   })
-                 })]
-               }), (0, iB.jsxs)("div", {
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1282-L1352` → after: `L213-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L213-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L213-L223) · [Before (L1282-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1282-L1352)

```diff
-           }), !NG && RG]
-         })
-       })
-     }
- 
-     function EO(BB) {
-       let {
-         variation: OB,
-         isSelected: GB,
-         children: YB
-       } = BB;
-       const yB = PO.b[OB],
-         MB = (0, QB.l)(OB, (0, QB.m)(yB)),
-         PB = (0, DB.e)(MB),
-         zB = (0, oB.i)([(0, QB.j)(OB, (0, QB.c)(yB))]);
-       return (0, iB.jsxs)(xB.LinkPreserveSearch, {
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

#### 22. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1354-L1376` → after: `L225-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L225-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L225-L267) · [Before (L1354-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1354-L1376)

```diff
-         }), OB.rows.length > 0 && (0, pB.jsx)("div", {
-           className: "GameApprovalInfoRows",
-           children: OB.rows.map((BB => {
-             const {
-               label: OB,
-               value: GB
-             } = DB(BB);
-             return (0, pB.jsxs)("div", {
-               className: zB()("GameApprovalInfoRow", BB.passed ? "Passed" : "Failed"),
-               children: [(0, pB.jsx)(MB.b, {
-                 name: BB.passed ? "check" : "xmark"
-               }), (0, pB.jsxs)("div", {
-                 className: "GameApprovalInfoRowText",
-                 children: [(0, pB.jsx)("div", {
-                   className: "GameApprovalInfoRowLabel",
-                   children: OB
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1396-L1398` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L274) · [Before (L1396-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1396-L1398)

```diff
-         schematicId: OB,
-         canOverride: GB,
-         onApprovalChanged: PB
+         picked: iW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1402-L1481` → after: `L278-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L278-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L278-L298) · [Before (L1402-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1402-L1481)

```diff
-       } = (0, ZB.H)(), {
-         userContext: lB
-       } = (0, jB.d)(), NB = (0, oB.c)(), [RB, WB] = (0, YB.useState)(null), [AB, VB] = (0, YB.useState)(null), [SB, nB] = (0, YB.useState)(!1), UB = (0, YB.useCallback)((() => {
-         VB(null), QB.b.getGameApprovalInfo(lB, OB).then((BB => {
-           NB.current && WB(BB)
-         })).catch((BB => {
-           console.error("Failed to get game approval info", BB), NB.current && VB(zB("studio:approvalLoadFailed"))
-         }))
-       }), [lB, OB, NB, zB]);
-       (0, YB.useEffect)((() => {
-         UB()
-       }), [UB]);
-       const fB = BB => {
-         SB || (nB(!0), QB.b.setGameApproval(lB, OB, BB).then((() => {
-           null === PB || void 0 === PB || PB(), NB.current && UB()
-         })).catch((BB => {
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

#### 25. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1486-L1501` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L314) · [Before (L1486-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1486-L1501)

```diff
-   },
-   7011: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => jB,
-       d: () => oB
-     });
-     var YB = GB(353),
-       DB = GB(1175);
-     const QB = {
-       manuallyApproved: "studio:approvalStatusManuallyApproved",
-       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
-       manuallyDenied: "studio:approvalStatusManuallyDenied",
-       autoApproved: "studio:approvalStatusAutoApproved",
-       notApproved: "studio:approvalStatusNotApproved",
-       notIndexed: "studio:approvalStatusNotIndexed"
-     };
+     const KW = "\0";
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1505-L1566` → after: `L318-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L318-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L318-L331) · [Before (L1505-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1505-L1566)

```diff
-         t: BB,
-         selectedLanguage: OB
-       } = (0, DB.H)();
-       return {
-         statusText: OB => BB(QB[OB]),
-         rowText: GB => {
-           const QB = (BB, GB) => (0, YB.eb)((0, DB.s)(OB.code, BB), 0, GB),
-             oB = (OB, GB) => null === GB ? OB : BB("studio:approvalWithMinDays", {
-               value: OB,
-               days: GB
-             });
-           switch (GB.kind) {
-             case "ownerAccountAge": {
-               const OB = GB.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
-               return {
-                 label: BB("studio:approvalAccountAgeLabel"),
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

#### 27. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1569` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L334) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1569)

```diff
-   34834: (BB, OB, GB) => {
+   5961: (WW, iW, OW) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1571` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L336-L338) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1571)

```diff
-       d: () => QB
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1573-L1586` → after: `L340-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L340-L344) · [Before (L1573-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1573-L1586)

```diff
-     var YB = GB(56),
-       DB = GB(3873);
- 
-     function QB() {
-       const [BB, OB] = (0, YB.useState)(!1);
-       return (0, YB.useLayoutEffect)((() => {
-         let BB = !0;
-         return (0, DB.e)().then((() => {
-           BB && OB(!0)
-         })), () => {
-           BB = !1
-         }
-       }), []), BB
-     }
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1588` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L346) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1588)

```diff
-   9592: (BB, OB, GB) => {
+   5970: (WW, iW, OW) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1591` → after: `L351-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L351-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L351-L357) · [Before (L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1591)

```diff
-       g: () => NB
+       i: () => PW,
+       l: () => mW,
+       o: () => bW,
+       p: () => ZW,
+       r: () => EW,
+       v: () => NW,
+       x: () => wW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1593-L1605` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L359) · [Before (L1593-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1593-L1605)

```diff
-     var YB = GB(162),
-       DB = GB(192),
-       QB = GB(1049),
-       oB = GB(1061),
-       jB = GB(1217),
-       yB = GB(2023),
-       JB = GB(2549),
-       MB = GB(1540),
-       PB = GB(1400),
-       zB = GB(1121),
-       lB = GB(9599),
-       pB = GB(1560),
-       qB = GB(1586);
+     const mW = 5;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1607-L1635` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L361-L362) · [Before (L1607-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1607-L1635)

```diff
-     function ZB(BB, OB) {
-       const GB = !0 === OB.debugResult.gameRefused,
-         QB = GB || OB.code === YB.l.REQUEST_TO_MATCHMAKING ? (0, lB.h)(OB.message) : null;
-       if (null !== QB) return VB(BB, BB((0, lB.m)(QB)), BB(lB.k[QB])), !0;
-       if (GB) return async function(BB) {
-         const {
-           gameNameWithVariation: OB,
-           lobbyName: GB,
-           shownLobbyName: YB
-         } = yB.gameBridge.latest("connectedGame"), DB = "classic" === OB && (0, jB.L)(GB) ? YB : await (0, JB.c)(BB, OB, GB);
-         return "" !== DB ? BB("general:cantJoinGame", {
-           game: DB
-         }) : BB("general:cantJoinThisGame")
-       }(BB).then((GB => {
-         VB(BB, GB, OB.message)
-       })), !0;
- ... (13 more removed lines; see GitHub link above)
+     function EW(WW) {
+       return WW === mW
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1638-L1641` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L365-L366) · [Before (L1638-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1638-L1641)

```diff
-     function NB(BB, OB) {
-       !0 !== (null === OB || void 0 === OB ? void 0 : OB.takenDown) ? VB(BB, BB("general:cantJoinThisGame"), DB.c.customGameTakenDown.text) : WB(BB, "lock", BB("studio:gameTakenDownTitle", {
-         game: OB.name
-       }), BB("studio:viewInStudio"), OB.schematicId)
+     function NW(WW) {
+       return [...WW.features]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1644-L1659` → after: `L372-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L372-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L372-L380) · [Before (L1644-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1644-L1659)

```diff
-     function RB() {
-       return (0, QB.r)(yB.gameBridge.latest("connectedGame").gameNameWithVariation)
-     }
-     async function WB(BB, OB, GB, YB, DB) {
-       !0 === await PB.NotificationProvider.showPromptPopup({
-         icon: OB,
-         title: GB,
-         confirmText: YB,
-         cancelText: BB("general:cancel")
-       }).getResult() && (0, pB.navigatePreserveSearch)((0, qB.w)((0, oB.e)(DB), "manage"))
-     }
-     async function AB(BB) {
-       try {
-         return await MB.b.getGame(await zB.userContextManager.getCurrentUserContext(), BB, !0)
-       } catch (OB) {
-         return (0, MB.f)(OB) || console.error(`Failed to get game ${BB}`, OB), null
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

#### 36. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1682-L1717` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L401-L402) · [Before (L1682-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1682-L1717)

```diff
-       return BB = function(BB, OB) {
-         var GB;
-         const YB = new URLSearchParams(OB),
-           DB = YB.get("lobby"),
-           QB = YB.get("vm"),
-           oB = null !== (GB = DB) && void 0 !== GB ? GB : BB.lobbyName,
-           jB = null !== QB && void 0 !== QB ? QB : BB.directJoinVmUrl;
-         if (oB === BB.lobbyName && jB === BB.directJoinVmUrl) return BB;
-         return {
-           ...BB,
-           lobbyName: oB,
-           directJoinVmUrl: jB
-         }
-       }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
-         if ((0, QB.Q)(BB.directJoinVmUrl)) return BB;
-         const OB = (0, DB.fb)(BB.directJoinVmUrl);
- ... (20 more removed lines; see GitHub link above)
+       const iW = {};
+       for (const OW of WW) iW[OW.path] = OW.source;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1732-L1733` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L406-L407) · [Before (L1732-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1732-L1733)

```diff
-     function QB(BB) {
-       return oB(BB) === YB.c.gameOrPluginOnPlayerAuthRejected.code
+     function ZW(WW, iW) {
+       return WW < iW ? -1 : WW > iW ? 1 : 0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1737` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L411-L417) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1737)

```diff
-       return "object" === typeof BB && null !== BB ? BB.code : void 0
+       const iW = new TextEncoder;
+       let OW = 0;
+       for (const {
+           source: mW
+         }
+         of WW) OW += iW.encode(mW).byteLength;
+       return OW
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1741-L1742` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L421-L424) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1741-L1742)

```diff
-       var OB;
-       return null !== (OB = Object.keys(DB.b).find((OB => DB.b[OB] === BB))) && void 0 !== OB ? OB : null
+       if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
+       if (WW.length > cW) return `A file path is over ${cW} characters.`;
+       if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
+       return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1745-L1752` → after: `L428-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L428-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L428-L525) · [Before (L1745-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L1745-L1752)

```diff
-     function yB(BB) {
-       return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const JB = {
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/136.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/136.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L2)

```diff
- export const ids = [136];
+ export const ids = [136, 139, 159, 160];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L4)

```diff
-   9414: (BB, OB, GB) => {
+   5961: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L6-L7)

```diff
-       d: () => oB,
-       e: () => QB
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L9-L12` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L10-L14) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L9-L12)

```diff
-     var YB = GB(2098);
-     const DB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       QB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && DB.test(BB.keycode),
-       oB = BB => "Space" === BB ? "_" : YB.h[BB]
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L14` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L16) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L14)

```diff
-   37166: (BB, OB, GB) => {
+   42022: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L16-L17` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L18-L19) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L16-L17)

```diff
-       b: () => DB,
-       f: () => QB
+       e: () => ZW,
+       installListedShaderPack: () => tW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L19` → after: `L21-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L21-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L21-L159) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L19)

```diff
-     let YB = !1;
+     var mW = OW(7570),
+       EW = OW(5970),
+       NW = OW(1185),
+       PW = OW(7621),
+       LW = OW(5961),
+       cW = OW(7656),
+       wW = OW(7648);
+     async function tW(WW) {
+       const iW = await (0, PW.loadPageShaderPackCompiler)();
+       if (null === iW) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const OW = await ZW(WW, iW);
+       return "failed" === OW.kind ? OW : await (0, cW.saveShaderPack)(OW.stored, iW) ? ((0, cW.markShaderPackChangePending)(), OW) : {
+         kind: "failed",
+ ... (123 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L29` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L256) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L29)

```diff
-   40546: (BB, OB, GB) => {
+   7648: (WW, iW, OW) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L31` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L258-L259) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L31)

```diff
-       c: () => YB
+       c: () => cW,
+       g: () => LW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L33-L64` → after: `L261-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L261-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L261-L370) · [Before (L33-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L33-L64)

```diff
-     class YB {
-       constructor(BB) {
-         this.events = BB, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
-       }
-       addSample(BB, OB) {
-         if (null === BB) return this.recent.length = 0, void this.endEpisode(OB);
-         if (this.sampleSum += BB, this.sampleCount++, this.recent.push(BB), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, BB), this.episode.sum += BB, this.episode.count++), this.recent.length < 5) ret … [truncated]
-         const GB = function(BB) {
-           let OB = 0;
-           for (const GB of BB) OB += GB;
-           return OB / BB.length
-         }(this.recent);
-         this.minWindowAvg = null === this.minWindowAvg ? GB : Math.min(this.minWindowAvg, GB), null === this.episode && GB < 20 ? (this.episode = {
-           startedAtMs: OB - 5e3,
-           minFps: Math.min(...this.recent),
-           sum: 5 * GB,
- ... (16 more removed lines; see GitHub link above)
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
+ ... (94 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L67-L70` → after: `L373-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L373-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L373-L405) · [Before (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L67-L70)

```diff
-       getTags() {
-         return null === this.minWindowAvg ? null : {
-           fps_min_bucket: DB(this.minWindowAvg),
-           fps_avg_bucket: DB(this.sampleSum / this.sampleCount)
+       return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
+         function(WW) {
+           if (0 === WW.length) return "The pack has no .wgsl files.";
+           if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
+           const iW = new Set;
+           for (const {
+               path: OW
+             }
+             of WW) {
+             const WW = lW(OW);
+             if (null !== WW) return WW;
+             if (iW.has(OW)) return `The pack has two files at ${OW}.`;
+             iW.add(OW)
+           }
+           return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
+         }(iW) ?? iW
+ ... (17 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L72-L93` → after: `L407-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L407-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L407-L425) · [Before (L72-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L72-L93)

```diff
-       }
-     }
- 
-     function DB(BB) {
-       return BB < 15 ? "<15" : BB < 30 ? "15-30" : BB < 50 ? "30-50" : "50+"
-     }
- 
-     function QB(BB) {
-       return Math.round(10 * BB) / 10
-     }
-   },
-   40523: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => DB
-     });
-     var YB = GB(1314);
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L95-L193` → after: `L427-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L427-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L427-L511) · [Before (L95-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L95-L193)

```diff
-         return OB instanceof Error && (GB.startsWith(window.location.origin) || GB.startsWith("wasm://"))
-       }
-       const OB = BB.reason;
-       if (OB instanceof Error) {
-         var GB;
-         const BB = `${OB.name}: ${OB.message}`;
-         return !(0, YB.h)(null !== (GB = OB.stack) && void 0 !== GB ? GB : "") && !(0, YB.c)(BB) && !(0, YB.f)(BB)
-       }
-       return "string" === typeof OB && !(0, YB.c)(OB)
-     }
-   },
-   40529: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => kB
-     });
-     var YB = GB(16),
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L195-L388` → after: `L513-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L513-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/136.js#L513-L516) · [Before (L195-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/136.js#L195-L388)

```diff
-         }))
-       }
-       keyDown(BB, OB) {
-         const GB = (0, qB.c)(BB);
-         if (0 !== this.sJ[GB]) return;
-         const YB = this.source.isInPlay(),
-           DB = YB ? this.getKeyTable() : null,
-           QB = null === DB || OB || 1 === DB.bound[GB],
-           oB = null !== DB && 0 !== DB.actionBits[GB];
-         this.sJ[GB] = 1 + (QB ? 1 : 0) + (YB ? 2 : 0) + (oB ? 4 : 0), this.heldCount++, this.emit(GB, !0, QB, YB, oB), oB && this.updateActionBits()
-       }
-       keyUp(BB) {
-         this.release(BB) && this.updateActionBits()
-       }
-       setMouseButtons(BB, OB) {
-         const GB = BB ^ this.mouseButtons;
- ... (178 more removed lines; see GitHub link above)
+         })),
+         aliases: [...lW.values()],
+         layers: ZW
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/137.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/137.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137, 138];
+ export const ids = [137, 139, 159, 160];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L4)

```diff
-   7067: (BB, OB, GB) => {
+   5961: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L6)

```diff
-       c: () => DB
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L8` → after: `L10-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L10-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L10-L51) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L8)

```diff
-     var YB = GB(1282);
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L11-L24` → after: `L54-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L54-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L54-L78) · [Before (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L11-L24)

```diff
-       let {
-         href: OB,
-         children: GB
-       } = BB;
-       return (0, YB.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: OB,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [GB, " ", (0, YB.jsx)("span", {
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
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L43-L51` → after: `L82-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L82-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L82-L111) · [Before (L43-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L43-L51)

```diff
-       const {
-         t: BB
-       } = (0, YB.H)();
-       return (0, QB.jsxs)(QB.Fragment, {
-         children: [BB("superBotXd:deepSeekNotice"), " ", (0, QB.jsx)(DB.c, {
-           href: oB,
-           children: BB("superBotXd:deepSeekPrivacyPolicy")
-         })]
-       })
+       return AW(kW)
+     }
+ 
+     function MW(WW, iW) {
+       return "active" === KW(WW, iW).kind
+     }
+ 
+     function KW(WW, iW) {
+       var OW;
+       return null === WW ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : yW(WW) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L55-L66` → after: `L115-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L115-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L115-L119) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L55-L66)

```diff
-       const {
-         t: BB
-       } = (0, YB.H)();
-       return (0, QB.jsxs)(QB.Fragment, {
-         children: [BB("aiHelperChatGpt:notice"), " ", (0, QB.jsx)(DB.c, {
-           href: jB,
-           children: BB("aiHelperChatGpt:terms")
-         }), " ", (0, QB.jsx)(DB.c, {
-           href: yB,
-           children: BB("aiHelperChatGpt:privacyPolicy")
-         })]
-       })
+       NW.j.setItem(wW, performance.timeOrigin)
+     }
+ 
+     function YW() {
+       return NW.j.getItem(wW) === performance.timeOrigin
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L87-L202` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L123) · [Before (L87-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L87-L202)

```diff
-       let {
-         allowsPersonalizedAds: OB
-       } = BB;
-       return (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, pB.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
-         }), (0, pB.jsx)("h3", {
-           children: "4.1 What Are Cookies?"
-         }), (0, pB.jsx)("p", {
-           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
-         }), (0, pB.jsx)("h3", {
-           children: "4.2 Types of Cookies We Use"
-         }), (0, pB.jsx)("p", {
-           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
-         }), (0, pB.jsxs)("table", {
-           children: [(0, pB.jsxs)("tr", {
- ... (100 more removed lines; see GitHub link above)
+       return !(0, EW.g)(WW.manifest.apiVersion)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L206-L558` → after: `L127-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L127-L132) · [Before (L206-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L206-L558)

```diff
-       let {
-         allowsPersonalizedAds: OB
-       } = BB;
-       return (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, pB.jsx)("h2", {
-           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
-         }), (0, pB.jsx)("h3", {
-           children: "2.1 Visitors"
-         }), (0, pB.jsx)("h4", {
-           children: "2.1.1 Data Collection and Usage"
-         }), (0, pB.jsxs)("p", {
-           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
-         }), (0, pB.jsxs)("table", {
-           children: [(0, pB.jsxs)("tr", {
-             children: [(0, pB.jsx)("td", {
-               children: (0, pB.jsx)("p", {
- ... (337 more removed lines; see GitHub link above)
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
+     }
+ 
+     function JW(WW, iW) {
+       var OW;
+       return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L562-L957` → after: `L136-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L136-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L136-L144) · [Before (L562-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L562-L957)

```diff
-       let {
-         allowsPersonalizedAds: OB
-       } = BB;
-       return (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, pB.jsx)("h3", {
-           children: "3.3 Service Providers"
-         }), (0, pB.jsx)("p", {
-           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
-         }), (0, pB.jsx)("h4", {
-           children: "Hosting and Data Storage"
-         }), (0, pB.jsxs)("table", {
-           children: [(0, pB.jsxs)("tr", {
-             children: [(0, pB.jsx)("td", {
-               children: (0, pB.jsx)("p", {
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1398` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L148) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1398)

```diff
-       return BB.replace(/^the /, "").localeCompare(OB.replace(/^the /, ""))
+       MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1400-L1401` → after: `L150-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L150-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L150-L167) · [Before (L1400-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1400-L1401)

```diff
-     const VB = new Intl.ListFormat("en-GB", {
-       type: "conjunction"
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
+   7637: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1405-L1432` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L174) · [Before (L1405-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1405-L1432)

```diff
-       const {
-         countries: BB,
-         subdivisions: OB
-       } = function(BB) {
-         const OB = [],
-           GB = [];
-         for (const [YB, DB] of Object.entries(RB))
-           if ("bySubdivision" === DB.status) {
-             const OB = Object.entries(WB).filter((OB => {
-               let [GB, DB] = OB;
-               return GB.startsWith(`${YB}-`) && BB(DB)
-             })).map((BB => {
-               let [, OB] = BB;
-               return OB.name
-             }));
-             OB.length > 0 && GB.push({
- ... (12 more removed lines; see GitHub link above)
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1434` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L176-L178) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1434)

```diff
-           status: OB
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1436-L1450` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L180-L181) · [Before (L1436-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1436-L1450)

```diff
-         return "off" === OB
-       }));
-       return (0, pB.jsxs)("ul", {
-         children: [(0, pB.jsxs)("li", {
-           children: ["Countries and territories: ", VB.format(BB), "."]
-         }), OB.map((BB => {
-           let {
-             country: OB,
-             names: GB
-           } = BB;
-           return (0, pB.jsxs)("li", {
-             children: ["In ", OB, ": ", VB.format(GB), "."]
-           }, OB)
-         }))]
-       })
+         return EW ??= (0, mW.o)(OW, NW, iW), EW
+       })), NW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1454-L1483` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L185-L186) · [Before (L1454-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1454-L1483)

```diff
-       return (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, pB.jsx)("h3", {
-           id: "session-recordings",
-           children: "2.5 Session Recordings"
-         }), (0, pB.jsx)("p", {
-           children: "To fix problems in the game, we record some visits to Bloxd by players of any age, guests too, once you have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web browser and in our Android and iOS apps, never in our desktop apps or on other we … [truncated]
-         }), (0, pB.jsx)("p", {
-           children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus  … [truncated]
-         }), (0, pB.jsx)("p", {
-           children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID. It also keeps a scrambled code made from your internet (IP) address, never the address itself, and whether your network looks shared by many people, su … [truncated]
-         }), (0, pB.jsx)("p", {
-           children: "Why: to fix problems in the game, which is in our legitimate interest. Only Bloxd staff can watch recordings, and we never use one to make decisions about anyone, such as bans. If a recording shows a bug, our staff may look at your other recordings, and may k … [truncated]
-         }), (0, pB.jsx)("p", {
-           children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
-         }), (0, pB.jsx)(SB, {}), (0, pB.jsx)("p", {
-           children: "Where they\u2019re kept: recordings are stored with Amazon Web Services, and their events in our analytics database at DigitalOcean, both in the United States. Our staff tool at Hetzner in Finland processes them and lets staff watch them (section 2.6). Sectio … [truncated]
- ... (14 more removed lines; see GitHub link above)
+       if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return EW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1486-L1495` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L204-L205) · [Before (L1486-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1486-L1495)

```diff
-     function UB() {
-       return (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, pB.jsx)("h3", {
-           children: "2.6 Our Staff Analytics Tool"
-         }), (0, pB.jsx)("p", {
-           children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use B … [truncated]
-         }), (0, pB.jsx)("p", {
-           children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, save … [truncated]
-         })]
-       })
+     function EW(WW) {
+       return WW === mW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1498-L1578` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L208-L209) · [Before (L1498-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1498-L1578)

```diff
-     function fB() {
-       return (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, pB.jsx)("h2", {
-           children: "8. Your Rights"
-         }), (0, pB.jsx)("h3", {
-           children: "8.1 Your Choices and Control"
-         }), (0, pB.jsx)("p", {
-           children: "As a user of Bloxd.io, you have the right to:"
-         }), (0, pB.jsxs)("ul", {
-           children: [(0, pB.jsx)("li", {
-             children: "Access Your Data: Request a copy of the personal information we hold about you."
-           }), (0, pB.jsx)("li", {
-             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
-           }), (0, pB.jsx)("li", {
-             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
-           }), (0, pB.jsx)("li", {
- ... (65 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return [...WW.features]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1580` → after: `L211-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L211-L213) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1580)

```diff
-     var kB = GB(7062);
+     const PW = 262144,
+       LW = 256,
+       cW = 256;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1582-L1810` → after: `L215-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L215-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L215-L240) · [Before (L1582-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1582-L1810)

```diff
-     function dB() {
-       const {
-         t: BB
-       } = (0, DB.H)(), OB = !(0, oB.shouldUseUkPrivacyPolicy)(), GB = zB.d ? "2.7" : "2.5";
-       return (0, pB.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, pB.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: BB("homePage:privacyPolicy")
-         }), (0, pB.jsx)("p", {
-           children: (0, pB.jsxs)("em", {
-             children: ["Last updated: ", PB.f.toLocaleDateString()]
-           })
-         }), (0, pB.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, pB.jsx)("h2", {
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1813-L1830` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L243-L246) · [Before (L1813-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1813-L1830)

```diff
-     function KB() {
-       const {
-         adMobPrivacyOptionsRequired: BB
-       } = (0, JB.o)(["adMobPrivacyOptionsRequired"]);
-       if (!BB) return null;
-       return (0, pB.jsx)(jB.f, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await MB.e.request("ads.showPrivacyOptions", {})
-             } catch (BB) {
-               console.error("Failed to open AdMob privacy options:", BB)
-             }
-           })()
-         },
- ... (2 more removed lines; see GitHub link above)
+     function tW(WW) {
+       const iW = {};
+       for (const OW of WW) iW[OW.path] = OW.source;
+       return iW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1833-L1845` → after: `L249-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L249-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L249-L346) · [Before (L1833-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1833-L1845)

```diff
-     function uB() {
-       return (0, YB.useEffect)((() => {
-         const BB = window.location.hash.slice(1);
-         var OB;
-         "" !== BB && (null === (OB = document.getElementById(BB)) || void 0 === OB || OB.scrollIntoView())
-       }), []), (0, pB.jsxs)(pB.Fragment, {
-         children: [(0, QB.isDiscordClient)() && (0, pB.jsx)(pB.Fragment, {
-           children: (0, pB.jsx)(jB.f, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, yB.q)()
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1847-L1850` → after: `L348-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L348-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/137.js#L348-L368) · [Before (L1847-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/137.js#L1847-L1850)

```diff
-         }), (0, pB.jsx)(KB, {}), (0, pB.jsx)(lB.d, {
-           className: "PrivacyPolicyLinks"
-         }), (0, pB.jsx)(dB, {})]
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/138.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/138.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/138.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/138.js#L2)

```diff
- export const ids = [138];
+ export const ids = [138, 139, 159];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/138.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/138.js#L4)

```diff
-   7062: (BB, OB, GB) => {
+   5961: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L6-L7` → after: `L6-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L6-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/138.js#L6-L137) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/138.js#L6-L7)

```diff
-       WorldCodeAiChatGptNotice: () => MB,
-       WorldCodeAiDeepSeekNotice: () => JB,
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
+ ... (116 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L9-L43` → after: `L139-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L139-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/138.js#L139-L313) · [Before (L9-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/138.js#L9-L43)

```diff
-       h: () => yB,
-       j: () => jB
-     });
-     var YB = GB(1175),
-       DB = GB(7067),
-       QB = GB(1282);
-     const oB = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       jB = "https://openai.com/policies/terms-of-use/",
-       yB = "https://openai.com/policies/privacy-policy/";
- 
-     function JB() {
-       const {
-         t: BB
-       } = (0, YB.H)();
-       return (0, QB.jsxs)(QB.Fragment, {
-         children: [BB("superBotXd:deepSeekNotice"), " ", (0, QB.jsx)(DB.c, {
- ... (19 more removed lines; see GitHub link above)
+       i: () => PW,
+       l: () => mW,
+       o: () => bW,
+       p: () => ZW,
+       r: () => EW,
+       v: () => NW,
+       x: () => wW
+     });
+     const mW = 5;
+ 
+     function EW(WW) {
+       return WW === mW
+     }
+ 
+     function NW(WW) {
+       return [...WW.features]
+ ... (159 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/139.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/139.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/139.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/139.js#L2)

```diff
- export const ids = [139];
+ export const ids = [139, 159];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/139.js#L4)

```diff
-   7076: (BB, OB, GB) => {
+   7637: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/139.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/139.js#L6)

```diff
-       default: () => QB
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L8-L9` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/139.js#L9-L11) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L9)

```diff
-     var YB = GB(1175),
-       DB = GB(1282);
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L12-L22` → after: `L14-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L14-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/139.js#L14-L186) · [Before (L12-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/139.js#L12-L22)

```diff
-       const {
-         t: BB
-       } = (0, YB.H)();
-       return (0, DB.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, DB.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: BB("homePage:termsOfService")
-         }), (0, DB.jsx)("p", {
-           children: (0, DB.jsx)("em", {
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

#### 6. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L24-L221` → after: `L188-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L188-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/139.js#L188-L208) · [Before (L24-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/139.js#L24-L221)

```diff
-         }), (0, DB.jsx)("p", {
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, DB.jsx)("h3", {
-           children: "1. General Information"
-         }), (0, DB.jsx)("p", {
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
-         }), (0, DB.jsx)("h3", {
-           children: "2. Definitions"
-         }), (0, DB.jsx)("p", {
-           children: (0, DB.jsxs)("ul", {
-             children: [(0, DB.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, DB.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, DB.jsx)("li", {
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/140.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/140.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L6` → after: `L15830-L18148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L15830-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L15830-L18148) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L6)

```diff
-       default: () => ZB
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

#### 2. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L8-L17` → after: `L18150-L18160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R18150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L18150-L18160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L18150-L18160) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L17)

```diff
-     var YB = GB(1571),
-       DB = GB(1606),
-       QB = GB(3370),
-       oB = GB(2454),
-       jB = GB(1485),
-       yB = GB(1560),
-       JB = GB(1112),
-       MB = GB(56),
-       PB = GB(1383),
-       zB = GB(1282);
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L20-L35` → after: `L18163-L18224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L18163-L18224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L18163-L18224) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L20-L35)

```diff
-       let {
-         iconName: OB,
-         iconCountPerGroup: GB,
-         animation: YB,
-         midShowerStart: DB = !1,
-         customClass: QB
-       } = BB;
-       const [oB, jB] = (0, MB.useState)({});
-       return (0, MB.useEffect)((() => {
-         const BB = {};
-         for (const OB of Array.from(Array(3).keys())) {
-           BB[OB] = [];
-           for (let YB = 0; YB < GB; YB++) BB[OB].push({
-             left: 100 * Math.random() + "%",
-             animationDelay: 20 * Math.random() * (DB ? -1 : 1) + "s"
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L37-L50` → after: `L18226-L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R18226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L18226-L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L18226-L18308) · [Before (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L37-L50)

```diff
-         jB(BB)
-       }), [GB, DB]), (0, zB.jsx)("div", {
-         className: `IconShower IconShowerAnimation${YB} ${null!==QB&&void 0!==QB?QB:""}`,
-         children: Object.keys(oB).map((BB => oB[BB].map((GB => (0, zB.jsx)("div", {
-           className: `Icon IconGroup${BB}`,
-           style: {
-             left: GB.left,
-             animationDelay: GB.animationDelay
-           },
-           children: (0, zB.jsx)(PB.b, {
-             name: OB
-           })
-         }, GB.left)))))
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L55-L63` → after: `L18311-L18337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R18311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L18311-L18337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L18311-L18337) · [Before (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L55-L63)

```diff
-     function ZB() {
-       var BB;
-       const {
-         t: OB
-       } = (0, pB.H)(), {
-         pack: GB
-       } = (0, YB.A)(), {
-         userContext: MB
-       } = (0, JB.d)();
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

#### 6. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L65-L67` → after: `L18339-L19183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R18339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L18339-L19183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L18339-L19183) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L65-L67)

```diff
-         const BB = DB.d[GB];
-         if (null === BB || void 0 === BB || !BB.purchasable) return (0, zB.jsx)(yB.NavigatePreserveSearch, {
-           to: "/"
+         if ("string" === typeof WW) return ZP(WW, iW);
+         var OW = Object.prototype.toString.call(WW).slice(8, -1);
+         return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? ZP(WW, iW) : void 0
+       }
+     }
+ 
+     function ZP(WW, iW) {
+       (null == iW || iW > WW.length) && (iW = WW.length);
+       for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
+       return mW
+     }
+ 
+     function xP(WW) {
+       var iW = wP(WW, 2),
+         OW = iW[0],
+         mW = iW[1],
+ ... (829 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L70-L106` → after: `L19186-L19871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R19186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L19186-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/140.js#L19186-L19871) · [Before (L70-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/140.js#L70-L106)

```diff
-       const ZB = GB ? DB.d[GB] : null,
-         NB = GB ? QB.k[(0, oB.l)(GB)] : null,
-         RB = void 0 !== (null === ZB || void 0 === ZB ? void 0 : ZB.characterSet) || null !== ZB && void 0 !== ZB && ZB.singleItem ? ZB.displayName : `${null!==(BB=null===ZB||void 0===ZB?void 0:ZB.displayName)&&void 0!==BB?BB:GB} Pack`,
-         WB = Date.now(),
-         AB = OB((0, qB.u)(WB).nameKey),
-         VB = ZB ? `Your ${RB} is Ready!` : `Welcome To ${AB}!`,
-         SB = ZB ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
-         nB = ZB ? !MB.getOwnedCosmeticPacks().includes(GB) : !(0, qB.k)(MB.getPlayerRanks(), WB),
-         UB = ZB ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${AB} instantly, but it could take up to an hour to apply. If you don't have ${AB} after an hour,  … [truncated]
-       return (0, zB.jsxs)("div", {
-         className: "PurchaseWelcome AnimFadeInScaleUp",
-         children: [NB && (0, zB.jsx)(NB, {}), !ZB && (0, zB.jsx)(lB, {
-           iconName: "bolt",
-           iconCountPerGroup: 10,
-           animation: "Fall",
-           midShowerStart: !0,
- ... (21 more removed lines; see GitHub link above)
+   },
+   7098: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => xW,
+       g: () => ZW
+     });
+     var mW = OW(6940);
+ 
+     function EW(WW) {
+       return EW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
+         return typeof WW
+       } : function(WW) {
+         return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
+       }, EW(WW)
+     }
+ 
+ ... (670 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 1. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/141.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/141.js#L4)

```diff
-   7090: (BB, OB, GB) => {
+   7416: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L6` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/141.js#L7-L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/141.js#L6)

```diff
-       default: () => zB
+       Graph: () => fW,
+       debug: () => oO,
+       default: () => eO,
+       graphlib: () => NW,
+       layout: () => bO,
+       util: () => dO,
+       version: () => Ni
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L8-L25` → after: `L15-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L15-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/141.js#L15-L511) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/141.js#L8-L25)

```diff
-     var YB = GB(1375),
-       DB = GB(56),
-       QB = GB(98),
-       oB = GB(1571),
-       jB = GB(1225),
-       yB = GB(331),
-       JB = GB(662);
-     const MB = new URL(jB.n[yB.c.PRODUCTION]).origin;
-     var PB = GB(1282);
- 
-     function zB() {
-       const BB = (0, oB.A)();
-       return (0, DB.useEffect)((() => {
-         const OB = QB.currentUrl.getSearchParam("code");
-         QB.currentUrl.removeSearchParam("code"), null === OB && (console.error("No authorization code found in the URL"), window.close());
-         const GB = {
- ... (2 more removed lines; see GitHub link above)
+     var mW = Object.defineProperty,
+       EW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? mW(WW, iW, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: OW
+       }) : WW[iW] = OW)(WW, "symbol" != typeof iW ? iW + "" : iW, OW),
+       NW = {};
+     ((WW, iW) => {
+       for (var OW in iW) mW(WW, OW, {
+         get: iW[OW],
+         enumerable: !0
+       })
+     })(NW, {
+       Graph: () => fW,
+       alg: () => UW
+ ... (481 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L27` → after: `L513-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L513-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/141.js#L513-L618) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/141.js#L27)

```diff
-         for (const BB of (DB = window.location.origin) === MB ? [DB, `https://${JB.b}`] : [DB]) {
+         if (OW.push(PW), null == (LW = WW.successors(PW)) || LW.forEach((function(WW) {
+             if (WW in mW) {
+               let iW = mW[WW];
+               null != iW && iW.onStack && (cW.lowlink = Math.min(cW.lowlink, iW.index))
+             } else {
+               NW(WW);
+               let iW = mW[WW];
+               iW && (cW.lowlink = Math.min(cW.lowlink, iW.lowlink))
+             }
+           })), cW.lowlink === cW.index) {
+           let WW, iW = [];
+           do {
+             WW = OW.pop();
+             let EW = mW[WW];
+             EW && (EW.onStack = !1), iW.push(WW)
+           } while (PW !== WW);
+ ... (90 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L29` → after: `L620-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L620-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/141.js#L620-L660) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/141.js#L29)

```diff
-           null === (YB = window.opener) || void 0 === YB || YB.postMessage(GB, BB)
+           return null != (OW = WW.isDirected() ? WW.successors(iW) : WW.neighbors(iW)) ? OW : []
+         },
+         PW = {};
+       return iW.forEach((function(iW) {
+         if (!WW.hasNode(iW)) throw new Error("Graph does not have node: " + iW);
+         EW = eW(WW, iW, "post" === OW, PW, NW, mW, EW)
+       })), EW
+     }
+ 
+     function eW(WW, iW, OW, mW, EW, NW, PW) {
+       return iW in mW || (mW[iW] = !0, OW || (PW = NW(PW, iW)), EW(iW).forEach((function(iW) {
+         PW = eW(WW, iW, OW, mW, EW, NW, PW)
+       })), OW && (PW = NW(PW, iW))), PW
+     }
+ 
+     function vW(WW, iW, OW) {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L32-L39` → after: `L704-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L704-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/141.js#L704-L1303) · [Before (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/141.js#L32-L39)

```diff
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, PB.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, PB.jsx)(YB.b, {
-           showFace: !0,
-           loading: !0
+         return null != (OW = WW.outEdges(iW)) ? OW : []
+       })
+     }
+     var fW = cW;
+ 
+     function CW(WW, iW, OW, mW) {
+       let EW = mW;
+       for (; WW.hasNode(EW);) EW = QW(mW);
+       return OW.dummy = iW, WW.setNode(EW, OW), EW
+     }
+ 
+     function XW(WW) {
+       let iW = new fW({
+         multigraph: WW.isMultigraph()
+       }).setGraph(WW.graph());
+       return WW.nodes().forEach((OW => {
+ ... (584 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/142.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/142.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088)

#### 1. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L4-L32` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L7) · [Before (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L32)

```diff
-   7093: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => gB
-     });
-     var YB = GB(56),
-       DB = GB(1571),
-       QB = GB(1090),
-       oB = GB.n(QB),
-       jB = GB(331),
-       yB = GB(7107),
-       JB = GB(1383),
-       MB = GB(1560),
-       PB = GB(4975),
-       zB = GB(1485),
-       lB = GB(3544),
-       pB = GB(4982),
- ... (13 more removed lines; see GitHub link above)
+   37898: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW) {
+       return !(OW && !WW.aimable) && (!iW || WW.gun && "head" !== mW)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L35-L67` → after: `L10-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L10-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L10-L3364) · [Before (L35-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L35-L67)

```diff
-       let {
-         pack: OB,
-         view: GB,
-         favourite: YB,
-         notice: DB
-       } = BB;
-       const {
-         width: QB,
-         height: jB
-       } = yB.t.thumb, {
-         live: PB
-       } = OB;
-       return (0, dB.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, dB.jsxs)("div", {
-           className: "ShaderPackCardTile",
- ... (17 more removed lines; see GitHub link above)
+       return Math.max(.1 * WW, 1)
+     }
+ 
+     function NW(WW, iW) {
+       return !WW && iW
+     }
+     OW.d(iW, {
+       d: () => NW,
+       f: () => EW,
+       i: () => mW
+     })
+   },
+   37902: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => LW,
+       h: () => PW
+ ... (3339 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L69-L97` → after: `L3366-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3366-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3366-L3742) · [Before (L69-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L69-L97)

```diff
-             }), (0, dB.jsxs)("div", {
-               className: "ShaderPackCardText",
-               children: [DB && (0, dB.jsx)("div", {
-                 className: oB()("ShaderPackCardNotice", {
-                   Warning: "warning" === DB.tone
-                 }),
-                 children: DB.text
-               }), (0, dB.jsx)("div", {
-                 className: "ShaderPackCardName SmallTextBold",
-                 children: OB.name
-               })]
-             })]
-           }), PB && (0, dB.jsxs)("div", {
-             className: "ShaderPackCardStats",
-             children: [(0, dB.jsxs)("div", {
-               className: "ShaderPackCardUses SmallTextBold",
- ... (13 more removed lines; see GitHub link above)
+             }
+           WW[OW] = {
+             positions: NW
+           }
+         }
+         return WW
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
+ ... (361 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L101-L106` → after: `L3879-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3879-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3879-L3880) · [Before (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L101-L106)

```diff
-         results: OB,
-         loading: GB,
-         failed: YB,
-         onRetry: DB,
-         view: QB,
-         previewView: jB
+         dx: iW,
+         dz: OW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L108-L154` → after: `L3882-L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3882-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3882-L3887) · [Before (L108-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L108-L154)

```diff
-       const {
-         t: yB
-       } = (0, SB.H)(), JB = (0, uB.k)(), MB = Date.now(), PB = null === OB ? 0 : "owned" === OB.kind ? OB.packs.length : OB.page.results.length;
-       return (0, dB.jsxs)("div", {
-         className: oB()("ShaderPackBrowseResults", {
-           Loading: GB && null !== OB
-         }),
-         children: [GB && null === OB && (0, dB.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: (0, dB.jsx)(nB.b, {})
-         }), YB && (0, dB.jsxs)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: [yB("shaderPackListing:loadFailed"), (0, dB.jsx)(zB.f, {
-             onClick: DB,
-             children: yB("general:tryAgain")
-           })]
- ... (31 more removed lines; see GitHub link above)
+       return [iW, 0, OW]
+     }));
+ 
+     function LW(WW) {
+       const iW = mW.j[WW];
+       return !!iW && WW !== mW.d && !iW.model && !iW.dl && !1 !== iW.solid && !iW.sj
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L158` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3966) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L158)

```diff
-       return "mine" === BB.section ? "shaderPackListing:noOwnPacks" : (0, fB.q)(BB) ? "general:noResults" : "favourites" === BB.section ? "shaderPackListing:noFavourites" : "general:noResults"
+       return PW <= WW && WW <= LW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L160-L165` → after: `L3968-L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3968-L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3968-L3972) · [Before (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L160-L165)

```diff
-     var FB = GB(7125);
-     const iB = 24,
-       LB = {
-         favourites: "general:favourites",
-         mine: "shaderPackListing:mine"
-       };
+     const wW = new Uint8Array(LW - PW + 1);
+     for (let TW = PW; TW <= LW; TW++) wW[TW - PW] = (0, EW.w)(mW.j[TW].meta.metaStr);
+     const tW = 64,
+       ZW = tW * tW,
+       [xW, lW, AW, bW] = [0, 1, 2, 3];
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L167-L180` → after: `L3974-L3991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3974-L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3974-L3991) · [Before (L167-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L167-L180)

```diff
-     function gB() {
-       var BB, OB, GB, QB;
-       const {
-         t: nB
-       } = (0, SB.H)(), UB = (0, MB.useNavigatePreserveSearch)(), kB = (0, DB.r)(), {
-         userContext: KB,
-         isUserContextUpdating: IB
-       } = (0, NB.d)(), [gB, rB] = (0, uB.i)(), [XB, wB] = (0, uB.e)(), EB = (0, YB.useRef)(!1), [cB, hB] = (0, PB.l)(), aB = (0, fB.C)(cB), [eB, TB] = (0, YB.useState)(null !== (BB = aB.searchQuery) && void 0 !== BB ? BB : ""), bB = (0, YB.useRef)(null), {
-         searchQuery: CB
-       } = aB;
-       (0, YB.useEffect)((() => {
-         TB(null !== CB && void 0 !== CB ? CB : ""), bB.current && (bB.current.value = null !== CB && void 0 !== CB ? CB : "")
-       }), [CB]);
-       const [HB, vB] = (0, YB.useState)(null), [sB, xB] = (0, YB.useState)(!1), [tB, BO] = (0, YB.useState)(!1), [OO, GO] = (0, YB.useState)(0), YO = (0, YB.useRef)(0), DO = JSON.stringify(aB), QO = (0, fB.j)();
+     function jW(WW) {
+       var iW, OW;
+       return "string" === typeof(null === WW || void 0 === WW || null === (iW = WW.persisted) || void 0 === iW || null === (OW = iW.shared) || void 0 === OW ? void 0 : OW.text)
+     }
+ 
+     function UW(WW) {
+       return jW(WW) && "" !== WW.persisted.shared.text.trim()
+     }
+ 
+     function kW(WW, iW) {
+       let [OW, , mW] = iW;
+       const [NW, , PW] = EW.y[WW][lW];
+       return OW * NW + mW * PW
+     }
+ 
+     function sW(WW, iW, OW) {
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L182-L186` → after: `L3993-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R3993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L3993-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L3993-L4025) · [Before (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L182-L186)

```diff
-       function oO() {
-         null !== QO ? (UB(QO), RB.c.set({
-           openEverythingMenuName: jB.p.SETTINGS,
-           openSettingsCategory: "zp"
-         })) : UB("/")
+     function MW(WW, iW, OW, NW, LW) {
+       var cW;
+       let tW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW(iW[0], iW[1], iW[2]);
+       if (!(wW[tW - PW] & 1 << OW)) return null;
+       const [ZW, xW, lW] = EW.y[LW][OW], AW = [iW[0] + ZW, iW[1] + xW, iW[2] + lW], bW = WW(AW[0], AW[1], AW[2]), jW = null === (cW = mW.j[bW]) || void 0 === cW ? void 0 : cW.meta;
+       return (null === jW || void 0 === jW ? void 0 : jW.rootId) === NW && jW.rot === LW && wW[bW - PW] & 1 << (1 ^ OW) ? AW : null
+     }
+ 
+     function KW(WW, iW, OW, NW) {
+       const PW = WW(iW, OW, NW);
+       if (!cW(PW)) return null;
+       const {
+         rootId: LW,
+         rot: wW
+       } = mW.j[PW].meta, ZW = (iW, OW) => {
+         let mW = iW,
+ ... (17 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L189-L196` → after: `L4046-L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4046-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4046-L4072) · [Before (L189-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L189-L196)

```diff
-       function jO(BB) {
-         hB((OB => {
-           (0, fB.lb)(OB, {
-             ...aB,
-             pageNumber: 1,
-             ...BB
-           })
-         }))
+     function YW(WW, iW, OW, EW, NW) {
+       const PW = WW(OW, EW, NW);
+       if (!cW(PW)) return null;
+       const {
+         rootId: LW,
+         rot: wW
+       } = mW.j[PW].meta, tW = [
+         [OW, EW, NW]
+       ], xW = new Set([tW[0].join()]);
+       let lW = tW[0],
+         AW = null;
+       for (let mW = 0; mW < tW.length; mW++) {
+         const OW = tW[mW];
+         if (sW(wW, OW, lW) < 0 && (lW = OW), jW(iW(OW[0], OW[1], OW[2]))) {
+           const iW = KW(WW, OW[0], OW[1], OW[2]);
+           (!AW || sW(wW, iW.anchor, AW.anchor) < 0) && (AW = iW)
+ ... (11 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L199-L205` → after: `L4076-L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4076-L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4076-L4261) · [Before (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L199-L205)

```diff
-       function yO() {
-         const BB = eB.trim() || null;
-         jO({
-           searchQuery: BB,
-           ...null !== BB && !EB.current && (0, fB.n)(aB) && {
-             withFeatures: [],
-             withoutFeatures: []
+     function yW(WW, iW, OW, PW, LW) {
+       if (null !== OW && cW(OW)) {
+         const {
+           rootName: WW,
+           rot: iW
+         } = mW.j[OW].meta;
+         if (EW.y[iW].some((WW => {
+             let [iW, OW, mW] = WW;
+             return iW === PW[0] && OW === PW[1] && mW === PW[2]
+           }))) return {
+           root: WW,
+           rot: iW
+         }
+       }
+       const [wW, tW] = EW.r[LW], ZW = WW(iW[0] - wW, iW[1], iW[2] - tW);
+       return {
+ ... (170 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L207-L231` → after: `L4263-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4263-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4263-L4269) · [Before (L207-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L207-L231)

```diff
-         })
-       }(0, ZB.e)(oO), (0, uB.c)(), (0, YB.useEffect)((() => {
-         if (IB) return;
-         const BB = ++YO.current,
-           OB = JSON.parse(DO);
-         xB(!0), BO(!1), async function(BB) {
-           if ("mine" === BB.section) return {
-             kind: "owned",
-             packs: await WB.b.getOwnedShaderPacks(KB)
-           };
-           const OB = "favourites" === BB.section,
-             GB = OB && (0, fB.n)(BB),
-             YB = await WB.b.getShaderPacks(KB, {
-               sort: OB ? fB.c : BB.sort,
-               features: GB ? [] : BB.withFeatures,
-               withoutFeatures: GB ? [] : BB.withoutFeatures,
- ... (9 more removed lines; see GitHub link above)
+         },
+         "Iron Mining Drill": {
+           ...tW,
+           meshItemName: "INTERNAL_MESH_Iron Mining Drill",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.IRON_MINING_DRILL
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L233-L407` → after: `L4271-L4292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4271-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4271-L4292) · [Before (L233-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L233-L407)

```diff
-         }(OB).then((OB => {
-           YO.current === BB && vB(OB)
-         })).catch((OB => {
-           YO.current === BB && (console.error("Failed to get shader packs", OB), vB(null), BO(!0))
-         })).finally((() => {
-           YO.current === BB && xB(!1)
-         }))
-       }), [DO, KB, IB, OO]);
-       const [JO, MO] = (0, YB.useState)(null), PO = null !== (GB = null === (QB = ("listing" === (null === HB || void 0 === HB ? void 0 : HB.kind) ? HB.page.results : (null !== (OB = null === HB || void 0 === HB ? void 0 : HB.packs) && void 0 !== OB ? OB : []).flatMap((BB => BB.l … [truncated]
-       (0, YB.useEffect)((() => {
-         null !== PO && MO(PO)
-       }), [PO]);
-       const zO = "mine" === aB.section,
-         lO = (0, fB.p)(KB),
-         pO = BB => {
-           "explore" !== aB.section && (BB.stopPropagation(), BB.preventDefault(), jO({
- ... (159 more removed lines; see GitHub link above)
+         },
+         "Diamond Mining Drill": {
+           ...tW,
+           meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.DIAMOND_MINING_DRILL
+           }
+         },
+         "Moonstone Mining Drill": {
+           ...tW,
+           meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.MOONSTONE_MINING_DRILL
+           }
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L409-L418` → after: `L4294-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4294-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4294-L4309) · [Before (L409-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L409-L418)

```diff
-           view: aB,
-           previewView: gB
-         }), "listing" === (null === HB || void 0 === HB ? void 0 : HB.kind) && (0, dB.jsx)(pB.b, {
-           className: "ShaderPackBrowsePagination",
-           page: HB.page.pageNumber,
-           totalPages: HB.page.totalPages,
-           onSetPage: BB => {
-             hB((OB => {
-               (0, PB.k)(OB, BB)
-             }))
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
+         "Light Blue Car": {
+           meshItemName: "INTERNAL_MESH_Car",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.CAR
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L420-L424` → after: `L4311-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4311-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4311-L4372) · [Before (L420-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L420-L424)

```diff
-           getPageHref: function(BB) {
-             const OB = new URLSearchParams(cB);
-             (0, PB.k)(OB, BB);
-             const GB = OB.toString();
-             return GB ? `${kB.pathname}?${GB}` : kB.pathname
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null
+         }
+       },
+       xW = Object.values(ZW).map((WW => WW.meshItemName));
+ 
+     function lW(WW) {
+       for (const iW of EW.c)
+         if (ZW[iW].meshItemName === WW) return iW;
+       return null
+     }
+ 
+     function AW(WW, iW) {
+       const OW = WW.validBlockIds;
+       if (Array.isArray(OW)) return OW.includes(iW);
+ ... (46 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L426-L427` → after: `L4374-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4374-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/142.js#L4374-L4573) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/142.js#L426-L427)

```diff
-         })]
-       })
+         },
+         "Orange Balloon": {
+           ...bW,
+           physicsState: {
+             type: mW.p.BALLOON,
+             tier: mW.d.ORANGE
+           }
+         },
+         "Magenta Balloon": {
+           ...bW,
+           physicsState: {
+             type: mW.p.BALLOON,
+             tier: mW.d.MAGENTA
+           }
+         },
+         "Lime Balloon": {
+ ... (184 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/143.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/143.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/143.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/143.js#L4)

```diff
-   7113: (BB, OB, GB) => {
+   7459: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/143.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/143.js#L6)

```diff
-       b: () => jB
+       c: () => mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L286-L396` → after: `L9-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L9-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/143.js#L9-L47) · [Before (L286-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/143.js#L286-L396)

```diff
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       LB = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
-       };
- 
-     function gB(BB) {
-       return Math.round(100 * Math.max(0, 1 - 1 / BB))
-     }
- 
- ... (95 more removed lines; see GitHub link above)
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+       musicVolumeLevel: .6,
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L399-L439` → after: `L50-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L50-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/143.js#L50-L172) · [Before (L399-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/143.js#L399-L439)

```diff
-       QB = ["popular", "updated", "newest"],
-       oB = 3,
-       jB = 32,
-       yB = 300;
- 
-     function JB(BB, OB) {
-       return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const MB = 64,
-       PB = 512,
-       zB = 18e5;
- 
-     function lB(BB) {
-       const OB = BB,
-         GB = null === OB || void 0 === OB ? void 0 : OB.files;
-       return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof … [truncated]
- ... (25 more removed lines; see GitHub link above)
+       canCustomiseChar: !0,
+       defaultBlock: "Block of Gold",
+       cantChangeError: "You cannot modify this block",
+       cantBreakError: null,
+       cantBuildError: null,
+       touchscreenActionButton: null,
+       strictFluidBuckets: !0,
+       preserveProtectedFluidSources: !1,
+       fillBrokenBlocksWithWater: !1,
+       fluidFlow: !1,
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       survivalOnboarding: null,
+       middleTextTop: "",
+ ... (107 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/144.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/144.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L2)

```diff
- export const ids = [144];
+ export const ids = [144, 714];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L4)

```diff
-   42069: (BB, OB, GB) => {
+   37468: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L6)

```diff
-       ShaderPackCategory: () => IB
+       default: () => Di
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L8-L31` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L8-L18) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L8-L31)

```diff
-     var YB = GB(56),
-       DB = GB(1571),
-       QB = GB(1485),
-       oB = GB(1560),
-       jB = GB(1175),
-       yB = GB(92),
-       JB = GB(16),
-       MB = GB(1699),
-       PB = GB(7159),
-       zB = GB(320),
-       lB = GB(7193),
-       pB = GB(7186),
-       qB = GB(7198),
-       ZB = GB(7099),
-       NB = GB(5480),
-       RB = GB(5531),
- ... (8 more removed lines; see GitHub link above)
+     var mW = OW(327),
+       EW = OW(4746),
+       NW = OW(4787),
+       PW = OW(4779),
+       LW = OW(4776),
+       cW = OW(1172),
+       wW = OW(39),
+       tW = OW(1856),
+       ZW = OW(1434),
+       xW = OW(1532),
+       lW = OW(1089),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L33` → after: `L20-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L20-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L20-L34) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L33)

```diff
-       UB = GB(5538),
+       bW = OW(1782),
+       jW = OW(62),
+       UW = OW(80),
+       kW = OW(3245),
+       sW = OW(1365),
+       MW = OW(1713),
+       KW = OW(1107),
+       SW = OW(4619),
+       YW = OW(5261),
+       yW = OW(3582),
+       TW = OW(2021),
+       JW = OW(4738),
+       hW = OW(1873),
+       HW = OW(1584),
+       nW = OW(2991),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L35-L100` → after: `L36-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L36-L40) · [Before (L35-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L35-L100)

```diff
-       kB = GB(7147),
-       dB = GB(1282);
-     const KB = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
-       wrongApiVersion: "shaderPack:statusWrongApiVersion",
-       checking: "shaderPack:statusChecking",
-       unchecked: "shaderPack:statusUnchecked",
-       noCompiler: "shaderPack:statusNoCompiler"
-     };
- 
-     function uB(BB, OB) {
- ... (50 more removed lines; see GitHub link above)
+       oW = OW(3610),
+       dW = OW(4171),
+       eW = OW(1283);
+     const vW = 15e3,
+       gW = 2500;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L104` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L45) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L104)

```diff
-         setApplySettingsCallback: OB
+         eventName: OW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L108-L134` → after: `L49-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L49-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L49-L59) · [Before (L108-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L108-L134)

```diff
-       } = (0, jB.H)(), [DB, oB] = (0, YB.useState)(null), [JB, MB] = (0, YB.useState)(null), [AB, SB] = (0, YB.useState)(null), [nB] = (0, YB.useState)(zB.l), [UB, fB] = (0, YB.useState)(!0), [kB, KB] = (0, YB.useState)(!1), {
-         loading: uB,
-         error: IB,
-         setError: iB,
-         onFiles: LB
-       } = (0, WB.e)((async BB => {
-         const OB = await (0, PB.loadPageShaderPackCompiler)();
-         if (!OB) return void iB(GB("shaderPack:compilerUnavailable"));
-         MB(OB);
-         const YB = (0, lB.toStoredShaderPack)(BB, await (0, pB.f)(OB, BB.files));
-         await (0, lB.saveShaderPack)(YB, OB) ? (oB(YB), gB(DB, YB, OB)) : iB(GB("shaderPack:saveFailed"))
-       }));
- 
-       function gB(BB, GB, YB) {
-         (function(BB, OB, GB, YB) {
-           return GB || VB(BB, YB) || VB(OB, YB)
- ... (11 more removed lines; see GitHub link above)
+       } = (0, cW.B)(), EW = hW.d[OW], [NW, PW] = (0, jW.useState)((() => Date.now() >= EW.endsAt.getTime())), [LW, wW] = (0, jW.useState)("overall"), tW = function(WW, iW) {
+         const {
+           userContext: OW,
+           isUserContextUpdating: mW
+         } = (0, KW.e)(), EW = `${WW}:${iW}`, [NW, PW] = (0, jW.useState)({
+           requestKey: EW,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, jW.useEffect)((() => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L136-L140` → after: `L61-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L61-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L61-L86) · [Before (L136-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L136-L140)

```diff
-           SB(DB);
-           const QB = await YB;
-           if (!BB && (MB(QB), null !== GB && DB && null !== QB && (0, lB.shaderPackNeedsCheck)(GB, QB))) {
-             const OB = await (0, pB.d)(GB, QB);
-             BB || oB((BB => BB === GB ? OB : BB))
+           let NW, LW = !1;
+           const cW = async () => {
+             if ("visible" === document.visibilityState) try {
+               const mW = await HW.e.getGameEventLeaderboard(OW, {
+                 event: WW,
+                 scope: iW
+               });
+               LW || PW({
+                 requestKey: EW,
+                 leaderboard: {
+                   status: "loaded",
+                   leaderboard: mW
+                 }
+               })
+             } catch {
+               LW || PW((WW => WW.requestKey === EW && "loaded" === WW.leaderboard.status ? WW : {
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L142-L147` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L88-L89) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L142-L147)

```diff
-         }().catch((OB => {
-           console.error("Failed to load the stored shader pack", OB), BB || iB(GB("shaderPack:unexpectedError"))
-         })).finally((() => {
-           BB || (fB(!1), KB(!1))
-         })), () => {
-           BB = !0
+         }), [WW, iW, EW, OW, mW]), NW.requestKey === EW ? NW.leaderboard : {
+           status: "loading"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L149-L168` → after: `L91-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L91-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L91-L129) · [Before (L149-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L149-L168)

```diff
-       }), []), (0, dB.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, dB.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: GB("shaderPack:intro")
-         }), (0, dB.jsx)(FB, {
-           to: ZB.V,
-           className: "ShaderPackBrowseLink",
-           children: (0, dB.jsx)(QB.q, {
-             className: "ShaderPackBrowseButton",
-             children: GB("shaderPackListing:browse")
-           })
-         }), !1 === AB && (0, dB.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: GB(nB ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== IB && (0, dB.jsxs)("div", {
- ... (4 more removed lines; see GitHub link above)
+       }(OW, LW), ZW = function(WW) {
+         const iW = (0, jW.useRef)(null),
+           OW = (0, jW.useRef)(0),
+           mW = (0, jW.useRef)(),
+           [EW, NW] = (0, jW.useState)({});
+         return (0, jW.useEffect)((() => {
+           const EW = null === WW || void 0 === WW ? void 0 : WW.entries;
+           if (!EW) return;
+           const PW = new Map(EW.map((WW => [WW.player.name, WW.value]))),
+             LW = iW.current;
+           if (iW.current = PW, null === LW) return;
+           const cW = {};
+           for (const [WW, iW] of PW) {
+             const mW = LW.get(WW);
+             void 0 !== mW && iW > mW && (cW[WW] = {
+               amount: iW - mW,
+ ... (23 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L170` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L131) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L170)

```diff
-             className: "ShaderPackSummaryHeader",
+             className: "GameEventPanelInfo",
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L172-L189` → after: `L133-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L133-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L133-L240) · [Before (L172-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L172-L189)

```diff
-               children: [(0, dB.jsx)("div", {
-                 className: "ShaderPackName",
-                 children: DB.manifest.name
-               }), DB.manifest.author && (0, dB.jsx)("div", {
-                 className: "ShaderPackAuthor",
-                 children: (0, RB.j)(GB, "shaderPack:byAuthor", {
-                   author: DB.manifest.author
-                 })
-               }), DB.manifest.description && (0, dB.jsx)("div", {
-                 className: "ShaderPackDescription",
-                 children: DB.manifest.description
-               }), DB.listing && (0, dB.jsx)("div", {
-                 className: "ShaderPackAuthor",
-                 children: (0, dB.jsx)(FB, {
-                   to: (0, ZB.$)(DB.listing.packId),
-                   className: "ShaderPackListingLink",
- ... (2 more removed lines; see GitHub link above)
+               className: "GameEventPanelStatus",
+               children: [(0, eW.jsxs)("span", {
+                 className: "GameEventPanelLive",
+                 children: [(0, eW.jsx)("span", {
+                   className: "GameEventPanelLiveDot"
+                 }), mW("gameEvents:live")]
+               }), (0, eW.jsxs)("span", {
+                 className: "GameEventPanelEndsIn",
+                 children: [mW("gameEvents:endsIn"), (0, eW.jsx)(yW.c, {
+                   toTime: EW.endsAt,
+                   onReachEndOfCountdown: () => {
+                     PW(!0)
+                   }
+                 })]
+               })]
+             }), (0, eW.jsx)("h2", {
+ ... (92 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L206-L210` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L244) · [Before (L206-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L206-L210)

```diff
-         }), (0, dB.jsx)(WB.b, {
-           busy: UB || uB || kB,
-           disabled: UB || uB || kB || !0 !== AB,
-           onFiles: LB
-         })]
+         })
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L216-L218` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L250-L251) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L216-L218)

```diff
-         to: OB,
-         className: GB,
-         children: YB
+         event: iW,
+         progress: OW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L221-L233` → after: `L254-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L254-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L254-L291) · [Before (L221-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L221-L233)

```diff
-         gameState: QB
-       } = (0, JB.o)(["gameState"]), {
-         pathname: jB,
-         search: yB
-       } = (0, DB.r)(), PB = "landingPage" !== QB && "studio" !== QB;
-       return (0, dB.jsx)(oB.LinkPreserveSearch, {
-         to: OB,
-         className: GB,
-         target: PB ? "_blank" : void 0,
-         onClick: () => {
-           PB || ((0, ZB.E)(`${jB}${yB}`), (0, MB.f)())
-         },
-         children: YB
+         t: mW
+       } = (0, cW.B)(), EW = null !== OW && iW.prizeGoals.some(((WW, iW) => OW[iW] >= WW.target));
+       return (0, eW.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, eW.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: mW(EW ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, eW.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: iW.prizeGoals.map(((WW, iW) => {
+             const EW = null === OW ? null : Math.min(OW[iW], WW.target);
+             return (0, eW.jsxs)(jW.Fragment, {
+               children: [iW > 0 && (0, eW.jsx)("div", {
+                 className: "GameEventPanelGoalsOr",
+                 children: mW("gameEvents:goalsOr")
+               }), (0, eW.jsxs)("div", {
+ ... (22 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L236-L269` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L294-L298) · [Before (L236-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L236-L269)

```diff
-   },
-   7099: (BB, OB, GB) => {
-     GB.d(OB, {
-       $: () => yB,
-       C: () => dB,
-       E: () => MB,
-       H: () => uB,
-       L: () => qB,
-       P: () => XB,
-       R: () => gB,
-       V: () => oB,
-       X: () => rB,
-       ab: () => jB,
-       b: () => RB,
-       c: () => fB,
-       eb: () => iB,
- ... (18 more removed lines; see GitHub link above)
+     var pW = OW(1642),
+       fW = OW(1697),
+       CW = OW(1078),
+       XW = OW(754),
+       BW = OW(4718);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L272` → after: `L301-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L301-L394) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L272)

```diff
-       return `${oB}/${encodeURIComponent(BB)}`
+       let {
+         gameNameWithVariation: iW
+       } = WW;
+       const OW = (0, pW.B)(iW),
+         [mW, EW] = (0, jW.useState)(null);
+       if ((0, jW.useEffect)((() => {
+           if (!OW) return;
+           let WW = !0;
+           return (0, fW.g)(OW).then((iW => {
+             WW && EW(iW)
+           })).catch((WW => {
+             console.error(`Failed to load the page copy for ${OW.name}`, WW)
+           })), () => {
+             WW = !1
+           }
+         }), [OW]), !OW || !mW || mW.name !== OW.name) return null;
+ ... (78 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L274` → after: `L396-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L396-L418) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L274)

```diff
-     let JB = null;
+     var RW = OW(1391),
+       GW = OW(100),
+       IW = OW(1111),
+       aW = OW(35272),
+       rW = OW(1747),
+       zW = OW(1616),
+       FW = OW(1605),
+       QW = OW(1707),
+       Wi = OW(1544),
+       ii = OW(1422),
+       Oi = OW(37474),
+       mi = OW(1223),
+       Ei = OW(1052),
+       Ni = OW(344),
+       Pi = OW(1065),
+       Li = OW(1638),
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L277-L285` → after: `L421-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L421-L442) · [Before (L277-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L277-L285)

```diff
-       JB = BB
-     }
- 
-     function PB() {
-       return JB
-     }
- 
-     function zB() {
-       JB = null
+       let {
+         preview: iW,
+         isBroken: OW
+       } = WW;
+       const mW = null === iW ? null : (0, NW.f)(iW, "small"),
+         PW = (0, EW.f)(null !== mW && void 0 !== mW ? mW : NW.t);
+       return null === iW ? (0, eW.jsx)("div", {
+         className: AW()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: OW
+         }),
+         children: (0, eW.jsx)(RW.c, {
+           name: OW ? "triangle-exclamation" : "star"
+         })
+       }) : (0, eW.jsx)("div", {
+         className: AW()("FeaturedGamesPopupSlotThumbnail", LW.j),
+         style: (0, LW.f)(PW),
+ ... (6 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L289-L297` → after: `L446-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L446-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L446-L469) · [Before (L289-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L289-L297)

```diff
-       return BB.playerHasRank("developer") || BB.playerHasRank("admin")
-     }
-     const pB = ["terrain", "water", "models", "sunShadows", "strict"],
-       qB = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
-         strict: "shaderPackListing:filterAllGames"
+       let {
+         schematicId: iW,
+         gameName: OW
+       } = WW;
+       const {
+         userContext: EW
+       } = (0, KW.e)(), NW = (0, Ai.c)(), [PW, LW] = (0, jW.useState)(null), [cW, wW] = (0, jW.useState)(null), [tW, ZW] = (0, jW.useState)(!1), lW = (0, jW.useCallback)((() => {
+         wW(null), HW.e.getFeaturedGames(EW).then((WW => {
+           NW.current && LW(WW.slots)
+         })).catch((WW => {
+           console.error("Failed to get featured games", WW), NW.current && wW("Failed to load featured games")
+         }))
+       }), [EW, NW]);
+       (0, jW.useEffect)((() => {
+         lW()
+       }), [lW]);
+ ... (8 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L299-L305` → after: `L471-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L471-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L471-L551) · [Before (L299-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L299-L305)

```diff
- 
-     function ZB(BB, OB) {
-       return BB.withFeatures.includes(OB) ? "with" : BB.withoutFeatures.includes(OB) ? "without" : null
-     }
- 
-     function NB(BB) {
-       return null === BB ? "with" : "with" === BB ? "without" : null
+       return (0, eW.jsxs)("div", {
+         className: "FeaturedGamesPopupBody",
+         children: [(0, eW.jsx)("h1", {
+           className: "FeaturedGamesPopupTitle",
+           children: "Featured Games"
+         }), !PW && !cW && (0, eW.jsx)("div", {
+           className: "FeaturedGamesPopupLoader",
+           children: (0, eW.jsx)(uW.d, {})
+         }), cW && (0, eW.jsx)("div", {
+           className: "FeaturedGamesPopupError",
+           children: cW
+         }), PW && (0, eW.jsxs)(eW.Fragment, {
+           children: [(0, eW.jsx)("div", {
+             className: "FeaturedGamesPopupSlots",
+             children: PW.map((WW => {
+               const OW = WW.schematicId === iW,
+ ... (65 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L309` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L560-L582) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L309)

```diff
-       return "with" === BB ? "only" : null === BB ? "include" : void 0
+       let {
+         customLobbies: iW,
+         favouriteLobbies: OW,
+         toggleLikeLobby: mW,
+         showReport: EW
+       } = WW;
+       const [NW, PW] = (0, jW.useState)(Mi);
+       return (0, jW.useEffect)((() => {
+         if (NW >= iW.length) return;
+         let WW = !0;
+         return (0, si.c)().then((() => {
+           WW && PW(NW + Ki)
+         })), () => {
+           WW = !1
+         }
+       }), [NW, iW.length]), (0, eW.jsx)(eW.Fragment, {
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L313-L314` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L614) · [Before (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L313-L314)

```diff
-       const GB = ZB(BB, OB),
-         YB = BB => BB.filter((BB => BB !== OB));
+       const OW = Zi.g[WW.schematicId];
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L316-L317` → after: `L616-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L616-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L616-L630) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L316-L317)

```diff
-         withFeatures: null === GB ? [...BB.withFeatures, OB] : YB(BB.withFeatures),
-         withoutFeatures: "with" === GB ? [...BB.withoutFeatures, OB] : YB(BB.withoutFeatures)
+         listedVariations: [],
+         backgroundImage: (0, NW.f)(WW, "large"),
+         badges: [],
+         category: WW.gameCategory,
+         title: void 0 !== (null === OW || void 0 === OW ? void 0 : OW.title) ? iW(OW.title) : WW.name,
+         variationTitle: null,
+         description: void 0 !== (null === OW || void 0 === OW ? void 0 : OW.description) ? iW(OW.description) : WW.description,
+         ownerSocialPreviewWithoutLocation: "owner" in WW ? WW.owner : null,
+         ccu: WW.ccu,
+         favourites: WW.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in WW ? WW.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+         canCreateCustomLobbies: !0,
+         countdownInformation: null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L330-L341` → after: `L636-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L636-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L636-L693) · [Before (L330-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L330-L341)

```diff
-       const oB = BB.get(AB),
-         jB = (null !== (OB = BB.get(SB)) && void 0 !== OB ? OB : kB).split(","),
-         yB = BB.get(UB);
-       return {
-         section: "favourites" === oB || "mine" === oB ? oB : "explore",
-         sort: null !== (GB = YB.z.find((OB => OB === BB.get(VB)))) && void 0 !== GB ? GB : fB,
-         withFeatures: pB.filter((BB => jB.includes(BB) && !jB.includes(`-${BB}`))),
-         withoutFeatures: pB.filter((BB => jB.includes(`-${BB}`))),
-         searchQuery: (null === (DB = BB.get(nB)) || void 0 === DB ? void 0 : DB.slice(0, YB.M)) || null,
-         pageNumber: (0, QB.h)(BB.get(QB.d)),
-         banned: "only" === yB ? "with" : "include" === yB ? null : "without"
-       }
+       return null !== (iW = null !== (OW = (0, ui.h)() ? function(WW) {
+         for (const [iW, OW] of Object.entries(oi)) {
+           const mW = [iW, ...OW.map((WW => (0, Ni.Pb)(iW, WW)))];
+           if (mW.includes(WW)) return mW
+         }
+         return null
+       }(WW) : null) && void 0 !== OW ? OW : null === (mW = Zi.d[WW]) || void 0 === mW ? void 0 : mW.listedVariations) && void 0 !== iW ? iW : null
+     }
+ 
+     function Di() {
+       const {
+         gameNameWithVariation: WW
+       } = (0, zW.z)();
+       if ((0, jW.useEffect)(Ji.n, []), WW && (0, mi.r)(WW)) return (0, eW.jsx)(Vi, {
+         urlId: WW
+       }, WW);
+ ... (42 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L345-L347` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L697) · [Before (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L345-L347)

```diff
-       var GB;
-       const YB = FB(OB);
-       (0, QB.i)(BB, AB, "explore" === OB.section ? null : OB.section), (0, QB.i)(BB, VB, OB.sort === fB ? null : OB.sort), (0, QB.i)(BB, SB, YB === kB ? null : YB), (0, QB.i)(BB, nB, OB.searchQuery), (0, QB.i)(BB, UB, null !== (GB = RB(OB.banned)) && void 0 !== GB ? GB : null), ( … [truncated]
+       (0, FW.navigateToHomePage)(), (0, ni.c)(WW, iW)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L351-L360` → after: `L701-L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L701-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L701-L1284) · [Before (L351-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L351-L360)

```diff
-       const OB = new URLSearchParams;
-       return KB(OB, {
-         section: "explore",
-         sort: fB,
-         withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${oB}?${OB.toString()}`
+       var iW, OW, PW, lW, hW, nW, uW, dW;
+       let {
+         gameNameWithVariation: vW,
+         knownCustomGame: gW = null
+       } = WW;
+       const {
+         t: VW
+       } = (0, cW.B)();
+       (0, ti.j)();
+       const fW = (0, ti.m)(),
+         {
+           userContext: CW,
+           isUserContextUpdating: XW
+         } = (0, KW.e)(),
+         BW = (0, Ti.h)(),
+         IW = (0, FW.useNavigatePreserveSearch)(),
+ ... (568 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L364` → after: `L1288-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1288-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1288-L1316) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L364)

```diff
-       return FB(BB) === kB
+       let {
+         variation: iW,
+         isSelected: OW,
+         children: mW
+       } = WW;
+       const cW = Zi.d[iW],
+         tW = (0, NW.n)(iW, (0, NW.p)(cW)),
+         ZW = (0, EW.f)(tW),
+         xW = (0, PW.d)([(0, NW.j)(iW, (0, NW.c)(cW))]);
+       return (0, eW.jsxs)(FW.LinkPreserveSearch, {
+         to: (0, pW.w)(iW),
+         replace: !0,
+         className: AW()("GameInformationVariation", LW.j, {
+           SelectedGameInformationVariation: OW
+         }),
+         onClick: WW => {
+ ... (13 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L368` → after: `L1337-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1337-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1337-L1378) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L368)

```diff
-       return null !== BB.searchQuery || "with" === BB.banned || FB(BB) !== kB
+       let {
+         info: iW,
+         className: OW
+       } = WW;
+       const {
+         statusText: mW,
+         rowText: EW
+       } = (0, lW.h)();
+       return (0, AW.jsxs)("div", {
+         className: xW()("GameApprovalInfoDetails", OW),
+         children: [(0, AW.jsxs)("div", {
+           className: xW()("GameApprovalInfoSummary", iW.overallPassed ? "Passed" : "Failed"),
+           children: [(0, AW.jsx)(tW.c, {
+             name: iW.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, AW.jsx)("span", {
+             children: mW(iW.status)
+ ... (26 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L372-L375` → after: `L1384-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1384-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1384-L1391) · [Before (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L372-L375)

```diff
-       return pB.flatMap((OB => {
-         const GB = ZB(BB, OB);
-         return "with" === GB ? [OB] : "without" === GB ? [`-${OB}`] : []
-       })).join(",")
+       UW.NotificationProvider.showCustomPopup({
+         body: () => (0, AW.jsx)(sW, {
+           ...WW
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L391` → after: `L1395-L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1395-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1395-L1484) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L391)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / BB))
+       let {
+         schematicId: iW,
+         canOverride: OW,
+         onApprovalChanged: ZW
+       } = WW;
+       const {
+         t: xW
+       } = (0, jW.B)(), {
+         userContext: lW
+       } = (0, LW.e)(), UW = (0, PW.c)(), [kW, sW] = (0, mW.useState)(null), [MW, KW] = (0, mW.useState)(null), [SW, YW] = (0, mW.useState)(!1), yW = (0, mW.useCallback)((() => {
+         KW(null), NW.e.getGameApprovalInfo(lW, iW).then((WW => {
+           UW.current && sW(WW)
+         })).catch((WW => {
+           console.error("Failed to get game approval info", WW), UW.current && KW(xW("studio:approvalLoadFailed"))
+         }))
+       }), [lW, iW, UW, xW]);
+ ... (74 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L394-L400` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1503) · [Before (L394-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L394-L400)

```diff
-     function rB(BB, OB, GB, DB) {
-       const QB = [];
-       BB.isBanned && QB.push({
-         tone: "warning",
-         text: DB("shaderPackListing:ownerBanned"),
-         detail: null
-       });
+     function PW() {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L402-L423` → after: `L1505-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1505-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1505-L1561) · [Before (L402-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L402-L423)

```diff
-         pending: oB
-       } = BB;
-       if (null === BB.brokenError || oB && !oB.error || QB.push({
-           tone: "warning",
-           text: DB("shaderPackListing:ownerBroken"),
-           detail: BB.brokenError
-         }), null !== oB && void 0 !== oB && oB.error) QB.push({
-         tone: "warning",
-         text: DB(OB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
-         detail: (0, YB.n)(oB.error) ? null : oB.error
-       });
-       else if (oB) {
-         const BB = null === oB.renderNotBefore ? 0 : oB.renderNotBefore - GB,
-           YB = String(Math.ceil(BB / 6e4)),
-           jB = DB(OB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
-             minutes: YB
- ... (6 more removed lines; see GitHub link above)
+         t: WW,
+         selectedLanguage: iW
+       } = (0, EW.B)();
+       return {
+         statusText: iW => WW(NW[iW]),
+         rowText: OW => {
+           const NW = (WW, OW) => (0, mW.$)((0, EW.k)(iW.code, WW), 0, OW),
+             PW = (iW, OW) => null === OW ? iW : WW("studio:approvalWithMinDays", {
+               value: iW,
+               days: OW
+             });
+           switch (OW.kind) {
+             case "ownerAccountAge": {
+               const iW = OW.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: WW("studio:approvalAccountAgeLabel"),
+ ... (41 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L433` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1566) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L433)

```diff
-       return Math.max(1, Math.round(BB / 1024))
+       return null === WW.manualOverride && WW.rows.some((WW => "reportHold" === WW.kind && !WW.passed))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L436-L437` → after: `L1576-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1576-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1576-L1585) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L436-L437)

```diff
-     function wB(BB, OB, GB) {
-       return BB instanceof DB.d && BB.errorMessageForUser ? BB.errorMessageForUser : OB(GB)
+     function NW() {
+       const [WW, iW] = (0, mW.useState)(!1);
+       return (0, mW.useLayoutEffect)((() => {
+         let WW = !0;
+         return (0, EW.c)().then((() => {
+           WW && iW(!0)
+         })), () => {
+           WW = !1
+         }
+       }), []), WW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L440` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1588) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L440)

```diff
-   7107: (BB, OB, GB) => {
+   10176: (WW, iW, OW) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L442-L459` → after: `L1590-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1590-L1591) · [Before (L442-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L442-L459)

```diff
-       B: () => jB,
-       E: () => oB,
-       F: () => YB,
-       I: () => zB,
-       M: () => MB,
-       Q: () => AB,
-       U: () => PB,
-       X: () => JB,
-       e: () => pB,
-       h: () => ZB,
-       i: () => qB,
-       l: () => lB,
-       n: () => WB,
-       q: () => SB,
-       r: () => yB,
-       t: () => DB,
- ... (2 more removed lines; see GitHub link above)
+       b: () => jW,
+       c: () => UW
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L461-L479` → after: `L1593-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1593-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1593-L1605) · [Before (L461-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L461-L479)

```diff
-     const YB = ["forest", "desert", "water", "night", "cave"];
-     const DB = {
-         full: {
-           width: 3840,
-           height: 2160
-         },
-         large: {
-           width: 1920,
-           height: 1080
-         },
-         thumb: {
-           width: 640,
-           height: 360
-         }
-       },
-       QB = ["popular", "updated", "newest"],
- ... (3 more removed lines; see GitHub link above)
+     var mW = OW(154),
+       EW = OW(182),
+       NW = OW(1052),
+       PW = OW(1065),
+       LW = OW(1217),
+       cW = OW(2037),
+       wW = OW(3245),
+       tW = OW(1584),
+       ZW = OW(1422),
+       xW = OW(1111),
+       lW = OW(10181),
+       AW = OW(1605),
+       bW = OW(1638);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L482` → after: `L1608-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1608-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1608-L1635) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L482)

```diff
-       return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
+       const OW = !0 === iW.debugResult.gameRefused,
+         NW = OW || iW.code === mW.k.REQUEST_TO_MATCHMAKING ? (0, lW.h)(iW.message) : null;
+       if (null !== NW) return KW(WW, WW((0, lW.n)(NW)), WW(lW.k[NW])), !0;
+       if (OW) return async function(WW) {
+         const {
+           gameNameWithVariation: iW,
+           lobbyName: OW,
+           shownLobbyName: mW
+         } = cW.gameBridge.latest("connectedGame"), EW = "classic" === iW && (0, LW.M)(OW) ? mW : await (0, wW.i)(WW, iW, OW);
+         return "" !== EW ? WW("general:cantJoinGame", {
+           game: EW
+         }) : WW("general:cantJoinThisGame")
+       }(WW).then((OW => {
+         KW(WW, OW, iW.message)
+       })), !0;
+       const {
+ ... (12 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L488-L491` → after: `L1638-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1638-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1638-L1660) · [Before (L488-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L488-L491)

```diff
-     function lB(BB) {
-       const OB = BB,
-         GB = null === OB || void 0 === OB ? void 0 : OB.files;
-       return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof … [truncated]
+     function UW(WW, iW) {
+       !0 !== (null === iW || void 0 === iW ? void 0 : iW.takenDown) ? KW(WW, WW("general:cantJoinThisGame"), EW.e.customGameTakenDown.text) : sW(WW, "lock", WW("studio:gameTakenDownTitle", {
+         game: iW.name
+       }), WW("studio:viewInStudio"), iW.schematicId)
+     }
+ 
+     function kW() {
+       return (0, NW.n)(cW.gameBridge.latest("connectedGame").gameNameWithVariation)
+     }
+     async function sW(WW, iW, OW, mW, EW) {
+       !0 === await ZW.NotificationProvider.showPromptPopup({
+         icon: iW,
+         title: OW,
+         confirmText: mW,
+         cancelText: WW("general:cancel")
+       }).getResult() && (0, AW.navigatePreserveSearch)((0, bW.v)((0, PW.d)(EW), "manage"))
+ ... (7 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L493-L494` → after: `L1662-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1662-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1662-L1679) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L493-L494)

```diff
-     const pB = "Bloxdhub",
-       qB = "https://bloxdhub.com/shaders";
+ 
+     function KW(WW, iW, OW) {
+       ZW.NotificationProvider.showPromptPopup({
+         icon: "lock",
+         title: iW,
+         subtitle: OW,
+         confirmText: WW("general:ok"),
+         cancelText: ""
+       })
+     }
+   },
+   10206: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(1365),
+ ... (2 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L497` → after: `L1682-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1682-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1682-L1703) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L497)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
+       return WW = function(WW, iW) {
+         var OW;
+         const mW = new URLSearchParams(iW),
+           EW = mW.get("lobby"),
+           NW = mW.get("vm"),
+           PW = null !== (OW = EW) && void 0 !== OW ? OW : WW.lobbyName,
+           LW = null !== NW && void 0 !== NW ? NW : WW.directJoinVmUrl;
+         if (PW === WW.lobbyName && LW === WW.directJoinVmUrl) return WW;
+         return {
+           ...WW,
+           lobbyName: PW,
+           directJoinVmUrl: LW
+         }
+       }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), WW = function(WW) {
+         if ((0, NW.K)(WW.directJoinVmUrl)) return WW;
+         const iW = (0, EW.fb)(WW.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L499-L500` → after: `L1705-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1705-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1705-L1715) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L499-L500)

```diff
-     const NB = "Screenshot generation failed.",
-       RB = "Its screenshots couldn't be generated:";
+   },
+   10181: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW,
+       f: () => PW,
+       h: () => LW,
+       k: () => wW,
+       n: () => cW
+     });
+     var mW = OW(182),
+       EW = OW(5318);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L503-L504` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1718) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L503-L504)

```diff
-       var OB;
-       return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
+       return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L507-L508` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1721-L1722) · [Before (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L507-L508)

```diff
-     function AB(BB, OB) {
-       return `shaderPacks/${BB}/${OB}.json`
+     function PW(WW) {
+       return "object" === typeof WW && null !== WW ? WW.code : void 0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L511-L512` → after: `L1725-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1725-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1725-L1727) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L511-L512)

```diff
-     function VB(BB, OB, GB, YB) {
-       return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
+     function LW(WW) {
+       var iW;
+       return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L515-L516` → after: `L1730-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L1730-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/144.js#L1730-L1737) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/144.js#L515-L516)

```diff
-     function SB(BB, OB, GB, YB) {
-       return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
+     function cW(WW) {
+       return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const wW = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/145.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/145.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L2)

```diff
- export const ids = [145, 152, 153];
+ export const ids = [145];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L4)

```diff
-   41498: (BB, OB, GB) => {
+   9972: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L7-L20` → after: `L7-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L7-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L7-L141) · [Before (L7-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L7-L20)

```diff
-       installListedShaderPack: () => MB
-     });
-     var YB = GB(7107),
-       DB = GB(5546),
-       QB = GB(1186),
-       oB = GB(7159),
-       jB = GB(5538),
-       yB = GB(7193),
-       JB = GB(7186);
-     async function MB(BB) {
-       const OB = await (0, oB.loadPageShaderPackCompiler)();
-       if (null === OB) return {
-         kind: "failed",
-         reason: "compiler"
+       e: () => NW
+     });
+     var mW = OW(2095);
+     const EW = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       NW = WW => "string" === typeof WW.icon && "" !== WW.icon && "string" === typeof WW.keycode && EW.test(WW.keycode),
+       PW = WW => "Space" === WW ? "_" : mW.h[WW]
+   },
+   37735: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       g: () => NW
+     });
+     let mW = !1;
+ 
+     function EW() {
+       return mW
+ ... (119 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L22-L44` → after: `L143-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L143-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L143-L213) · [Before (L22-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L22-L44)

```diff
-       const GB = await PB(BB, OB);
-       return "failed" === GB.kind ? GB : await (0, yB.saveShaderPack)(GB.stored, OB) ? ((0, yB.markShaderPackChangePending)(), GB) : {
-         kind: "failed",
-         reason: "save"
-       }
-     }
-     async function PB(BB, OB) {
-       const GB = await async function(BB) {
-         let {
-           packId: OB,
-           sourceHash: GB
-         } = BB;
-         try {
-           const BB = await fetch(`${QB.clientSideServerUrls.s3Url}/${(0,YB.Q)(OB,GB)}`, {
-             headers: {
-               Accept: "application/json"
- ... (7 more removed lines; see GitHub link above)
+     class sW {
+       constructor(WW) {
+         this.source = WW, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.BL = new Uint8Array(bW.c.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, WW … [truncated]
+           this.keyTable = null
+         }))
+       }
+       onKey(WW) {
+         return KW(this.keyListeners, WW)
+       }
+       onUnboundKey(WW) {
+         return this.onKey(((iW, OW, mW, EW, NW, PW) => {
+           OW && EW && !mW && WW(iW, PW)
+         }))
+       }
+       onActions(WW) {
+         return KW(this.actionsListeners, WW)
+ ... (55 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L46-L173` → after: `L215-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L215-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L215-L234) · [Before (L46-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L46-L173)

```diff
-       }(BB);
-       if (null === GB) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, jB.g)(GB.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const oB = (0, DB.v)(GB.files);
-       if ("string" === typeof oB) return console.error(`A listed shader pack breaks the pack rules: ${oB}`), {
-         kind: "failed",
-         reason: "invalid"
-       };
-       const MB = await (0, JB.f)(OB, oB);
-       if (!1 === (null === MB || void 0 === MB ? void 0 : MB.ok)) return {
- ... (112 more removed lines; see GitHub link above)
+       }
+       releaseAll() {
+         let WW = !1;
+         for (let iW = 0; this.heldCount > 0 && iW < this.BL.length; iW++) WW = this.release(iW) || WW;
+         this.mouseButtons = 0, WW && this.updateActionBits()
+       }
+       release(WW) {
+         const iW = this.BL[WW];
+         if (0 === iW) return !1;
+         this.BL[WW] = 0, this.heldCount--;
+         const OW = 0 !== (iW - 1 & 2);
+         return this.emit(WW, !1, 0 !== (iW - 1 & 1), OW, 0 !== (iW - 1 & 4)), OW
+       }
+       updateActionBits() {
+         let WW = 0;
+         if (this.heldCount > 0) {
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L176-L203` → after: `L237-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L237-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L237-L284) · [Before (L176-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L176-L203)

```diff
-       }(BB, OB, lB, qB);
-       return void 0 === ZB || (await (0, MB.replaceShaderPack)(BB, ZB, qB) ? (null !== ZB && ZB.files === BB.files || (0, MB.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
-     }
-   },
-   7193: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       forgetShaderPackActiveHint: () => KB,
-       isOtherApiVersion: () => UB,
-       isShaderPackActive: () => AB,
-       isShaderPackChangePending: () => nB,
-       markShaderPackChangePending: () => SB,
-       pageShaderPackValidationVersion: () => fB,
-       reconcileStoredShaderPackHint: () => dB,
-       removeShaderPack: () => WB,
-       replaceShaderPack: () => ZB,
-       saveShaderPack: () => qB,
- ... (12 more removed lines; see GitHub link above)
+         if (WW === this.actionBits) return;
+         this.actionBits = WW;
+         const iW = this.source.now();
+         for (const OW of this.actionsListeners) OW(WW, iW)
+       }
+       getKeyTable() {
+         return this.keyTable ??= function(WW, iW) {
+           const OW = new Uint8Array(bW.c.length),
+             mW = new Uint16Array(bW.c.length);
+           OW[0] = 1;
+           for (const EW of jW) OW[(0, bW.e)(EW)] = 1;
+           for (const [EW, NW] of Object.entries(WW)) {
+             if (iW.has(EW)) continue;
+             const WW = kW[EW],
+               PW = void 0 === WW ? 0 : (0, bW.j)(WW);
+             for (const iW of NW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L206-L253` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L287) · [Before (L206-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L206-L253)

```diff
-     function PB(BB, OB, GB) {
-       return {
-         manifest: BB.manifest,
-         files: (0, YB.y)(BB.files),
-         validation: OB,
-         ...GB && {
-           listing: GB
-         }
-       }
-     }
- 
-     function zB(BB) {
-       return Object.keys(BB.files).map((OB => ({
-         path: OB,
-         source: BB.files[OB]
-       })))
- ... (32 more removed lines; see GitHub link above)
+     function TW() {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L255-L294` → after: `L289-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L289-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L289-L322) · [Before (L255-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L255-L294)

```diff
-       return null === BB ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : UB(BB) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) || BB.validation.fromRecheck ? null === OB ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : kB(BB, OB) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : BB.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (24 more removed lines; see GitHub link above)
+       return (null !== (WW = EW.d.get("customButtons")) && void 0 !== WW ? WW : []).filter(wW.e).map((WW => WW.keycode))
+     }
+ 
+     function JW() {
+       return null === yW && "0" !== String(xW.i.getItem(SW)) && (yW = new sW({
+         isInPlay: () => "inGame" === mW.d.get("gameState") && !(0, LW.l)() && !(0, NW.e)(),
+         isTyping: tW.isTextEntry,
+         getBindings: () => ({
+           ...ZW.v,
+           customButtons: TW(),
+           pageKeys: (0, cW.g)()
+         }),
+         ignoredActions: YW,
+         onBindingsChanged: WW => {
+           PW.l.subscribe("customBindingsChanged", WW), EW.d.subscribe("customButtons", WW), EW.d.subscribeReset(WW), (0, cW.k)(WW)
+         },
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L296-L430` → after: `L324-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L324-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L324-L339) · [Before (L296-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L296-L430)

```diff
-       return (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.headerVersion) !== fB(OB)
-     }
- 
-     function dB(BB) {
-       return pB((async () => {
-         uB(await (0, jB.e)(!0), BB)
-       }))
-     }
- 
-     function KB() {
-       return pB((async () => {
-         QB.g.removeItem(oB.d)
-       }))
-     }
- 
-     function uB(BB, OB) {
- ... (119 more removed lines; see GitHub link above)
+       return mW.set(WW, (null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : 0) + 1), NW(), () => {
+         const iW = mW.get(WW) - 1;
+         0 === iW ? mW.delete(WW) : mW.set(WW, iW), NW()
+       }
+     }
+ 
+     function LW() {
+       return [...mW.keys()]
+     }
+ 
+     function cW(WW) {
+       EW.push(WW)
+     }
+   },
+   7493: (WW, iW, OW) => {
+     OW.d(iW, {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L433-L434` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L342) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L433-L434)

```diff
-       i: () => qB,
-       l: () => lB,
+       j: () => EW,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L436-L460` → after: `L344-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L344-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L344-L354) · [Before (L436-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L436-L460)

```diff
-       q: () => SB,
-       r: () => yB,
-       t: () => DB,
-       x: () => VB,
-       z: () => QB
-     });
-     const YB = ["forest", "desert", "water", "night", "cave"];
-     const DB = {
-         full: {
-           width: 3840,
-           height: 2160
-         },
-         large: {
-           width: 1920,
-           height: 1080
-         },
- ... (9 more removed lines; see GitHub link above)
+       o: () => cW,
+       r: () => LW
+     });
+     const mW = ["page_loaded", "game_loading", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s", "second_game"],
+       EW = ["joined", "game_playable", "first_input", "pointer_locked", "first_move", "first_block", "played_60s"],
+       NW = ["unbound_key_burst", "idle_pointer_locked", "menu_toggling", "block_change_refused", "pointer_lock_failed", "rage_quit"],
+       PW = 3;
+ 
+     function LW(WW) {
+       return void 0 === WW ? -1 : EW.indexOf(WW)
+     }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L463-L481` → after: `L357-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L357-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L357-L374) · [Before (L463-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L463-L481)

```diff
-       return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const MB = 64,
-       PB = 512,
-       zB = 18e5;
- 
-     function lB(BB) {
-       const OB = BB,
-         GB = null === OB || void 0 === OB ? void 0 : OB.files;
-       return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof … [truncated]
-     }
-     const pB = "Bloxdhub",
-       qB = "https://bloxdhub.com/shaders";
- 
-     function ZB(BB) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
- ... (3 more removed lines; see GitHub link above)
+       return LW(iW) > LW(WW) ? iW : WW
+     }
+   },
+   7502: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW,
+       e: () => NW,
+       g: () => LW,
+       j: () => wW
+     });
+     const mW = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((WW => `Key${WW}`)), ...Array.from({
+         length: 10
+       }, ((WW, iW) => `Digit${iW}`)), ...Array.from({
+         length: 12
+       }, ((WW, iW) => `F${iW+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown … [truncated]
+         length: 10
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L485-L497` → after: `L378-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L378-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/145.js#L378-L388) · [Before (L485-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/145.js#L485-L497)

```diff
-       return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
-     }
- 
-     function AB(BB, OB) {
-       return `shaderPacks/${BB}/${OB}.json`
-     }
- 
-     function VB(BB, OB, GB, YB) {
-       return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
-     }
- 
-     function SB(BB, OB, GB, YB) {
-       return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
+       return null !== (iW = EW.get(WW)) && void 0 !== iW ? iW : 0
+     }
+     const PW = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);
+ 
+     function LW(WW) {
+       return /^Key[A-Z]$/.test(WW) ? "letter" : /^(Digit|Numpad)\d$/.test(WW) ? "digit" : PW.has(WW) ? "symbol" : null
+     }
+     const cW = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];
+ 
+     function wW(WW) {
+       return 1 << cW.indexOf(WW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/146.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/146.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L2)

```diff
- export const ids = [146];
+ export const ids = [146, 147];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L4)

```diff
-   44890: (BB, OB, GB) => {
+   7532: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L6)

```diff
-       startHarnessShaderPack: () => PB
+       d: () => EW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L8-L132` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L8) · [Before (L8-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L8-L132)

```diff
-     var YB = GB(7107),
-       DB = GB(5546),
-       QB = GB(7179),
-       oB = GB(7159),
-       jB = GB(5538),
-       yB = GB(39925),
-       JB = GB(7174),
-       MB = GB(7186);
-     async function PB(BB, OB) {
-       const {
-         stored: GB,
-         info: PB
-       } = await async function(BB, OB) {
-         const GB = await async function(BB) {
-           const OB = await fetch(BB);
-           if (!OB.ok) throw new Error(`Couldn't fetch the shader pack at ${BB}: HTTP ${OB.status}`);
- ... (109 more removed lines; see GitHub link above)
+     var mW = OW(1283);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L135-L184` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L11-L24) · [Before (L135-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L135-L184)

```diff
-       const OB = lB.then(BB);
-       return lB = OB.catch((() => {})), OB
-     }
- 
-     function qB(BB, OB) {
-       return pB((() => NB(BB, OB)))
-     }
- 
-     function ZB(BB, OB, GB) {
-       return pB((async () => JSON.stringify(await (0, jB.e)()) === JSON.stringify(BB) && (null === OB ? (await RB(), !0) : NB(OB, GB))))
-     }
-     async function NB(BB, OB) {
-       const GB = await QB.d.setItem(jB.c, BB);
-       return GB && uB(BB, OB), GB
-     }
-     async function RB() {
- ... (34 more removed lines; see GitHub link above)
+       let {
+         href: iW,
+         children: OW
+       } = WW;
+       return (0, mW.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: iW,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [OW, " ", (0, mW.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L188` → after: `L43-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L43-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L43-L51) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L188)

```diff
-       QB.i.setItem(JB, performance.timeOrigin)
+       const {
+         t: WW
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("superBotXd:deepSeekNotice"), " ", (0, NW.jsx)(EW.d, {
+           href: PW,
+           children: WW("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L192` → after: `L55-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L55-L66) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L192)

```diff
-       return QB.i.getItem(JB) === performance.timeOrigin
+       const {
+         t: WW
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("aiHelperChatGpt:notice"), " ", (0, NW.jsx)(EW.d, {
+           href: LW,
+           children: WW("aiHelperChatGpt:terms")
+         }), " ", (0, NW.jsx)(EW.d, {
+           href: cW,
+           children: WW("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L196` → after: `L87-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L87-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L87-L202) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L196)

```diff
-       return !(0, DB.g)(BB.manifest.apiVersion)
+       let {
+         allowsPersonalizedAds: iW
+       } = WW;
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h2", {
+           children: "4. Cookies and Tracking Technologies"
+         }), (0, AW.jsx)("h3", {
+           children: "4.1 What Are Cookies?"
+         }), (0, AW.jsx)("p", {
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
+         }), (0, AW.jsx)("h3", {
+           children: "4.2 Types of Cookies We Use"
+         }), (0, AW.jsx)("p", {
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+         }), (0, AW.jsxs)("table", {
+           children: [(0, AW.jsxs)("tr", {
+ ... (100 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L200-L205` → after: `L206-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L206-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L206-L558) · [Before (L200-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L200-L205)

```diff
-       return MB ??= BB.yI((0, yB.shaderPackTextures)()), MB
-     }
- 
-     function kB(BB, OB) {
-       var GB;
-       return (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.headerVersion) !== fB(OB)
+       let {
+         allowsPersonalizedAds: iW
+       } = WW;
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, AW.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, AW.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, AW.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+         }), (0, AW.jsxs)("table", {
+           children: [(0, AW.jsxs)("tr", {
+             children: [(0, AW.jsx)("td", {
+               children: (0, AW.jsx)("p", {
+ ... (337 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L209-L217` → after: `L562-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L562-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L562-L957) · [Before (L209-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L209-L217)

```diff
-       return pB((async () => {
-         uB(await (0, jB.e)(!0), BB)
-       }))
-     }
- 
-     function KB() {
-       return pB((async () => {
-         QB.g.removeItem(oB.d)
-       }))
+       let {
+         allowsPersonalizedAds: iW
+       } = WW;
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h3", {
+           children: "3.3 Service Providers"
+         }), (0, AW.jsx)("p", {
+           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
+         }), (0, AW.jsx)("h4", {
+           children: "Hosting and Data Storage"
+         }), (0, AW.jsxs)("table", {
+           children: [(0, AW.jsxs)("tr", {
+             children: [(0, AW.jsx)("td", {
+               children: (0, AW.jsx)("p", {
+                 children: "Service Provider"
+               })
+ ... (380 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L328-L330` → after: `L960-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L960-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L960-L1086) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L328-L330)

```diff
-         full: {
-           width: 3840,
-           height: 2160
+         CA: {
+           name: "Canada",
+           status: "bySubdivision"
+         },
+         US: {
+           name: "the United States",
+           status: "bySubdivision"
+         },
+         AT: {
+           name: "Austria",
+           status: "off"
+         },
+         AX: {
+           name: "\xc5land",
+           status: "off"
+         },
+ ... (111 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L332-L334` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1088-L1090) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L332-L334)

```diff
-         large: {
-           width: 1920,
-           height: 1080
+         MQ: {
+           name: "Martinique",
+           status: "off"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L336-L338` → after: `L1092-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1092-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1092-L1134) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L336-L338)

```diff
-         thumb: {
-           width: 640,
-           height: 360
+         MT: {
+           name: "Malta",
+           status: "off"
+         },
+         NL: {
+           name: "the Netherlands",
+           status: "off"
+         },
+         NO: {
+           name: "Norway",
+           status: "off"
+         },
+         PL: {
+           name: "Poland",
+           status: "off"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L341-L344` → after: `L1137-L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1137-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1137-L1395) · [Before (L341-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L341-L344)

```diff
-       QB = ["popular", "updated", "newest"],
-       oB = 3,
-       jB = 32,
-       yB = 300;
+       sW = {
+         "CA-QC": {
+           name: "Quebec",
+           status: "linked"
+         },
+         "CA-AB": {
+           name: "Alberta",
+           status: "linked"
+         },
+         "CA-BC": {
+           name: "British Columbia",
+           status: "linked"
+         },
+         "CA-MB": {
+           name: "Manitoba",
+           status: "linked"
+ ... (243 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L347` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1398) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L347)

```diff
-       return BB.slice(0, OB).replace(/[\uD800-\uDBFF]$/, "")
+       return WW.replace(/^the /, "").localeCompare(iW.replace(/^the /, ""))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L349-L351` → after: `L1400-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1400-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1400-L1402) · [Before (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L349-L351)

```diff
-     const MB = 64,
-       PB = 512,
-       zB = 18e5;
+     const KW = new Intl.ListFormat("en-GB", {
+       type: "conjunction"
+     });
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L353-L356` → after: `L1404-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1404-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1404-L1450) · [Before (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L353-L356)

```diff
-     function lB(BB) {
-       const OB = BB,
-         GB = null === OB || void 0 === OB ? void 0 : OB.files;
-       return "number" === typeof(null === OB || void 0 === OB ? void 0 : OB.apiVersion) && "string" === typeof OB.name && (null === OB.author || "string" === typeof OB.author) && (void 0 === OB.keepCircleShadows || "boolean" === typeof OB.keepCircleShadows) && "object" === typeof … [truncated]
+     function SW() {
+       const {
+         countries: WW,
+         subdivisions: iW
+       } = function(WW) {
+         const iW = [],
+           OW = [];
+         for (const [mW, EW] of Object.entries(kW))
+           if ("bySubdivision" === EW.status) {
+             const iW = Object.entries(sW).filter((iW => {
+               let [OW, EW] = iW;
+               return OW.startsWith(`${mW}-`) && WW(EW)
+             })).map((WW => {
+               let [, iW] = WW;
+               return iW.name
+             }));
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L361-L362` → after: `L1453-L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1453-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1453-L1483) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L361-L362)

```diff
-     function ZB(BB) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
+     function YW() {
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h3", {
+           id: "session-recordings",
+           children: "2.5 Session Recordings"
+         }), (0, AW.jsx)("p", {
+           children: "To fix problems in the game, we pick some players at random when they join Bloxd, players of any age and guests too, and record every visit they make for the next 90 days, once they have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web bro … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus  … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID, so our staff can watch a picked player\u2019s recordings together. It also keeps a scrambled code made from your internet (IP) address, never the addre … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Why: to fix problems in the game, which is in our legitimate interest. Recording the same player for 90 days shows us bugs that only appear over time, such as lost progress, and whether our fixes work. Only Bloxd staff can watch recordings, and we never use o … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
+         }), (0, AW.jsx)(SW, {}), (0, AW.jsx)("p", {
+ ... (15 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L367-L369` → after: `L1486-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1486-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1486-L1495) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L367-L369)

```diff
-     function WB(BB) {
-       var OB;
-       return BB === NB || null !== (OB = null === BB || void 0 === BB ? void 0 : BB.startsWith(RB)) && void 0 !== OB && OB
+     function yW() {
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h3", {
+           children: "2.6 Our Staff Analytics Tool"
+         }), (0, AW.jsx)("p", {
+           children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use B … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, save … [truncated]
+         })]
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L372-L373` → after: `L1498-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1498-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1498-L1810) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L372-L373)

```diff
-     function AB(BB, OB) {
-       return `shaderPacks/${BB}/${OB}.json`
+     function TW() {
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h2", {
+           children: "8. Your Rights"
+         }), (0, AW.jsx)("h3", {
+           children: "8.1 Your Choices and Control"
+         }), (0, AW.jsx)("p", {
+           children: "As a user of Bloxd.io, you have the right to:"
+         }), (0, AW.jsxs)("ul", {
+           children: [(0, AW.jsx)("li", {
+             children: "Access Your Data: Request a copy of the personal information we hold about you."
+           }), (0, AW.jsx)("li", {
+             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
+           }), (0, AW.jsx)("li", {
+             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
+           }), (0, AW.jsx)("li", {
+ ... (297 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L376-L377` → after: `L1813-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1813-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1813-L1830) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L376-L377)

```diff
-     function VB(BB, OB, GB, YB) {
-       return null === OB.renderId ? SB(BB, OB.baselineVersion, GB, YB) : `${BB}/${function(BB,OB,GB,YB){return`shaderPacks/${BB}/${OB}/${GB}-${YB}.webp`}(OB.packId,OB.renderId,GB,YB)}`
+     function HW() {
+       const {
+         adMobPrivacyOptionsRequired: WW
+       } = (0, wW.p)(["adMobPrivacyOptionsRequired"]);
+       if (!WW) return null;
+       return (0, AW.jsx)(LW.f, {
+         className: "PrivacyChoicesButton",
+         onClick: () => {
+           (async () => {
+             try {
+               await tW.d.request("ads.showPrivacyOptions", {})
+             } catch (WW) {
+               console.error("Failed to open AdMob privacy options:", WW)
+             }
+           })()
+         },
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L380-L381` → after: `L1833-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L1833-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/146.js#L1833-L1850) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/146.js#L380-L381)

```diff
-     function SB(BB, OB, GB, YB) {
-       return `${BB}/${function(BB,OB,GB){return`shaderPacks/baseline/${BB}/${OB}-${GB}.webp`}(OB,GB,YB)}`
+     function nW() {
+       return (0, mW.useEffect)((() => {
+         const WW = window.location.hash.slice(1);
+         var iW;
+         "" !== WW && (null === (iW = document.getElementById(WW)) || void 0 === iW || iW.scrollIntoView())
+       }), []), (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, NW.isDiscordClient)() && (0, AW.jsx)(AW.Fragment, {
+           children: (0, AW.jsx)(LW.f, {
+             className: "PrivacyChoicesButton",
+             onClick: () => {
+               (0, cW.q)()
+             },
+             children: "Adjust Discord Privacy Choices"
+           })
+         }), (0, AW.jsx)(HW, {}), (0, AW.jsx)(lW.c, {
+           className: "PrivacyPolicyLinks"
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/147.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/147.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39)

#### 1. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/147.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/147.js#L2)

```diff
- export const ids = [147, 214];
+ export const ids = [147];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/147.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/147.js#L4)

```diff
-   34794: (BB, OB, GB) => {
+   7525: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L6-L56` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/147.js#L6-L7) · [Before (L6-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/147.js#L6-L56)

```diff
-       d: () => QB
-     });
-     var YB = GB(353),
-       DB = GB(34799);
- 
-     function QB(BB, OB, GB) {
-       const QB = Object.entries(OB).sort(((BB, OB) => OB[1] - BB[1])),
-         oB = (0, YB.zb)(BB);
-       oB.push(BB ? "\n\n" : "\n");
-       for (const [DB, pB] of QB) {
-         var jB, yB, JB;
-         const BB = null !== (jB = null === GB || void 0 === GB || null === (yB = GB[DB]) || void 0 === yB ? void 0 : yB.icon) && void 0 !== jB ? jB : `${DB} Enchantment`;
-         oB.push({
-           icon: BB,
-           style: {
-             fontSize: "1.5rem"
- ... (35 more removed lines; see GitHub link above)
+       WorldCodeAiChatGptNotice: () => tW,
+       WorldCodeAiDeepSeekNotice: () => wW,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L591-L635` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/147.js#L12-L17) · [Before (L591-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/147.js#L591-L635)

```diff
-     var YB = GB(56),
-       DB = GB(34688),
-       QB = GB(1338),
-       oB = GB(4946),
-       jB = GB(2544),
-       yB = GB(92),
-       JB = GB(2063),
-       MB = GB(1375),
-       PB = GB(1282);
- 
-     function zB(BB) {
-       let {
-         show: OB,
-         onClose: GB
-       } = BB;
-       const {
- ... (29 more removed lines; see GitHub link above)
+     var mW = OW(1172),
+       EW = OW(7532),
+       NW = OW(1283);
+     const PW = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       LW = "https://openai.com/policies/terms-of-use/",
+       cW = "https://openai.com/policies/privacy-policy/";
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L790-L804` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/147.js#L22-L26) · [Before (L790-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/147.js#L790-L804)

```diff
-       } = (0, DB.H)(), [yB, JB] = (0, QB.j)();
-       return (0, jB.jsxs)("div", {
-         className: "CopyTextRow",
-         children: [(0, jB.jsx)("div", {
-           className: "CopyTextRowText",
-           children: OB
-         }), (0, jB.jsx)(oB.f, {
-           className: "CopyTextRowButton",
-           onClick: () => {
-             (0, YB.b)(OB).catch((BB => {
-               console.error("Failed to copy text:", BB)
-             })), JB()
-           },
-           disabled: yB,
-           children: GB(yB ? "general:copied" : "general:copy")
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("superBotXd:deepSeekNotice"), " ", (0, NW.jsx)(EW.d, {
+           href: PW,
+           children: WW("superBotXd:deepSeekPrivacyPolicy")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L1300-L1325` → after: `L33-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L33-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/147.js#L33-L42) · [Before (L1300-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/147.js#L1300-L1325)

```diff
-         width: BB,
-         height: OB,
-         scale: GB
-       } = function(BB, OB, GB) {
-         const YB = Math.max(1, BB),
-           DB = Math.max(1, OB),
-           QB = Math.min(Math.max(1, GB), Math.sqrt(jB / (YB * DB)));
-         return {
-           width: Math.round(YB * QB),
-           height: Math.round(DB * QB),
-           scale: QB
-         }
-       }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
-         blob: YB
-       } = await DB.devTools.capturePhoto(BB, OB, {
-         scale: GB,
- ... (10 more removed lines; see GitHub link above)
+         t: WW
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("aiHelperChatGpt:notice"), " ", (0, NW.jsx)(EW.d, {
+           href: LW,
+           children: WW("aiHelperChatGpt:terms")
+         }), " ", (0, NW.jsx)(EW.d, {
+           href: cW,
+           children: WW("aiHelperChatGpt:privacyPolicy")
+         })]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/148.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/148.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/148.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/148.js#L2)

```diff
- export const ids = [148, 152, 153];
+ export const ids = [148];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/148.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/148.js#L4-L6)

```diff
-   7147: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
+   7541: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L8-L16` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/148.js#L8-L9) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/148.js#L8-L16)

```diff
-     var YB = GB(5531),
-       DB = GB(1282);
-     const QB = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
+     var mW = OW(1172),
+       EW = OW(1283);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L18-L21` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/148.js#L11-L12) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/148.js#L18-L21)

```diff
-     function oB(BB) {
-       let {
-         diagnostics: OB,
-         more: GB = 0,
+     function NW() {
+       const {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L23-L47` → after: `L14-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L14-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/148.js#L14-L219) · [Before (L23-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/148.js#L23-L47)

```diff
-       } = BB;
-       return (0, DB.jsxs)("ul", {
-         className: "ShaderPackDiagnostics",
-         children: [OB.map(((BB, OB) => {
-           const GB = (0, YB.g)(BB),
-             jB = function(BB, OB) {
-               const GB = (0, YB.e)(null !== BB && void 0 !== BB ? BB : []);
-               if (0 === GB.length) return null;
-               return GB.map((BB => BB.map((BB => OB(QB[BB]))).join(", "))).join("; ")
-             }(BB.variants, oB);
-           return (0, DB.jsxs)("li", {
-             children: [GB && (0, DB.jsx)("span", {
-               className: "ShaderPackDiagnosticLocation",
-               children: GB
-             }), BB.message, jB && (0, DB.jsx)("span", {
-               className: "ShaderPackDiagnosticVariants",
- ... (9 more removed lines; see GitHub link above)
+       } = (0, mW.B)();
+       return (0, EW.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, EW.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: WW("homePage:termsOfService")
+         }), (0, EW.jsx)("p", {
+           children: (0, EW.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, EW.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, EW.jsx)("h3", {
+           children: "1. General Information"
+         }), (0, EW.jsx)("p", {
+           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
+ ... (190 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/149.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/149.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L4)

```diff
-   7159: (BB, OB, GB) => {
+   7545: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L6)

```diff
-       loadPageShaderPackCompiler: () => lO
+       default: () => jW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L44` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L8-L35) · [Before (L8-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L8-L44)

```diff
-     var YB = {};
-     GB.r(YB), GB.d(YB, {
-       nQB: () => DB,
-       VOB: () => QB,
-       default: () => eB,
-       UQB: () => oB,
-       fQB: () => jB,
-       initSync: () => aB,
-       VP: () => yB,
-       lDB: () => JB,
-       kQB: () => MB,
-       dQB: () => PB,
-       JI: () => zB,
-       KQB: () => lB,
-       yI: () => pB,
-       uQB: () => qB
- ... (21 more removed lines; see GitHub link above)
+     var mW = OW(1616),
+       EW = OW(1653),
+       NW = OW(4058),
+       PW = OW(3147),
+       LW = OW(1532),
+       cW = OW(1605),
+       wW = OW(1107),
+       tW = OW(62),
+       ZW = OW(1391),
+       xW = OW(1283);
+ 
+     function lW(WW) {
+       let {
+         iconName: iW,
+         iconCountPerGroup: OW,
+         animation: mW,
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L46-L102` → after: `L37-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L37-L50) · [Before (L46-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L46-L102)

```diff
-       }
-       get features() {
-         const BB = EB.Zb6Y(this.__wbg_ptr);
-         var OB = WB(BB[0], BB[1]);
-         return EB.EvV7(BB[0], 4 * BB[1], 4), OB
-       }
-       get hooks() {
-         const BB = EB.TiQC(this.__wbg_ptr);
-         var OB = AB(BB[0], BB[1]).slice();
-         return EB.EvV7(BB[0], 1 * BB[1], 1), OB
-       }
-       mapValidationMessage(BB, OB, GB, YB, DB) {
-         let QB, oB;
-         try {
-           const JB = EB.pTkp(this.__wbg_ptr, BB, OB, GB, RB(YB), RB(DB));
-           var jB = JB[0],
- ... (41 more removed lines; see GitHub link above)
+         LW(WW)
+       }), [OW, EW]), (0, xW.jsx)("div", {
+         className: `IconShower IconShowerAnimation${mW} ${null!==NW&&void 0!==NW?NW:""}`,
+         children: Object.keys(PW).map((WW => PW[WW].map((OW => (0, xW.jsx)("div", {
+           className: `Icon IconGroup${WW}`,
+           style: {
+             left: OW.left,
+             animationDelay: OW.animationDelay
+           },
+           children: (0, xW.jsx)(ZW.c, {
+             name: iW
+           })
+         }, OW.left)))))
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L104-L123` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L52-L53) · [Before (L104-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L104-L123)

```diff
- 
-     function QB(BB, OB, GB, YB, QB, oB, jB) {
-       const yB = IB(BB, EB.B0Tb),
-         JB = cB,
-         MB = IB(OB, EB.B0Tb),
-         PB = cB,
-         zB = IB(GB, EB.B0Tb),
-         lB = cB,
-         pB = mB(YB, EB.B0Tb),
-         qB = cB,
-         ZB = IB(QB, EB.B0Tb),
-         NB = cB,
-         RB = IB(oB, EB.B0Tb),
-         WB = cB,
-         AB = IB(jB, EB.B0Tb),
-         VB = cB,
- ... (4 more removed lines; see GitHub link above)
+     var AW = OW(1172),
+       bW = OW(3210);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L126-L163` → after: `L56-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L56-L68) · [Before (L126-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L126-L163)

```diff
-       const BB = EB.I3Ny();
-       var OB = WB(BB[0], BB[1]);
-       return EB.EvV7(BB[0], 4 * BB[1], 4), OB
-     }
- 
-     function jB() {
-       const BB = EB.JFkd();
-       var OB = WB(BB[0], BB[1]);
-       return EB.EvV7(BB[0], 4 * BB[1], 4), OB
-     }
- 
-     function yB() {
-       EB.CvtO()
-     }
- 
-     function JB(BB, OB, GB, YB, DB) {
- ... (22 more removed lines; see GitHub link above)
+       var WW;
+       const {
+         t: iW
+       } = (0, AW.B)(), {
+         pack: OW
+       } = (0, mW.z)(), {
+         userContext: tW
+       } = (0, wW.e)();
+       if (OW) {
+         const WW = EW.e[OW];
+         if (null === WW || void 0 === WW || !WW.purchasable) return (0, xW.jsx)(cW.NavigatePreserveSearch, {
+           to: "/"
+         })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L165-L459` → after: `L70-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L70-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L70-L104) · [Before (L165-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L165-L459)

```diff
-     }
- 
-     function MB() {
-       let BB, OB;
-       try {
-         const GB = EB.FkVX();
-         return BB = GB[0], OB = GB[1], nB(GB[0], GB[1])
-       } finally {
-         EB.EvV7(BB, OB, 1)
-       }
-     }
- 
-     function PB(BB) {
-       let OB, GB;
-       try {
-         const QB = EB.osAz(BB);
- ... (279 more removed lines; see GitHub link above)
+       const jW = OW ? EW.e[OW] : null,
+         UW = OW ? NW.m[(0, PW.j)(OW)] : null,
+         kW = void 0 !== (null === jW || void 0 === jW ? void 0 : jW.characterSet) || null !== jW && void 0 !== jW && jW.singleItem ? jW.displayName : `${null!==(WW=null===jW||void 0===jW?void 0:jW.displayName)&&void 0!==WW?WW:OW} Pack`,
+         sW = Date.now(),
+         MW = iW((0, bW.o)(sW).nameKey),
+         KW = jW ? `Your ${kW} is Ready!` : `Welcome To ${MW}!`,
+         SW = jW ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+         YW = jW ? !tW.getOwnedCosmeticPacks().includes(OW) : !(0, bW.h)(tW.getPlayerRanks(), sW),
+         yW = jW ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${MW} instantly, but it could take up to an hour to apply. If you don't have ${MW} after an hour,  … [truncated]
+       return (0, xW.jsxs)("div", {
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [UW && (0, xW.jsx)(UW, {}), !jW && (0, xW.jsx)(lW, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L461-L754` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/149.js#L106-L107) · [Before (L461-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/149.js#L461-L754)

```diff
-         } catch (OB) {
-           throw new CB("instantiate", OB)
-         }
-         return HB = YB, HB
-       }(), vB.then(void 0, (() => {
-         vB = null
-       }))), vB)
-     }
-     var xB = GB(7176);
- 
-     function tB(BB) {
-       let [OB, GB, YB, DB] = BB;
-       const QB = {
-         file: OB,
-         line: GB,
-         message: YB
- ... (278 more removed lines; see GitHub link above)
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/150.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/150.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L13)

```diff
-   39470: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => JB,
-       g: () => zB,
-       i: () => lB,
-       l: () => ZB,
-       n: () => PB,
-       q: () => MB,
-       s: () => oB,
-       u: () => pB
+   7551: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => xW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L15-L266` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/150.js#L8-L16) · [Before (L15-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/150.js#L15-L266)

```diff
-     var YB = GB(328),
-       DB = GB(1790);
-     const QB = "A valid external Instance reference no longer exists.";
- 
-     function oB(BB) {
-       return BB.includes(QB)
-     }
-     const jB = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
-         [18e5, "<30m", "lt30m"],
-         [1 / 0, "30m+", "ge30m"]
-       ],
-       yB = [
-         [1e3, "lt1s"],
- ... (236 more removed lines; see GitHub link above)
+     var mW = OW(1383),
+       EW = OW(62),
+       NW = OW(109),
+       PW = OW(1616),
+       LW = OW(1220),
+       cW = OW(327),
+       wW = OW(671);
+     const tW = new URL(LW.m[cW.c.PRODUCTION]).origin;
+     var ZW = OW(1283);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L269-L362` → after: `L19-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L19-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/150.js#L19-L29) · [Before (L269-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/150.js#L269-L362)

```diff
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:noContextTitle",
-         help: "wasmScreens:noContextHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
-       }
-     }
- 
-     function yB(BB, OB) {
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:crashTitle",
-         help: OB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
- ... (78 more removed lines; see GitHub link above)
+       const WW = (0, PW.z)();
+       return (0, EW.useEffect)((() => {
+         const iW = NW.currentUrl.getSearchParam("code");
+         NW.currentUrl.removeSearchParam("code"), null === iW && (console.error("No authorization code found in the URL"), window.close());
+         const OW = {
+           type: `oauth_authentication_${WW.providerName}`,
+           code: iW
+         };
+         for (const WW of (EW = window.location.origin) === tW ? [EW, `https://${wW.e}`] : [EW]) {
+           var mW;
+           null === (mW = window.opener) || void 0 === mW || mW.postMessage(OW, WW)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L364-L450` → after: `L31-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/150.js#L31-L40) · [Before (L364-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/150.js#L364-L450)

```diff
-       }();
-     let VB = !1;
- 
-     function SB() {
-       return AB && !VB
-     }
-     class nB {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (SB()) try {
-           this.worker = fB(), lB(NB, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
- ... (71 more removed lines; see GitHub link above)
+         var EW;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+       })), (0, ZW.jsx)("div", {
+         className: "AuthCallback",
+         children: (0, ZW.jsx)(mW.d, {
+           showFace: !0,
+           loading: !0
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/151.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/151.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L4)

```diff
-   36849: (BB, OB, GB) => {
+   7560: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L6)

```diff
-       WasmTextureWorker: () => RB
+       default: () => gW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L24` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L32) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L24)

```diff
-     var YB = GB(633),
-       DB = GB(3622),
-       QB = GB(36856),
-       oB = GB.n(QB);
- 
-     function jB() {
-       return oB()('(()=>{var BB={d:(OB,GB)=>{for(var YB in GB)BB.o(GB,YB)&&!BB.o(OB,YB)&&Object.defineProperty(OB,YB,{enumerable:!0,get:GB[YB]})},o:(BB,OB)=>Object.prototype.hasOwnProperty.call(BB,OB),r:BB=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(B … [truncated]
-     }
-     var yB = GB(36862),
-       JB = GB(3641),
-       MB = GB(3659),
-       PB = GB(3647),
-       zB = GB(3626);
- 
-     function lB(BB) {
-       return "" === BB ? [] : BB.split("\0")
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1616),
+       NW = OW(1089),
+       PW = OW.n(NW),
+       LW = OW(327),
+       cW = OW(7570),
+       wW = OW(1391),
+       tW = OW(1605),
+       ZW = OW(5268),
+       xW = OW(1532),
+       lW = OW(4292),
+       AW = OW(5271),
+       bW = OW(1782),
+       jW = OW(5261),
+       UW = OW(1107),
+       kW = OW(25),
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L27-L81` → after: `L35-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L35-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L35-L95) · [Before (L27-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L27-L81)

```diff
-       if ("" !== BB)
-         for (const OB of BB.split("\n")) console.error(OB)
-     }
- 
-     function qB(BB, OB) {
-       return async function(BB, OB) {
-         const GB = Object.keys(BB),
-           YB = [],
-           DB = new Map,
-           QB = new Uint32Array(GB.length);
-         for (const [oB, jB] of GB.entries()) {
-           const {
-             url: OB
-           } = BB[jB];
-           DB.has(OB) || (DB.set(OB, YB.length), YB.push(OB)), QB[oB] = DB.get(OB)
-         }
- ... (39 more removed lines; see GitHub link above)
+       let {
+         pack: iW,
+         view: OW,
+         favourite: mW,
+         notice: EW
+       } = WW;
+       const {
+         width: NW,
+         height: LW
+       } = cW.n.thumb, {
+         live: ZW
+       } = iW;
+       return (0, hW.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, hW.jsxs)("div", {
+           className: "ShaderPackCardTile",
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L85-L162` → after: `L100-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L100-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L100-L136) · [Before (L85-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L85-L162)

```diff
-       return BB.message ? new Error(`the texture worker failed: ${BB.message}`) : new MB.p(MB.m.Load, "the texture worker failed to start")
-     }
-     class RB {
-       constructor(BB) {
-         this.worker = BB, this.failure = void 0, this.abandonStep = null, BB.addEventListener("error", (BB => {
-           BB.preventDefault(), this.failure ??= NB(BB)
-         }))
-       }
-       static async generateRequired(BB, OB, GB, QB) {
-         let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MB.c,
-           JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const zB = (0, yB.h)();
-         if (null !== zB) throw ZB(new MB.p(MB.m.Load, zB), !1);
-         let lB;
-         const NB = new AbortController;
-         try {
- ... (62 more removed lines; see GitHub link above)
+       let {
+         results: iW,
+         loading: OW,
+         failed: mW,
+         onRetry: EW,
+         view: NW,
+         previewView: LW
+       } = WW;
+       const {
+         t: cW
+       } = (0, SW.B)(), wW = (0, nW.j)(), tW = Date.now(), ZW = null === iW ? 0 : "owned" === iW.kind ? iW.packs.length : iW.page.results.length;
+       return (0, hW.jsxs)("div", {
+         className: PW()("ShaderPackBrowseResults", {
+           Loading: OW && null !== iW
+         }),
+         children: [OW && null === iW && (0, hW.jsx)("div", {
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L194-L243` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L139-L142) · [Before (L194-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L194-L243)

```diff
-             return GB
-           }(nB, UB.imagesPerAtlas.length)), pB(kB), {
-             assets: UB,
-             layerCap: fB,
-             worker: lB
-           }
-         } catch (AB) {
-           var WB;
-           throw NB.abort(), null === (WB = lB) || void 0 === WB || WB.terminate(), ZB(AB, !1)
-         }
-       }
-       async generateOptional() {
-         let BB;
-         try {
-           BB = await this.request({
-             type: "optional"
- ... (34 more removed lines; see GitHub link above)
+           }, WW.packId)))
+         }), "owned" === (null === iW || void 0 === iW ? void 0 : iW.kind) && ZW > 0 && (0, hW.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+           children: iW.packs.map((WW => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L245-L325` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L144-L154) · [Before (L245-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L245-L325)

```diff
-             null === (BB = jB) || void 0 === BB || BB.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
-           };
-           this.abandonStep = () => {
-             yB(), DB(new Error("the texture worker was terminated"))
-           }, this.worker.onmessage = OB => {
-             let {
-               data: JB
-             } = OB;
-             var PB;
-             if ("progress" === JB.type) return QB = JB.stage, oB = JB.wasmBytes, void(null === (PB = jB) || void 0 === PB || PB.restart(QB === MB.t.Generating ? MB.e : MB.i));
-             "sheet" === JB.type && GB ? GB(JB.sheet, JB.pixels) : (yB(), "failed" === JB.type ? DB(JB.moduleLoad ? new MB.p(MB.m.Load, JB.reason) : function(BB, OB) {
-               let {
-                 reason: GB,
-                 stack: YB
-               } = BB;
-               const DB = new Error(WB(GB, OB));
- ... (65 more removed lines; see GitHub link above)
+             return (0, hW.jsx)(HW, {
+               pack: WW,
+               view: LW,
+               notice: WW.owner ? (0, TW._)(WW.owner, !(null === (iW = WW.live) || void 0 === iW || !iW.renderId), tW, cW)[0] : void 0
+             }, WW.packId)
+           }))
+         }), null !== iW && 0 === ZW && (0, hW.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: cW(oW(NW))
+         })]
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L347` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L158) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L347)

```diff
-       return BB.pathname.slice(BB.pathname.lastIndexOf("/") + 1)
+       return "mine" === WW.section ? "shaderPackListing:noOwnPacks" : (0, TW.u)(WW) ? "general:noResults" : "favourites" === WW.section ? "shaderPackListing:noFavourites" : "general:noResults"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L351-L373` → after: `L168-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L168-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L168-L180) · [Before (L351-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L351-L373)

```diff
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const BB = JSON.parse(localStorage.getItem(JB) ?? "[]");
-         return Array.isArray(BB) ? BB.filter((BB => "string" === typeof BB)) : []
-       } catch (BB) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", BB), null
-       }
-     }
-     const lB = Reflect.apply,
-       pB = "undefined" === typeof Worker ? void 0 : Worker,
-       qB = pB?.prototype.postMessage,
-       ZB = pB?.prototype.terminate,
-       NB = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
-       RB = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
-       WB = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
-       AB = function() {
- ... (7 more removed lines; see GitHub link above)
+       var WW, iW, OW, NW;
+       const {
+         t: YW
+       } = (0, SW.B)(), yW = (0, tW.useNavigatePreserveSearch)(), JW = (0, EW.u)(), {
+         userContext: HW,
+         isUserContextUpdating: oW
+       } = (0, UW.e)(), [gW, DW] = (0, nW.f)(), [VW, pW] = (0, nW.c)(), fW = (0, mW.useRef)(!1), [CW, XW] = (0, ZW.q)(), BW = (0, TW.G)(CW), [qW, RW] = (0, mW.useState)(null !== (WW = BW.searchQuery) && void 0 !== WW ? WW : ""), GW = (0, mW.useRef)(null), {
+         searchQuery: IW
+       } = BW;
+       (0, mW.useEffect)((() => {
+         RW(null !== IW && void 0 !== IW ? IW : ""), GW.current && (GW.current.value = null !== IW && void 0 !== IW ? IW : "")
+       }), [IW]);
+       const [aW, rW] = (0, mW.useState)(null), [zW, FW] = (0, mW.useState)(!1), [QW, Wi] = (0, mW.useState)(!1), [ii, Oi] = (0, mW.useState)(0), mi = (0, mW.useRef)(0), Ei = JSON.stringify(BW), Ni = (0, TW.l)();
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L375-L441` → after: `L182-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L182-L186) · [Before (L375-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L375-L441)

```diff
-     function SB() {
-       return AB && !VB
-     }
-     class nB {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (SB()) try {
-           this.worker = fB(), lB(NB, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
- ... (51 more removed lines; see GitHub link above)
+       function Pi() {
+         null !== Ni ? (yW(Ni), kW.d.set({
+           openEverythingMenuName: LW.m.SETTINGS,
+           openSettingsCategory: "kA"
+         })) : yW("/")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L443-L450` → after: `L188-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L188-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L188-L196) · [Before (L443-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L443-L450)

```diff
-       markWorkerFailed() {
-         VB = !0
-       }
-       fail(BB) {
-         this.reject(BB), this.terminate()
-       }
-       terminate() {
-         lB(ZB, this.worker, [])
+ 
+       function Li(WW) {
+         XW((iW => {
+           (0, TW.kb)(iW, {
+             ...BW,
+             pageNumber: 1,
+             ...WW
+           })
+         }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L454-L479` → after: `L199-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L199-L205) · [Before (L454-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L454-L479)

```diff
-     function fB() {
-       if (globalThis.Worker !== pB) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(GB.p + GB.u(79), GB.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const kB = Reflect.apply,
-       dB = ArrayBuffer,
-       KB = "undefined" === typeof Response ? void 0 : Response,
-       uB = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       mB = function() {
-         let BB;
-         void 0 !== uB && new uB({
-           __proto__: null,
-           start(OB) {
- ... (10 more removed lines; see GitHub link above)
+       function ci() {
+         const WW = qW.trim() || null;
+         Li({
+           searchQuery: WW,
+           ...null !== WW && !fW.current && (0, TW.p)(BW) && {
+             withFeatures: [],
+             withoutFeatures: []
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L481-L521` → after: `L207-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L207-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L207-L231) · [Before (L481-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L481-L521)

```diff
-         }, {
-           __proto__: null
-         });
-         return BB
-       }(),
-       IB = function() {
-         try {
-           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== mB && (0, oB.i)(KB, "Response", !0) && (0, oB.i)(uB, "ReadableStream", !0) && (0, oB.i)(mB.enqueue, "enqueue") && (0, oB.i)(mB.close, "close") && (0, oB.i)(mB.e … [truncated]
-         } catch {
-           return !1
-         }
-       }();
-     async function FB(BB, OB, GB, YB, QB, oB, JB) {
-       const MB = new dB(OB),
-         {
-           controller: PB,
- ... (25 more removed lines; see GitHub link above)
+         })
+       }(0, jW.c)(Pi), (0, nW.b)(), (0, mW.useEffect)((() => {
+         if (oW) return;
+         const WW = ++mi.current,
+           iW = JSON.parse(Ei);
+         FW(!0), Wi(!1), async function(WW) {
+           if ("mine" === WW.section) return {
+             kind: "owned",
+             packs: await sW.e.getOwnedShaderPacks(HW)
+           };
+           const iW = "favourites" === WW.section,
+             OW = iW && (0, TW.p)(WW),
+             mW = await sW.e.getShaderPacks(HW, {
+               sort: iW ? TW.e : WW.sort,
+               features: OW ? [] : WW.withFeatures,
+               withoutFeatures: OW ? [] : WW.withoutFeatures,
+ ... (9 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L523-L528` → after: `L233-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L233-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L233-L246) · [Before (L523-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L523-L528)

```diff
-         }(BB),
-         {
-           enqueue: lB,
-           close: pB,
-           error: qB
-         } = mB,
+         }(iW).then((iW => {
+           mi.current === WW && rW(iW)
+         })).catch((iW => {
+           mi.current === WW && (console.error("Failed to get shader packs", iW), rW(null), Wi(!0))
+         })).finally((() => {
+           mi.current === WW && FW(!1)
+         }))
+       }), [Ei, HW, oW, ii]);
+       const [wi, ti] = (0, mW.useState)(null), Zi = null !== (OW = null === (NW = ("listing" === (null === aW || void 0 === aW ? void 0 : aW.kind) ? aW.page.results : (null !== (iW = null === aW || void 0 === aW ? void 0 : aW.packs) && void 0 !== iW ? iW : []).flatMap((WW => WW.l … [truncated]
+       (0, mW.useEffect)((() => {
+         null !== Zi && ti(Zi)
+       }), [Zi]);
+       const xi = "mine" === BW.section,
+         li = (0, TW.q)(HW),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L530-L591` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L248-L250) · [Before (L530-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L530-L591)

```diff
-           try {
-             kB(qB, PB, [BB])
-           } catch {}
-         };
-       let NB = 0;
-       const RB = (GB, YB) => {
-         if (NB + YB > OB) throw new Error(`${BB} decoded past its module's ${OB} bytes`);
-         kB(yB.cb, new yB.k(MB), [new yB.k(GB), NB]);
-         try {
-           kB(lB, PB, [new yB.k(MB, NB, YB)])
-         } catch {}
-         NB += YB
-       };
-       let WB, AB;
-       try {
-         WB = new UB(BB, OB, RB, YB, JB)
- ... (46 more removed lines; see GitHub link above)
+           "explore" !== BW.section && (WW.stopPropagation(), WW.preventDefault(), Li({
+             section: "explore"
+           }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L593-L657` → after: `L252-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L252-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L252-L268) · [Before (L593-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L593-L657)

```diff
-         for ((0, DB.s)(WB.decoded, lB, lB);;) {
-           let OB;
-           try {
-             OB = await kB(yB.Z, zB, [])
-           } catch (fB) {
-             throw new Error(`Downloading ${BB} failed: ${(0,jB.h)(fB)}`)
-           }
-           if (OB.done) break;
-           YB(), WB.push(OB.value)
-         }
-         if (SB = !0, WB.end(), await WB.decoded, QB(), NB !== OB) throw new Error(`${BB} ended before its module did`)
-       } catch (fB) {
-         throw ZB(fB), VB(fB), fB
-       }
-       WB.terminate();
-       try {
- ... (49 more removed lines; see GitHub link above)
+       return (0, hW.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+         children: [(0, hW.jsx)(xW.b, {
+           onClick: Pi,
+           children: YW(null === Ni ? "homePage:backToGames" : "shaderPackListing:backToSettings")
+         }), (0, hW.jsxs)("div", {
+           className: "ShaderPackBrowseHeader",
+           children: [(0, hW.jsxs)("div", {
+             className: "ShaderPackBrowseHeaderRow",
+             children: [(0, hW.jsx)("h1", {
+               className: "VisuallyHidden",
+               children: YW("shaderPackListing:title")
+             }), (0, hW.jsxs)("div", {
+               className: "ShaderPackBrowseTabs",
+               children: [(0, hW.jsx)("div", {
+                 className: PW()("ShaderPackBrowseSort", {
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L659-L763` → after: `L270-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L270-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L270-L321) · [Before (L659-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L659-L763)

```diff
-                 QB = await (0, DB.p)([GB, YB]);
-               return !!QB?.ok && ((0, yB.X)(QB.body.cancel()), !0)
-             } catch {
-               return !1
-             } finally {
-               clearTimeout(GB)
-             }
-           }(BB.url())) return QB?.stop(), await async function(BB, OB, GB, YB) {
-           let DB = !1;
-           const QB = GB && {
-             sha256: GB.sha256,
-             onMismatch: () => {
-               DB = !0
-             }
-           };
-           try {
- ... (89 more removed lines; see GitHub link above)
+                 onMouseDownCapture: Ai,
+                 onTouchEndCapture: Ai,
+                 children: (0, hW.jsx)(lW.e, {
+                   options: cW.u.map((WW => ({
+                     value: WW,
+                     label: YW(TW.cb[WW])
+                   }))),
+                   value: BW.sort,
+                   onChange: WW => {
+                     Li({
+                       section: "explore",
+                       sort: WW.value
+                     })
+                   }
+                 })
+               }), Object.keys(vW).map((WW => (0, hW.jsx)(xW.Z, {
+ ... (36 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L765-L826` → after: `L323-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L323-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L323-L407) · [Before (L765-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L765-L826)

```diff
-               retries: {
-                 onRetry: () => {
-                   YB.downloaded = !1, null !== aB && GB.abort()
-                 }
-               }
-             }),
-             cancel: GB,
-             downloaded: !1,
-             state: "compiling"
-           };
-         return TB.set(BB.name, YB), (0, DB.f)((OB => {
-           (0, DB.s)(YB.compiled, (() => {
-             YB.downloaded = !0, YB.state = "compiled", OB()
-           }), (DB => {
-             YB.state = "failed", GB.signal.aborted || console.warn(`Bloxd wasm: ${BB.name}'s compile ahead of the load failed: the load compiles it afresh`, DB), OB()
-           }))
- ... (46 more removed lines; see GitHub link above)
+               children: [YW("shaderPackListing:filter"), " ", (0, hW.jsx)(wW.c, {
+                 name: VW ? "angle-up" : "angle-down"
+               })]
+             }), (0, hW.jsx)("div", {
+               className: "ShaderPackBrowseSpace"
+             }), KW.featureFlags.settings.canUseShaderPacks && (0, hW.jsxs)(xW.n, {
+               onClick: () => {
+                 yW(TW.bb)
+               },
+               children: [(0, hW.jsx)(wW.c, {
+                 name: "upload"
+               }), " ", YW("shaderPackListing:publish")]
+             })]
+           }), !xi && VW && (0, hW.jsxs)("div", {
+             className: "ShaderPackBrowseFeatures",
+             children: [TW.B.map((WW => {
+ ... (69 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L828-L882` → after: `L409-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L409-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/151.js#L409-L427) · [Before (L828-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/151.js#L828-L882)

```diff
-           jB = () => {
-             (0, DB.s)(DO(BB), (BB => {
-               let {
-                 module: OB,
-                 path: GB
-               } = BB;
-               oB(OB, GB)
-             }), QB)
-           };
-         void 0 === YB ? jB() : (0, DB.s)(YB.compiled, (BB => {
-           oB(BB, "ahead")
-         }), jB)
-       }))
-     }
-     async function YO(BB, OB) {
-       const {
- ... (39 more removed lines; see GitHub link above)
+           view: BW,
+           previewView: gW
+         }), "listing" === (null === aW || void 0 === aW ? void 0 : aW.kind) && (0, hW.jsx)(AW.c, {
+           className: "ShaderPackBrowsePagination",
+           page: aW.page.pageNumber,
+           totalPages: aW.page.totalPages,
+           onSetPage: WW => {
+             XW((iW => {
+               (0, ZW.m)(iW, WW)
+             }))
+           },
+           getPageHref: function(WW) {
+             const iW = new URLSearchParams(CW);
+             (0, ZW.m)(iW, WW);
+             const OW = iW.toString();
+             return OW ? `${JW.pathname}?${OW}` : JW.pathname
+ ... (3 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/152.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/152.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L4-L25` → after: `L4-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L4-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/152.js#L4-L188) · [Before (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/152.js#L4-L25)

```diff
-   7174: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       loadShaderPackTextures: () => oB,
-       shaderPackTextures: () => jB
-     });
-     var YB = GB(5546);
-     let DB = null,
-       QB = null;
- 
-     function oB() {
-       return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: OB,
-           textureNameToIndex: GB,
-           textureAnimationData: QB
-         } = BB;
- ... (6 more removed lines; see GitHub link above)
+   7574: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW
+     });
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(1172),
+       PW = OW(1283);
+ 
+     function LW(WW) {
+       let {
+         item: iW,
+         className: OW
+       } = WW;
+       const {
+         t: mW
+ ... (169 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/153.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/153.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L2)

```diff
- export const ids = [152, 153];
+ export const ids = [153];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L4)

```diff
-   7193: (BB, OB, GB) => {
+   42556: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L6-L19)

```diff
-       forgetShaderPackActiveHint: () => KB,
-       isOtherApiVersion: () => UB,
-       isShaderPackActive: () => AB,
-       isShaderPackChangePending: () => nB,
-       markShaderPackChangePending: () => SB,
-       pageShaderPackValidationVersion: () => fB,
-       reconcileStoredShaderPackHint: () => dB,
-       removeShaderPack: () => WB,
-       replaceShaderPack: () => ZB,
-       saveShaderPack: () => qB,
-       shaderPackNeedsCheck: () => kB,
-       storedPackOutcome: () => VB,
-       storedShaderPackFiles: () => zB,
-       toStoredShaderPack: () => PB
+       ShaderPackCategory: () => oW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L21-L27` → after: `L8-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L8-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L8-L273) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L21-L27)

```diff
-     var YB = GB(5546),
-       DB = GB(5538),
-       QB = GB(31),
-       oB = GB(3885),
-       jB = GB(7198),
-       yB = GB(7174);
-     const JB = "shaderPackChangePending";
+     var mW = OW(62),
+       EW = OW(1616),
+       NW = OW(1532),
+       PW = OW(1605),
+       LW = OW(1172),
+       cW = OW(100),
+       wW = OW(25),
+       tW = OW(1729),
+       ZW = OW(7621),
+       xW = OW(315),
+       lW = OW(7656),
+       AW = OW(7648),
+       bW = OW(7659),
+       jW = OW(7567),
+       UW = OW(5910),
+       kW = OW(5952),
+ ... (250 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L31-L36` → after: `L437-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L437-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L437-L473) · [Before (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L31-L36)

```diff
-       return {
-         manifest: BB.manifest,
-         files: (0, YB.y)(BB.files),
-         validation: OB,
-         ...GB && {
-           listing: GB
+       return WW instanceof EW.c && WW.errorMessageForUser ? WW.errorMessageForUser : iW(OW)
+     }
+   },
+   7570: (WW, iW, OW) => {
+     OW.d(iW, {
+       B: () => PW,
+       F: () => mW,
+       G: () => xW,
+       K: () => tW,
+       L: () => MW,
+       M: () => ZW,
+       N: () => wW,
+       c: () => AW,
+       d: () => jW,
+       e: () => bW,
+       f: () => lW,
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L38-L77` → after: `L475-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L475-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L475-L502) · [Before (L38-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L38-L77)

```diff
-       }
-     }
- 
-     function zB(BB) {
-       return Object.keys(BB.files).map((OB => ({
-         path: OB,
-         source: BB.files[OB]
-       })))
-     }
-     let lB = Promise.resolve();
- 
-     function pB(BB) {
-       const OB = lB.then(BB);
-       return lB = OB.catch((() => {})), OB
-     }
- 
- ... (24 more removed lines; see GitHub link above)
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
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L79-L161` → after: `L504-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L504-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/153.js#L504-L516) · [Before (L79-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/153.js#L79-L161)

```diff
-       return null === BB ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : UB(BB) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) || BB.validation.fromRecheck ? null === OB ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : kB(BB, OB) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : BB.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (67 more removed lines; see GitHub link above)
+       return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
+     }
+ 
+     function MW(WW, iW) {
+       return `shaderPacks/${WW}/${iW}.json`
+     }
+ 
+     function KW(WW, iW, OW, mW) {
+       return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
+     }
+ 
+     function SW(WW, iW, OW, mW) {
+       return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/154.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/154.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L2)

```diff
- export const ids = [154];
+ export const ids = [154, 159, 160];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L4)

```diff
-   7176: (BB, OB, GB) => {
+   42022: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L6-L9)

```diff
-       d: () => AB,
-       g: () => VB,
-       h: () => RB,
-       l: () => NB
+       e: () => ZW,
+       installListedShaderPack: () => tW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L11-L39` → after: `L9-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L9-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L9-L74) · [Before (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L11-L39)

```diff
-     var YB = GB(7179);
-     const DB = 6,
-       QB = 3,
-       oB = 1,
-       jB = 2,
-       yB = 4,
-       JB = 8,
-       MB = 16,
-       PB = 32,
-       zB = 64,
-       lB = 128,
-       pB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function qB(BB) {
-       if (!BB) return 0;
-       const OB = pB.indexOf(BB);
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(7570),
+       EW = OW(5970),
+       NW = OW(1185),
+       PW = OW(7621),
+       LW = OW(5961),
+       cW = OW(7656),
+       wW = OW(7648);
+     async function tW(WW) {
+       const iW = await (0, PW.loadPageShaderPackCompiler)();
+       if (null === iW) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const OW = await ZW(WW, iW);
+       return "failed" === OW.kind ? OW : await (0, cW.saveShaderPack)(OW.stored, iW) ? ((0, cW.markShaderPackChangePending)(), OW) : {
+         kind: "failed",
+ ... (50 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L41-L42` → after: `L76-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L76-L80) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L41-L42)

```diff
-         strict: BB >= OB,
-         program: YB.e[BB % OB]
+         kind: "loaded",
+         stored: (0, cW.toStoredShaderPack)(ZW, tW, {
+           packId: WW.packId,
+           sourceHash: WW.sourceHash
+         })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L45-L92` → after: `L83-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L83-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L83-L173) · [Before (L45-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L45-L92)

```diff
- 
-     function RB(BB) {
-       return Number(BB.strict) * YB.e.length + YB.e.indexOf(BB.program)
-     }
- 
-     function WB(BB) {
-       return "" === BB ? [] : BB.split(" ")
-     }
- 
-     function AB(BB) {
-       const OB = {
-         variantFlags: new Uint8Array(DB),
-         hooks: new Uint8Array(DB * QB),
-         moduleCodes: Array(DB).fill(""),
-         reads: Array(2 * DB).fill("")
-       };
- ... (32 more removed lines; see GitHub link above)
+   },
+   44906: (WW, iW, OW) => {
+     OW.d(iW, {
+       followListingUpdates: () => xW
+     });
+     var mW = OW(192),
+       EW = OW(25),
+       NW = OW(1584),
+       PW = OW(1111),
+       LW = OW(7621),
+       cW = OW(5961),
+       wW = OW(42022),
+       tW = OW(7656);
+     const ZW = ["apiVersion", "invalid", "errors"];
+     async function xW(WW, iW) {
+       const OW = await PW.userContextManager.getCurrentUserContext(),
+ ... (75 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L98` → after: `L315-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L315-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L315-L340) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L98)

```diff
-   41714: (BB, OB, GB) => {
+   7637: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
+     });
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L100` → after: `L342-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L342-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L342-L431) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L100)

```diff
-       b: () => DB,
+       c: () => cW,
+       g: () => LW
+     });
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
+ ... (74 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L107-L111` → after: `L438-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L438-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L438-L440) · [Before (L107-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L107-L111)

```diff
-       o: () => yB,
-       p: () => oB,
-       t: () => qB,
-       w: () => lB,
-       z: () => pB
+       q: () => KW,
+       u: () => NW,
+       x: () => LW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L113-L124` → after: `L442-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L442-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L442-L455) · [Before (L113-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L113-L124)

```diff
-     const YB = 3,
-       DB = 0,
-       QB = 1,
-       oB = 2,
-       jB = {
-         uniform: 3,
-         sz: 4,
-         special: 5,
-         volume: 6,
-         sampler: 7,
-         entities: 8,
-         entityGrids: 9
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
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L126-L245` → after: `L457-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L457-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/154.js#L457-L498) · [Before (L126-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/154.js#L126-L245)

```diff
-       yB = 10,
-       JB = "BloxdPackInputs",
-       MB = "bloxdPackInputs",
-       PB = [{
-         name: "seconds",
-         type: "f32",
-         offset: 0
-       }, {
-         name: "lit",
-         type: "u32",
-         offset: 4
-       }, {
-         name: "renderOffset",
-         type: "vec3i",
-         offset: 16
-       }, {
- ... (104 more removed lines; see GitHub link above)
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
+       return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof … [truncated]
+ ... (26 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/155.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/155.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L4)

```diff
-   34631: (BB, OB, GB) => {
+   53928: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L6-L7)

```diff
-       b: () => jB,
-       d: () => oB
+       startHarnessShaderPack: () => ZW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L9-L25` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L8-L86) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L9-L25)

```diff
-     var YB = GB(258),
-       DB = GB(118),
-       QB = GB(34637);
- 
-     function oB() {
-       var BB, OB, GB;
-       return null !== (BB = (0, YB.j)(null !== (OB = null === (GB = (0, DB.o)()) || void 0 === GB ? void 0 : GB.renderer) && void 0 !== OB ? OB : null, (0, DB.m)())) && void 0 !== BB ? BB : "unknown"
-     }
- 
-     function jB(BB, OB, GB, YB, DB) {
-       const oB = null === OB ? "untimed" : `${Math.round(OB)} ms`;
-       return `frames stalled, ${GB}, gpu ${(0,QB.c)(DB)}, blocking ${oB}, drawn ${Math.round(BB)} ms apart, timers ${YB.timers}, timer gap ${Math.round(YB.longestGapMs)} ms`
-     }
-   },
-   34637: (BB, OB, GB) => {
-     function YB(BB) {
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(7570),
+       EW = OW(5970),
+       NW = OW(7646),
+       PW = OW(7621),
+       LW = OW(5961),
+       cW = OW(40448),
+       wW = OW(7637),
+       tW = OW(7648);
+     async function ZW(WW, iW) {
+       const {
+         stored: OW,
+         info: ZW
+       } = await async function(WW, iW) {
+         const OW = await async function(WW) {
+           const iW = await fetch(WW);
+           if (!iW.ok) throw new Error(`Couldn't fetch the shader pack at ${WW}: HTTP ${iW.status}`);
+ ... (63 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L31-L38` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L89-L104) · [Before (L31-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L31-L38)

```diff
-   41646: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB,
-       c: () => MB,
-       d: () => oB,
-       h: () => DB,
-       j: () => jB,
-       k: () => JB
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
+       replaceShaderPack: () => jW,
+       saveShaderPack: () => bW,
+       shaderPackNeedsCheck: () => JW,
+       storedPackOutcome: () => KW,
+       storedShaderPackFiles: () => xW,
+       toStoredShaderPack: () => ZW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L40-L42` → after: `L106-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L106-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L106-L122) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L40-L42)

```diff
-     class YB extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
+     var mW = OW(5970),
+       EW = OW(5961),
+       NW = OW(39),
+       PW = OW(4666),
+       LW = OW(7659),
+       cW = OW(7637);
+     const wW = "shaderPackChangePending";
+     let tW = null;
+ 
+     function ZW(WW, iW, OW) {
+       return {
+         manifest: WW.manifest,
+         files: (0, mW.A)(WW.files),
+         validation: iW,
+         ...OW && {
+           listing: OW
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L47` → after: `L127-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L127-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L127-L130) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L47)

```diff
-       return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
+       return Object.keys(WW.files).map((iW => ({
+         path: iW,
+         source: WW.files[iW]
+       })))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L49` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L132) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L49)

```diff
-     const QB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+     let lW = Promise.resolve();
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L52-L53` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L135-L136) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L52-L53)

```diff
-       var OB;
-       return BB instanceof WebAssembly.RuntimeError || BB instanceof YB || DB(BB) && QB.test(null !== (OB = BB.stack) && void 0 !== OB ? OB : "")
+       const iW = lW.then(WW);
+       return lW = iW.catch((() => {})), iW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L57-L66` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L140) · [Before (L57-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L57-L66)

```diff
-       if (oB(BB)) throw BB;
-       console.error(OB, BB)
-     }
- 
-     function yB(BB, OB, GB, DB, QB) {
-       if (OB % DB !== 0 || OB + GB > BB.byteLength) throw new YB(`${QB}: ${GB} bytes at ${OB}, ${DB}-aligned, outside ${BB.byteLength} bytes of memory`)
-     }
- 
-     function JB(BB, OB, GB, YB, DB) {
-       return 0 === GB ? null : (yB(OB, GB, YB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, DB), new BB(OB, GB, YB))
+       return AW((() => UW(WW, iW)))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L69-L70` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L143-L144) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L69-L70)

```diff
-     function MB(BB, OB, GB, YB, DB) {
-       return 0 === OB ? null : (yB(BB, OB, GB, YB, DB), new DataView(BB, OB, GB))
+     function jW(WW, iW, OW) {
+       return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L72-L142` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L146-L148) · [Before (L72-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L72-L142)

```diff
-   },
-   41729: (BB, OB, GB) => {
-     GB.d(OB, {
-       B: () => VO,
-       E: () => sB,
-       I: () => tB,
-       K: () => bB,
-       N: () => YO,
-       O: () => GO,
-       Q: () => BO,
-       U: () => QO,
-       W: () => NO,
-       Z: () => DO,
-       _: () => OO,
-       bb: () => oO,
-       e: () => mB,
- ... (55 more removed lines; see GitHub link above)
+     async function UW(WW, iW) {
+       const OW = await NW.f.setItem(LW.c, WW);
+       return OW && nW(WW, iW), OW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L144-L166` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L150-L151) · [Before (L144-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L144-L166)

```diff
- 
-     function iB(BB) {
-       let OB;
-       try {
-         OB = BB.getContext("webgl", {
-           powerPreference: WB.e
-         })
-       } catch {
-         OB = null
-       }
-       if (null === OB) return null;
-       let GB = null;
-       try {
-         const BB = OB.getParameter(OB.MAX_TEXTURE_SIZE);
-         GB = "number" === typeof BB && BB > 0 ? BB : null
-       } catch {
- ... (7 more removed lines; see GitHub link above)
+     async function kW() {
+       await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L171-L178` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L155) · [Before (L171-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L171-L178)

```diff
-       return "ios" === (0, zB.getOperatingSystem)() ? "ios" : "other"
-     }
-     const rB = "mali_valhall",
-       XB = new Set(["nvidia_pre_turing"]),
-       wB = new Set(["intel_gen7_8"]);
- 
-     function EB(BB, OB, GB) {
-       return LB.has(BB) ? "android_arm" === BB && OB === rB && "mobileAndroid" !== GB ? "webgpu_default" : "webgl_default" : null
+       return AW(kW)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L181-L192` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L158-L159) · [Before (L181-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L181-L192)

```diff
-     function cB(BB) {
-       return function(BB) {
-         try {
-           return BB()
-         } catch {
-           return null
-         }
-       }((() => {
-         var OB, GB, YB, oB;
-         const jB = null !== (OB = null === (GB = BB.info) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== OB ? OB : "";
-         return "windows" === (0, zB.getOperatingSystem)() && "" !== jB && "intel" !== (0, zB.normaliseGpuVendor)(jB) ? null : ((0, zB.seedGpuVendor)(jB), EB((0, DB.l)(), (0, QB.d)(jB, null !== (YB = null === (oB = BB.info) || void 0 === oB ? void 0 : oB.architecture) && void 0 != … [truncated]
-       }))
+     function MW(WW, iW) {
+       return "active" === KW(WW, iW).kind
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L195` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L162) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L195)

```diff
-     function hB() {
+     function KW(WW, iW) {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L197-L255` → after: `L164-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L164-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L164-L183) · [Before (L197-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L197-L255)

```diff
-       return {
-         gpu: null !== (BB = navigator.gpu) && void 0 !== BB ? BB : null,
-         webgl2: dB.f,
-         webgl1: () => function(BB) {
-           let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SB.e;
-           try {
-             OB = BB.getContext("webgl")
-           } catch {
-             OB = null
-           }
-           if (null === OB) return [mB];
-           const YB = [];
-           try {
-             for (const DB of GB.extensions) null === OB.getExtension(DB) && YB.push(DB);
-             for (const [DB, QB] of Object.entries(GB.limits)) {
-               const BB = OB[DB],
- ... (43 more removed lines; see GitHub link above)
+       return null === WW ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : yW(WW) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : JW(WW, iW) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : WW.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L260-L273` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L188) · [Before (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L260-L273)

```diff
-       let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       if ((0, jB.s)("render") && "webgl1" === (0, jB.p)("renderer")) return "webgl1";
-       const OB = [() => new URLSearchParams(window.location.search).get(MB.d), () => qB.g.getItem(MB.f), () => {
-         const OB = localStorage.getItem(uB);
-         return null !== OB && BB && localStorage.removeItem(uB), "1" === OB ? "webgl2" : null
-       }];
-       for (const GB of OB) {
-         let BB = null;
-         try {
-           BB = TB(GB())
-         } catch {}
-         if (null !== BB) return BB
-       }
-       return null
+       NW.j.setItem(wW, performance.timeOrigin)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L276-L281` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L191-L192) · [Before (L276-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L276-L281)

```diff
-     function eB(BB) {
-       try {
-         return BB()
-       } catch {
-         return !1
-       }
+     function YW() {
+       return NW.j.getItem(wW) === performance.timeOrigin
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L285` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L196) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L285)

```diff
-       return "lite" === BB ? "webgpu" : "webgl2" === BB || "babylon" === BB ? "webgl" : null
+       return !(0, EW.g)(WW.manifest.apiVersion)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L289-L356` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L200) · [Before (L289-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L289-L356)

```diff
-       return "none" === BB || "compatibility_mode" === BB
-     }
-     async function CB() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hB();
-       const OB = await async function(BB) {
-         const OB = vB(BB),
-           {
-             source: GB
-           } = OB,
-           YB = !OB.asked,
-           DB = "gpu" in OB && OB.heldBack,
-           oB = function(BB) {
-             let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-             return DB && !bB(BB) ? {
-               reason: "webgl_holdback",
-               adapter: null,
- ... (52 more removed lines; see GitHub link above)
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L360-L364` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L204-L205) · [Before (L360-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L360-L364)

```diff
-       let {
-         source: GB,
-         asked: YB
-       } = OB;
-       return YB || "default" === GB ? (0, kB.i)(YB, BB.defaultCompatibility) : void 0
+       var OW;
+       return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L368-L400` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L209-L211) · [Before (L368-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L368-L400)

```diff
-       const OB = BB.override(),
-         GB = BB.webGpuSetting(),
-         YB = null === OB && !0 !== GB && BB.zp(),
-         DB = null !== OB || null !== GB || YB ? null : BB.claimed(),
-         QB = null !== OB ? "override" : !0 === GB ? "setting" : YB ? "pack" : !1 === GB ? "setting" : null !== DB ? "claim" : "default",
-         oB = function(BB) {
-           return "override" === BB || "setting" === BB
-         }(QB);
-       if ("webgl" === OB || "webgl1" === OB || "webgl" === DB || "setting" === QB && !1 === GB) return {
-         source: QB,
-         asked: oB,
-         refused: "not_requested"
-       };
-       if (!BB.gpu) return {
-         source: QB,
-         asked: oB,
- ... (17 more removed lines; see GitHub link above)
+       return AW((async () => {
+         nW(await (0, LW.g)(!0), WW)
+       }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L404-L475` → after: `L215-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L215-L217) · [Before (L404-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L404-L475)

```diff
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
-           ...hB(),
-           override: () => aB(!1)
-         },
-         OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zB.isWebKit,
-         GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gB;
-       try {
-         if (!OB()) return !1;
-         const YB = vB(BB);
-         if (!("gpu" in YB) || YB.heldBack) return !1;
-         const DB = "default" === YB.source ? EB(GB(), "apple", lB.siteUsed) : null;
-         return null === DB || !BB.gpuClassOnWebGl(DB)
-       } catch (YB) {
-         return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", YB), !1
-       }
-     }
- ... (56 more removed lines; see GitHub link above)
+       return AW((async () => {
+         NW.i.removeItem(PW.b)
+       }))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L479-L490` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L221) · [Before (L479-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L479-L490)

```diff
-       return "webgpu" !== BB.backend || OB && (null === BB.adapter || !(0, ZB.H)(BB.adapter))
-     }
- 
-     function jO(BB, OB, GB, YB) {
-       const DB = new URLSearchParams(OB).get(GB),
-         QB = null !== DB && void 0 !== DB ? DB : null === BB ? null : (0, yB.g)(GB);
-       return null !== QB && YB(QB) ? (xB ||= null === DB && "webgpu" === (null === BB || void 0 === BB ? void 0 : BB.backend), QB) : null
-     }
- 
-     function yO(BB, OB, GB, YB, DB) {
-       const QB = jO(BB, OB, GB, (BB => BB === YB || BB === DB));
-       return null === QB ? null : QB === YB
+       MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
```
