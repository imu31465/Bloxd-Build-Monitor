# Changed — Bundle Modifications Report (Part 008 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `8 / 86` (**304** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 30. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L295-L297` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L577) · [Before (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L295-L297)

```diff
-         className: DB()("BloxdForm GamemodeForm", {
-           BasicOptions: !YB
-         }),
+         className: "StudioStatsChartTooltip",
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L299-L316` → after: `L579-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L579-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L579-L600) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L299-L316)

```diff
-           className: "SectionTitle",
-           children: MB("classic:defaultGamemode")
-         }), (0, yB.jsx)("div", {
-           className: "SectionBody",
-           children: QB.F.map((BB => YB || (0, QB.w)(BB) ? (0, yB.jsx)("button", {
-             type: "button",
-             className: DB()("WorldGamemode", {
-               Selected: OB === BB
-             }),
-             disabled: JB,
-             onClick: () => {
-               GB(BB)
-             },
-             style: {
-               "--background-image": `url(${oB.x[BB]})`
-             },
- ... (2 more removed lines; see GitHub link above)
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: ki(mW, EW)
+         }), cW && (0, nW.jsx)("div", {
+           className: "StudioStatsChartTooltipValue",
+           children: null === tW.value ? PW : NW(tW.value)
+         }), null === wW || void 0 === wW ? void 0 : wW.map(((WW, iW) => {
+           var OW;
+           const mW = null === (OW = tW.lineValues) || void 0 === OW ? void 0 : OW[iW];
+           return (0, nW.jsxs)("div", {
+             className: "StudioStatsChartTooltipLine SmallTextLight",
+             children: [(0, nW.jsx)("span", {
+               className: "StudioStatsChartTooltipLineSwatch",
+               style: {
+                 backgroundColor: WW.colour
+               }
+             }), WW.label, ": ", null === mW || void 0 === mW ? PW : NW(mW)]
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L323-L327` → after: `L622-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L622-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L622-L630) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L323-L327)

```diff
-         mapTypes: OB,
-         value: GB,
-         onChange: YB,
-         showAll: JB,
-         disabled: MB = !1,
+         viewBox: iW,
+         text: OW,
+         alignLeft: mW
+       } = WW;
+       return void 0 === (null === iW || void 0 === iW ? void 0 : iW.x) || void 0 === iW.y ? null : (0, nW.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: iW.x + (mW ? -5 : 5),
+         y: iW.y + 10,
+         textAnchor: mW ? "end" : "start",
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L332` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L686) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L332)

```diff
-       } = (0, jB.H)();
+       } = (0, lW.B)();
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L334-L352` → after: `L688-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L688-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L688-L873) · [Before (L334-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L334-L352)

```diff
-         className: DB()("BloxdForm MapTypeForm", {
-           BasicOptions: !JB
-         }),
-         children: [(0, yB.jsx)("div", {
-           className: "SectionTitle",
-           children: zB("customLobby:mapType")
-         }), (0, yB.jsx)("div", {
-           className: "SectionBody",
-           children: OB.map((BB => JB || (0, QB.A)(BB) ? (0, yB.jsx)("button", {
-             type: "button",
-             className: DB()("MapType", {
-               Selected: GB === BB
-             }),
-             disabled: MB,
-             onClick: () => {
-               YB(BB)
- ... (3 more removed lines; see GitHub link above)
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== iW && void 0 !== OW && (0, nW.jsx)(Hi, {
+           colour: OW,
+           isFill: !0,
+           label: iW
+         }), null === NW || void 0 === NW ? void 0 : NW.map(((WW, iW) => (0, nW.jsx)(Hi, {
+           colour: WW.colour,
+           isFill: !0,
+           label: WW.label,
+           mH: WW.mH
+         }, `StudioChartLegendLine-${iW}`))), void 0 !== mW && EW && (0, nW.jsxs)(nW.Fragment, {
+           children: [(0, nW.jsx)(Hi, {
+             swatchClassName: "StudioStatsChartLegendSwatchComparisonBand",
+             colour: Oi.comparison,
+             isFill: !1,
+             label: PW("studio:comparisonLegendBand", {
+ ... (170 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L354-L356` → after: `L875-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L875-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L875-L1002) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L354-L356)

```diff
-             children: oB.l[BB]
-           }, BB) : null))
-         }), PB]
+             children: [(0, nW.jsx)(qW.d, {
+               stroke: Oi.grid,
+               strokeOpacity: .3,
+               strokeDasharray: "3 3",
+               vertical: !1
+             }), (0, nW.jsx)(RW.c, {
+               dataKey: "dateMs",
+               type: "number",
+               domain: ["dataMin", "dataMax"],
+               scale: "time",
+               tickFormatter: WW => function(WW, iW, OW) {
+                 return "1d" === iW ? Ai(WW, !0) : OW > 1.5 * Ui ? Ai(WW) : bi(WW)
+               }(WW, PW, TW),
+               stroke: Oi.axis,
+               hZ: {
+                 fontSize: 11
+ ... (112 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L359-L361` → after: `L1005-L32337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1005-L32337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L1005-L32337) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L359-L361)

```diff
-   },
-   5426: () => {},
-   37036: () => {}
+ 
+     function di(WW) {
+       return Array.isArray(WW.labels) && Array.isArray(WW.values)
+     }
+     const ei = 11,
+       vi = 6,
+       gi = 2,
+       Di = 30,
+       Vi = 6,
+       fi = 18,
+       Ci = 140,
+       Xi = 4,
+       Bi = {
+         top: 8,
+         right: 8,
+         bottom: 0,
+ ... (31317 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L4-L19)

```diff
-   5470: (BB, OB) => {
-     OB.d = function(BB, OB) {
-       if (BB && OB) {
-         var GB = Array.isArray(OB) ? OB : OB.split(","),
-           YB = BB.name || "",
-           DB = (BB.type || "").toLowerCase(),
-           QB = DB.replace(/\/.*$/, "");
-         return GB.some((function(BB) {
-           var OB = BB.trim().toLowerCase();
-           return "." === OB.charAt(0) ? YB.toLowerCase().endsWith(OB) : OB.endsWith("/*") ? QB === OB.replace(/\/.*$/, "") : DB === OB
-         }))
-       }
-       return !0
-     }
-   },
-   5452: (BB, OB, GB) => {
+   5693: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L21` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L6-L8) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L21)

```diff
-       e: () => lO
+       d: () => ZW,
+       e: () => tW,
+       f: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L23-L35` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L10-L17) · [Before (L23-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L23-L35)

```diff
-     var YB = GB(56),
-       DB = GB(5456),
-       QB = GB.n(DB);
- 
-     function oB(BB, OB, GB, YB) {
-       return new(GB || (GB = Promise))((function(DB, QB) {
-         function oB(BB) {
-           try {
-             yB(YB.next(BB))
-           } catch (OB) {
-             QB(OB)
-           }
-         }
+     OW(5701);
+     var mW = OW(1172),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1434),
+       LW = (OW(62), OW(5041)),
+       cW = OW(1391),
+       wW = OW(1283);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L37-L52` → after: `L19-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L19-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L19-L51) · [Before (L37-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L37-L52)

```diff
-         function jB(BB) {
-           try {
-             yB(YB.throw(BB))
-           } catch (OB) {
-             QB(OB)
-           }
-         }
- 
-         function yB(BB) {
-           var OB;
-           BB.done ? DB(BB.value) : (OB = BB.value, OB instanceof GB ? OB : new GB((function(BB) {
-             BB(OB)
-           }))).then(oB, jB)
-         }
-         yB((YB = YB.apply(BB, OB || [])).next())
-       }))
+     function tW(WW) {
+       let {
+         children: iW,
+         label: OW,
+         className: EW,
+         circleInfoText: LW,
+         disabled: tW,
+         onLabelClick: ZW
+       } = WW;
+       const {
+         t: xW
+       } = (0, mW.B)(), lW = (0, wW.jsxs)("div", {
+         className: NW()("Label", {
+           ClickableLabel: void 0 !== ZW
+         }),
+         onClick: ZW,
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L55-L60` → after: `L54-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L54-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L54-L65) · [Before (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L55-L60)

```diff
-     function jB(BB, OB) {
-       var GB, YB, DB, QB, oB = {
-         label: 0,
-         sent: function() {
-           if (1 & DB[0]) throw DB[1];
-           return DB[1]
+     function ZW(WW) {
+       let {
+         checked: iW,
+         setChecked: OW,
+         disabled: mW = !1
+       } = WW;
+       return (0, wW.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         "aria-disabled": mW || void 0,
+         onClick: WW => {
+           mW || OW(!iW)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L62-L128` → after: `L67-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L67-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L67-L74) · [Before (L62-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L62-L128)

```diff
-         trys: [],
-         ops: []
-       };
-       return QB = {
-         next: jB(0),
-         throw: jB(1),
-         return: jB(2)
-       }, "function" === typeof Symbol && (QB[Symbol.iterator] = function() {
-         return this
-       }), QB;
- 
-       function jB(jB) {
-         return function(yB) {
-           return function(jB) {
-             if (GB) throw new TypeError("Generator is already executing.");
-             for (; QB && (QB = 0, jB[0] && (oB = 0)), oB;) try {
- ... (51 more removed lines; see GitHub link above)
+         children: (0, wW.jsx)(LW.e, {
+           checked: iW,
+           onChange: WW => {
+             OW(WW.target.checked)
+           },
+           disabled: mW
+         })
+       })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L132-L151` → after: `L77-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L77-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L77-L98) · [Before (L132-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L132-L151)

```diff
-     function yB(BB, OB) {
-       var GB = "function" === typeof Symbol && BB[Symbol.iterator];
-       if (!GB) return BB;
-       var YB, DB, QB = GB.call(BB),
-         oB = [];
-       try {
-         for (;
-           (void 0 === OB || OB-- > 0) && !(YB = QB.next()).done;) oB.push(YB.value)
-       } catch (jB) {
-         DB = {
-           error: jB
-         }
-       } finally {
-         try {
-           YB && !YB.done && (GB = QB.return) && GB.call(QB)
-         } finally {
- ... (4 more removed lines; see GitHub link above)
+     function xW(WW) {
+       let {
+         checked: iW,
+         setChecked: OW,
+         disabled: mW
+       } = WW;
+       return (0, wW.jsx)("div", {
+         className: NW()("SwitchContainer", {
+           SwitchContainerDisabled: mW
+         }),
+         onClick: () => {
+           mW || OW(!iW)
+         },
+         children: (0, wW.jsx)(LW.e, {
+           className: "SwitchCheckbox",
+           checked: iW,
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L154-L157` → after: `L112-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L112-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L112-L137) · [Before (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L154-L157)

```diff
-     function JB(BB, OB, GB) {
-       if (GB || 2 === arguments.length)
-         for (var YB, DB = 0, QB = OB.length; DB < QB; DB++) !YB && DB in OB || (YB || (YB = Array.prototype.slice.call(OB, 0, DB)), YB[DB] = OB[DB]);
-       return BB.concat(YB || Array.prototype.slice.call(OB))
+     function wW(WW) {
+       const {
+         disabled: iW,
+         hideWrapper: OW
+       } = WW, {
+         t: mW
+       } = (0, PW.B)(), wW = WW.advancedMode ? cW.map((iW => [iW, WW.callbacks[iW]])) : NW.n.map((iW => [iW, WW.callbacks[iW]])), ZW = (0, LW.jsx)("div", {
+         className: EW()("PluginsGrid", {
+           SectionBody: !OW
+         }),
+         children: wW.map((WW => {
+           let [OW, mW] = WW;
+           return (0, LW.jsx)(tW, {
+             plugin: OW,
+             callbacks: mW,
+             disabled: iW
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L244-L254` → after: `L140-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L140-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L140-L166) · [Before (L244-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L244-L254)

```diff
-     function PB(BB, OB) {
-       var GB = function(BB) {
-         var OB = BB.name;
-         if (OB && -1 !== OB.lastIndexOf(".") && !BB.type) {
-           var GB = OB.split(".").pop().toLowerCase(),
-             YB = MB.get(GB);
-           YB && Object.defineProperty(BB, "type", {
-             value: YB,
-             writable: !1,
-             configurable: !1,
-             enumerable: !0
+     function tW(WW) {
+       let {
+         plugin: iW,
+         callbacks: {
+           isEnabled: OW,
+           WK: mW
+         },
+         disabled: NW
+       } = WW;
+       const {
+         t: cW
+       } = (0, PW.B)(), wW = OW();
+       return (0, LW.jsxs)("div", {
+         className: EW()("PluginCard", {
+           PluginCardEnabled: wW,
+           PluginCardDisabledForm: NW
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L256-L268` → after: `L168-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L168-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L168-L181) · [Before (L256-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L256-L268)

```diff
-         }
-         return BB
-       }(BB);
-       if ("string" !== typeof GB.path) {
-         var YB = BB.webkitRelativePath;
-         Object.defineProperty(GB, "path", {
-           value: "string" === typeof OB ? OB : "string" === typeof YB && YB.length > 0 ? YB : BB.name,
-           writable: !1,
-           configurable: !1,
-           enumerable: !0
-         })
-       }
-       return GB
+         }), (0, LW.jsxs)("div", {
+           className: "PluginCardBody",
+           children: [(0, LW.jsx)("div", {
+             className: "PluginCardTitle",
+             children: cW(ZW[iW])
+           }), (0, LW.jsx)("div", {
+             className: "PluginCardDescription",
+             children: cW(xW[iW])
+           })]
+         }), (0, LW.jsx)("span", {
+           className: "PluginCardToggleLabel",
+           children: cW(wW ? "general:on" : "general:off")
+         })]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L270` → after: `L183-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L183-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L183-L210) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L270)

```diff
-     var zB = [".DS_Store", "Thumbs.db"];
+     const ZW = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
+       },
+       xW = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L273` → after: `L213-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L213-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L213-L227) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L273)

```diff
-       return "object" === typeof BB && null !== BB
+       let {
+         textKey: iW,
+         allowed: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, NW.B)();
+       return (0, LW.jsxs)("li", {
+         className: EW()("PolicyListItem", OW ? "Allowed" : "NotAllowed"),
+         children: [(0, LW.jsx)(PW.c, {
+           name: OW ? "check" : "x"
+         }), (0, LW.jsx)("span", {
+           children: mW(iW)
+         })]
+       })
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L277-L279` → after: `L231-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L231-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L231-L244) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L277-L279)

```diff
-       return RB(BB.target.files).map((function(BB) {
-         return PB(BB)
-       }))
+       let {
+         allowed: iW,
+         notAllowed: OW
+       } = WW;
+       return (0, LW.jsxs)("ul", {
+         className: "PolicyList",
+         children: [iW.map((WW => (0, LW.jsx)(cW, {
+           textKey: WW,
+           allowed: !0
+         }, WW))), OW.map((WW => (0, LW.jsx)(cW, {
+           textKey: WW,
+           allowed: !1
+         }, WW)))]
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L283-L296` → after: `L267-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L267-L269) · [Before (L283-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L283-L296)

```diff
-       return oB(this, void 0, void 0, (function() {
-         return jB(this, (function(OB) {
-           switch (OB.label) {
-             case 0:
-               return [4, Promise.all(BB.map((function(BB) {
-                 return BB.getFile()
-               })))];
-             case 1:
-               return [2, OB.sent().map((function(BB) {
-                 return PB(BB)
-               }))]
-           }
-         }))
-       }))
+       return (0, PW.createPortal)((0, bW.jsx)(ZW.d, {
+         ...WW
+       }), document.body)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L299-L316` → after: `L274-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L274-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L274-L295) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L299-L316)

```diff
-     function ZB(BB, OB) {
-       return oB(this, void 0, void 0, (function() {
-         var GB;
-         return jB(this, (function(YB) {
-           switch (YB.label) {
-             case 0:
-               return BB.items ? (GB = RB(BB.items).filter((function(BB) {
-                 return "file" === BB.kind
-               })), "drop" !== OB ? [2, GB] : [4, Promise.all(GB.map(WB))]) : [3, 2];
-             case 1:
-               return [2, NB(AB(YB.sent()))];
-             case 2:
-               return [2, NB(RB(BB.files).map((function(BB) {
-                 return PB(BB)
-               })))]
-           }
- ... (2 more removed lines; see GitHub link above)
+     function sW(WW) {
+       let {
+         onScrolledToEnd: iW
+       } = WW;
+       const OW = (0, mW.useRef)(null),
+         {
+           after: EW
+         } = (0, lW.d)(OW, "y");
+       return (0, mW.useEffect)((() => {
+         EW || null === iW || void 0 === iW || iW()
+       }), [EW, iW]), (0, bW.jsx)("div", {
+         ref: OW,
+         className: NW()("PublishingPolicyRows", {
+           PublishingPolicyRowsMoreBelow: EW
+         }),
+         tabIndex: 0,
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L320-L322` → after: `L299-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L299-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L299-L343) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L320-L322)

```diff
-       return BB.filter((function(BB) {
-         return -1 === zB.indexOf(BB.name)
-       }))
+       let {
+         onAnswer: iW
+       } = WW;
+       const [OW, EW] = (0, mW.useState)(!1), [NW, PW] = (0, mW.useState)(!1), LW = (0, mW.useCallback)((() => {
+         PW(!0)
+       }), []);
+       return (0, bW.jsx)(jW, {
+         close: () => {
+           iW(!1)
+         },
+         disableExitButton: !0,
+         body: (0, bW.jsxs)(ZW.i, {
+           className: "PublishingPolicyPopup",
+           title: "worldBuilder:publishingPolicy",
+           padStartsOn: "content",
+           confirm: {
+ ... (29 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L325-L331` → after: `L346-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L346-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L346-L369) · [Before (L325-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L325-L331)

```diff
-     function RB(BB) {
-       if (null === BB) return [];
-       for (var OB = [], GB = 0; GB < BB.length; GB++) {
-         var YB = BB[GB];
-         OB.push(YB)
-       }
-       return OB
+     function KW() {
+       const {
+         t: WW
+       } = (0, cW.B)(), [iW, OW] = (0, mW.useState)(!1);
+       return (0, bW.jsxs)(bW.Fragment, {
+         children: [(0, bW.jsxs)(xW.Z, {
+           className: "PublishingPolicyLink",
+           onClick: () => {
+             OW(!0)
+           },
+           children: [(0, bW.jsx)(tW.c, {
+             name: "shield-halved"
+           }), " ", WW("worldBuilder:publishingPolicy")]
+         }), iW && (0, bW.jsx)(jW, {
+           close: () => {
+             OW(!1)
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L335-L337` → after: `L400-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L400-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L400-L429) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L335-L337)

```diff
-       if ("function" !== typeof BB.webkitGetAsEntry) return VB(BB);
-       var OB = BB.webkitGetAsEntry();
-       return OB && OB.isDirectory ? nB(OB) : VB(BB)
+       let {
+         icon: iW,
+         title: OW,
+         disabled: mW,
+         children: EW
+       } = WW;
+       return (0, KW.jsxs)("div", {
+         className: lW()("ManageCard", {
+           ManageCardDisabled: mW
+         }),
+         children: [(0, KW.jsxs)("div", {
+           className: "ManageCardHead",
+           children: [(0, KW.jsx)("div", {
+             className: "ManageCardIcon",
+             children: (0, KW.jsx)(tW.c, {
+               name: iW
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L341-L343` → after: `L433-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L433-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L433-L447) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L341-L343)

```diff
-       return BB.reduce((function(BB, OB) {
-         return JB(JB([], yB(BB), !1), yB(Array.isArray(OB) ? AB(OB) : [OB]), !1)
-       }), [])
+       let {
+         label: iW,
+         caption: OW,
+         children: mW
+       } = WW;
+       return (0, KW.jsxs)("div", {
+         className: "ManageStackedField",
+         children: [(0, KW.jsx)("div", {
+           className: "ManageStackedFieldLabel",
+           children: iW
+         }), mW, OW && (0, KW.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: OW
+         })]
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L347-L350` → after: `L451-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L451-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L451-L474) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L347-L350)

```diff
-       var OB = BB.getAsFile();
-       if (!OB) return Promise.reject("".concat(BB, " is not a File"));
-       var GB = PB(OB);
-       return Promise.resolve(GB)
+       let {
+         label: iW,
+         caption: OW,
+         disabled: mW,
+         children: EW
+       } = WW;
+       return (0, KW.jsxs)("div", {
+         className: lW()("ManageField", {
+           ManageFieldDisabled: mW
+         }),
+         children: [(0, KW.jsxs)("div", {
+           className: "ManageFieldText",
+           children: [(0, KW.jsx)("div", {
+             className: "ManageFieldLabel",
+             children: iW
+           }), (0, KW.jsx)("div", {
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L354-L356` → after: `L478-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L478-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L478-L684) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L354-L356)

```diff
-       return oB(this, void 0, void 0, (function() {
-         return jB(this, (function(OB) {
-           return [2, BB.isDirectory ? nB(BB) : UB(BB)]
+       var iW, OW;
+       let {
+         schematicData: mW,
+         updateSchematicData: EW,
+         publishFormEnabled: NW,
+         formEnabled: PW
+       } = WW;
+       const {
+         t: cW
+       } = (0, LW.B)(), wW = !NW, tW = {
+         tpRequests: {
+           isEnabled: () => !mW.disableTpRequests,
+           WK: WW => EW("disableTpRequests", !WW)
+         },
+         spawnProtection: {
+           isEnabled: () => !mW.disableSpawnProtection,
+ ... (191 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L358` → after: `L686-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L686-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L686-L713) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L358)

```diff
-       }))
+       }(WW), OW = await
+       function(WW) {
+         return new Promise(((iW, OW) => {
+           const mW = new Image;
+           mW.onload = () => iW(mW), mW.onerror = () => OW(new Error("Failed to load image")), mW.src = WW
+         }))
+       }(iW);
+       if (OW.naturalHeight > OW.naturalWidth) throw new fW;
+       const mW = 1024 * DW,
+         {
+           dataUrl: EW,
+           finalQuality: NW
+         } = function(WW, iW) {
+           const OW = document.createElement("canvas");
+           OW.width = WW.naturalWidth, OW.height = WW.naturalHeight, OW.getContext("2d").drawImage(WW, 0, 0);
+           let mW = .92,
+ ... (12 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L362-L390` → after: `L719-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L719-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L719-L821) · [Before (L362-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L362-L390)

```diff
-       var OB = BB.createReader();
-       return new Promise((function(BB, GB) {
-         var YB = [];
-         ! function DB() {
-           var QB = this;
-           OB.readEntries((function(OB) {
-             return oB(QB, void 0, void 0, (function() {
-               var QB, oB, yB;
-               return jB(this, (function(jB) {
-                 switch (jB.label) {
-                   case 0:
-                     if (OB.length) return [3, 5];
-                     jB.label = 1;
-                   case 1:
-                     return jB.trys.push([1, 3, , 4]), [4, Promise.all(YB)];
-                   case 2:
- ... (13 more removed lines; see GitHub link above)
+       var iW;
+       let {
+         schematicId: OW,
+         hasReadUploadPolicy: EW,
+         onPolicyValidationError: cW,
+         onThumbnailReady: wW
+       } = WW;
+       const {
+         t: xW
+       } = (0, LW.B)(), [AW, bW] = (0, mW.useState)(null), [jW, UW] = (0, mW.useState)(""), [kW, sW] = (0, mW.useState)(""), [MW, SW] = (0, mW.useState)(!0), [YW, yW] = (0, mW.useState)(!1), TW = (0, mW.useRef)(!1), [JW, hW] = (0, mW.useState)(null), [HW, nW] = (0, mW.useState)(!1 … [truncated]
+         getRootProps: vW,
+         getInputProps: gW,
+         isDragActive: DW
+       } = (0, dW.e)({
+         accept: {
+           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+ ... (87 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L392-L394` → after: `L823-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L823-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L823-L863) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L392-L394)

```diff
-           }))
-         }()
-       }))
+           },
+           maxLength: ZW.n
+         }), GW && (0, KW.jsx)("div", {
+           className: "ThumbnailUploadError",
+           children: xW("thumbnail:nameRequired", {
+             min: ZW.o,
+             max: ZW.n
+           })
+         }), (0, KW.jsxs)("label", {
+           className: "ThumbnailUploadCheckbox",
+           children: [(0, KW.jsx)("input", {
+             type: "checkbox",
+             checked: MW,
+             onChange: WW => {
+               SW(WW.target.checked)
+             }
+ ... (25 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L398-L409` → after: `L868-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L868-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L868-L970) · [Before (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L398-L409)

```diff
-       return oB(this, void 0, void 0, (function() {
-         return jB(this, (function(OB) {
-           return [2, new Promise((function(OB, GB) {
-             BB.file((function(GB) {
-               var YB = PB(GB, BB.fullPath);
-               OB(YB)
-             }), (function(BB) {
-               GB(BB)
-             }))
-           }))]
-         }))
-       }))
+       let {
+         schematicId: iW,
+         ownedThumbnailCount: OW,
+         onClose: EW,
+         onThumbnailReady: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, LW.B)(), {
+         userContext: wW
+       } = (0, uW.e)(), [xW, AW] = (0, mW.useState)(!1), [bW, jW] = (0, mW.useState)(!1), [UW, kW] = (0, mW.useState)(!1), sW = (0, mW.useRef)(), {
+         loading: MW,
+         eligibility: SW
+       } = (0, vW.b)(), YW = (0, vW.e)();
+       (0, mW.useEffect)((() => () => {
+         clearTimeout(sW.current)
+ ... (87 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L414-L420` → after: `L974-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L974-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L974-L1014) · [Before (L414-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L414-L420)

```diff
-       return function(BB) {
-         if (Array.isArray(BB)) return FB(BB)
-       }(BB) || function(BB) {
-         if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
-       }(BB) || IB(BB) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       let {
+         imageUrl: iW,
+         thumbnailName: OW,
+         onClose: mW
+       } = WW;
+       const {
+         t: EW
+       } = (0, LW.B)();
+       return (0, KW.jsxs)("div", {
+         className: "ThumbnailDeleteConfirm",
+         children: [(0, KW.jsx)("div", {
+           className: "ThumbnailDeleteConfirmTitle",
+           children: EW("thumbnail:deleteThumbnail")
+         }), (0, KW.jsxs)("div", {
+           className: "ThumbnailDeleteConfirmImageContainer",
+           children: [null !== iW && (0, KW.jsx)("img", {
+ ... (25 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L423-L431` → after: `L1056-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1056-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1056-L1078) · [Before (L423-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L423-L431)

```diff
-     function dB(BB, OB) {
-       var GB = Object.keys(BB);
-       if (Object.getOwnPropertySymbols) {
-         var YB = Object.getOwnPropertySymbols(BB);
-         OB && (YB = YB.filter((function(OB) {
-           return Object.getOwnPropertyDescriptor(BB, OB).enumerable
-         }))), GB.push.apply(GB, YB)
-       }
-       return GB
+     function rW(WW) {
+       let {
+         rejectedThumbnails: iW,
+         isAcknowledging: OW,
+         onAcknowledge: mW
+       } = WW;
+       const {
+         t: EW
+       } = (0, LW.B)();
+       return (0, KW.jsxs)("div", {
+         className: "ManageWarningBanner ThumbnailRejectionNotice",
+         children: [(0, KW.jsx)("div", {
+           className: "ThumbnailRejectionNoticeTitle",
+           children: EW("thumbnail:rejectedByModerators")
+         }), iW.map((WW => (0, KW.jsx)(zW, {
+           rejected: WW
+ ... (7 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L435-L443` → after: `L1082-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1082-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1082-L1129) · [Before (L435-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L435-L443)

```diff
-       for (var OB = 1; OB < arguments.length; OB++) {
-         var GB = null != arguments[OB] ? arguments[OB] : {};
-         OB % 2 ? dB(Object(GB), !0).forEach((function(OB) {
-           uB(BB, OB, GB[OB])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : dB(Object(GB)).forEach((function(OB) {
-           Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
-         }))
-       }
-       return BB
+       var iW;
+       let {
+         rejected: {
+           thumbnail: OW,
+           rejection: mW
+         }
+       } = WW;
+       const {
+         t: EW
+       } = (0, LW.B)(), NW = null !== (iW = (0, GW.c)(aW, mW.policyId)) && void 0 !== iW ? iW : aW["custom-game-bad-thumbnail"], PW = new Date(mW.at).toLocaleDateString();
+       return (0, KW.jsxs)("div", {
+         className: "RejectedThumbnail",
+         children: [(0, KW.jsxs)("div", {
+           className: "RejectedThumbnailImage",
+           children: [null !== OW.preview && (0, KW.jsx)("img", {
+             src: OW.preview,
+ ... (32 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L446-L452` → after: `L1133-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1133-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1133-L1134) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L446-L452)

```diff
-     function uB(BB, OB, GB) {
-       return OB in BB ? Object.defineProperty(BB, OB, {
-         value: GB,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : BB[OB] = GB, BB
+     function QW(WW) {
+       return null !== WW.preview ? WW.preview : WW.approved ? `${FW.clientSideServerUrls.s3Url}/${(0,hW.h)(WW.id)}` : null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L455-L478` → after: `L1137-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1137-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1137-L1142) · [Before (L455-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L455-L478)

```diff
-     function mB(BB, OB) {
-       return function(BB) {
-         if (Array.isArray(BB)) return BB
-       }(BB) || function(BB, OB) {
-         var GB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
-         if (null == GB) return;
-         var YB, DB, QB = [],
-           oB = !0,
-           jB = !1;
-         try {
-           for (GB = GB.call(BB); !(oB = (YB = GB.next()).done) && (QB.push(YB.value), !OB || QB.length !== OB); oB = !0);
-         } catch (yB) {
-           jB = !0, DB = yB
-         } finally {
-           try {
-             oB || null == GB.return || GB.return()
- ... (8 more removed lines; see GitHub link above)
+     function Wi(WW) {
+       return null !== WW.pendingKey ? {
+         pendingKey: WW.pendingKey
+       } : {
+         thumbnailId: WW.id
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L481-L485` → after: `L1145-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1145-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1145-L1192) · [Before (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L481-L485)

```diff
-     function IB(BB, OB) {
-       if (BB) {
-         if ("string" === typeof BB) return FB(BB, OB);
-         var GB = Object.prototype.toString.call(BB).slice(8, -1);
-         return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? FB(BB, OB) : void 0
+     function ii(WW) {
+       var iW, OW;
+       let {
+         schematicData: PW,
+         updateSchematicData: wW,
+         publishFormEnabled: ZW,
+         onClose: xW
+       } = WW;
+       const {
+         t: AW
+       } = (0, LW.B)(), {
+         userContext: bW,
+         isUserContextUpdating: jW
+       } = (0, uW.e)(), UW = (0, nW.c)(), [kW, sW] = (0, mW.useState)([]), [MW, SW] = (0, mW.useState)([]), [YW, yW] = (0, mW.useState)(!0), [TW, JW] = (0, mW.useState)(!1), [hW, dW] = (0, mW.useState)(null !== (iW = PW.customThumbnailId) && void 0 !== iW ? iW : null), [eW, vW] =  … [truncated]
+ 
+       function XW(WW, iW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L489-L521` → after: `L1195-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1195-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1195-L1212) · [Before (L489-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L489-L521)

```diff
-     function FB(BB, OB) {
-       (null == OB || OB > BB.length) && (OB = BB.length);
-       for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
-       return YB
-     }
-     var iB = "file-invalid-type",
-       LB = "file-too-large",
-       gB = "file-too-small",
-       rB = "too-many-files",
-       XB = function(BB) {
-         BB = Array.isArray(BB) && 1 === BB.length ? BB[0] : BB;
-         var OB = Array.isArray(BB) ? "one of ".concat(BB.join(", ")) : BB;
-         return {
-           code: iB,
-           message: "File type must be ".concat(OB)
-         }
- ... (17 more removed lines; see GitHub link above)
+       function IW() {
+         DW.current = Date.now(), pW.current = null;
+         const WW = VW.current;
+         VW.current = null, XW({
+           text: AW("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), HW.e.setSchematicThumbnail(bW, PW.schematicId, WW).then((() => {
+           UW.current && (XW({
+             text: AW("thumbnail:thumbnailUpdated"),
+             type: "success"
+           }, !0), gW.current = WW, wW("customThumbnailId", WW), wW("customThumbnailBlurhash", void 0), wW("customThumbnailVariants", void 0))
+         })).catch((WW => {
+           UW.current && (XW({
+             text: WW.errorMessageForUser ? AW(WW.errorMessageForUser, WW.errorMessageTranslationParams) : AW("thumbnail:failedToSetThumbnail"),
+             type: "error"
+           }, !0), dW(gW.current))
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L523-L525` → after: `L1214-L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1214-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1214-L1371) · [Before (L523-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L523-L525)

```diff
-     function hB(BB, OB) {
-       var GB = "application/x-moz-file" === BB.type || (0, fB.d)(BB, OB);
-       return [GB, GB ? null : XB(OB)]
+       function aW(WW) {
+         dW(WW), VW.current = WW;
+         const iW = Date.now() - DW.current;
+         iW >= 1e3 ? IW() : (XW({
+           text: AW("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), pW.current || (pW.current = setTimeout((() => {
+           IW()
+         }), 1e3 - iW)))
+       }
+       return (0, mW.useEffect)((() => {
+         !1 === jW && BW()
+       }), [jW, BW]), (0, KW.jsxs)("div", {
+         className: "BloxdForm ThumbnailSection",
+         children: [(0, KW.jsxs)("div", {
+           className: "SectionTitle",
+ ... (142 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L528-L536` → after: `L1378-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1378-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1378-L1434) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L528-L536)

```diff
-     function aB(BB, OB, GB) {
-       if (eB(BB.size))
-         if (eB(OB) && eB(GB)) {
-           if (BB.size > GB) return [!1, wB(GB)];
-           if (BB.size < OB) return [!1, EB(OB)]
-         } else {
-           if (eB(OB) && BB.size < OB) return [!1, EB(OB)];
-           if (eB(GB) && BB.size > GB) return [!1, wB(GB)]
-         } return [!0, null]
+     function Pi(WW) {
+       let {
+         schematicData: iW,
+         setTexturePack: OW,
+         initializeTexturePack: EW,
+         publishFormEnabled: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, LW.B)(), [cW, wW] = (0, mW.useState)(null), [tW, ZW] = (0, mW.useState)(null), [xW, AW] = (0, mW.useState)(!1), bW = (0, nW.c)(), jW = NW && !xW, UW = iW.customTexturePackKey;
+ 
+       function kW(WW) {
+         var iW;
+         wW(WW.metaData.id), ZW(null !== (iW = WW.metaData.fromFolderName) && void 0 !== iW ? iW : null), (WW.metaData.id !== Oi.n.CUSTOM || WW.metaData.fromFolderName) && OW(WW)
+       }
+       return (0, mW.useEffect)((() => {
+ ... (41 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L540` → after: `L1439-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1439-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1439-L1477) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L540)

```diff
-       return void 0 !== BB && null !== BB
+       var iW;
+       let {
+         gameCategory: OW,
+         setGameCategory: mW,
+         disabled: EW
+       } = WW;
+       const PW = null !== (iW = (0, AW.jb)(OW)) && void 0 !== iW ? iW : "other";
+       return (0, KW.jsxs)("div", {
+         className: "GameCategoryPicker",
+         children: [(0, KW.jsx)(kW.e, {
+           label: "worldBuilder:gameCategoryGroup",
+           className: "GameCategoryGroup",
+           disabled: EW,
+           children: (0, KW.jsx)(sW.e, {
+             options: AW.$.map((WW => ({
+               value: WW,
+ ... (23 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L544` → after: `L1482-L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1482-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1482-L1547) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L544)

```diff
-       return "function" === typeof BB.isPropagationStopped ? BB.isPropagationStopped() : "undefined" !== typeof BB.cancelBubble && BB.cancelBubble
+       let {
+         editor: iW,
+         onClose: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, LW.B)(), {
+         schematicData: EW,
+         updateSchematicData: NW,
+         publishFormEnabled: cW,
+         formEnabled: wW
+       } = iW;
+       return (0, KW.jsxs)(KW.Fragment, {
+         children: [(0, KW.jsxs)(SW, {
+           icon: "pen-to-square",
+           title: mW("worldBuilder:basicsSection"),
+ ... (50 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L548-L550` → after: `L1551-L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1551-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1551-L1589) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L548-L550)

```diff
-       return BB.dataTransfer ? Array.prototype.some.call(BB.dataTransfer.types, (function(BB) {
-         return "Files" === BB || "application/x-moz-file" === BB
-       })) : !!BB.target && !!BB.target.files
+       let {
+         editor: iW
+       } = WW;
+       const {
+         t: OW
+       } = (0, LW.B)(), {
+         schematicData: mW,
+         formEnabled: EW,
+         hasUnsavedChanges: PW,
+         publishSuspendedUntil: ZW
+       } = iW, xW = (0, vW.i)(), lW = !0 === mW.gamePublished ? ZW : null, AW = EW && PW && null === lW;
+       return (0, KW.jsxs)("footer", {
+         className: "SchematicPageFooter",
+         children: [null !== lW && (0, KW.jsx)("div", {
+           className: "SchematicPageFooterNotice",
+           children: xW(lW)
+ ... (23 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L554-L555` → after: `L1593-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1593-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1593-L1601) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L554-L555)

```diff
-       BB.preventDefault()
-     }
+       let {
+         schematic: iW,
+         onSchematicUpdate: OW,
+         onClose: EW,
+         inSourceWorld: PW
+       } = WW;
+       const {
+         t: cW
+       } = (0, LW.B)();
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L557-L563` → after: `L1603-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1603-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1603-L1604) · [Before (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L557-L563)

```diff
-     function HB() {
-       for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
-       return function(BB) {
-         for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
-         return OB.some((function(OB) {
-           return !TB(BB) && OB && OB.apply(void 0, [BB].concat(YB)), TB(BB)
-         }))
+       function wW() {
+         null === EW || void 0 === EW || EW()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L568` → after: `L1637-L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1637-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1637-L1653) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L568)

```diff
-       return "audio/*" === BB || "video/*" === BB || "image/*" === BB || "text/*" === BB || /\w+\/[-+.\w]+/g.test(BB)
+       let {
+         schematic: iW,
+         onSchematicUpdate: OW,
+         onClose: mW,
+         inSourceWorld: NW
+       } = WW;
+       EW.NotificationProvider.showCustomPopup({
+         body: WW => (0, KW.jsx)(xi, {
+           schematic: iW,
+           onSchematicUpdate: OW,
+           onClose: WW,
+           inSourceWorld: NW
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: mW,
+         unlockPointerKey: "schematicPagePopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L572` → after: `L1672-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1672-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1672-L1737) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L572)

```diff
-       return /^.*\.[\w]+$/.test(BB)
+       let {
+         editor: iW,
+         className: OW,
+         publishRefusal: mW = null
+       } = WW;
+       const {
+         t: lW
+       } = (0, NW.B)(), {
+         schematicData: AW,
+         formEnabled: bW,
+         publishFormEnabled: jW,
+         publishSuspendedUntil: UW
+       } = iW, kW = !bW || !jW, sW = (0, ZW.i)();
+       return (0, xW.jsxs)("div", {
+         className: EW()("PublishButtonContainer", OW),
+         children: [iW.canEditSourceWorld && (0, xW.jsxs)(LW.f, {
+ ... (50 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L574-L586` → after: `L1739-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1739-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1739-L1753) · [Before (L574-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L574-L586)

```diff
-     var xB = ["children"],
-       tB = ["open"],
-       BO = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
-       OO = ["refKey", "onChange", "onClick"];
- 
-     function GO(BB) {
-       return function(BB) {
-         if (Array.isArray(BB)) return QO(BB)
-       }(BB) || function(BB) {
-         if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
-       }(BB) || DO(BB) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+   },
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
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L589-L606` → after: `L1767-L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1767-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1767-L1792) · [Before (L589-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L589-L606)

```diff
-     function YO(BB, OB) {
-       return function(BB) {
-         if (Array.isArray(BB)) return BB
-       }(BB) || function(BB, OB) {
-         var GB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
-         if (null == GB) return;
-         var YB, DB, QB = [],
-           oB = !0,
-           jB = !1;
-         try {
-           for (GB = GB.call(BB); !(oB = (YB = GB.next()).done) && (QB.push(YB.value), !OB || QB.length !== OB); oB = !0);
-         } catch (yB) {
-           jB = !0, DB = yB
-         } finally {
-           try {
-             oB || null == GB.return || GB.return()
- ... (2 more removed lines; see GitHub link above)
+     function LW() {
+       let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       const {
+         userContext: iW
+       } = (0, PW.e)(), [OW, NW] = (0, mW.useState)((() => ({
+         loading: WW && iW.isLoggedIn(),
+         eligibility: null
+       })));
+       if ((0, mW.useEffect)((() => {
+           if (!WW || !iW.isLoggedIn()) return void NW({
+             loading: !1,
+             eligibility: null
+           });
+           let OW = !1;
+           return EW.e.getCreatorEligibility(iW).then((WW => {
+             OW || NW({
+ ... (10 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L609-L612` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1806) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L609-L612)

```diff
-         return QB
-       }(BB, OB) || DO(BB, OB) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       }
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L615-L620` → after: `L1809-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1809-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1809-L1819) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L615-L620)

```diff
-     function DO(BB, OB) {
-       if (BB) {
-         if ("string" === typeof BB) return QO(BB, OB);
-         var GB = Object.prototype.toString.call(BB).slice(8, -1);
-         return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? QO(BB, OB) : void 0
-       }
+     function cW() {
+       const {
+         t: WW,
+         selectedLanguage: iW
+       } = (0, NW.B)();
+       return (OW, mW) => WW(OW, {
+         date: (0, NW.e)(iW.code, OW, mW, {
+           dateStyle: "medium",
+           timeStyle: "short"
+         })
+       })
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L623-L626` → after: `L1822-L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1822-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1822-L1836) · [Before (L623-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L623-L626)

```diff
-     function QO(BB, OB) {
-       (null == OB || OB > BB.length) && (OB = BB.length);
-       for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
-       return YB
+     function wW() {
+       const {
+         t: WW,
+         selectedLanguage: iW
+       } = (0, NW.B)();
+       return OW => {
+         const mW = "worldBuilder:publishSuspended";
+         return WW(mW, {
+           date: (0, NW.e)(iW.code, mW, OW, {
+             dateStyle: "medium",
+             timeStyle: "short",
+             timeZone: "UTC"
+           })
+         })
+       }
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L630-L635` → after: `L1860-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1860-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1860-L1882) · [Before (L630-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L630-L635)

```diff
-       var GB = Object.keys(BB);
-       if (Object.getOwnPropertySymbols) {
-         var YB = Object.getOwnPropertySymbols(BB);
-         OB && (YB = YB.filter((function(OB) {
-           return Object.getOwnPropertyDescriptor(BB, OB).enumerable
-         }))), GB.push.apply(GB, YB)
+       return {
+         schematicId: WW.schematicId,
+         name: WW.name,
+         description: WW.description,
+         gamePublished: iW,
+         gameCategory: WW.gameCategory,
+         defaultGamemode: WW.defaultGamemode,
+         voidDeathHeight: WW.voidDeathHeight,
+         disableKeepInventory: WW.disableKeepInventory,
+         disableTpRequests: WW.disableTpRequests,
+         disableLobbySpawn: WW.disableLobbySpawn,
+         disableMobs: WW.disableMobs,
+         disableSpawnProtection: WW.disableSpawnProtection,
+         disableFallDamage: WW.disableFallDamage,
+         worldBorder: WW.worldBorder,
+         hideLobbyCode: WW.hideLobbyCode,
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L641-L650` → after: `L1887-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1887-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1887-L1897) · [Before (L641-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L641-L650)

```diff
-       for (var OB = 1; OB < arguments.length; OB++) {
-         var GB = null != arguments[OB] ? arguments[OB] : {};
-         OB % 2 ? oO(Object(GB), !0).forEach((function(OB) {
-           yO(BB, OB, GB[OB])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : oO(Object(GB)).forEach((function(OB) {
-           Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
-         }))
-       }
-       return BB
-     }
+       var iW, OW;
+       let {
+         onNavigateAway: sW,
+         inSourceWorld: MW = !1,
+         canManage: KW = !0
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: SW
+       } = (0, bW.e)(), YW = (0, jW.useNavigatePreserveSearch)(), [yW, TW] = (0, mW.useState)({
+         ...WW
+       }), [JW, hW] = (0, mW.useState)("Enter"), [HW, nW] = (0, mW.useState)(void 0), [uW, oW] = (0, mW.useState)(!1), dW = (0, mW.useRef)(kW(WW, WW.gamePublished)), eW = (0, mW.useRef)(void 0), vW = "Enter" === JW, gW = null !== (iW = null === (OW = (0, UW.b)(KW).eligibility) ||  … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L652-L659` → after: `L1899-L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1899-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1899-L1907) · [Before (L652-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L652-L659)

```diff
-     function yO(BB, OB, GB) {
-       return OB in BB ? Object.defineProperty(BB, OB, {
-         value: GB,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : BB[OB] = GB, BB
-     }
+       function pW(WW, iW) {
+         TW((OW => ({
+           ...OW,
+           [WW]: iW
+         })))
+       }
+       const fW = (0, mW.useCallback)((WW => {
+         eW.current = WW, nW(WW)
+       }), []);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L661-L672` → after: `L1909-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1909-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1909-L1910) · [Before (L661-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L661-L672)

```diff
-     function JO(BB, OB) {
-       if (null == BB) return {};
-       var GB, YB, DB = function(BB, OB) {
-         if (null == BB) return {};
-         var GB, YB, DB = {},
-           QB = Object.keys(BB);
-         for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || (DB[GB] = BB[GB]);
-         return DB
-       }(BB, OB);
-       if (Object.getOwnPropertySymbols) {
-         var QB = Object.getOwnPropertySymbols(BB);
-         for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
+       function CW() {
+         return (0, cW.w)((0, NW.r)(yW.schematicId), yW)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L753-L889` → after: `L1913-L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1913-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1913-L1962) · [Before (L753-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L753-L889)

```diff
-     function lO() {
-       var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-         OB = jO(jO({}, PO), BB),
-         GB = OB.accept,
-         DB = OB.disabled,
-         QB = OB.getFilesFromEvent,
-         oB = OB.maxSize,
-         jB = OB.minSize,
-         yB = OB.multiple,
-         JB = OB.maxFiles,
-         MB = OB.onDragEnter,
-         PB = OB.onDragLeave,
-         zB = OB.onDragOver,
-         lB = OB.onDrop,
-         pB = OB.onDropAccepted,
-         qB = OB.onDropRejected,
- ... (121 more removed lines; see GitHub link above)
+       function XW(WW, iW) {
+         hW("Loading");
+         const OW = kW(yW, WW),
+           mW = HW !== eW.current ? HW : void 0;
+         ZW.e.updateSchematic(SW, OW, mW, iW).then((iW => {
+           let {
+             customTexturePackKey: mW
+           } = iW;
+           hW("Success"), pW("customTexturePackKey", mW), dW.current = OW, eW.current = void 0, nW(void 0), !WW || yW.gamePublished || sW || AW.g.showGamePublished(yW.name, CW()), setTimeout((() => {
+             pW("gamePublished", WW), hW("Enter")
+           }), 1e3)
+         })).catch((WW => {
+           if (WW instanceof PW.c && WW.errorMessageForUser === LW.A && void 0 === iW) return hW("Enter"), void oW(!0);
+           var OW;
+           (console.error("Failed to save schematic:", WW), hW("Error"), WW instanceof PW.c && WW.errorMessageForUser) && lW.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+ ... (34 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1009-L1010` → after: `L1965-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1965-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1965-L1967) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L1009-L1010)

```diff
-         KO = function(BB) {
-           return nB ? null : kO(BB)
+         askingPublishingPolicy: uW,
+         answerPublishingPolicy: function(WW) {
+           oW(!1), WW && XW(!0, LW.B)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1012-L1013` → after: `L1969-L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1969-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1969-L1978) · [Before (L1012-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L1012-L1013)

```diff
-         uO = function(BB) {
-           UB && BB.stopPropagation()
+         editSourceWorld: function() {
+           hW("Loading"), xW.b.getSourceWorld(yW.schematicId).then((WW => {
+             tW.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, wW.l)("other"), YW((0, EW.e)("classic", WW)), null === sW || void 0 === sW || sW()
+           })).catch((WW => {
+             console.error("Failed to get source world:", WW), hW("Error"), setTimeout((() => {
+               hW("Enter")
+             }), 1e3)
+           }))
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1015-L1076` → after: `L1980-L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1980-L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L1980-L1985) · [Before (L1015-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L1015-L1076)

```diff
-         mO = (0, YB.useMemo)((function() {
-           return function() {
-             var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               OB = BB.refKey,
-               GB = void 0 === OB ? "ref" : OB,
-               YB = BB.role,
-               QB = BB.onKeyDown,
-               oB = BB.onFocus,
-               jB = BB.onBlur,
-               yB = BB.onClick,
-               JB = BB.onDragEnter,
-               MB = BB.onDragOver,
-               PB = BB.onDragLeave,
-               zB = BB.onDrop,
-               lB = JO(BB, BO);
-             return jO(jO(yO({
- ... (46 more removed lines; see GitHub link above)
+         playGame: function() {
+           tW.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), YW(CW()), null === sW || void 0 === sW || sW()
+         }
+       }
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1079-L1112` → after: `L2034-L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2034-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L2034-L2053) · [Before (L1079-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L1079-L1112)

```diff
-     function pO(BB, OB) {
-       switch (OB.type) {
-         case "focus":
-           return jO(jO({}, BB), {}, {
-             Zm: !0
-           });
-         case "blur":
-           return jO(jO({}, BB), {}, {
-             Zm: !1
-           });
-         case "openDialog":
-           return jO(jO({}, zO), {}, {
-             isFileDialogActive: !0
-           });
-         case "closeDialog":
-           return jO(jO({}, BB), {}, {
- ... (18 more removed lines; see GitHub link above)
+     function cW(WW) {
+       return PW.find((iW => iW.name === WW))
+     }
+ 
+     function wW(WW) {
+       return null === WW ? void 0 : LW.get(WW)
+     }
+     const tW = new Uint8Array(65536);
+     for (const [bW, jW] of LW) tW[bW] = "source" === jW.state ? 1 : 2;
+     const ZW = new Map;
+     for (const bW of PW) ZW.set(bW.stillId, bW.family);
+ 
+     function xW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1115-L1116` → after: `L2057-L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2057-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/120.js#L2057-L2071) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/120.js#L1115-L1116)

```diff
-     function qO() {}
-   }
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
+     }
+   },
+   5701: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L80` → after: `L4-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L63) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L80)

```diff
-   5492: (BB, OB, GB) => {
-     function YB(BB) {
-       return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
-         return typeof BB
-       } : function(BB) {
-         return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
-       }, YB(BB)
-     }
-     Object.defineProperty(OB, "__esModule", {
-       value: !0
-     }), OB.default = void 0;
-     var DB = PB(GB(1090)),
-       QB = function(BB, OB) {
-         if (!OB && BB && BB.__esModule) return BB;
-         if (null === BB || "object" !== YB(BB) && "function" !== typeof BB) return {
-           default: BB
- ... (61 more removed lines; see GitHub link above)
+   37497: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW
+     });
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(62),
+       PW = OW(5277),
+       LW = OW(1283);
+ 
+     function cW(WW) {
+       let {
+         locked: iW,
+         children: OW
+       } = WW;
+       const mW = (0, NW.useRef)(null),
+ ... (44 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L82-L218` → after: `L65-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L65-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/121.js#L65-L93) · [Before (L82-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/121.js#L82-L218)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var QB, oB = !0,
-         jB = !1;
-       return {
-         s: function() {
-           GB = GB.call(BB)
-         },
-         n: function() {
-           var BB = GB.next();
-           return oB = BB.done, BB
-         },
-         e: function(BB) {
-           jB = !0, QB = BB
-         },
-         f: function() {
- ... (121 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function jW(WW) {
+       let {
+         flow: iW,
+         close: OW,
+         onCreating: LW,
+         onCreated: bW,
+         onFailedClosed: jW,
+         join: UW
+       } = WW;
+       const {
+         t: kW
+       } = (0, PW.B)(), [sW, MW] = (0, EW.useState)(mW.C), [KW, SW] = (0, EW.useState)(!1), [YW, yW] = (0, EW.useState)(""), TW = (0, ZW.c)();
+       (0, EW.useEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L644` → after: `L97-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L97-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/121.js#L97-L259) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/121.js#L644)

```diff
-         return BB
+       });
+       return (0, AW.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, AW.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, AW.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: kW("homePage:myWorld")
+           })
+         }), (0, AW.jsx)(cW.b, {
+           locked: KW,
+           children: (0, AW.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, AW.jsx)(xW.c, {
+               value: sW.defaultGamemode,
+               onChange: WW => {
+ ... (147 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L646-L684` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/121.js#L261-L268) · [Before (L646-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/121.js#L646-L684)

```diff
-       PB = function(BB) {
-         return BB && BB.ownerDocument && BB.ownerDocument.defaultView || QB
-       },
-       zB = RB(0, 0, 0, 0);
- 
-     function lB(BB) {
-       return parseFloat(BB) || 0
-     }
- 
-     function pB(BB) {
-       for (var OB = [], GB = 1; GB < arguments.length; GB++) OB[GB - 1] = arguments[GB];
-       return OB.reduce((function(OB, GB) {
-         return OB + lB(BB["border-" + GB + "-width"])
-       }), 0)
-     }
- 
- ... (23 more removed lines; see GitHub link above)
+       xW = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L686-L800` → after: `L270-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L270-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/121.js#L270-L361) · [Before (L686-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/121.js#L686-L800)

```diff
-       return RB(DB.left, DB.top, jB, yB)
-     }
-     var ZB = "undefined" !== typeof SVGGraphicsElement ? function(BB) {
-       return BB instanceof PB(BB).SVGGraphicsElement
-     } : function(BB) {
-       return BB instanceof PB(BB).SVGElement && "function" === typeof BB.getBBox
-     };
- 
-     function NB(BB) {
-       return DB ? ZB(BB) ? function(BB) {
-         var OB = BB.getBBox();
-         return RB(0, 0, OB.width, OB.height)
-       }(BB) : qB(BB) : zB
-     }
- 
-     function RB(BB, OB, GB, YB) {
- ... (99 more removed lines; see GitHub link above)
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
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/122.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/122.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994)

#### 1. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122, 706];
+ export const ids = [122];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L94` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/122.js#L4) · [Before (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L94)

```diff
-   5460: (BB, OB, GB) => {
-     var YB = GB(5467);
- 
-     function DB() {}
- 
-     function QB() {}
-     QB.resetWarningCache = DB, BB.exports = function() {
-       function BB(BB, OB, GB, DB, QB, oB) {
-         if (oB !== YB) {
-           var jB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw jB.name = "Invariant Violation", jB
-         }
-       }
- 
-       function OB() {
-         return BB
- ... (75 more removed lines; see GitHub link above)
+   42593: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L99-L108` → after: `L817-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L817-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/122.js#L817-L879) · [Before (L99-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/122.js#L99-L108)

```diff
-       k: () => pB
-     });
-     var YB = GB(56),
-       DB = GB(7107),
-       QB = GB(1540),
-       oB = GB(7099),
-       jB = GB(7122),
-       yB = GB(1112);
-     const JB = "shaderPackListingView",
-       MB = "shaderPackListingFilterOpen";
+       m: () => AW,
+       o: () => wW,
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
+ ... (47 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L111-L206` → after: `L882-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L882-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/122.js#L882-L891) · [Before (L111-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/122.js#L111-L206)

```diff
-       var BB;
-       const [OB, GB] = (0, jB.e)(JB, DB.F[0]);
-       return [null !== (BB = DB.F.find((BB => BB === OB))) && void 0 !== BB ? BB : DB.F[0], GB]
-     }
- 
-     function zB() {
-       (0, YB.useEffect)((() => () => {
-         window.location.pathname.startsWith(oB.V) || (0, oB.g)()
-       }), [])
-     }
- 
-     function lB() {
-       return (0, jB.e)(MB, !1)
-     }
- 
-     function pB() {
- ... (80 more removed lines; see GitHub link above)
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
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/123.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/123.js` (66 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123, 176];
+ export const ids = [123];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L4-L6)

```diff
-   9579: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => NO
+   40312: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       f: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L45` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L9-L10) · [Before (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L8-L45)

```diff
-     var YB = GB(1571),
-       DB = GB(16),
-       QB = GB(5082),
-       oB = GB(56),
-       jB = GB(1480);
-     var yB = GB(2023),
-       JB = GB(1560),
-       MB = GB(1400),
-       PB = GB(1175),
-       zB = GB(9587),
-       lB = GB(9592),
-       pB = GB(5011),
-       qB = GB(162),
-       ZB = GB(1121),
-       NB = GB(25),
-       RB = GB(1246),
- ... (22 more removed lines; see GitHub link above)
+     var mW = OW(2780);
+     let EW = null;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L48-L76` → after: `L13-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L13-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L13-L50) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L48-L76)

```diff
-       let {
-         onApply: OB,
-         onSkip: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, PB.H)();
-       return (0, oB.useEffect)((() => {
-         EB.g.skipPlayWait()
-       }), []), (0, cB.jsx)(gB.g, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, cB.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [YB("customTexturePack:downloadPrompt"), (0, cB.jsx)("div", {
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L78` → after: `L52-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L52-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L52-L64) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L78)

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

#### 6. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L100` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L68) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L100)

```diff
-       BB.setGamePackConfirm(aB), TB = BB
+       for (var iW in WW) WW[iW] = 0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L108-L181` → after: `L72-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L72-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L72-L78) · [Before (L108-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L108-L181)

```diff
-       let {
-         schematicId: OB,
-         texturePackKey: GB,
-         onClose: YB
-       } = BB;
-       const [DB, QB] = (0, oB.useState)("prompt"), [jB, yB] = (0, oB.useState)(null), JB = (0, CB.c)();
- 
-       function MB() {
-         YB()
-       }
-       return "prompt" === DB ? (0, cB.jsx)(hB, {
-         onApply: async function() {
-           QB("downloading");
-           try {
-             const BB = await async function(BB, OB) {
-               const GB = await (0, XB.e)(OB);
- ... (58 more removed lines; see GitHub link above)
+       window.addEventListener("keydown", jW.bind(null, WW, !0), !1), window.addEventListener("keyup", jW.bind(null, WW, !1), !1);
+       var iW = {
+         passive: !0
+       };
+       WW.element.addEventListener("touchstart", lW.bind(void 0, WW), {
+         passive: !1
+       }), WW.element.addEventListener("touchend", bW.bind(void 0, WW), iW), WW.element.addEventListener("mousedown", UW.bind(null, WW, !0), iW), window.document.addEventListener("mouseup", UW.bind(null, WW, !1), iW), WW.element.addEventListener("touchmove", kW.bind(null, WW), iW) … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L183-L195` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L80-L82) · [Before (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L183-L195)

```diff
-     var tB = GB(9622),
-       BO = GB(4711),
-       OO = GB(1871),
-       GO = GB(1856),
-       YO = GB(4714),
-       DO = GB(2247),
-       QO = GB(9629);
-     var oO = GB(5150),
-       jO = GB(1299),
-       yO = GB(1813),
-       JO = GB(662),
-       MO = GB(756),
-       PO = GB(1896);
+     var tW = 0,
+       ZW = 0,
+       xW = null;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L197-L199` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L84-L85) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L197-L199)

```diff
-     function zO() {
-       const BB = DB.c.get("clientEscMenuOptions");
-       yB.gameBridge.send("setLookSensitivity", DB.c.get("isTouchScreen") ? (0, MO.q)(BB) : BB.mouseSensitivity)
+     function lW(WW, iW) {
+       iW.preventDefault(), AW(iW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L204-L214` → after: `L89-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L89-L96) · [Before (L204-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L204-L214)

```diff
-       const OB = BB.asError();
-       if (OB.debugResult.rB || (0, yO.b)(OB.debugResult.error)) return;
-       console.log("Failed to join lobby:", OB.message);
-       const GB = "timedOut" === OB.debugResult.gameServerUnreachable;
-       (0, GO.reportClientError)("matchmake_failed", OB.message, GB ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : qB.l[OB.code]);
-       const {
-         error: YB
-       } = OB.debugResult;
-       if (YB instanceof kB.p && "default" !== YB.packSource) {
-         const BB = (0, YO.g)("js", "game" === YB.packSource ? "game" : "page", (0, YO.h)(YB));
-         (0, GO.reportClientError)("texture_pack", YB, BB)
+       let iW = !1;
+       for (let OW = 0; OW < WW.touches.length; ++OW)
+         if (WW.touches[OW].identifier === xW) {
+           iW = !0;
+           break
+         } if (!iW) {
+         const iW = WW.changedTouches[0];
+         tW = iW.clientX, ZW = iW.clientY, xW = iW.identifier
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L218-L221` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L100-L101) · [Before (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L218-L221)

```diff
-     function qO(BB) {
-       if (null === BB || void 0 === BB || !BB.isError()) return !1;
-       const OB = BB.asError();
-       return OB.code === qB.l.REQUEST_TO_MATCHMAKING && !(0, yO.b)(OB.debugResult.error)
+     function bW(WW, iW) {
+       for (var OW = iW.changedTouches, mW = 0; mW < OW.length; ++mW) OW[mW].identifier === xW && (xW = null)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L223-L260` → after: `L103-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L103-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L103-L159) · [Before (L223-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L223-L260)

```diff
-     async function ZO(BB, OB, GB) {
-       const YB = (0, oO.Q)(OB);
-       async function oB(BB, OB, GB, YB) {
-         var oB;
-         if (YB.aborted) return null;
-         null === DB.c.get("gameEntrySource") && (0, DB.m)("directPlayUrl"), JO.D && (0, wB.loadWasmPlay)().catch((() => {})), DB.c.set({
-           gameState: "findingLobby"
-         }), NB.o.tM("loadingScreenState", "loadingPage:findingLobby");
-         const jB = await ZB.userContextManager.getCurrentUserContext();
-         yB.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: OB,
-           discordContext: BB instanceof mB.e ? BB.getSerialisableParams() : null
-         }), (0, OO.e)(null !== (oB = EB.g.playInputAt()) && void 0 !== oB ? oB : performance.now());
-         const JB = await async function(BB, OB, GB, YB, DB) {
-           try {
-             await (0, PO.h)(QB.reqLibsLoadedPromise, lO, "Required libraries timed out")
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L262` → after: `L161-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L161-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L161-L184) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L262)

```diff
-       return YB && (0, DB.m)("updateRejoin"), (0, DO.g)((async DB => {
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L264-L268` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L186) · [Before (L264-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L264-L268)

```diff
-           var QB;
-           let jB = BB,
-             yB = await oB(jB, OB, GB, DB);
-           for (let BB = 0; YB && BB < oO.k && (qO(yB) && await (0, oO.S)((0, oO.w)(BB), DB)); BB++) jB = (0, oO.z)(jB, BB + 1, "string" === typeof jB && (0, FB.Q)(jB)), yB = await oB(jB, OB, GB, DB);
-           return null !== (QB = yB) && void 0 !== QB && QB.isError() && pO(yB), yB
+           return window.self !== window.top
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L270-L273` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L188) · [Before (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L270-L273)

```diff
-           if ((0, GO.reportClientError)("matchmake_failed", jB, "unexpected"), yB.gameBridge.send("leaveGame", {
-               reloadPath: DB.aborted ? null : "/"
-             }), DB.aborted) return null;
-           throw jB
+           return !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L275-L284` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L190-L193) · [Before (L275-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L275-L284)

```diff
-       }), (async BB => {
-         var GB;
-         if (YB) return;
-         const DB = (0, VB.x)();
-         null !== DB && (await DB, BB.aborted) || (null !== (GB = uB.b[OB]) && void 0 !== GB && GB.playAdBeforeMatchmaking ? (EB.g.skipPlayWait(), await new Promise((BB => {
-           (0, VB.X)((() => {
-             BB(!0)
-           }), "video_start")
-         }))) : (0, VB.X)((() => {}), "video_start"))
-       }))
+       }() && (clearTimeout(WW._blurRelease), WW._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var iW in WW._modifiersHeldThroughBlur = {}, WW._keyStates) WW._keyStates[iW] && !/^Mouse\d/.test(iW) && TW(WW, iW)
+       }), 0))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L287-L574` → after: `L196-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L196-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L196-L237) · [Before (L287-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L287-L574)

```diff
-     function NO() {
-       const {
-         t: BB
-       } = (0, PB.H)(), OB = (0, JB.useNavigatePreserveSearch)(), GB = (0, YB.r)(), mB = (0, YB.A)(), iB = (0, oB.useRef)({
-         t: BB,
-         navigate: OB
-       });
-       iB.current = {
-         t: BB,
-         navigate: OB
-       };
-       const gB = (0, oB.useRef)("");
-       gB.current = GB.pathname + GB.search;
-       const {
-         gameState: rB,
-         clientEscMenuOptions: XB
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

#### 18. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L577` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L240) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L577)

```diff
-   5473: (BB, OB, GB) => {
+   37904: (WW, iW, OW) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L579` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L242-L243) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L579)

```diff
-       e: () => DB
+       e: () => bW,
+       i: () => jW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L581-L585` → after: `L245-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L245-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L245-L306) · [Before (L581-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L581-L585)

```diff
-     var YB = GB(1186);
-     async function DB(BB) {
-       const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L587-L590` → after: `L308-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L308-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L308-L327) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L587-L590)

```diff
-       });
-       if (404 === OB.status || 403 === OB.status) return null;
-       if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
-       return await OB.json()
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

#### 22. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L593` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L330) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L593)

```diff
-   9592: (BB, OB, GB) => {
+   37909: (WW, iW, OW) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L595` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L332) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L595)

```diff
-       e: () => ZB,
+       c: () => hW,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L598-L610` → after: `L335-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L335-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L335-L362) · [Before (L598-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L598-L610)

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

#### 25. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L612-L640` → after: `L364-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L364-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L364-L379) · [Before (L612-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L612-L640)

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

#### 26. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L643-L646` → after: `L383-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L383-L385) · [Before (L643-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L643-L646)

```diff
-     function NB(BB, OB) {
-       !0 !== (null === OB || void 0 === OB ? void 0 : OB.takenDown) ? VB(BB, BB("general:cantJoinThisGame"), DB.c.customGameTakenDown.text) : WB(BB, "lock", BB("studio:gameTakenDownTitle", {
-         game: OB.name
-       }), BB("studio:viewInStudio"), OB.schematicId)
+     function SW(WW) {
+       var iW;
+       clearTimeout(WW.timeout), null === (iW = WW.fade) || void 0 === iW || iW.cancel(), WW.fade = null, WW.kind = null, WW.writtenAngle = null, WW.away = !1, WW.WC && (WW.WC.className = "SoundCue SoundCueIdle", WW.WC.style.rotate = "")
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L649-L658` → after: `L388-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L388-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L388-L411) · [Before (L649-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L649-L658)

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

#### 28. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L660-L665` → after: `L413-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L413-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L413-L416) · [Before (L660-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L660-L665)

```diff
-     async function AB(BB) {
-       try {
-         return await MB.b.getGame(await zB.userContextManager.getCurrentUserContext(), BB, !0)
-       } catch (OB) {
-         return (0, MB.f)(OB) || console.error(`Failed to get game ${BB}`, OB), null
-       }
+ 
+     function yW(WW, iW) {
+       const OW = WW.direction - iW;
+       OW !== WW.writtenAngle && WW.WC && (WW.writtenAngle = OW, WW.WC.style.rotate = `${OW}rad`, MW(WW))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L668-L675` → after: `L419-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L419-L421) · [Before (L668-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L668-L675)

```diff
-     function VB(BB, OB, GB) {
-       PB.NotificationProvider.showPromptPopup({
-         icon: "lock",
-         title: OB,
-         subtitle: GB,
-         confirmText: BB("general:ok"),
-         cancelText: ""
-       })
+     function TW(WW) {
+       KW = WW;
+       for (const iW of bW) null !== iW.kind && yW(iW, WW)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L678` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L480) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L678)

```diff
-   9622: (BB, OB, GB) => {
+   37763: (WW, iW, OW) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L680` → after: `L482-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L482-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L482-L484) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L680)

```diff
-       b: () => oB
+       b: () => cW,
+       c: () => LW,
+       f: () => wW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L682-L684` → after: `L486-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L486-L492) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L682-L684)

```diff
-     var YB = GB(1360),
-       DB = GB(1217),
-       QB = GB(641);
+     var mW = OW(62);
+     const EW = new Set,
+       NW = new Set;
+ 
+     function PW() {
+       for (const WW of NW) WW()
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L687-L698` → after: `L495-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L495-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L495-L502) · [Before (L687-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L687-L698)

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
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       (0, mW.useEffect)((() => WW ? function() {
+         const WW = {
+           element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
+         };
+         return EW.add(WW), PW(), () => {
+           EW.delete(WW) && PW()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L700-L708` → after: `L504-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L504-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L504-L532) · [Before (L700-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L700-L708)

```diff
-       }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
-         if ((0, QB.Q)(BB.directJoinVmUrl)) return BB;
-         const OB = (0, DB.fb)(BB.directJoinVmUrl);
-         null === OB && (BB.directJoinVmUrl = void 0);
-         return BB
-       }(BB = function(BB) {
-         if ((0, QB.Q)(BB.gameNameWithVariation)) return BB;
-         return BB.gameNameWithVariation = (0, YB.m)(BB.gameNameWithVariation), BB
-       }(BB))
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

#### 35. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L711` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L535) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L711)

```diff
-   9614: (BB, OB, GB) => {
+   37735: (WW, iW, OW) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L713-L714` → after: `L537-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L537-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L537-L538) · [Before (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L713-L714)

```diff
-       c: () => QB,
-       d: () => DB
+       e: () => EW,
+       g: () => NW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L719` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L543) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L719)

```diff
-       YB = !0
+       return mW
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L722-L723` → after: `L546-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L546-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L546-L723) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L722-L723)

```diff
-     function QB() {
-       return YB
+     function NW(WW) {
+       return mW !== WW && (mW = WW, !0)
+     }
+   },
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
+ ... (162 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L726)

```diff
-   9629: (BB, OB, GB) => {
+   37915: (WW, iW, OW) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L728` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L728-L729) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L728)

```diff
-       e: () => jB,
+       C: () => tW,
+       d: () => mW,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L730-L731` → after: `L731-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L731-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L731-L737) · [Before (L730-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L730-L731)

```diff
-       j: () => QB,
-       l: () => oB
+       g: () => ZW,
+       k: () => PW,
+       m: () => AW,
+       q: () => cW,
+       t: () => bW,
+       w: () => wW,
+       y: () => LW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L733` → after: `L739-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L739-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L739-L741) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L733)

```diff
-     let YB = null;
+     const mW = Math.PI / 2 - .001,
+       EW = 2 * Math.PI,
+       NW = 1e-9;
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L736` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L744) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L736)

```diff
-       return `${OB}\n${null!==BB&&void 0!==BB?BB:""}`
+       iW.heading = WW.heading, iW.pitch = WW.pitch
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L739-L740` → after: `L747-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L747-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L747-L753) · [Before (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L739-L740)

```diff
-     function QB(BB) {
-       YB = BB
+     function LW(WW, iW) {
+       const OW = iW - WW;
+       return OW - EW * Math.floor((OW + Math.PI) / EW)
+     }
+ 
+     function cW(WW, iW, OW) {
+       return WW + LW(WW, iW) * OW
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L744-L745` → after: `L757-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L757-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L757-L759) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L744-L745)

```diff
-       const OB = YB;
-       return YB = null, null !== OB && OB.key === BB ? OB.settled : null
+       if (!Number.isFinite(WW)) return WW;
+       const iW = WW - EW * Math.floor(WW / EW);
+       return iW < EW ? iW : 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L748-L754` → after: `L762-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L762-L763) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L748-L754)

```diff
-     function jB(BB, OB, GB, YB) {
-       let DB = !1;
-       null !== OB && setTimeout((() => {
-         YB() && !DB && OB()
-       }), 0), BB.then((BB => {
-         DB = !0, GB(BB)
-       }))
+     function tW(WW, iW) {
+       return WW + LW(WW, iW)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L771-L772` → after: `L766-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L766-L767) · [Before (L771-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L771-L772)

```diff
-     function MB() {
-       return Promise.all([GB.e(86), GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(216), GB.e(243), GB.e(155), GB.e(101), GB.e(244), GB.e(75)]).then((() => GB(41683)))
+     function ZW(WW) {
+       return Math.max(-mW, Math.min(mW, WW))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L775-L776` → after: `L770-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L770-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L770-L772) · [Before (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L775-L776)

```diff
-     function PB() {
-       Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(103), GB.e(100), GB.e(300), GB.e(207), GB.e(250), GB.e(274), GB.e(244), GB.e(54)]).then((() => GB(42017))).catch((() => {}))
+     function xW(WW, iW, OW) {
+       const mW = Math.cos(iW);
+       return OW[0] = mW * Math.sin(WW), OW[1] = -Math.sin(iW), OW[2] = mW * Math.cos(WW), OW
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L779-L789` → after: `L775-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L775-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L775-L777) · [Before (L779-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L779-L789)

```diff
-     function zB() {
-       return oB.b.cancelDownloadForJoin(), (0, jB.d)(), (0, DB.h)(), (0, yB.d)(), (0, QB.j)(), PB(), Promise.all([GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(155), GB.e(70)]).then((() => GB(42053))).then((BB => {
-         let {
-           startJoinLoad: OB
-         } = BB;
-         OB()
-       }), (() => {})), JB ??= MB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
-         YB.c.showGamePack(BB)
-       })), BB)), (BB => {
-         throw JB = null, BB
-       })), JB
+     function lW(WW, iW, OW, mW) {
+       const EW = Math.sqrt(WW * WW + OW * OW);
+       return EW < NW && Math.abs(iW) < NW || (EW >= NW && (mW.heading = Math.atan2(WW, OW)), mW.pitch = ZW(Math.atan2(-iW, EW) + 0)), mW
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L792-L793` → after: `L780-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L780-L781) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L792-L793)

```diff
-     function lB() {
-       return PB(), GB.e(124).then((() => GB(42056))).catch((() => {})), MB().then((() => {}))
+     function AW(WW, iW) {
+       return lW(WW[0], WW[1], WW[2], iW)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L796-L799` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L784-L785) · [Before (L796-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L796-L799)

```diff
-     function pB() {
-       return MB().then((BB => {
-         BB.startWasmPreviews(), BB.prefetchWasmPreviews()
-       }))
+     function bW(WW, iW, OW) {
+       return lW(iW[0] - WW[0], iW[1] - WW[1], iW[2] - WW[2], OW)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L802` → after: `L788-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L788-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L788-L807) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L802)

```diff
-   9599: (BB, OB, GB) => {
+   37730: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW
+     });
+     var mW = OW(327),
+       EW = OW(25),
+       NW = OW(37735),
+       PW = OW(1729),
+       LW = OW(2085);
+ 
+     function cW(WW, iW) {
+       var OW, cW, wW;
+       if (!EW.d.get("isKeydownEnabled") || WW.repeat) return;
+       const tW = WW.code;
+       "Escape" === WW.key ? (0, PW.h)(WW) : null !== (OW = LW.v.OpenSettings) && void 0 !== OW && OW.includes(tW) ? (0, PW.s)(WW, mW.m.SETTINGS) : null !== (cW = LW.v.OpenCharacterCustomization) && void 0 !== cW && cW.includes(tW) ? (0, NW.e)() || (0, PW.s)(WW, mW.m.CUSTOMISATION … [truncated]
+         showDebugOverlay: !EW.d.get("showDebugOverlay")
+ ... (4 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L806-L808` → after: `L811-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L811-L812) · [Before (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L806-L808)

```diff
-       h: () => jB,
-       k: () => JB,
-       m: () => yB
+       g: () => lW,
+       j: () => ZW
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L810-L811` → after: `L814-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L814-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L814-L824) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L810-L811)

```diff
-     var YB = GB(192),
-       DB = GB(5047);
+     var mW = OW(344),
+       EW = OW(678),
+       NW = OW(687),
+       PW = OW(39);
+     const LW = {
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
+       },
+       cW = "playSessionGameNameWithVariation",
+       wW = "wasMatchmakePlayer";
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L813-L814` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L826-L828) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L813-L814)

```diff
-     function QB(BB) {
-       return oB(BB) === YB.c.gameOrPluginOnPlayerAuthRejected.code
+     function tW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       (0, NW.h)(WW, LW)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L817-L818` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L831-L832) · [Before (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L817-L818)

```diff
-     function oB(BB) {
-       return "object" === typeof BB && null !== BB ? BB.code : void 0
+     function ZW() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).setItem(wW, !0)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L821-L823` → after: `L835-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L835-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L835-L837) · [Before (L821-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L821-L823)

```diff
-     function jB(BB) {
-       var OB;
-       return null !== (OB = Object.keys(DB.b).find((OB => DB.b[OB] === BB))) && void 0 !== OB ? OB : null
+     function xW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       return (0, NW.b)(WW, LW)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L827` → after: `L841-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L841-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L841-L860) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L827)

```diff
-       return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.j;
+       const OW = (0, NW.b)(iW, LW),
+         tW = function(WW) {
+           const iW = WW.getItem(cW);
+           return "string" !== typeof iW ? null : iW
+         }(iW),
+         ZW = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).getItem(wW)
+         }(iW);
+       let xW;
+       return xW = null !== OW && null !== tW && (0, NW.e)(iW, LW) && function(WW, iW, OW) {
+           const EW = (0, mW.Tb)(WW),
+             NW = (0, mW.Tb)(iW),
+             PW = (0, mW.Lb)(WW),
+             LW = (0, mW.Lb)(iW);
+           return !(EW !== NW || !OW) || EW === NW && PW === LW
+ ... (4 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L829-L833` → after: `L862-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L862-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L862-L937) · [Before (L829-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L829-L833)

```diff
-     const JB = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+   },
+   37707: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => KW,
+       e: () => SW
+     });
+     var mW = OW(1052),
+       EW = OW(192),
+       NW = OW(339),
+       PW = OW(649),
+       LW = OW(344),
+       cW = OW(1061),
+       wW = OW(671),
+       tW = OW(698),
+       ZW = OW(5230),
+       xW = OW(100),
+ ... (60 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L836` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L940) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L836)

```diff
-   9587: (BB, OB, GB) => {
+   5713: (WW, iW, OW) => {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L838-L839` → after: `L942-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L942-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L942-L947) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L838-L839)

```diff
-       b: () => JB,
-       c: () => yB
+       d: () => NW,
+       e: () => xW,
+       i: () => cW,
+       m: () => AW,
+       o: () => wW,
+       p: () => lW
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L841` → after: `L949-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L949-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L949-L984) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L841)

```diff
-     var YB = GB(353);
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

#### 63. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L844-L857` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L987) · [Before (L844-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L844-L857)

```diff
-       if (!BB.startsWith("{")) return BB;
-       let OB;
-       try {
-         OB = JSON.parse(BB)
-       } catch {
-         return BB
-       }
-       return function(BB) {
-         if (null === (0, YB.nf)(BB)) return !1;
-         const {
-           params: OB
-         } = BB;
-         return void 0 === OB || "object" === typeof OB && null !== OB && Object.values(OB).every((BB => "string" === typeof BB))
-       }(OB) ? OB : BB
+       return PW.find((iW => iW.name === WW))
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L863` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L991) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L863)

```diff
-       return (0, QB.C)(oB.e.get().getCurrentLanguageCode(), BB.translationKey, BB.params)
+       return null === WW ? void 0 : LW.get(WW)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L867-L868` → after: `L999-L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L999-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L999-L1000) · [Before (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L867-L868)

```diff
-       const OB = DB(BB);
-       return "string" === typeof OB ? OB : jB(OB)
+       var iW, OW;
+       return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L872-L877` → after: `L1004-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1004-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/123.js#L1004-L1042) · [Before (L872-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/123.js#L872-L877)

```diff
-       const OB = DB(BB);
-       return "string" === typeof OB ? OB : jB({
-         translationKey: "moderation:kicked",
-         params: {
-           reason: jB(OB)
-         }
+       var iW;
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
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/124.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/124.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851)

#### 1. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/124.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/124.js#L4)

```diff
-   5473: (BB, OB, GB) => {
+   5807: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/124.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/124.js#L6)

```diff
-       e: () => DB
+       b: () => EW,
+       f: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L8-L32` → after: `L9-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L9-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/124.js#L9-L1403) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/124.js#L8-L32)

```diff
-     var YB = GB(1186);
-     async function DB(BB) {
-       const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === OB.status || 403 === OB.status) return null;
-       if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
-       return await OB.json()
-     }
-   },
-   42056: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       gamePackSource: () => QB
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/125.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/125.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L2)

```diff
- export const ids = [124, 125];
+ export const ids = [125];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L6)

```diff
-   5473: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => DB
+   37474: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CreateCustomLobby: () => nW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L13` → after: `L8-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L8-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L8-L79) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L8-L13)

```diff
-     var YB = GB(1186);
-     async function DB(BB) {
-       const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L15-L17` → after: `L81-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L81-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L81-L475) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L15-L17)

```diff
-       if (404 === OB.status || 403 === OB.status) return null;
-       if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
-       return await OB.json()
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L20-L22` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L478-L480) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L20-L22)

```diff
-   42056: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       gamePackSource: () => QB
+   37497: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L24-L25` → after: `L482-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L482-L486) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L24-L25)

```diff
-     var YB = GB(5473),
-       DB = GB(1540);
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(62),
+       PW = OW(5277),
+       LW = OW(1283);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L28-L31` → after: `L489-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L489-L503) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L28-L31)

```diff
-       return {
-         packKey: async OB => (await DB.b.getGame(BB, OB, !0)).customTexturePackKey,
-         fetchPack: YB.e
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

#### 8. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L34-L40` → after: `L506-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L506-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L506-L509) · [Before (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L34-L40)

```diff
-   54064: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       fetchGuestContext: () => zB,
-       guestJoinTarget: () => WB,
-       guestJoinWithPack: () => pB,
-       guestPackForGame: () => lB,
-       invalidateGuestTrafficCode: () => RB
+   37486: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => tW,
+       g: () => xW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L42-L52` → after: `L511-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L511-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L511-L553) · [Before (L42-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L42-L52)

```diff
-     var YB = GB(1186),
-       DB = GB(1540),
-       QB = GB(92),
-       oB = GB(37132),
-       jB = GB(1121),
-       yB = GB(41773),
-       JB = GB(42056),
-       MB = GB(41716);
- 
-     function PB() {
-       if (QB.featureFlags.useTurnstile) throw new yB.TurnstilePageError
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L55-L56` → after: `L556-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L556-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L556-L595) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L55-L56)

```diff
-     function zB() {
-       return (0, jB.fetchAnonymousUserContext)(!0).catch((BB => (console.warn("the guest context didn't load", BB), null)))
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L58-L65` → after: `L597-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L597-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L597-L613) · [Before (L58-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L58-L65)

```diff
-     async function lB(BB, OB, GB, YB) {
-       try {
-         const DB = await GB;
-         if (null === DB) return void console.warn(`the texture pack step for ${BB} has no guest context: the pack in play stays`);
-         await OB.packForGame(BB, (0, JB.gamePackSource)(DB), YB)
-       } catch (DB) {
-         console.warn(`the texture pack step for ${BB} failed: the pack in play stays`, DB)
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L67-L70` → after: `L615-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L615-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L615-L663) · [Before (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L67-L70)

```diff
-     async function pB(BB, OB, GB, YB) {
-       PB();
-       const DB = zB();
-       return await GB(((OB, GB) => lB(BB, OB, DB, GB))), WB(BB, OB, YB(), await DB)
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L72-L80` → after: `L665-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L665-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L665-L702) · [Before (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L72-L80)

```diff
-     let qB = null,
-       ZB = null;
-     async function NB() {
-       if ((null === qB || qB.hasExpired()) && (ZB ??= (0, jB.fetchAnonymousUserContext)(!0).then((BB => {
-           qB = BB
-         })).finally((() => {
-           ZB = null
-         })), await ZB), null === qB) throw new Error("no guest context to post as");
-       return qB.getMetricsCookies()
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L82-L110` → after: `L704-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L704-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/125.js#L704-L714) · [Before (L82-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/125.js#L82-L110)

```diff
-     async function RB() {
-       var BB;
-       await (null === (BB = qB) || void 0 === BB ? void 0 : BB.invalidateTrafficCode())
-     }
-     async function WB(BB, OB, GB) {
-       let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       PB();
-       const yB = null !== QB && void 0 !== QB ? QB : await (0, jB.fetchAnonymousUserContext)(!0);
-       if (qB = yB, yB.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
-       const JB = await DB.b.matchmakePlayer(yB, OB, BB, (0, oB.b)()),
-         zB = performance.now();
-       if (!("gameServerHost" in JB)) throw new Error(`matchmaking refused: ${JB.failReason}`);
-       const lB = YB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(JB.gameServerHost);
-       if (lB.isError()) throw new Error(`no socket URL for ${JB.gameServerHost}: ${lB.asError().message}`);
-       const pB = {
-         endpoint: lB.getValue(),
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/126.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/126.js#L4)

```diff
-   5480: (BB, OB, GB) => {
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

#### 2. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L6-L9` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/126.js#L15-L16) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/126.js#L6-L9)

```diff
-       c: () => pB,
-       d: () => AB,
-       f: () => qB,
-       g: () => WB
+       b: () => EW,
+       f: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L11-L135` → after: `L18-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/126.js#L18-L27) · [Before (L11-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/126.js#L11-L135)

```diff
-     var YB = GB(56),
-       DB = GB(5486),
-       QB = GB(4777),
-       oB = GB(1405),
-       jB = GB(5512),
-       yB = GB(1090),
-       JB = GB.n(yB),
-       MB = GB(1400),
-       PB = GB(1822),
-       zB = GB(5515),
-       lB = GB(1282);
- 
-     function pB(BB) {
-       let {
-         label: OB,
-         onClick: GB,
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L139-L1091` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/126.js#L31) · [Before (L139-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/126.js#L139-L1091)

```diff
-       return (null !== (OB = String(BB).split(".")[1]) && void 0 !== OB ? OB : "").length
-     }
- 
-     function RB(BB) {
-       let {
-         value: OB,
-         min: GB,
-         max: QB,
-         step: oB,
-         onChange: jB,
-         orientation: yB,
-         reverse: JB,
-         setIsChanging: MB,
-         tooltip: PB,
-         labels: pB,
-         handleLabel: qB,
- ... (937 more removed lines; see GitHub link above)
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : WW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/127.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/127.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596)

#### 1. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L4)

```diff
-   5549: (BB, OB, GB) => {
+   42134: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L7)

```diff
-       b: () => MB,
-       d: () => JB
+       d: () => cW,
+       g: () => LW,
+       j: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L9-L14` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L10-L12) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L9-L14)

```diff
-     var YB = GB(56),
-       DB = GB(1485),
-       QB = GB(1175),
-       oB = GB(92),
-       jB = GB(3558),
-       yB = GB(1282);
+     var mW = OW(42137),
+       EW = OW(5546),
+       NW = OW(42146);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L16-L52` → after: `L14-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L14-L23) · [Before (L16-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L16-L52)

```diff
-     function JB() {
-       return !(0, oB.isMobile)()
-     }
- 
-     function MB(BB) {
-       let {
-         disabled: OB,
-         openFolderPicker: GB,
-         onFiles: oB
-       } = BB;
-       const {
-         t: MB
-       } = (0, QB.H)(), PB = (0, YB.useRef)(null);
-       return (0, yB.jsxs)("div", {
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L55` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L26) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L55)

```diff
-   5531: (BB, OB, GB) => {
+   42149: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L58-L59` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L30-L32) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L58-L59)

```diff
-       g: () => oB,
-       j: () => QB
+       i: () => lW,
+       j: () => tW,
+       k: () => jW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L61-L62` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L34-L40) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L61-L62)

```diff
-     var YB = GB(5538);
-     const DB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];
+     var mW = OW(5546),
+       EW = OW(42158);
+     const NW = new Map,
+       PW = new Set,
+       LW = new Set;
+     let cW = 0,
+       wW = 0;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L65-L68` → after: `L43-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L43-L46) · [Before (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L65-L68)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const YB = {};
-       for (const DB in GB) YB[DB] = `\0${DB}\0`;
-       return BB(OB, YB).replace(/\0(\w+)\0/g, ((BB, OB) => GB[OB]))
+       let OW = NW.get(WW);
+       return OW || (OW = new Set, NW.set(WW, OW)), OW.add(iW), () => {
+         OW.delete(iW)
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L71-L72` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L49-L50) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L71-L72)

```diff
-     function oB(BB) {
-       return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
+     function ZW() {
+       return 0 !== cW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L76-L79` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L54-L56) · [Before (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L76-L79)

```diff
-       const OB = new Map(BB.map((BB => [yB(BB).join("."), BB])));
-       if (0 === OB.size) return [];
-       const GB = MB([...OB.values()]);
-       return 0 === GB[0].length ? [] : GB
+       return PW.add(WW), () => {
+         PW.delete(WW)
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L83` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L60-L62) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L83)

```diff
-       return DB.map((OB => OB(BB)))
+       return LW.add(WW), () => {
+         LW.delete(WW)
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L85` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L64) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L85)

```diff
-     const JB = DB.map((BB => new Set(YB.c.map(BB)).size));
+     const AW = "A raw message listener threw";
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L88-L96` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L67-L71) · [Before (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L88-L96)

```diff
-       const OB = DB.map((OB => new Set(BB.map(OB)))),
-         GB = OB.reduce(((BB, OB) => BB * OB.size), 1),
-         YB = OB.every(((BB, OB) => 1 === BB.size || BB.size === JB[OB]));
-       if (GB === BB.length && YB) return [DB.filter(((BB, GB) => 1 === OB[GB].size)).map((OB => OB(BB[0])))];
-       let QB = null;
-       for (let oB = 0; oB < DB.length; oB++) {
-         if (1 === OB[oB].size) continue;
-         const GB = PB(BB, DB[oB]).flatMap(MB);
-         (null === QB || GB.length < QB.length) && (QB = GB)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW;
+       for (const mW of iW) try {
+         mW()
+       } catch (OW) {
+         WW ? (0, EW.n)(OW, AW) : console.error(AW, OW)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L102-L108` → after: `L106-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L106-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L106-L126) · [Before (L102-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L102-L108)

```diff
-       const GB = new Map;
-       for (const DB of BB) {
-         var YB;
-         const BB = OB(DB);
-         GB.set(BB, [...null !== (YB = GB.get(BB)) && void 0 !== YB ? YB : [], DB])
-       }
-       return [...GB.values()]
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

#### 15. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L111-L113` → after: `L129-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L129-L132) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L111-L113)

```diff
-   7139: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       ShaderPackPublishForm: () => WB
+   42137: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => EW,
+       e: () => tW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L115-L163` → after: `L134-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L134-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L134-L217) · [Before (L115-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L115-L163)

```diff
-     var YB = GB(56),
-       DB = GB(7107),
-       QB = GB(200),
-       oB = GB(5546),
-       jB = GB(1383),
-       yB = GB(1485),
-       JB = GB(1735),
-       MB = GB(1112),
-       PB = GB(7147),
-       zB = GB(7152),
-       lB = GB(1540),
-       pB = GB(1175),
-       qB = GB(7159),
-       ZB = GB(7186),
-       NB = GB(7099),
-       RB = GB(1282);
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

#### 17. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L165-L180` → after: `L219-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L219-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L219-L246) · [Before (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L165-L180)

```diff
-       })), CB = !fB && !UB.isLoggedIn() && !QB.c.offlineMode, HB = mB.trim(), vB = HB.length < DB.E, sB = null !== kB && !1 !== (null === (PB = kB.validation) || void 0 === PB ? void 0 : PB.ok) && !aB && !vB && !CB && !fB;
-       return (0, RB.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, RB.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: WB ? nB("shaderPackListing:uploadIntro", {
-             minutes: String(DB.I / 6e4)
-           }) : nB("shaderPackListing:publishIntro")
-         }), (0, RB.jsx)(SB, {}), CB && (0, RB.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: nB("shaderPackListing:publishNeedsLogin")
-         }), (0, RB.jsx)(zB.b, {
-           busy: aB,
-           disabled: aB || cB,
-           onFiles: BB => {
-             dB(null), bB(BB)
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

#### 18. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L182-L314` → after: `L248-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L248-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L248-L301) · [Before (L182-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L182-L314)

```diff
-         }), kB && (0, RB.jsxs)("div", {
-           className: "ShaderPackPublishSummary",
-           children: [(0, RB.jsx)("div", {
-             className: "ShaderPackPublishPackName",
-             children: kB.pack.manifest.name
-           }), (0, RB.jsxs)("div", {
-             className: "ShaderPackPublishPackSize",
-             children: [nB("shaderPackListing:sizeValue", {
-               kilobytes: String((0, NB.P)(kB.sourceBytes))
-             }), " \xb7", " ", nB("shaderPackListing:filesValue", {
-               files: String(kB.pack.files.length)
-             })]
-           }), (0, RB.jsx)(AB, {
-             picked: kB
-           })]
-         }), !WB && (0, RB.jsxs)(RB.Fragment, {
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

#### 19. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L316-L331` → after: `L303-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L303-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L303-L377) · [Before (L316-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L316-L331)

```diff
-     function SB() {
-       const {
-         t: BB
-       } = (0, pB.H)(), [OB, GB] = BB("shaderPackListing:bloxdhubHelp", {
-         site: VB
-       }).split(VB);
-       return (0, RB.jsxs)("p", {
-         className: "ShaderPackPublishIntro",
-         children: [OB, (0, RB.jsx)("a", {
-           className: "ShaderPackPublishLink",
-           href: DB.i,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: DB.e
-         }), GB]
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

#### 20. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L334` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L380) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L334)

```diff
-   5538: (BB, OB, GB) => {
+   42146: (WW, iW, OW) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L336-L338` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L382-L386) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L336-L338)

```diff
-       b: () => YB.k,
-       c: () => DB,
-       g: () => YB.r
+       c: () => PW
+     });
+     var mW = OW(42131);
+     const EW = new TextDecoder("utf-8", {
+       ignoreBOM: !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L340-L344` → after: `L388-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L388-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L388-L490) · [Before (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L340-L344)

```diff
-     var YB = GB(5546);
-     const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
-       strict: BB,
-       program: OB
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L346` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L492) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L346)

```diff
-   5546: (BB, OB, GB) => {
+   42131: (WW, iW, OW) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L348-L351` → after: `L494-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L494-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L494-L513) · [Before (L348-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L348-L351)

```diff
-       B: () => zB,
-       e: () => jB,
-       h: () => oB,
-       k: () => YB,
+       C: () => PW,
+       E: () => hW,
+       F: () => EW,
+       J: () => LW,
+       K: () => lW,
+       O: () => TW,
+       S: () => yW,
+       V: () => SW,
+       Y: () => tW,
+       ab: () => ZW,
+       b: () => KW,
+       d: () => jW,
+       db: () => JW,
+       f: () => UW,
+       g: () => kW,
+       hb: () => AW,
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L353` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L515) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L353)

```diff
-       p: () => PB,
+       pb: () => cW,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L355` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L517) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L355)

```diff
-       u: () => QB,
+       tb: () => HW,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L357` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L519) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L357)

```diff
-       y: () => MB
+       z: () => wW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L359` → after: `L521-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L521-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L521-L723) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L359)

```diff
-     const YB = 5;
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

#### 29. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L362` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L726-L727) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L362)

```diff
-       return BB === YB
+       const iW = WW.index(4);
+       return 0 === iW ? WW.str() : 1 === iW ? WW.long() : 2 === iW ? WW.bool() : nW(WW)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L366` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L731-L733) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L366)

```diff
-       return [...BB.features]
+       return 0 === WW.index(2) ? null : function(WW) {
+         return WW.map(uW)
+       }(WW)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L373-L380` → after: `L737-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L737-L739) · [Before (L373-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L373-L380)

```diff
-       if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
-       const OB = [];
-       for (const [GB, YB] of Object.entries(BB)) {
-         if ("string" !== typeof YB) return `${GB} isn't text.`;
-         OB.push({
-           path: GB,
-           source: YB
-         })
+       return {
+         translationKey: WW.str(),
+         params: oW(WW)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L401-L403` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L744) · [Before (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L401-L403)

```diff
-       const OB = {};
-       for (const GB of BB) OB[GB.path] = GB.source;
-       return OB
+       return 0 === WW.index(2) ? null : WW.str()
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L406-L407` → after: `L747-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L747-L754) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L406-L407)

```diff
-     function PB(BB, OB) {
-       return BB < OB ? -1 : BB > OB ? 1 : 0
+     function vW(WW) {
+       return 0 === WW.index(2) ? null : function(WW) {
+         return {
+           color: eW(WW),
+           colour: eW(WW),
+           fontSize: eW(WW)
+         }
+       }(WW)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L411-L414` → after: `L758-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L758-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L758-L792) · [Before (L411-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L411-L414)

```diff
-       const OB = new TextEncoder;
-       let GB = 0;
-       for (const {
-           source: YB
+       return {
+         icon: WW.str(),
+         style: vW(WW)
+       }
+     }
+ 
+     function DW(WW) {
+       const iW = WW.index(3);
+       return 0 === iW ? {
+         string: WW.str()
+       } : 1 === iW ? {
+         styledEntityName: nW(WW)
+       } : {
+         styledTranslatedText: dW(WW)
+       }
+     }
+ ... (19 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L416-L417` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L794) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L416-L417)

```diff
-         of BB) GB += OB.encode(YB).byteLength;
-       return GB
+       }(WW)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L421-L424` → after: `L798-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L798-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L798-L802) · [Before (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L421-L424)

```diff
-       if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
-       if (BB.length > yB) return `A file path is over ${yB} characters.`;
-       if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
-       return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
+       return {
+         str: DW(WW),
+         style: fW(WW),
+         clickableUrl: eW(WW)
+       }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L428-L487` → after: `L805-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L805-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L805-L944) · [Before (L428-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L428-L487)

```diff
-     function qB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const YB = new Map;
-       OB.forEach(((BB, OB) => {
-         let {
-           numAnimStates: GB,
-           animStartIdx: DB
-         } = BB;
-         for (let QB = 1; QB < GB; QB++) YB.set(DB + QB - 1, OB)
-       }));
-       const DB = Object.entries(BB),
-         QB = new Map;
-       for (const [qB, ZB] of DB) {
-         const BB = pB.exec(qB);
-         "1" === BB?.[2] && QB.set(BB[1], ZB + 1)
-       }
- ... (44 more removed lines; see GitHub link above)
+     function XW(WW) {
+       return WW.str()
+     }
+ 
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
+ ... (124 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L489-L510` → after: `L946-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L946-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L946-L956) · [Before (L489-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L489-L510)

```diff
-         const GB = JB.get(qB),
-           DB = BB?.root ?? pB;
-         if (GB !== DB && lB.set(DB, {
-             name: DB,
-             texture: GB,
-             kind: "frame"
-           }), BB) {
-           const OB = QB.get(BB.root);
-           PB[qB] = {
-             id: OB,
-             rotation: BB.rotation
-           }, zB.set(GB, OB), lB.set(pB, {
-             name: pB,
-             texture: GB,
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

#### 39. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L513-L524` → after: `L1009-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L1009-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/127.js#L1009-L1011) · [Before (L513-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/127.js#L513-L524)

```diff
-         named: [...zB].sort(((BB, OB) => {
-           let [GB] = BB, [YB] = OB;
-           return GB < YB ? -1 : GB > YB ? 1 : 0
-         })).map((BB => {
-           let [OB, GB] = BB;
-           return {
-             name: OB,
-             id: GB
-           }
-         })),
-         aliases: [...lB.values()],
-         layers: PB
+         EE: WW.str(),
+         NE: WW.str(),
+         PE: WW.str()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/128.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/128.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128, 131, 152, 153];
+ export const ids = [128];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L4-L14` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L4-L17) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L4-L14)

```diff
-   5538: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB.k,
-       c: () => DB,
-       g: () => YB.r
-     });
-     var YB = GB(5546);
-     const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
-       strict: BB,
-       program: OB
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L16` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L19) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L16)

```diff
-   41498: (BB, OB, GB) => {
+   5864: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L18-L19` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L21) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L18-L19)

```diff
-       b: () => PB,
-       installListedShaderPack: () => MB
+       e: () => li
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L21-L32` → after: `L23-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L23-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L23-L63) · [Before (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L21-L32)

```diff
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

#### 6. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L34-L37` → after: `L65-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L65-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L65-L127) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L34-L37)

```diff
-       const GB = await PB(BB, OB);
-       return "failed" === GB.kind ? GB : await (0, yB.saveShaderPack)(GB.stored, OB) ? ((0, yB.markShaderPackChangePending)(), GB) : {
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

#### 7. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L40-L45` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L130-L144) · [Before (L40-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L40-L45)

```diff
-     async function PB(BB, OB) {
-       const GB = await async function(BB) {
-         let {
-           packId: OB,
-           sourceHash: GB
-         } = BB;
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

#### 8. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L47-L56` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L146-L148) · [Before (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L47-L56)

```diff
-           const BB = await fetch(`${QB.clientSideServerUrls.s3Url}/${(0,YB.Q)(OB,GB)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!BB.ok) return console.error(`Failed to download shader pack ${OB} (${BB.status})`), null;
-           const DB = await BB.json();
-           return "object" !== typeof DB || null === DB ? (console.error(`Shader pack ${OB}'s source isn't an object`), null) : DB
-         } catch (DB) {
-           return console.error(`Failed to download shader pack ${OB}`, DB), null
+           mW && !mW.done && (OW = NW.return) && OW.call(NW)
+         } finally {
+           if (EW) throw EW.error
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L123-L128` → after: `L155-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L155-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L155-L255) · [Before (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L123-L128)

```diff
-       return {
-         manifest: BB.manifest,
-         files: (0, YB.y)(BB.files),
-         validation: OB,
-         ...GB && {
-           listing: GB
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L134-L137` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L273) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L134-L137)

```diff
-       return Object.keys(BB.files).map((OB => ({
-         path: OB,
-         source: BB.files[OB]
-       })))
+       return "object" === typeof WW && null !== WW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L142-L147` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L277-L279) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L142-L147)

```diff
-       const OB = lB.then(BB);
-       return lB = OB.catch((() => {})), OB
-     }
- 
-     function qB(BB, OB) {
-       return pB((() => NB(BB, OB)))
+       return kW(WW.target.files).map((function(WW) {
+         return ZW(WW)
+       }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L150-L158` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L282-L296) · [Before (L150-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L150-L158)

```diff
-     function ZB(BB, OB, GB) {
-       return pB((async () => JSON.stringify(await (0, jB.e)()) === JSON.stringify(BB) && (null === OB ? (await RB(), !0) : NB(OB, GB))))
-     }
-     async function NB(BB, OB) {
-       const GB = await QB.d.setItem(jB.c, BB);
-       return GB && uB(BB, OB), GB
-     }
-     async function RB() {
-       await QB.d.removeItem(jB.c), QB.g.removeItem(oB.d)
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L161-L162` → after: `L299-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L299-L316) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L161-L162)

```diff
-     function WB() {
-       return pB(RB)
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L165-L166` → after: `L319-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L319-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L319-L322) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L165-L166)

```diff
-     function AB(BB, OB) {
-       return "active" === VB(BB, OB).kind
+     function UW(WW) {
+       return WW.filter((function(WW) {
+         return -1 === xW.indexOf(WW.name)
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L169-L190` → after: `L325-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L325-L329) · [Before (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L169-L190)

```diff
-     function VB(BB, OB) {
-       var GB;
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
- ... (6 more removed lines; see GitHub link above)
+     function kW(WW) {
+       if (null === WW) return [];
+       for (var iW = [], OW = 0; OW < WW.length; OW++) {
+         var mW = WW[OW];
+         iW.push(mW)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L194-L195` → after: `L334-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L334-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L334-L337) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L194-L195)

```diff
-     function SB() {
-       QB.i.setItem(JB, performance.timeOrigin)
+     function sW(WW) {
+       if ("function" !== typeof WW.webkitGetAsEntry) return KW(WW);
+       var iW = WW.webkitGetAsEntry();
+       return iW && iW.isDirectory ? YW(iW) : KW(WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L198-L199` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L340-L343) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L198-L199)

```diff
-     function nB() {
-       return QB.i.getItem(JB) === performance.timeOrigin
+     function MW(WW) {
+       return WW.reduce((function(WW, iW) {
+         return wW(wW([], cW(WW), !1), cW(Array.isArray(iW) ? MW(iW) : [iW]), !1)
+       }), [])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L203` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L347-L350) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L203)

```diff
-       return !(0, DB.g)(BB.manifest.apiVersion)
+       var iW = WW.getAsFile();
+       if (!iW) return Promise.reject("".concat(WW, " is not a File"));
+       var OW = ZW(iW);
+       return Promise.resolve(OW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L207` → after: `L354-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L354-L358) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L207)

```diff
-       return MB ??= BB.yI((0, yB.shaderPackTextures)()), MB
+       return PW(this, void 0, void 0, (function() {
+         return LW(this, (function(iW) {
+           return [2, WW.isDirectory ? YW(WW) : yW(WW)]
+         }))
+       }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L210-L212` → after: `L361-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L361-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L361-L394) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L210-L212)

```diff
-     function kB(BB, OB) {
-       var GB;
-       return (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.headerVersion) !== fB(OB)
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L216-L217` → after: `L398-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L398-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L398-L408) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L216-L217)

```diff
-       return pB((async () => {
-         uB(await (0, jB.e)(!0), BB)
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

#### 22. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L221-L224` → after: `L413-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L413-L420) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L221-L224)

```diff
-     function KB() {
-       return pB((async () => {
-         QB.g.removeItem(oB.d)
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L228` → after: `L424-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L424-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L424-L431) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L228)

```diff
-       AB(BB, OB) ? QB.g.setItem(oB.d, !0) : QB.g.removeItem(oB.d)
+       var OW = Object.keys(WW);
+       if (Object.getOwnPropertySymbols) {
+         var mW = Object.getOwnPropertySymbols(WW);
+         iW && (mW = mW.filter((function(iW) {
+           return Object.getOwnPropertyDescriptor(WW, iW).enumerable
+         }))), OW.push.apply(OW, mW)
+       }
+       return OW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L240-L248` → after: `L434-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L434-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L434-L443) · [Before (L240-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L240-L248)

```diff
-     function oB() {
-       return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: OB,
-           textureNameToIndex: GB,
-           textureAnimationData: QB
-         } = BB;
-         return DB ??= (0, YB.o)(GB, QB, OB), DB
-       })), QB
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

#### 25. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L251-L253` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L446-L452) · [Before (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L251-L253)

```diff
-     function jB() {
-       if (null === DB) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return DB
+     function nW(WW, iW, OW) {
+       return iW in WW ? Object.defineProperty(WW, iW, {
+         value: OW,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : WW[iW] = OW, WW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L255-L271` → after: `L454-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L454-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L454-L463) · [Before (L255-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L255-L271)

```diff
-   },
-   7186: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => yB,
-       f: () => jB
-     });
-     var YB = GB(7193),
-       DB = GB(7174),
-       QB = GB(113);
-     const oB = 100;
-     async function jB(BB, OB) {
-       var GB;
-       let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GB = navigator.gpu) && void 0 !== GB ? GB : null;
-       const oB = BB.VOB(OB, (0, DB.shaderPackTextures)());
-       if (oB.errors.length > 0) return JB(BB, oB.errors, oB.offInStrict);
-       const jB = await async function(BB) {
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

#### 27. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L273-L274` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L465) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L273-L274)

```diff
-           const OB = await (0, QB.w)(BB);
-           return OB ? await OB.requestDevice() : null
+           for (OW = OW.call(WW); !(PW = (mW = OW.next()).done) && (NW.push(mW.value), !iW || NW.length !== iW); PW = !0);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L276` → after: `L467-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L467-L473) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L276)

```diff
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", OB), null
+           LW = !0, EW = cW
+         } finally {
+           try {
+             PW || null == OW.return || OW.return()
+           } finally {
+             if (LW) throw EW
+           }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L278-L308` → after: `L475-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L475-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L475-L485) · [Before (L278-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L278-L308)

```diff
-       }(YB);
-       if (!jB) return null;
-       let yB = !1;
-       jB.lost.then((() => {
-         yB = !0
-       }));
-       try {
-         const OB = await Promise.all(oB.validationModules.map((OB => async function(BB, OB, GB) {
-           OB.pushErrorScope("validation");
-           const YB = OB.createShaderModule({
-               code: GB.code
-             }),
-             DB = OB.popErrorScope(),
-             {
-               messages: QB
-             } = await YB.getCompilationInfo(),
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

#### 30. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L311-L324` → after: `L488-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L488-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L488-L525) · [Before (L311-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L311-L324)

```diff
-     async function yB(BB, OB) {
-       var GB;
-       if (!(0, YB.shaderPackNeedsCheck)(BB, OB) || (0, YB.isOtherApiVersion)(BB)) return BB;
-       const DB = await jB(OB, (0, YB.storedShaderPackFiles)(BB));
-       if (!DB) return BB;
-       const QB = !1 === (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) && !BB.validation.fromRecheck,
-         oB = {
-           ...BB,
-           validation: QB ? DB : {
-             ...DB,
-             fromRecheck: !0
-           }
-         };
-       return await (0, YB.replaceShaderPack)(BB, oB, OB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), oB
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

#### 31. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L328-L334` → after: `L529-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L529-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L529-L536) · [Before (L328-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L328-L334)

```diff
-       return {
-         headerVersion: (0, YB.pageShaderPackValidationVersion)(BB),
-         ok: 0 === OB.length,
-         errors: OB.slice(0, oB),
-         moreErrors: Math.max(0, OB.length - oB),
-         offInStrict: GB
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

#### 32. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L353` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L540) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L353)

```diff
-       return BB === YB
+       return void 0 !== WW && null !== WW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L357` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L544) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L357)

```diff
-       return [...BB.features]
+       return "function" === typeof WW.isPropagationStopped ? WW.isPropagationStopped() : "undefined" !== typeof WW.cancelBubble && WW.cancelBubble
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L364-L371` → after: `L548-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L548-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L548-L563) · [Before (L364-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L364-L371)

```diff
-       if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
-       const OB = [];
-       for (const [GB, YB] of Object.entries(BB)) {
-         if ("string" !== typeof YB) return `${GB} isn't text.`;
-         OB.push({
-           path: GB,
-           source: YB
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

#### 35. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L392-L394` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L568) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L392-L394)

```diff
-       const OB = {};
-       for (const GB of BB) OB[GB.path] = GB.source;
-       return OB
+       return "audio/*" === WW || "video/*" === WW || "image/*" === WW || "text/*" === WW || /\w+\/[-+.\w]+/g.test(WW)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L397-L398` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L571-L572) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L397-L398)

```diff
-     function PB(BB, OB) {
-       return BB < OB ? -1 : BB > OB ? 1 : 0
+     function zW(WW) {
+       return /^.*\.[\w]+$/.test(WW)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L402-L405` → after: `L580-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L580-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L580-L607) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L402-L405)

```diff
-       const OB = new TextEncoder;
-       let GB = 0;
-       for (const {
-           source: YB
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

#### 38. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L407` → after: `L609-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L609-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L609-L636) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L407)

```diff
-         of BB) GB += OB.encode(YB).byteLength;
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

#### 39. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L412-L415` → after: `L641-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L641-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L641-L658) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L412-L415)

```diff
-       if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
-       if (BB.length > yB) return `A file path is over ${yB} characters.`;
-       if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
-       return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
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

#### 40. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L420-L433` → after: `L662-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L662-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L662-L672) · [Before (L420-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L420-L433)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const YB = new Map;
-       OB.forEach(((BB, OB) => {
-         let {
-           numAnimStates: GB,
-           animStartIdx: DB
-         } = BB;
-         for (let QB = 1; QB < GB; QB++) YB.set(DB + QB - 1, OB)
-       }));
-       const DB = Object.entries(BB),
-         QB = new Map;
-       for (const [qB, ZB] of DB) {
-         const BB = pB.exec(qB);
-         "1" === BB?.[2] && QB.set(BB[1], ZB + 1)
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

#### 41. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L435-L478` → after: `L674-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L674-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L674-L683) · [Before (L435-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L435-L478)

```diff
-       const oB = BB => {
-           const OB = pB.exec(BB);
-           return OB && QB.has(OB[1]) ? {
-             root: OB[1],
-             rotation: Number(OB[2]) - 1
-           } : null
-         },
-         jB = new Set(DB.map((BB => {
-           let [OB] = BB;
-           return oB(OB)?.root ?? OB
-         }))),
-         yB = (BB, GB) => {
-           const YB = BB.replace(/_?0$/, "");
-           return (OB[GB]?.numAnimStates ?? 0) > 1 && !jB.has(YB) ? YB : BB
-         },
-         JB = new Map;
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

#### 42. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L480-L494` → after: `L685-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L685-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L685-L950) · [Before (L480-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L480-L494)

```diff
-         const GB = JB.get(qB),
-           DB = BB?.root ?? pB;
-         if (GB !== DB && lB.set(DB, {
-             name: DB,
-             texture: GB,
-             kind: "frame"
-           }), BB) {
-           const OB = QB.get(BB.root);
-           PB[qB] = {
-             id: OB,
-             rotation: BB.rotation
-           }, zB.set(GB, OB), lB.set(pB, {
-             name: pB,
-             texture: GB,
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

#### 43. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L496-L511` → after: `L952-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L952-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L952-L1042) · [Before (L496-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L496-L511)

```diff
-         } else zB.set(GB, qB + 1)
-       }
-       for (const pB of zB.keys()) lB.delete(pB);
-       for (const [pB, qB] of GB) {
-         const BB = zB.get(qB);
-         void 0 === BB || zB.has(pB) || (zB.set(pB, BB), lB.delete(pB))
-       }
-       return {
-         named: [...zB].sort(((BB, OB) => {
-           let [GB] = BB, [YB] = OB;
-           return GB < YB ? -1 : GB > YB ? 1 : 0
-         })).map((BB => {
-           let [OB, GB] = BB;
-           return {
-             name: OB,
-             id: GB
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

#### 44. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L513-L515` → after: `L1044-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L1044-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/128.js#L1044-L1111) · [Before (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/128.js#L513-L515)

```diff
-         })),
-         aliases: [...lB.values()],
-         layers: PB
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129, 131, 152, 153];
+ export const ids = [129];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L4-L8` → after: `L4-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L4-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L4-L446) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L4-L8)

```diff
-   5538: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB.k,
-       c: () => DB,
-       g: () => YB.r
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L10-L14` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L448-L449) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L10-L14)

```diff
-     var YB = GB(5546);
-     const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
-       strict: BB,
-       program: OB
-     })))))
+     var SW = KW;
+     iW.default = SW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L16` → after: `L451-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L451-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L451-L518) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L16)

```diff
-   7193: (BB, OB, GB) => {
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L18-L31` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L520) · [Before (L18-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L18-L31)

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
+       default: () => yW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L33-L42` → after: `L522-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L522-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L522-L701) · [Before (L33-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L33-L42)

```diff
-     var YB = GB(5546),
-       DB = GB(5538),
-       QB = GB(31),
-       oB = GB(3885),
-       jB = GB(7198),
-       yB = GB(7174);
-     const JB = "shaderPackChangePending";
-     let MB = null;
- 
-     function PB(BB, OB, GB) {
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

#### 7. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L44-L222` → after: `L703-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L703-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L703-L742) · [Before (L44-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L44-L222)

```diff
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
-     }
-     let lB = Promise.resolve();
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

#### 8. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L224-L369` → after: `L744-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L744-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/129.js#L744-L799) · [Before (L224-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/129.js#L224-L369)

```diff
-       }
-       return OB.sort(((BB, OB) => PB(BB.path, OB.path))),
-         function(BB) {
-           if (0 === BB.length) return "The pack has no .wgsl files.";
-           if (BB.length > jB) return `The pack has more than ${jB} .wgsl files.`;
-           const OB = new Set;
-           for (const {
-               path: GB
-             }
-             of BB) {
-             const BB = lB(GB);
-             if (null !== BB) return BB;
-             if (OB.has(GB)) return `The pack has two files at ${GB}.`;
-             OB.add(GB)
-           }
-           return zB(BB) > oB ? `The pack's .wgsl files are over ${oB/1024} KB in total.` : null
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 131, 152];
+ export const ids = [130, 715];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L4-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L4-L94) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L4)

```diff
-   5538: (BB, OB, GB) => {
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L6` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L96) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L6)

```diff
-       b: () => YB.k,
+       b: () => xW,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L8-L27` → after: `L98-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L98-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L98-L302) · [Before (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L8-L27)

```diff
-       g: () => YB.r
-     });
-     var YB = GB(5546);
-     const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
-       strict: BB,
-       program: OB
-     })))))
-   },
-   39925: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       ShaderPackPage: () => yB,
-       harnessShaderPackMode: () => zB,
-       setHarnessUrlShaderPack: () => PB,
-       shaderPackPage: () => MB
-     });
-     var YB = GB(92),
- ... (4 more removed lines; see GitHub link above)
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
+       const [iW, OW] = (0, LW.d)(wW, EW.F[0]);
+       return [null !== (WW = EW.F.find((WW => WW === iW))) && void 0 !== WW ? WW : EW.F[0], OW]
+ ... (189 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L29-L96` → after: `L304-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L304-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L304-L381) · [Before (L29-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L29-L96)

```diff
-       status: "none"
-     };
-     class yB {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, QB.j)(YB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), JB().then((BB => {
-             BB && DB.g.removeItem(QB.d)
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
+ ... (62 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L99-L101` → after: `L384-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L384-L386) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L99-L101)

```diff
-       e: () => QB
-     });
-     var YB = GB(31);
+       g: () => NW
+     });
+     var mW = OW(39);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L106-L134` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L391-L394) · [Before (L106-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L106-L134)

```diff
-       return null !== (BB = await YB.d.getItem(DB, OB)) && void 0 !== BB ? BB : null
-     }
-   },
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
- ... (13 more removed lines; see GitHub link above)
+       return null !== (WW = await mW.f.getItem(EW, iW)) && void 0 !== WW ? WW : null
+     }
+   },
+   7570: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L138-L142` → after: `L406-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L406-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L406-L411) · [Before (L138-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L138-L142)

```diff
-       h: () => oB,
-       k: () => YB,
-       o: () => qB,
-       p: () => PB,
-       r: () => DB,
+       f: () => lW,
+       g: () => sW,
+       i: () => SW,
+       j: () => cW,
+       n: () => EW,
+       q: () => KW,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L144-L202` → after: `L413-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L413-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L413-L427) · [Before (L144-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L144-L202)

```diff
-       v: () => JB,
-       y: () => MB
-     });
-     const YB = 5;
- 
-     function DB(BB) {
-       return BB === YB
-     }
- 
-     function QB(BB) {
-       return [...BB.features]
-     }
-     const oB = 262144,
-       jB = 256,
-       yB = 256;
- 
- ... (43 more removed lines; see GitHub link above)
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L204-L313` → after: `L429-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L429-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/130.js#L429-L470) · [Before (L204-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/130.js#L204-L313)

```diff
-         of BB) GB += OB.encode(YB).byteLength;
-       return GB
-     }
- 
-     function lB(BB) {
-       if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
-       if (BB.length > yB) return `A file path is over ${yB} characters.`;
-       if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
-       return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
-     }
-     const pB = /^(.*)\[rot\[([1-4])$/;
- 
-     function qB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const YB = new Map;
-       OB.forEach(((BB, OB) => {
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/131.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/131.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L2)

```diff
- export const ids = [131, 152];
+ export const ids = [131, 186];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L4)

```diff
-   7174: (BB, OB, GB) => {
+   10163: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L6-L11` → after: `L6-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L6-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L6-L198) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L6-L11)

```diff
-       loadShaderPackTextures: () => oB,
-       shaderPackTextures: () => jB
-     });
-     var YB = GB(5546);
-     let DB = null,
-       QB = null;
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L14` → after: `L201-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L201-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L201-L831) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L14)

```diff
-       return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
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
+ ... (615 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L16-L18` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L833) · [Before (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L16-L18)

```diff
-           FORMER_BLOCK_IMAGE_NAMES: OB,
-           textureNameToIndex: GB,
-           textureAnimationData: QB
+           startJoinLoad: iW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L20` → after: `L835-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L835-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L835-L839) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L20)

```diff
-         return DB ??= (0, YB.o)(GB, QB, OB), DB
+         iW()
+       }), (() => {})), tW ??= xW().then((WW => ((0, wW.f)("phase_chunk"), WW.startWasmPlay(), (0, wW.f)("phase_start"), WW.followPageUiPack((WW => {
+         mW.d.showGamePack(WW)
+       })), WW)), (WW => {
+         throw tW = null, WW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L25-L26` → after: `L844-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L844-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L844-L852) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L25-L26)

```diff
-       if (null === DB) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return DB
+       return lW(), OW.e(132).then((() => OW(42537))).catch((() => {})), xW().then((() => {
+         (0, wW.f)("phase_chunk")
+       }))
+     }
+ 
+     function jW() {
+       return xW().then((WW => {
+         WW.startWasmPreviews(), WW.prefetchWasmPreviews()
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L29` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L855) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L29)

```diff
-   5546: (BB, OB, GB) => {
+   10209: (WW, iW, OW) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L31-L32` → after: `L857-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L857-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L857-L892) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L31-L32)

```diff
-       B: () => zB,
-       e: () => jB,
+       d: () => wW,
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
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L35-L77` → after: `L895-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L895-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L895-L1030) · [Before (L35-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L35-L77)

```diff
-       o: () => qB,
-       p: () => PB,
-       r: () => DB,
-       u: () => QB,
-       v: () => JB,
-       y: () => MB
-     });
-     const YB = 5;
- 
-     function DB(BB) {
-       return BB === YB
-     }
- 
-     function QB(BB) {
-       return [...BB.features]
-     }
- ... (27 more removed lines; see GitHub link above)
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L79-L207` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/131.js#L1032-L1033) · [Before (L79-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/131.js#L79-L207)

```diff
-           return zB(BB) > oB ? `The pack's .wgsl files are over ${oB/1024} KB in total.` : null
-         }(OB) ?? OB
-     }
- 
-     function MB(BB) {
-       const OB = {};
-       for (const GB of BB) OB[GB.path] = GB.source;
-       return OB
-     }
- 
-     function PB(BB, OB) {
-       return BB < OB ? -1 : BB > OB ? 1 : 0
-     }
- 
-     function zB(BB) {
-       const OB = new TextEncoder;
- ... (113 more removed lines; see GitHub link above)
+         }
+         EW = await iW()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/132.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/132.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L5-L19428` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/132.js#L4) · [Before (L5-L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/132.js#L5-L19428)

```diff
-   6699: function(BB, OB, GB) {
-     var YB;
-     ! function() {
-       var DB, QB = 1e9,
-         oB = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         jB = !0,
-         yB = "[DecimalError] ",
-         JB = yB + "Invalid argument: ",
-         MB = yB + "Exponent out of range: ",
-         PB = Math.floor,
- ... (19408 more removed lines; see GitHub link above)
+   5897: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L19432-L20189` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/132.js#L8-L12) · [Before (L19432-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/132.js#L19432-L20189)

```diff
-     var YB = function(BB, OB) {
-       for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB]
-     }
-   },
-   6724: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => jB,
-       c: () => zB,
-       e: () => JB
-     });
-     GB(5930), GB(56), GB(5782);
- 
-     function YB(BB) {
-       return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
-         return typeof BB
-       } : function(BB) {
- ... (742 more removed lines; see GitHub link above)
+     var mW = OW(1185);
+     async function EW(WW) {
+       const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
+         headers: {
+           Accept: "application/json"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L20191-L20221` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/132.js#L14-L17) · [Before (L20191-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/132.js#L20191-L20221)

```diff
-         return GB[QB % GB.length]
-       }
-       return QB.domain = function(GB) {
-         if (!arguments.length) return OB.slice();
-         OB = [], BB = new YB;
-         for (const YB of GB) BB.has(YB) || BB.set(YB, OB.push(YB) - 1);
-         return QB
-       }, QB.range = function(BB) {
-         return arguments.length ? (GB = Array.from(BB), QB) : GB.slice()
-       }, QB.unknown = function(BB) {
-         return arguments.length ? (DB = BB, QB) : DB
-       }, QB.copy = function() {
-         return MB(OB, GB).unknown(DB)
-       }, yB.g.apply(QB, arguments), QB
-     }
-   },
- ... (15 more removed lines; see GitHub link above)
+       });
+       if (404 === iW.status || 403 === iW.status) return null;
+       if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
+       return await iW.json()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L20227-L20229` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/132.js#L20-L22) · [Before (L20227-L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/132.js#L20227-L20229)

```diff
-   6615: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => JB
+   42537: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       gamePackSource: () => NW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L20231-L20309` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/132.js#L24-L25) · [Before (L20231-L20309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/132.js#L20231-L20309)

```diff
-     const YB = Math.PI,
-       DB = 2 * YB,
-       QB = 1e-6,
-       oB = DB - QB;
- 
-     function jB(BB) {
-       this._ += BB[0];
-       for (let OB = 1, GB = BB.length; OB < GB; ++OB) this._ += arguments[OB] + BB[OB]
-     }
-     class yB {
-       constructor(BB) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == BB ? jB : function(BB) {
-           let OB = Math.floor(BB);
-           if (!(OB >= 0)) throw new Error(`invalid digits: ${BB}`);
-           if (OB > 15) return jB;
-           const GB = 10 ** OB;
- ... (63 more removed lines; see GitHub link above)
+     var mW = OW(5897),
+       EW = OW(1584);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L20312-L20338` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/132.js#L28-L30) · [Before (L20312-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/132.js#L20312-L20338)

```diff
-       let OB = 3;
-       return BB.digits = function(GB) {
-         if (!arguments.length) return OB;
-         if (null == GB) OB = null;
-         else {
-           const BB = Math.floor(GB);
-           if (!(BB >= 0)) throw new RangeError(`invalid digits: ${GB}`);
-           OB = BB
-         }
-         return BB
-       }, () => new yB(OB)
-     }
-     yB.prototype
-   },
-   6463: (BB, OB, GB) => {
-     GB.d(OB, {
- ... (11 more removed lines; see GitHub link above)
+       return {
+         packKey: async iW => (await EW.e.getGame(WW, iW, !0)).customTexturePackKey,
+         fetchPack: mW.b
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/133.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/133.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61)

#### 1. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L3)

```diff
- export const ids = [133];
+ export const ids = [132, 133];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L5-L316` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L4-L6) · [Before (L5-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L5-L316)

```diff
-   6950: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       Graph: () => EB,
-       debug: () => uG,
-       default: () => IG,
-       graphlib: () => QB,
-       layout: () => lG,
-       util: () => mG,
-       version: () => QO
-     });
-     var YB = Object.defineProperty,
-       DB = (BB, OB, GB) => ((BB, OB, GB) => OB in BB ? YB(BB, OB, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: GB
- ... (296 more removed lines; see GitHub link above)
+   5897: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L318-L333` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L8-L22) · [Before (L318-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L318-L333)

```diff
-     var NB = {};
-     jB(NB, {
-       CycleException: () => uB,
-       bellmanFord: () => WB,
-       components: () => AB,
-       dijkstra: () => nB,
-       dijkstraAll: () => UB,
-       findCycles: () => kB,
-       floydWarshall: () => KB,
-       isAcyclic: () => IB,
-       postorder: () => gB,
-       preorder: () => rB,
-       prim: () => XB,
-       shortestPaths: () => wB,
-       tarjan: () => fB,
-       topsort: () => mB
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L335-L498` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L24-L25) · [Before (L335-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L335-L498)

```diff
-     var RB = () => 1;
- 
-     function WB(BB, OB, GB, YB) {
-       return function(BB, OB, GB, YB) {
-         let DB, QB = {},
-           oB = 0,
-           jB = BB.nodes(),
-           yB = function(BB) {
-             let OB = QB[BB.v],
-               YB = QB[BB.w];
-             if (!OB || !YB) return;
-             let oB = GB(BB);
-             OB.distance + oB < YB.distance && (QB[BB.w] = {
-               distance: OB.distance + oB,
-               predecessor: BB.v
-             }, DB = !0)
- ... (148 more removed lines; see GitHub link above)
+     var mW = OW(5897),
+       EW = OW(1584);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L501-L530` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L28-L30) · [Before (L501-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L501-L530)

```diff
-       let OB = 0,
-         GB = [],
-         YB = {},
-         DB = [];
- 
-       function QB(oB) {
-         var jB;
-         let yB = YB[oB] = {
-           onStack: !0,
-           lowlink: OB,
-           index: OB++
-         };
-         if (GB.push(oB), null == (jB = BB.successors(oB)) || jB.forEach((function(BB) {
-             if (BB in YB) {
-               let OB = YB[BB];
-               null != OB && OB.onStack && (yB.lowlink = Math.min(yB.lowlink, OB.index))
- ... (14 more removed lines; see GitHub link above)
+       return {
+         packKey: async iW => (await EW.e.getGame(WW, iW, !0)).customTexturePackKey,
+         fetchPack: mW.b
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L537-L586` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L51-L52) · [Before (L537-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L537-L586)

```diff
-     function kB(BB) {
-       return fB(BB).filter((function(OB) {
-         var GB;
-         let YB = OB[0];
-         return !!YB && (OB.length > 1 || 1 === OB.length && (null != (GB = BB.outEdges(YB, YB)) ? GB : []).length > 0)
-       }))
-     }
-     var dB = () => 1;
- 
-     function KB(BB, OB, GB) {
-       return function(BB, OB, GB) {
-         let YB = {},
-           DB = BB.nodes();
-         return DB.forEach((function(BB) {
-           let QB = {};
-           YB[BB] = QB, QB[BB] = {
- ... (34 more removed lines; see GitHub link above)
+     function ZW() {
+       if (NW.featureFlags.useTurnstile) throw new cW.TurnstilePageError
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L594-L603` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L55-L56) · [Before (L594-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L594-L603)

```diff
-     function mB(BB) {
-       let OB = {},
-         GB = {},
-         YB = [];
-       if (BB.sinks().forEach((function DB(QB) {
-           var oB;
-           if (QB in GB) throw new uB;
-           QB in OB || (GB[QB] = !0, OB[QB] = !0, null == (oB = BB.predecessors(QB)) || oB.forEach(DB), delete GB[QB], YB.push(QB))
-         })), Object.keys(OB).length !== BB.nodeCount()) throw new uB;
-       return YB
+     function xW() {
+       return (0, LW.fetchAnonymousUserContext)(!0).catch((WW => (console.warn("the guest context didn't load", WW), null)))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L605-L606` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L58) · [Before (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L605-L606)

```diff
- 
-     function IB(BB) {
+     async function lW(WW, iW, OW, mW) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L608` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L60-L62) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L608)

```diff
-         mB(BB)
+         const EW = await OW;
+         if (null === EW) return void console.warn(`the texture pack step for ${WW} has no guest context: the pack in play stays`);
+         await iW.packForGame(WW, (0, wW.gamePackSource)(EW), mW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L610-L611` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L64) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L610-L611)

```diff
-         if (OB instanceof uB) return !1;
-         throw OB
+         console.warn(`the texture pack step for ${WW} failed: the pack in play stays`, EW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L634-L642` → after: `L67-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L67-L70) · [Before (L634-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L634-L642)

```diff
- 
-     function LB(BB, OB, GB) {
-       return FB(BB, OB, GB, (function(BB, OB) {
-         return BB.push(OB), BB
-       }), [])
-     }
- 
-     function gB(BB, OB) {
-       return LB(BB, OB, "post")
+     async function AW(WW, iW, OW, mW) {
+       ZW();
+       const EW = xW();
+       return await OW(((iW, OW) => lW(WW, iW, EW, OW))), sW(WW, iW, mW(), await EW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L644-L646` → after: `L72-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L72-L80) · [Before (L644-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L644-L646)

```diff
- 
-     function rB(BB, OB) {
-       return LB(BB, OB, "pre")
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L648-L649` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L82) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L648-L649)

```diff
- 
-     function XB(BB, OB) {
+     async function kW() {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L651-L929` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L84) · [Before (L651-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L651-L929)

```diff
-       let YB, DB = new yB,
-         QB = {},
-         oB = new VB;
- 
-       function jB(BB) {
-         let GB = BB.v === YB ? BB.w : BB.v,
-           DB = oB.priority(GB);
-         if (void 0 !== DB) {
-           let jB = OB(BB);
-           jB < DB && (QB[GB] = YB, oB.decrease(GB, jB))
-         }
-       }
-       if (0 === BB.nodeCount()) return DB;
-       BB.nodes().forEach((function(BB) {
-         oB.add(BB, Number.POSITIVE_INFINITY), DB.setNode(BB)
-       }));
- ... (263 more removed lines; see GitHub link above)
+       await (null === (WW = bW) || void 0 === WW ? void 0 : WW.invalidateTrafficCode())
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L931-L1507` → after: `L86-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L86-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L86-L99) · [Before (L931-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L931-L1507)

```diff
- 
-     function PO(BB, OB, GB, YB, DB) {
-       let QB = [],
-         oB = DB ? QB : void 0;
-       return (BB.inEdges(YB.v) || []).forEach((YB => {
-         let oB = BB.edge(YB),
-           jB = BB.node(YB.v);
-         DB && QB.push({
-           v: YB.v,
-           w: YB.w
-         }), jB.out -= oB, zO(OB, GB, jB)
-       })), (BB.outEdges(YB.v) || []).forEach((YB => {
-         let DB = BB.edge(YB),
-           QB = YB.w,
-           oB = BB.node(QB);
-         oB.in -= DB, zO(OB, GB, oB)
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

#### 16. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1509-L2100` → after: `L101-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L101-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L101-L104) · [Before (L1509-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L1509-L2100)

```diff
-       return pB && (ZB.barycenter = lB / pB, ZB.weight = pB), ZB
-     }
- 
-     function tO(BB, OB, GB) {
-       let YB;
-       for (; OB.length && (YB = OB[OB.length - 1]).i <= GB;) OB.pop(), BB.push(YB.vs), GB++;
-       return GB
-     }
- 
-     function BG(BB, OB, GB, YB, DB) {
-       var QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB;
-       let ZB = null,
-         NB = DB;
-       "boolean" == typeof YB ? (NB = YB, ZB = null) : void 0 !== YB && (ZB = YB);
-       let RB = BB.children(OB),
-         WB = BB.node(OB),
- ... (576 more removed lines; see GitHub link above)
+       return {
+         target: {
+           ...await (0, tW.c)(cW, AW, OW, !1),
+           postCookies: UW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2102-L2493` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/133.js#L106-L107) · [Before (L2102-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/133.js#L2102-L2493)

```diff
-         zB = [];
-       BB.edges().forEach((OB => {
-         (MB.has(OB.v) || MB.has(OB.w)) && zB.push({
-           edge: OB,
-           label: BB.edge(OB)
-         })
-       }));
-       let lB = new Map;
-       MB.forEach((OB => {
-         let GB = BB.parent(OB);
-         lB.set(OB, "string" == typeof GB ? GB : void 0)
-       })), JB.forEach(((OB, GB) => {
-         let YB = BB.node(GB),
-           DB = [];
-         OB.forEach((OB => {
-           let GB = BB.node(OB);
- ... (376 more removed lines; see GitHub link above)
+         matchedAt: xW,
+         freshMs: tW.b
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/134.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/134.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/134.js#L4)

```diff
-   6997: (BB, OB, GB) => {
+   5910: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/134.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/134.js#L6)

```diff
-       b: () => YB
+       e: () => AW,
+       h: () => MW,
+       k: () => bW,
+       n: () => sW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L9-L46` → after: `L693-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/134.js#L693-L715) · [Before (L9-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/134.js#L9-L46)

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

#### 4. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L49-L168` → after: `L1012-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L1012-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/134.js#L1012-L1041) · [Before (L49-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/134.js#L49-L168)

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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/135.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/135.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135, 705];
+ export const ids = [135];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L6)

```diff
-   37022: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => gO
+   5978: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       e: () => wW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L8-L40` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L9-L14) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L8-L40)

```diff
-     var YB = GB(331),
-       DB = GB(3944),
-       QB = GB(3982),
-       oB = GB(3976),
-       jB = GB(3968),
-       yB = GB(1175),
-       JB = GB(31),
-       MB = GB(1822),
-       PB = GB(1405),
-       zB = GB(1485),
-       lB = GB(1090),
-       pB = GB.n(lB),
-       qB = GB(1735),
-       ZB = GB(56),
-       NB = GB(70),
-       RB = GB(2549),
- ... (17 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1532),
+       NW = OW(1172),
+       PW = OW(100),
+       LW = OW(4304),
+       cW = OW(1283);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L42-L245` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L16-L17) · [Before (L42-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L42-L245)

```diff
-     function rB(BB) {
-       var OB;
-       let {
-         eventName: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, yB.H)(), DB = dB.g[GB], [QB, oB] = (0, ZB.useState)((() => Date.now() >= DB.endsAt.getTime())), [jB, JB] = (0, ZB.useState)("overall"), MB = function(BB, OB) {
-         const {
-           userContext: GB,
-           isUserContextUpdating: YB
-         } = (0, VB.d)(), DB = `${BB}:${OB}`, [QB, oB] = (0, ZB.useState)({
-           requestKey: DB,
-           leaderboard: {
-             status: "loading"
-           }
- ... (188 more removed lines; see GitHub link above)
+     function wW() {
+       return !(0, PW.isMobile)()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L250-L251` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L22-L24) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L250-L251)

```diff
-         event: OB,
-         progress: GB
+         disabled: iW,
+         openFolderPicker: OW,
+         onFiles: PW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L255` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/135.js#L28) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/135.js#L255)

```diff
-       } = (0, yB.H)(), DB = null !== GB && OB.prizeGoals.some(((BB, OB) => GB[OB] >= BB.target));
+       } = (0, NW.B)(), ZW = (0, mW.useRef)(null);
```
