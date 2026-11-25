# Changed — Bundle Modifications Report (Part 034 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `34 / 56` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (365 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 72. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L446-L452` → after: `L451-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L451-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L451-L457) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L446-L452)

```diff
-     var wG = ZG(1177),
-       SG = ZG(1290),
-       LG = ZG(17),
-       yG = ZG(1275),
-       kG = ZG(1287),
-       UG = ZG(1444),
-       YG = ZG(36808);
+     var OM = iM(1229),
+       SM = iM(1382),
+       jM = iM(19),
+       aM = iM(1360),
+       PM = iM(1373),
+       nM = iM(1591),
+       QM = iM(37416);
```

#### 73. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L456-L457` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L461-L462) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L456-L457)

```diff
-         AS: bG,
-         sS: ZG
+         Wr: rM,
+         sr: iM
```

#### 74. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L459-L461` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L464-L466) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L459-L461)

```diff
-       const VG = null !== bG && void 0 !== bG ? bG : (0, kG.d)().gameNameWithVariation;
-       (0, wG.J)(VG) && ((0, YG.h)(), (0, yG.cb)((() => {
-         console.log("Received matchmaking order from game server to game", bG), (0, LG.n)("inGameReplay"), (0, UG.navigatePreserveSearch)((0, SG.d)(VG, null !== ZG && void 0 !== ZG ? ZG : void 0))
+       const zM = null !== rM && void 0 !== rM ? rM : (0, PM.e)().gameNameWithVariation;
+       (0, OM.L)(zM) && ((0, QM.k)(), (0, aM.bb)((() => {
+         console.log("Received matchmaking order from game server to game", rM), (0, jM.j)("inGameReplay"), (0, nM.navigatePreserveSearch)((0, SM.b)(zM, null !== iM && void 0 !== iM ? iM : void 0))
```

#### 75. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L465` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L470) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L465)

```diff
-   39593: (GG, bG, ZG) => {
+   40270: (MM, rM, iM) => {
```

#### 76. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L467` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L472) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L467)

```diff
-       b: () => LG
+       e: () => jM
```

#### 77. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L469-L470` → after: `L474-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L474-L475) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L469-L470)

```diff
-     var wG = ZG(19),
-       SG = ZG(1956);
+     var OM = iM(22),
+       SM = iM(2093);
```

#### 78. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L474-L476` → after: `L479-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L479-L481) · [Before (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L474-L476)

```diff
-       const LG = (0, SG.t)(null !== (bG = null === (ZG = SG.B.toggleFreeCam) || void 0 === ZG ? void 0 : ZG[0]) && void 0 !== bG ? bG : null);
-       wG.l.xh("showBottomMessage", {
-         message: `Free Camera ${GG?"Enabled":"Disabled"}${LG?` - Press ${LG} to toggle`:""}`,
+       const jM = (0, SM.m)(null !== (rM = null === (iM = SM.v.toggleFreeCam) || void 0 === iM ? void 0 : iM[0]) && void 0 !== rM ? rM : null);
+       OM.i.Tz("showBottomMessage", {
+         message: `Free Camera ${MM?"Enabled":"Disabled"}${jM?` - Press ${jM} to toggle`:""}`,
```

#### 79. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L482` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L487) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L482)

```diff
-   39404: (GG, bG, ZG) => {
+   40043: (MM, rM, iM) => {
```

#### 80. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L484-L487` → after: `L489-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L489-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L489-L492) · [Before (L484-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L484-L487)

```diff
-       c: () => UG,
-       f: () => yG,
-       i: () => kG,
-       l: () => YG
+       b: () => zM,
+       e: () => nM,
+       g: () => QM,
+       h: () => LM
```

#### 81. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L489-L490` → after: `L494-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L494-L497) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L489-L490)

```diff
-     var wG = ZG(19),
-       SG = ZG(1311);
+     var OM = iM(2039),
+       SM = iM(22),
+       jM = iM(1429),
+       aM = iM(1270);
```

#### 82. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L494` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L501) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L494)

```diff
-       wG.l.xh("newUiRequest", {
+       SM.i.Tz("newUiRequest", {
```

#### 83. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L501` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L508) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L501)

```diff
-       wG.l.xh("removeUiRequest", GG, !0);
+       SM.i.Tz("removeUiRequest", MM, !0);
```

#### 84. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L507` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L514) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L507)

```diff
-       wG.l.xh("clearUiRequests");
+       SM.i.Tz("clearUiRequests");
```

#### 85. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L513-L519` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L520-L532) · [Before (L513-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L513-L519)

```diff
-       const yG = SG.NotificationProvider.showPromptPopup({
-         title: bG,
-         confirmText: "general:yes",
-         cancelText: "general:no",
-         destructive: ZG,
-         unlockPointerKey: "uiRequestPopup"
-       });
+       const nM = "string" === typeof rM ? {
+           translationKey: rM
+         } : rM,
+         QM = jM.NotificationProvider.showPromptPopup({
+           title: nM.translationKey,
+           textOpts: {
+             title: (0, aM.g)(nM.params, OM.gameBridge.latest("hiddenPlayerNames"))
+           },
+           confirmText: "general:yes",
+           cancelText: "general:no",
+           destructive: iM,
+           unlockPointerKey: "uiRequestPopup"
+         });
```

#### 86. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L525` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L538) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L525)

```diff
-   40005: (GG, bG, ZG) => {
+   40753: (MM, rM, iM) => {
```

#### 87. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L528` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L541) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L528)

```diff
-       g: () => fG
+       h: () => mM
```

#### 88. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L530-L531` → after: `L543-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L543-L544) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L530-L531)

```diff
-     var wG = ZG(188),
-       SG = ZG(40012);
+     var OM = iM(181),
+       SM = iM(40757);
```

#### 89. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L539` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L552) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L539)

```diff
-       return null === GG.amount || 1 === GG.amount ? GG.name : `${GG.amount} ${GG.name}`
+       return null === MM.amount || 1 === MM.amount ? MM.name : `${MM.amount} ${MM.name}`
```

#### 90. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L541-L543` → after: `L554-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L554-L556) · [Before (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L541-L543)

```diff
-     var UG = ZG(40021),
-       YG = ZG(1923),
-       VG = ZG(1287);
+     var nM = iM(40765),
+       QM = iM(2067),
+       zM = iM(1373);
```

#### 91. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L546` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L559) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L546)

```diff
-       if (!GG) return UG.e;
+       if (!MM) return nM.c;
```

#### 92. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L549-L550` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L562-L563) · [Before (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L549-L550)

```diff
-       const LG = wG.d.rK,
-         yG = (0, SG.i)(null !== bG && void 0 !== bG ? bG : ZG, LG),
+       const jM = OM.f.HL,
+         aM = (0, SM.g)(null !== rM && void 0 !== rM ? rM : iM, jM),
```

#### 93. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L552` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L565) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L552)

```diff
-       return kG ? (0, SG.e)(yG, LG, ((bG, ZG, wG) => {
+       return PM ? (0, SM.d)(aM, jM, ((rM, iM, OM) => {
```

#### 94. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L555` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L568) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L555)

```diff
-       }), ZG) : `The chunk from ${yG.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZG.map(Math.floor).join(" ")}.`
+       }), iM) : `The chunk from ${aM.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${iM.map(Math.floor).join(" ")}.`
```

#### 95. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L560` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L573) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L560)

```diff
-       if (!GG) return UG.i;
+       if (!MM) return nM.f;
```

#### 96. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L569-L571` → after: `L582-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L582-L584) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L569-L571)

```diff
-         null !== GG.game && bG.push(`Game: ${GG.game}.`);
-         const ZG = null === GG.health ? "" : `, health ${Math.round(GG.health)}${null===GG.maxHealth?"":` of ${Math.round(GG.maxHealth)}`}`;
-         bG.push(`The player (the creator) stands at ${yG(GG.position)}${ZG}, ${GG.creative?"in":"not in"} creative mode.`);
+         null !== MM.game && rM.push(`Game: ${MM.game}.`);
+         const iM = null === MM.health ? "" : `, health ${Math.round(MM.health)}${null===MM.maxHealth?"":` of ${Math.round(MM.maxHealth)}`}`;
+         rM.push(`The player (the creator) stands at ${aM(MM.position)}${iM}, ${MM.creative?"in":"not in"} creative mode.`);
```

#### 97. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L573-L575` → after: `L586-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L586-L588) · [Before (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L573-L575)

```diff
-         bG.push(wG ? `Holding (slot ${GG.heldSlot}): ${kG(wG)}.` : `Holding nothing (slot ${GG.heldSlot} is empty).`);
-         const SG = GG.slots.flatMap(((GG, bG) => GG ? [`slot ${bG}: ${kG(GG)}`] : []));
-         bG.push(SG.length > 0 ? `Inventory: ${SG.join(", ")}.` : "Inventory: empty.");
+         rM.push(OM ? `Holding (slot ${MM.heldSlot}): ${PM(OM)}.` : `Holding nothing (slot ${MM.heldSlot} is empty).`);
+         const SM = MM.slots.flatMap(((MM, rM) => MM ? [`slot ${rM}: ${PM(MM)}`] : []));
+         rM.push(SM.length > 0 ? `Inventory: ${SM.join(", ")}.` : "Inventory: empty.");
```

#### 98. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L582` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L595) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L582)

```diff
-             const ZG = "player" === GG.kind ? `player "${GG.name||"?"}"` : GG.name && GG.name !== GG.kind ? `${GG.kind} "${GG.name}"` : GG.kind,
+             const iM = "player" === MM.kind ? `player "${MM.name||"?"}"` : MM.name && MM.name !== MM.kind ? `${MM.kind} "${MM.name}"` : MM.kind,
```

#### 99. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L584` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L597) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L584)

```diff
-             bG.push(`- ${ZG} at ${yG(GG.position)}, ${wG} block${1===wG?"":"s"} away`)
+             rM.push(`- ${iM} at ${aM(MM.position)}, ${OM} block${1===OM?"":"s"} away`)
```

#### 100. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L586` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L599) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L586)

```diff
-           YG.length > LG && bG.push(`- and ${YG.length-LG} more further away`)
+           QM.length > jM && rM.push(`- and ${QM.length-jM} more further away`)
```

#### 101. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L588` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L601) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L588)

```diff
-         return GG.droppedItems > 0 && bG.push(`${GG.droppedItems} dropped item${1===GG.droppedItems?" is":"s are"} on the ground nearby.`), bG.join("\n")
+         return MM.droppedItems > 0 && rM.push(`${MM.droppedItems} dropped item${1===MM.droppedItems?" is":"s are"} on the ground nearby.`), rM.join("\n")
```

#### 102. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L590` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L603) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L590)

```diff
-         game: null !== (bG = (0, VG.d)().gameNameWithVariation) && void 0 !== bG ? bG : null,
+         game: null !== (rM = (0, zM.e)().gameNameWithVariation) && void 0 !== rM ? rM : null,
```

#### 103. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L592-L594` → after: `L605-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L605-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L605-L607) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L592-L594)

```diff
-         health: null !== (ZG = YG.c.get("_health")) && void 0 !== ZG ? ZG : null,
-         maxHealth: null !== (wG = YG.c.get("_totalMaxHealth")) && void 0 !== wG ? wG : null,
-         creative: !0 === YG.c.get("creative"),
+         health: null !== (iM = QM.d.get("_health")) && void 0 !== iM ? iM : null,
+         maxHealth: null !== (OM = QM.d.get("_totalMaxHealth")) && void 0 !== OM ? OM : null,
+         creative: !0 === QM.d.get("creative"),
```

#### 104. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L602` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L615) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L602)

```diff
-   41263: (GG, bG, ZG) => {
+   41975: (MM, rM, iM) => {
```

#### 105. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L605` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L618-L619) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L605)

```diff
-       C: () => cG,
+       B: () => qM,
+       E: () => ZM,
```

#### 106. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L607-L609` → after: `L621-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L621-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L621-L624) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L607-L609)

```diff
-       G: () => PG,
-       K: () => FG,
-       O: () => jG,
+       H: () => kM,
+       J: () => uM,
+       M: () => FM,
+       N: () => vM,
```

#### 107. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L611-L617` → after: `L626-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L626-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L626-L630) · [Before (L611-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L611-L617)

```diff
-       U: () => RG,
-       W: () => eG,
-       _: () => aG,
-       e: () => TG,
-       i: () => AG,
-       k: () => WG,
-       o: () => HG,
+       c: () => BM,
+       f: () => fM,
+       h: () => tM,
+       j: () => XM,
+       n: () => gM,
```

#### 108. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L621` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L634) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L621)

```diff
-       y: () => vG
+       z: () => DM
```

#### 109. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L623-L628` → after: `L636-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L636-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L636-L641) · [Before (L623-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L623-L628)

```diff
-     var wG = ZG(1343),
-       SG = ZG(19),
-       LG = ZG(1251),
-       yG = ZG(2380),
-       kG = ZG(4842),
-       UG = ZG(4800);
+     var OM = iM(1464),
+       SM = iM(22),
+       jM = iM(1313),
+       aM = iM(2619),
+       PM = iM(5214),
+       nM = iM(5188);
```

#### 110. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L658` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L671) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L658)

```diff
-       return (0, LG.A)() && !XG
+       return (0, jM.B)() && !CM
```

#### 111. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L677` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L690) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L677)

```diff
-       (0, kG.j)(yG.t.Menu, (0, LG.A)() ? 0 : yG.t.Menu)
+       (0, PM.k)(aM.C.Menu, (0, jM.B)() ? 0 : aM.C.Menu)
```

#### 112. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L711` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L724) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L711)

```diff
-       return IG() && !VG && !JG && !(0, wG.k)()
+       return uM() && !zM && !yM && !(0, OM.l)()
```

#### 113. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L728` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L741) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L728)

```diff
-       rG ? navigator.vendor.startsWith("Apple") ? tG() : zG = EG : eG()
+       lM ? navigator.vendor.startsWith("Apple") ? IM() : EM = UM : vM()
```

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L755` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L768) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L755)

```diff
-       SG.l.xh("pointerLockUpdate", VG)
+       SM.i.Tz("pointerLockUpdate", zM)
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L758` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L771) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L758)

```diff
-   41056: (GG, bG, ZG) => {
+   41761: (MM, rM, iM) => {
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L761-L764` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L774-L775) · [Before (L761-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L761-L764)

```diff
-       g: () => kG,
-       k: () => pG,
-       l: () => YG,
-       m: () => yG,
+       f: () => PM,
+       j: () => LM,
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L766` → after: `L777-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L777-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L777-L779) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L766)

```diff
-       q: () => UG
+       r: () => aM,
+       s: () => zM,
+       v: () => nM
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L801` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L814) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L801)

```diff
-   41395: (GG, bG, ZG) => {
+   42102: (MM, rM, iM) => {
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L806-L820` → after: `L819-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L819-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L819-L833) · [Before (L806-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L806-L820)

```diff
-     var wG = ZG(1895),
-       SG = ZG(41056),
-       LG = ZG(4800),
-       yG = ZG(40971),
-       kG = ZG(41383),
-       UG = ZG(39986),
-       YG = ZG(19),
-       VG = ZG(4818),
-       pG = ZG(4810),
-       fG = ZG(40999),
-       QG = ZG(41027),
-       KG = ZG(41404),
-       hG = ZG(41012);
-     (0, hG.l)(VG.jc.Chat, (GG => {
-       if (GG.payloadKind !== pG.jc.Msgpack) return;
+     var OM = iM(2039),
+       SM = iM(41761),
+       jM = iM(5188),
+       aM = iM(41677),
+       PM = iM(42081),
+       nM = iM(40725),
+       QM = iM(22),
+       zM = iM(5200),
+       LM = iM(5198),
+       mM = iM(41706),
+       HM = iM(41728),
+       hM = iM(42106),
+       JM = iM(41712);
+     (0, JM.h)(zM.hc.Chat, (MM => {
+       if (MM.payloadKind !== LM.hc.Msgpack) return;
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L826` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L840-L841) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L826)

```diff
-           chatterEId: wG
+           chatterEId: SM,
+           chatterObjectsToReplay: jM
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L829` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L844-L845) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L829)

```diff
-           serverChatMsgId: null !== bG && void 0 !== bG ? bG : void 0,
+           serverChatMsgId: null !== rM && void 0 !== rM ? rM : void 0,
+           worldCodeLineId: null !== iM && void 0 !== iM ? iM : void 0,
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L831` → after: `L847-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L847-L848) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L831)

```diff
-           chatterEId: void 0 === wG || null === wG ? void 0 : String(wG)
+           chatterEId: void 0 === SM || null === SM ? void 0 : String(SM),
+           chatterObjectsToReplay: jM
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L833-L834` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L850-L851) · [Before (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L833-L834)

```diff
-       }((0, fG.e)(GG.payload));
-       null !== bG && YG.l.xh("chat", bG, !0)
+       }((0, mM.c)(MM.payload));
+       null !== rM && QM.i.Tz("chat", rM, !0)
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L837` → after: `L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L854) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L837)

```diff
-         chatReceived: (0, UG.l)((function(GG) {
+         chatReceived: (0, nM.k)((function(MM) {
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L841-L843` → after: `L858-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L858-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L858-L860) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L841-L843)

```diff
-             name: null !== (bG = KG.f.getName(GG)) && void 0 !== bG ? bG : null,
-             local: (0, QG.i)() === GG,
-             profileEffect: null !== (ZG = null === (wG = (0, KG.g)(GG)) || void 0 === wG ? void 0 : wG.profileEffect) && void 0 !== ZG ? ZG : null
+             name: null !== (rM = hM.e.getName(MM)) && void 0 !== rM ? rM : null,
+             local: (0, HM.f)() === MM,
+             profileEffect: null !== (iM = null === (OM = (0, hM.g)(MM)) || void 0 === OM ? void 0 : OM.profileEffect) && void 0 !== iM ? iM : null
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L851` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L868) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L851)

```diff
-             vV: ZG,
+             Kz: iM,
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L854` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L871) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L854)

```diff
-           null === (bG = (0, yG.f)()) || void 0 === bG || bG.clientApi.sendChat(ZG, wG)
+           null === (rM = (0, aM.e)()) || void 0 === rM || rM.clientApi.sendChat(iM, OM)
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L857-L860` → after: `L874-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L874-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L874-L877) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L857-L860)

```diff
-     var rG = ZG(188),
-       zG = ZG(1923),
-       EG = ZG(40954),
-       oG = ZG(39982);
+     var lM = iM(181),
+       EM = iM(2067),
+       UM = iM(41669),
+       GM = iM(40723);
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L865` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L882) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L865)

```diff
-           const ZG = (0, yG.f)();
+           const iM = (0, aM.e)();
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L868-L869` → after: `L885-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L885-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L885-L886) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L868-L869)

```diff
-           if (0 !== (EG.v.playerFlags(wG.apiView, 0) & EG.Hd.Crouching)) return !1;
-           const SG = wG.queries.directorEntity(wG.localId) >= EG.rb.BYTES ? wG.memoryData(wG.scratch(), EG.rb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (UM.v.playerFlags(OM.apiView, 0) & UM.yd.Crouching)) return !1;
+           const SM = OM.queries.directorEntity(OM.localId) >= UM.nb.BYTES ? OM.memoryData(OM.scratch(), UM.nb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L871-L872` → after: `L888-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L888-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L888-L889) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L872)

```diff
-           for (let LG = 0; LG < 3; LG++) XG[LG] = EG.rb.feet(SG, 0, LG);
-           return XG[1] += EG.rb.eyeHeight(SG, 0), (0, oG.d)(XG, GG, null !== (bG = zG.c.get("blockReach")) && void 0 !== bG ? bG : rG.d.Nd)
+           for (let jM = 0; jM < 3; jM++) CM[jM] = UM.nb.feet(SM, 0, jM);
+           return CM[1] += UM.nb.eyeHeight(SM, 0), (0, GM.c)(CM, MM, null !== (rM = EM.d.get("blockReach")) && void 0 !== rM ? rM : lM.f.ny)
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L878` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L895) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L878)

```diff
-           null === (bG = (0, yG.f)()) || void 0 === bG || bG.clickCodeBlock(GG)
+           null === (rM = (0, aM.e)()) || void 0 === rM || rM.clickCodeBlock(MM)
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L881-L888` → after: `L898-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L898-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L898-L905) · [Before (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L888)

```diff
-     var CG = ZG(40984),
-       WG = ZG(41410),
-       mG = ZG(982),
-       IG = ZG(39435),
-       FG = ZG(4792),
-       vG = ZG(40989),
-       aG = ZG(40976),
-       cG = ZG(40993);
+     var wM = iM(41691),
+       tM = iM(42111),
+       gM = iM(1073),
+       uM = iM(40073),
+       RM = iM(5184),
+       pM = iM(41697),
+       WM = iM(41682),
+       sM = iM(41704);
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L895` → after: `L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L912) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L895)

```diff
-         if ("Gb" === GG) {
+         if ("ki" === MM) {
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L900` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L917) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L900)

```diff
-           } = ZG.Gb, LG = Object.keys(GG)[0], yG = GG[LG];
+           } = iM.ki, jM = Object.keys(MM)[0], aM = MM[jM];
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L913` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L930) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L913)

```diff
-         return null !== (bG = null === (ZG = (0, yG.f)()) || void 0 === ZG ? void 0 : ZG.renderFrame.projectWorldPosToScreenPos(GG)) && void 0 !== bG ? bG : {
+         return null !== (rM = null === (iM = (0, aM.e)()) || void 0 === iM ? void 0 : iM.renderFrame.projectWorldPosToScreenPos(MM)) && void 0 !== rM ? rM : {
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L922-L930` → after: `L939-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L939-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L939-L947) · [Before (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L930)

```diff
-       PG || (PG = !0, (0, hG.l)(VG.jc.ProgressBarUpdate, (GG => {
-         const bG = (0, cG.j)(GG);
-         (0, cG.d)(bG) && YG.l.xh("progressBarUpdate", bG, !0)
-       })), (0, hG.l)(vG.v, (GG => {
-         const bG = (0, cG.f)(vG.v, GG);
-         bG && YG.l.xh("middleScreenBarInitiate", {
-           duration: bG.cS,
-           lS: bG.lS,
-           horizBarRemOffset: bG.jS
+       ZM || (ZM = !0, (0, JM.h)(zM.hc.ProgressBarUpdate, (MM => {
+         const rM = (0, sM.f)(MM);
+         (0, sM.c)(rM) && QM.i.Tz("progressBarUpdate", rM, !0)
+       })), (0, JM.h)(pM.w, (MM => {
+         const rM = (0, sM.d)(pM.w, MM);
+         rM && QM.i.Tz("middleScreenBarInitiate", {
+           duration: rM.QO,
+           zO: rM.zO,
+           horizBarRemOffset: rM.LO
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L932-L935` → after: `L949-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L949-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L949-L952) · [Before (L932-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L935)

```diff
-       })), (0, hG.l)(VG.jc.RemoveMiddleScreenBar, (() => {
-         YG.l.xh("middleScreenBarRemove")
-       })), (0, hG.l)(vG.db, (GG => {
-         const bG = (0, cG.f)(vG.db, GG);
+       })), (0, JM.h)(zM.hc.RemoveMiddleScreenBar, (() => {
+         QM.i.Tz("middleScreenBarRemove")
+       })), (0, JM.h)(pM._, (MM => {
+         const rM = (0, sM.d)(pM._, MM);
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L938-L940` → after: `L955-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L955-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L955-L957) · [Before (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L938-L940)

```diff
-           const GG = bG.WG ? null === (ZG = (0, yG.f)()) || void 0 === ZG ? void 0 : ZG.renderFrame.projectDirectionToScreenPos(bG.WG) : void 0;
-           YG.l.xh("sendHitmarker", {
-             eb: bG.eb,
+           const MM = rM.HO ? null === (iM = (0, aM.e)()) || void 0 === iM ? void 0 : iM.renderFrame.projectDirectionToScreenPos(rM.HO) : void 0;
+           QM.i.Tz("sendHitmarker", {
+             mO: rM.mO,
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L944-L945` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L961-L962) · [Before (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L944-L945)

```diff
-       })), (0, hG.l)(vG.ib, (GG => {
-         const bG = (0, cG.f)(vG.ib, GG);
+       })), (0, JM.h)(pM.fb, (MM => {
+         const rM = (0, sM.d)(pM.fb, MM);
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L951-L952` → after: `L968-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L968-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L968-L969) · [Before (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L952)

```diff
-             jb: SG,
-             Mb: LG
+             hO: SM,
+             dO: jM
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L954` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L971) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L954)

```diff
-           YG.l.xh("setDirectionArrow", {
+           QM.i.Tz("setDirectionArrow", {
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L959` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L976) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L959)

```diff
-             Mb: LG
+             dO: jM
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L962-L964` → after: `L979-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L979-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L979-L981) · [Before (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L964)

```diff
-       })), (0, hG.l)(vG.d, (GG => {
-         const bG = (0, cG.f)(vG.d, GG);
-         bG && YG.l.xh("clearDirectionArrow", {
+       })), (0, JM.h)(pM.f, (MM => {
+         const rM = (0, sM.d)(pM.f, MM);
+         rM && QM.i.Tz("clearDirectionArrow", {
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L967-L972` → after: `L984-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L984-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L984-L989) · [Before (L967-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L967-L972)

```diff
-       })), (0, hG.l)(vG.m, (GG => {
-         const bG = (0, cG.f)(vG.m, GG);
-         bG && YG.l.xh("flyingMiddleMessage", {
-           content: lG(bG.aL),
-           cL: bG.cL,
-           lL: bG.lL
+       })), (0, JM.h)(pM.n, (MM => {
+         const rM = (0, sM.d)(pM.n, MM);
+         rM && QM.i.Tz("flyingMiddleMessage", {
+           content: DM(rM.Di),
+           oi: rM.oi,
+           Yi: rM.Yi
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L974-L975` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L991-L992) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L974-L975)

```diff
-       })), (0, hG.l)(VG.jc.WorldVariation, (GG => {
-         const bG = (0, cG.j)(GG);
+       })), (0, JM.h)(zM.hc.WorldVariation, (MM => {
+         const rM = (0, sM.f)(MM);
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L977-L978` → after: `L994-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L994-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L994-L995) · [Before (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L977-L978)

```diff
-           const GG = bG === mG.d ? null : {
-             message: `Currently loaded as variation: ${bG}`,
+           const MM = rM === gM.g ? null : {
+             message: `Currently loaded as variation: ${rM}`,
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L981` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L998) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L981)

```diff
-           YG.l.xh("showPermanentBottomMessage", GG, !0)
+           QM.i.Tz("showPermanentBottomMessage", MM, !0)
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L983-L984` → after: `L1000-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1000-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1000-L1001) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L983-L984)

```diff
-       })), (0, hG.l)(vG.L, (GG => {
-         const bG = (0, cG.f)(vG.L, GG);
+       })), (0, JM.h)(pM.J, (MM => {
+         const rM = (0, sM.d)(pM.J, MM);
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L993` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1010) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L993)

```diff
-           FG.e.queueQTE(GG, ZG, SG).getResult().then((bG => {
+           RM.d.queueQTE(MM, iM, SM).getResult().then((rM => {
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L995` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1012) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L995)

```diff
-             "boolean" === typeof bG && (null === (ZG = (0, yG.f)()) || void 0 === ZG || ZG.send(aG.b.QteResponse, {
+             "boolean" === typeof rM && (null === (iM = (0, aM.e)()) || void 0 === iM || iM.send(WM.d.QteResponse, {
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1000-L1010` → after: `L1017-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1017-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1017-L1027) · [Before (L1000-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1000-L1010)

```diff
-         }(bG.id, bG.TG)
-       })), (0, hG.l)(vG.Y, (GG => {
-         const bG = (0, cG.f)(vG.Y, GG);
-         "number" === typeof bG && FG.e.cancelQTE(bG)
-       })), (0, hG.f)((() => {
-         FG.e.reset()
-       })), (0, hG.j)((() => {
-         FG.e.reset()
-       })), (0, hG.l)(VG.jc.EditItemCraftingRecipes, (GG => {
-         const bG = (0, cG.j)(GG);
-         (0, cG.d)(bG) && YG.l.xh("craftingRecipesEdited", {
+         }(rM.id, rM.bO)
+       })), (0, JM.h)(pM.U, (MM => {
+         const rM = (0, sM.d)(pM.U, MM);
+         "number" === typeof rM && RM.d.cancelQTE(rM)
+       })), (0, JM.c)((() => {
+         RM.d.reset()
+       })), (0, JM.e)((() => {
+         RM.d.reset()
+       })), (0, JM.h)(zM.hc.EditItemCraftingRecipes, (MM => {
+         const rM = (0, sM.f)(MM);
+         (0, sM.c)(rM) && QM.i.Tz("craftingRecipesEdited", {
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1014-L1017` → after: `L1031-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1031-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1031-L1034) · [Before (L1014-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1017)

```diff
-       })), (0, hG.l)(vG.V, (GG => {
-         const bG = (0, cG.f)(vG.V, GG);
-         bG && YG.l.xh("craftingRecipesEdited", {
-           itemName: bG.aS,
+       })), (0, JM.h)(pM.R, (MM => {
+         const rM = (0, sM.d)(pM.R, MM);
+         rM && QM.i.Tz("craftingRecipesEdited", {
+           itemName: rM.nS,
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1022` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1039) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1022)

```diff
-     var AG = ZG(17);
+     var fM = iM(19);
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1041-L1043` → after: `L1058-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1058-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1058-L1060) · [Before (L1041-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1041-L1043)

```diff
-         freeCamera: (0, QG.e)((GG => () => {
-           const bG = GG.isSessionLive && 0 !== (qG(GG) & EG.Hd.FreeCamMoves),
-             ZG = GG.freeCameraAllowed() && null === AG.e.get("scriptedCameraFacing");
+         freeCamera: (0, HM.b)((MM => () => {
+           const rM = MM.isSessionLive && 0 !== (NM(MM) & UM.yd.FreeCamMoves),
+             iM = MM.freeCameraAllowed() && null === fM.d.get("scriptedCameraFacing");
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1045` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1062) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1045)

```diff
-         }), sG[0], (GG => (0, LG.r)(GG)))
+         }), YM[0], (MM => (0, jM.x)(MM)))
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1050` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1067) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1050)

```diff
-           null === (bG = (0, yG.f)()) || void 0 === bG || bG.setFreeCameraMovesFly(GG)
+           null === (rM = (0, aM.e)()) || void 0 === rM || rM.setFreeCameraMovesFly(MM)
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1055-L1056` → after: `L1072-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1072-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1072-L1073) · [Before (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1055-L1056)

```diff
-           const GG = (0, yG.f)();
-           return null !== GG && void 0 !== GG && GG.isSessionLive && GG.renderFrame.hasView && 0 !== (qG(GG) & EG.Hd.FreeCam) ? GG.renderFrame.cameraPosition : null
+           const MM = (0, aM.e)();
+           return null !== MM && void 0 !== MM && MM.isSessionLive && MM.renderFrame.hasView && 0 !== (NM(MM) & UM.yd.FreeCam) ? MM.renderFrame.cameraPosition : null
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1059` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1076) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1059)

```diff
-     var RG = ZG(39593);
+     var FM = iM(40270);
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1064` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1081) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1064)

```diff
-       const GG = (0, yG.f)();
+       const MM = (0, aM.e)();
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1066-L1073` → after: `L1083-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1083-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1083-L1090) · [Before (L1066-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1066-L1073)

```diff
-       const bG = 0 !== (EG.v.playerFlags(GG.api.apiView, 0) & EG.Hd.FreeCam);
-       bG !== TG && (TG = bG, (0, RG.b)(bG))
-     }
-     var DG = ZG(352),
-       NG = ZG(37396),
-       OG = ZG(1939);
-     var xG = ZG(41413),
-       BG = ZG(41020);
+       const rM = 0 !== (UM.v.playerFlags(MM.api.apiView, 0) & UM.yd.FreeCam);
+       rM !== BM && (BM = rM, (0, FM.e)(rM))
+     }
+     var KM = iM(332),
+       qM = iM(37975),
+       TM = iM(2078);
+     var VM = iM(42119),
+       cM = iM(41723);
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1084` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1101) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1084)

```diff
-         label: null !== (bG = (0, xG.b)(GG, "interactionPrompt")) && void 0 !== bG ? bG : null
+         label: null !== (rM = (0, VM.d)(MM, "interactionPrompt")) && void 0 !== rM ? rM : null
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1088-L1089` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1105-L1106) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1089)

```diff
-       [EG.mc.Open, {
-         label: UG.g.open
+       [UM.ic.Open, {
+         label: nM.f.open
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1091-L1092` → after: `L1108-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1108-L1109) · [Before (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1092)

```diff
-       [EG.mc.Close, {
-         label: UG.g.close
+       [UM.ic.Close, {
+         label: nM.f.close
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1094-L1095` → after: `L1111-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1111-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1111-L1112) · [Before (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1094-L1095)

```diff
-       [EG.mc.Milk, {
-         label: UG.g.milk
+       [UM.ic.Milk, {
+         label: nM.f.milk
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1097-L1098` → after: `L1114-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1114-L1115) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1097-L1098)

```diff
-       [EG.mc.Shear, {
-         label: UG.g.shear
+       [UM.ic.Shear, {
+         label: nM.f.shear
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1100-L1101` → after: `L1117-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1117-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1117-L1118) · [Before (L1100-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1100-L1101)

```diff
-       [EG.mc.Tame, {
-         label: UG.g.tame
+       [UM.ic.Tame, {
+         label: nM.f.tame
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1103-L1104` → after: `L1120-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1120-L1121) · [Before (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1103-L1104)

```diff
-       [EG.mc.Feed, {
-         label: UG.g.feed
+       [UM.ic.Feed, {
+         label: nM.f.feed
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1106-L1107` → after: `L1123-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1123-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1123-L1124) · [Before (L1106-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1106-L1107)

```diff
-       [EG.mc.Ride, {
-         label: UG.g.ride
+       [UM.ic.Ride, {
+         label: nM.f.ride
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1112` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1129) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1112)

```diff
-         this.target = Gb, this.Gk = EG.Yc, this.optionName = null, this.pickaxe = new UG.d
+         this.target = Mr, this.jP = UM.Pc, this.optionName = null, this.pickaxe = new nM.d
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1117-L1118` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1134-L1135) · [Before (L1117-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1117-L1118)

```diff
-         ZG !== this.Gk && (this.Gk = ZG, this.optionName = ZG === EG.Yc ? null : `${GG.tables.getMetaInfo(ZG).rootName}CrosshairText`);
-         const wG = null === this.optionName ? null : null !== (bG = GG.tables.getClientOption(this.optionName)) && void 0 !== bG ? bG : null;
+         iM !== this.jP && (this.jP = iM, this.optionName = iM === UM.Pc ? null : `${MM.tables.getMetaInfo(iM).rootName}CrosshairText`);
+         const OM = null === this.optionName ? null : null !== (rM = MM.tables.getClientOption(this.optionName)) && void 0 !== rM ? rM : null;
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1121` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1138) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1121)

```diff
-           if (0 === (EG.v.playerFlags(GG.api.apiView, 0) & EG.Hd.Breaking) || bG === EG.Yc || 0 === bG) return null;
+           if (0 === (UM.v.playerFlags(MM.api.apiView, 0) & UM.yd.Breaking) || rM === UM.Pc || 0 === rM) return null;
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1127-L1129` → after: `L1144-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1144-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1144-L1146) · [Before (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1129)

```diff
-             kG = null === (ZG = GG.items.Ik()) || void 0 === ZG ? void 0 : ZG.name,
-             UG = null !== (wG = LG.getItemStat(yG, "harvestLevel")) && void 0 !== wG ? wG : 0;
-           return (0, DG.Kc)({
+             PM = null === (iM = MM.items.sQ()) || void 0 === iM ? void 0 : iM.name,
+             nM = null !== (OM = jM.getItemStat(aM, "harvestLevel")) && void 0 !== OM ? OM : 0;
+           return (0, KM.Bc)({
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1135` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1152) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1135)

```diff
-           }) && null !== (SG = NG.n[UG]) && void 0 !== SG ? SG : null
+           }) && null !== (SM = qM.m[nM]) && void 0 !== SM ? SM : null
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1140` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1157) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1140)

```diff
-           return ZG === EG.mc.Entity ? Zb(GG.promptEntity) : ZG === EG.mc.TameWith ? {
+           return iM === UM.ic.Entity ? ir(MM.promptEntity) : iM === UM.ic.TameWith ? {
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1142` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1159) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1142)

```diff
-           } : null !== (bG = wb.get(ZG)) && void 0 !== bG ? bG : null
+           } : null !== (rM = Or.get(iM)) && void 0 !== rM ? rM : null
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1144` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1161) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1144)

```diff
-         return this.target = (0, OG.n)(this.target, {
+         return this.target = (0, TM.r)(this.target, {
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1155` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1172) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1155)

```diff
-         return null !== (GG = null === (bG = Lb) || void 0 === bG ? void 0 : bG.target) && void 0 !== GG ? GG : Gb
+         return null !== (MM = null === (rM = jr) || void 0 === rM ? void 0 : rM.target) && void 0 !== MM ? MM : Mr
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1160` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1177) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1160)

```diff
-         const ZG = (0, QG.l)((ZG => {
+         const iM = (0, HM.h)((iM => {
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1163` → after: `L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1180) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1163)

```diff
-           const SG = (0, LG.t)((() => {
+           const SM = (0, jM.y)((() => {
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1179-L1184` → after: `L1196-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1196-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1196-L1201) · [Before (L1179-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1184)

```diff
-         health: UG.r,
-         aura: UG.i,
-         hotbar: BG.c.states.hotbar,
-         heldItemAim: BG.c.states.heldItemAim,
-         crouching: (0, QG.e)((GG => function(GG) {
-           const bG = () => 0 !== (EG.v.playerFlags(GG.apiView, 0) & EG.Hd.Crouching);
+         health: nM.q,
+         aura: nM.h,
+         hotbar: cM.d.states.hotbar,
+         heldItemAim: cM.d.states.heldItemAim,
+         crouching: (0, HM.b)((MM => function(MM) {
+           const rM = () => 0 !== (UM.v.playerFlags(MM.apiView, 0) & UM.yd.Crouching);
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1189` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1206) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1189)

```diff
-               return (0, LG.r)((() => {
+               return (0, jM.x)((() => {
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1195-L1196` → after: `L1212-L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1212-L1213) · [Before (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1195-L1196)

```diff
-         }(GG.api).current), !1, (GG => (0, LG.r)(GG))),
-         flight: (0, QG.e)((GG => () => function(GG) {
+         }(MM.api).current), !1, (MM => (0, jM.x)(MM))),
+         flight: (0, HM.b)((MM => () => function(MM) {
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1198-L1200` → after: `L1215-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1215-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1215-L1217) · [Before (L1198-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1198-L1200)

```diff
-           return (0, UG.o)(0 !== (bG & EG.Hd.CanFly), 0 !== (bG & EG.Hd.Flying))
-         }(GG.api)), (0, UG.o)(!1, !1), (GG => (0, LG.r)(GG))),
-         gliderBoostFuel: (0, QG.e)((GG => () => EG.v.gliderBoostFuel(GG.api.apiView, 0)), 0, (GG => (0, LG.r)(GG))),
+           return (0, nM.n)(0 !== (rM & UM.yd.CanFly), 0 !== (rM & UM.yd.Flying))
+         }(MM.api)), (0, nM.n)(!1, !1), (MM => (0, jM.x)(MM))),
+         gliderBoostFuel: (0, HM.b)((MM => () => UM.v.gliderBoostFuel(MM.api.apiView, 0)), 0, (MM => (0, jM.x)(MM))),
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1204-L1207` → after: `L1221-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1221-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1221-L1224) · [Before (L1204-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1204-L1207)

```diff
-         hotbarSlotRequested: BG.c.events.hotbarSlotRequested,
-         hotbarScrolled: BG.c.events.hotbarScrolled,
-         numberKeyPressed: BG.c.events.numberKeyPressed,
-         shotDamageToShow: (0, UG.u)((GG => !0 === (0, xG.b)(GG, "showDamageAmounts")))
+         hotbarSlotRequested: cM.d.events.hotbarSlotRequested,
+         hotbarScrolled: cM.d.events.hotbarScrolled,
+         numberKeyPressed: cM.d.events.numberKeyPressed,
+         shotDamageToShow: (0, nM.u)((MM => !0 === (0, VM.d)(MM, "showDamageAmounts")))
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1210` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1227) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1210)

```diff
-         selectHotbarSlot: BG.c.commands.selectHotbarSlot,
+         selectHotbarSlot: cM.d.commands.selectHotbarSlot,
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1218` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1235) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1218)

```diff
-           const wG = (0, yG.f)(),
+           const OM = (0, aM.e)(),
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1220-L1221` → after: `L1237-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1237-L1238) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221)

```diff
-             LG = null === wG || void 0 === wG || null === (GG = wG.items.Ik()) || void 0 === GG || null === (bG = GG.attributes) || void 0 === bG || null === (ZG = bG.customAttributes) || void 0 === ZG ? void 0 : ZG.enchantments;
-           return kb = null !== wG && null !== LG && void 0 !== LG && LG.Momentum ? 0 !== (EG.v.playerFlags(wG.api.apiView, 0) & EG.Hd.Breaking) ? Math.max(0, EG.v.momentumFrac(wG.api.apiView, 0)) : Math.max(0, kb - (SG - Ub) / 1500) : 0, Ub = SG, kb
+             jM = null === OM || void 0 === OM || null === (MM = OM.items.sQ()) || void 0 === MM || null === (rM = MM.attributes) || void 0 === rM || null === (iM = rM.customAttributes) || void 0 === iM ? void 0 : iM.enchantments;
+           return Pr = null !== OM && null !== jM && void 0 !== jM && jM.Momentum ? 0 !== (UM.v.playerFlags(OM.api.apiView, 0) & UM.yd.Breaking) ? Math.max(0, UM.v.momentumFrac(OM.api.apiView, 0)) : Math.max(0, Pr - (SM - nr) / 1500) : 0, nr = SM, Pr
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1224` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1241) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1224)

```diff
-     var Qb = ZG(40963);
+     var Hr = iM(41674);
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1228` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1245) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1228)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.LobbyManage, GG)
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.LobbyManage, MM)
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1231-L1236` → after: `L1248-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1248-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1248-L1253) · [Before (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1231-L1236)

```diff
-     var hb = ZG(1198),
-       db = ZG(36836),
-       Jb = ZG(8839),
-       rb = ZG(1579),
-       zb = ZG(2380),
-       Eb = ZG(4827);
+     var Jr = iM(1242),
+       dr = iM(34822),
+       yr = iM(9392),
+       lr = iM(1717),
+       Er = iM(2619),
+       Ur = iM(5204);
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1244` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1261) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1244)

```diff
-       "inGame" !== AG.e.get("gameState") || (0, rb.u)() || YG.l.xh("ctrlCrouchWithoutFullscreen")
+       "inGame" !== fM.d.get("gameState") || (0, lr.v)() || QM.i.Tz("ctrlCrouchWithoutFullscreen")
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1250` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1267) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1250)

```diff
-             ib && (ib = !1, YG.l.xh("requestEmoteWheelHoldOpen"))
+             br && (br = !1, QM.i.Tz("requestEmoteWheelHoldOpen"))
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1254` → after: `L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1271) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1254)

```diff
-           YG.l.xh("toggleFullCoordinateOverlay")
+           QM.i.Tz("toggleFullCoordinateOverlay")
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1257` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1274) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1257)

```diff
-           (0, db.b)() || YG.l.xh("YKeyPressed")
+           (0, dr.b)() || QM.i.Tz("YKeyPressed")
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1260` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1277) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1260)

```diff
-           (0, db.b)() || YG.l.xh("XKeyPressed")
+           (0, dr.b)() || QM.i.Tz("XKeyPressed")
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1264-L1265` → after: `L1281-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1281-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1281-L1282) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1264-L1265)

```diff
-           YG.l.xh("mouseState", {
-             AV: hb.d.DownFirePrimary,
+           QM.i.Tz("mouseState", {
+             ba: Jr.c.DownFirePrimary,
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1270-L1271` → after: `L1287-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1287-L1288) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1270-L1271)

```diff
-           YG.l.xh("mouseState", {
-             AV: hb.d.DownFireSecondary,
+           QM.i.Tz("mouseState", {
+             ba: Jr.c.DownFireSecondary,
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1276-L1277` → after: `L1293-L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1293-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1293-L1294) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1276-L1277)

```diff
-           YG.l.xh("mouseState", {
-             AV: hb.d.TouchDownLong,
+           QM.i.Tz("mouseState", {
+             ba: Jr.c.TouchDownLong,
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1284` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1301) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1284)

```diff
-           Xb(!1), ib ? (ib = !1, (0, Jb.c)() || YG.l.xh("requestEmoteWheelHoldOpen")) : YG.l.xh("requestEmoteWheelHoldRelease")
+           Cr(!1), br ? (br = !1, (0, yr.e)() || QM.i.Tz("requestEmoteWheelHoldOpen")) : QM.i.Tz("requestEmoteWheelHoldRelease")
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1288-L1289` → after: `L1305-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1305-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1305-L1306) · [Before (L1288-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1288-L1289)

```diff
-           YG.l.xh("mouseState", {
-             AV: hb.d.UpFirePrimary,
+           QM.i.Tz("mouseState", {
+             ba: Jr.c.UpFirePrimary,
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1294-L1295` → after: `L1311-L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1311-L1312) · [Before (L1294-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1294-L1295)

```diff
-           YG.l.xh("mouseState", {
-             AV: hb.d.UpFireSecondary,
+           QM.i.Tz("mouseState", {
+             ba: Jr.c.UpFireSecondary,
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1300-L1301` → after: `L1317-L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1317-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1317-L1318) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1300-L1301)

```diff
-           YG.l.xh("mouseState", {
-             AV: hb.d.UpFirePrimary,
+           QM.i.Tz("mouseState", {
+             ba: Jr.c.UpFirePrimary,
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1309` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1326) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1309)

```diff
-       mb || (mb = !0, (0, Eb.j)((GG => {
+       gr || (gr = !0, (0, Ur.f)((MM => {
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1311` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1328) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1311)

```diff
-         const bG = (0, Eb.g)(GG) ? "primary-fire" : GG.action;
+         const rM = (0, Ur.e)(MM) ? "primary-fire" : MM.action;
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1314` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1331) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1314)

```diff
-           if (0 === (GG.flags & zb.b.Synthetic)) {
+           if (0 === (MM.flags & Er.d.Synthetic)) {
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1321-L1326` → after: `L1338-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1338-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1338-L1343) · [Before (L1321-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1321-L1326)

```diff
-     var Fb = ZG(333),
-       vb = ZG(80),
-       ab = ZG(29),
-       cb = ZG(41263),
-       lb = ZG(1287),
-       jb = ZG(2400);
+     var Rr = iM(313),
+       pr = iM(83),
+       Wr = iM(30),
+       sr = iM(41975),
+       Dr = iM(1373),
+       kr = iM(2633);
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1331` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1348) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1331)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.CodeCollab, (0, aG.p)(GG), (0, jb.e)(GG))
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.CodeCollab, (0, WM.l)(MM), (0, kr.d)(MM))
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1334-L1335` → after: `L1351-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1351-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1351-L1352) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1334-L1335)

```diff
-     var Ab = ZG(39519),
-       sb = ZG(8764);
+     var fr = iM(40140),
+       Yr = iM(9331);
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1341` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1358) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1341)

```diff
-       return "inGame" === AG.e.get("gameState") && !(0, db.b)()
+       return "inGame" === fM.d.get("gameState") && !(0, dr.b)()
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1345` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1362) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1345)

```diff
-           (0, rb.z)(GG, "inventory", (0, Qb.n)())
+           (0, lr.C)(MM, "inventory", (0, Hr.m)())
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1348` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1365) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1348)

```diff
-           qb && eb() && (0, rb.x)(GG, Fb.u.SHOP, !qb.shopIsEmpty(zG.c.get("shopInfo")))
+           Nr && vr() && (0, lr.B)(MM, Rr.m.SHOP, !Nr.shopIsEmpty(EM.d.get("shopInfo")))
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1351-L1353` → after: `L1368-L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1368-L1370) · [Before (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1351-L1353)

```diff
-           eb() && (0, rb.x)(GG, Fb.u.LOBBY_LEADERBOARD, (0, Ab.b)({
-             lobbyLeaderboardInfo: zG.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: zG.c.get("lobbyManage")
+           vr() && (0, lr.B)(MM, Rr.m.LOBBY_LEADERBOARD, (0, fr.d)({
+             lobbyLeaderboardInfo: EM.d.get("lobbyLeaderboardInfo"),
+             lobbyManage: EM.d.get("lobbyManage")
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1359` → after: `L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1376) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1359)

```diff
-           ZG ? (0, rb.C)(GG, !0, ZG) : (0, rb.z)(GG, "retentionFeatures", !(!zG.c.get("_tasks") && !zG.c.get("_availableLeaderboards")))
+           iM ? (0, lr.E)(MM, !0, iM) : (0, lr.C)(MM, "retentionFeatures", !(!EM.d.get("_tasks") && !EM.d.get("_availableLeaderboards")))
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1362` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1379) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1362)

```diff
-           (0, rb.z)(GG, "inviteLink", vb.featureFlags.canUseInviteLinks)
+           (0, lr.C)(MM, "inviteLink", pr.featureFlags.canUseInviteLinks)
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1366` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1383) · [Before (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1366)

```diff
-             const bG = (0, yG.f)(),
+             const rM = (0, aM.e)(),
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1368-L1370` → after: `L1385-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1385-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1385-L1387) · [Before (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1368-L1370)

```diff
-               wG = ZG ? ZG.HJ(ZG.localId) : null;
-             (0, rb.C)(GG, null !== wG && (0, jb.c)((0, lb.d)()), (() => {
-               (0, jb.i)(wG)
+               OM = iM ? iM.XE(iM.localId) : null;
+             (0, lr.E)(MM, null !== OM && (0, kr.b)((0, Dr.e)()), (() => {
+               (0, kr.e)(OM)
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1375` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1392) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1375)

```diff
-           YG.l.xh("showUi", !1)
+           QM.i.Tz("showUi", !1)
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1380` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1397) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1380)

```diff
-           YG.l.xh("showUi", !0)
+           QM.i.Tz("showUi", !0)
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1385` → after: `L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1402) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1385)

```diff
-       nb || (nb = !0, ZG.e(159).then((() => ZG(61136))).then((GG => {
+       Ar || (Ar = !0, iM.e(173).then((() => iM(63222))).then((MM => {
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1389-L1391` → after: `L1406-L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1406-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1406-L1408) · [Before (L1389-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1391)

```diff
-       })), (0, cb.A)((GG => {
-         GG || !(0, cb.k)() || (0, vb.isMobile)() || !ab.h.getItem("disableFullscreen") || (0, rb.t)() || AG.e.set({
-           openEverythingMenuName: Fb.u.SETTINGS
+       })), (0, sr.z)((MM => {
+         MM || !(0, sr.h)() || (0, pr.isMobile)() || !Wr.g.getItem("disableFullscreen") || (0, lr.r)() || fM.d.set({
+           openEverythingMenuName: Rr.m.SETTINGS
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1393` → after: `L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1410) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1393)

```diff
-       })), (0, Eb.j)((GG => {
+       })), (0, Ur.f)((MM => {
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1405` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1422) · [Before (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1405)

```diff
-               event: (0, sb.c)("inputAction")
+               event: (0, Yr.d)("inputAction")
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1415-L1417` → after: `L1432-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1432-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1432-L1434) · [Before (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1415-L1417)

```diff
-     var tb = ZG(39423),
-       Db = ZG(39412),
-       Nb = ZG(39404);
+     var Ir = iM(40059),
+       Kr = iM(40048),
+       qr = iM(40043);
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1421` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1438) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1421)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.CompleteTask, (0, aG.t)(GG))
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.CompleteTask, (0, WM.n)(MM))
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1429-L1431` → after: `L1446-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1446-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1446-L1448) · [Before (L1429-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1429-L1431)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.GeneralCookieSet, (0, aG.x)({
-           yk: ZG,
-           kk: wG
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.GeneralCookieSet, (0, WM.s)({
+           Ja: iM,
+           da: OM
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1438` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1455) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1438)

```diff
-           rV: wG
+           IQ: OM
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1440-L1443` → after: `L1457-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1457-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1457-L1460) · [Before (L1440-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1440-L1443)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.UiRequestResp, (0, aG.$)({
-           fU: ZG,
-           QU: wG,
-           KU: 5
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.UiRequestResp, (0, WM.S)({
+           fa: iM,
+           Ya: OM,
+           Na: 5
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1450` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1467) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1450)

```diff
-           rV: wG
+           IQ: OM
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1452` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1469) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1452)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.UiRequestResponded, (0, aG.Z)({
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.UiRequestResponded, (0, WM.P)({
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1454` → after: `L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1471) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1454)

```diff
-           rV: wG
+           IQ: OM
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1464` → after: `L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1481) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1464)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.LeaderboardRequest, {
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.LeaderboardRequest, {
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1472` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1489) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1472)

```diff
-     const Bb = rG.d.Hd / 2,
+     const cr = lM.f.Sy / 2,
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1483` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1500) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1483)

```diff
-         const GG = (0, yG.f)();
+         const MM = (0, aM.e)();
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1499` → after: `L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1516) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1499)

```diff
-           const fG = ZG.Gk(LG, UG, pG);
+           const mM = iM.jP(jM, nM, LM);
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1505-L1506` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1522-L1523) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1505-L1506)

```diff
-         const GG = (0, yG.f)();
-         return null !== GG && 0 !== (EG.v.playerFlags(GG.api.apiView, 0) & EG.Hd.DropAhead)
+         const MM = (0, aM.e)();
+         return null !== MM && 0 !== (UM.v.playerFlags(MM.api.apiView, 0) & UM.yd.DropAhead)
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1509-L1512` → after: `L1526-L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1526-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1526-L1529) · [Before (L1509-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1512)

```diff
-     var SZ = ZG(37309),
-       LZ = ZG(39487),
-       yZ = ZG(1311),
-       kZ = ZG(41031);
+     var Si = iM(37876),
+       ji = iM(40118),
+       ai = iM(1429),
+       Pi = iM(41734);
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1534` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1551) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1534)

```diff
-       const yG = () => (ZG = (0, OG.n)(ZG, GG()), ZG);
+       const aM = () => (iM = (0, TM.r)(iM, MM()), iM);
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1542-L1544` → after: `L1559-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1559-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1559-L1561) · [Before (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1542-L1544)

```diff
-           let ZG = (0, QG.i)();
-           const kG = (0, LG.t)((() => {
-             const bG = (0, QG.i)();
+           let iM = (0, HM.f)();
+           const PM = (0, jM.y)((() => {
+             const rM = (0, HM.f)();
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1555` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1572) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1555)

```diff
-           const GG = KG.f.ids(),
+           const MM = hM.e.ids(),
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1560-L1562` → after: `L1577-L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1577-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1577-L1579) · [Before (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1560-L1562)

```diff
-               name: null !== (ZG = KG.f.getName(LG)) && void 0 !== ZG ? ZG : null,
-               ranks: null !== (wG = KG.f.getSetting(LG, "ranks")) && void 0 !== wG ? wG : pZ,
-               cosmetics: null !== (SG = (0, KG.g)(LG)) && void 0 !== SG ? SG : null
+               name: null !== (iM = hM.e.getName(jM)) && void 0 !== iM ? iM : null,
+               ranks: null !== (OM = hM.e.getSetting(jM, "ranks")) && void 0 !== OM ? OM : Li,
+               cosmetics: null !== (SM = (0, hM.g)(jM)) && void 0 !== SM ? SM : null
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1568` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1585) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1568)

```diff
-             localId: (0, QG.i)()
+             localId: (0, HM.f)()
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1576` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1593) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1576)

```diff
-           for (const SG of KG.f.ids()) {
+           for (const SM of hM.e.ids()) {
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1579-L1581` → after: `L1596-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1596-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1596-L1598) · [Before (L1579-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1579-L1581)

```diff
-               colour: null !== (bG = KG.f.getSetting(SG, "colorInLobbyLeaderboard")) && void 0 !== bG ? bG : null,
-               values: null !== (ZG = KG.f.getSetting(SG, "lobbyLeaderboardValues")) && void 0 !== ZG ? ZG : null,
-               tags: null !== (wG = KG.f.getSetting(SG, "lobbyLeaderboardTags")) && void 0 !== wG ? wG : null
+               colour: null !== (rM = hM.e.getSetting(SM, "colorInLobbyLeaderboard")) && void 0 !== rM ? rM : null,
+               values: null !== (iM = hM.e.getSetting(SM, "lobbyLeaderboardValues")) && void 0 !== iM ? iM : null,
+               tags: null !== (OM = hM.e.getSetting(SM, "lobbyLeaderboardTags")) && void 0 !== OM ? OM : null
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1601` → after: `L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1618) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1601)

```diff
-             const ZG = (0, QG.i)();
+             const iM = (0, HM.f)();
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1604-L1606` → after: `L1621-L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1621-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1621-L1623) · [Before (L1604-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1604-L1606)

```diff
-                 IL: bG,
-                 FL: wG,
-                 vL: SG
+                 Xi: rM,
+                 Ii: OM,
+                 Ki: SM
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1610-L1611` → after: `L1627-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1627-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1627-L1628) · [Before (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1610-L1611)

```diff
-                 FL: wG,
-                 vL: SG
+                 Ii: OM,
+                 Ki: SM
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1617-L1620` → after: `L1634-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1634-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1634-L1637) · [Before (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1617-L1620)

```diff
-     var hZ = ZG(2897),
-       dZ = ZG(1702),
-       JZ = ZG(647),
-       rZ = ZG(41319);
+     var di = iM(3241),
+       yi = iM(1830),
+       li = iM(673),
+       Ei = iM(42031);
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1626` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1643) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1626)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.ShopMenuChanged, (0, aG.T)(GG))
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.ShopMenuChanged, (0, WM.N)(MM))
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1635` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1652) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1635)

```diff
-         null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.ItemBought, {
+         null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.ItemBought, {
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1638` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1655) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1638)

```diff
-           shopVersion: zG.c.get("_shopVersion"),
+           shopVersion: EM.d.get("_shopVersion"),
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1644-L1645` → after: `L1661-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1661-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1661-L1662) · [Before (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1644-L1645)

```diff
-     var uZ = ZG(4842);
-     const iZ = zb.t.LookFrozen | zb.t.ClicksSuppressed;
+     var bi = iM(5214);
+     const wi = Er.C.LookFrozen | Er.C.ClicksSuppressed;
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1649-L1652` → after: `L1666-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1666-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1666-L1669) · [Before (L1649-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1649-L1652)

```diff
-       null !== (ZG = (0, yG.f)()) && void 0 !== ZG && ZG.send(GG, bG) || console.warn(`[bloxd-wasm-client] message ${GG} not sent: no live game or the core's command ring is full`)
-     }(0, hG.l)(vG.mb, (GG => {
-       const bG = (0, cG.f)(vG.mb, GG);
-       void 0 !== bG && YG.l.xh("setDiscordReportKey", bG)
+       null !== (iM = (0, aM.e)()) && void 0 !== iM && iM.send(MM, rM) || console.warn(`[bloxd-wasm-client] message ${MM} not sent: no live game or the core's command ring is full`)
+     }(0, JM.h)(pM.gb, (MM => {
+       const rM = (0, sM.d)(pM.gb, MM);
+       void 0 !== rM && QM.i.Tz("setDiscordReportKey", rM)
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1656-L1657` → after: `L1673-L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1673-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1673-L1674) · [Before (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1656-L1657)

```diff
-         CZ(aG.b.IgnoreUser, (0, aG.y)({
-           hU: GG
+         ti(WM.d.IgnoreUser, (0, WM.w)({
+           KQ: MM
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1664` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1681) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1664)

```diff
-           Uk: wG,
+           lQ: OM,
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1667-L1671` → after: `L1684-L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1684-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1684-L1688) · [Before (L1667-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1667-L1671)

```diff
-         CZ(aG.b.UserReport, (0, aG.jb)({
-           hV: bG,
-           dV: ZG,
-           Uk: wG,
-           Yk: SG
+         ti(WM.d.UserReport, (0, WM.ab)({
+           dQ: rM,
+           yQ: iM,
+           lQ: OM,
+           EQ: SM
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1677` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1694) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1677)

```diff
-           Uk: ZG,
+           lQ: iM,
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1680-L1684` → after: `L1697-L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1697-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1697-L1701) · [Before (L1680-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1684)

```diff
-         CZ(aG.b.UserReport, (0, aG.jb)({
-           hV: "",
-           dV: bG,
-           Uk: ZG,
-           Yk: wG
+         ti(WM.d.UserReport, (0, WM.ab)({
+           dQ: "",
+           yQ: rM,
+           lQ: iM,
+           EQ: OM
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1688` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1705) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1688)

```diff
-         CZ(aG.b.ReqDiscordReportKey, (0, aG.L)(GG))
+         ti(WM.d.ReqDiscordReportKey, (0, WM.H)(MM))
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1693` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1710) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1693)

```diff
-           Uk: ZG,
+           lQ: iM,
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1696-L1701` → after: `L1713-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1713-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1713-L1718) · [Before (L1696-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1696-L1701)

```diff
-         "customGame" === bG ? CZ(aG.b.CustomGameReport, (0, aG.v)({
-           Uk: ZG,
-           Yk: wG
-         })) : CZ(aG.b.LobbyReport, (0, aG.A)({
-           Uk: ZG,
-           Yk: wG
+         "customGame" === rM ? ti(WM.d.CustomGameReport, (0, WM.p)({
+           lQ: iM,
+           EQ: OM
+         })) : ti(WM.d.LobbyReport, (0, WM.A)({
+           lQ: iM,
+           EQ: OM
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1705` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1722) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1705)

```diff
-         CZ(aG.b.UpdateMyCosmetic, (0, aG.gb)(GG))
+         ti(WM.d.UpdateMyCosmetic, (0, WM._)(MM))
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1708` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1725) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1708)

```diff
-         !GG || ob ? (0, uZ.j)(iZ, GG ? iZ : 0) : YG.l.xh("requestEmoteWheelHoldRelease")
+         !MM || Gr ? (0, bi.k)(wi, MM ? wi : 0) : QM.i.Tz("requestEmoteWheelHoldRelease")
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1711-L1713` → after: `L1728-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1728-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1728-L1730) · [Before (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1711-L1713)

```diff
-     var mZ = ZG(41421),
-       IZ = ZG(9249),
-       FZ = ZG(40001);
+     var ui = iM(42126),
+       Ri = iM(9816),
+       Wi = iM(40745);
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1723` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1740) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1723)

```diff
-           const wG = (0, yG.f)();
+           const OM = (0, aM.e)();
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1731` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1748) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1731)

```diff
-           return (0, FZ.f)(((GG, bG, ZG) => (UG = LG.getBlockId(GG, bG, ZG), 0 !== UG)), SG.cameraPosition, (0, FZ.g)((GG => EG.v.viewProj(kG.apiView, 0, GG)), bG, ZG, vZ), FZ.c, aZ, cZ) ? {
+           return (0, Wi.f)(((MM, rM, iM) => (nM = jM.getBlockId(MM, rM, iM), 0 !== nM)), SM.cameraPosition, (0, Wi.g)((MM => UM.v.viewProj(PM.apiView, 0, MM)), rM, iM, si), Wi.b, Di, ki) ? {
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1734` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1751) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1734)

```diff
-             name: (0, IZ.i)(UG)
+             name: (0, Ri.g)(nM)
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1741` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1758) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1741)

```diff
-           null === (bG = (0, yG.f)()) || void 0 === bG || bG.setBlockHighlight(GG)
+           null === (rM = (0, aM.e)()) || void 0 === rM || rM.setBlockHighlight(MM)
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1744-L1751` → after: `L1761-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1761-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1761-L1768) · [Before (L1744-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1744-L1751)

```diff
-     var PZ = ZG(1910),
-       MZ = ZG(41305),
-       AZ = ZG(41423),
-       sZ = ZG(4508),
-       qZ = ZG(4485),
-       nZ = ZG(41427),
-       gZ = ZG(3267),
-       eZ = ZG(3271);
+     var fi = iM(2050),
+       Yi = iM(42017),
+       Ni = iM(42135),
+       Ai = iM(4874),
+       xi = iM(4845),
+       vi = iM(42144),
+       Fi = iM(3693),
+       Bi = iM(3698);
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1767` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1784) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1767)

```diff
-       const bG = null === RZ ? void 0 : (0, gZ.c)(GG),
+       const rM = null === Xi ? void 0 : (0, Fi.d)(MM),
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1771-L1775` → after: `L1788-L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1788-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1788-L1792) · [Before (L1771-L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1775)

```diff
-     var DZ = ZG(3265),
-       NZ = ZG(4470),
-       OZ = ZG(4505),
-       xZ = ZG(41344),
-       BZ = ZG(41432);
+     var Ti = iM(3690),
+       Vi = iM(4835),
+       ci = iM(4868),
+       MO = iM(42053),
+       rO = iM(42151);
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1785-L1787` → after: `L1802-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1802-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1802-L1804) · [Before (L1785-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1785-L1787)

```diff
-       return yw || (yw = !0, (0, OZ.l)().then((GG => {
-         GG && (0, PZ.d)()
-       }))), ww ??= Promise.all([(0, DZ.e)(), (TZ ??= ZG.e(1).then((() => ZG(61154))).then((GG => {
+       return nO || (nO = !0, (0, ci.j)().then((MM => {
+         MM && (0, fi.c)()
+       }))), jO ??= Promise.all([(0, Ti.h)(), (Ii ??= iM.e(1).then((() => iM(63248))).then((MM => {
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1794-L1795` → after: `L1811-L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1811-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1811-L1812) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1794-L1795)

```diff
-           codes: (0, eZ.t)(bG, wG + 1),
-           pool: ZG.split(eZ.o).map(HZ)
+           codes: (0, Bi.y)(rM, OM + 1),
+           pool: iM.split(Bi.s).map(Ki)
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1799` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1816) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1799)

```diff
-       })), TZ), (0, BZ.g)(), ZG.e(201).then((() => ZG(34492)))]).then((GG => {
+       })), Ii), (0, rO.d)(), iM.e(224).then((() => iM(35037)))]).then((MM => {
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1801` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1818) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1801)

```diff
-         bG.followBundledTextures(), bw = bG, Zw = ZG, (0, PZ.d)()
+         rM.followBundledTextures(), OO = rM, SO = iM, (0, fi.c)()
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1809` → after: `L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1826) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1809)

```diff
-       return null !== (bG = null === (ZG = (0, xZ.k)()) || void 0 === ZG ? void 0 : ZG.textureUrl(GG)) && void 0 !== bG ? bG : bw.itemSpriteUrl(GG)
+       return null !== (rM = null === (iM = (0, MO.f)()) || void 0 === iM ? void 0 : iM.textureUrl(MM)) && void 0 !== rM ? rM : OO.itemSpriteUrl(MM)
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1814` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1831) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1814)

```diff
-       return null !== (bG = null === (ZG = (0, xZ.k)()) || void 0 === ZG ? void 0 : ZG.textureUrl(GG)) && void 0 !== bG ? bG : bw.blockTextureUrl(GG)
+       return null !== (rM = null === (iM = (0, MO.f)()) || void 0 === iM ? void 0 : iM.textureUrl(MM)) && void 0 !== rM ? rM : OO.blockTextureUrl(MM)
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1819` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1836) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1819)

```diff
-       return null !== (bG = (0, DZ.b)(GG)) && void 0 !== bG ? bG : GG
+       return null !== (rM = (0, Ti.e)(MM)) && void 0 !== rM ? rM : MM
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1824` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1841) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1824)

```diff
-       return null !== (ZG = null !== (wG = null !== (SG = Yw(GG)) && void 0 !== SG ? SG : null === bG || void 0 === bG ? void 0 : bG.rotated[GG]) && void 0 !== wG ? wG : null === bG || void 0 === bG ? void 0 : bG.animated[GG]) && void 0 !== ZG ? ZG : bw.notFoundUrl()
+       return null !== (iM = null !== (OM = null !== (SM = LO(MM)) && void 0 !== SM ? SM : null === rM || void 0 === rM ? void 0 : rM.rotated[MM]) && void 0 !== OM ? OM : null === rM || void 0 === rM ? void 0 : rM.animated[MM]) && void 0 !== iM ? iM : OO.notFoundUrl()
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1828` → after: `L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1845) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1828)

```diff
-       return void 0 !== (0, gZ.c)(GG) ? GG : /^[1-9][0-9]*$/.test(GG) ? (0, gZ.f)(Number(GG)) : void 0
+       return void 0 !== (0, Fi.d)(MM) ? MM : /^[1-9][0-9]*$/.test(MM) ? (0, Fi.g)(Number(MM)) : void 0
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1835-L1836` → after: `L1852-L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1852-L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1852-L1853) · [Before (L1835-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1835-L1836)

```diff
-         const bG = (0, DZ.b)(GG.slice(5));
-         return null !== (ZG = void 0 === bG ? null : Uw(bG)) && void 0 !== ZG ? ZG : bw.notFoundUrl()
+         const rM = (0, Ti.e)(MM.slice(5));
+         return null !== (iM = void 0 === rM ? null : zO(rM)) && void 0 !== iM ? iM : OO.notFoundUrl()
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1838` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1855) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1838)

```diff
-       return null !== (bG = bw.particleUrl(GG)) && void 0 !== bG ? bG : bw.notFoundUrl()
+       return null !== (rM = OO.particleUrl(MM)) && void 0 !== rM ? rM : OO.notFoundUrl()
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1842` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1859) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1842)

```diff
-       return "StairsBlock" === GG ? GG : bG ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === MM ? MM : rM ? "SlabBlock" : "CubeBlock"
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1853-L1854` → after: `L1870-L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1870-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1870-L1871) · [Before (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1853-L1854)

```diff
-           const yG = null !== (bG = fw(wG)) && void 0 !== bG ? bG : wG,
-             kG = (0, OZ.d)(yG, SG, LG);
+           const aM = null !== (rM = hO(OM)) && void 0 !== rM ? rM : OM,
+             PM = (0, ci.h)(aM, SM, jM);
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1857` → after: `L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1874) · [Before (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1857)

```diff
-             YG = (0, gZ.c)(yG),
+             QM = (0, Fi.d)(aM),
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1861` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1878) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1861)

```diff
-             fG = pG ? await (Sw ??= ZG.e(207).then((() => ZG(34575))).then((GG => (Lw && (Lw = !1, (0, PZ.d)()), {
+             mM = LM ? await (aO ??= iM.e(231).then((() => iM(35131))).then((MM => (PO && (PO = !1, (0, fi.c)()), {
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1872-L1874` → after: `L1889-L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1889-L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1889-L1891) · [Before (L1872-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1872-L1874)

```diff
-             KG = (0, xZ.g)(),
-             hG = 0 === KG ? yG : `${yG}#${KG}`;
-           return (await (0, NZ.d)()).drawBlockIconUrl(hG, SG, LG, (() => QG))
+             hM = (0, MO.e)(),
+             JM = 0 === hM ? aM : `${aM}#${hM}`;
+           return (await (0, Vi.b)()).drawBlockIconUrl(JM, SM, jM, (() => HM))
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1883` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1900) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1883)

```diff
-             url: null !== (ZG = null !== (SG = null === (LG = (0, xZ.k)()) || void 0 === LG ? void 0 : LG.textureUrl(GG)) && void 0 !== SG ? SG : bw.ingameIconUrl(GG)) && void 0 !== ZG ? ZG : bw.notFoundUrl()
+             url: null !== (iM = null !== (SM = null === (jM = (0, MO.f)()) || void 0 === jM ? void 0 : jM.textureUrl(MM)) && void 0 !== SM ? SM : OO.ingameIconUrl(MM)) && void 0 !== iM ? iM : OO.notFoundUrl()
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1889-L1891` → after: `L1906-L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1906-L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1906-L1908) · [Before (L1889-L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1889-L1891)

```diff
-           if (0 === (0, gZ.j)()) return (0, nZ.e)(), wG.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(GG);
-           const yG = null !== (bG = fw(GG)) && void 0 !== bG ? bG : GG,
-             kG = (0, gZ.c)(yG),
+           if (0 === (0, Fi.h)()) return (0, vi.e)(), OM.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(MM);
+           const aM = null !== (rM = hO(MM)) && void 0 !== rM ? rM : MM,
+             PM = (0, Fi.d)(aM),
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1898` → after: `L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1915) · [Before (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1898)

```diff
-             return null !== (bG = Uw(Vw(GG))) && void 0 !== bG ? bG : bw.notFoundUrl()
+             return null !== (rM = zO(mO(MM))) && void 0 !== rM ? rM : OO.notFoundUrl()
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1900-L1902` → after: `L1917-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1917-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1917-L1919) · [Before (L1900-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1900-L1902)

```diff
-           if ((0, OZ.h)(yG) && ! function(GG) {
-               const bG = (0, xZ.k)();
-               return null !== bG && (null !== bG.textureUrl(Vw(GG)) || null !== bG.modelUrl(GG))
+           if ((0, ci.i)(aM) && ! function(MM) {
+               const rM = (0, MO.f)();
+               return null !== rM && (null !== rM.textureUrl(mO(MM)) || (0, ci.e)(MM).some((MM => null !== rM.modelUrl(MM))))
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1911` → after: `L1928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1928) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1911)

```diff
-           if (void 0 !== kG && "GrayscaleArmour" === Zw.itemTypeOf(kG) || Object.hasOwn(sZ.c, yG)) {
+           if (void 0 !== PM && "GrayscaleArmour" === SO.itemTypeOf(PM) || Object.hasOwn(Ai.d, aM)) {
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1930) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1913)

```diff
-             const bG = null !== (VG = (0, sZ.d)(GG)) && void 0 !== VG ? VG : (0, sZ.d)(yG);
+             const rM = null !== (zM = (0, Ai.f)(MM)) && void 0 !== zM ? zM : (0, Ai.f)(aM);
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1932-L1933` → after: `L1949-L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1949-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1949-L1950) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933)

```diff
-     var Jw = ZG(589),
-       rw = ZG(40005);
+     var EO = iM(613),
+       UO = iM(40753);
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1945-L1946` → after: `L1962-L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1962-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1962-L1963) · [Before (L1945-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1945-L1946)

```diff
-           const GG = bG.HJ(bG.localId);
-           return null !== GG && void 0 !== GG && GG.every(Number.isFinite) ? GG : null
+           const MM = rM.XE(rM.localId);
+           return null !== MM && void 0 !== MM && MM.every(Number.isFinite) ? MM : null
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1948` → after: `L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1965) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1948)

```diff
-         chunkBlocks: GG => ZG.isLoaded(GG[0], GG[1], GG[2]) ? (GG, bG, wG) => ZG.Gk(GG, bG, wG) : null,
+         chunkBlocks: MM => iM.isLoaded(MM[0], MM[1], MM[2]) ? (MM, rM, OM) => iM.jP(MM, rM, OM) : null,
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1964-L1966` → after: `L1981-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1981-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1981-L1983) · [Before (L1964-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1964-L1966)

```diff
-             if (null === LG || bG.isLocal(yG) || kG >>> EG.b !== EG.r.Lifeform) continue;
-             const UG = bG.HJ(yG),
-               YG = Jw.m[kG & EG.c];
+             if (null === jM || rM.isLocal(aM) || PM >>> UM.e !== UM.s.Lifeform) continue;
+             const nM = rM.XE(aM),
+               QM = EO.j[PM & UM.f];
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1969` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1986) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1969)

```diff
-               name: null !== (wG = GG.clientApi.getEntityName(LG)) && void 0 !== wG ? wG : null,
+               name: null !== (OM = MM.clientApi.getEntityName(jM)) && void 0 !== OM ? OM : null,
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1977` → after: `L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L1994) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1977)

```diff
-           for (let ZG = 0; ZG < bG.idStr.length; ZG++) null !== bG.idStr[ZG] && bG.kinds[ZG] >>> EG.b === EG.r.Item && GG++;
+           for (let iM = 0; iM < rM.idStr.length; iM++) null !== rM.idStr[iM] && rM.kinds[iM] >>> UM.e === UM.s.Item && MM++;
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1983-L1984` → after: `L2000-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2000-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2000-L2001) · [Before (L1983-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1983-L1984)

```diff
-         worldCodeAiChunk: GG => Promise.resolve((0, rw.d)(zw((0, yG.f)()), GG)),
-         worldCodeAiGameState: () => Promise.resolve((0, rw.g)(zw((0, yG.f)())))
+         worldCodeAiChunk: MM => Promise.resolve((0, UO.d)(GO((0, aM.e)()), MM)),
+         worldCodeAiGameState: () => Promise.resolve((0, UO.h)(GO((0, aM.e)())))
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1993` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2010) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L1993)

```diff
-             return null !== (bG = null === (ZG = GG.runtime()) || void 0 === ZG ? void 0 : ZG.currentViewer) && void 0 !== bG ? bG : null
+             return null !== (rM = null === (iM = MM.runtime()) || void 0 === iM ? void 0 : iM.currentViewer) && void 0 !== rM ? rM : null
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2015` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2032) · [Before (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2015)

```diff
-             bG && ZG && bG.seek(Math.max(0, Math.min(ZG.totalTicks - 1, ZG.Tp + GG * pG.Hd)))
+             rM && iM && rM.seek(Math.max(0, Math.min(iM.totalTicks - 1, iM.bL + MM * LM.ud)))
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2021-L2022` → after: `L2038-L2039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2038-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2038-L2039) · [Before (L2021-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2021-L2022)

```diff
-                 ZG = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null;
-               return null === bG || null === ZG || ZG.state === pG.sd.None ? (kG = null, null) : (kG = (0, OG.n)(kG, {
+                 iM = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null;
+               return null === rM || null === iM || iM.state === LM.hd.None ? (PM = null, null) : (PM = (0, TM.r)(PM, {
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2024` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2041) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2024)

```diff
-                 Tp: ZG.Tp,
+                 bL: iM.bL,
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2026-L2027` → after: `L2043-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2043-L2044) · [Before (L2026-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2026-L2027)

```diff
-                 Fv: pG.Hd,
-                 playing: ZG.state === pG.sd.Playing,
+                 zk: LM.ud,
+                 playing: iM.state === LM.hd.Playing,
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2036-L2037` → after: `L2053-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2053-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2053-L2054) · [Before (L2036-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2036-L2037)

```diff
-                 ZG = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null;
-               return null === bG || null === ZG || ZG.state === pG.sd.None ? (UG = null, null) : (UG = (0, OG.n)(UG, {
+                 iM = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null;
+               return null === rM || null === iM || iM.state === LM.hd.None ? (nM = null, null) : (nM = (0, TM.r)(nM, {
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2047` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2064) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2047)

```diff
-               return null !== (bG = null === (ZG = GG.runtime()) || void 0 === ZG ? void 0 : ZG.recorder.current) && void 0 !== bG ? bG : kZ.d.states.replayRecorder.current()
+               return null !== (rM = null === (iM = MM.runtime()) || void 0 === iM ? void 0 : iM.recorder.current) && void 0 !== rM ? rM : Pi.c.states.replayRecorder.current()
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2050-L2052` → after: `L2067-L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2067-L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2067-L2069) · [Before (L2050-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2050-L2052)

```diff
-               current: LZ.c,
-               watch: GG => (0, YG.p)("replayViewer|videoExportChanged", (() => {
-                 GG((0, LZ.c)())
+               current: ji.d,
+               watch: MM => (0, QM.j)("replayViewer|videoExportChanged", (() => {
+                 MM((0, ji.d)())
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2065` → after: `L2082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2082) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2065)

```diff
-             !0 === (null === (wG = yG()) || void 0 === wG ? void 0 : wG.isOpen) && Promise.all([ZG.e(98), ZG.e(67)]).then((() => ZG(61141))).then((ZG => {
+             !0 === (null === (OM = aM()) || void 0 === OM ? void 0 : OM.isOpen) && Promise.all([iM.e(111), iM.e(78)]).then((() => iM(63231))).then((iM => {
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2073` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2090) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2073)

```diff
-                   return null !== (bG = null === (ZG = GG.canvas) || void 0 === ZG ? void 0 : ZG.call(GG)) && void 0 !== bG ? bG : null
+                   return null !== (rM = null === (iM = MM.canvas) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : null
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2089` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2106) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2089)

```diff
-               if ((0, LZ.c)()) return;
+               if ((0, ji.d)()) return;
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2100` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2117) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2100)

```diff
-                   null !== bG && void 0 !== bG && bG.view && bG.setSpeed((0, SZ.j)(bG.view.speed, "replaySpeedUp" === GG ? "up" : "down"));
+                   null !== rM && void 0 !== rM && rM.view && rM.setSpeed((0, Si.h)(rM.view.speed, "replaySpeedUp" === MM ? "up" : "down"));
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2108` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2125) · [Before (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2108)

```diff
-               (0, LZ.c)() || (GG ? null === (bG = yG()) || void 0 === bG || bG.play() : null === (ZG = yG()) || void 0 === ZG || ZG.pause())
+               (0, ji.d)() || (MM ? null === (rM = aM()) || void 0 === rM || rM.play() : null === (iM = aM()) || void 0 === iM || iM.pause())
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2113` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2130) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2113)

```diff
-                 Tp: ZG,
+                 bL: iM,
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2153` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2170) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2153)

```diff
-               return !(0, LZ.c)() && (null !== (bG = null === (ZG = yG()) || void 0 === ZG ? void 0 : ZG.crop(wG, SG)) && void 0 !== bG && bG)
+               return !(0, ji.d)() && (null !== (rM = null === (iM = aM()) || void 0 === iM ? void 0 : iM.crop(OM, SM)) && void 0 !== rM && rM)
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2158` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2175) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2158)

```diff
-                 ZG.e(117).then((() => ZG(39633))).then((bG => {
+                 iM.e(129).then((() => iM(40300))).then((rM => {
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2195` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2212) · [Before (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2195)

```diff
-                 cL: SG,
+                 oi: SM,
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2197` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2214) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2197)

```diff
-                 lL: yG
+                 Yi: aM
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2217` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2234) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2217)

```diff
-                 Ik: SG
+                 sQ: SM
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2225` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2242) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2225)

```diff
-               wG = null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.view) && void 0 !== bG ? bG : null;
+               OM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.view) && void 0 !== rM ? rM : null;
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2228` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2245) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2228)

```diff
-             })(GG) : YZ.has(GG) ? rG.replayAction(GG) : "replayPlayPause" === GG ? ZG && wG && wG.state !== pG.sd.None && rG.setReplayPlaying(wG.state !== pG.sd.Playing) : "replayChangeCameraMode" === GG ? null === ZG || void 0 === ZG || ZG.cycleCameraMode() : "replayExit" === GG … [truncated]
+             })(MM) : Qi.has(MM) ? lM.replayAction(MM) : "replayPlayPause" === MM ? iM && OM && OM.state !== LM.hd.None && lM.setReplayPlaying(OM.state !== LM.hd.Playing) : "replayChangeCameraMode" === MM ? null === iM || void 0 === iM || iM.cycleCameraMode() : "replayExit" === MM … [truncated]
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2238` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2255) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2238)

```diff
-               return !0 !== (null === (bG = yG()) || void 0 === bG ? void 0 : bG.isOpen) ? null : null !== (ZG = null === (wG = GG.cameraView) || void 0 === wG ? void 0 : wG.call(GG)) && void 0 !== ZG ? ZG : null
+               return !0 !== (null === (rM = aM()) || void 0 === rM ? void 0 : rM.isOpen) ? null : null !== (iM = null === (OM = MM.cameraView) || void 0 === OM ? void 0 : OM.call(MM)) && void 0 !== iM ? iM : null
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2249` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2266) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2249)

```diff
-               ZG !== EG && (EG = ZG, YG.l.xh("connectedGameChanged")), bG.fire()
+               iM !== UM && (UM = iM, QM.i.Tz("connectedGameChanged")), rM.fire()
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2259` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2276) · [Before (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2259)

```diff
-               }(0, LZ.c)() || ("replayViewerOpen" !== GG ? GG.startsWith("replay") && ((0, db.b)() || !0 === (null === (bG = yG()) || void 0 === bG ? void 0 : bG.inPlayback)) && zG(GG) : dG("toggle"))
+               }(0, ji.d)() || ("replayViewerOpen" !== MM ? MM.startsWith("replay") && ((0, dr.b)() || !0 === (null === (rM = aM()) || void 0 === rM ? void 0 : rM.inPlayback)) && EM(MM) : dM("toggle"))
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2264` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2281) · [Before (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2264)

```diff
-         runtime: SG.l,
+         runtime: SM.n,
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2267` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2284) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2267)

```diff
-           const bG = null === (GG = (0, yG.f)()) || void 0 === GG ? void 0 : GG.renderFrame;
+           const rM = null === (MM = (0, aM.e)()) || void 0 === MM ? void 0 : MM.renderFrame;
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2277` → after: `L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2294) · [Before (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2277)

```diff
-           return null !== (GG = null === (bG = (ZG = (0, LG.I)()).canvas) || void 0 === bG ? void 0 : bG.call(ZG)) && void 0 !== GG ? GG : null
+           return null !== (MM = null === (rM = (iM = (0, jM.I)()).canvas) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : null
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2279` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2296) · [Before (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2279)

```diff
-         freecam: SG.k
+         freecam: SM.j
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2284` → after: `L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2301) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2284)

```diff
-           ...Qb.l,
+           ...Hr.k,
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2292` → after: `L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2309) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2292)

```diff
-           ...Qb.g,
+           ...Hr.f,
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2294` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2311) · [Before (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2294)

```diff
-           ...mZ.g,
+           ...ui.e,
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2303` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2320) · [Before (L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2303)

```diff
-           ...Qb.d,
+           ...Hr.c,
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2315` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2332) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2315)

```diff
-           ...Qb.i,
+           ...Hr.g,
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2331-L2333` → after: `L2348-L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2348-L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2348-L2350) · [Before (L2331-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2331-L2333)

```diff
-       (0, kG.h)(hG.n), (0, SG.m)(ow.feed), (0, WG.f)(), xb || (xb = !0, (0, hG.l)(vG.i, (GG => {
-         const bG = (0, cG.f)(vG.i, GG);
-         "string" === typeof bG && Promise.resolve().then((() => ZG(3647))).then((GG => {
+       (0, PM.c)(JM.i), (0, SM.r)(eO.feed), (0, tM.e)(), Vr || (Vr = !0, (0, JM.h)(pM.i, (MM => {
+         const rM = (0, sM.d)(pM.i, MM);
+         "string" === typeof rM && Promise.resolve().then((() => iM(4019))).then((MM => {
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2339-L2344` → after: `L2356-L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2356-L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2356-L2361) · [Before (L2339-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2344)

```diff
-       })), (0, hG.l)(vG.hb, (GG => {
-         const bG = (0, cG.f)(vG.hb, GG);
-         "number" === typeof bG && YG.l.xh("serverUpdating", Date.now() + bG, !0)
-       })), (0, hG.l)(vG.I, (GG => {
-         const bG = (0, cG.f)(vG.I, GG);
-         if ((0, cG.d)(bG)) {
+       })), (0, JM.h)(pM.bb, (MM => {
+         const rM = (0, sM.d)(pM.bb, MM);
+         "number" === typeof rM && QM.i.Tz("serverUpdating", Date.now() + rM, !0)
+       })), (0, JM.h)(pM.F, (MM => {
+         const rM = (0, sM.d)(pM.F, MM);
+         if ((0, sM.c)(rM)) {
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2346-L2347` → after: `L2363-L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2363-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2363-L2364) · [Before (L2346-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2346-L2347)

```diff
-             AS: GG,
-             sS: ZG
+             Wr: MM,
+             sr: iM
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2349-L2351` → after: `L2366-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2366-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2366-L2368) · [Before (L2349-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2351)

```diff
-           (0, Db.e)({
-             AS: "string" === typeof GG ? GG : null,
-             sS: "string" === typeof ZG ? ZG : null
+           (0, Kr.c)({
+             Wr: "string" === typeof MM ? MM : null,
+             sr: "string" === typeof iM ? iM : null
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2354-L2362` → after: `L2371-L2379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2371-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2371-L2379) · [Before (L2354-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2354-L2362)

```diff
-       })), (0, hG.l)(VG.jc.NewUiRequest, (GG => {
-         const bG = (0, cG.j)(GG);
-         (0, cG.d)(bG) && "number" === typeof bG.id && (0, cG.d)(bG.clientParameters) && (0, Nb.f)(bG.id, bG.clientParameters)
-       })), (0, hG.l)(vG.Z, (GG => {
-         const bG = (0, cG.f)(vG.Z, GG);
-         "number" === typeof bG && (0, Nb.i)(bG)
-       })), (0, hG.j)(Nb.c), (0, hG.l)(VG.jc.UiRequestPopup, (GG => {
-         const bG = (0, cG.j)(GG);
-         if ((0, cG.d)(bG) && "number" === typeof bG.id && "string" === typeof bG.text) {
+       })), (0, JM.h)(zM.hc.NewUiRequest, (MM => {
+         const rM = (0, sM.f)(MM);
+         (0, sM.c)(rM) && "number" === typeof rM.id && (0, sM.c)(rM.clientParameters) && (0, qr.e)(rM.id, rM.clientParameters)
+       })), (0, JM.h)(pM.V, (MM => {
+         const rM = (0, sM.d)(pM.V, MM);
+         "number" === typeof rM && (0, qr.g)(rM)
+       })), (0, JM.e)(qr.b), (0, JM.h)(zM.hc.UiRequestPopup, (MM => {
+         const rM = (0, sM.f)(MM);
+         if ((0, sM.c)(rM) && "number" === typeof rM.id && ("string" === typeof rM.text || (0, sM.c)(rM.text) && "string" === typeof rM.text.translationKey)) {
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2364` → after: `L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2381) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2364)

```diff
-           (0, Nb.l)(GG, bG.text, !0 === bG.destructive, (bG => {
+           (0, qr.h)(MM, rM.text, !0 === rM.destructive, (rM => {
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2367` → after: `L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2384) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2367)

```diff
-               rV: bG
+               IQ: rM
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2371-L2376` → after: `L2388-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2388-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2388-L2393) · [Before (L2371-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2371-L2376)

```diff
-       })), (0, hG.l)(VG.jc.TopRightHelper, (GG => {
-         const bG = (0, cG.j)(GG);
-         void 0 !== bG && YG.l.xh("TopRightHelper", bG, !0)
-       })), (0, hG.l)(VG.jc.TaskProgress, (GG => {
-         const bG = (0, cG.j)(GG);
-         (0, cG.d)(bG) && "string" === typeof bG.taskId && "number" === typeof bG.progress && (0, tb.b)({
+       })), (0, JM.h)(zM.hc.TopRightHelper, (MM => {
+         const rM = (0, sM.f)(MM);
+         void 0 !== rM && QM.i.Tz("TopRightHelper", rM, !0)
+       })), (0, JM.h)(zM.hc.TaskProgress, (MM => {
+         const rM = (0, sM.f)(MM);
+         (0, sM.c)(rM) && "string" === typeof rM.taskId && "number" === typeof rM.progress && (0, Ir.c)({
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2380-L2384` → after: `L2397-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2397-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2397-L2401) · [Before (L2380-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2384)

```diff
-       }))), XZ || (XZ = !0, (0, hG.l)(vG.q, (GG => {
-         const bG = (0, cG.f)(vG.q, GG);
-         (0, cG.d)(bG) && YG.l.xh("showShopFromServer", {
-           toggle: bG.kG,
-           UG: bG.UG
+       }))), ei || (ei = !0, (0, JM.h)(pM.q, (MM => {
+         const rM = (0, sM.d)(pM.q, MM);
+         (0, sM.c)(rM) && QM.i.Tz("showShopFromServer", {
+           toggle: rM.OS,
+           SS: rM.SS
```

#### 343. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2386-L2391` → after: `L2403-L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2403-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2403-L2408) · [Before (L2386-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2386-L2391)

```diff
-       })), (0, hG.l)(VG.jc.OverShopInfo, (GG => {
-         const bG = (0, cG.j)(GG);
-         (0, cG.d)(bG) && YG.l.xh("overShopInfo", bG.info, !0)
-       })), (0, hG.l)(VG.jc.ShowShopTutorial, (() => {
-         YG.l.xh("showShopTutorial", null, !0)
-       }))), zZ || (zZ = !0, (0, hG.f)((() => {
+       })), (0, JM.h)(zM.hc.OverShopInfo, (MM => {
+         const rM = (0, sM.f)(MM);
+         (0, sM.c)(rM) && QM.i.Tz("overShopInfo", rM.info, !0)
+       })), (0, JM.h)(zM.hc.ShowShopTutorial, (() => {
+         QM.i.Tz("showShopTutorial", null, !0)
+       }))), Ui || (Ui = !0, (0, JM.c)((() => {
```

#### 344. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2393-L2400` → after: `L2410-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2410-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2410-L2417) · [Before (L2393-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2393-L2400)

```diff
-         (0, hZ.resetLeaveEvents)(), null === (GG = EZ) || void 0 === GG || GG(), EZ = (0, hG.d)() ? (0, JZ.g)(hG.d) : null, (0, hG.d)() || YG.l.QJ()
-       })), (0, hG.l)(VG.jc.SetCookie, (GG => {
-         const bG = (0, cG.j)(GG),
-           ZG = (0, lb.d)().gameNameWithVariation;
-         (0, cG.d)(bG) && "string" === typeof bG.key && null !== ZG && (0, dZ.setCookie)(ZG, bG.key, bG.value)
-       })), (0, hG.l)(VG.jc.LeaveValues, (GG => {
-         const bG = (0, cG.j)(GG);
-         if ((0, cG.d)(bG) && "string" === typeof bG.leaveEventType) {
+         (0, di.resetLeaveEvents)(), null === (MM = Gi) || void 0 === MM || MM(), Gi = (0, JM.b)() ? (0, li.h)(JM.b) : null, (0, JM.b)() || QM.i.OE()
+       })), (0, JM.h)(zM.hc.SetCookie, (MM => {
+         const rM = (0, sM.f)(MM),
+           iM = (0, Dr.e)().gameNameWithVariation;
+         (0, sM.c)(rM) && "string" === typeof rM.key && null !== iM && (0, yi.setCookie)(iM, rM.key, rM.value)
+       })), (0, JM.h)(zM.hc.LeaveValues, (MM => {
+         const rM = (0, sM.f)(MM);
+         if ((0, sM.c)(rM) && "string" === typeof rM.leaveEventType) {
```

#### 345. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2414-L2416` → after: `L2431-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2431-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2431-L2433) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2414-L2416)

```diff
-       })), (0, hG.l)(VG.jc.CustomAnalyticsEvent, (GG => {
-         const bG = (0, cG.j)(GG);
-         if ((0, cG.d)(bG) && "string" === typeof bG.cat1) {
+       })), (0, JM.h)(zM.hc.CustomAnalyticsEvent, (MM => {
+         const rM = (0, sM.f)(MM);
+         if ((0, sM.c)(rM) && "string" === typeof rM.cat1) {
```

#### 346. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2430-L2432` → after: `L2447-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2447-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2447-L2449) · [Before (L2430-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2430-L2432)

```diff
-       })), (0, hG.l)(VG.jc.ProgressionEvent, (GG => {
-         const bG = (0, cG.j)(GG);
-         if ((0, cG.d)(bG)) {
+       })), (0, JM.h)(zM.hc.ProgressionEvent, (MM => {
+         const rM = (0, sM.f)(MM);
+         if ((0, sM.c)(rM)) {
```

#### 347. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2448-L2450` → after: `L2465-L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2465-L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2465-L2467) · [Before (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2448-L2450)

```diff
-       })), (0, hG.l)(VG.jc.ResourceEvent, (GG => {
-         const bG = (0, cG.j)(GG);
-         if ((0, cG.d)(bG)) {
+       })), (0, JM.h)(zM.hc.ResourceEvent, (MM => {
+         const rM = (0, sM.f)(MM);
+         if ((0, sM.c)(rM)) {
```

#### 348. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2466-L2468` → after: `L2483-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2483-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2483-L2485) · [Before (L2466-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2466-L2468)

```diff
-       })), (0, hG.l)(VG.jc.LeaderboardResponse, (GG => {
-         const bG = (0, cG.j)(GG);
-         if ((0, cG.d)(bG)) {
+       })), (0, JM.h)(zM.hc.LeaderboardResponse, (MM => {
+         const rM = (0, sM.f)(MM);
+         if ((0, sM.c)(rM)) {
```

#### 349. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2474` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2491) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2474)

```diff
-           YG.l.xh("leaderboardResponse", {
+           QM.i.Tz("leaderboardResponse", {
```

#### 350. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2480-L2481` → after: `L2497-L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2497-L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2497-L2498) · [Before (L2480-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2480-L2481)

```diff
-       })), (0, hG.l)(vG.z, (GG => {
-         const bG = (0, cG.f)(vG.z, GG);
+       })), (0, JM.h)(pM.z, (MM => {
+         const rM = (0, sM.d)(pM.z, MM);
```

#### 351. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2483-L2489` → after: `L2500-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2500-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2500-L2506) · [Before (L2483-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2483-L2489)

```diff
-       })), (0, hG.l)(vG.A, (GG => {
-         const bG = (0, cG.f)(vG.A, GG);
-         "string" === typeof bG && console.error(`[logErrorToConsole]: ${bG}`)
-       }))), MG(), (0, mZ.b)(), Pb || (Pb = !0, (0, hG.l)(vG.f, (GG => {
-         const bG = (0, cG.f)(vG.f, GG);
-         void 0 !== bG && (0, jb.l)(bG)
-       }))), Hb(), Ib(), HG || (HG = !0, (0, LG.r)(tG)), wG.gameBridge.attach(Xw), (0, wG.installPageSources)({
+       })), (0, JM.h)(pM.C, (MM => {
+         const rM = (0, sM.d)(pM.C, MM);
+         "string" === typeof rM && console.error(`[logErrorToConsole]: ${rM}`)
+       }))), oM(), (0, ui.b)(), Zr || (Zr = !0, (0, JM.h)(pM.h, (MM => {
+         const rM = (0, sM.d)(pM.h, MM);
+         void 0 !== rM && (0, kr.h)(rM)
+       }))), Xr(), ur(), XM || (XM = !0, (0, jM.x)(IM)), OM.gameBridge.attach(bO), (0, OM.installPageSources)({
```

#### 352. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2492` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2509) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2492)

```diff
-           setChunkAddDistance: MZ.k
+           setChunkAddDistance: Yi.g
```

#### 353. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2498` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2515) · [Before (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2498)

```diff
-           Vr: MZ.c,
+           jU: Yi.b,
```

#### 354. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2501` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2518) · [Before (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2501)

```diff
-       }), (0, PZ.d)(), kw()
+       }), (0, fi.c)(), QO()
```

#### 355. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2504` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2521) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2504)

```diff
-   41344: (GG, bG, ZG) => {
+   42053: (MM, rM, iM) => {
```

#### 356. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2506-L2509` → after: `L2523-L2526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2523-L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2523-L2526) · [Before (L2506-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2506-L2509)

```diff
-       d: () => VG,
-       g: () => UG,
-       k: () => kG,
-       n: () => YG
+       c: () => zM,
+       e: () => nM,
+       f: () => PM,
+       j: () => QM
```

#### 357. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2511` → after: `L2528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2528) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2511)

```diff
-     var wG = ZG(1910);
+     var OM = iM(2050);
```

#### 358. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2525` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2542) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2525)

```diff
-       SG = GG, LG++, (0, wG.d)();
+       SM = MM, jM++, (0, OM.c)();
```

#### 359. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2533` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2550) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2533)

```diff
-   41432: (GG, bG, ZG) => {
+   42151: (MM, rM, iM) => {
```

#### 360. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2535-L2536` → after: `L2552-L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2552-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2552-L2553) · [Before (L2535-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2535-L2536)

```diff
-       d: () => yG,
-       g: () => kG
+       c: () => aM,
+       d: () => PM
```

#### 361. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2538` → after: `L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2555) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2538)

```diff
-     var wG = ZG(41435);
+     var OM = iM(42157);
```

#### 362. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2543` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2560) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2543)

```diff
-       return SG ??= ZG.e(62).then((() => ZG(61162))).catch((GG => {
+       return SM ??= iM.e(73).then((() => iM(63252))).catch((MM => {
```

#### 363. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2549` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2566) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2549)

```diff
-       return LG ??= Promise.all([yG(), (0, wG.f)()]).then((GG => {
+       return jM ??= Promise.all([aM(), (0, OM.g)()]).then((MM => {
```

#### 364. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2557` → after: `L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2574) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2557)

```diff
-   37420: (GG, bG, ZG) => {
+   38005: (MM, rM, iM) => {
```

#### 365. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2721` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/playGameSources.js#L2738) · [Before (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/playGameSources.js#L2721)

```diff
-   39435: (GG, bG, ZG) => {
+   40073: (MM, rM, iM) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1661 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1)

```diff
- /*! For license information please see wp3j0a.procGenWorker.afad9660.chunk.js.LICENSE.txt */
+ /*! For license information please see fo1voe.procGenWorker.abfd70e1.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L4)

```diff
-       1589: GG => {
+       1731: MM => {
```

#### 3. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L82)

```diff
-             return bG === 1 / 0 ? bG : void 0 !== bG ? Math.max(0, Math.ceil(bG - ZG())) : 0
+             return rM === 1 / 0 ? rM : void 0 !== rM ? Math.max(0, Math.ceil(rM - iM())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L151)

```diff
-       424: GG => {
+       423: MM => {
```

#### 5. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L156)

```diff
-       379: (GG, bG, ZG) => {
+       367: (MM, rM, iM) => {
```

#### 6. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L164-L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166) · [Before (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166)

```diff
-         var wG = ZG(385),
-           SG = ZG(390),
-           LG = ZG(397)
+         var OM = iM(374),
+           SM = iM(383),
+           jM = iM(392)
```

#### 7. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L168)

```diff
-       465: GG => {
+       474: MM => {
```

#### 8. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L173)

```diff
-       376: GG => {
+       359: MM => {
```

#### 9. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L179)

```diff
-       399: GG => {
+       396: MM => {
```

#### 10. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L184)

```diff
-       369: GG => {
+       352: MM => {
```

#### 11. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L190)

```diff
-       527: GG => {
+       551: MM => {
```

#### 12. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202)

```diff
-       491: (GG, bG, ZG) => {
-         GG.exports = ZG(484)
+       504: (MM, rM, iM) => {
+         MM.exports = iM(498)
```

#### 13. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L204)

```diff
-       484: GG => {
+       498: MM => {
```

#### 14. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213)

```diff
-       447: (GG, bG, ZG) => {
-         GG.exports = ZG(443)
+       455: (MM, rM, iM) => {
+         MM.exports = iM(452)
```

#### 15. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L215)

```diff
-       443: GG => {
+       452: MM => {
```

#### 16. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L220)

```diff
-       397: GG => {
+       392: MM => {
```

#### 17. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L225)

```diff
-       371: GG => {
+       357: MM => {
```

#### 18. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L228)

```diff
-       409: (GG, bG, ZG) => {
+       411: (MM, rM, iM) => {
```

#### 19. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L238)

```diff
-         var wG = ZG(371)
+         var OM = iM(357)
```

#### 20. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L240)

```diff
-       418: GG => {
+       415: MM => {
```

#### 21. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L245)

```diff
-       460: GG => {
+       468: MM => {
```

#### 22. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L250)

```diff
-       565: (GG, bG, ZG) => {
+       592: (MM, rM, iM) => {
```

#### 23. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L259)

```diff
-         var wG = ZG(369)()
+         var OM = iM(352)()
```

#### 24. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L261)

```diff
-       385: GG => {
+       374: MM => {
```

#### 25. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268)

```diff
-       364: (GG, bG, ZG) => {
-         var wG = ZG(369);
+       347: (MM, rM, iM) => {
+         var OM = iM(352);
```

#### 26. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L270)

```diff
-           EPSILON: ZG(371),
+           EPSILON: iM(357),
```

#### 27. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L273-L318` → after: `L273-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318) · [Before (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318)

```diff
-           clone: ZG(376),
-           angle: ZG(379),
-           wb: ZG(385),
-           copy: ZG(399),
-           set: ZG(407),
-           equals: ZG(409),
-           exactEquals: ZG(418),
-           add: ZG(424),
-           subtract: ZG(426),
-           sub: ZG(429),
-           multiply: ZG(432),
-           mul: ZG(440),
-           divide: ZG(443),
-           div: ZG(447),
-           min: ZG(449),
-           max: ZG(452),
- ... (30 more removed lines; see GitHub link above)
+           clone: iM(359),
+           angle: iM(367),
+           fi: iM(374),
+           copy: iM(396),
+           set: iM(403),
+           equals: iM(411),
+           exactEquals: iM(415),
+           add: iM(423),
+           subtract: iM(431),
+           sub: iM(436),
+           multiply: iM(439),
+           mul: iM(445),
+           divide: iM(452),
+           div: iM(455),
+           min: iM(457),
+           max: iM(463),
+ ... (30 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324)

```diff
-       506: (GG, bG, ZG) => {
-         GG.exports = ZG(503)
+       519: (MM, rM, iM) => {
+         MM.exports = iM(514)
```

#### 29. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L326)

```diff
-       503: GG => {
+       514: MM => {
```

#### 30. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L334)

```diff
-       536: GG => {
+       557: MM => {
```

#### 31. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L342)

```diff
-       452: GG => {
+       463: MM => {
```

#### 32. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L347)

```diff
-       449: GG => {
+       457: MM => {
```

#### 33. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353)

```diff
-       440: (GG, bG, ZG) => {
-         GG.exports = ZG(432)
+       445: (MM, rM, iM) => {
+         MM.exports = iM(439)
```

#### 34. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L355)

```diff
-       432: GG => {
+       439: MM => {
```

#### 35. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L360)

```diff
-       517: GG => {
+       537: MM => {
```

#### 36. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L365)

```diff
-       390: GG => {
+       383: MM => {
```

#### 37. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L375)

```diff
-       538: GG => {
+       561: MM => {
```

#### 38. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L384)

```diff
-       556: GG => {
+       576: MM => {
```

#### 39. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L395)

```diff
-       558: GG => {
+       581: MM => {
```

#### 40. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L406)

```diff
-       562: GG => {
+       583: MM => {
```

#### 41. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L417)

```diff
-       472: GG => {
+       476: MM => {
```

#### 42. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L422)

```diff
-       475: GG => {
+       481: MM => {
```

#### 43. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L427)

```diff
-       481: GG => {
+       490: MM => {
```

#### 44. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L432)

```diff
-       407: GG => {
+       403: MM => {
```

#### 45. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438)

```diff
-       499: (GG, bG, ZG) => {
-         GG.exports = ZG(494)
+       511: (MM, rM, iM) => {
+         MM.exports = iM(507)
```

#### 46. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441)

```diff
-       513: (GG, bG, ZG) => {
-         GG.exports = ZG(508)
+       534: (MM, rM, iM) => {
+         MM.exports = iM(527)
```

#### 47. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L443)

```diff
-       494: GG => {
+       507: MM => {
```

#### 48. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L451)

```diff
-       508: GG => {
+       527: MM => {
```

#### 49. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460)

```diff
-       429: (GG, bG, ZG) => {
-         GG.exports = ZG(426)
+       436: (MM, rM, iM) => {
+         MM.exports = iM(431)
```

#### 50. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L462)

```diff
-       426: GG => {
+       431: MM => {
```

#### 51. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L467)

```diff
-       545: GG => {
+       566: MM => {
```

#### 52. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L475)

```diff
-       542: GG => {
+       563: MM => {
```

#### 53. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L484)

```diff
-       547: GG => {
+       570: MM => {
```

#### 54. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L500)

```diff
-       2845: GG => {
+       3168: MM => {
```

#### 55. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L506)

```diff
-       2848: GG => {
+       3172: MM => {
```

#### 56. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L516)

```diff
-       40141: GG => {
+       40863: MM => {
```

#### 57. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L520)

```diff
-             for (var yG = SG[LG] = new Array(bG), kG = LG < wG / 2 ? LG : LG + 1, UG = 1; UG <= bG; UG++) {
+             for (var aM = SM[jM] = new Array(rM), PM = jM < OM / 2 ? jM : jM + 1, nM = 1; nM <= rM; nM++) {
```

#### 58. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L527-L529` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529)

```diff
-       2837: (GG, bG, ZG) => {
-         var wG = ZG(2845),
-           SG = ZG(2848),
+       3160: (MM, rM, iM) => {
+         var OM = iM(3168),
+           SM = iM(3172),
```

#### 59. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L674-L677` → after: `L674-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677) · [Before (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677)

```diff
-       40119: (GG, bG, ZG) => {
-         var wG = ZG(40126).integer,
-           SG = ZG(40134),
-           LG = ZG(40139);
+       40837: (MM, rM, iM) => {
+         var OM = iM(40844).integer,
+           SM = iM(40850),
+           jM = iM(40859);
```

#### 60. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L741-L744` → after: `L741-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744) · [Before (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744)

```diff
-       40144: (GG, bG, ZG) => {
-         var wG = ZG(40126).array,
-           SG = ZG(40134),
-           LG = ZG(40139);
+       40870: (MM, rM, iM) => {
+         var OM = iM(40844).array,
+           SM = iM(40850),
+           jM = iM(40859);
```

#### 61. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828)

```diff
-       40139: (GG, bG, ZG) => {
-         var wG = ZG(40141);
+       40859: (MM, rM, iM) => {
+         var OM = iM(40863);
```

#### 62. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L847-L849` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849) · [Before (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849)

```diff
-       40114: (GG, bG, ZG) => {
-         var wG = ZG(40119),
-           SG = ZG(40144);
+       40835: (MM, rM, iM) => {
+         var OM = iM(40837),
+           SM = iM(40870);
```

#### 63. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L870)

```diff
-       40134: GG => {
+       40850: MM => {
```

#### 64. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L884)

```diff
-       40126: GG => {
+       40844: MM => {
```

#### 65. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L910-L911` → after: `L910-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911)

```diff
-       38135: (GG, bG, ZG) => {
-         var wG = ZG(38141);
+       38710: (MM, rM, iM) => {
+         var OM = iM(38716);
```

#### 66. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L943)

```diff
-       38141: (GG, bG) => {
+       38716: (MM, rM) => {
```

#### 67. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L997-L998` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L997-L998) · [Before (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L997-L998)

```diff
-       9258: (GG, bG) => {
-         bG.h = function(GG) {
+       9825: (MM, rM) => {
+         rM.i = function(MM) {
```

#### 68. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012)

```diff
-       40048: (GG, bG, ZG) => {
+       40787: (MM, rM, iM) => {
```

#### 69. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1014)

```diff
-           c: () => Vb
+           d: () => zr
```

#### 70. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1016-L1018` → after: `L1016-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018)

```diff
-         var wG = ZG(40077),
-           SG = ZG(40061),
-           LG = ZG(40154);
+         var OM = iM(40804),
+           SM = iM(40793),
+           jM = iM(40883);
```

#### 71. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027)

```diff
-           return yG(`${GG}Wasteland`)
+           return aM(`${MM}Wasteland`)
```

#### 72. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062)

```diff
-           return 36 * (1 === wG ? GG : bG) + 2 + Math.floor(32 * UG(GG, bG, ZG ^ fG ^ wG))
+           return 36 * (1 === OM ? MM : rM) + 2 + Math.floor(32 * nM(MM, rM, iM ^ mM ^ OM))
```

#### 73. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1064-L1065` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065)

```diff
-         var dG = ZG(40053),
-           JG = ZG(40068);
+         var dM = iM(40790),
+           yM = iM(40798);
```

#### 74. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1092)

```diff
-             GG !== CG && (CG = GG, WG = (0, dG.f)(GG), mG = kG(GG))
+             MM !== wM && (wM = MM, tM = (0, dM.g)(MM), gM = PM(MM))
```

#### 75. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141)

```diff
-               return wG > ZG && (LG = .25 - LG), GG < 0 && (LG = .5 - LG), bG < 0 ? 1 - LG : LG
+               return OM > iM && (jM = .25 - jM), MM < 0 && (jM = .5 - jM), rM < 0 ? 1 - jM : jM
```

#### 76. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174)

```diff
-             return ZG && aG(ZG, GG, bG) ? ZG : null
+             return iM && WM(iM, MM, rM) ? iM : null
```

#### 77. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181)

```diff
-                 if (LG && SG >= LG.floorY - JG.g && wG <= LG.topY + zG) {
+                 if (jM && SM >= jM.floorY - yM.f && OM <= jM.topY + EM) {
```

#### 78. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206)

```diff
-         var sG = ZG(40105);
+         var YM = iM(40825);
```

#### 79. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210)

```diff
-             this.rK = bG, this.chances = SG, this.mound = LG, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ZG.salt ^ yG(wG), this.sinkholes = ZG.sinkholes;
+             this.HL = rM, this.chances = SM, this.mound = jM, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = iM.salt ^ aM(OM), this.sinkholes = iM.sinkholes;
```

#### 80. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231)

```diff
-               for (let SG = 0; SG < kG.height && UG + SG < this.rK; SG++) UG + SG >= 0 && GG.set(wG - bG, UG + SG, LG - ZG, kG.block);
+               for (let SM = 0; SM < PM.height && nM + SM < this.HL; SM++) nM + SM >= 0 && MM.set(OM - rM, nM + SM, jM - iM, PM.block);
```

#### 81. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238)

```diff
-               if (VG += null !== (pG = this.chances[fG]) && void 0 !== pG ? pG : 0, YG < VG) return void(qG.has(fG) && this.sinkholes.taking(wG, LG) || this.place(GG, wG - bG, yG + 1 - SG, LG - ZG, fG, UG(wG, LG, 1540483477 ^ this.salt)))
+               if (zM += null !== (LM = this.chances[mM]) && void 0 !== LM ? LM : 0, QM < zM) return void(NM.has(mM) && this.sinkholes.taking(OM, jM) || this.place(MM, OM - rM, aM + 1 - SM, jM - iM, mM, nM(OM, jM, 1540483477 ^ this.salt)))
```

#### 82. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243)

```diff
-                 ZG + SG >= 0 && ZG + SG < this.rK && GG.set(bG, ZG + SG, wG, LG)
+                 iM + SM >= 0 && iM + SM < this.HL && MM.set(rM, iM + SM, OM, jM)
```

#### 83. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252)

```diff
-         class gG extends sG.k {
+         class xM extends YM.h {
```

#### 84. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260)

```diff
-             super.init(), this.floraGenerator = new nG(this.blockMetadata, this.rK, this.noise, this.seed, this.floraChances, ((GG, bG) => this.mound(GG, bG)))
+             super.init(), this.floraGenerator = new AM(this.blockMetadata, this.HL, this.noise, this.seed, this.floraChances, ((MM, rM) => this.mound(MM, rM)))
```

#### 85. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298)

```diff
-               return 0 === wG || 1 === wG && UG(GG, bG, ZG ^ fG ^ 3) < .5 ? 2 - wG : 0
+               return 0 === OM || 1 === OM && nM(MM, rM, iM ^ mM ^ 3) < .5 ? 2 - OM : 0
```

#### 86. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327)

```diff
-             })), this.canyon = new SG.g([{
+             })), this.canyon = new SM.i([{
```

#### 87. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330)

```diff
-             }], `${GG}WastelandCanyon`), this.canyonWarp = new SG.g([{
+             }], `${MM}WastelandCanyon`), this.canyonWarp = new SM.i([{
```

#### 88. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333)

```diff
-             }], `${GG}WastelandCanyonWarp`), this.canyonMask = new SG.g([{
+             }], `${MM}WastelandCanyonWarp`), this.canyonMask = new SM.i([{
```

#### 89. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1336` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336)

```diff
-             }], `${GG}WastelandCanyonMask`), this.patchNoise = new SG.g([{
+             }], `${MM}WastelandCanyonMask`), this.patchNoise = new SM.i([{
```

#### 90. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342)

```diff
-             }], `${GG}WastelandPatch`), this.fineNoise = new SG.g([{
+             }], `${MM}WastelandPatch`), this.fineNoise = new SM.i([{
```

#### 91. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348)

```diff
-             }], `${GG}WastelandFine`)
+             }], `${MM}WastelandFine`)
```

#### 92. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1371-L1374` → after: `L1371-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374) · [Before (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374)

```diff
-         var TG = ZG(4265),
-           HG = ZG(604),
-           tG = ZG(39551),
-           DG = ZG(40088);
+         var BM = iM(4586),
+           XM = iM(625),
+           IM = iM(40201),
+           KM = iM(40816);
```

#### 93. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1385)

```diff
-             return GG.set(0, 0, 0, OG("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             return MM.set(0, 0, 0, TM("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1425)

```diff
-               qualityDistribution: new TG.e([{
+               qualityDistribution: new BM.g([{
```

#### 95. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1440` → after: `L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1440) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1440)

```diff
-               mobTypeDistribution: new TG.e([{
+               mobTypeDistribution: new BM.g([{
```

#### 96. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448)

```diff
-           return (0, sG.pb)(GG, [{
+           return (0, YM.eb)(MM, [{
```

#### 97. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1451)

```diff
-           }, ...sG.i.map((GG => ({
+           }, ...YM.g.map((MM => ({
```

#### 98. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458)

```diff
-             super(GG, bG, ZG, `${LG}DustFlats`, yG, kG, wb(wG.h.MEDIUM, 1.25, Gb)), this.key = "dustFlats", this.floraChances = {
+             super(MM, rM, iM, `${jM}DustFlats`, aM, PM, Or(OM.l.MEDIUM, 1.25, Mr)), this.key = "dustFlats", this.floraChances = {
```

#### 99. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = QG.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new SG.g([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = HM.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new SM.i([{
```

#### 100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1468` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468)

```diff
-             }], `${LG}DustFlatsHeight`)
+             }], `${jM}DustFlatsHeight`)
```

#### 101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483)

```diff
-             super(GG, bG, ZG, `${wG}ScorchedMesa`, LG, yG), this.key = "scorchedMesa", this.floraChances = {
+             super(MM, rM, iM, `${OM}ScorchedMesa`, jM, aM), this.key = "scorchedMesa", this.floraChances = {
```

#### 102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487)

```diff
-             }, this.outcropChance = QG.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = HM.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493)

```diff
-             }], `${wG}ScorchedMesaHeight`);
+             }], `${OM}ScorchedMesaHeight`);
```

#### 104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525)

```diff
-             super(GG, bG, ZG, `${wG}ShatteredHighlands`, LG, yG), this.key = "shatteredHighlands", this.floraChances = {
+             super(MM, rM, iM, `${OM}ShatteredHighlands`, jM, aM), this.key = "shatteredHighlands", this.floraChances = {
```

#### 105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528)

```diff
-             }, this.outcropChance = QG.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = HM.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531)

```diff
-             }], `${wG}HighlandsRidge1`), this.ridge2 = new SG.g([{
+             }], `${OM}HighlandsRidge1`), this.ridge2 = new SM.i([{
```

#### 107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534)

```diff
-             }], `${wG}HighlandsRidge2`), this.bumps = new SG.g([{
+             }], `${OM}HighlandsRidge2`), this.bumps = new SM.i([{
```

#### 108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537)

```diff
-             }], `${wG}HighlandsBumps`)
+             }], `${OM}HighlandsBumps`)
```

#### 109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548)

```diff
-             return 0 !== SG ? SG : bG > 50 ? this.ids.Stone : bG > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== SM ? SM : rM > 50 ? this.ids.Stone : rM > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559)

```diff
-               return null === yG || YG(GG >> 2, bG, ZG >> 2, SG) >= .25 ? null : YG(GG, bG, ZG, SG) < .65 ? yG : null
+               return null === aM || QM(MM >> 2, rM, iM >> 2, SM) >= .25 ? null : QM(MM, rM, iM, SM) < .65 ? aM : null
```

#### 111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1566` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566)

```diff
-             super(GG, bG, ZG, `${LG}RuinFields`, yG, kG, wb(wG.h.HIGH, 2.25, bb)), this.key = "ruinFields", this.floraChances = {
+             super(MM, rM, iM, `${jM}RuinFields`, aM, PM, Or(OM.l.HIGH, 2.25, rr)), this.key = "ruinFields", this.floraChances = {
```

#### 112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571)

```diff
-             }, this.outcropChance = QG.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new SG.g([{
+             }, this.outcropChance = HM.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new SM.i([{
```

#### 113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1577` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577)

```diff
-             }], `${LG}RuinFieldsHeight`)
+             }], `${jM}RuinFieldsHeight`)
```

#### 114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589)

```diff
-             super(GG, bG, ZG, `${wG}SaltFlats`, LG, yG), this.key = "saltFlats", this.floraChances = {
+             super(MM, rM, iM, `${OM}SaltFlats`, jM, aM), this.key = "saltFlats", this.floraChances = {
```

#### 115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592)

```diff
-             }, this.outcropChance = QG.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new SG.g([{
+             }, this.outcropChance = HM.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new SM.i([{
```

#### 116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598)

```diff
-             }], `${wG}SaltFlatsHeight`)
+             }], `${OM}SaltFlatsHeight`)
```

#### 117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616)

```diff
-             super(GG, bG, ZG, `${wG}SurvivorGrove`, LG, yG), this.key = "survivorGrove", this.floraChances = {
+             super(MM, rM, iM, `${OM}SurvivorGrove`, jM, aM), this.key = "survivorGrove", this.floraChances = {
```

#### 118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = QG.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new SG.g([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = HM.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new SM.i([{
```

#### 119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626)

```diff
-             }], `${wG}SurvivorGroveHeight`)
+             }], `${OM}SurvivorGroveHeight`)
```

#### 120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641)

```diff
-               rK: bG,
+               HL: rM,
```

#### 121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667)

```diff
-       572: (GG, bG, ZG) => {
+       596: (MM, rM, iM) => {
```

#### 122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1669)

```diff
-           d: () => wG
+           e: () => OM
```

#### 123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1677-L1678` → after: `L1677-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678) · [Before (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678)

```diff
-               if (void 0 !== ZG[GG]) throw new Error(`Duplicate value found in bi-directional table: ${String(GG)}`);
-               ZG[GG] = "string" === bG ? wG : Number(wG)
+               if (void 0 !== iM[MM]) throw new Error(`Duplicate value found in bi-directional table: ${String(MM)}`);
+               iM[MM] = "string" === rM ? OM : Number(OM)
```

#### 124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690)

```diff
-       40088: (GG, bG, ZG) => {
+       40816: (MM, rM, iM) => {
```
