# Changed — Bundle Modifications Report (Part 123 / 138)

- **Updated at**: `2026-11-25T13:06 JST`
- **Part**: `123 / 138` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 122](part-122.md) · [Part 124 →](part-124.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (igzsf.a0b73a5f → dz8ef.98c5e741 · continued)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (356 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 67. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L446-L452` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L446-L452) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L446-L452)

```diff
-     var Ot = Vt(1308),
-       qt = Vt(1429),
-       Dt = Vt(26),
-       mt = Vt(1410),
-       dt = Vt(1423),
-       jt = Vt(1613),
-       Ht = Vt(36709);
+     var su = ju(1278),
+       Uu = ju(1376),
+       Zu = ju(22),
+       Xu = ju(1362),
+       lu = ju(1369),
+       qu = ju(1570),
+       fu = ju(36856);
```

#### 68. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L456-L457` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L456-L457) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L456-L457)

```diff
-         iq: et,
-         Yq: Vt
+         HU: Eu,
+         AU: ju
```

#### 69. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L459-L461` → after: `L459-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L459-L461) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L459-L461)

```diff
-       const Xt = null !== et && void 0 !== et ? et : (0, dt.c)().gameNameWithVariation;
-       (0, Ot.M)(Xt) && ((0, Ht.j)(), (0, mt.ab)((() => {
-         console.log("Received matchmaking order from game server to game", et), (0, Dt.i)("inGameReplay"), (0, jt.navigatePreserveSearch)((0, qt.c)(Xt, null !== Vt && void 0 !== Vt ? Vt : void 0))
+       const Cu = null !== Eu && void 0 !== Eu ? Eu : (0, lu.b)().gameNameWithVariation;
+       (0, su.L)(Cu) && ((0, fu.g)(), (0, Xu.R)((() => {
+         console.log("Received matchmaking order from game server to game", Eu), (0, Zu.j)("inGameReplay"), (0, qu.navigatePreserveSearch)((0, Uu.c)(Cu, null !== ju && void 0 !== ju ? ju : void 0))
```

#### 70. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L465)

```diff
-   39387: (tt, et, Vt) => {
+   39497: (uu, Eu, ju) => {
```

#### 71. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L467)

```diff
-       e: () => Dt
+       d: () => Zu
```

#### 72. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L469-L470` → after: `L469-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L469-L470) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L469-L470)

```diff
-     var Ot = Vt(31),
-       qt = Vt(2074);
+     var su = ju(24),
+       Uu = ju(2040);
```

#### 73. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L474-L476` → after: `L474-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L474-L476) · [Before (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L474-L476)

```diff
-       const Dt = (0, qt.k)(null !== (et = null === (Vt = qt.r.toggleFreeCam) || void 0 === Vt ? void 0 : Vt[0]) && void 0 !== et ? et : null);
-       Ot.j.sw("showBottomMessage", {
-         message: `Free Camera ${tt?"Enabled":"Disabled"}${Dt?` - Press ${Dt} to toggle`:""}`,
+       const Zu = (0, Uu.q)(null !== (Eu = null === (ju = Uu.z.toggleFreeCam) || void 0 === ju ? void 0 : ju[0]) && void 0 !== Eu ? Eu : null);
+       su.h.TY("showBottomMessage", {
+         message: `Free Camera ${uu?"Enabled":"Disabled"}${Zu?` - Press ${Zu} to toggle`:""}`,
```

#### 74. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L482)

```diff
-   39202: (tt, et, Vt) => {
+   39320: (uu, Eu, ju) => {
```

#### 75. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L486-L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L487) · [Before (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L486-L487)

```diff
-       l: () => dt,
-       n: () => Ht
+       k: () => fu
```

#### 76. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L489-L490` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L489-L490) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L489-L490)

```diff
-     var Ot = Vt(31),
-       qt = Vt(1450);
+     var su = ju(24),
+       Uu = ju(1405);
```

#### 77. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L494)

```diff
-       Ot.j.sw("newUiRequest", {
+       su.h.TY("newUiRequest", {
```

#### 78. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L501)

```diff
-       Ot.j.sw("removeUiRequest", tt, !0);
+       su.h.TY("removeUiRequest", uu, !0);
```

#### 79. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L507)

```diff
-       Ot.j.sw("clearUiRequests");
+       su.h.TY("clearUiRequests");
```

#### 80. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L525)

```diff
-   39839: (tt, et, Vt) => {
+   39917: (uu, Eu, ju) => {
```

#### 81. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L530-L531` → after: `L530-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L530-L531) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L530-L531)

```diff
-     var Ot = Vt(229),
-       qt = Vt(39842);
+     var su = ju(202),
+       Uu = ju(39926);
```

#### 82. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L539)

```diff
-       return null === tt.amount || 1 === tt.amount ? tt.name : `${tt.amount} ${tt.name}`
+       return null === uu.amount || 1 === uu.amount ? uu.name : `${uu.amount} ${uu.name}`
```

#### 83. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L541-L543` → after: `L541-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L541-L543) · [Before (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L541-L543)

```diff
-     var jt = Vt(39850),
-       Ht = Vt(2043),
-       Xt = Vt(1423);
+     var qu = ju(39933),
+       fu = ju(2011),
+       Cu = ju(1369);
```

#### 84. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L549-L550` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L549-L550) · [Before (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L549-L550)

```diff
-       const Dt = Ot.e.ff,
-         mt = (0, qt.k)(null !== et && void 0 !== et ? et : Vt, Dt),
+       const Zu = su.e.hO,
+         Xu = (0, Uu.h)(null !== Eu && void 0 !== Eu ? Eu : ju, Zu),
```

#### 85. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L552)

```diff
-       return dt ? (0, qt.c)(mt, Dt, ((et, Vt, Ot) => {
+       return lu ? (0, Uu.d)(Xu, Zu, ((Eu, ju, su) => {
```

#### 86. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L555)

```diff
-       }), Vt) : `The chunk from ${mt.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Vt.map(Math.floor).join(" ")}.`
+       }), ju) : `The chunk from ${Xu.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ju.map(Math.floor).join(" ")}.`
```

#### 87. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L560)

```diff
-       if (!tt) return jt.h;
+       if (!uu) return qu.f;
```

#### 88. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L569-L571` → after: `L569-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L569-L571) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L569-L571)

```diff
-         null !== tt.game && et.push(`Game: ${tt.game}.`);
-         const Vt = null === tt.health ? "" : `, health ${Math.round(tt.health)}${null===tt.maxHealth?"":` of ${Math.round(tt.maxHealth)}`}`;
-         et.push(`The player (the creator) stands at ${mt(tt.position)}${Vt}, ${tt.creative?"in":"not in"} creative mode.`);
+         null !== uu.game && Eu.push(`Game: ${uu.game}.`);
+         const ju = null === uu.health ? "" : `, health ${Math.round(uu.health)}${null===uu.maxHealth?"":` of ${Math.round(uu.maxHealth)}`}`;
+         Eu.push(`The player (the creator) stands at ${Xu(uu.position)}${ju}, ${uu.creative?"in":"not in"} creative mode.`);
```

#### 89. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L573-L575` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L573-L575) · [Before (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L573-L575)

```diff
-         et.push(Ot ? `Holding (slot ${tt.heldSlot}): ${dt(Ot)}.` : `Holding nothing (slot ${tt.heldSlot} is empty).`);
-         const qt = tt.slots.flatMap(((tt, et) => tt ? [`slot ${et}: ${dt(tt)}`] : []));
-         et.push(qt.length > 0 ? `Inventory: ${qt.join(", ")}.` : "Inventory: empty.");
+         Eu.push(su ? `Holding (slot ${uu.heldSlot}): ${lu(su)}.` : `Holding nothing (slot ${uu.heldSlot} is empty).`);
+         const Uu = uu.slots.flatMap(((uu, Eu) => uu ? [`slot ${Eu}: ${lu(uu)}`] : []));
+         Eu.push(Uu.length > 0 ? `Inventory: ${Uu.join(", ")}.` : "Inventory: empty.");
```

#### 90. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L582)

```diff
-             const Vt = "player" === tt.kind ? `player "${tt.name||"?"}"` : tt.name && tt.name !== tt.kind ? `${tt.kind} "${tt.name}"` : tt.kind,
+             const ju = "player" === uu.kind ? `player "${uu.name||"?"}"` : uu.name && uu.name !== uu.kind ? `${uu.kind} "${uu.name}"` : uu.kind,
```

#### 91. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L584)

```diff
-             et.push(`- ${Vt} at ${mt(tt.position)}, ${Ot} block${1===Ot?"":"s"} away`)
+             Eu.push(`- ${ju} at ${Xu(uu.position)}, ${su} block${1===su?"":"s"} away`)
```

#### 92. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L586)

```diff
-           Ht.length > Dt && et.push(`- and ${Ht.length-Dt} more further away`)
+           fu.length > Zu && Eu.push(`- and ${fu.length-Zu} more further away`)
```

#### 93. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L588)

```diff
-         return tt.droppedItems > 0 && et.push(`${tt.droppedItems} dropped item${1===tt.droppedItems?" is":"s are"} on the ground nearby.`), et.join("\n")
+         return uu.droppedItems > 0 && Eu.push(`${uu.droppedItems} dropped item${1===uu.droppedItems?" is":"s are"} on the ground nearby.`), Eu.join("\n")
```

#### 94. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L590)

```diff
-         game: null !== (et = (0, Xt.c)().gameNameWithVariation) && void 0 !== et ? et : null,
+         game: null !== (Eu = (0, Cu.b)().gameNameWithVariation) && void 0 !== Eu ? Eu : null,
```

#### 95. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L592-L594` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L592-L594) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L592-L594)

```diff
-         health: null !== (Vt = Ht.b.get("_health")) && void 0 !== Vt ? Vt : null,
-         maxHealth: null !== (Ot = Ht.b.get("_totalMaxHealth")) && void 0 !== Ot ? Ot : null,
-         creative: !0 === Ht.b.get("creative"),
+         health: null !== (ju = fu.e.get("_health")) && void 0 !== ju ? ju : null,
+         maxHealth: null !== (su = fu.e.get("_totalMaxHealth")) && void 0 !== su ? su : null,
+         creative: !0 === fu.e.get("creative"),
```

#### 96. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L602)

```diff
-   41068: (tt, et, Vt) => {
+   41110: (uu, Eu, ju) => {
```

#### 97. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L607-L609` → after: `L605-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L605-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L605-L609) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L607-L609)

```diff
-       G: () => Zt,
-       K: () => gt,
-       O: () => kt,
+       D: () => Qu,
+       F: () => ku,
+       J: () => ru,
+       M: () => ou,
+       P: () => tu,
```

#### 98. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L611-L617` → after: `L611-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L611-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L611-L615) · [Before (L611-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L611-L617)

```diff
-       T: () => Ft,
-       X: () => ct,
-       Y: () => Yt,
-       ab: () => Pt,
-       d: () => Bt,
-       h: () => zt,
-       l: () => Wt,
+       V: () => vu,
+       b: () => xu,
+       e: () => Wu,
+       i: () => au,
+       k: () => Tu,
```

#### 99. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L619-L621` → after: `L617-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L617-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L617-L621) · [Before (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L619-L621)

```diff
-       s: () => St,
-       w: () => vt,
-       x: () => Gt
+       q: () => du,
+       r: () => iu,
+       t: () => mu,
+       u: () => Vu,
+       y: () => Ku
```

#### 100. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L623-L628` → after: `L623-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L623-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L623-L628) · [Before (L623-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L623-L628)

```diff
-     var Ot = Vt(1492),
-       qt = Vt(31),
-       Dt = Vt(1387),
-       mt = Vt(2458),
-       dt = Vt(4980),
-       jt = Vt(4951);
+     var su = ju(1443),
+       Uu = ju(24),
+       Zu = ju(1343),
+       Xu = ju(2516),
+       lu = ju(4986),
+       qu = ju(4962);
```

#### 101. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L658)

```diff
-       return (0, Dt.r)() && !ut
+       return (0, Zu.w)() && !pu
```

#### 102. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L677)

```diff
-       (0, dt.g)(mt.u.Menu, (0, Dt.r)() ? 0 : mt.u.Menu)
+       (0, lu.g)(Xu.x.Menu, (0, Zu.w)() ? 0 : Xu.x.Menu)
```

#### 103. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L703)

```diff
-       return (!Qt || performance.now() - yt > wt) && (Qt = (0, jt.C)().lockPointer(), yt = performance.now()), Qt
+       return (!bu || performance.now() - hu > Yu) && (bu = (0, qu.H)().lockPointer(), hu = performance.now()), bu
```

#### 104. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L711)

```diff
-       return ct() && !Xt && !Nt && !(0, Ot.j)()
+       return ou() && !Cu && !Du && !(0, su.g)()
```

#### 105. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L728)

```diff
-       Mt ? navigator.vendor.startsWith("Apple") ? xt() : bt = Jt : it()
+       gu ? navigator.vendor.startsWith("Apple") ? Hu() : Mu = eu : Lu()
```

#### 106. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L744)

```diff
-       Ct = !0, (0, jt.C)().unlockPointer()
+       Gu = !0, (0, qu.H)().unlockPointer()
```

#### 107. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L755)

```diff
-       qt.j.sw("pointerLockUpdate", Xt)
+       Uu.h.TY("pointerLockUpdate", Cu)
```

#### 108. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L758)

```diff
-   40880: (tt, et, Vt) => {
+   40932: (uu, Eu, ju) => {
```

#### 109. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L761)

```diff
-       g: () => dt,
+       e: () => lu,
```

#### 110. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L763-L766` → after: `L763-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L763-L766) · [Before (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L763-L766)

```diff
-       l: () => Ht,
-       m: () => mt,
-       o: () => Xt,
-       q: () => jt
+       j: () => fu,
+       n: () => Xu,
+       r: () => Cu,
+       t: () => qu
```

#### 111. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L801)

```diff
-   41197: (tt, et, Vt) => {
+   41221: (uu, Eu, ju) => {
```

#### 112. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L806-L820` → after: `L806-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L806-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L806-L820) · [Before (L806-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L806-L820)

```diff
-     var Ot = Vt(2024),
-       qt = Vt(40880),
-       Dt = Vt(4951),
-       mt = Vt(40769),
-       dt = Vt(41174),
-       jt = Vt(39819),
-       Ht = Vt(31),
-       Xt = Vt(4963),
-       Qt = Vt(4960),
-       lt = Vt(40812),
-       Et = Vt(40845),
-       ft = Vt(41201),
-       wt = Vt(40824);
-     (0, wt.j)(Xt.gc.Chat, (tt => {
-       if (tt.payloadKind !== Qt.wc.Msgpack) return;
+     var su = ju(1986),
+       Uu = ju(40932),
+       Zu = ju(4962),
+       Xu = ju(40847),
+       lu = ju(41206),
+       qu = ju(39897),
+       fu = ju(24),
+       Cu = ju(4976),
+       bu = ju(4970),
+       cu = ju(40877),
+       Nu = ju(40904),
+       Ou = ju(41223),
+       Yu = ju(40889);
+     (0, Yu.n)(Cu.mc.Chat, (uu => {
+       if (uu.payloadKind !== bu.ic.Msgpack) return;
```

#### 113. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L829)

```diff
-           serverChatMsgId: null !== et && void 0 !== et ? et : void 0,
+           serverChatMsgId: null !== Eu && void 0 !== Eu ? Eu : void 0,
```

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L833-L834` → after: `L833-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L833-L834) · [Before (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L833-L834)

```diff
-       }((0, lt.c)(tt.payload));
-       null !== et && Ht.j.sw("chat", et, !0)
+       }((0, cu.d)(uu.payload));
+       null !== Eu && fu.h.TY("chat", Eu, !0)
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L837)

```diff
-         chatReceived: (0, jt.j)((function(tt) {
+         chatReceived: (0, qu.h)((function(uu) {
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L841-L843)

```diff
-             name: null !== (et = ft.c.getName(tt)) && void 0 !== et ? et : null,
-             local: (0, Et.c)() === tt,
-             profileEffect: null !== (Vt = null === (Ot = (0, ft.d)(tt)) || void 0 === Ot ? void 0 : Ot.profileEffect) && void 0 !== Vt ? Vt : null
+             name: null !== (Eu = Ou.f.getName(uu)) && void 0 !== Eu ? Eu : null,
+             local: (0, Nu.e)() === uu,
+             profileEffect: null !== (ju = null === (su = (0, Ou.h)(uu)) || void 0 === su ? void 0 : su.profileEffect) && void 0 !== ju ? ju : null
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L851)

```diff
-             kX: Vt,
+             VC: ju,
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L854` → after: `L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L854) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L854)

```diff
-           null === (et = (0, mt.g)()) || void 0 === et || et.clientApi.sendChat(Vt, Ot)
+           null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.clientApi.sendChat(ju, su)
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L857-L860` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L857-L860) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L857-L860)

```diff
-     var Mt = Vt(229),
-       bt = Vt(2043),
-       Jt = Vt(40761),
-       Ct = Vt(39814);
+     var gu = ju(202),
+       Mu = ju(2011),
+       eu = ju(40833),
+       Gu = ju(39891);
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L865)

```diff
-           const Vt = (0, mt.g)();
+           const ju = (0, Xu.l)();
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L868-L869` → after: `L868-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L868-L869) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L868-L869)

```diff
-           if (0 !== (Jt.x.playerFlags(Ot.apiView, 0) & Jt.Pd.Crouching)) return !1;
-           const qt = Ot.queries.directorEntity(Ot.localId) >= Jt.vb.BYTES ? Ot.memoryData(Ot.scratch(), Jt.vb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (eu.u.playerFlags(su.apiView, 0) & eu.td.Crouching)) return !1;
+           const Uu = su.queries.directorEntity(su.localId) >= eu.qb.BYTES ? su.memoryData(su.scratch(), eu.qb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L871-L872` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L872)

```diff
-           for (let Dt = 0; Dt < 3; Dt++) ut[Dt] = Jt.vb.feet(qt, 0, Dt);
-           return ut[1] += Jt.vb.eyeHeight(qt, 0), (0, Ct.e)(ut, tt, null !== (et = bt.b.get("blockReach")) && void 0 !== et ? et : Mt.e.xy)
+           for (let Zu = 0; Zu < 3; Zu++) pu[Zu] = eu.qb.feet(Uu, 0, Zu);
+           return pu[1] += eu.qb.eyeHeight(Uu, 0), (0, Gu.d)(pu, uu, null !== (Eu = Mu.e.get("blockReach")) && void 0 !== Eu ? Eu : gu.e.Bh)
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L878)

```diff
-           null === (et = (0, mt.g)()) || void 0 === et || et.clickCodeBlock(tt)
+           null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.clickCodeBlock(uu)
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L881-L888` → after: `L881-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L888) · [Before (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L888)

```diff
-     var vt = Vt(40785),
-       Wt = Vt(41206),
-       St = Vt(1103),
-       ct = Vt(39226),
-       Rt = Vt(4948),
-       It = Vt(40797),
-       Pt = Vt(40777),
-       Zt = Vt(40804);
+     var du = ju(40856),
+       au = ju(41230),
+       Pu = ju(1069),
+       ou = ju(39344),
+       ku = ju(4958),
+       mu = ju(40864),
+       vu = ju(40854),
+       Ku = ju(40873);
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L895)

```diff
-         if ("de" === tt) {
+         if ("jE" === uu) {
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L900)

```diff
-           } = Vt.de, Dt = Object.keys(tt)[0], mt = tt[Dt];
+           } = ju.jE, Zu = Object.keys(uu)[0], Xu = uu[Zu];
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L913)

```diff
-         return null !== (et = null === (Vt = (0, mt.g)()) || void 0 === Vt ? void 0 : Vt.renderFrame.projectWorldPosToScreenPos(tt)) && void 0 !== et ? et : {
+         return null !== (Eu = null === (ju = (0, Xu.l)()) || void 0 === ju ? void 0 : ju.renderFrame.projectWorldPosToScreenPos(uu)) && void 0 !== Eu ? Eu : {
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L922-L930` → after: `L922-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L930) · [Before (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L930)

```diff
-       kt || (kt = !0, (0, wt.j)(Xt.gc.ProgressBarUpdate, (tt => {
-         const et = (0, Zt.k)(tt);
-         (0, Zt.d)(et) && Ht.j.sw("progressBarUpdate", et, !0)
-       })), (0, wt.j)(It.v, (tt => {
-         const et = (0, Zt.h)(It.v, tt);
-         et && Ht.j.sw("middleScreenBarInitiate", {
-           duration: et.zq,
-           oq: et.oq,
-           horizBarRemOffset: et.rq
+       Qu || (Qu = !0, (0, Yu.n)(Cu.mc.ProgressBarUpdate, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         (0, Ku.e)(Eu) && fu.h.TY("progressBarUpdate", Eu, !0)
+       })), (0, Yu.n)(mu.w, (uu => {
+         const Eu = (0, Ku.g)(mu.w, uu);
+         Eu && fu.h.TY("middleScreenBarInitiate", {
+           duration: Eu.BU,
+           LU: Eu.LU,
+           horizBarRemOffset: Eu.tU
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L932-L935` → after: `L932-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L932-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L935) · [Before (L932-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L935)

```diff
-       })), (0, wt.j)(Xt.gc.RemoveMiddleScreenBar, (() => {
-         Ht.j.sw("middleScreenBarRemove")
-       })), (0, wt.j)(It.Y, (tt => {
-         const et = (0, Zt.h)(It.Y, tt);
+       })), (0, Yu.n)(Cu.mc.RemoveMiddleScreenBar, (() => {
+         fu.h.TY("middleScreenBarRemove")
+       })), (0, Yu.n)(mu.hb, (uu => {
+         const Eu = (0, Ku.g)(mu.hb, uu);
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L938-L940` → after: `L938-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L938-L940) · [Before (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L938-L940)

```diff
-           const tt = et.St ? null === (Vt = (0, mt.g)()) || void 0 === Vt ? void 0 : Vt.renderFrame.projectDirectionToScreenPos(et.St) : void 0;
-           Ht.j.sw("sendHitmarker", {
-             ne: et.ne,
+           const uu = Eu.ku ? null === (ju = (0, Xu.l)()) || void 0 === ju ? void 0 : ju.renderFrame.projectDirectionToScreenPos(Eu.ku) : void 0;
+           fu.h.TY("sendHitmarker", {
+             FE: Eu.FE,
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L944-L945` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L944-L945) · [Before (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L944-L945)

```diff
-       })), (0, wt.j)(It.bb, (tt => {
-         const et = (0, Zt.h)(It.bb, tt);
+       })), (0, Yu.n)(mu.ob, (uu => {
+         const Eu = (0, Ku.g)(mu.ob, uu);
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L951-L952` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L952) · [Before (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L952)

```diff
-             Ae: qt,
-             Ye: Dt
+             KE: Uu,
+             rE: Zu
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L954)

```diff
-           Ht.j.sw("setDirectionArrow", {
+           fu.h.TY("setDirectionArrow", {
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L959)

```diff
-             Ye: Dt
+             rE: Zu
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L962-L964` → after: `L962-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L964) · [Before (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L964)

```diff
-       })), (0, wt.j)(It.e, (tt => {
-         const et = (0, Zt.h)(It.e, tt);
-         et && Ht.j.sw("clearDirectionArrow", {
+       })), (0, Yu.n)(mu.d, (uu => {
+         const Eu = (0, Ku.g)(mu.d, uu);
+         Eu && fu.h.TY("clearDirectionArrow", {
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L967-L972` → after: `L967-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L967-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L967-L972) · [Before (L967-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L967-L972)

```diff
-       })), (0, wt.j)(It.o, (tt => {
-         const et = (0, Zt.h)(It.o, tt);
-         et && Ht.j.sw("flyingMiddleMessage", {
-           content: Lt(et.zD),
-           oD: et.oD,
-           rD: et.rD
+       })), (0, Yu.n)(mu.o, (uu => {
+         const Eu = (0, Ku.g)(mu.o, uu);
+         Eu && fu.h.TY("flyingMiddleMessage", {
+           content: Vu(Eu.SZ),
+           IZ: Eu.IZ,
+           FZ: Eu.FZ
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L974-L975` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L974-L975) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L974-L975)

```diff
-       })), (0, wt.j)(Xt.gc.WorldVariation, (tt => {
-         const et = (0, Zt.k)(tt);
+       })), (0, Yu.n)(Cu.mc.WorldVariation, (uu => {
+         const Eu = (0, Ku.i)(uu);
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L977-L978` → after: `L977-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L977-L978) · [Before (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L977-L978)

```diff
-           const tt = et === St.h ? null : {
-             message: `Currently loaded as variation: ${et}`,
+           const uu = Eu === Pu.f ? null : {
+             message: `Currently loaded as variation: ${Eu}`,
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L981` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L981) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L981)

```diff
-           Ht.j.sw("showPermanentBottomMessage", tt, !0)
+           fu.h.TY("showPermanentBottomMessage", uu, !0)
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L983-L984` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L983-L984) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L983-L984)

```diff
-       })), (0, wt.j)(It.H, (tt => {
-         const et = (0, Zt.h)(It.H, tt);
+       })), (0, Yu.n)(mu.L, (uu => {
+         const Eu = (0, Ku.g)(mu.L, uu);
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L989` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L989) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L989)

```diff
-           } = (0, ct.f)(et), qt = {
+           } = (0, ou.i)(Eu), Uu = {
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L995)

```diff
-             "boolean" === typeof et && (null === (Vt = (0, mt.g)()) || void 0 === Vt || Vt.send(Pt.c.QteResponse, {
+             "boolean" === typeof Eu && (null === (ju = (0, Xu.l)()) || void 0 === ju || ju.send(vu.c.QteResponse, {
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1000-L1002` → after: `L1000-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1000-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1000-L1002) · [Before (L1000-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1000-L1002)

```diff
-         }(et.id, et.gt)
-       })), (0, wt.j)(It.T, (tt => {
-         const et = (0, Zt.h)(It.T, tt);
+         }(Eu.id, Eu.Hu)
+       })), (0, Yu.n)(mu._, (uu => {
+         const Eu = (0, Ku.g)(mu._, uu);
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1004` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1004) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1004)

```diff
-       })), (0, wt.f)((() => {
+       })), (0, Yu.i)((() => {
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1006)

```diff
-       })), (0, wt.g)((() => {
+       })), (0, Yu.k)((() => {
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1008-L1010` → after: `L1008-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1008-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1008-L1010) · [Before (L1008-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1008-L1010)

```diff
-       })), (0, wt.j)(Xt.gc.EditItemCraftingRecipes, (tt => {
-         const et = (0, Zt.k)(tt);
-         (0, Zt.d)(et) && Ht.j.sw("craftingRecipesEdited", {
+       })), (0, Yu.n)(Cu.mc.EditItemCraftingRecipes, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         (0, Ku.e)(Eu) && fu.h.TY("craftingRecipesEdited", {
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1014-L1017` → after: `L1014-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1014-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1017) · [Before (L1014-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1017)

```diff
-       })), (0, wt.j)(It.Q, (tt => {
-         const et = (0, Zt.h)(It.Q, tt);
-         et && Ht.j.sw("craftingRecipesEdited", {
-           itemName: et.Gq,
+       })), (0, Yu.n)(mu.W, (uu => {
+         const Eu = (0, Ku.g)(mu.W, uu);
+         Eu && fu.h.TY("craftingRecipesEdited", {
+           itemName: Eu.FU,
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1022` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1022) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1022)

```diff
-     var zt = Vt(26);
+     var Wu = ju(22);
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1038` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1038) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1038)

```diff
-       return Jt.x.playerFlags(tt.api.apiView, 0)
+       return eu.u.playerFlags(uu.api.apiView, 0)
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1041-L1043` → after: `L1041-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1041-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1041-L1043) · [Before (L1041-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1041-L1043)

```diff
-         freeCamera: (0, Et.b)((tt => () => {
-           const et = tt.isSessionLive && 0 !== (rt(tt) & Jt.Pd.FreeCamMoves),
-             Vt = tt.freeCameraAllowed() && null === zt.b.get("scriptedCameraFacing");
+         freeCamera: (0, Nu.c)((uu => () => {
+           const Eu = uu.isSessionLive && 0 !== (Iu(uu) & eu.td.FreeCamMoves),
+             ju = uu.freeCameraAllowed() && null === Wu.d.get("scriptedCameraFacing");
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1045)

```diff
-         }), ot[0], (tt => (0, Dt.o)(tt)))
+         }), Su[0], (uu => (0, Zu.t)(uu)))
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1050)

```diff
-           null === (et = (0, mt.g)()) || void 0 === et || et.setFreeCameraMovesFly(tt)
+           null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.setFreeCameraMovesFly(uu)
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1055-L1056` → after: `L1055-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1055-L1056) · [Before (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1055-L1056)

```diff
-           const tt = (0, mt.g)();
-           return null !== tt && void 0 !== tt && tt.isSessionLive && tt.renderFrame.hasView && 0 !== (rt(tt) & Jt.Pd.FreeCam) ? tt.renderFrame.cameraPosition : null
+           const uu = (0, Xu.l)();
+           return null !== uu && void 0 !== uu && uu.isSessionLive && uu.renderFrame.hasView && 0 !== (Iu(uu) & eu.td.FreeCam) ? uu.renderFrame.cameraPosition : null
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1059` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1059) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1059)

```diff
-     var Yt = Vt(39387);
+     var tu = ju(39497);
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1064` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1064) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1064)

```diff
-       const tt = (0, mt.g)();
+       const uu = (0, Xu.l)();
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1066-L1073` → after: `L1066-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1066-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1066-L1073) · [Before (L1066-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1066-L1073)

```diff
-       const et = 0 !== (Jt.x.playerFlags(tt.api.apiView, 0) & Jt.Pd.FreeCam);
-       et !== Bt && (Bt = et, (0, Yt.e)(et))
-     }
-     var Tt = Vt(391),
-       gt = Vt(37273),
-       st = Vt(2054);
-     var nt = Vt(41215),
-       te = Vt(40840);
+       const Eu = 0 !== (eu.u.playerFlags(uu.api.apiView, 0) & eu.td.FreeCam);
+       Eu !== xu && (xu = Eu, (0, tu.d)(Eu))
+     }
+     var Au = ju(349),
+       nu = ju(37428),
+       yu = ju(2019);
+     var zu = ju(41235),
+       Ru = ju(40901);
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1084)

```diff
-         label: null !== (et = (0, nt.b)(tt, "interactionPrompt")) && void 0 !== et ? et : null
+         label: null !== (Eu = (0, zu.c)(uu, "interactionPrompt")) && void 0 !== Eu ? Eu : null
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1088-L1089` → after: `L1088-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1089) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1089)

```diff
-       [Jt.vc.Open, {
-         label: jt.e.open
+       [eu.mc.Open, {
+         label: qu.c.open
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1091-L1092` → after: `L1091-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1092) · [Before (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1092)

```diff
-       [Jt.vc.Close, {
-         label: jt.e.close
+       [eu.mc.Close, {
+         label: qu.c.close
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1094-L1095` → after: `L1094-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1094-L1095) · [Before (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1094-L1095)

```diff
-       [Jt.vc.Milk, {
-         label: jt.e.milk
+       [eu.mc.Milk, {
+         label: qu.c.milk
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1097-L1098` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1097-L1098) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1097-L1098)

```diff
-       [Jt.vc.Shear, {
-         label: jt.e.shear
+       [eu.mc.Shear, {
+         label: qu.c.shear
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1100-L1101` → after: `L1100-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1100-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1100-L1101) · [Before (L1100-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1100-L1101)

```diff
-       [Jt.vc.Tame, {
-         label: jt.e.tame
+       [eu.mc.Tame, {
+         label: qu.c.tame
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1103-L1104` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1103-L1104) · [Before (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1103-L1104)

```diff
-       [Jt.vc.Feed, {
-         label: jt.e.feed
+       [eu.mc.Feed, {
+         label: qu.c.feed
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1106-L1107` → after: `L1106-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1106-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1106-L1107) · [Before (L1106-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1106-L1107)

```diff
-       [Jt.vc.Ride, {
-         label: jt.e.ride
+       [eu.mc.Ride, {
+         label: qu.c.ride
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1112` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1112) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1112)

```diff
-         this.target = ee, this.qd = Jt.ld, this.optionName = null, this.pickaxe = new jt.b
+         this.target = uE, this.ul = eu.Tc, this.optionName = null, this.pickaxe = new qu.b
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1116-L1118` → after: `L1116-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1116-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1116-L1118) · [Before (L1116-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1116-L1118)

```diff
-         const Vt = Jt.x.targetBlockId(tt.api.apiView, 0);
-         Vt !== this.qd && (this.qd = Vt, this.optionName = Vt === Jt.ld ? null : `${tt.tables.getMetaInfo(Vt).rootName}CrosshairText`);
-         const Ot = null === this.optionName ? null : null !== (et = tt.tables.getClientOption(this.optionName)) && void 0 !== et ? et : null;
+         const ju = eu.u.targetBlockId(uu.api.apiView, 0);
+         ju !== this.ul && (this.ul = ju, this.optionName = ju === eu.Tc ? null : `${uu.tables.getMetaInfo(ju).rootName}CrosshairText`);
+         const su = null === this.optionName ? null : null !== (Eu = uu.tables.getClientOption(this.optionName)) && void 0 !== Eu ? Eu : null;
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1121)

```diff
-           if (0 === (Jt.x.playerFlags(tt.api.apiView, 0) & Jt.Pd.Breaking) || et === Jt.ld || 0 === et) return null;
+           if (0 === (eu.u.playerFlags(uu.api.apiView, 0) & eu.td.Breaking) || Eu === eu.Tc || 0 === Eu) return null;
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1127-L1129` → after: `L1127-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1129) · [Before (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1129)

```diff
-             dt = null === (Vt = tt.items.Pd()) || void 0 === Vt ? void 0 : Vt.name,
-             jt = null !== (Ot = Dt.getItemStat(mt, "harvestLevel")) && void 0 !== Ot ? Ot : 0;
-           return (0, Tt.Ic)({
+             lu = null === (ju = uu.items.dl()) || void 0 === ju ? void 0 : ju.name,
+             qu = null !== (su = Zu.getItemStat(Xu, "harvestLevel")) && void 0 !== su ? su : 0;
+           return (0, Au.Gc)({
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1135` → after: `L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1135) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1135)

```diff
-           }) && null !== (qt = gt.p[jt]) && void 0 !== qt ? qt : null
+           }) && null !== (Uu = nu.n[qu]) && void 0 !== Uu ? Uu : null
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1140-L1142` → after: `L1140-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1140-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1140-L1142) · [Before (L1140-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1140-L1142)

```diff
-           return Vt === Jt.vc.Entity ? Oe(tt.promptEntity) : Vt === Jt.vc.TameWith ? {
-             label: (0, jt.v)(tt.tables.nameOfId(tt.interactIcon))
-           } : null !== (et = qe.get(Vt)) && void 0 !== et ? et : null
+           return ju === eu.mc.Entity ? jE(uu.promptEntity) : ju === eu.mc.TameWith ? {
+             label: (0, qu.p)(uu.tables.nameOfId(uu.interactIcon))
+           } : null !== (Eu = sE.get(ju)) && void 0 !== Eu ? Eu : null
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1155)

```diff
-         return null !== (tt = null === (et = me) || void 0 === et ? void 0 : et.target) && void 0 !== tt ? tt : ee
+         return null !== (uu = null === (Eu = ZE) || void 0 === Eu ? void 0 : Eu.target) && void 0 !== uu ? uu : uE
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1160)

```diff
-         const Vt = (0, Et.d)((Vt => {
+         const ju = (0, Nu.g)((ju => {
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1163` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1163) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1163)

```diff
-           const qt = (0, Dt.p)((() => {
+           const Uu = (0, Zu.u)((() => {
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1179-L1180` → after: `L1179-L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1179-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1180) · [Before (L1179-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1180)

```diff
-         health: jt.p,
-         aura: jt.i,
+         health: qu.m,
+         aura: qu.d,
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1183-L1184)

```diff
-         crouching: (0, Et.b)((tt => function(tt) {
-           const et = () => 0 !== (Jt.x.playerFlags(tt.apiView, 0) & Jt.Pd.Crouching);
+         crouching: (0, Nu.c)((uu => function(uu) {
+           const Eu = () => 0 !== (eu.u.playerFlags(uu.apiView, 0) & eu.td.Crouching);
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1189` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1189) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1189)

```diff
-               return (0, Dt.o)((() => {
+               return (0, Zu.t)((() => {
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1195-L1200` → after: `L1195-L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1195-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1195-L1200) · [Before (L1195-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1195-L1200)

```diff
-         }(tt.api).current), !1, (tt => (0, Dt.o)(tt))),
-         flight: (0, Et.b)((tt => () => function(tt) {
-           const et = Jt.x.playerFlags(tt.apiView, 0);
-           return (0, jt.l)(0 !== (et & Jt.Pd.CanFly), 0 !== (et & Jt.Pd.Flying))
-         }(tt.api)), (0, jt.l)(!1, !1), (tt => (0, Dt.o)(tt))),
-         gliderBoostFuel: (0, Et.b)((tt => () => Jt.x.gliderBoostFuel(tt.api.apiView, 0)), 0, (tt => (0, Dt.o)(tt))),
+         }(uu.api).current), !1, (uu => (0, Zu.t)(uu))),
+         flight: (0, Nu.c)((uu => () => function(uu) {
+           const Eu = eu.u.playerFlags(uu.apiView, 0);
+           return (0, qu.j)(0 !== (Eu & eu.td.CanFly), 0 !== (Eu & eu.td.Flying))
+         }(uu.api)), (0, qu.j)(!1, !1), (uu => (0, Zu.t)(uu))),
+         gliderBoostFuel: (0, Nu.c)((uu => () => eu.u.gliderBoostFuel(uu.api.apiView, 0)), 0, (uu => (0, Zu.t)(uu))),
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1207` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1207) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1207)

```diff
-         shotDamageToShow: (0, jt.t)((tt => !0 === (0, nt.b)(tt, "showDamageAmounts")))
+         shotDamageToShow: (0, qu.o)((uu => !0 === (0, zu.c)(uu, "showDamageAmounts")))
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1218)

```diff
-           const Ot = (0, mt.g)(),
+           const su = (0, Xu.l)(),
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1220-L1221` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221)

```diff
-             Dt = null === Ot || void 0 === Ot || null === (tt = Ot.items.Pd()) || void 0 === tt || null === (et = tt.attributes) || void 0 === et || null === (Vt = et.customAttributes) || void 0 === Vt ? void 0 : Vt.enchantments;
-           return je = null !== Ot && null !== Dt && void 0 !== Dt && Dt.Momentum ? 0 !== (Jt.x.playerFlags(Ot.api.apiView, 0) & Jt.Pd.Breaking) ? Math.max(0, Jt.x.momentumFrac(Ot.api.apiView, 0)) : Math.max(0, je - (qt - He) / 1500) : 0, He = qt, je
+             Zu = null === su || void 0 === su || null === (uu = su.items.dl()) || void 0 === uu || null === (Eu = uu.attributes) || void 0 === Eu || null === (ju = Eu.customAttributes) || void 0 === ju ? void 0 : ju.enchantments;
+           return lE = null !== su && null !== Zu && void 0 !== Zu && Zu.Momentum ? 0 !== (eu.u.playerFlags(su.api.apiView, 0) & eu.td.Breaking) ? Math.max(0, eu.u.momentumFrac(su.api.apiView, 0)) : Math.max(0, lE - (Uu - qE) / 1500) : 0, qE = Uu, lE
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1224)

```diff
-     var fe = Vt(40767);
+     var NE = ju(40840);
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1228` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1228) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1228)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.LobbyManage, tt)
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.LobbyManage, uu)
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1231-L1236` → after: `L1231-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1231-L1236) · [Before (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1231-L1236)

```diff
-     var ye = Vt(1325),
-       Ne = Vt(36745),
-       ae = Vt(9032),
-       Me = Vt(1732),
-       be = Vt(2458),
-       Je = Vt(4971);
+     var YE = ju(1298),
+       hE = ju(36876),
+       DE = ju(9006),
+       gE = ju(1687),
+       ME = ju(2516),
+       eE = ju(4979);
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1244)

```diff
-       "inGame" !== zt.b.get("gameState") || (0, Me.u)() || Ht.j.sw("ctrlCrouchWithoutFullscreen")
+       "inGame" !== Wu.d.get("gameState") || (0, gE.t)() || fu.h.TY("ctrlCrouchWithoutFullscreen")
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1250)

```diff
-             he && (he = !1, Ht.j.sw("requestEmoteWheelHoldOpen"))
+             JE && (JE = !1, fu.h.TY("requestEmoteWheelHoldOpen"))
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1254)

```diff
-           Ht.j.sw("toggleFullCoordinateOverlay")
+           fu.h.TY("toggleFullCoordinateOverlay")
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1257)

```diff
-           (0, Ne.e)() || Ht.j.sw("YKeyPressed")
+           (0, hE.c)() || fu.h.TY("YKeyPressed")
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1260)

```diff
-           (0, Ne.e)() || Ht.j.sw("XKeyPressed")
+           (0, hE.c)() || fu.h.TY("XKeyPressed")
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1264-L1265` → after: `L1264-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1264-L1265) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1264-L1265)

```diff
-           Ht.j.sw("mouseState", {
-             iX: ye.c.DownFirePrimary,
+           fu.h.TY("mouseState", {
+             FC: YE.b.DownFirePrimary,
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1270-L1271` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1270-L1271) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1270-L1271)

```diff
-           Ht.j.sw("mouseState", {
-             iX: ye.c.DownFireSecondary,
+           fu.h.TY("mouseState", {
+             FC: YE.b.DownFireSecondary,
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1276-L1277` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1276-L1277) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1276-L1277)

```diff
-           Ht.j.sw("mouseState", {
-             iX: ye.c.TouchDownLong,
+           fu.h.TY("mouseState", {
+             FC: YE.b.TouchDownLong,
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1284)

```diff
-           ue(!1), he ? (he = !1, (0, ae.b)() || Ht.j.sw("requestEmoteWheelHoldOpen")) : Ht.j.sw("requestEmoteWheelHoldRelease")
+           pE(!1), JE ? (JE = !1, (0, DE.c)() || fu.h.TY("requestEmoteWheelHoldOpen")) : fu.h.TY("requestEmoteWheelHoldRelease")
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1288-L1289` → after: `L1288-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1288-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1288-L1289) · [Before (L1288-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1288-L1289)

```diff
-           Ht.j.sw("mouseState", {
-             iX: ye.c.UpFirePrimary,
+           fu.h.TY("mouseState", {
+             FC: YE.b.UpFirePrimary,
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1294-L1295` → after: `L1294-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1294-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1294-L1295) · [Before (L1294-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1294-L1295)

```diff
-           Ht.j.sw("mouseState", {
-             iX: ye.c.UpFireSecondary,
+           fu.h.TY("mouseState", {
+             FC: YE.b.UpFireSecondary,
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1300-L1301` → after: `L1300-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1300-L1301) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1300-L1301)

```diff
-           Ht.j.sw("mouseState", {
-             iX: ye.c.UpFirePrimary,
+           fu.h.TY("mouseState", {
+             FC: YE.b.UpFirePrimary,
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1309)

```diff
-       Se || (Se = !0, (0, Je.i)((tt => {
+       PE || (PE = !0, (0, eE.f)((uu => {
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1311)

```diff
-         const et = (0, Je.e)(tt) ? "primary-fire" : tt.action;
+         const Eu = (0, eE.c)(uu) ? "primary-fire" : uu.action;
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1321-L1326` → after: `L1321-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1321-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1321-L1326) · [Before (L1321-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1321-L1326)

```diff
-     var Re = Vt(377),
-       Ie = Vt(106),
-       Pe = Vt(39),
-       Ze = Vt(41068),
-       Le = Vt(1423),
-       Fe = Vt(2486);
+     var kE = ju(337),
+       mE = ju(91),
+       vE = ju(31),
+       KE = ju(41110),
+       VE = ju(1369),
+       rE = ju(2533);
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1331` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1331) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1331)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.CodeCollab, (0, Pt.n)(tt), (0, Fe.d)(tt))
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.CodeCollab, (0, vu.n)(uu), (0, rE.d)(uu))
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1334-L1335)

```diff
-     var ze = Vt(39316),
-       oe = Vt(8943);
+     var WE = ju(39416),
+       SE = ju(8944);
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1341)

```diff
-       return "inGame" === zt.b.get("gameState") && !(0, Ne.e)()
+       return "inGame" === Wu.d.get("gameState") && !(0, hE.c)()
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1345)

```diff
-           (0, Me.C)(tt, "inventory", (0, fe.n)())
+           (0, gE.z)(uu, "inventory", (0, NE.p)())
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1348)

```diff
-           re && ie() && (0, Me.y)(tt, Re.o.SHOP, !re.shopIsEmpty(bt.b.get("shopInfo")))
+           IE && LE() && (0, gE.x)(uu, kE.o.SHOP, !IE.shopIsEmpty(Mu.e.get("shopInfo")))
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1351-L1353` → after: `L1351-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1351-L1353) · [Before (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1351-L1353)

```diff
-           ie() && (0, Me.y)(tt, Re.o.LOBBY_LEADERBOARD, (0, ze.d)({
-             lobbyLeaderboardInfo: bt.b.get("lobbyLeaderboardInfo"),
-             lobbyManage: bt.b.get("lobbyManage")
+           LE() && (0, gE.x)(uu, kE.o.LOBBY_LEADERBOARD, (0, WE.c)({
+             lobbyLeaderboardInfo: Mu.e.get("lobbyLeaderboardInfo"),
+             lobbyManage: Mu.e.get("lobbyManage")
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1359)

```diff
-           Vt ? (0, Me.G)(tt, !0, Vt) : (0, Me.C)(tt, "retentionFeatures", !(!bt.b.get("_tasks") && !bt.b.get("_availableLeaderboards")))
+           ju ? (0, gE.D)(uu, !0, ju) : (0, gE.z)(uu, "retentionFeatures", !(!Mu.e.get("_tasks") && !Mu.e.get("_availableLeaderboards")))
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1362)

```diff
-           (0, Me.C)(tt, "inviteLink", Ie.featureFlags.canUseInviteLinks)
+           (0, gE.z)(uu, "inviteLink", mE.featureFlags.canUseInviteLinks)
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1366` → after: `L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1366) · [Before (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1366)

```diff
-             const et = (0, mt.g)(),
+             const Eu = (0, Xu.l)(),
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1368-L1370` → after: `L1368-L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1368-L1370) · [Before (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1368-L1370)

```diff
-               Ot = Vt ? Vt.YM(Vt.localId) : null;
-             (0, Me.G)(tt, null !== Ot && (0, Fe.b)((0, Le.c)()), (() => {
-               (0, Fe.f)(Ot)
+               su = ju ? ju.bM(ju.localId) : null;
+             (0, gE.D)(uu, null !== su && (0, rE.b)((0, VE.b)()), (() => {
+               (0, rE.h)(su)
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1375` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1375) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1375)

```diff
-           Ht.j.sw("showUi", !1)
+           fu.h.TY("showUi", !1)
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1380)

```diff
-           Ht.j.sw("showUi", !0)
+           fu.h.TY("showUi", !0)
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1385)

```diff
-       Ue || (Ue = !0, Vt.e(159).then((() => Vt(60836))).then((tt => {
+       FE || (FE = !0, ju.e(159).then((() => ju(60866))).then((uu => {
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1389-L1390` → after: `L1389-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1389-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1390) · [Before (L1389-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1390)

```diff
-       })), (0, Ze.C)((tt => {
-         tt || !(0, Ze.l)() || (0, Ie.isMobile)() || !Pe.e.getItem("disableFullscreen") || (0, Me.q)() || zt.b.set({
+       })), (0, KE.u)((uu => {
+         uu || !(0, KE.i)() || (0, mE.isMobile)() || !vE.k.getItem("disableFullscreen") || (0, gE.s)() || Wu.d.set({
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1393` → after: `L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1393) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1393)

```diff
-       })), (0, Je.i)((tt => {
+       })), (0, eE.f)((uu => {
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1415-L1417` → after: `L1415-L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1415-L1417) · [Before (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1415-L1417)

```diff
-     var xe = Vt(39221),
-       Te = Vt(39208),
-       ge = Vt(39202);
+     var HE = ju(39336),
+       AE = ju(39327),
+       nE = ju(39320);
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1421)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.CompleteTask, (0, Pt.o)(tt))
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.CompleteTask, (0, vu.r)(uu))
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1429-L1431` → after: `L1429-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1429-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1429-L1431) · [Before (L1429-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1429-L1431)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.GeneralCookieSet, (0, Pt.s)({
-           Qd: Vt,
-           ld: Ot
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.GeneralCookieSet, (0, vu.w)({
+           Xl: ju,
+           ll: su
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1438` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1438) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1438)

```diff
-           KX: Ot
+           eC: su
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1440-L1443` → after: `L1440-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1440-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1440-L1443) · [Before (L1440-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1440-L1443)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.UiRequestResp, (0, Pt.Q)({
-           aj: Vt,
-           Mj: Ot,
-           bj: 5
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.UiRequestResp, (0, vu.U)({
+           qq: ju,
+           fq: su,
+           Cq: 5
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1450)

```diff
-           KX: Ot
+           eC: su
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1452)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.UiRequestResponded, (0, Pt.P)({
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.UiRequestResponded, (0, vu.S)({
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1454)

```diff
-           KX: Ot
+           eC: su
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1464)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.LeaderboardRequest, {
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.LeaderboardRequest, {
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1472)

```diff
-     const tV = Mt.e.iy / 2,
+     const RE = gu.e.Sh / 2,
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1483)

```diff
-         const tt = (0, mt.g)();
+         const uu = (0, Xu.l)();
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1499)

```diff
-           const lt = Vt.qd(Dt, jt, Qt);
+           const cu = ju.ul(Zu, qu, bu);
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1505-L1506` → after: `L1505-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1505-L1506) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1505-L1506)

```diff
-         const tt = (0, mt.g)();
-         return null !== tt && 0 !== (Jt.x.playerFlags(tt.api.apiView, 0) & Jt.Pd.DropAhead)
+         const uu = (0, Xu.l)();
+         return null !== uu && 0 !== (eu.u.playerFlags(uu.api.apiView, 0) & eu.td.DropAhead)
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1509-L1512` → after: `L1509-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1509-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1512) · [Before (L1509-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1512)

```diff
-     var DV = Vt(37185),
-       mV = Vt(39288),
-       dV = Vt(1450),
-       jV = Vt(40853);
+     var Uj = ju(37349),
+       Zj = ju(39392),
+       Xj = ju(1405),
+       lj = ju(40912);
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1538` → after: `L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1538) · [Before (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1538)

```diff
-           const et = (0, ft.b)((et => {
+           const Eu = (0, Ou.e)((Eu => {
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1542-L1544` → after: `L1542-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1542-L1544) · [Before (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1542-L1544)

```diff
-           let Vt = (0, Et.c)();
-           const dt = (0, Dt.p)((() => {
-             const et = (0, Et.c)();
+           let ju = (0, Nu.e)();
+           const lu = (0, Zu.u)((() => {
+             const Eu = (0, Nu.e)();
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1555)

```diff
-           const tt = ft.c.ids(),
+           const uu = Ou.f.ids(),
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1560-L1562` → after: `L1560-L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1560-L1562) · [Before (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1560-L1562)

```diff
-               name: null !== (Vt = ft.c.getName(Dt)) && void 0 !== Vt ? Vt : null,
-               ranks: null !== (Ot = ft.c.getSetting(Dt, "ranks")) && void 0 !== Ot ? Ot : lV,
-               cosmetics: null !== (qt = (0, ft.d)(Dt)) && void 0 !== qt ? qt : null
+               name: null !== (ju = Ou.f.getName(Zu)) && void 0 !== ju ? ju : null,
+               ranks: null !== (su = Ou.f.getSetting(Zu, "ranks")) && void 0 !== su ? su : bj,
+               cosmetics: null !== (Uu = (0, Ou.h)(Zu)) && void 0 !== Uu ? Uu : null
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1568)

```diff
-             localId: (0, Et.c)()
+             localId: (0, Nu.e)()
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1576)

```diff
-           for (const qt of ft.c.ids()) {
+           for (const Uu of Ou.f.ids()) {
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1579-L1581` → after: `L1579-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1579-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1579-L1581) · [Before (L1579-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1579-L1581)

```diff
-               colour: null !== (et = ft.c.getSetting(qt, "colorInLobbyLeaderboard")) && void 0 !== et ? et : null,
-               values: null !== (Vt = ft.c.getSetting(qt, "lobbyLeaderboardValues")) && void 0 !== Vt ? Vt : null,
-               tags: null !== (Ot = ft.c.getSetting(qt, "lobbyLeaderboardTags")) && void 0 !== Ot ? Ot : null
+               colour: null !== (Eu = Ou.f.getSetting(Uu, "colorInLobbyLeaderboard")) && void 0 !== Eu ? Eu : null,
+               values: null !== (ju = Ou.f.getSetting(Uu, "lobbyLeaderboardValues")) && void 0 !== ju ? ju : null,
+               tags: null !== (su = Ou.f.getSetting(Uu, "lobbyLeaderboardTags")) && void 0 !== su ? su : null
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1599` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1599) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1599)

```diff
-           watch: tt => (0, ft.b)((et => {
+           watch: uu => (0, Ou.e)((Eu => {
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1601` → after: `L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1601) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1601)

```diff
-             const Vt = (0, Et.c)();
+             const ju = (0, Nu.e)();
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1604-L1606` → after: `L1604-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1604-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1604-L1606) · [Before (L1604-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1604-L1606)

```diff
-                 FD: et,
-                 kD: Ot,
-                 GD: qt
+                 QZ: Eu,
+                 iZ: su,
+                 WZ: Uu
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1610-L1611` → after: `L1610-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1610-L1611) · [Before (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1610-L1611)

```diff
-                 kD: Ot,
-                 GD: qt
+                 iZ: su,
+                 WZ: Uu
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1617-L1620` → after: `L1617-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1617-L1620) · [Before (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1617-L1620)

```diff
-     var yV = Vt(2990),
-       NV = Vt(1826),
-       aV = Vt(738),
-       MV = Vt(41115);
+     var Yj = ju(3074),
+       hj = ju(1779),
+       Dj = ju(701),
+       gj = ju(41149);
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1626)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.ShopMenuChanged, (0, Pt.J)(tt))
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.ShopMenuChanged, (0, vu.K)(uu))
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1635)

```diff
-         null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.ItemBought, {
+         null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.ItemBought, {
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1638)

```diff
-           shopVersion: bt.b.get("_shopVersion"),
+           shopVersion: Mu.e.get("_shopVersion"),
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1644-L1645` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1644-L1645) · [Before (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1644-L1645)

```diff
-     var KV = Vt(4980);
-     const hV = be.u.LookFrozen | be.u.ClicksSuppressed;
+     var wj = ju(4986);
+     const Jj = ME.x.LookFrozen | ME.x.ClicksSuppressed;
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1649-L1652` → after: `L1649-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1649-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1649-L1652) · [Before (L1649-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1649-L1652)

```diff
-       null !== (Vt = (0, mt.g)()) && void 0 !== Vt && Vt.send(tt, et) || console.warn(`[bloxd-wasm-client] message ${tt} not sent: no live game or the core's command ring is full`)
-     }(0, wt.j)(It.eb, (tt => {
-       const et = (0, Zt.h)(It.eb, tt);
-       void 0 !== et && Ht.j.sw("setDiscordReportKey", et)
+       null !== (ju = (0, Xu.l)()) && void 0 !== ju && ju.send(uu, Eu) || console.warn(`[bloxd-wasm-client] message ${uu} not sent: no live game or the core's command ring is full`)
+     }(0, Yu.n)(mu.qb, (uu => {
+       const Eu = (0, Ku.g)(mu.qb, uu);
+       void 0 !== Eu && fu.h.TY("setDiscordReportKey", Eu)
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1656-L1657` → after: `L1656-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1656-L1657) · [Before (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1656-L1657)

```diff
-         vV(Pt.c.IgnoreUser, (0, Pt.t)({
-           Jj: tt
+         dj(vu.c.IgnoreUser, (0, vu.y)({
+           bq: uu
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1664)

```diff
-           Ed: Ot,
+           ql: su,
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1667-L1671` → after: `L1667-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1667-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1667-L1671) · [Before (L1667-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1667-L1671)

```diff
-         vV(Pt.c.UserReport, (0, Pt._)({
-           JX: et,
-           CX: Vt,
-           Ed: Ot,
-           fd: qt
+         dj(vu.c.UserReport, (0, vu.gb)({
+           DC: Eu,
+           gC: ju,
+           ql: su,
+           fl: Uu
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1677)

```diff
-           Ed: Vt,
+           ql: ju,
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1680-L1684` → after: `L1680-L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1680-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1684) · [Before (L1680-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1684)

```diff
-         vV(Pt.c.UserReport, (0, Pt._)({
-           JX: "",
-           CX: et,
-           Ed: Vt,
-           fd: Ot
+         dj(vu.c.UserReport, (0, vu.gb)({
+           DC: "",
+           gC: Eu,
+           ql: ju,
+           fl: su
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1688)

```diff
-         vV(Pt.c.ReqDiscordReportKey, (0, Pt.F)(tt))
+         dj(vu.c.ReqDiscordReportKey, (0, vu.E)(uu))
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1693` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1693) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1693)

```diff
-           Ed: Vt,
+           ql: ju,
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1696-L1701` → after: `L1696-L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1696-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1696-L1701) · [Before (L1696-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1696-L1701)

```diff
-         "customGame" === et ? vV(Pt.c.CustomGameReport, (0, Pt.q)({
-           Ed: Vt,
-           fd: Ot
-         })) : vV(Pt.c.LobbyReport, (0, Pt.w)({
-           Ed: Vt,
-           fd: Ot
+         "customGame" === Eu ? dj(vu.c.CustomGameReport, (0, vu.s)({
+           ql: ju,
+           fl: su
+         })) : dj(vu.c.LobbyReport, (0, vu.A)({
+           ql: ju,
+           fl: su
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1705)

```diff
-         vV(Pt.c.UpdateMyCosmetic, (0, Pt.W)(tt))
+         dj(vu.c.UpdateMyCosmetic, (0, vu.cb)(uu))
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1708` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1708) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1708)

```diff
-         !tt || Ce ? (0, KV.g)(hV, tt ? hV : 0) : Ht.j.sw("requestEmoteWheelHoldRelease")
+         !uu || GE ? (0, wj.g)(Jj, uu ? Jj : 0) : fu.h.TY("requestEmoteWheelHoldRelease")
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1711-L1713` → after: `L1711-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1711-L1713) · [Before (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1711-L1713)

```diff
-     var SV = Vt(41219),
-       cV = Vt(9425),
-       RV = Vt(39832);
+     var Pj = ju(41242),
+       oj = ju(9409),
+       kj = ju(39910);
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1723)

```diff
-           const Ot = (0, mt.g)();
+           const su = (0, Xu.l)();
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1731)

```diff
-           return (0, RV.h)(((tt, et, Vt) => (jt = Dt.getBlockId(tt, et, Vt), 0 !== jt)), qt.cameraPosition, (0, RV.k)((tt => Jt.x.viewProj(dt.apiView, 0, tt)), et, Vt, IV), RV.d, PV, ZV) ? {
+           return (0, kj.f)(((uu, Eu, ju) => (qu = Zu.getBlockId(uu, Eu, ju), 0 !== qu)), Uu.cameraPosition, (0, kj.j)((uu => eu.u.viewProj(lu.apiView, 0, uu)), Eu, ju, mj), kj.e, vj, Kj) ? {
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1734)

```diff
-             name: (0, cV.d)(jt)
+             name: (0, oj.e)(qu)
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1741` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1741) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1741)

```diff
-           null === (et = (0, mt.g)()) || void 0 === et || et.setBlockHighlight(tt)
+           null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.setBlockHighlight(uu)
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1744-L1751` → after: `L1744-L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1744-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1744-L1751) · [Before (L1744-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1744-L1751)

```diff
-     var kV = Vt(2034),
-       GV = Vt(41098),
-       zV = Vt(41222),
-       oV = Vt(4630),
-       rV = Vt(4606),
-       UV = Vt(41229),
-       AV = Vt(3346),
-       iV = Vt(3349);
+     var Qj = ju(1999),
+       ij = ju(41138),
+       Wj = ju(41247),
+       Sj = ju(4679),
+       Ij = ju(4647),
+       Fj = ju(41252),
+       Bj = ju(3475),
+       Lj = ju(3482);
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1756-L1757` → after: `L1756-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1756-L1757) · [Before (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1756-L1757)

```diff
-       const et = tt.startsWith(iV.p),
-         [Vt, Ot = Vt, qt = Vt] = (et ? tt.slice(iV.p.length) : tt).split(iV.l);
+       const Eu = uu.startsWith(Lj.l),
+         [ju, su = ju, Uu = ju] = (Eu ? uu.slice(Lj.l.length) : uu).split(Lj.j);
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1771-L1775` → after: `L1771-L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1771-L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1775) · [Before (L1771-L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1775)

```diff
-     var TV = Vt(3344),
-       gV = Vt(4595),
-       sV = Vt(4626),
-       nV = Vt(41146),
-       tO = Vt(41231);
+     var Aj = ju(3467),
+       nj = ju(4635),
+       yj = ju(4675),
+       zj = ju(41170),
+       Rj = ju(41255);
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1785-L1787` → after: `L1785-L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1785-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1785-L1787) · [Before (L1785-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1785-L1787)

```diff
-       return dO || (dO = !0, (0, sV.k)().then((tt => {
-         tt && (0, kV.e)()
-       }))), qO ??= Promise.all([(0, TV.g)(), (BV ??= Vt.e(1).then((() => Vt(60850))).then((tt => {
+       return ls || (ls = !0, (0, yj.f)().then((uu => {
+         uu && (0, Qj.c)()
+       }))), Us ??= Promise.all([(0, Aj.g)(), (xj ??= ju.e(1).then((() => ju(60872))).then((uu => {
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1794-L1795` → after: `L1794-L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1794-L1795) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1794-L1795)

```diff
-           codes: (0, iV.D)(et, Ot + 1),
-           pool: Vt.split(iV.x).map(pV)
+           codes: (0, Lj.B)(Eu, su + 1),
+           pool: ju.split(Lj.q).map(Tj)
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1799)

```diff
-       })), BV), (0, tO.e)(), Vt.e(201).then((() => Vt(34399)))]).then((tt => {
+       })), xj), (0, Rj.d)(), ju.e(201).then((() => ju(34565)))]).then((uu => {
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1801)

```diff
-         et.followBundledTextures(), VO = et, OO = Vt, (0, kV.e)()
+         Eu.followBundledTextures(), Es = Eu, ss = ju, (0, Qj.c)()
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1809` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1809) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1809)

```diff
-       return null !== (et = null === (Vt = (0, nV.j)()) || void 0 === Vt ? void 0 : Vt.textureUrl(tt)) && void 0 !== et ? et : VO.itemSpriteUrl(tt)
+       return null !== (Eu = null === (ju = (0, zj.h)()) || void 0 === ju ? void 0 : ju.textureUrl(uu)) && void 0 !== Eu ? Eu : Es.itemSpriteUrl(uu)
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1814)

```diff
-       return null !== (et = null === (Vt = (0, nV.j)()) || void 0 === Vt ? void 0 : Vt.textureUrl(tt)) && void 0 !== et ? et : VO.blockTextureUrl(tt)
+       return null !== (Eu = null === (ju = (0, zj.h)()) || void 0 === ju ? void 0 : ju.textureUrl(uu)) && void 0 !== Eu ? Eu : Es.blockTextureUrl(uu)
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1819)

```diff
-       return null !== (et = (0, TV.c)(tt)) && void 0 !== et ? et : tt
+       return null !== (Eu = (0, Aj.d)(uu)) && void 0 !== Eu ? Eu : uu
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1824)

```diff
-       return null !== (Vt = null !== (Ot = null !== (qt = XO(tt)) && void 0 !== qt ? qt : null === et || void 0 === et ? void 0 : et.rotated[tt]) && void 0 !== Ot ? Ot : null === et || void 0 === et ? void 0 : et.animated[tt]) && void 0 !== Vt ? Vt : VO.notFoundUrl()
+       return null !== (ju = null !== (su = null !== (Uu = Cs(uu)) && void 0 !== Uu ? Uu : null === Eu || void 0 === Eu ? void 0 : Eu.rotated[uu]) && void 0 !== su ? su : null === Eu || void 0 === Eu ? void 0 : Eu.animated[uu]) && void 0 !== ju ? ju : Es.notFoundUrl()
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1828)

```diff
-       return void 0 !== (0, AV.b)(tt) ? tt : /^[1-9][0-9]*$/.test(tt) ? (0, AV.e)(Number(tt)) : void 0
+       return void 0 !== (0, Bj.b)(uu) ? uu : /^[1-9][0-9]*$/.test(uu) ? (0, Bj.c)(Number(uu)) : void 0
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1835-L1836` → after: `L1835-L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1835-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1835-L1836) · [Before (L1835-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1835-L1836)

```diff
-         const et = (0, TV.c)(tt.slice(5));
-         return null !== (Vt = void 0 === et ? null : HO(et)) && void 0 !== Vt ? Vt : VO.notFoundUrl()
+         const Eu = (0, Aj.d)(uu.slice(5));
+         return null !== (ju = void 0 === Eu ? null : fs(Eu)) && void 0 !== ju ? ju : Es.notFoundUrl()
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1838)

```diff
-       return null !== (et = VO.particleUrl(tt)) && void 0 !== et ? et : VO.notFoundUrl()
+       return null !== (Eu = Es.particleUrl(uu)) && void 0 !== Eu ? Eu : Es.notFoundUrl()
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1842` → after: `L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1842) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1842)

```diff
-       return "StairsBlock" === tt ? tt : et ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === uu ? uu : Eu ? "SlabBlock" : "CubeBlock"
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1853-L1854` → after: `L1853-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1853-L1854) · [Before (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1853-L1854)

```diff
-           const mt = null !== (et = EO(Ot)) && void 0 !== et ? et : Ot,
-             dt = (0, sV.d)(mt, qt, Dt);
+           const Xu = null !== (Eu = Ns(su)) && void 0 !== Eu ? Eu : su,
+             lu = (0, yj.c)(Xu, Uu, Zu);
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1861)

```diff
-             lt = Qt ? await (DO ??= Vt.e(207).then((() => Vt(34482))).then((tt => (mO && (mO = !1, (0, kV.e)()), {
+             cu = bu ? await (Zs ??= ju.e(207).then((() => ju(34634))).then((uu => (Xs && (Xs = !1, (0, Qj.c)()), {
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1873-L1874` → after: `L1873-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1873-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1873-L1874) · [Before (L1873-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1873-L1874)

```diff
-             wt = 0 === ft ? mt : `${mt}#${ft}`;
-           return (await (0, gV.b)()).drawBlockIconUrl(wt, qt, Dt, (() => Et))
+             Yu = 0 === Ou ? Xu : `${Xu}#${Ou}`;
+           return (await (0, nj.e)()).drawBlockIconUrl(Yu, Uu, Zu, (() => Nu))
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1883` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1883) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1883)

```diff
-             url: null !== (Vt = null !== (qt = null === (Dt = (0, nV.j)()) || void 0 === Dt ? void 0 : Dt.textureUrl(tt)) && void 0 !== qt ? qt : VO.ingameIconUrl(tt)) && void 0 !== Vt ? Vt : VO.notFoundUrl()
+             url: null !== (ju = null !== (Uu = null === (Zu = (0, zj.h)()) || void 0 === Zu ? void 0 : Zu.textureUrl(uu)) && void 0 !== Uu ? Uu : Es.ingameIconUrl(uu)) && void 0 !== ju ? ju : Es.notFoundUrl()
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1885)

```diff
-           if (tt.startsWith(rV.e)) return {
+           if (uu.startsWith(Ij.c)) return {
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1887)

```diff
-             url: fO(tt.slice(rV.e.length))
+             url: Os(uu.slice(Ij.c.length))
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1889-L1890` → after: `L1889-L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1889-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1889-L1890) · [Before (L1889-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1889-L1890)

```diff
-           if (0 === (0, AV.h)()) return (0, UV.c)(), Ot.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(tt);
-           const mt = null !== (et = EO(tt)) && void 0 !== et ? et : tt,
+           if (0 === (0, Bj.g)()) return (0, Fj.c)(), su.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
+           const Xu = null !== (Eu = Ns(uu)) && void 0 !== Eu ? Eu : uu,
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1898` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1898) · [Before (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1898)

```diff
-             return null !== (et = HO(QO(tt))) && void 0 !== et ? et : VO.notFoundUrl()
+             return null !== (Eu = fs(bs(uu))) && void 0 !== Eu ? Eu : Es.notFoundUrl()
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1900-L1901` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1900-L1901) · [Before (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1900-L1901)

```diff
-           if ((0, sV.h)(mt) && ! function(tt) {
-               const et = (0, nV.j)();
+           if ((0, yj.d)(Xu) && ! function(uu) {
+               const Eu = (0, zj.h)();
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1911` → after: `L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1911) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1911)

```diff
-           if (void 0 !== dt && "GrayscaleArmour" === OO.itemTypeOf(dt) || Object.hasOwn(oV.b, mt)) {
+           if (void 0 !== lu && "GrayscaleArmour" === ss.itemTypeOf(lu) || Object.hasOwn(Sj.e, Xu)) {
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1913)

```diff
-             const et = null !== (Xt = (0, oV.c)(tt)) && void 0 !== Xt ? Xt : (0, oV.c)(mt);
+             const Eu = null !== (Cu = (0, Sj.g)(uu)) && void 0 !== Cu ? Cu : (0, Sj.g)(Xu);
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1926)

```diff
-           return void 0 !== EO(tt) || (0, rV.h)(tt) || tt.startsWith(rV.e)
+           return void 0 !== Ns(uu) || (0, Ij.h)(uu) || uu.startsWith(Ij.c)
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1932-L1933` → after: `L1932-L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933)

```diff
-     var aO = Vt(705),
-       MO = Vt(39839);
+     var gs = ju(636),
+       Ms = ju(39917);
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1945-L1946` → after: `L1945-L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1945-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1945-L1946) · [Before (L1945-L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1945-L1946)

```diff
-           const tt = et.YM(et.localId);
-           return null !== tt && void 0 !== tt && tt.every(Number.isFinite) ? tt : null
+           const uu = Eu.bM(Eu.localId);
+           return null !== uu && void 0 !== uu && uu.every(Number.isFinite) ? uu : null
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1948)

```diff
-         chunkBlocks: tt => Vt.isLoaded(tt[0], tt[1], tt[2]) ? (tt, et, Ot) => Vt.qd(tt, et, Ot) : null,
+         chunkBlocks: uu => ju.isLoaded(uu[0], uu[1], uu[2]) ? (uu, Eu, su) => ju.ul(uu, Eu, su) : null,
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1964-L1966` → after: `L1964-L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1964-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1964-L1966) · [Before (L1964-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1964-L1966)

```diff
-             if (null === Dt || et.isLocal(mt) || dt >>> Jt.c !== Jt.u.Lifeform) continue;
-             const jt = et.YM(mt),
-               Ht = aO.f[dt & Jt.g];
+             if (null === Zu || Eu.isLocal(Xu) || lu >>> eu.d !== eu.t.Lifeform) continue;
+             const qu = Eu.bM(Xu),
+               fu = gs.n[lu & eu.h];
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1969)

```diff
-               name: null !== (Ot = tt.clientApi.getEntityName(Dt)) && void 0 !== Ot ? Ot : null,
+               name: null !== (su = uu.clientApi.getEntityName(Zu)) && void 0 !== su ? su : null,
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1977)

```diff
-           for (let Vt = 0; Vt < et.idStr.length; Vt++) null !== et.idStr[Vt] && et.kinds[Vt] >>> Jt.c === Jt.u.Item && tt++;
+           for (let ju = 0; ju < Eu.idStr.length; ju++) null !== Eu.idStr[ju] && Eu.kinds[ju] >>> eu.d === eu.t.Item && uu++;
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1983-L1984` → after: `L1983-L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1983-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1983-L1984) · [Before (L1983-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1983-L1984)

```diff
-         worldCodeAiChunk: tt => Promise.resolve((0, MO.b)(bO((0, mt.g)()), tt)),
-         worldCodeAiGameState: () => Promise.resolve((0, MO.f)(bO((0, mt.g)())))
+         worldCodeAiChunk: uu => Promise.resolve((0, Ms.b)(es((0, Xu.l)()), uu)),
+         worldCodeAiGameState: () => Promise.resolve((0, Ms.f)(es((0, Xu.l)())))
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L1993)

```diff
-             return null !== (et = null === (Vt = tt.runtime()) || void 0 === Vt ? void 0 : Vt.currentViewer) && void 0 !== et ? et : null
+             return null !== (Eu = null === (ju = uu.runtime()) || void 0 === ju ? void 0 : ju.currentViewer) && void 0 !== Eu ? Eu : null
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2015` → after: `L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2015) · [Before (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2015)

```diff
-             et && Vt && et.seek(Math.max(0, Math.min(Vt.totalTicks - 1, Vt.BQ + tt * Qt.Id)))
+             Eu && ju && Eu.seek(Math.max(0, Math.min(ju.totalTicks - 1, ju.Tb + uu * bu.Ed)))
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2021-L2022` → after: `L2021-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2021-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2021-L2022) · [Before (L2021-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2021-L2022)

```diff
-                 Vt = null !== (tt = null === et || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null;
-               return null === et || null === Vt || Vt.state === Qt.wd.None ? (dt = null, null) : (dt = (0, st.o)(dt, {
+                 ju = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null;
+               return null === Eu || null === ju || ju.state === bu.od.None ? (lu = null, null) : (lu = (0, yu.o)(lu, {
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2024)

```diff
-                 BQ: Vt.BQ,
+                 Tb: ju.Tb,
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2026-L2027` → after: `L2026-L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2026-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2026-L2027) · [Before (L2026-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2026-L2027)

```diff
-                 bI: Qt.Id,
-                 playing: Vt.state === Qt.wd.Playing,
+                 cV: bu.Ed,
+                 playing: ju.state === bu.od.Playing,
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2036-L2037` → after: `L2036-L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2036-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2036-L2037) · [Before (L2036-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2036-L2037)

```diff
-                 Vt = null !== (tt = null === et || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null;
-               return null === et || null === Vt || Vt.state === Qt.wd.None ? (jt = null, null) : (jt = (0, st.o)(jt, {
+                 ju = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null;
+               return null === Eu || null === ju || ju.state === bu.od.None ? (qu = null, null) : (qu = (0, yu.o)(qu, {
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2047)

```diff
-               return null !== (et = null === (Vt = tt.runtime()) || void 0 === Vt ? void 0 : Vt.recorder.current) && void 0 !== et ? et : jV.e.states.replayRecorder.current()
+               return null !== (Eu = null === (ju = uu.runtime()) || void 0 === ju ? void 0 : ju.recorder.current) && void 0 !== Eu ? Eu : lj.d.states.replayRecorder.current()
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2051` → after: `L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2051) · [Before (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2051)

```diff
-               watch: tt => (0, Ht.n)("replayViewer|videoExportChanged", (() => {
+               watch: uu => (0, fu.l)("replayViewer|videoExportChanged", (() => {
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2065)

```diff
-             !0 === (null === (Ot = mt()) || void 0 === Ot ? void 0 : Ot.isOpen) && Promise.all([Vt.e(98), Vt.e(67)]).then((() => Vt(60843))).then((Vt => {
+             !0 === (null === (su = Xu()) || void 0 === su ? void 0 : su.isOpen) && Promise.all([ju.e(98), ju.e(67)]).then((() => ju(60868))).then((ju => {
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2073` → after: `L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2073) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2073)

```diff
-                   return null !== (et = null === (Vt = tt.canvas) || void 0 === Vt ? void 0 : Vt.call(tt)) && void 0 !== et ? et : null
+                   return null !== (Eu = null === (ju = uu.canvas) || void 0 === ju ? void 0 : ju.call(uu)) && void 0 !== Eu ? Eu : null
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2100)

```diff
-                   null !== et && void 0 !== et && et.view && et.setSpeed((0, DV.i)(et.view.speed, "replaySpeedUp" === tt ? "up" : "down"));
+                   null !== Eu && void 0 !== Eu && Eu.view && Eu.setSpeed((0, Uj.l)(Eu.view.speed, "replaySpeedUp" === uu ? "up" : "down"));
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2113)

```diff
-                 BQ: Vt,
+                 Tb: ju,
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2158)

```diff
-                 Vt.e(117).then((() => Vt(39419))).then((et => {
+                 ju.e(117).then((() => ju(39525))).then((Eu => {
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2189` → after: `L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2189) · [Before (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2189)

```diff
-               (0, Ne.g)(et) && (null === (Vt = tt.runtime()) || void 0 === Vt || Vt.recorder.viewerShown(et))
+               (0, hE.d)(Eu) && (null === (ju = uu.runtime()) || void 0 === ju || ju.recorder.viewerShown(Eu))
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2195` → after: `L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2195) · [Before (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2195)

```diff
-                 oD: qt,
+                 IZ: Uu,
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2197)

```diff
-                 rD: mt
+                 FZ: Xu
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2217` → after: `L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2217) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2217)

```diff
-                 Pd: qt
+                 dl: Uu
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2225)

```diff
-               Ot = null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.view) && void 0 !== et ? et : null;
+               su = null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.view) && void 0 !== Eu ? Eu : null;
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2228)

```diff
-             })(tt) : XV.has(tt) ? Mt.replayAction(tt) : "replayPlayPause" === tt ? Vt && Ot && Ot.state !== Qt.wd.None && Mt.setReplayPlaying(Ot.state !== Qt.wd.Playing) : "replayChangeCameraMode" === tt ? null === Vt || void 0 === Vt || Vt.cycleCameraMode() : "replayExit" === tt … [truncated]
+             })(uu) : fj.has(uu) ? gu.replayAction(uu) : "replayPlayPause" === uu ? ju && su && su.state !== bu.od.None && gu.setReplayPlaying(su.state !== bu.od.Playing) : "replayChangeCameraMode" === uu ? null === ju || void 0 === ju || ju.cycleCameraMode() : "replayExit" === uu … [truncated]
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2238)

```diff
-               return !0 !== (null === (et = mt()) || void 0 === et ? void 0 : et.isOpen) ? null : null !== (Vt = null === (Ot = tt.cameraView) || void 0 === Ot ? void 0 : Ot.call(tt)) && void 0 !== Vt ? Vt : null
+               return !0 !== (null === (Eu = Xu()) || void 0 === Eu ? void 0 : Eu.isOpen) ? null : null !== (ju = null === (su = uu.cameraView) || void 0 === su ? void 0 : su.call(uu)) && void 0 !== ju ? ju : null
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2249)

```diff
-               Vt !== Jt && (Jt = Vt, Ht.j.sw("connectedGameChanged")), et.fire()
+               ju !== eu && (eu = ju, fu.h.TY("connectedGameChanged")), Eu.fire()
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2258-L2259` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2258-L2259) · [Before (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2258-L2259)

```diff
-                   return void((0, Ne.e)() || Mt.saveClip())
-               }(0, mV.c)() || ("replayViewerOpen" !== tt ? tt.startsWith("replay") && ((0, Ne.e)() || !0 === (null === (et = mt()) || void 0 === et ? void 0 : et.inPlayback)) && bt(tt) : yt("toggle"))
+                   return void((0, hE.c)() || gu.saveClip())
+               }(0, Zj.c)() || ("replayViewerOpen" !== uu ? uu.startsWith("replay") && ((0, hE.c)() || !0 === (null === (Eu = Xu()) || void 0 === Eu ? void 0 : Eu.inPlayback)) && Mu(uu) : hu("toggle"))
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2264` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2264) · [Before (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2264)

```diff
-         runtime: qt.l,
+         runtime: Uu.j,
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2267` → after: `L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2267) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2267)

```diff
-           const et = null === (tt = (0, mt.g)()) || void 0 === tt ? void 0 : tt.renderFrame;
+           const Eu = null === (uu = (0, Xu.l)()) || void 0 === uu ? void 0 : uu.renderFrame;
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2277` → after: `L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2277) · [Before (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2277)

```diff
-           return null !== (tt = null === (et = (Vt = (0, Dt.C)()).canvas) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : null
+           return null !== (uu = null === (Eu = (ju = (0, Zu.H)()).canvas) || void 0 === Eu ? void 0 : Eu.call(ju)) && void 0 !== uu ? uu : null
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2284` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2284) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2284)

```diff
-           ...fe.k,
+           ...NE.l,
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2292-L2294` → after: `L2292-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2292-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2292-L2294) · [Before (L2292-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2292-L2294)

```diff
-           ...fe.f,
-           ...Wt.d,
-           ...SV.g,
+           ...NE.i,
+           ...au.b,
+           ...Pj.j,
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2297` → after: `L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2297) · [Before (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2297)

```diff
-           ...vt.m
+           ...du.k
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2306` → after: `L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2306) · [Before (L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2306)

```diff
-           ...vt.i,
+           ...du.h,
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2315)

```diff
-           ...fe.h,
+           ...NE.j,
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2321` → after: `L2321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2321) · [Before (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2321)

```diff
-           ...SV.h,
+           ...Pj.l,
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2331-L2333` → after: `L2331-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2331-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2331-L2333) · [Before (L2331-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2331-L2333)

```diff
-       (0, dt.h)(wt.m), (0, qt.m)(CO.feed), (0, Wt.e)(), ne || (ne = !0, (0, wt.j)(It.h, (tt => {
-         const et = (0, Zt.h)(It.h, tt);
-         "string" === typeof et && Promise.resolve().then((() => Vt(3722))).then((tt => {
+       (0, lu.d)(Yu.q), (0, Uu.n)(ps.feed), (0, au.c)(), zE || (zE = !0, (0, Yu.n)(mu.i, (uu => {
+         const Eu = (0, Ku.g)(mu.i, uu);
+         "string" === typeof Eu && Promise.resolve().then((() => ju(3847))).then((uu => {
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2339-L2344` → after: `L2339-L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2339-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2344) · [Before (L2339-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2344)

```diff
-       })), (0, wt.j)(It._, (tt => {
-         const et = (0, Zt.h)(It._, tt);
-         "number" === typeof et && Ht.j.sw("serverUpdating", Date.now() + et, !0)
-       })), (0, wt.j)(It.E, (tt => {
-         const et = (0, Zt.h)(It.E, tt);
-         if ((0, Zt.d)(et)) {
+       })), (0, Yu.n)(mu.kb, (uu => {
+         const Eu = (0, Ku.g)(mu.kb, uu);
+         "number" === typeof Eu && fu.h.TY("serverUpdating", Date.now() + Eu, !0)
+       })), (0, Yu.n)(mu.J, (uu => {
+         const Eu = (0, Ku.g)(mu.J, uu);
+         if ((0, Ku.e)(Eu)) {
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2346-L2347` → after: `L2346-L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2346-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2346-L2347) · [Before (L2346-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2346-L2347)

```diff
-             iq: tt,
-             Yq: Vt
+             HU: uu,
+             AU: ju
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2349-L2351` → after: `L2349-L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2349-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2351) · [Before (L2349-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2351)

```diff
-           (0, Te.e)({
-             iq: "string" === typeof tt ? tt : null,
-             Yq: "string" === typeof Vt ? Vt : null
+           (0, AE.b)({
+             HU: "string" === typeof uu ? uu : null,
+             AU: "string" === typeof ju ? ju : null
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2354-L2362` → after: `L2354-L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2354-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2354-L2362) · [Before (L2354-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2354-L2362)

```diff
-       })), (0, wt.j)(Xt.gc.NewUiRequest, (tt => {
-         const et = (0, Zt.k)(tt);
-         (0, Zt.d)(et) && "number" === typeof et.id && (0, Zt.d)(et.clientParameters) && (0, ge.i)(et.id, et.clientParameters)
-       })), (0, wt.j)(It.V, (tt => {
-         const et = (0, Zt.h)(It.V, tt);
-         "number" === typeof et && (0, ge.l)(et)
-       })), (0, wt.g)(ge.e), (0, wt.j)(Xt.gc.UiRequestPopup, (tt => {
-         const et = (0, Zt.k)(tt);
-         if ((0, Zt.d)(et) && "number" === typeof et.id && "string" === typeof et.text) {
+       })), (0, Yu.n)(Cu.mc.NewUiRequest, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         (0, Ku.e)(Eu) && "number" === typeof Eu.id && (0, Ku.e)(Eu.clientParameters) && (0, nE.g)(Eu.id, Eu.clientParameters)
+       })), (0, Yu.n)(mu.ab, (uu => {
+         const Eu = (0, Ku.g)(mu.ab, uu);
+         "number" === typeof Eu && (0, nE.i)(Eu)
+       })), (0, Yu.k)(nE.e), (0, Yu.n)(Cu.mc.UiRequestPopup, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         if ((0, Ku.e)(Eu) && "number" === typeof Eu.id && "string" === typeof Eu.text) {
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2364` → after: `L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2364) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2364)

```diff
-           (0, ge.n)(tt, et.text, !0 === et.destructive, (et => {
+           (0, nE.k)(uu, Eu.text, !0 === Eu.destructive, (Eu => {
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2367)

```diff
-               KX: et
+               eC: Eu
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2371-L2376` → after: `L2371-L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2371-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2371-L2376) · [Before (L2371-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2371-L2376)

```diff
-       })), (0, wt.j)(Xt.gc.TopRightHelper, (tt => {
-         const et = (0, Zt.k)(tt);
-         void 0 !== et && Ht.j.sw("TopRightHelper", et, !0)
-       })), (0, wt.j)(Xt.gc.TaskProgress, (tt => {
-         const et = (0, Zt.k)(tt);
-         (0, Zt.d)(et) && "string" === typeof et.taskId && "number" === typeof et.progress && (0, xe.c)({
+       })), (0, Yu.n)(Cu.mc.TopRightHelper, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         void 0 !== Eu && fu.h.TY("TopRightHelper", Eu, !0)
+       })), (0, Yu.n)(Cu.mc.TaskProgress, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         (0, Ku.e)(Eu) && "string" === typeof Eu.taskId && "number" === typeof Eu.progress && (0, HE.c)({
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2380-L2384` → after: `L2380-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2380-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2384) · [Before (L2380-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2384)

```diff
-       }))), uV || (uV = !0, (0, wt.j)(It.p, (tt => {
-         const et = (0, Zt.h)(It.p, tt);
-         (0, Zt.d)(et) && Ht.j.sw("showShopFromServer", {
-           toggle: et.jt,
-           Ht: et.Ht
+       }))), pj || (pj = !0, (0, Yu.n)(mu.s, (uu => {
+         const Eu = (0, Ku.g)(mu.s, uu);
+         (0, Ku.e)(Eu) && fu.h.TY("showShopFromServer", {
+           toggle: Eu.qu,
+           fu: Eu.fu
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2386-L2391` → after: `L2386-L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2386-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2386-L2391) · [Before (L2386-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2386-L2391)

```diff
-       })), (0, wt.j)(Xt.gc.OverShopInfo, (tt => {
-         const et = (0, Zt.k)(tt);
-         (0, Zt.d)(et) && Ht.j.sw("overShopInfo", et.info, !0)
-       })), (0, wt.j)(Xt.gc.ShowShopTutorial, (() => {
-         Ht.j.sw("showShopTutorial", null, !0)
-       }))), bV || (bV = !0, (0, wt.f)((() => {
+       })), (0, Yu.n)(Cu.mc.OverShopInfo, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         (0, Ku.e)(Eu) && fu.h.TY("overShopInfo", Eu.info, !0)
+       })), (0, Yu.n)(Cu.mc.ShowShopTutorial, (() => {
+         fu.h.TY("showShopTutorial", null, !0)
+       }))), Mj || (Mj = !0, (0, Yu.i)((() => {
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2393-L2400` → after: `L2393-L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2393-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2393-L2400) · [Before (L2393-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2393-L2400)

```diff
-         (0, yV.resetLeaveEvents)(), null === (tt = JV) || void 0 === tt || tt(), JV = (0, wt.d)() ? (0, aV.i)(wt.d) : null, (0, wt.d)() || Ht.j.hN()
-       })), (0, wt.j)(Xt.gc.SetCookie, (tt => {
-         const et = (0, Zt.k)(tt),
-           Vt = (0, Le.c)().gameNameWithVariation;
-         (0, Zt.d)(et) && "string" === typeof et.key && null !== Vt && (0, NV.setCookie)(Vt, et.key, et.value)
-       })), (0, wt.j)(Xt.gc.LeaveValues, (tt => {
-         const et = (0, Zt.k)(tt);
-         if ((0, Zt.d)(et) && "string" === typeof et.leaveEventType) {
+         (0, Yj.resetLeaveEvents)(), null === (uu = ej) || void 0 === uu || uu(), ej = (0, Yu.e)() ? (0, Dj.j)(Yu.e) : null, (0, Yu.e)() || fu.h.ND()
+       })), (0, Yu.n)(Cu.mc.SetCookie, (uu => {
+         const Eu = (0, Ku.i)(uu),
+           ju = (0, VE.b)().gameNameWithVariation;
+         (0, Ku.e)(Eu) && "string" === typeof Eu.key && null !== ju && (0, hj.setCookie)(ju, Eu.key, Eu.value)
+       })), (0, Yu.n)(Cu.mc.LeaveValues, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         if ((0, Ku.e)(Eu) && "string" === typeof Eu.leaveEventType) {
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2414-L2416` → after: `L2414-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2414-L2416) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2414-L2416)

```diff
-       })), (0, wt.j)(Xt.gc.CustomAnalyticsEvent, (tt => {
-         const et = (0, Zt.k)(tt);
-         if ((0, Zt.d)(et) && "string" === typeof et.cat1) {
+       })), (0, Yu.n)(Cu.mc.CustomAnalyticsEvent, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         if ((0, Ku.e)(Eu) && "string" === typeof Eu.cat1) {
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2430-L2432` → after: `L2430-L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2430-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2430-L2432) · [Before (L2430-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2430-L2432)

```diff
-       })), (0, wt.j)(Xt.gc.ProgressionEvent, (tt => {
-         const et = (0, Zt.k)(tt);
-         if ((0, Zt.d)(et)) {
+       })), (0, Yu.n)(Cu.mc.ProgressionEvent, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         if ((0, Ku.e)(Eu)) {
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2448-L2450` → after: `L2448-L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2448-L2450) · [Before (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2448-L2450)

```diff
-       })), (0, wt.j)(Xt.gc.ResourceEvent, (tt => {
-         const et = (0, Zt.k)(tt);
-         if ((0, Zt.d)(et)) {
+       })), (0, Yu.n)(Cu.mc.ResourceEvent, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         if ((0, Ku.e)(Eu)) {
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2466-L2468` → after: `L2466-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2466-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2466-L2468) · [Before (L2466-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2466-L2468)

```diff
-       })), (0, wt.j)(Xt.gc.LeaderboardResponse, (tt => {
-         const et = (0, Zt.k)(tt);
-         if ((0, Zt.d)(et)) {
+       })), (0, Yu.n)(Cu.mc.LeaderboardResponse, (uu => {
+         const Eu = (0, Ku.i)(uu);
+         if ((0, Ku.e)(Eu)) {
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2474)

```diff
-           Ht.j.sw("leaderboardResponse", {
+           fu.h.TY("leaderboardResponse", {
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2480-L2489` → after: `L2480-L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2480-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2480-L2489) · [Before (L2480-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2480-L2489)

```diff
-       })), (0, wt.j)(It.z, (tt => {
-         const et = (0, Zt.h)(It.z, tt);
-         "string" === typeof et && (0, MV.e)(tt.conn, et)
-       })), (0, wt.j)(It.C, (tt => {
-         const et = (0, Zt.h)(It.C, tt);
-         "string" === typeof et && console.error(`[logErrorToConsole]: ${et}`)
-       }))), Gt(), (0, SV.d)(), ke || (ke = !0, (0, wt.j)(It.f, (tt => {
-         const et = (0, Zt.h)(It.f, tt);
-         void 0 !== et && (0, Fe.h)(et)
-       }))), pe(), ce(), pt || (pt = !0, (0, Dt.o)(xt)), Ot.gameBridge.attach(uO), (0, Ot.installPageSources)({
+       })), (0, Yu.n)(mu.z, (uu => {
+         const Eu = (0, Ku.g)(mu.z, uu);
+         "string" === typeof Eu && (0, gj.c)(uu.conn, Eu)
+       })), (0, Yu.n)(mu.C, (uu => {
+         const Eu = (0, Ku.g)(mu.C, uu);
+         "string" === typeof Eu && console.error(`[logErrorToConsole]: ${Eu}`)
+       }))), iu(), (0, Pj.b)(), QE || (QE = !0, (0, Yu.n)(mu.h, (uu => {
+         const Eu = (0, Ku.g)(mu.h, uu);
+         void 0 !== Eu && (0, rE.l)(Eu)
+       }))), TE(), oE(), Tu || (Tu = !0, (0, Zu.t)(Hu)), su.gameBridge.attach(ws), (0, su.installPageSources)({
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2492)

```diff
-           setChunkAddDistance: GV.m
+           setChunkAddDistance: ij.h
```

#### 343. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2498-L2499` → after: `L2498-L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2498-L2499) · [Before (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2498-L2499)

```diff
-           VJ: GV.e,
-           drawCallStats: zV.k
+           rM: ij.c,
+           drawCallStats: Wj.h
```

#### 344. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2501` → after: `L2501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2501) · [Before (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2501)

```diff
-       }), (0, kV.e)(), jO()
+       }), (0, Qj.c)(), qs()
```

#### 345. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2504` → after: `L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2504) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2504)

```diff
-   41146: (tt, et, Vt) => {
+   41170: (uu, Eu, ju) => {
```

#### 346. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2508-L2509` → after: `L2508-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2508-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2508-L2509) · [Before (L2508-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2508-L2509)

```diff
-       j: () => dt,
-       m: () => Ht
+       h: () => lu,
+       l: () => fu
```

#### 347. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2511` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2511) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2511)

```diff
-     var Ot = Vt(2034);
+     var su = ju(1999);
```

#### 348. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2525` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2525) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2525)

```diff
-       qt = tt, Dt++, (0, Ot.e)();
+       Uu = uu, Zu++, (0, su.c)();
```

#### 349. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2533)

```diff
-   41231: (tt, et, Vt) => {
+   41255: (uu, Eu, ju) => {
```

#### 350. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2535-L2536` → after: `L2535-L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2535-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2535-L2536) · [Before (L2535-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2535-L2536)

```diff
-       d: () => mt,
-       e: () => dt
+       b: () => Xu,
+       d: () => lu
```

#### 351. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2538` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2538) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2538)

```diff
-     var Ot = Vt(41239);
+     var su = ju(41264);
```

#### 352. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2543)

```diff
-       return qt ??= Vt.e(62).then((() => Vt(60859))).catch((tt => {
+       return Uu ??= ju.e(62).then((() => ju(60874))).catch((uu => {
```

#### 353. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2549)

```diff
-       return Dt ??= Promise.all([mt(), (0, Ot.i)()]).then((tt => {
+       return Zu ??= Promise.all([Xu(), (0, su.f)()]).then((uu => {
```

#### 354. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2557)

```diff
-   37306: (tt, et, Vt) => {
+   37467: (uu, Eu, ju) => {
```

#### 355. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2721` → after: `L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2721) · [Before (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2721)

```diff
-   39226: (tt, et, Vt) => {
+   39344: (uu, Eu, ju) => {
```

#### 356. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2724` → after: `L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/playGameSources.js#L2724) · [Before (L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/playGameSources.js#L2724)

```diff
-       f: () => qt
+       i: () => Uu
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1671 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1)

```diff
- /*! For license information please see igzsf.procGenWorker.b74767f9.chunk.js.LICENSE.txt */
+ /*! For license information please see dz8ef.procGenWorker.491addd6.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L4)

```diff
-       1744: tt => {
+       1695: uu => {
```

#### 3. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L82)

```diff
-             return et === 1 / 0 ? et : void 0 !== et ? Math.max(0, Math.ceil(et - Vt())) : 0
+             return Eu === 1 / 0 ? Eu : void 0 !== Eu ? Math.max(0, Math.ceil(Eu - ju())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L151)

```diff
-       479: tt => {
+       433: uu => {
```

#### 5. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L156)

```diff
-       425: (tt, et, Vt) => {
+       387: (uu, Eu, ju) => {
```

#### 6. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L164-L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166) · [Before (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166)

```diff
-         var Ot = Vt(434),
-           qt = Vt(440),
-           Dt = Vt(448)
+         var su = ju(391),
+           Uu = ju(397),
+           Zu = ju(402)
```

#### 7. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L168)

```diff
-       542: tt => {
+       485: uu => {
```

#### 8. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L173)

```diff
-       421: tt => {
+       384: uu => {
```

#### 9. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L179)

```diff
-       456: tt => {
+       411: uu => {
```

#### 10. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L184)

```diff
-       412: tt => {
+       372: uu => {
```

#### 11. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L190)

```diff
-       632: tt => {
+       555: uu => {
```

#### 12. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202)

```diff
-       572: (tt, et, Vt) => {
-         tt.exports = Vt(564)
+       509: (uu, Eu, ju) => {
+         uu.exports = ju(505)
```

#### 13. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L204)

```diff
-       564: tt => {
+       505: uu => {
```

#### 14. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213)

```diff
-       522: (tt, et, Vt) => {
-         tt.exports = Vt(513)
+       471: (uu, Eu, ju) => {
+         uu.exports = ju(464)
```

#### 15. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L215)

```diff
-       513: tt => {
+       464: uu => {
```

#### 16. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L220)

```diff
-       448: tt => {
+       402: uu => {
```

#### 17. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L225)

```diff
-       419: tt => {
+       375: uu => {
```

#### 18. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L228)

```diff
-       467: (tt, et, Vt) => {
+       425: (uu, Eu, ju) => {
```

#### 19. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L238)

```diff
-         var Ot = Vt(419)
+         var su = ju(375)
```

#### 20. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L240)

```diff
-       472: tt => {
+       429: uu => {
```

#### 21. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L245)

```diff
-       537: tt => {
+       483: uu => {
```

#### 22. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L250)

```diff
-       686: (tt, et, Vt) => {
+       610: (uu, Eu, ju) => {
```

#### 23. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L259)

```diff
-         var Ot = Vt(412)()
+         var su = ju(372)()
```

#### 24. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L261)

```diff
-       434: tt => {
+       391: uu => {
```

#### 25. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268)

```diff
-       404: (tt, et, Vt) => {
-         var Ot = Vt(412);
+       366: (uu, Eu, ju) => {
+         var su = ju(372);
```

#### 26. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L270)

```diff
-           EPSILON: Vt(419),
+           EPSILON: ju(375),
```

#### 27. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L273-L318` → after: `L273-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318) · [Before (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318)

```diff
-           clone: Vt(421),
-           angle: Vt(425),
-           Re: Vt(434),
-           copy: Vt(456),
-           set: Vt(458),
-           equals: Vt(467),
-           exactEquals: Vt(472),
-           add: Vt(479),
-           subtract: Vt(487),
-           sub: Vt(492),
-           multiply: Vt(499),
-           mul: Vt(505),
-           divide: Vt(513),
-           div: Vt(522),
-           min: Vt(525),
-           max: Vt(533),
- ... (30 more removed lines; see GitHub link above)
+           clone: ju(384),
+           angle: ju(387),
+           bu: ju(391),
+           copy: ju(411),
+           set: ju(416),
+           equals: ju(425),
+           exactEquals: ju(429),
+           add: ju(433),
+           subtract: ju(436),
+           sub: ju(445),
+           multiply: ju(450),
+           mul: ju(458),
+           divide: ju(464),
+           div: ju(471),
+           min: ju(475),
+           max: ju(481),
+ ... (30 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324)

```diff
-       594: (tt, et, Vt) => {
-         tt.exports = Vt(592)
+       530: (uu, Eu, ju) => {
+         uu.exports = ju(525)
```

#### 29. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L326)

```diff
-       592: tt => {
+       525: uu => {
```

#### 30. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L334)

```diff
-       641: tt => {
+       559: uu => {
```

#### 31. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L342)

```diff
-       533: tt => {
+       481: uu => {
```

#### 32. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L347)

```diff
-       525: tt => {
+       475: uu => {
```

#### 33. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353)

```diff
-       505: (tt, et, Vt) => {
-         tt.exports = Vt(499)
+       458: (uu, Eu, ju) => {
+         uu.exports = ju(450)
```

#### 34. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L355)

```diff
-       499: tt => {
+       450: uu => {
```

#### 35. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L360)

```diff
-       619: tt => {
+       543: uu => {
```

#### 36. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L365)

```diff
-       440: tt => {
+       397: uu => {
```

#### 37. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L375)

```diff
-       646: tt => {
+       567: uu => {
```

#### 38. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L384)

```diff
-       670: tt => {
+       592: uu => {
```

#### 39. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L395)

```diff
-       676: tt => {
+       599: uu => {
```

#### 40. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L406)

```diff
-       680: tt => {
+       604: uu => {
```

#### 41. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L417)

```diff
-       548: tt => {
+       493: uu => {
```

#### 42. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L422)

```diff
-       552: tt => {
+       496: uu => {
```

#### 43. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L427)

```diff
-       559: tt => {
+       501: uu => {
```

#### 44. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L432)

```diff
-       458: tt => {
+       416: uu => {
```

#### 45. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438)

```diff
-       583: (tt, et, Vt) => {
-         tt.exports = Vt(579)
+       520: (uu, Eu, ju) => {
+         uu.exports = ju(513)
```

#### 46. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441)

```diff
-       612: (tt, et, Vt) => {
-         tt.exports = Vt(603)
+       539: (uu, Eu, ju) => {
+         uu.exports = ju(533)
```

#### 47. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L443)

```diff
-       579: tt => {
+       513: uu => {
```

#### 48. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L451)

```diff
-       603: tt => {
+       533: uu => {
```

#### 49. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460)

```diff
-       492: (tt, et, Vt) => {
-         tt.exports = Vt(487)
+       445: (uu, Eu, ju) => {
+         uu.exports = ju(436)
```

#### 50. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L462)

```diff
-       487: tt => {
+       436: uu => {
```

#### 51. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L467)

```diff
-       662: tt => {
+       580: uu => {
```

#### 52. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L475)

```diff
-       654: tt => {
+       573: uu => {
```

#### 53. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L484)

```diff
-       666: tt => {
+       583: uu => {
```

#### 54. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L500)

```diff
-       2940: tt => {
+       2982: uu => {
```

#### 55. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L506)

```diff
-       2945: tt => {
+       2990: uu => {
```

#### 56. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L516)

```diff
-       39962: tt => {
+       40036: uu => {
```

#### 57. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L520)

```diff
-             for (var mt = qt[Dt] = new Array(et), dt = Dt < Ot / 2 ? Dt : Dt + 1, jt = 1; jt <= et; jt++) {
+             for (var Xu = Uu[Zu] = new Array(Eu), lu = Zu < su / 2 ? Zu : Zu + 1, qu = 1; qu <= Eu; qu++) {
```

#### 58. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L527-L529` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529)

```diff
-       2934: (tt, et, Vt) => {
-         var Ot = Vt(2940),
-           qt = Vt(2945),
+       2976: (uu, Eu, ju) => {
+         var su = ju(2982),
+           Uu = ju(2990),
```

#### 59. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L674-L677` → after: `L674-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677) · [Before (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677)

```diff
-       39939: (tt, et, Vt) => {
-         var Ot = Vt(39943).integer,
-           qt = Vt(39950),
-           Dt = Vt(39956);
+       40010: (uu, Eu, ju) => {
+         var su = ju(40012).integer,
+           Uu = ju(40021),
+           Zu = ju(40030);
```

#### 60. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L741-L744` → after: `L741-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744) · [Before (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744)

```diff
-       39968: (tt, et, Vt) => {
-         var Ot = Vt(39943).array,
-           qt = Vt(39950),
-           Dt = Vt(39956);
+       40040: (uu, Eu, ju) => {
+         var su = ju(40012).array,
+           Uu = ju(40021),
+           Zu = ju(40030);
```

#### 61. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828)

```diff
-       39956: (tt, et, Vt) => {
-         var Ot = Vt(39962);
+       40030: (uu, Eu, ju) => {
+         var su = ju(40036);
```

#### 62. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L847-L849` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849) · [Before (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849)

```diff
-       39935: (tt, et, Vt) => {
-         var Ot = Vt(39939),
-           qt = Vt(39968);
+       40002: (uu, Eu, ju) => {
+         var su = ju(40010),
+           Uu = ju(40040);
```

#### 63. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L870)

```diff
-       39950: tt => {
+       40021: uu => {
```

#### 64. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L884)

```diff
-       39943: tt => {
+       40012: uu => {
```

#### 65. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L910-L911` → after: `L910-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911)

```diff
-       37980: (tt, et, Vt) => {
-         var Ot = Vt(37982);
+       38123: (uu, Eu, ju) => {
+         var su = ju(38126);
```

#### 66. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L943)

```diff
-       37982: (tt, et) => {
+       38126: (uu, Eu) => {
```

#### 67. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L997-L998` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L997-L998) · [Before (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L997-L998)

```diff
-       9427: (tt, et) => {
-         et.f = function(tt) {
+       9412: (uu, Eu) => {
+         Eu.e = function(uu) {
```

#### 68. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012)

```diff
-       39880: (tt, et, Vt) => {
+       39953: (uu, Eu, ju) => {
```

#### 69. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1014)

```diff
-           b: () => Qe
+           c: () => CE
```

#### 70. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1016-L1018` → after: `L1016-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018)

```diff
-         var Ot = Vt(39896),
-           qt = Vt(39890),
-           Dt = Vt(39979);
+         var su = ju(39974),
+           Uu = ju(39963),
+           Zu = ju(40054);
```

#### 71. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027)

```diff
-           return mt(`${tt}Wasteland`)
+           return Xu(`${uu}Wasteland`)
```

#### 72. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062)

```diff
-           return 36 * (1 === Ot ? tt : et) + 2 + Math.floor(32 * jt(tt, et, Vt ^ lt ^ Ot))
+           return 36 * (1 === su ? uu : Eu) + 2 + Math.floor(32 * qu(uu, Eu, ju ^ cu ^ su))
```

#### 73. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1064-L1065` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065)

```diff
-         var yt = Vt(39888),
-           Nt = Vt(39893);
+         var hu = ju(39958),
+           Du = ju(39969);
```

#### 74. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1092)

```diff
-             tt !== vt && (vt = tt, Wt = (0, yt.k)(tt), St = dt(tt))
+             uu !== du && (du = uu, au = (0, hu.g)(uu), Pu = lu(uu))
```

#### 75. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141)

```diff
-               return Ot > Vt && (Dt = .25 - Dt), tt < 0 && (Dt = .5 - Dt), et < 0 ? 1 - Dt : Dt
+               return su > ju && (Zu = .25 - Zu), uu < 0 && (Zu = .5 - Zu), Eu < 0 ? 1 - Zu : Zu
```

#### 76. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174)

```diff
-             return Vt && Pt(Vt, tt, et) ? Vt : null
+             return ju && vu(ju, uu, Eu) ? ju : null
```

#### 77. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181)

```diff
-                 if (Dt && qt >= Dt.floorY - Nt.d && Ot <= Dt.topY + bt) {
+                 if (Zu && Uu >= Zu.floorY - Du.h && su <= Zu.topY + Mu) {
```

#### 78. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206)

```diff
-         var ot = Vt(39921);
+         var Su = ju(39989);
```

#### 79. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210)

```diff
-             this.ff = et, this.chances = qt, this.mound = Dt, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = Vt.salt ^ mt(Ot), this.sinkholes = Vt.sinkholes;
+             this.hO = Eu, this.chances = Uu, this.mound = Zu, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ju.salt ^ Xu(su), this.sinkholes = ju.sinkholes;
```

#### 80. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231)

```diff
-               for (let qt = 0; qt < dt.height && jt + qt < this.ff; qt++) jt + qt >= 0 && tt.set(Ot - et, jt + qt, Dt - Vt, dt.block);
+               for (let Uu = 0; Uu < lu.height && qu + Uu < this.hO; Uu++) qu + Uu >= 0 && uu.set(su - Eu, qu + Uu, Zu - ju, lu.block);
```

#### 81. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238)

```diff
-               if (Xt += null !== (Qt = this.chances[lt]) && void 0 !== Qt ? Qt : 0, Ht < Xt) return void(rt.has(lt) && this.sinkholes.taking(Ot, Dt) || this.place(tt, Ot - et, mt + 1 - qt, Dt - Vt, lt, jt(Ot, Dt, 1540483477 ^ this.salt)))
+               if (Cu += null !== (bu = this.chances[cu]) && void 0 !== bu ? bu : 0, fu < Cu) return void(Iu.has(cu) && this.sinkholes.taking(su, Zu) || this.place(uu, su - Eu, Xu + 1 - Uu, Zu - ju, cu, qu(su, Zu, 1540483477 ^ this.salt)))
```

#### 82. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243)

```diff
-                 Vt + qt >= 0 && Vt + qt < this.ff && tt.set(et, Vt + qt, Ot, Dt)
+                 ju + Uu >= 0 && ju + Uu < this.hO && uu.set(Eu, ju + Uu, su, Zu)
```

#### 83. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252)

```diff
-         class At extends ot.e {
+         class Bu extends Su.g {
```

#### 84. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260)

```diff
-             super.init(), this.floraGenerator = new Ut(this.blockMetadata, this.ff, this.noise, this.seed, this.floraChances, ((tt, et) => this.mound(tt, et)))
+             super.init(), this.floraGenerator = new Fu(this.blockMetadata, this.hO, this.noise, this.seed, this.floraChances, ((uu, Eu) => this.mound(uu, Eu)))
```

#### 85. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298)

```diff
-               return 0 === Ot || 1 === Ot && jt(tt, et, Vt ^ lt ^ 3) < .5 ? 2 - Ot : 0
+               return 0 === su || 1 === su && qu(uu, Eu, ju ^ cu ^ 3) < .5 ? 2 - su : 0
```

#### 86. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327)

```diff
-             })), this.canyon = new qt.i([{
+             })), this.canyon = new Uu.l([{
```

#### 87. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330)

```diff
-             }], `${tt}WastelandCanyon`), this.canyonWarp = new qt.i([{
+             }], `${uu}WastelandCanyon`), this.canyonWarp = new Uu.l([{
```

#### 88. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333)

```diff
-             }], `${tt}WastelandCanyonWarp`), this.canyonMask = new qt.i([{
+             }], `${uu}WastelandCanyonWarp`), this.canyonMask = new Uu.l([{
```

#### 89. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1336` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336)

```diff
-             }], `${tt}WastelandCanyonMask`), this.patchNoise = new qt.i([{
+             }], `${uu}WastelandCanyonMask`), this.patchNoise = new Uu.l([{
```

#### 90. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342)

```diff
-             }], `${tt}WastelandPatch`), this.fineNoise = new qt.i([{
+             }], `${uu}WastelandPatch`), this.fineNoise = new Uu.l([{
```

#### 91. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348)

```diff
-             }], `${tt}WastelandFine`)
+             }], `${uu}WastelandFine`)
```

#### 92. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1371-L1374` → after: `L1371-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374) · [Before (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374)

```diff
-         var Bt = Vt(4347),
-           pt = Vt(710),
-           xt = Vt(39353),
-           Tt = Vt(39909);
+         var xu = ju(4432),
+           Tu = ju(649),
+           Hu = ju(39448),
+           Au = ju(39983);
```

#### 93. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1384-L1385` → after: `L1384-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1384-L1385) · [Before (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1384-L1385)

```diff
-             const tt = new xt.e;
-             return tt.set(0, 0, 0, st("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             const uu = new Hu.d;
+             return uu.set(0, 0, 0, yu("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1425)

```diff
-               qualityDistribution: new Bt.g([{
+               qualityDistribution: new xu.d([{
```

#### 95. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1440` → after: `L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1440) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1440)

```diff
-               mobTypeDistribution: new Bt.g([{
+               mobTypeDistribution: new xu.d([{
```

#### 96. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448)

```diff
-           return (0, ot.jb)(tt, [{
+           return (0, Su.lb)(uu, [{
```

#### 97. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1451)

```diff
-           }, ...ot.d.map((tt => ({
+           }, ...Su.f.map((uu => ({
```

#### 98. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458)

```diff
-             super(tt, et, Vt, `${Dt}DustFlats`, mt, dt, qe(Ot.k.MEDIUM, 1.25, ee)), this.key = "dustFlats", this.floraChances = {
+             super(uu, Eu, ju, `${Zu}DustFlats`, Xu, lu, sE(su.n.MEDIUM, 1.25, uE)), this.key = "dustFlats", this.floraChances = {
```

#### 99. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = Et.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new qt.i([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = Nu.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new Uu.l([{
```

#### 100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1468` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468)

```diff
-             }], `${Dt}DustFlatsHeight`)
+             }], `${Zu}DustFlatsHeight`)
```

#### 101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483)

```diff
-             super(tt, et, Vt, `${Ot}ScorchedMesa`, Dt, mt), this.key = "scorchedMesa", this.floraChances = {
+             super(uu, Eu, ju, `${su}ScorchedMesa`, Zu, Xu), this.key = "scorchedMesa", this.floraChances = {
```

#### 102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487)

```diff
-             }, this.outcropChance = Et.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = Nu.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493)

```diff
-             }], `${Ot}ScorchedMesaHeight`);
+             }], `${su}ScorchedMesaHeight`);
```

#### 104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525)

```diff
-             super(tt, et, Vt, `${Ot}ShatteredHighlands`, Dt, mt), this.key = "shatteredHighlands", this.floraChances = {
+             super(uu, Eu, ju, `${su}ShatteredHighlands`, Zu, Xu), this.key = "shatteredHighlands", this.floraChances = {
```

#### 105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528)

```diff
-             }, this.outcropChance = Et.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = Nu.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531)

```diff
-             }], `${Ot}HighlandsRidge1`), this.ridge2 = new qt.i([{
+             }], `${su}HighlandsRidge1`), this.ridge2 = new Uu.l([{
```

#### 107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534)

```diff
-             }], `${Ot}HighlandsRidge2`), this.bumps = new qt.i([{
+             }], `${su}HighlandsRidge2`), this.bumps = new Uu.l([{
```

#### 108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537)

```diff
-             }], `${Ot}HighlandsBumps`)
+             }], `${su}HighlandsBumps`)
```

#### 109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548)

```diff
-             return 0 !== qt ? qt : et > 50 ? this.ids.Stone : et > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== Uu ? Uu : Eu > 50 ? this.ids.Stone : Eu > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559)

```diff
-               return null === mt || Ht(tt >> 2, et, Vt >> 2, qt) >= .25 ? null : Ht(tt, et, Vt, qt) < .65 ? mt : null
+               return null === Xu || fu(uu >> 2, Eu, ju >> 2, Uu) >= .25 ? null : fu(uu, Eu, ju, Uu) < .65 ? Xu : null
```

#### 111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1566` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566)

```diff
-             super(tt, et, Vt, `${Dt}RuinFields`, mt, dt, qe(Ot.k.HIGH, 2.25, Ve)), this.key = "ruinFields", this.floraChances = {
+             super(uu, Eu, ju, `${Zu}RuinFields`, Xu, lu, sE(su.n.HIGH, 2.25, EE)), this.key = "ruinFields", this.floraChances = {
```

#### 112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571)

```diff
-             }, this.outcropChance = Et.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new qt.i([{
+             }, this.outcropChance = Nu.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new Uu.l([{
```

#### 113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1577` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577)

```diff
-             }], `${Dt}RuinFieldsHeight`)
+             }], `${Zu}RuinFieldsHeight`)
```

#### 114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589)

```diff
-             super(tt, et, Vt, `${Ot}SaltFlats`, Dt, mt), this.key = "saltFlats", this.floraChances = {
+             super(uu, Eu, ju, `${su}SaltFlats`, Zu, Xu), this.key = "saltFlats", this.floraChances = {
```

#### 115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592)

```diff
-             }, this.outcropChance = Et.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new qt.i([{
+             }, this.outcropChance = Nu.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new Uu.l([{
```

#### 116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598)

```diff
-             }], `${Ot}SaltFlatsHeight`)
+             }], `${su}SaltFlatsHeight`)
```

#### 117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616)

```diff
-             super(tt, et, Vt, `${Ot}SurvivorGrove`, Dt, mt), this.key = "survivorGrove", this.floraChances = {
+             super(uu, Eu, ju, `${su}SurvivorGrove`, Zu, Xu), this.key = "survivorGrove", this.floraChances = {
```

#### 118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = Et.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new qt.i([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = Nu.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new Uu.l([{
```

#### 119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626)

```diff
-             }], `${Ot}SurvivorGroveHeight`)
+             }], `${su}SurvivorGroveHeight`)
```

#### 120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641)

```diff
-               ff: et,
+               hO: Eu,
```

#### 121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1657)

```diff
-               Qt = (0, Dt.j)(Vt);
+               bu = (0, Zu.m)(ju);
```

#### 122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667)

```diff
-       694: (tt, et, Vt) => {
+       619: (uu, Eu, ju) => {
```

#### 123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1669)

```diff
-           c: () => Ot
+           e: () => su
```

#### 124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1677-L1678` → after: `L1677-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678) · [Before (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678)

```diff
-               if (void 0 !== Vt[tt]) throw new Error(`Duplicate value found in bi-directional table: ${String(tt)}`);
-               Vt[tt] = "string" === et ? Ot : Number(Ot)
+               if (void 0 !== ju[uu]) throw new Error(`Duplicate value found in bi-directional table: ${String(uu)}`);
+               ju[uu] = "string" === Eu ? su : Number(su)
```

#### 125. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690)

```diff
-       39909: (tt, et, Vt) => {
+       39983: (uu, Eu, ju) => {
```

#### 126. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1692)

```diff
-           d: () => qt
+           e: () => Uu
```

#### 127. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1694)

```diff
-         var Ot = Vt(39353);
+         var su = ju(39448);
```

#### 128. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1697)

```diff
-             let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ot.e,
+             let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new su.d,
```

#### 129. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1723)

```diff
-       39353: (tt, et, Vt) => {
+       39448: (uu, Eu, ju) => {
```

#### 130. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1725` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1725) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1725)

```diff
-           e: () => Ot
+           d: () => su
```

#### 131. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/procGenWorker.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/procGenWorker.js#L1850)

```diff
-             super(`${Ot.name} has been mutated during iteration`)
+             super(`${su.name} has been mutated during iteration`)
```
