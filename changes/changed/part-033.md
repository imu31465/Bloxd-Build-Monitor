# Changed — Bundle Modifications Report (Part 033 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `33 / 82` (**339** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L237` → after: `L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1109) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L237)

```diff
-                 Re(!Je)
+                 (0, HW.forceGlobalSignOut)()
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L239-L241` → after: `L1111-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1111-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1111-L1114) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L239-L241)

```diff
-               children: [(0, fe.jsx)(pe, {
-                 name: Je ? "chevron-up" : "chevron-down"
-               }), Je ? "Show less" : `Show all ${Ue} lines`]
+               className: "AccountSettingsSignedInButton",
+               children: [(0, ZW.jsx)(LW.c, {
+                 name: "right-from-bracket"
+               }), tW("auth:signOut")]
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L243-L264` → after: `L1116-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1116-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1116-L1248) · [Before (L243-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L243-L264)

```diff
-           })
-         }
-         var We = He(5220);
-         var te = He(5222);
-         const Ze = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;
- 
-         function we(ee) {
-           const ie = new Map;
-           let He, ye = [],
-             be = !1;
-           const Me = () => {
-             He && ie.set(He.name, He.lines.join("\n").trimEnd())
-           };
-           for (const Ke of ee.split("\n")) {
-             const ee = Ke.match(Ze);
-             be || Ke.startsWith("/*") ? (be || (Me(), He = void 0), ye.push(Ke), be = !Ke.includes("*/")) : ee ? (Me(), He = {
- ... (6 more removed lines; see GitHub link above)
+           })]
+         }), null !== wi && (0, ZW.jsxs)("div", {
+           className: "SettingBox AccountSettingsSuperRank",
+           children: [(0, ZW.jsx)("div", {
+             className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
+             children: (0, ZW.jsx)(pW.f, {
+               tierId: wi.tier
+             })
+           }), (0, ZW.jsx)(Li, {
+             showing: EW
+           })]
+         }), !Ei && jW && (0, ZW.jsxs)("div", {
+           className: "SettingBox AccountSettingsSuperRank",
+           children: [(0, ZW.jsx)("div", {
+             className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
+             children: (0, ZW.jsx)(pW.f, {
+ ... (117 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L267` → after: `L1251-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1251-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1251-L1254) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L267)

```diff
-           return "methods" === ee || "callbacks" === ee || "settings" === ee
+           const iW = new Intl.DisplayNames([WW], {
+             type: "language"
+           }).of(WW);
+           return iW.charAt(0).toUpperCase() + iW.slice(1)
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L269-L289` → after: `L1256-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1256-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1256-L1310) · [Before (L269-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L269-L289)

```diff
-         const Pe = {
-             readme: {
-               icon: "code-block",
-               summary: "Code blocks, boards and World Code, and the globals your code can use.",
-               layout: "article"
-             },
-             snippets: {
-               icon: "scroll",
-               summary: "Ready-made code for common jobs, from moving players to running code every second.",
-               layout: "snippets"
-             },
-             howTo: {
-               icon: "book",
-               summary: "Step-by-step guides for variations, plugins and full games.",
-               layout: "article",
-               navTitle: "All how-tos"
- ... (5 more removed lines; see GitHub link above)
+         return cW && (wW = "settingsMenu:showCoordinatesHidden", tW = "settingsMenu:showChunkCoordinatesHidden"), (0, ZW.jsxs)("div", {
+           className: "SettingsMenuRightInner",
+           children: [iW && UW.featureFlags.canUseInviteLinks && (0, ZW.jsxs)("div", {
+             className: "SettingBox",
+             children: [(0, ZW.jsx)("div", {
+               className: "SettingsMenuInviteHeader",
+               children: OW("settingsMenu:inviteLink")
+             }), (0, ZW.jsx)(Ii.i, {})]
+           }), (0, ZW.jsxs)("div", {
+             className: "SettingBox",
+             children: [(0, ZW.jsx)("div", {
+               className: "SliderText",
+               style: {
+                 marginBottom: "10px"
+               },
+               children: OW("settingsMenu:language")
+ ... (39 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L291-L294` → after: `L1312-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1312-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1312-L1319) · [Before (L291-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L291-L294)

```diff
-             apiReference: {
-               icon: "prompt",
-               summary: "Every method on the api object, with parameters and return types.",
-               layout: "methods"
+             disabled: cW
+           }), (0, ZW.jsx)(YW.e, {
+             label: OW(tW),
+             checked: EW.showChunkCoordinates,
+             onClick: WW => {
+               yW.d.setClientEscMenuOptions({
+                 showChunkCoordinates: WW
+               })
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L296-L299` → after: `L1321-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1321-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1321-L1376) · [Before (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L296-L299)

```diff
-             callbacks: {
-               icon: "bolt",
-               summary: "Functions your world code defines to react to game events.",
-               layout: "callbacks"
+             disabled: cW
+           }), (0, ZW.jsx)(YW.e, {
+             label: OW("settingsMenu:showFps"),
+             checked: EW.showFPS,
+             onClick: WW => {
+               yW.d.setClientEscMenuOptions({
+                 showFPS: WW
+               })
+             }
+           }), (0, ZW.jsx)(YW.e, {
+             label: OW("settingsMenu:disableBunnyHopping"),
+             checked: EW.disableBunnyHopping,
+             onClick: WW => {
+               yW.d.setClientEscMenuOptions({
+                 disableBunnyHopping: WW
+               })
+ ... (40 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L301-L305` → after: `L1378-L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1378-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1378-L1401) · [Before (L301-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L301-L305)

```diff
-             clientOptions: {
-               icon: "player",
-               summary: "Per-player options such as speed, health and camera.",
-               layout: "settings",
-               setterSnippet: (ee, ie) => `api.setClientOption(playerId, "${ee}", ${ie})`
+             circleInfoText: OW("settingsMenu:showTeamSymbolsInfo")
+           })]
+         })
+       })),
+       mO = (0, mW.memo)((function() {
+         const {
+           t: WW
+         } = (0, PW.B)(), {
+           soundVolume: iW,
+           musicVolume: OW,
+           clientEscMenuOptions: mW
+         } = (0, yW.p)(["soundVolume", "musicVolume", "clientEscMenuOptions"]);
+         return (0, ZW.jsxs)("div", {
+           className: "SettingsMenuRightInner",
+           children: [(0, ZW.jsx)(YW.k, {
+             name: WW("settingsMenu:musicVolume"),
+ ... (8 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L307-L311` → after: `L1403-L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1403-L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1403-L1413) · [Before (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L307-L311)

```diff
-             entitySettings: {
-               icon: "eye",
-               summary: "How one player sees and interacts with another entity.",
-               layout: "settings",
-               setterSnippet: (ee, ie) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${ee}", ${ie})`
+             format: WW => WW.toFixed(2)
+           }), (0, ZW.jsx)(YW.k, {
+             name: WW("settingsMenu:soundEffectsVolume"),
+             min: 0,
+             max: 1,
+             step: .01,
+             initValue: iW,
+             onChange: WW => {
+               yW.d.set({
+                 soundVolume: Math.round(100 * WW) / 100
+               })
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L313-L317` → after: `L1415-L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1415-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1415-L1422) · [Before (L313-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L313-L317)

```diff
-             mobSettings: {
-               icon: "mob",
-               summary: "Health, movement, combat and AI settings for mobs.",
-               layout: "settings",
-               setterSnippet: (ee, ie) => `api.setMobSetting(mobId, "${ee}", ${ie})`
+             format: WW => WW.toFixed(2)
+           }), (0, ZW.jsx)(YW.e, {
+             label: WW("settingsMenu:showSoundDirections"),
+             checked: mW.showSoundDirections,
+             onClick: WW => {
+               yW.d.setClientEscMenuOptions({
+                 showSoundDirections: WW
+               })
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L319-L378` → after: `L1424-L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1424-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1424-L1490) · [Before (L319-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L319-L378)

```diff
-             vehicleSettings: {
-               icon: "car",
-               summary: "Movement, physics and camera settings for vehicles.",
-               layout: "settings",
-               setterSnippet: (ee, ie) => `api.setVehicleSetting(vehicleId, "${ee}", ${ie})`
-             },
-             meshEntities: {
-               icon: "mesh",
-               summary: "Spawn mesh entities and throwables, and attach meshes to nodes.",
-               layout: "article"
-             },
-             qte: {
-               icon: "stopwatch",
-               summary: "Quick time events: progress bars, timed clicks and rhythm games.",
-               layout: "article"
-             },
- ... (44 more removed lines; see GitHub link above)
+             circleInfoText: WW("settingsMenu:showSoundDirectionsInfo")
+           })]
+         })
+       }));
+     var EO = OW(724),
+       NO = OW(1526),
+       PO = OW(3279),
+       LO = OW(3270),
+       cO = OW(4723);
+     const wO = {
+       app: "notificationSettings:pushTargetsApp",
+       browser: "notificationSettings:pushTargetsBrowser",
+       msnPlay: "notificationSettings:pushTargetsMsnPlay"
+     };
+ 
+     function tO() {
+ ... (51 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L380-L413` → after: `L1492-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1492-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1492-L1514) · [Before (L380-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L380-L413)

```diff
-           Ae = {
-             Variations: {
-               icon: "layers",
-               summary: "Alternate versions of a custom game, and matchmaking players between them."
-             },
-             Plugins: {
-               icon: "puzzle",
-               summary: "Reusable first-party World Code features, imported from @plugins."
-             },
-             "Building a SessionBasedGame": {
-               icon: "trophy",
-               summary: "A full team game: lobby, teams, map voting, rounds and a winner."
-             },
-             "Interactable NPCs": {
-               icon: "speech-bubble",
-               summary: "Entities players talk to or use, such as shopkeepers and guards."
- ... (18 more removed lines; see GitHub link above)
+           children: WW("notificationSettings:pushTurnOn")
+         })]
+       })
+     }
+     var ZO = OW(3524),
+       xO = OW(3265),
+       lO = OW(1977),
+       AO = OW(39);
+     async function bO() {
+       return "dailyDropReminderAsked_" + (await HW.userContextManager.getCurrentUserContext()).whamm
+     }
+ 
+     function jO(WW) {
+       return async function(WW) {
+         if (WW.remindersOn || (0, yW.e)(yW.d.get("gameState"))) return null;
+         const iW = await bO();
+ ... (7 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L415-L417` → after: `L1516-L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1516-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1516-L1543) · [Before (L415-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L415-L417)

```diff
- 
-         function ae(ee) {
-           return "readme" === ee ? "getting-started" : Ye(ee)
+       }(WW).catch((WW => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", WW), null)))
+     }
+ 
+     function UO() {
+       return (0, PO.e)().then((WW => WW.app + WW.browser + WW.msnPlay > 0), (WW => (console.error("Couldn't tell where push notifications reach this account:", WW), !0)))
+     }
+     async function kO(WW) {
+       const iW = (0, ZO.x)({
+           remindersOn: !0
+         }),
+         OW = null === WW ? Promise.resolve() : WW(),
+         [mW, EW] = await Promise.allSettled([iW, OW]);
+       "rejected" === mW.status && console.error("Failed to turn on Lucky Skin Block reminders:", mW.reason), "rejected" === EW.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", EW.reason), "rejected" !== mW.status && "rejected" !== EW … [truncated]
+         translationKey: "dailyDrop:remindFailed"
+       })
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L419-L523` → after: `L1545-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1545-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1545-L1553) · [Before (L419-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L419-L523)

```diff
-         const ce = "## Glossary of Referenced Types";
-         const xe = [{
-             id: "welcome",
-             slug: "",
-             title: "Welcome",
-             icon: "house",
-             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
-             layout: "article",
-             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
-           }, ...te.c.flatMap((ee => {
-             const ie = {
-               id: ee.id,
-               slug: ae(ee.id),
-               title: ee.title,
-               markdown: ee.content,
-               ...Pe[ee.id]
- ... (89 more removed lines; see GitHub link above)
+       },
+       MO = {
+         remindersOn: {
+           label: "dailyDrop:settingReminders",
+           reportAs: "reminders"
+         },
+         hidden: {
+           label: "dailyDrop:settingHide",
+           reportAs: "hidden"
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L525-L529` → after: `L1555-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1555-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1555-L1593) · [Before (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L525-L529)

```diff
-         const ve = new Map;
- 
-         function ue(ee) {
-           let ie = ve.get(ee.id);
-           return ie || (ie = (0, We.y)(ee.markdown, "changelog" === ee.layout ? 3 : 2), ve.set(ee.id, ie)), ie
+       };
+ 
+     function KO(WW) {
+       let {
+         setting: iW,
+         value: OW
+       } = WW;
+       const {
+         t: EW
+       } = (0, PW.B)(), LW = (0, cO.c)(), [cW, wW] = (0, mW.useState)(null), [tW, xW] = (0, mW.useState)(!1), [lW, AW] = (0, mW.useState)(null);
+       return (0, mW.useEffect)((() => {
+         "remindersOn" === iW && (0, LO.h)().then((WW => {
+           LW.current && AW((() => WW))
+         }), (WW => {
+           console.error("Couldn't tell whether this device can take push notifications:", WW)
+         }))
+ ... (23 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L531-L533` → after: `L1595-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1595-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1595-L1719) · [Before (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L531-L533)

```diff
- 
-         function me(ee, ie) {
-           return ue(ee).sections.some((ee => ee.heading.anchor === ie || ee.blocks.some((ee => "heading" === ee.kind && ee.anchor === ie))))
+       })
+     }
+     const SO = (0, mW.memo)((function() {
+       const {
+         t: WW
+       } = (0, PW.B)(), {
+         clientEscMenuOptions: iW
+       } = (0, yW.p)(["clientEscMenuOptions"]), {
+         userContext: OW
+       } = (0, AW.e)(), mW = OW.dailyDrop;
+       return (0, ZW.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [UW.featureFlags.useSocialFeatures && (0, ZW.jsx)(YW.h, {
+           label: WW("notificationSettings:friendRequests"),
+           options: EO.b.map((iW => ({
+             value: iW,
+ ... (109 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L535-L550` → after: `L1721-L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1721-L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1721-L1731) · [Before (L535-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L535-L550)

```diff
- 
-         function le(ee) {
-           const [ie, ...He] = ee.replace(/^#/, "").split("-"), ye = xe.find((ee => ee.id === ie));
-           if (!ye) return null;
-           const be = He.length > 0 ? (0, We.t)(He.join("-")) : "";
-           for (const Ke of null !== (Me = ye.childPageIds) && void 0 !== Me ? Me : []) {
-             var Me;
-             const ee = Ce(Ke);
-             if (ee.sourceAnchor === be) return {
-               page: ee,
-               anchor: ""
-             };
-             if (me(ee, be)) return {
-               page: ee,
-               anchor: be
-             }
+       }), [vW, gW]);
+       const DW = (!(HW && !vW) || !JW) && KW,
+         VW = function(WW, iW, OW, mW, EW) {
+           return (0, HO.c)(OW, mW) && !0 === iW ? {
+             translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
+             checked: !0,
+             disabled: !0
+           } : {
+             translationKey: !1 !== iW ? "settingsMenu:newWebGpu" : EW ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
+             checked: WW && !1 !== iW,
+             disabled: !0 !== iW
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L552-L554` → after: `L1733-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1733-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1733-L1868) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L552-L554)

```diff
-           return {
-             page: ye,
-             anchor: be
+         }(jW.useWebGpu, DW, HW, uW, oW),
+         pW = (jW.useWebGpu || (0, HO.c)(HW, uW)) && HW && !0 === DW,
+         fW = (0, bW.e)("lightingOverride"),
+         CW = !(0, nO.K)(fW);
+       let XW = "settingsMenu:enableLighting";
+       CW && (XW = fW ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
+       const BW = WW => {
+           var iW, OW, mW;
+           const EW = null !== (iW = WW.showFog) && void 0 !== iW ? iW : tW("showFog"),
+             NW = null !== (OW = WW.antiAliasing) && void 0 !== OW ? OW : jW.antiAliasing,
+             PW = null !== (mW = WW.useWebGpu) && void 0 !== mW ? mW : jW.useWebGpu,
+             LW = !oO.K && EW !== kW.current || NW !== sW.current || PW !== MW.current;
+           lW(LW ? () => YW.n : null)
+         },
+         qW = (0, bW.e)("fogChunkDistanceOverride"),
+         RW = (0, bW.e)("fogBlockDistanceOverride"),
+ ... (120 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L556-L560` → after: `L1870-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1870-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1870-L1919) · [Before (L556-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L556-L560)

```diff
-         }
-         const Se = {
-           Examples: {
-             pageId: "snippets",
-             anchor: ""
+         }), (0, ZW.jsx)(YW.e, {
+           label: AW("settingsMenu:disableViewBobbing"),
+           checked: jW.disableBobbing,
+           onClick: WW => {
+             yW.d.setClientEscMenuOptions({
+               disableBobbing: WW
+             })
+           },
+           circleInfoText: AW("settingsMenu:disableViewBobbingInfo")
+         }), (0, ZW.jsx)(YW.e, {
+           label: AW("settingsMenu:antiAliasing"),
+           checked: jW.antiAliasing,
+           onClick: WW => {
+             BW({
+               antiAliasing: WW
+             }), (0, VO.h)("antiAliasing"), yW.d.setClientEscMenuOptions({
+ ... (34 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L562-L564` → after: `L1921-L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1921-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1921-L1930) · [Before (L562-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L562-L564)

```diff
-           Notes: {
-             pageId: "readme",
-             anchor: "Globals"
+           circleInfoText: AW("settingsMenu:distantNametagsInfo")
+         }), (0, ZW.jsx)(YW.e, {
+           label: AW(VW.translationKey),
+           checked: VW.checked,
+           onClick: WW => {
+             BW({
+               useWebGpu: WW
+             }), yW.d.setClientEscMenuOptions({
+               useWebGpu: WW
+             })
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L566-L568` → after: `L1932-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1932-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1932-L2001) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L566-L568)

```diff
-           "Glossary-of-Referenced-Types": {
-             pageId: "types",
-             anchor: ""
+           circleInfoText: AW("settingsMenu:newWebGpuInfo"),
+           disabled: VW.disabled
+         })]
+       })
+     }
+     var qO = OW(5126),
+       RO = OW(10092),
+       GO = OW(35177),
+       IO = OW(10104),
+       aO = OW(10158),
+       rO = OW(35181);
+     const zO = {
+         color: 16777215,
+         name: "white"
+       },
+       FO = {
+ ... (54 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L570-L601` → after: `L2003-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2003-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2003-L2014) · [Before (L570-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L570-L601)

```diff
-         };
- 
-         function ne(ee, ie) {
-           let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-           const ye = ie.slug ? `${ee}/${ie.slug}` : ee;
-           return He ? `${ye}#${He}` : ye
-         }
-         var je = He(5239);
-         const se = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
-           Ie = new Set(["GameApi", "Console", "_TypeOf"]),
-           he = 4;
- 
-         function Ne(ee) {
-           let ie = ee.length;
-           for (; ie > 0 && "" === ee[ie - 1].trim();) ie--;
-           return ee.slice(0, ie)
- ... (16 more removed lines; see GitHub link above)
+         }, WW)
+       }, LW = (WW, OW, NW) => (0, ZW.jsx)(aO.b, {
+         label: WW,
+         value: (0, rO.m)(iW[OW]),
+         swatches: NW.map((WW => {
+           let {
+             color: iW,
+             name: OW
+           } = WW;
+           return {
+             colour: (0, rO.m)(iW),
+             label: mW(`crosshairSettings:color_${OW}`)
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L604-L671` → after: `L2022-L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2022-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2022-L2028) · [Before (L604-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L604-L671)

```diff
- 
-         function re(ee) {
-           var ie;
-           const He = ee.split("\n"),
-             ye = He.flatMap(((ee, ie) => se.test(ee) ? [ie] : []));
-           let be = Ge(He.slice(0, null !== (ie = ye[0]) && void 0 !== ie ? ie : He.length)).doc;
-           return ye.map(((ee, ie) => {
-             var Me;
-             const Ke = Ge(He.slice(ee, null !== (Me = ye[ie + 1]) && void 0 !== Me ? Me : He.length)),
-               Ue = {
-                 name: He[ee].match(se)[1],
-                 doc: be,
-                 lines: Ke.lines
-               };
-             return be = Ke.doc, Ue
-           }))
- ... (52 more removed lines; see GitHub link above)
+       }), cW = ["lines", "dot", "circle"].filter((WW => iW[WW])), wW = (WW, OW, mW) => (0, ZW.jsx)(YW.e, {
+         label: OW,
+         checked: iW[WW],
+         disabled: 1 === cW.length && cW[0] === WW,
+         circleInfoText: mW,
+         onClick: iW => {
+           EW(WW, iW)
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L673-L688` → after: `L2030-L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2030-L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2030-L2084) · [Before (L673-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L673-L688)

```diff
- 
-         function yi(ee) {
-           const ie = re(ee),
-             He = function(ee) {
-               const ie = new Map,
-                 He = ee.find((ee => "_TypeOf" === ee.name));
-               let ye = null;
-               const be = () => {
-                 if (ye) {
-                   const ee = ye.lines.join("\n");
-                   ie.set(ye.name, {
-                     text: ee,
-                     members: Qe(ee),
-                     object: ei(ee)
-                   })
-                 }
+       }, WW), tW = "shapes" === iW.style;
+       return (0, ZW.jsxs)(ZW.Fragment, {
+         children: [(0, ZW.jsx)(YW.h, {
+           label: mW("crosshairSettings:style"),
+           options: [{
+             value: "classic",
+             label: mW("crosshairSettings:styleClassic")
+           }, {
+             value: "shapes",
+             label: mW("crosshairSettings:styleShapes")
+           }],
+           value: iW.style,
+           onChange: WW => {
+             EW("style", WW)
+           }
+         }), LW(mW("crosshairSettings:color"), "color", QO), NW("opacity", mW("crosshairSettings:opacity"), Om), !tW && NW("size", mW("crosshairSettings:size"), Om), tW && (0, ZW.jsxs)("div", {
+ ... (39 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L690-L723` → after: `L2086-L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2086-L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2086-L2096) · [Before (L690-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L690-L723)

```diff
-               for (const Me of He.lines.slice(1, -1)) {
-                 const ee = Me.match(/^\t([\w$]+): (.+)$/);
-                 ee ? (be(), ye = {
-                   name: ee[1],
-                   lines: [ee[2]]
-                 }) : ye && ye.lines.push(Me.replace(/^\t/, ""))
-               }
-               return be(), ie
-             }(ie),
-             ye = new Map;
-           for (const be of ie) Ie.has(be.name) || ye.has(be.name) || ye.set(be.name, Hi(be, He));
-           return ye
-         }
-         let bi, Mi, Ki;
- 
-         function Ui() {
- ... (18 more removed lines; see GitHub link above)
+             case "grass":
+               return xm(Pm);
+             case "stone":
+               return xm(Lm);
+             case "sand":
+               return xm(cm);
+             case "snow":
+               return xm(wm);
+             case "night":
+               return {
+                 backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L725-L727` → after: `L2098-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2098-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2098-L2282) · [Before (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L725-L727)

```diff
-               He.set(ie[1], {
-                 deprecation: Ke,
-                 description: Ue.join("\n").trim()
+           }
+         })(),
+         backgroundPosition: "center"
+       }
+     }
+ 
+     function Am(WW) {
+       return Object.freeze({
+         ...rO.g,
+         style: "shapes",
+         outline: 1,
+         lines: !1,
+         ...WW
+       })
+     }
+     const bm = [{
+ ... (169 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L729-L731` → after: `L2284-L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2284-L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2284-L2313) · [Before (L729-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L729-L731)

```diff
-             }
-             return He
-           }(je.default), Mi
+             }), (0, ZW.jsx)("div", {
+               className: "CrosshairPresetName",
+               children: LW(`crosshairSettings:preset_${WW.id}`)
+             })]
+           }, WW.id)
+         }))
+       })
+     }
+     var Km = OW(1776);
+ 
+     function Sm(WW, iW) {
+       const [OW, EW] = (0, mW.useState)(!1), NW = () => {
+         EW(!1)
+       }, [PW, LW] = (0, mW.useState)(!1), cW = (0, mW.useRef)({
+         growOnClick: WW.growOnClick,
+         forGuns: WW.forGuns
+ ... (14 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L733-L745` → after: `L2315-L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2315-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2315-L2328) · [Before (L733-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L733-L745)

```diff
- 
-         function Fi() {
-           if (!Ki) {
-             Ki = new Map;
-             for (const ee of xe) {
-               const ie = (0, We.x)(ue(ee)).flatMap((ee => ee.blocks));
-               for (const ee of (0, We.l)(ie))
-                 if ("ts" === ee.lang || "typescript" === ee.lang)
-                   for (const [ie, He] of we(ee.code)) Ki.set(ie, He)
-             }
-             for (const [ee, ie] of(bi ??= yi(je.default), bi)) Ki.has(ee) || Ki.set(ee, ie)
-           }
-           return Ki
+       }), [PW]);
+       const wW = OW || PW;
+       return {
+         view: {
+           pressed: wW,
+           spread: wW && WW.forGuns && !WW.growOnClick ? 6 : 0
+         },
+         handlers: {
+           onPointerDown: WW => {
+             !WW.target.closest(iW) && (0, Km.e)(WW.currentTarget, WW.pointerId) && EW(!0)
+           },
+           onPointerUp: NW,
+           onPointerCancel: NW,
+           onLostPointerCapture: NW
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L747-L774` → after: `L2330-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2330-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2330-L2389) · [Before (L747-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L747-L774)

```diff
-         const Ji = {
-           BlockName: "blockNames",
-           BlockNameOrId: "blockNames",
-           ItemName: "itemNames",
-           Song: "sounds",
-           ParticlePresetId: "particles",
-           PlayerPose: "skins",
-           IngameIconName: "icons",
-           ClientOptions: "clientOptions",
-           ClientOption: "clientOptions",
-           OtherEntitySettings: "entitySettings",
-           OtherEntitySetting: "entitySettings",
-           MobSettings: "mobSettings",
-           MobSetting: "mobSettings",
-           VehicleSetting: "vehicleSettings",
-           SettableVehicleSetting: "vehicleSettings"
- ... (12 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function Ym(WW) {
+       let {
+         settings: iW,
+         touch: OW,
+         backdrop: mW,
+         className: EW,
+         children: PW,
+         label: LW
+       } = WW;
+       const cW = Sm(iW, ".CrosshairStageControls");
+       return (0, ZW.jsxs)("div", {
+         className: NW()("CrosshairStage", EW),
+         style: lm(mW),
+ ... (44 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L776-L778` → after: `L2391-L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2391-L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2391-L2394) · [Before (L776-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L776-L778)

```diff
-           return oi
-         }
- 
+         }), [])
+       }(lW);
+       const jW = (0, mW.useRef)(lW);
+       jW.current = lW, (0, mW.useEffect)((() => {
```

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L780-L781` → after: `L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2396) · [Before (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L780-L781)

```diff
-           const ie = ee.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
-           return ie ? Ri().get(ie[1]) : void 0
+           "Escape" === WW.key && (WW.stopPropagation(), jW.current())
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L783-L790` → after: `L2398-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2398-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2398-L2399) · [Before (L783-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L783-L790)

```diff
-         const qi = (0, ye.createContext)("/docs"),
-           fi = (0, ye.createContext)(null),
-           Ti = (0, ye.createContext)(!1),
-           Xi = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;
- 
-         function zi(ee) {
-           const ie = ee.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
-           return ie ? ie[1] : null
+         return window.addEventListener("keydown", WW, !0), () => {
+           window.removeEventListener("keydown", WW, !0)
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L792-L802` → after: `L2401-L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2401-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2401-L2410) · [Before (L792-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L792-L802)

```diff
- 
-         function Bi(ee) {
-           let {
-             colour: ie
-           } = ee;
-           return (0, fe.jsx)("span", {
-             className: "DocsColourSwatch",
-             style: {
-               background: ie
-             },
-             "aria-hidden": "true"
+       }), []);
+       const UW = Sm(iW, ".CrosshairFullScreenPanel"),
+         [kW, sW] = (0, mW.useState)(!0),
+         MW = kW && tW;
+       (0, mW.useEffect)((() => {
+         if (MW) return yW.d.set({
+           crosshairGameView: !0
+         }), () => {
+           yW.d.set({
+             crosshairGameView: !1
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L805-L827` → after: `L2413-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2413-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2413-L2449) · [Before (L805-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L805-L827)

```diff
- 
-         function Ei(ee) {
-           const ie = [];
-           let He = 0;
-           for (const ye of ee.matchAll(Xi)) ie.push(ee.slice(He, ye.index), (0, fe.jsx)(Bi, {
-             colour: ye[0]
-           }), ye[0]), He = ye.index + ye[0].length;
-           return ie.push(ee.slice(He)), ie
-         }
- 
-         function gi(ee) {
-           let {
-             href: ie,
-             children: He
-           } = ee;
-           const be = (0, ye.useContext)(qi);
- ... (7 more removed lines; see GitHub link above)
+       }), [MW]);
+       const [KW, SW] = (0, mW.useState)(!0);
+       return (0, Em.createPortal)((0, ZW.jsxs)("div", {
+         ref: bW,
+         className: "CrosshairFullScreen",
+         style: MW ? void 0 : lm(EW),
+         ...UW.handlers,
+         children: [(0, ZW.jsx)(Um.b, {
+           settings: iW,
+           touch: OW,
+           inEditor: !0,
+           ...UW.view
+         }), (0, ZW.jsxs)("div", {
+           className: NW()("CrosshairFullScreenPanel", {
+             Collapsed: !KW
+           }),
+ ... (21 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L829` → after: `L2451-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2451-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2451-L2518) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L829)

```diff
-             })
+             }), (0, ZW.jsx)(wW.f, {
+               className: "CrosshairFullScreenDone",
+               onClick: lW,
+               padDefaultFocus: !0,
+               children: AW("crosshairSettings:done")
+             })]
+           }), KW && (0, ZW.jsxs)("div", {
+             className: "CrosshairFullScreenFields",
+             children: [(0, ZW.jsx)(Mm, {
+               settings: iW,
+               touch: OW,
+               backdrop: EW,
+               onChange: xW
+             }), (0, ZW.jsx)(mm, {
+               settings: iW,
+               onChange: xW
+ ... (52 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L831-L837` → after: `L2520-L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2520-L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2520-L2573) · [Before (L831-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L831-L837)

```diff
-           return (0, fe.jsx)("a", {
-             href: ie,
-             target: "_blank",
-             rel: "noopener noreferrer",
-             children: (0, fe.jsx)(Ti.Provider, {
-               value: !0,
-               children: He
+         }), (0, ZW.jsxs)("div", {
+           "aria-live": "polite",
+           children: [kW && (0, ZW.jsx)("div", {
+             className: "CrosshairShareNote Error",
+             children: EW("crosshairSettings:pasteInvalid")
+           }), jW && !kW && (0, ZW.jsx)("div", {
+             className: "CrosshairShareNote",
+             children: EW("crosshairSettings:applied")
+           })]
+         })]
+       })
+     }
+     var nm = OW(35209);
+     let um = "sky";
+ 
+     function om(WW) {
+ ... (38 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L840-L865` → after: `L2576-L2582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2576-L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2576-L2582) · [Before (L840-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L840-L865)

```diff
-         }
- 
-         function Oi(ee) {
-           let {
-             code: ie
-           } = ee;
-           const He = (0, ye.useContext)(qi);
-           if ((0, ye.useContext)(Ti)) return (0, fe.jsx)("code", {
-             className: "DocsInlineCode",
-             children: ie
-           });
-           if (Fi().has(ie)) return (0, fe.jsx)(Zi, {
-             type: ie
-           });
-           const be = ki(ie);
-           if (be) return (0, fe.jsx)(Ke.e, {
- ... (10 more removed lines; see GitHub link above)
+         }), (0, ZW.jsx)("div", {
+           className: "SettingBox",
+           children: (0, ZW.jsx)(Mm, {
+             settings: tW,
+             touch: EW,
+             backdrop: xW,
+             onChange: nm.d
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L867-L882` → after: `L2584-L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2584-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2584-L2679) · [Before (L867-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L867-L882)

```diff
-         }
- 
-         function di(ee) {
-           let {
-             text: ie
-           } = ee;
-           const He = [];
-           let be = 0;
-           for (const ye of ie.matchAll(We.h)) {
-             ye.index > be && He.push(...Ei(ie.slice(be, ye.index)));
-             const [, ee, Me, Ke, Ue, Fe] = ye;
-             ee ? He.push((0, fe.jsx)(Oi, {
-               code: (0, We.n)(ee, Me)
-             })) : Ke ? He.push((0, fe.jsx)("strong", {
-               children: (0, fe.jsx)(di, {
-                 text: Ke
+         }), (0, ZW.jsx)(Hm, {
+           settings: tW,
+           onChange: nm.d
+         }), EW && (0, ZW.jsx)(IO.c, {
+           note: (0, GO.d)(EW, cW.touchActionButtons) ? OW("crosshairSettings:touchNote") : void 0
+         }), (0, ZW.jsx)(mm, {
+           settings: tW,
+           onChange: nm.d
+         }), bW && (0, ZW.jsx)(Tm, {
+           settings: tW,
+           touch: EW,
+           backdrop: xW,
+           onBackdrop: AW,
+           inGame: "inGame" === NW,
+           onChange: nm.d,
+           onClose: () => {
+ ... (80 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L884-L887` → after: `L2681-L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2681-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2681-L2693) · [Before (L884-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L884-L887)

```diff
-             })) : He.push((0, fe.jsx)(gi, {
-               href: Fe,
-               children: (0, fe.jsx)(di, {
-                 text: Ue
+             },
+             className: NW()({
+               SettingBoxDisabled: !AW
+             })
+           }), (0, ZW.jsx)(YW.k, {
+             name: "Clip duration (seconds)",
+             min: fm.j,
+             max: fm.h,
+             step: fm.c,
+             initValue: WW.clipDurationSeconds,
+             onChange: function(WW) {
+               yW.d.setClientEscMenuOptions({
+                 clipDurationSeconds: WW
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L889-L894` → after: `L2695-L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2695-L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2695-L2783) · [Before (L889-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L889-L894)

```diff
-             })), be = ye.index + ye[0].length
-           }
-           return be < ie.length && He.push(...Ei(ie.slice(be))), (0, fe.jsx)(fe.Fragment, {
-             children: He.map(((ee, ie) => (0, fe.jsx)(ye.Fragment, {
-               children: ee
-             }, ie)))
+             },
+             circleInfoText: "Longer clip durations use more memory and may affect performance.",
+             disabled: !AW || !WW.enableClipping
+           })]
+         }), (0, ZW.jsxs)("div", {
+           className: "SettingBox",
+           children: [(0, ZW.jsxs)(wW.f, {
+             className: "ReplayViewerCategoryButton",
+             onClick: function() {
+               jW && kW.gameBridge.send("saveClip", null)
+             },
+             disabled: !jW,
+             children: [(0, ZW.jsx)("span", {
+               children: "Record clip"
+             }), (0, ZW.jsx)(pm.e, {
+               noaAction: "recordClip"
+ ... (73 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L897-L923` → after: `L2881-L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2881-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2881-L2940) · [Before (L897-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L897-L923)

```diff
-         const Wi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
-           ti = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
- 
-         function Zi(ee) {
-           let {
-             type: ie
-           } = ee;
-           const He = Fi(),
-             be = [];
-           for (const ye of ie.trim().matchAll(Wi)) {
-             const [ee, ie, Me, Ke, Ue] = ye;
-             ie ? be.push((0, fe.jsx)("span", {
-               className: "DocsTypeString",
-               children: ee
-             })) : Me && He.has(Me) ? be.push((0, fe.jsx)(Yi, {
-               name: Me,
- ... (11 more removed lines; see GitHub link above)
+       });
+       for (let NW = iW.nextNode(); null !== NW; NW = iW.nextNode()) {
+         var OW;
+         const WW = (null !== (OW = NW.textContent) && void 0 !== OW ? OW : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
+         if ("" !== WW) {
+           var mW, EW;
+           return (null !== (mW = null === (EW = WW.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === EW ? void 0 : EW[0]) && void 0 !== mW ? mW : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
+         }
+       }
+       return ""
+     }
+ 
+     function EE(WW, iW) {
+       const OW = iE(iW).slice(0, 40) || "blank";
+       return `${(iE(WW.toLowerCase())||"none").slice(0,Math.max(23,Im.ab-1-OW.length))}:${OW}`.slice(0, Im.ab)
+     }
+ ... (44 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L925-L929` → after: `L2942-L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2942-L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2942-L2989) · [Before (L925-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L925-L929)

```diff
-           return (0, fe.jsx)("code", {
-             className: "DocsInlineCode DocsTypeText",
-             children: be.map(((ee, ie) => (0, fe.jsx)(ye.Fragment, {
-               children: ee
-             }, ie)))
+         }));
+         (0, NO.e)("toggleFullCoordinateOverlay", (() => {
+           const WW = gO("showCoordinates") && gO("showChunkCoordinates") && gO("showFPS");
+           DO("showCoordinates", !WW), DO("showChunkCoordinates", !WW), DO("showFPS", !WW), KW()
+         })), (0, NO.e)("updatedChunkLoadDist", (() => {
+           KW()
+         })), (0, mW.useEffect)((() => {
+           if (uW(null), null === yW.d.get("openSettingsCategory")) {
+             const WW = (0, Gm.k)() ? cE.get(YW) : void 0;
+             HW(WW && VW.includes(WW) ? WW : LE(YW))
+           }
+         }), [iW]), (0, mW.useEffect)((() => {
+           if (iW && gW.current) return function(WW) {
+             if (rm) return () => {};
+             let iW = null,
+               OW = null;
+ ... (32 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L931-L935` → after: `L2991-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2991-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2991-L2994) · [Before (L931-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L931-L935)

```diff
-         }
-         const wi = 480,
-           Di = 6,
-           Pi = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
-         let Ai = 0;
+         }), [SW]);
+         const pW = (0, mW.useCallback)((async () => {
+           nW && (await nW(), uW(null))
+         }), [nW]);
```

#### 59. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L937-L983` → after: `L2996-L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2996-L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2996-L3030) · [Before (L937-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L937-L983)

```diff
-         function Yi(ee) {
-           let {
-             name: ie,
-             definition: He
-           } = ee;
-           const be = (0, ye.useContext)(qi),
-             Me = Ji[ie],
-             Ue = (0, ye.useRef)(null),
-             Fe = (0, ye.useRef)(null),
-             oe = (0, ye.useRef)(null),
-             [Re, ke] = (0, ye.useState)(!1),
-             [qe, Te] = (0, ye.useState)(null),
-             Xe = (0, ye.useRef)(),
-             ze = (0, ye.useContext)(fi),
-             [Be] = (0, ye.useState)((() => "DocsTypePopover-" + Ai++)),
-             Ee = () => {
- ... (31 more removed lines; see GitHub link above)
+         function fW() {
+           yW.d.set({
+             openEverythingMenuName: null
+           })
+         }
+         return (0, mW.useEffect)((() => {
+           OW((() => pW))
+         }), [pW, OW]), (0, ZW.jsxs)("div", {
+           className: "SettingsMenu Menu",
+           style: iW ? {} : {
+             display: "none"
+           },
+           children: [(0, ZW.jsx)("div", {
+             ref: gW,
+             className: "MenuSideBar",
+             children: (0, ZW.jsx)("div", {
+ ... (19 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L985-L1025` → after: `L3032-L3077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3032-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3032-L3077) · [Before (L985-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L985-L1025)

```diff
-           }), [Re]), (0, fe.jsxs)(fe.Fragment, {
-             children: [(0, fe.jsx)("button", {
-               type: "button",
-               ref: Ue,
-               className: "DocsTypeLink",
-               "aria-expanded": Re,
-               "aria-describedby": Re ? Be : void 0,
-               onMouseEnter: Ee,
-               onMouseLeave: ge,
-               onFocus: Ee,
-               onBlur: ge,
-               onKeyDown: ee => {
-                 "Tab" === ee.key && !ee.shiftKey && oe.current && (ee.preventDefault(), oe.current.focus())
-               },
-               onClick: Ee,
-               children: ie
- ... (25 more removed lines; see GitHub link above)
+           }), (0, ZW.jsxs)("div", {
+             ref: vW,
+             className: "MenuBody SettingsMenuRight",
+             children: ["account" === TW && (0, ZW.jsx)(Ri, {
+               showing: iW,
+               inGame: YW
+             }), "general" === TW && (0, ZW.jsx)(OO, {
+               inGame: YW
+             }), "audio" === TW && (0, ZW.jsx)(mO, {}), "notifications" === TW && (0, ZW.jsx)(SO, {}), "graphics" === TW && (0, ZW.jsx)(BO, {
+               minChunkAddDist: null !== SW && void 0 !== SW ? SW : [2, 2],
+               getValue: gO,
+               onChange: DO,
+               setApplySettingsCallback: uW
+             }), "controls" === TW && (0, ZW.jsx)(RO.h, {}), "crosshair" === TW && (0, ZW.jsx)(om, {
+               showing: iW
+             }), "controller" === TW && UW.featureFlags.useControllerSupport && (0, ZW.jsx)(dm.c, {}), UW.featureFlags.settings.canChangeTexturePack && "texturePack" === TW && (0, ZW.jsx)(gm.c, {
+ ... (30 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1027-L1038` → after: `L3079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3079) · [Before (L1027-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1027-L1038)

```diff
-                     ke(!1)
-                   },
-                   onKeyDown: ee => {
-                     if ("Tab" === ee.key) {
-                       var ie;
-                       if (ee.preventDefault(), ee.shiftKey || !Ue.current || ! function(ee, ie) {
-                           const He = [...document.querySelectorAll(Pi)],
-                             ye = He.slice(He.indexOf(ee) + 1).find((ee => ee.getClientRects().length > 0 && !(null !== ie && void 0 !== ie && ie.contains(ee))));
-                           return null === ye || void 0 === ye || ye.focus(), void 0 !== ye
-                         }(Ue.current, Fe.current)) null === (ie = Ue.current) || void 0 === ie || ie.focus();
-                       ee.shiftKey || ke(!1)
-                     }
+                     window.open(`https://${WW}`)
```

#### 62. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1040-L1047` → after: `L3081-L3084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3081-L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3081-L3084) · [Before (L1040-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1040-L1047)

```diff
-                   children: [Ce(Me).title, (0, fe.jsx)(pe, {
-                     name: "arrow-right"
-                   })]
-                 })]
-               }), (0, fe.jsx)(de, {
-                 lang: "ts",
-                 code: He,
-                 compact: !0
+                   children: [(0, ZW.jsx)(LW.c, {
+                     name: "arrow-up-right-from-square"
+                   }), " ", WW]
+                 }, WW)))
```

#### 63. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1049` → after: `L3086-L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3086-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3086-L3141) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1049)

```diff
-             }), null !== ze && void 0 !== ze ? ze : document.body)]
+             }), "replayViewer" === TW && (0, ZW.jsx)(Cm, {}), "developerTools" === TW && (0, ZW.jsx)("div", {
+               className: "SettingsMenuRightInner",
+               children: (0, ZW.jsx)(JW, {
+                 setApplySettingsCallback: uW
+               })
+             }), null !== nW && (0, ZW.jsx)("div", {
+               className: "SettingsMenuRightFooter",
+               children: (0, ZW.jsx)(wW.f, {
+                 className: "SettingsMenuRightFooterButton",
+                 onClick: pW,
+                 children: tW("general:apply")
+               })
+             })]
+           })]
+         })
+       }));
+ ... (40 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1052-L1127` → after: `L3214-L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3214-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3214-L3351) · [Before (L1052-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1052-L1127)

```diff
-         var Vi = He(186),
-           ai = He(5245),
-           ci = He(5252),
-           xi = He(5255);
-         const Li = {
-           progressBar: {
-             Si: 30,
-             ni: .075,
-             ji: 5,
-             si: !1,
-             description: [{
-               str: "Click repeatedly to complete!"
-             }],
-             Ii: "fa-solid fa-computer-mouse",
-             scale: 3,
-             rotation: 15
- ... (60 more removed lines; see GitHub link above)
+         of pE)
+         if (WW >= iW) {
+           const mW = WW / iW;
+           return mW >= 100 ? `${Math.floor(mW)}${OW}` : mW >= 10 ? `${mW.toFixed(1).replace(/\.0$/,"")}${OW}` : `${mW.toFixed(2).replace(/\.?0+$/,"")}${OW}`
+         } return String(WW)
+     }
+     var CE = OW(4171);
+     const XE = {
+         normal: "0.8em",
+         big: "1em"
+       },
+       BE = (0, mW.memo)((function(WW) {
+         let {
+           item: iW,
+           amount: OW = 0,
+           size: mW = "normal",
+ ... (122 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1129-L1298` → after: `L3353-L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3353-L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3353-L3361) · [Before (L1129-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1129-L1298)

```diff
-           li = {
-             text: "Text",
-             icon: {
-               icon: "Pixelated Heart"
-             },
-             progressBar: {
-               type: "ProgressBar",
-               progress: .5
-             },
-             keyBinding: {
-               type: "StyledKeyBinding",
-               action: "jump"
-             }
-           };
- 
-         function Si(ee) {
- ... (154 more removed lines; see GitHub link above)
+           OW = setTimeout((() => {
+             WW = setInterval((() => {
+               AW(tW);
+               const WW = wW.current;
+               (tW > 0 ? WW >= NW : WW <= EW) && iW()
+             }), 70)
+           }), 380);
+         return window.addEventListener("pointerup", iW), window.addEventListener("pointercancel", iW), window.addEventListener("blur", iW), () => {
+           clearTimeout(OW), clearInterval(WW), window.removeEventListener("pointerup", iW), window.removeEventListener("pointercancel", iW), window.removeEventListener("blur", iW)
```

#### 66. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1300-L1305` → after: `L3363-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3363-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3363-L3373) · [Before (L1300-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1300-L1305)

```diff
- 
-         function Gi(ee, ie) {
-           const He = Si(ee),
-             ye = ji[He].find((ee => ee.path.join(".") === ie.join("."))),
-             be = null !== ye && void 0 !== ye && ye.isRequired && "other" !== He ? Ii(li[He], ie) : void 0;
-           return Ni(ee, ie, be)
+       }), [tW]), (0, mW.useEffect)((() => {
+         const WW = cW.current;
+         WW && document.activeElement !== WW && WW.value !== String(iW) && (WW.value = String(iW))
+       }), [iW]), (0, mW.useEffect)((() => {
+         const WW = cW.current;
+         if (!WW) return;
+         const iW = () => {
+           WW.value = String(wW.current)
+         };
+         return WW.addEventListener("blur", iW), () => {
+           WW.removeEventListener("blur", iW)
```

#### 67. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1307-L1319` → after: `L3375-L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3375-L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3375-L3403) · [Before (L1307-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1307-L1319)

```diff
- 
-         function ri(ee) {
-           switch (Si(ee)) {
-             case "text":
-               return String(Ii(ee, ["str"]));
-             case "icon":
-               return String(Ii(ee, ["icon"]));
-             case "progressBar":
-               return `${Math.round(100*Number(Ii(ee,["progress"])))}%`;
-             case "keyBinding":
-               return String(Ii(ee, ["action"]));
-             case "other":
-               return JSON.stringify(ee)
+       }), []);
+       const bW = WW => (0, ZW.jsx)("button", {
+         type: "button",
+         className: "SmpStepButton",
+         "aria-label": `${WW>0?"More":"Less"} ${LW}`,
+         disabled: WW > 0 ? iW >= NW : iW <= EW,
+         onPointerDown: iW => {
+           0 === iW.button && (AW(WW), xW(WW))
+         },
+         onKeyDown: iW => {
+           "Enter" !== iW.key && " " !== iW.key || AW(WW)
+         },
+         onContextMenu: WW => {
+           WW.preventDefault()
+         },
+         children: WW > 0 ? "+" : "\u2212"
+ ... (13 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1322-L1331` → after: `L3463-L3509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3463-L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3463-L3509) · [Before (L1322-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1322-L1331)

```diff
-         const Qi = /^[A-Za-z_$][\w$]*$/;
- 
-         function eH(ee) {
-           if (Array.isArray(ee)) return `[${ee.map(eH).join(", ")}]`;
-           if (ee && "object" === typeof ee) {
-             const ie = Object.entries(ee).map((ee => {
-               let [ie, He] = ee;
-               return `${Qi.test(ie)?ie:JSON.stringify(ie)}: ${eH(He)}`
-             }));
-             return 0 === ie.length ? "{}" : `{ ${ie.join(", ")} }`
+         of LN)
+         if (iW >= OW) return `${Math.floor(iW/OW)}${mW}`;
+       return "<1s"
+     }
+ 
+     function wN(WW) {
+       const iW = WW.map(TE.c),
+         OW = [];
+       return iW.forEach(((WW, mW) => {
+         const EW = function(WW) {
+             const iW = WW.match(/\d+/);
+             return iW ? Number(iW[0]) : 0
+           }(WW),
+           NW = mW === iW.length - 1;
+         (NW || 1 === EW || 10 === EW || 100 === EW) && OW.push({
+           label: WW,
+ ... (31 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1333-L1344` → after: `L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3511) · [Before (L1333-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1333-L1344)

```diff
-           return JSON.stringify(ee)
-         }
- 
-         function iH(ee) {
-           const ie = ee.map(eH),
-             He = `[${ie.join(", ")}]`;
-           return He.length <= 60 ? He : `[\n${ie.map((ee=>`    ${ee},`)).join("\n")}\n]`
-         }
-         const HH = {
-           "\n": "\\n",
-           "\r": "\\r",
-           "\t": "\\t"
+           return !0
```

#### 70. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1346-L1359` → after: `L3513-L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3513-L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3513-L3573) · [Before (L1346-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1346-L1359)

```diff
- 
-         function yH(ee) {
-           let ie = "";
-           for (let be = 0; be < ee.length; be++) {
-             const Me = ee[be];
-             if ("\\" === Me) {
-               var He;
-               const ye = null !== (He = ee[be + 1]) && void 0 !== He ? He : "";
-               ie += "'" === ye ? "'" : Me + ye, be++
-             } else if ('"' === Me) ie += '\\"';
-             else {
-               var ye;
-               ie += null !== (ye = HH[Me]) && void 0 !== ye ? ye : Me
-             }
+       return WW.filter((WW => PW(WW.lowerLabel) || PW(WW.lowerName)))
+     }
+ 
+     function xN(WW, iW) {
+       var OW;
+       return null !== (OW = null === WW || void 0 === WW ? void 0 : WW[iW]) && void 0 !== OW ? OW : iW
+     }
+ 
+     function lN(WW, iW) {
+       const OW = WW.userInput;
+       return void 0 !== iW && "dropdown" === (null === OW || void 0 === OW ? void 0 : OW.type) && OW.dropdownOptions.map(TE.c).includes(iW) ? iW : function(WW) {
+         const iW = WW.userInput;
+         if ("dropdown" !== (null === iW || void 0 === iW ? void 0 : iW.type) || 0 === iW.dropdownOptions.length) return null;
+         const OW = iW.dropdownOptions.map(TE.c);
+         return iW.initialValue && OW.includes(iW.initialValue) ? iW.initialValue : OW[OW.length - 1]
+       }(WW)
+ ... (45 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1361` → after: `L3575-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3575-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3575-L3660) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1361)

```diff
-           return `"${ie}"`
+           return [...iN, "other"].filter((WW => iW.has(WW))).map((WW => ({
+             category: WW,
+             items: iW.get(WW)
+           })))
+         }(iW)), [iW]), tW = (0, mW.useMemo)((() => ZN(iW, OW).slice(0, 60)), [iW, OW]);
+         return OW.trim() ? 0 === tW.length ? (0, ZW.jsx)(GE, {
+           title: NW("smpShop:noItemsFound", {
+             query: OW.trim()
+           }),
+           children: NW("smpShop:tryShorterName")
+         }) : (0, ZW.jsx)(UN.e, {
+           lazyLoadedClassName: "SmpCatalogueGrid",
+           observerRoot: "SmpBody",
+           rootMargin: PN,
+           observerUpdateDeps: [OW],
+           children: tW.map((WW => (0, ZW.jsx)(kN, {
+ ... (70 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1363-L1368` → after: `L3662-L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3662-L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3662-L3687) · [Before (L1363-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1363-L1368)

```diff
- 
-         function bH(ee) {
-           if ("string" === typeof ee) return !0;
-           if (!ee || "object" !== typeof ee || Array.isArray(ee)) return !1;
-           const ie = ee;
-           return "ProgressBar" === ie.type ? "number" === typeof ie.progress : "StyledKeyBinding" === ie.type ? vi.m.includes(ie.action) : "string" === typeof ie.icon || "string" === typeof ie.str || "string" === typeof ie.entityName || "string" === typeof ie.translationKey
+       }(WW, iW), LW = (0, mW.useMemo)((() => function() {
+         var WW;
+         let iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
+           OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const EW = `${(0,ON.f)()}\x1f${iW.join("\x1e")}\x1f${OW.join("\x1e")}\x1f${JSON.stringify(mW)}`;
+         if ((null === (WW = tN) || void 0 === WW ? void 0 : WW.key) === EW) return tN.items;
+         const NW = new Set(OW),
+           PW = new Set,
+           LW = [],
+           cW = (WW, iW) => {
+             var OW;
+             if (!WW || PW.has(WW) || NW.has(WW)) return;
+             PW.add(WW);
+             const EW = null !== (OW = mW[WW]) && void 0 !== OW ? OW : WW;
+             LW.push({
+ ... (10 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1370-L1407` → after: `L3689-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3689-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3689-L3737) · [Before (L1370-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1370-L1407)

```diff
- 
-         function MH(ee) {
-           let ie;
-           try {
-             ie = function(ee) {
-               let ie = "",
-                 He = "",
-                 ye = 0;
-               const be = () => {
-                 ie += He.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), He = ""
-               };
-               for (; ye < ee.length;) {
-                 const Me = ee.slice(ye).search(/["'`]|\/\//);
-                 if (-1 === Me) {
-                   He += ee.slice(ye);
-                   break
- ... (22 more removed lines; see GitHub link above)
+         for (const tW of iW) cW(tW, "other");
+         return tN = {
+           key: EW,
+           items: LW
+         }, LW
+       }(null === WW || void 0 === WW ? void 0 : WW.meta.extra, null === WW || void 0 === WW ? void 0 : WW.meta.excluded, null === WW || void 0 === WW ? void 0 : WW.meta.names)), [null === WW || void 0 === WW ? void 0 : WW.meta.extra, null === WW || void 0 === WW ? void 0 : WW.met … [truncated]
+         wW(""), ZW((WW => WW + 1)), NW(WW)
+       }), [NW]), bW = "browse" === xW || "" !== cW.trim();
+       return {
+         searched: OW,
+         shown: EW,
+         searchFor: NW,
+         loading: PW,
+         catalogue: LW,
+         names: null === WW || void 0 === WW ? void 0 : WW.meta.names,
+         query: cW,
+ ... (33 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1409-L1429` → after: `L3739-L3823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3739-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3739-L3823) · [Before (L1409-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1409-L1429)

```diff
-           }
-           if (!Array.isArray(ie)) return {
-             parts: null,
-             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
-           };
-           const He = ie.findIndex((ee => !bH(ee)));
-           return -1 !== He ? {
-             parts: null,
-             error: `Part ${He+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
-           } : {
-             parts: ie,
-             error: null
-           }
-         }
-         const KH = 1 / Vi.g.clientTicksPerSecond,
-           UH = 700,
- ... (5 more removed lines; see GitHub link above)
+           }, iW.searchBoxKey)
+         }), OW]
+       })
+     }
+ 
+     function SN(WW) {
+       let {
+         browser: iW,
+         recentLabel: OW,
+         children: mW
+       } = WW;
+       const {
+         t: EW
+       } = (0, PW.B)();
+       return (0, ZW.jsxs)("div", {
+         className: "SmpViewBar",
+ ... (69 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1431-L1439` → after: `L3825-L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR3825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L3825-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L3825-L4226) · [Before (L1431-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1431-L1439)

```diff
-           JH = {
-             progressBar: Li.progressBar.Ii,
-             timedClick: Li.timedClick.icon,
-             gravityBar: Li.gravityBar.icon,
-             precisionBar: Li.precisionBar.icon,
-             rhythmClick: Li.rhythmClick.icon
-           };
- 
-         function oH(ee) {
+           children: wW
+         }), EW, iW.shown ? PW : (0, ZW.jsxs)(ZW.Fragment, {
+           children: [(0, ZW.jsx)(SN, {
+             browser: iW,
+             recentLabel: cW,
+             children: wW
+           }), iW.browsing ? (0, ZW.jsx)(sN, {
+             items: iW.catalogue,
+             query: iW.query,
+             onPick: iW.pickItem
+           }) : PW]
+         })]
+       })
+     }
+ 
+     function TN(WW, iW) {
+ ... (386 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1441` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4228) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1441)

```diff
-             type: ie
+             name: iW
```

#### 77. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1443-L1457` → after: `L4230-L4247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4230-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4230-L4247) · [Before (L1443-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1443-L1457)

```diff
-           const [He, be] = (0, ye.useState)("ready"), [Ke, Ue] = (0, ye.useState)(1), [Fe, Je] = (0, ye.useState)(!0), oe = (0, ye.useRef)(null), Re = (0, ye.useRef)(null), ke = (0, ye.useRef)(null), qe = (0, ye.useRef)(new Set), Te = (0, ye.useRef)(!1), Xe = JH[ie], ze = (0, ye. … [truncated]
-             getState: () => {
-               var ee, ie;
-               return null !== (ee = null === (ie = ke.current) || void 0 === ie ? void 0 : ie.getState()) && void 0 !== ee ? ee : FH
-             },
-             onFrame: ee => (qe.current.add(ee), () => {
-               qe.current.delete(ee)
-             })
-           })), []);
-           (0, ye.useEffect)((() => {
-             const ee = oe.current,
-               ie = Re.current;
-             if (!ee || !ie) return;
-             const He = new ResizeObserver((() => {
-               Ue(ee.clientWidth / Math.max(1, ie.offsetWidth))
+           return iW
+         })));
+         return function(WW) {
+           for (const iW in WW)
+             if ("sell" === WW[iW].smp) return EN(WW[iW].items, "sell").filter((WW => {
+               let {
+                 item: iW
+               } = WW;
+               return !iW.enchant
+             })).map((WW => {
+               let {
+                 meta: iW
+               } = WW;
+               return {
+                 item: iW.item,
+                 quantity: iW.quantity,
+ ... (2 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1459-L1488` → after: `L4249-L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4249-L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4249-L4279) · [Before (L1459-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1459-L1488)

```diff
-             return He.observe(ee), () => {
-               He.disconnect()
-             }
-           }), []), (0, ye.useEffect)((() => {
-             var ee;
-             if ("playing" !== He) return;
-             let ye = !1;
-             const Me = new xi.g[ie](Li[ie], (ee => {
-               ye = !0, Je(!1), be(ee ? "succeeded" : "failed")
-             }), (() => {}));
-             ke.current = Me;
-             let Ke = 0,
-               Ue = performance.now(),
-               Fe = requestAnimationFrame((function ee(ie) {
-                 for (Ke += Math.min(.25, (ie - Ue) / 1e3), Ue = ie; Ke >= KH && !ye;) Ke -= KH, Me.handleTick(KH);
-                 for (const He of qe.current) He();
- ... (14 more removed lines; see GitHub link above)
+           return []
+         }(OW.shopInfo).filter((iW => {
+           let {
+             item: OW
+           } = iW;
+           return WW.has(OW)
+         }))
+       }), [OW.shopInfo, lW.catalogue]);
+       return (0, ZW.jsx)(yN, {
+         browser: lW,
+         className: "SmpMarketTab",
+         recentLabel: iW("smpShop:recentlyListed"),
+         action: (0, ZW.jsx)(wW.s, {
+           className: "SmpSellButton",
+           onClick: () => {
+             kW((WW => !WW))
+ ... (15 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1490-L1494` → after: `L4281-L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4281-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4281-L4325) · [Before (L1490-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1490-L1494)

```diff
-           }), [Fe]);
-           const Be = ee => {
-             var ie;
-             "playing" === He && Te.current !== ee && (Te.current = ee, null === (ie = ke.current) || void 0 === ie || ie.handleMouseInput(ee))
-           };
+           }), cW.length > 0 && (0, ZW.jsx)(vN, {
+             entries: cW
+           })]
+         }),
+         listControls: (0, ZW.jsx)(HN, {
+           view: sW,
+           onChange: MW
+         }),
+         summary: bW && (tW.length > 0 ? iW(1 === tW.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
+           count: tW.length,
+           price: fE(TN(tW, "min"))
+         }) : iW("smpShop:noOneSelling", {
+           item: xN(lW.names, bW)
+         })),
+         list: jW ? (0, ZW.jsx)(RE, {
+           grid: KW
+ ... (29 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1496-L1518` → after: `L4327-L4347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4327-L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4327-L4347) · [Before (L1496-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1496-L1518)

```diff
-             className: "DocsQteDemo",
-             children: [(0, fe.jsxs)("div", {
-               ref: oe,
-               className: Me()("DocsQteStage", {
-                 Playing: "playing" === He
-               }),
-               tabIndex: "playing" === He ? 0 : -1,
-               role: "playing" === He ? "button" : void 0,
-               "aria-label": "playing" === He ? `${ie} quick time event: click or press Space` : void 0,
-               onPointerDown: ee => {
-                 0 === ee.button && Be(!0)
-               },
-               onPointerUp: () => {
-                 Be(!1)
-               },
-               onPointerLeave: () => {
- ... (7 more removed lines; see GitHub link above)
+             className: "SmpRow",
+             children: [(0, ZW.jsx)(BE, {
+               item: xW.item,
+               amount: xW.quantity,
+               tier: null !== (mW = null === (PW = tW.enchant) || void 0 === PW ? void 0 : PW.tier) && void 0 !== mW ? mW : null
+             }), (0, ZW.jsxs)("div", {
+               className: "SmpRowText",
+               children: [(0, ZW.jsx)("b", {
+                 children: (0, ZW.jsx)(nE.d, {
+                   text: tW.customTitle
+                 })
+               }), (0, ZW.jsx)("small", {
+                 children: OW("smpShop:enchantedListing")
+               })]
+             }), (0, ZW.jsx)(zE, {
+               value: lW,
+ ... (5 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1520-L1521` → after: `L4349-L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4349-L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4349-L4355) · [Before (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1520-L1521)

```diff
-               onKeyUp: ee => {
-                 "playing" !== He || " " !== ee.key && "Enter" !== ee.key || Be(!1)
+               max: 9999999,
+               step: FE,
+               label: OW("smpShop:pricePerItem")
+             }), (0, ZW.jsxs)(wW.s, {
+               loading: EW.isPending(cW),
+               onClick: () => {
+                 EW.act(cW, String(lW))
```

#### 82. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1523-L1527` → after: `L4357-L4555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4357-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4357-L4555) · [Before (L1523-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1523-L1527)

```diff
-               children: [(0, fe.jsx)("div", {
-                 ref: Re,
-                 className: "DocsQteScreen",
-                 style: {
-                   transform: `scale(${Ke})`
+               children: [OW("smpShop:list"), " ", (0, ZW.jsx)(qE, {
+                 amount: lW
+               })]
+             })]
+           }, cW)
+         }))
+       })
+     }
+     const gN = (0, mW.memo)((function(WW) {
+       let {
+         itemKey: iW,
+         item: OW,
+         quantity: mW,
+         pricePerItem: EW,
+         tier: PW,
+         selected: LW,
+ ... (183 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1529-L1535` → after: `L4557-L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4557-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4557-L4588) · [Before (L1529-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1529-L1535)

```diff
-                 children: "playing" === He && (0, fe.jsx)(ci.d.Provider, {
-                   value: ze,
-                   children: (0, fe.jsx)(ai.e, {
-                     qte: {
-                       type: ie,
-                       parameters: Li[ie]
-                     }
+                 children: iW("smpShop:collect")
+               })]
+             }, NW)
+           }))
+         }) : (0, ZW.jsx)(GE, {
+           title: iW("smpShop:nothingToCollect"),
+           children: iW("smpShop:nothingToCollectHint")
+         }), (0, ZW.jsx)("h3", {
+           className: "SmpSectionTitle",
+           children: iW("smpShop:activeListings", {
+             count: NW.length
+           })
+         }), NW.length > 0 ? (0, ZW.jsx)("div", {
+           className: "SmpList",
+           children: NW.map((WW => {
+             var mW, EW;
+ ... (16 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1537-L1541` → after: `L4590-L4795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4590-L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4590-L4795) · [Before (L1537-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1537-L1541)

```diff
-                 })
-               }), "playing" !== He && (0, fe.jsxs)("div", {
-                 className: "DocsQteOverlay",
-                 children: ["ready" !== He && (0, fe.jsxs)("div", {
-                   className: Me()("DocsQteResult", "succeeded" === He ? "Succeeded" : "Failed"),
+                 }), (0, ZW.jsx)("small", {
+                   children: iW("smpShop:timeLeft", {
+                     time: cN(cW.expiresAt)
+                   })
+                 })]
+               }), (0, ZW.jsxs)("div", {
+                 className: "SmpRowPrice",
+                 children: [(0, ZW.jsx)(qE, {
+                   amount: cW.pricePerItem
+                 }), (0, ZW.jsx)("small", {
+                   children: iW("smpShop:each")
+                 })]
+               }), (0, ZW.jsx)(wW.O, {
+                 loading: LW(NW, PW),
+                 onClick: () => {
+                   OW.act(NW)
+ ... (190 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1543-L1551` → after: `L4797-L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4797-L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4797-L5347) · [Before (L1543-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1543-L1551)

```diff
-                     name: "succeeded" === He ? "check" : "cross",
-                     isTinted: !0
-                   }), (0, fe.jsx)("span", {
-                     children: "succeeded" === He ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
-                   })]
-                 }), (0, fe.jsxs)("button", {
-                   type: "button",
-                   className: "DocsQtePlay",
-                   disabled: !Fe,
+                     amount: NW.pricePerItem
+                   }), " ", iW("smpShop:each"), NW.collectable > 0 && ` \xb7 ${iW("smpShop:readyCount",{count:NW.collectable})}`]
+                 }), (0, ZW.jsx)(fN, {
+                   done: NW.delivered,
+                   of: NW.wanted
+                 })]
+               }), NW.collectable > 0 ? (0, ZW.jsx)(wW.n, {
+                 loading: PW,
+                 onClick: () => {
+                   OW.act(mW)
+                 },
+                 children: iW("smpShop:collectCount", {
+                   count: NW.collectable
+                 })
+               }) : (0, ZW.jsx)(wW.O, {
+                 loading: PW,
+ ... (535 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1553-L1559` → after: `L5349-L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5349-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L5349-L5350) · [Before (L1553-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1553-L1559)

```diff
-                     be("playing")
-                   },
-                   children: [(0, fe.jsx)(pe, {
-                     name: "ready" === He ? "play" : "replay"
-                   }), (0, fe.jsx)("span", {
-                     children: "ready" === He ? `Try ${ie}` : "Play again"
-                   })]
+                     EW(WW.categoryKey)
+                   }
```

#### 87. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1570-L1576` → after: `L5579-L12590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5579-L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L5579-L12590) · [Before (L1570-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1570-L1576)

```diff
- 
-         function RH(ee) {
-           let {
-             level: ie,
-             text: He,
-             anchor: ye,
-             className: be
+         return new SP(iW)
+       }
+       anyCategoryHasRedDots() {
+         for (const WW in this.info)
+           if (this.categoryHasRedDot(WW)) return !0;
+         return !1
+       }
+       doesCategoryExist(WW) {
+         return !(0, nO.K)(this.info[WW])
+       }
+       categoryHasRedDot(WW) {
+         return !0 === this.info[WW].redDot
+       }
+       updateCategoryRedDot(WW, iW) {
+         this.info[WW].redDot = iW
+       }
+ ... (6996 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1578-L1925` → after: `L12592-L13520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12592-L13520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L12592-L13520) · [Before (L1578-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1578-L1925)

```diff
-           const Ke = `h${Math.min(ie,6)}`;
-           return (0, fe.jsxs)(Ke, {
-                 id: ye,
-                 className: Me()("DocsHeading", be),
-                 children: [(0, fe.jsx)(di, {
-                       text: He
-                     }), (0, fe.jsx)("a", {
-                         className: "DocsHeadingAnchor",
-                         href: `#${ye}`,
-                         "aria-label": `Link to ${He.replace(/`/g,"")}`,children:"#"})]})}function kH(ee){let{items:ie,ordered:He}=ee;const ye=He?"ol":"ul";return(0,fe.jsx)(ye,{className:"DocsList",children:ie.map(((ee,ie)=>(0,fe.jsxs)("li",{children:[(0,fe.jsx)(di,{text:ee.text}) … [truncated]
-                           1,
-                           2
-                         })\ s * ([ ^ `]+?)\s*\1$/);return ie?ie[2]:null}function WH(ee){return"paragraph"===ee.kind&&""===ee.text.trim()}function tH(ee){const ie={name:ee.heading.text,description:[],params:[],returns:null};let He="description";for(const be of ee.blocks)if(!WH(be) … [truncated]
-                               name: ee.trim()
-                             }))))): "table" === ee.kind && null !== (ie = ee.header[0]) && void 0 !== ie && ie.startsWith("Song") ? ee.rows.map((ee => {
-                               let [ie, He] = ee;
- ... (332 more removed lines; see GitHub link above)
+           EW(iW.blanks, iW.outcome, WW, mW)
+         })).catch((WW => {
+           console.warn("Screenshot mode: couldn't report a blank photo", WW)
+         }))
+       }
+       switch (iW.outcome) {
+         case "saved":
+           return new File([iW.blob], function(WW) {
+             const iW = WW => String(WW).padStart(2, "0"),
+               OW = `${WW.getFullYear()}${iW(WW.getMonth()+1)}${iW(WW.getDate())}`,
+               mW = `${iW(WW.getHours())}${iW(WW.getMinutes())}${iW(WW.getSeconds())}`;
+             return `bloxd-${OW}-${mW}.${tW.d}`
+           }(new Date), {
+             type: tW.g
+           });
+         case "refused":
+ ... (913 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1927-L7325` → after: `L13522-L13654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13522-L13654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L13522-L13654) · [Before (L1927-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L1927-L7325)

```diff
-                           function zy() {
-                             qy(), Fy = 0, oy({
-                               track: null
-                             })
-                           }
-                           const By = (0, ye.createContext)(null);
-                           let Ey = null;
- 
-                           function gy() {
-                             const [ee, ie] = (0, ye.useState)(null);
-                             return (0, ye.useEffect)((() => {
-                               let ee = !1;
-                               return Ey ??= Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(204), He.e(35), He.e(253)]).then((() => He(40888))), Ey.then((He => {
-                                 ee || ie(He)
-                               }), (ee => {
-                                 console.error("Could not load the docs gallery's textures", ee), Ey = null
- ... (5383 more removed lines; see GitHub link above)
+     function PW(WW) {
+       var iW;
+       return null !== (iW = NW[WW]) && void 0 !== iW ? iW : {
+         translationKey: ""
+       }
+     }
+     const LW = {
+       "Wood Enchanting Table": [{
+         min: 1,
+         max: 2
+       }, {
+         min: 3,
+         max: 4
+       }, {
+         min: 5,
+         max: 6
+ ... (117 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L332` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/93.js#L4-L6) · [Before (L4-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/93.js#L4-L332)

```diff
-   5204: ee => {
-     function ie(ee) {
-       return ee instanceof Map ? ee.clear = ee.delete = ee.set = function() {
-         throw new Error("map is read-only")
-       } : ee instanceof Set && (ee.add = ee.clear = ee.delete = function() {
-         throw new Error("set is read-only")
-       }), Object.freeze(ee), Object.getOwnPropertyNames(ee).forEach((He => {
-         const ye = ee[He],
-           be = typeof ye;
-         "object" !== be && "function" !== be || Object.isFrozen(ye) || ie(ye)
-       })), ee
-     }
-     class He {
-       constructor(ee) {
-         void 0 === ee.data && (ee.data = {}), this.data = ee.data, this.isMatchIgnored = !1
-       }
- ... (313 more removed lines; see GitHub link above)
+   5453: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       reportCarriedGlLossWait: () => EW
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L334-L450` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/93.js#L8) · [Before (L334-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/93.js#L334-L450)

```diff
- 
-     function ue(ee, ie) {
-       "." === ee.input[ee.index - 1] && ie.ignoreMatch()
-     }
- 
-     function me(ee, ie) {
-       void 0 !== ee.className && (ee.scope = ee.className, delete ee.className)
-     }
- 
-     function le(ee, ie) {
-       ie && ee.beginKeywords && (ee.gR = "\\b(" + ee.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", ee.__beforeBegin = ue, ee.keywords = ee.keywords || ee.beginKeywords, delete ee.beginKeywords, void 0 === ee.relevance && (ee.relevance = 0))
-     }
- 
-     function Se(ee, ie) {
-       Array.isArray(ee.illegal) && (ee.illegal = Te(...ee.illegal))
-     }
- ... (101 more removed lines; see GitHub link above)
+     var mW = OW(5104);
```

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L453-L477` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/93.js#L11-L14) · [Before (L453-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/93.js#L453-L477)

```diff
-       function ie(ie, He) {
-         return new RegExp(oe(ie), "m" + (ee.case_insensitive ? "i" : "") + (ee.unicodeRegex ? "u" : "") + (He ? "g" : ""))
-       }
-       class He {
-         constructor() {
-           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
-         }
-         addRule(ee, ie) {
-           ie.position = this.position++, this.matchIndexes[this.matchAt] = ie, this.regexes.push([ie, ee]), this.matchAt += pe(ee) + 1
-         }
-         compile() {
-           0 === this.regexes.length && (this.exec = () => null);
-           const ee = this.regexes.map((ee => ee[1]));
-           this.matcherRe = ie(ze(ee, {
-             joinWith: "|"
-           }), !0), this.lastIndex = 0
- ... (9 more removed lines; see GitHub link above)
+       try {
+         (0, mW.d)(WW.message, WW.code, void 0, {}, {})
+       } catch (iW) {
+         console.warn("Couldn't report the last page's WebGL context wait", iW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L2)

```diff
- export const ids = [94];
+ export const ids = [94, 110];
```

#### 2. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L4-L23` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L4-L23) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L4-L23)

```diff
-   5220: (ee, ie, He) => {
-     He.d(ie, {
-       C: () => ke,
-       e: () => ye,
-       h: () => Ke,
-       i: () => pe,
-       l: () => Te,
-       n: () => Ue,
-       q: () => be,
-       t: () => Me,
-       x: () => fe,
-       y: () => qe
-     });
-     const ye = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
- 
-     function be(ee) {
- ... (4 more removed lines; see GitHub link above)
+     5590: (WW, iW, OW) => {
+       OW.d(iW, {
+         e: () => jW,
+         h: () => UW
+       });
+       var mW = OW(1089),
+         EW = OW.n(mW),
+         NW = OW(62),
+         PW = OW(1172),
+         LW = OW(5593),
+         cW = OW(2021),
+         wW = OW(3332),
+         tW = OW(5599),
+         ZW = OW(1283);
+       const xW = new WeakMap;
+       let lW = 0;
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25-L67` → after: `L25-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L25-L39) · [Before (L25-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L25-L67)

```diff
-     }
- 
-     function Me(ee) {
-       return ee.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
-     }
-     const Ke = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${ye.source}`, "g");
- 
-     function Ue(ee, ie) {
-       return 2 === ee.length ? ie.replace(/^ (.*) $/, "$1") : ie
-     }
- 
-     function Fe(ee) {
-       return "" === ee.trim()
-     }
- 
-     function Je(ee) {
- ... (27 more removed lines; see GitHub link above)
+ 
+       function bW(WW) {
+         let {
+           piece: iW
+         } = WW;
+         return "space" === iW.kind ? (0, ZW.jsx)(ZW.Fragment, {
+           children: iW.text
+         }) : (0, ZW.jsx)("span", {
+           className: "DialogueWord",
+           style: {
+             "--word-delay": `${iW.delayMs}ms`
+           },
+           children: (0, ZW.jsx)(LW.b, {
+             text: "icon" === iW.kind ? `[[${iW.icon}]]` : iW.text
+           })
```

#### 4. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L73-L99` → after: `L43-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L43-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L43-L159) · [Before (L73-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L73-L99)

```diff
-     function ke(ee) {
-       const ie = ee.replace(/\r\n/g, "\n").split("\n"),
-         He = [];
-       let ye = 0;
-       for (; ye < ie.length;) {
-         const ee = ie[ye];
-         if (Fe(ee)) {
-           ye++;
-           continue
-         }
-         const be = ee.match(/^\s*```\s*(\w*)\s*$/);
-         if (be) {
-           const ee = [];
-           for (ye++; ye < ie.length && !/^\s*```\s*$/.test(ie[ye]);) ee.push(ie[ye]), ye++;
-           ye++, He.push({
-             kind: "code",
- ... (11 more removed lines; see GitHub link above)
+       function jW(WW) {
+         let {
+           display: iW
+         } = WW;
+         const {
+           selectedLanguage: OW
+         } = (0, PW.B)(), mW = (0, NW.useMemo)((() => (0, tW.e)((0, tW.g)(iW).plan.pieces)), [iW, OW.code]);
+         return (0, ZW.jsxs)("div", {
+           className: EW()("Dialogue", {
+             DialogueAnimateIn: !1 !== iW.animateIn
+           }),
+           children: [iW.speakerName && (0, ZW.jsx)(cW.d, {
+             text: iW.speakerName,
+             className: "DialogueSpeaker"
+           }), (0, ZW.jsx)("p", {
+             className: "DialogueLine",
+ ... (101 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L101-L103` → after: `L161-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L161-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L161-L180) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L101-L103)

```diff
-             anchor: Me(ee)
-           }), ye++;
-           continue
+             label: OW,
+             className: mW
+           } = WW;
+           const [EW, PW] = kW(), LW = !1 === (null === EW || void 0 === EW ? void 0 : EW.failed);
+           return (0, AW.jsxs)("button", {
+             type: "button",
+             className: NW()("DocsCopyButton", mW, {
+               Copied: LW
+             }),
+             title: "Copy to clipboard",
+             "aria-label": OW ? void 0 : `Copy ${iW}`,
+             onClick: WW => {
+               WW.stopPropagation(), PW(iW)
+             },
+             children: [(0, AW.jsx)(jW, {
+               name: LW ? "check" : "copy"
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L105-L109` → after: `L182-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L182-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L182-L417) · [Before (L105-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L105-L109)

```diff
-         if (/^\s*(-{3,}|\*{3,})\s*$/.test(ee)) {
-           He.push({
-             kind: "rule"
-           }), ye++;
-           continue
+         tW.c.registerLanguage("javascript", ZW.e), tW.c.registerLanguage("typescript", xW.b);
+         const MW = {
+             js: "javascript",
+             ts: "typescript",
+             javascript: "javascript",
+             typescript: "typescript"
+           },
+           KW = {
+             javascript: "JavaScript",
+             typescript: "TypeScript"
+           },
+           SW = 24;
+ 
+         function YW(WW) {
+           let {
+             code: iW,
+ ... (220 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L111` → after: `L419-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L419-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L419-L674) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L111)

```diff
-         if (ee.trim().startsWith("|") && ye + 1 < ie.length && /^\s*\|[\s:|-]+\|\s*$/.test(ie[ye + 1])) {
+         const vW = "## Glossary of Referenced Types";
+         const gW = [{
+             id: "welcome",
+             slug: "",
+             title: "Welcome",
+             icon: "house",
+             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
+             layout: "article",
+             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
+           }, ...TW.b.flatMap((WW => {
+             const iW = {
+               id: WW.id,
+               slug: eW(WW.id),
+               title: WW.title,
+               markdown: WW.content,
+               ...nW[WW.id]
+ ... (240 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L113-L120` → after: `L676-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L676-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L676-L781) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L113-L120)

```diff
-             Me = [];
-           for (ye += 2; ye < ie.length && ie[ye].trim().startsWith("|");) Me.push(Je(ie[ye])), ye++;
-           He.push({
-             kind: "table",
-             header: be,
-             rows: Me
-           });
-           continue
+             OW = function(WW) {
+               const iW = new Map,
+                 OW = WW.find((WW => "_TypeOf" === WW.name));
+               let mW = null;
+               const EW = () => {
+                 if (mW) {
+                   const WW = mW.lines.join("\n");
+                   iW.set(mW.name, {
+                     text: WW,
+                     members: QW(WW),
+                     object: Wi(WW)
+                   })
+                 }
+               };
+               for (const NW of OW.lines.slice(1, -1)) {
+                 const WW = NW.match(/^\t([\w$]+): (.+)$/);
+ ... (90 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L122` → after: `L783-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L783-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L783-L806) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L122)

```diff
-         if (ee.startsWith(">")) {
+         const li = (0, mW.createContext)("/docs"),
+           Ai = (0, mW.createContext)(null),
+           bi = (0, mW.createContext)(!1),
+           ji = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;
+ 
+         function Ui(WW) {
+           const iW = WW.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
+           return iW ? iW[1] : null
+         }
+ 
+         function ki(WW) {
+           let {
+             colour: iW
+           } = WW;
+           return (0, AW.jsx)("span", {
+             className: "DocsColourSwatch",
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L124-L127` → after: `L808-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L808-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L808-L849) · [Before (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L124-L127)

```diff
-           for (; ye < ie.length && ie[ye].startsWith(">");) ee.push(ie[ye].replace(/^>\s?/, "")), ye++;
-           He.push({
-             kind: "quote",
-             blocks: ke(ee.join("\n"))
+           let OW = 0;
+           for (const mW of WW.matchAll(ji)) iW.push(WW.slice(OW, mW.index), (0, AW.jsx)(ki, {
+             colour: mW[0]
+           }), mW[0]), OW = mW.index + mW[0].length;
+           return iW.push(WW.slice(OW)), iW
+         }
+ 
+         function Mi(WW) {
+           let {
+             href: iW,
+             children: OW
+           } = WW;
+           const EW = (0, mW.useContext)(li);
+           if (iW.startsWith("#")) {
+             const WW = XW(iW);
+             if (WW) return (0, AW.jsx)(PW.b, {
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L129-L138` → after: `L851-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L851-L852) · [Before (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L129-L138)

```diff
-           continue
-         }
-         if (oe.test(ee)) {
-           const be = [],
-             Me = /^\s*\d+\./.test(ee);
-           for (; ye < ie.length && !Fe(ie[ye]) && (oe.test(ie[ye]) || /^\s+\S/.test(ie[ye]));) be.push(ie[ye]), ye++;
-           He.push({
-             kind: "list",
-             ordered: Me,
-             items: Re(be)
+           if (ci().has(iW)) return (0, AW.jsx)(Ti, {
+             type: iW
```

#### 12. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L140-L163` → after: `L854-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L854-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L854-L866) · [Before (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L140-L163)

```diff
-           continue
-         }
-         const Ue = [];
-         for (; ye < ie.length && !Fe(ie[ye]) && !/^\s*```/.test(ie[ye]) && !/^#{1,6}\s/.test(ie[ye]) && !ie[ye].startsWith(">") && !oe.test(ie[ye]) && (!ie[ye].trim().startsWith("|") || 0 !== Ue.length);) Ue.push(ie[ye].trim()), ye++;
-         0 === Ue.length && (Ue.push(ie[ye].trim()), ye++), He.push({
-           kind: "paragraph",
-           text: Ue.join(" ")
-         })
-       }
-       return He
-     }
- 
-     function qe(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const He = ke(ee);
-       let ye = "";
- ... (8 more removed lines; see GitHub link above)
+           const EW = xi(iW);
+           if (EW) return (0, AW.jsx)(PW.b, {
+             className: "DocsInlineCode DocsSymbolLink",
+             to: qW(OW, VW(EW.pageId), EW.anchor),
+             children: iW
+           });
+           const NW = Ui(iW);
+           return (0, AW.jsxs)("code", {
+             className: "DocsInlineCode",
+             children: [NW && (0, AW.jsx)(ki, {
+               colour: NW
+             }), iW]
+           })
```

#### 13. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L165-L167` → after: `L868-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L868-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L868-L895) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L165-L167)

```diff
-         if ("heading" === Je.kind && 1 === Je.level && !ye) {
-           ye = Je.text;
-           continue
+ 
+         function Si(WW) {
+           let {
+             text: iW
+           } = WW;
+           const OW = [];
+           let EW = 0;
+           for (const mW of iW.matchAll(yW.e)) {
+             mW.index > EW && OW.push(...si(iW.slice(EW, mW.index)));
+             const [, WW, NW, PW, LW, cW] = mW;
+             WW ? OW.push((0, AW.jsx)(Ki, {
+               code: (0, yW.l)(WW, NW)
+             })) : PW ? OW.push((0, AW.jsx)("strong", {
+               children: (0, AW.jsx)(Si, {
+                 text: PW
+               })
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L169-L174` → after: `L897-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L897-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L897-L930) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L169-L174)

```diff
-         if ("heading" === Je.kind && Je.level <= ie) {
-           Me.push({
-             heading: Je,
-             blocks: []
-           });
-           continue
+         const Yi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
+           yi = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
+ 
+         function Ti(WW) {
+           let {
+             type: iW
+           } = WW;
+           const OW = ci(),
+             EW = [];
+           for (const mW of iW.trim().matchAll(Yi)) {
+             const [WW, iW, NW, PW, LW] = mW;
+             iW ? EW.push((0, AW.jsx)("span", {
+               className: "DocsTypeString",
+               children: WW
+             })) : NW && OW.has(NW) ? EW.push((0, AW.jsx)(oi, {
+               name: NW,
+ ... (18 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L176-L298` → after: `L932-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L932-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L932-L983) · [Before (L176-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L176-L298)

```diff
-         const ee = Me.at(-1);
-         ee ? ee.blocks.push(Je) : be.push(Je)
-       }
-       const Fe = ee => {
-         for (;
-           "rule" === (null === (ie = ee.at(-1)) || void 0 === ie ? void 0 : ie.kind);) {
-           var ie;
-           ee.pop()
-         }
-       };
-       Fe(be);
-       for (const Je of Me) Fe(Je.blocks);
-       return {
-         title: ye,
-         intro: be,
-         sections: Me
- ... (107 more removed lines; see GitHub link above)
+         const Ji = 480,
+           Hi = 6,
+           ni = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
+         let ui = 0;
+ 
+         function oi(WW) {
+           let {
+             name: iW,
+             definition: OW
+           } = WW;
+           const EW = (0, mW.useContext)(li),
+             NW = wi[iW],
+             LW = (0, mW.useRef)(null),
+             cW = (0, mW.useRef)(null),
+             tW = (0, mW.useRef)(null),
+             [ZW, xW] = (0, mW.useState)(!1),
+ ... (36 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L300-L364` → after: `L985-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L985-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L985-L1113) · [Before (L300-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L300-L364)

```diff
-           }, ie);
-         case "table":
-           return (0, Me.jsxs)("table", {
-             children: [(0, Me.jsx)("thead", {
-               children: (0, Me.jsx)("tr", {
-                 children: ee.header.map(((ee, ie) => (0, Me.jsx)("th", {
-                   children: Fe(ee)
-                 }, ie)))
-               })
-             }), (0, Me.jsx)("tbody", {
-               children: ee.rows.map(((ee, ie) => (0, Me.jsx)("tr", {
-                 children: ee.map(((ee, ie) => (0, Me.jsx)("td", {
-                   children: Fe(ee)
-                 }, ie)))
-               }, ie)))
-             })]
- ... (49 more removed lines; see GitHub link above)
+           }), [ZW]), (0, AW.jsxs)(AW.Fragment, {
+             children: [(0, AW.jsx)("button", {
+               type: "button",
+               ref: LW,
+               className: "DocsTypeLink",
+               "aria-expanded": ZW,
+               "aria-describedby": ZW ? sW : void 0,
+               onMouseEnter: MW,
+               onMouseLeave: KW,
+               onFocus: MW,
+               onBlur: KW,
+               onKeyDown: WW => {
+                 "Tab" === WW.key && !WW.shiftKey && tW.current && (WW.preventDefault(), tW.current.focus())
+               },
+               onClick: MW,
+               children: iW
+ ... (113 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L366-L410` → after: `L1115-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1115-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L1115-L1120) · [Before (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L366-L410)

```diff
-           if (He || /^\s*>/.test(ye)) continue;
-           const ee = ye.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-           ie.push(...(0, be.q)(ee))
-         }
-         return ie
-       }(ee).filter((ee => Ue(ee) || Je.test(ee) && !Fe.test(ee)))
-     }
-     const ke = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       qe = [{
-         name: "Qwen3.6-27B",
-         temperature: .7,
-         reasoningEffort: "none"
-       }, {
-         name: "Qwen3.5-397B-A17B",
-         temperature: .7,
-         reasoningEffort: "none"
- ... (29 more removed lines; see GitHub link above)
+         };
+         var Vi = OW(327),
+           fi = OW(2095);
+ 
+         function Ci(WW) {
+           return WW.startsWith("fa-")
```

#### 18. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L412-L413` → after: `L1122-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1122-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L1122-L1142) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L412-L413)

```diff
-       }
-     }
+         const Xi = {
+             text: "Text",
+             icon: "Icon",
+             progressBar: "Progress bar",
+             keyBinding: "Key binding",
+             other: "Other"
+           },
+           Bi = {
+             text: "Text",
+             icon: {
+               icon: "Pixelated Heart"
+             },
+             progressBar: {
+               type: "ProgressBar",
+               progress: .5
+             },
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L415-L419` → after: `L1144-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1144-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L1144-L1269) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L415-L419)

```diff
-     function Be(ee, ie, He) {
-       return new Promise(((be, Me) => {
-         const Ke = new AbortController,
-           Ue = () => {
-             Ke.abort(), Me((0, ye.f)(He))
+         function qi(WW) {
+           return "string" === typeof WW ? "text" : "entityName" in WW || "translationKey" in WW ? "other" : (0, Vi.Cb)(WW) ? "progressBar" : (0, Vi.yb)(WW) ? "keyBinding" : "icon" in WW ? "icon" : "str" in WW && "string" === typeof WW.str ? "text" : "other"
+         }
+         const Ri = [{
+             path: ["style", "color"],
+             label: "Colour",
+             field: {
+               kind: "colour"
+             },
+             defaultText: "The surrounding text's"
+           }, {
+             path: ["style", "fontSize"],
+             label: "Font size",
+             field: {
+               kind: "size"
+             },
+ ... (110 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L421-L439` → after: `L1271-L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1271-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L1271-L1400) · [Before (L421-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L421-L439)

```diff
-         if (null !== He && void 0 !== He && He.aborted) return void Ue();
-         null === He || void 0 === He || He.addEventListener("abort", Ue, {
-           once: !0
-         });
-         const Fe = qe.map((() => !1));
-         let Je = null;
-         const oe = qe.map((() => !1)),
-           Re = qe.map((() => !1));
-         qe.forEach(((ye, ke) => {
-           const fe = ze(pe, Ke.signal);
-           Oe(ye, [{
-             role: "user",
-             content: ee
-           }], fe.signal).then((ee => {
-             Ke.signal.aborted || ("busy" === ee || "failed" === ee ? (oe[ke] = "busy" === ee, Re[ke] = !0) : null !== ee && (null === Je || ke < Je.rank) && (Je = {
-               rank: ke,
- ... (3 more removed lines; see GitHub link above)
+ 
+         function Ii(WW) {
+           return "string" === typeof WW ? {
+             str: WW
+           } : WW
+         }
+ 
+         function ai(WW, iW) {
+           let OW = Ii(WW);
+           for (const mW of iW) OW = OW && "object" === typeof OW ? OW[mW] : void 0;
+           return OW
+         }
+ 
+         function ri(WW, iW, OW) {
+           const mW = (WW, EW) => {
+             var NW;
+ ... (114 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L441-L653` → after: `L1402-L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1402-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L1402-L1429) · [Before (L441-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L441-L653)

```diff
-             }, ie(Je.answer)))
-           }), (ee => {
-             Ke.signal.aborted || (Re[ke] = !0, console.warn(`Studio AI: ${ye.name} couldn't be reached`, ee))
-           })).finally((() => {
-             fe.clear(), Fe[ke] = !0, Ke.signal.aborted || (() => {
-               var ee, ie;
-               const ye = null !== (ee = null === (ie = Je) || void 0 === ie ? void 0 : ie.rank) && void 0 !== ee ? ee : qe.length;
-               Fe.slice(0, ye).includes(!1) || (null === He || void 0 === He || He.removeEventListener("abort", Ue), Ke.abort(), null !== Je ? be({
-                 ...Je.answer,
-                 isFinal: !Re.slice(0, Je.rank).includes(!0)
-               }) : Me(new Xe(oe.includes(!0) ? "busy" : "failed")))
-             })()
-           })).catch((ee => {
-             console.error("Studio AI: showing an answer failed", ee)
-           }))
-         }))
- ... (197 more removed lines; see GitHub link above)
+               return EW(), JSON.parse(iW)
+             }(WW.trim())
+           } catch (mW) {
+             return {
+               parts: null,
+               error: mW instanceof SyntaxError ? "This isn't a valid array yet." : mW.message
+             }
+           }
+           if (!Array.isArray(iW)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
+           };
+           const OW = iW.findIndex((WW => !EO(WW)));
+           return -1 !== OW ? {
+             parts: null,
+             error: `Part ${OW+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L655-L700` → after: `L1431-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1431-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/94.js#L1431-L7325) · [Before (L655-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/94.js#L655-L700)

```diff
-           Ue = new RegExp(`(?:${ie.source})`, `${ye}y`).exec(ee);
-         if (Ue) {
-           if (Me.push(Ue), !ie.global) return Me;
-           be.lastIndex = Ke(Ue)
-         }
-         for (let Fe = be.exec(ee); Fe; Fe = be.exec(ee)) {
-           const He = ke(ee, ie, Fe.index) - Fe.index;
-           if (Fe[0] = Fe[0].slice(He), Fe.index += He, Me.push(Fe), !ie.global) break;
-           be.lastIndex = Ke(Fe)
-         }
-         return Me
-       }(ee, ie, He.notAfter) : function(ee, ie, He) {
-         const ye = new RegExp(ie.source, `${ie.flags.replace(/[gy]/g,"")}g`),
-           be = [];
-         for (let Me = ye.exec(ee); Me; Me = ye.exec(ee))
-           if (!He || He(Me)) {
- ... (30 more removed lines; see GitHub link above)
+           wO = {
+             progressBar: Di.progressBar.yN,
+             timedClick: Di.timedClick.icon,
+             gravityBar: Di.gravityBar.icon,
+             precisionBar: Di.precisionBar.icon,
+             rhythmClick: Di.rhythmClick.icon
+           };
+ 
+         function tO(WW) {
+           let {
+             type: iW
+           } = WW;
+           const [OW, EW] = (0, mW.useState)("ready"), [PW, LW] = (0, mW.useState)(1), [cW, wW] = (0, mW.useState)(!0), tW = (0, mW.useRef)(null), ZW = (0, mW.useRef)(null), xW = (0, mW.useRef)(null), lW = (0, mW.useRef)(new Set), bW = (0, mW.useRef)(!1), UW = wO[iW], kW = (0, mW. … [truncated]
+             getState: () => {
+               var WW, iW;
+               return null !== (WW = null === (iW = xW.current) || void 0 === iW ? void 0 : iW.getState()) && void 0 !== WW ? WW : cO
+ ... (5879 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/95.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/95.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557)

#### 1. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L4` → after: `L4-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L4-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/95.js#L4-L974) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/95.js#L4)

```diff
-   5222: (ee, ie, He) => {
+   5463: WW => {
+     function iW(WW) {
+       return WW instanceof Map ? WW.clear = WW.delete = WW.set = function() {
+         throw new Error("map is read-only")
+       } : WW instanceof Set && (WW.add = WW.clear = WW.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(WW), Object.getOwnPropertyNames(WW).forEach((OW => {
+         const mW = WW[OW],
+           EW = typeof mW;
+         "object" !== EW && "function" !== EW || Object.isFrozen(mW) || iW(mW)
+       })), WW
+     }
+     class OW {
+       constructor(WW) {
+         void 0 === WW.data && (WW.data = {}), this.data = WW.data, this.isMatchIgnored = !1
+       }
+ ... (955 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L8-L17` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/95.js#L978-L991) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/95.js#L8-L17)

```diff
-     const ye = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       be = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       Me = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       Ke = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       Ue = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       Fe = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var Je = He(5226),
-       oe = He(5234);
-     const Re = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       ke = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+     const mW = OW(5463)
+   },
+   5467: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => ZW
+     });
+     const mW = "[A-Za-z$_][0-9A-Za-z$_]*",
+       EW = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       NW = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       PW = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       LW = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       cW = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       wW = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       tW = [].concat(cW, PW, LW);
```

#### 3. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L20` → after: `L994-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L994-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/95.js#L994-L1323) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/95.js#L20)

```diff
-       return ee.split("\n").filter((ee => ee.startsWith("## "))).map((ee => ee.replace(/^## (.+)$/gm, "$1").trim()))
+       const iW = WW.regex,
+         OW = mW,
+         ZW = "<>",
+         xW = "</>",
+         lW = {
+           kZ: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (WW, iW) => {
+             const OW = WW[0].length + WW.index,
+               mW = WW.input[OW];
+             if ("<" === mW || "," === mW) return void iW.ignoreMatch();
+             let EW;
+             ">" === mW && (((WW, iW) => {
+               let {
+                 after: OW
+               } = iW;
+ ... (314 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L24-L112` → after: `L1340-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L1340-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/95.js#L1340-L1724) · [Before (L24-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/95.js#L24-L112)

```diff
-       return ee.split("\n").map(((ee, ie) => 0 === ie ? ee.trim() : ee.trim().replace(/^# ?/gm, " "))).join("\n\n")
-     }
-     const Te = [{
-       id: "readme",
-       title: "Getting started",
-       content: '# Getting started\n\nThere are three places to write JavaScript in Bloxd: code blocks, code boards and World Code. Code in any of them controls the game through `api`, in custom games and worlds. Only players who can edit code (the `canEditCode` client option) can … [truncated]
-     }, {
-       id: "snippets",
-       title: "Snippets",
-       content: ke,
-       subsections: qe(ke)
-     }, {
-       id: "changelog",
-       title: "Changelog",
-       content: '# Changelog\n\nHere you can discover the latest changes to the API.\n\n### 24th November 2026\n- A `"follow"` [`gameCamera`](#clientOptions-gameCamera) takes `anchor: "eye"`, to watch another player through their eyes: it sits at their eye and looks where they loo … [truncated]
-     }, {
- ... (73 more removed lines; see GitHub link above)
+       const iW = WW.regex,
+         OW = mW,
+         ZW = "<>",
+         xW = "</>",
+         lW = {
+           kZ: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (WW, iW) => {
+             const OW = WW[0].length + WW.index,
+               mW = WW.input[OW];
+             if ("<" === mW || "," === mW) return void iW.ignoreMatch();
+             let EW;
+             ">" === mW && (((WW, iW) => {
+               let {
+                 after: OW
+               } = iW;
+ ... (369 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/96.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/96.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926)

#### 1. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L4-L6` → after: `L4-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L4-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/96.js#L4-L697) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/96.js#L4-L6)

```diff
-   5226: ee => {
-     ee.exports = '# Block Names (1535 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
-   }
+   5479: (WW, iW, OW) => {
+     OW.d(iW, {
+       B: () => xW,
+       d: () => mW,
+       e: () => PW,
+       i: () => jW,
+       j: () => bW,
+       l: () => LW,
+       o: () => EW,
+       s: () => NW,
+       v: () => AW,
+       y: () => lW
+     });
+     const mW = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function EW(WW) {
+ ... (678 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/97.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/97.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8)

#### 1. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4-L5` → after: `L4-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/97.js#L4-L112) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/97.js#L4-L5)

```diff
-   5234: ee => {
-     ee.exports = "# Item Names (1539 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   5488: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => bW
+     });
+     const mW = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       EW = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       NW = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       PW = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       LW = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       cW = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var wW = OW(5495),
+       tW = OW(5504);
+     const ZW = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       xW = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+ 
+     function lW(WW) {
+ ... (93 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/98.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/98.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1)

#### 1. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4-L4504` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/98.js#L4-L5) · [Before (L4-L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/98.js#L4-L4504)

```diff
-   5239: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => ye
-     });
-     const ye = String.raw`export interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
- ... (4485 more removed lines; see GitHub link above)
+   5495: WW => {
+     WW.exports = '# Block Names (1535 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 1. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L4-L23864` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/99.js#L4-L5) · [Before (L4-L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/99.js#L4-L23864)

```diff
-   37354: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => le,
-       h: () => ue
-     });
-     var ye = He(59),
-       be = He(1983),
-       Me = He(37358),
-       Ke = He.n(Me),
-       Ue = He(4937),
-       Fe = He(1956),
-       Je = He(1432),
-       oe = He(97),
-       Re = He(107),
-       ke = He(347),
-       qe = He(1053),
- ... (23845 more removed lines; see GitHub link above)
+   5504: WW => {
+     WW.exports = "# Item Names (1539 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (226 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   42196: (ee, ie, He) => {
+   42601: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var ye = He(42201),
-       be = He(38850);
-     class Me extends((0, ye.e)(be.c)) {}(0, ye.h)(be.c, Me);
-     var Ke = He(38126);
-     class Ue extends((0, ye.e)(Ke.f)) {}(0, ye.h)(Ke.f, Ue);
-     var Fe = He(38685);
-     class Je extends((0, ye.e)(Fe.g)) {}(0, ye.h)(Fe.g, Je);
-     var oe = He(38146),
-       Re = He(41380),
-       ke = He(38141);
-     class qe extends((0, ye.e)(ke.f)) {
+     var mW = OW(42603),
+       EW = OW(39198);
+     class NW extends((0, mW.d)(EW.b)) {}(0, mW.g)(EW.b, NW);
+     var PW = OW(38485);
+     class LW extends((0, mW.d)(PW.e)) {}(0, mW.g)(PW.e, LW);
+     var cW = OW(39025);
+     class wW extends((0, mW.d)(cW.f)) {}(0, mW.g)(cW.f, wW);
+     var tW = OW(38511),
+       ZW = OW(41782),
+       xW = OW(38502);
+     class lW extends((0, mW.d)(xW.h)) {
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, oe.m)(this._material), super.dispose(ee)
+         (0, tW.k)(this._material), super.dispose(WW)
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29)

```diff
-     }(0, ye.h)(ke.f, qe), (0, ke.j)({
-       disableUnusedSpecularTerm: ye.d,
+     }(0, mW.g)(xW.h, lW), (0, xW.j)({
+       disableUnusedSpecularTerm: mW.c,
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var fe = He(39479);
-     class Te extends((0, ye.e)(fe.g)) {}(0, ye.h)(fe.g, Te);
-     var pe = He(39577),
-       Xe = He(38026),
-       ze = He(38949),
-       Be = He(38137);
-     class Ee extends((0, ye.e)(pe.c)) {}(0, ye.h)(pe.c, Ee);
-     class ge extends((0, ye.e)(Xe.b)) {}(0, ye.h)(Xe.b, ge);
-     class Oe extends((0, ye.e)(ze.m)) {}(0, ye.h)(ze.m, Oe);
-     class de extends((0, ye.e)(Be.d)) {}(0, ye.h)(Be.d, de)
+     var AW = OW(39915);
+     class bW extends((0, mW.d)(AW.d)) {}(0, mW.g)(AW.d, bW);
+     var jW = OW(40011),
+       UW = OW(38376),
+       kW = OW(39308),
+       sW = OW(38500);
+     class MW extends((0, mW.d)(jW.b)) {}(0, mW.g)(jW.b, MW);
+     class KW extends((0, mW.d)(UW.b)) {}(0, mW.g)(UW.b, KW);
+     class SW extends((0, mW.d)(kW.m)) {}(0, mW.g)(kW.m, SW);
+     class YW extends((0, mW.d)(sW.c)) {}(0, mW.g)(sW.c, YW)
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   44740: (ee, ie, He) => {
+   53714: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L49-L61` → after: `L49-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L49-L61) · [Before (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L49-L61)

```diff
-     var ye = He(44748),
-       be = (He(41092), He(42193), He(41601), He(44758)),
-       Me = He(38020),
-       Ke = He(37913),
-       Ue = He(44769),
-       Fe = He(44778),
-       Je = He(38075),
-       oe = (He(42201), He(44789)),
-       Re = He(44783),
-       ke = He(39508),
-       qe = He(44791),
-       fe = He(40954),
-       Te = He(39492);
+     var mW = OW(53720),
+       EW = (OW(41491), OW(42599), OW(41997), OW(53738)),
+       NW = OW(38369),
+       PW = OW(38235),
+       LW = OW(53752),
+       cW = OW(53756),
+       wW = OW(38431),
+       tW = (OW(42603), OW(53769)),
+       ZW = OW(53763),
+       xW = OW(39948),
+       lW = OW(53774),
+       AW = OW(41392),
+       bW = OW(39931);
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L64)

```diff
-       ze = Te.v,
+       kW = bW.A,
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L68-L73` → after: `L68-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L68-L73) · [Before (L68-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L68-L73)

```diff
-       }, ((be, Me) => `(${((ee,ie,He)=>0===ie?`${ee} < 1`:ie===He-1?`${ee} >= ${ie}`:`${ee} == ${ie}`)(ee,Me,ie)} ? ${He(Me)} : ${ye})`)).join("\n\t\t+ "),
-       ge = (ee, ie, He) => `vec4 ${ee}(int i) {\n\treturn ${Ee("i",He,(ee=>`gpuParticleSystem[${ie+ee}]`),"vec4(0.0)")};\n}\n`,
-       Oe = `\n${ge("colorPositionsAt",Be(ze.colorPositions),Te.b/4)}\n${ge("color1At",Be(ze.color1),Te.b)}\n${ge("color2At",Be(ze.color2),Te.b)}\n${ge("velocityAt",Be(ze.Op),Te.b)}\n${ge("remapStopAt",Be(ze.remap),Te.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${Ee("j",4,(e … [truncated]
-       de = (ee, ie, He, ye) => ee ? `${He}(${ye})` : `gpuParticleSystem[${ie} + ${ye}]`,
-       We = ee => `gpuParticleSystem[${ee>>2}].${"xyzw"[3&ee]}`,
-       te = ee => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Te.b}\n#define COLOR_POSITIONS ${Be(ze.colorPositions)}\n#define COLOR1 ${Be(ze.color1)}\n#define COLOR2 ${Be(ze.color2)}\n#define VELOCITY ${Be(ze.Op)}\n#define R … [truncated]
+       }, ((EW, NW) => `(${((WW,iW,OW)=>0===iW?`${WW} < 1`:iW===OW-1?`${WW} >= ${iW}`:`${WW} == ${iW}`)(WW,NW,iW)} ? ${OW(NW)} : ${mW})`)).join("\n\t\t+ "),
+       KW = (WW, iW, OW) => `vec4 ${WW}(int i) {\n\treturn ${MW("i",OW,(WW=>`gpuParticleSystem[${iW+WW}]`),"vec4(0.0)")};\n}\n`,
+       SW = `\n${KW("colorPositionsAt",sW(kW.colorPositions),bW.c/4)}\n${KW("color1At",sW(kW.color1),bW.c)}\n${KW("color2At",sW(kW.color2),bW.c)}\n${KW("velocityAt",sW(kW.Sj),bW.c)}\n${KW("remapStopAt",sW(kW.remap),bW.c)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${MW("j",4,(W … [truncated]
+       YW = (WW, iW, OW, mW) => WW ? `${OW}(${mW})` : `gpuParticleSystem[${iW} + ${mW}]`,
+       yW = WW => `gpuParticleSystem[${WW>>2}].${"xyzw"[3&WW]}`,
+       TW = WW => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${bW.c}\n#define COLOR_POSITIONS ${sW(kW.colorPositions)}\n#define COLOR1 ${sW(kW.color1)}\n#define COLOR2 ${sW(kW.color2)}\n#define VELOCITY ${sW(kW.Sj)}\n#define R … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L75)

```diff
-     fe.d.ShadersStore[`${pe}VertexShader`] = te(!1), fe.d.ShadersStore[`${pe}PixelShader`] = Ze, fe.d.ShadersStore[`${Xe}VertexShader`] = te(!0), fe.d.ShadersStore[`${Xe}PixelShader`] = Ze;
+     AW.c.ShadersStore[`${jW}VertexShader`] = TW(!1), AW.c.ShadersStore[`${jW}PixelShader`] = JW, AW.c.ShadersStore[`${UW}VertexShader`] = TW(!0), AW.c.ShadersStore[`${UW}PixelShader`] = JW;
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L78-L79` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L78-L79) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L78-L79)

```diff
-     var Pe = He(39488),
-       Ae = He(44799);
+     var nW = OW(39925),
+       uW = OW(53776);
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L82)

```diff
-         super(ee, ie, He), this.renderer = He, this.yp = ye, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Te.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(WW, iW, OW), this.renderer = OW, this.rb = mW, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(bW.t), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L89-L91` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L91) · [Before (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L91)

```diff
-             const ee = Math.floor(Me / Te.l),
-               He = Math.min(ie, (ee + 1) * Te.l);
-             ye.texSubImage2D(ye.TEXTURE_2D, 0, Me % Te.l * 4, ee, 4 * (He - Me), 1, ye.RGBA_INTEGER, ye.UNSIGNED_INT, be, Me * Te.c), Me = He
+             const WW = Math.floor(NW / bW.p),
+               OW = Math.min(iW, (WW + 1) * bW.p);
+             mW.texSubImage2D(mW.TEXTURE_2D, 0, NW % bW.p * 4, WW, 4 * (OW - NW), 1, mW.RGBA_INTEGER, mW.UNSIGNED_INT, EW, NW * bW.g), NW = OW
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L95)

```diff
-         const be = ye.Nf();
+         const EW = mW.VA();
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L98-L99)

```diff
-           Ke = Math.min(Me, Te.l);
-         this.records = be.createRawTexture(null, 4 * Ke, Math.ceil(Me / Ke), oe.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, oe.c.TEXTURE_NEAREST_SAMPLINGMODE, null, oe.c.TEXTURETYPE_UNSIGNED_INTEGER)
+           PW = Math.min(NW, bW.p);
+         this.records = EW.createRawTexture(null, 4 * PW, Math.ceil(NW / PW), tW.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, tW.e.TEXTURE_NEAREST_SAMPLINGMODE, null, tW.e.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L102-L103` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L102-L103) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L102-L103)

```diff
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.yp.getAnimationRatio() || 1;
-         const ie = this.yp.getFrameId();
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rb.getAnimationRatio() || 1;
+         const iW = this.rb.getFrameId();
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L117)

```diff
-         for (const He of Te.r) this.uniforms[He] = this.uniformBits[He];
+         for (const OW of bW.w) this.uniforms[OW] = this.uniformBits[OW];
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L119)

```diff
-         (0, Ae.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ie = this.ramp) || void 0 === ie || ie.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Re.c.CreateRGBATexture(this.rampTexels.texels, Te.i, … [truncated]
+         (0, uW.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (iW = this.ramp) || void 0 === iW || iW.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = ZW.b.CreateRGBATexture(this.rampTexels.texels, bW.l, … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L129)

```diff
-         this.yp = ee, this.reportFailure = ie, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = pe, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
+         this.rb = WW, this.reportFailure = iW, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = jW, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L132)

```diff
-         null === ye && null !== He ? (console.warn(`GPU particles link their fallback here: ${He}`), this.reportFailure(He, !0)) : null !== ye && this.fail(ye === Ve ? Ve : null !== He && void 0 !== He ? He : ye)
+         null === mW && null !== OW ? (console.warn(`GPU particles link their fallback here: ${OW}`), this.reportFailure(OW, !0)) : null !== mW && this.fail(mW === dW ? dW : null !== OW && void 0 !== OW ? OW : mW)
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L135-L138` → after: `L135-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L135-L138) · [Before (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L135-L138)

```diff
-         const He = Te.l * this.engine.getCaps().maxTextureSize;
-         ie > He && this.warnOnce(`capacity:${ee}`, `particle system ${ee} holds ${He} particles, not ${ie}: its records texture's limit`);
-         const ye = new Ye(ee, Math.min(ie, He), this, this.yp);
-         return this.yp.addParticleSystem(ye), ye
+         const OW = bW.p * this.engine.getCaps().maxTextureSize;
+         iW > OW && this.warnOnce(`capacity:${WW}`, `particle system ${WW} holds ${OW} particles, not ${iW}: its records texture's limit`);
+         const mW = new oW(WW, Math.min(iW, OW), this, this.rb);
+         return this.rb.addParticleSystem(mW), mW
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L143)

```diff
-         for (const ye of (0, ke.p)(ee.blendMode))
+         for (const mW of (0, xW.h)(WW.blendMode))
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L148)

```diff
-         this.yp._toBeDisposed.push(ee)
+         this.rb._toBeDisposed.push(WW)
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L151)

```diff
-         this.yp.removeParticleSystem(ee), ee.releaseGl()
+         this.rb.removeParticleSystem(WW), WW.releaseGl()
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L158)

```diff
-           yp: ye,
+           rb: mW,
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L164)

```diff
-           Ue = null !== (ie = ee.ramp) && void 0 !== ie ? ie : this.whiteRamp;
+           LW = null !== (iW = WW.ramp) && void 0 !== iW ? iW : this.whiteRamp;
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L166)

```diff
-         for (const Fe of (0, ke.p)(ee.blendMode)) {
+         for (const cW of (0, xW.h)(WW.blendMode)) {
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L168)

```diff
-           He.enableEffect(ie), ie.setTexture("gpuParticleTexture", ee.texture.mirror), ie.setTexture("gpuParticleRampTexture", Ue), ie._bindTexture("gpuParticleRecords", ee.records), ie.setMatrix("gpuParticleView", ye.getViewMatrix()), ie.setMatrix("gpuParticleProjection", ye.get … [truncated]
+           OW.enableEffect(iW), iW.setTexture("gpuParticleTexture", WW.texture.mirror), iW.setTexture("gpuParticleRampTexture", LW), iW._bindTexture("gpuParticleRecords", WW.records), iW.setMatrix("gpuParticleView", mW.getViewMatrix()), iW.setMatrix("gpuParticleProjection", mW.get … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-         return He.setAlphaMode(oe.c.ALPHA_DISABLE), Ke
+         return OW.setAlphaMode(tW.e.ALPHA_DISABLE), PW
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L190)

```diff
-             if (ie) return `${ye} ${ie}`
+             if (iW) return `${mW} ${iW}`
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L199)

```diff
-         return ee === ke.d ? this.multiplyEffect : this.effect
+         return WW === xW.b ? this.multiplyEffect : this.effect
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L204)

```diff
-           ee === this.shader && this.programFailed(null !== (ye = this.gl()) && void 0 !== ye && ye.isContextLost() ? Ve : function(ee) {
+           WW === this.shader && this.programFailed(null !== (mW = this.gl()) && void 0 !== mW && mW.isContextLost() ? dW : function(WW) {
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L211)

```diff
-         this.linkingPair ? this.pairFailure ??= ee : this.fail(ee)
+         this.linkingPair ? this.pairFailure ??= WW : this.fail(WW)
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L215-L216` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L215-L216) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L215-L216)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${ee}`), this.reportFailure(ee, !1);
-           for (const ee of this.yp.zW.slice()) ee instanceof Ye && ee.disposeOnStop && ee.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${WW}`), this.reportFailure(WW, !1);
+           for (const WW of this.rb.vY.slice()) WW instanceof oW && WW.disposeOnStop && WW.dispose()
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L220-L221)

```diff
-     var ce = He(40913);
-     class xe extends ce.b {
+     var vW = OW(41359);
+     class gW extends vW.c {
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L234-L250` → after: `L234-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L234-L250) · [Before (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L234-L250)

```diff
-     var ve = He(41306),
-       ue = He(42177),
-       me = He(41067),
-       le = He(41273),
-       Se = He(41269),
-       ne = He(41195),
-       je = He(42244),
-       se = He(38341),
-       Ie = He(44803),
-       he = He(44806),
-       Ne = He(44812),
-       Ge = He(41216),
-       re = He(3084),
-       Qe = He(38209),
-       ei = He(41437),
-       ii = He(38284),
- ... (1 more removed lines; see GitHub link above)
+     var pW = OW(41715),
+       fW = OW(42588),
+       CW = OW(41469),
+       XW = OW(41680),
+       BW = OW(41675),
+       qW = OW(41604),
+       RW = OW(42650),
+       GW = OW(38691),
+       IW = OW(53781),
+       aW = OW(53788),
+       rW = OW(53797),
+       zW = OW(41628),
+       FW = OW(3911),
+       QW = OW(38576),
+       Wi = OW(41825),
+       ii = OW(38645),
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L253-L254)

```diff
-       if (ee.visibility < 1 || !ee.isVisible || !ee.isEnabled() || ee.metadata[Hi.d] || !ee.isReady()) return !0;
-       const ie = ee.pW;
+       if (WW.visibility < 1 || !WW.isVisible || !WW.isEnabled() || WW.metadata[Oi.g] || !WW.isReady()) return !0;
+       const iW = WW.hY;
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-           be = ye.iT();
+           EW = mW.BA();
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L265)

```diff
-         this.uk = ee, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ie.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.Hx = WW, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, iW.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L275-L278` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L275-L278) · [Before (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L275-L278)

```diff
-           uk: ye
-         } = this, be = null === (ie = ye.iW) || void 0 === ie ? void 0 : ie.visibility;
-         if (!be || !ee || ye.PR.pT) return !1;
-         if (!(ye.xR.KMe[0] >= ii.f)) return !1;
+           Hx: mW
+         } = this, EW = null === (iW = mW.bY) || void 0 === iW ? void 0 : iW.visibility;
+         if (!EW || !WW || mW.TZ.Lb) return !1;
+         if (!(mW.oZ.lEW[0] >= ii.f)) return !1;
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L281)

```diff
-         const Ke = ye.yq,
+         const PW = mW.Wl,
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L284)

```diff
-         return Fe[0] = Ue.x + Ke[0], Fe[1] = Ue.y + Ke[1], Fe[2] = Ue.z + Ke[2], !!be.eyeClear(Fe[0], Fe[1], Fe[2], ee.minZ, Me, ye.xR) && (this.vis = be, this.passable.clear(), this.count = 0, !0)
+         return cW[0] = LW.x + PW[0], cW[1] = LW.y + PW[1], cW[2] = LW.z + PW[2], !!EW.eyeClear(cW[0], cW[1], cW[2], WW.minZ, NW, mW.oZ) && (this.vis = EW, this.passable.clear(), this.count = 0, !0)
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L305-L306` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L305-L306) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L305-L306)

```diff
-           xR: Ue
-         } = this.uk, [Fe, Je] = Ue.KMe, oe = null !== He && He.update(ye[0], ye[1], ye[2], Ue.ER, Fe, Je, this.passable);
+           oZ: LW
+         } = this.Hx, [cW, wW] = LW.lEW, tW = null !== OW && OW.update(mW[0], mW[1], mW[2], LW.UZ, cW, wW, this.passable);
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L317)

```diff
-           Ge.f.prototype.push.call(ee, ye)
+           zW.g.prototype.push.call(WW, mW)
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L322-L327` → after: `L322-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L322-L327) · [Before (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L322-L327)

```diff
-     var Mi = He(38265),
-       Ki = He(38220),
-       Ui = He(41414),
-       Fi = He(44815),
-       Ji = He(41421),
-       oi = He(41323);
+     var Ni = OW(38626),
+       Pi = OW(38589),
+       Li = OW(41805),
+       ci = OW(53801),
+       wi = OW(41808),
+       ti = OW(41732);
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L341-L342)

```diff
-       if (!ie || !0 !== ie[Qe.s]) return;
-       const He = ie[Qe.y],
+       if (!iW || !0 !== iW[QW.q]) return;
+       const OW = iW[QW.v],
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L350)

```diff
-       const ie = ee.pW;
+       const iW = WW.hY;
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         const ee = ie[He].iT();
+         const WW = iW[OW].BA();
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L356)

```diff
-         const ee = ie[He].iT();
+         const WW = iW[OW].BA();
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L366)

```diff
-       if ("function" !== typeof He) throw new Error(`terrainDrawState: Babylon has no ${ie} to hook`);
+       if ("function" !== typeof OW) throw new Error(`terrainDrawState: Babylon has no ${iW} to hook`);
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L371)

```diff
-       const Me = He.xR.ER,
+       const NW = OW.oZ.UZ,
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L375)

```diff
-         Je = new Mi.c(Me, ee.Nf());
+         wW = new Ni.d(NW, WW.VA());
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L377)

```diff
-         if (Bi.has(ee) || (Bi.add(ee), ee.onContextLostObservable.add(fi), ee.hf.add(fi)), zi) return;
+         if (ki.has(WW) || (ki.add(WW), WW.onContextLostObservable.add(Ai), WW.DA.add(Ai)), Ui) return;
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L379)

```diff
-         const ie = Fi.c.prototype,
+         const iW = ci.b.prototype,
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L392-L393` → after: `L392-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L392-L393) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L392-L393)

```diff
-         const be = Ei(Ji.b.prototype, "resetDrawCache");
-         Ji.b.prototype.resetDrawCache = function(ee, ie) {
+         const EW = si(wi.d.prototype, "resetDrawCache");
+         wi.d.prototype.resetDrawCache = function(WW, iW) {
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L396)

```diff
-         const Me = Ui.e.prototype,
+         const NW = Li.d.prototype,
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L407)

```diff
-       }(ee.Nf());
+       }(WW.VA());
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L422-L423)

```diff
-             He = ee.qMe[0],
-             ye = ee.qMe[1];
+             OW = WW.MEW[0],
+             mW = WW.MEW[1];
```

#### 59. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L439)

```diff
-             Me = Fe.gR(ee.activeCamera),
+             NW = cW.kZ(WW.activeCamera),
```

#### 60. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L442)

```diff
-             const ie = ee.Nf().currentRenderPassId;
+             const iW = WW.VA().currentRenderPassId;
```

#### 61. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L459)

```diff
-             if (!ei.d.IsInFrustum(ie.qMe, ye)) continue;
+             if (!Wi.b.IsInFrustum(iW.MEW, mW)) continue;
```

#### 62. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L469)

```diff
-                 if (Ke && ye[ie] === Je) qe && 1 === be[ie] && yi(ke) && 0, Fe.see(ke, 1 === be[ie] ? Re : -1);
+                 if (PW && mW[iW] === wW) lW && 1 === EW[iW] && mi(xW) && 0, cW.see(xW, 1 === EW[iW] ? ZW : -1);
```

#### 63. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-                   const ee = !0 === ke.metadata[Ki.h];
+                   const WW = !0 === xW.metadata[Pi.l];
```

#### 64. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L476)

```diff
-                 } else Me ? Ee(ke, Re, !0 === ke.metadata[Ki.h]) : Ge.f.prototype.push.call(He, ke)
+                 } else NW ? MW(xW, ZW, !0 === xW.metadata[Pi.l]) : zW.g.prototype.push.call(OW, xW)
```

#### 65. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L483)

```diff
-         const Me = ie.kMe;
+         const NW = iW.sEW;
```

#### 66. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L486)

```diff
-           ie.isEnabled() && Ge.f.prototype.push.call(ye, ie)
+           iW.isEnabled() && zW.g.prototype.push.call(mW, iW)
```

#### 67. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490-L491` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L490-L491) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L490-L491)

```diff
-         fMe: () => Fe.culled,
-         Nbe: (ee, ie) => {
+         KEW: () => cW.culled,
+         xEW: (WW, iW) => {
```

#### 68. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L495)

```diff
-             Je = `${be}|${Ue}|${Fe}`;
+             wW = `${EW}|${LW}|${cW}`;
```

#### 69. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L499-L501` → after: `L499-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L499-L501) · [Before (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L499-L501)

```diff
-             He.NHe([be * Me - 1, Ue * Me - 1, Fe * Me - 1], null, ee), oe = Object.assign(ye(ee, Me + 2), {
-               TMe: Je,
-               pMe: 0,
+             OW.fiW([EW * NW - 1, LW * NW - 1, cW * NW - 1], null, WW), tW = Object.assign(mW(WW, NW + 2), {
+               SEW: wW,
+               YEW: 0,
```

#### 70. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L505)

```diff
-             }), Be(oe), qe[oe._noaSlot] = (0, re.f)(be, Ue, Fe), fe[3 * oe._noaSlot] = be, fe[3 * oe._noaSlot + 1] = Ue, fe[3 * oe._noaSlot + 2] = Fe, Ke.set(Je, oe)
+             }), sW(tW), lW[tW._noaSlot] = (0, FW.e)(EW, LW, cW), AW[3 * tW._noaSlot] = EW, AW[3 * tW._noaSlot + 1] = LW, AW[3 * tW._noaSlot + 2] = cW, PW.set(wW, tW)
```

#### 71. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L507)

```diff
-           oe.pMe++, ee.metadata[Qe.B] = oe
+           tW.YEW++, WW.metadata[QW.y] = tW
```

#### 72. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L509-L511` → after: `L509-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L509-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L509-L511) · [Before (L509-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L509-L511)

```diff
-         gL: ee => {
-           const ie = ee.metadata[Qe.B];
-           ie && (ie.pMe--, ie.pMe <= 0 && (Ke.delete(ie.TMe), pe.push(ie._noaSlot)), ee.metadata[Qe.B] = null)
+         pD: WW => {
+           const iW = WW.metadata[QW.y];
+           iW && (iW.YEW--, iW.YEW <= 0 && (PW.delete(iW.SEW), jW.push(iW._noaSlot)), WW.metadata[QW.y] = null)
```

#### 73. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L513)

```diff
-         RMe: (ee, ie) => {
+         kEW: (WW, iW) => {
```

#### 74. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L515)

```diff
-             ye = ie.metadata[Qe.B];
+             mW = iW.metadata[QW.y];
```

#### 75. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L529)

```diff
-         Zie: ee => {
+         YWW: WW => {
```

#### 76. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531-L532` → after: `L531-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L531-L532) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L531-L532)

```diff
-             ie.MMe.XMe(ee), ie.bMe.XMe(ee);
-             for (const He of ie.qMe) He.XMe(ee);
+             iW.ZEW.yEW(WW), iW.tEW.yEW(WW);
+             for (const OW of iW.MEW) OW.yEW(WW);
```

#### 77. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L554)

```diff
-         if (!(ee * (ee >= 0 ? Ke : ye) + ie * (ie >= 0 ? Ue : be) + oe * (oe >= 0 ? Fe : Me) + He[Je + 3] >= 0)) return !1
+         if (!(WW * (WW >= 0 ? PW : mW) + iW * (iW >= 0 ? LW : EW) + tW * (tW >= 0 ? cW : NW) + OW[wW + 3] >= 0)) return !1
```

#### 78. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L558)

```diff
-     var Wi = He(38597);
+     var Yi = OW(38948);
```

#### 79. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L561-L564` → after: `L561-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L561-L564) · [Before (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L561-L564)

```diff
-         var He = ee.yp;
-         He.Cbe(new Ne.b(He));
-         var ye = new Ie.e(Fe);
-         He.EMe = ye, ye.blocks = [];
+         var OW = WW.rb;
+         OW.MmW(new rW.b(OW));
+         var mW = new IW.d(cW);
+         OW.JEW = mW, mW.blocks = [];
```

#### 80. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L567-L569` → after: `L567-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L567-L569) · [Before (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L567-L569)

```diff
-         this.textPlanes = Ue, this.fMe = () => be.fMe(), this.Zie = ee => {
-           oe(ye, ee), be.Zie(ee)
-         }, this.Nbe = (ie, He, Ke) => {
+         this.textPlanes = LW, this.KEW = () => EW.KEW(), this.YWW = WW => {
+           tW(mW, WW), EW.YWW(WW)
+         }, this.xEW = (iW, OW, PW) => {
```

#### 81. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L571)

```diff
-           if (!ie.metadata[Qe.y] && !ie.metadata[Qe.p]) {
+           if (!iW.metadata[QW.v] && !iW.metadata[QW.o]) {
```

#### 82. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L573-L574` → after: `L573-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L573-L574) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L573-L574)

```diff
-               var Fe = ye.kMe;
-               if (ie.metadata[Qe.F] && !ie.parent) {
+               var cW = mW.sEW;
+               if (iW.metadata[QW.E] && !iW.parent) {
```

#### 83. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576-L577` → after: `L576-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L576-L577) · [Before (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L576-L577)

```diff
-                 var oe = ie.WC().OMe;
-                 ie.metadata[Qe.H] = oe.center.length() + oe.radius, ie.Gf = !0
+                 var tW = iW.KV().HEW;
+                 iW.metadata[QW.F] = tW.center.length() + tW.radius, iW.pA = !0
```

#### 84. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L579)

```diff
-               return Fe.push(ie), ie.metadata[Qe.l] = Fe, void(ie.metadata[Qe.p] = !0)
+               return cW.push(iW), iW.metadata[QW.j] = cW, void(iW.metadata[QW.o] = !0)
```

#### 85. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-               ee.uk.NHe(Xe, null, ze), pe = Re(ze, Je), ye.blocks.push(pe), Me[Te] = pe, pe.TMe = Te
+               WW.Hx.fiW(UW, null, kW), jW = ZW(kW, wW), mW.blocks.push(jW), NW[bW] = jW, jW.SEW = bW
```

#### 86. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L591)

```diff
-             be.Nbe(ie, Ke), be.RMe(pe, ie), pe.pMe = (pe.pMe || 0) + 1, ie.metadata[Qe.y] = pe, ie.metadata[Qe.s] = !0, ie.Gf = !0
+             EW.xEW(iW, PW), EW.kEW(jW, iW), jW.YEW = (jW.YEW || 0) + 1, iW.metadata[QW.v] = jW, iW.metadata[QW.q] = !0, iW.pA = !0
```

#### 87. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L593)

```diff
-         }, this.gL = ee => {
+         }, this.pD = WW => {
```

#### 88. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L595-L597` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L595-L597) · [Before (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L595-L597)

```diff
-             ee.metadata[Qe.p] && ((0, re.n)(ee.metadata[Qe.l], ee), ee.metadata[Qe.p] = !1), ee.metadata[Qe.l] === Ue && (ee.Gf = !1), ee.metadata[Qe.l] = void 0, ee.metadata[Qe.H] = void 0;
-             var ie = ee.metadata[Qe.y];
-             ie && ie.entries && (ee.metadata[Qe.s] && be.removeEntry(ie, ee), ie.pMe--, ie.pMe <= 0 && (delete Me[ie.TMe], (0, re.n)(ye.blocks, ie))), be.gL(ee), ee.metadata[Qe.y] = null, ee.metadata[Qe.s] = !1
+             WW.metadata[QW.o] && ((0, FW.i)(WW.metadata[QW.j], WW), WW.metadata[QW.o] = !1), WW.metadata[QW.j] === LW && (WW.pA = !1), WW.metadata[QW.j] = void 0, WW.metadata[QW.F] = void 0;
+             var iW = WW.metadata[QW.v];
+             iW && iW.entries && (WW.metadata[QW.q] && EW.removeEntry(iW, WW), iW.YEW--, iW.YEW <= 0 && (delete NW[iW.SEW], (0, FW.i)(mW.blocks, iW))), EW.pD(WW), WW.metadata[QW.v] = null, WW.metadata[QW.q] = !1
```

#### 89. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L599)

```diff
-         }, this.bie = function(ee) {
+         }, this.NWW = function(WW) {
```

#### 90. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L601-L604` → after: `L601-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L601-L604) · [Before (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L601-L604)

```diff
-           if (ee.metadata[Qe.y]) {
-             if (ee.metadata[Qe.s] === ie) return;
-             var He = ee.metadata[Qe.y];
-             He && He.entries && (ie ? be.RMe(He, ee) : be.removeEntry(He, ee)), ee.metadata[Qe.s] = ie
+           if (WW.metadata[QW.v]) {
+             if (WW.metadata[QW.q] === iW) return;
+             var OW = WW.metadata[QW.v];
+             OW && OW.entries && (iW ? EW.kEW(OW, WW) : EW.removeEntry(OW, WW)), WW.metadata[QW.q] = iW
```

#### 91. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L606-L608` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L606-L608) · [Before (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L606-L608)

```diff
-             if (ee.metadata[Qe.p] === ie) return;
-             var Me = ee.metadata[Qe.l] || ye.kMe;
-             ie ? Me.push(ee) : (0, re.n)(Me, ee), ee.metadata[Qe.p] = ie
+             if (WW.metadata[QW.o] === iW) return;
+             var NW = WW.metadata[QW.j] || mW.sEW;
+             iW ? NW.push(WW) : (0, FW.i)(NW, WW), WW.metadata[QW.o] = iW
```

#### 92. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L612)

```diff
-           Je = ie * ee.uk.xR.ER,
+           wW = iW * WW.Hx.oZ.UZ,
```

#### 93. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L615)

```diff
-               ee.MMe.XMe(ie), ee.bMe.XMe(ie), ee.qMe.forEach((ee => ee.XMe(ie))), ee.blocks && oe(ee, ie)
+               WW.ZEW.yEW(iW), WW.tEW.yEW(iW), WW.MEW.forEach((WW => WW.yEW(iW))), WW.blocks && tW(WW, iW)
```

#### 94. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L619-L621` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L619-L621) · [Before (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L619-L621)

```diff
-             var He = new Ke.rf(ee[0], ee[1], ee[2]),
-               ye = new Ke.rf(ee[0] + ie, ee[1] + ie, ee[2] + ie);
-             return new he.c(He, ye, void 0, void 0, void 0, Fe)
+             var OW = new PW.fA(WW[0], WW[1], WW[2]),
+               mW = new PW.fA(WW[0] + iW, WW[1] + iW, WW[2] + iW);
+             return new aW.e(OW, mW, void 0, void 0, void 0, cW)
```

#### 95. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L623)

```diff
-         be = gi(He, ye, ee.uk, Re, ((ee, ie) => {
+         EW = Mi(OW, mW, WW.Hx, ZW, ((WW, iW) => {
```

#### 96. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L626)

```diff
-             ye.isEnabled(!1) && ((0, Wi.d)(ye, ie) && Ge.f.prototype.push.call(ee, ye))
+             mW.isEnabled(!1) && ((0, Yi.e)(mW, iW) && zW.g.prototype.push.call(WW, mW))
```

#### 97. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L636)

```diff
-         Z8: ye,
+         f4: mW,
```

#### 98. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L640-L641` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L640-L641) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L640-L641)

```diff
-       } = ee.model.W8, Ue = ee.PMe;
-       Ue.position.wie(ie[0], ie[1], ie[2]), Ue.rotation.wie(He[0], He[1], He[2]);
+       } = WW.model.o4, LW = WW.gEW;
+       LW.position.yWW(iW[0], iW[1], iW[2]), LW.rotation.yWW(OW[0], OW[1], OW[2]);
```

#### 99. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L643)

```diff
-       Fe.position.wie(ye[0], ye[1], ye[2]), Fe.fov = be, Fe.minZ = Me, Fe.maxZ = Ke
+       cW.position.yWW(mW[0], mW[1], mW[2]), cW.fov = EW, cW.minZ = NW, cW.maxZ = PW
```

#### 100. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L647)

```diff
-       const ie = ee.Nf(),
+       const iW = WW.VA(),
```

#### 101. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-       if (!ye || He.dT < 2 || ie.Gbe || ye.getParameter(ye.DEPTH_BITS) < 24) return !1;
+       if (!mW || OW.bb < 2 || iW.nmW || mW.getParameter(mW.DEPTH_BITS) < 24) return !1;
```

#### 102. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L654)

```diff
-         Ue = le.b.prototype.render;
+         LW = XW.c.prototype.render;
```

#### 103. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L663)

```diff
-         ee ? Ue.call(this, ee, He, be, Ke, Fe, Je, Re, ke, qe) : (ie.setAlphaMode(oe.c.ALPHA_DISABLE), Ue.call(this, null, !1, !1, Ke, Fe, Je, Re, !1), Me._empty || (ye.depthRange(1, 1), Ue.call(Me, null, He, be, Ke, Fe, Je, Re, ke, qe), ye.depthRange(0, 1)), Ue.call(this, null,  … [truncated]
+         WW ? LW.call(this, WW, OW, EW, PW, cW, wW, ZW, xW, lW) : (iW.setAlphaMode(tW.e.ALPHA_DISABLE), LW.call(this, null, !1, !1, PW, cW, wW, ZW, !1), NW._empty || (mW.depthRange(1, 1), LW.call(NW, null, OW, EW, PW, cW, wW, ZW, xW, lW), mW.depthRange(0, 1)), LW.call(this, null,  … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L669-L670` → after: `L669-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L669-L670) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L669-L670)

```diff
-         const ye = new be.b("light", Ke.rf.FromArray(ie), ee);
-         return ye.diffuse = Me.Color3.FromArray([1, 1, 1]), ye.specular = Me.Color3.FromArray([1, 1, 1]), ye.intensity = se.d[He], ye
+         const mW = new EW.d("light", PW.fA.FromArray(iW), WW);
+         return mW.diffuse = NW.Color3.FromArray([1, 1, 1]), mW.specular = NW.Color3.FromArray([1, 1, 1]), mW.intensity = GW.b[OW], mW
```

#### 105. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L673)

```diff
-     class Pi extends Fe.b {
+     class ni extends cW.c {
```

#### 106. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L682)

```diff
-         this.heldTexture = ee, this.particleTexture = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.mirror) && void 0 !== ie ? ie : null
+         this.heldTexture = WW, this.particleTexture = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.mirror) && void 0 !== iW ? iW : null
```

#### 107. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         ee && (this.particleTexture = null, (0, Je.A)(this.heldTexture), this.heldTexture = null), super.dispose(ee, ie, He)
+         WW && (this.particleTexture = null, (0, wW.D)(this.heldTexture), this.heldTexture = null), super.dispose(WW, iW, OW)
```

#### 108. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L696)

```diff
-       return ie && !ie.failed ? ie.bC(He, ye) : new Pi(He, ye, ee)
+       return iW && !iW.failed ? iW.wV(OW, mW) : new ni(OW, mW, WW)
```

#### 109. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L702-L704` → after: `L702-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L702-L704) · [Before (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L702-L704)

```diff
-       let be = null !== (ye = Yi.get(ee)) && void 0 !== ye ? ye : null;
-       return !be && ee.Nf().dT >= 2 && (be = new ae(ee, (ie => {
-         console.error(`Particle programs failed in scene ${ee.uid}: ${ie}`)
+       let EW = null !== (mW = oi.get(WW)) && void 0 !== mW ? mW : null;
+       return !EW && WW.VA().bb >= 2 && (EW = new eW(WW, (iW => {
+         console.error(`Particle programs failed in scene ${WW.uid}: ${iW}`)
```

#### 110. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L707` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L707) · [Before (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L707)

```diff
-     const ai = ye.e.Zero();
+     const ei = mW.b.Zero();
```

#### 111. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709-L710` → after: `L709-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L709-L710) · [Before (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L709-L710)

```diff
-       Rbe: function(ee, ie) {
-         return new xe(ee, ie.Ube, {
+       rOW: function(WW, iW) {
+         return new gW(WW, iW.ROW, {
```

#### 112. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L717)

```diff
-       VMe: function(ee, ie) {
+       pEW: function(WW, iW) {
```

#### 113. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L719-L723` → after: `L719-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L719-L723) · [Before (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L719-L723)

```diff
-           const ye = new ne.b(ee.engine);
-           ee.yp = ye, ye.detachControl(), ye.autoClear = !1, Se.b.MIN_RENDERINGGROUPS = -1;
-           for (let Me = Se.b.MIN_RENDERINGGROUPS; Me <= 1; Me++) ye.setRenderingOrder(Me, le.b.PainterSortCompare, le.b.PainterSortCompare, le.b.PainterSortCompare);
-           ye.setRenderingAutoClearDepthStencil(0, !1), me.e.Enabled = !1, ee.ZMe = new ti(ee, Math.round(ie.wMe)), ee.PMe = new ue.b("camHolder", ye), ee.camera = new ve.e("camera", new Ke.rf(0, 0, 0), ye), ee.camera.parent = ee.PMe, Zi(ee), (0, se.f)(ee, ((ee, ie, He) => (0, je. … [truncated]
-           const be = He(ye, ie.YMe);
+           const mW = new qW.c(WW.engine);
+           WW.rb = mW, mW.detachControl(), mW.autoClear = !1, BW.d.MIN_RENDERINGGROUPS = -1;
+           for (let NW = BW.d.MIN_RENDERINGGROUPS; NW <= 1; NW++) mW.setRenderingOrder(NW, XW.c.PainterSortCompare, XW.c.PainterSortCompare, XW.c.PainterSortCompare);
+           mW.setRenderingAutoClearDepthStencil(0, !1), CW.e.Enabled = !1, WW.dEW = new yi(WW, Math.round(iW.eEW)), WW.gEW = new fW.e("camHolder", mW), WW.camera = new pW.b("camera", new PW.fA(0, 0, 0), mW), WW.camera.parent = WW.gEW, Ti(WW), (0, GW.g)(WW, ((WW, iW, OW) => (0, RW. … [truncated]
+           const EW = OW(mW, iW.VEW);
```

#### 114. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L725)

```diff
-             be.some((ie => ie === ee)) || console.error(`Light "${ee.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             EW.some((iW => iW === WW)) || console.error(`Light "${WW.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 115. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L727)

```diff
-         }(ee, ie, Di), wi(ee.yp)
+         }(WW, iW, Hi), Ji(WW.rb)
```

#### 116. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L729)

```diff
-       DMe: Zi,
+       vEW: Ti,
```

#### 117. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L731)

```diff
-         const be = ee.yp;
+         const EW = WW.rb;
```

#### 118. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L734-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L734-L735) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L734-L735)

```diff
-       cMe: function(ee, ie, He) {
-         return ee.engine.dT >= 2 && !ee.xMe && (ee.xMe = new ae(ee.yp, ee.LMe)), Ai(ee.yp, ee.xMe, ie, He)
+       CEW: function(WW, iW, OW) {
+         return WW.engine.bb >= 2 && !WW.XEW && (WW.XEW = new eW(WW.rb, WW.BEW)), ui(WW.rb, WW.XEW, iW, OW)
```

#### 119. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L737-L739` → after: `L737-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L737-L739) · [Before (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L737-L739)

```diff
-       vMe: function(ee, ie) {
-         ee.yp.zW.forEach((He => {
-           if (He instanceof Ye) return void He.Zie(ie, ee.uk.yq);
+       REW: function(WW, iW) {
+         WW.rb.vY.forEach((OW => {
+           if (OW instanceof oW) return void OW.YWW(iW, WW.Hx.Wl);
```

#### 120. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L745)

```diff
-             ye.worldOffset.x = -ee.uk.yq[0], ye.worldOffset.y = -ee.uk.yq[1], ye.worldOffset.z = -ee.uk.yq[2]
+             mW.worldOffset.x = -WW.Hx.Wl[0], mW.worldOffset.y = -WW.Hx.Wl[1], mW.worldOffset.z = -WW.Hx.Wl[2]
```

#### 121. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L751)

```diff
-         const ye = new Ue.d(ie, ee.yp, null, void 0, void 0, !1);
-         return (0, je.f)(ie, He, ee.yp, ye), ye
+         const mW = new LW.b(iW, WW.rb, null, void 0, void 0, !1);
+         return (0, RW.d)(iW, OW, WW.rb, mW), mW
```

#### 122. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753-L755` → after: `L753-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L753-L755) · [Before (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L753-L755)

```diff
-       bp: Ti,
-       CMe: function(ee, ie) {
-         return ai.origin.jD(ie.origin), ai.direction.jD(ie.direction), ai.length = ie.length, ai.epsilon = ie.epsilon, ai.CMe(ee, !1, void 0, !1, void 0, !0).pickedPoint
+       zb: bi,
+       qEW: function(WW, iW) {
+         return ei.origin.HJ(iW.origin), ei.direction.HJ(iW.direction), ei.length = iW.length, ei.epsilon = iW.epsilon, ei.qEW(WW, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 123. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L759)

```diff
-   42201: (ee, ie, He) => {
+   42603: (WW, iW, OW) => {
```

#### 124. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L762-L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L763) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L762-L763)

```diff
-       e: () => ze,
-       h: () => Ie
+       g: () => rW
```

#### 125. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L765-L778` → after: `L765-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L765-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L765-L779) · [Before (L765-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L765-L778)

```diff
-     var ye = He(41380),
-       be = He(42210),
-       Me = He(42250),
-       Ke = He(42217),
-       Ue = He(38650),
-       Fe = He(38659),
-       Je = He(38664),
-       oe = He(38673),
-       Re = He(38070),
-       ke = He(38075),
-       qe = He(42219),
-       fe = He(38045),
-       Te = He(38057),
-       pe = He(38034);
+     var mW = OW(41782),
+       EW = OW(42612),
+       NW = OW(42652),
+       PW = OW(42616),
+       LW = OW(38995),
+       cW = OW(39004),
+       wW = OW(39009),
+       tW = OW(39011),
+       ZW = OW(38464),
+       xW = OW(38427),
+       lW = OW(38431),
+       AW = OW(42623),
+       bW = OW(38405),
+       jW = OW(38419),
+       UW = OW(38388);
```

#### 126. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L784` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L785) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L784)

```diff
-         oR: ee
+         cZ: WW
```

#### 127. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L791-L792` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L792-L793) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L791-L792)

```diff
-             const ye = (0, Te.V)(ie),
-               be = ye && (0, Te.y)(ye, ee.name);
+             const mW = (0, jW.bb)(iW),
+               EW = mW && (0, jW.v)(mW, WW.name);
```

#### 128. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L794` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L795) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L794)

```diff
-             super(ie, ee.name, ee.priority, be ? be.defines : ee.defines(...Ke), !1), this.featureState = void 0, this.featureState = He, this._pluginManager._addPlugin(this), this._enable(!0), (0, Te.A)(this._material, ee, this.featureState, this._pluginDefineNames)
+             super(iW, WW.name, WW.priority, EW ? EW.defines : WW.defines(...PW), !1), this.featureState = void 0, this.featureState = OW, this._pluginManager._addPlugin(this), this._enable(!0), (0, jW.x)(this._material, WW, this.featureState, this._pluginDefineNames)
```

#### 129. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L800` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L801) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L800)

```diff
-             return ee === pe.b.GLSL || ee === pe.b.WGSL
+             return WW === UW.e.GLSL || WW === UW.e.WGSL
```

#### 130. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L803-L804` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L804-L805) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L803-L804)

```diff
-         He = (0, fe.e)(ee);
-       for (const [ye, be] of Object.entries(fe.c)) {
+         OW = (0, bW.i)(WW);
+       for (const [mW, EW] of Object.entries(bW.d)) {
```

#### 131. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818-L820` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L819-L821) · [Before (L818-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L818-L820)

```diff
-     var Ee = He(40913),
-       ge = He(42223),
-       Oe = He(42229);
+     var KW = OW(41359),
+       SW = OW(42630),
+       YW = OW(42633);
```

#### 132. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L823` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L824) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L823)

```diff
-       return (0, Oe.e)(He, ie.urls, (() => async function(ee, ie, He) {
+       return (0, YW.i)(OW, iW.urls, (() => async function(WW, iW, OW) {
```

#### 133. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L831` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L832) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L831)

```diff
-             pixels: Ke && Ke.byteLength === ye * ye * Me * 4 ? Ke : null !== (be = We.get(ee.getInternalTexture())) && void 0 !== be ? be : ee._readPixelsSync(),
+             pixels: PW && PW.byteLength === mW * mW * NW * 4 ? PW : null !== (EW = TW.get(WW.getInternalTexture())) && void 0 !== EW ? EW : WW._readPixelsSync(),
```

#### 134. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L834` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L835) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L834)

```diff
-         })), Me = Math.min(He.Nf().getCaps().texture2DArrayMaxLayerCount, 256), Ue = (0, Oe.c)(be, ye, Me).map((ee => {
+         })), NW = Math.min(OW.VA().getCaps().texture2DArrayMaxLayerCount, 256), LW = (0, YW.e)(EW, mW, NW).map((WW => {
```

#### 135. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L840` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L841) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L840)

```diff
-             atlas: new ge.c(ie, ye, ye, be, Ee.b.TEXTUREFORMAT_RGBA, He, !0, !1, Ke.d.NEAREST_NEAREST_MIPLINEAR),
+             atlas: new SW.b(iW, mW, mW, EW, KW.c.TEXTUREFORMAT_RGBA, OW, !0, !1, PW.d.NEAREST_NEAREST_MIPLINEAR),
```

#### 136. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L847` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L848) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L847)

```diff
-             const He = ie.createRawTexture(new Uint8Array(4), 1, 1, Ee.b.TEXTUREFORMAT_RGBA, !1, !1, Ke.d.NEAREST_SAMPLINGMODE);
+             const OW = iW.createRawTexture(new Uint8Array(4), 1, 1, KW.c.TEXTUREFORMAT_RGBA, !1, !1, PW.d.NEAREST_SAMPLINGMODE);
```

#### 137. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L849` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L850) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L849)

```diff
-           }(ye, He.Nf()), We.set(ye, be[ie].pixels))
+           }(mW, OW.VA()), TW.set(mW, EW[iW].pixels))
```

#### 138. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L854-L855` → after: `L855-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L855-L856) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855)

```diff
-     var te = He(38682);
-     class Ze extends(ze(Fe.k)) {
+     var JW = OW(39017);
+     class hW extends(sW(cW.e)) {
```

#### 139. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L860` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L861) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L860)

```diff
-               console.error(`Failed to build the texture arrays, at atlas ${ie}`, ee)
+               console.error(`Failed to build the texture arrays, at atlas ${iW}`, WW)
```

#### 140. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L863` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L864) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L863)

```diff
-         })), (0, te.l)(ie, ee.shaderLanguage)
+         })), (0, JW.h)(iW, WW.shaderLanguage)
```

#### 141. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L874` → after: `L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L875) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L874)

```diff
-         const Ke = await de(this.mirrors, He.sources, this._material.Xx());
+         const PW = await yW(this.mirrors, OW.sources, this._material.bD());
```

#### 142. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L878-L887` → after: `L879-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L879-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L879-L888) · [Before (L878-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L878-L887)

```diff
-     var we = He(42233),
-       De = He(41429),
-       Pe = He(37913),
-       Ae = He(42240),
-       Ye = He(41535),
-       Ve = He(41421),
-       ae = He(42177),
-       ce = He(38314),
-       xe = He(42244);
-     class Le extends we.c {
+     var HW = OW(42635),
+       nW = OW(41818),
+       uW = OW(38235),
+       oW = OW(42641),
+       dW = OW(41927),
+       eW = OW(41808),
+       vW = OW(42588),
+       gW = OW(38669),
+       DW = OW(42650);
+     class VW extends HW.e {
```

#### 143. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L898-L902` → after: `L899-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L899-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L899-L903) · [Before (L898-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L898-L902)

```diff
-       TransformNode: ae.b,
-       bR: we.c,
-       VertexBuffer: we.f,
-       BoundingInfo: De.c,
-       rf: Pe.rf,
+       TransformNode: vW.e,
+       OZ: HW.e,
+       VertexBuffer: HW.g,
+       BoundingInfo: nW.b,
+       fA: uW.fA,
```

#### 144. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L904-L908` → after: `L905-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L905-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L905-L909) · [Before (L904-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L904-L908)

```diff
-       SubMesh: Ve.b,
-       VertexData: Ye.e,
-       MirroredGeometry: xe.b,
-       meshFromArrays: xe.f,
-       plainMeshFromArrays: xe.h
+       SubMesh: eW.d,
+       VertexData: dW.c,
+       MirroredGeometry: DW.c,
+       meshFromArrays: DW.d,
+       plainMeshFromArrays: DW.e
```

#### 145. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L911-L912` → after: `L912-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L912-L913) · [Before (L911-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L911-L912)

```diff
-     var ve = He(38146);
-     class ue extends(ze(oe.e)) {
+     var fW = OW(38511);
+     class CW extends(sW(tW.l)) {
```

#### 146. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L918-L919` → after: `L919-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L919-L920) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L918-L919)

```diff
-           const ye = (0, Te.V)(ee);
-           ye && (ye.disableLighting = !0, (0, Te.S)(ye))
+           const mW = (0, jW.bb)(WW);
+           mW && (mW.disableLighting = !0, (0, jW._)(mW))
```

#### 147. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L923` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L924) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L923)

```diff
-         (0, ve.m)(this._material), super.dispose(ee)
+         (0, fW.k)(this._material), super.dispose(WW)
```

#### 148. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L935` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L936) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L935)

```diff
-     }(0, oe.d)({
+     }(0, tW.h)({
```

#### 149. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L938-L941` → after: `L939-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L939-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L939-L942) · [Before (L938-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L938-L941)

```diff
-     var le = He(38081),
-       Se = He(38330);
-     const ne = new RegExp(`^#define ${Je.c}\\s*$`, "m");
-     class je extends(ze(Je.h)) {
+     var BW = OW(38437),
+       qW = OW(38683);
+     const RW = new RegExp(`^#define ${wW.c}\\s*$`, "m");
+     class GW extends(sW(wW.i)) {
```

#### 150. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L943` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L944) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L943)

```diff
-         super(ee, ie), this.xf = !1, ie.ditherOnlyWhileFading && (Se.f.add(ee), this.prewarmDitherTwins(ee))
+         super(WW, iW), this.JA = !1, iW.ditherOnlyWhileFading && (qW.h.add(WW), this.prewarmDitherTwins(WW))
```

#### 151. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L955` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L956) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L955)

```diff
-           Me && !ne.test(ye.defines) && ee.Xx().onAfterRenderObservable.addOnce((() => {
+           NW && !RW.test(mW.defines) && WW.bD().onAfterRenderObservable.addOnce((() => {
```

#### 152. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L961-L962` → after: `L962-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L962-L963) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L961-L962)

```diff
-         if (this.xf || ee.RZ()) return !1;
-         const ie = new Ve.b(0, 0, 0, 0, 0, ee, void 0, !1, !1);
+         if (this.JA || WW.Ay()) return !1;
+         const iW = new eW.d(0, 0, 0, 0, 0, WW, void 0, !1, !1);
```

#### 153. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L972` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L973) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L972)

```diff
-         this.xf = !0, super.dispose(ee)
+         this.JA = !0, super.dispose(WW)
```

#### 154. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L980` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L982) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L980)

```diff
-     Ie(Ue.e, Be), Ie(Fe.k, Ze), Ie(Je.h, je), Ie(oe.e, ue), (0, Re.d)({
+     rW(LW.e, MW), rW(cW.e, hW), rW(wW.i, GW), rW(tW.l, CW), rW(ZW.d, IW), (0, xW.c)({
```

#### 155. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L983` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L985) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L983)

```diff
-         return (0, le.o)(ee, He), He.detailMap._pluginDefineNames
+         return (0, BW.w)(WW, OW), OW.detailMap._pluginDefineNames
```

#### 156. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L986` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L988) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L986)

```diff
-         (0, le.S)(ee.mirror, ie, He)
+         (0, BW.Z)(WW.mirror, iW, OW)
```

#### 157. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L990` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L992) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L990)

```diff
-         if (!ye) throw new Error(`${ie.feature.name} has no plugin class (registerPluginClass)`);
+         if (!mW) throw new Error(`${iW.feature.name} has no plugin class (registerPluginClass)`);
```

#### 158. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1004` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1006) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1004)

```diff
-           return Object.assign(He, Je), void(0, ke.F)(ee, He)
+           return Object.assign(OW, wW), void(0, lW.O)(WW, OW)
```

#### 159. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1009` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1011) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1009)

```diff
-               ie(new Error(`${Fe.context}: ${(null===He||void 0===He?void 0:He.message)||ee||"Failed to load texture"}`))
+               iW(new Error(`${cW.context}: ${(null===OW||void 0===OW?void 0:OW.message)||WW||"Failed to load texture"}`))
```

#### 160. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1027` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1029) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1027)

```diff
-         le.q.set(Xe, Re), Object.assign(Xe, Je), Xe.updateURL(ye, fe);
+         BW.z.set(UW, ZW), Object.assign(UW, wW), UW.updateURL(mW, AW);
```

#### 161. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1029` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1031) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1029)

```diff
-         ze && (ze.label = Te), ee.uvSet = Xe.coordinatesIndex, ee.matrix.set((0, le.L)(Xe)), (0, ke.F)(ee, Xe)
+         kW && (kW.label = bW), WW.uvSet = UW.coordinatesIndex, WW.matrix.set((0, BW.U)(UW)), (0, lW.O)(WW, UW)
```

#### 162. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1040-L1043` → after: `L1042-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1042-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1042-L1045) · [Before (L1040-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1040-L1043)

```diff
-         } = ee.sampler, oe = Je === (0, ke.y)(Ue) ? null : () => {
-           (0, le.K)(Re, Je)
-         }, Re = new be.c(ye, ie, null, Ue, Me, oe, null, (0, ke.u)(Fe));
-         Re.coordinatesMode = Ke.d.SKYBOX_MODE, (0, ke.F)(ee, Re)
+         } = WW.sampler, tW = wW === (0, lW.A)(LW) ? null : () => {
+           (0, BW.R)(ZW, wW)
+         }, ZW = new EW.b(mW, iW, null, LW, NW, tW, null, (0, lW.z)(cW));
+         ZW.coordinatesMode = PW.d.SKYBOX_MODE, (0, lW.O)(WW, ZW)
```

#### 163. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1059-L1060` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1061-L1062) · [Before (L1059-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1059-L1060)

```diff
-         const ke = (0, le.y)(Re);
-         return (0, le.C)(ke, Re), ke
+         const xW = (0, BW.H)(ZW);
+         return (0, BW.K)(xW, ZW), xW
```

#### 164. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1064` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1066) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1064)

```diff
-   42244: (ee, ie, He) => {
+   42650: (WW, iW, OW) => {
```

#### 165. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1066-L1068` → after: `L1068-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1068-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1068-L1070) · [Before (L1066-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1066-L1068)

```diff
-       b: () => oe,
-       f: () => Re,
-       h: () => ke
+       c: () => tW,
+       d: () => ZW,
+       e: () => xW
```

#### 166. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1070-L1076` → after: `L1072-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1072-L1078) · [Before (L1070-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1070-L1076)

```diff
-     var ye = He(42233),
-       be = He(41175),
-       Me = He(41429),
-       Ke = He(41540),
-       Ue = He(42240),
-       Fe = He(41535),
-       Je = He(38195);
+     var mW = OW(42635),
+       EW = OW(41582),
+       NW = OW(41818),
+       PW = OW(41929),
+       LW = OW(42641),
+       cW = OW(41927),
+       wW = OW(38562);
```

#### 167. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1112` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1114) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1112)

```diff
-         this.link(new Je.c(ee, ie, this.getTotalVertices(), new Float64Array(He.Qbe()), new Float64Array(ye.Qbe())))
+         this.link(new wW.d(WW, iW, this.getTotalVertices(), new Float64Array(OW.wEW()), new Float64Array(mW.wEW())))
```

#### 168. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1116-L1117` → after: `L1118-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1118-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1118-L1119) · [Before (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1116-L1117)

```diff
-         const ie = new oe(ee, this.Xx()),
-           He = this.eMe(void 0, !0);
+         const iW = new tW(WW, this.bD()),
+           OW = this.IEW(void 0, !0);
```

#### 169. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1132-L1133` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1134-L1135) · [Before (L1132-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1132-L1133)

```diff
-           const ke = ee.getIsInstanced() ? (He instanceof Array ? 4 * He.length : He.byteLength) / oe : this.getTotalVertices(),
-             qe = (0, be.s)(He, Ue, Fe, Je, oe, ke, !0),
+           const xW = WW.getIsInstanced() ? (OW instanceof Array ? 4 * OW.length : OW.byteLength) / tW : this.getTotalVertices(),
+             lW = (0, EW.l)(OW, LW, cW, wW, tW, xW, !0),
```

#### 170. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1142` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1144) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1142)

```diff
-           ie.setVerticesBuffer(new ye.f(this.Nf(), qe, Me, fe), ke)
+           iW.setVerticesBuffer(new mW.g(this.VA(), lW, NW, AW), xW)
```

#### 171. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1144` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1146) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1144)

```diff
-         return ie._updatable = Ke, ie._boundingInfo = new Me.c(this.extend.minimum, this.extend.maximum), ie.relink(), ie
+         return iW._updatable = PW, iW._boundingInfo = new NW.b(this.extend.minimum, this.extend.maximum), iW.relink(), iW
```

#### 172. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1147` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1149) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1147)

```diff
-         const Fe = ee[0].Xx(),
+         const cW = WW[0].bD(),
```

#### 173. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1174` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1176) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1174)

```diff
-       const be = (0, Je.h)(ie),
+       const EW = (0, wW.i)(iW),
```

#### 174. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1182-L1183` → after: `L1184-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1184-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1184-L1185) · [Before (L1182-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1182-L1183)

```diff
-         Te = new Fe.e;
-       Te.positions = Me, Te.normals = null !== Re && void 0 !== Re ? Re : null, Te.uvs = null !== ke && void 0 !== ke ? ke : null, Te.indices = qe;
+         bW = new cW.c;
+       bW.positions = NW, bW.normals = null !== ZW && void 0 !== ZW ? ZW : null, bW.uvs = null !== xW && void 0 !== xW ? xW : null, bW.indices = lW;
```

#### 175. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1202` → after: `L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1204) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1202)

```diff
-       return Object.assign(new Fe.e, {
+       return Object.assign(new cW.c, {
```

#### 176. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1210` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1212) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1210)

```diff
-   39492: (ee, ie, He) => {
+   39931: (WW, iW, OW) => {
```

#### 177. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1212` → after: `L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1214) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1212)

```diff
-       b: () => ye,
+       A: () => cW,
```

#### 178. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1214-L1215` → after: `L1216-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1216-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1216-L1217) · [Before (L1214-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1214-L1215)

```diff
-       e: () => Me,
-       i: () => be,
+       g: () => PW,
+       h: () => NW,
```

#### 179. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1217-L1219` → after: `L1219-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1219-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1219-L1221) · [Before (L1217-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1217-L1219)

```diff
-       n: () => Je,
-       r: () => oe,
-       v: () => Fe
+       p: () => LW,
+       t: () => wW,
+       w: () => tW
```

#### 180. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1244` → after: `L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1246) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1244)

```diff
-         Op: 12 + 9 * ye,
+         Sj: 12 + 9 * mW,
```

#### 181. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1250` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1252) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1250)

```diff
-   39488: (ee, ie, He) => {
+   39925: (WW, iW, OW) => {
```

#### 182. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1253` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1255) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1253)

```diff
-       f: () => Be
+       g: () => sW
```

#### 183. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1255-L1258` → after: `L1257-L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1257-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1257-L1260) · [Before (L1255-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1255-L1258)

```diff
-     var ye = He(37938),
-       be = He(37913),
-       Me = He(38075),
-       Ke = He(39492);
+     var mW = OW(38285),
+       EW = OW(38235),
+       NW = OW(38431),
+       PW = OW(39931);
```

#### 184. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1261` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1263) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1261)

```diff
-         this.bk = ee, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
+         this.aZ = WW, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
```

#### 185. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1263` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1265) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1263)

```diff
-         this.records = new Float32Array(ie * Ke.c), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(ie).fill(-1 / 0)
+         this.records = new Float32Array(iW * PW.g), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(iW).fill(-1 / 0)
```

#### 186. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1272` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1274) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1272)

```diff
-         const ie = this.bk;
+         const iW = this.aZ;
```

#### 187. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1284-L1285` → after: `L1286-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1286-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1286-L1287) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1284-L1285)

```diff
-           He = this.highWater * Ke.c;
-         for (let ye = Ke.e.time; ye < He; ye += Ke.c) ie[ye] -= ee;
+           OW = this.highWater * PW.g;
+         for (let mW = PW.h.time; mW < OW; mW += PW.g) iW[mW] -= WW;
```

#### 188. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1303-L1306` → after: `L1305-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1305-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1305-L1308) · [Before (L1303-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1303-L1306)

```diff
-     var Fe = He(38020),
-       Je = He(39499),
-       oe = He(39503),
-       Re = He(39508);
+     var cW = OW(38369),
+       wW = OW(39938),
+       tW = OW(39940),
+       ZW = OW(39948);
```

#### 189. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1309` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1311) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1309)

```diff
-         this.particleEmitterType = new oe.d, this.texture = null, this.blendMode = Re.h, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = … [truncated]
+         this.particleEmitterType = new tW.d, this.texture = null, this.blendMode = ZW.d, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = … [truncated]
```

#### 190. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1313` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1315) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1313)

```diff
-         return null !== (ee = qe(this).direction1) && void 0 !== ee ? ee : be.rf.Zero()
+         return null !== (WW = lW(this).direction1) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 191. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1321` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1323) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1321)

```diff
-         return null !== (ee = qe(this).direction2) && void 0 !== ee ? ee : be.rf.Zero()
+         return null !== (WW = lW(this).direction2) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 192. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1329` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1331) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1329)

```diff
-         return null !== (ee = qe(this).minEmitBox) && void 0 !== ee ? ee : be.rf.Zero()
+         return null !== (WW = lW(this).minEmitBox) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 193. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1337` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1339) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1337)

```diff
-         return null !== (ee = qe(this).maxEmitBox) && void 0 !== ee ? ee : be.rf.Zero()
+         return null !== (WW = lW(this).maxEmitBox) && void 0 !== WW ? WW : EW.fA.Zero()
```

#### 194. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1348` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1350) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1348)

```diff
-         return this.colorGradients ??= [], this.colorGradients.push(new Je.e(ee, ie, He)), this.colorGradients.sort(fe), this
+         return this.colorGradients ??= [], this.colorGradients.push(new wW.d(WW, iW, OW)), this.colorGradients.sort(AW), this
```

#### 195. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1393-L1395` → after: `L1395-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1395-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1395-L1397) · [Before (L1393-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1393-L1395)

```diff
-         super(), this.name = ee, this.host = He, this.onDispose = Xe, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = be.rf.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 … [truncated]
-           position: new be.rf,
-           direction: new be.rf
+         super(), this.name = WW, this.host = OW, this.onDispose = UW, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = EW.fA.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 … [truncated]
+           position: new EW.fA,
+           direction: new EW.fA
```

#### 196. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1403` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1405) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1403)

```diff
-         null === (ie = this.emitterDisposed) || void 0 === ie || ie.remove(), this.emitterDisposed = null, this.emitterValue = ee, ee && Ee(ee) && (this.emitterDisposed = ee.Bx.add((() => {
+         null === (iW = this.emitterDisposed) || void 0 === iW || iW.remove(), this.emitterDisposed = null, this.emitterValue = WW, WW && MW(WW) && (this.emitterDisposed = WW.jD.add((() => {
```

#### 197. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1423` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1425) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1423)

```diff
-         return !this.xf && null !== this.emitterValue && this.host.canDraw(this)
+         return !this.JA && null !== this.emitterValue && this.host.canDraw(this)
```

#### 198. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1428` → after: `L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1430) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1428)

```diff
-         this.xf || (this.xf = !0, null === (ee = this.emitterDisposed) || void 0 === ee || ee.remove(), this.emitterDisposed = null, ie && ((0, Me.A)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
+         this.JA || (this.JA = !0, null === (WW = this.emitterDisposed) || void 0 === WW || WW.remove(), this.emitterDisposed = null, iW && ((0, NW.D)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
```

#### 199. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1448` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1450) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1448)

```diff
-         this.started && this.stopped && !this.xf && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
+         this.started && this.stopped && !this.JA && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
```

#### 200. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1452` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1454) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1452)

```diff
-         return this.started = !1, null === (ee = this.onAnimationEnd) || void 0 === ee || ee.call(this), !!this.xf || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
+         return this.started = !1, null === (WW = this.onAnimationEnd) || void 0 === WW || WW.call(this), !!this.JA || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
```

#### 201. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1463` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1465) · [Before (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1463)

```diff
-       Zie(ee, ie) {
+       YWW(WW, iW) {
```

#### 202. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1479` → after: `L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1481) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1479)

```diff
-         } = Re, Te = Ke.e, pe = null === (ie = this.getColorGradients()) || void 0 === ie ? void 0 : ie[0], Xe = pe ? pe.color1 : this.color1, ze = pe ? null !== (He = pe.color2) && void 0 !== He ? He : pe.color1 : this.color2;
+         } = ZW, bW = PW.h, jW = null === (iW = this.getColorGradients()) || void 0 === iW ? void 0 : iW[0], UW = jW ? jW.color1 : this.color1, kW = jW ? null !== (OW = jW.color2) && void 0 !== OW ? OW : jW.color1 : this.color2;
```

#### 203. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1488` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1490) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1488)

```diff
-           const pe = ee * Ke.c;
+           const jW = WW * PW.g;
```

#### 204. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1504-L1505` → after: `L1506-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1506-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1506-L1507) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1504-L1505)

```diff
-       for (const be of ee) be.isReady() || (ye++, He.length < ze && He.push(`${ie} particle system ${be.name}`));
-       return ye > He.length && He.push(`${ye-He.length} more ${ie} particle systems`), He
+       for (const EW of WW) EW.isReady() || (mW++, OW.length < kW && OW.push(`${iW} particle system ${EW.name}`));
+       return mW > OW.length && OW.push(`${mW-OW.length} more ${iW} particle systems`), OW
```

#### 205. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1512` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1514) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1512)

```diff
-   44799: (ee, ie, He) => {
+   53776: (WW, iW, OW) => {
```

#### 206. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1517` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1519) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1517)

```diff
-       l: () => Je
+       i: () => wW
```

#### 207. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1519-L1521` → after: `L1521-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1521-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1521-L1523) · [Before (L1519-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1519-L1521)

```diff
-     var ye = He(38020),
-       be = He(39499),
-       Me = He(39492);
+     var mW = OW(38369),
+       EW = OW(39938),
+       NW = OW(39931);
```

#### 208. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1524` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1526) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1524)

```diff
-       const be = Me.v;
+       const EW = NW.A;
```

#### 209. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1532` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1534) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1532)

```diff
-         ie[be.colorPositions + Me] = ee.gradient, ee.color1.toArray(ie, be.color1 + 4 * Me), (null !== (Fe = ee.color2) && void 0 !== Fe ? Fe : ee.color1).toArray(ie, be.color2 + 4 * Me)
+         iW[EW.colorPositions + NW] = WW.gradient, WW.color1.toArray(iW, EW.color1 + 4 * NW), (null !== (cW = WW.color2) && void 0 !== cW ? cW : WW.color1).toArray(iW, EW.color2 + 4 * NW)
```

#### 210. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1535` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1537) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1535)

```diff
-         oe = ke(ee, Je, "Op", ye);
+         tW = xW(WW, wW, "Sj", mW);
```

#### 211. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1537` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1539) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1537)

```diff
-       for (let Me = 0; Me < oe; Me++) ze(ie, be.Op + 4 * Me, Je[qe(Je, Me)]);
+       for (let NW = 0; NW < tW; NW++) kW(iW, EW.Sj + 4 * NW, wW[lW(wW, NW)]);
```

#### 212. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1547` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1549) · [Before (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1547)

```diff
-         texels: new Uint8Array(4 * Me.i)
+         texels: new Uint8Array(4 * NW.l)
```

#### 213. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1554` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1556) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1554)

```diff
-         for (let He = 0; He < Me.i; He++) be.k.GetCurrentGradient(He / Me.i, ee, ((ee, ie, He) => {
+         for (let OW = 0; OW < NW.l; OW++) EW.m.GetCurrentGradient(OW / NW.l, WW, ((WW, iW, OW) => {
```

#### 214. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1571` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1573) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1571)

```diff
-       return ie ? ie.length > Me.b ? (ye(`particleStops:${He}`, `GPU particles use the first 2 and last ${Me.b-2} of more than ${Me.b} ${He} gradient stops (${ee.name})`), Me.b) : ie.length : 0
+       return iW ? iW.length > NW.c ? (mW(`particleStops:${OW}`, `GPU particles use the first 2 and last ${NW.c-2} of more than ${NW.c} ${OW} gradient stops (${WW.name})`), NW.c) : iW.length : 0
```

#### 215. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1575` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1577) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1575)

```diff
-       return ie < 2 || ee.length <= Me.b ? ie : ee.length - Me.b + ie
+       return iW < 2 || WW.length <= NW.c ? iW : WW.length - NW.c + iW
```

#### 216. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1577` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1579) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1577)

```diff
-     const fe = new Float32Array(Me.n),
+     const AW = new Float32Array(NW.t),
```

#### 217. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1593` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1595) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1593)

```diff
-       ee[ie] = He.gradient, ee[ie + 1] = He.factor1, ee[ie + 2] = null !== (ye = He.factor2) && void 0 !== ye ? ye : He.factor1
+       WW[iW] = OW.gradient, WW[iW + 1] = OW.factor1, WW[iW + 2] = null !== (mW = OW.factor2) && void 0 !== mW ? mW : OW.factor1
```

#### 218. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1596` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1598) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1596)

```diff
-   42229: (ee, ie, He) => {
+   42633: (WW, iW, OW) => {
```

#### 219. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1622-L1623` → after: `L1624-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1624-L1625) · [Before (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1622-L1623)

```diff
-       c: () => ye,
-       e: () => Me
+       e: () => mW,
+       i: () => NW
```

#### 220. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1629` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1631) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1629)

```diff
-       const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
+       const PW = null !== (mW = EW.get(WW)) && void 0 !== mW ? mW : new Map;
```

#### 221. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1631` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1633) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1631)

```diff
-       const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
+       const LW = null !== (NW = PW.get(iW[0])) && void 0 !== NW ? NW : [];
```

#### 222. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1644` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1646) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1644)

```diff
-   39508: (ee, ie, He) => {
+   39948: (WW, iW, OW) => {
```

#### 223. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1647-L1649` → after: `L1650-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1650-L1651) · [Before (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1647-L1649)

```diff
-       h: () => be,
-       l: () => Fe,
-       p: () => Re
+       e: () => cW,
+       h: () => ZW
```

#### 224. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1651` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1653) · [Before (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1651)

```diff
-     var ye = He(38012);
+     var mW = OW(38364);
```

#### 225. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1665` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1667) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1665)

```diff
-       return null !== (ie = Ue.get(ee)) && void 0 !== ie ? ie : ee
+       return null !== (iW = LW.get(WW)) && void 0 !== iW ? iW : WW
```

#### 226. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1676` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/babylon-backend.js#L1678) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/babylon-backend.js#L1676)

```diff
-   44791: (ee, ie, He) => {
+   53774: (WW, iW, OW) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockFaceTable.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd)

#### 1. `bundles/bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   63800: (ee, ie, He) => {
+   64378: (WW, iW, OW) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   37185: (ee, ie, He) => {
+   37628: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L11)

```diff
-     var ye = He(37187);
+     var mW = OW(37636);
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L72)

```diff
-     var Je = He(37190);
+     var wW = OW(37640);
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L83)

```diff
-       return `${ie}|${He}|${ee}`
+       return `${iW}|${OW}|${WW}`
```

#### 5. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L110)

```diff
-         return null !== (be = await (0, Je.e)(Me, ie, He)) && void 0 !== be ? be : (await Ee(Me, ie, He)).toDataURL()
+         return null !== (EW = await (0, wW.b)(NW, iW, OW)) && void 0 !== EW ? EW : (await MW(NW, iW, OW)).toDataURL()
```
