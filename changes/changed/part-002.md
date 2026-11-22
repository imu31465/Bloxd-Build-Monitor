# Changed — Bundle Modifications Report (Part 002 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `2 / 47` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/102.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/102.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4)

#### 18. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L198-L228` → after: `L412-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L412-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/102.js#L412-L417) · [Before (L198-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/102.js#L198-L228)

```diff
-         "aria-disabled": vQ || void 0,
-         "data-pad-focusable": !0,
-         className: mQ()("SettingBox CheckboxContainer", {
-           [kQ]: kQ,
-           SettingBoxDisabled: vQ
-         }),
-         onClick: () => {
-           vQ || wQ(!LQ)
-         },
-         children: [(0, YQ.jsxs)("div", {
-           className: "CheckboxInputAndText",
-           children: [(0, YQ.jsx)("label", {
-             className: "CheckboxClickableLabel",
-             children: (0, YQ.jsx)(oQ.d, {
-               className: "SettingsCheckbox",
-               checked: LQ,
- ... (15 more removed lines; see GitHub link above)
+         className: "StudioTableGameCell",
+         children: [(0, fk.jsx)("div", {
+           className: "StudioTableThumbnail",
+           children: ek
+         }), (0, fk.jsx)("span", {
+           className: "StudioTableGameName",
```

#### 19. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L236-L554` → after: `L425-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L425-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/102.js#L425-L434) · [Before (L236-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/102.js#L236-L554)

```diff
-         name: FQ,
-         onChange: wQ,
-         min: qQ,
-         max: oQ,
-         step: kQ,
-         initValue: vQ,
-         circleInfoText: uQ,
-         format: HQ,
-         className: bQ,
-         padStep: xQ,
-         disabled: AQ = !1,
-         selectableMax: tQ,
-         cappedNote: MQ,
-         onChangeComplete: GQ
-       } = QQ;
-       const [pQ, cQ] = (0, LQ.useState)(vQ), CQ = (0, LQ.useRef)(vQ);
- ... (303 more removed lines; see GitHub link above)
+         game: ek
+       } = kk;
+       return (0, fk.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, Dk.i)(ek),
+         alt: ""
+       })
+     }
+   },
+   6270: (kk, ek, ik) => {
```

#### 20. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L558-L604` → after: `L438-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L438-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/102.js#L438-L444) · [Before (L558-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/102.js#L558-L604)

```diff
-     var LQ = wQ(1070),
-       qQ = wQ.n(LQ),
-       oQ = wQ(1107);
- 
-     function DQ(QQ) {
-       let {
-         options: FQ,
-         value: wQ,
-         onChange: LQ,
-         ariaLabel: DQ,
-         className: kQ,
-         reselectable: vQ = !1,
-         keepsFocus: mQ = !1,
-         padTabs: uQ
-       } = QQ;
-       const HQ = void 0 !== uQ;
- ... (31 more removed lines; see GitHub link above)
+     const Dk = {
+       1: ik(6273),
+       2: ik(6282),
+       3: ik(6286)
+     }
+   },
+   4847: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L609-L630` → after: `L448-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L448-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/102.js#L448-L467) · [Before (L609-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/102.js#L609-L630)

```diff
-     var LQ = wQ(53);
-     const qQ = new WeakMap,
-       oQ = QQ => {
-         var FQ;
-         const wQ = QQ.closest("[data-pad-slider]");
-         return wQ && null !== (FQ = qQ.get(wQ)) && void 0 !== FQ ? FQ : null
-       },
-       DQ = (QQ, FQ) => {
-         const wQ = (0, LQ.useRef)(FQ);
-         wQ.current = FQ, (0, LQ.useEffect)((() => {
-           if (QQ.current) return ((QQ, FQ) => (qQ.set(QQ, FQ), () => {
-             qQ.get(QQ) === FQ && qQ.delete(QQ)
-           }))(QQ.current, {
-             adjust: QQ => {
-               wQ.current.adjust(QQ)
-             },
- ... (6 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1021),
+       Sk = ik.n(fk),
+       bk = ik(1066);
+ 
+     function rk(kk) {
+       let {
+         columns: ek,
+         rows: ik,
+         getRowKey: fk,
+         renderRow: rk,
+         className: Pk
+       } = kk;
+       return (0, bk.jsxs)("table", {
+         className: Sk()("Table", Pk),
+         children: [(0, bk.jsx)("thead", {
+ ... (4 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L632-L671` → after: `L469-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L469-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/102.js#L469-L485) · [Before (L632-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/102.js#L632-L671)

```diff
-         }), [QQ])
-       }
-   },
-   4884: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => kQ,
-       i: () => DQ
-     });
-     var LQ = wQ(3047),
-       qQ = wQ(4892);
-     let oQ = null;
- 
-     function DQ(QQ, FQ) {
-       oQ = {
-         pack: QQ.metaData.id === LQ.d ? null : QQ,
-         prompt: FQ
- ... (24 more removed lines; see GitHub link above)
+         }), (0, bk.jsx)("tbody", {
+           children: ik.map((kk => (0, bk.jsx)(Dk.Fragment, {
+             children: rk(kk)
+           }, fk(kk))))
+         })]
+       })
+     }
+   },
+   4835: () => {},
+   6273: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   6282: kk => {
+     kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   6286: kk => {
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L4)

```diff
-   6339: (QQ, FQ, wQ) => {
+   4840: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L6)

```diff
-       c: () => eQ
+       e: () => xk
```

#### 3. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L8) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L8-L16)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1451),
-       oQ = wQ(1489),
-       DQ = wQ(3363),
-       kQ = wQ(1140),
-       vQ = wQ(1348),
-       mQ = wQ(1367),
-       uQ = wQ(1079),
-       HQ = wQ(1070),
+     var Dk = ik(1021),
```

#### 4. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L18` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L10-L16) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L18)

```diff
-       YQ = wQ(1107);
+       Sk = ik(1033),
+       bk = ik(1327),
+       rk = ik(3456),
+       Pk = ik(131),
+       mk = ik(3487),
+       Mk = ik(3475),
+       Kk = ik(1066);
```

#### 5. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22-L23` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L20) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L22-L23)

```diff
-         info: FQ,
-         className: wQ
+         game: ek
```

#### 6. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L26-L50` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L27-L42) · [Before (L26-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L26-L50)

```diff
-         className: bQ()("GameApprovalInfoDetails", wQ),
-         children: [(0, YQ.jsxs)("div", {
-           className: bQ()("GameApprovalInfoSummary", FQ.overallPassed ? "Passed" : "Failed"),
-           children: [(0, YQ.jsx)(uQ.c, {
-             name: FQ.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, YQ.jsx)("span", {
-             children: FQ.summary
-           })]
-         }), FQ.rows.length > 0 && (0, YQ.jsx)("div", {
-           className: "GameApprovalInfoRows",
-           children: FQ.rows.map((QQ => (0, YQ.jsxs)("div", {
-             className: bQ()("GameApprovalInfoRow", QQ.passed ? "Passed" : "Failed"),
-             children: [(0, YQ.jsx)(uQ.c, {
-               name: QQ.passed ? "check" : "xmark"
-             }), (0, YQ.jsxs)("div", {
-               className: "GameApprovalInfoRowText",
- ... (9 more removed lines; see GitHub link above)
+         className: "SchematicImageContainer",
+         children: [xk.isLoading && !nk && (0, Kk.jsx)(bk.d, {
+           loaderType: "Secondary"
+         }), !xk.failed && (null !== xk.src || nk) && (0, Kk.jsx)("div", {
+           className: fk()("SchematicImage", Mk.k, {
+             SchematicImageFadeIn: xk.fadeIn && !nk
+           }),
+           style: (0, Mk.g)(xk),
+           children: (0, Kk.jsx)(Mk.d, {
+             image: xk
+           })
+         }), xk.failed && (0, Kk.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, Kk.jsx)(Sk.d, {
+             name: "face-dizzy"
+           })
```

#### 7. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L54-L66` → after: `L46-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L46-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L46-L63) · [Before (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L54-L66)

```diff
-     var AQ = wQ(1207),
-       tQ = wQ(1362);
- 
-     function eQ(QQ) {
-       tQ.NotificationProvider.showCustomPopup({
-         body: () => (0, YQ.jsx)(MQ, {
-           ...QQ
-         }),
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
-       })
-     }
+   },
+   4955: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => wk
+     });
+     var Dk = ik(60),
+       fk = ik(1021),
+       Sk = ik.n(fk),
+       bk = ik(4888),
+       rk = ik(1327),
+       Pk = ik(1172),
+       mk = ik(3128),
+       Mk = ik(3271),
+       Kk = ik(1033),
+       xk = ik(3131),
+       nk = ik(4959),
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L70-L72` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L67-L71) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L70-L72)

```diff
-         schematicId: FQ,
-         canOverride: wQ,
-         onApprovalChanged: HQ
+         folderName: ek,
+         onTexturePackUpdated: fk,
+         disabled: wk = !1,
+         maxFileSizeMb: lk,
+         packOwner: pk
```

#### 9. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L76-L96` → after: `L75-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L75-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L75-L125) · [Before (L76-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L76-L96)

```diff
-       } = (0, AQ.y)(), {
-         userContext: tQ
-       } = (0, kQ.e)(), eQ = (0, DQ.c)(), [MQ, GQ] = (0, LQ.useState)(null), [pQ, cQ] = (0, LQ.useState)(null), [CQ, SQ] = (0, LQ.useState)(!1), iQ = (0, LQ.useCallback)((() => {
-         cQ(null), oQ.b.getGameApprovalInfo(tQ, FQ).then((QQ => {
-           eQ.current && GQ(QQ)
-         })).catch((QQ => {
-           console.error("Failed to get game approval info", QQ), eQ.current && cQ(bQ("studio:approvalLoadFailed"))
-         }))
-       }), [tQ, FQ, eQ, bQ]);
-       (0, LQ.useEffect)((() => {
-         iQ()
-       }), [iQ]);
-       const WQ = QQ => {
-         CQ || (SQ(!0), oQ.b.setGameApproval(tQ, FQ, QQ).then((() => {
-           null === HQ || void 0 === HQ || HQ(), eQ.current && iQ()
-         })).catch((QQ => {
- ... (5 more removed lines; see GitHub link above)
+       } = (0, Pk.D)(), [Yk, Lk] = (0, Dk.useState)(!1), [Ck, Ak] = (0, Dk.useState)(null), [jk, sk] = (0, Dk.useState)(null), dk = (0, Dk.useRef)(null);
+       async function Vk(kk) {
+         Lk(!0);
+         try {
+           const ek = await (0, mk.o)(kk);
+           if ("customGame" === pk && (0, Mk.n)(ek)) return void Ak(yk(Mk.e));
+           if (void 0 !== lk) {
+             const kk = JSON.stringify(ek).length / 1048576;
+             if (kk > lk) return void Ak(yk("customTexturePack:packTooBig", {
+               size: kk.toFixed(1),
+               max: lk
+             }))
+           }
+           Ak(null), sk(null), fk(ek), dk.current = ek,
+             function(kk, ek) {
+               const Dk = kk.modelOverrides;
+ ... (35 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L98-L104` → after: `L127-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L127-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L127-L138) · [Before (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L98-L104)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, YQ.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: bQ("studio:approvalTitle")
-         }), !MQ && !pQ && (0, YQ.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, YQ.jsx)(vQ.c, {})
+         className: "CustomTexturePackContainer",
+         children: [(0, Hk.jsxs)("div", {
+           className: "CustomTextureWarning",
+           children: [yk("settingsMenu:customTextureWarning"), ".", (0, Hk.jsx)("br", {}), yk("settingsMenu:viewDocumentation"), ":", " ", (0, Hk.jsx)("a", {
+             href: "https://github.com/Bloxdy/texturePacks",
+             target: "_blank",
+             rel: "noreferrer",
+             children: "github.com/Bloxdy/texturePacks"
+           })]
+         }), Ck && (0, Hk.jsxs)("div", {
+           className: "CustomTextureError",
+           children: [yk("general:error"), ": ", Ck]
```

#### 11. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L106` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L140) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L106)

```diff
-           className: "ApprovalInfoPopupError",
+           className: "CustomTextureError",
```

#### 12. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L108-L139` → after: `L142-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L142-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L142-L160) · [Before (L108-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L108-L139)

```diff
-         }), MQ && (0, YQ.jsxs)(YQ.Fragment, {
-           children: [(0, YQ.jsx)(xQ, {
-             info: MQ
-           }), wQ && (0, YQ.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== MQ.manualOverride && (0, YQ.jsx)(mQ.f, {
-               tooltipInner: (0, YQ.jsx)("div", {
-                 children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
-               }),
-               children: (0, YQ.jsxs)(qQ.m, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   WQ(!0)
-                 },
-                 disabled: CQ,
-                 children: [(0, YQ.jsx)(uQ.c, {
- ... (16 more removed lines; see GitHub link above)
+         }), (0, Hk.jsxs)("div", {
+           ...Fk({
+             className: Sk()("CustomTextureFolderUpload", {
+               ActiveDrag: qk,
+               Disabled: wk
+             })
+           }),
+           children: [(0, Hk.jsx)("input", {
+             ...uk({
+               webkitdirectory: "true"
+             })
+           }), Yk && (0, Hk.jsx)("div", {
+             className: "CustomTextureFolderUploadLoading",
+             children: (0, Hk.jsx)(rk.d, {})
+           }), !Yk && !qk && ek && (0, Hk.jsxs)(Hk.Fragment, {
+             children: [(0, Hk.jsx)("div", {
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L141-L153` → after: `L162-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L162-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L162-L170) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L141-L153)

```diff
-             }), null !== MQ.manualOverride && (0, YQ.jsx)(mQ.f, {
-               tooltipInner: (0, YQ.jsx)("div", {
-                 children: "Remove the manual override and revert the game to the auto-approval criteria."
-               }),
-               children: (0, YQ.jsxs)(qQ.f, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   WQ(null)
-                 },
-                 disabled: CQ,
-                 children: [(0, YQ.jsx)(uQ.c, {
-                   name: "arrows-rotate"
-                 }), " Clear Override"]
+             }), (0, Hk.jsx)("div", {
+               className: "CustomTextureFolderUploadInstructions Active",
+               children: ek
+             })]
+           }), !Yk && (qk || !ek) && (0, Hk.jsxs)(Hk.Fragment, {
+             children: [(0, Hk.jsx)("div", {
+               className: "CustomTextureFolderUploadIcon",
+               children: (0, Hk.jsx)(Kk.d, {
+                 name: "up-from-bracket"
```

#### 14. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L161-L163` → after: `L187-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L187-L190) · [Before (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L161-L163)

```diff
-   4763: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => Jn
+   4970: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => mk,
+       e: () => Pk
```

#### 15. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L165-L207` → after: `L192-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L192-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L192-L196) · [Before (L165-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L165-L207)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1515),
-       oQ = wQ(1070),
-       DQ = wQ.n(oQ),
-       kQ = wQ(1047),
-       vQ = wQ(1237),
-       mQ = wQ(1038),
-       uQ = wQ(317),
-       HQ = wQ(1539),
-       bQ = wQ(1030),
-       YQ = wQ(1207),
-       xQ = wQ(1140),
-       AQ = wQ(307),
-       tQ = wQ(1489),
-       eQ = wQ(17),
-       MQ = wQ(1897),
- ... (27 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1410),
+       Sk = ik(1172),
+       bk = ik(99),
+       rk = ik(1066);
```

#### 16. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L209-L221` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L198-L199) · [Before (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L209-L221)

```diff
-     function NQ(QQ, FQ) {
-       const wQ = wQ => QQ.percentiles[FQ.indexOf(wQ)];
-       return {
-         count: QQ.count,
-         playerCount: QQ.playerCount,
-         sum: QQ.sum,
-         min: QQ.min,
-         max: QQ.max,
-         p25: wQ(.25),
-         median: wQ(.5),
-         p75: wQ(.75),
-         p90: wQ(.9)
-       }
+     function Pk() {
+       return !(0, bk.isMobile)()
```

#### 17. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L230-L370` → after: `L203-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L203-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L203-L230) · [Before (L230-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L230-L370)

```diff
-       return null !== QQ && "object" === typeof QQ && "p20" in QQ && "p50" in QQ && "p80" in QQ
-     }
-     const XQ = new class {
-       async makeStudioApiRequest(QQ, FQ) {
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
-           LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-             retries: 0,
-             minTimeout: 3e3
-           };
-         return await (0, zQ.postJsonWithMetricsCookiesAndJsonResponse)(`${KQ.clientSideServerUrls.indexUrl}${QQ}`, wQ, LQ, FQ.getMetricsCookies())
-       }
-       async getGameStats(QQ, FQ) {
-         const wQ = {
-             gameAnalyticsId: FQ
-           },
-           LQ = await this.makeStudioApiRequest("/index/studio/get-game-stats", QQ, wQ);
- ... (125 more removed lines; see GitHub link above)
+       let {
+         disabled: ek,
+         openFolderPicker: ik,
+         onFiles: bk
+       } = kk;
+       const {
+         t: mk
+       } = (0, Sk.D)(), Mk = (0, Dk.useRef)(null);
+       return (0, rk.jsxs)("div", {
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, rk.jsx)("input", {
+           ref: Mk,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L372-L419` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L232-L234) · [Before (L372-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L372-L419)

```diff
-           LQ = await this.makeStudioApiRequest("/index/studio/get-custom-game-baseline-ccu", QQ, wQ);
-         if (! function(QQ) {
-             var FQ;
-             return "number" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.ccuEndBucketMs) && "number" === typeof QQ.bucketMinutes && Array.isArray(null === (FQ = QQ.ccu) || void 0 === FQ ? void 0 : FQ.data)
-           }(LQ)) throw new Error("Malformed studio custom game baseline ccu response");
-         return LQ
-       }
-     };
-     var fQ = wQ(1367),
-       VQ = wQ(4903),
-       hQ = wQ(5283),
-       JQ = wQ(6247),
-       EQ = wQ(6218),
-       nQ = wQ(6238),
-       gQ = wQ(5804),
-       PQ = wQ(6203),
- ... (32 more removed lines; see GitHub link above)
+           children: mk("general:chooseZip")
+         })]
+       })
```

#### 19. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L421` → after: `L236-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L236-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L236-L254) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L421)

```diff
-     const vF = /[\\/:*?"<>|\u0000-\u001f]/g;
+   },
+   4926: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Uk,
+       i: () => yk,
+       m: () => Hk,
+       q: () => pk
+     });
+     var Dk = ik(60),
+       fk = ik(4935),
+       Sk = ik(4319),
+       bk = ik(1345),
+       rk = ik(4946),
+       Pk = ik(1021),
+       mk = ik.n(Pk),
+       Mk = ik(1333),
+ ... (3 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L424` → after: `L257-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L257-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L257-L300) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L424)

```diff
-       return QQ.replace(vF, "").replace(/ {2,}/g, " ").trim()
+       let {
+         label: ek,
+         onClick: ik,
+         checked: Dk,
+         circleInfoText: fk,
+         className: rk,
+         disabled: Pk,
+         note: Mk
+       } = kk;
+       return (0, nk.jsxs)("div", {
+         "aria-disabled": Pk || void 0,
+         "data-pad-focusable": !0,
+         className: mk()("SettingBox CheckboxContainer", {
+           [rk]: rk,
+           SettingBoxDisabled: Pk
+         }),
+ ... (28 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L431-L433` → after: `L305-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L305-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L305-L314) · [Before (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L431-L433)

```diff
-         icon: FQ,
-         label: wQ,
-         onClick: LQ,
+         name: ek,
+         onChange: ik,
+         min: fk,
+         max: Sk,
+         step: rk,
+         initValue: Pk,
+         circleInfoText: Mk,
+         format: Kk,
+         className: xk,
+         padStep: Uk,
```

#### 22. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L435-L436` → after: `L316-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L316-L318) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L435-L436)

```diff
-         active: oQ = !1,
-         small: DQ = !1
+         selectableMax: wk,
+         cappedNote: pk,
+         onChangeComplete: yk
```

#### 23. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L438-L451` → after: `L320-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L320-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L320-L339) · [Before (L438-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L438-L451)

```diff
-       return (0, HF.jsx)(fQ.f, {
-         tooltipInner: wQ,
-         placement: "top",
-         delayShow: 0,
-         children: (0, HF.jsxs)(GQ.L, {
-           className: DQ ? "StudioSmallIconButton" : void 0,
-           active: oQ,
-           disabled: qQ,
-           onClick: LQ,
-           children: [(0, HF.jsx)(pQ.c, {
-             name: FQ
-           }), (0, HF.jsx)("span", {
-             className: "VisuallyHidden",
-             children: wQ
+       const [Yk, Lk] = (0, Dk.useState)(Pk), Ck = (0, Dk.useRef)(Pk);
+       (0, Dk.useEffect)((() => {
+         Ck.current = Pk, Lk(Pk)
+       }), [Pk]);
+       const Ak = void 0 !== wk && wk < Sk,
+         jk = Ak ? {
+           "--slider-selectable": (wk - fk) / (Sk - fk)
+         } : void 0;
+       return (0, nk.jsxs)("div", {
+         className: mk()("SettingBox SettingsSliderDiv", {
+           [xk]: xk,
+           SettingBoxDisabled: Hk,
+           SliderCapped: Ak
+         }),
+         style: jk,
+         children: [(0, nk.jsxs)("div", {
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L453` → after: `L341-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L341-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L341-L363) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L453)

```diff
-         })
+         }), (0, nk.jsx)("div", {
+           className: "SliderDiv",
+           children: (0, nk.jsx)(lk, {
+             value: Yk,
+             min: fk,
+             max: Sk,
+             step: rk,
+             onChange: kk => {
+               if (Ak && kk >= wk && Yk === wk) return;
+               const ek = Ak ? Math.min(kk, wk) : kk;
+               Ck.current = ek, Lk(ek), ik(ek)
+             },
+             onChangeComplete: yk && (() => {
+               yk(Ck.current)
+             }),
+             format: Kk,
+ ... (7 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L456` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L366) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L456)

```diff
-     const YF = String.fromCharCode(65279);
+     const wk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
```

#### 26. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L460-L461` → after: `L371-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L371-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L371-L385) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L460-L461)

```diff
-         fileNameParts: FQ,
-         getTable: wQ,
+         value: ik,
+         min: Sk,
+         max: bk,
+         step: rk,
+         onChange: Pk,
+         orientation: mk,
+         reverse: Mk,
+         setIsChanging: Kk,
+         tooltip: Uk,
+         labels: Hk,
+         handleLabel: lk,
+         format: pk,
+         onChangeStart: yk,
+         onChangeComplete: Yk,
+         padStep: Lk,
```

#### 27. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L464-L479` → after: `L388-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L388-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L388-L412) · [Before (L464-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L464-L479)

```diff
-       const {
-         t: qQ
-       } = (0, YQ.y)();
-       return (0, HF.jsx)(bF, {
-         small: !0,
-         icon: "download",
-         label: qQ("Export Data"),
-         disabled: LQ,
-         onClick: () => {
-           const QQ = wQ().map((QQ => QQ.map(DF).join(","))).join("\r\n");
-           (0, uF.downloadBlob)(new Blob([`${YF}${QQ}`], {
-             type: "text/csv;charset=utf-8"
-           }), function(QQ) {
-             const FQ = QQ.map(mF).filter((QQ => "" !== QQ)).join(" - ");
-             return `${""===FQ?"export":FQ}.csv`
-           }(FQ))
+       const Ak = (0, Dk.useRef)(null),
+         jk = (0, Dk.useRef)(null);
+       (0, Dk.useLayoutEffect)((() => {
+         var kk, ek, ik;
+         const Dk = null !== (kk = null === (ek = Ak.current) || void 0 === ek ? void 0 : ek.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
+         null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-slider", ""), null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-focusable", ""), null === Dk || void 0 === Dk || null === (ik = Dk.querySelector(".rangeslider__handle")) || void 0 === ik || ik.setAttribute( … [truncated]
+       }), []), (0, Dk.useLayoutEffect)((() => {
+         var kk, ek;
+         Ck ? null === (kk = jk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (ek = jk.current) || void 0 === ek || ek.removeAttribute("aria-disabled")
+       }), [Ck]);
+       const sk = (null !== (ek = String(rk).split(".")[1]) && void 0 !== ek ? ek : "").length,
+         dk = kk => {
+           const ek = Number((Math.round((kk - Sk) / rk) * rk + Sk).toFixed(sk));
+           return Math.min(bk, Math.max(Sk, ek))
+         },
+         Vk = (0, Dk.useRef)(Yk);
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L481` → after: `L414-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L414-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L414-L466) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L481)

```diff
-       })
+       }), []);
+       const Fk = (0, Dk.useRef)(!1);
+       return (0, xk.f)(jk, {
+         adjust: kk => {
+           if (Ck) return;
+           const ek = null !== Lk && void 0 !== Lk ? Lk : Math.max(rk, Math.round((bk - Sk) / 20 / rk) * rk),
+             Dk = dk(ik + kk * ek * (Mk ? -1 : 1));
+           Dk !== ik && (null === yk || void 0 === yk || yk(), Pk(Dk), null === Yk || void 0 === Yk || Yk())
+         },
+         setFraction: kk => {
+           if (Ck) return;
+           const ek = dk(Sk + (Mk ? 1 - kk : kk) * (bk - Sk));
+           ek !== ik && (Fk.current || (Fk.current = !0, null === yk || void 0 === yk || yk()), Pk(ek))
+         },
+         endDrag: () => {
+           Fk.current && (Fk.current = !1, null === Yk || void 0 === Yk || Yk())
+ ... (37 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L490-L494` → after: `L470-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L470-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L470-L490) · [Before (L490-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L490-L494)

```diff
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       return new Date(QQ).toLocaleDateString(void 0, {
-         day: "numeric",
-         month: "short",
-         timeZone: FQ ? "UTC" : void 0
+       let {
+         label: ek,
+         options: ik,
+         value: Dk,
+         onChange: fk,
+         circleInfoText: Sk
+       } = kk;
+       return (0, nk.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, nk.jsxs)("div", {
+           className: "SliderText",
+           children: [ek, Sk && (0, nk.jsx)(bk.e, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: Sk
+           })]
+         }), (0, nk.jsx)(rk.b, {
+ ... (5 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L499-L543` → after: `L514-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L514-L518) · [Before (L499-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L499-L543)

```diff
-       return new Date(QQ).toLocaleTimeString(void 0, AF)
-     }
-     const MF = 6e4,
-       GF = 1440 * MF;
- 
-     function pF(QQ, FQ) {
-       return null === QQ || null === FQ || 0 === FQ ? null : QQ / FQ
-     }
- 
-     function cF(QQ) {
-       const FQ = QQ.plays.data.length,
-         wQ = Date.parse(`${QQ.endDay}T00:00:00Z`);
-       return QQ.plays.data.map(((LQ, qQ) => {
-         const oQ = QQ.totalDurationMs.data[qQ],
-           DQ = QQ.playtimeSamples.data[qQ];
-         return {
- ... (29 more removed lines; see GitHub link above)
+       var ek;
+       let {
+         setApplySettingsCallback: ik
+       } = kk;
+       const [, bk] = (0, Sk.useReducer)((kk => kk + 1), 0), rk = (0, Sk.useRef)(!1), Pk = (0, Sk.useRef)(null);
```

#### 31. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L545-L556` → after: `L520-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L520-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L520-L529) · [Before (L545-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L545-L556)

```diff
-     function sF(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const LQ = QQ.reduce(((QQ, FQ) => {
-         var wQ, LQ, qQ, oQ;
-         const DQ = Math.max(null !== (wQ = FQ.value) && void 0 !== wQ ? wQ : 0, null !== (LQ = FQ.comparisonValue) && void 0 !== LQ ? LQ : 0, null !== (qQ = null === (oQ = FQ.comparisonBand) || void 0 === oQ ? void 0 : oQ[1]) && void 0 !== qQ ? qQ : 0);
-         return Math.max(QQ, DQ)
-       }), 0);
-       let qQ = 0;
-       for (let oQ = 0; oQ <= OF; oQ++) {
-         const QQ = 1.1 * LQ * oQ / OF,
-           DQ = wQ ? QQ : Math.round(QQ);
-         qQ = Math.max(qQ, FQ(DQ).length)
+       function wk(kk, ek) {
+         mk.e.setFromJson(kk, "player");
+         const Dk = mk.e.saveTexturePack();
+         if (nk.s) {
+           const kk = mk.e.toJson();
+           Dk.then((ek => {
+             ek && (0, Uk.e)(kk)
+           }))
+         } else rk.current ||= ek, Pk.current !== mk.e.getId() || mk.e.getId() === fk.u.CUSTOM && rk.current ? ik((() => Kk.q)) : ik(null);
+         bk()
```

#### 32. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L558-L562` → after: `L531-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L531-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L531-L570) · [Before (L558-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L558-L562)

```diff
-       return IF(qQ)
-     }
- 
-     function rF(QQ, FQ) {
-       return IF(Math.max(0, ...QQ.map((QQ => FQ(QQ).length))))
+       async function pk(kk) {
+         if (mk.e.getId() !== kk.metaData.id) {
+           if (mk.e.getId() === fk.u.CUSTOM && mk.e.getFromFolderName()) {
+             const kk = Mk.NotificationProvider.showPromptPopup({
+               title: "settingsMenu:loseChangesTitle",
+               subtitle: "settingsMenu:loseChangesSubtitle",
+               confirmText: "general:continue",
+               destructive: !0,
+               confirmTooltip: "",
+               cancelText: "general:cancel",
+               cancelTooltip: ""
+             });
+             if (!0 !== await kk.getResult()) return
+           }
+           wk(kk, !1)
+         }
+ ... (24 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L566-L589` → after: `L574-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L574-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L574-L578) · [Before (L566-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L566-L589)

```diff
-       return Math.max(RF, Math.ceil(QQ * iF) + WF)
-     }
-     const UF = [1, 2, 5],
-       NF = 6;
- 
-     function TF(QQ, FQ) {
-       if (!(QQ > 0)) return;
-       const wQ = 10 ** Math.floor(Math.log10(QQ / NF)),
-         LQ = FQ ? wQ : Math.max(1, wQ);
-       let qQ;
-       for (const kQ of [LQ, 10 * LQ])
-         for (const wQ of UF) {
-           const LQ = wQ * kQ;
-           if (!FQ && !Number.isInteger(LQ)) continue;
-           const oQ = Math.ceil(QQ / LQ - 1e-9);
-           oQ > NF || (void 0 === qQ || oQ * LQ < qQ.intervals * qQ.step) && (qQ = {
- ... (8 more removed lines; see GitHub link above)
+       let {
+         id: ek,
+         isSelected: ik,
+         setSelected: bk,
+         disabled: mk = !1
```

#### 34. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L591-L612` → after: `L580-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L580-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L580-L614) · [Before (L591-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L591-L612)

```diff
-       return Array.from({
-         length: DQ + 1
-       }, ((QQ, FQ) => Number((FQ * oQ).toPrecision(12))))
-     }
- 
-     function KF(QQ, FQ) {
-       const wQ = QQ.reduce(((QQ, FQ) => QQ + FQ), 0);
-       if (0 === wQ) return null;
-       let LQ = wQ;
-       const qQ = QQ.map(((QQ, FQ) => {
-         const qQ = {
-           minute: FQ,
-           percent: LQ / wQ * 100,
-           sessions: LQ
-         };
-         return LQ -= QQ, qQ
- ... (6 more removed lines; see GitHub link above)
+       const [Mk, Kk] = (0, Sk.useState)(!0), [xk, nk] = (0, Sk.useState)(""), [Uk, wk] = (0, Sk.useState)(""), [lk, pk] = (0, Sk.useState)(""), yk = (0, Sk.useRef)({});
+       return (0, Sk.useEffect)((() => {
+         (0, Dk.l)(ek).then((kk => {
+           var ek;
+           kk && (yk.current = kk, Kk(!1), nk(yk.current.metaData.name), wk(yk.current.metaData.author), pk(null !== (ek = yk.current.metaData.previewImage) && void 0 !== ek ? ek : ""))
+         })).catch((kk => {
+           console.warn(`Failed to fetch texture pack ${ek}`, kk)
+         }))
+       }), [ek]), (0, Hk.jsxs)("div", {
+         "data-pad-focusable": !0,
+         "aria-disabled": mk || void 0,
+         className: rk()("TexturePack", {
+           Selected: ik,
+           Custom: ek === fk.u.CUSTOM,
+           Disabled: mk
+         }),
+ ... (19 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L614-L615` → after: `L616-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L616-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L616-L624) · [Before (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L614-L615)

```diff
-     const zF = 2,
-       lF = 10;
+   },
+   4959: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => rk,
+       g: () => bk,
+       j: () => Sk
+     });
+     var Dk = ik(4961);
+     const fk = [kk => kk.strict ? "strict" : "nonStrict", kk => kk.program];
```

#### 36. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L618-L628` → after: `L627-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L627-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L627-L630) · [Before (L618-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L618-L628)

```diff
-       var wQ, LQ;
-       return null !== (wQ = null === (LQ = QQ[FQ]) || void 0 === LQ ? void 0 : LQ.percent) && void 0 !== wQ ? wQ : null
-     }
- 
-     function aF(QQ) {
-       const FQ = QQ.points.findIndex((QQ => QQ.percent <= 50));
-       return {
-         percentStayedSessions: jF(QQ.points, zF),
-         percentLongSessions: jF(QQ.points, lF),
-         medianMinute: -1 === FQ ? QQ.maxBucketMinute : FQ
-       }
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const Dk = {};
+       for (const fk in ik) Dk[fk] = `\0${fk}\0`;
+       return kk(ek, Dk).replace(/\0(\w+)\0/g, ((kk, ek) => ik[ek]))
```

#### 37. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L632` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L634) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L632)

```diff
-       return `${Math.round(QQ)}%`
+       return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
```

#### 38. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L636-L640` → after: `L638-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L638-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L638-L641) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L636-L640)

```diff
-       return `${QQ.toFixed(1)}%`
-     }
- 
-     function VF(QQ, FQ) {
-       return QQ >= FQ ? `${QQ}m+` : `${QQ}m`
+       const ek = new Map(kk.map((kk => [Pk(kk).join("."), kk])));
+       if (0 === ek.size) return [];
+       const ik = Mk([...ek.values()]);
+       return 0 === ik[0].length ? [] : ik
```

#### 39. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L644` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L645) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L644)

```diff
-       return Math.round(QQ).toLocaleString("en-US")
+       return fk.map((ek => ek(kk)))
```

#### 40. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L648-L651` → after: `L650-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L650-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L650-L658) · [Before (L648-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L648-L651)

```diff
-       return {
-         avgDailyPlays: 0 === QQ.activeDays ? null : QQ.plays / QQ.activeDays,
-         avgSessionMs: pF(QQ.totalDurationMs, QQ.playtimeSamples),
-         sessionsPerPlayer: 0 === QQ.uniquePlayers ? null : QQ.plays / QQ.uniquePlayers
+       const ek = fk.map((ek => new Set(kk.map(ek)))),
+         ik = ek.reduce(((kk, ek) => kk * ek.size), 1),
+         Dk = ek.every(((kk, ek) => 1 === kk.size || kk.size === mk[ek]));
+       if (ik === kk.length && Dk) return [fk.filter(((kk, ik) => 1 === ek[ik].size)).map((ek => ek(kk[0])))];
+       let Sk = null;
+       for (let bk = 0; bk < fk.length; bk++) {
+         if (1 === ek[bk].size) continue;
+         const ik = Kk(kk, fk[bk]).flatMap(Mk);
+         (null === Sk || ik.length < Sk.length) && (Sk = ik)
```

#### 41. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L656-L663` → after: `L664-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L664-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L664-L668) · [Before (L656-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L656-L663)

```diff
-       if (null === QQ || null === FQ || 0 === FQ) return null;
-       const wQ = Math.round((QQ - FQ) / FQ * 100);
-       return 0 === wQ ? {
-         direction: "unchanged",
-         percent: 0
-       } : {
-         direction: wQ > 0 ? "up" : "down",
-         percent: Math.abs(wQ)
+       const ik = new Map;
+       for (const fk of kk) {
+         var Dk;
+         const kk = ek(fk);
+         ik.set(kk, [...null !== (Dk = ik.get(kk)) && void 0 !== Dk ? Dk : [], fk])
```

#### 42. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L666-L678` → after: `L672-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L672-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L672-L679) · [Before (L666-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L666-L678)

```diff
- 
-     function nF(QQ) {
-       const FQ = Math.round(QQ / 1e3);
-       if (FQ < 60) return `${FQ}s`;
-       const wQ = Math.floor(FQ / 60);
-       if (wQ < 60) return `${wQ}m ${FQ%60}s`;
-       return `${Math.floor(wQ/60)}h ${wQ%60}m`
-     }
-     const gF = 864e5;
- 
-     function PF(QQ, FQ) {
-       return "1d" === FQ ? tF(QQ, !0) : `${tF(QQ)}, ${eF(QQ)}`
-     }
+   },
+   4946: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
+     });
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(1066);
```

#### 43. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L682-L685` → after: `L683-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L683-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L683-L690) · [Before (L682-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L682-L685)

```diff
-         point: FQ,
-         label: wQ,
-         formatValue: LQ,
-         noDataLabel: qQ
+         options: ek,
+         value: ik,
+         onChange: Dk,
+         ariaLabel: bk,
+         className: rk,
+         reselectable: Pk = !1,
+         keepsFocus: mk = !1,
+         padTabs: Mk
```

#### 44. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L687-L706` → after: `L692-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L692-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L692-L719) · [Before (L687-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L687-L706)

```diff
-       const {
-         t: oQ
-       } = (0, YQ.y)(), DQ = QQ => null === QQ || void 0 === QQ ? qQ : LQ(QQ), kQ = FQ.comparisonBand;
-       return kQ ? (0, HF.jsxs)(HF.Fragment, {
-         children: [(0, HF.jsx)("div", {
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: wQ
-         }), (0, HF.jsxs)("div", {
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [oQ("studio:comparisonPercentile80"), ": ", DQ(kQ[1])]
-         }), (0, HF.jsxs)("div", {
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [oQ("studio:comparisonPercentile50"), ": ", DQ(FQ.comparisonValue)]
-         }), (0, HF.jsxs)("div", {
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [oQ("studio:comparisonPercentile20"), ": ", DQ(kQ[0])]
- ... (4 more removed lines; see GitHub link above)
+       const Kk = void 0 !== Mk;
+       return (0, Sk.jsx)("div", {
+         className: fk()("SegmentedToggle", rk),
+         role: "group",
+         "aria-label": bk,
+         "data-pad-tabs": Mk,
+         children: ek.map((kk => {
+           const ek = kk.value === ik;
+           return (0, Sk.jsx)("button", {
+             type: "button",
+             "aria-pressed": ek,
+             "data-pad-tab": Kk || void 0,
+             "data-pad-selected": Kk && ek ? "true" : void 0,
+             "data-pad-default-focus": Kk && ek || void 0,
+             "aria-label": kk.ariaLabel,
+             title: kk.ariaLabel,
+ ... (12 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L709-L711` → after: `L722-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L722-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L722-L768) · [Before (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L709-L711)

```diff
- 
-     function yF(QQ, FQ, wQ) {
-       return wQ ? [`${FQ}: ${QQ("studio:comparisonPercentile20")}`, `${FQ}: ${QQ("studio:comparisonPercentile50")}`, `${FQ}: ${QQ("studio:comparisonPercentile80")}`] : [FQ]
+   },
+   4951: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk,
+       f: () => bk
+     });
+     var Dk = ik(60);
+     const fk = new WeakMap,
+       Sk = kk => {
+         var ek;
+         const ik = kk.closest("[data-pad-slider]");
+         return ik && null !== (ek = fk.get(ik)) && void 0 !== ek ? ek : null
+       },
+       bk = (kk, ek) => {
+         const ik = (0, Dk.useRef)(ek);
+         ik.current = ek, (0, Dk.useEffect)((() => {
+ ... (31 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L715-L716` → after: `L772-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L772-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L772-L777) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L715-L716)

```diff
-       var wQ, LQ, qQ, oQ, DQ, kQ;
-       return FQ ? [null !== (wQ = null === (LQ = QQ.comparisonBand) || void 0 === LQ ? void 0 : LQ[0]) && void 0 !== wQ ? wQ : null, null !== (qQ = QQ.comparisonValue) && void 0 !== qQ ? qQ : null, null !== (oQ = null === (DQ = QQ.comparisonBand) || void 0 === DQ ? void 0 : DQ[1] … [truncated]
+       if (kk === ek) return !0;
+       if ("object" !== typeof kk || "object" !== typeof ek || null === kk || null === ek || Array.isArray(kk) !== Array.isArray(ek)) return !1;
+       const ik = kk,
+         Dk = ek,
+         Sk = Object.keys(ik);
+       return Sk.length === Object.keys(Dk).length && Sk.every((kk => Object.prototype.hasOwnProperty.call(Dk, kk) && fk(ik[kk], Dk[kk])))
```

#### 47. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L720-L759` → after: `L793-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L793-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L793-L795) · [Before (L720-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L720-L759)

```diff
-       let {
-         active: FQ,
-         payload: wQ,
-         label: LQ,
-         interval: qQ,
-         formatValue: oQ,
-         noDataLabel: DQ,
-         comparisonLabel: kQ,
-         showValue: vQ = !0,
-         lines: mQ
-       } = QQ;
-       if (!FQ || !wQ || 0 === wQ.length || void 0 === LQ) return null;
-       const uQ = wQ[0].payload;
-       return (0, HF.jsxs)("div", {
-         className: "StudioStatsChartTooltip",
-         children: [(0, HF.jsx)("div", {
- ... (24 more removed lines; see GitHub link above)
+       Sk = {
+         pack: kk.metaData.id === Dk.d ? null : kk
+       }
```

#### 48. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L763-L774` → after: `L798-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L798-L799) · [Before (L763-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L763-L774)

```diff
-     function Fw(QQ, FQ, wQ, LQ) {
-       if (!QQ || 0 === wQ.length || LQ <= 0) return null;
-       const qQ = "1d" === FQ ? function(QQ) {
-           const FQ = new Date(QQ);
-           return FQ.setUTCHours(0, 0, 0, 0), FQ.getTime()
-         }(QQ.dateMs) : QQ.dateMs,
-         oQ = (qQ - wQ[0].dateMs) / LQ;
-       return oQ < 0 || oQ > 1 ? null : {
-         dateMs: qQ,
-         label: QQ.label,
-         alignLeft: oQ > Qw
-       }
+     function rk(kk) {
+       return !(null === Sk || !(0, fk.e)(Sk.pack, kk)) && (Sk = null, !0)
```

#### 49. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L778-L789` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L818) · [Before (L778-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L778-L789)

```diff
-       let {
-         viewBox: FQ,
-         text: wQ,
-         alignLeft: LQ
-       } = QQ;
-       return void 0 === (null === FQ || void 0 === FQ ? void 0 : FQ.x) || void 0 === FQ.y ? null : (0, HF.jsx)("text", {
-         className: "StudioStatsChartMarkerLabel",
-         x: FQ.x + (LQ ? -5 : 5),
-         y: FQ.y + 10,
-         textAnchor: LQ ? "end" : "start",
-         children: wQ
-       })
+       return kk === Dk
```

#### 50. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L793-L797` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L822) · [Before (L793-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L793-L797)

```diff
-       const FQ = new Set;
-       return QQ.forEach(((wQ, LQ) => {
-         if (null === wQ) return;
-         [QQ[LQ - 1], QQ[LQ + 1]].some((QQ => void 0 !== QQ && null !== QQ)) || FQ.add(LQ)
-       })), FQ
+       return [...kk.features]
```

#### 51. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L801-L818` → after: `L829-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L829-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L829-L850) · [Before (L801-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L801-L818)

```diff
-       let {
-         swatchClassName: FQ,
-         colour: wQ,
-         isFill: LQ,
-         label: qQ,
-         rU: oQ
-       } = QQ;
-       const {
-         t: kQ
-       } = (0, YQ.y)();
-       return (0, HF.jsxs)("span", {
-         className: "StudioStatsChartLegendEntry",
-         children: [(0, HF.jsx)("span", {
-           className: DQ()("StudioStatsChartLegendSwatch", FQ),
-           style: LQ ? {
-             backgroundColor: wQ
- ... (2 more removed lines; see GitHub link above)
+       if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
+       const ek = [];
+       for (const [ik, Dk] of Object.entries(kk)) {
+         if ("string" !== typeof Dk) return `${ik} isn't text.`;
+         ek.push({
+           path: ik,
+           source: Dk
+         })
+       }
+       return ek.sort(((kk, ek) => Kk(kk.path, ek.path))),
+         function(kk) {
+           if (0 === kk.length) return "The pack has no .wgsl files.";
+           if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
+           const ek = new Set;
+           for (const {
+               path: ik
+ ... (6 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L820-L830` → after: `L852-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L852-L853) · [Before (L820-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L820-L830)

```diff
-         }), qQ, void 0 !== oQ && (0, HF.jsx)("span", {
-           ...(0, GQ.S)(),
-           className: "StudioStatsChartLegendRemove",
-           title: kQ("general:remove"),
-           "aria-label": kQ("general:remove"),
-           onClick: oQ,
-           children: (0, HF.jsx)(pQ.c, {
-             name: "x"
-           })
-         })]
-       })
+           return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
+         }(ek) ?? ek
```

#### 53. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L834-L875` → after: `L857-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L857-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L857-L859) · [Before (L834-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L834-L875)

```diff
-       let {
-         seriesLabel: FQ,
-         seriesColour: wQ,
-         comparisonLabel: LQ,
-         comparisonIsBand: qQ,
-         lines: oQ
-       } = QQ;
-       const {
-         t: DQ
-       } = (0, YQ.y)();
-       return (0, HF.jsxs)("div", {
-         className: "StudioStatsChartLegend SmallTextLight",
-         children: [void 0 !== FQ && void 0 !== wQ && (0, HF.jsx)(qw, {
-           colour: wQ,
-           isFill: !0,
-           label: FQ
- ... (26 more removed lines; see GitHub link above)
+       const ek = {};
+       for (const ik of kk) ek[ik.path] = ik.source;
+       return ek
```

#### 54. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L878-L937` → after: `L862-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L862-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L862-L863) · [Before (L878-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L878-L937)

```diff
-     function Dw(QQ) {
-       let {
-         title: FQ,
-         hoverInfo: wQ,
-         anchorId: LQ,
-         status: qQ,
-         hasData: oQ,
-         headerActions: kQ,
-         filters: vQ,
-         legend: mQ,
-         csvExport: uQ,
-         footerActions: HQ,
-         className: bQ,
-         cardRef: xQ,
-         children: AQ
-       } = QQ;
- ... (44 more removed lines; see GitHub link above)
+     function Kk(kk, ek) {
+       return kk < ek ? -1 : kk > ek ? 1 : 0
```

#### 55. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L941-L1008` → after: `L867-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L867-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L867-L870) · [Before (L941-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L941-L1008)

```diff
-       let {
-         title: FQ,
-         hoverInfo: wQ,
-         anchorId: LQ,
-         status: qQ,
-         points: oQ,
-         interval: DQ,
-         colour: kQ,
-         formatValue: vQ,
-         headerActions: mQ,
-         markers: uQ,
-         comparisonLabel: HQ,
-         seriesLabel: bQ,
-         allowDecimals: xQ = !1,
-         lines: AQ,
-         filters: tQ
- ... (52 more removed lines; see GitHub link above)
+       const ek = new TextEncoder;
+       let ik = 0;
+       for (const {
+           source: Dk
```

#### 56. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1010-L1160` → after: `L872-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L872-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L872-L873) · [Before (L1010-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L1010-L1160)

```diff
-       };
-       return (0, HF.jsx)(Dw, {
-         title: FQ,
-         hoverInfo: wQ,
-         anchorId: LQ,
-         status: qQ,
-         hasData: GQ > 0 || pQ,
-         headerActions: mQ,
-         filters: tQ,
-         legend: rQ,
-         csvExport: IQ,
-         children: (0, HF.jsx)(VQ.b, {
-           width: "100%",
-           height: "100%",
-           children: (0, HF.jsxs)(hQ.c, {
-             data: OQ,
- ... (135 more removed lines; see GitHub link above)
+         of kk) ik += ek.encode(Dk).byteLength;
+       return ik
```

#### 57. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1164` → after: `L877-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L877-L880) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L1164)

```diff
-       return Array.isArray(QQ.labels) && Array.isArray(QQ.values)
+       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
+       if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
+       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
+       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
```

#### 58. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1166-L1180` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L882) · [Before (L1166-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L1166-L1180)

```diff
-     const mw = 11,
-       uw = 6,
-       Hw = 2,
-       bw = 30,
-       Yw = 6,
-       xw = 18,
-       Aw = 140,
-       tw = 4,
-       ew = {
-         top: 8,
-         right: 8,
-         bottom: 0,
-         left: 0
-       };
-     let Mw;
+     const Uk = /^(.*)\[rot\[([1-4])$/;
```

#### 59. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1183-L1207` → after: `L885-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L885-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L885-L967) · [Before (L1183-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L1183-L1207)

```diff
-       void 0 === Mw && (Mw = document.createElement("canvas").getContext("2d"));
-       const wQ = getComputedStyle(FQ),
-         LQ = parseFloat(wQ.letterSpacing) || 0,
-         qQ = Mw;
-       return QQ.map((QQ => null === qQ ? QQ.length * mw * .65 : (qQ.font = `${wQ.fontStyle} ${wQ.fontWeight} ${mw}px ${wQ.fontFamily}`, qQ.measureText(QQ).width + LQ * QQ.length)))
-     }
- 
-     function pw(QQ, FQ, wQ) {
-       const LQ = FQ / QQ.length;
-       if (Math.max(0, ...Gw(QQ, wQ)) + Yw <= LQ) return {
-         rotated: !1,
-         texts: QQ,
-         xAxisHeight: bw
-       };
-       const qQ = QQ.map((QQ => function(QQ, FQ, wQ) {
-           if (Gw([QQ], wQ)[0] <= FQ) return QQ;
- ... (9 more removed lines; see GitHub link above)
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Dk = new Map;
+       ek.forEach(((kk, ek) => {
+         let {
+           numAnimStates: ik,
+           animStartIdx: fk
+         } = kk;
+         for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
+       }));
+       const fk = Object.entries(kk),
+         Sk = new Map;
+       for (const [Hk, wk] of fk) {
+         const kk = Uk.exec(Hk);
+         "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
+       }
+       const bk = kk => {
+ ... (67 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L1209-L1211` → after: `L969-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L969-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/103.js#L969-L980) · [Before (L1209-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/103.js#L1209-L1211)

```diff
-         rotated: !0,
-         texts: qQ,
-         xAxisHeight: Math.max(bw, uw + Hw + oQ + tw)
+         named: [...xk].sort(((kk, ek) => {
+           let [ik] = kk, [Dk] = ek;
+           return ik < Dk ? -1 : ik > Dk ? 1 : 0
+         })).map((kk => {
+           let [ek, ik] = kk;
+           return {
+             name: ek,
+             id: ik
+           }
+         })),
+         aliases: [...nk.values()],
+         layers: Kk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/104.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/104.js` (80 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9)

#### 1. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L4)

```diff
-   4777: (QQ, FQ, wQ) => {
+   6357: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L6-L8)

```diff
-       b: () => HQ,
-       c: () => uQ,
-       g: () => bQ
+       e: () => lk
```

#### 3. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L10-L12` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L8-L16) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L10-L12)

```diff
-     wQ(4783);
-     var LQ = wQ(1207),
-       qQ = wQ(1070),
+     var Dk = ik(60),
+       fk = ik(1410),
+       Sk = ik(1459),
+       bk = ik(3447),
+       rk = ik(1095),
+       Pk = ik(1327),
+       mk = ik(1345),
+       Mk = ik(1033),
+       Kk = ik(1021),
```

#### 4. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L14-L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L18) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L14-L17)

```diff
-       DQ = wQ(1367),
-       kQ = (wQ(53), wQ(4233)),
-       vQ = wQ(1079),
-       mQ = wQ(1107);
+       nk = ik(1066);
```

#### 5. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L21-L26` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L22-L23) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L21-L26)

```diff
-         children: FQ,
-         label: wQ,
-         className: qQ,
-         circleInfoText: kQ,
-         disabled: uQ,
-         onLabelClick: HQ
+         info: ek,
+         className: ik
```

#### 6. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L40-L50` → after: `L26-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L26-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L26-L51) · [Before (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L40-L50)

```diff
-         className: oQ()("LabeledInput", {
-           [qQ]: qQ,
-           DisabledLabelInput: uQ
-         }),
-         children: [kQ && (0, mQ.jsx)(DQ.f, {
-           tooltipInner: (0, mQ.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: bQ(kQ)
-           }),
-           children: YQ
-         }), !kQ && YQ, FQ]
+         className: xk()("GameApprovalInfoDetails", ik),
+         children: [(0, nk.jsxs)("div", {
+           className: xk()("GameApprovalInfoSummary", ek.overallPassed ? "Passed" : "Failed"),
+           children: [(0, nk.jsx)(Mk.d, {
+             name: ek.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, nk.jsx)("span", {
+             children: ek.summary
+           })]
+         }), ek.rows.length > 0 && (0, nk.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: ek.rows.map((kk => (0, nk.jsxs)("div", {
+             className: xk()("GameApprovalInfoRow", kk.passed ? "Passed" : "Failed"),
+             children: [(0, nk.jsx)(Mk.d, {
+               name: kk.passed ? "check" : "xmark"
+             }), (0, nk.jsxs)("div", {
+               className: "GameApprovalInfoRowText",
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L55-L71` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L58-L64) · [Before (L55-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L55-L71)

```diff
-       let {
-         checked: FQ,
-         setChecked: wQ
-       } = QQ;
-       return (0, mQ.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         onClick: QQ => {
-           wQ(!FQ)
-         },
-         children: (0, mQ.jsx)(kQ.d, {
-           checked: FQ,
-           onChange: QQ => {
-             wQ(QQ.target.checked)
-           },
-           disabled: !1
- ... (1 more removed lines; see GitHub link above)
+       wk.NotificationProvider.showCustomPopup({
+         body: () => (0, nk.jsx)(pk, {
+           ...kk
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
```

#### 8. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L77-L79` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L70-L72) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L77-L79)

```diff
-         checked: FQ,
-         setChecked: wQ,
-         disabled: LQ
+         schematicId: ek,
+         canOverride: ik,
+         onApprovalChanged: Kk
```

#### 9. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L81-L95` → after: `L74-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L74-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L74-L157) · [Before (L81-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L81-L95)

```diff
-       return (0, mQ.jsx)("div", {
-         className: oQ()("SwitchContainer", {
-           SwitchContainerDisabled: LQ
-         }),
-         onClick: () => {
-           LQ || wQ(!FQ)
-         },
-         children: (0, mQ.jsx)(kQ.d, {
-           className: "SwitchCheckbox",
-           checked: FQ,
-           onChange: QQ => {
-             wQ(QQ.target.checked)
-           },
-           disabled: !!LQ
-         })
+       const {
+         t: xk
+       } = (0, Hk.D)(), {
+         userContext: wk
+       } = (0, rk.d)(), lk = (0, bk.e)(), [pk, yk] = (0, Dk.useState)(null), [Yk, Lk] = (0, Dk.useState)(null), [Ck, Ak] = (0, Dk.useState)(!1), jk = (0, Dk.useCallback)((() => {
+         Lk(null), Sk.b.getGameApprovalInfo(wk, ek).then((kk => {
+           lk.current && yk(kk)
+         })).catch((kk => {
+           console.error("Failed to get game approval info", kk), lk.current && Lk(xk("studio:approvalLoadFailed"))
+         }))
+       }), [wk, ek, lk, xk]);
+       (0, Dk.useEffect)((() => {
+         jk()
+       }), [jk]);
+       const sk = kk => {
+         Ck || (Ak(!0), Sk.b.setGameApproval(wk, ek, kk).then((() => {
+ ... (68 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L99-L101` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L161-L163) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L99-L101)

```diff
-   4787: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => mQ
+   4858: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => TZ
```

#### 11. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L103` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L165-L167) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L103)

```diff
-     var LQ = wQ(1070),
+     var Dk = ik(60),
+       fk = ik(1496),
+       Sk = ik(1021),
```

#### 12. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L105` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L169) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L105)

```diff
-       oQ = wQ(4475),
+       rk = ik(1005),
```

#### 13. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L107-L108` → after: `L171-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L171-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L171-L207) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L107-L108)

```diff
-       kQ = wQ(1107);
-     const vQ = [...oQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+       mk = ik(996),
+       Mk = ik(314),
+       Kk = ik(1519),
+       xk = ik(987),
+       nk = ik(1172),
+       Uk = ik(1095),
+       Hk = ik(302),
+       wk = ik(1459),
+       lk = ik(22),
+       pk = ik(1893),
+       yk = ik(1410),
+       Yk = ik(1033),
+       Lk = ik(1327),
+       Ck = ik(4840),
+       Ak = ik(4860),
+       jk = ik(4879),
+ ... (21 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L110-L135` → after: `L209-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L209-L221) · [Before (L110-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L110-L135)

```diff
-     function mQ(QQ) {
-       const {
-         disabled: FQ,
-         hideWrapper: wQ
-       } = QQ, {
-         t: LQ
-       } = (0, DQ.y)(), mQ = QQ.advancedMode ? vQ.map((FQ => [FQ, QQ.callbacks[FQ]])) : oQ.j.map((FQ => [FQ, QQ.callbacks[FQ]])), HQ = (0, kQ.jsx)("div", {
-         className: qQ()("PluginsGrid", {
-           SectionBody: !wQ
-         }),
-         children: mQ.map((QQ => {
-           let [wQ, LQ] = QQ;
-           return (0, kQ.jsx)(uQ, {
-             plugin: wQ,
-             callbacks: LQ,
-             disabled: FQ
- ... (10 more removed lines; see GitHub link above)
+     function zk(kk, ek) {
+       const ik = ik => kk.percentiles[ek.indexOf(ik)];
+       return {
+         count: kk.count,
+         playerCount: kk.playerCount,
+         sum: kk.sum,
+         min: kk.min,
+         max: kk.max,
+         p25: ik(.25),
+         median: ik(.5),
+         p75: ik(.75),
+         p90: ik(.9)
+       }
```

#### 15. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L139-L179` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L230) · [Before (L139-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L139-L179)

```diff
-       let {
-         plugin: FQ,
-         callbacks: {
-           isEnabled: wQ,
-           Qr: LQ
-         },
-         disabled: oQ
-       } = QQ;
-       const {
-         t: vQ
-       } = (0, DQ.y)(), mQ = wQ();
-       return (0, kQ.jsxs)("div", {
-         className: qQ()("PluginCard", {
-           PluginCardEnabled: mQ,
-           PluginCardDisabledForm: oQ
-         }),
- ... (25 more removed lines; see GitHub link above)
+       return null !== kk && "object" === typeof kk && "p20" in kk && "p50" in kk && "p80" in kk
```

#### 16. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L182-L188` → after: `L396-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L396-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L396-L405) · [Before (L182-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L182-L188)

```diff
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+         plays: "#2e80ee",
+         sessionsPerPlayer: "#1dd06d",
+         avgSession: "#ffb914",
+         ccu: "#ad50e3",
+         dropoff: "#f38ab6",
+         grid: "#838383",
+         axis: "#a4a4a4",
+         marker: "#a4a4a4",
+         comparison: "#cfcfcf",
+         opened: "#ffb914"
```

#### 17. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L190-L224` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L407-L408) · [Before (L190-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L190-L224)

```diff
-       bQ = {
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
-       }
-   },
-   4772: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       j: () => qF,
-       e: () => LF,
-       h: () => wF,
-       m: () => oF
- ... (19 more removed lines; see GitHub link above)
+       Se = .14,
+       be = /^[=+\-@\t\r]/;
```

#### 18. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L227-L256` → after: `L411-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L411-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L411-L414) · [Before (L227-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L227-L256)

```diff
-       let {
-         icon: FQ,
-         title: wQ,
-         disabled: LQ,
-         children: qQ
-       } = QQ;
-       return (0, pQ.jsxs)("div", {
-         className: YQ()("ManageCard", {
-           ManageCardDisabled: LQ
-         }),
-         children: [(0, pQ.jsxs)("div", {
-           className: "ManageCardHead",
-           children: [(0, pQ.jsx)("div", {
-             className: "ManageCardIcon",
-             children: (0, pQ.jsx)(uQ.c, {
-               name: FQ
- ... (14 more removed lines; see GitHub link above)
+       if (null === kk) return "";
+       if ("number" === typeof kk) return Number.isFinite(kk) ? String(kk) : "";
+       const ek = be.test(kk) ? `'${kk}` : kk;
+       return /[",\r\n]/.test(ek) ? `"${ek.replace(/"/g,'""')}"` : ek
```

#### 19. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L260-L274` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L424) · [Before (L260-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L260-L274)

```diff
-       let {
-         label: FQ,
-         caption: wQ,
-         children: LQ
-       } = QQ;
-       return (0, pQ.jsxs)("div", {
-         className: "ManageStackedField",
-         children: [(0, pQ.jsx)("div", {
-           className: "ManageStackedFieldLabel",
-           children: FQ
-         }), LQ, wQ && (0, pQ.jsx)("div", {
-           className: "ManageStackedFieldCaption",
-           children: wQ
-         })]
-       })
+       return kk.replace(me, "").replace(/ {2,}/g, " ").trim()
```

#### 20. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L280-L282` → after: `L433-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L433-L436) · [Before (L280-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L280-L282)

```diff
-         caption: wQ,
-         disabled: LQ,
-         children: qQ
+         onClick: Dk,
+         disabled: fk = !1,
+         active: Sk = !1,
+         small: bk = !1
```

#### 21. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L284-L294` → after: `L438-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L438-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L438-L450) · [Before (L284-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L284-L294)

```diff
-       return (0, pQ.jsxs)("div", {
-         className: YQ()("ManageField", {
-           ManageFieldDisabled: LQ
-         }),
-         children: [(0, pQ.jsxs)("div", {
-           className: "ManageFieldText",
-           children: [(0, pQ.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: FQ
-           }), (0, pQ.jsx)("div", {
-             className: "ManageFieldCaption",
+       return (0, xe.jsx)(Xk.i, {
+         tooltipInner: ik,
+         placement: "top",
+         delayShow: 0,
+         children: (0, xe.jsxs)(yk.X, {
+           className: bk ? "StudioSmallIconButton" : void 0,
+           active: Sk,
+           disabled: fk,
+           onClick: Dk,
+           children: [(0, xe.jsx)(Yk.d, {
+             name: ek
+           }), (0, xe.jsx)("span", {
+             className: "VisuallyHidden",
```

#### 22. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L297-L300` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L453) · [Before (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L297-L300)

```diff
-         }), (0, pQ.jsx)("div", {
-           className: "ManageFieldControl",
-           children: qQ
-         })]
+         })
```

#### 23. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L307-L310` → after: `L460-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L460-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L460-L462) · [Before (L307-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L307-L310)

```diff
-         schematicData: LQ,
-         updateSchematicData: qQ,
-         publishFormEnabled: oQ,
-         formEnabled: DQ
+         fileNameParts: ek,
+         getTable: ik,
+         disabled: Dk = !1
```

#### 24. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L314-L341` → after: `L466-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L466-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L466-L479) · [Before (L314-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L314-L341)

```diff
-       } = (0, kQ.y)(), mQ = !oQ, uQ = {
-         tpRequests: {
-           isEnabled: () => !LQ.disableTpRequests,
-           Qr: QQ => qQ("disableTpRequests", !QQ)
-         },
-         spawnProtection: {
-           isEnabled: () => !LQ.disableSpawnProtection,
-           Qr: QQ => qQ("disableSpawnProtection", !QQ)
-         },
-         spawnReset: {
-           isEnabled: () => !!LQ.enableSpawnReset,
-           Qr: QQ => qQ("enableSpawnReset", QQ)
-         },
-         smpMarketplace: {
-           isEnabled: () => !!LQ.enableSmpMarketplace,
-           Qr: QQ => qQ("enableSmpMarketplace", QQ)
- ... (12 more removed lines; see GitHub link above)
+       } = (0, nk.D)();
+       return (0, xe.jsx)(ne, {
+         small: !0,
+         icon: "download",
+         label: fk("Export Data"),
+         disabled: Dk,
+         onClick: () => {
+           const kk = ik().map((kk => kk.map(re).join(","))).join("\r\n");
+           (0, Ke.downloadBlob)(new Blob([`${Ue}${kk}`], {
+             type: "text/csv;charset=utf-8"
+           }), function(kk) {
+             const ek = kk.map(Me).filter((kk => "" !== kk)).join(" - ");
+             return `${""===ek?"export":ek}.csv`
+           }(ek))
```

#### 25. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L485-L525` → after: `L483-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L483-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L483-L623) · [Before (L485-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L485-L525)

```diff
-     var WQ = wQ(4790),
-       RQ = wQ(4233),
-       OQ = wQ(1489),
-       sQ = wQ(3363),
-       rQ = wQ(1140),
-       IQ = wQ(4737),
-       UQ = wQ(4794),
-       NQ = wQ(1458);
-     const TQ = 50,
-       KQ = .3;
-     async function zQ(QQ) {
-       const FQ = await
-       function(QQ) {
-         return new Promise(((FQ, wQ) => {
-           const LQ = new FileReader;
-           LQ.onload = () => FQ(LQ.result), LQ.onerror = wQ, LQ.readAsDataURL(QQ)
- ... (25 more removed lines; see GitHub link above)
+     const we = {
+       hour: "2-digit",
+       minute: "2-digit",
+       hourCycle: "h23"
+     };
+ 
+     function le(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       return new Date(kk).toLocaleDateString(void 0, {
+         day: "numeric",
+         month: "short",
+         timeZone: ek ? "UTC" : void 0
+       })
+     }
+ 
+     function pe(kk) {
+ ... (125 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L527-L528` → after: `L625-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L625-L627) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L527-L528)

```diff
-         base64Jpg: qQ,
-         heavilyCompressed: oQ < KQ
+         percentStayedSessions: We(kk.points, he),
+         percentLongSessions: We(kk.points, ae),
+         medianMinute: -1 === ek ? kk.maxBucketMinute : ek
```

#### 27. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L538` → after: `L632-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L632-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L632-L680) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L538)

```diff
-       var FQ;
+       return `${Math.round(kk)}%`
+     }
+ 
+     function Be(kk) {
+       return `${kk.toFixed(1)}%`
+     }
+ 
+     function ce(kk, ek) {
+       return kk >= ek ? `${kk}m+` : `${kk}m`
+     }
+ 
+     function Te(kk) {
+       return Math.round(kk).toLocaleString("en-US")
+     }
+ 
+     function oe(kk) {
+ ... (33 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L540-L543` → after: `L682-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L682-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L682-L685) · [Before (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L540-L543)

```diff
-         schematicId: wQ,
-         hasReadUploadPolicy: qQ,
-         onPolicyValidationError: vQ,
-         onThumbnailReady: mQ
+         point: ek,
+         label: ik,
+         formatValue: Dk,
+         noDataLabel: fk
```

#### 29. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L547-L571` → after: `L689-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L689-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L689-L732) · [Before (L547-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L547-L571)

```diff
-       } = (0, kQ.y)(), [xQ, AQ] = (0, LQ.useState)(null), [tQ, eQ] = (0, LQ.useState)(""), [MQ, GQ] = (0, LQ.useState)(""), [cQ, CQ] = (0, LQ.useState)(!0), [SQ, iQ] = (0, LQ.useState)(!1), WQ = (0, LQ.useRef)(!1), [RQ, OQ] = (0, LQ.useState)(null), [sQ, rQ] = (0, LQ.useState)(!1 … [truncated]
-         getRootProps: KQ,
-         getInputProps: aQ,
-         isDragActive: XQ
-       } = (0, UQ.b)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
-         },
-         multiple: !1,
-         onDrop: async QQ => {
-           if (0 === QQ.length) return;
-           const FQ = QQ[0],
-             wQ = ++TQ.current;
-           OQ(null), rQ(!1), AQ(null), eQ(FQ.name);
-           try {
-             const QQ = await zQ(FQ);
- ... (9 more removed lines; see GitHub link above)
+       } = (0, nk.D)(), bk = kk => null === kk || void 0 === kk ? fk : Dk(kk), rk = ek.comparisonBand;
+       return rk ? (0, xe.jsxs)(xe.Fragment, {
+         children: [(0, xe.jsx)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: ik
+         }), (0, xe.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [Sk("studio:comparisonPercentile80"), ": ", bk(rk[1])]
+         }), (0, xe.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [Sk("studio:comparisonPercentile50"), ": ", bk(ek.comparisonValue)]
+         }), (0, xe.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [Sk("studio:comparisonPercentile20"), ": ", bk(rk[0])]
+         })]
+       }) : (0, xe.jsxs)("div", {
+ ... (28 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L573-L661` → after: `L734-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L734-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L734-L737) · [Before (L573-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L573-L661)

```diff
-         className: "ThumbnailUploadContainer",
-         children: [(0, pQ.jsxs)("div", {
-           ...KQ({
-             className: YQ()("ThumbnailUploadDropzone", {
-               ActiveDrag: XQ,
-               ValidationError: EQ
-             })
-           }),
-           children: [(0, pQ.jsx)("input", {
-             ...aQ()
-           }), !XQ && VQ ? (0, pQ.jsxs)(pQ.Fragment, {
-             children: [(0, pQ.jsxs)("div", {
-               className: "ThumbnailAspectPreviews",
-               children: [(0, pQ.jsxs)("div", {
-                 className: "ThumbnailAspectPreview",
-                 children: [(0, pQ.jsx)("div", {
- ... (73 more removed lines; see GitHub link above)
+         className: "StudioStatsChartTooltip",
+         children: [(0, xe.jsx)("div", {
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: Ge(Dk, fk)
```

#### 31. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L663-L680` → after: `L739-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L739-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L739-L757) · [Before (L663-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L663-L680)

```diff
-           className: "ThumbnailUploadError",
-           children: RQ
-         }), (0, pQ.jsx)(oQ.m, {
-           disabled: SQ,
-           className: "ThumbnailUploadButton",
-           onClick: async () => {
-             if (NQ(!0), !WQ.current && xQ && JQ && qQ) {
-               WQ.current = !0, iQ(!0), OQ(null);
-               try {
-                 await mQ(xQ.base64Jpg, hQ, cQ ? wQ : null)
-               } catch (QQ) {
-                 OQ(QQ.errorMessageForUser ? bQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : bQ("thumbnail:failedToUploadImage"))
-               } finally {
-                 WQ.current = !1, iQ(!1)
-               }
-             } else qQ || vQ()
- ... (2 more removed lines; see GitHub link above)
+           className: "StudioStatsChartTooltipValue",
+           children: null === Mk.value ? bk : Sk(Mk.value)
+         }), null === mk || void 0 === mk ? void 0 : mk.map(((kk, ek) => {
+           var ik;
+           const Dk = null === (ik = Mk.lineValues) || void 0 === ik ? void 0 : ik[ek];
+           return (0, xe.jsxs)("div", {
+             className: "StudioStatsChartTooltipLine SmallTextLight",
+             children: [(0, xe.jsx)("span", {
+               className: "StudioStatsChartTooltipLineSwatch",
+               style: {
+                 backgroundColor: kk.colour
+               }
+             }), kk.label, ": ", null === Dk || void 0 === Dk ? bk : Sk(Dk)]
+           }, `StudioStatsChartTooltipLine-${ek}`)
+         })), void 0 !== rk && (0, xe.jsx)(Ne, {
+           point: Mk,
+ ... (3 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L684` → after: `L761-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L761-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L761-L775) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L684)

```diff
-     const fQ = 2e3;
+     const ei = .6;
+ 
+     function ii(kk, ek, ik, Dk) {
+       if (!kk || 0 === ik.length || Dk <= 0) return null;
+       const fk = "1d" === ek ? function(kk) {
+           const ek = new Date(kk);
+           return ek.setUTCHours(0, 0, 0, 0), ek.getTime()
+         }(kk.dateMs) : kk.dateMs,
+         Sk = (fk - ik[0].dateMs) / Dk;
+       return Sk < 0 || Sk > 1 ? null : {
+         dateMs: fk,
+         label: kk.label,
+         alignLeft: Sk > ei
+       }
+     }
```

#### 33. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L688-L691` → after: `L779-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L779-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L779-L806) · [Before (L688-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L688-L691)

```diff
-         schematicId: FQ,
-         ownedThumbnailCount: wQ,
-         onClose: qQ,
-         onThumbnailReady: oQ
+         viewBox: ek,
+         text: ik,
+         alignLeft: Dk
+       } = kk;
+       return void 0 === (null === ek || void 0 === ek ? void 0 : ek.x) || void 0 === ek.y ? null : (0, xe.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: ek.x + (Dk ? -5 : 5),
+         y: ek.y + 10,
+         textAnchor: Dk ? "end" : "start",
+         children: ik
+       })
+     }
+ 
+     function fi(kk) {
+       const ek = new Set;
+       return kk.forEach(((ik, Dk) => {
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L695-L714` → after: `L810-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L810-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L810-L818) · [Before (L695-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L695-L714)

```diff
-       } = (0, kQ.y)(), {
-         userContext: vQ
-       } = (0, rQ.e)(), [mQ, bQ] = (0, LQ.useState)(!1), [xQ, AQ] = (0, LQ.useState)(!1), [tQ, eQ] = (0, LQ.useState)(!1), MQ = (0, LQ.useRef)();
-       (0, LQ.useEffect)((() => () => {
-         clearTimeout(MQ.current)
-       }), []);
-       const GQ = function(QQ, FQ) {
-         const wQ = [];
-         return QQ.isLoggedIn() || wQ.push(aQ.NOT_LOGGED_IN), FQ >= HQ.$ && wQ.push(aQ.THUMBNAIL_LIMIT_REACHED), wQ
-       }(vQ, wQ);
-       if (GQ.length > 0) {
-         const QQ = {
-           [aQ.NOT_LOGGED_IN]: {
-             key: "thumbnail:mustBeLoggedInToUpload"
-           },
-           [aQ.THUMBNAIL_LIMIT_REACHED]: {
- ... (4 more removed lines; see GitHub link above)
+       } = (0, nk.D)();
+       return (0, xe.jsxs)("span", {
+         className: "StudioStatsChartLegendEntry",
+         children: [(0, xe.jsx)("span", {
+           className: bk()("StudioStatsChartLegendSwatch", ek),
+           style: Dk ? {
+             backgroundColor: ik
+           } : {
+             color: ik
```

#### 35. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L716-L734` → after: `L820-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L820-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L820-L843) · [Before (L716-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L716-L734)

```diff
-         };
-         return (0, pQ.jsxs)("div", {
-           className: "ThumbnailUploaderInner",
-           children: [(0, pQ.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: DQ("thumbnail:cannotUploadThumbnail")
-           }), GQ.map(((FQ, wQ) => {
-             const LQ = QQ[FQ];
-             return (0, pQ.jsxs)("div", {
-               className: "CannotUploadThumbnailItem",
-               children: [(0, pQ.jsx)(uQ.c, {
-                 name: "triangle-exclamation"
-               }), (0, pQ.jsx)("span", {
-                 children: DQ(LQ.key, LQ.params)
-               })]
-             }, wQ)
- ... (3 more removed lines; see GitHub link above)
+         }), fk, void 0 !== Sk && (0, xe.jsx)("span", {
+           ...(0, yk.db)(),
+           className: "StudioStatsChartLegendRemove",
+           title: rk("general:remove"),
+           "aria-label": rk("general:remove"),
+           onClick: Sk,
+           children: (0, xe.jsx)(Yk.d, {
+             name: "x"
+           })
+         })]
+       })
+     }
+ 
+     function bi(kk) {
+       let {
+         seriesLabel: ek,
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L736-L843` → after: `L845-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L845-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L845-L867) · [Before (L736-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L736-L843)

```diff
-         className: YQ()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: mQ
-         }),
-         children: [mQ && (0, pQ.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, pQ.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, pQ.jsx)(uQ.c, {
-               name: "check"
-             }), (0, pQ.jsx)(NQ.d, {})]
-           }), (0, pQ.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: DQ("thumbnail:thumbnailUploaded")
-           })]
-         }), (0, pQ.jsx)("h1", {
-           className: "SchematicPopupTitle",
- ... (92 more removed lines; see GitHub link above)
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== ek && void 0 !== ik && (0, xe.jsx)(Si, {
+           colour: ik,
+           isFill: !0,
+           label: ek
+         }), null === Sk || void 0 === Sk ? void 0 : Sk.map(((kk, ek) => (0, xe.jsx)(Si, {
+           colour: kk.colour,
+           isFill: !0,
+           label: kk.label,
+           oV: kk.oV
+         }, `StudioChartLegendLine-${ek}`))), void 0 !== Dk && fk && (0, xe.jsxs)(xe.Fragment, {
+           children: [(0, xe.jsx)(Si, {
+             swatchClassName: "StudioStatsChartLegendSwatchComparisonBand",
+             colour: fe.comparison,
+             isFill: !1,
+             label: bk("studio:comparisonLegendBand", {
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L883-L886` → after: `L880-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L880-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L880-L892) · [Before (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L883-L886)

```diff
-         schematicData: DQ,
-         updateSchematicData: mQ,
-         publishFormEnabled: HQ,
-         onClose: bQ
+         title: ek,
+         hoverInfo: ik,
+         anchorId: Dk,
+         status: fk,
+         hasData: Sk,
+         headerActions: rk,
+         filters: Pk,
+         legend: mk,
+         csvExport: Mk,
+         footerActions: Kk,
+         className: xk,
+         cardRef: Uk,
+         children: Hk
```

#### 38. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L890-L915` → after: `L896-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L896-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L896-L975) · [Before (L890-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L890-L915)

```diff
-       } = (0, kQ.y)(), {
-         userContext: AQ,
-         isUserContextUpdating: tQ
-       } = (0, rQ.e)(), eQ = (0, sQ.c)(), [MQ, GQ] = (0, LQ.useState)([]), [cQ, CQ] = (0, LQ.useState)([]), [SQ, iQ] = (0, LQ.useState)(!0), [WQ, RQ] = (0, LQ.useState)(null !== (FQ = DQ.customThumbnailId) && void 0 !== FQ ? FQ : null), [UQ, NQ] = (0, LQ.useState)(null), TQ = (0,  … [truncated]
- 
-       function XQ(QQ, FQ) {
-         jQ.current && (clearTimeout(jQ.current), jQ.current = null), NQ(QQ), null !== QQ && FQ && (jQ.current = setTimeout((() => {
-           NQ(null), jQ.current = null
-         }), 5e3))
-       }(0, LQ.useEffect)((() => () => {
-         clearTimeout(lQ.current), clearTimeout(jQ.current)
-       }), []);
-       const fQ = (0, LQ.useCallback)((() => {
-         iQ(!0), OQ.b.getOwnedThumbnails(AQ).then((QQ => {
-           const FQ = [],
-             wQ = [];
- ... (10 more removed lines; see GitHub link above)
+       } = (0, nk.D)(), lk = void 0 !== Mk || void 0 !== Kk;
+       return (0, xe.jsxs)("div", {
+         ref: Uk,
+         id: Dk,
+         className: bk()("StudioStatsChart", xk),
+         children: [(0, xe.jsxs)("div", {
+           className: "StudioStatsChartHeader",
+           children: [(0, xe.jsxs)("div", {
+             className: "StudioStatsChartTitle",
+             children: [ek, (0, xe.jsx)(Xk.e, {
+               hoverInfo: ik,
+               placement: "top"
+             })]
+           }), void 0 !== rk && (0, xe.jsx)("div", {
+             className: "StudioStatsChartHeaderActions",
+             children: rk
+ ... (64 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L917-L923` → after: `L977-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L977-L983) · [Before (L917-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L917-L923)

```diff
-       }), [AQ]);
-       async function JQ(QQ, FQ, wQ) {
-         return OQ.b.uploadSchematicThumbnail(AQ, QQ, FQ, wQ).then((() => {
-           XQ({
-             text: xQ("thumbnail:uploadedAwaitingModeration"),
-             type: "success"
-           }, !0), fQ()
+       }))));
+       const Fk = function(kk, ek, ik, Dk) {
+         const fk = (null !== kk && void 0 !== kk ? kk : []).map((kk => ii(kk, ek, ik, Dk))).filter((kk => null !== kk)),
+           Sk = new Set;
+         return fk.filter((kk => {
+           const ek = `${kk.dateMs}-${kk.label}`;
+           return !Sk.has(ek) && (Sk.add(ek), !0)
```

#### 40. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L925` → after: `L985-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L985-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L985-L1161) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L925)

```diff
-       }
+       }(Mk, bk, Sk, sk);
+       let uk;
+       pk.length > 0 ? uk = (0, xe.jsx)(bi, {
+         seriesLabel: yk > 0 ? xk : void 0,
+         seriesColour: rk,
+         comparisonLabel: Lk ? Kk : void 0,
+         comparisonIsBand: Ck,
+         lines: pk
+       }) : Lk && void 0 !== xk && (uk = (0, xe.jsx)(bi, {
+         seriesLabel: xk,
+         seriesColour: rk,
+         comparisonLabel: Kk,
+         comparisonIsBand: Ck
+       }));
+       const qk = {
+         fileNameParts: [ek],
+ ... (161 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L927-L944` → after: `L1163-L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1163-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1163-L1180) · [Before (L927-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L927-L944)

```diff
-       function EQ() {
-         KQ.current = Date.now(), lQ.current = null;
-         const QQ = zQ.current;
-         zQ.current = null, XQ({
-           text: xQ("thumbnail:settingThumbnail"),
-           type: "info"
-         }, !1), OQ.b.setSchematicThumbnail(AQ, DQ.schematicId, QQ).then((() => {
-           eQ.current && (XQ({
-             text: xQ("thumbnail:thumbnailUpdated"),
-             type: "success"
-           }, !0), TQ.current = QQ, mQ("customThumbnailId", QQ), mQ("customThumbnailBlurhash", void 0), mQ("customThumbnailVariants", void 0))
-         })).catch((QQ => {
-           eQ.current && (XQ({
-             text: QQ.errorMessageForUser ? xQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : xQ("thumbnail:failedToSetThumbnail"),
-             type: "error"
-           }, !0), RQ(TQ.current))
- ... (2 more removed lines; see GitHub link above)
+     function mi(kk) {
+       return Array.isArray(kk.labels) && Array.isArray(kk.values)
+     }
+     const Mi = 11,
+       Ki = 6,
+       xi = 2,
+       ni = 30,
+       Ui = 6,
+       Hi = 18,
+       wi = 140,
+       li = 4,
+       yi = {
+         top: 8,
+         right: 8,
+         bottom: 0,
+         left: 0
+ ... (2 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L946-L954` → after: `L1182-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1182-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1182-L1211) · [Before (L946-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L946-L954)

```diff
-       function PQ(QQ) {
-         RQ(QQ), zQ.current = QQ;
-         const FQ = Date.now() - KQ.current;
-         FQ >= 1e3 ? EQ() : (XQ({
-           text: xQ("thumbnail:settingThumbnail"),
-           type: "info"
-         }, !1), lQ.current || (lQ.current = setTimeout((() => {
-           EQ()
-         }), 1e3 - FQ)))
+     function Li(kk, ek) {
+       void 0 === Yi && (Yi = document.createElement("canvas").getContext("2d"));
+       const ik = getComputedStyle(ek),
+         Dk = parseFloat(ik.letterSpacing) || 0,
+         fk = Yi;
+       return kk.map((kk => null === fk ? kk.length * Mi * .65 : (fk.font = `${ik.fontStyle} ${ik.fontWeight} ${Mi}px ${ik.fontFamily}`, fk.measureText(kk).width + Dk * kk.length)))
+     }
+ 
+     function Ci(kk, ek, ik) {
+       const Dk = ek / kk.length;
+       if (Math.max(0, ...Li(kk, ik)) + Ui <= Dk) return {
+         rotated: !1,
+         texts: kk,
+         xAxisHeight: ni
+       };
+       const fk = kk.map((kk => function(kk, ek, ik) {
+ ... (14 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L956-L969` → after: `L1213-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1213-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1213-L1352) · [Before (L956-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L956-L969)

```diff
-       return (0, LQ.useEffect)((() => {
-         !1 === tQ && fQ()
-       }), [tQ, fQ]), cQ.length > 0 ? (0, pQ.jsx)(nQ, {
-         rejectedThumbnails: cQ,
-         userContext: AQ,
-         isMountedRef: eQ,
-         onAcknowledged: fQ
-       }) : (0, pQ.jsxs)("div", {
-         className: "BloxdForm ThumbnailSection",
-         children: [(0, pQ.jsxs)("div", {
-           className: "SectionTitle",
-           children: [xQ("thumbnail:gameThumbnail"), UQ && (0, pQ.jsx)("span", {
-             className: YQ()("ThumbnailActionMsg", `ThumbnailActionMsg--${UQ.type}`),
-             children: UQ.text
+     }
+ 
+     function Ai(kk) {
+       var ek, ik;
+       let {
+         x: Dk = 0,
+         y: fk = 0,
+         index: Sk = 0,
+         fill: bk,
+         layout: rk,
+         labels: Pk,
+         openedIndex: mk
+       } = kk;
+       const Mk = null !== (ek = rk.texts[Sk]) && void 0 !== ek ? ek : "",
+         Kk = null !== (ik = Pk[Sk]) && void 0 !== ik ? ik : "",
+         xk = Sk === mk ? "bold" : void 0,
+ ... (124 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L972-L983` → after: `L1372-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1372-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1372-L1502) · [Before (L972-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L972-L983)

```diff
-           className: "SectionBody",
-           children: (0, pQ.jsxs)("div", {
-             className: "ThumbnailGrid",
-             children: [(0, pQ.jsxs)("div", {
-               className: YQ()("ThumbnailGridItem ThumbnailGridItemDefault", {
-                 ThumbnailGridItemSelected: null === WQ
-               }),
-               onClick: () => PQ(null),
-               children: [(0, pQ.jsx)(IQ.d, {
-                 game: {
-                   schematicId: DQ.schematicId,
-                   imageBlurhash: DQ.imageBlurhash
+           className: "StudioStatsChartTooltipValue",
+           children: Dk(fk.value)
+         })]
+       })
+     }
+ 
+     function di(kk) {
+       if (!(kk.target instanceof Element)) return;
+       const ek = kk.target.closest(".Dropdown-root");
+       if (!(ek instanceof HTMLElement)) return;
+       let ik = 0;
+       const Dk = ek.closest(".StudioStatsChart");
+       null !== Dk && (ik = Dk.getBoundingClientRect().left + parseFloat(getComputedStyle(Dk).paddingLeft)), ek.style.setProperty("--studio-filter-menu-max-width", ek.getBoundingClientRect().right - ik + "px")
+     }
+ 
+     function Vi(kk) {
+ ... (115 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L985-L1067` → after: `L1504-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1504-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1504-L1512) · [Before (L985-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L985-L1067)

```diff
-               }), (0, pQ.jsx)("div", {
-                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
-                 children: xQ("general:default")
-               })]
-             }), SQ && (0, pQ.jsx)(vQ.c, {}), MQ.map(((QQ, FQ) => (0, pQ.jsxs)("div", {
-               className: YQ()("ThumbnailGridItem", {
-                 ThumbnailGridItemSelected: WQ === QQ.id,
-                 ThumbnailGridItemPending: !QQ.approved
-               }),
-               onClick: () => {
-                 QQ.approved && PQ(QQ.id)
-               },
-               children: [QQ.approved && (0, pQ.jsx)("img", {
-                 src: `${hQ.clientSideServerUrls.s3Url}/customThumbnails/${QQ.id}.jpg`,
-                 alt: "Thumbnail"
-               }), QQ.approved && (0, pQ.jsx)("div", {
- ... (67 more removed lines; see GitHub link above)
+               }), (0, xe.jsx)(ne, {
+                 small: !0,
+                 icon: "plus",
+                 label: ik("Zoom In"),
+                 disabled: !Pk,
+                 onClick: () => {
+                   Sk({
+                     points: kk,
+                     level: 2 * bk
```

#### 46. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1069-L1080` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1514) · [Before (L1069-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1069-L1080)

```diff
-                 }({
-                   schematicId: DQ.schematicId,
-                   ownedThumbnailCount: MQ.length,
-                   onThumbnailReady: JQ,
-                   onClose: bQ
-                 })
-               },
-               children: [(0, pQ.jsx)(uQ.c, {
-                 name: "plus"
-               }), (0, pQ.jsx)("div", {
-                 className: "ThumbnailGridItemLabel",
-                 children: xQ("thumbnail:uploadThumbnail")
+                 }
```

#### 47. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1082` → after: `L1516-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1516-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1516-L1631) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1082)

```diff
-             })]
+             })
+           }
+         }(sk, Mk),
+         Fk = void 0 === dk ? ue(sk.map((kk => ({
+           dateMs: 0,
+           value: kk.value
+         }))), mk, Mk) : qe(dk, mk),
+         uk = (0, xe.jsxs)(Vi, {
+           children: [(0, xe.jsx)(De.b, {
+             className: "StudioStatsBarChartNameFilter",
+             placeholderText: wk("Filter by name"),
+             onValueChange: pk
+           }), yk.map(((kk, ek) => function(kk) {
+             return kk.length > 0
+           }(kk) ? (0, xe.jsx)(Jk.e, {
+             options: kk,
+ ... (100 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1090-L1093` → after: `L1640-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1640-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1640-L1652) · [Before (L1090-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1090-L1093)

```diff
-         rejectedThumbnails: FQ,
-         userContext: wQ,
-         isMountedRef: qQ,
-         onAcknowledged: DQ
+         title: fk,
+         hoverInfo: Sk,
+         anchorId: bk,
+         status: rk,
+         curve: Pk,
+         headerActions: mk,
+         comparisonCurve: Mk,
+         comparisonLabel: Kk,
+         seriesLabel: xk,
+         verticalLabelFilters: Uk = [],
+         verticalLabels: Hk = [],
+         lines: wk = [],
+         filters: lk
```

#### 49. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1097-L1098` → after: `L1656-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1656-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1656-L1671) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1097-L1098)

```diff
-       } = (0, kQ.y)(), [HQ, bQ] = (0, LQ.useState)(!1), [YQ, xQ] = (0, LQ.useState)(!1), AQ = function(QQ) {
-         const FQ = new Map;
+       } = (0, nk.D)(), [yk, Yk] = (0, Dk.useState)([]), Lk = (0, Dk.useMemo)((() => Uk.map((kk => function(kk, ek) {
+         return kk.map((kk => "" === kk.label ? {
+           value: kk.value,
+           label: ek
+         } : kk))
+       }(kk, pk("general:default"))))), [Uk, pk]), Ck = Lk.map(((kk, ek) => {
+         var ik;
+         return function(kk, ek) {
+           var ik;
+           const Dk = kk.find((kk => kk.value === ek));
+           return null !== (ik = null !== Dk && void 0 !== Dk ? Dk : kk[0]) && void 0 !== ik ? ik : null
+         }(kk, null !== (ik = yk[ek]) && void 0 !== ik ? ik : null)
+       })), Ak = [];
+       for (const Dk of Ck) null !== Dk && Ak.push(Dk.value);
+       const jk = Ak.length === Ck.length ? function(kk, ek) {
+         let ik = kk;
```

#### 50. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1100-L1102` → after: `L1673-L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1673-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1673-L1675) · [Before (L1100-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1100-L1102)

```diff
-           const QQ = wQ.rejectionPolicyId,
-             LQ = FQ.get(QQ);
-           LQ ? LQ.push(wQ) : FQ.set(QQ, [wQ])
+           if (void 0 === ik) return [];
+           if (Array.isArray(ik)) return console.warn(`StudioDropoffChart got ${ek.length} filters for vertical labels nested less deeply`), [];
+           ik = ik[Dk]
```

#### 51. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1104-L1151` → after: `L1677-L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1677-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1677-L1726) · [Before (L1104-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1104-L1151)

```diff
-         return FQ
-       }(FQ);
-       return (0, pQ.jsxs)("div", {
-         className: "ThumbnailRejectionNotice",
-         children: [(0, pQ.jsxs)("div", {
-           className: "ThumbnailRejectionNoticeTitle",
-           children: [(0, pQ.jsx)(uQ.c, {
-             name: "triangle-exclamation"
-           }), " ", mQ("thumbnail:thumbnailsRejected"), " ", (0, pQ.jsx)(uQ.c, {
-             name: "triangle-exclamation"
-           })]
-         }), (0, pQ.jsx)("div", {
-           className: "ThumbnailRejectionNoticeSubtitle",
-           children: mQ("thumbnail:thumbnailsRejectedDescription")
-         }), (0, pQ.jsx)("div", {
-           className: "ThumbnailRejectionNoticeList",
- ... (32 more removed lines; see GitHub link above)
+         return void 0 === ik ? [] : Array.isArray(ik) ? ik : (console.warn(`StudioDropoffChart got ${ek.length} filters for vertical labels nested more deeply`), [])
+       }(Hk, Ak) : [];
+       let sk;
+       Lk.some((kk => kk.length > 0)) && (sk = (0, xe.jsx)(Vi, {
+         children: Lk.map(((kk, ek) => 0 === kk.length ? null : (0, xe.jsx)(Jk.e, {
+           options: kk,
+           value: Ck[ek],
+           onChange: kk => {
+             Yk((ik => {
+               const Dk = [...ik];
+               return Dk[ek] = kk.value, Dk
+             }))
+           }
+         }, ek)))
+       }));
+       let dk = null !== mk && void 0 !== mk ? mk : sk;
+ ... (34 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1153-L1173` → after: `L1728-L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1728-L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1728-L1875) · [Before (L1153-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1153-L1173)

```diff
-         }), (0, pQ.jsxs)("label", {
-           className: "ThumbnailRejectionNoticeCheckbox",
-           children: [(0, pQ.jsx)(RQ.d, {
-             checked: HQ,
-             onChange: QQ => bQ(QQ.target.checked),
-             disabled: YQ
-           }), (0, pQ.jsx)("span", {
-             children: mQ("thumbnail:haveReadRejectionReasons")
-           })]
-         }), (0, pQ.jsx)(oQ.m, {
-           onClick: async function() {
-             xQ(!0);
-             const QQ = await Promise.allSettled(FQ.map((QQ => OQ.b.deleteSchematicThumbnail(wQ, QQ.id))));
-             if (!qQ.current) return;
-             const LQ = QQ.filter((QQ => "rejected" === QQ.status));
-             LQ.length > 0 && console.error("Some rejected thumbnails failed to delete:", LQ), DQ()
- ... (5 more removed lines; see GitHub link above)
+         }(Pk, null !== Mk && void 0 !== Mk ? Mk : null, wk, Fk),
+         qk = void 0 !== Kk && uk.some((kk => null !== kk.comparisonValue)),
+         Ik = qk && uk.some((kk => null !== kk.comparisonBand));
+       let zk;
+       wk.length > 0 ? zk = (0, xe.jsx)(bi, {
+         seriesLabel: null !== Pk ? xk : void 0,
+         seriesColour: Vk,
+         comparisonLabel: qk ? Kk : void 0,
+         comparisonIsBand: Ik,
+         lines: wk
+       }) : qk && void 0 !== xk && (zk = (0, xe.jsx)(bi, {
+         seriesLabel: xk,
+         seriesColour: Vk,
+         comparisonLabel: Kk,
+         comparisonIsBand: Ik
+       }));
+ ... (132 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1177-L1198` → after: `L1879-L30627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L1879-L30627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L1879-L30627) · [Before (L1177-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1177-L1198)

```diff
-     function gQ(QQ) {
-       let {
-         thumbnailId: FQ,
-         thumbnailName: wQ,
-         onClose: LQ
-       } = QQ;
-       const {
-         t: qQ
-       } = (0, kQ.y)();
-       return (0, pQ.jsxs)("div", {
-         className: "ThumbnailDeleteConfirm",
-         children: [(0, pQ.jsx)("div", {
-           className: "ThumbnailDeleteConfirmTitle",
-           children: qQ("thumbnail:deleteThumbnail")
-         }), (0, pQ.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
- ... (6 more removed lines; see GitHub link above)
+     function ai(kk, ek) {
+       return "customGamePercentiles" === kk.type || "customGamePercentiles" === ek.type ? kk.type === ek.type : kk.gameAnalyticsId === ek.gameAnalyticsId
+     }
+ 
+     function Wi(kk) {
+       return {
+         p20: null,
+         p50: kk,
+         p80: null
+       }
+     }
+     const ti = {
+         p20: null,
+         p50: null,
+         p80: null
+       },
+ ... (28733 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1205-L1215` → after: `L30633-L30646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30633-L30646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30633-L30646) · [Before (L1205-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1205-L1215)

```diff
-           className: "ThumbnailDeleteConfirmButtons",
-           children: [(0, pQ.jsxs)(oQ.F, {
-             className: "ThumbnailDeleteConfirmButton",
-             onClick: () => LQ(!0),
-             children: [(0, pQ.jsx)(uQ.c, {
-               name: "trash-can"
-             }), " ", qQ("general:delete")]
-           }), (0, pQ.jsx)(oQ.i, {
-             className: "ThumbnailDeleteConfirmButton",
-             onClick: () => LQ(!1),
-             children: qQ("general:cancel")
+           className: "StudioGamePageStatusChips",
+           children: [null !== Kk && (0, xe.jsx)("span", {
+             className: bk()("StudioGamePageStatusChip", {
+               StudioGamePageStatusChipPublished: Kk
+             }),
+             children: wk(Kk ? "general:published" : "general:draft")
+           }), xk]
+         })]
+       }), (0, xe.jsxs)("div", {
+         className: "StudioGamePageHeaderMeta",
+         children: [(0, xe.jsxs)("div", {
+           className: "StudioGamePageCategory",
+           children: [wk("general:category"), ": ", (0, xe.jsx)("span", {
+             children: (0, Hk.gb)(fk)
```

#### 55. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1218-L1223` → after: `L30668-L30674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30668-L30674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30668-L30674) · [Before (L1218-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1218-L1223)

```diff
-       })
-     }
-     var PQ = wQ(3047),
-       ZQ = wQ(4832),
-       yQ = wQ(4834),
-       BQ = wQ(4879);
+       }), void 0 !== Uk && (0, xe.jsx)("div", {
+         className: "StudioGamePageHeaderActions",
+         children: Uk
+       })]
+     })]
+   })
+ }
```

#### 56. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1225-L1234` → after: `L30676-L30702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30676-L30702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30676-L30702) · [Before (L1225-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1225-L1234)

```diff
-     function dQ(QQ) {
-       let {
-         schematicData: FQ,
-         setTexturePack: wQ,
-         initializeTexturePack: qQ,
-         publishFormEnabled: oQ
-       } = QQ;
-       const {
-         t: DQ
-       } = (0, kQ.y)(), [vQ, mQ] = (0, LQ.useState)(null), [uQ, HQ] = (0, LQ.useState)(null), [bQ, xQ] = (0, LQ.useState)(!1), AQ = (0, sQ.c)(), tQ = oQ && !bQ, eQ = FQ.customTexturePackKey;
+ function BZ(kk) {
+   let {
+     schematicId: ek,
+     approvalInfo: ik,
+     canOverride: Dk,
+     onApprovalChanged: fk
+   } = kk;
+   const {
+     t: Sk
+   } = (0, nk.D)(), rk = ik.overallPassed;
+   return (0, xe.jsxs)("button", {
+     type: "button",
+     className: bk()("StudioGamePageApprovalChip", {
+       StudioGamePageApprovalChipPassed: rk
+     }),
+     onClick: () => {
+ ... (11 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1236-L1243` → after: `L30704-L30733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30704-L30733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30704-L30733) · [Before (L1236-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1236-L1243)

```diff
-       function MQ(QQ) {
-         var FQ;
-         mQ(QQ.metaData.id), HQ(null !== (FQ = QQ.metaData.fromFolderName) && void 0 !== FQ ? FQ : null), (QQ.metaData.id !== PQ.s.CUSTOM || QQ.metaData.fromFolderName) && wQ(QQ)
-       }
-       return (0, LQ.useEffect)((() => {
-         eQ && (xQ(!0), (0, ZQ.d)(eQ).then((QQ => {
-           var FQ;
-           AQ.current && (QQ ? (mQ(QQ.metaData.id), HQ(null !== (FQ = QQ.metaData.fromFolderName) && void 0 !== FQ ? FQ : null), qQ(QQ)) : console.error(`No texture pack at ${eQ}`))
+ function cZ(kk) {
+   let {
+     game: ek,
+     canManage: ik,
+     isOwner: fk,
+     userContext: Sk
+   } = kk;
+   const {
+     t: bk
+   } = (0, nk.D)(), Pk = (0, sk.c)(ek), Mk = Sk.playerHasRank("developer"), [xk, Uk] = qZ(), lk = Tb(ek.schematicId), pk = Zb(Uk, lk.onRequest), Yk = ik ? xk : uZ, Lk = function(kk, ek) {
+     const [ik, fk] = (0, Dk.useState)({
+       ccu: kk.ccu,
+       favourites: kk.favourites,
+       publishedAt: kk.publishedAt,
+       gameUpdatedAt: kk.gameUpdatedAt,
+       gameBoostHistory: kk.gameBoostHistory
+ ... (14 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1245-L1281` → after: `L30735-L30765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30735-L30765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30735-L30765) · [Before (L1245-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1245-L1281)

```diff
-           console.error("Error fetching texture pack: ", QQ)
-         })).finally((() => {
-           xQ(!1)
-         })))
-       }), [eQ, qQ, AQ]), (0, pQ.jsxs)("div", {
-         className: "BloxdForm TexturePackSection",
-         children: [(0, pQ.jsx)("div", {
-           className: "SectionTitle",
-           children: DQ("customTexturePack:customTexturePack")
-         }), (0, pQ.jsxs)("div", {
-           className: "TexturePackList",
-           children: [(0, pQ.jsx)("div", {
-             className: YQ()("TexturePack", {
-               Selected: null === vQ && !bQ,
-               Disabled: !tQ
-             }),
- ... (21 more removed lines; see GitHub link above)
+           console.error("Failed to refresh studio game stats", kk)
+         }))
+       }), zZ);
+       return () => {
+         kk = !0, clearInterval(ik)
+       }
+     }), [Sk, ek]), ik
+   }(ek, Sk), {
+     schematicData: dk
+   } = Pk, {
+     approvalInfo: Vk,
+     reloadApprovalInfo: Fk
+   } = function(kk, ek, ik) {
+     const [fk, Sk] = (0, Dk.useState)(null), [bk, rk] = (0, Dk.useState)(0);
+     return (0, Dk.useEffect)((() => {
+       Sk(null)
+ ... (15 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1283-L1307` → after: `L30767-L30856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30767-L30856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30767-L30856) · [Before (L1283-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1283-L1307)

```diff
-     var QF = wQ(4897);
- 
-     function FF(QQ) {
-       var FQ;
-       let {
-         gameCategory: wQ,
-         setGameCategory: LQ,
-         disabled: qQ
-       } = QQ;
-       const DQ = null !== (FQ = (0, xQ.$)(wQ)) && void 0 !== FQ ? FQ : "other";
-       return (0, pQ.jsxs)("div", {
-         className: "GameCategoryPicker",
-         children: [(0, pQ.jsx)(eQ.c, {
-           label: "worldBuilder:gameCategoryGroup",
-           className: "GameCategoryGroup",
-           disabled: qQ,
- ... (9 more removed lines; see GitHub link above)
+   }(dk.schematicId, Sk, (fk || Mk) && dk.gamePublished), uk = {
+     ...ek,
+     ...dk,
+     ...Lk
+   }, qk = function(kk, ek) {
+     return {
+       gameAnalyticsId: (0, rk.d)(kk.schematicId),
+       name: kk.name,
+       ranks: EZ(kk, ek),
+       gameUpdatedAt: kk.gameUpdatedAt,
+       gameBoostHistory: kk.gameBoostHistory,
+       schematicId: kk.schematicId
+     }
+   }(uk, Sk), Ik = {
+     ...qk,
+     genre: "Other" === uk.gameCategory ? null : (0, Hk.gb)(uk.gameCategory),
+ ... (74 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1310-L1322` → after: `L30859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30859) · [Before (L1310-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1310-L1322)

```diff
-           label: "worldBuilder:gameCategory",
-           className: "GameCategory",
-           disabled: qQ,
-           children: (0, pQ.jsx)("div", {
-             className: "GameCategoryOptions",
-             children: xQ.O[DQ].map((QQ => (0, pQ.jsx)(oQ.L, {
-               active: QQ === wQ,
-               onClick: () => {
-                 LQ(QQ)
-               },
-               children: (0, xQ._)(QQ)
-             }, QQ)))
-           })
+           editor: Pk
```

#### 61. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1325` → after: `L30862-L30864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30862-L30864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30862-L30864) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1325)

```diff
-     }
+     })]
+   })
+ }
```

#### 62. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1327-L1374` → after: `L30866-L30917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30866-L30917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30866-L30917) · [Before (L1327-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1327-L1374)

```diff
-     function wF(QQ) {
-       let {
-         editor: FQ,
-         onClose: wQ
-       } = QQ;
-       const {
-         t: LQ
-       } = (0, kQ.y)(), {
-         schematicData: qQ,
-         updateSchematicData: oQ,
-         publishFormEnabled: vQ,
-         formEnabled: mQ
-       } = FQ;
-       return (0, pQ.jsxs)(pQ.Fragment, {
-         children: [(0, pQ.jsxs)(cQ, {
-           icon: "pen-to-square",
- ... (32 more removed lines; see GitHub link above)
+ function TZ() {
+   const {
+     t: kk
+   } = (0, nk.D)(), {
+     gameAnalyticsId: ek
+   } = (0, fk.y)(), ik = (0, dk.useNavigatePreserveSearch)(), {
+     userContext: Sk,
+     isUserContextUpdating: bk
+   } = (0, Uk.d)();
+   (0, Fk.g)();
+   const Pk = (0, Fk.m)(),
+     [mk, Kk] = (0, Dk.useState)({
+       status: "loading"
+     }),
+     [Hk, lk] = qZ(),
+     pk = Tb(ek),
+ ... (36 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1376-L1393` → after: `L30919-L30925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30919-L30925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30919-L30925) · [Before (L1376-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1376-L1393)

```diff
-           })]
-         }), (0, pQ.jsx)(iQ, {
-           schematicData: qQ,
-           updateSchematicData: oQ,
-           publishFormEnabled: vQ,
-           formEnabled: mQ
-         }), !0 === qQ.gamePublished && (0, pQ.jsx)(cQ, {
-           icon: "palette",
-           title: LQ("worldBuilder:texturePackSection"),
-           disabled: !mQ,
-           children: (0, pQ.jsx)(dQ, {
-             schematicData: qQ,
-             setTexturePack: FQ.setTexturePack,
-             initializeTexturePack: FQ.initializeTexturePack,
-             publishFormEnabled: vQ
-           })
- ... (2 more removed lines; see GitHub link above)
+           }
+         }))
+       })).catch((kk => {
+         console.error("Failed to load first party game ranks", kk)
+       })), () => {
+         Dk = !0
+       }
```

#### 64. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1395-L1430` → after: `L30927-L30941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R30927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L30927-L30941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L30927-L30941) · [Before (L1395-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1395-L1430)

```diff
- 
-     function LF(QQ) {
-       let {
-         editor: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, kQ.y)(), {
-         schematicData: LQ,
-         formEnabled: qQ,
-         hasUnsavedChanges: DQ
-       } = FQ, HQ = qQ && DQ;
-       return (0, pQ.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [qQ && DQ && (0, pQ.jsxs)("div", {
-           className: "SchematicPageFooterStatus",
- ... (20 more removed lines; see GitHub link above)
+     const Dk = Sk.playerHasRank("developer") || Sk.playerHasRank("admin");
+     let fk = !1;
+     return Kk({
+       status: "loading"
+     }), wk.b.getGame(Sk, kk, !0).then((kk => {
+       if (fk) return;
+       const ek = Sk.getPlayerName() === kk.owner.name;
+       Kk({
+         status: "loaded",
+         game: {
+           type: "customGame",
+           game: kk,
+           canManage: ek || Dk,
+           isOwner: ek
+         }
```

#### 65. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1434-L1443` → after: `L31029-L31098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31029-L31098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31029-L31098) · [Before (L1434-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1434-L1443)

```diff
-     function qF(QQ) {
-       let {
-         schematic: FQ,
-         onSchematicUpdate: wQ,
-         onClose: qQ,
-         inSourceWorld: DQ
-       } = QQ;
-       const {
-         t: vQ
-       } = (0, kQ.y)();
+   function Sk(kk) {
+     let {
+       thumbnail: ek,
+       name: ik
+     } = kk;
+     return (0, fk.jsxs)("div", {
+       className: "StudioTableGameCell",
+       children: [(0, fk.jsx)("div", {
+         className: "StudioTableThumbnail",
+         children: ek
+       }), (0, fk.jsx)("span", {
+         className: "StudioTableGameName",
+         children: ik
+       })]
+     })
+   }
+ ... (54 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1445-L1446` → after: `L31100-L31120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31100-L31120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31100-L31120) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1445-L1446)

```diff
-       function mQ() {
-         null === qQ || void 0 === qQ || qQ()
+   function Sk(kk, ek, ik) {
+     let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fk;
+     const Sk = ek.length;
+     if (0 === Sk) return null;
+     const bk = new Array(ik).fill(1 / 0),
+       rk = new Array(ik).fill(-1 / 0),
+       Pk = Array.from({
+         length: ik
+       }, (() => new Map)),
+       mk = Array.from({
+         length: ik
+       }, (() => new Map));
+     let Mk = 0;
+     for (let fk = 0; fk < Sk; fk++) {
+       Mk += ek[fk];
+       for (let Dk = 0; Dk < ik; Dk++) {
+ ... (5 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1448-L1466` → after: `L31122-L31136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31122-L31136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31122-L31136) · [Before (L1448-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1448-L1466)

```diff
-       const uQ = (0, QF.c)(FQ, {
-         onNavigateAway: mQ,
-         inSourceWorld: DQ
-       });
-       return (0, LQ.useEffect)((() => {
-         null === wQ || void 0 === wQ || wQ(uQ.schematicData)
-       }), [uQ.schematicData, wQ]), (0, pQ.jsxs)("div", {
-         className: "SchematicPage SchematicPagePopupVariant",
-         children: [(0, pQ.jsxs)("div", {
-           className: "SchematicPageBody",
-           children: [(0, pQ.jsx)(oQ.b, {
-             onClick: mQ,
-             children: vQ("worldBuilder:back")
-           }), (0, pQ.jsx)(cQ, {
-             icon: "rocket-launch",
-             title: vQ("worldBuilder:actionsSection"),
- ... (3 more removed lines; see GitHub link above)
+     }
+     const xk = new Uint8Array(Sk);
+     let nk = Mk;
+     for (;;) {
+       let fk = null;
+       for (let kk = 0; kk < ik; kk++)
+         if (bk[kk] !== rk[kk])
+           for (const ek of [!0, !1]) {
+             var Uk;
+             const ik = null !== (Uk = Pk[kk].get(ek ? bk[kk] : rk[kk])) && void 0 !== Uk ? Uk : 0,
+               Dk = null !== fk && rk[kk] - bk[kk] > rk[fk.axis] - bk[fk.axis];
+             (null === fk || ik < fk.count || ik === fk.count && Dk) && (fk = {
+               axis: kk,
+               isLow: ek,
+               count: ik
```

#### 68. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1468-L1475` → after: `L31138-L31154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31138-L31154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31138-L31154) · [Before (L1468-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1468-L1475)

```diff
-           }), (0, pQ.jsx)(wF, {
-             editor: uQ,
-             onClose: mQ
-           })]
-         }), (0, pQ.jsx)(LF, {
-           editor: uQ
-         })]
-       })
+           }
+       if (null === fk || nk - fk.count < Mk * Dk) break;
+       const {
+         axis: Sk,
+         isLow: Kk
+       } = fk, wk = Kk ? bk[Sk] : rk[Sk];
+       for (const Dk of null !== (Hk = mk[Sk].get(wk)) && void 0 !== Hk ? Hk : []) {
+         var Hk;
+         if (!xk[Dk]) {
+           xk[Dk] = 1, nk -= ek[Dk];
+           for (let fk = 0; fk < ik; fk++) {
+             const Sk = kk[Dk * ik + fk];
+             Pk[fk].set(Sk, Pk[fk].get(Sk) - ek[Dk])
+           }
+         }
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1478-L1495` → after: `L31162-L31177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31162-L31177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31162-L31177) · [Before (L1478-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1478-L1495)

```diff
-     function oF(QQ) {
-       let {
-         schematic: FQ,
-         onSchematicUpdate: wQ,
-         onClose: LQ,
-         inSourceWorld: oQ
-       } = QQ;
-       qQ.NotificationProvider.showCustomPopup({
-         body: QQ => (0, pQ.jsx)(qF, {
-           schematic: FQ,
-           onSchematicUpdate: wQ,
-           onClose: QQ,
-           inSourceWorld: oQ
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: LQ,
- ... (2 more removed lines; see GitHub link above)
+   function bk(kk) {
+     const ek = [],
+       ik = [];
+     for (const [fk, Sk] of Object.entries(kk.values))
+       for (const [kk, Dk] of Object.entries(Sk)) Dk > 0 && (ek.push(Number(fk), Number(kk)), ik.push(Dk));
+     const Dk = Sk(ek, ik, 2);
+     return null === Dk ? {
+       minX: kk.minX,
+       maxX: kk.maxX,
+       minZ: kk.minZ,
+       maxZ: kk.maxZ
+     } : {
+       minX: Dk.min[0],
+       maxX: Dk.max[0],
+       minZ: Dk.min[1],
+       maxZ: Dk.max[1]
```

#### 70. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1497-L1509` → after: `L31179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31179) · [Before (L1497-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1497-L1509)

```diff
-   },
-   4790: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => HQ
-     });
-     var LQ = wQ(1070),
-       qQ = wQ.n(LQ),
-       oQ = wQ(1207),
-       DQ = wQ(1079),
-       kQ = wQ(1451),
-       vQ = wQ(1367),
-       mQ = wQ(1348),
-       uQ = wQ(1107);
+   }
```

#### 71. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1511-L1570` → after: `L31181-L31193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31181-L31193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31181-L31193) · [Before (L1511-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1511-L1570)

```diff
-     function HQ(QQ) {
-       let {
-         editor: FQ,
-         className: wQ
-       } = QQ;
-       const {
-         t: LQ
-       } = (0, oQ.y)(), {
-         schematicData: HQ,
-         formEnabled: bQ,
-         publishFormEnabled: YQ
-       } = FQ, xQ = !bQ || !YQ;
-       return (0, uQ.jsxs)("div", {
-         className: qQ()("PublishButtonContainer", wQ),
-         children: [FQ.canEditSourceWorld && (0, uQ.jsxs)(kQ.f, {
-           onClick: FQ.editSourceWorld,
- ... (44 more removed lines; see GitHub link above)
+   function rk(kk) {
+     const ek = [],
+       ik = [];
+     for (const [fk, Sk] of Object.entries(kk.frequencies))
+       for (const [kk, Dk] of Object.entries(Sk))
+         for (const [Sk, bk] of Object.entries(Dk)) bk > 0 && (ek.push(Number(fk), Number(kk), Number(Sk)), ik.push(bk));
+     const Dk = Sk(ek, ik, 3);
+     return null === Dk ? {
+       min: kk.min,
+       max: kk.max
+     } : {
+       min: Dk.min,
+       max: Dk.max
```

#### 72. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1572-L1586` → after: `L31195-L31215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31195-L31215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31195-L31215) · [Before (L1572-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1572-L1586)

```diff
-   },
-   4832: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ
-     });
-     var LQ = wQ(1213);
-     async function qQ(QQ) {
-       const FQ = await fetch(`${LQ.clientSideServerUrls.s3Url}/${QQ}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === FQ.status || 403 === FQ.status) return null;
-       if (!FQ.ok) throw new Error(`Failed to download the texture pack (${FQ.status})`);
-       return await FQ.json()
+   }
+ 
+   function Pk(kk) {
+     const ek = Math.pow(10, Math.floor(Math.log10(Math.max(1, kk)))),
+       ik = [1, 2, 5, 10].find((ik => ik * ek >= kk));
+     return Math.max(1, ik * ek)
+   }
+   const mk = .05;
+ 
+   function Mk(kk, ek) {
+     const ik = kk.length - ek,
+       Dk = ek + Math.floor(ik / 2);
+     return ik % 2 === 1 ? kk[Dk] : (kk[Dk - 1] + kk[Dk]) / 2
+   }
+ 
+   function Kk(kk, ek) {
+ ... (5 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1588-L1604` → after: `L31217-L31218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31217-L31218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31217-L31218) · [Before (L1588-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1588-L1604)

```diff
-   },
-   4897: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => tQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1342),
-       oQ = wQ(1038),
-       DQ = wQ(160),
-       kQ = wQ(1539),
-       vQ = wQ(17),
-       mQ = wQ(1897),
-       uQ = wQ(1489),
-       HQ = wQ(4435),
-       bQ = wQ(1362),
-       YQ = wQ(1140),
- ... (1 more removed lines; see GitHub link above)
+     return ik
+   }
```

#### 74. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1606-L1641` → after: `L31220-L31240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31220-L31240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31220-L31240) · [Before (L1606-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1606-L1641)

```diff
-     function AQ(QQ, FQ) {
-       return {
-         schematicId: QQ.schematicId,
-         name: QQ.name,
-         description: QQ.description,
-         gamePublished: FQ,
-         gameCategory: QQ.gameCategory,
-         defaultGamemode: QQ.defaultGamemode,
-         voidDeathHeight: QQ.voidDeathHeight,
-         disableKeepInventory: QQ.disableKeepInventory,
-         disableTpRequests: QQ.disableTpRequests,
-         disableLobbySpawn: QQ.disableLobbySpawn,
-         disableMobs: QQ.disableMobs,
-         disableSpawnProtection: QQ.disableSpawnProtection,
-         disableFallDamage: QQ.disableFallDamage,
-         worldBorder: QQ.worldBorder,
- ... (20 more removed lines; see GitHub link above)
+   function xk(kk) {
+     const ek = Float64Array.from(kk).filter((kk => kk > 0));
+     if (0 === ek.length) return {
+       max: 0,
+       median: 0,
+       hiddenBelow: 0
+     };
+     ek.sort();
+     let ik = 0,
+       Dk = Mk(ek, ik);
+     for (;;) {
+       const kk = Kk(ek, Dk * mk);
+       if (kk === ik) break;
+       ik = kk, Dk = Mk(ek, ik)
+     }
+     return {
+ ... (5 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1643-L1651` → after: `L31242-L31253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31242-L31253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31242-L31253) · [Before (L1643-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1643-L1651)

```diff
-       function rQ(QQ, FQ) {
-         GQ((wQ => ({
-           ...wQ,
-           [QQ]: FQ
-         })))
-       }
-       const IQ = (0, LQ.useCallback)((QQ => {
-         WQ.current = QQ, SQ(QQ)
-       }), []);
+   function nk(kk, ek) {
+     return ek.max <= 0 || kk <= 0 ? 0 : Math.sqrt(Math.min(1, kk / ek.max))
+   }
+   const Uk = [
+       [60, 15, 100],
+       [130, 30, 160],
+       [215, 45, 100],
+       [250, 130, 25],
+       [255, 215, 0]
+     ],
+     Hk = [200, 228, 248],
+     wk = `rgb(${Hk.join(", ")})`;
```

#### 76. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1653-L1677` → after: `L31255-L31361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31255-L31361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31255-L31361) · [Before (L1653-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1653-L1677)

```diff
-       function UQ(QQ) {
-         cQ("Loading");
-         const FQ = AQ(MQ, QQ),
-           wQ = CQ !== WQ.current ? CQ : void 0;
-         uQ.b.updateSchematic(tQ, FQ, wQ).then((wQ => {
-           let {
-             customTexturePackKey: LQ
-           } = wQ;
-           cQ("Success"), rQ("customTexturePackKey", LQ), iQ.current = FQ, WQ.current = void 0, SQ(void 0), setTimeout((() => {
-             rQ("gamePublished", QQ), cQ("Enter")
-           }), 1e3)
-         })).catch((QQ => {
-           var FQ;
-           (console.error("Failed to save schematic:", QQ), cQ("Error"), QQ instanceof DQ.d && QQ.errorMessageForUser) && bQ.NotificationProvider.showAlertPopup({
-             title: "worldBuilder:changesNotSaved",
-             subtitle: QQ.errorMessageForUser,
- ... (9 more removed lines; see GitHub link above)
+   function lk(kk) {
+     const ek = Math.max(0, Math.min(1, kk)) * (Uk.length - 1),
+       ik = Math.min(Uk.length - 2, Math.floor(ek)),
+       Dk = ek - ik,
+       fk = Uk[ik],
+       Sk = Uk[ik + 1];
+     return [0, 1, 2].map((kk => Math.round(fk[kk] + (Sk[kk] - fk[kk]) * Dk)))
+   }
+   const pk = .2,
+     yk = .5,
+     Yk = .03;
+ 
+   function Lk(kk) {
+     return Object.values(kk.values).flatMap((kk => Object.values(kk)))
+   }
+ 
+ ... (91 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1679-L1700` → after: `L31363-L31399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31363-L31399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31363-L31399) · [Before (L1679-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1679-L1700)

```diff
-       return {
-         schematicData: MQ,
-         updateSchematicData: rQ,
-         setTexturePack: SQ,
-         initializeTexturePack: IQ,
-         updateState: pQ,
-         formEnabled: RQ,
-         publishFormEnabled: OQ,
-         hasUnsavedChanges: sQ,
-         canEditSourceWorld: !wQ,
-         saveSchematic: UQ,
-         unpublishSchematic: function() {
-           bQ.NotificationProvider.showPromptPopup({
-             icon: "rocket-launch",
-             title: "worldBuilder:unpublishAsGameConfirmTitle",
-             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
- ... (6 more removed lines; see GitHub link above)
+     }), []), (0, Dk.useEffect)((() => {
+       ek || (Uk.current.XM.clear(), Pk(!1))
+     }), [ek, Pk]);
+     const Hk = kk => {
+       const ek = Uk.current,
+         ik = Math.min(Kk, Math.max(0, (kk - ek.lastTimeMs) / 1e3));
+       ek.lastTimeMs = kk;
+       const {
+         XM: Dk,
+         flyAccel: rk
+       } = ek, Pk = (Dk.has("forward") ? 1 : 0) - (Dk.has("backward") ? 1 : 0), xk = (Dk.has("right") ? 1 : 0) - (Dk.has("left") ? 1 : 0), nk = 0 !== Pk || 0 !== xk;
+       nk ? Dk.has("sprint") && (ek.isRunning = !0) : ek.isRunning = !1;
+       const wk = Dk.has("jump") ? 1 : Dk.has("crouch") ? -1 : 0,
+         lk = 0 !== wk && wk !== ek.verticalDirection;
+       ek.verticalDirection = wk;
+       const pk = (0, fk.e)(rk, nk, wk, lk, ik * Sk.g.clientTicksPerSecond);
+ ... (21 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1702-L1711` → after: `L31401-L31404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31401-L31404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31401-L31404) · [Before (L1702-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1702-L1711)

```diff
-         editSourceWorld: function() {
-           cQ("Loading"), HQ.d.getSourceWorld(MQ.schematicId).then((QQ => {
-             mQ.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), (0, vQ.k)("other"), eQ((0, qQ.e)("classic", QQ)), null === FQ || void 0 === FQ || FQ()
-           })).catch((QQ => {
-             console.error("Failed to get source world:", QQ), cQ("Error"), setTimeout((() => {
-               cQ("Enter")
-             }), 1e3)
-           }))
+         onKeyUp: kk => {
+           if (xk("Zoom", kk.code)) return void Pk(!1);
+           const ek = nk(kk.code, ik);
+           null !== ek && (kk.preventDefault(), Uk.current.XM.delete(ek))
```

#### 79. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1713-L1716` → after: `L31406-L31407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31406-L31407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31406-L31407) · [Before (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1713-L1716)

```diff
-         playGame: function() {
-           mQ.gameBridge.send("leaveGame", {
-             reloadPath: "/"
-           }), eQ((0, kQ.B)((0, oQ.r)(MQ.schematicId), MQ)), null === FQ || void 0 === FQ || FQ()
+         onBlur: () => {
+           Uk.current.XM.clear(), Pk(!1)
```

#### 80. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L1720-L1721` → after: `L31411-L31499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R31411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L31411-L31499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/104.js#L31411-L31499) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/104.js#L1720-L1721)

```diff
-   },
-   4783: () => {}
+   }
+ }, 6298: (kk, ek, ik) => {
+   ik.d(ek, {
+     b: () => fk
+   });
+   const Dk = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
+     granularity: "grapheme"
+   }) : null;
+ 
+   function fk(kk) {
+     return null === Dk ? Array.from(kk) : Array.from(Dk.segment(kk), (kk => {
+       let {
+         segment: ek
+       } = kk;
+       return ek
+     }))
+ ... (73 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/105.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/105.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8)

#### 1. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L4)

```diff
-   36013: (QQ, FQ, wQ) => {
+   4869: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L6)

```diff
-       c: () => vQ
+       d: () => Kk,
+       f: () => Mk,
+       i: () => xk
```

#### 3. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L8` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L10-L12) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L8)

```diff
-     var LQ = wQ(1070),
+     ik(4872);
+     var Dk = ik(1172),
+       fk = ik(1021),
```

#### 4. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L10-L12` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L14-L17) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L10-L12)

```diff
-       oQ = wQ(53),
-       DQ = wQ(4426),
-       kQ = wQ(1107);
+       bk = ik(1345),
+       rk = (ik(60), ik(4319)),
+       Pk = ik(1033),
+       mk = ik(1066);
```

#### 5. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L16-L17` → after: `L21-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L21-L26) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L16-L17)

```diff
-         locked: FQ,
-         children: wQ
+         children: ek,
+         label: ik,
+         className: fk,
+         circleInfoText: rk,
+         disabled: Mk,
+         onLabelClick: Kk
```

#### 6. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L19-L25` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L28-L32) · [Before (L19-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L19-L25)

```diff
-       const LQ = (0, oQ.useRef)(null),
-         vQ = (0, DQ.b)(LQ, "y");
-       return (0, kQ.jsx)("div", {
-         ref: LQ,
-         className: qQ()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: vQ.before,
-           CreateCustomLobbyBodyMoreBelow: vQ.after
+       const {
+         t: xk
+       } = (0, Dk.D)(), nk = (0, mk.jsxs)("div", {
+         className: Sk()("Label", {
+           ClickableLabel: void 0 !== Kk
```

#### 7. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L27-L28` → after: `L34-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L34-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L34-L50) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L27-L28)

```diff
-         "data-pad-ignore": FQ || void 0,
-         children: wQ
+         onClick: Kk,
+         children: [xk(ik), rk && (0, mk.jsx)(Pk.d, {
+           name: "circle-info"
+         })]
+       });
+       return (0, mk.jsxs)("div", {
+         className: Sk()("LabeledInput", {
+           [fk]: fk,
+           DisabledLabelInput: Mk
+         }),
+         children: [rk && (0, mk.jsx)(bk.i, {
+           tooltipInner: (0, mk.jsx)("div", {
+             className: "LabeledInputTooltip",
+             children: xk(rk)
+           }),
+           children: nk
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L51-L64` → after: `L55-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L55-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L55-L71) · [Before (L51-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L51-L64)

```diff
-       const FQ = {
-         requested: !1,
-         closed: !1
-       };
-       kQ.NotificationProvider.showCustomPopup({
-         body: wQ => (0, xQ.jsx)(tQ, {
-           flow: FQ,
-           close: wQ,
-           ...QQ
-         }),
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           FQ.closed = !0, FQ.requested || (0, YQ.g)()
-         }
+       let {
+         checked: ek,
+         setChecked: ik
+       } = kk;
+       return (0, mk.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         onClick: kk => {
+           ik(!ek)
+         },
+         children: (0, mk.jsx)(rk.d, {
+           checked: ek,
+           onChange: kk => {
+             ik(kk.target.checked)
+           },
+           disabled: !1
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L70-L75` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L77-L79) · [Before (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L70-L75)

```diff
-         flow: FQ,
-         close: wQ,
-         onCreating: kQ,
-         onCreated: AQ,
-         onFailedClosed: tQ,
-         join: eQ
+         checked: ek,
+         setChecked: ik,
+         disabled: Dk
```

#### 10. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L77-L166` → after: `L81-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L81-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L81-L95) · [Before (L77-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L77-L166)

```diff
-       const {
-         t: MQ
-       } = (0, DQ.y)(), [GQ, pQ] = (0, qQ.useState)(LQ.t), [cQ, CQ] = (0, qQ.useState)(!1), [SQ, iQ] = (0, qQ.useState)(""), WQ = (0, HQ.c)();
-       (0, qQ.useEffect)((() => {
-         (0, YQ.m)()
-       }), []);
-       const RQ = QQ => ({
-         isEnabled: () => GQ.plugins[QQ],
-         Qr: FQ => {
-           (0, YQ.h)({
-             plugin: QQ,
-             enabled: FQ
-           }), pQ({
-             ...GQ,
-             plugins: {
-               ...GQ.plugins,
- ... (74 more removed lines; see GitHub link above)
+       return (0, mk.jsx)("div", {
+         className: Sk()("SwitchContainer", {
+           SwitchContainerDisabled: Dk
+         }),
+         onClick: () => {
+           Dk || ik(!ek)
+         },
+         children: (0, mk.jsx)(rk.d, {
+           className: "SwitchCheckbox",
+           checked: ek,
+           onChange: kk => {
+             ik(kk.target.checked)
+           },
+           disabled: !!Dk
+         })
```

#### 11. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L170` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L99) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L170)

```diff
-   4787: (QQ, FQ, wQ) => {
+   4874: (kk, ek, ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L172` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L101) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L172)

```diff
-       c: () => mQ
+       e: () => mk
```

#### 13. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L174` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L103) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L174)

```diff
-     var LQ = wQ(1070),
+     var Dk = ik(1021),
```

#### 14. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L176-L179` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L105-L108) · [Before (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L176-L179)

```diff
-       oQ = wQ(4475),
-       DQ = wQ(1207),
-       kQ = wQ(1107);
-     const vQ = [...oQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+       Sk = ik(4563),
+       bk = ik(1172),
+       rk = ik(1066);
+     const Pk = [...Sk.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
```

#### 15. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L187` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L116) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L187)

```diff
-       } = (0, DQ.y)(), mQ = QQ.advancedMode ? vQ.map((FQ => [FQ, QQ.callbacks[FQ]])) : oQ.j.map((FQ => [FQ, QQ.callbacks[FQ]])), HQ = (0, kQ.jsx)("div", {
+       } = (0, bk.D)(), mk = kk.advancedMode ? Pk.map((ek => [ek, kk.callbacks[ek]])) : Sk.k.map((ek => [ek, kk.callbacks[ek]])), Kk = (0, rk.jsx)("div", {
```

#### 16. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L200` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L129) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L200)

```diff
-       return wQ ? HQ : (0, kQ.jsxs)("div", {
+       return ik ? Kk : (0, rk.jsxs)("div", {
```

#### 17. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L214` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L143) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L214)

```diff
-           Qr: LQ
+           bV: Dk
```

#### 18. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L220` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L149) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L220)

```diff
-       } = (0, DQ.y)(), mQ = wQ();
+       } = (0, bk.D)(), mk = ik();
```

#### 19. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L234` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L163) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L234)

```diff
-             src: `/textures/games/classic/customGames/${FQ}.png`,
+             src: `/textures/games/classic/customGames/${ek}.png`,
```

#### 20. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L271` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L200) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L271)

```diff
-   36007: (QQ, FQ, wQ) => {
+   4860: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L274` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L204-L205) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L274)

```diff
-       d: () => uQ
+       e: () => De,
+       l: () => be
```

#### 22. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L276-L280` → after: `L207-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L207-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L207-L214) · [Before (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L276-L280)

```diff
-     wQ(53);
-     var LQ = wQ(1070),
-       qQ = wQ.n(LQ),
-       oQ = wQ(4475),
-       DQ = wQ(307),
+     var Dk = ik(60),
+       fk = ik(1333),
+       Sk = ik(1410),
+       bk = ik(1648),
+       rk = ik(1172),
+       Pk = ik(1327),
+       mk = ik(1345),
+       Mk = ik(1033),
```

#### 23. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L282` → after: `L216-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L216-L224) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L282)

```diff
-       vQ = wQ(1107);
+       xk = ik(1021),
+       nk = ik.n(xk),
+       Uk = ik(302),
+       Hk = ik(4563),
+       wk = ik(1218),
+       lk = ik(4869),
+       pk = ik(3098),
+       yk = ik(4874),
+       Yk = ik(1066);
```

#### 24. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L286-L289` → after: `L228-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L228-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L228-L231) · [Before (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L286-L289)

```diff
-         value: FQ,
-         onChange: wQ,
-         showAll: LQ,
-         disabled: mQ = !1
+         icon: ek,
+         title: ik,
+         disabled: Dk,
+         children: fk
```

#### 25. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L295-L296` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L234-L235) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L295-L296)

```diff
-         className: qQ()("BloxdForm GamemodeForm", {
-           BasicOptions: !LQ
+         className: nk()("ManageCard", {
+           ManageCardDisabled: Dk
```

#### 26. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L299-L300` → after: `L268-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L268-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L268-L296) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L299-L300)

```diff
-           className: "SectionTitle",
-           children: uQ("classic:defaultGamemode")
+           className: "ManageStackedFieldLabel",
+           children: ek
+         }), Dk, ik && (0, Yk.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: ik
+         })]
+       })
+     }
+ 
+     function Ak(kk) {
+       let {
+         label: ek,
+         caption: ik,
+         disabled: Dk,
+         children: fk
+       } = kk;
+ ... (13 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L302-L307` → after: `L298-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L298-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L298-L477) · [Before (L302-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L302-L307)

```diff
-           className: "SectionBody",
-           children: oQ.C.map((QQ => LQ || (0, oQ.u)(QQ) ? (0, vQ.jsx)("button", {
-             type: "button",
-             className: qQ()("WorldGamemode", {
-               Selected: FQ === QQ
-             }),
+           className: "ManageFieldControl",
+           children: fk
+         })]
+       })
+     }
+ 
+     function jk(kk) {
+       var ek, ik;
+       let {
+         schematicData: Dk,
+         updateSchematicData: fk,
+         publishFormEnabled: Sk,
+         formEnabled: bk
+       } = kk;
+       const {
+         t: Pk
+ ... (164 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L309-L316` → after: `L479-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L479-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L479-L680) · [Before (L309-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L309-L316)

```diff
-             onClick: () => {
-               wQ(QQ)
-             },
-             style: {
-               "--background-image": `url(${DQ.s[QQ]})`
-             },
-             children: DQ.q[QQ]
-           }, QQ) : null))
+             advancedMode: !0,
+             hideWrapper: !0
+           })
+         })]
+       })
+     }
+     var sk = ik(4879),
+       dk = ik(4319),
+       Vk = ik(1459),
+       Fk = ik(3447),
+       uk = ik(1095),
+       qk = ik(4840),
+       Ik = ik(4888),
+       zk = ik(1415);
+     const Qk = 50,
+       vk = .3;
+ ... (186 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L323-L328` → after: `L688-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L688-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L688-L691) · [Before (L323-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L323-L328)

```diff
-         mapTypes: FQ,
-         value: wQ,
-         onChange: LQ,
-         showAll: mQ,
-         disabled: uQ = !1,
-         children: HQ
+         schematicId: ek,
+         ownedThumbnailCount: ik,
+         onClose: fk,
+         onThumbnailReady: Sk
```

#### 30. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L332` → after: `L695-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L695-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L695-L734) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L332)

```diff
-       } = (0, kQ.y)();
+       } = (0, rk.D)(), {
+         userContext: Pk
+       } = (0, uk.d)(), [mk, xk] = (0, Dk.useState)(!1), [Uk, Hk] = (0, Dk.useState)(!1), [wk, lk] = (0, Dk.useState)(!1), pk = (0, Dk.useRef)();
+       (0, Dk.useEffect)((() => () => {
+         clearTimeout(pk.current)
+       }), []);
+       const yk = function(kk, ek) {
+         const ik = [];
+         return kk.isLoggedIn() || ik.push(Wk.NOT_LOGGED_IN), ek >= Kk.W && ik.push(Wk.THUMBNAIL_LIMIT_REACHED), ik
+       }(Pk, ik);
+       if (yk.length > 0) {
+         const kk = {
+           [Wk.NOT_LOGGED_IN]: {
+             key: "thumbnail:mustBeLoggedInToUpload"
+           },
+           [Wk.THUMBNAIL_LIMIT_REACHED]: {
+ ... (24 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L334-L335` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L736-L737) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L334-L335)

```diff
-         className: qQ()("BloxdForm MapTypeForm", {
-           BasicOptions: !mQ
+         className: nk()("ThumbnailUploaderInner", {
+           ThumbnailUploaderSuccess: mk
```

#### 32. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L337` → after: `L739-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L739-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L739-L965) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L337)

```diff
-         children: [(0, vQ.jsx)("div", {
+         children: [mk && (0, Yk.jsxs)("div", {
+           className: "ThumbnailUploadSuccessOverlay",
+           children: [(0, Yk.jsxs)("div", {
+             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
+             children: [(0, Yk.jsx)(Mk.d, {
+               name: "check"
+             }), (0, Yk.jsx)(zk.b, {})]
+           }), (0, Yk.jsx)("div", {
+             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
+             children: bk("thumbnail:thumbnailUploaded")
+           })]
+         }), (0, Yk.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: bk("thumbnail:uploadThumbnail")
+         }), (0, Yk.jsxs)("div", {
+           className: "ThumbnailUploaderBody",
+ ... (211 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L339` → after: `L967-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L967-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L967-L970) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L339)

```diff
-           children: bQ("customLobby:mapType")
+           children: [Uk("thumbnail:gameThumbnail"), Ik && (0, Yk.jsx)("span", {
+             className: nk()("ThumbnailActionMsg", `ThumbnailActionMsg--${Ik.type}`),
+             children: Ik.text
+           })]
```

#### 34. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L342-L345` → after: `L973-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L973-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L973-L1259) · [Before (L342-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L342-L345)

```diff
-           children: FQ.map((QQ => mQ || (0, oQ.w)(QQ) ? (0, vQ.jsx)("button", {
-             type: "button",
-             className: qQ()("MapType", {
-               Selected: wQ === QQ
+           children: (0, Yk.jsxs)("div", {
+             className: "ThumbnailGrid",
+             children: [(0, Yk.jsxs)("div", {
+               className: nk()("ThumbnailGridItem ThumbnailGridItemDefault", {
+                 ThumbnailGridItemSelected: null === sk
+               }),
+               onClick: () => Gk(null),
+               children: [(0, Yk.jsx)(qk.e, {
+                 game: {
+                   schematicId: bk.schematicId,
+                   imageBlurhash: bk.imageBlurhash
+                 }
+               }), (0, Yk.jsx)("div", {
+                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
+                 children: Uk("general:default")
+               })]
+ ... (271 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L349-L352` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L1262) · [Before (L349-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L349-L352)

```diff
-               LQ(QQ)
-             },
-             style: {
-               "--background-image": `url(${DQ.k[QQ]})`
+               wk && (mk(null), ik(null), Kk(null))
```

#### 36. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L354-L356` → after: `L1264-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1264-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L1264-L1569) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L354-L356)

```diff
-             children: DQ.i[QQ]
-           }, QQ) : null))
-         }), HQ]
+             children: (0, Yk.jsx)("div", {
+               className: "TexturePackName",
+               children: "No Override"
+             })
+           }), Object.values(Gk.u).map((kk => (0, Yk.jsx)(Rk.c, {
+             id: kk,
+             isSelected: kk === Pk,
+             setSelected: pk,
+             disabled: !wk
+           }, kk)))]
+         }), Pk === Gk.u.CUSTOM && (0, Yk.jsx)(Jk.c, {
+           folderName: Mk,
+           onTexturePackUpdated: pk,
+           disabled: !wk,
+           maxFileSizeMb: 25,
+           packOwner: "customGame"
+ ... (290 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L360-L361` → after: `L1573-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L1573-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/105.js#L1573-L1721) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/105.js#L360-L361)

```diff
-   4783: () => {},
-   35995: () => {}
+   4915: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => fk
+     });
+     var Dk = ik(1177);
+     async function fk(kk) {
+       const ek = await fetch(`${Dk.clientSideServerUrls.s3Url}/${kk}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === ek.status || 403 === ek.status) return null;
+       if (!ek.ok) throw new Error(`Failed to download the texture pack (${ek.status})`);
+       return await ek.json()
+     }
+   },
+ ... (133 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/106.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/106.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e)

#### 1. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L4-L19)

```diff
-   4823: (QQ, FQ) => {
-     FQ.c = function(QQ, FQ) {
-       if (QQ && FQ) {
-         var wQ = Array.isArray(FQ) ? FQ : FQ.split(","),
-           LQ = QQ.name || "",
-           qQ = (QQ.type || "").toLowerCase(),
-           oQ = qQ.replace(/\/.*$/, "");
-         return wQ.some((function(QQ) {
-           var FQ = QQ.trim().toLowerCase();
-           return "." === FQ.charAt(0) ? LQ.toLowerCase().endsWith(FQ) : FQ.endsWith("/*") ? oQ === FQ.replace(/\/.*$/, "") : qQ === FQ
-         }))
-       }
-       return !0
-     }
-   },
-   4794: (QQ, FQ, wQ) => {
+   35917: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L23-L35` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L8-L12) · [Before (L23-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L23-L35)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(4799),
-       oQ = wQ.n(qQ);
- 
-     function DQ(QQ, FQ, wQ, LQ) {
-       return new(wQ || (wQ = Promise))((function(qQ, oQ) {
-         function DQ(QQ) {
-           try {
-             vQ(LQ.next(QQ))
-           } catch (FQ) {
-             oQ(FQ)
-           }
-         }
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(60),
+       bk = ik(4519),
+       rk = ik(1066);
```

#### 3. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L37-L52` → after: `L14-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L14-L29) · [Before (L37-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L37-L52)

```diff
-         function kQ(QQ) {
-           try {
-             vQ(LQ.throw(QQ))
-           } catch (FQ) {
-             oQ(FQ)
-           }
-         }
- 
-         function vQ(QQ) {
-           var FQ;
-           QQ.done ? qQ(QQ.value) : (FQ = QQ.value, FQ instanceof wQ ? FQ : new wQ((function(QQ) {
-             QQ(FQ)
-           }))).then(DQ, kQ)
-         }
-         vQ((LQ = LQ.apply(QQ, FQ || [])).next())
-       }))
+     function Pk(kk) {
+       let {
+         locked: ek,
+         children: ik
+       } = kk;
+       const Dk = (0, Sk.useRef)(null),
+         Pk = (0, bk.e)(Dk, "y");
+       return (0, rk.jsx)("div", {
+         ref: Dk,
+         className: fk()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: Pk.before,
+           CreateCustomLobbyBodyMoreBelow: Pk.after
+         }),
+         "data-pad-ignore": ek || void 0,
+         children: ik
+       })
```

#### 4. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L55-L63` → after: `L50-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L50-L53) · [Before (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L55-L63)

```diff
-     function kQ(QQ, FQ) {
-       var wQ, LQ, qQ, oQ, DQ = {
-         label: 0,
-         sent: function() {
-           if (1 & qQ[0]) throw qQ[1];
-           return qQ[1]
-         },
-         trys: [],
-         ops: []
+     function Hk(kk) {
+       const ek = {
+         requested: !1,
+         closed: !1
```

#### 5. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L65-L148` → after: `L55-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L55-L63) · [Before (L65-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L65-L148)

```diff
-       return oQ = {
-         next: kQ(0),
-         throw: kQ(1),
-         return: kQ(2)
-       }, "function" === typeof Symbol && (oQ[Symbol.iterator] = function() {
-         return this
-       }), oQ;
- 
-       function kQ(kQ) {
-         return function(vQ) {
-           return function(kQ) {
-             if (wQ) throw new TypeError("Generator is already executing.");
-             for (; oQ && (oQ = 0, kQ[0] && (DQ = 0)), DQ;) try {
-               if (wQ = 1, LQ && (qQ = 2 & kQ[0] ? LQ.return : kQ[0] ? LQ.throw || ((qQ = LQ.return) && qQ.call(LQ), 0) : LQ.next) && !(qQ = qQ.call(LQ, kQ[1])).done) return qQ;
-               switch (LQ = 0, qQ && (kQ = [2 & kQ[0], qQ.value]), kQ[0]) {
-                 case 0:
- ... (68 more removed lines; see GitHub link above)
+       rk.NotificationProvider.showCustomPopup({
+         body: ik => (0, Uk.jsx)(wk, {
+           flow: ek,
+           close: ik,
+           ...kk
+         }),
+         middleScreenPopupClassName: "CreateCustomLobbyPopup",
+         onClose: () => {
+           ek.closed = !0, ek.requested || (0, nk.f)()
```

#### 6. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L150-L157` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L65) · [Before (L150-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L150-L157)

```diff
-       }
-       return DQ
-     }
- 
-     function mQ(QQ, FQ, wQ) {
-       if (wQ || 2 === arguments.length)
-         for (var LQ, qQ = 0, oQ = FQ.length; qQ < oQ; qQ++) !LQ && qQ in FQ || (LQ || (LQ = Array.prototype.slice.call(FQ, 0, qQ)), LQ[qQ] = FQ[qQ]);
-       return QQ.concat(LQ || Array.prototype.slice.call(FQ))
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L244-L254` → after: `L68-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L68-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L68-L94) · [Before (L244-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L244-L254)

```diff
-     function HQ(QQ, FQ) {
-       var wQ = function(QQ) {
-         var FQ = QQ.name;
-         if (FQ && -1 !== FQ.lastIndexOf(".") && !QQ.type) {
-           var wQ = FQ.split(".").pop().toLowerCase(),
-             LQ = uQ.get(wQ);
-           LQ && Object.defineProperty(QQ, "type", {
-             value: LQ,
-             writable: !1,
-             configurable: !1,
-             enumerable: !0
+     function wk(kk) {
+       let {
+         flow: ek,
+         close: ik,
+         onCreating: rk,
+         onCreated: Hk,
+         onFailedClosed: wk,
+         join: lk
+       } = kk;
+       const {
+         t: pk
+       } = (0, bk.D)(), [yk, Yk] = (0, fk.useState)(Dk.w), [Lk, Ck] = (0, fk.useState)(!1), [Ak, jk] = (0, fk.useState)(""), sk = (0, Kk.e)();
+       (0, fk.useEffect)((() => {
+         (0, nk.n)()
+       }), []);
+       const dk = kk => ({
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L257-L387` → after: `L97-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L97-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L97-L158) · [Before (L257-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L257-L387)

```diff
-         return QQ
-       }(QQ);
-       if ("string" !== typeof wQ.path) {
-         var LQ = QQ.webkitRelativePath;
-         Object.defineProperty(wQ, "path", {
-           value: "string" === typeof FQ ? FQ : "string" === typeof LQ && LQ.length > 0 ? LQ : QQ.name,
-           writable: !1,
-           configurable: !1,
-           enumerable: !0
-         })
-       }
-       return wQ
-     }
-     var bQ = [".DS_Store", "Thumbs.db"];
- 
-     function YQ(QQ) {
- ... (115 more removed lines; see GitHub link above)
+       });
+       return (0, Uk.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, Uk.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, Uk.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: pk("homePage:myWorld")
+           })
+         }), (0, Uk.jsx)(Pk.b, {
+           locked: Lk,
+           children: (0, Uk.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, Uk.jsx)(xk.b, {
+               value: yk.defaultGamemode,
+               onChange: kk => {
+ ... (46 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L389-L394` → after: `L160-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L160-L167) · [Before (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L389-L394)

```diff
-             }))
-           }), (function(QQ) {
-             wQ(QQ)
-           }))
-         }()
-       }))
+             },
+             children: pk("general:play")
+           }), Ak && (0, Uk.jsx)("div", {
+             className: "CreateCustomLobbyError AnimFadeInScaleUp",
+             children: Ak
+           })]
+         })]
+       })
```

#### 10. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L398-L407` → after: `L182-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L182-L197) · [Before (L398-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L398-L407)

```diff
-       return DQ(this, void 0, void 0, (function() {
-         return kQ(this, (function(FQ) {
-           return [2, new Promise((function(FQ, wQ) {
-             QQ.file((function(wQ) {
-               var LQ = HQ(wQ, QQ.fullPath);
-               FQ(LQ)
-             }), (function(QQ) {
-               wQ(QQ)
-             }))
-           }))]
+       const {
+         disabled: ek,
+         hideWrapper: ik
+       } = kk, {
+         t: Dk
+       } = (0, bk.D)(), mk = kk.advancedMode ? Pk.map((ek => [ek, kk.callbacks[ek]])) : Sk.k.map((ek => [ek, kk.callbacks[ek]])), Kk = (0, rk.jsx)("div", {
+         className: fk()("PluginsGrid", {
+           SectionBody: !ik
+         }),
+         children: mk.map((kk => {
+           let [ik, Dk] = kk;
+           return (0, rk.jsx)(Mk, {
+             plugin: ik,
+             callbacks: Dk,
+             disabled: ek
+           }, ik)
```

#### 11. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L409-L431` → after: `L199-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L199-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L199-L206) · [Before (L409-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L409-L431)

```diff
-       }))
-     }
-     var WQ = wQ(4823);
- 
-     function RQ(QQ) {
-       return function(QQ) {
-         if (Array.isArray(QQ)) return NQ(QQ)
-       }(QQ) || function(QQ) {
-         if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
-       }(QQ) || UQ(QQ) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function OQ(QQ, FQ) {
-       var wQ = Object.keys(QQ);
- ... (7 more removed lines; see GitHub link above)
+       });
+       return ik ? Kk : (0, rk.jsxs)("div", {
+         className: "BloxdForm",
+         children: [(0, rk.jsx)("div", {
+           className: "SectionTitle",
+           children: Dk("worldBuilder:pluginsSection")
+         }), Kk]
+       })
```

#### 12. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L435-L492` → after: `L210-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L210-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L210-L250) · [Before (L435-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L435-L492)

```diff
-       for (var FQ = 1; FQ < arguments.length; FQ++) {
-         var wQ = null != arguments[FQ] ? arguments[FQ] : {};
-         FQ % 2 ? OQ(Object(wQ), !0).forEach((function(FQ) {
-           rQ(QQ, FQ, wQ[FQ])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : OQ(Object(wQ)).forEach((function(FQ) {
-           Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
-         }))
-       }
-       return QQ
-     }
- 
-     function rQ(QQ, FQ, wQ) {
-       return FQ in QQ ? Object.defineProperty(QQ, FQ, {
-         value: wQ,
-         enumerable: !0,
-         configurable: !0,
- ... (42 more removed lines; see GitHub link above)
+       let {
+         plugin: ek,
+         callbacks: {
+           isEnabled: ik,
+           bV: Dk
+         },
+         disabled: Sk
+       } = kk;
+       const {
+         t: Pk
+       } = (0, bk.D)(), mk = ik();
+       return (0, rk.jsxs)("div", {
+         className: fk()("PluginCard", {
+           PluginCardEnabled: mk,
+           PluginCardDisabledForm: Sk
+         }),
+ ... (25 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L494-L516` → after: `L252-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L252-L259) · [Before (L494-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L494-L516)

```diff
-     var TQ = "file-invalid-type",
-       KQ = "file-too-large",
-       zQ = "file-too-small",
-       lQ = "too-many-files",
-       jQ = function(QQ) {
-         QQ = Array.isArray(QQ) && 1 === QQ.length ? QQ[0] : QQ;
-         var FQ = Array.isArray(QQ) ? "one of ".concat(QQ.join(", ")) : QQ;
-         return {
-           code: TQ,
-           message: "File type must be ".concat(FQ)
-         }
-       },
-       aQ = function(QQ) {
-         return {
-           code: KQ,
-           message: "File is larger than ".concat(QQ, " ").concat(1 === QQ ? "byte" : "bytes")
- ... (7 more removed lines; see GitHub link above)
+     const Kk = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
```

#### 14. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L519-L563` → after: `L262-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L262-L268) · [Before (L519-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L519-L563)

```diff
-         code: lQ,
-         message: "Too many files"
-       };
- 
-     function VQ(QQ, FQ) {
-       var wQ = "application/x-moz-file" === QQ.type || (0, WQ.c)(QQ, FQ);
-       return [wQ, wQ ? null : jQ(FQ)]
-     }
- 
-     function hQ(QQ, FQ, wQ) {
-       if (JQ(QQ.size))
-         if (JQ(FQ) && JQ(wQ)) {
-           if (QQ.size > wQ) return [!1, aQ(wQ)];
-           if (QQ.size < FQ) return [!1, XQ(FQ)]
-         } else {
-           if (JQ(FQ) && QQ.size < FQ) return [!1, XQ(FQ)];
- ... (29 more removed lines; see GitHub link above)
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 15. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L565-L577` → after: `L270-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L270-L282) · [Before (L565-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L565-L577)

```diff
-     }
- 
-     function ZQ(QQ) {
-       return "audio/*" === QQ || "video/*" === QQ || "image/*" === QQ || "text/*" === QQ || /\w+\/[-+.\w]+/g.test(QQ)
-     }
- 
-     function yQ(QQ) {
-       return /^.*\.[\w]+$/.test(QQ)
-     }
-     var BQ = ["children"],
-       dQ = ["open"],
-       QF = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
-       FF = ["refKey", "onChange", "onClick"];
+   },
+   35913: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => mk,
+       d: () => Mk
+     });
+     ik(60);
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(4563),
+       bk = ik(302),
+       rk = ik(1172),
+       Pk = ik(1066);
```

#### 16. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L580-L637` → after: `L285-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L285-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L285-L318) · [Before (L580-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L580-L637)

```diff
-       return function(QQ) {
-         if (Array.isArray(QQ)) return oF(QQ)
-       }(QQ) || function(QQ) {
-         if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
-       }(QQ) || qF(QQ) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function LF(QQ, FQ) {
-       return function(QQ) {
-         if (Array.isArray(QQ)) return QQ
-       }(QQ) || function(QQ, FQ) {
-         var wQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
-         if (null == wQ) return;
-         var LQ, qQ, oQ = [],
- ... (42 more removed lines; see GitHub link above)
+       let {
+         value: ek,
+         onChange: ik,
+         showAll: Dk,
+         disabled: mk = !1
+       } = kk;
+       const {
+         t: Mk
+       } = (0, rk.D)();
+       return (0, Pk.jsxs)("div", {
+         className: fk()("BloxdForm GamemodeForm", {
+           BasicOptions: !Dk
+         }),
+         children: [(0, Pk.jsx)("div", {
+           className: "SectionTitle",
+           children: Mk("classic:defaultGamemode")
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L641-L653` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L322-L323) · [Before (L641-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L641-L653)

```diff
-       for (var FQ = 1; FQ < arguments.length; FQ++) {
-         var wQ = null != arguments[FQ] ? arguments[FQ] : {};
-         FQ % 2 ? DF(Object(wQ), !0).forEach((function(FQ) {
-           vF(QQ, FQ, wQ[FQ])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : DF(Object(wQ)).forEach((function(FQ) {
-           Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
-         }))
-       }
-       return QQ
-     }
- 
-     function vF(QQ, FQ, wQ) {
-       return FQ in QQ ? Object.defineProperty(QQ, FQ, {
+       let {
+         mapTypes: ek,
```

#### 18. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L655-L1075` → after: `L325-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L325-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L325-L356) · [Before (L655-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L655-L1075)

```diff
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : QQ[FQ] = wQ, QQ
-     }
- 
-     function mF(QQ, FQ) {
-       if (null == QQ) return {};
-       var wQ, LQ, qQ = function(QQ, FQ) {
-         if (null == QQ) return {};
-         var wQ, LQ, qQ = {},
-           oQ = Object.keys(QQ);
-         for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || (qQ[wQ] = QQ[wQ]);
-         return qQ
-       }(QQ, FQ);
-       if (Object.getOwnPropertySymbols) {
- ... (405 more removed lines; see GitHub link above)
+         onChange: Dk,
+         showAll: mk,
+         disabled: Mk = !1,
+         children: Kk
+       } = kk;
+       const {
+         t: xk
+       } = (0, rk.D)();
+       return (0, Pk.jsxs)("div", {
+         className: fk()("BloxdForm MapTypeForm", {
+           BasicOptions: !mk
+         }),
+         children: [(0, Pk.jsx)("div", {
+           className: "SectionTitle",
+           children: xk("customLobby:mapType")
+         }), (0, Pk.jsx)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L1078-L1116` → after: `L359-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/106.js#L359-L361) · [Before (L1078-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/106.js#L1078-L1116)

```diff
- 
-     function xF(QQ, FQ) {
-       switch (FQ.type) {
-         case "focus":
-           return kF(kF({}, QQ), {}, {
-             hU: !0
-           });
-         case "blur":
-           return kF(kF({}, QQ), {}, {
-             hU: !1
-           });
-         case "openDialog":
-           return kF(kF({}, bF), {}, {
-             isFileDialogActive: !0
-           });
-         case "closeDialog":
- ... (23 more removed lines; see GitHub link above)
+   },
+   4872: () => {},
+   35905: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 1. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4-L48` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L4-L14) · [Before (L4-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L4-L48)

```diff
-   4851: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return LQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, LQ(QQ)
-     }
-     Object.defineProperty(FQ, "__esModule", {
-       value: !0
-     }), FQ.default = void 0;
-     var qQ = HQ(wQ(1070)),
-       oQ = function(QQ, FQ) {
-         if (!FQ && QQ && QQ.__esModule) return QQ;
-         if (null === QQ || "object" !== LQ(QQ) && "function" !== typeof QQ) return {
-           default: QQ
- ... (29 more removed lines; see GitHub link above)
+   4912: (kk, ek) => {
+     ek.c = function(kk, ek) {
+       if (kk && ek) {
+         var ik = Array.isArray(ek) ? ek : ek.split(","),
+           Dk = kk.name || "",
+           fk = (kk.type || "").toLowerCase(),
+           Sk = fk.replace(/\/.*$/, "");
+         return ik.some((function(kk) {
+           var ek = kk.trim().toLowerCase();
+           return "." === ek.charAt(0) ? Dk.toLowerCase().endsWith(ek) : ek.endsWith("/*") ? Sk === ek.replace(/\/.*$/, "") : fk === ek
+         }))
```

#### 2. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L52-L79` → after: `L27-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L27-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L27-L33) · [Before (L52-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L52-L79)

```diff
-     function bQ(QQ, FQ) {
-       var wQ = "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
-       if (!wQ) {
-         if (Array.isArray(QQ) || (wQ = function(QQ, FQ) {
-             if (!QQ) return;
-             if ("string" === typeof QQ) return YQ(QQ, FQ);
-             var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
-             "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
-             if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
-             if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return YQ(QQ, FQ)
-           }(QQ)) || FQ && QQ && "number" === typeof QQ.length) {
-           wQ && (QQ = wQ);
-           var LQ = 0,
-             qQ = function() {};
-           return {
-             s: qQ,
- ... (12 more removed lines; see GitHub link above)
+     function bk(kk, ek, ik, Dk) {
+       return new(ik || (ik = Promise))((function(fk, Sk) {
+         function bk(kk) {
+           try {
+             Pk(Dk.next(kk))
+           } catch (ek) {
+             Sk(ek)
```

#### 3. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L82-L97` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L36-L37) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L82-L97)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var oQ, DQ = !0,
-         kQ = !1;
-       return {
-         s: function() {
-           wQ = wQ.call(QQ)
-         },
-         n: function() {
-           var QQ = wQ.next();
-           return DQ = QQ.done, QQ
-         },
-         e: function(QQ) {
-           kQ = !0, oQ = QQ
-         },
-         f: function() {
+ 
+         function rk(kk) {
```

#### 4. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L99-L101` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L39-L41) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L99-L101)

```diff
-             DQ || null == wQ.return || wQ.return()
-           } finally {
-             if (kQ) throw oQ
+             Pk(Dk.throw(kk))
+           } catch (ek) {
+             Sk(ek)
```

#### 5. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L108-L109` → after: `L133-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L133-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L133-L150) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L108-L109)

```diff
-       (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
-       for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
+       var ik = "function" === typeof Symbol && kk[Symbol.iterator];
+       if (!ik) return kk;
+       var Dk, fk, Sk = ik.call(kk),
+         bk = [];
+       try {
+         for (;
+           (void 0 === ek || ek-- > 0) && !(Dk = Sk.next()).done;) bk.push(Dk.value)
+       } catch (rk) {
+         fk = {
+           error: rk
+         }
+       } finally {
+         try {
+           Dk && !Dk.done && (ik = Sk.return) && ik.call(Sk)
+         } finally {
+           if (fk) throw fk.error
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L114-L116` → after: `L245-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L245-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L245-L266) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L114-L116)

```diff
-       for (var wQ = 0; wQ < FQ.length; wQ++) {
-         var LQ = FQ[wQ];
-         LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, LQ.key, LQ)
+       var ik = function(kk) {
+         var ek = kk.name;
+         if (ek && -1 !== ek.lastIndexOf(".") && !kk.type) {
+           var ik = ek.split(".").pop().toLowerCase(),
+             Dk = Mk.get(ik);
+           Dk && Object.defineProperty(kk, "type", {
+             value: Dk,
+             writable: !1,
+             configurable: !1,
+             enumerable: !0
+           })
+         }
+         return kk
+       }(kk);
+       if ("string" !== typeof ik.path) {
+         var Dk = kk.webkitRelativePath;
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L121-L123` → after: `L300-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L300-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L300-L316) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L121-L123)

```diff
-       return AQ = Object.setPrototypeOf || function(QQ, FQ) {
-         return QQ.__proto__ = FQ, QQ
-       }, AQ(QQ, FQ)
+       return bk(this, void 0, void 0, (function() {
+         var ik;
+         return rk(this, (function(Dk) {
+           switch (Dk.label) {
+             case 0:
+               return kk.items ? (ik = pk(kk.items).filter((function(kk) {
+                 return "file" === kk.kind
+               })), "drop" !== ek ? [2, ik] : [4, Promise.all(ik.map(yk))]) : [3, 2];
+             case 1:
+               return [2, lk(Yk(Dk.sent()))];
+             case 2:
+               return [2, lk(pk(kk.files).map((function(kk) {
+                 return Kk(kk)
+               })))]
+           }
+         }))
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L127-L147` → after: `L320-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L320-L329) · [Before (L127-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L127-L147)

```diff
-       var FQ = function() {
-         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
-         if (Reflect.construct.sham) return !1;
-         if ("function" === typeof Proxy) return !0;
-         try {
-           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
-         } catch (QQ) {
-           return !1
-         }
-       }();
-       return function() {
-         var wQ, qQ = MQ(QQ);
-         if (FQ) {
-           var oQ = MQ(this).constructor;
-           wQ = Reflect.construct(qQ, arguments, oQ)
-         } else wQ = qQ.apply(this, arguments);
- ... (5 more removed lines; see GitHub link above)
+       return kk.filter((function(kk) {
+         return -1 === xk.indexOf(kk.name)
+       }))
+     }
+ 
+     function pk(kk) {
+       if (null === kk) return [];
+       for (var ek = [], ik = 0; ik < kk.length; ik++) {
+         var Dk = kk[ik];
+         ek.push(Dk)
```

#### 9. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L152` → after: `L341-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L341-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L341-L430) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L152)

```diff
-       if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return kk.reduce((function(kk, ek) {
+         return mk(mk([], Pk(kk), !1), Pk(Array.isArray(ek) ? Yk(ek) : [ek]), !1)
+       }), [])
+     }
+ 
+     function Lk(kk) {
+       var ek = kk.getAsFile();
+       if (!ek) return Promise.reject("".concat(kk, " is not a File"));
+       var ik = Kk(ek);
+       return Promise.resolve(ik)
+     }
+ 
+     function Ck(kk) {
+       return bk(this, void 0, void 0, (function() {
+         return rk(this, (function(ek) {
+           return [2, kk.isDirectory ? Ak(kk) : jk(kk)]
+ ... (74 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L157-L159` → after: `L435-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L435-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L435-L443) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L157-L159)

```diff
-       return MQ = Object.setPrototypeOf ? Object.getPrototypeOf : function(QQ) {
-         return QQ.__proto__ || Object.getPrototypeOf(QQ)
-       }, MQ(QQ)
+       for (var ek = 1; ek < arguments.length; ek++) {
+         var ik = null != arguments[ek] ? arguments[ek] : {};
+         ek % 2 ? Vk(Object(ik), !0).forEach((function(ek) {
+           uk(kk, ek, ik[ek])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : Vk(Object(ik)).forEach((function(ek) {
+           Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
+         }))
+       }
+       return kk
```

#### 11. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L202-L417` → after: `L455-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L455-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L455-L472) · [Before (L202-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L202-L417)

```diff
-         function DQ(QQ, FQ) {
-           var wQ;
-           return function(QQ, FQ) {
-             if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
-           }(this, DQ), GQ(eQ(wQ = oQ.call(this, QQ, FQ)), "handleFormat", (function(QQ) {
-             var FQ = wQ.props.format;
-             return FQ ? FQ(QQ) : QQ
-           })), GQ(eQ(wQ), "handleUpdate", (function() {
-             if (wQ.slider) {
-               var QQ = wQ.props.orientation,
-                 FQ = (0, vQ.capitalize)(pQ.orientation[QQ].dimension),
-                 LQ = wQ.slider["offset".concat(FQ)],
-                 qQ = wQ.handle["offset".concat(FQ)];
-               wQ.setState({
-                 limit: LQ - qQ,
-                 grab: qQ / 2
- ... (200 more removed lines; see GitHub link above)
+     function qk(kk, ek) {
+       return function(kk) {
+         if (Array.isArray(kk)) return kk
+       }(kk) || function(kk, ek) {
+         var ik = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
+         if (null == ik) return;
+         var Dk, fk, Sk = [],
+           bk = !0,
+           rk = !1;
+         try {
+           for (ik = ik.call(kk); !(bk = (Dk = ik.next()).done) && (Sk.push(Dk.value), !ek || Sk.length !== ek); bk = !0);
+         } catch (Pk) {
+           rk = !0, fk = Pk
+         } finally {
+           try {
+             bk || null == ik.return || ik.return()
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L484-L509` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L476-L478) · [Before (L484-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L484-L509)

```diff
-       }
-       QQ.isRequired = QQ;
-       var wQ = {
-         array: QQ,
-         bigint: QQ,
-         bool: QQ,
-         func: QQ,
-         number: QQ,
-         object: QQ,
-         string: QQ,
-         symbol: QQ,
-         any: QQ,
-         arrayOf: FQ,
-         element: QQ,
-         elementType: QQ,
-         instanceOf: FQ,
- ... (10 more removed lines; see GitHub link above)
+       }(kk, ek) || Ik(kk, ek) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 13. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L585-L587` → after: `L481-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L481-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L481-L487) · [Before (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L585-L587)

```diff
-             function kQ() {
-               DQ(oQ)
-             }
+     function Ik(kk, ek) {
+       if (kk) {
+         if ("string" === typeof kk) return zk(kk, ek);
+         var ik = Object.prototype.toString.call(kk).slice(8, -1);
+         return "Object" === ik && kk.constructor && (ik = kk.constructor.name), "Map" === ik || "Set" === ik ? Array.from(kk) : "Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik) ? zk(kk, ek) : void 0
+       }
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L589-L598` → after: `L489-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L489-L503) · [Before (L589-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L589-L598)

```diff
-             function vQ() {
-               var QQ = Date.now();
-               if (wQ) {
-                 if (QQ - qQ < 2) return;
-                 LQ = !0
-               } else wQ = !0, LQ = !1, setTimeout(kQ, FQ);
-               qQ = QQ
-             }
-             return vQ
-           }(this.refresh.bind(this), 20)
+     function zk(kk, ek) {
+       (null == ek || ek > kk.length) && (ek = kk.length);
+       for (var ik = 0, Dk = new Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
+       return Dk
+     }
+     var Qk = "file-invalid-type",
+       vk = "file-too-large",
+       Ek = "file-too-small",
+       hk = "too-many-files",
+       ak = function(kk) {
+         kk = Array.isArray(kk) && 1 === kk.length ? kk[0] : kk;
+         var ek = Array.isArray(kk) ? "one of ".concat(kk.join(", ")) : kk;
+         return {
+           code: Qk,
+           message: "File type must be ".concat(ek)
```

#### 15. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L600-L642` → after: `L505-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L505-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L505-L509) · [Before (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L600-L642)

```diff
-         return QQ.prototype.addObserver = function(QQ) {
-           ~this.observers_.indexOf(QQ) || this.observers_.push(QQ), this.connected_ || this.connect_()
-         }, QQ.prototype.removeObserver = function(QQ) {
-           var FQ = this.observers_,
-             wQ = FQ.indexOf(QQ);
-           ~wQ && FQ.splice(wQ, 1), !FQ.length && this.connected_ && this.disconnect_()
-         }, QQ.prototype.refresh = function() {
-           this.updateObservers_() && this.refresh()
-         }, QQ.prototype.updateObservers_ = function() {
-           var QQ = this.observers_.filter((function(QQ) {
-             return QQ.gatherActive(), QQ.hasActive()
-           }));
-           return QQ.forEach((function(QQ) {
-             return QQ.broadcastActive()
-           })), QQ.length > 0
-         }, QQ.prototype.connect_ = function() {
- ... (27 more removed lines; see GitHub link above)
+       },
+       Wk = function(kk) {
+         return {
+           code: vk,
+           message: "File is larger than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
```

#### 16. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L647` → after: `L513-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L513-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L513-L516) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L647)

```diff
-         return QQ && QQ.ownerDocument && QQ.ownerDocument.defaultView || oQ
+         return {
+           code: Ek,
+           message: "File is smaller than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
+         }
```

#### 17. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L649` → after: `L518-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L518-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L518-L537) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L649)

```diff
-       bQ = MQ(0, 0, 0, 0);
+       Xk = {
+         code: hk,
+         message: "Too many files"
+       };
+ 
+     function Bk(kk, ek) {
+       var ik = "application/x-moz-file" === kk.type || (0, sk.c)(kk, ek);
+       return [ik, ik ? null : ak(ek)]
+     }
+ 
+     function ck(kk, ek, ik) {
+       if (Tk(kk.size))
+         if (Tk(ek) && Tk(ik)) {
+           if (kk.size > ik) return [!1, Wk(ik)];
+           if (kk.size < ek) return [!1, tk(ek)]
+         } else {
+ ... (4 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L652` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L540) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L652)

```diff
-       return parseFloat(QQ) || 0
+       return void 0 !== kk && null !== kk
```

#### 19. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L656-L659` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L544) · [Before (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L656-L659)

```diff
-       for (var FQ = [], wQ = 1; wQ < arguments.length; wQ++) FQ[wQ - 1] = arguments[wQ];
-       return FQ.reduce((function(FQ, wQ) {
-         return FQ + YQ(QQ["border-" + wQ + "-width"])
-       }), 0)
+       return "function" === typeof kk.isPropagationStopped ? kk.isPropagationStopped() : "undefined" !== typeof kk.cancelBubble && kk.cancelBubble
```

#### 20. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L663-L671` → after: `L548-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L548-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L548-L606) · [Before (L663-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L663-L671)

```diff
-       var FQ = QQ.clientWidth,
-         wQ = QQ.clientHeight;
-       if (!FQ && !wQ) return bQ;
-       var LQ = HQ(QQ).getComputedStyle(QQ),
-         qQ = function(QQ) {
-           for (var FQ = {}, wQ = 0, LQ = ["top", "right", "bottom", "left"]; wQ < LQ.length; wQ++) {
-             var qQ = LQ[wQ],
-               oQ = QQ["padding-" + qQ];
-             FQ[qQ] = YQ(oQ)
+       return kk.dataTransfer ? Array.prototype.some.call(kk.dataTransfer.types, (function(kk) {
+         return "Files" === kk || "application/x-moz-file" === kk
+       })) : !!kk.target && !!kk.target.files
+     }
+ 
+     function gk(kk) {
+       kk.preventDefault()
+     }
+ 
+     function Gk() {
+       for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+       return function(kk) {
+         for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
+         return ek.some((function(ek) {
+           return !Zk(kk) && ek && ek.apply(void 0, [kk].concat(Dk)), Zk(kk)
+         }))
+ ... (43 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L673-L684` → after: `L608-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L608-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L608-L619) · [Before (L673-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L673-L684)

```diff
-           return FQ
-         }(LQ),
-         oQ = qQ.left + qQ.right,
-         DQ = qQ.top + qQ.bottom,
-         kQ = YQ(LQ.width),
-         vQ = YQ(LQ.height);
-       if ("border-box" === LQ.boxSizing && (Math.round(kQ + oQ) !== FQ && (kQ -= xQ(LQ, "left", "right") + oQ), Math.round(vQ + DQ) !== wQ && (vQ -= xQ(LQ, "top", "bottom") + DQ)), ! function(QQ) {
-           return QQ === HQ(QQ).document.documentElement
-         }(QQ)) {
-         var mQ = Math.round(kQ + oQ) - FQ,
-           uQ = Math.round(vQ + DQ) - wQ;
-         1 !== Math.abs(mQ) && (kQ -= mQ), 1 !== Math.abs(uQ) && (vQ -= uQ)
+         }
+         return Sk
+       }(kk, ek) || Se(kk, ek) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function Se(kk, ek) {
+       if (kk) {
+         if ("string" === typeof kk) return be(kk, ek);
+         var ik = Object.prototype.toString.call(kk).slice(8, -1);
+         return "Object" === ik && kk.constructor && (ik = kk.constructor.name), "Map" === ik || "Set" === ik ? Array.from(kk) : "Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik) ? be(kk, ek) : void 0
```

#### 22. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L688-L692` → after: `L622-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L622-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L622-L638) · [Before (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L688-L692)

```diff
-     var tQ = "undefined" !== typeof SVGGraphicsElement ? function(QQ) {
-       return QQ instanceof HQ(QQ).SVGGraphicsElement
-     } : function(QQ) {
-       return QQ instanceof HQ(QQ).SVGElement && "function" === typeof QQ.getBBox
-     };
+ 
+     function be(kk, ek) {
+       (null == ek || ek > kk.length) && (ek = kk.length);
+       for (var ik = 0, Dk = new Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
+       return Dk
+     }
+ 
+     function re(kk, ek) {
+       var ik = Object.keys(kk);
+       if (Object.getOwnPropertySymbols) {
+         var Dk = Object.getOwnPropertySymbols(kk);
+         ek && (Dk = Dk.filter((function(ek) {
+           return Object.getOwnPropertyDescriptor(kk, ek).enumerable
+         }))), ik.push.apply(ik, Dk)
+       }
+       return ik
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L695-L698` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L641-L649) · [Before (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L695-L698)

```diff
-       return qQ ? tQ(QQ) ? function(QQ) {
-         var FQ = QQ.getBBox();
-         return MQ(0, 0, FQ.width, FQ.height)
-       }(QQ) : AQ(QQ) : bQ
+       for (var ek = 1; ek < arguments.length; ek++) {
+         var ik = null != arguments[ek] ? arguments[ek] : {};
+         ek % 2 ? re(Object(ik), !0).forEach((function(ek) {
+           me(kk, ek, ik[ek])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : re(Object(ik)).forEach((function(ek) {
+           Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
+         }))
+       }
+       return kk
```

#### 24. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L701-L706` → after: `L652-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L652-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L652-L672) · [Before (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L701-L706)

```diff
-     function MQ(QQ, FQ, wQ, LQ) {
-       return {
-         x: QQ,
-         y: FQ,
-         width: wQ,
-         height: LQ
+     function me(kk, ek, ik) {
+       return ek in kk ? Object.defineProperty(kk, ek, {
+         value: ik,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : kk[ek] = ik, kk
+     }
+ 
+     function Me(kk, ek) {
+       if (null == kk) return {};
+       var ik, Dk, fk = function(kk, ek) {
+         if (null == kk) return {};
+         var ik, Dk, fk = {},
+           Sk = Object.keys(kk);
+         for (Dk = 0; Dk < Sk.length; Dk++) ik = Sk[Dk], ek.indexOf(ik) >= 0 || (fk[ik] = kk[ik]);
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L709-L711` → after: `L676-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L676-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L676-L683) · [Before (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L709-L711)

```diff
-     var GQ = function() {
-         function QQ(QQ) {
-           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = MQ(0, 0, 0, 0), this.target = QQ
+     var Ke = (0, Dk.forwardRef)((function(kk, ek) {
+       var ik = kk.children,
+         fk = Ue(Me(kk, Jk)),
+         Sk = fk.open,
+         bk = Me(fk, ke);
+       return (0, Dk.useImperativeHandle)(ek, (function() {
+         return {
+           open: Sk
```

#### 26. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L713-L743` → after: `L685-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L685-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L685-L701) · [Before (L713-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L713-L743)

```diff
-         return QQ.prototype.isActive = function() {
-           var QQ = eQ(this.target);
-           return this.contentRect_ = QQ, QQ.width !== this.broadcastWidth || QQ.height !== this.broadcastHeight
-         }, QQ.prototype.broadcastRect = function() {
-           var QQ = this.contentRect_;
-           return this.broadcastWidth = QQ.width, this.broadcastHeight = QQ.height, QQ
-         }, QQ
-       }(),
-       pQ = function(QQ, FQ) {
-         var wQ = function(QQ) {
-           var FQ = QQ.x,
-             wQ = QQ.y,
-             LQ = QQ.width,
-             qQ = QQ.height,
-             oQ = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
-             DQ = Object.create(oQ.prototype);
- ... (15 more removed lines; see GitHub link above)
+       }), [Sk]), Dk.createElement(Dk.Fragment, null, ik(Pe(Pe({}, bk), {}, {
+         open: Sk
+       })))
+     }));
+     Ke.displayName = "Dropzone";
+     var xe = {
+       disabled: !1,
+       getFilesFromEvent: function(kk) {
+         return bk(this, void 0, void 0, (function() {
+           return rk(this, (function(ek) {
+             return nk(kk) && nk(kk.dataTransfer) ? [2, wk(kk.dataTransfer, kk.type)] : function(kk) {
+               return nk(kk) && nk(kk.target)
+             }(kk) ? [2, Uk(kk)] : Array.isArray(kk) && kk.every((function(kk) {
+               return "getFile" in kk && "function" === typeof kk.getFile
+             })) ? [2, Hk(kk)] : [2, []]
+           }))
+ ... (1 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L745-L755` → after: `L703-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L703-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L703-L835) · [Before (L745-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L745-L755)

```diff
-       cQ = function() {
-         function QQ(QQ, FQ, wQ) {
-           if (this.activeObservations_ = [], this.observations_ = new LQ, "function" !== typeof QQ) throw new TypeError("The callback provided as parameter 1 is not a function.");
-           this.callback_ = QQ, this.controller_ = FQ, this.callbackCtx_ = wQ
-         }
-         return QQ.prototype.observe = function(QQ) {
-           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-           if ("undefined" !== typeof Element && Element instanceof Object) {
-             if (!(QQ instanceof HQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
-             var FQ = this.observations_;
-             FQ.has(QQ) || (FQ.set(QQ, new GQ(QQ)), this.controller_.addObserver(this), this.controller_.refresh())
+       maxSize: 1 / 0,
+       minSize: 0,
+       multiple: !0,
+       maxFiles: 0,
+       preventDropOnDocument: !0,
+       noClick: !1,
+       noKeyboard: !1,
+       noDrag: !1,
+       noDragEventsBubbling: !1,
+       validator: null,
+       useFsAccessApi: !0,
+       autoFocus: !1
+     };
+     Ke.defaultProps = xe, Ke.propTypes = {
+       children: Sk().func,
+       accept: Sk().objectOf(Sk().arrayOf(Sk().string)),
+ ... (117 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L757-L762` → after: `L837-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L837-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L837-L845) · [Before (L757-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L757-L762)

```diff
-         }, QQ.prototype.unobserve = function(QQ) {
-           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-           if ("undefined" !== typeof Element && Element instanceof Object) {
-             if (!(QQ instanceof HQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
-             var FQ = this.observations_;
-             FQ.has(QQ) && (FQ.delete(QQ), FQ.size || this.controller_.removeObserver(this))
+       }), [hk, ke, vk, Se]);
+       var re = (0, Dk.useRef)([]),
+         Ke = function(kk) {
+           Ek.current && Ek.current.contains(kk.target) || (kk.preventDefault(), re.current = [])
+         };
+       (0, Dk.useEffect)((function() {
+         return Yk && (document.addEventListener("dragover", gk, !1), document.addEventListener("drop", Ke, !1)),
+           function() {
+             Yk && (document.removeEventListener("dragover", gk), document.removeEventListener("drop", Ke))
```

#### 29. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L764-L769` → after: `L847-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L847-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L847-L889) · [Before (L764-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L764-L769)

```diff
-         }, QQ.prototype.disconnect = function() {
-           this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
-         }, QQ.prototype.gatherActive = function() {
-           var QQ = this;
-           this.clearActive(), this.observations_.forEach((function(FQ) {
-             FQ.isActive() && QQ.activeObservations_.push(FQ)
+       }), [Ek, Yk]), (0, Dk.useEffect)((function() {
+         return !fk && yk && Ek.current && Ek.current.focus(),
+           function() {}
+       }), [Ek, yk, fk]);
+       var Ue = (0, Dk.useCallback)((function(kk) {
+           sk ? sk(kk) : console.error(kk)
+         }), [sk]),
+         le = (0, Dk.useCallback)((function(kk) {
+           kk.preventDefault(), kk.persist(), qe(kk), re.current = [].concat(De(re.current), [kk.target]), Ok(kk) && Promise.resolve(Sk(kk)).then((function(ek) {
+             if (!Zk(kk) || jk) {
+               var ik = ek.length,
+                 Dk = ik > 0 && function(kk) {
+                   var ek = kk.files,
+                     ik = kk.accept,
+                     Dk = kk.minSize,
+                     fk = kk.maxSize,
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L771-L777` → after: `L891-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L891-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L891-L1042) · [Before (L771-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L771-L777)

```diff
-         }, QQ.prototype.broadcastActive = function() {
-           if (this.hasActive()) {
-             var QQ = this.callbackCtx_,
-               FQ = this.activeObservations_.map((function(QQ) {
-                 return new pQ(QQ.target, QQ.broadcastRect())
-               }));
-             this.callback_.call(QQ, FQ, QQ), this.clearActive()
+         }), [Sk, Mk, Ue, jk, Ik, rk, bk, Pk, mk, Vk]),
+         pe = (0, Dk.useCallback)((function(kk) {
+           kk.preventDefault(), kk.persist(), qe(kk);
+           var ek = Ok(kk);
+           if (ek && kk.dataTransfer) try {
+             kk.dataTransfer.dropEffect = "copy"
+           } catch (ik) {}
+           return ek && xk && xk(kk), !1
+         }), [xk, jk]),
+         ye = (0, Dk.useCallback)((function(kk) {
+           kk.preventDefault(), kk.persist(), qe(kk);
+           var ek = re.current.filter((function(kk) {
+               return Ek.current && Ek.current.contains(kk)
+             })),
+             ik = ek.indexOf(kk.target); - 1 !== ik && ek.splice(ik, 1), re.current = ek, ek.length > 0 || (tk({
+             type: "setDraggedFiles",
+ ... (136 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L779-L796` → after: `L1044-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1044-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L1044-L1111) · [Before (L779-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L779-L796)

```diff
-         }, QQ.prototype.clearActive = function() {
-           this.activeObservations_.splice(0)
-         }, QQ.prototype.hasActive = function() {
-           return this.activeObservations_.length > 0
-         }, QQ
-       }(),
-       CQ = "undefined" !== typeof WeakMap ? new WeakMap : new LQ,
-       SQ = function QQ(FQ) {
-         if (!(this instanceof QQ)) throw new TypeError("Cannot call a class as a function.");
-         if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-         var wQ = mQ.getInstance(),
-           LQ = new cQ(FQ, wQ, this);
-         CQ.set(this, LQ)
-       };
-     ["observe", "unobserve", "disconnect"].forEach((function(QQ) {
-       SQ.prototype[QQ] = function() {
- ... (2 more removed lines; see GitHub link above)
+         }), [Ek, Ae, je, se, de, le, pe, ye, Le, Ck, Ak, fk]),
+         ze = (0, Dk.useCallback)((function(kk) {
+           kk.stopPropagation()
+         }), []),
+         Qe = (0, Dk.useMemo)((function() {
+           return function() {
+             var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+               ek = kk.refKey,
+               ik = void 0 === ek ? "ref" : ek,
+               Dk = kk.onChange,
+               fk = kk.onClick,
+               Sk = Me(kk, ie);
+             return Pe(Pe({}, me({
+               accept: Ik,
+               multiple: Pk,
+               type: "file",
+ ... (52 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L798-L799` → after: `L1113-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1113-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/107.js#L1113-L1115) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/107.js#L798-L799)

```diff
-     }));
-     const iQ = "undefined" !== typeof oQ.ResizeObserver ? oQ.ResizeObserver : SQ
+     }
+ 
+     function we() {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/108.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/108.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141)

#### 1. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L2)

```diff
- export const ids = [108, 125];
+ export const ids = [108];
```

#### 2. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L4-L5` → after: `L4-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L4-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L4-L469) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L4-L5)

```diff
-   4806: (QQ, FQ, wQ) => {
-     var LQ = wQ(4815);
+   4937: (kk, ek, ik) => {
+     function Dk(kk) {
+       return Dk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
+         return typeof kk
+       } : function(kk) {
+         return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
+       }, Dk(kk)
+     }
+     Object.defineProperty(ek, "__esModule", {
+       value: !0
+     }), ek.default = void 0;
+     var fk = Kk(ik(1021)),
+       Sk = function(kk, ek) {
+         if (!ek && kk && kk.__esModule) return kk;
+         if (null === kk || "object" !== Dk(kk) && "function" !== typeof kk) return {
+           default: kk
+ ... (450 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L48-L49` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L512-L513) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L48-L49)

```diff
-   4799: (QQ, FQ, wQ) => {
-     QQ.exports = wQ(4806)()
+   4893: (kk, ek, ik) => {
+     kk.exports = ik(4902)()
```

#### 4. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L51` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L515) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L51)

```diff
-   4815: QQ => {
+   4909: kk => {
```

#### 5. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L54` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L518) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L54)

```diff
-   6406: (QQ, FQ, wQ) => {
+   4939: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L56` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L520) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L56)

```diff
-       ShaderPackPublishForm: () => GQ
+       default: () => jk
```

#### 7. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L58-L106` → after: `L522-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L522-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L522-L529) · [Before (L58-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L58-L106)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(6374),
-       oQ = wQ(210),
-       DQ = wQ(6414),
-       kQ = wQ(1079),
-       vQ = wQ(1451),
-       mQ = wQ(1682),
-       uQ = wQ(1140),
-       HQ = wQ(6422),
-       bQ = wQ(6435),
-       YQ = wQ(1489),
-       xQ = wQ(1207),
-       AQ = wQ(6438),
-       tQ = wQ(6476),
-       eQ = wQ(6371),
-       MQ = wQ(1107);
- ... (33 more removed lines; see GitHub link above)
+     var Dk = function() {
+         if ("undefined" !== typeof Map) return Map;
+ 
+         function kk(kk, ek) {
+           var ik = -1;
+           return kk.some((function(kk, Dk) {
+             return kk[0] === ek && (ik = Dk, !0)
+           })), ik
```

#### 8. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L108-L123` → after: `L531-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L531-L533) · [Before (L108-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L108-L123)

```diff
-       })), gQ = !WQ && !iQ.isLoggedIn() && !oQ.d.offlineMode, PQ = IQ.trim(), ZQ = PQ.length < qQ.B, yQ = null !== RQ && !1 !== (null === (HQ = RQ.validation) || void 0 === HQ ? void 0 : HQ.ok) && !hQ && !ZQ && !gQ && !WQ;
-       return (0, MQ.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, MQ.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: GQ ? SQ("shaderPackListing:uploadIntro", {
-             minutes: String(qQ.H / 6e4)
-           }) : SQ("shaderPackListing:publishIntro")
-         }), (0, MQ.jsx)(CQ, {}), gQ && (0, MQ.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: SQ("shaderPackListing:publishNeedsLogin")
-         }), (0, MQ.jsx)(bQ.c, {
-           busy: hQ,
-           disabled: hQ || fQ,
-           onFiles: QQ => {
-             OQ(null), nQ(QQ)
+         return function() {
+           function ek() {
+             this.__entries__ = []
```

#### 9. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L125-L299` → after: `L535-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L535-L537) · [Before (L125-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L125-L299)

```diff
-         }), RQ && (0, MQ.jsxs)("div", {
-           className: "ShaderPackPublishSummary",
-           children: [(0, MQ.jsx)("div", {
-             className: "ShaderPackPublishPackName",
-             children: RQ.pack.manifest.name
-           }), (0, MQ.jsxs)("div", {
-             className: "ShaderPackPublishPackSize",
-             children: [SQ("shaderPackListing:sizeValue", {
-               kilobytes: String((0, eQ.R)(RQ.sourceBytes))
-             }), " \xb7", " ", SQ("shaderPackListing:filesValue", {
-               files: String(RQ.pack.files.length)
-             })]
-           }), (0, MQ.jsx)(pQ, {
-             picked: RQ
-           })]
-         }), !GQ && (0, MQ.jsxs)(MQ.Fragment, {
- ... (159 more removed lines; see GitHub link above)
+           return Object.defineProperty(ek.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
```

#### 10. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L301-L369` → after: `L539-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L539-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L539-L598) · [Before (L301-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L301-L369)

```diff
-             children: QQ("shaderPackListing:backToPacks")
-           })
-         }), (0, mQ.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: QQ("shaderPackListing:publishTitle")
-         }), (0, mQ.jsx)(DQ.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: QQ => {
-             FQ((0, vQ.Z)(QQ.packId), {
-               replace: !0
-             })
-           }
-         })]
-       })
-     }
-   },
- ... (53 more removed lines; see GitHub link above)
+             enumerable: !0,
+             configurable: !0
+           }), ek.prototype.get = function(ek) {
+             var ik = kk(this.__entries__, ek),
+               Dk = this.__entries__[ik];
+             return Dk && Dk[1]
+           }, ek.prototype.set = function(ek, ik) {
+             var Dk = kk(this.__entries__, ek);
+             ~Dk ? this.__entries__[Dk][1] = ik : this.__entries__.push([ek, ik])
+           }, ek.prototype.delete = function(ek) {
+             var ik = this.__entries__,
+               Dk = kk(ik, ek);
+             ~Dk && ik.splice(Dk, 1)
+           }, ek.prototype.has = function(ek) {
+             return !!~kk(this.__entries__, ek)
+           }, ek.prototype.clear = function() {
+ ... (44 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L371-L381` → after: `L600-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L600-L642) · [Before (L371-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L371-L381)

```diff
-       }), [QQ, FQ]), {
-         isFavourite: QQ => null === wQ ? null : wQ.has(QQ),
-         toggle: function(FQ) {
-           if (null === wQ || DQ.current.has(FQ)) return;
-           DQ.current.add(FQ);
-           const LQ = !wQ.has(FQ);
-           kQ(FQ, LQ), (LQ ? oQ.b.favouriteShaderPack(QQ, FQ) : oQ.b.unfavouriteShaderPack(QQ, FQ)).catch((QQ => {
-             console.error("Failed to change a favourite shader pack", QQ), kQ(FQ, !LQ)
-           })).finally((() => {
-             DQ.current.delete(FQ)
-           }))
+         return kk.prototype.addObserver = function(kk) {
+           ~this.observers_.indexOf(kk) || this.observers_.push(kk), this.connected_ || this.connect_()
+         }, kk.prototype.removeObserver = function(kk) {
+           var ek = this.observers_,
+             ik = ek.indexOf(kk);
+           ~ik && ek.splice(ik, 1), !ek.length && this.connected_ && this.disconnect_()
+         }, kk.prototype.refresh = function() {
+           this.updateObservers_() && this.refresh()
+         }, kk.prototype.updateObservers_ = function() {
+           var kk = this.observers_.filter((function(kk) {
+             return kk.gatherActive(), kk.hasActive()
+           }));
+           return kk.forEach((function(kk) {
+             return kk.broadcastActive()
+           })), kk.length > 0
+         }, kk.prototype.connect_ = function() {
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L383-L451` → after: `L644-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L644-L649) · [Before (L383-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L383-L451)

```diff
-       }
-     }
-   },
-   6371: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       A: () => xQ,
-       C: () => eQ,
-       G: () => OQ,
-       H: () => uQ,
-       K: () => rQ,
-       N: () => AQ,
-       R: () => jQ,
-       U: () => zQ,
-       W: () => DQ,
-       Y: () => lQ,
-       Z: () => vQ,
- ... (53 more removed lines; see GitHub link above)
+         return kk
+       },
+       Kk = function(kk) {
+         return kk && kk.ownerDocument && kk.ownerDocument.defaultView || Sk
+       },
+       xk = pk(0, 0, 0, 0);
```

#### 13. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L454` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L652) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L454)

```diff
-       return null === QQ ? "with" : "with" === QQ ? "without" : null
+       return parseFloat(kk) || 0
```

#### 14. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L458` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L656-L659) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L458)

```diff
-       return "with" === QQ ? "only" : null === QQ ? "include" : void 0
+       for (var ek = [], ik = 1; ik < arguments.length; ik++) ek[ik - 1] = arguments[ik];
+       return ek.reduce((function(ek, ik) {
+         return ek + nk(kk["border-" + ik + "-width"])
+       }), 0)
```

#### 15. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L478-L489` → after: `L663-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L663-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L663-L684) · [Before (L478-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L478-L489)

```diff
-       var FQ, wQ, qQ;
-       const DQ = QQ.get(pQ),
-         kQ = (null !== (FQ = QQ.get(CQ)) && void 0 !== FQ ? FQ : RQ).split(","),
-         vQ = QQ.get(iQ);
-       return {
-         section: "favourites" === DQ || "mine" === DQ ? DQ : "explore",
-         sort: null !== (wQ = LQ.x.find((FQ => FQ === QQ.get(cQ)))) && void 0 !== wQ ? wQ : WQ,
-         withFeatures: xQ.filter((QQ => kQ.includes(QQ) && !kQ.includes(`-${QQ}`))),
-         withoutFeatures: xQ.filter((QQ => kQ.includes(`-${QQ}`))),
-         searchQuery: (null === (qQ = QQ.get(SQ)) || void 0 === qQ ? void 0 : qQ.slice(0, LQ.I)) || null,
-         pageNumber: (0, oQ.d)(QQ.get(oQ.b)),
-         banned: "only" === vQ ? "with" : "include" === vQ ? null : "without"
+       var ek = kk.clientWidth,
+         ik = kk.clientHeight;
+       if (!ek && !ik) return xk;
+       var Dk = Kk(kk).getComputedStyle(kk),
+         fk = function(kk) {
+           for (var ek = {}, ik = 0, Dk = ["top", "right", "bottom", "left"]; ik < Dk.length; ik++) {
+             var fk = Dk[ik],
+               Sk = kk["padding-" + fk];
+             ek[fk] = nk(Sk)
+           }
+           return ek
+         }(Dk),
+         Sk = fk.left + fk.right,
+         bk = fk.top + fk.bottom,
+         rk = nk(Dk.width),
+         Pk = nk(Dk.height);
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L492-L537` → after: `L688-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L688-L692) · [Before (L492-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L492-L537)

```diff
- 
-     function sQ(QQ, FQ) {
-       var wQ;
-       const LQ = NQ(FQ);
-       (0, oQ.g)(QQ, pQ, "explore" === FQ.section ? null : FQ.section), (0, oQ.g)(QQ, cQ, FQ.sort === WQ ? null : FQ.sort), (0, oQ.g)(QQ, CQ, LQ === RQ ? null : LQ), (0, oQ.g)(QQ, SQ, FQ.searchQuery), (0, oQ.g)(QQ, iQ, null !== (wQ = MQ(FQ.banned)) && void 0 !== wQ ? wQ : null), ( … [truncated]
-     }
- 
-     function rQ(QQ) {
-       const FQ = new URLSearchParams;
-       return sQ(FQ, {
-         section: "explore",
-         sort: WQ,
-         withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
- ... (30 more removed lines; see GitHub link above)
+     var wk = "undefined" !== typeof SVGGraphicsElement ? function(kk) {
+       return kk instanceof Kk(kk).SVGGraphicsElement
+     } : function(kk) {
+       return kk instanceof Kk(kk).SVGElement && "function" === typeof kk.getBBox
+     };
```

#### 17. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L540` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L695-L698) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L540)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / QQ))
+       return fk ? wk(kk) ? function(kk) {
+         var ek = kk.getBBox();
+         return pk(0, 0, ek.width, ek.height)
+       }(kk) : Hk(kk) : xk
```

#### 18. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L544-L572` → after: `L702-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L702-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L702-L706) · [Before (L544-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L544-L572)

```diff
-       const oQ = [];
-       QQ.isBanned && oQ.push({
-         tone: "warning",
-         text: qQ("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: DQ
-       } = QQ;
-       if (null === QQ.brokenError || DQ && !DQ.error || oQ.push({
-           tone: "warning",
-           text: qQ("shaderPackListing:ownerBroken"),
-           detail: QQ.brokenError
-         }), null !== DQ && void 0 !== DQ && DQ.error) oQ.push({
-         tone: "warning",
-         text: qQ(FQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
- ... (13 more removed lines; see GitHub link above)
+       return {
+         x: kk,
+         y: ek,
+         width: ik,
+         height: Dk
```

#### 19. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L616-L649` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L709-L711) · [Before (L616-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L616-L649)

```diff
-   },
-   6374: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       B: () => DQ,
-       E: () => LQ,
-       H: () => bQ,
-       I: () => uQ,
-       J: () => GQ,
-       L: () => HQ,
-       O: () => mQ,
-       c: () => YQ,
-       e: () => AQ,
-       h: () => xQ,
-       l: () => MQ,
-       n: () => cQ,
-       p: () => vQ,
- ... (18 more removed lines; see GitHub link above)
+     var yk = function() {
+         function kk(kk) {
+           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pk(0, 0, 0, 0), this.target = kk
```

#### 20. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L652-L687` → after: `L745-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L745-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/108.js#L745-L799) · [Before (L652-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/108.js#L652-L687)

```diff
-       oQ = ["popular", "updated", "newest"],
-       DQ = 3,
-       kQ = 32,
-       vQ = 300;
- 
-     function mQ(QQ, FQ) {
-       return QQ.slice(0, FQ).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const uQ = 64,
-       HQ = 512,
-       bQ = 18e5;
-     const YQ = "Bloxdhub",
-       xQ = "https://bloxdhub.com/shaders";
- 
-     function AQ(QQ) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
- ... (20 more removed lines; see GitHub link above)
+       Lk = function() {
+         function kk(kk, ek, ik) {
+           if (this.activeObservations_ = [], this.observations_ = new Dk, "function" !== typeof kk) throw new TypeError("The callback provided as parameter 1 is not a function.");
+           this.callback_ = kk, this.controller_ = ek, this.callbackCtx_ = ik
+         }
+         return kk.prototype.observe = function(kk) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(kk instanceof Kk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var ek = this.observations_;
+             ek.has(kk) || (ek.set(kk, new yk(kk)), this.controller_.addObserver(this), this.controller_.refresh())
+           }
+         }, kk.prototype.unobserve = function(kk) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(kk instanceof Kk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [109];
+ export const ids = [109, 397];
```

#### 2. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4` → after: `L4-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L4-L54) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L4)

```diff
-   8659: (QQ, FQ, wQ) => {
+   4902: (kk, ek, ik) => {
+     var Dk = ik(4909);
+ 
+     function fk() {}
+ 
+     function Sk() {}
+     Sk.resetWarningCache = fk, kk.exports = function() {
+       function kk(kk, ek, ik, fk, Sk, bk) {
+         if (bk !== Dk) {
+           var rk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw rk.name = "Invariant Violation", rk
+         }
+       }
+ 
+       function ek() {
+         return kk
+ ... (35 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8-L65` → after: `L58-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L58-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L58-L66) · [Before (L8-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L8-L65)

```diff
-     var LQ = wQ(1515),
-       qQ = wQ(17),
-       oQ = wQ(4501),
-       DQ = wQ(53),
-       kQ = wQ(1447);
-     var vQ = wQ(1897),
-       mQ = wQ(1503),
-       uQ = wQ(1362),
-       HQ = wQ(1207),
-       bQ = wQ(160),
-       YQ = wQ(1237),
-       xQ = wQ(2278),
-       AQ = wQ(8667);
- 
-     function tQ(QQ, FQ) {
-       const wQ = !0 === FQ.debugResult.gameRefused,
- ... (42 more removed lines; see GitHub link above)
+     var Dk = ik(1479),
+       fk = ik(1410),
+       Sk = ik(1172),
+       bk = ik(6432),
+       rk = ik(6406),
+       Pk = ik(6393),
+       mk = ik(1066);
+ 
+     function Mk() {
```

#### 4. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L68-L86` → after: `L69-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L69-L78) · [Before (L68-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L68-L86)

```diff
-       } = (0, HQ.y)(), LQ = "chosen" === FQ.packSource, qQ = SQ.featureFlags.useDiscord ? LQ ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : LQ ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
-       return (0, rQ.jsxs)(rQ.Fragment, {
-         children: [wQ(qQ, {
-           code: FQ.code
-         }), "default" !== FQ.packSource && FQ.code === sQ.l.Error && (0, rQ.jsxs)("div", {
-           style: {
-             paddingTop: "1rem",
-             overflowWrap: "anywhere"
-           },
-           children: [wQ("texturePackLoad:details"), " ", FQ.reason]
-         }), SQ.featureFlags.useDiscord && (0, rQ.jsx)("div", {
-           style: {
-             paddingTop: "1rem"
-           },
-           children: (0, rQ.jsx)("a", {
-             href: IQ,
- ... (3 more removed lines; see GitHub link above)
+       } = (0, Sk.D)(), ek = (0, Dk.useNavigatePreserveSearch)();
+       return (0, rk.d)(), (0, mk.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, mk.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, mk.jsx)(fk.e, {
+             onClick: () => {
+               ek(Pk.S)
+             },
+             children: kk("shaderPackListing:backToPacks")
```

#### 5. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L91-L108` → after: `L93-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L93-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L93-L126) · [Before (L91-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L91-L108)

```diff
-     var NQ = wQ(1342),
-       TQ = wQ(745),
-       KQ = wQ(1243),
-       zQ = wQ(1038),
-       lQ = wQ(1489),
-       jQ = wQ(3162),
-       aQ = wQ(3037),
-       XQ = wQ(1365),
-       fQ = wQ(1348),
-       VQ = wQ(4832),
-       hQ = wQ(8672),
-       JQ = wQ(2879);
- 
-     function EQ(QQ) {
-       let {
-         onApply: FQ,
- ... (2 more removed lines; see GitHub link above)
+   },
+   6406: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => xk,
+       f: () => nk,
+       h: () => Kk,
+       i: () => Uk
+     });
+     var Dk = ik(60),
+       fk = ik(6396),
+       Sk = ik(1459),
+       bk = ik(6393),
+       rk = ik(6414),
+       Pk = ik(1095);
+     const mk = "shaderPackListingView",
+       Mk = "shaderPackListingFilterOpen";
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L110-L111` → after: `L128-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L128-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L128-L137) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L110-L111)

```diff
-         t: LQ
-       } = (0, HQ.y)();
+         userContext: kk,
+         isUserContextUpdating: ek
+       } = (0, Pk.d)(), [ik, fk] = (0, Dk.useState)(null), bk = (0, Dk.useRef)(new Set);
+ 
+       function rk(kk, ek) {
+         fk((ik => {
+           const Dk = new Set(ik);
+           return ek ? Dk.add(kk) : Dk.delete(kk), Dk
+         }))
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L113-L311` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L139-L142) · [Before (L113-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L113-L311)

```diff
-         JQ.i.skipPlayWait()
-       }), []), (0, rQ.jsx)(XQ.j, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, rQ.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [LQ("customTexturePack:downloadPrompt"), (0, rQ.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
-             children: LQ("customTexturePack:authorWarning")
-           }), (0, rQ.jsx)("div", {
-             className: "CustomTexturePackDownloaderSecondaryText",
-             children: LQ("customTexturePack:existingPackSaved")
-           })]
-         }),
-         confirm: {
-           text: "general:apply",
- ... (183 more removed lines; see GitHub link above)
+         if (ek) return;
+         let ik = !1;
+         return Sk.b.getFavouriteShaderPacks(kk).then((kk => {
+           ik || fk(new Set(kk))
```

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L313-L542` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L144) · [Before (L313-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L313-L542)

```diff
-           console.error("Failed to record recently played game", QQ)
-         })), (0, iQ.S)(), mQ
-       }
-       return LQ && (0, qQ.k)("updateRejoin"), (0, LF.j)((async qQ => {
-         try {
-           let kQ = QQ,
-             vQ = await DQ(kQ, FQ, wQ, qQ);
-           for (let QQ = 0; LQ && QQ < qF.p; QQ++) {
-             var oQ;
-             if (null === (oQ = vQ) || void 0 === oQ || !oQ.isError() || vQ.asError().code !== bQ.o.REQUEST_TO_MATCHMAKING) break;
-             if (!await (0, qF.N)((0, qF.z)(QQ), qQ)) return vQ;
-             kQ = (0, qF.D)(kQ, QQ + 1, "string" === typeof kQ && (0, YQ.S)(kQ)), vQ = await DQ(kQ, FQ, wQ, qQ)
-           }
-           return vQ
-         } catch (kQ) {
-           if ((0, wF.f)("matchmake_failed", kQ, "unexpected"), vQ.gameBridge.send("leaveGame", {
- ... (214 more removed lines; see GitHub link above)
+           console.error("Failed to get favourite shader packs", kk), ik || fk(new Set)
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L546-L552` → after: `L148-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L148-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L148-L348) · [Before (L546-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L546-L552)

```diff
-       }), [AQ, wQ.search, wQ.pathname]), (0, DQ.useEffect)((() => {
-         IQ.disableFullscreen && (0, WQ.h)() ? (0, WQ.l)() : !IQ.disableFullscreen && (0, WQ.j)() && (0, WQ.r)()
-       }), [cQ, IQ]), (0, DQ.useEffect)((() => {
-         "inGame" === cQ && vF()
-       }), [cQ, IQ]), (0, DQ.useEffect)((() => {
-         "inGame" !== cQ && qQ.c.set({
-           openInGameMenuName: null
+       }), [kk, ek]), {
+         isFavourite: kk => null === ik ? null : ik.has(kk),
+         toggle: function(ek) {
+           if (null === ik || bk.current.has(ek)) return;
+           bk.current.add(ek);
+           const Dk = !ik.has(ek);
+           rk(ek, Dk), (Dk ? Sk.b.favouriteShaderPack(kk, ek) : Sk.b.unfavouriteShaderPack(kk, ek)).catch((kk => {
+             console.error("Failed to change a favourite shader pack", kk), rk(ek, !Dk)
+           })).finally((() => {
+             bk.current.delete(ek)
+           }))
+         }
+       }
+     }
+   },
+   6393: (kk, ek, ik) => {
+ ... (185 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L554-L568` → after: `L350-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L350-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L350-L427) · [Before (L554-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L554-L568)

```diff
-       }), [cQ]);
-       const XQ = function(QQ) {
-         const FQ = (0, qQ.g)(QQ),
-           [wQ, LQ] = (0, DQ.useState)(0),
-           [oQ, vQ] = (0, DQ.useState)(!1);
-         (0, kQ.g)("gameJoined", (() => {
-           (0, qQ.g)(qQ.c.get("gameState")) && (LQ((QQ => QQ + 1)), vQ(!0))
-         })), (0, DQ.useEffect)((() => {
-           FQ || vQ(!1)
-         }), [FQ]);
-         const mQ = "inGame" === QQ;
-         return {
-           mounted: mQ || FQ && oQ,
-           shown: mQ,
-           key: wQ
+       }
+       return kk.listed || Sk.push({
+         tone: "info",
+         text: fk("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), Sk
+     }
+ 
+     function ak(kk) {
+       return Math.max(1, Math.round(kk / 1024))
+     }
+ 
+     function Wk(kk, ek, ik) {
+       return kk instanceof fk.d && kk.errorMessageForUser ? kk.errorMessageForUser : ek(ik)
+     }
+   },
+ ... (62 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L570-L691` → after: `L429-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L429-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L429-L454) · [Before (L570-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L570-L691)

```diff
-       }(cQ);
-       return (0, rQ.jsx)(rQ.Fragment, {
-         children: XQ.mounted && (0, rQ.jsx)(oQ.InGameUi, {
-           shown: XQ.shown
-         }, XQ.key)
-       })
-     }
-   },
-   4832: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ
-     });
-     var LQ = wQ(1213);
-     async function qQ(QQ) {
-       const FQ = await fetch(`${LQ.clientSideServerUrls.s3Url}/${QQ}`, {
-         headers: {
- ... (106 more removed lines; see GitHub link above)
+       },
+       Sk = ["popular", "updated", "newest"],
+       bk = 3,
+       rk = 32,
+       Pk = 300;
+ 
+     function mk(kk, ek) {
+       return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const Mk = 64,
+       Kk = 512,
+       xk = 18e5;
+ 
+     function nk(kk) {
+       const ek = kk,
+         ik = null === ek || void 0 === ek ? void 0 : ek.files;
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L695-L705` → after: `L458-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L458-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/109.js#L458-L470) · [Before (L695-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/109.js#L695-L705)

```diff
-       return null !== (FQ = Object.keys(qQ.c).find((FQ => qQ.c[FQ] === QQ))) && void 0 !== FQ ? FQ : null
-     }
- 
-     function vQ(QQ) {
-       return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const mQ = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       return kk === lk || null !== (ek = null === kk || void 0 === kk ? void 0 : kk.startsWith(pk)) && void 0 !== ek && ek
+     }
+ 
+     function Yk(kk, ek) {
+       return `shaderPacks/${kk}/${ek}.json`
+     }
+ 
+     function Lk(kk, ek, ik, Dk) {
+       return null === ek.renderId ? Ck(kk, ek.baselineVersion, ik, Dk) : `${kk}/${function(kk,ek,ik,Dk){return`shaderPacks/${kk}/${ek}/${ik}-${Dk}.webp`}(ek.packId,ek.renderId,ik,Dk)}`
+     }
+ 
+     function Ck(kk, ek, ik, Dk) {
+       return `${kk}/${function(kk,ek,ik){return`shaderPacks/baseline/${kk}/${ek}-${ik}.webp`}(ek,ik,Dk)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/110.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/110.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a)

#### 1. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L4-L9)

```diff
-   4837: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => xQ,
-       f: () => GQ,
-       g: () => AQ,
-       h: () => MQ
+   8714: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => le
```

#### 2. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L11-L21` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L8-L26) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L11-L21)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(4844),
-       oQ = wQ(4233),
-       DQ = wQ(1367),
-       kQ = wQ(4867),
-       vQ = wQ(1070),
-       mQ = wQ.n(vQ),
-       uQ = wQ(1362),
-       HQ = wQ(1725),
-       bQ = wQ(4875),
-       YQ = wQ(1107);
+     var Dk = ik(1496),
+       fk = ik(22),
+       Sk = ik(4587),
+       bk = ik(60),
+       rk = ik(1406);
+     var Pk = ik(1893),
+       mk = ik(1479),
+       Mk = ik(1333),
+       Kk = ik(1172),
+       xk = ik(165),
+       nk = ik(189),
+       Uk = ik(996),
+       Hk = ik(1005),
+       wk = ik(1207),
+       lk = ik(2351),
+       pk = ik(1459),
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L23-L67` → after: `L28-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L28-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L28-L67) · [Before (L23-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L23-L67)

```diff
-     function xQ(QQ) {
-       let {
-         label: FQ,
-         onClick: wQ,
-         checked: LQ,
-         circleInfoText: qQ,
-         className: kQ,
-         disabled: vQ,
-         note: uQ
-       } = QQ;
-       return (0, YQ.jsxs)("div", {
-         "aria-disabled": vQ || void 0,
-         "data-pad-focusable": !0,
-         className: mQ()("SettingBox CheckboxContainer", {
-           [kQ]: kQ,
-           SettingBoxDisabled: vQ
- ... (29 more removed lines; see GitHub link above)
+     function Ck(kk, ek) {
+       const ik = !0 === ek.debugResult.gameRefused,
+         Dk = ik || ek.code === xk.n.REQUEST_TO_MATCHMAKING ? (0, Yk.m)(ek.message) : null;
+       if (null !== Dk) return Ak(kk, kk((0, Yk.r)(Dk)), kk(Yk.n[Dk])), !0;
+       if (ik) return async function(kk) {
+         const {
+           gameNameWithVariation: ek,
+           lobbyName: ik,
+           shownLobbyName: Dk
+         } = Pk.gameBridge.latest("connectedGame"), fk = "classic" === ek && (0, wk.D)(ik) ? Dk : await (0, lk.b)(kk, ek, ik);
+         return "" !== fk ? kk("general:cantJoinGame", {
+           game: fk
+         }) : kk("general:cantJoinThisGame")
+       }(kk).then((ik => {
+         Ak(kk, ik, ek.message)
+       })), !0;
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L70-L130` → after: `L70-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L70-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L70-L76) · [Before (L70-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L70-L130)

```diff
-     function AQ(QQ) {
-       let {
-         name: FQ,
-         onChange: wQ,
-         min: qQ,
-         max: oQ,
-         step: kQ,
-         initValue: vQ,
-         circleInfoText: uQ,
-         format: HQ,
-         className: bQ,
-         padStep: xQ,
-         disabled: AQ = !1,
-         selectableMax: tQ,
-         cappedNote: MQ,
-         onChangeComplete: GQ
- ... (45 more removed lines; see GitHub link above)
+     function Ak(kk, ek, ik) {
+       Mk.NotificationProvider.showPromptPopup({
+         icon: "lock",
+         title: ek,
+         subtitle: ik,
+         confirmText: kk("general:ok"),
+         cancelText: ""
```

#### 5. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L133` → after: `L79-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L79-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L79-L100) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L133)

```diff
-     const tQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
+     var jk = ik(4528),
+       sk = ik(26),
+       dk = ik(1220),
+       Vk = ik(1688),
+       Fk = ik(99),
+       uk = ik(1291),
+       qk = ik(1400),
+       Ik = ik(4465),
+       zk = ik(4315),
+       Qk = ik(4287),
+       vk = ik(3206),
+       Ek = ik(1311),
+       hk = ik(741),
+       ak = ik(1212),
+       Wk = ik(3271),
+       tk = ik(3121),
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L138-L153` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L104-L105) · [Before (L138-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L138-L153)

```diff
-         value: wQ,
-         min: oQ,
-         max: DQ,
-         step: kQ,
-         onChange: vQ,
-         orientation: mQ,
-         reverse: uQ,
-         setIsChanging: HQ,
-         tooltip: xQ,
-         labels: AQ,
-         handleLabel: eQ,
-         format: MQ,
-         onChangeStart: GQ,
-         onChangeComplete: pQ,
-         padStep: cQ,
-         disabled: CQ = !1
+         onApply: ek,
+         onSkip: ik
```

#### 7. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L155-L193` → after: `L107-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L107-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L107-L127) · [Before (L155-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L155-L193)

```diff
-       const SQ = (0, LQ.useRef)(null),
-         iQ = (0, LQ.useRef)(null);
-       (0, LQ.useLayoutEffect)((() => {
-         var QQ, FQ, wQ;
-         const LQ = null !== (QQ = null === (FQ = SQ.current) || void 0 === FQ ? void 0 : FQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
-         null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-slider", ""), null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-focusable", ""), null === LQ || void 0 === LQ || null === (wQ = LQ.querySelector(".rangeslider__handle")) || void 0 === wQ || wQ.setAttribute( … [truncated]
-       }), []), (0, LQ.useLayoutEffect)((() => {
-         var QQ, FQ;
-         CQ ? null === (QQ = iQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (FQ = iQ.current) || void 0 === FQ || FQ.removeAttribute("aria-disabled")
-       }), [CQ]);
-       const WQ = (null !== (FQ = String(kQ).split(".")[1]) && void 0 !== FQ ? FQ : "").length,
-         RQ = QQ => {
-           const FQ = Number((Math.round((QQ - oQ) / kQ) * kQ + oQ).toFixed(WQ));
-           return Math.min(DQ, Math.max(oQ, FQ))
-         },
-         OQ = (0, LQ.useRef)(pQ);
- ... (23 more removed lines; see GitHub link above)
+       const {
+         t: Dk
+       } = (0, Kk.D)();
+       return (0, bk.useEffect)((() => {
+         Zk.e.skipPlayWait()
+       }), []), (0, Ok.jsx)(Xk.f, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, Ok.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [Dk("customTexturePack:downloadPrompt"), (0, Ok.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: Dk("customTexturePack:authorWarning")
+           }), (0, Ok.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: Dk("customTexturePack:existingPackSaved")
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L195-L196` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L129-L131) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L195-L196)

```diff
-         endDrag: () => {
-           sQ.current && (sQ.current = !1, null === pQ || void 0 === pQ || pQ())
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: ik
```

#### 9. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L225-L233` → after: `L136-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L136-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L136-L145) · [Before (L225-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L225-L233)

```diff
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-       const FQ = uQ.NotificationProvider.showPromptPopup({
-         title: "settingsMenu:reloadPagePopupTitle",
-         subtitle: "settingsMenu:reloadPagePopupSubtitle",
-         confirmText: "settingsMenu:reloadPagePopupConfirm",
-         confirmTooltip: "",
-         cancelText: "general:cancel",
-         cancelTooltip: "",
-         unlockPointerKey: QQ
+       let kk = !1;
+       const ek = Mk.NotificationProvider.showCustomPopup({
+         body: ek => (0, Ok.jsx)(gk, {
+           onApply: () => {
+             kk = !0, ek()
+           },
+           onSkip: ek
+         }),
+         disableExitButton: !0,
+         disablePressBackgroundToClose: !0
```

#### 10. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L235` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L147) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L235)

```diff
-       !0 === await FQ.getResult() && (0, HQ.reloadBloxd)()
+       return await ek.getResult(), kk
```

#### 11. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L239-L260` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L155) · [Before (L239-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L239-L260)

```diff
-       let {
-         label: FQ,
-         options: wQ,
-         value: LQ,
-         onChange: qQ,
-         circleInfoText: oQ
-       } = QQ;
-       return (0, YQ.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, YQ.jsxs)("div", {
-           className: "SliderText",
-           children: [FQ, oQ && (0, YQ.jsx)(DQ.b, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: oQ
-           })]
-         }), (0, YQ.jsx)(kQ.c, {
- ... (6 more removed lines; see GitHub link above)
+       kk.setGamePackConfirm(Gk), Rk = kk
```

#### 12. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L262-L292` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L157) · [Before (L262-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L262-L292)

```diff
-   },
-   6490: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => PQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1515),
-       oQ = wQ(6374),
-       DQ = wQ(1237),
-       kQ = wQ(317),
-       vQ = wQ(1348),
-       mQ = wQ(1503),
-       uQ = wQ(1451),
-       HQ = wQ(1367),
-       bQ = wQ(2489),
-       YQ = wQ(2633),
- ... (15 more removed lines; see GitHub link above)
+     var ke = ik(3447);
```

#### 13. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L296-L308` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L161-L163) · [Before (L296-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L296-L308)

```diff
-         details: FQ,
-         owner: wQ,
-         onChanged: qQ
-       } = QQ;
-       const {
-         t: DQ
-       } = (0, MQ.y)(), kQ = (0, mQ.useNavigatePreserveSearch)(), {
-         userContext: HQ
-       } = (0, AQ.e)(), [bQ, YQ] = (0, LQ.useState)(!1), [xQ, eQ] = (0, LQ.useState)(null), [GQ, pQ] = (0, LQ.useState)(!1), {
-         packId: OQ,
-         name: sQ,
-         description: rQ,
-         live: IQ
+         schematicId: ek,
+         texturePackKey: ik,
+         onClose: Dk
```

#### 14. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L310-L319` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L165-L168) · [Before (L310-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L310-L319)

```diff
-       async function UQ(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
-         YQ(!0), eQ(null);
-         try {
-           await QQ(), FQ()
-         } catch (wQ) {
-           console.error("Failed to change a shader pack", wQ), eQ((0, iQ.z)(wQ, DQ, "shaderPackListing:ownerActionFailed"))
-         } finally {
-           YQ(!1)
-         }
+       const [fk, Sk] = (0, bk.useState)("prompt"), [rk, Pk] = (0, bk.useState)(null), mk = (0, ke.e)();
+ 
+       function Mk() {
+         Dk()
```

#### 15. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L321-L452` → after: `L170-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L170-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L170-L205) · [Before (L321-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L321-L452)

```diff
-       const NQ = (0, iQ.u)(HQ);
-       return (0, WQ.jsxs)("section", {
-         className: "ShaderPackOwnerPanel",
-         children: [(0, WQ.jsx)("h2", {
-           className: "ShaderPackSectionTitle",
-           children: DQ("general:manage")
-         }), (0, iQ.Y)(wQ, !(null === IQ || void 0 === IQ || !IQ.renderId), Date.now(), DQ).map((QQ => (0, WQ.jsxs)("div", {
-           className: cQ()("ShaderPackOwnerNotice", {
-             Warning: "warning" === QQ.tone
-           }),
-           children: [(0, WQ.jsx)(CQ.c, {
-             name: "warning" === QQ.tone ? "triangle-exclamation" : "circle-info"
-           }), (0, WQ.jsxs)("div", {
-             children: [QQ.text, QQ.detail && (0, WQ.jsx)("pre", {
-               className: "ShaderPackOwnerNoticeDetail",
-               children: QQ.detail
- ... (116 more removed lines; see GitHub link above)
+       return "prompt" === fk ? (0, Ok.jsx)(gk, {
+         onApply: async function() {
+           Sk("downloading");
+           try {
+             const kk = await async function(kk, ek) {
+               const ik = await (0, ck.e)(ek);
+               if (ik) return {
+                 pack: ik,
+                 key: ek
+               };
+               const Dk = await yk.userContextManager.getCurrentUserContext(),
+                 fk = (await pk.b.getGame(Dk, kk, !0)).customTexturePackKey;
+               if (!fk) return null;
+               const Sk = await (0, ck.e)(fk);
+               if (!Sk) throw new Error("The texture pack could not be found");
+               return {
+ ... (20 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L454-L537` → after: `L207-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L207-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L207-L215) · [Before (L454-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L454-L537)

```diff
-         })]
-       })
-     }
-     var sQ = wQ(71),
-       rQ = wQ(1870),
-       IQ = wQ(1295),
-       UQ = wQ(4875),
-       NQ = wQ(1213),
-       TQ = wQ(6382),
-       KQ = wQ(6377),
-       zQ = wQ(6388);
- 
-     function lQ(QQ) {
-       let {
-         item: FQ
-       } = QQ;
- ... (68 more removed lines; see GitHub link above)
+         })
+       }) : "error" === fk ? (0, Ok.jsx)(Xk.f, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: rk,
+         confirm: {
+           text: "customTexturePack:refreshPage",
+           onClick: () => {
+             window.location.reload()
```

#### 17. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L539-L556` → after: `L217-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L217-L220) · [Before (L539-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L539-L556)

```diff
-         })]
-       })
-     }
- 
-     function jQ(QQ) {
-       let {
-         fullUrl: FQ,
-         largeUrl: wQ,
-         alt: qQ,
-         onClose: oQ
-       } = QQ;
-       const DQ = (0, LQ.useRef)(null);
-       return (0, IQ.m)("popup", DQ, oQ), (0, LQ.useEffect)((() => {
-         function QQ(QQ) {
-           "Escape" === QQ.key && (QQ.stopPropagation(), oQ())
-         }
- ... (2 more removed lines; see GitHub link above)
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: Mk
```

#### 18. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L558-L571` → after: `L222-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L222-L227) · [Before (L558-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L558-L571)

```diff
-       }), [oQ]), (0, sQ.createPortal)((0, WQ.jsxs)("div", {
-         ref: DQ,
-         className: "ShaderPackFullSize",
-         onClick: oQ,
-         children: [(0, WQ.jsx)("img", {
-           className: "ShaderPackFullSizeImage",
-           src: FQ,
-           alt: qQ,
-           draggable: !1,
-           style: {
-             backgroundImage: `url(${wQ})`
-           }
-         }), (0, WQ.jsx)(uQ.j, {
-           className: "ShaderPackFullSizeClose",
+       }) : "refused" === fk ? (0, Ok.jsx)(Xk.f, {
+         icon: "face-worried",
+         title: "customTexturePack:cantApplyTitle",
+         subtitle: "customTexturePack:gamePackHasExternalUrls",
+         confirm: {
+           text: "general:continue",
```

#### 19. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L573-L574` → after: `L229-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L229-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L229-L246) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L573-L574)

```diff
-         })]
-       }), document.body)
+         }
+       }) : null
+     }
+     var ie = ik(8732),
+       De = ik(4270),
+       fe = ik(1735),
+       Se = ik(2866),
+       be = ik(4279),
+       re = ik(2092),
+       Pe = ik(4616),
+       me = ik(1284),
+       Me = ik(1686),
+       Ke = ik(610),
+       xe = ik(711);
+ 
+     function ne() {
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L579-L583` → after: `L250-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L250-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L250-L254) · [Before (L579-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L579-L583)

```diff
-       let {
-         item: FQ,
-         packUrl: wQ,
-         baselineUrl: qQ
-       } = QQ;
+       const ek = kk.asError();
+       if (ek.debugResult.Ji || (0, Me.e)(ek.debugResult.error)) return;
+       console.log("Failed to join lobby:", ek.message);
+       const ik = "timedOut" === ek.debugResult.gameServerUnreachable;
+       (0, Se.reportClientError)("matchmake_failed", ek.message, ik ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : xk.n[ek.code]);
```

#### 21. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L585-L592` → after: `L256-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L256-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L256-L260) · [Before (L585-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L585-L592)

```diff
-         t: DQ
-       } = (0, MQ.y)(), [kQ, vQ] = (0, LQ.useState)(50), mQ = (0, LQ.useRef)(!1), uQ = (0, LQ.useRef)(null), {
-         width: HQ,
-         height: bQ
-       } = oQ.t.large;
- 
-       function YQ(QQ) {
-         vQ((FQ => (0, rQ.h)(FQ + QQ, 0, 100)))
+         error: Dk
+       } = ek.debugResult;
+       if (Dk instanceof vk.i && "default" !== Dk.packSource) {
+         const kk = (0, be.g)("js", "game" === Dk.packSource ? "game" : "page", (0, be.k)(Dk));
+         (0, Se.reportClientError)("texture_pack", Dk, kk)
```

#### 22. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L664-L677` → after: `L265-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L265-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L265-L329) · [Before (L664-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L664-L677)

```diff
-       let {
-         side: FQ,
-         onClick: wQ,
-         children: LQ
-       } = QQ;
-       return (0, WQ.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${FQ}`,
-         onClick: wQ,
-         children: (0, WQ.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: LQ
-         })
-       })
+       if (null === kk || void 0 === kk || !kk.isError()) return !1;
+       const ek = kk.asError();
+       return ek.code === xk.n.REQUEST_TO_MATCHMAKING && !(0, Me.e)(ek.debugResult.error)
+     }
+     async function we(kk, ek, ik) {
+       const Dk = (0, Pe.O)(ek);
+       async function bk(kk, ek, ik, Dk) {
+         var bk;
+         if (Dk.aborted) return null;
+         null === fk.b.get("gameEntrySource") && (0, fk.j)("directPlayUrl"), Ke.s && (0, Tk.f)().catch((() => {})), fk.b.set({
+           gameState: "findingLobby"
+         }), sk.j.tm("loadingScreenState", "loadingPage:findingLobby");
+         const rk = await yk.userContextManager.getCurrentUserContext();
+         Pk.gameBridge.send("setRequestedGame", {
+           gameNameWithVariation: ek,
+           discordContext: kk instanceof ak.c ? kk.getSerialisableParams() : null
+ ... (49 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L691` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L332) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L691)

```diff
-     function nQ(QQ) {
+     function le() {
```

#### 24. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L693-L699` → after: `L334-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L334-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L334-L355) · [Before (L693-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L693-L699)

```diff
-         userContext: FQ
-       } = (0, AQ.e)(), [qQ, oQ] = (0, LQ.useState)(null), [DQ, kQ] = (0, LQ.useState)(!1), [vQ, mQ] = (0, LQ.useState)(!1), [uQ, HQ] = (0, LQ.useState)(null), bQ = null === QQ || void 0 === QQ ? void 0 : QQ.packId, YQ = null === QQ || void 0 === QQ ? void 0 : QQ.sourceHash;
-       return (0, LQ.useEffect)((() => {
-         if (kQ(!1), HQ(null), void 0 === bQ) return;
-         let QQ = !1;
-         return Promise.all([(0, eQ.hasUsableWebGpuAdapter)(), (0, JQ.f)()]).then((FQ => {
-           let [wQ, LQ] = FQ;
+         t: kk
+       } = (0, Kk.D)(), ek = (0, mk.useNavigatePreserveSearch)(), ik = (0, Dk.p)(), nk = (0, Dk.y)(), Hk = (0, bk.useRef)({
+         t: kk,
+         navigate: ek
+       });
+       Hk.current = {
+         t: kk,
+         navigate: ek
+       };
+       const Yk = (0, bk.useRef)("");
+       Yk.current = ik.pathname + ik.search;
+       const {
+         gameState: Lk,
+         clientEscMenuOptions: Ak
+       } = (0, fk.n)(["gameState", "clientEscMenuOptions"]), sk = (0, bk.useRef)(null), dk = (0, bk.useRef)(!1);
+       var hk;
+ ... (6 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L701-L705` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L357) · [Before (L701-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L701-L705)

```diff
-           QQ || (oQ(wQ), kQ((null === LQ || void 0 === LQ || null === (qQ = LQ.listing) || void 0 === qQ ? void 0 : qQ.packId) === bQ && LQ.listing.sourceHash === YQ))
-         })).catch((FQ => {
-           console.error("Failed to check whether this shader pack can be used", FQ), QQ || oQ(!1)
-         })), () => {
-           QQ = !0
+           kk = !1, Nk.wanted = !1, null === (ek = Rk) || void 0 === ek || ek.setGamePackConfirm(null), Rk = null
```

#### 26. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L707-L714` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L359-L407) · [Before (L707-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L707-L714)

```diff
-       }), [bQ, YQ]), {
-         webGpuUsable: qQ,
-         inUse: DQ,
-         busy: vQ,
-         errorKey: uQ,
-         use: () => {
-           null !== QQ && async function(QQ) {
-             mQ(!0), HQ(null);
+       }), [hk]), (0, bk.useEffect)((() => {
+         var kk;
+         (0, Sk.needGameClientNow)();
+         const {
+           t: ek,
+           navigate: Dk
+         } = Hk.current, bk = (0, ie.d)(nk, ik.search);
+         if (nk.lobbyName && !new URLSearchParams(ik.search).has("lobby")) return void Dk((0, Ek.d)(bk.gameNameWithVariation, bk.lobbyName), {
+           replace: !0
+         });
+         let rk = Promise.resolve({
+           shouldMatchmake: !0
+         });
+         if ("/play/discord-custom-lobby" === ik.pathname) {
+           const kk = fk.b.get("discordContext");
+           if (!kk) return void Dk("/");
+ ... (33 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L716-L728` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L409) · [Before (L716-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L716-L728)

```diff
-               const {
-                 installListedShaderPack: LQ
-               } = await Promise.all([wQ.e(75), wQ.e(132), wQ.e(127)]).then((() => wQ(39921))), qQ = await LQ({
-                 packId: QQ.packId,
-                 sourceHash: QQ.sourceHash,
-                 name: QQ.name,
-                 ownerName: QQ.ownerName,
-                 description: QQ.description
-               });
-               if ("failed" === qQ.kind) return void HQ(EQ[qQ.reason]);
-               kQ(!0), tQ.b.recordShaderPackDownload(FQ, QQ.packId).catch((QQ => {
-                 console.error("Failed to count a shader pack's download", QQ)
-               })), (0, VQ.h)()
+               Dk = await pk.b.getGame(ek, ik, !0)
```

#### 28. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L730-L732` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L411) · [Before (L730-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L730-L732)

```diff
-               console.error("Failed to use the shader pack", LQ), HQ("shaderPack:unexpectedError")
-             } finally {
-               mQ(!1)
+               return void console.error("Failed to get game", bk)
```
