# Changed — Bundle Modifications Report (Part 016 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `16 / 99` (**312** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 61. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1742-L1759` → after: `L1245-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1245-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1245-L1253) · [Before (L1742-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L1742-L1759)

```diff
-       const rM = (0, Hr.d)(MM.ccu.data.length, MM);
-       return MM.ccu.data.map(((MM, iM) => ({
-         dateMs: rM[iM],
-         band: MM
-       })))
-     }
- 
-     function zi(MM) {
-       const rM = (0, Hr.d)(MM.ccu.data.length, MM);
-       return MM.ccu.data.map(((MM, iM) => ({
-         dateMs: rM[iM],
-         band: Oi(MM)
-       })))
-     }
- 
-     function Li(MM) {
- ... (2 more removed lines; see GitHub link above)
+       let {
+         schematicData: XU,
+         setTexturePack: zU,
+         initializeTexturePack: yU,
+         publishFormEnabled: QU
+       } = UU;
+       const {
+         t: AU
+       } = (0, FU.I)(), [oU, DU] = (0, cU.useState)(null), [EU, YU] = (0, cU.useState)(null), [NU, pU] = (0, cU.useState)(!1), aU = (0, CU.b)(), tU = QU && !NU, gU = XU.customTexturePackKey;
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1761-L1765` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1255) · [Before (L1761-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L1761-L1765)

```diff
-     function mi(MM, rM) {
-       if (null === rM) return MM;
-       const iM = new Map;
-       for (const OM of rM) iM.set(OM.dateMs, OM.band);
-       return MM.map((MM => {
+       function kU(UU) {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1767-L1798` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1257) · [Before (L1767-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L1767-L1798)

```diff
-         const OM = iM.get(MM.dateMs);
-         return {
-           ...MM,
-           comparisonValue: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.p50) && void 0 !== rM ? rM : null,
-           comparisonBand: void 0 === OM ? null : Li(OM)
-         }
-       }))
-     }
- 
-     function Hi(MM, rM, iM) {
-       return null === MM ? null : MM.points.slice(Math.max(0, MM.points.length - rM)).map((MM => ({
-         dateMs: MM.dateMs,
-         band: MM[iM]
-       })))
-     }
- 
- ... (16 more removed lines; see GitHub link above)
+         DU(UU.metaData.id), YU(null !== (XU = UU.metaData.fromFolderName) && void 0 !== XU ? XU : null), (UU.metaData.id !== UX.p.CUSTOM || UU.metaData.fromFolderName) && zU(UU)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1801-L1981` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1302) · [Before (L1801-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L1801-L1981)

```diff
- 
-     function yi(MM, rM) {
-       const {
-         p20: iM,
-         p50: OM,
-         p80: SM
-       } = rM;
-       return null === MM || null === iM || null === OM || null === SM ? null : MM >= SM ? "topFifth" : MM >= OM ? "aboveMedian" : MM >= iM ? "belowMedian" : "bottomFifth"
-     }
- 
-     function li(MM) {
-       return "game" === MM.type ? MM.gameAnalyticsId : null
-     }
-     const Ei = (0, OM.createContext)(null);
-     var Ui = iM(6869);
-     const Gi = {
- ... (165 more removed lines; see GitHub link above)
+     var QX = zU(5632);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2006-L2008` → after: `L1307-L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1307-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1307-L1309) · [Before (L2006-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2006-L2008)

```diff
-         title: rM,
-         id: iM,
-         children: OM
+         gameCategory: zU,
+         setGameCategory: cU,
+         disabled: yU
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2010-L2016` → after: `L1311-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1311-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1311-L1342) · [Before (L2010-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2010-L2016)

```diff
-       return (0, ar.jsxs)("section", {
-         id: iM,
-         className: "StudioMetricsSection",
-         children: [(0, ar.jsx)("h2", {
-           className: "StudioMetricsSectionTitle",
-           children: rM
-         }), OM]
+       const AU = null !== (XU = (0, pU.ib)(zU)) && void 0 !== XU ? XU : "other";
+       return (0, BU.jsxs)("div", {
+         className: "GameCategoryPicker",
+         children: [(0, BU.jsx)(gU.g, {
+           label: "worldBuilder:gameCategoryGroup",
+           className: "GameCategoryGroup",
+           disabled: yU,
+           children: (0, BU.jsx)(kU.d, {
+             options: pU.Y.map((UU => ({
+               value: UU,
+               label: pU.X[UU]
+             }))),
+             value: AU,
+             onChange: UU => {
+               UU.value !== AU && cU(pU.S[UU.value][0])
+             }
+ ... (16 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2022` → after: `L1348-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1348-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1348-L1349) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2022)

```diff
-         change: rM
+         editor: XU,
+         onClose: zU
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2026-L2043` → after: `L1353-L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1353-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1353-L1410) · [Before (L2026-L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2026-L2043)

```diff
-       } = (0, HM.A)();
-       return null === rM.value ? (0, ar.jsx)("div", {
-         className: "StudioMetricCardChange"
-       }) : "unchanged" === rM.value.direction ? (0, ar.jsx)("div", {
-         className: "StudioMetricCardChange",
-         children: iM("studio:metricNoChangeVsPrevious", {
-           days: rM.comparisonDays
-         })
-       }) : (0, ar.jsxs)("div", {
-         className: aM()("StudioMetricCardChange", {
-           StudioMetricCardChangeUp: "up" === rM.value.direction,
-           StudioMetricCardChangeDown: "down" === rM.value.direction
-         }),
-         children: [(0, ar.jsx)(UM.b, {
-           name: "up" === rM.value.direction ? "caret-up" : "caret-down"
-         }), iM("studio:metricChangeVsPrevious", {
- ... (2 more removed lines; see GitHub link above)
+       } = (0, FU.I)(), {
+         schematicData: yU,
+         updateSchematicData: QU,
+         publishFormEnabled: oU,
+         formEnabled: DU
+       } = XU;
+       return (0, BU.jsxs)(BU.Fragment, {
+         children: [(0, BU.jsxs)(ZU, {
+           icon: "pen-to-square",
+           title: cU("worldBuilder:basicsSection"),
+           disabled: !DU,
+           children: [(0, BU.jsx)(RU, {
+             label: cU("general:name"),
+             caption: cU("worldBuilder:schematicNameTagsHint"),
+             children: (0, BU.jsx)(AU.e, {
+               className: "SchematicPageName",
+ ... (42 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2056` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1417) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2056)

```diff
-         comparison: rM
+         editor: XU
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2060-L2070` → after: `L1421-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1421-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1421-L1440) · [Before (L2060-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2060-L2070)

```diff
-       } = (0, HM.A)();
-       if (null === rM.formattedValue) return (0, ar.jsx)("div", {
-         className: "StudioMetricCardComparison"
-       });
-       const OM = rM.placement;
-       if (null !== OM) {
-         const MM = "topFifth" === OM || "aboveMedian" === OM;
-         return (0, ar.jsx)("div", {
-           className: aM()("StudioMetricCardComparison", {
-             StudioMetricCardComparisonAhead: MM,
-             StudioMetricCardComparisonBehind: !MM
+       } = (0, FU.I)(), {
+         schematicData: cU,
+         formEnabled: yU,
+         hasUnsavedChanges: AU,
+         publishSuspendedUntil: YU
+       } = XU, NU = (0, rU.l)(), IU = !0 === cU.gamePublished ? YU : null, pU = yU && AU && null === IU;
+       return (0, BU.jsxs)("footer", {
+         className: "SchematicPageFooter",
+         children: [null !== IU && (0, BU.jsx)("div", {
+           className: "SchematicPageFooterNotice",
+           children: NU(IU)
+         }), yU && AU && null === IU && (0, BU.jsxs)("div", {
+           className: "SchematicPageFooterStatus",
+           children: [(0, BU.jsx)("span", {
+             className: "SchematicPageFooterStatusDot"
+           }), zU("worldBuilder:unsavedChanges")]
+ ... (4 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2072-L2094` → after: `L1442-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1442-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1442-L1452) · [Before (L2072-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2072-L2094)

```diff
-           children: iM(Ni[OM])
-         })
-       }
-       const SM = rM.change;
-       if (null === SM || "unchanged" === SM.direction) return (0, ar.jsx)("div", {
-         className: "StudioMetricCardComparison",
-         children: iM("studio:metricVsComparison", {
-           label: rM.label,
-           value: rM.formattedValue
-         })
-       });
-       const jM = "up" === SM.direction;
-       return (0, ar.jsxs)("div", {
-         className: aM()("StudioMetricCardComparison", {
-           StudioMetricCardComparisonAhead: jM,
-           StudioMetricCardComparisonBehind: !jM
- ... (7 more removed lines; see GitHub link above)
+           children: (0, BU.jsxs)(QU.f, {
+             className: "SaveChangesButton",
+             onClick: () => XU.saveSchematic(cU.gamePublished),
+             disabled: !pU,
+             children: [(0, BU.jsxs)("span", {
+               className: yU ? "" : "SaveChangesButtonBodyHidden",
+               children: [(0, BU.jsx)(EU.d, {
+                 name: "wrench"
+               }), " ", zU("worldBuilder:saveChanges")]
+             }), !yU && (0, BU.jsx)(oU.b, {})]
+           })
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2101-L2109` → after: `L1459-L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1459-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1459-L1462) · [Before (L2101-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2101-L2109)

```diff
-         icon: rM,
-         iconImage: iM,
-         className: OM,
-         label: SM,
-         value: jM,
-         hoverInfo: PM,
-         change: nM,
-         comparison: QM,
-         isPlaceholder: zM = !1
+         schematic: XU,
+         onSchematicUpdate: zU,
+         onClose: yU,
+         inSourceWorld: AU
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2111-L2139` → after: `L1464-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1464-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1464-L1493) · [Before (L2111-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2111-L2139)

```diff
-       return (0, ar.jsxs)("div", {
-         className: aM()("StudioMetricCard", OM, {
-           StudioMetricCardPlaceholder: zM
-         }),
-         children: [void 0 !== QM && (0, ar.jsx)(Ai, {
-           comparison: QM
-         }), (0, ar.jsxs)("div", {
-           className: "StudioMetricCardBody",
-           children: [void 0 !== iM && (0, ar.jsx)("img", {
-             className: "StudioMetricCardIcon StudioMetricCardIconImage",
-             src: iM,
-             alt: ""
-           }), void 0 === iM && (0, ar.jsx)(UM.b, {
-             name: rM,
-             className: "StudioMetricCardIcon"
-           }), (0, ar.jsxs)("div", {
- ... (13 more removed lines; see GitHub link above)
+       const {
+         t: oU
+       } = (0, FU.I)();
+ 
+       function DU() {
+         null === yU || void 0 === yU || yU()
+       }
+       const EU = (0, QX.b)(XU, {
+         onNavigateAway: DU,
+         inSourceWorld: AU
+       });
+       return (0, cU.useEffect)((() => {
+         null === zU || void 0 === zU || zU(EU.schematicData)
+       }), [EU.schematicData, zU]), (0, BU.jsxs)("div", {
+         className: "SchematicPage SchematicPagePopupVariant",
+         children: [(0, BU.jsxs)("div", {
+ ... (14 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2148-L2150` → after: `L1503-L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1503-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1503-L1539) · [Before (L2148-L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2148-L2150)

```diff
-         game: lM,
-         comparisonSelection: GM,
-         comparisonStats: CM
+         schematic: XU,
+         onSchematicUpdate: zU,
+         onClose: cU,
+         inSourceWorld: QU
+       } = UU;
+       yU.NotificationProvider.showCustomPopup({
+         body: UU => (0, BU.jsx)(DX, {
+           schematic: XU,
+           onSchematicUpdate: zU,
+           onClose: UU,
+           inSourceWorld: QU
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: cU,
+         unlockPointerKey: "schematicPagePopup"
+       })
+ ... (21 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2154-L2350` → after: `L1543-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1543-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1543-L1568) · [Before (L2154-L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2154-L2350)

```diff
-       } = (0, HM.A)(), {
-         userContext: bM,
-         isUserContextUpdating: wM
-       } = (0, hM.b)(), tM = (0, OM.useContext)(Ei), [gM, uM] = (0, OM.useState)({
-         status: "loading"
-       }), [pM, WM] = (0, OM.useState)({
-         status: "loading"
-       }), [sM, ZM] = (0, OM.useState)(Di), [oM, fM] = (0, OM.useState)(ki), [YM, NM] = (0, OM.useState)(0);
-       (0, OM.useEffect)((() => {
-         if (wM) return;
-         let MM = !1;
-         return uM({
-           status: "loading"
-         }), kM.c.getGameStats(bM, lM.gameAnalyticsId).then((rM => {
-           MM || uM({
-             status: "loaded",
- ... (181 more removed lines; see GitHub link above)
+       } = (0, QU.I)(), {
+         schematicData: IU,
+         formEnabled: pU,
+         publishFormEnabled: aU,
+         publishSuspendedUntil: tU
+       } = XU, gU = !pU || !aU, kU = (0, EU.l)();
+       return (0, YU.jsxs)("div", {
+         className: yU()("PublishButtonContainer", zU),
+         children: [XU.canEditSourceWorld && (0, YU.jsxs)(FU.f, {
+           onClick: XU.editSourceWorld,
+           disabled: gU,
+           children: [(0, YU.jsx)(AU.d, {
+             name: "edit"
+           }), " ", NU("worldBuilder:editSourceWorld")]
+         }), !IU.gamePublished && (0, YU.jsx)(oU.d, {
+           tooltipInner: (0, YU.jsx)("div", {
+ ... (10 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2352-L2354` → after: `L1570-L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1570-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1570-L1575) · [Before (L2352-L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2352-L2354)

```diff
-           }), (0, ar.jsx)(fi, {
-             title: eM("studio:sectionRankingMetrics", {
-               days: jr
+           })
+         }), !0 === IU.gamePublished && (0, YU.jsxs)(YU.Fragment, {
+           children: [(0, YU.jsx)(oU.d, {
+             tooltipInner: (0, YU.jsx)("div", {
+               className: "PublishButtonTooltip",
+               children: NU("worldBuilder:unpublishAsGameDescription")
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2356-L2388` → after: `L1577-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1577-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1577-L1583) · [Before (L2356-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2356-L2388)

```diff
-             id: Gi.rankingMetrics,
-             children: (0, ar.jsxs)("div", {
-               className: "StudioMetricsGrid",
-               children: [(0, ar.jsx)(xi, {
-                 icon: "joystick",
-                 label: eM("studio:metricAvgDailyPlays"),
-                 value: cM && null !== cM.avgDailyPlays ? (0, nM.T)(Math.round(cM.avgDailyPlays)) : "-",
-                 hoverInfo: eM("studio:metricAvgDailyPlaysInfo", {
-                   range: Pr
-                 }),
-                 change: hr("avgDailyPlays"),
-                 comparison: Er("avgDailyPlays", (MM => (0, nM.T)(Math.round(MM)))),
-                 isPlaceholder: !cM || null === cM.avgDailyPlays
-               }), (0, ar.jsx)(xi, {
-                 icon: "hourglass-clock",
-                 label: eM("studio:metricAvgSession"),
- ... (17 more removed lines; see GitHub link above)
+             children: (0, YU.jsxs)(FU.G, {
+               onClick: XU.unpublishSchematic,
+               disabled: gU,
+               children: [(0, YU.jsx)(AU.d, {
+                 name: "rocket-launch"
+               }), " ", NU("worldBuilder:unpublishAsGame"), " ", (0, YU.jsx)(AU.d, {
+                 name: "info-circle"
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2391-L2525` → after: `L1586-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1586-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1586-L1591) · [Before (L2391-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2391-L2525)

```diff
-           }), (0, ar.jsxs)(fi, {
-             title: eM("studio:sectionHistoricalMetrics"),
-             id: Gi.historicalMetrics,
-             children: [(0, ar.jsx)("div", {
-               className: "StudioMetricsRangeTabs",
-               children: si.map((MM => (0, ar.jsx)(EM.V, {
-                 active: sM === MM,
-                 onClick: () => {
-                   ZM(MM)
-                 },
-                 children: eM("studio:lastNDays", {
-                   days: MM
-                 })
-               }, MM)))
-             }), "error" === gM.status && (0, ar.jsxs)("div", {
-               className: "StudioMetricsChartsError",
- ... (119 more removed lines; see GitHub link above)
+           }), (0, YU.jsxs)(FU.f, {
+             onClick: XU.playGame,
+             disabled: gU,
+             children: [(0, YU.jsx)(AU.d, {
+               name: "joystick"
+             }), " ", NU("general:playGame")]
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2527` → after: `L1593-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1593-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1593-L1598) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2527)

```diff
-         })
+         }), !pU && (0, YU.jsx)(DU.b, {
+           loaderType: "Secondary"
+         }), !IU.gamePublished && null !== tU && (0, YU.jsx)("div", {
+           className: "PublishSuspendedNotice",
+           children: kU(tU)
+         })]
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2530-L2541` → after: `L1601-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1601-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1601-L1610) · [Before (L2530-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2530-L2541)

```diff
- 
-     function Fi(MM) {
-       const rM = 6e4 * MM.bucketMinutes,
-         iM = {};
-       for (const [OM, SM] of Object.entries(MM.eventCounts)) {
-         iM[OM] = {};
-         for (const [jM, aM] of Object.entries(SM)) {
-           iM[OM][jM] = {};
-           for (const [SM, PM] of Object.entries(aM)) iM[OM][jM][SM] = PM.map(((iM, OM) => ({
-             minuteMs: MM.eventCountEndBucketMs - (PM.length - 1 - OM) * rM,
-             eventCount: iM
-           })))
+   },
+   5527: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => yU
+     });
+     var cU = zU(1203);
+     async function yU(UU) {
+       const XU = await fetch(`${cU.clientSideServerUrls.s3Url}/${UU}`, {
+         headers: {
+           Accept: "application/json"
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2543-L2555` → after: `L1612-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1612-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1612-L1615) · [Before (L2543-L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2543-L2555)

```diff
-       }
-       return iM
-     }
- 
-     function Bi(MM) {
-       const rM = 6e4 * MM.bucketMinutes,
-         iM = Math.round(pM[MM.period] / MM.bucketMinutes);
-       return Array.from({
-         length: iM
-       }, ((OM, SM) => ({
-         minuteMs: MM.eventCountEndBucketMs - (iM - 1 - SM) * rM,
-         eventCount: 0
-       })))
+       });
+       if (404 === XU.status || 403 === XU.status) return null;
+       if (!XU.ok) throw new Error(`Failed to download the texture pack (${XU.status})`);
+       return await XU.json()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2558-L2587` → after: `L1629-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1629-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1629-L1661) · [Before (L2558-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2558-L2587)

```diff
-     function Xi(MM, rM) {
-       let {
-         excludedEventType: iM
-       } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const OM = MM => [...MM].sort().map((MM => ({
-           value: MM,
-           label: MM
-         }))),
-         SM = Object.keys(MM),
-         jM = [...new Set(Object.values(MM).flatMap((MM => Object.keys(MM))))].filter((MM => MM !== iM)),
-         aM = Object.fromEntries(Object.entries(MM).map((MM => {
-           let [iM, OM] = MM;
-           return [iM, Object.fromEntries(Object.entries(OM).map((MM => {
-             let [iM, OM] = MM;
-             const SM = Object.entries(OM).sort(((MM, rM) => {
-               let [iM] = MM, [OM] = rM;
- ... (14 more removed lines; see GitHub link above)
+     function FU() {
+       let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       const {
+         userContext: XU
+       } = (0, AU.d)(), [zU, QU] = (0, cU.useState)((() => ({
+         loading: UU && XU.isLoggedIn(),
+         eligibility: null
+       })));
+       if ((0, cU.useEffect)((() => {
+           if (!UU || !XU.isLoggedIn()) return void QU({
+             loading: !1,
+             eligibility: null
+           });
+           let zU = !1;
+           return yU.c.getCreatorEligibility(XU).then((UU => {
+             zU || QU({
+ ... (17 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2589-L2625` → after: `L1663-L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1663-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1663-L1666) · [Before (L2589-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2589-L2625)

```diff
-         filters: [OM(SM), OM(jM)],
-         data: aM
-       }
-     }
-     const Ii = {
-       eventsPerPlayerPerMinute: 20,
-       positionsPerPlayerPerMinute: 120,
-       maxEventTypeLength: 64,
-       maxEventValueLength: 128,
-       maxGameCategoryIdLength: 128,
-       maxGameCategories: 20,
-       maxEventTypesPerCategory: 20,
-       maxEventValuesPerType: 50,
-       maxGameDistinctPositions: 1e5,
-       maxRoomDistinctPositions: 2e4
-     };
- ... (21 more removed lines; see GitHub link above)
+         loading: zU.loading,
+         eligibility: {
+           thumbnailUploadWait: null !== oU && oU.until > FU ? oU : null,
+           publishSuspendedUntil: null !== DU && DU > FU ? DU : null
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2627` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1668) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2627)

```diff
-       }), [iM, ...rM]), jM
+       }
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2631-L2632` → after: `L1672-L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1672-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1672-L1681) · [Before (L2631-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2631-L2632)

```diff
-       for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-       return rM.some((MM => "error" === MM.status)) ? "error" : rM.some((MM => "loading" === MM.status)) ? "loading" : "ready"
+       const {
+         t: UU,
+         selectedLanguage: XU
+       } = (0, QU.I)();
+       return (zU, cU) => UU(zU, {
+         date: (0, QU.f)(XU.code, zU, cU, {
+           dateStyle: "medium",
+           timeStyle: "short"
+         })
+       })
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2636-L2637` → after: `L1684-L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1684-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1684-L1698) · [Before (L2636-L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2636-L2637)

```diff
-     function Vi(MM, rM) {
-       return MM > rM ? "reached" : MM >= rM * Ti ? "near" : null
+     function DU() {
+       const {
+         t: UU,
+         selectedLanguage: XU
+       } = (0, QU.I)();
+       return zU => {
+         const cU = "worldBuilder:publishSuspended";
+         return UU(cU, {
+           date: (0, QU.f)(XU.code, cU, zU, {
+             dateStyle: "medium",
+             timeStyle: "short",
+             timeZone: "UTC"
+           })
+         })
+       }
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2641` → after: `L1721-L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1721-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1721-L1743) · [Before (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2641)

```diff
-       return "reached" === MM || "reached" === rM ? "reached" : null !== MM && void 0 !== MM ? MM : rM
+       return {
+         schematicId: UU.schematicId,
+         name: UU.name,
+         description: UU.description,
+         gamePublished: XU,
+         gameCategory: UU.gameCategory,
+         defaultGamemode: UU.defaultGamemode,
+         voidDeathHeight: UU.voidDeathHeight,
+         disableKeepInventory: UU.disableKeepInventory,
+         disableTpRequests: UU.disableTpRequests,
+         disableLobbySpawn: UU.disableLobbySpawn,
+         disableMobs: UU.disableMobs,
+         disableSpawnProtection: UU.disableSpawnProtection,
+         disableFallDamage: UU.disableFallDamage,
+         worldBorder: UU.worldBorder,
+         hideLobbyCode: UU.hideLobbyCode,
+ ... (7 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2646-L2647` → after: `L1749-L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1749-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1749-L1752) · [Before (L2646-L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2646-L2647)

```diff
-         gameAnalyticsId: rM
-       } = MM;
+         onNavigateAway: kU,
+         inSourceWorld: GU = !1,
+         canManage: BU = !0
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2649-L2710` → after: `L1754-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1754-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1754-L1757) · [Before (L2649-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2649-L2710)

```diff
-         t: iM
-       } = (0, HM.A)(), {
-         userContext: OM,
-         isUserContextUpdating: SM
-       } = (0, hM.b)(), jM = function(MM) {
-         return null !== (0, PM.h)(MM)
-       }(rM), nM = Ki((() => kM.c.getGameAnalyticsLimits(OM, rM)), [rM], jM && !SM, "Failed to load game analytics limits");
-       if ("loaded" !== nM.status) return null;
-       const QM = function(MM) {
-           const rM = new Map;
-           let iM = null;
-           for (const {
-               gameCategoryId: SM,
-               eventValues: jM
-             }
-             of MM.eventTypes) {
- ... (46 more removed lines; see GitHub link above)
+         userContext: ZU
+       } = (0, pU.d)(), RU = (0, aU.useNavigatePreserveSearch)(), [PU, WU] = (0, cU.useState)({
+         ...UU
+       }), [dU, LU] = (0, cU.useState)("Enter"), [eU, CU] = (0, cU.useState)(void 0), wU = (0, cU.useRef)(gU(UU, UU.gamePublished)), qU = (0, cU.useRef)(void 0), OU = "Enter" === dU, SU = null !== (XU = null === (zU = (0, tU.e)(BU).eligibility) || void 0 === zU ? void 0 : zU.publi … [truncated]
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2712-L2729` → after: `L1759-L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1759-L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1759-L1763) · [Before (L2712-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2712-L2729)

```diff
-     function aO(MM, rM) {
-       const iM = new Map,
-         OM = new Map;
-       MM.forEach((MM => {
-         iM.set(MM, 0), OM.set(MM, [])
-       })), rM.forEach((MM => {
-         var rM, SM;
-         iM.set(MM.toKey, (null !== (rM = iM.get(MM.toKey)) && void 0 !== rM ? rM : 0) + 1), null === (SM = OM.get(MM.fromKey)) || void 0 === SM || SM.push(MM.toKey)
-       }));
-       const SM = MM.filter((MM => 0 === iM.get(MM))),
-         jM = [];
-       for (let PM = 0; PM < SM.length; PM++) {
-         var aM;
-         const MM = SM[PM];
-         jM.push(MM), null === (aM = OM.get(MM)) || void 0 === aM || aM.forEach((MM => {
-           const rM = iM.get(MM) - 1;
- ... (2 more removed lines; see GitHub link above)
+       function fU(UU, XU) {
+         WU((zU => ({
+           ...zU,
+           [UU]: XU
+         })))
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2731-L2732` → after: `L1765-L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1765-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1765-L1767) · [Before (L2731-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2731-L2732)

```diff
-       return jM.length === iM.size ? jM : null
-     }
+       const iU = (0, cU.useCallback)((UU => {
+         qU.current = UU, CU(UU)
+       }), []);
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2734-L2739` → after: `L1769-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1769-L1770) · [Before (L2734-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2734-L2739)

```diff
-     function PO(MM) {
-       let rM = 3735928559,
-         iM = 1103547991;
-       for (let OM = 0; OM < MM.length; OM++) {
-         const SM = MM.charCodeAt(OM);
-         rM = Math.imul(rM ^ SM, 2654435761), iM = Math.imul(iM ^ SM, 1597334677)
+       function HU() {
+         return (0, FU.A)((0, QU.w)(PU.schematicId), PU)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2758-L2762` → after: `L1773-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1773-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1773-L1797) · [Before (L2758-L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2758-L2762)

```diff
-     function dO(MM) {
-       return {
-         game_category_id: MM.game_category_id,
-         event_type: MM.event_type,
-         event_value: MM.event_value
+       function MU(UU) {
+         LU("Loading");
+         const XU = gU(PU, UU),
+           zU = eU !== qU.current ? eU : void 0;
+         EU.c.updateSchematic(ZU, XU, zU).then((zU => {
+           let {
+             customTexturePackKey: cU
+           } = zU;
+           LU("Success"), fU("customTexturePackKey", cU), wU.current = XU, qU.current = void 0, CU(void 0), !UU || PU.gamePublished || kU || IU.f.showGamePublished(PU.name, HU()), setTimeout((() => {
+             fU("gamePublished", UU), LU("Enter")
+           }), 1e3)
+         })).catch((UU => {
+           var XU;
+           (console.error("Failed to save schematic:", UU), LU("Error"), UU instanceof AU.e && UU.errorMessageForUser) && NU.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+             subtitle: UU.errorMessageForUser,
+ ... (9 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2764-L2781` → after: `L1799-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1799-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1799-L1822) · [Before (L2764-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2764-L2781)

```diff
-     }
- 
-     function yO(MM) {
-       return "" === MM.event_value ? MM.event_type : `${MM.event_type}: ${MM.event_value}`
-     }
- 
-     function lO(MM) {
-       var rM;
-       return null !== (rM = MM.alias) && void 0 !== rM ? rM : yO(MM)
-     }
- 
-     function EO(MM, rM) {
-       return null === aO(MM, rM)
-     }
-     const UO = {
-         name: {
- ... (2 more removed lines; see GitHub link above)
+       return {
+         schematicData: PU,
+         updateSchematicData: fU,
+         setTexturePack: CU,
+         initializeTexturePack: iU,
+         updateState: dU,
+         formEnabled: OU,
+         publishFormEnabled: rU,
+         hasUnsavedChanges: uU,
+         publishSuspendedUntil: SU,
+         canEditSourceWorld: !GU,
+         saveSchematic: MU,
+         unpublishSchematic: function() {
+           NU.NotificationProvider.showPromptPopup({
+             icon: "rocket-launch",
+             title: "worldBuilder:unpublishAsGameConfirmTitle",
+ ... (8 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2783-L2785` → after: `L1824-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1824-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1824-L1833) · [Before (L2783-L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2783-L2785)

```diff
-         detail: {
-           fontSize: 11,
-           fontWeight: 400
+         editSourceWorld: function() {
+           LU("Loading"), YU.d.getSourceWorld(PU.schematicId).then((UU => {
+             DU.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, oU.n)("other"), RU((0, yU.b)("classic", UU)), null === kU || void 0 === kU || kU()
+           })).catch((UU => {
+             console.error("Failed to get source world:", UU), LU("Error"), setTimeout((() => {
+               LU("Enter")
+             }), 1e3)
+           }))
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2787-L2789` → after: `L1835-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1835-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1835-L1838) · [Before (L2787-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2787-L2789)

```diff
-         value: {
-           fontSize: 11,
-           fontWeight: 400
+         playGame: function() {
+           DU.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), RU(HU()), null === kU || void 0 === kU || kU()
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2791-L2846` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1840) · [Before (L2791-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2791-L2846)

```diff
-       },
-       GO = 3,
-       CO = 10,
-       eO = 8,
-       bO = 64,
-       wO = 200,
-       tO = 11,
-       gO = 700,
-       uO = 6,
-       RO = 18,
-       pO = 3,
-       WO = 2,
-       sO = 14,
-       DO = 3,
-       kO = 8,
-       ZO = 2 * DO + 2,
- ... (40 more removed lines; see GitHub link above)
+       }
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2848-L32243` → after: `L1842-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1842-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/118.js#L1842-L1843) · [Before (L2848-L32243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/118.js#L2848-L32243)

```diff
- 
-     function vO(MM) {
-       if (0 === MM.length) return 0;
-       return MM.reduce(((MM, rM) => MM + rM), 0) + ZO * (MM.length - 1)
-     }
- 
-     function FO(MM, rM, iM, OM) {
-       const SM = (MM + iM) / 2;
-       return ` C ${SM} ${rM} ${SM} ${OM} ${iM} ${OM}`
-     }
- 
-     function BO(MM) {
-       const {
-         tipX: rM,
-         tipY: iM
-       } = MM, OM = rM - kO, SM = MM.strokeWidth / 2 + DO;
- ... (29380 more removed lines; see GitHub link above)
+   },
+   5465: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L4)

```diff
-   5343: (MM, rM, iM) => {
+   37060: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L6-L8)

```diff
-       b: () => LM,
-       d: () => zM,
-       f: () => mM
+       e: () => oU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L8) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L10-L12)

```diff
-     iM(5348);
-     var OM = iM(1188),
-       SM = iM(1116),
+     var cU = zU(1106),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14-L17` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L10-L12) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L14-L17)

```diff
-       aM = iM(1440),
-       PM = (iM(44), iM(4720)),
-       nM = iM(1398),
-       QM = iM(1303);
+       QU = zU(61),
+       AU = zU(5014),
+       FU = zU(1305);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L21-L26` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L16-L17) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L21-L26)

```diff
-         children: rM,
-         label: iM,
-         className: SM,
-         circleInfoText: PM,
-         disabled: zM,
-         onLabelClick: LM
+         locked: XU,
+         children: zU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L28-L42` → after: `L19-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L19-L25) · [Before (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L28-L42)

```diff
-       const {
-         t: mM
-       } = (0, OM.A)(), HM = (0, QM.jsxs)("div", {
-         className: jM()("Label", {
-           ClickableLabel: void 0 !== LM
-         }),
-         onClick: LM,
-         children: [mM(iM), PM && (0, QM.jsx)(nM.b, {
-           name: "circle-info"
-         })]
-       });
-       return (0, QM.jsxs)("div", {
-         className: jM()("LabeledInput", {
-           [SM]: SM,
-           DisabledLabelInput: zM
+       const cU = (0, QU.useRef)(null),
+         oU = (0, AU.b)(cU, "y");
+       return (0, FU.jsx)("div", {
+         ref: cU,
+         className: yU()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: oU.before,
+           CreateCustomLobbyBodyMoreBelow: oU.after
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L44-L50` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L27-L28) · [Before (L44-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L44-L50)

```diff
-         children: [PM && (0, QM.jsx)(aM.i, {
-           tooltipInner: (0, QM.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: mM(PM)
-           }),
-           children: HM
-         }), !PM && HM, rM]
+         "data-pad-ignore": XU || void 0,
+         children: zU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L55-L71` → after: `L51-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L51-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L51-L64) · [Before (L55-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L55-L71)

```diff
-       let {
-         checked: rM,
-         setChecked: iM
-       } = MM;
-       return (0, QM.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         onClick: MM => {
-           iM(!rM)
-         },
-         children: (0, QM.jsx)(PM.c, {
-           checked: rM,
-           onChange: MM => {
-             iM(MM.target.checked)
-           },
-           disabled: !1
- ... (1 more removed lines; see GitHub link above)
+       const XU = {
+         requested: !1,
+         closed: !1
+       };
+       FU.NotificationProvider.showCustomPopup({
+         body: zU => (0, pU.jsx)(tU, {
+           flow: XU,
+           close: zU,
+           ...UU
+         }),
+         middleScreenPopupClassName: "CreateCustomLobbyPopup",
+         onClose: () => {
+           XU.closed = !0, XU.requested || (0, IU.h)()
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L77-L79` → after: `L70-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L70-L75) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L77-L79)

```diff
-         checked: rM,
-         setChecked: iM,
-         disabled: OM
+         flow: XU,
+         close: zU,
+         onCreating: FU,
+         onCreated: aU,
+         onFailedClosed: tU,
+         join: gU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L81-L95` → after: `L77-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L77-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L77-L166) · [Before (L81-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L81-L95)

```diff
-       return (0, QM.jsx)("div", {
-         className: jM()("SwitchContainer", {
-           SwitchContainerDisabled: OM
-         }),
-         onClick: () => {
-           OM || iM(!rM)
-         },
-         children: (0, QM.jsx)(PM.c, {
-           className: "SwitchCheckbox",
-           checked: rM,
-           onChange: MM => {
-             iM(MM.target.checked)
-           },
-           disabled: !!OM
-         })
+       const {
+         t: kU
+       } = (0, AU.I)(), [GU, BU] = (0, yU.useState)(cU.s), [ZU, RU] = (0, yU.useState)(!1), [PU, WU] = (0, yU.useState)(""), dU = (0, YU.b)();
+       (0, yU.useEffect)((() => {
+         (0, IU.o)()
+       }), []);
+       const LU = UU => ({
+         isEnabled: () => GU.plugins[UU],
+         YC: XU => {
+           (0, IU.l)({
+             plugin: UU,
+             enabled: XU
+           }), BU({
+             ...GU,
+             plugins: {
+               ...GU.plugins,
+ ... (74 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L99` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L170) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L99)

```diff
-   5356: (MM, rM, iM) => {
+   5471: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L103` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L174) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L103)

```diff
-     var OM = iM(1116),
+     var cU = zU(1106),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L105-L108` → after: `L176-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L176-L179) · [Before (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L105-L108)

```diff
-       jM = iM(5003),
-       aM = iM(1188),
-       PM = iM(1303);
-     const nM = [...jM.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+       QU = zU(5057),
+       AU = zU(1193),
+       FU = zU(1305);
+     const oU = [...QU.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L116` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L187) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L116)

```diff
-       } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
+       } = (0, AU.I)(), DU = UU.advancedMode ? oU.map((XU => [XU, UU.callbacks[XU]])) : QU.j.map((XU => [XU, UU.callbacks[XU]])), YU = (0, FU.jsx)("div", {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L129` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L200) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L129)

```diff
-       return iM ? LM : (0, PM.jsxs)("div", {
+       return zU ? YU : (0, FU.jsxs)("div", {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L143` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L214) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L143)

```diff
-           kR: OM
+           YC: cU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L149` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L220) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L149)

```diff
-       } = (0, aM.A)(), QM = iM();
+       } = (0, AU.I)(), DU = zU();
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L163` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L234) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L163)

```diff
-             src: `/textures/games/classic/customGames/${rM}.png`,
+             src: `/textures/games/classic/customGames/${XU}.png`,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L200` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L271) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L200)

```diff
-   5335: (MM, rM, iM) => {
+   37055: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L202-L205` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L273-L274) · [Before (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L202-L205)

```diff
-       g: () => Sr,
-       d: () => Or,
-       f: () => ir,
-       j: () => jr
+       c: () => DU,
+       g: () => EU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L207-L216` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L276-L277) · [Before (L207-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L207-L216)

```diff
-     var OM = iM(44),
-       SM = iM(1429),
-       jM = iM(1520),
-       aM = iM(1763),
-       PM = iM(1188),
-       nM = iM(1396),
-       QM = iM(1440),
-       zM = iM(1398),
-       LM = iM(1229),
-       mM = iM(1116),
+     zU(61);
+     var cU = zU(1106),
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L218-L275` → after: `L279-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L279-L282) · [Before (L218-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L218-L275)

```diff
-       hM = iM(313),
-       JM = iM(5003),
-       dM = iM(1242),
-       yM = iM(5343),
-       lM = iM(3530),
-       EM = iM(5356),
-       UM = iM(1303);
- 
-     function GM(MM) {
-       let {
-         icon: rM,
-         title: iM,
-         disabled: OM,
-         children: SM
-       } = MM;
-       return (0, UM.jsxs)("div", {
- ... (42 more removed lines; see GitHub link above)
+       QU = zU(5057),
+       AU = zU(320),
+       FU = zU(1193),
+       oU = zU(1305);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L279-L543` → after: `L286-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L286-L289) · [Before (L279-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L279-L543)

```diff
-         label: rM,
-         caption: iM,
-         disabled: OM,
-         children: SM
-       } = MM;
-       return (0, UM.jsxs)("div", {
-         className: HM()("ManageField", {
-           ManageFieldDisabled: OM
-         }),
-         children: [(0, UM.jsxs)("div", {
-           className: "ManageFieldText",
-           children: [(0, UM.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: rM
-           }), (0, UM.jsx)("div", {
-             className: "ManageFieldCaption",
- ... (249 more removed lines; see GitHub link above)
+         value: XU,
+         onChange: zU,
+         showAll: cU,
+         disabled: DU = !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L547-L734` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L293) · [Before (L547-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L547-L734)

```diff
-       } = (0, PM.A)(), [hM, JM] = (0, OM.useState)(null), [dM, yM] = (0, OM.useState)(""), [lM, EM] = (0, OM.useState)(""), [GM, CM] = (0, OM.useState)(!0), [eM, bM] = (0, OM.useState)(!1), wM = (0, OM.useRef)(!1), [tM, gM] = (0, OM.useState)(null), [uM, RM] = (0, OM.useState)(!1 … [truncated]
-         getRootProps: kM,
-         getInputProps: YM,
-         isDragActive: NM
-       } = (0, WM.e)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
-         },
-         multiple: !1,
-         onDrop: async MM => {
-           if (0 === MM.length) return;
-           const rM = MM[0],
-             iM = ++DM.current;
-           gM(null), RM(!1), JM(null), yM(rM.name);
-           try {
-             const MM = await ZM(rM);
- ... (172 more removed lines; see GitHub link above)
+       } = (0, FU.I)();
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L736-L737` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L295-L296) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L736-L737)

```diff
-         className: HM()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: QM
+         className: yU()("BloxdForm GamemodeForm", {
+           BasicOptions: !cU
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L739-L965` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L298) · [Before (L739-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L739-L965)

```diff
-         children: [QM && (0, UM.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, UM.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, UM.jsx)(zM.b, {
-               name: "check"
-             }), (0, UM.jsx)(sM.d, {})]
-           }), (0, UM.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: aM("thumbnail:thumbnailUploaded")
-           })]
-         }), (0, UM.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: aM("thumbnail:uploadThumbnail")
-         }), (0, UM.jsxs)("div", {
-           className: "ThumbnailUploaderBody",
- ... (211 more removed lines; see GitHub link above)
+         children: [(0, oU.jsx)("div", {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L967-L970` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L300) · [Before (L967-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L967-L970)

```diff
-           children: [hM("thumbnail:gameThumbnail"), WM && (0, UM.jsx)("span", {
-             className: HM()("ThumbnailActionMsg", `ThumbnailActionMsg--${WM.type}`),
-             children: WM.text
-           })]
+           children: EU("classic:defaultGamemode")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L973-L1259` → after: `L303-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L303-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L303-L306) · [Before (L973-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L973-L1259)

```diff
-           children: (0, UM.jsxs)("div", {
-             className: "ThumbnailGrid",
-             children: [(0, UM.jsxs)("div", {
-               className: HM()("ThumbnailGridItem ThumbnailGridItemDefault", {
-                 ThumbnailGridItemSelected: null === wM
-               }),
-               onClick: () => KM(null),
-               children: [(0, UM.jsx)(pM.b, {
-                 game: {
-                   schematicId: aM.schematicId,
-                   imageBlurhash: aM.imageBlurhash
-                 }
-               }), (0, UM.jsx)("div", {
-                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
-                 children: hM("general:default")
-               })]
- ... (271 more removed lines; see GitHub link above)
+           children: QU.E.map((UU => cU || (0, QU.t)(UU) ? (0, oU.jsx)("button", {
+             type: "button",
+             className: yU()("WorldGamemode", {
+               Selected: XU === UU
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1262` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L310) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1262)

```diff
-               dM && (QM(null), iM(null), LM(null))
+               zU(UU)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1264-L1473` → after: `L312-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L312-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L312-L316) · [Before (L1264-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1264-L1473)

```diff
-             children: (0, UM.jsx)("div", {
-               className: "TexturePackName",
-               children: "No Override"
-             })
-           }), Object.values(KM.o).map((MM => (0, UM.jsx)(TM.e, {
-             id: MM,
-             isSelected: MM === nM,
-             setSelected: lM,
-             disabled: !dM
-           }, MM)))]
-         }), nM === KM.o.CUSTOM && (0, UM.jsx)(VM.e, {
-           folderName: zM,
-           onTexturePackUpdated: lM,
-           disabled: !dM,
-           maxFileSizeMb: 25,
-           packOwner: "customGame"
- ... (194 more removed lines; see GitHub link above)
+             style: {
+               "--background-image": `url(${AU.w[UU]})`
+             },
+             children: AU.u[UU]
+           }, UU) : null))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1480-L1514` → after: `L323-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L323-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L323-L328) · [Before (L1480-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1480-L1514)

```diff
-         schematic: rM,
-         onSchematicUpdate: iM,
-         onClose: OM,
-         inSourceWorld: jM
-       } = MM;
-       SM.NotificationProvider.showCustomPopup({
-         body: MM => (0, UM.jsx)(Sr, {
-           schematic: rM,
-           onSchematicUpdate: iM,
-           onClose: MM,
-           inSourceWorld: jM
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: OM,
-         unlockPointerKey: "schematicPagePopup"
-       })
- ... (19 more removed lines; see GitHub link above)
+         mapTypes: XU,
+         value: zU,
+         onChange: cU,
+         showAll: DU,
+         disabled: EU = !1,
+         children: YU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1518-L1522` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L332) · [Before (L1518-L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1518-L1522)

```diff
-       } = (0, jM.A)(), {
-         schematicData: LM,
-         formEnabled: mM,
-         publishFormEnabled: HM
-       } = rM, hM = !mM || !HM;
+       } = (0, FU.I)();
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1524-L1549` → after: `L334-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L334-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L334-L345) · [Before (L1524-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1524-L1549)

```diff
-         className: SM()("PublishButtonContainer", iM),
-         children: [rM.canEditSourceWorld && (0, zM.jsxs)(PM.e, {
-           onClick: rM.editSourceWorld,
-           disabled: hM,
-           children: [(0, zM.jsx)(aM.b, {
-             name: "edit"
-           }), " ", OM("worldBuilder:editSourceWorld")]
-         }), !LM.gamePublished && (0, zM.jsx)(nM.i, {
-           tooltipInner: (0, zM.jsx)("div", {
-             className: "PublishButtonTooltip",
-             children: OM("worldBuilder:publishAsGameDescription")
-           }),
-           children: (0, zM.jsxs)(PM.p, {
-             onClick: () => rM.saveSchematic(!0),
-             disabled: hM,
-             children: [(0, zM.jsx)(aM.b, {
- ... (10 more removed lines; see GitHub link above)
+         className: yU()("BloxdForm MapTypeForm", {
+           BasicOptions: !DU
+         }),
+         children: [(0, oU.jsx)("div", {
+           className: "SectionTitle",
+           children: NU("customLobby:mapType")
+         }), (0, oU.jsx)("div", {
+           className: "SectionBody",
+           children: XU.map((UU => DU || (0, QU.x)(UU) ? (0, oU.jsx)("button", {
+             type: "button",
+             className: yU()("MapType", {
+               Selected: zU === UU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1563-L1670` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L348-L349) · [Before (L1563-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1563-L1670)

```diff
-             children: [(0, zM.jsx)(aM.b, {
-               name: "joystick"
-             }), " ", OM("general:playGame")]
-           })]
-         }), !mM && (0, zM.jsx)(QM.d, {
-           loaderType: "Secondary"
-         })]
-       })
-     }
-   },
-   5388: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => SM
-     });
-     var OM = iM(1202);
-     async function SM(MM) {
- ... (92 more removed lines; see GitHub link above)
+             onClick: () => {
+               cU(UU)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1672-L1718` → after: `L351-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L351-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L351-L357) · [Before (L1672-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1672-L1718)

```diff
-             confirmText: "general:ok"
-           });
-           setTimeout((() => {
-             GM("Enter")
-           }), 1e3)
-         }))
-       }
-       return {
-         schematicData: lM,
-         updateSchematicData: RM,
-         setTexturePack: eM,
-         initializeTexturePack: pM,
-         updateState: UM,
-         formEnabled: tM,
-         publishFormEnabled: gM,
-         hasUnsavedChanges: uM,
- ... (31 more removed lines; see GitHub link above)
+             style: {
+               "--background-image": `url(${AU.q[UU]})`
+             },
+             children: AU.m[UU]
+           }, UU) : null))
+         }), YU]
+       })
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L1721` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/119.js#L360-L361) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/119.js#L1721)

```diff
-   5348: () => {}
+   5465: () => {},
+   37039: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L4)

```diff
-   37303: (MM, rM, iM) => {
+   5520: (UU, XU) => {
+     XU.b = function(UU, XU) {
+       if (UU && XU) {
+         var zU = Array.isArray(XU) ? XU : XU.split(","),
+           cU = UU.name || "",
+           yU = (UU.type || "").toLowerCase(),
+           QU = yU.replace(/\/.*$/, "");
+         return zU.some((function(UU) {
+           var XU = UU.trim().toLowerCase();
+           return "." === XU.charAt(0) ? cU.toLowerCase().endsWith(XU) : XU.endsWith("/*") ? QU === XU.replace(/\/.*$/, "") : yU === XU
+         }))
+       }
+       return !0
+     }
+   },
+   5490: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L6` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L21) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L6)

```diff
-       d: () => nM
+       b: () => IX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L8-L12` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L23-L25) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L8-L12)

```diff
-     var OM = iM(1116),
-       SM = iM.n(OM),
-       jM = iM(44),
-       aM = iM(4950),
-       PM = iM(1303);
+     var cU = zU(61),
+       yU = zU(5499),
+       QU = zU.n(yU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L14-L29` → after: `L27-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L27-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L27-L52) · [Before (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L14-L29)

```diff
-     function nM(MM) {
-       let {
-         locked: rM,
-         children: iM
-       } = MM;
-       const OM = (0, jM.useRef)(null),
-         nM = (0, aM.e)(OM, "y");
-       return (0, PM.jsx)("div", {
-         ref: OM,
-         className: SM()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: nM.before,
-           CreateCustomLobbyBodyMoreBelow: nM.after
-         }),
-         "data-pad-ignore": rM || void 0,
-         children: iM
-       })
+     function AU(UU, XU, zU, cU) {
+       return new(zU || (zU = Promise))((function(yU, QU) {
+         function AU(UU) {
+           try {
+             oU(cU.next(UU))
+           } catch (XU) {
+             QU(XU)
+           }
+         }
+ 
+         function FU(UU) {
+           try {
+             oU(cU.throw(UU))
+           } catch (XU) {
+             QU(XU)
+           }
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L50-L53` → after: `L55-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L55-L63) · [Before (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L50-L53)

```diff
-     function JM(MM) {
-       const rM = {
-         requested: !1,
-         closed: !1
+     function FU(UU, XU) {
+       var zU, cU, yU, QU, AU = {
+         label: 0,
+         sent: function() {
+           if (1 & yU[0]) throw yU[1];
+           return yU[1]
+         },
+         trys: [],
+         ops: []
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L55-L63` → after: `L65-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L65-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L65-L126) · [Before (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L55-L63)

```diff
-       PM.NotificationProvider.showCustomPopup({
-         body: iM => (0, hM.jsx)(dM, {
-           flow: rM,
-           close: iM,
-           ...MM
-         }),
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           rM.closed = !0, rM.requested || (0, HM.g)()
+       return QU = {
+         next: FU(0),
+         throw: FU(1),
+         return: FU(2)
+       }, "function" === typeof Symbol && (QU[Symbol.iterator] = function() {
+         return this
+       }), QU;
+ 
+       function FU(FU) {
+         return function(oU) {
+           return function(FU) {
+             if (zU) throw new TypeError("Generator is already executing.");
+             for (; QU && (QU = 0, FU[0] && (AU = 0)), AU;) try {
+               if (zU = 1, cU && (yU = 2 & FU[0] ? cU.return : FU[0] ? cU.throw || ((yU = cU.return) && yU.call(cU), 0) : cU.next) && !(yU = yU.call(cU, FU[1])).done) return yU;
+               switch (cU = 0, yU && (FU = [2 & FU[0], yU.value]), FU[0]) {
+                 case 0:
+ ... (46 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L65` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L128) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L65)

```diff
-       })
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L68-L95` → after: `L132-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L132-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L132-L142) · [Before (L68-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L68-L95)

```diff
-     function dM(MM) {
-       let {
-         flow: rM,
-         close: iM,
-         onCreating: PM,
-         onCreated: JM,
-         onFailedClosed: dM,
-         join: yM
-       } = MM;
-       const {
-         t: lM
-       } = (0, aM.A)(), [EM, UM] = (0, SM.useState)(OM.u), [GM, CM] = (0, SM.useState)(!1), [eM, bM] = (0, SM.useState)(""), wM = (0, LM.b)();
-       (0, SM.useEffect)((() => {
-         (0, HM.n)()
-       }), []);
-       const tM = MM => ({
- ... (12 more removed lines; see GitHub link above)
+     function oU(UU, XU) {
+       var zU = "function" === typeof Symbol && UU[Symbol.iterator];
+       if (!zU) return UU;
+       var cU, yU, QU = zU.call(UU),
+         AU = [];
+       try {
+         for (;
+           (void 0 === XU || XU-- > 0) && !(cU = QU.next()).done;) AU.push(cU.value)
+       } catch (FU) {
+         yU = {
+           error: FU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L97-L143` → after: `L144-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L144-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L144-L254) · [Before (L97-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L97-L143)

```diff
-       });
-       return (0, hM.jsxs)("div", {
-         className: "CreateCustomLobby",
-         children: [(0, hM.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, hM.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: lM("homePage:myWorld")
-           })
-         }), (0, hM.jsx)(nM.d, {
-           locked: GM,
-           children: (0, hM.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [(0, hM.jsx)(mM.c, {
-               value: EM.defaultGamemode,
-               onChange: MM => {
- ... (31 more removed lines; see GitHub link above)
+       } finally {
+         try {
+           cU && !cU.done && (zU = QU.return) && zU.call(QU)
+         } finally {
+           if (yU) throw yU.error
+         }
+       }
+       return AU
+     }
+ 
+     function DU(UU, XU, zU) {
+       if (zU || 2 === arguments.length)
+         for (var cU, yU = 0, QU = XU.length; yU < QU; yU++) !cU && yU in XU || (cU || (cU = Array.prototype.slice.call(XU, 0, yU)), cU[yU] = XU[yU]);
+       return UU.concat(cU || Array.prototype.slice.call(XU))
+     }
+     Object.create;
+ ... (95 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L145-L158` → after: `L256-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L256-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L256-L387) · [Before (L145-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L145-L158)

```diff
-         }), (0, hM.jsxs)("div", {
-           className: "CreateCustomLobbyFooter",
-           children: [(0, hM.jsx)(zM.p, {
-             className: "CreateCustomLobbyButton",
-             padDefaultFocus: !0,
-             loading: GM,
-             onClick: () => {
-               rM.requested = !0, CM(!0), PM(!0), bM(""), (0, HM.k)(EM), jM.b.createPersonalWorld(EM).then((MM => {
-                 PM(!1);
-                 const OM = JM(MM);
-                 !rM.closed && wM.current ? (iM(), yM(MM)) : OM || (0, HM.g)()
-               }), (MM => {
-                 if (console.error("Failed to create personal world:", MM), PM(!1), rM.requested = !1, rM.closed || !wM.current) return (0, HM.g)(), void dM(MM);
-                 bM(MM.message), CM(!1)
+         }
+         return UU
+       }(UU);
+       if ("string" !== typeof zU.path) {
+         var cU = UU.webkitRelativePath;
+         Object.defineProperty(zU, "path", {
+           value: "string" === typeof XU ? XU : "string" === typeof cU && cU.length > 0 ? cU : UU.name,
+           writable: !1,
+           configurable: !1,
+           enumerable: !0
+         })
+       }
+       return zU
+     }
+     var NU = [".DS_Store", "Thumbs.db"];
+ 
+ ... (116 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L160-L167` → after: `L389-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L389-L394) · [Before (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L160-L167)

```diff
-             },
-             children: lM("general:play")
-           }), eM && (0, hM.jsx)("div", {
-             className: "CreateCustomLobbyError AnimFadeInScaleUp",
-             children: eM
-           })]
-         })]
-       })
+             }))
+           }), (function(UU) {
+             zU(UU)
+           }))
+         }()
+       }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L182-L197` → after: `L398-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L398-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L398-L407) · [Before (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L182-L197)

```diff
-       const {
-         disabled: rM,
-         hideWrapper: iM
-       } = MM, {
-         t: OM
-       } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
-         className: SM()("PluginsGrid", {
-           SectionBody: !iM
-         }),
-         children: QM.map((MM => {
-           let [iM, OM] = MM;
-           return (0, PM.jsx)(zM, {
-             plugin: iM,
-             callbacks: OM,
-             disabled: rM
-           }, iM)
+       return AU(this, void 0, void 0, (function() {
+         return FU(this, (function(XU) {
+           return [2, new Promise((function(XU, zU) {
+             UU.file((function(zU) {
+               var cU = YU(zU, UU.fullPath);
+               XU(cU)
+             }), (function(UU) {
+               zU(UU)
+             }))
+           }))]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L199-L206` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L409) · [Before (L199-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L199-L206)

```diff
-       });
-       return iM ? LM : (0, PM.jsxs)("div", {
-         className: "BloxdForm",
-         children: [(0, PM.jsx)("div", {
-           className: "SectionTitle",
-           children: OM("worldBuilder:pluginsSection")
-         }), LM]
-       })
+       }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L210-L250` → after: `L414-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L414-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L414-L486) · [Before (L210-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L210-L250)

```diff
-       let {
-         plugin: rM,
-         callbacks: {
-           isEnabled: iM,
-           kR: OM
-         },
-         disabled: jM
-       } = MM;
-       const {
-         t: nM
-       } = (0, aM.A)(), QM = iM();
-       return (0, PM.jsxs)("div", {
-         className: SM()("PluginCard", {
-           PluginCardEnabled: QM,
-           PluginCardDisabledForm: jM
-         }),
- ... (25 more removed lines; see GitHub link above)
+       return function(UU) {
+         if (Array.isArray(UU)) return SU(UU)
+       }(UU) || function(UU) {
+         if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
+       }(UU) || OU(UU) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function eU(UU, XU) {
+       var zU = Object.keys(UU);
+       if (Object.getOwnPropertySymbols) {
+         var cU = Object.getOwnPropertySymbols(UU);
+         XU && (cU = cU.filter((function(XU) {
+           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
+         }))), zU.push.apply(zU, cU)
+ ... (57 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L252-L259` → after: `L488-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L488-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L488-L516) · [Before (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L252-L259)

```diff
-     const LM = {
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+ 
+     function SU(UU, XU) {
+       (null == XU || XU > UU.length) && (XU = UU.length);
+       for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
+       return cU
+     }
+     var rU = "file-invalid-type",
+       uU = "file-too-large",
+       fU = "file-too-small",
+       iU = "too-many-files",
+       HU = function(UU) {
+         UU = Array.isArray(UU) && 1 === UU.length ? UU[0] : UU;
+         var XU = Array.isArray(UU) ? "one of ".concat(UU.join(", ")) : UU;
+         return {
+           code: rU,
+           message: "File type must be ".concat(XU)
+ ... (13 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L262-L268` → after: `L519-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L519-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L519-L563) · [Before (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L262-L268)

```diff
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
+         code: iU,
+         message: "Too many files"
+       };
+ 
+     function sU(UU, XU) {
+       var zU = "application/x-moz-file" === UU.type || (0, dU.b)(UU, XU);
+       return [zU, zU ? null : HU(XU)]
+     }
+ 
+     function nU(UU, XU, zU) {
+       if (mU(UU.size))
+         if (mU(XU) && mU(zU)) {
+           if (UU.size > zU) return [!1, MU(zU)];
+           if (UU.size < XU) return [!1, vU(XU)]
+         } else {
+           if (mU(XU) && UU.size < XU) return [!1, vU(XU)];
+ ... (29 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L270-L282` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L565) · [Before (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L270-L282)

```diff
-   },
-   37298: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => QM,
-       e: () => zM
-     });
-     iM(44);
-     var OM = iM(1116),
-       SM = iM.n(OM),
-       jM = iM(5003),
-       aM = iM(313),
-       PM = iM(1188),
-       nM = iM(1303);
+     }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L285-L318` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L568) · [Before (L285-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L285-L318)

```diff
-       let {
-         value: rM,
-         onChange: iM,
-         showAll: OM,
-         disabled: QM = !1
-       } = MM;
-       const {
-         t: zM
-       } = (0, PM.A)();
-       return (0, nM.jsxs)("div", {
-         className: SM()("BloxdForm GamemodeForm", {
-           BasicOptions: !OM
-         }),
-         children: [(0, nM.jsx)("div", {
-           className: "SectionTitle",
-           children: zM("classic:defaultGamemode")
- ... (18 more removed lines; see GitHub link above)
+       return "audio/*" === UU || "video/*" === UU || "image/*" === UU || "text/*" === UU || /\w+\/[-+.\w]+/g.test(UU)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L322-L323` → after: `L572-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L572-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L572-L653) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L322-L323)

```diff
-       let {
-         mapTypes: rM,
+       return /^.*\.[\w]+$/.test(UU)
+     }
+     var TU = ["children"],
+       hU = ["open"],
+       UX = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
+       XX = ["refKey", "onChange", "onClick"];
+ 
+     function zX(UU) {
+       return function(UU) {
+         if (Array.isArray(UU)) return QX(UU)
+       }(UU) || function(UU) {
+         if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
+       }(UU) || yX(UU) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ ... (66 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L325-L356` → after: `L655-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L655-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L655-L1075) · [Before (L325-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L325-L356)

```diff
-         onChange: OM,
-         showAll: QM,
-         disabled: zM = !1,
-         children: LM
-       } = MM;
-       const {
-         t: mM
-       } = (0, PM.A)();
-       return (0, nM.jsxs)("div", {
-         className: SM()("BloxdForm MapTypeForm", {
-           BasicOptions: !QM
-         }),
-         children: [(0, nM.jsx)("div", {
-           className: "SectionTitle",
-           children: mM("customLobby:mapType")
-         }), (0, nM.jsx)("div", {
- ... (16 more removed lines; see GitHub link above)
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : UU[XU] = zU, UU
+     }
+ 
+     function DX(UU, XU) {
+       if (null == UU) return {};
+       var zU, cU, yU = function(UU, XU) {
+         if (null == UU) return {};
+         var zU, cU, yU = {},
+           QU = Object.keys(UU);
+         for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || (yU[zU] = UU[zU]);
+         return yU
+       }(UU, XU);
+       if (Object.getOwnPropertySymbols) {
+ ... (405 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L359-L361` → after: `L1078-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1078-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/120.js#L1078-L1116) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/120.js#L359-L361)

```diff
-   },
-   5348: () => {},
-   37287: () => {}
+ 
+     function pX(UU, XU) {
+       switch (XU.type) {
+         case "focus":
+           return FX(FX({}, UU), {}, {
+             Kw: !0
+           });
+         case "blur":
+           return FX(FX({}, UU), {}, {
+             Kw: !1
+           });
+         case "openDialog":
+           return FX(FX({}, NX), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L43` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L35) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L43)

```diff
-   5384: (MM, rM) => {
-     rM.d = function(MM, rM) {
-       if (MM && rM) {
-         var iM = Array.isArray(rM) ? rM : rM.split(","),
-           OM = MM.name || "",
-           SM = (MM.type || "").toLowerCase(),
-           jM = SM.replace(/\/.*$/, "");
-         return iM.some((function(MM) {
-           var rM = MM.trim().toLowerCase();
-           return "." === rM.charAt(0) ? OM.toLowerCase().endsWith(rM) : rM.endsWith("/*") ? jM === rM.replace(/\/.*$/, "") : SM === rM
-         }))
-       }
-       return !0
-     }
-   },
-   5364: (MM, rM, iM) => {
- ... (24 more removed lines; see GitHub link above)
+   5557: (UU, XU, zU) => {
+     function cU(UU) {
+       return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
+         return typeof UU
+       } : function(UU) {
+         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
+       }, cU(UU)
+     }
+     Object.defineProperty(XU, "__esModule", {
+       value: !0
+     }), XU.default = void 0;
+     var yU = YU(zU(1106)),
+       QU = function(UU, XU) {
+         if (!XU && UU && UU.__esModule) return UU;
+         if (null === UU || "object" !== cU(UU) && "function" !== typeof UU) return {
+           default: UU
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L45-L52` → after: `L37-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L37-L43) · [Before (L45-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L45-L52)

```diff
-         function nM(MM) {
-           var rM;
-           MM.done ? SM(MM.value) : (rM = MM.value, rM instanceof iM ? rM : new iM((function(MM) {
-             MM(rM)
-           }))).then(aM, PM)
-         }
-         nM((OM = OM.apply(MM, rM || [])).next())
-       }))
+     function EU(UU) {
+       if ("function" !== typeof WeakMap) return null;
+       var XU = new WeakMap,
+         zU = new WeakMap;
+       return (EU = function(UU) {
+         return UU ? zU : XU
+       })(UU)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L55-L127` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L46-L48) · [Before (L55-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L55-L127)

```diff
-     function PM(MM, rM) {
-       var iM, OM, SM, jM, aM = {
-         label: 0,
-         sent: function() {
-           if (1 & SM[0]) throw SM[1];
-           return SM[1]
-         },
-         trys: [],
-         ops: []
-       };
-       return jM = {
-         next: PM(0),
-         throw: PM(1),
-         return: PM(2)
-       }, "function" === typeof Symbol && (jM[Symbol.iterator] = function() {
-         return this
- ... (57 more removed lines; see GitHub link above)
+     function YU(UU) {
+       return UU && UU.__esModule ? UU : {
+         default: UU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L133-L142` → after: `L53-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L53-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L53-L80) · [Before (L133-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L133-L142)

```diff
-       var iM = "function" === typeof Symbol && MM[Symbol.iterator];
-       if (!iM) return MM;
-       var OM, SM, jM = iM.call(MM),
-         aM = [];
-       try {
-         for (;
-           (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
-       } catch (PM) {
-         SM = {
-           error: PM
+       var zU = "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
+       if (!zU) {
+         if (Array.isArray(UU) || (zU = function(UU, XU) {
+             if (!UU) return;
+             if ("string" === typeof UU) return IU(UU, XU);
+             var zU = Object.prototype.toString.call(UU).slice(8, -1);
+             "Object" === zU && UU.constructor && (zU = UU.constructor.name);
+             if ("Map" === zU || "Set" === zU) return Array.from(UU);
+             if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return IU(UU, XU)
+           }(UU)) || XU && UU && "number" === typeof UU.length) {
+           zU && (UU = zU);
+           var cU = 0,
+             yU = function() {};
+           return {
+             s: yU,
+             n: function() {
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L144-L148` → after: `L82-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L82-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L82-L102) · [Before (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L144-L148)

```diff
-       } finally {
-         try {
-           OM && !OM.done && (iM = jM.return) && iM.call(jM)
-         } finally {
-           if (SM) throw SM.error
+         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }
+       var QU, AU = !0,
+         FU = !1;
+       return {
+         s: function() {
+           zU = zU.call(UU)
+         },
+         n: function() {
+           var UU = zU.next();
+           return AU = UU.done, UU
+         },
+         e: function(UU) {
+           FU = !0, QU = UU
+         },
+         f: function() {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L245-L267` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L108-L109) · [Before (L245-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L245-L267)

```diff
-       var iM = function(MM) {
-         var rM = MM.name;
-         if (rM && -1 !== rM.lastIndexOf(".") && !MM.type) {
-           var iM = rM.split(".").pop().toLowerCase(),
-             OM = zM.get(iM);
-           OM && Object.defineProperty(MM, "type", {
-             value: OM,
-             writable: !1,
-             configurable: !1,
-             enumerable: !0
-           })
-         }
-         return MM
-       }(MM);
-       if ("string" !== typeof iM.path) {
-         var OM = MM.webkitRelativePath;
- ... (7 more removed lines; see GitHub link above)
+       (null == XU || XU > UU.length) && (XU = UU.length);
+       for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L300-L327` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L114) · [Before (L300-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L300-L327)

```diff
-       return aM(this, void 0, void 0, (function() {
-         var iM;
-         return PM(this, (function(OM) {
-           switch (OM.label) {
-             case 0:
-               return MM.items ? (iM = lM(MM.items).filter((function(MM) {
-                 return "file" === MM.kind
-               })), "drop" !== rM ? [2, iM] : [4, Promise.all(iM.map(EM))]) : [3, 2];
-             case 1:
-               return [2, yM(UM(OM.sent()))];
-             case 2:
-               return [2, yM(lM(MM.files).map((function(MM) {
-                 return LM(MM)
-               })))]
-           }
-         }))
- ... (12 more removed lines; see GitHub link above)
+       for (var zU = 0; zU < XU.length; zU++) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L329` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L116) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L329)

```diff
-         rM.push(OM)
+         cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, cU.key, cU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L340-L394` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L120-L123) · [Before (L340-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L340-L394)

```diff
-     function UM(MM) {
-       return MM.reduce((function(MM, rM) {
-         return QM(QM([], nM(MM), !1), nM(Array.isArray(rM) ? UM(rM) : [rM]), !1)
-       }), [])
-     }
- 
-     function GM(MM) {
-       var rM = MM.getAsFile();
-       if (!rM) return Promise.reject("".concat(MM, " is not a File"));
-       var iM = LM(rM);
-       return Promise.resolve(iM)
-     }
- 
-     function CM(MM) {
-       return aM(this, void 0, void 0, (function() {
-         return PM(this, (function(rM) {
- ... (39 more removed lines; see GitHub link above)
+     function aU(UU, XU) {
+       return aU = Object.setPrototypeOf || function(UU, XU) {
+         return UU.__proto__ = XU, UU
+       }, aU(UU, XU)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L398-L409` → after: `L127-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L127-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L127-L148) · [Before (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L398-L409)

```diff
-       return aM(this, void 0, void 0, (function() {
-         return PM(this, (function(rM) {
-           return [2, new Promise((function(rM, iM) {
-             MM.file((function(iM) {
-               var OM = LM(iM, MM.fullPath);
-               rM(OM)
-             }), (function(MM) {
-               iM(MM)
-             }))
-           }))]
-         }))
-       }))
+       var XU = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
+         try {
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
+         } catch (UU) {
+           return !1
+         }
+       }();
+       return function() {
+         var zU, yU = kU(UU);
+         if (XU) {
+           var QU = kU(this).constructor;
+           zU = Reflect.construct(yU, arguments, QU)
+         } else zU = yU.apply(this, arguments);
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L414-L430` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L152) · [Before (L414-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L414-L430)

```diff
-       return function(MM) {
-         if (Array.isArray(MM)) return sM(MM)
-       }(MM) || function(MM) {
-         if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
-       }(MM) || WM(MM) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function gM(MM, rM) {
-       var iM = Object.keys(MM);
-       if (Object.getOwnPropertySymbols) {
-         var OM = Object.getOwnPropertySymbols(MM);
-         rM && (OM = OM.filter((function(rM) {
-           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
-         }))), iM.push.apply(iM, OM)
- ... (1 more removed lines; see GitHub link above)
+       if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L435-L443` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L157-L159) · [Before (L435-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L435-L443)

```diff
-       for (var rM = 1; rM < arguments.length; rM++) {
-         var iM = null != arguments[rM] ? arguments[rM] : {};
-         rM % 2 ? gM(Object(iM), !0).forEach((function(rM) {
-           RM(MM, rM, iM[rM])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : gM(Object(iM)).forEach((function(rM) {
-           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
-         }))
-       }
-       return MM
+       return kU = Object.setPrototypeOf ? Object.getPrototypeOf : function(UU) {
+         return UU.__proto__ || Object.getPrototypeOf(UU)
+       }, kU(UU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L454-L472` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L170-L182) · [Before (L454-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L454-L472)

```diff
- 
-     function pM(MM, rM) {
-       return function(MM) {
-         if (Array.isArray(MM)) return MM
-       }(MM) || function(MM, rM) {
-         var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
-         if (null == iM) return;
-         var OM, SM, jM = [],
-           aM = !0,
-           PM = !1;
-         try {
-           for (iM = iM.call(MM); !(aM = (OM = iM.next()).done) && (jM.push(OM.value), !rM || jM.length !== rM); aM = !0);
-         } catch (nM) {
-           PM = !0, SM = nM
-         } finally {
-           try {
- ... (3 more removed lines; see GitHub link above)
+     var BU = {
+         orientation: {
+           horizontal: {
+             dimension: "width",
+             direction: "left",
+             reverseDirection: "right",
+             coordinate: "x"
+           },
+           vertical: {
+             dimension: "height",
+             direction: "top",
+             reverseDirection: "bottom",
+             coordinate: "y"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L507-L526` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L187-L200) · [Before (L507-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L507-L526)

```diff
-         return {
-           code: kM,
-           message: "File is larger than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
-         }
-       },
-       NM = function(MM) {
-         return {
-           code: ZM,
-           message: "File is smaller than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
-         }
-       },
-       AM = {
-         code: oM,
-         message: "Too many files"
-       };
- 
- ... (4 more removed lines; see GitHub link above)
+         ! function(UU, XU) {
+           if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
+           Object.defineProperty(UU, "prototype", {
+             value: Object.create(XU && XU.prototype, {
+               constructor: {
+                 value: UU,
+                 writable: !0,
+                 configurable: !0
+               }
+             }),
+             writable: !1
+           }), XU && aU(UU, XU)
+         }(AU, UU);
+         var XU, zU, cU, QU = tU(AU);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L528-L536` → after: `L202-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L202-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L202-L465) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L528-L536)

```diff
-     function vM(MM, rM, iM) {
-       if (FM(MM.size))
-         if (FM(rM) && FM(iM)) {
-           if (MM.size > iM) return [!1, YM(iM)];
-           if (MM.size < rM) return [!1, NM(rM)]
-         } else {
-           if (FM(rM) && MM.size < rM) return [!1, NM(rM)];
-           if (FM(iM) && MM.size > iM) return [!1, YM(iM)]
-         } return [!0, null]
+         function AU(UU, XU) {
+           var zU;
+           return function(UU, XU) {
+             if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
+           }(this, AU), GU(gU(zU = QU.call(this, UU, XU)), "handleFormat", (function(UU) {
+             var XU = zU.props.format;
+             return XU ? XU(UU) : UU
+           })), GU(gU(zU), "handleUpdate", (function() {
+             if (zU.slider) {
+               var UU = zU.props.orientation,
+                 XU = (0, oU.capitalize)(BU.orientation[UU].dimension),
+                 cU = zU.slider["offset".concat(XU)],
+                 yU = zU.handle["offset".concat(XU)];
+               zU.setState({
+                 limit: cU - yU,
+                 grab: yU / 2
+ ... (248 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L539-L541` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L471) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L539-L541)

```diff
-     function FM(MM) {
-       return void 0 !== MM && null !== MM
-     }
+     function yU() {}
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L543-L545` → after: `L473-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L473-L480) · [Before (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L543-L545)

```diff
-     function BM(MM) {
-       return "function" === typeof MM.isPropagationStopped ? MM.isPropagationStopped() : "undefined" !== typeof MM.cancelBubble && MM.cancelBubble
-     }
+     function QU() {}
+     QU.resetWarningCache = yU, UU.exports = function() {
+       function UU(UU, XU, zU, yU, QU, AU) {
+         if (AU !== cU) {
+           var FU = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw FU.name = "Invariant Violation", FU
+         }
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L547-L550` → after: `L482-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L482-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L482-L509) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L547-L550)

```diff
-     function XM(MM) {
-       return MM.dataTransfer ? Array.prototype.some.call(MM.dataTransfer.types, (function(MM) {
-         return "Files" === MM || "application/x-moz-file" === MM
-       })) : !!MM.target && !!MM.target.files
+       function XU() {
+         return UU
+       }
+       UU.isRequired = UU;
+       var zU = {
+         array: UU,
+         bigint: UU,
+         bool: UU,
+         func: UU,
+         number: UU,
+         object: UU,
+         string: UU,
+         symbol: UU,
+         any: UU,
+         arrayOf: XU,
+         element: UU,
+ ... (12 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L553-L555` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L585-L587) · [Before (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L553-L555)

```diff
-     function IM(MM) {
-       MM.preventDefault()
-     }
+             function FU() {
+               AU(QU)
+             }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L557-L565` → after: `L589-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L589-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L589-L649) · [Before (L557-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L557-L565)

```diff
-     function KM() {
-       for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-       return function(MM) {
-         for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
-         return rM.some((function(rM) {
-           return !BM(MM) && rM && rM.apply(void 0, [MM].concat(OM)), BM(MM)
-         }))
-       }
-     }
+             function oU() {
+               var UU = Date.now();
+               if (zU) {
+                 if (UU - yU < 2) return;
+                 cU = !0
+               } else zU = !0, cU = !1, setTimeout(FU, XU);
+               yU = UU
+             }
+             return oU
+           }(this.refresh.bind(this), 20)
+         }
+         return UU.prototype.addObserver = function(UU) {
+           ~this.observers_.indexOf(UU) || this.observers_.push(UU), this.connected_ || this.connect_()
+         }, UU.prototype.removeObserver = function(UU) {
+           var XU = this.observers_,
+             zU = XU.indexOf(UU);
+ ... (45 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L568` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L652) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L568)

```diff
-       return "audio/*" === MM || "video/*" === MM || "image/*" === MM || "text/*" === MM || /\w+\/[-+.\w]+/g.test(MM)
+       return parseFloat(UU) || 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L572` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L656-L659) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L572)

```diff
-       return /^.*\.[\w]+$/.test(MM)
+       for (var XU = [], zU = 1; zU < arguments.length; zU++) XU[zU - 1] = arguments[zU];
+       return XU.reduce((function(XU, zU) {
+         return XU + IU(UU["border-" + zU + "-width"])
+       }), 0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L580-L606` → after: `L663-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L663-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L663-L671) · [Before (L580-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L580-L606)

```diff
-       return function(MM) {
-         if (Array.isArray(MM)) return jr(MM)
-       }(MM) || function(MM) {
-         if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
-       }(MM) || Sr(MM) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function Or(MM, rM) {
-       return function(MM) {
-         if (Array.isArray(MM)) return MM
-       }(MM) || function(MM, rM) {
-         var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
-         if (null == iM) return;
-         var OM, SM, jM = [],
- ... (11 more removed lines; see GitHub link above)
+       var XU = UU.clientWidth,
+         zU = UU.clientHeight;
+       if (!XU && !zU) return NU;
+       var cU = YU(UU).getComputedStyle(UU),
+         yU = function(UU) {
+           for (var XU = {}, zU = 0, cU = ["top", "right", "bottom", "left"]; zU < cU.length; zU++) {
+             var yU = cU[zU],
+               QU = UU["padding-" + yU];
+             XU[yU] = IU(QU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L608-L635` → after: `L673-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L673-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L673-L684) · [Before (L608-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L608-L635)

```diff
-         }
-         return jM
-       }(MM, rM) || Sr(MM, rM) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function Sr(MM, rM) {
-       if (MM) {
-         if ("string" === typeof MM) return jr(MM, rM);
-         var iM = Object.prototype.toString.call(MM).slice(8, -1);
-         return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? jr(MM, rM) : void 0
-       }
-     }
- 
-     function jr(MM, rM) {
- ... (12 more removed lines; see GitHub link above)
+           return XU
+         }(cU),
+         QU = yU.left + yU.right,
+         AU = yU.top + yU.bottom,
+         FU = IU(cU.width),
+         oU = IU(cU.height);
+       if ("border-box" === cU.boxSizing && (Math.round(FU + QU) !== XU && (FU -= pU(cU, "left", "right") + QU), Math.round(oU + AU) !== zU && (oU -= pU(cU, "top", "bottom") + AU)), ! function(UU) {
+           return UU === YU(UU).document.documentElement
+         }(UU)) {
+         var DU = Math.round(FU + QU) - XU,
+           EU = Math.round(oU + AU) - zU;
+         1 !== Math.abs(DU) && (FU -= DU), 1 !== Math.abs(EU) && (oU -= EU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L637` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L686) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L637)

```diff
-       return iM
+       return kU(yU.left, yU.top, FU, oU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L641-L649` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L695-L698) · [Before (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L641-L649)

```diff
-       for (var rM = 1; rM < arguments.length; rM++) {
-         var iM = null != arguments[rM] ? arguments[rM] : {};
-         rM % 2 ? ar(Object(iM), !0).forEach((function(rM) {
-           nr(MM, rM, iM[rM])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ar(Object(iM)).forEach((function(rM) {
-           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
-         }))
-       }
-       return MM
+       return yU ? tU(UU) ? function(UU) {
+         var XU = UU.getBBox();
+         return kU(0, 0, XU.width, XU.height)
+       }(UU) : aU(UU) : NU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L652-L672` → after: `L701-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L701-L706) · [Before (L652-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L652-L672)

```diff
-     function nr(MM, rM, iM) {
-       return rM in MM ? Object.defineProperty(MM, rM, {
-         value: iM,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : MM[rM] = iM, MM
-     }
- 
-     function Qr(MM, rM) {
-       if (null == MM) return {};
-       var iM, OM, SM = function(MM, rM) {
-         if (null == MM) return {};
-         var iM, OM, SM = {},
-           jM = Object.keys(MM);
-         for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || (SM[iM] = MM[iM]);
- ... (5 more removed lines; see GitHub link above)
+     function kU(UU, XU, zU, cU) {
+       return {
+         x: UU,
+         y: XU,
+         width: zU,
+         height: cU
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L676-L683` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L709-L711) · [Before (L676-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L676-L683)

```diff
-     var zr = (0, OM.forwardRef)((function(MM, rM) {
-       var iM = MM.children,
-         SM = Hr(Qr(MM, VM)),
-         jM = SM.open,
-         aM = Qr(SM, cM);
-       return (0, OM.useImperativeHandle)(rM, (function() {
-         return {
-           open: jM
+     var GU = function() {
+         function UU(UU) {
+           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = kU(0, 0, 0, 0), this.target = UU
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L685-L701` → after: `L713-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L713-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L713-L743) · [Before (L685-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L685-L701)

```diff
-       }), [jM]), OM.createElement(OM.Fragment, null, iM(Pr(Pr({}, aM), {}, {
-         open: jM
-       })))
-     }));
-     zr.displayName = "Dropzone";
-     var Lr = {
-       disabled: !1,
-       getFilesFromEvent: function(MM) {
-         return aM(this, void 0, void 0, (function() {
-           return PM(this, (function(rM) {
-             return HM(MM) && HM(MM.dataTransfer) ? [2, dM(MM.dataTransfer, MM.type)] : function(MM) {
-               return HM(MM) && HM(MM.target)
-             }(MM) ? [2, hM(MM)] : Array.isArray(MM) && MM.every((function(MM) {
-               return "getFile" in MM && "function" === typeof MM.getFile
-             })) ? [2, JM(MM)] : [2, []]
-           }))
- ... (1 more removed lines; see GitHub link above)
+         return UU.prototype.isActive = function() {
+           var UU = gU(this.target);
+           return this.contentRect_ = UU, UU.width !== this.broadcastWidth || UU.height !== this.broadcastHeight
+         }, UU.prototype.broadcastRect = function() {
+           var UU = this.contentRect_;
+           return this.broadcastWidth = UU.width, this.broadcastHeight = UU.height, UU
+         }, UU
+       }(),
+       BU = function(UU, XU) {
+         var zU = function(UU) {
+           var XU = UU.x,
+             zU = UU.y,
+             cU = UU.width,
+             yU = UU.height,
+             QU = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
+             AU = Object.create(QU.prototype);
+ ... (15 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L703-L835` → after: `L745-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L745-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L745-L755) · [Before (L703-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L703-L835)

```diff
-       maxSize: 1 / 0,
-       minSize: 0,
-       multiple: !0,
-       maxFiles: 0,
-       preventDropOnDocument: !0,
-       noClick: !1,
-       noKeyboard: !1,
-       noDrag: !1,
-       noDragEventsBubbling: !1,
-       validator: null,
-       useFsAccessApi: !0,
-       autoFocus: !1
-     };
-     zr.defaultProps = Lr, zr.propTypes = {
-       children: jM().func,
-       accept: jM().objectOf(jM().arrayOf(jM().string)),
- ... (117 more removed lines; see GitHub link above)
+       ZU = function() {
+         function UU(UU, XU, zU) {
+           if (this.activeObservations_ = [], this.observations_ = new cU, "function" !== typeof UU) throw new TypeError("The callback provided as parameter 1 is not a function.");
+           this.callback_ = UU, this.controller_ = XU, this.callbackCtx_ = zU
+         }
+         return UU.prototype.observe = function(UU) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(UU instanceof YU(UU).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var XU = this.observations_;
+             XU.has(UU) || (XU.set(UU, new GU(UU)), this.controller_.addObserver(this), this.controller_.refresh())
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L837-L845` → after: `L757-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L757-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L757-L762) · [Before (L837-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L837-L845)

```diff
-       }), [oM, cM, kM, Sr]);
-       var ar = (0, OM.useRef)([]),
-         zr = function(MM) {
-           ZM.current && ZM.current.contains(MM.target) || (MM.preventDefault(), ar.current = [])
-         };
-       (0, OM.useEffect)((function() {
-         return UM && (document.addEventListener("dragover", IM, !1), document.addEventListener("drop", zr, !1)),
-           function() {
-             UM && (document.removeEventListener("dragover", IM), document.removeEventListener("drop", zr))
+         }, UU.prototype.unobserve = function(UU) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(UU instanceof YU(UU).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var XU = this.observations_;
+             XU.has(UU) && (XU.delete(UU), XU.size || this.controller_.removeObserver(this))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L847-L889` → after: `L764-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L764-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L764-L769) · [Before (L847-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L847-L889)

```diff
-       }), [ZM, UM]), (0, OM.useEffect)((function() {
-         return !SM && EM && ZM.current && ZM.current.focus(),
-           function() {}
-       }), [ZM, EM, SM]);
-       var Hr = (0, OM.useCallback)((function(MM) {
-           wM ? wM(MM) : console.error(MM)
-         }), [wM]),
-         dr = (0, OM.useCallback)((function(MM) {
-           MM.preventDefault(), MM.persist(), Rr(MM), ar.current = [].concat(ir(ar.current), [MM.target]), XM(MM) && Promise.resolve(jM(MM)).then((function(rM) {
-             if (!BM(MM) || bM) {
-               var iM = rM.length,
-                 OM = iM > 0 && function(MM) {
-                   var rM = MM.files,
-                     iM = MM.accept,
-                     OM = MM.minSize,
-                     SM = MM.maxSize,
- ... (27 more removed lines; see GitHub link above)
+         }, UU.prototype.disconnect = function() {
+           this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
+         }, UU.prototype.gatherActive = function() {
+           var UU = this;
+           this.clearActive(), this.observations_.forEach((function(XU) {
+             XU.isActive() && UU.activeObservations_.push(XU)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L891-L1042` → after: `L771-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L771-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L771-L777) · [Before (L891-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L891-L1042)

```diff
-         }), [jM, zM, Hr, bM, WM, PM, aM, nM, QM, gM]),
-         yr = (0, OM.useCallback)((function(MM) {
-           MM.preventDefault(), MM.persist(), Rr(MM);
-           var rM = XM(MM);
-           if (rM && MM.dataTransfer) try {
-             MM.dataTransfer.dropEffect = "copy"
-           } catch (iM) {}
-           return rM && mM && mM(MM), !1
-         }), [mM, bM]),
-         lr = (0, OM.useCallback)((function(MM) {
-           MM.preventDefault(), MM.persist(), Rr(MM);
-           var rM = ar.current.filter((function(MM) {
-               return ZM.current && ZM.current.contains(MM)
-             })),
-             iM = rM.indexOf(MM.target); - 1 !== iM && rM.splice(iM, 1), ar.current = rM, rM.length > 0 || (NM({
-             type: "setDraggedFiles",
- ... (136 more removed lines; see GitHub link above)
+         }, UU.prototype.broadcastActive = function() {
+           if (this.hasActive()) {
+             var UU = this.callbackCtx_,
+               XU = this.activeObservations_.map((function(UU) {
+                 return new BU(UU.target, UU.broadcastRect())
+               }));
+             this.callback_.call(UU, XU, UU), this.clearActive()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L1044-L1111` → after: `L779-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L779-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L779-L796) · [Before (L1044-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L1044-L1111)

```diff
-         }), [ZM, Cr, er, br, wr, dr, yr, lr, Ur, CM, eM, SM]),
-         Wr = (0, OM.useCallback)((function(MM) {
-           MM.stopPropagation()
-         }), []),
-         sr = (0, OM.useMemo)((function() {
-           return function() {
-             var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               rM = MM.refKey,
-               iM = void 0 === rM ? "ref" : rM,
-               OM = MM.onChange,
-               SM = MM.onClick,
-               jM = Qr(MM, rr);
-             return Pr(Pr({}, nr({
-               accept: WM,
-               multiple: nM,
-               type: "file",
- ... (52 more removed lines; see GitHub link above)
+         }, UU.prototype.clearActive = function() {
+           this.activeObservations_.splice(0)
+         }, UU.prototype.hasActive = function() {
+           return this.activeObservations_.length > 0
+         }, UU
+       }(),
+       RU = "undefined" !== typeof WeakMap ? new WeakMap : new cU,
+       PU = function UU(XU) {
+         if (!(this instanceof UU)) throw new TypeError("Cannot call a class as a function.");
+         if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+         var zU = DU.getInstance(),
+           cU = new ZU(XU, zU, this);
+         RU.set(this, cU)
+       };
+     ["observe", "unobserve", "disconnect"].forEach((function(UU) {
+       PU.prototype[UU] = function() {
+ ... (2 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L1113-L1115` → after: `L798-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/121.js#L798-L799) · [Before (L1113-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/121.js#L1113-L1115)

```diff
-     }
- 
-     function Jr() {}
+     }));
+     const WU = "undefined" !== typeof QU.ResizeObserver ? QU.ResizeObserver : PU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/122.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/122.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994)

#### 1. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122];
+ export const ids = [122, 703];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L469` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L5) · [Before (L4-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L469)

```diff
-   5405: (MM, rM, iM) => {
-     function OM(MM) {
-       return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
-         return typeof MM
-       } : function(MM) {
-         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
-       }, OM(MM)
-     }
-     Object.defineProperty(rM, "__esModule", {
-       value: !0
-     }), rM.default = void 0;
-     var SM = LM(iM(1116)),
-       jM = function(MM, rM) {
-         if (!rM && MM && MM.__esModule) return MM;
-         if (null === MM || "object" !== OM(MM) && "function" !== typeof MM) return {
-           default: MM
- ... (450 more removed lines; see GitHub link above)
+   5505: (UU, XU, zU) => {
+     var cU = zU(5512);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L512-L515` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L48-L51) · [Before (L512-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L512-L515)

```diff
-   5368: (MM, rM, iM) => {
-     MM.exports = iM(5372)()
-   },
-   5376: MM => {
+   5499: (UU, XU, zU) => {
+     UU.exports = zU(5505)()
+   },
+   5512: UU => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L518` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L54) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L518)

```diff
-   5409: (MM, rM, iM) => {
+   7188: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L522-L529` → after: `L58-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L58-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L58-L146) · [Before (L522-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L522-L529)

```diff
-     var OM = function() {
-         if ("undefined" !== typeof Map) return Map;
- 
-         function MM(MM, rM) {
-           var iM = -1;
-           return MM.some((function(MM, OM) {
-             return MM[0] === rM && (iM = OM, !0)
-           })), iM
+     var cU = zU(1568),
+       yU = zU(1494),
+       QU = zU(1193),
+       AU = zU(7196),
+       FU = zU(7172),
+       oU = zU(7150),
+       DU = zU(1305);
+ 
+     function EU() {
+       const {
+         t: UU
+       } = (0, QU.I)(), XU = (0, cU.useNavigatePreserveSearch)();
+       return (0, FU.d)(), (0, DU.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, DU.jsx)("div", {
+           className: "ShaderPackPublishBack",
+ ... (73 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L531-L570` → after: `L148-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L148-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L148-L223) · [Before (L531-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L531-L570)

```diff
-         return function() {
-           function rM() {
-             this.__entries__ = []
-           }
-           return Object.defineProperty(rM.prototype, "size", {
-             get: function() {
-               return this.__entries__.length
-             },
-             enumerable: !0,
-             configurable: !0
-           }), rM.prototype.get = function(rM) {
-             var iM = MM(this.__entries__, rM),
-               OM = this.__entries__[iM];
-             return OM && OM[1]
-           }, rM.prototype.set = function(rM, iM) {
-             var OM = MM(this.__entries__, rM);
- ... (24 more removed lines; see GitHub link above)
+       }), [UU, XU]), {
+         isFavourite: UU => null === zU ? null : zU.has(UU),
+         toggle: function(XU) {
+           if (null === zU || AU.current.has(XU)) return;
+           AU.current.add(XU);
+           const cU = !zU.has(XU);
+           FU(XU, cU), (cU ? QU.c.favouriteShaderPack(UU, XU) : QU.c.unfavouriteShaderPack(UU, XU)).catch((UU => {
+             console.error("Failed to change a favourite shader pack", UU), FU(XU, !cU)
+           })).finally((() => {
+             AU.current.delete(XU)
+           }))
+         }
+       }
+     }
+   },
+   7150: (UU, XU, zU) => {
+ ... (60 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L572-L598` → after: `L225-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L225-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L225-L427) · [Before (L572-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L572-L598)

```diff
-     var PM = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
-       nM = "undefined" !== typeof MutationObserver,
-       QM = function() {
-         function MM() {
-           this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(MM, rM) {
-             var iM = !1,
-               OM = !1,
-               SM = 0;
- 
-             function jM() {
-               iM && (iM = !1, MM()), OM && nM()
-             }
- 
-             function PM() {
-               aM(jM)
-             }
- ... (11 more removed lines; see GitHub link above)
+ 
+     function tU(UU, XU) {
+       return UU.withFeatures.includes(XU) ? "with" : UU.withoutFeatures.includes(XU) ? "without" : null
+     }
+ 
+     function gU(UU) {
+       return null === UU ? "with" : "with" === UU ? "without" : null
+     }
+ 
+     function kU(UU) {
+       return "with" === UU ? "only" : null === UU ? "include" : void 0
+     }
+ 
+     function GU(UU, XU) {
+       const zU = tU(UU, XU),
+         cU = UU => UU.filter((UU => UU !== XU));
+ ... (187 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L646-L698` → after: `L430-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L430-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L430-L462) · [Before (L646-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L646-L698)

```diff
-       LM = function(MM) {
-         return MM && MM.ownerDocument && MM.ownerDocument.defaultView || jM
-       },
-       mM = lM(0, 0, 0, 0);
- 
-     function HM(MM) {
-       return parseFloat(MM) || 0
-     }
- 
-     function hM(MM) {
-       for (var rM = [], iM = 1; iM < arguments.length; iM++) rM[iM - 1] = arguments[iM];
-       return rM.reduce((function(rM, iM) {
-         return rM + HM(MM["border-" + iM + "-width"])
-       }), 0)
-     }
- 
- ... (37 more removed lines; see GitHub link above)
+       QU = ["popular", "updated", "newest"],
+       AU = 3,
+       FU = 32,
+       oU = 300;
+ 
+     function DU(UU, XU) {
+       return UU.slice(0, XU).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const EU = 64,
+       YU = 512,
+       NU = 18e5;
+ 
+     function IU(UU) {
+       const XU = UU,
+         zU = null === XU || void 0 === XU ? void 0 : XU.files;
+       return "number" === typeof(null === XU || void 0 === XU ? void 0 : XU.apiVersion) && "string" === typeof XU.name && (null === XU.author || "string" === typeof XU.author) && (void 0 === XU.keepCircleShadows || "boolean" === typeof XU.keepCircleShadows) && "object" === typeof … [truncated]
+ ... (17 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L702-L799` → after: `L466-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/122.js#L466-L471) · [Before (L702-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/122.js#L702-L799)

```diff
-       return {
-         x: MM,
-         y: rM,
-         width: iM,
-         height: OM
-       }
-     }
-     var EM = function() {
-         function MM(MM) {
-           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = lM(0, 0, 0, 0), this.target = MM
-         }
-         return MM.prototype.isActive = function() {
-           var MM = yM(this.target);
-           return this.contentRect_ = MM, MM.width !== this.broadcastWidth || MM.height !== this.broadcastHeight
-         }, MM.prototype.broadcastRect = function() {
-           var MM = this.contentRect_;
- ... (82 more removed lines; see GitHub link above)
+       return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
+     }
+ 
+     function RU(UU, XU, zU, cU) {
+       return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/123.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/123.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123, 706];
+ export const ids = [123];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L4-L54` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L4) · [Before (L4-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L4-L54)

```diff
-   5372: (MM, rM, iM) => {
-     var OM = iM(5376);
- 
-     function SM() {}
- 
-     function jM() {}
-     jM.resetWarningCache = SM, MM.exports = function() {
-       function MM(MM, rM, iM, SM, jM, aM) {
-         if (aM !== OM) {
-           var PM = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw PM.name = "Invariant Violation", PM
-         }
-       }
- 
-       function rM() {
-         return MM
- ... (35 more removed lines; see GitHub link above)
+   9484: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L58-L66` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L8-L50) · [Before (L58-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L58-L66)

```diff
-     var OM = iM(1591),
-       SM = iM(1520),
-       jM = iM(1188),
-       aM = iM(7093),
-       PM = iM(7068),
-       nM = iM(7051),
-       QM = iM(1303);
- 
-     function zM() {
+     var cU = zU(1577),
+       yU = zU(27),
+       QU = zU(5101),
+       AU = zU(61),
+       FU = zU(1492);
+     var oU = zU(2005),
+       DU = zU(1568),
+       EU = zU(1410),
+       YU = zU(1193),
+       NU = zU(9489),
+       IU = zU(5026),
+       pU = zU(173),
+       aU = zU(1131),
+       tU = zU(31),
+       gU = zU(1262),
+       kU = zU(1800),
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L69-L78` → after: `L53-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L53-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L53-L155) · [Before (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L69-L78)

```diff
-       } = (0, jM.A)(), rM = (0, OM.useNavigatePreserveSearch)();
-       return (0, PM.c)(), (0, QM.jsxs)("div", {
-         className: "ShaderPackPublishPage AnimFadeIn",
-         children: [(0, QM.jsx)("div", {
-           className: "ShaderPackPublishBack",
-           children: (0, QM.jsx)(SM.c, {
-             onClick: () => {
-               rM(nM.P)
-             },
-             children: MM("shaderPackListing:backToPacks")
+       } = (0, YU.I)();
+       return (0, AU.useEffect)((() => {
+         MU.i.skipPlayWait()
+       }), []), (0, vU.jsx)(uU.k, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, vU.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [cU("customTexturePack:downloadPrompt"), (0, vU.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: cU("customTexturePack:authorWarning")
+           }), (0, vU.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: cU("customTexturePack:existingPackSaved")
+           })]
+         }),
+ ... (87 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L80-L87` → after: `L157-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L157-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L157-L242) · [Before (L80-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L80-L87)

```diff
-         }), (0, QM.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: MM("shaderPackListing:publishTitle")
-         }), (0, QM.jsx)(aM.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: MM => {
-             rM((0, nM.W)(MM.packId), {
-               replace: !0
+         })
+       }) : "error" === yU ? (0, vU.jsx)(uU.k, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: FU,
+         confirm: {
+           text: "customTexturePack:refreshPage",
+           onClick: () => {
+             window.location.reload()
+           }
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: EU
+         }
+       }) : "refused" === yU ? (0, vU.jsx)(uU.k, {
+ ... (70 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L90` → after: `L245-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L245-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L245-L572) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L90)

```diff
-         })]
+           return tU.k.UY("matchmakeAndPlayStepCompleted", {
+             step: pU.m.LOAD_REQUIRED_LIBS,
+             totalSubSteps: 1
+           }), (0, QU.matchmakeAndPlayMaybeUnloaded)(UU, XU, zU, cU, yU)
+         }(UU, XU, zU, FU, cU), EU = DU.isError() ? DU.asError() : null;
+         if (cU.aborted) return EU && IX(DU), oU.gameBridge.send("leaveGame", {
+           reloadPath: null
+         }), null;
+         if (null !== EU && void 0 !== EU && EU.debugResult.QU) return console.log("Join cancelled:", EU.message), null;
+         if (EU) return DU;
+         const {
+           gameNameWithVariation: YU,
+           lobbyName: NU
+         } = DU.getValue();
+         return YX(), (0, AX.B)().setGameViewShown(!0), FU.recordJoin(YU, NU), (0, BU.I)(), DU
+       }
+ ... (312 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L94` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L576) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L94)

```diff
-   7068: (MM, rM, iM) => {
+   5527: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L96-L99` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L578) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L96-L99)

```diff
-       c: () => mM,
-       e: () => HM,
-       h: () => LM,
-       l: () => hM
+       c: () => yU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L101-L160` → after: `L580-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L580-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L580-L589) · [Before (L101-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L101-L160)

```diff
-     var OM = iM(44),
-       SM = iM(7054),
-       jM = iM(1573),
-       aM = iM(7051),
-       PM = iM(7077),
-       nM = iM(1142);
-     const QM = "shaderPackListingView",
-       zM = "shaderPackListingFilterOpen";
- 
-     function LM() {
-       var MM;
-       const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
-       return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
-     }
- 
-     function mM() {
- ... (44 more removed lines; see GitHub link above)
+     var cU = zU(1203);
+     async function yU(UU) {
+       const XU = await fetch(`${cU.clientSideServerUrls.s3Url}/${UU}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === XU.status || 403 === XU.status) return null;
+       if (!XU.ok) throw new Error(`Failed to download the texture pack (${XU.status})`);
+       return await XU.json()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L163` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L592) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L163)

```diff
-   7051: (MM, rM, iM) => {
+   9489: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L370-L371` → after: `L597-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L597-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L597-L609) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L370-L371)

```diff
-     var OM = iM(44),
-       SM = iM(30);
+     var cU = zU(173),
+       yU = zU(212),
+       QU = zU(1079),
+       AU = zU(1086),
+       FU = zU(1236),
+       oU = zU(2005),
+       DU = zU(2494),
+       EU = zU(1545),
+       YU = zU(1410),
+       NU = zU(1131),
+       IU = zU(9493),
+       pU = zU(1568),
+       aU = zU(1592);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L374-L378` → after: `L612-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L612-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L612-L674) · [Before (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L374-L378)

```diff
-       var iM;
-       const [jM, aM] = (0, OM.useState)(null !== (iM = SM.g.getItem(MM)) && void 0 !== iM ? iM : rM);
-       return [jM, rM => {
-         SM.g.setItem(MM, rM), aM(rM)
-       }]
+       const zU = !0 === XU.debugResult.gameRefused,
+         QU = zU || XU.code === cU.m.REQUEST_TO_MATCHMAKING ? (0, IU.h)(XU.message) : null;
+       if (null !== QU) return ZU(UU, UU((0, IU.n)(QU)), UU(IU.j[QU])), !0;
+       if (zU) return async function(UU) {
+         const {
+           gameNameWithVariation: XU,
+           lobbyName: zU,
+           shownLobbyName: cU
+         } = oU.gameBridge.latest("connectedGame"), yU = "classic" === XU && (0, FU.A)(zU) ? cU : await (0, DU.g)(UU, XU, zU);
+         return "" !== yU ? UU("general:cantJoinGame", {
+           game: yU
+         }) : UU("general:cantJoinThisGame")
+       }(UU).then((zU => {
+         ZU(UU, zU, XU.message)
+       })), !0;
+       const {
+ ... (47 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L381` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L677) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L381)

```diff
-   7148: (MM, rM, iM) => {
+   9510: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L386-L391` → after: `L681-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L681-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L681-L707) · [Before (L386-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L386-L391)

```diff
-     var OM = iM(30);
-     const SM = "shaderPack";
-     async function jM() {
-       var MM;
-       let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
+     var cU = zU(1376),
+       yU = zU(1236),
+       QU = zU(646);
+ 
+     function AU(UU) {
+       return UU = function(UU, XU) {
+         var zU;
+         const cU = new URLSearchParams(XU),
+           yU = cU.get("lobby"),
+           QU = cU.get("vm"),
+           AU = null !== (zU = yU) && void 0 !== zU ? zU : UU.lobbyName,
+           FU = null !== QU && void 0 !== QU ? QU : UU.directJoinVmUrl;
+         if (AU === UU.lobbyName && FU === UU.directJoinVmUrl) return UU;
+         return {
+           ...UU,
+           lobbyName: AU,
+ ... (11 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L394` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L710) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L394)

```diff
-   7054: (MM, rM, iM) => {
+   9505: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L396-L402` → after: `L712-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L712-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L712-L726) · [Before (L396-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L396-L402)

```diff
-       D: () => aM,
-       E: () => OM,
-       I: () => mM,
-       M: () => zM,
-       Q: () => UM,
-       U: () => LM,
-       V: () => QM,
+       e: () => QU,
+       h: () => yU
+     });
+     let cU = !1;
+ 
+     function yU() {
+       cU = !0
+     }
+ 
+     function QU() {
+       return cU
+     }
+   },
+   9516: (UU, XU, zU) => {
+     zU.d(XU, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L406-L413` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L730) · [Before (L406-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L406-L413)

```diff
-       k: () => HM,
-       m: () => EM,
-       q: () => CM,
-       t: () => nM,
-       v: () => SM,
-       w: () => GM,
-       y: () => jM,
-       z: () => PM
+       h: () => AU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L415` → after: `L732-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L732-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L732-L827) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L415)

```diff
-     const OM = ["forest", "desert", "water", "night", "cave"];
+     let cU = null;
+ 
+     function yU(UU, XU) {
+       return `${XU}\n${null!==UU&&void 0!==UU?UU:""}`
+     }
+ 
+     function QU(UU) {
+       cU = UU
+     }
+ 
+     function AU(UU) {
+       const XU = cU;
+       return cU = null, null !== XU && XU.key === UU ? XU.settled : null
+     }
+ 
+     function FU(UU, XU, zU, cU) {
+ ... (80 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L417-L470` → after: `L829-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L829-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/123.js#L829-L832) · [Before (L417-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/123.js#L417-L470)

```diff
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
-       jM = ["popular", "updated", "newest"],
-       aM = 3,
-       PM = 32,
- ... (38 more removed lines; see GitHub link above)
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/124.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/124.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851)

#### 1. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L4-L6)

```diff
-   9502: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       default: () => Gr
+   5540: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => pU,
+       i: () => BU,
+       j: () => aU,
+       k: () => GU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L8-L26` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L11-L21) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L8-L26)

```diff
-     var OM = iM(1608),
-       SM = iM(19),
-       jM = iM(5035),
-       aM = iM(44),
-       PM = iM(1516);
-     var nM = iM(2039),
-       QM = iM(1591),
-       zM = iM(1429),
-       LM = iM(1188),
-       mM = iM(143),
-       HM = iM(181),
-       hM = iM(1073),
-       JM = iM(1088),
-       dM = iM(1229),
-       yM = iM(2482),
-       lM = iM(1573),
- ... (3 more removed lines; see GitHub link above)
+     var cU = zU(61),
+       yU = zU(5548),
+       QU = zU(4775),
+       AU = zU(1420),
+       FU = zU(5581),
+       oU = zU(1106),
+       DU = zU.n(oU),
+       EU = zU(1410),
+       YU = zU(1800),
+       NU = zU(5588),
+       IU = zU(1305);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L28-L67` → after: `L23-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L23-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L23-L67) · [Before (L28-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L28-L67)

```diff
-     function CM(MM, rM) {
-       const iM = !0 === rM.debugResult.gameRefused,
-         OM = iM || rM.code === mM.n.REQUEST_TO_MATCHMAKING ? (0, UM.h)(rM.message) : null;
-       if (null !== OM) return eM(MM, MM((0, UM.p)(OM)), MM(UM.l[OM])), !0;
-       if (iM) return async function(MM) {
-         const {
-           gameNameWithVariation: rM,
-           lobbyName: iM,
-           shownLobbyName: OM
-         } = nM.gameBridge.latest("connectedGame"), SM = "classic" === rM && (0, dM.J)(iM) ? OM : await (0, yM.g)(MM, rM, iM);
-         return "" !== SM ? MM("general:cantJoinGame", {
-           game: SM
-         }) : MM("general:cantJoinThisGame")
-       }(MM).then((iM => {
-         eM(MM, iM, rM.message)
-       })), !0;
- ... (24 more removed lines; see GitHub link above)
+     function pU(UU) {
+       let {
+         label: XU,
+         onClick: zU,
+         checked: cU,
+         circleInfoText: yU,
+         className: FU,
+         disabled: oU,
+         note: EU
+       } = UU;
+       return (0, IU.jsxs)("div", {
+         "aria-disabled": oU || void 0,
+         "data-pad-focusable": !0,
+         className: DU()("SettingBox CheckboxContainer", {
+           [FU]: FU,
+           SettingBoxDisabled: oU
+ ... (29 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L70-L76` → after: `L70-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L70-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L70-L132) · [Before (L70-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L70-L76)

```diff
-     function eM(MM, rM, iM) {
-       zM.NotificationProvider.showPromptPopup({
-         icon: "lock",
-         title: rM,
-         subtitle: iM,
-         confirmText: MM("general:ok"),
-         cancelText: ""
+     function aU(UU) {
+       let {
+         name: XU,
+         onChange: zU,
+         min: yU,
+         max: QU,
+         step: FU,
+         initValue: oU,
+         circleInfoText: EU,
+         format: YU,
+         className: NU,
+         padStep: pU,
+         disabled: aU = !1,
+         selectableMax: tU,
+         cappedNote: gU,
+         note: GU,
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L79-L100` → after: `L135-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L135-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L135-L140) · [Before (L79-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L79-L100)

```diff
-     var bM = iM(4961),
-       wM = iM(22),
-       tM = iM(1251),
-       gM = iM(1830),
-       uM = iM(83),
-       RM = iM(1360),
-       pM = iM(1503),
-       WM = iM(4913),
-       sM = iM(4711),
-       DM = iM(4662),
-       kM = iM(3647),
-       ZM = iM(1382),
-       oM = iM(821),
-       fM = iM(1232),
-       YM = iM(3706),
-       NM = iM(3563),
- ... (6 more removed lines; see GitHub link above)
+     const tU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
+ 
+     function gU(UU) {
+       var XU;
+       return (null !== (XU = String(UU).split(".")[1]) && void 0 !== XU ? XU : "").length
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L104-L105` → after: `L144-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L144-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L144-L159) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L104-L105)

```diff
-         onApply: rM,
-         onSkip: iM
+         value: XU,
+         min: zU,
+         max: QU,
+         step: AU,
+         onChange: FU,
+         orientation: oU,
+         reverse: DU,
+         setIsChanging: EU,
+         tooltip: YU,
+         labels: pU,
+         handleLabel: aU,
+         format: kU,
+         onChangeStart: GU,
+         onChangeComplete: BU,
+         padStep: ZU,
+         disabled: RU = !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L107-L127` → after: `L161-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L161-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L161-L176) · [Before (L107-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L107-L127)

```diff
-       const {
-         t: OM
-       } = (0, LM.A)();
-       return (0, aM.useEffect)((() => {
-         BM.c.skipPlayWait()
-       }), []), (0, XM.jsx)(AM.i, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, XM.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [OM("customTexturePack:downloadPrompt"), (0, XM.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
-             children: OM("customTexturePack:authorWarning")
-           }), (0, XM.jsx)("div", {
-             className: "CustomTexturePackDownloaderSecondaryText",
-             children: OM("customTexturePack:existingPackSaved")
- ... (5 more removed lines; see GitHub link above)
+       const PU = (0, cU.useRef)(null),
+         WU = (0, cU.useRef)(null);
+       (0, cU.useLayoutEffect)((() => {
+         var UU, XU, zU;
+         const cU = null !== (UU = null === (XU = PU.current) || void 0 === XU ? void 0 : XU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
+         null === cU || void 0 === cU || cU.setAttribute("data-pad-slider", ""), null === cU || void 0 === cU || cU.setAttribute("data-pad-focusable", ""), null === cU || void 0 === cU || null === (zU = cU.querySelector(".rangeslider__handle")) || void 0 === zU || zU.setAttribute( … [truncated]
+       }), []), (0, cU.useLayoutEffect)((() => {
+         var UU, XU;
+         RU ? null === (UU = WU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (XU = WU.current) || void 0 === XU || XU.removeAttribute("aria-disabled")
+       }), [RU]);
+       const dU = Math.max(gU(AU), gU(zU)),
+         LU = UU => {
+           if (UU >= QU) return QU;
+           if (UU <= zU) return zU;
+           const XU = Number((Math.round((UU - zU) / AU) * AU + zU).toFixed(dU));
+           return Math.min(QU, Math.max(zU, XU))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L129-L131` → after: `L178-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L178-L187) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L129-L131)

```diff
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: iM
+         eU = (0, cU.useRef)(BU);
+       eU.current = BU, (0, cU.useEffect)((() => {
+         const UU = PU.current;
+         if (!UU) return;
+         const XU = UU => {
+           var XU;
+           tU.has(UU.key) && (null === (XU = eU.current) || void 0 === XU || XU.call(eU))
+         };
+         return UU.addEventListener("keyup", XU), () => {
+           UU.removeEventListener("keyup", XU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L136-L145` → after: `L235-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L235-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L235-L241) · [Before (L136-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L136-L145)

```diff
-       let MM = !1;
-       const rM = zM.NotificationProvider.showCustomPopup({
-         body: rM => (0, XM.jsx)(IM, {
-           onApply: () => {
-             MM = !0, rM()
-           },
-           onSkip: rM
-         }),
-         disableExitButton: !0,
-         disablePressBackgroundToClose: !0
+       const UU = EU.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L147` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L243) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L147)

```diff
-       return await rM.getResult(), MM
+       !0 === await UU.getResult() && (0, YU.reloadBloxd)()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L155` → after: `L247-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L247-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L247-L268) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L155)

```diff
-       MM.setGamePackConfirm(KM), TM = MM
+       let {
+         label: XU,
+         options: zU,
+         value: cU,
+         onChange: yU,
+         circleInfoText: QU
+       } = UU;
+       return (0, IU.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, IU.jsxs)("div", {
+           className: "SliderText",
+           children: [XU, QU && (0, IU.jsx)(AU.c, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: QU
+           })]
+         }), (0, IU.jsx)(FU.d, {
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L157-L159` → after: `L270-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L270-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L270-L302) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L157-L159)

```diff
-     var cM = iM(3881),
-       Mr = iM(30),
-       rr = iM(3657);
+   },
+   7259: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => bU
+     });
+     var cU = zU(61),
+       yU = zU(1577),
+       QU = zU(7158),
+       AU = zU(1236),
+       FU = zU(344),
+       oU = zU(1596),
+       DU = zU(1384),
+       EU = zU(1568),
+       YU = zU(1494),
+       NU = zU(1420),
+       IU = zU(1660),
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L163-L165` → after: `L306-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L306-L308) · [Before (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L163-L165)

```diff
-         schematicId: rM,
-         texturePackKey: iM,
-         onClose: OM
+         details: XU,
+         owner: zU,
+         onChanged: yU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L167-L170` → after: `L310-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L310-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L310-L329) · [Before (L167-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L167-L170)

```diff
-       const [SM, jM] = (0, aM.useState)("prompt"), [PM, nM] = (0, aM.useState)(null), QM = (0, cM.b)();
- 
-       function zM() {
-         OM()
+       const {
+         t: AU
+       } = (0, BU.I)(), FU = (0, EU.useNavigatePreserveSearch)(), {
+         userContext: oU
+       } = (0, gU.d)(), [NU, IU] = (0, cU.useState)(!1), [pU, aU] = (0, cU.useState)(null), [tU, GU] = (0, cU.useState)(!1), {
+         packId: ZU,
+         name: RU,
+         description: wU,
+         live: qU
+       } = XU;
+       async function OU(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
+         IU(!0), aU(null);
+         try {
+           await UU(), XU()
+         } catch (zU) {
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L172-L210` → after: `L331-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L331-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L331-L462) · [Before (L172-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L172-L210)

```diff
-       return "prompt" === SM ? (0, XM.jsx)(IM, {
-         onApply: async function() {
-           jM("downloading");
-           try {
-             const MM = await async function(MM, rM) {
-               const iM = await (0, vM.d)(rM);
-               if (iM) return {
-                 pack: iM,
-                 key: rM
-               };
-               const OM = await EM.userContextManager.getCurrentUserContext(),
-                 SM = (await lM.c.getGame(OM, MM, !0)).customTexturePackKey;
-               if (!SM) return null;
-               const jM = await (0, vM.d)(SM);
-               if (!jM) throw new Error("The texture pack could not be found");
-               return {
- ... (23 more removed lines; see GitHub link above)
+       const SU = (0, LU.p)(oU);
+       return (0, eU.jsxs)("section", {
+         className: "ShaderPackOwnerPanel",
+         children: [(0, eU.jsx)("h2", {
+           className: "ShaderPackSectionTitle",
+           children: AU("general:manage")
+         }), (0, LU.V)(zU, !(null === qU || void 0 === qU || !qU.renderId), Date.now(), AU).map((UU => (0, eU.jsxs)("div", {
+           className: PU()("ShaderPackOwnerNotice", {
+             Warning: "warning" === UU.tone
+           }),
+           children: [(0, eU.jsx)(WU.d, {
+             name: "warning" === UU.tone ? "triangle-exclamation" : "circle-info"
+           }), (0, eU.jsxs)("div", {
+             children: [UU.text, UU.detail && (0, eU.jsx)("pre", {
+               className: "ShaderPackOwnerNoticeDetail",
+               children: UU.detail
+ ... (116 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L212-L220` → after: `L464-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L464-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L464-L547) · [Before (L212-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L212-L220)

```diff
-         })
-       }) : "error" === SM ? (0, XM.jsx)(AM.i, {
-         icon: "face-worried",
-         title: "customTexturePack:errorTitle",
-         subtitle: PM,
-         confirm: {
-           text: "customTexturePack:refreshPage",
-           onClick: () => {
-             window.location.reload()
+         })]
+       })
+     }
+     var qU = zU(73),
+       OU = zU(1974),
+       SU = zU(1294),
+       rU = zU(5588),
+       uU = zU(1203),
+       fU = zU(7172),
+       iU = zU(7167),
+       HU = zU(7181);
+ 
+     function MU(UU) {
+       let {
+         item: XU
+       } = UU;
+ ... (68 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L222-L235` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L549-L550) · [Before (L222-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L222-L235)

```diff
-         },
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: zM
-         }
-       }) : "refused" === SM ? (0, XM.jsx)(AM.i, {
-         icon: "face-worried",
-         title: "customTexturePack:cantApplyTitle",
-         subtitle: "customTexturePack:gamePackHasExternalUrls",
-         confirm: {
-           text: "general:continue",
-           onClick: zM
-         }
-       }) : null
+         })]
+       })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L251-L253` → after: `L553-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L553-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L553-L584) · [Before (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L251-L253)

```diff
-     function dr() {
-       const MM = SM.d.get("clientEscMenuOptions");
-       nM.gameBridge.send("setLookSensitivity", SM.d.get("isTouchScreen") ? (0, hr.t)(MM) : MM.mouseSensitivity)
+     function vU(UU) {
+       let {
+         fullUrl: XU,
+         largeUrl: zU,
+         alt: yU,
+         onClose: QU
+       } = UU;
+       const AU = (0, cU.useRef)(null);
+       return (0, SU.t)("popup", AU, QU), (0, cU.useEffect)((() => {
+         function UU(UU) {
+           "Escape" === UU.key && (UU.stopPropagation(), QU())
+         }
+         return window.addEventListener("keydown", UU, !0), () => {
+           window.removeEventListener("keydown", UU, !0)
+         }
+       }), [QU]), (0, qU.createPortal)((0, eU.jsxs)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L255` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L586) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L255)

```diff
-     const yr = 45e3;
+     const VU = 5;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L258-L262` → after: `L589-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L589-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L589-L593) · [Before (L258-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L258-L262)

```diff
-       const rM = MM.asError();
-       if (rM.debugResult.Ti || (0, mr.c)(rM.debugResult.error)) return;
-       console.log("Failed to join lobby:", rM.message);
-       const iM = "timedOut" === rM.debugResult.gameServerUnreachable;
-       (0, ar.reportClientError)("matchmake_failed", rM.message, iM ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : mM.n[rM.code]);
+       let {
+         item: XU,
+         packUrl: zU,
+         baselineUrl: yU
+       } = UU;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L264-L268` → after: `L595-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L595-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L595-L602) · [Before (L264-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L264-L268)

```diff
-         error: OM
-       } = rM.debugResult;
-       if (OM instanceof kM.k && "default" !== OM.packSource) {
-         const MM = (0, Pr.e)("js", "game" === OM.packSource ? "game" : "page", (0, Pr.h)(OM));
-         (0, ar.reportClientError)("texture_pack", OM, MM)
+         t: AU
+       } = (0, BU.I)(), [FU, oU] = (0, cU.useState)(50), DU = (0, cU.useRef)(!1), EU = (0, cU.useRef)(null), {
+         width: YU,
+         height: NU
+       } = QU.s.large;
+ 
+       function IU(UU) {
+         oU((XU => (0, OU.f)(XU + UU, 0, 100)))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L273-L338` → after: `L674-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L674-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L674-L687) · [Before (L273-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L273-L338)

```diff
-       if (null === MM || void 0 === MM || !MM.isError()) return !1;
-       const rM = MM.asError();
-       return rM.code === mM.n.REQUEST_TO_MATCHMAKING && !(0, mr.c)(rM.debugResult.error)
-     }
-     async function Ur(MM, rM, iM) {
-       const OM = (0, zr.M)(rM);
-       async function aM(MM, rM, iM, OM) {
-         var aM;
-         if (OM.aborted) return null;
-         null === SM.d.get("gameEntrySource") && (0, SM.j)("directPlayUrl"), Hr.H && (0, FM.f)().catch((() => {})), SM.d.set({
-           gameState: "findingLobby"
-         }), wM.i.Tz("loadingScreenState", "loadingPage:findingLobby");
-         const PM = await EM.userContextManager.getCurrentUserContext();
-         nM.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: rM,
-           discordContext: MM instanceof fM.e ? MM.getSerialisableParams() : null
- ... (50 more removed lines; see GitHub link above)
+       let {
+         side: XU,
+         onClick: zU,
+         children: cU
+       } = UU;
+       return (0, eU.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${XU}`,
+         onClick: zU,
+         children: (0, eU.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: cU
+         })
+       })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L341-L353` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L701) · [Before (L341-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L341-L353)

```diff
-     function Gr() {
-       const {
-         t: MM
-       } = (0, LM.A)(), rM = (0, QM.useNavigatePreserveSearch)(), iM = (0, OM.u)(), HM = (0, OM.D)(), JM = (0, aM.useRef)({
-         t: MM,
-         navigate: rM
-       });
-       JM.current = {
-         t: MM,
-         navigate: rM
-       };
-       const UM = (0, aM.useRef)("");
-       UM.current = iM.pathname + iM.search;
+     function jU(UU) {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L355-L366` → after: `L703-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L703-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L703-L709) · [Before (L355-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L355-L366)

```diff
-         gameState: GM,
-         clientEscMenuOptions: eM
-       } = (0, SM.m)(["gameState", "clientEscMenuOptions"]), fM = (0, aM.useRef)(null), YM = (0, aM.useRef)(!1);
-       var AM;
-       (0, aM.useEffect)((() => () => {
-         wM.i.Tz("leftPlayPage")
-       }), []), (0, nr.j)(), (0, nr.m)(), AM = Hr.H, (0, aM.useEffect)((() => {
-         if (!AM) return;
-         let MM = !0;
-         return (0, FM.f)().then((rM => {
-           MM && VM(rM)
-         })).catch((() => {})), () => {
+         userContext: XU
+       } = (0, gU.d)(), [yU, QU] = (0, cU.useState)(null), [AU, FU] = (0, cU.useState)(!1), [oU, DU] = (0, cU.useState)(!1), [EU, YU] = (0, cU.useState)(null), NU = null === UU || void 0 === UU ? void 0 : UU.packId, IU = null === UU || void 0 === UU ? void 0 : UU.sourceHash;
+       return (0, cU.useEffect)((() => {
+         if (FU(!1), YU(null), void 0 === NU) return;
+         let UU = !1;
+         return Promise.all([(0, GU.hasUsableWebGpuAdapter)(), (0, xU.f)()]).then((XU => {
+           let [zU, cU] = XU;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L368` → after: `L711-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L711-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L711-L715) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L368)

```diff
-           MM = !1, qM.wanted = !1, null === (rM = TM) || void 0 === rM || rM.setGamePackConfirm(null), TM = null
+           UU || (QU(zU), FU((null === cU || void 0 === cU || null === (yU = cU.listing) || void 0 === yU ? void 0 : yU.packId) === NU && cU.listing.sourceHash === IU))
+         })).catch((XU => {
+           console.error("Failed to check whether this shader pack can be used", XU), UU || QU(!1)
+         })), () => {
+           UU = !0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L370-L419` → after: `L717-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L717-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L717-L724) · [Before (L370-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L370-L419)

```diff
-       }), [AM]), (0, aM.useEffect)((() => {
-         var MM, rM, OM;
-         (0, jM.needGameClientNow)();
-         const {
-           t: aM,
-           navigate: PM
-         } = JM.current, LM = (0, Or.d)(HM, iM.search);
-         if (HM.lobbyName && !new URLSearchParams(iM.search).has("lobby")) return void PM((0, ZM.b)(LM.gameNameWithVariation, LM.lobbyName), {
-           replace: !0
-         });
-         let GM = Promise.resolve({
-           shouldMatchmake: !0
-         });
-         const eM = new AbortController;
-         if ("/play/discord-custom-lobby" === iM.pathname) {
-           const MM = SM.d.get("discordContext");
- ... (34 more removed lines; see GitHub link above)
+       }), [NU, IU]), {
+         webGpuUsable: yU,
+         inUse: AU,
+         busy: oU,
+         errorKey: EU,
+         use: () => {
+           null !== UU && async function(UU) {
+             DU(!0), YU(null);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L421` → after: `L726-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L726-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L726-L738) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L421)

```diff
-               SM = await lM.c.getGame(iM, OM, !0)
+               const {
+                 installListedShaderPack: cU
+               } = await Promise.all([zU.e(89), zU.e(147), zU.e(126)]).then((() => zU(41575))), yU = await cU({
+                 packId: UU.packId,
+                 sourceHash: UU.sourceHash,
+                 name: UU.name,
+                 ownerName: UU.ownerName,
+                 description: UU.description
+               });
+               if ("failed" === yU.kind) return void YU(JU[yU.reason]);
+               FU(!0), kU.c.recordShaderPackDownload(XU, UU.packId).catch((UU => {
+                 console.error("Failed to count a shader pack's download", UU)
+               })), (0, mU.k)()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L423` → after: `L740-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L740-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L740-L742) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L423)

```diff
-               return void console.error("Failed to get game", nM)
+               console.error("Failed to use the shader pack", cU), YU("shaderPack:unexpectedError")
+             } finally {
+               DU(!1)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L425-L639` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L744) · [Before (L425-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L425-L639)

```diff
-             if (null !== rM && void 0 !== rM && rM.aborted) return;
-             const jM = SM.customTexturePackKey;
-             if (!jM) return void(NM.e.isUsingTemporaryTexturePack() && ((0, gM.reloadBloxd)(), await new Promise((() => {}))));
-             if (NM.e.isUsingTemporaryTexturePack() && NM.e.getTemporaryTexturePackSource() === jM) return;
-             const aM = zM.NotificationProvider.showCustomPopup({
-                 body: MM => (0, XM.jsx)(ir, {
-                   schematicId: OM,
-                   texturePackKey: jM,
-                   onClose: MM
-                 }),
-                 disableExitButton: !0,
-                 disablePressBackgroundToClose: !0
-               }),
-               PM = () => {
-                 aM.tearDownNotification()
-               };
- ... (199 more removed lines; see GitHub link above)
+           }(UU)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L641-L644` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L746) · [Before (L641-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L641-L644)

```diff
-       });
-       if (404 === rM.status || 403 === rM.status) return null;
-       if (!rM.ok) throw new Error(`Failed to download the texture pack (${rM.status})`);
-       return await rM.json()
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L656-L677` → after: `L750-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L750-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L750-L778) · [Before (L656-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L656-L677)

```diff
-       return MM = function(MM, rM) {
-         var iM;
-         const OM = new URLSearchParams(rM),
-           SM = OM.get("lobby"),
-           jM = OM.get("vm"),
-           aM = null !== (iM = SM) && void 0 !== iM ? iM : MM.lobbyName,
-           PM = null !== jM && void 0 !== jM ? jM : MM.directJoinVmUrl;
-         if (aM === MM.lobbyName && PM === MM.directJoinVmUrl) return MM;
-         return {
-           ...MM,
-           lobbyName: aM,
-           directJoinVmUrl: PM
-         }
-       }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), MM = function(MM) {
-         if ((0, jM.J)(MM.directJoinVmUrl)) return MM;
-         const rM = (0, SM.bb)(MM.directJoinVmUrl);
- ... (6 more removed lines; see GitHub link above)
+       let {
+         packUse: XU
+       } = UU;
+       const {
+         t: zU
+       } = (0, BU.I)(), {
+         webGpuUsable: cU,
+         inUse: yU,
+         busy: QU,
+         errorKey: AU,
+         use: FU
+       } = XU;
+       return (0, eU.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, eU.jsxs)(YU.l, {
+           disabled: !0 !== cU || yU,
+ ... (13 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L688-L689` → after: `L782-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L782-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L782-L790) · [Before (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L688-L689)

```diff
-       OM = !0
-     }
+       var UU;
+       const {
+         t: XU
+       } = (0, BU.I)(), zU = (0, EU.useNavigatePreserveSearch)(), {
+         packId: QU
+       } = (0, yU.C)(), {
+         userContext: AU,
+         isUserContextUpdating: FU
+       } = (0, gU.d)(), [NU, pU] = (0, cU.useState)(null), [aU, GU] = (0, cU.useState)(null), [ZU, RU] = (0, cU.useState)(0), PU = (0, cU.useRef)(0);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L691-L692` → after: `L792-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L792-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L792-L854) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L691-L692)

```diff
-     function jM() {
-       return OM
+       function WU() {
+         var UU;
+         null !== (UU = (0, EU.getPreviousLocation)()) && void 0 !== UU && UU.startsWith(LU.T) ? zU(-1) : zU(LU.T)
+       }(0, tU.e)(WU), (0, fU.d)(), (0, cU.useEffect)((() => {
+         if (FU || void 0 === QU) return;
+         const UU = ++PU.current;
+         GU(null), kU.c.getShaderPack(AU, QU).then((XU => {
+           PU.current === UU && pU(XU)
+         })).catch((XU => {
+           PU.current === UU && (console.error("Failed to get the shader pack", XU), pU(null), GU({
+             error: XU
+           }))
+         }))
+       }), [QU, AU, FU, ZU]);
+       const dU = () => {
+           RU((UU => UU + 1))
+ ... (47 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L704-L705` → after: `L857-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L857-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L857-L876) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L704-L705)

```diff
-     function SM(MM, rM) {
-       return `${rM}\n${null!==MM&&void 0!==MM?MM:""}`
+     function TU(UU) {
+       let {
+         item: XU,
+         favourites: zU,
+         packUse: cU
+       } = UU;
+       const yU = zU.isFavourite(XU.packId);
+       return (0, eU.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [GU.featureFlags.settings.canUseShaderPacks && (0, eU.jsx)(KU, {
+           packUse: cU
+         }), (0, eU.jsx)(YU.q, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             zU.toggle(XU.packId)
+           },
+ ... (4 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L709` → after: `L880-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L880-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L880-L968) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L709)

```diff
-       OM = MM
+       let {
+         item: XU,
+         ownerPreview: zU,
+         bloxdhubSlug: cU,
+         actions: yU
+       } = UU;
+       const {
+         t: FU
+       } = (0, BU.I)(), oU = (0, aU.q)(), DU = null === cU ? null : (0, QU.f)(cU);
+       return (0, eU.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [XU.description && (0, eU.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: XU.description
+         }), (0, eU.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+ ... (73 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L713-L714` → after: `L972-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L972-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L972-L997) · [Before (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L713-L714)

```diff
-       const rM = OM;
-       return OM = null, null !== rM && rM.key === MM ? rM.settled : null
+       let {
+         label: XU,
+         time: zU,
+         now: cU
+       } = UU;
+       const {
+         t: yU,
+         selectedLanguage: QU
+       } = (0, BU.I)(), AU = new Date(zU);
+       let oU = AU.toLocaleDateString();
+       if (cU - zU <= 30 * FU.h) {
+         const UU = (0, BU.l)(QU.code, "shaderPackListing:timeAgo");
+         oU = yU("shaderPackListing:timeAgo", {
+           time: (0, FU.eb)(UU, zU, cU)
+         })
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L717-L723` → after: `L1008-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1008-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1008-L1047) · [Before (L717-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L717-L723)

```diff
-     function PM(MM, rM, iM, OM) {
-       let SM = !1;
-       null !== rM && setTimeout((() => {
-         OM() && !SM && rM()
-       }), 0), MM.then((MM => {
-         SM = !0, iM(MM)
-       }))
+     function AU(UU) {
+       let {
+         options: XU,
+         value: zU,
+         onChange: cU,
+         ariaLabel: AU,
+         className: FU,
+         reselectable: oU = !1,
+         keepsFocus: DU = !1,
+         padTabs: EU
+       } = UU;
+       const YU = void 0 !== EU;
+       return (0, QU.jsx)("div", {
+         className: yU()("SegmentedToggle", FU),
+         role: "group",
+         "aria-label": AU,
+ ... (24 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L726` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1050) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L726)

```diff
-   9514: (MM, rM, iM) => {
+   5588: (UU, XU, zU) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L728-L729` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1052) · [Before (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L728-L729)

```diff
-       e: () => HM,
-       f: () => mM,
+       d: () => QU,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L732-L769` → after: `L1055-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1055-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1055-L1079) · [Before (L732-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L732-L769)

```diff
-     var OM = iM(3563),
-       SM = iM(2414),
-       jM = iM(2257),
-       aM = iM(5022),
-       PM = iM(3902),
-       nM = iM(9517);
-     let QM = null;
- 
-     function zM() {
-       return Promise.all([iM.e(86), iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(174), iM.e(222), iM.e(150), iM.e(153), iM.e(101), iM.e(298), iM.e(75)]).then((() => iM(41755)))
-     }
- 
-     function LM() {
-       Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).catch((() => {}))
-     }
- 
- ... (22 more removed lines; see GitHub link above)
+     var cU = zU(61);
+     const yU = new WeakMap,
+       QU = UU => {
+         var XU;
+         const zU = UU.closest("[data-pad-slider]");
+         return zU && null !== (XU = yU.get(zU)) && void 0 !== XU ? XU : null
+       },
+       AU = (UU, XU) => {
+         const zU = (0, cU.useRef)(XU);
+         zU.current = XU, (0, cU.useEffect)((() => {
+           if (UU.current) return ((UU, XU) => (yU.set(UU, XU), () => {
+             yU.get(UU) === XU && yU.delete(UU)
+           }))(UU.current, {
+             adjust: UU => {
+               zU.current.adjust(UU)
+             },
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L771` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1081) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L771)

```diff
-   9510: (MM, rM, iM) => {
+   7253: (UU, XU, zU) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L774-L777` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1084) · [Before (L774-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L774-L777)

```diff
-       f: () => aM,
-       h: () => PM,
-       l: () => QM,
-       p: () => nM
+       f: () => QU
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L779-L790` → after: `L1086-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1086-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1086-L1088) · [Before (L779-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L779-L790)

```diff
-     var OM = iM(181),
-       SM = iM(5003);
- 
-     function jM(MM) {
-       return aM(MM) === OM.d.gameOrPluginOnPlayerAuthRejected.code
-     }
- 
-     function aM(MM) {
-       return "object" === typeof MM && null !== MM ? MM.code : void 0
-     }
- 
-     function PM(MM) {
+     var cU = zU(42);
+     const yU = "shaderPack";
+     async function QU() {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L792-L802` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/124.js#L1090-L1091) · [Before (L792-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/124.js#L792-L802)

```diff
-       return null !== (rM = Object.keys(SM.e).find((rM => SM.e[rM] === MM))) && void 0 !== rM ? rM : null
-     }
- 
-     function nM(MM) {
-       return "notWhitelisted" === MM ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const QM = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/125.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/125.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L4)

```diff
-   5401: (MM, rM, iM) => {
+   5617: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L6-L9)

```diff
-       c: () => hM,
-       f: () => UM,
-       h: () => JM,
-       j: () => EM
+       e: () => EU,
+       h: () => DU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L11-L21` → after: `L9-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L9-L18) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L11-L21)

```diff
-     var OM = iM(44),
-       SM = iM(5403),
-       jM = iM(4720),
-       aM = iM(1440),
-       PM = iM(5417),
-       nM = iM(1116),
-       QM = iM.n(nM),
-       zM = iM(1429),
-       LM = iM(1830),
-       mM = iM(5419),
-       HM = iM(1303);
+     var cU = zU(61),
+       yU = zU(1494),
+       QU = zU(1193),
+       AU = zU(97),
+       FU = zU(3498),
+       oU = zU(1305);
+ 
+     function DU() {
+       return !(0, AU.isMobile)()
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L31` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L23-L24) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L31)

```diff
-         note: zM
+         openFolderPicker: zU,
+         onFiles: AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L34-L65` → after: `L30-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L30-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L30-L50) · [Before (L34-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L34-L65)

```diff
-         "aria-disabled": nM || void 0,
-         "data-pad-focusable": !0,
-         className: QM()("SettingBox CheckboxContainer", {
-           [PM]: PM,
-           SettingBoxDisabled: nM
-         }),
-         onClick: () => {
-           nM || iM(!OM)
-         },
-         children: [(0, HM.jsxs)("div", {
-           className: "CheckboxInputAndText",
-           children: [(0, HM.jsx)("label", {
-             className: "CheckboxClickableLabel",
-             children: (0, HM.jsx)(jM.c, {
-               className: "SettingsCheckbox",
-               checked: OM,
- ... (16 more removed lines; see GitHub link above)
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, oU.jsx)("input", {
+           ref: YU,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+           onChange: function(UU) {
+             const XU = Array.from(UU.target.files);
+             UU.target.value = "", AU(XU)
+           }
+         }), DU() && (0, oU.jsx)(yU.f, {
+           disabled: XU,
+           onClick: zU,
+           children: EU("general:chooseFolder")
+         }), (0, oU.jsx)(yU.f, {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L70-L131` → after: `L64-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L64-L68) · [Before (L70-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L70-L131)

```diff
-     function JM(MM) {
-       let {
-         name: rM,
-         onChange: iM,
-         min: SM,
-         max: jM,
-         step: PM,
-         initValue: nM,
-         circleInfoText: zM,
-         format: LM,
-         className: mM,
-         padStep: hM,
-         disabled: JM = !1,
-         selectableMax: dM,
-         cappedNote: yM,
-         onChangeComplete: EM
- ... (46 more removed lines; see GitHub link above)
+     function QU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const cU = {};
+       for (const yU in zU) cU[yU] = `\0${yU}\0`;
+       return UU(XU, cU).replace(/\0(\w+)\0/g, ((UU, XU) => zU[XU]))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L136-L137` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L72) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L136-L137)

```diff
-       var rM;
-       return (null !== (rM = String(MM).split(".")[1]) && void 0 !== rM ? rM : "").length
+       return null === UU.file ? null : UU.line > 0 ? `${UU.file}:${UU.line}` : UU.file
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L141-L230` → after: `L76-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L76-L79) · [Before (L141-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L141-L230)

```diff
-       let {
-         value: rM,
-         min: iM,
-         max: jM,
-         step: aM,
-         onChange: PM,
-         orientation: nM,
-         reverse: QM,
-         setIsChanging: zM,
-         tooltip: LM,
-         labels: hM,
-         handleLabel: JM,
-         format: lM,
-         onChangeStart: EM,
-         onChangeComplete: UM,
-         padStep: GM,
- ... (74 more removed lines; see GitHub link above)
+       const XU = new Map(UU.map((UU => [oU(UU).join("."), UU])));
+       if (0 === XU.size) return [];
+       const zU = EU([...XU.values()]);
+       return 0 === zU[0].length ? [] : zU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L232-L241` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L81-L83) · [Before (L232-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L232-L241)

```diff
-     async function EM() {
-       const MM = zM.NotificationProvider.showPromptPopup({
-         title: "settingsMenu:reloadPagePopupTitle",
-         subtitle: "settingsMenu:reloadPagePopupSubtitle",
-         confirmText: "settingsMenu:reloadPagePopupConfirm",
-         confirmTooltip: "",
-         cancelText: "general:cancel",
-         cancelTooltip: ""
-       });
-       !0 === await MM.getResult() && (0, LM.reloadBloxd)()
+ 
+     function oU(UU) {
+       return yU.map((XU => XU(UU)))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L245-L266` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L88-L108) · [Before (L245-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L245-L266)

```diff
-       let {
-         label: rM,
-         options: iM,
-         value: OM,
-         onChange: SM,
-         circleInfoText: jM
-       } = MM;
-       return (0, HM.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, HM.jsxs)("div", {
-           className: "SliderText",
-           children: [rM, jM && (0, HM.jsx)(aM.e, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: jM
-           })]
-         }), (0, HM.jsx)(PM.e, {
- ... (6 more removed lines; see GitHub link above)
+       const XU = yU.map((XU => new Set(UU.map(XU)))),
+         zU = XU.reduce(((UU, XU) => UU * XU.size), 1),
+         cU = XU.every(((UU, XU) => 1 === UU.size || UU.size === DU[XU]));
+       if (zU === UU.length && cU) return [yU.filter(((UU, zU) => 1 === XU[zU].size)).map((XU => XU(UU[0])))];
+       let QU = null;
+       for (let AU = 0; AU < yU.length; AU++) {
+         if (1 === XU[AU].size) continue;
+         const zU = YU(UU, yU[AU]).flatMap(EU);
+         (null === QU || zU.length < QU.length) && (QU = zU)
+       }
+       return QU
+     }
+ 
+     function YU(UU, XU) {
+       const zU = new Map;
+       for (const yU of UU) {
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L269` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L111) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L269)

```diff
-   7150: (MM, rM, iM) => {
+   7196: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L271` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L113) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L271)

```diff
-       default: () => TM
+       ShaderPackPublishForm: () => GU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L273-L300` → after: `L115-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L115-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L115-L130) · [Before (L273-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L273-L300)

```diff
-     var OM = iM(44),
-       SM = iM(1608),
-       jM = iM(7054),
-       aM = iM(1229),
-       PM = iM(332),
-       nM = iM(1630),
-       QM = iM(1396),
-       zM = iM(1591),
-       LM = iM(1520),
-       mM = iM(1440),
-       HM = iM(1694),
-       hM = iM(2818),
-       JM = iM(2963),
-       dM = iM(4934),
-       yM = iM(1142),
-       lM = iM(1573),
- ... (12 more removed lines; see GitHub link above)
+     var cU = zU(61),
+       yU = zU(7158),
+       QU = zU(217),
+       AU = zU(5608),
+       FU = zU(1390),
+       oU = zU(1494),
+       DU = zU(1726),
+       EU = zU(1129),
+       YU = zU(7198),
+       NU = zU(7203),
+       IU = zU(1545),
+       pU = zU(1193),
+       aU = zU(7209),
+       tU = zU(7242),
+       gU = zU(7150),
+       kU = zU(1305);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L304-L306` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L135-L136) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L304-L306)

```diff
-         details: rM,
-         owner: iM,
-         onChanged: SM
+         existing: GU,
+         onPublished: ZU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L310-L326` → after: `L140-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L140-L163) · [Before (L310-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L310-L326)

```diff
-       } = (0, UM.A)(), PM = (0, zM.useNavigatePreserveSearch)(), {
-         userContext: nM
-       } = (0, yM.b)(), [mM, HM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(null), [dM, EM] = (0, OM.useState)(!1), {
-         packId: GM,
-         name: CM,
-         description: RM,
-         live: pM
-       } = rM;
-       async function WM(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
-         HM(!0), JM(null);
-         try {
-           await MM(), rM()
-         } catch (iM) {
-           console.error("Failed to change a shader pack", iM), JM((0, tM.u)(iM, aM, "shaderPackListing:ownerActionFailed"))
-         } finally {
- ... (1 more removed lines; see GitHub link above)
+       } = (0, pU.I)(), {
+         userContext: WU,
+         isUserContextUpdating: dU
+       } = (0, EU.d)(), [LU, eU] = (0, cU.useState)(null), [CU, wU] = (0, cU.useState)(0), [qU, OU] = (0, cU.useState)(null !== (XU = null === GU || void 0 === GU ? void 0 : GU.name) && void 0 !== XU ? XU : ""), SU = (0, cU.useRef)(qU), rU = (0, cU.useRef)(""), uU = UU => {
+         SU.current = UU, OU(UU)
+       }, [fU, iU] = (0, cU.useState)(null !== (zU = null === GU || void 0 === GU ? void 0 : GU.description) && void 0 !== zU ? zU : ""), HU = (0, cU.useRef)(fU), MU = (0, cU.useRef)(""), vU = UU => {
+         HU.current = UU, iU(UU)
+       }, [VU, sU] = (0, cU.useState)(!1), {
+         loading: nU,
+         error: mU,
+         setError: lU,
+         onFiles: xU
+       } = (0, NU.f)((async UU => {
+         const XU = await (0, aU.loadPageShaderPackCompiler)();
+         if (!XU) return void lU(PU("shaderPack:compilerUnavailable"));
+         const zU = await (0, tU.h)(XU, UU.files);
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L328-L340` → after: `L165-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L165-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L165-L186) · [Before (L328-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L328-L340)

```diff
-       }
-       const sM = (0, tM.q)(nM);
-       return (0, gM.jsxs)("section", {
-         className: "ShaderPackOwnerPanel",
-         children: [(0, gM.jsx)("h2", {
-           className: "ShaderPackSectionTitle",
-           children: aM("general:manage")
-         }), (0, tM.S)(iM, !(null === pM || void 0 === pM || !pM.renderId), Date.now(), aM).map((MM => (0, gM.jsxs)("div", {
-           className: eM()("ShaderPackOwnerNotice", {
-             Warning: "warning" === MM.tone
-           }),
-           children: [(0, gM.jsx)(bM.b, {
-             name: "warning" === MM.tone ? "triangle-exclamation" : "circle-info"
+       })), JU = !dU && !WU.isLoggedIn() && !QU.d.offlineMode, jU = qU.trim(), KU = jU.length < yU.C, bU = null !== LU && !1 !== (null === (YU = LU.validation) || void 0 === YU ? void 0 : YU.ok) && !nU && !KU && !JU && !dU;
+       return (0, kU.jsxs)("div", {
+         className: "ShaderPackPublishForm",
+         children: [(0, kU.jsx)("p", {
+           className: "ShaderPackPublishIntro",
+           children: GU ? PU("shaderPackListing:uploadIntro", {
+             minutes: String(yU.H / 6e4)
+           }) : PU("shaderPackListing:publishIntro")
+         }), (0, kU.jsx)(RU, {}), JU && (0, kU.jsx)("div", {
+           className: "ShaderPackPublishNote Warning",
+           children: PU("shaderPackListing:publishNeedsLogin")
+         }), (0, kU.jsx)(NU.b, {
+           busy: nU,
+           disabled: nU || VU,
+           onFiles: UU => {
+             eU(null), xU(UU)
+ ... (6 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L342-L344` → after: `L188-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L188-L192) · [Before (L342-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L342-L344)

```diff
-             children: [MM.text, MM.detail && (0, gM.jsx)("pre", {
-               className: "ShaderPackOwnerNoticeDetail",
-               children: MM.detail
+             className: "ShaderPackPublishPackSize",
+             children: [PU("shaderPackListing:sizeValue", {
+               kilobytes: String((0, gU.Q)(LU.sourceBytes))
+             }), " \xb7", " ", PU("shaderPackListing:filesValue", {
+               files: String(LU.pack.files.length)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L347-L352` → after: `L197-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L197-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L197-L223) · [Before (L347-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L347-L352)

```diff
-         }, MM.text))), rM.ban && (0, gM.jsxs)("div", {
-           className: "ShaderPackOwnerNotice Warning",
-           children: [(0, gM.jsx)(bM.b, {
-             name: "ban"
-           }), (0, gM.jsxs)("div", {
-             children: ["Banned by ", rM.ban.byName, " on ", new Date(rM.ban.at).toLocaleString()]
+         }), !GU && (0, kU.jsxs)(kU.Fragment, {
+           children: [(0, kU.jsxs)("label", {
+             className: "ShaderPackPublishField",
+             children: [(0, kU.jsx)("span", {
+               children: PU("general:name")
+             }), (0, kU.jsx)(DU.e, {
+               className: "ShaderPackPublishInput",
+               defaultValue: qU,
+               maxLength: yU.B,
+               onValueChange: uU
+             }, CU), LU && KU && (0, kU.jsx)("span", {
+               className: "ShaderPackPublishHint",
+               children: PU("shaderPackListing:nameTooShort", {
+                 min: String(yU.C)
+               })
+             })]
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L355` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L226) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L355)

```diff
-           className: "ShaderPackOwnerError",
+           className: "ShaderPackPublishNote Error",
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L357-L461` → after: `L228-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L228-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L228-L267) · [Before (L357-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L357-L461)

```diff
-         }), (0, gM.jsxs)("div", {
-           className: "ShaderPackOwnerActions",
-           children: [(0, gM.jsxs)(LM.V, {
-             disabled: mM,
-             onClick: () => {
-               !async function() {
-                 const MM = await wM.NotificationProvider.showInputPopup({
-                   title: "shaderPackListing:renameTitle",
-                   initialValue: CM,
-                   maxLength: jM.z,
-                   submitText: "general:save",
-                   validate: MM => MM.trim().length < jM.D ? aM("shaderPackListing:nameTooShort", {
-                     min: String(jM.D)
-                   }) : null
-                 }).getResult();
-                 "notificationTornDown" !== MM && "submit" === (null === MM || void 0 === MM ? void 0 : MM.type) && MM.value.trim() !== CM && await WM((() => lM.c.updateShaderPack(nM, {
- ... (89 more removed lines; see GitHub link above)
+         }), (0, kU.jsxs)(oU.l, {
+           className: "ShaderPackPublishButton",
+           disabled: !bU,
+           loading: VU,
+           onClick: () => {
+             !async function() {
+               var UU;
+               if (!LU) return;
+               const {
+                 name: XU,
+                 description: zU
+               } = null !== GU && void 0 !== GU ? GU : {
+                 name: jU,
+                 description: fU.trim()
+               }, cU = {
+                 packId: null !== (UU = null === GU || void 0 === GU ? void 0 : GU.packId) && void 0 !== UU ? UU : null,
+ ... (24 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L476` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L274) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L476)

```diff
-         item: rM
+         picked: XU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L480-L486` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L278-L279) · [Before (L480-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L480-L486)

```diff
-       } = (0, UM.A)(), [SM] = (0, ZM.h)(), [aM, PM] = (0, OM.useState)(SM), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(!1), {
-         s3Url: mM
-       } = kM.clientSideServerUrls, {
-         width: HM,
-         height: hM
-       } = jM.v.large, JM = (0, jM.w)(mM, rM, aM, "large"), {
-         renderVersion: dM
+       } = (0, pU.I)(), {
+         validation: cU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L488-L538` → after: `L281-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L281-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L281-L298) · [Before (L488-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L488-L538)

```diff
-       return (0, gM.jsxs)("div", {
-         className: "ShaderPackPreviews",
-         children: [(0, gM.jsx)(fM.c, {
-           selected: aM,
-           onSelect: MM => {
-             PM(MM), QM(!1)
-           },
-           imageUrl: MM => (0, jM.w)(mM, rM, MM, "thumb")
-         }), (0, gM.jsxs)("div", {
-           className: "ShaderPackPreviewStage",
-           children: [!nM && (0, gM.jsxs)("button", {
-             type: "button",
-             className: "ShaderPackPreviewMain",
-             title: null === dM ? void 0 : iM("shaderPackListing:fullSize"),
-             disabled: null === dM,
-             onClick: () => {
- ... (35 more removed lines; see GitHub link above)
+       return null === cU ? (0, kU.jsx)("div", {
+         className: "ShaderPackPublishNote",
+         children: zU("shaderPackListing:publishUnchecked")
+       }) : cU.ok ? (0, kU.jsxs)(kU.Fragment, {
+         children: [(0, kU.jsxs)("div", {
+           className: "ShaderPackPublishNote Ready",
+           children: [(0, kU.jsx)(FU.d, {
+             name: "circle-check"
+           }), " ", zU("shaderPackListing:publishReady")]
+         }), cU.offInStrict.length > 0 && (0, kU.jsxs)(kU.Fragment, {
+           children: [(0, kU.jsxs)("div", {
+             className: "ShaderPackPublishNote Warning",
+             children: [(0, kU.jsx)(FU.d, {
+               name: "triangle-exclamation"
+             }), " ", zU("shaderPack:offInStrict")]
+           }), (0, kU.jsx)(YU.d, {
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L540-L546` → after: `L300-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L300-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L300-L310) · [Before (L540-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L540-L546)

```diff
-         }), zM && (0, gM.jsx)(NM, {
-           fullUrl: (0, jM.w)(mM, rM, aM, "full"),
-           largeUrl: JM,
-           alt: iM(tM.db[aM]),
-           onClose: () => {
-             LM(!1)
-           }
+         })]
+       }) : (0, kU.jsxs)(kU.Fragment, {
+         children: [(0, kU.jsxs)("div", {
+           className: "ShaderPackPublishNote Error",
+           children: [(0, kU.jsx)(FU.d, {
+             name: "triangle-exclamation"
+           }), " ", zU("shaderPackListing:publishHasErrors")]
+         }), (0, kU.jsx)(YU.d, {
+           diagnostics: cU.errors,
+           more: cU.moreErrors,
+           t: zU
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L551-L582` → after: `L316-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L316-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L316-L331) · [Before (L551-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L551-L582)

```diff
-     function NM(MM) {
-       let {
-         fullUrl: rM,
-         largeUrl: iM,
-         alt: SM,
-         onClose: jM
-       } = MM;
-       const aM = (0, OM.useRef)(null);
-       return (0, sM.v)("popup", aM, jM), (0, OM.useEffect)((() => {
-         function MM(MM) {
-           "Escape" === MM.key && (MM.stopPropagation(), jM())
-         }
-         return window.addEventListener("keydown", MM, !0), () => {
-           window.removeEventListener("keydown", MM, !0)
-         }
-       }), [jM]), (0, pM.createPortal)((0, gM.jsxs)("div", {
- ... (16 more removed lines; see GitHub link above)
+     function RU() {
+       const {
+         t: UU
+       } = (0, pU.I)(), [XU, zU] = UU("shaderPackListing:bloxdhubHelp", {
+         site: ZU
+       }).split(ZU);
+       return (0, kU.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [XU, (0, kU.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: yU.h,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: yU.c
+         }), zU]
+       })
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L587-L668` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L362) · [Before (L587-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L587-L668)

```diff
-       let {
-         item: rM,
-         packUrl: iM,
-         baselineUrl: SM
-       } = MM;
-       const {
-         t: aM
-       } = (0, UM.A)(), [PM, nM] = (0, OM.useState)(50), QM = (0, OM.useRef)(!1), zM = (0, OM.useRef)(null), {
-         width: LM,
-         height: mM
-       } = jM.v.large;
- 
-       function HM(MM) {
-         nM((rM => (0, WM.f)(rM + MM, 0, 100)))
-       }
- 
- ... (66 more removed lines; see GitHub link above)
+       return UU === cU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L672-L685` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L366) · [Before (L672-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L672-L685)

```diff
-       let {
-         side: rM,
-         onClick: iM,
-         children: OM
-       } = MM;
-       return (0, gM.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${rM}`,
-         onClick: iM,
-         children: (0, gM.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: OM
-         })
-       })
+       return [...UU.features]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L687-L697` → after: `L368-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L368-L370) · [Before (L687-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L687-L697)

```diff
-     var FM = iM(5401),
-       BM = iM(308),
-       XM = iM(7148);
-     const IM = {
-       compiler: "shaderPack:compilerUnavailable",
-       download: "shaderPackListing:useDownloadFailed",
-       apiVersion: "shaderPackListing:useOtherApiVersion",
-       invalid: "shaderPackListing:useInvalid",
-       errors: "shaderPackListing:useFailsHere",
-       save: "shaderPack:saveFailed"
-     };
+     const AU = 262144,
+       FU = 256,
+       oU = 256;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L700-L743` → after: `L373-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L373-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L373-L380) · [Before (L700-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L700-L743)

```diff
-       const {
-         userContext: rM
-       } = (0, yM.b)(), [SM, jM] = (0, OM.useState)(null), [aM, PM] = (0, OM.useState)(!1), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(null), mM = null === MM || void 0 === MM ? void 0 : MM.packId, HM = null === MM || void 0 === MM ? void 0 : MM.sourceHash;
-       return (0, OM.useEffect)((() => {
-         if (PM(!1), LM(null), void 0 === mM) return;
-         let MM = !1;
-         return Promise.all([(0, EM.hasUsableWebGpuAdapter)(), (0, XM.d)()]).then((rM => {
-           let [iM, OM] = rM;
-           var SM;
-           MM || (jM(iM), PM((null === OM || void 0 === OM || null === (SM = OM.listing) || void 0 === SM ? void 0 : SM.packId) === mM && OM.listing.sourceHash === HM))
-         })).catch((rM => {
-           console.error("Failed to check whether this shader pack can be used", rM), MM || jM(!1)
-         })), () => {
-           MM = !0
-         }
-       }), [mM, HM]), {
- ... (28 more removed lines; see GitHub link above)
+       if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
+       const XU = [];
+       for (const [zU, cU] of Object.entries(UU)) {
+         if ("string" !== typeof cU) return `${zU} isn't text.`;
+         XU.push({
+           path: zU,
+           source: cU
+         })
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L748-L776` → after: `L401-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L401-L403) · [Before (L748-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L748-L776)

```diff
-       let {
-         packUse: rM
-       } = MM;
-       const {
-         t: iM
-       } = (0, UM.A)(), {
-         webGpuUsable: OM,
-         inUse: SM,
-         busy: jM,
-         errorKey: aM,
-         use: PM
-       } = rM;
-       return (0, gM.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, gM.jsxs)(LM.p, {
-           disabled: !0 !== OM || SM,
- ... (13 more removed lines; see GitHub link above)
+       const XU = {};
+       for (const zU of UU) XU[zU.path] = zU.source;
+       return XU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L779-L852` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L406-L407) · [Before (L779-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L779-L852)

```diff
-     function TM() {
-       var MM;
-       const {
-         t: rM
-       } = (0, UM.A)(), iM = (0, zM.useNavigatePreserveSearch)(), {
-         packId: jM
-       } = (0, SM.D)(), {
-         userContext: aM,
-         isUserContextUpdating: PM
-       } = (0, yM.b)(), [mM, hM] = (0, OM.useState)(null), [JM, EM] = (0, OM.useState)(null), [GM, CM] = (0, OM.useState)(0), eM = (0, OM.useRef)(0);
- 
-       function bM() {
-         var MM;
-         null !== (MM = (0, zM.getPreviousLocation)()) && void 0 !== MM && MM.startsWith(tM.P) ? iM(-1) : iM(tM.P)
-       }(0, dM.e)(bM), (0, ZM.c)(), (0, OM.useEffect)((() => {
-         if (PM || void 0 === jM) return;
- ... (58 more removed lines; see GitHub link above)
+     function YU(UU, XU) {
+       return UU < XU ? -1 : UU > XU ? 1 : 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L856-L874` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L411-L417) · [Before (L856-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L856-L874)

```diff
-       let {
-         item: rM,
-         favourites: iM,
-         packUse: OM
-       } = MM;
-       const SM = iM.isFavourite(rM.packId);
-       return (0, gM.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [EM.featureFlags.settings.canUseShaderPacks && (0, gM.jsx)(qM, {
-           packUse: OM
-         }), (0, gM.jsx)(LM.y, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             iM.toggle(rM.packId)
-           },
-           isLiked: !0 === SM,
- ... (3 more removed lines; see GitHub link above)
+       const XU = new TextEncoder;
+       let zU = 0;
+       for (const {
+           source: cU
+         }
+         of UU) zU += XU.encode(cU).byteLength;
+       return zU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L878-L966` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L421-L424) · [Before (L878-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L878-L966)

```diff
-       let {
-         item: rM,
-         ownerPreview: iM,
-         bloxdhubSlug: OM,
-         actions: SM
-       } = MM;
-       const {
-         t: PM
-       } = (0, UM.A)(), nM = (0, JM.p)(), QM = null === OM ? null : (0, jM.e)(OM);
-       return (0, gM.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [rM.description && (0, gM.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: rM.description
-         }), (0, gM.jsxs)("div", {
-           className: "ShaderPackFeatureList",
- ... (73 more removed lines; see GitHub link above)
+       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
+       if (UU.length > oU) return `A file path is over ${oU} characters.`;
+       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
+       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L969-L984` → after: `L428-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L428-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L428-L442) · [Before (L969-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L969-L984)

```diff
-     function Mr(MM) {
-       let {
-         label: rM,
-         time: iM,
-         now: OM
-       } = MM;
-       const {
-         t: SM,
-         selectedLanguage: jM
-       } = (0, UM.A)(), aM = new Date(iM);
-       let nM = aM.toLocaleDateString();
-       if (OM - iM <= 30 * PM.i) {
-         const MM = (0, UM.n)(jM.code, "shaderPackListing:timeAgo");
-         nM = SM("shaderPackListing:timeAgo", {
-           time: (0, PM.db)(MM, iM, OM)
-         })
+     function aU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const cU = new Map;
+       XU.forEach(((UU, XU) => {
+         let {
+           numAnimStates: zU,
+           animStartIdx: yU
+         } = UU;
+         for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
+       }));
+       const yU = Object.entries(UU),
+         QU = new Map;
+       for (const [aU, tU] of yU) {
+         const UU = pU.exec(aU);
+         "1" === UU?.[2] && QU.set(UU[1], tU + 1)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L986-L1074` → after: `L444-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L444-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L444-L503) · [Before (L986-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L986-L1074)

```diff
-       return (0, gM.jsx)(mM.i, {
-         tooltipInner: aM.toLocaleString(),
-         children: (0, gM.jsxs)("div", {
-           children: [(0, gM.jsx)("dt", {
-             children: rM
-           }), (0, gM.jsx)("dd", {
-             children: nM
-           })]
-         })
-       })
-     }
-   },
-   5417: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
- ... (73 more removed lines; see GitHub link above)
+       const AU = UU => {
+           const XU = pU.exec(UU);
+           return XU && QU.has(XU[1]) ? {
+             root: XU[1],
+             rotation: Number(XU[2]) - 1
+           } : null
+         },
+         FU = new Set(yU.map((UU => {
+           let [XU] = UU;
+           return AU(XU)?.root ?? XU
+         }))),
+         oU = (UU, zU) => {
+           const cU = UU.replace(/_?0$/, "");
+           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
+         },
+         DU = new Map;
+ ... (44 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1076` → after: `L505-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L505-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/125.js#L505-L524) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/125.js#L1076)

```diff
-         }), [MM])
+         } else NU.set(zU, aU + 1)
+       }
+       for (const pU of NU.keys()) IU.delete(pU);
+       for (const [pU, aU] of zU) {
+         const UU = NU.get(aU);
+         void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
+       }
+       return {
+         named: [...NU].sort(((UU, XU) => {
+           let [zU] = UU, [cU] = XU;
+           return zU < cU ? -1 : zU > cU ? 1 : 0
+         })).map((UU => {
+           let [XU, zU] = UU;
+           return {
+             name: XU,
+             id: zU
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L2)

```diff
- export const ids = [126];
+ export const ids = [126, 129, 150, 151];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L4)

```diff
-   5451: (MM, rM, iM) => {
+   5603: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L6-L7)

```diff
-       d: () => zM,
-       g: () => QM
+       d: () => cU.j,
+       e: () => yU,
+       i: () => cU.o
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L9-L340` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L10) · [Before (L9-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L9-L340)

```diff
-     var OM = iM(44),
-       SM = iM(1520),
-       jM = iM(1188),
-       aM = iM(83),
-       PM = iM(3540),
-       nM = iM(1303);
- 
-     function QM() {
-       return !(0, aM.isMobile)()
-     }
- 
-     function zM(MM) {
-       let {
-         disabled: rM,
-         openFolderPicker: iM,
-         onFiles: aM
- ... (316 more removed lines; see GitHub link above)
+     var cU = zU(5608);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L346` → after: `L16-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L16-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L16-L256) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L346)

```diff
-   5442: (MM, rM, iM) => {
+   41575: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => YU,
+       installListedShaderPack: () => EU
+     });
+     var cU = zU(7158),
+       yU = zU(5608),
+       QU = zU(1203),
+       AU = zU(7209),
+       FU = zU(5603),
+       oU = zU(7251),
+       DU = zU(7242);
+     async function EU(UU) {
+       const XU = await (0, AU.loadPageShaderPackCompiler)();
+       if (null === XU) return {
+         kind: "failed",
+ ... (225 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L349-L350` → after: `L259-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L259-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L259-L340) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L349-L350)

```diff
-       f: () => aM,
-       g: () => OM,
+       h: () => FU
+     });
+     var cU = zU(7251),
+       yU = zU(7219),
+       QU = zU(123);
+     const AU = 100;
+     async function FU(UU, XU) {
+       var zU;
+       let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
+       const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
+       if (AU.errors.length > 0) return DU(UU, AU.errors, AU.offInStrict);
+       const FU = await async function(UU) {
+         if (!UU) return null;
+         try {
+           const XU = await (0, QU.q)(UU);
+           return XU ? await XU.requestDevice() : null
+ ... (66 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L355-L357` → after: `L346-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L346-L348) · [Before (L355-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L355-L357)

```diff
-       t: () => QM,
-       w: () => zM,
-       z: () => mM
+       r: () => DU,
+       u: () => EU,
+       y: () => NU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L376` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L367) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L376)

```diff
-         if ("string" !== typeof OM) return `${iM} isn't text.`;
+         if ("string" !== typeof cU) return `${zU} isn't text.`;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L385` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L376) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L385)

```diff
-           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L393` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L384) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L393)

```diff
-             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L396` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L387) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L396)

```diff
-           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L421-L424` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L412-L415) · [Before (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L421-L424)

```diff
-       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
-       if (MM.length > nM) return `A file path is over ${nM} characters.`;
-       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
-       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
+       if (UU.length > oU) return `A file path is over ${oU} characters.`;
+       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
+       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L457` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/126.js#L448) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/126.js#L457)

```diff
-           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
+           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/127.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/127.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596)

#### 1. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127, 130, 151, 152];
+ export const ids = [127, 129, 150, 151];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L4)

```diff
-   5435: (MM, rM, iM) => {
+   5603: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L6-L10` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L10) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L10)

```diff
-       e: () => OM.g,
-       g: () => SM,
-       k: () => OM.o
-     });
-     var OM = iM(5442);
+       d: () => cU.j,
+       e: () => yU,
+       i: () => cU.o
+     });
+     var cU = zU(5608);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L16-L96` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L16) · [Before (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L16-L96)

```diff
-   41591: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => LM,
-       installListedShaderPack: () => zM
-     });
-     var OM = iM(7054),
-       SM = iM(5442),
-       jM = iM(1202),
-       aM = iM(7111),
-       PM = iM(5435),
-       nM = iM(7142),
-       QM = iM(7134);
-     async function zM(MM) {
-       const rM = await (0, aM.loadPageShaderPackCompiler)();
-       if (null === rM) return {
-         kind: "failed",
- ... (65 more removed lines; see GitHub link above)
+   7251: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L113-L118` → after: `L33-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L33-L38) · [Before (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L113-L118)

```diff
-     var OM = iM(5442),
-       SM = iM(5435),
-       jM = iM(30),
-       aM = iM(3855),
-       PM = iM(7148),
-       nM = iM(7120);
+     var cU = zU(5608),
+       yU = zU(5603),
+       QU = zU(42),
+       AU = zU(3849),
+       FU = zU(7253),
+       oU = zU(7219);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L125` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L45) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L125)

```diff
-         files: (0, OM.w)(MM.files),
+         files: (0, cU.u)(UU.files),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L151` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L71) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L151)

```diff
-       return hM((async () => JSON.stringify(await (0, PM.d)()) === JSON.stringify(MM) && (null === rM ? (await lM(), !0) : yM(rM, iM))))
+       return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L154` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L74) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L154)

```diff
-       const iM = await jM.f.setItem(PM.b, MM);
+       const zU = await QU.g.setItem(FU.e, UU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L158` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L78) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L158)

```diff
-       await jM.f.removeItem(PM.b), jM.g.removeItem(aM.c)
+       await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L195-L207` → after: `L115-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L115-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L115-L127) · [Before (L195-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L195-L207)

```diff
-       jM.k.setItem(QM, performance.timeOrigin)
-     }
- 
-     function eM() {
-       return jM.k.getItem(QM) === performance.timeOrigin
-     }
- 
-     function bM(MM) {
-       return !(0, SM.k)(MM.manifest.apiVersion)
-     }
- 
-     function wM(MM) {
-       return zM ??= MM.KD((0, nM.shaderPackTextures)()), zM
+       QU.n.setItem(DU, performance.timeOrigin)
+     }
+ 
+     function PU() {
+       return QU.n.getItem(DU) === performance.timeOrigin
+     }
+ 
+     function WU(UU) {
+       return !(0, yU.i)(UU.manifest.apiVersion)
+     }
+ 
+     function dU(UU) {
+       return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L217` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L137) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L217)

```diff
-         RM(await (0, PM.d)(!0), MM)
+         wU(await (0, FU.f)(!0), UU)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L223` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L143) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L223)

```diff
-         jM.g.removeItem(aM.c)
+         QU.k.removeItem(AU.b)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L228` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L148) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L228)

```diff
-       UM(MM, rM) ? jM.g.setItem(aM.c, !0) : jM.g.removeItem(aM.c)
+       BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L231` → after: `L151-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L151-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L151-L164) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L231)

```diff
-   7120: (MM, rM, iM) => {
+   7253: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => yU,
+       f: () => QU
+     });
+     var cU = zU(42);
+     const yU = "shaderPack";
+     async function QU() {
+       var UU;
+       let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
+     }
+   },
+   7219: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L236` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L169) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L236)

```diff
-     var OM = iM(5442);
+     var cU = zU(5608);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L241` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L174) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L241)

```diff
-       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L247` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L180) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L247)

```diff
-         return SM ??= (0, OM.j)(iM, jM, rM), SM
+         return yU ??= (0, cU.k)(zU, QU, XU), yU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L256` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L189) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L256)

```diff
-   7134: (MM, rM, iM) => {
+   5608: (UU, XU, zU) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L259-L341` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L192) · [Before (L259-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L259-L341)

```diff
-       f: () => PM
-     });
-     var OM = iM(7142),
-       SM = iM(7120),
-       jM = iM(106);
-     const aM = 100;
-     async function PM(MM, rM) {
-       var iM;
-       let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (iM = navigator.gpu) && void 0 !== iM ? iM : null;
-       const aM = MM.zMM(rM, (0, SM.shaderPackTextures)());
-       if (aM.errors.length > 0) return QM(MM, aM.errors, aM.offInStrict);
-       const PM = await async function(MM) {
-         if (!MM) return null;
-         try {
-           const rM = await (0, jM.z)(MM);
-           return rM ? await rM.requestDevice() : null
- ... (67 more removed lines; see GitHub link above)
+       h: () => AU,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L346-L348` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L198-L200) · [Before (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L346-L348)

```diff
-       t: () => QM,
-       w: () => zM,
-       z: () => mM
+       r: () => DU,
+       u: () => EU,
+       y: () => NU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L367` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L219) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L367)

```diff
-         if ("string" !== typeof OM) return `${iM} isn't text.`;
+         if ("string" !== typeof cU) return `${zU} isn't text.`;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L376` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L228) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L376)

```diff
-           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L384` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L236) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L384)

```diff
-             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L387` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L239) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L387)

```diff
-           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L412-L415` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L264-L267) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L412-L415)

```diff
-       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
-       if (MM.length > nM) return `A file path is over ${nM} characters.`;
-       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
-       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
+       if (UU.length > oU) return `A file path is over ${oU} characters.`;
+       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
+       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L448` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/127.js#L300) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/127.js#L448)

```diff
-           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
+           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/128.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/128.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128, 130, 151, 152];
+ export const ids = [128, 129, 150];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L4)

```diff
-   5435: (MM, rM, iM) => {
+   5603: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L6-L10` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L6-L10) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L6-L10)

```diff
-       e: () => OM.g,
-       g: () => SM,
-       k: () => OM.o
-     });
-     var OM = iM(5442);
+       d: () => cU.j,
+       e: () => yU,
+       i: () => cU.o
+     });
+     var cU = zU(5608);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L16)

```diff
-   7142: (MM, rM, iM) => {
+   40071: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L18-L48` → after: `L18-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L18-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L18-L40) · [Before (L18-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L18-L48)

```diff
-       forgetShaderPackActiveHint: () => uM,
-       isOtherApiVersion: () => bM,
-       isShaderPackActive: () => UM,
-       isShaderPackChangePending: () => eM,
-       markShaderPackChangePending: () => CM,
-       pageShaderPackValidationVersion: () => wM,
-       reconcileStoredShaderPackHint: () => gM,
-       removeShaderPack: () => EM,
-       replaceShaderPack: () => dM,
-       saveShaderPack: () => JM,
-       shaderPackNeedsCheck: () => tM,
-       storedPackOutcome: () => GM,
-       storedShaderPackFiles: () => mM,
-       toStoredShaderPack: () => LM
-     });
-     var OM = iM(5442),
- ... (15 more removed lines; see GitHub link above)
+       ShaderPackPage: () => oU,
+       harnessShaderPackMode: () => NU,
+       setHarnessUrlShaderPack: () => YU,
+       shaderPackPage: () => EU
+     });
+     var cU = zU(97),
+       yU = zU(42),
+       QU = (zU(3854), zU(5603), zU(3849)),
+       AU = zU(7253);
+     zU(7219);
+     const FU = {
+       status: "none"
+     };
+     class oU {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L50-L75` → after: `L42-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L42-L77) · [Before (L50-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L50-L75)

```diff
-       }
-     }
- 
-     function mM(MM) {
-       return Object.keys(MM.files).map((rM => ({
-         path: rM,
-         source: MM.files[rM]
-       })))
-     }
-     let HM = Promise.resolve();
- 
-     function hM(MM) {
-       const rM = HM.then(MM);
-       return HM = rM.catch((() => {})), rM
-     }
- 
- ... (10 more removed lines; see GitHub link above)
+         return this.stored
+       }
+       prefetchHint() {
+         return (0, QU.d)(cU.featureFlags.settings.canUseShaderPacks)
+       }
+       async loadActive() {
+         const UU = await this.load();
+         return "active" === UU.status ? UU.pack : null
+       }
+       load() {
+         return this.pagePack ??= this.read().catch((UU => (console.error("Failed to load the shader pack", UU), FU))).then((UU => (this.resolved ??= UU, UU))), this.pagePack
+       }
+       hasNone() {
+         var UU;
+         return "none" === (null === (UU = this.resolved) || void 0 === UU ? void 0 : UU.status)
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L78-L79` → after: `L80-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L80-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L80-L90) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L78-L79)

```diff
-       await jM.f.removeItem(PM.b), jM.g.removeItem(aM.c)
-     }
+       if (!(0, QU.k)(cU.featureFlags.settings.canUseShaderPacks)) return null;
+       try {
+         const UU = await (0, AU.f)(!0);
+         return UU || yU.k.setItem(QU.b, !1), UU
+       } catch (UU) {
+         return console.error("Failed to read the stored shader pack", UU), yU.k.removeItem(QU.b), null
+       }
+     }
+     const EU = new oU;
+ 
+     function YU(UU, XU) {}
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L82-L148` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L93) · [Before (L82-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L82-L148)

```diff
-       return hM(lM)
-     }
- 
-     function UM(MM, rM) {
-       return "active" === GM(MM, rM).kind
-     }
- 
-     function GM(MM, rM) {
-       var iM;
-       return null === MM ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : bM(MM) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) || MM.validation.fromRecheck ? null === rM ? {
- ... (51 more removed lines; see GitHub link above)
+       return null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L151` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L96) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L151)

```diff
-   7148: (MM, rM, iM) => {
+   7253: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L153-L156` → after: `L98-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L98-L101) · [Before (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L153-L156)

```diff
-       b: () => SM,
-       d: () => jM
-     });
-     var OM = iM(30);
+       e: () => yU,
+       f: () => QU
+     });
+     var cU = zU(42);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L161` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L106) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L161)

```diff
-       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
+       return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L164` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L109) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L164)

```diff
-   7120: (MM, rM, iM) => {
+   7219: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L169` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L114) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L169)

```diff
-     var OM = iM(5442);
+     var cU = zU(5608);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L174` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L119) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L174)

```diff
-       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L180` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L125) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L180)

```diff
-         return SM ??= (0, OM.j)(iM, jM, rM), SM
+         return yU ??= (0, cU.k)(zU, QU, XU), yU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L189` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L134) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L189)

```diff
-   5442: (MM, rM, iM) => {
+   5608: (UU, XU, zU) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L191-L193` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L136-L137) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L191-L193)

```diff
-       d: () => PM,
-       f: () => aM,
-       g: () => OM,
+       e: () => FU,
+       h: () => AU,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L198-L200` → after: `L143-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L143-L145) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L198-L200)

```diff
-       t: () => QM,
-       w: () => zM,
-       z: () => mM
+       r: () => DU,
+       u: () => EU,
+       y: () => NU
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L219` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L164) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L219)

```diff
-         if ("string" !== typeof OM) return `${iM} isn't text.`;
+         if ("string" !== typeof cU) return `${zU} isn't text.`;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L228` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L173) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L228)

```diff
-           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L236` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L181) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L236)

```diff
-             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L239` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L184) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L239)

```diff
-           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L264-L267` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L209-L212) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L264-L267)

```diff
-       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
-       if (MM.length > nM) return `A file path is over ${nM} characters.`;
-       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
-       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
+       if (UU.length > oU) return `A file path is over ${oU} characters.`;
+       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
+       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L300` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/128.js#L245) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/128.js#L300)

```diff
-           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
+           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129, 130, 151];
+ export const ids = [129, 150];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L4-L109` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L4) · [Before (L4-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L4-L109)

```diff
-   5435: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => OM.g,
-       g: () => SM,
-       k: () => OM.o
-     });
-     var OM = iM(5442);
-     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
-       strict: MM,
-       program: rM
-     })))))
-   },
-   40300: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       ShaderPackPage: () => nM,
-       harnessShaderPackMode: () => mM,
- ... (90 more removed lines; see GitHub link above)
+   7219: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L114` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L9) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L114)

```diff
-     var OM = iM(5442);
+     var cU = zU(5608);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L119` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L14) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L119)

```diff
-       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L125` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L20) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L125)

```diff
-         return SM ??= (0, OM.j)(iM, jM, rM), SM
+         return yU ??= (0, cU.k)(zU, QU, XU), yU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L134` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L29) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L134)

```diff
-   5442: (MM, rM, iM) => {
+   5608: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L136-L138` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L31-L32) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L136-L138)

```diff
-       d: () => PM,
-       f: () => aM,
-       g: () => OM,
+       e: () => FU,
+       h: () => AU,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L143-L145` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L38-L40) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L143-L145)

```diff
-       t: () => QM,
-       w: () => zM,
-       z: () => mM
+       r: () => DU,
+       u: () => EU,
+       y: () => NU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L164` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L59) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L164)

```diff
-         if ("string" !== typeof OM) return `${iM} isn't text.`;
+         if ("string" !== typeof cU) return `${zU} isn't text.`;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L173` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L68) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L173)

```diff
-           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L181` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L76) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L181)

```diff
-             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             if (XU.has(zU)) return `The pack has two files at ${zU}.`;
```
