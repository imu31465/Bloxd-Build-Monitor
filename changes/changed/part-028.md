# Changed — Bundle Modifications Report (Part 028 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `28 / 116` (**292** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 027](part-027.md) · [Part 029 →](part-029.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 26. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1953-L1964` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/242.js#L186-L190) · [Before (L1953-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/242.js#L1953-L1964)

```diff
-         className: "WorldSocialLinkRow",
-         children: [!EV && (0, rV.jsx)("span", {
-           className: "WorldSocialCodeLabel",
-           children: kV("worldSocial:worldCode")
-         }), (0, rV.jsx)("input", {
-           ref: tV,
-           className: "WorldSocialLink",
-           readOnly: !0,
-           value: null !== FV && void 0 !== FV ? FV : "",
-           "aria-label": kV(EV ? "worldSocial:worldLink" : "worldSocial:worldCode"),
-           onFocus: VV => {
-             VV.currentTarget.select()
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, QH.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${YH}/${uH.largePicture}.png)`
```

#### 27. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1966-L2042` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/242.js#L192-L211) · [Before (L1966-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/242.js#L1966-L2042)

```diff
-         }), (0, rV.jsxs)(ZV.f, {
-           className: "WorldSocialCopy",
-           disabled: null === FV,
-           onClick: () => {
-             null !== FV && (0, nV.c)(FV, {
-               useShareSheet: TV,
-               onOutcome: VV => {
-                 if ((0, QV.reportAnalyticsClick)({
-                     id: "world_social.copy_link",
-                     value: "copied" !== VV || EV ? VV : "code"
-                   }), "copied" === VV) qV();
-                 else if ("failed" === VV) {
-                   var eV;
-                   null === (eV = tV.current) || void 0 === eV || eV.focus(), UV.e.showMessage({
-                     translationKey: "partyBar:copyFailed"
-                   })
- ... (61 more removed lines; see GitHub link above)
+         }), (0, QH.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: BH(uH.title)
+         }), (0, QH.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, QH.jsx)(CH.e, {
+             onClick: () => (0, EH.navigatePreserveSearch)("/"),
+             children: BH("homePage:backToGames")
+           })
+         }), !AH && (0, QH.jsx)(PH, {
+           categories: xH
+         }), AH && (0, QH.jsx)("div", {
+           className: rH()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: xH.map((HH => (0, QH.jsx)(vH, {
+             category: HH.category,
+             title: HH.title,
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   38067: (VV, eV, xV) => {
+   37250: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L7-L9` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L10) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L7-L9)

```diff
-       h: () => TV,
-       l: () => PV,
-       p: () => kV
+       f: () => vH
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L11-L451` → after: `L12-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L12-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L12-L41) · [Before (L11-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L11-L451)

```diff
-     var JV = xV(1146),
-       YV = xV.n(JV),
-       UV = xV(62),
-       yV = xV(78),
-       pV = xV(1455),
-       QV = xV(1551),
-       nV = xV(1446),
-       wV = xV(1309),
-       ZV = xV(1220),
-       vV = xV(38073),
-       rV = xV(1321);
- 
-     function kV(VV) {
-       const [eV, xV] = (0, UV.useState)((() => (0, vV.m)(VV)));
-       return (0, UV.useEffect)((() => (xV((0, vV.m)(VV)), (0, vV.L)((() => {
-         xV((0, vV.m)(VV))
- ... (425 more removed lines; see GitHub link above)
+     var AH = LH(625),
+       rH = LH(1807),
+       SH = LH(5268);
+     class hH {
+       constructor(HH, BH) {
+         this.width = HH, this.aX = BH, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(HH * BH)
+       }
+       push(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const LH = this.data,
+           AH = this.next * this.width;
+         for (let rH = 0; rH < this.width; rH++) LH[AH + rH] = HH[BH + rH];
+         this.next = (this.next + 1) % this.aX, this.size = Math.min(this.size + 1, this.aX)
+       }
+       rows() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L453-L454` → after: `L43-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L43-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L43-L47) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L453-L454)

```diff
-         codeBlockIntro: "codeBlockIntroShown",
-         worldCodeIntro: "worldCodeIntroShown"
+         idle: 0,
+         hX: 1,
+         qN: 2,
+         ZN: 3,
+         XW: 4
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L457-L464` → after: `L50-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L50-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L50-L332) · [Before (L457-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L457-L464)

```diff
-         welcome: "welcomeComplete",
-         docsOverview: "docsOverviewComplete",
-         aiHelperOverview: "aiHelperOverviewComplete"
-       };
-     let vV = null,
-       rV = null;
-     const kV = new Set,
-       bV = new Set;
+         none: 0,
+         skipped: 1,
+         paced: 2,
+         drawn: 3
+       },
+       EH = {
+         lockGained: 1,
+         lockLost: 2,
+         lockError: 3,
+         visible: 4,
+         hidden: 5,
+         focus: 6,
+         blur: 7,
+         jsClient: 8,
+         wasmClient: 9,
+         droppedCopies: 10,
+ ... (267 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L466-L467` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L334-L338) · [Before (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L466-L467)

```diff
-     const BV = new Set,
-       jV = new Set;
+ 
+     function WH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       return QH ??= new uH, QH.start(HH, BH), QH.record
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L470-L472` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L341-L342) · [Before (L470-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L470-L472)

```diff
-       jV.forEach((VV => {
-         VV()
-       }))
+       var HH;
+       null === (HH = QH) || void 0 === HH || HH.endTake()
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L476-L492` → after: `L346-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L346-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L346-L356) · [Before (L476-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L476-L492)

```diff
-       if (!vV) {
-         const VV = JV.m.getItem(nV);
-         vV = {
-           codeBlockIntroShown: !1,
-           worldCodeIntroShown: !1,
-           welcomeComplete: !1,
-           docsOverviewComplete: !1,
-           aiHelperOverviewComplete: !1,
-           ..."object" === typeof VV && null !== VV ? VV : {}
-         }
-       }
-       return vV
-     }
- 
-     function FV(VV) {
-       const eV = tV();
- ... (1 more removed lines; see GitHub link above)
+       var HH;
+       null === (HH = QH) || void 0 === HH || HH.droppedCopy()
+     }
+     async function vH(HH) {
+       var BH;
+       null === (BH = QH) || void 0 === BH || BH.takeRecords();
+       const {
+         clientHintsRead: AH,
+         debugDeviceLines: rH
+       } = await LH.e(34).then((() => LH(34844)));
+       await AH, CH.f.save({
```

#### 9. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L494-L585` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/243.js#L358-L359) · [Before (L494-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/243.js#L494-L585)

```diff
-         [VV]: !0
-       }, JV.m.setItem(nV, vV))
-     }
- 
-     function TV(VV) {
-       return "docsOverview" === VV ? UV : "aiHelperOverview" === VV ? yV : rV ? YV[rV] : []
-     }
- 
-     function PV(VV) {
-       return ("worldCodeButton" !== VV || !tV().worldCodeIntroShown) && !BV.has(VV)
-     }
- 
-     function AV(VV) {
-       var eV;
-       return (null === (eV = EV) || void 0 === eV ? void 0 : eV.name) === VV ? EV.stepsDone : kV
-     }
- ... (76 more removed lines; see GitHub link above)
+         device: rH()
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L165` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L4-L10) · [Before (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L4-L165)

```diff
-   37804: VV => {
-     VV.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (146 more removed lines; see GitHub link above)
+   40018: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => SH,
+       h: () => hH
+     });
+     var AH = LH(18);
+     let rH = !1;
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L167-L168` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L12-L13) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L167-L168)

```diff
-     function nV(VV, eV, xV) {
-       return Math.min(Math.max(eV, VV), xV)
+     function SH() {
+       return rH
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L172-L249` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L17) · [Before (L172-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L172-L249)

```diff
-       var eV = Math.round(VV).toString(16).toUpperCase();
-       return eV.length < 2 ? "0" + eV : eV
-     }
-     QV.get = function(VV) {
-       var eV, xV;
-       switch (VV.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           eV = QV.get.hsl(VV), xV = "hsl";
-           break;
-         case "hwb":
-           eV = QV.get.hwb(VV), xV = "hwb";
-           break;
-         default:
-           eV = QV.get.rgb(VV), xV = "rgb"
-       }
-       return eV ? {
- ... (62 more removed lines; see GitHub link above)
+       rH !== HH && (rH = HH, AH.k.AX("replayViewer|videoExportChanged"))
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L252-L447` → after: `L20-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L20-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L20-L34) · [Before (L252-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L252-L447)

```diff
-   37793: (VV, eV, xV) => {
-     const JV = xV(37798),
-       YV = xV(37822),
-       UV = ["keyword", "gray", "hex"],
-       yV = {};
-     for (const rV of Object.keys(YV)) yV[[...YV[rV].labels].sort().join("")] = rV;
-     const pV = {};
- 
-     function QV(VV, eV) {
-       if (!(this instanceof QV)) return new QV(VV, eV);
-       if (eV && eV in UV && (eV = null), eV && !(eV in YV)) throw new Error("Unknown model: " + eV);
-       let xV, nV;
-       if (null == VV) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (VV instanceof QV) this.model = VV.model, this.color = [...VV.color], this.valpha = VV.valpha;
-       else if ("string" === typeof VV) {
-         const eV = JV.get(VV);
- ... (180 more removed lines; see GitHub link above)
+   37345: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => GH,
+       g: () => EH,
+       i: () => YH,
+       j: () => XH
+     });
+     var AH = LH(317),
+       rH = LH(648),
+       SH = LH(659),
+       hH = LH(30);
+     const tH = {
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L449-L475` → after: `L36-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L36-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L36-L41) · [Before (L449-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L449-L475)

```diff
-       mix(VV, eV) {
-         if (!VV || !VV.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof VV);
-         const xV = VV.rgb(),
-           JV = this.rgb(),
-           YV = void 0 === eV ? .5 : eV,
-           UV = 2 * YV - 1,
-           yV = xV.alpha() - JV.alpha(),
-           pV = ((UV * yV === -1 ? UV : (UV + yV) / (1 + UV * yV)) + 1) / 2,
-           nV = 1 - pV;
-         return QV.rgb(pV * xV.red() + nV * JV.red(), pV * xV.green() + nV * JV.green(), pV * xV.blue() + nV * JV.blue(), xV.alpha() * YV + JV.alpha() * (1 - YV))
-       }
-     };
-     for (const rV of Object.keys(YV)) {
-       if (UV.includes(rV)) continue;
-       const {
-         channels: VV
- ... (11 more removed lines; see GitHub link above)
+       zH = "playSessionGameNameWithVariation",
+       CH = "wasMatchmakePlayer";
+ 
+     function EH() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
+       (0, SH.k)(HH, tH)
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L478-L483` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L44-L45) · [Before (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L478-L483)

```diff
-     function nV(VV) {
-       return function(eV) {
-         return function(VV, eV) {
-           return Number(VV.toFixed(eV))
-         }(eV, VV)
-       }
+     function XH() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).setItem(CH, !0)
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L486-L493` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L48-L50) · [Before (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L486-L493)

```diff
-     function wV(VV, eV, xV) {
-       VV = Array.isArray(VV) ? VV : [VV];
-       for (const JV of VV)(pV[JV] || (pV[JV] = []))[eV] = xV;
-       return VV = VV[0],
-         function(JV) {
-           let YV;
-           return void 0 !== JV ? (xV && (JV = xV(JV)), YV = this[VV](), YV.color[eV] = JV, YV) : (YV = this[VV]().color[eV], xV && (YV = xV(YV)), YV)
-         }
+     function GH() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
+       return (0, SH.e)(HH, tH)
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L497-L499` → after: `L54-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L54-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L54-L73) · [Before (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L497-L499)

```diff
-       return function(eV) {
-         return Math.max(0, Math.min(VV, eV))
-       }
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.f;
+       const LH = (0, SH.e)(BH, tH),
+         EH = function(HH) {
+           const BH = HH.getItem(zH);
+           return "string" !== typeof BH ? null : BH
+         }(BH),
+         XH = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).getItem(CH)
+         }(BH);
+       let GH;
+       return GH = null !== LH && null !== EH && (0, SH.i)(BH, tH) && function(HH, BH, LH) {
+           const rH = (0, AH.Wb)(HH),
+             SH = (0, AH.Wb)(BH),
+             hH = (0, AH.Ob)(HH),
+             tH = (0, AH.Ob)(BH);
+           return !(rH !== SH || !LH) || rH === SH && hH === tH
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L503-L571` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L89-L90) · [Before (L503-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L503-L571)

```diff
-       for (let xV = 0; xV < eV; xV++) "number" !== typeof VV[xV] && (VV[xV] = 0);
-       return VV
-     }
-     VV.exports = QV
-   },
-   37824: (VV, eV, xV) => {
-     const JV = xV(37830),
-       YV = {};
-     for (const yV of Object.keys(JV)) YV[JV[yV]] = yV;
-     const UV = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
- ... (53 more removed lines; see GitHub link above)
+       return AH = HH, rH = null, tH(BH), () => {
+         AH === HH && (AH = null, rH = null)
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L589-L858` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L93-L96) · [Before (L589-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L589-L858)

```diff
-     UV.rgb.hsl = function(VV) {
-       const eV = VV[0] / 255,
-         xV = VV[1] / 255,
-         JV = VV[2] / 255,
-         YV = Math.min(eV, xV, JV),
-         UV = Math.max(eV, xV, JV),
-         yV = UV - YV;
-       let pV, QV;
-       UV === YV ? pV = 0 : eV === UV ? pV = (xV - JV) / yV : xV === UV ? pV = 2 + (JV - eV) / yV : JV === UV && (pV = 4 + (eV - xV) / yV), pV = Math.min(60 * pV, 360), pV < 0 && (pV += 360);
-       const nV = (YV + UV) / 2;
-       return QV = UV === YV ? 0 : nV <= .5 ? yV / (UV + YV) : yV / (2 - UV - YV), [pV, 100 * QV, 100 * nV]
-     }, UV.rgb.hsv = function(VV) {
-       let eV, xV, JV, YV, UV;
-       const yV = VV[0] / 255,
-         pV = VV[1] / 255,
-         QV = VV[2] / 255,
- ... (254 more removed lines; see GitHub link above)
+ 
+     function hH() {
+       return null === rH ? null : {
+         ...rH
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L943-L961` → after: `L101-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L101-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L101-L113) · [Before (L943-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L943-L961)

```diff
-       const eV = function() {
-           const VV = {},
-             eV = Object.keys(JV);
-           for (let xV = eV.length, JV = 0; JV < xV; JV++) VV[eV[JV]] = {
-             distance: -1,
-             parent: null
-           };
-           return VV
-         }(),
-         xV = [VV];
-       for (eV[VV].distance = 0; xV.length;) {
-         const VV = xV.pop(),
-           YV = Object.keys(JV[VV]);
-         for (let JV = YV.length, UV = 0; UV < JV; UV++) {
-           const JV = YV[UV],
-             yV = eV[JV]; - 1 === yV.distance && (yV.distance = eV[VV].distance + 1, yV.parent = VV, xV.unshift(JV))
- ... (3 more removed lines; see GitHub link above)
+       var BH;
+       null !== (BH = AH) && void 0 !== BH && BH(HH) && (rH = {
+         ...HH
+       })
+     }
+ 
+     function zH() {
+       return "undefined" === typeof location ? null : function(HH) {
+         const BH = new URLSearchParams(HH).get("renderDistanceMax");
+         if (null === BH || !/^\d{1,2}$/.test(BH)) return null;
+         const LH = Number(BH);
+         return LH >= 1 && LH <= 64 ? LH : null
+       }(location.search)
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L965-L966` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L117-L119) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L965-L966)

```diff
-       return function(xV) {
-         return eV(VV(xV))
+       return null === BH ? HH : {
+         horizontal: Math.min(HH.horizontal, BH),
+         vertical: HH.vertical
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L971-L975` → after: `L124-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L124-L127) · [Before (L971-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L971-L975)

```diff
-       const xV = [eV[VV].parent, VV];
-       let YV = JV[eV[VV].parent][VV],
-         yV = eV[VV].parent;
-       for (; eV[yV].parent;) xV.unshift(eV[yV].parent), YV = UV(JV[eV[yV].parent][yV], YV), yV = eV[yV].parent;
-       return YV.conversion = xV, YV
+       return null === BH ? HH : CH(null !== HH && void 0 !== HH ? HH : {
+         horizontal: 1 / 0,
+         vertical: 1 / 0
+       }, BH)
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L977-L983` → after: `L129-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L129-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L129-L140) · [Before (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L977-L983)

```diff
-     VV.exports = function(VV) {
-       const eV = YV(VV),
-         xV = {},
-         JV = Object.keys(eV);
-       for (let YV = JV.length, UV = 0; UV < YV; UV++) {
-         const VV = JV[UV];
-         null !== eV[VV].parent && (xV[VV] = yV(VV, eV))
+   },
+   42248: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => rH,
+       g: () => SH
+     });
+     let AH = null;
+ 
+     function rH(HH, BH) {
+       AH = {
+         conn: HH,
+         reason: BH
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L987-L1137` → after: `L143-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L143-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L143-L147) · [Before (L987-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L987-L1137)

```diff
-   },
-   37830: VV => {
-     VV.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
- ... (135 more removed lines; see GitHub link above)
+ 
+     function SH(HH) {
+       var BH;
+       const LH = (null === (BH = AH) || void 0 === BH ? void 0 : BH.conn) === HH ? AH.reason : null;
+       return AH = null, LH
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1140-L1154` → after: `L150-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L150-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L150-L161) · [Before (L1140-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L1140-L1154)

```diff
-   37808: (VV, eV, xV) => {
-     var JV = xV(37814),
-       YV = Array.prototype.concat,
-       UV = Array.prototype.slice,
-       yV = VV.exports = function(VV) {
-         for (var eV = [], xV = 0, yV = VV.length; xV < yV; xV++) {
-           var pV = VV[xV];
-           JV(pV) ? eV = YV.call(eV, UV.call(pV)) : eV.push(pV)
-         }
-         return eV
-       };
-     yV.wrap = function(VV) {
-       return function() {
-         return VV(yV(arguments))
-       }
+   42304: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH,
+       e: () => rH
+     });
+     let AH = {
+       fire: () => {},
+       close: () => {}
+     };
+ 
+     function rH(HH) {
+       AH = HH
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1156-L1159` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/244.js#L163-L165) · [Before (L1156-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/244.js#L1156-L1159)

```diff
-   },
-   37814: VV => {
-     VV.exports = function(VV) {
-       return !(!VV || "string" === typeof VV) && (VV instanceof Array || Array.isArray(VV) || VV.length >= 0 && (VV.splice instanceof Function || Object.getOwnPropertyDescriptor(VV, VV.length - 1) && "String" !== VV.constructor.name))
+ 
+     function SH() {
+       return AH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L5-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L5-L74) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L4)

```diff
-   37930: (VV, eV, xV) => {
+   40621: (HH, BH, LH) => {
+     HH.exports = rH;
+     var AH = LH(330);
+ 
+     function rH(HH, BH) {
+       if (!(this instanceof rH)) return new rH(HH, BH);
+       var LH = AH.create();
+       AH.add(LH, HH, BH), this.base = AH.min(AH.create(), HH, LH), this.vec = AH.clone(BH), this.max = AH.max(AH.create(), HH, LH), this.mag = AH.length(this.vec)
+     }
+     var SH = rH.prototype;
+     SH.width = function() {
+       return this.vec[0]
+     }, SH.height = function() {
+       return this.vec[1]
+     }, SH.depth = function() {
+       return this.vec[2]
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L7-L14` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L77) · [Before (L7-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L7-L14)

```diff
-       f: () => je,
-       j: () => ve,
-       n: () => ne,
-       o: () => re,
-       r: () => Ze,
-       s: () => qe,
-       w: () => we,
-       y: () => be
+       f: () => SH
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L16-L137` → after: `L79-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L79-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L79-L106) · [Before (L16-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L16-L137)

```diff
-     const JV = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
-       YV = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
-       UV = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
-       yV = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
-       pV = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
-       QV = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
-       nV = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
-       wV = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
-       ZV = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
-       vV = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
-       rV = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
-       kV = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
-       bV = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
-       EV = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
-       BV = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
-       jV = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
- ... (106 more removed lines; see GitHub link above)
+     var AH = LH(4477);
+     let rH = null;
+ 
+     function SH(HH) {
+       return null !== rH && HH === rH
+     }
+ 
+     function hH() {
+       this.Qp = !1, this.stopPropagation = !1, this.kp = !1, this.disabled = !1
+     }
+     class tH {
+       constructor(HH, BH) {
+         this.version = "0.7.0";
+         var LH = Object.assign({}, new hH, BH || {});
+         this.element = HH || document, this.Qp = !!LH.Qp, this.stopPropagation = !!LH.stopPropagation, this.kp = !!LH.kp, this.disabled = !!LH.disabled, this.filterEvents = (HH, BH) => !0, this.ignoreEvent = HH => !1, this.down = new AH.EventEmitter, this.up = new AH.EventEmitter … [truncated]
+           dx: 0,
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L140-L143` → after: `L109-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L109-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L109-L135) · [Before (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L140-L143)

```diff
-     const pe = new Map([...Ye].map((VV => {
-       const eV = Object.keys(Ue).filter((eV => eV.startsWith(VV) && /^[A-Z]/.test(eV.slice(VV.length))));
-       return [VV, eV]
-     })));
+       bind(HH) {
+         for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
+         LH.forEach((BH => {
+           var LH = this._keyBindmap[BH] || [];
+           LH.includes(HH) || (LH.push(HH), this._keyBindmap[BH] = LH)
+         })), this.state[HH] = !!this.state[HH], this.pressCount[HH] = this.pressCount[HH] || 0, this.releaseCount[HH] = this.releaseCount[HH] || 0
+       }
+       unbind(HH) {
+         for (var BH in this._keyBindmap) {
+           var LH = this._keyBindmap[BH],
+             AH = LH.indexOf(HH);
+           AH > -1 && LH.splice(AH, 1)
+         }
+       }
+       getBindings() {
+         var HH = {};
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L146-L148` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L138) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L146-L148)

```diff
-       const eV = ye.get(VV);
-       if (void 0 === eV) throw new Error(`Invalid sound name ${VV} (not in any sound group)`);
-       return eV
+       for (var BH in HH) HH[BH] = 0
```

#### 6. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L152` → after: `L142-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L142-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L142-L148) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L152)

```diff
-       return Qe(VV).group
+       window.addEventListener("keydown", WH.bind(null, HH, !0), !1), window.addEventListener("keyup", WH.bind(null, HH, !1), !1);
+       var BH = {
+         passive: !0
+       };
+       HH.element.addEventListener("touchstart", YH.bind(void 0, HH), {
+         passive: !1
+       }), HH.element.addEventListener("touchend", QH.bind(void 0, HH), BH), HH.element.addEventListener("mousedown", MH.bind(null, HH, !0), BH), window.document.addEventListener("mouseup", MH.bind(null, HH, !1), BH), HH.element.addEventListener("touchmove", xH.bind(null, HH), BH) … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L155-L156` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L154-L155) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L155-L156)

```diff
-     function we(VV) {
-       return Qe(VV).file
+     function YH(HH, BH) {
+       BH.preventDefault(), uH(BH)
```

#### 8. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L160` → after: `L159-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L159-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L159-L167) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L160)

```diff
-       return ye.has(VV)
+       let BH = !1;
+       for (let LH = 0; LH < HH.touches.length; ++LH)
+         if (HH.touches[LH].identifier === GH) {
+           BH = !0;
+           break
+         } if (!BH) {
+         const BH = HH.changedTouches[0];
+         EH = BH.clientX, XH = BH.clientY, GH = BH.identifier
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L164` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L171) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L164)

```diff
-       return re(VV).includes(eV)
+       for (var LH = BH.changedTouches, AH = 0; AH < LH.length; ++AH) LH[AH].identifier === GH && (GH = null)
```

#### 10. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L167-L169` → after: `L174-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L174-L179) · [Before (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L167-L169)

```diff
-     function re(VV) {
-       if (!(VV in Ue)) throw new Error(`Invalid sound group ${VV}`);
-       return Object.keys(Ue[VV].sounds)
+     function WH(HH, BH, LH) {
+       if (!HH.ignoreEvent(LH)) try {
+         OH(HH, LH), BH && LH.isTrusted && !LH.repeat && HH._keyStates[LH.code] && bH(HH, LH.code)
+       } finally {
+         kH(LH.code, BH, HH, LH)
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L173-L175` → after: `L182-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L182-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L182-L215) · [Before (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L173-L175)

```diff
-     function be(VV) {
-       let eV = ke.get(VV);
-       return void 0 === eV && (eV = [...ye.keys()].filter((eV => eV.startsWith(VV))), ke.set(VV, eV)), eV
+     function MH(HH, BH, LH) {
+       if (!HH.ignoreEvent(LH)) try {
+         OH(HH, LH)
+       } finally {
+         ! function(HH, BH, LH) {
+           if ("pointerId" in LH)
+             if (BH) {
+               if (null !== HH._touches.currID) return;
+               HH._touches.currID = LH.pointerId
+             } else {
+               if (HH._touches.currID !== LH.pointerId) return;
+               HH._touches.currID = null
+             } var AH = "button" in LH ? LH.button + 1 : 1;
+           kH("Mouse" + AH, BH, HH, LH)
+         }(HH, BH, LH)
+       }
+ ... (18 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L181-L189` → after: `L312-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L312-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L312-L480) · [Before (L181-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L181-L189)

```diff
-       const eV = be(VV),
-         xV = eV[Math.floor(Math.random() * eV.length)];
-       if (eV.length > 1) {
-         const eV = function(VV, eV) {
-           const xV = `${eV}\n${VV}`;
-           let JV = Be.get(xV);
-           return void 0 === JV && (JV = be(VV).filter((VV => ye.get(VV).group === eV)), Be.set(xV, JV)), JV
-         }(VV, ye.get(xV).group);
-         eV.length > 1 ? Ee.set(xV, eV) : Ee.delete(xV)
+       if (HH && "object" === typeof HH) {
+         var BH = HH.which || HH.keyCode || HH.charCode;
+         BH && (HH = BH)
+       }
+       if ("number" === typeof HH) return hH[HH];
+       var LH, SH = String(HH);
+       return (LH = AH[SH.toLowerCase()]) ? LH : (LH = rH[SH.toLowerCase()]) || (1 === SH.length ? SH.charCodeAt(0) : void 0)
+     }
+     LH.isEventKey = function(HH, BH) {
+       if (HH && "object" === typeof HH) {
+         var LH = HH.which || HH.keyCode || HH.charCode;
+         if (null === LH || void 0 === LH) return !1;
+         if ("string" === typeof BH) {
+           var SH;
+           if (SH = AH[BH.toLowerCase()]) return SH === LH;
+           if (SH = rH[BH.toLowerCase()]) return SH === LH
+ ... (153 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L195` → after: `L492-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L492-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L492-L660) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L195)

```diff
-       return Ee.get(VV)
+       for (var BH = HH._data, LH = 1e3 / HH.oN, AH = BH.nowObject.now() + hH, rH = 0; BH.nowObject.now() >= BH.lastTickStarted + LH && BH.nowObject.now() < AH && ++rH <= SH;) HH.Dv(LH), BH.lastTickStarted += LH;
+       var tH = 5 * (LH + 5),
+         zH = BH.nowObject.now();
+       if (zH - BH.lastTickStarted > tH)
+         for (; zH >= BH.lastTickStarted + LH;) BH.lastTickStarted += LH
+     }
+   },
+   37578: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(45);
+     const rH = AH.useLayoutEffect;
+     const SH = function(HH) {
+       var BH = (0, AH.useRef)(HH);
+       return rH((function() {
+ ... (153 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L198` → after: `L666-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L666-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L666-L709) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L198)

```diff
-   37935: (VV, eV, xV) => {
+   39588: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
+     });
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+             const LH = Object.getOwnPropertyNames(HH);
+             for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
+ ... (28 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L201` → after: `L712-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L712-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L712-L714) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L201)

```diff
-       i: () => UV
+       i: () => SH,
+       m: () => hH,
+       o: () => tH
```

#### 16. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L203-L212` → after: `L716-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L716-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L716-L746) · [Before (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L203-L212)

```diff
-     const JV = "__default",
-       YV = ["end", "stop", "playerror"];
- 
-     function UV(VV, eV) {
-       const xV = () => {
-         if (function(VV) {
-             return "loaded" === VV.state() && !VV.playing() && !VV._playLock
-           }(VV)) {
-           for (const eV of YV) VV.off(eV, xV);
-           VV.unload(), null === eV || void 0 === eV || eV()
+     var AH = LH(38074);
+     class rH {
+       constructor(HH, BH, LH) {
+         this.gradient = HH, this.color1 = BH, this.color2 = LH
+       }
+       getColorToRef(HH) {
+         this.color2 ? AH.g.LerpToRef(this.color1, this.color2, Math.random(), HH) : HH.Tm(this.color1)
+       }
+     }
+     class SH {
+       constructor(HH, BH) {
+         this.gradient = HH, this.color = BH
+       }
+     }
+     class hH {
+       constructor(HH, BH, LH) {
+ ... (15 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L214-L216` → after: `L748-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L748-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/245.js#L748-L1191) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/245.js#L214-L216)

```diff
-       };
-       for (const JV of YV) VV.on(JV, xV);
-       xV()
+         const AH = BH.length - 1;
+         LH(BH[AH], BH[AH], 1)
+       }
+     }
+   },
+   39595: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH
+     });
+     class AH {
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+ ... (428 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L4-L7)

```diff
-   40916: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => JV,
-       f: () => YV
+   42383: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       LobbyManageView: () => UB
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L9-L12` → after: `L8-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L8-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L8-L107) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L9-L12)

```diff
-     const JV = "The world isn't loaded, so no blocks can be seen.",
-       YV = "The world isn't loaded, so nothing in it can be seen."
-   },
-   40310: (VV, eV, xV) => {
+     var AH = LH(45),
+       rH = LH(1475),
+       SH = LH(37881),
+       hH = LH(2642),
+       tH = LH(2650),
+       zH = LH(2628),
+       CH = LH(37439);
+ 
+     function EH() {
+       const [HH, BH] = (0, AH.useState)(new Map);
+       return {
+         get: BH => HH.get(BH),
+         hold: (0, AH.useCallback)(((HH, LH, AH) => {
+           BH((BH => new Map(BH).set(HH, LH))), AH.then((() => {
+             BH((BH => {
+               const LH = new Map(BH);
+ ... (84 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L14` → after: `L109-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L109-L119) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L14)

```diff
-       return !(!VV.lobbyLeaderboardInfo && !VV.lobbyManage)
+       let {
+         status: BH
+       } = HH;
+       return (0, eH.jsx)("span", {
+         className: GH()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !BH.ok
+         }),
+         children: (0, eH.jsx)(KH.b, {
+           text: BH.text
+         })
+       })
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L28` → after: `L123-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L123-L159) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L28)

```diff
-       JV = VV
+       let {
+         names: BH,
+         cap: LH,
+         filterFrom: rH,
+         moreLabel: SH,
+         reveal: hH = null,
+         renderRow: tH
+       } = HH;
+       const {
+         t: zH
+       } = (0, YH.B)(), [CH, EH] = (0, AH.useState)(!1), [XH, GH] = (0, AH.useState)(""), QH = CH || null !== hH && BH.indexOf(hH) >= LH, MH = (QH || BH.length <= LH) && null !== rH && BH.length > rH, xH = XH.trim().toLowerCase();
+       let vH = QH ? BH : BH.slice(0, LH);
+       return MH && "" !== xH && (vH = vH.filter((HH => HH.toLowerCase().includes(xH)))), (0, eH.jsxs)(eH.Fragment, {
+         children: [MH && (0, eH.jsx)(cH.e, {
+           className: "LobbyManageFilter",
+           placeholderText: zH("lobbyManage:findName"),
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L31-L32` → after: `L162-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L162-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L162-L209) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L31-L32)

```diff
-     function UV(VV, eV) {
-       return JV(VV, eV)
+     function NH(HH) {
+       let {
+         value: BH,
+         placeholder: LH,
+         ariaLabel: rH,
+         maxLength: SH,
+         wide: hH = !1,
+         onSave: tH
+       } = HH;
+       const zH = (0, AH.useRef)(null),
+         [CH, EH] = (0, AH.useState)(0),
+         XH = (0, AH.useRef)(!0),
+         YH = (0, AH.useRef)(null),
+         uH = (0, AH.useRef)({
+           value: BH,
+           onSave: tH
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L34-L48` → after: `L211-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L211-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L211-L217) · [Before (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L34-L48)

```diff
-   },
-   41872: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => bV,
-       h: () => qV,
-       l: () => jV,
-       n: () => EV
-     });
-     var JV = xV(32),
-       YV = xV(41876),
-       UV = xV(41861),
-       yV = xV(41880),
-       pV = xV(41867),
-       QV = xV(41885),
-       nV = xV(41909);
+     const RH = ["mod", "coOwner"],
+       jH = {
+         coOwner: "lobbyManage:roleCanCoOwner",
+         mod: "lobbyManage:roleCanMod",
+         coder: "lobbyManage:roleCanCoder",
+         builder: "lobbyManage:roleCanBuilder"
+       };
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L51-L53` → after: `L220-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L220-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L220-L441) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L51-L53)

```diff
-       var eV, xV;
-       const JV = (0, UV.k)();
-       return JV ? null === (eV = (0, YV.c)(JV.api, VV[0], VV[1], VV[2])) || void 0 === eV || null === (xV = eV.persisted) || void 0 === xV ? void 0 : xV.shared : void 0
+       var BH, LH, SH;
+       let {
+         name: hH,
+         place: tH,
+         openedIn: zH,
+         isYou: CH,
+         manage: XH,
+         hiddenNames: GH,
+         zIndex: QH
+       } = HH;
+       const {
+         t: WH,
+         selectedLanguage: MH
+       } = (0, YH.B)(), [xH, vH] = (0, AH.useState)(null), {
+         state: TH
+       } = XH, UH = `player:${hH}`, VH = function(HH, BH) {
+ ... (206 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L57` → after: `L445-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L445-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L445-L582) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L57)

```diff
-       return `${VV[0]},${VV[1]},${VV[2]}`
+       var BH, LH, rH, SH;
+       let {
+         manage: hH,
+         focusRequest: tH,
+         onFocused: zH
+       } = HH;
+       const {
+         t: CH
+       } = (0, YH.B)(), EH = (0, vH.e)("players"), XH = (0, vH.e)("hiddenPlayerNames"), GH = (0, AH.useRef)(null), {
+         state: QH
+       } = hH, MH = null === EH.localId ? null : null !== (BH = null === (LH = EH.byId[EH.localId]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null, [xH] = (0, AH.useState)((() => UH(QH, MH))), TH = function(HH, BH, LH) {
+         const AH = new Set([...HH.here, ...HH.away, ...HH.banned]),
+           rH = UH(BH, LH),
+           SH = BH => {
+             const LH = rH[BH].filter((HH => !AH.has(HH)));
+             for (const HH of LH) AH.add(HH);
+ ... (122 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L59-L61` → after: `L584-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L584-L592) · [Before (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L59-L61)

```diff
-     const vV = new Map;
-     let rV = null,
-       kV = 0;
+     var DH = LH(5037),
+       wH = LH(1664),
+       ZH = LH(37582),
+       dH = LH(37593),
+       aH = LH(37591),
+       sH = LH(37589),
+       JH = LH(37604),
+       iH = LH(37599),
+       pH = LH(37601);
```

#### 10. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L63` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L594-L596) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L63)

```diff
-     function bV() {
+     function yH(HH) {
+       const BH = new Set;
+       for (const LH of HH) BH.add(LH.toLowerCase());
```

#### 11. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L68-L78` → after: `L601-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L601-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L601-L631) · [Before (L68-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L68-L78)

```diff
-       const eV = null !== rV && rV.key === ZV(VV.pos) ? rV.type : null;
-       if (null === eV) return VV;
-       let xV = null;
-       if ("Iron" === eV) {
-         const {
-           cachedPasskey: eV,
-           ...JV
-         } = BV(VV.pos);
-         xV = {
-           ly: null !== eV && void 0 !== eV ? eV : [0, 0, 0, 0],
-           ...JV
+       var BH, LH;
+       let {
+         state: rH,
+         lobbyName: SH,
+         listed: hH,
+         isListed: tH,
+         Dv: zH,
+         aT: CH,
+         statusOf: EH
+       } = HH;
+       const {
+         t: XH,
+         selectedLanguage: GH
+       } = (0, YH.B)(), uH = (0, wH.l)(), QH = (0, vH.e)("players"), MH = null === QH.localId ? null : null !== (BH = null === (LH = QH.byId[QH.localId]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null, xH = (0, AH.useMemo)((() => (0, sH.k)(uH.friends, SH, rH.her … [truncated]
+         let {
+           refused: BH,
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L80-L85` → after: `L633-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L633-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L633-L711) · [Before (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L80-L85)

```diff
-       }
-       return {
-         ...VV,
-         type: eV,
-         ironChest: xV
-       }
+       }({
+         refused: rH.refused.map((HH => HH.name)),
+         listed: hH,
+         here: rH.here.map((HH => HH.name)),
+         friends: xH.flatMap((HH => "here" === HH.place ? [] : [HH.friend.name])),
+         excluded: [...null === MH ? [] : [MH], ...[...rH.here, ...rH.away].flatMap((HH => "none" === HH.role || (0, sH.l)(hH, HH.name) ? [] : [HH.name]))]
+       }), [UH] = (0, AH.useState)(TH), [VH, OH] = (0, AH.useState)([]), bH = function(HH, BH, LH) {
+         const AH = yH(LH),
+           rH = yH([...LH, ...HH.refused, ...HH.listed, ...HH.suggested]),
+           SH = LH => [...HH[LH].filter((HH => !AH.has(HH.toLowerCase()))), ...BH[LH].filter((HH => {
+             const BH = HH.toLowerCase();
+             return !rH.has(BH) && (rH.add(BH), !0)
+           }))];
+         return {
+           added: [...LH],
+           refused: SH("refused"),
+ ... (63 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L89-L114` → after: `L715-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L715-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L715-L774) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L89-L114)

```diff
-       const eV = wV(VV),
-         xV = null === eV || void 0 === eV ? void 0 : eV.ownerDbId,
-         JV = function(VV) {
-           var eV;
-           let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wV(VV);
-           const JV = ZV(VV),
-             YV = vV.get(JV);
-           return YV ? YV.lastOpened < (null !== (eV = null === xV || void 0 === xV ? void 0 : xV.passkeyLastUpdated) && void 0 !== eV ? eV : 0) ? (vV.delete(JV), null) : [...YV.ly] : null
-         }(VV, eV);
-       return void 0 === xV ? {
-         cachedPasskey: JV
-       } : {
-         ownerDbId: xV,
-         cachedPasskey: JV
-       }
-     }(0, nV.l)(yV.c, (VV => {
- ... (10 more removed lines; see GitHub link above)
+       let {
+         manage: BH,
+         listing: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, YH.B)(), SH = (HH, LH) => ((0, rH.reportAnalyticsClick)({
+         id: "lobby_manage.set_listing",
+         value: HH
+       }), BH.send({
+         type: "setListing",
+         field: HH,
+         value: LH
+       }, `listing:${HH}`)), hH = HH => {
+         const LH = BH.statusOf(`listing:${HH}`);
+         return LH && !LH.ok && (0, eH.jsx)("div", {
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L116-L131` → after: `L776-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L776-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L776-L815) · [Before (L116-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L116-L131)

```diff
-     })), (0, nV.f)((() => {
-       vV.clear(), rV = null, kV++
-     })), (0, nV.h)((() => {
-       null !== rV && (rV = null, kV++, JV.h.QZ("chestToggleFromServer", !1, !0))
-     }));
-     const jV = {
-         boardEditRequested: {
-           watch: VV => (0, JV.i)("EditBoard", (eV => {
-             let {
-               pos: xV
-             } = eV;
-             if (null === xV) return void VV(null);
-             const JV = (0, UV.k)(),
-               YV = (0, UV.v)();
-             JV && YV && VV(YV.readBoardToEdit(JV.api, JV.chunks, xV))
-           }))
+     }
+ 
+     function LB(HH) {
+       let {
+         value: BH,
+         ariaLabel: LH,
+         onSave: rH
+       } = HH;
+       const SH = (0, AH.useRef)(null),
+         hH = (0, AH.useRef)({
+           value: BH,
+           onSave: rH
+         });
+       hH.current = {
+         value: BH,
+         onSave: rH
+ ... (24 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L133-L144` → after: `L817-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L817-L818) · [Before (L133-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L133-L144)

```diff
-         ironChestOpenRequested: {
-           watch: VV => (0, JV.i)("OpenIronChest", (eV => {
-             let {
-               pos: xV
-             } = eV;
-             VV(function(VV) {
-               return {
-                 pos: VV,
-                 ...BV(VV)
-               }
-             }(xV))
-           }))
+         onBlur: HH => {
+           CH(HH.currentTarget)
```

#### 16. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L146-L149` → after: `L820-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L820-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L820-L1254) · [Before (L146-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L146-L149)

```diff
-       },
-       qV = {
-         writeOnBoard(VV) {
-           var eV;
+       })
+     }
+ 
+     function AB(HH) {
+       let {
+         manage: BH
+       } = HH;
+       const {
+         lobbyName: LH,
+         shownLobbyName: AH
+       } = (0, vH.e)("connectedGame");
+       return BH.state.you.canSetVisibility && null !== LH ? (0, eH.jsx)(SB, {
+         manage: BH,
+         lobbyName: LH,
+         worldCode: null !== AH && void 0 !== AH ? AH : LH
+       }, LH) : (0, eH.jsx)(hB, {
+ ... (419 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L151-L153` → after: `L1256-L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1256-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1256-L1257) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L151-L153)

```diff
-             pos: xV,
-             text: JV,
-             textSize: YV
+             rule: BH,
+             children: LH
```

#### 18. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L155-L162` → after: `L1259-L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1259-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1259-L1317) · [Before (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L155-L162)

```diff
-           null === (eV = (0, UV.k)()) || void 0 === eV || eV.send(pV.d.UpdateBoard, (0, pV.W)({
-             En: xV,
-             Bn: JV,
-             jn: YV
-           }))
-         },
-         writeBook(VV) {
-           var eV;
+           return [BH, ...LH]
+         }))
+       }))
+     }
+ 
+     function QB(HH) {
+       let {
+         manage: BH,
+         rowsShown: LH
+       } = HH;
+       const {
+         t: SH
+       } = (0, YH.B)(), hH = (0, vH.e)("hiddenPlayerNames"), {
+         rules: tH
+       } = BH.state, zH = EH(), CH = HH => {
+         const BH = zH.get(HH.key);
+ ... (43 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L164` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1319) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L164)

```diff
-             pages: xV,
+             group: BH,
```

#### 20. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L166` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1321) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L166)

```diff
-             published: YV
+             items: rH
```

#### 21. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L168-L172` → after: `L1323-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1323-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1323-L1349) · [Before (L168-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L168-L172)

```diff
-           null === (eV = (0, UV.k)()) || void 0 === eV || eV.send(pV.d.UpdateBook, (0, pV.Y)({
-             Zn: xV,
-             vn: JV,
-             rn: YV
-           }))
+           const hH = rH.filter((HH => {
+             let {
+               rule: BH
+             } = HH;
+             return QH(BH)
+           }));
+           return 0 === hH.length ? null : (0, eH.jsxs)(AH.Fragment, {
+             children: [(0, eH.jsx)(WH.b, {
+               label: SH(LH)
+             }), hH.map((HH => {
+               let {
+                 rule: BH,
+                 children: LH
+               } = HH;
+               return 0 === LH.length ? TH(BH) : (0, eH.jsxs)("div", {
+                 className: "SettingBoxGroup",
+ ... (11 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L174-L176` → after: `L1351-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1351-L1353) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L174-L176)

```diff
-         writeNameTag(VV) {
-           var eV;
-           null === (eV = (0, UV.k)()) || void 0 === eV || eV.send(pV.d.UpdateNameTag, VV)
+         joining: {
+           icon: "door-open",
+           title: "lobbyManage:joining"
```

#### 23. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L178-L188` → after: `L1355-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1355-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1355-L1361) · [Before (L178-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L178-L188)

```diff
-         setCustomLobbyBlock(VV) {
-           let {
-             pos: eV,
-             blockName: xV
-           } = VV;
-           const JV = (0, UV.v)(),
-             YV = (0, UV.k)();
-           JV && YV && YV.send(pV.d.SetCustomLobbyBlock, (0, pV.J)({
-             vp: JV.blockIdOf(xV),
-             Zp: eV
-           }))
+         rules: {
+           icon: "list",
+           title: "lobbyManage:rules"
+         },
+         leaderboard: {
+           icon: "trophy",
+           title: "lobbyManage:leaderboard"
```

#### 24. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L190-L200` → after: `L1363-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1363-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1363-L1390) · [Before (L190-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L190-L200)

```diff
-       }
-   },
-   41932: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => QV,
-       f: () => yV,
-       i: () => pV
-     });
-     var JV = xV(41852),
-       YV = xV(5281),
-       UV = xV(41861);
+       },
+       MB = 5,
+       xB = (0, AH.memo)((function(HH) {
+         let {
+           page: BH,
+           manage: LH,
+           leaderboard: rH,
+           focusRequest: SH,
+           onFocused: hH,
+           ruleRowsShown: tH
+         } = HH;
+         return "leaderboard" === BH ? (0, eH.jsx)(AH.Suspense, {
+           fallback: (0, eH.jsx)("div", {
+             className: "LobbyManageLoading",
+             children: (0, eH.jsx)(QH.d, {})
+           }),
+ ... (12 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L202-L205` → after: `L1392-L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1392-L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1392-L1406) · [Before (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L202-L205)

```diff
-     function yV() {
-       var VV;
-       const eV = null === (VV = (0, UV.k)()) || void 0 === VV ? void 0 : VV.api.localId;
-       return void 0 === eV || eV === JV.Uc ? null : String(eV)
+     function vB(HH) {
+       let {
+         page: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, YH.B)(), AH = WB[BH];
+       return (0, eH.jsxs)(eH.Fragment, {
+         children: [(0, eH.jsx)(uH.c, {
+           name: AH.icon
+         }), " ", (0, eH.jsx)("span", {
+           className: "LobbyManagePageTitle",
+           children: LH(AH.title)
+         })]
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L209-L214` → after: `L1410-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1410-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1410-L1475) · [Before (L209-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L209-L214)

```diff
-       const eV = (0, UV.k)();
-       if (null !== eV) return VV(eV);
-       let xV = null;
-       const JV = (0, YV.s)((() => {
-         const eV = (0, UV.k)();
-         null !== eV && null === xV && (JV(), xV = VV(eV))
+       var BH;
+       const {
+         t: LH
+       } = (0, YH.B)(), {
+         pages: SH,
+         landing: hH
+       } = HH, zH = (0, AH.useRef)(null), CH = (0, AH.useRef)(null), EH = (0, AH.useRef)(null), XH = (0, AH.useRef)(new Map), [uH, QH] = (0, AH.useState)(null), vH = (0, AH.useRef)(uH), PH = (0, AH.useRef)(0), [TH, UH] = (0, AH.useState)(SH[0]), VH = null !== uH && void 0 !== uH ? … [truncated]
+         const BH = uB(YB(HH.manage.state.rules, (HH => HH.value)));
+         return Math.max(1, Math.ceil(BH.length / MB))
+       })), mH = bH.flatMap((HH => "rules" === HH ? Array(kH).fill(HH) : [HH])), oH = function(HH, BH) {
+         const [LH, rH] = (0, AH.useState)(HH), SH = LH >= BH;
+         return SH && LH !== 1 / 0 && rH(1 / 0), (0, AH.useLayoutEffect)((() => {
+           if (SH) return;
+           let HH = !0;
+           return (0, xH.e)().then((() => {
+             HH && rH((HH => HH + 1))
+ ... (50 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L216-L226` → after: `L1477-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1477-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1477-L1505) · [Before (L216-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L216-L226)

```diff
-       return () => {
-         var VV;
-         JV(), null === (VV = xV) || void 0 === VV || VV()
-       }
-     }
- 
-     function QV(VV, eV, xV) {
-       return {
-         current: () => {
-           const xV = (0, UV.k)();
-           return null === xV ? eV : VV(xV)()
+       const {
+         onFocused: FH
+       } = HH, DH = (0, AH.useCallback)((HH => {
+         null !== vH.current && NH(vH.current), FH(HH)
+       }), [FH]);
+       (0, AH.useLayoutEffect)((() => {
+         const HH = vH.current;
+         null !== HH && (!lH || SH.indexOf(mH[oH - 1]) < SH.indexOf(HH)) && NH(HH)
+       }), [oH]), (0, AH.useEffect)((() => {
+         const HH = new ResizeObserver((() => {
+           null !== vH.current ? NH(vH.current) : gH()
+         }));
+         return HH.observe(zH.current), HH.observe(CH.current), () => {
+           HH.disconnect()
+         }
+       }), []), (0, AH.useLayoutEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L228-L233` → after: `L1507-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1507-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1507-L1559) · [Before (L228-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L228-L233)

```diff
-         watch: eV => pV((JV => {
-           const YV = VV(JV);
-           let UV = YV();
-           return eV(UV), xV((() => {
-             const VV = YV();
-             VV !== UV && (UV = VV, eV(VV))
+         onFocus: HH => {
+           var BH;
+           const LH = null === vH.current ? null : XH.current.get(vH.current);
+           !LH || LH.contains(HH.target) || null !== (BH = EH.current) && void 0 !== BH && BH.contains(HH.target) || nH()
+         },
+         children: [SH.length > 1 && (0, eH.jsx)("div", {
+           ref: EH,
+           className: "LobbyManageChips",
+           children: (0, eH.jsx)(MH.b, {
+             options: SH.map((HH => ({
+               value: HH,
+               label: (0, eH.jsx)(vB, {
+                 page: HH
+               }),
+               ariaLabel: LH(WB[HH].title)
+             }))),
+ ... (37 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L235` → after: `L1561-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1561-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1561-L1568) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L235)

```diff
-         }))
+         })]
+       })
+     }
+ 
+     function TB(HH) {
+       return void 0 === (null === HH || void 0 === HH ? void 0 : HH.page) ? null : {
+         page: HH.page,
+         seq: HH.seq
```

#### 30. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L239` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1629) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L239)

```diff
-   41923: (VV, eV, xV) => {
+   37439: (HH, BH, LH) => {
```

#### 31. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L241` → after: `L1631-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1631-L1632) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L241)

```diff
-       b: () => nV
+       e: () => EH,
+       i: () => zH
```

#### 32. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L243-L250` → after: `L1634-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1634-L1638) · [Before (L243-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L243-L250)

```diff
-     var JV = xV(41861),
-       YV = xV(41932),
-       UV = xV(41936);
- 
-     function yV() {
-       var VV, eV;
-       return null !== (VV = null === (eV = (0, JV.k)()) || void 0 === eV ? void 0 : eV.itemBridgeSources) && void 0 !== VV ? VV : UV.e
-     }
+     var AH = LH(1475),
+       rH = LH(2036),
+       SH = LH(1998);
+     const hH = 1e4;
+     let tH = 0;
```

#### 33. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L253-L257` → after: `L1641-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1641-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1641-L1689) · [Before (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L253-L257)

```diff
-       return {
-         current: () => yV().states[VV].current(),
-         watch: eV => (0, YV.i)((xV => {
-           const JV = xV.itemBridgeSources.states[VV];
-           return eV(JV.current()), JV.watch(eV)
+       const BH = ++tH;
+       return new Promise((LH => {
+         const tH = BH => {
+             zH(), clearTimeout(CH), !1 === (null === BH || void 0 === BH ? void 0 : BH.ok) && (0, AH.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: HH.type
+             }), LH(BH)
+           },
+           zH = rH.e.subscribe("lobbyManage", (HH => {
+             const LH = function(HH, BH) {
+               var LH;
+               return null !== (LH = null === HH || void 0 === HH ? void 0 : HH.results.find((HH => HH.requestId === BH))) && void 0 !== LH ? LH : null
+             }(HH, BH);
+             null !== LH && tH(LH)
+           })),
+           CH = setTimeout((() => {
+ ... (33 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L260-L264` → after: `L1692-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1692-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1692-L1696) · [Before (L260-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L260-L264)

```diff
-     }
- 
-     function QV(VV) {
-       return {
-         watch: eV => (0, YV.i)((xV => xV.itemBridgeSources.events[VV].watch(eV)))
+       show(HH, BH) {
+         this.statuses.set(HH, {
+           ...BH,
+           until: Date.now() + 4e3
+         }), this.onChange()
```

#### 35. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L266-L297` → after: `L1698-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1698-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1698-L1717) · [Before (L266-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L266-L297)

```diff
-     }
-     const nV = {
-       states: {
-         inventory: pV("inventory"),
-         hotbar: pV("hotbar"),
-         crafting: pV("crafting"),
-         heldItemAim: pV("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: QV("hotbarSlotRequested"),
-         hotbarScrolled: QV("hotbarScrolled"),
-         numberKeyPressed: QV("numberKeyPressed"),
-         inventoryDropRequested: QV("inventoryDropRequested"),
-         chestToggled: QV("chestToggled"),
-         chestRefreshed: QV("chestRefreshed"),
-         inventorySynced: QV("inventorySynced"),
- ... (16 more removed lines; see GitHub link above)
+       expire(HH) {
+         for (const [BH, LH] of this.statuses) LH.until <= HH && this.statuses.delete(BH)
+       }
+       nextDeadline() {
+         let HH = null;
+         for (const LH of this.statuses.values()) {
+           var BH;
+           HH = Math.min(null !== (BH = HH) && void 0 !== BH ? BH : 1 / 0, LH.until)
+         }
+         return HH
+       }
+       statusOf(HH, BH) {
+         const LH = this.statuses.get(HH);
+         return !LH || LH.until <= BH ? null : {
+           ok: LH.ok,
+           text: LH.text
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L301` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1721) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L301)

```diff
-   41936: (VV, eV, xV) => {
+   37601: (HH, BH, LH) => {
```

#### 37. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L305` → after: `L1725-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1725-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1725-L1732) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L305)

```diff
-     var JV = xV(40916);
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH),
+       hH = LH(1706),
+       tH = LH(1455),
+       zH = LH(1313),
+       CH = LH(1315),
+       EH = LH(1225);
```

#### 38. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L308-L544` → after: `L1735-L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1735-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1735-L1751) · [Before (L308-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L308-L544)

```diff
-       return {
-         current: () => VV,
-         watch: () => () => {}
-       }
-     }
- 
-     function UV() {}
-     const yV = Object.freeze([0, 0, 0]),
-       pV = {
-         states: {
-           health: YV({
-             health: null,
-             maxHealth: null,
-             shield: null,
-             maxShield: null
-           }),
- ... (221 more removed lines; see GitHub link above)
+       let {
+         label: BH,
+         icon: LH,
+         placeholder: rH,
+         onSubmit: XH
+       } = HH;
+       const GH = (0, AH.useRef)(null),
+         [YH, uH] = (0, AH.useState)(""),
+         [QH, WH] = (0, AH.useState)("Enter"),
+         [MH, xH] = (0, AH.useState)(null);
+       (0, AH.useEffect)((() => {
+         if ("Success" !== QH && "Error" !== QH) return;
+         const HH = setTimeout((() => {
+           "Success" === QH && GH.current && (GH.current.value = "", uH("")), WH("Enter")
+         }), "Success" === QH ? 1e3 : 4e3);
+         return () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L546` → after: `L1753-L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1753-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1753-L1793) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L546)

```diff
-       }
+       }), [QH]);
+       const vH = () => {
+         const HH = YH.trim();
+         "" !== HH && "Enter" === QH && (WH("Loading"), XH(HH).then((HH => {
+           GH.current && ("error" in HH ? null === HH.error ? WH("Enter") : (xH(HH.error), WH("Error")) : WH("Success"))
+         })))
+       };
+       return (0, EH.jsxs)("div", {
+         className: "PlayerNameField",
+         onKeyDown: HH => {
+           HH.target === GH.current && "Escape" !== HH.key && HH.stopPropagation()
+         },
+         children: [(0, EH.jsxs)("div", {
+           className: SH()("AddFriendBodyOverlay", `AddFriendBodyOverlay${QH}`),
+           children: ["Loading" === QH && (0, EH.jsx)(zH.d, {}), "Success" === QH && (0, EH.jsx)(CH.c, {
+             name: "check"
+ ... (25 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L548` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1795) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L548)

```diff
-   41856: (VV, eV, xV) => {
+   37593: (HH, BH, LH) => {
```

#### 41. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L550-L554` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1797) · [Before (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L550-L554)

```diff
-       d: () => NV,
-       e: () => AV,
-       f: () => XV,
-       i: () => PV,
-       j: () => FV
+       d: () => XH
```

#### 42. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L556-L580` → after: `L1799-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1799-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1799-L1863) · [Before (L556-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L556-L580)

```diff
-     var JV = xV(40472),
-       YV = xV(1252),
-       UV = xV(2080),
-       yV = xV(2094),
-       pV = xV(3719),
-       QV = xV(38003),
-       nV = xV(1391),
-       wV = xV(41861),
-       ZV = xV(5319),
-       vV = xV(2660),
-       rV = xV(41867),
-       kV = xV(41872),
-       bV = xV(41923);
-     let EV = null;
- 
-     function BV(VV) {
- ... (9 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH),
+       hH = LH(1123),
+       tH = LH(1315),
+       zH = LH(1225);
+     const CH = {
+         unlisted: "link",
+         public: "globe",
+         whitelist: "user-check",
+         private: "lock"
+       },
+       EH = ["unlisted", "public", "whitelist", "private"];
+ 
+     function XH(HH) {
+       let {
+ ... (49 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L585-L586` → after: `L1877-L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1877-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1877-L1913) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L585-L586)

```diff
-       const eV = (0, pV.d)(VV);
-       return void 0 !== eV && (0, pV.g)(eV) === VV
+       let {
+         IX: BH,
+         children: LH,
+         ...tH
+       } = HH;
+       const {
+         t: zH
+       } = (0, AH.B)();
+       return (0, hH.jsx)("div", {
+         className: "WhitelistTickRow",
+         onClick: () => {
+           BH.onChange(!BH.on)
+         },
+         children: (0, hH.jsx)(rH.d, {
+           ...tH,
+           opensProfileCard: !1,
+ ... (21 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L590-L597` → after: `L1933-L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1933-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1933-L1936) · [Before (L590-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L590-L597)

```diff
-       var eV;
-       const xV = null === (eV = (0, wV.k)()) || void 0 === eV ? void 0 : eV.tables;
-       if (void 0 === xV || !jV(VV)) return;
-       const JV = {
-           displayName: xV.getDisplayName(VV)
-         },
-         YV = xV.getItemStat(VV, "description");
-       void 0 !== YV && null !== YV && (JV.description = YV);
+       let {
+         worldCode: BH,
+         message: LH
+       } = HH;
```

#### 45. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L599-L632` → after: `L1938-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1938-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1938-L1964) · [Before (L599-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L599-L632)

```diff
-         rootName: UV
-       } = xV.getMetaInfo(VV);
-       UV !== VV && (JV.rootName = UV);
-       const yV = xV.getItemStat(VV, "armourReduction");
-       return void 0 !== yV && null !== yV && (JV.armourReduction = yV), JV
-     }(0, wV.z)((VV => {
-       EV = VV
-     }));
-     const tV = (0, yV.h)("DisplayName", "Description");
- 
-     function FV() {
-       return Boolean(UV.c.get("useInventory") && UV.c.get("useFullInventory"))
-     }
-     let TV = null;
-     const PV = {
-         inventory: function() {
- ... (18 more removed lines; see GitHub link above)
+         t: uH
+       } = (0, rH.B)(), {
+         isTouchScreen: QH
+       } = (0, tH.m)(["isTouchScreen"]), WH = hH.featureFlags.canUseInviteLinks, MH = (0, EH.i)(WH && null === LH), [xH, vH] = (0, CH.j)(), PH = (0, AH.useRef)(null);
+       if (null !== LH) return (0, YH.jsxs)("div", {
+         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
+         children: [(0, YH.jsx)(GH.c, {
+           name: "lock"
+         }), (0, YH.jsx)("span", {
+           children: LH
+         })]
+       });
+       const TH = WH ? MH : BH,
+         UH = QH && WH && (0, CH.b)();
+       return (0, YH.jsxs)("div", {
+         className: "WorldSocialLinkRow",
+ ... (11 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L634-L646` → after: `L1966-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1966-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1966-L1982) · [Before (L634-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L634-L646)

```diff
-         }(),
-         crafting: bV.b.states.crafting,
-         stationItems: {
-           current() {
-             var VV;
-             return (null === (VV = TV) || void 0 === VV ? void 0 : VV.namesVersion) !== (0, pV.k)() && (TV = {
-               namesVersion: (0, pV.k)(),
-               items: {
-                 enchantable: BV((VV => {
-                   const eV = (0, pV.d)(VV);
-                   return void 0 !== eV && null !== EV && EV.enchantmentPerksOf(eV).length > 0 || void 0
-                 })),
-                 salvageable: BV((VV => !(!jV(VV) || null === (0, QV.e)(VV)) || void 0))
+         }), (0, YH.jsxs)(XH.i, {
+           className: "WorldSocialCopy",
+           disabled: null === TH,
+           onClick: () => {
+             null !== TH && (0, CH.f)(TH, {
+               useShareSheet: UH,
+               onOutcome: HH => {
+                 if ((0, zH.reportAnalyticsClick)({
+                     id: "world_social.copy_link",
+                     value: "copied" !== HH || WH ? HH : "code"
+                   }), "copied" === HH) vH();
+                 else if ("failed" === HH) {
+                   var BH;
+                   null === (BH = PH.current) || void 0 === BH || BH.focus(), SH.h.showMessage({
+                     translationKey: "partyBar:copyFailed"
+                   })
+ ... (1 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L648` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1984) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L648)

```diff
-             }), TV.items
+             })
```

#### 48. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L650-L729` → after: `L1986-L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1986-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1986-L1991) · [Before (L650-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L650-L729)

```diff
-           watch: () => () => {}
-         },
-         itemInfo: function() {
-           let VV = null;
-           const eV = () => {
-             var eV;
-             return (null === (eV = VV) || void 0 === eV ? void 0 : eV.namesVersion) !== (0, pV.k)() && (VV = {
-               namesVersion: (0, pV.k)(),
-               infos: BV(qV)
-             }), VV.infos
-           };
-           return {
-             current: eV,
-             watch: xV => (0, yV.q)((JV => {
-               JV.some(tV) && (VV = null, xV(eV()))
-             }))
- ... (64 more removed lines; see GitHub link above)
+           children: [(0, YH.jsx)(GH.c, {
+             name: xH ? "check" : UH ? "up-from-bracket" : "copy"
+           }), " ", uH(xH ? "general:copied" : UH ? "worldSocial:share" : "general:copy")]
+         })]
+       })
+     }
```

#### 49. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L731` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1993) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L731)

```diff
-   41914: (VV, eV, xV) => {
+   37597: (HH, BH, LH) => {
```

#### 50. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L733` → after: `L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1995) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L733)

```diff
-       d: () => JV,
+       e: () => YH,
```

#### 51. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L735-L738` → after: `L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1997) · [Before (L735-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L735-L738)

```diff
-       j: () => yV,
-       k: () => YV,
-       o: () => pV,
-       r: () => nV
+       k: () => XH
```

#### 52. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L740-L742` → after: `L1999-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1999-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L1999-L2018) · [Before (L740-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L740-L742)

```diff
-     class JV extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
+     var AH = LH(602),
+       rH = LH(1123),
+       SH = LH(1664),
+       hH = LH(2893),
+       tH = LH(2833),
+       zH = LH(1455),
+       CH = LH(37599),
+       EH = LH(1225);
+ 
+     function XH(HH, BH) {
+       var LH;
+       return {
+         isError: !1,
+         name: HH,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== BH && void 0 !== BH ? BH : {},
+ ... (4 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L747` → after: `L2023-L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2023-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2023-L2065) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L747)

```diff
-       return VV instanceof RangeError && /call stack/i.test(VV.message) || VV instanceof Error && "InternalError" === VV.name && /recursion/i.test(VV.message)
+       let {
+         player: BH,
+         isFriend: LH = !1,
+         status: AH,
+         showLocation: zH = void 0 === AH,
+         IX: XH,
+         onSendFriendRequest: GH,
+         actions: YH,
+         zIndex: uH
+       } = HH;
+       const {
+         t: QH
+       } = (0, rH.B)();
+       let WH = AH;
+       null !== XH && void 0 !== XH && XH.on && (WH = (0, EH.jsxs)(EH.Fragment, {
+         children: [null !== AH && void 0 !== AH ? AH : (0, EH.jsx)(tH.c, {
+ ... (27 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L752-L758` → after: `L2069-L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2069-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2069-L2094) · [Before (L752-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L752-L758)

```diff
-       var eV;
-       return VV instanceof WebAssembly.RuntimeError || VV instanceof JV || YV(VV) && UV.test(null !== (eV = VV.stack) && void 0 !== eV ? eV : "")
-     }
- 
-     function pV(VV, eV) {
-       if (yV(VV)) throw VV;
-       console.error(eV, VV)
+       let {
+         row: BH,
+         IX: LH,
+         canInvite: AH,
+         invited: SH,
+         onInvite: hH,
+         zIndex: tH
+       } = HH;
+       const {
+         t: CH
+       } = (0, rH.B)(), XH = "online" === BH.place ? zH.i : zH.m;
+       return (0, EH.jsx)(GH, {
+         player: BH.friend,
+         isFriend: !0,
+         status: "here" === BH.place ? CH("worldSocial:inThisWorld") : void 0,
+         showLocation: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L761-L762` → after: `L2107-L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2107-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2107-L2115) · [Before (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L761-L762)

```diff
-     function QV(VV, eV, xV, YV, UV) {
-       if (eV % YV !== 0 || eV + xV > VV.byteLength) throw new JV(`${UV}: ${xV} bytes at ${eV}, ${YV}-aligned, outside ${VV.byteLength} bytes of memory`)
+     function hH(HH) {
+       const BH = {
+         lobbyName: HH,
+         answer: null,
+         response: rH.e.getSocialSettings(HH)
+       };
+       return BH.response.then((HH => {
+         BH.answer = HH
+       })), BH
```

#### 56. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L765-L766` → after: `L2119-L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2119-L2120) · [Before (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L765-L766)

```diff
-     function nV(VV, eV, xV, JV, YV) {
-       return 0 === xV ? null : (QV(eV, xV, JV * VV.BYTES_PER_ELEMENT, VV.BYTES_PER_ELEMENT, YV), new VV(eV, xV, JV))
+     function zH(HH) {
+       tH.set(HH.lobbyName, HH)
```

#### 57. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L769-L770` → after: `L2123-L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2123-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2123-L2184) · [Before (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L769-L770)

```diff
-     function wV(VV, eV, xV, JV, YV) {
-       return 0 === eV ? null : (QV(VV, eV, xV, JV, YV), new DataView(VV, eV, xV))
+     function CH(HH) {
+       const [BH] = (0, AH.useState)((() => function(HH) {
+         var BH;
+         const LH = null !== (BH = tH.get(HH)) && void 0 !== BH ? BH : null;
+         return null !== LH && void 0 !== LH && LH.answer && "error" in LH.answer ? null : LH
+       }(HH))), [LH, hH] = (0, AH.useState)((() => null !== BH && void 0 !== BH && BH.answer && "settings" in BH.answer ? BH.answer.settings : null)), [zH, CH] = (0, AH.useState)(!0), [EH, XH] = (0, AH.useState)(null !== LH), GH = (0, AH.useRef)(LH);
+       GH.current = LH;
+       const YH = (0, AH.useRef)(0),
+         uH = (0, AH.useRef)(0),
+         QH = (0, AH.useRef)(!1),
+         WH = (0, AH.useRef)(!0),
+         MH = (0, AH.useCallback)((async BH => {
+           const LH = ++YH.current,
+             AH = await (null !== BH && void 0 !== BH ? BH : rH.e.getSocialSettings(HH));
+           WH.current && LH === YH.current && (XH(!0), CH(!1), "error" in AH || hH(AH.settings))
+         }), [HH]),
+ ... (46 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L773` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2187) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L773)

```diff
-   41861: (VV, eV, xV) => {
+   37604: (HH, BH, LH) => {
```

#### 59. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L777-L783` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2190) · [Before (L777-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L777-L783)

```diff
-       i: () => BV,
-       k: () => bV,
-       n: () => EV,
-       p: () => vV,
-       t: () => rV,
-       v: () => wV,
-       z: () => ZV
+       f: () => SH
```

#### 60. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L785-L790` → after: `L2192-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2192-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2192-L2198) · [Before (L785-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L785-L790)

```diff
-     class JV extends Error {
-       constructor(VV) {
-         super(`the join's code did not load: ${VV instanceof Error?VV.message:String(VV)}`, {
-           cause: VV
-         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === VV || void 0 === VV ? void 0 : VV.request
-       }
+     var AH = LH(152);
+     const rH = new Map;
+ 
+     function SH(HH, BH) {
+       var LH;
+       const AH = null !== (LH = rH.get(HH)) && void 0 !== LH ? LH : new Map;
+       AH.set(BH, Date.now()), rH.set(HH, AH)
```

#### 61. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L799-L803` → after: `L2211-L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2211-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2211-L2214) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L799-L803)

```diff
-       try {
-         VV(eV)
-       } catch (xV) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", xV)
-       }
+       const LH = BH.toLowerCase();
+       for (const AH of HH)
+         if (AH.toLowerCase() === LH) return !0;
+       return !1
```

#### 62. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L806` → after: `L2217-L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2217-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2217-L2237) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L806)

```diff
-     function wV() {
+     function rH(HH, BH, LH) {
+       const rH = [],
+         SH = [],
+         hH = [];
+       for (const tH of HH) !tH.isError && tH.name && ("inGame" === tH.location.status && tH.location.inLobbyName === BH || AH(LH, tH.name) ? SH.push({
+         friend: tH,
+         place: "here"
+       }) : "offline" === tH.location.status ? hH.push({
+         friend: tH,
+         place: "offline"
+       }) : rH.push({
+         friend: tH,
+         place: "online"
+       }));
+       return [...rH, ...SH, ...hH]
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L810-L811` → after: `L2241-L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2241-L2242) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L810-L811)

```diff
-     function ZV(VV) {
-       pV.push(VV), null !== QV && nV(VV, QV)
+     function hH(HH, BH) {
+       return null === HH || void 0 === HH || !HH.canManage || AH(HH.whitelist, BH) ? "none" : "whitelist" === HH.visibility ? "required" : "quiet"
```

#### 64. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L815-L829` → after: `L2246-L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2246-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2246-L2250) · [Before (L815-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L815-L829)

```diff
-       return YV ??= Promise.all([xV.e(84), xV.e(111), xV.e(86), xV.e(244), xV.e(89), xV.e(245), xV.e(224), xV.e(109), xV.e(264), xV.e(296), xV.e(48), xV.e(213), xV.e(232), xV.e(222), xV.e(205), xV.e(206), xV.e(170), xV.e(101), xV.e(134), xV.e(272), xV.e(68)]).then((() => xV(45460 … [truncated]
-         eV.loadAudio(VV), QV = eV;
-         for (const VV of pV) nV(VV, eV);
-         return eV
-       })).catch((VV => {
-         throw YV = null, VV
-       })), YV
-     }
-     async function rV(VV, eV) {
-       try {
-         const xV = await vV(VV);
-         await xV.loadClientGame(eV)
-       } catch (xV) {
-         throw new JV(xV)
-       }
+       if (null === HH) return !0;
+       const {
+         visibility: BH
+       } = HH;
+       return "public" === BH || "unlisted" === BH || "whitelist" === BH && HH.canManage
```

#### 65. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L832-L835` → after: `L2253-L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2253-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2253-L2263) · [Before (L832-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L832-L835)

```diff
-     function kV(VV, eV) {
-       UV = {
-         running: VV,
-         shell: eV
+     function zH(HH, BH, LH) {
+       if (LH) {
+         const LH = BH.filter((BH => !AH(HH.whitelist, BH)));
+         return {
+           ...HH,
+           whitelist: [...HH.whitelist, ...LH]
+         }
+       }
+       return {
+         ...HH,
+         whitelist: HH.whitelist.filter((HH => !AH(BH, HH)))
```

#### 66. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L839-L850` → after: `L2267-L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2267-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2267-L2269) · [Before (L839-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L839-L850)

```diff
-     function bV() {
-       return yV
-     }
-     async function EV(VV) {
-       const eV = UV;
-       if ((null === eV || void 0 === eV ? void 0 : eV.running) !== VV) throw new Error("the core's session has ended");
-       const xV = await vV(eV.shell.audio).catch((VV => {
-         throw new JV(VV)
-       }));
-       if (null !== yV) return yV;
-       if (UV !== eV || VV.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (yV = xV.startGameHost(VV, eV.shell), null === yV) throw new Error("the core's shared tables didn't read, so the game can't start");
+     function CH(HH, BH) {
+       const LH = [];
+       for (let AH = 0; AH < HH.length; AH += BH) LH.push(HH.slice(AH, AH + BH));
```

#### 67. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L855` → after: `L2290-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L2290-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/246.js#L2290-L2302) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/246.js#L855)

```diff
-       null !== yV && (null !== QV ? QV.endGameHost(yV) : yV.closeGame()), yV = null, UV = null
+       const HH = (0, rH.j)("lobbyLeaderboardInfo");
+       return (0, AH.useMemo)((() => function(HH) {
+         if (null === HH) return null;
+         const BH = Object.entries(HH),
+           LH = BH.filter((HH => {
+             let [, BH] = HH;
+             return void 0 !== BH
+           }));
+         if (LH.length === BH.length) return HH;
+         const AH = Object.fromEntries(LH),
+           rH = Object.keys(HH).filter((HH => !Object.hasOwn(AH, HH)));
+         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${rH.join(", ")}`), AH
+       }(HH)), [HH])
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   38106: (VV, eV, xV) => {
+   37747: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L6-L7)

```diff
-       d: () => FV,
-       e: () => tV
+       c: () => OH,
+       g: () => UH,
+       h: () => VH,
+       j: () => uH
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L20` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L11) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L9-L20)

```diff
-     var JV = xV(4650),
-       YV = xV(1542),
-       UV = xV(62),
-       yV = xV(7024),
-       pV = xV(4646),
-       QV = xV(1332),
-       nV = xV(2051),
-       wV = xV(2021),
-       ZV = xV(1551),
-       vV = xV(1220),
-       rV = xV(38112),
-       kV = xV(1146),
+     var AH = LH(1038),
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L22-L26` → after: `L13-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L13-L21) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L22-L26)

```diff
-       EV = xV(1382),
-       BV = xV(1414),
-       jV = xV(1309),
-       qV = xV(1321);
-     const tV = "SleepingOverlay";
+       SH = LH(45),
+       hH = LH(69),
+       tH = LH(1369),
+       zH = LH(1455),
+       CH = LH(1365),
+       EH = LH(1214),
+       XH = LH(1123),
+       GH = LH(37754),
+       YH = LH(1225);
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L28` → after: `L23-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L23-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L23-L75) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L28)

```diff
-     function FV() {
+     function uH(HH) {
+       const [BH, LH] = (0, SH.useState)((() => (0, GH.l)(HH)));
+       return (0, SH.useEffect)((() => (LH((0, GH.l)(HH)), (0, GH.F)((() => {
+         LH((0, GH.l)(HH))
+       })))), [HH]), BH
+     }
+ 
+     function QH(HH, BH) {
+       "function" === typeof HH ? HH(BH) : HH && (HH.current = BH)
+     }
+ 
+     function WH(HH) {
+       let {
+         tutorial: BH,
+         step: LH,
+         enabled: AH = !0
+ ... (37 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L31` → after: `L78-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L78-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L78-L108) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L31)

```diff
-       } = (0, vV.A)(), [eV, xV] = (0, UV.useState)(!1), [kV, FV] = (0, UV.useState)(null), [PV, AV] = (0, UV.useState)(1), [NV, XV] = (0, UV.useState)(!1), [MV, zV] = (0, UV.useState)(!1), GV = (0, UV.useRef)(0), WV = (0, UV.useRef)(!1), RV = (0, UV.useRef)(!1), gV = (0, UV.useRe … [truncated]
+       } = (0, XH.B)(), tH = MH(BH, LH);
+       return (0, YH.jsxs)(YH.Fragment, {
+         children: [(0, YH.jsx)("div", {
+           className: "TutorialStepText",
+           children: AH
+         }), (0, YH.jsxs)("div", {
+           className: "TutorialStepButtons",
+           children: [(0, GH.p)(BH, LH) && (0, YH.jsx)(zH.m, {
+             className: "TutorialStepButton",
+             onClick: () => {
+               null === SH || void 0 === SH || SH(), (0, GH.o)(BH, LH)
+             },
+             children: hH("tutorial:back")
+           }), !rH && (0, YH.jsx)(zH.i, {
+             className: "TutorialStepButton",
+             onClick: () => {
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L33-L36` → after: `L110-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L110-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L110-L154) · [Before (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L33-L36)

```diff
-       function iV() {
-         const VV = null !== kV && void 0 !== kV ? kV : "Rested Speed";
-         nV.gameBridge.send("wakeUp", MV ? VV : null), DV.current = null, xV(!1), FV(null), AV(1), XV(!1), zV(!1)
-       }
+     function TH(HH) {
+       let {
+         rect: BH,
+         margin: LH
+       } = HH;
+       const AH = Math.max(0, BH.top - LH),
+         rH = BH.bottom + LH,
+         SH = Math.max(0, BH.left - LH),
+         hH = BH.right + LH;
+       return (0, YH.jsxs)(YH.Fragment, {
+         children: [(0, YH.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: 0,
+             left: 0,
+             right: 0,
+ ... (29 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L38-L46` → after: `L156-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L156-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L156-L194) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L38-L46)

```diff
-       function CV() {
-         return !NV && (iV(), !0)
-       }
-       return (0, YV.g)("PlayerPhysicsTypeUpdate", (VV => {
-         VV !== DV.current && (DV.current = VV, VV === yV.q.SLEEPING ? (RV.current || (GV.current = nV.gameBridge.lookup("cameraZoom", null), RV.current = !0), WV.current = !0, nV.gameBridge.send("setCameraZoom", 3), xV(!0), AV(function() {
-           for (const VV of nV.gameBridge.lookup("blocksStandingOn", null)) {
-             if (rV.b.leafBeds.includes(VV)) return console.log(`Found leaf bed: ${VV}`), 1;
-             if (rV.b.woolBeds.includes(VV)) return console.log(`Found woold bed: ${VV}`), 2;
-             if (rV.b.strongBeds.includes(VV)) return console.log(`Found strong bed ${VV}`), 3
+     function UH(HH) {
+       let {
+         target: BH,
+         placement: LH,
+         boxRef: AH,
+         className: zH,
+         spotlight: EH = !0,
+         spotlightMargin: XH = PH,
+         children: GH
+       } = HH;
+       const {
+         getArrowProps: uH,
+         getTooltipProps: QH,
+         setTooltipRef: WH,
+         setTriggerRef: MH,
+         update: xH
+ ... (23 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L48-L61` → after: `L196-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L196-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L196-L221) · [Before (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L48-L61)

```diff
-           return 1
-         }())) : (RV.current = !1, xV(!1), FV(null), AV(1)))
-       })), (0, UV.useEffect)((() => () => {
-         (0, QV.m)(tV)
-       }), []), (0, UV.useEffect)((() => {
-         eV ? (0, QV.p)(tV) : ((0, QV.m)(tV), WV.current && (nV.gameBridge.send("setCameraZoom", GV.current), WV.current = !1))
-       }), [eV]), (0, jV.s)("overlay", gV, CV, eV), (0, qV.jsx)(JV.e, {
-         className: "SleepingOverlay",
-         "data-camera-keeper": "",
-         in: eV,
-         timeout: 300,
-         nodeRef: gV,
-         unmountOnExit: !0,
-         children: (0, qV.jsx)("div", {
+         }), [HH, BH]), LH
+       }(BH, EH);
+       (0, SH.useEffect)((() => {
+         null === xH || void 0 === xH || xH()
+       }), [vH, xH]), (0, SH.useEffect)((() => {
+         if (EH || !BH || !xH) return;
+         const HH = new ResizeObserver((() => {
+           xH()
+         }));
+         return HH.observe(BH), BH.parentElement && HH.observe(BH.parentElement), () => {
+           HH.disconnect()
+         }
+       }), [BH, EH, xH]), (0, SH.useEffect)((() => {
+         EH && (null === BH || void 0 === BH || BH.scrollIntoView({
+           block: "nearest",
+           inline: "nearest"
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L63-L139` → after: `L223-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L223-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L223-L232) · [Before (L63-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L63-L139)

```diff
-           onClick: VV => {
-             CV() && VV.stopPropagation()
-           },
-           children: (0, qV.jsxs)("div", {
-             className: "SleepingOverlayBody",
-             children: [(0, qV.jsx)("div", {
-               className: "SleepingOverlayPerkList",
-               children: pV.g.map((eV => (0, qV.jsxs)(TV, {
-                 restedEffect: eV,
-                 Vw: kV,
-                 setChosenRestedEffect: FV,
-                 children: [(0, qV.jsxs)("div", {
-                   className: "SleepingOverlayPerkTitle",
-                   children: [(0, qV.jsx)(wV.b, {
-                     text: [{
-                       icon: eV
- ... (61 more removed lines; see GitHub link above)
+           ...QH({
+             className: rH()("tooltip-container SmallTextLight TutorialStep", zH)
+           }),
+           children: [GH, (0, YH.jsx)("div", {
+             ...uH({
+               className: "tooltip-arrow"
+             })
+           })]
+         })]
+       }), (0, CH.j)())
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L141` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L234) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L141)

```diff
-     const TV = (0, UV.memo)((function(VV) {
+     const VH = (0, SH.forwardRef)((function(HH, BH) {
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L144-L146` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L238) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L144-L146)

```diff
-         restedEffect: xV,
-         Vw: JV,
-         setChosenRestedEffect: YV
+         ...rH
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L148-L157` → after: `L240-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L240-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L240-L257) · [Before (L148-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L148-L157)

```diff
-       return xV === JV ? (0, qV.jsx)(ZV.m, {
-         onClick: VV => {
-           VV.stopPropagation()
-         },
-         children: eV
-       }) : (0, qV.jsx)(ZV.j, {
-         onClick: VV => {
-           YV(xV), VV.stopPropagation()
-         },
-         children: eV
+       const hH = WH(rH),
+         tH = (0, SH.useRef)(null),
+         zH = (0, SH.useRef)(null);
+       xH(rH, hH, tH, zH);
+       const [CH, EH] = (0, SH.useState)(null), XH = AH.ref, GH = (0, SH.useCallback)((HH => {
+         zH.current = HH, EH(HH), QH(BH, HH), QH(XH, HH)
+       }), [BH, XH]);
+       return (0, YH.jsxs)(YH.Fragment, {
+         children: [(0, SH.cloneElement)(AH, {
+           ref: GH
+         }), hH && (0, YH.jsx)(UH, {
+           target: CH,
+           placement: LH,
+           boxRef: tH,
+           children: (0, YH.jsx)(vH, {
+             ...rH
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L159` → after: `L259-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L259-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L259-L274) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L159)

```diff
-     }))
+     }));
+ 
+     function OH(HH) {
+       const BH = WH(HH),
+         LH = (0, SH.useRef)(null);
+       return xH(HH, BH, LH, null), BH ? (0, hH.createPortal)((0, YH.jsx)("div", {
+         className: "TutorialCentreBackdrop",
+         children: (0, YH.jsx)("div", {
+           ref: LH,
+           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
+           children: (0, YH.jsx)(vH, {
+             ...HH
+           })
+         })
+       }), (0, CH.j)()) : null
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L161` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L276) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L161)

```diff
-   41841: (VV, eV, xV) => {
+   37479: (HH, BH, LH) => {
```

#### 16. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L163` → after: `L278-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L278-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L278-L287) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L163)

```diff
-       b: () => SV
+       A: () => uH,
+       C: () => xH,
+       c: () => SH,
+       g: () => QH,
+       j: () => WH,
+       k: () => tH,
+       n: () => GH,
+       r: () => MH,
+       t: () => XH,
+       x: () => vH
```

#### 17. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L165-L197` → after: `L289-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L289-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L289-L298) · [Before (L165-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L165-L197)

```diff
-     var JV = xV(27),
-       YV = xV(32),
-       UV = xV(4674),
-       yV = xV(364),
-       pV = xV(1725),
-       QV = xV(8796),
-       nV = xV(4690),
-       wV = xV(9320),
-       ZV = xV(8831),
-       vV = xV(8811),
-       rV = xV(8836),
-       kV = xV(1473),
-       bV = xV(1775),
-       EV = xV(8843),
-       BV = xV(9276),
-       jV = xV(9420),
- ... (17 more removed lines; see GitHub link above)
+     var AH = LH(15),
+       rH = LH(18);
+     const SH = "clientGameInventoryButtonsChanged",
+       hH = new Map;
+ 
+     function tH() {
+       return [...hH.values()].sort(((HH, BH) => {
+         var LH, AH;
+         return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L199-L218` → after: `L300-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L300-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L300-L312) · [Before (L199-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L199-L218)

```diff
-     class MV {
-       constructor(VV, eV) {
-         this.press = VV, this.release = eV, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(VV, eV, xV, JV) {
-         if (VV && null === this.downAtMs) return this.downAtMs = xV, this.latched = JV, void(this.token = this.press(JV));
-         null !== this.downAtMs && (this.latched ? VV && this.end() : !eV && xV - this.downAtMs >= 40 && this.end())
-       }
-       isLatched() {
-         return null !== this.downAtMs && this.latched
-       }
-       unlatch() {
-         this.latched = !1
-       }
-       cancel() {
-         null !== this.downAtMs && this.end()
- ... (4 more removed lines; see GitHub link above)
+     let zH = null;
+ 
+     function CH(HH) {
+       zH = HH
+     }
+     let EH = !1;
+ 
+     function XH(HH) {
+       EH = !0;
+       try {
+         HH.onClick()
+       } finally {
+         EH = !1
```

#### 19. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L221-L492` → after: `L316-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L316-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L316-L350) · [Before (L221-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L221-L492)

```diff
-     const zV = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       GV = VV => {
-         let eV = null;
-         const xV = new NV.d,
-           JV = () => {
-             eV && (((VV, eV, xV) => {
-               switch (xV.kind) {
-                 case "reload":
-                   return void eV.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void eV.specialActionUp(xV.action);
-                 case "customButton":
-                   return void FV.gameBridge.send("pressCustomButton", {
- ... (256 more removed lines; see GitHub link above)
+ 
+     function GH() {
+       return EH
+     }
+ 
+     function YH() {
+       return tH().filter((HH => HH.panel && !HH.disabled))
+     }
+ 
+     function uH(HH) {
+       const BH = YH(),
+         LH = BH.findIndex((HH => HH.id === zH));
+       return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
+     }
+ 
+     function QH() {
+ ... (19 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L495` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L354) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L495)

```diff
-   41837: (VV, eV, xV) => {
+   37474: (HH, BH, LH) => {
```

#### 21. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L498-L533` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L358-L359) · [Before (L498-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L498-L533)

```diff
-       f: () => EV,
-       g: () => rV
-     });
-     var JV = xV(1332),
-       YV = xV(4674),
-       UV = xV(9408),
-       yV = xV(38106),
-       pV = xV(1817),
-       QV = xV(1218),
-       nV = xV(8843),
-       wV = xV(9333),
-       ZV = xV(9422);
-     const vV = {
-         emoteWheel: UV.e,
-         quickChatWheel: wV.c,
-         actionWheel: ZV.r
- ... (20 more removed lines; see GitHub link above)
+       g: () => WH,
+       j: () => MH,
```

#### 22. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L535` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L361-L362) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L535)

```diff
-       q: () => UV,
+       p: () => CH,
+       t: () => QH,
```

#### 23. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L539-L550` → after: `L366-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L366-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L366-L383) · [Before (L539-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L539-L550)

```diff
-     var JV = xV(8786);
-     class YV {
-       constructor() {
-         this.fullTiltSinceMs = null
-       }
-       update(VV, eV, xV) {
-         const YV = (0, JV.k)(VV, eV.lookDeadzone);
-         if (Math.hypot(YV.x, YV.y) < .9 || Math.abs(YV.x) < Math.abs(YV.y)) return this.fullTiltSinceMs = null, 1;
-         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = xV);
-         const UV = (yV = eV.lookSensitivityX, Math.min(1, 100 / yV));
-         var yV;
-         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (xV - this.fullTiltSinceMs - 250 * UV) / (200 * UV)))
+     var AH = LH(15),
+       rH = LH(18),
+       SH = LH(1241),
+       hH = LH(37479);
+     const tH = "clientGameUiChanged";
+     let zH = null;
+ 
+     function CH() {
+       return zH
+     }
+ 
+     function EH(HH, BH) {
+       const LH = {
+         content: HH,
+         menu: BH
+       };
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L552-L553` → after: `L385-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L385-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L385-L394) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L552-L553)

```diff
-       reset() {
-         this.fullTiltSinceMs = null
+     }
+     let XH = null;
+ 
+     function GH() {
+       return XH
+     }
+ 
+     function YH(HH) {
+       return XH = HH, () => {
+         XH === HH && (XH = null)
```

#### 25. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L556-L637` → after: `L397-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L397-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L397-L423) · [Before (L556-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L556-L637)

```diff
-     const UV = (VV, eV, xV, YV, UV) => {
-         let yV = 1;
-         return "boost" === xV.lookCurve ? yV = VV.update(eV, xV, UV) : VV.reset(),
-           function(VV, eV) {
-             let {
-               yawBoost: xV = 1,
-               aiming: YV = !1
-             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-             const UV = (0, JV.j)((0, JV.k)(VV, eV.lookDeadzone), eV.lookCurve),
-               yV = 220 * Math.PI / 180,
-               pV = YV ? eV.aimLookSensitivity / 100 : 1,
-               QV = eV.lookSensitivityX / 100 * pV,
-               nV = eV.lookSensitivityY / 100 * pV;
-             return {
-               yawRadPerSec: UV.x * yV * QV * xV * (eV.invertLookX ? -1 : 1),
-               pitchRadPerSec: UV.y * yV * .7 * nV * (eV.invertLookY ? -1 : 1)
- ... (66 more removed lines; see GitHub link above)
+     let uH = !1;
+ 
+     function QH() {
+       const HH = AH.c.get("openInGameMenuName");
+       "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
+     }
+ 
+     function WH() {
+       vH(!1)
+     }
+ 
+     function MH() {
+       vH(uH)
+ ... (11 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L639` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L425) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L639)

```diff
-   41850: (VV, eV, xV) => {
+   37754: (HH, BH, LH) => {
```

#### 27. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L641-L642` → after: `L427-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L427-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L427-L440) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L641-L642)

```diff
-       c: () => YV,
-       e: () => JV
+       A: () => gH,
+       E: () => cH,
+       F: () => NH,
+       d: () => zH,
+       e: () => oH,
+       i: () => tH,
+       j: () => KH,
+       l: () => kH,
+       m: () => UH,
+       o: () => lH,
+       p: () => fH,
+       s: () => bH,
+       w: () => eH,
+       z: () => qH
```

#### 28. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L644-L681` → after: `L442-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L442-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L442-L484) · [Before (L644-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L644-L681)

```diff
-     const JV = VV => {
-       let {
-         mode: eV,
-         sneakHeld: xV,
-         sneakPressed: JV,
-         sneakTogglePressed: YV,
-         descending: UV,
-         canCrouch: yV,
-         toggled: pV
-       } = VV;
-       return yV ? UV ? {
-         crouchHeld: xV,
-         toggled: !1
-       } : "hold" === eV ? {
-         crouchHeld: xV,
-         toggled: YV ? !pV : pV
- ... (22 more removed lines; see GitHub link above)
+     var AH = LH(30);
+     const rH = {
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
+       },
+       SH = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       hH = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       tH = SH.filter((HH => "docsButton" !== HH)),
+       zH = hH.filter((HH => "aiHelperButton" !== HH)),
+       CH = "codeEditorTutorials",
+       EH = {
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
+       },
+       XH = {
+         welcome: "welcomeComplete",
+ ... (27 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L685-L779` → after: `L489-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L489-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/247.js#L489-L584) · [Before (L685-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/247.js#L685-L779)

```diff
-   },
-   41825: (VV, eV, xV) => {
-     xV(9462)
-   },
-   41827: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => qV
-     });
-     var JV = xV(32),
-       YV = xV(9408),
-       UV = xV(9416),
-       yV = xV(8796),
-       pV = xV(8831),
-       QV = xV(8811),
-       nV = xV(41831),
-       wV = xV(41837),
- ... (79 more removed lines; see GitHub link above)
+ 
+     function TH(HH) {
+       const BH = PH();
+       BH[HH] || (GH = {
+         ...BH,
+         [HH]: !0
+       }, AH.e.setItem(CH, GH))
+     }
+ 
+     function UH(HH) {
+       return "docsOverview" === HH ? SH : "aiHelperOverview" === HH ? hH : YH ? rH[YH] : []
+     }
+ 
+     function VH(HH) {
+       return ("worldCodeButton" !== HH || !PH().worldCodeIntroShown) && !MH.has(HH)
+     }
+ ... (80 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L24` → after: `L4-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L4-L297) · [Before (L4-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L4-L24)

```diff
-   39624: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => kV
-     });
-     var JV = xV(206),
-       YV = xV(38799);
-     const UV = 1.2,
-       yV = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
- ... (5 more removed lines; see GitHub link above)
+   37526: HH => {
+     HH.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (278 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L26-L38` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L299-L300) · [Before (L26-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L26-L38)

```diff
-       pV = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 1.8,
-           height: 2.6
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         eZ: .5,
-         IxV: !1
+       toJSON() {
+         return this[this.model]()
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L40-L52` → after: `L302-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L302-L306) · [Before (L40-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L40-L52)

```diff
-       QV = {
-         physicsBodyDimensions: {
-           width: JV.f.QB,
-           height: JV.f.nB
-         },
-         hitBoxDimensions: {
-           width: JV.f.QB + .4,
-           height: JV.f.nB + .6
-         },
-         eyeHeight: JV.f.nB * JV.f.playerEyeToHeightRatio,
-         rideHeight: JV.f.nB - .3,
-         eZ: .5,
-         IxV: !1
+       string(HH) {
+         let BH = this.model in AH.to ? this : this.rgb();
+         BH = BH.round("number" === typeof HH ? HH : 1);
+         const LH = 1 === BH.valpha ? BH.color : [...BH.color, this.valpha];
+         return AH.to[BH.model](LH)
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L54-L66` → after: `L308-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L308-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L308-L311) · [Before (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L54-L66)

```diff
-       nV = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: .95
-         },
-         hitBoxDimensions: {
-           width: 1.6,
-           height: 1.1
-         },
-         eyeHeight: .9,
-         rideHeight: .5,
-         eZ: .5,
-         IxV: !1
+       percentString(HH) {
+         const BH = this.rgb().round("number" === typeof HH ? HH : 1),
+           LH = 1 === BH.valpha ? BH.color : [...BH.color, this.valpha];
+         return AH.to.rgb.percent(LH)
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L68-L80` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L313-L314) · [Before (L68-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L68-L80)

```diff
-       wV = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.8
-         },
-         hitBoxDimensions: {
-           width: 1.7,
-           height: 1.9
-         },
-         eyeHeight: 1.3,
-         rideHeight: 1.3,
-         eZ: .5,
-         IxV: !1
+       array() {
+         return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha]
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L82-L94` → after: `L316-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L316-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L316-L325) · [Before (L82-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L82-L94)

```diff
-       ZV = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.1
-         },
-         eyeHeight: 1.9,
-         rideHeight: 1,
-         eZ: .5,
-         IxV: !1
+       object() {
+         const HH = {},
+           {
+             channels: BH
+           } = rH[this.model],
+           {
+             labels: LH
+           } = rH[this.model];
+         for (let AH = 0; AH < BH; AH++) HH[LH[AH]] = this.color[AH];
+         return 1 !== this.valpha && (HH.alpha = this.valpha), HH
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L96-L108` → after: `L327-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L327-L329) · [Before (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L96-L108)

```diff
-       vV = {
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.4
-         },
-         eyeHeight: 2,
-         rideHeight: 1.8,
-         eZ: .5,
-         IxV: !1
+       unitArray() {
+         const HH = this.rgb().color;
+         return HH[0] /= 255, HH[1] /= 255, HH[2] /= 255, 1 !== this.valpha && HH.push(this.valpha), HH
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L110-L623` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L331-L333) · [Before (L110-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L110-L623)

```diff
-       rV = {
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: JV.f.QB,
-             height: JV.f.nB
-           },
-           hitBoxDimensions: {
-             width: JV.f.QB + .4,
-             height: JV.f.nB + .6
-           },
-           eyeHeight: JV.f.nB * JV.f.playerEyeToHeightRatio,
-           rideHeight: JV.f.nB - .1,
-           eZ: YV.g.eZ,
-           IxV: !0
-         },
- ... (498 more removed lines; see GitHub link above)
+       unitObject() {
+         const HH = this.rgb().object();
+         return HH.r /= 255, HH.g /= 255, HH.b /= 255, 1 !== this.valpha && (HH.alpha = this.valpha), HH
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L625-L630` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L335-L336) · [Before (L625-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L625-L630)

```diff
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
+       round(HH) {
+         return HH = Math.max(HH || 0, 0), new zH([...this.color.map(CH(HH)), this.valpha], this.model)
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L632-L637` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L338-L339) · [Before (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L632-L637)

```diff
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
-         lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       alpha(HH) {
+         return void 0 !== HH ? new zH([...this.color, Math.max(0, Math.min(1, HH))], this.model) : this.valpha
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L639-L644` → after: `L341-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L341-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L341-L364) · [Before (L639-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L639-L644)

```diff
-       "skyblock:forged:astral-sanguine-magmasteel": {
-         name: "Triune Flame",
-         lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       red: EH("rgb", 0, XH(255)),
+       green: EH("rgb", 1, XH(255)),
+       blue: EH("rgb", 2, XH(255)),
+       hue: EH(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (HH => (HH % 360 + 360) % 360)),
+       saturationl: EH("hsl", 1, XH(100)),
+       lightness: EH("hsl", 2, XH(100)),
+       saturationv: EH("hsv", 1, XH(100)),
+       value: EH("hsv", 2, XH(100)),
+       chroma: EH("hcg", 1, XH(100)),
+       gray: EH("hcg", 2, XH(100)),
+       white: EH("hwb", 1, XH(100)),
+       wblack: EH("hwb", 2, XH(100)),
+       cyan: EH("cmyk", 0, XH(100)),
+       magenta: EH("cmyk", 1, XH(100)),
+       yellow: EH("cmyk", 2, XH(100)),
+       black: EH("cmyk", 3, XH(100)),
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L646-L651` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L366-L367) · [Before (L646-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L646-L651)

```diff
-       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
-         name: "Vulcan's Bane",
-         lore: "Forged in the heat of his own rift. It remembers the way down.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       hex(HH) {
+         return void 0 !== HH ? new zH(HH) : AH.to.hex(this.rgb().round().color)
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L653-L658` → after: `L369-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L369-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L369-L373) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L653-L658)

```diff
-       "skyblock:forged:magmasteel-astral-sanguine": {
-         name: "Comet's Wake",
-         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       hexa(HH) {
+         if (void 0 !== HH) return new zH(HH);
+         const BH = this.rgb().round().color;
+         let LH = Math.round(255 * this.valpha).toString(16).toUpperCase();
+         return 1 === LH.length && (LH = "0" + LH), AH.to.hex(BH) + LH
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L660-L665` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L375-L377) · [Before (L660-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L660-L665)

```diff
-       "skyblock:forged:magmasteel-sanguine-astral": {
-         name: "Vulcan's Ruin",
-         lore: "The Forge Mother made only one, then sat down for a long while.",
-         damageMultiplier: 1.6,
-         cooldownMultiplier: .83,
-         ability: "warcry"
+       rgbNumber() {
+         const HH = this.rgb().color;
+         return (255 & HH[0]) << 16 | (255 & HH[1]) << 8 | 255 & HH[2]
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L667-L672` → after: `L379-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L379-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L379-L386) · [Before (L667-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L667-L672)

```diff
-       "skyblock:forged:magmasteel-iron-stone": {
-         name: "Forgehand",
-         lore: "A smith's sword: plain to look at, and it hits like a hammer.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .9,
-         ability: "quake"
+       luminosity() {
+         const HH = this.rgb().color,
+           BH = [];
+         for (const [LH, AH] of HH.entries()) {
+           const HH = AH / 255;
+           BH[LH] = HH <= .04045 ? HH / 12.92 : ((HH + .055) / 1.055) ** 2.4
+         }
+         return .2126 * BH[0] + .7152 * BH[1] + .0722 * BH[2]
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L674-L679` → after: `L388-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L388-L391) · [Before (L674-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L674-L679)

```diff
-       "skyblock:forged:sanguine-sanguine-sanguine": {
-         name: "Crimson Covenant",
-         lore: "It drinks, and so do you.",
-         damageMultiplier: 1.53,
-         cooldownMultiplier: .83,
-         ability: "bloodPact"
+       contrast(HH) {
+         const BH = this.luminosity(),
+           LH = HH.luminosity();
+         return BH > LH ? (BH + .05) / (LH + .05) : (LH + .05) / (BH + .05)
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L681-L686` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L393-L395) · [Before (L681-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L681-L686)

```diff
-       "skyblock:forged:sanguine-astral-moonstone": {
-         name: "Nightbloom",
-         lore: "A red flower that only opens after dark.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "eclipseField"
+       level(HH) {
+         const BH = this.contrast(HH);
+         return BH >= 7 ? "AAA" : BH >= 4.5 ? "AA" : ""
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L688-L693` → after: `L397-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L397-L399) · [Before (L688-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L688-L693)

```diff
-       "skyblock:forged:sanguine-iron-wood": {
-         name: "Butcher's Oath",
-         lore: "Heavy, honest and always hungry.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .95,
-         ability: "bloodPact"
+       isDark() {
+         const HH = this.rgb().color;
+         return (2126 * HH[0] + 7152 * HH[1] + 722 * HH[2]) / 1e4 < 128
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L695-L700` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L401-L402) · [Before (L695-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L695-L700)

```diff
-       "skyblock:forged:moonstone-moonstone-moonstone": {
-         name: "Lunar Requiem",
-         lore: "Swung, it leaves a pale arc that lingers like a second moon.",
-         damageMultiplier: 1.35,
-         cooldownMultiplier: .85,
-         ability: "moonDash"
+       isLight() {
+         return !this.isDark()
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L702-L707` → after: `L404-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L404-L407) · [Before (L702-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L702-L707)

```diff
-       "skyblock:forged:moonstone-astral-moonstone": {
-         name: "Silver Tide",
-         lore: "Pulled by the same moon that pulls the sea.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .84,
-         ability: "moonDash"
+       du() {
+         const HH = this.rgb();
+         for (let BH = 0; BH < 3; BH++) HH.color[BH] = 255 - HH.color[BH];
+         return HH
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L709-L717` → after: `L409-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L409-L411) · [Before (L709-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L709-L717)

```diff
-       "skyblock:forged:diamond-diamond-diamond": {
-         name: "Prism Fang",
-         lore: "Every facet catches a different light, and every strike finds a different weakness.",
-         damageMultiplier: 1.29,
-         cooldownMultiplier: .88,
-         ability: "gildedEdge",
-         traits: {
-           crit: 1.8
-         }
+       lighten(HH) {
+         const BH = this.hsl();
+         return BH.color[2] += BH.color[2] * HH, BH
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L719-L724` → after: `L413-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L413-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L413-L415) · [Before (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L719-L724)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
+       darken(HH) {
+         const BH = this.hsl();
+         return BH.color[2] -= BH.color[2] * HH, BH
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L726-L734` → after: `L417-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L417-L419) · [Before (L726-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L726-L734)

```diff
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
-         }
+       saturate(HH) {
+         const BH = this.hsl();
+         return BH.color[1] += BH.color[1] * HH, BH
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L736-L745` → after: `L421-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L421-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L421-L427) · [Before (L736-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L736-L745)

```diff
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
-         }
+       desaturate(HH) {
+         const BH = this.hsl();
+         return BH.color[1] -= BH.color[1] * HH, BH
+       },
+       whiten(HH) {
+         const BH = this.hwb();
+         return BH.color[1] += BH.color[1] * HH, BH
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L747-L752` → after: `L429-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L429-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L429-L431) · [Before (L747-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L747-L752)

```diff
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
+       blacken(HH) {
+         const BH = this.hwb();
+         return BH.color[2] += BH.color[2] * HH, BH
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L754-L759` → after: `L433-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L433-L436) · [Before (L754-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L754-L759)

```diff
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
+       grayscale() {
+         const HH = this.rgb().color,
+           BH = .3 * HH[0] + .59 * HH[1] + .11 * HH[2];
+         return zH.rgb(BH, BH, BH)
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L761-L766` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L438-L439) · [Before (L761-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L761-L766)

```diff
-       "skyblock:forged:stone-stone-stone": {
-         name: "Quarryman's Cleaver",
-         lore: "Chipped from one block of stone, handle and all.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "quake"
+       fade(HH) {
+         return this.alpha(this.valpha - this.valpha * HH)
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L768-L773` → after: `L441-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L441-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L441-L474) · [Before (L768-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L768-L773)

```diff
-       "skyblock:forged:wood-wood-wood": {
-         name: "Lorenzo's Lesson",
-         lore: "Courage matters more than the blade. This one is mostly courage.",
-         damageMultiplier: 1.06,
-         cooldownMultiplier: .97,
-         ability: "warcry"
+       opaquer(HH) {
+         return this.alpha(this.valpha + this.valpha * HH)
+       },
+       rotate(HH) {
+         const BH = this.hsl();
+         let LH = BH.color[0];
+         return LH = (LH + HH) % 360, LH = LH < 0 ? 360 + LH : LH, BH.color[0] = LH, BH
+       },
+       mix(HH, BH) {
+         if (!HH || !HH.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof HH);
+         const LH = HH.rgb(),
+           AH = this.rgb(),
+           rH = void 0 === BH ? .5 : BH,
+           SH = 2 * rH - 1,
+           hH = LH.alpha() - AH.alpha(),
+           tH = ((SH * hH === -1 ? SH : (SH + hH) / (1 + SH * hH)) + 1) / 2,
+ ... (18 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L788-L800` → after: `L478-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L478-L483) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L788-L800)

```diff
-     function BV(...VV) {
-       return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = function(...VV) {
-         for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'sAh7;D/T?~2ve6`=u1z.>R435JiWQEk0K^][|_9HM",lX!@+Zx{b$%pd*8tqw}#y(F):PV<CjBfLmaGIcNonrgUOSY&', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[4]] = VV[EV[1]].length, VV[EV[9]] = [], VV[EV[7]] = EV[2], VV[-EV[8]] = EV[2], VV[EV[6]] = -EV[ … [truncated]
-           if (VV[EV[5]] = VV[EV[0]].indexOf(VV[EV[1]][VV[EV[3]]]), VV[EV[5]] !== -EV[0])
-             if (VV[EV[6]] < EV[2]) VV[EV[6]] = VV[EV[5]];
-             else {
-               zV(VV[EV[6]] += VV[EV[5]] * EV[29], VV[EV[7]] |= VV[EV[6]] << VV[-EV[8]], VV[-EV[8]] += (VV[EV[6]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
-               do {
-                 zV(VV[EV[9]].push(VV[EV[7]] & EV[10]), VV[EV[7]] >>= EV[3], VV[-EV[8]] -= EV[3])
-               } while (VV[-EV[8]] > EV[23]);
-               VV[EV[6]] = -EV[0]
-             } return VV[EV[6]] > -EV[0] && VV[EV[9]].push((VV[EV[7]] | VV[EV[6]] << VV[-EV[8]]) & EV[10]), jV(VV[EV[9]])
-       }(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
+     function CH(HH) {
+       return function(BH) {
+         return function(HH, BH) {
+           return Number(HH.toFixed(BH))
+         }(BH, HH)
+       }
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L803-L804` → after: `L486-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L486-L493) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L803-L804)

```diff
-     function jV(...VV) {
-       return VV[EV[11]] = EV[0], typeof wV !== EV[16] && wV ? (new wV).decode(new ZV(VV[EV[2]])) : typeof vV !== EV[16] && vV ? vV.from(VV[EV[2]]).toString("utf-8") : bV(VV[EV[2]])
+     function EH(HH, BH, LH) {
+       HH = Array.isArray(HH) ? HH : [HH];
+       for (const AH of HH)(tH[AH] || (tH[AH] = []))[BH] = LH;
+       return HH = HH[0],
+         function(AH) {
+           let rH;
+           return void 0 !== AH ? (LH && (AH = LH(AH)), rH = this[HH](), rH.color[BH] = AH, rH) : (rH = this[HH]().color[BH], LH && (rH = LH(rH)), rH)
+         }
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L807-L845` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L496-L498) · [Before (L807-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L807-L845)

```diff
-     function qV() {}
-     zV(pV = {}, QV = ["yZ!THx8LB1qaVJdE*!ski8B8avma1uY43wp0xH*k81kml<V0XbA", '"iMkKcq[KyeIR}9_SZ^/.9]hVp#<NwL.8~+B3n3EkRijboH0', "YbpQx*|zgttzA", "K~~khZ8EJtMB<xwk", ",FS~>qS5?2eWWoS,*1[jwa|eF=pTr7YQN/3B^$V3+=", "jb3;anCTkzl1:tS]r`~W=9n[9(/Ps", 'e81p/Ib"9tc4Q7ui_Z3^y].[!R@Rr[xWj, … [truncated]
-       zV(VV[EV[11]] = EV[2], VV[EV[14]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], VV[EV[12]] = EV[17], VV[EV[4]] = []);
-       try {
-         zV(VV[EV[12]] = Object, VV[EV[4]][EV[25]]("".__proto__.constructor.name))
-       } catch (QV) {}
-       VV: for (VV[-EV[13]] = EV[2]; VV[-EV[13]] < VV[EV[14]][EV[11]]; VV[-EV[13]]++) try {
-         for (VV[EV[12]] = VV[EV[14]][VV[-EV[13]]](), VV[EV[15]] = EV[2]; VV[EV[15]] < VV[EV[4]][EV[11]]; VV[EV[15]]++)
- ... (23 more removed lines; see GitHub link above)
+     function XH(HH) {
+       return function(BH) {
+         return Math.max(0, Math.min(HH, BH))
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L848-L849` → after: `L502-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L502-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L502-L571) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L848-L849)

```diff
-       function xV(...VV) {
-         return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = eV(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
+     function GH(HH, BH) {
+       for (let LH = 0; LH < BH; LH++) "number" !== typeof HH[LH] && (HH[LH] = 0);
+       return HH
+     }
+     HH.exports = zH
+   },
+   37545: (HH, BH, LH) => {
+     const AH = LH(37553),
+       rH = {};
+     for (const hH of Object.keys(AH)) rH[AH[hH]] = hH;
+     const SH = {
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+       },
+       hsl: {
+ ... (54 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L851-L856` → after: `L573-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L573-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L573-L631) · [Before (L851-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L851-L856)

```diff
- 
-       function JV(...VV) {
-         VV[EV[11]] = EV[0];
-         const eV = {};
-         for (let xV of VV[EV[2]].replace(/[^w]/g, "").toLowerCase()) eV[xV] = eV[xV] + EV[0] || EV[0];
-         return eV
+     };
+     HH.exports = SH;
+     for (const hH of Object.keys(SH)) {
+       if (!("channels" in SH[hH])) throw new Error("missing channels property: " + hH);
+       if (!("labels" in SH[hH])) throw new Error("missing channel labels property: " + hH);
+       if (SH[hH].labels.length !== SH[hH].channels) throw new Error("channel and label counts mismatch: " + hH);
+       const {
+         channels: HH,
+         labels: BH
+       } = SH[hH];
+       delete SH[hH].channels, delete SH[hH].labels, Object.defineProperty(SH[hH], "channels", {
+         value: HH
+       }), Object.defineProperty(SH[hH], "labels", {
+         value: BH
+       })
+     }
+ ... (43 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L858-L865` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L633-L690) · [Before (L858-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L858-L865)

```diff
- 
-       function YV(...VV) {
-         VV[EV[11]] = EV[1];
-         const eV = buildCharMap(VV[EV[2]]),
-           xV = buildCharMap(VV[EV[0]]);
-         for (let JV in eV)
-           if (eV[JV] !== xV[JV]) return EV[35];
-         return Object.keys(eV).length !== Object.keys(xV).length ? EV[35] : EV[79]
+       var hH, tH;
+       return LH
+     }, SH.keyword.rgb = function(HH) {
+       return AH[HH]
+     }, SH.rgb.xyz = function(HH) {
+       let BH = HH[0] / 255,
+         LH = HH[1] / 255,
+         AH = HH[2] / 255;
+       BH = BH > .04045 ? ((BH + .055) / 1.055) ** 2.4 : BH / 12.92, LH = LH > .04045 ? ((LH + .055) / 1.055) ** 2.4 : LH / 12.92, AH = AH > .04045 ? ((AH + .055) / 1.055) ** 2.4 : AH / 12.92;
+       return [100 * (.4124 * BH + .3576 * LH + .1805 * AH), 100 * (.2126 * BH + .7152 * LH + .0722 * AH), 100 * (.0193 * BH + .1192 * LH + .9505 * AH)]
+     }, SH.rgb.lab = function(HH) {
+       const BH = SH.rgb.xyz(HH);
+       let LH = BH[0],
+         AH = BH[1],
+         rH = BH[2];
+       LH /= 95.047, AH /= 100, rH /= 108.883, LH = LH > .008856 ? LH ** (1 / 3) : 7.787 * LH + 16 / 116, AH = AH > .008856 ? AH ** (1 / 3) : 7.787 * AH + 16 / 116, rH = rH > .008856 ? rH ** (1 / 3) : 7.787 * rH + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L867-L869` → after: `L692-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L692-L732) · [Before (L867-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L867-L869)

```diff
- 
-       function UV(VV) {
-         return yV(VV) !== 1 / 0
+     }, SH.hsv.hsl = function(HH) {
+       const BH = HH[0],
+         LH = HH[1] / 100,
+         AH = HH[2] / 100,
+         rH = Math.max(AH, .01);
+       let SH, hH;
+       hH = (2 - LH) * AH;
+       const tH = (2 - LH) * rH;
+       return SH = LH * rH, SH /= tH <= 1 ? tH : 2 - tH, SH = SH || 0, hH /= 2, [BH, 100 * SH, 100 * hH]
+     }, SH.hwb.rgb = function(HH) {
+       const BH = HH[0] / 360;
+       let LH = HH[1] / 100,
+         AH = HH[2] / 100;
+       const rH = LH + AH;
+       let SH;
+       rH > 1 && (LH /= rH, AH /= rH);
+ ... (25 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L871-L878` → after: `L734-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L734-L795) · [Before (L871-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L871-L878)

```diff
- 
-       function yV(...VV) {
-         if (VV[EV[11]] = EV[0], !VV[EV[2]]) return -EV[0];
-         const eV = yV(VV[EV[2]].left),
-           xV = yV(VV[EV[2]].right),
-           JV = Math.abs(eV - xV);
-         if (eV === 1 / 0 || xV === 1 / 0 || JV > EV[0]) return 1 / 0;
-         return Math.max(eV, xV) + EV[0]
+       return [255 * CH, 255 * EH, 255 * XH]
+     }, SH.cmyk.rgb = function(HH) {
+       const BH = HH[0] / 100,
+         LH = HH[1] / 100,
+         AH = HH[2] / 100,
+         rH = HH[3] / 100;
+       return [255 * (1 - Math.min(1, BH * (1 - rH) + rH)), 255 * (1 - Math.min(1, LH * (1 - rH) + rH)), 255 * (1 - Math.min(1, AH * (1 - rH) + rH))]
+     }, SH.xyz.rgb = function(HH) {
+       const BH = HH[0] / 100,
+         LH = HH[1] / 100,
+         AH = HH[2] / 100;
+       let rH, SH, hH;
+       return rH = 3.2406 * BH + -1.5372 * LH + -.4986 * AH, SH = -.9689 * BH + 1.8758 * LH + .0415 * AH, hH = .0557 * BH + -.204 * LH + 1.057 * AH, rH = rH > .0031308 ? 1.055 * rH ** (1 / 2.4) - .055 : 12.92 * rH, SH = SH > .0031308 ? 1.055 * SH ** (1 / 2.4) - .055 : 12.92 * SH,  … [truncated]
+     }, SH.xyz.lab = function(HH) {
+       let BH = HH[0],
+         LH = HH[1],
+ ... (46 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L880-L884` → after: `L797-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L797-L858) · [Before (L880-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L880-L884)

```diff
-       VV[EV[11]] = EV[2], window[xV(111) + xV(112) + xV(113) + "_"] = {
-         buildCharacterMap: JV,
-         isAnagrams: YV,
-         isBalanced: UV,
-         getHeightBalanced: yV
+       let BH;
+       HH -= 16;
+       return [Math.floor(HH / 36) / 5 * 255, Math.floor((BH = HH % 36) / 6) / 5 * 255, BH % 6 / 5 * 255]
+     }, SH.rgb.hex = function(HH) {
+       const BH = (((255 & Math.round(HH[0])) << 16) + ((255 & Math.round(HH[1])) << 8) + (255 & Math.round(HH[2]))).toString(16).toUpperCase();
+       return "000000".substring(BH.length) + BH
+     }, SH.hex.rgb = function(HH) {
+       const BH = HH.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
+       if (!BH) return [0, 0, 0];
+       let LH = BH[0];
+       3 === BH[0].length && (LH = LH.split("").map((HH => HH + HH)).join(""));
+       const AH = parseInt(LH, 16);
+       return [AH >> 16 & 255, AH >> 8 & 255, 255 & AH]
+     }, SH.rgb.hcg = function(HH) {
+       const BH = HH[0] / 255,
+         LH = HH[1] / 255,
+ ... (46 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L886-L933` → after: `L860-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L860-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L860-L900) · [Before (L886-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L886-L933)

```diff
-     }();
-     const tV = YV()[BV(EV[38])](),
-       FV = YV()[BV(EV[38])](),
-       TV = YV()[BV(EV[38])](),
-       PV = YV()[BV(EV[38])](),
-       AV = YV()[BV(EV[38])](),
-       NV = YV()[BV(EV[38])](),
-       XV = YV()[BV(EV[38])](),
-       MV = (...VV) => {
-         function eV(...VV) {
-           return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = function(...VV) {
-             for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'B6PLQit=xAJc>UyTOG?drmS;<VYa($]hfM8q[D#F/.}n1RzKZj~:!blu")oe@`^p5g*|7X9WsE,{I_C3NH+%v42w&0k', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[4]] = VV[EV[1]].length, VV[EV[9]] = [], VV[EV[42]] = EV[2], VV[EV[21]] = EV[2], VV[EV[23]]  … [truncated]
-               if (VV[-EV[41]] = VV[EV[0]].indexOf(VV[EV[1]][VV[-EV[40]]]), VV[-EV[41]] !== -EV[0])
-                 if (VV[EV[23]] < EV[2]) VV[EV[23]] = VV[-EV[41]];
-                 else {
-                   zV(VV[EV[23]] += VV[-EV[41]] * EV[29], VV[EV[42]] |= VV[EV[23]] << VV[EV[21]], VV[EV[21]] += (VV[EV[23]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
- ... (32 more removed lines; see GitHub link above)
+       return zH = (1 - LH) * AH, [255 * (LH * rH[0] + zH), 255 * (LH * rH[1] + zH), 255 * (LH * rH[2] + zH)]
+     }, SH.hcg.hsv = function(HH) {
+       const BH = HH[1] / 100,
+         LH = BH + HH[2] / 100 * (1 - BH);
+       let AH = 0;
+       return LH > 0 && (AH = BH / LH), [HH[0], 100 * AH, 100 * LH]
+     }, SH.hcg.hsl = function(HH) {
+       const BH = HH[1] / 100,
+         LH = HH[2] / 100 * (1 - BH) + .5 * BH;
+       let AH = 0;
+       return LH > 0 && LH < .5 ? AH = BH / (2 * LH) : LH >= .5 && LH < 1 && (AH = BH / (2 * (1 - LH))), [HH[0], 100 * AH, 100 * LH]
+     }, SH.hcg.hwb = function(HH) {
+       const BH = HH[1] / 100,
+         LH = BH + HH[2] / 100 * (1 - BH);
+       return [HH[0], 100 * (LH - BH), 100 * (1 - LH)]
+     }, SH.hwb.hcg = function(HH) {
+ ... (25 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L935-L1022` → after: `L902-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L902-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L902-L940) · [Before (L935-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L935-L1022)

```diff
-     yV = (VV, eV, xV, JV, yV, nV, wV, ZV) => {
-       function vV(...VV) {
-         return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = function(...VV) {
-           for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = '<OACRPrlQgZqKTLnGs>tuy3}98`N^J[@B:Y#(iXI6zh*Mj!V%.vpH07Se~k&FbwaUWD/];4df_E?$12c,5|o=)xm{"+', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[50]] = VV[EV[1]].length, VV[-EV[13]] = [], VV[-EV[52]] = EV[2], VV[EV[5]] = EV[2], VV[EV[23]] … [truncated]
-             if (VV[EV[51]] = VV[EV[0]].indexOf(VV[EV[1]][VV[EV[3]]]), VV[EV[51]] !== -EV[0])
-               if (VV[EV[23]] < EV[2]) VV[EV[23]] = VV[EV[51]];
-               else {
-                 zV(VV[EV[23]] += VV[EV[51]] * EV[29], VV[-EV[52]] |= VV[EV[23]] << VV[EV[5]], VV[EV[5]] += (VV[EV[23]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
-                 do {
-                   zV(VV[-EV[13]].push(VV[-EV[52]] & EV[10]), VV[-EV[52]] >>= EV[3], VV[EV[5]] -= EV[3])
-                 } while (VV[EV[5]] > EV[23]);
-                 VV[EV[23]] = -EV[0]
-               } return VV[EV[23]] > -EV[0] && VV[-EV[13]].push((VV[-EV[52]] | VV[EV[23]] << VV[EV[5]]) & EV[10]), jV(VV[-EV[13]])
-         }(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
-       }
-       vV(123) + "J" in qV && function(...VV) {
- ... (72 more removed lines; see GitHub link above)
+   },
+   37541: (HH, BH, LH) => {
+     const AH = LH(37545),
+       rH = LH(37558),
+       SH = {};
+     Object.keys(AH).forEach((HH => {
+       SH[HH] = {}, Object.defineProperty(SH[HH], "channels", {
+         value: AH[HH].channels
+       }), Object.defineProperty(SH[HH], "labels", {
+         value: AH[HH].labels
+       });
+       const BH = rH(HH);
+       Object.keys(BH).forEach((LH => {
+         const AH = BH[LH];
+         SH[HH][LH] = function(HH) {
+           const BH = function() {
+ ... (23 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1024-L1027` → after: `L942-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L942-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L942-L958) · [Before (L1024-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1024-L1027)

```diff
-           function fV(...VV) {
-             return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = LV(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
-           }
-           YV()[fV(172)](tV, tV, TV, lV)
+     function rH(HH) {
+       const BH = function() {
+           const HH = {},
+             BH = Object.keys(AH);
+           for (let LH = BH.length, AH = 0; AH < LH; AH++) HH[BH[AH]] = {
+             distance: -1,
+             parent: null
+           };
+           return HH
+         }(),
+         LH = [HH];
+       for (BH[HH].distance = 0; LH.length;) {
+         const HH = LH.pop(),
+           rH = Object.keys(AH[HH]);
+         for (let AH = rH.length, SH = 0; SH < AH; SH++) {
+           const AH = rH[SH],
+ ... (1 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1031-L1073` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L961-L962) · [Before (L1031-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1031-L1073)

```diff
-       const WV = AV;
-       zV(YV()[vV(175)](WV, tV, XV), WV[EV[0]] = EV[2]);
-       let RV = YV()[vV(176)](WV);
-       NV || (RV *= GV);
-       const gV = wV[vV(177) + vV(178) + vV(EV[37])],
-         DV = gV ? Math[vV(180)](gV, RV) : RV;
-       YV()[vV(EV[84]) + vV(182)](WV, WV);
-       const iV = ZV !== EV[63] && void 0 !== ZV ? ZV : wV[vV(183) + vV(184) + vV(185) + vV(186)];
-       if (DV > EV[2]) {
-         function mV(VV) {
-           var eV, xV, JV, YV, UV, yV, pV;
-           for (zV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = EV[2], UV = EV[2], yV = -EV[0]), pV = EV[2]; pV < xV; pV++) {
-             var QV = 'I*PRTmNUCqDFScJ&luob#nv1;Y=kH[>^+8z34BxM%i`WsEXO)~t?Q$!.jLK",:9p_}5{h]Ad7gGVf@02wya6<(/rZe|'.indexOf(eV[pV]);
-             if (QV !== -EV[0])
-               if (yV < EV[2]) yV = QV;
-               else {
- ... (27 more removed lines; see GitHub link above)
+       return BH
+     }
```

#### 42. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1075-L1085` → after: `L964-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L964-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L964-L968) · [Before (L1075-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1075-L1085)

```diff
-           function SV(VV) {
-             return typeof pV[VV] === EV[16] ? pV[VV] = sV(QV[VV]) : pV[VV]
-           }
-           HV *= xV[KV(189) + SV(190)]
-         }
-         let uV = xV[KV(191) + KV(192) + "ss"] * DV;
-         if (DV < .3 && (uV *= DV), HV > uV) {
-           function IV(...VV) {
-             function eV(...VV) {
-               return VV[EV[11]] = EV[0], VV[EV[2]][EV[0]] * EV[44] + (VV[EV[2]][EV[2]] < EV[2] ? EV[43] | VV[EV[2]][EV[2]] : VV[EV[2]][EV[2]])
-             }
+     function SH(HH, BH) {
+       return function(LH) {
+         return BH(HH(LH))
+       }
+     }
```

#### 43. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1087-L1103` → after: `L970-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L970-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L970-L983) · [Before (L1087-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1087-L1103)

```diff
-             function xV(VV) {
-               switch (((VV & EV[43]) !== EV[2]) * EV[0] + (VV < EV[2]) * EV[1]) {
-                 case EV[2]:
-                   return [VV % EV[43], Math.trunc(VV / EV[44])];
-                 case EV[0]:
-                   return [VV % EV[43] - EV[43], Math.trunc(VV / EV[44]) + EV[0]];
-                 case EV[1]:
-                   return [((VV + EV[43]) % EV[43] + EV[43]) % EV[43], Math.round(VV / EV[44])];
-                 case EV[39]:
-                   return [VV % EV[43], Math.trunc(VV / EV[44])]
-               }
-             }
-             VV[EV[11]] = EV[2], zV(VV[EV[19]] = eV([EV[1], EV[9]]), VV[EV[0]] = eV([EV[0], EV[1]]), VV[-EV[86]] = VV[EV[19]] + VV[EV[0]], VV[EV[39]] = VV[-EV[86]] - VV[EV[0]], VV[EV[49]] = VV[EV[39]] * EV[1], VV[EV[80]] = VV[EV[49]] / EV[1], console.log(xV(VV[-EV[86]])), console. … [truncated]
-           }
-           KV(193) + EV[54] in qV && IV(), HV = uV
-         }
- ... (1 more removed lines; see GitHub link above)
+     function hH(HH, BH) {
+       const LH = [BH[HH].parent, HH];
+       let rH = AH[BH[HH].parent][HH],
+         hH = BH[HH].parent;
+       for (; BH[hH].parent;) LH.unshift(BH[hH].parent), rH = SH(AH[BH[hH].parent][hH], rH), hH = BH[hH].parent;
+       return rH.conversion = LH, rH
+     }
+     HH.exports = function(HH) {
+       const BH = rH(HH),
+         LH = {},
+         AH = Object.keys(BH);
+       for (let rH = AH.length, SH = 0; SH < rH; SH++) {
+         const HH = AH[SH];
+         null !== BH[HH].parent && (LH[HH] = hH(HH, BH))
```

#### 44. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1105` → after: `L985-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L985-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L985-L1137) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1105)

```diff
-       yV[vV(197) + EV[87]] = xV[vV(198) + vV(EV[61]) + EV[87]] * (NV ? bV : BV)
+       return LH
+     }
+   },
+   37553: HH => {
+     HH.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+ ... (137 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1108-L1154` → after: `L1140-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1140-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L1140-L1149) · [Before (L1108-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1108-L1154)

```diff
-   38799: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => QV,
-       g: () => pV
-     });
-     var JV = xV(38803),
-       YV = xV(2014);
-     const UV = 2,
-       yV = 1,
-       pV = {
-         eZ: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
- ... (31 more removed lines; see GitHub link above)
+   37532: (HH, BH, LH) => {
+     var AH = LH(37536),
+       rH = Array.prototype.concat,
+       SH = Array.prototype.slice,
+       hH = HH.exports = function(HH) {
+         for (var BH = [], LH = 0, hH = HH.length; LH < hH; LH++) {
+           var tH = HH[LH];
+           AH(tH) ? BH = rH.call(BH, SH.call(tH)) : BH.push(tH)
+         }
+         return BH
```

#### 46. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1156-L1167` → after: `L1151-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1151-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/248.js#L1151-L1159) · [Before (L1156-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/248.js#L1156-L1167)

```diff
- 
-     function QV(VV, eV, xV, pV, QV, nV, wV) {
-       if (QV.speed) return (0, JV.b)(eV, xV, pV, QV, nV, wV, VV), void(QV.ticksToReachMaxIdleFriction = UV);
-       const ZV = pV.isOnGround(),
-         vV = eV.bloxd.getSyncedClientOptions(eV.bloxd.getPlayerReader(xV)),
-         rV = null === vV ? eV.bloxd.getClientPredictedOption(xV, "groundFrictionScale") : vV.groundFrictionScale,
-         kV = null === vV ? eV.bloxd.getClientPredictedOption(xV, "airFrictionScale") : vV.airFrictionScale,
-         bV = ZV ? rV : kV,
-         EV = Math.max(yV, bV),
-         BV = QV.ticksToReachMaxIdleFriction / UV,
-         jV = (0, YV.A)(EV, bV, BV);
-       nV.friction = VV.standingFriction * ((null === vV ? eV.bloxd.getClientPredictedOption(xV, "airMomentumConservation") : vV.airMomentumConservation) ? jV : bV), QV.ticksToReachMaxIdleFriction > 0 && QV.ticksToReachMaxIdleFriction--
+     hH.wrap = function(HH) {
+       return function() {
+         return HH(hH(arguments))
+       }
+     }
+   },
+   37536: HH => {
+     HH.exports = function(HH) {
+       return !(!HH || "string" === typeof HH) && (HH instanceof Array || Array.isArray(HH) || HH.length >= 0 && (HH.splice instanceof Function || Object.getOwnPropertyDescriptor(HH, HH.length - 1) && "String" !== HH.constructor.name))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L10` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L4-L14) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L4-L10)

```diff
-   41047: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       getBlockFaces: () => vV,
-       getIngameIconUrl: () => bV,
-       getItemIconUrl: () => kV,
-       getItemTextureUrl: () => rV,
-       getParticleTextureUrl: () => EV
+   37617: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => tB,
+       h: () => xB,
+       k: () => GB,
+       o: () => CB,
+       p: () => YB,
+       s: () => XB,
+       t: () => vB,
+       v: () => EB,
+       x: () => QB
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L12-L18` → after: `L16-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L16-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L16-L143) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L12-L18)

```diff
-     var JV = xV(4940),
-       YV = xV(38212),
-       UV = xV(9811),
-       yV = xV(3586);
-     const pV = new Set,
-       QV = new Set;
-     let nV = null;
+     const AH = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       rH = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       SH = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       hH = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       tH = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       zH = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       CH = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       EH = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       XH = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       GH = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       YH = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       uH = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       QH = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       WH = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       MH = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       xH = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (112 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L21-L23` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L146-L148) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L21-L23)

```diff
-       pV.has(VV) || (pV.add(VV), QV.add(VV), nV ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${QV.size} names`, [...QV]), QV.clear(), nV = null
-       }), 1e3))
+       const BH = hB.get(HH);
+       if (void 0 === BH) throw new Error(`Invalid sound name ${HH} (not in any sound group)`);
+       return BH
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L26-L31` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L151-L152) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L26-L31)

```diff
-     function ZV(VV, eV) {
-       try {
-         return (0, UV.getDefaultTexture)(VV, eV).url
-       } catch {
-         return wV(VV), null
-       }
+     function CB(HH) {
+       return zB(HH).group
```

#### 5. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L35-L49` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L156) · [Before (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L35-L49)

```diff
-       var eV, xV;
-       const UV = YV.k[VV];
-       if (!UV || UV.itemTexture || !UV.textureInfo) return null;
-       const {
-         textureInfo: pV,
-         texturePerSide: QV
-       } = UV, nV = VV => {
-         return "string" === typeof(eV = QV && Array.isArray(pV) ? pV[QV[VV]] : pV) ? ZV(eV, yV.f.BLOCK) : eV && "object" === typeof eV && "animTextures" in eV ? ZV((0, JV.m)(eV), yV.f.BLOCK) : null;
-         var eV
-       }, wV = nV(2);
-       return wV ? {
-         top: wV,
-         left: null !== (eV = nV(4)) && void 0 !== eV ? eV : wV,
-         right: null !== (xV = nV(0)) && void 0 !== xV ? xV : wV
-       } : null
+       return zB(HH).file
```

#### 6. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L53-L55` → after: `L160-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L160-L164) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L53-L55)

```diff
-       var eV;
-       const xV = YV.k[VV];
-       return ZV(null !== (eV = null === xV || void 0 === xV ? void 0 : xV.itemTexture) && void 0 !== eV ? eV : "string" === typeof(null === xV || void 0 === xV ? void 0 : xV.textureInfo) ? xV.textureInfo : VV, yV.f.ITEM)
+       return hB.has(HH)
+     }
+ 
+     function GB(HH, BH) {
+       return YB(HH).includes(BH)
```

#### 7. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L59-L60` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L168-L169) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L59-L60)

```diff
-       var eV, xV;
-       return YV.k[VV] ? null !== (eV = null === (xV = vV(VV)) || void 0 === xV ? void 0 : xV.top) && void 0 !== eV ? eV : rV(VV) : null
+       if (!(HH in SB)) throw new Error(`Invalid sound group ${HH}`);
+       return Object.keys(SB[HH].sounds)
```

#### 8. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L64` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L174-L175) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L64)

```diff
-       return ZV(VV, yV.f.ICON)
+       let BH = uB.get(HH);
+       return void 0 === BH && (BH = [...hB.keys()].filter((BH => BH.startsWith(HH))), uB.set(HH, BH)), BH
```

#### 9. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L68-L71` → after: `L181-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L181-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L181-L189) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L68-L71)

```diff
-       try {
-         return xV(3737)(`./${VV}.png`)
-       } catch {
-         return wV(VV), null
+       const BH = QB(HH),
+         LH = BH[Math.floor(Math.random() * BH.length)];
+       if (BH.length > 1) {
+         const BH = function(HH, BH) {
+           const LH = `${BH}\n${HH}`;
+           let AH = MB.get(LH);
+           return void 0 === AH && (AH = QB(HH).filter((HH => hB.get(HH).group === BH)), MB.set(LH, AH)), AH
+         }(HH, hB.get(LH).group);
+         BH.length > 1 ? WB.set(LH, BH) : WB.delete(LH)
```

#### 10. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L75` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L198) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L75)

```diff
-   38245: (VV, eV, xV) => {
+   37626: (HH, BH, LH) => {
```

#### 11. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L77` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L200-L201) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L77)

```diff
-       c: () => JV
+       b: () => AH,
+       d: () => SH
```

#### 12. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L79-L206` → after: `L203-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L203-L212) · [Before (L79-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L79-L206)

```diff
-     const JV = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
- ... (112 more removed lines; see GitHub link above)
+     const AH = "__default",
+       rH = ["end", "stop", "playerror"];
+ 
+     function SH(HH, BH) {
+       const LH = () => {
+         if (function(HH) {
+             return "loaded" === HH.state() && !HH.playing() && !HH._playLock
+           }(HH)) {
+           for (const BH of rH) HH.off(BH, LH);
+           HH.unload(), null === BH || void 0 === BH || BH()
```

#### 13. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L208-L236` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/249.js#L214-L216) · [Before (L208-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/249.js#L208-L236)

```diff
-       },
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
-       },
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
-       },
-       "skyblock:forged:stone-stone-stone": {
- ... (13 more removed lines; see GitHub link above)
+       };
+       for (const AH of rH) HH.on(AH, LH);
+       LH()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L6` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/250.js#L4-L21) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/250.js#L4-L6)

```diff
-   38272: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV,
+   40687: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => AH,
+       f: () => rH
+     });
+     const AH = "The world isn't loaded, so no blocks can be seen.",
+       rH = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40035: (HH, BH, LH) => {
+     function AH(HH) {
+       return !(!HH.lobbyLeaderboardInfo && !HH.lobbyManage)
+     }
+     LH.d(BH, {
+       e: () => AH
+     })
+   },
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L181` → after: `L23-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L23-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/250.js#L23-L41) · [Before (L8-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/250.js#L8-L181)

```diff
-       f: () => YV
-     });
-     const JV = 1 / 2.2,
-       YV = 2.2;
-     Math.sqrt(5);
-     let UV = .001
-   },
-   38303: (VV, eV, xV) => {
-     function JV(VV) {
-       return parseInt(VV.toString().replace(/\W/g, ""))
-     }
- 
-     function YV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(VV - eV) <= xV
-     }
- ... (158 more removed lines; see GitHub link above)
+       d: () => AH
+     });
+     const AH = 3,
+       rH = {
+         recording: !1,
+         clipping: !1,
+         hasClipBuffer: !1,
+         seconds: 0
+       }
+   },
+   37667: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH,
+       g: () => rH
+     });
+     let AH = () => null;
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L190-L192` → after: `L565-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L565-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/250.js#L565-L766) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/250.js#L190-L192)

```diff
-       i: () => yV
-     });
-     const UV = ["push", "splice", "pop", "shift", "unshift"];
+       k: () => VH,
+       m: () => TH
+     });
+     var AH = LH(40210),
+       rH = LH(1168),
+       SH = LH(2036),
+       hH = LH(2045),
+       tH = LH(3639),
+       zH = LH(37667),
+       CH = LH(1297),
+       EH = LH(41911),
+       XH = LH(5288),
+       GH = LH(2600),
+       YH = LH(41920),
+       uH = LH(41922),
+       QH = LH(41968);
+ ... (186 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L195-L220` → after: `L769-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L769-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/250.js#L769-L808) · [Before (L195-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/250.js#L195-L220)

```diff
-       const xV = UV.map((xV => function(VV, eV, xV) {
-         const JV = VV[eV];
-         if ("function" !== typeof JV) return null;
-         const YV = function() {
-           const JV = VV.length,
-             UV = YV.previous.apply(VV, arguments);
-           return xV(eV, JV), UV
-         };
-         return JV.next = YV, YV.previous = JV, VV[eV] = YV, () => {
-           const xV = YV.previous;
-           if (!xV) return;
-           const JV = YV.next;
-           JV ? (xV.next = JV, JV.previous = xV) : (xV.next = void 0, VV[eV] = xV), YV.next = void 0, YV.previous = void 0
-         }
-       }(VV, xV, eV)));
-       return () => {
- ... (10 more removed lines; see GitHub link above)
+       if (hH(HH)) throw HH;
+       console.error(BH, HH)
+     }
+ 
+     function zH(HH, BH, LH, rH, SH) {
+       if (BH % rH !== 0 || BH + LH > HH.byteLength) throw new AH(`${SH}: ${LH} bytes at ${BH}, ${rH}-aligned, outside ${HH.byteLength} bytes of memory`)
+     }
+ 
+     function CH(HH, BH, LH, AH, rH) {
+       return 0 === LH ? null : (zH(BH, LH, AH * HH.BYTES_PER_ELEMENT, HH.BYTES_PER_ELEMENT, rH), new HH(BH, LH, AH))
+     }
+ 
+     function EH(HH, BH, LH, AH, rH) {
+       return 0 === BH ? null : (zH(HH, BH, LH, AH, rH), new DataView(HH, BH, LH))
+     }
+   },
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L223-L227` → after: `L811-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L811-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/250.js#L811-L867) · [Before (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/250.js#L223-L227)

```diff
-       JV[VV] = eV
-     }
- 
-     function UV(VV) {
-       return JV[VV]
+       try {
+         HH(BH)
+       } catch (LH) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", LH)
+       }
+     }
+ 
+     function EH() {
+       return zH
+     }
+ 
+     function XH(HH) {
+       tH.push(HH), null !== zH && CH(HH, zH)
+     }
+ 
+     function GH(HH) {
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L3)

```diff
- export const ids = [251, 258];
+ export const ids = [251];
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L5-L25` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L4-L7) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L5-L25)

```diff
-   39437: VV => {
-     VV.exports = function(VV) {
-       return null != VV && null != VV.constructor && "function" === typeof VV.constructor.isBuffer && VV.constructor.isBuffer(VV)
-     }
-   },
-   39416: (VV, eV, xV) => {
-     var JV = xV(39424),
-       YV = xV(39430),
-       UV = xV(39437);
-     xV.g.__TYPEDARRAY_POOL || (xV.g.__TYPEDARRAY_POOL = {
-       UINT8: YV([32, 0]),
-       UINT16: YV([32, 0]),
-       UINT32: YV([32, 0]),
-       INT8: YV([32, 0]),
-       INT16: YV([32, 0]),
-       INT32: YV([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   37791: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => TH,
+       f: () => PH
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L27-L78` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L9-L26) · [Before (L27-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L27-L78)

```diff
-     var yV = "undefined" !== typeof Uint8ClampedArray,
-       pV = xV.g.__TYPEDARRAY_POOL;
-     pV.UINT8C || (pV.UINT8C = YV([32, 0])), pV.BUFFER || (pV.BUFFER = YV([32, 0]));
-     var QV = pV.DATA,
-       nV = pV.BUFFER;
- 
-     function wV(VV) {
-       if (VV) {
-         var eV = VV.length || VV.byteLength,
-           xV = JV.log2(eV);
-         QV[xV].push(VV)
-       }
-     }
- 
-     function ZV(VV) {
-       VV = JV.nextPow2(VV);
- ... (36 more removed lines; see GitHub link above)
+     var AH = LH(4631),
+       rH = LH(1450),
+       SH = LH(45),
+       hH = LH(7007),
+       tH = LH(4624),
+       zH = LH(1241),
+       CH = LH(1998),
+       EH = LH(1967),
+       XH = LH(1455),
+       GH = LH(1123),
+       YH = LH(37793),
+       uH = LH(1038),
+       QH = LH.n(uH),
+       WH = LH(1287),
+       MH = LH(1315),
+       xH = LH(1214),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L80-L213` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L28-L31) · [Before (L80-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L80-L213)

```diff
-     function tV(VV) {
-       return yV ? new Uint8ClampedArray(ZV(VV), 0, VV) : vV(VV)
-     }
- 
-     function FV(VV) {
-       return new DataView(ZV(VV), 0, VV)
-     }
-     eV.free = function(VV) {
-       if (UV(VV)) nV[JV.log2(VV.length)].push(VV);
-       else {
-         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(VV) && (VV = VV.buffer), !VV) return;
-         var eV = VV.length || VV.byteLength,
-           xV = 0 | JV.log2(eV);
-         QV[xV].push(VV)
-       }
-     }, eV.freeUint8 = eV.freeUint16 = eV.freeUint32 = eV.freeInt8 = eV.freeInt16 = eV.freeInt32 = eV.freeFloat32 = eV.freeFloat = eV.freeFloat64 = eV.freeDouble = eV.freeUint8Clamped = eV.freeDataView = function(VV) {
- ... (118 more removed lines; see GitHub link above)
+     function TH() {
+       const {
+         t: HH
+       } = (0, GH.B)(), [BH, LH] = (0, SH.useState)(!1), [uH, TH] = (0, SH.useState)(null), [VH, OH] = (0, SH.useState)(1), [bH, kH] = (0, SH.useState)(!1), [mH, oH] = (0, SH.useState)(!1), IH = (0, SH.useRef)(0), fH = (0, SH.useRef)(!1), lH = (0, SH.useRef)(!1), KH = (0, SH.useRe … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L215-L221` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L33-L35) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L215-L221)

```diff
-     function QV(VV, eV, xV, JV) {
-       for (var YV = 0, UV = 0, yV = 0, QV = VV.length; yV < QV; ++yV) {
-         var nV = VV[yV];
-         if (!pV(eV, nV)) {
-           for (var wV = 0; wV < 2 * eV; ++wV) xV[YV++] = nV[wV];
-           JV[UV++] = yV
-         }
+       function eH() {
+         const HH = null !== uH && void 0 !== uH ? uH : "Rested Speed";
+         CH.gameBridge.send("wakeUp", mH ? HH : null), cH.current = null, LH(!1), TH(null), OH(1), kH(!1), oH(!1)
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L226-L241` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L38-L46) · [Before (L226-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L226-L241)

```diff
-     function nV(VV, eV, xV, JV) {
-       var pV = VV.length,
-         nV = eV.length;
-       if (!(pV <= 0 || nV <= 0)) {
-         var wV = VV[0].length >>> 1;
-         if (!(wV <= 0)) {
-           var ZV, vV = YV.mallocDouble(2 * wV * pV),
-             rV = YV.mallocInt32(pV);
-           if ((pV = QV(VV, wV, vV, rV)) > 0) {
-             if (1 === wV && JV) UV.init(pV), ZV = UV.sweepComplete(wV, xV, 0, pV, vV, rV, 0, pV, vV, rV);
-             else {
-               var kV = YV.mallocDouble(2 * wV * nV),
-                 bV = YV.mallocInt32(nV);
-               (nV = QV(eV, wV, kV, bV)) > 0 && (UV.init(pV + nV), ZV = 1 === wV ? UV.sweepBipartite(wV, xV, 0, pV, vV, rV, 0, nV, kV, bV) : yV(wV, xV, JV, pV, vV, rV, nV, kV, bV), YV.free(kV), YV.free(bV))
-             }
-             YV.free(vV), YV.free(rV)
+       function qH() {
+         return !bH && (eH(), !0)
+       }
+       return (0, rH.d)("PlayerPhysicsTypeUpdate", (HH => {
+         HH !== cH.current && (cH.current = HH, HH === hH.o.SLEEPING ? (lH.current || (IH.current = CH.gameBridge.lookup("cameraZoom", null), lH.current = !0), fH.current = !0, CH.gameBridge.send("setCameraZoom", 3), LH(!0), OH(function() {
+           for (const HH of CH.gameBridge.lookup("blocksStandingOn", null)) {
+             if (YH.d.leafBeds.includes(HH)) return console.log(`Found leaf bed: ${HH}`), 1;
+             if (YH.d.woolBeds.includes(HH)) return console.log(`Found woold bed: ${HH}`), 2;
+             if (YH.d.strongBeds.includes(HH)) return console.log(`Found strong bed ${HH}`), 3
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L243-L250` → after: `L48-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L48-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L48-L159) · [Before (L243-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L243-L250)

```diff
-           return ZV
-         }
-       }
-     }
- 
-     function wV(VV, eV) {
-       JV.push([VV, eV])
-     }
+           return 1
+         }())) : (lH.current = !1, LH(!1), TH(null), OH(1)))
+       })), (0, SH.useEffect)((() => () => {
+         (0, zH.t)(PH)
+       }), []), (0, SH.useEffect)((() => {
+         BH ? (0, zH.x)(PH) : ((0, zH.t)(PH), fH.current && (CH.gameBridge.send("setCameraZoom", IH.current), fH.current = !1))
+       }), [BH]), (0, xH.r)("overlay", KH, qH, BH), (0, vH.jsx)(AH.e, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: BH,
+         timeout: 300,
+         nodeRef: KH,
+         unmountOnExit: !0,
+         children: (0, vH.jsx)("div", {
+           ref: KH,
+           onClick: HH => {
+ ... (96 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L252-L283` → after: `L161-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L161-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L161-L190) · [Before (L252-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L252-L283)

```diff
-   39458: (VV, eV) => {
-     var xV = "d",
-       JV = "ax",
-       YV = "fp",
-       UV = "es",
-       yV = "rs",
-       pV = "re",
-       QV = "rb",
-       nV = "bs",
-       wV = "be",
-       ZV = "bb",
-       vV = [xV, JV, "vv", yV, pV, QV, "ri", nV, wV, ZV, "bi"];
- 
-     function rV(VV) {
-       var eV = "bruteForce" + (VV ? "Full" : "Partial"),
-         JV = [],
- ... (16 more removed lines; see GitHub link above)
+   41884: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => JH
+     });
+     var AH = LH(15),
+       rH = LH(18),
+       SH = LH(4657),
+       hH = LH(304),
+       tH = LH(1659),
+       zH = LH(8870),
+       CH = LH(4685),
+       EH = LH(9390),
+       XH = LH(8901),
+       GH = LH(8878),
+       YH = LH(8908),
+       uH = LH(1390),
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L285-L364` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L192-L193) · [Before (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L285-L364)

```diff
-       pV.push("if(re-rs>be-bs){"), VV ? (QV(!0, !1), pV.push("}else{"), QV(!1, !1)) : (pV.push("if(fp){"), QV(!0, !0), pV.push("}else{"), QV(!0, !1), pV.push("}}else{if(fp){"), QV(!1, !0), pV.push("}else{"), QV(!1, !1), pV.push("}")), pV.push("}}return " + eV);
-       var nV = JV.join("") + pV.join("");
-       return new Function(nV)()
-     }
-     eV.partial = rV(!1), eV.full = rV(!0)
-   },
-   39452: (VV, eV, xV) => {
-     VV.exports = function(VV, eV, xV, UV, wV, MV, zV, GV, WV) {
-       ! function(VV, eV) {
-         var xV = 8 * YV.log2(eV + 1) * (VV + 1) | 0,
-           UV = YV.nextPow2(tV * xV);
-         TV.length < UV && (JV.free(TV), TV = JV.mallocInt32(UV));
-         var yV = YV.nextPow2(FV * xV);
-         PV.length < yV && (JV.free(PV), PV = JV.mallocDouble(yV))
-       }(VV, UV + zV);
-       var RV, gV = 0,
- ... (64 more removed lines; see GitHub link above)
+       update(HH, BH) {
+         return HH ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= BH, BH - this.lostAtMs >= 250)
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L366-L411` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L195-L196) · [Before (L366-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L366-L411)

```diff
-     };
-     var JV = xV(39416),
-       YV = xV(39424),
-       UV = xV(39458),
-       yV = UV.partial,
-       pV = UV.full,
-       QV = xV(39444),
-       nV = xV(39460),
-       wV = xV(39463),
-       ZV = 128,
-       vV = 1 << 22,
-       rV = 1 << 22,
-       kV = wV("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
-       bV = wV("lo===p0", ["p0"]),
-       EV = wV("lo<p0", ["p0"]),
-       BV = wV("hi<=p0", ["p0"]),
- ... (30 more removed lines; see GitHub link above)
+       reset() {
+         this.lostAtMs = null
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L414-L434` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L199-L201) · [Before (L414-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L414-L434)

```diff
- 
-     function XV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
-       var wV = 2 * VV,
-         ZV = pV * wV,
-         vV = QV[ZV + eV];
-       VV: for (var rV = JV, kV = JV * wV; rV < YV; ++rV, kV += wV) {
-         var bV = yV[rV];
-         if (bV !== nV) {
-           var EV = UV[kV + eV],
-             BV = UV[kV + eV + VV];
-           if (!(vV < EV || BV < vV)) {
-             for (var jV = eV + 1; jV < VV; ++jV) {
-               EV = UV[kV + jV], BV = UV[kV + jV + VV];
-               var qV = QV[ZV + jV],
-                 tV = QV[ZV + jV + VV];
-               if (BV < qV || tV < EV) continue VV
- ... (5 more removed lines; see GitHub link above)
+     class mH {
+       constructor(HH, BH) {
+         this.press = HH, this.release = BH, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L436-L477` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L203-L205) · [Before (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L436-L477)

```diff
-     }
-   },
-   39460: (VV, eV, xV) => {
-     VV.exports = function(VV, eV, xV, yV, pV, QV) {
-       if (yV <= xV + 1) return xV;
-       var nV = xV,
-         wV = yV,
-         ZV = yV + xV >>> 1,
-         vV = 2 * VV,
-         rV = ZV,
-         kV = pV[vV * ZV + eV];
-       for (; nV < wV;) {
-         if (wV - nV < YV) {
-           UV(VV, eV, nV, wV, pV, QV), kV = pV[vV * ZV + eV];
-           break
-         }
- ... (26 more removed lines; see GitHub link above)
+       update(HH, BH, LH, AH) {
+         if (HH && null === this.downAtMs) return this.downAtMs = LH, this.latched = AH, void(this.token = this.press(AH));
+         null !== this.downAtMs && (this.latched ? HH && this.end() : !BH && LH - this.downAtMs >= 40 && this.end())
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L479-L521` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L207-L208) · [Before (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L479-L521)

```diff
-       return JV(VV, eV, xV, ZV, pV, QV, pV[vV * ZV + eV])
-     };
-     var JV = xV(39463)("lo<p0", ["p0"]),
-       YV = 8;
- 
-     function UV(VV, eV, xV, JV, YV, UV) {
-       for (var yV = 2 * VV, pV = yV * (xV + 1) + eV, QV = xV + 1; QV < JV; ++QV, pV += yV)
-         for (var nV = YV[pV], wV = QV, ZV = yV * (QV - 1); wV > xV && YV[ZV + eV] > nV; --wV, ZV -= yV) {
-           for (var vV = ZV, rV = ZV + yV, kV = 0; kV < yV; ++kV, ++vV, ++rV) {
-             var bV = YV[vV];
-             YV[vV] = YV[rV], YV[rV] = bV
-           }
-           var EV = UV[wV];
-           UV[wV] = UV[wV - 1], UV[wV - 1] = EV
-         }
-     }
- ... (27 more removed lines; see GitHub link above)
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L523-L579` → after: `L210-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L210-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L210-L218) · [Before (L523-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L523-L579)

```diff
-     }
- 
-     function JV(VV, eV, xV) {
-       eV *= 2;
-       var JV = xV[VV *= 2],
-         YV = xV[VV + 1];
-       xV[VV] = xV[eV], xV[VV + 1] = xV[eV + 1], xV[eV] = JV, xV[eV + 1] = YV
-     }
- 
-     function YV(VV, eV, xV) {
-       eV *= 2, xV[VV *= 2] = xV[eV], xV[VV + 1] = xV[eV + 1]
-     }
- 
-     function UV(VV, eV, xV, JV) {
-       eV *= 2, xV *= 2;
-       var YV = JV[VV *= 2],
- ... (41 more removed lines; see GitHub link above)
+       unlatch() {
+         this.latched = !1
+       }
+       cancel() {
+         null !== this.downAtMs && this.end()
+       }
+       end() {
+         const HH = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(HH)
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L594-L606` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L221-L223) · [Before (L594-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L594-L606)

```diff
-   },
-   39444: (VV, eV, xV) => {
-     VV.exports = {
-       init: function(VV) {
-         var eV = YV.nextPow2(VV);
-         QV.length < eV && (JV.free(QV), QV = JV.mallocInt32(eV));
-         nV.length < eV && (JV.free(nV), nV = JV.mallocInt32(eV));
-         wV.length < eV && (JV.free(wV), wV = JV.mallocInt32(eV));
-         ZV.length < eV && (JV.free(ZV), ZV = JV.mallocInt32(eV));
-         vV.length < eV && (JV.free(vV), vV = JV.mallocInt32(eV));
-         rV.length < eV && (JV.free(rV), rV = JV.mallocInt32(eV));
-         var xV = 8 * eV;
-         kV.length < xV && (JV.free(kV), kV = JV.mallocDouble(xV))
+     const oH = {
+         kind: "specialAction",
+         action: "SpecialAction2"
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L608-L668` → after: `L225-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L225-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L225-L241) · [Before (L608-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L608-L668)

```diff
-       sweepBipartite: function(VV, eV, xV, JV, YV, pV, vV, rV, BV, jV) {
-         for (var qV = 0, tV = 2 * VV, FV = VV - 1, TV = tV - 1, PV = xV; PV < JV; ++PV) {
-           var AV = pV[PV],
-             NV = tV * PV;
-           kV[qV++] = YV[NV + FV], kV[qV++] = -(AV + 1), kV[qV++] = YV[NV + TV], kV[qV++] = AV
-         }
-         for (PV = vV; PV < rV; ++PV) {
-           AV = jV[PV] + yV;
-           var XV = tV * PV;
-           kV[qV++] = BV[XV + FV], kV[qV++] = -AV, kV[qV++] = BV[XV + TV], kV[qV++] = AV
-         }
-         var MV = qV >>> 1;
-         UV(kV, MV);
-         var zV = 0,
-           GV = 0;
-         for (PV = 0; PV < MV; ++PV) {
- ... (45 more removed lines; see GitHub link above)
+       IH = HH => {
+         let BH = null;
+         const LH = new bH.b,
+           AH = () => {
+             BH && (((HH, BH, LH) => {
+               switch (LH.kind) {
+                 case "reload":
+                   return void BH.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void BH.specialActionUp(LH.action);
+                 case "customButton":
+                   return void TH.gameBridge.send("pressCustomButton", {
+                     id: LH.id,
+                     down: !1
+                   });
+                 case "touchButton":
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L670-L673` → after: `L243-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L243-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L243-L263) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L670-L673)

```diff
-             if (1 !== DV)
-               for (CV = 0; CV < WV; ++CV) {
-                 var aV;
-                 if (void 0 !== (aV = eV(wV[CV], iV))) return aV
+             })(HH, BH.bodies, BH.action), BH = null)
+           },
+           SH = (LH, rH, SH, hH) => {
+             AH(), BH = {
+               action: rH,
+               bodies: LH,
+               heldBy: SH,
+               atMs: hH
+             }, ((HH, BH, LH) => {
+               switch (LH.kind) {
+                 case "reload":
+                   return BH.reloadGun(), void BH.specialActionDown("SpecialAction1");
+                 case "specialAction":
+                   return void BH.specialActionDown(LH.action);
+                 case "customButton":
+                   return void TH.gameBridge.send("pressCustomButton", {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L675-L678` → after: `L265-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L265-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L265-L286) · [Before (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L675-L678)

```diff
-             0 === DV ? EV(QV, nV, GV++, iV) : 1 === DV ? EV(wV, ZV, WV++, iV) : 2 === DV && EV(vV, rV, RV++, iV)
-           } else {
-             iV = (gV >> 1) - 1;
-             0 === DV ? bV(QV, nV, GV--, iV) : 1 === DV ? bV(wV, ZV, WV--, iV) : 2 === DV && bV(vV, rV, RV--, iV)
+             })(HH, LH, rH)
+           };
+         return {
+           update: (hH, tH, CH, EH) => {
+             var GH;
+             const YH = (0, VH.k)(HH.contextActionInputs()),
+               uH = null !== (GH = YH[0]) && void 0 !== GH ? GH : oH;
+             (0, OH.e)((0, VH.e)(uH) ? uH : null);
+             const QH = (0, VH.b)(YH);
+             (0, OH.i)(QH);
+             const WH = (0, zH.k)("actionButton");
+             if (QH) {
+               const HH = LH.update(tH.wasPressed(WH), tH.isHeld(WH), CH, EH);
+               "tap" === HH ? SH(hH, uH, [WH], CH) : "hold" === HH && (XH.b.consumeButton(WH), rH.k.AX(PH.l, YH))
+             } else LH.release(), tH.wasPressed(WH) && SH(hH, uH, [WH], CH);
+             BH && CH - BH.atMs >= 40 && !BH.heldBy.some((HH => (0, UH.G)(tH.frame.values, HH))) && AH()
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L681-L724` → after: `L289-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L289-L310) · [Before (L681-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L681-L724)

```diff
-       },
-       scanBipartite: function(VV, eV, xV, JV, YV, pV, wV, ZV, vV, rV, BV, jV) {
-         var qV = 0,
-           tV = 2 * VV,
-           FV = eV,
-           TV = eV + VV,
-           PV = 1,
-           AV = 1;
-         JV ? AV = yV : PV = yV;
-         for (var NV = YV; NV < pV; ++NV) {
-           var XV = NV + PV,
-             MV = tV * NV;
-           kV[qV++] = wV[MV + FV], kV[qV++] = -XV, kV[qV++] = wV[MV + TV], kV[qV++] = XV
-         }
-         for (NV = vV; NV < rV; ++NV) {
-           XV = NV + AV;
- ... (28 more removed lines; see GitHub link above)
+       };
+     var fH = LH(8855);
+     var lH = LH(41875),
+       KH = LH(9450),
+       cH = LH(8897),
+       eH = LH(9540);
+     var qH = LH(41871),
+       gH = LH(9543),
+       NH = LH(41889),
+       RH = LH(9522),
+       jH = LH(9453),
+       nH = LH(9458),
+       FH = LH(9463),
+       DH = LH(9347),
+       wH = LH(9419);
+     const ZH = () => DH.c[(0, GH.g)().tapHoldTime].wheelMs,
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L727-L760` → after: `L323-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L323-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L323-L450) · [Before (L727-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L727-L760)

```diff
-       scanComplete: function(VV, eV, xV, JV, YV, pV, nV, wV, ZV, vV, rV) {
-         for (var bV = 0, EV = 2 * VV, BV = eV, jV = eV + VV, qV = JV; qV < YV; ++qV) {
-           var tV = qV + yV,
-             FV = EV * qV;
-           kV[bV++] = pV[FV + BV], kV[bV++] = -tV, kV[bV++] = pV[FV + jV], kV[bV++] = tV
-         }
-         for (qV = wV; qV < ZV; ++qV) {
-           tV = qV + 1;
-           var TV = EV * qV;
-           kV[bV++] = vV[TV + BV], kV[bV++] = -tV
-         }
-         var PV = bV >>> 1;
-         UV(kV, PV);
-         var AV = 0;
-         for (qV = 0; qV < PV; ++qV) {
-           var NV = 0 | kV[2 * qV + 1];
- ... (18 more removed lines; see GitHub link above)
+       JH = HH => {
+         const BH = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+           headingOffset: 0,
+           jumpHeld: !1,
+           jumpPressed: !1,
+           running: !1,
+           sprintHeld: !1
+         };
+         let LH = sH;
+         const EH = new NH.b,
+           TH = rH.k.subscribe("appManagerUpdated|activeInputDevice", (BH => {
+             HH.deviceChanged(BH)
+           }));
+ ... (112 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L763-L863` → after: `L475-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L475-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L475-L488) · [Before (L763-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L763-L863)

```diff
-           } else {
-             for (tV = NV - yV, WV = AV - 1; WV >= 0; --WV)
-               if (QV[WV] === tV) {
-                 for (iV = WV + 1; iV < AV; ++iV) QV[iV - 1] = QV[iV];
-                 break
-               }-- AV
-           }
-         }
-       }
-     };
-     var JV = xV(39416),
-       YV = xV(39424),
-       UV = xV(39449),
-       yV = 1 << 28,
-       pV = 1024,
-       QV = JV.mallocInt32(pV),
- ... (85 more removed lines; see GitHub link above)
+           }),
+           vB = (0, lH.e)(HH),
+           PB = (() => {
+             const HH = rH.k.subscribe(fH.e, (HH => {
+               !HH && (0, YH.j)() && "inGame" === AH.c.get("gameState") && rH.k.AX("showBottomMessage", {
+                 message: [{
+                   translationKey: "controller:disconnected"
+                 }],
+                 timeoutLength: 3e3,
+                 type: "Warning"
+               })
+             }));
+             return () => {
+               rH.k.unsubscribe(HH)
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L865-L971` → after: `L490-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L490-L492) · [Before (L865-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L865-L971)

```diff
-           }
-           VV.length = 0
-         }(pV.multiComps), pV.removals.length && function(VV) {
-           for (var eV = 0; eV < VV.length; eV++) {
-             VV[eV].flush()
-           }
-           VV.length = 0
-         }(pV.removals)
-       }
-       this.Cb = YV, this._systems = UV, this._renderSystems = yV, this.Y_ = function(eV) {
-         var JV = xV++;
-         return Array.isArray(eV) && eV.forEach((eV => VV.WC(JV, eV))), JV
-       }, this.deleteEntity = function(eV) {
-         return Object.keys(YV).forEach((VV => {
-           YV[VV].hash[eV] && QV(eV, VV)
-         })), VV
- ... (91 more removed lines; see GitHub link above)
+           })();
+         return () => {
+           GB(), HH.uninstall(), (0, RH.h)(!1), (0, FH.e)(!1), rH.k.unsubscribe(TH), rH.k.unsubscribe(HB), xB(), vB(), PB(), JH.uninstall()
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L993-L1461` → after: `L496-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L496-L500) · [Before (L993-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L993-L1461)

```diff
-   39385: VV => {
-     function eV(VV, eV) {
-       var xV = VV._map[eV];
-       if (delete VV.hash[eV], delete VV._map[eV], xV === VV.list.length - 1) VV.list.pop(), VV._idList.pop();
-       else {
-         var JV = VV.list.pop();
-         VV.list[xV] = JV;
-         var YV = VV._idList.pop();
-         VV._idList[xV] = YV, VV._map[YV] = xV
-       }
-     }
-     VV.exports = class {
-       constructor() {
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
-       }
-       add(VV, eV) {
- ... (453 more removed lines; see GitHub link above)
+   41875: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => uH,
+       e: () => WH,
+       h: () => YH
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1463-L1503` → after: `L502-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L502-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L502-L525) · [Before (L1463-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1463-L1503)

```diff
-     var ue = Array.isArray;
- 
-     function se(VV) {
-       return null != VV && function(VV) {
-         return "number" == typeof VV && VV > -1 && VV % 1 == 0 && VV <= YV
-       }(VV.length) && !Ie(VV)
-     }
-     var Se = ve || function() {
-       return !1
-     };
- 
-     function Ie(VV) {
-       var eV = de(VV) ? xe.call(VV) : "";
-       return eV == QV || eV == nV
-     }
- 
- ... (25 more removed lines; see GitHub link above)
+     var AH = LH(1241),
+       rH = LH(4657),
+       SH = LH(9484),
+       hH = LH(37791),
+       tH = LH(1757),
+       zH = LH(1115),
+       CH = LH(8913),
+       EH = LH(9407),
+       XH = LH(9509);
+     const GH = {
+         emoteWheel: SH.g,
+         quickChatWheel: EH.e,
+         actionWheel: XH.r
+       },
+       YH = Object.keys(GH),
+       uH = "dead",
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1615` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L529) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1615)

```diff
-   38908: (VV, eV, xV) => {
+   41871: (HH, BH, LH) => {
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1617` → after: `L531-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L531-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L531-L538) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1617)

```diff
-       e: () => YV
+       b: () => rH,
+       f: () => zH,
+       j: () => tH,
+       m: () => EH,
+       p: () => hH,
+       q: () => SH,
+       s: () => CH,
+       t: () => XH
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1619` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L540) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1619)

```diff
-     var JV = xV(38917);
+     var AH = LH(8857);
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1621-L1658` → after: `L542-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L542-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L542-L638) · [Before (L1621-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1621-L1658)

```diff
-       static GetPlanes(VV) {
-         const eV = [];
-         for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
-         return YV.GetPlanesToRef(VV, eV), eV
-       }
-       static GetNearPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
-       }
-       static GetFarPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
-       }
-       static GetLeftPlaneToRef(VV, eV) {
-         const xV = VV.m;
-         eV.normal.x = xV[3] + xV[0], eV.normal.y = xV[7] + xV[4], eV.normal.z = xV[11] + xV[8], eV.d = xV[15] + xV[12], eV.normalize()
- ... (22 more removed lines; see GitHub link above)
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+       update(HH, BH, LH) {
+         const rH = (0, AH.f)(HH, BH.lookDeadzone);
+         if (Math.hypot(rH.x, rH.y) < .9 || Math.abs(rH.x) < Math.abs(rH.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = LH);
+         const SH = (hH = BH.lookSensitivityX, Math.min(1, 100 / hH));
+         var hH;
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (LH - this.fullTiltSinceMs - 250 * SH) / (200 * SH)))
+       }
+       reset() {
+         this.fullTiltSinceMs = null
+       }
+     }
+     const SH = (HH, BH, LH, rH, SH) => {
+ ... (81 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1660` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L640) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1660)

```diff
-   38917: (VV, eV, xV) => {
+   41889: (HH, BH, LH) => {
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1664-L1685` → after: `L645-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L645-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L645-L666) · [Before (L1664-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1664-L1685)

```diff
-     var JV = xV(38269);
-     class YV {
-       constructor(VV, eV, xV, YV) {
-         this.normal = new JV.o(VV, eV, xV), this.d = YV
-       }
-       WYV() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let VV = this.normal.getHashCode();
- ... (6 more removed lines; see GitHub link above)
+     const AH = HH => {
+       let {
+         mode: BH,
+         sneakHeld: LH,
+         sneakPressed: AH,
+         sneakTogglePressed: rH,
+         descending: SH,
+         canCrouch: hH,
+         toggled: tH
+       } = HH;
+       return hH ? SH ? {
+         crouchHeld: LH,
+         toggled: !1
+       } : "hold" === BH ? {
+         crouchHeld: LH,
+         toggled: rH ? !tH : tH
+ ... (6 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1687-L1740` → after: `L668-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L668-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L668-L683) · [Before (L1687-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1687-L1740)

```diff
-       transform(VV) {
-         const eV = YV._TmpMatrix;
-         VV.invertToRef(eV);
-         const xV = eV.m,
-           JV = this.normal.x,
-           UV = this.normal.y,
-           yV = this.normal.z,
-           pV = this.d,
-           QV = JV * xV[0] + UV * xV[1] + yV * xV[2] + pV * xV[3],
-           nV = JV * xV[4] + UV * xV[5] + yV * xV[6] + pV * xV[7],
-           wV = JV * xV[8] + UV * xV[9] + yV * xV[10] + pV * xV[11],
-           ZV = JV * xV[12] + UV * xV[13] + yV * xV[14] + pV * xV[15];
-         return new YV(QV, nV, wV, ZV)
-       }
-       dotCoordinate(VV) {
-         return this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z + this.d
- ... (38 more removed lines; see GitHub link above)
+     };
+     class rH {
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(HH, BH) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = BH, this.graceEndsMs = BH + 500);
+         const LH = BH < this.graceEndsMs;
+         return LH && (HH.sneakPressed || HH.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, BH + 300))), HH.sneakHeld ? LH && HH.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: HH.sneakHeld && !this.ignoringHeld,
+           sneakPressed: HH.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: HH.sneakTogglePressed && !LH
+         }
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1745-L1756` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L687-L688) · [Before (L1745-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1745-L1756)

```diff
-   38263: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       Matrix: () => JV.d,
-       Quaternion: () => JV.h,
-       RegisterMathVector: () => JV.j,
-       TmpVectors: () => JV.l,
-       Vector2: () => JV.n,
-       Ik: () => JV.o,
-       Vector4: () => JV.q
-     });
-     var JV = xV(38269);
-     (0, JV.j)()
+   41860: (HH, BH, LH) => {
+     LH(9543)
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1758` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L690) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1758)

```diff
-   39240: (VV, eV, xV) => {
+   41864: (HH, BH, LH) => {
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1760` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L692) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1760)

```diff
-       c: () => JV
+       e: () => vH
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1762-L1773` → after: `L694-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L694-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/251.js#L694-L780) · [Before (L1762-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/251.js#L1762-L1773)

```diff
-     class JV {
-       constructor(VV, eV, xV, JV) {
-         this.x = VV, this.y = eV, this.width = xV, this.height = JV
-       }
-       toGlobal(VV, eV) {
-         return new JV(this.x * VV, this.y * eV, this.width * VV, this.height * eV)
-       }
-       toGlobalToRef(VV, eV, xV) {
-         return xV.x = this.x * VV, xV.y = this.y * eV, xV.width = this.width * VV, xV.height = this.height * eV, this
-       }
-       clone() {
-         return new JV(this.x, this.y, this.width, this.height)
+     var AH = LH(18),
+       rH = LH(9484),
+       SH = LH(9499),
+       hH = LH(8870),
+       tH = LH(8901),
+       zH = LH(8878),
+       CH = LH(41871),
+       EH = LH(41875),
+       XH = LH(8913),
+       GH = LH(8857),
+       YH = LH(9407),
+       uH = LH(9509);
+     const QH = [{
+         isOpen: rH.i,
+         openButton: () => (0, hH.k)("emoteWheel"),
+         aim: HH => {
+ ... (71 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L2)

```diff
- export const ids = [252, 258, 262];
+ export const ids = [252];
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   41506: (VV, eV, xV) => {
+   39342: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L6-L7)

```diff
-       b: () => yV,
-       e: () => pV
+       d: () => uH
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9-L69` → after: `L8-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L8-L605) · [Before (L9-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L9-L69)

```diff
-     var JV = xV(39870),
-       YV = xV(41279),
-       UV = xV(41478),
-       yV = {};
-     class pV {
-       constructor(VV) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = VV, this.checkInputs = () => {}
-       }
-       add(VV) {
-         const eV = VV.getSimpleName();
-         this.attached[eV] ? JV.b.Warn("camera input of type " + eV + " already exists on camera") : (this.attached[eV] = VV, VV.camera = this.camera, VV.checkInputs && (this.checkInputs = this._addCheckInputs(VV.checkInputs.bind(VV))), this.attachedToElement && VV.attachControl(t … [truncated]
-       }
-       remove(VV) {
-         for (const eV in this.attached) {
-           const xV = this.attached[eV];
-           if (xV === VV) return xV.detachControl(), xV.camera = null, delete this.attached[eV], void this.rebuildInputCheck()
- ... (45 more removed lines; see GitHub link above)
+     var AH = LH(176),
+       rH = LH(38491);
+     const SH = 1.2,
+       hH = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         rE: .5,
+ ... (582 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L71-L191` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L607) · [Before (L71-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L71-L191)

```diff
-         VV.inputsmgr = eV
-       }
-       parse(VV) {
-         const eV = VV.inputsmgr;
-         if (eV) {
-           this.clear();
-           for (const VV in eV) {
-             const xV = yV[VV];
-             if (xV) {
-               const JV = eV[VV],
-                 UV = YV.b.Parse((() => new xV), JV, null);
-               this.add(UV)
-             }
-           }
-         } else
-           for (const xV in this.attached) {
- ... (105 more removed lines; see GitHub link above)
+       };
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L193-L247` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L609-L610) · [Before (L193-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L193-L247)

```diff
-     function vV() {
-       ZV || (ZV = !0, QV.e.AddNodeConstructor("Light_Type_3", ((VV, eV) => () => new wV(VV, UV.o.Zero(), eV))), (0, nV.d)("BABYLON.HemisphericLight", wV))
-     }
-   },
-   38387: (VV, eV, xV) => {
-     xV.d(eV, {
-       Color3: () => JV.d,
-       c: () => JV.h
-     });
-     var JV = xV(38389);
-     (0, JV.i)()
-   },
-   38908: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => YV
-     });
- ... (39 more removed lines; see GitHub link above)
+     function uH(HH) {
+       return YH[HH]
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L250` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L613) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L250)

```diff
-   38917: (VV, eV, xV) => {
+   37941: (HH, BH, LH) => {
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L254-L363` → after: `L617-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L617-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L617-L773) · [Before (L254-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L254-L363)

```diff
-     var JV = xV(38269);
-     class YV {
-       constructor(VV, eV, xV, YV) {
-         this.normal = new JV.o(VV, eV, xV), this.d = YV
-       }
-       WYV() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let VV = this.normal.getHashCode();
- ... (94 more removed lines; see GitHub link above)
+     const AH = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (141 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L367` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L777) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L367)

```diff
-   41660: (VV, eV, xV) => {
+   38499: (HH, BH, LH) => {
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L369` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L779) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L369)

```diff
-       b: () => nV
+       d: () => hH
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L371-L375` → after: `L781-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L781-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L781-L786) · [Before (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L371-L375)

```diff
-     var JV = xV(38269),
-       YV = xV(38389),
-       UV = xV(41664),
-       yV = xV(41674),
-       pV = xV(41688);
+     var AH = LH(330),
+       rH = LH.n(AH),
+       SH = LH(1962);
+     let hH;
+     var tH, zH, CH, EH, XH, GH, YH, uH, QH;
+     const WH = ["b", 0, 1, "h", 3, 179, 9, 7, 48, 6, 4, 8, 255, "length", "undefined", void 0, "d", 2, 63, "fromCodePoint", 12, "push", 91, 8191, 88, 13, 14, 192, 106, 5, "f", 96, 107, 108, "e", null, 103, 104, 105, 109, 110, 111, 121, 122, 127, 128, 89, 138, 58, "bu", "c", 204,  … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L377-L427` → after: `L788-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L788-L800) · [Before (L377-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L377-L427)

```diff
-     function QV(VV) {
-       let eV = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const xV = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         UV = [],
-         QV = VV.width || VV.size || 1,
-         nV = VV.height || VV.size || 1,
-         wV = VV.depth || VV.size || 1,
-         ZV = VV.wrap || !1;
-       let vV = void 0 === VV.topBaseAt ? 1 : VV.topBaseAt,
-         rV = void 0 === VV.bottomBaseAt ? 0 : VV.bottomBaseAt;
-       vV = (vV + 4) % 4, rV = (rV + 4) % 4;
-       let kV = [2, 0, 3, 1][vV],
-         bV = [2, 0, 1, 3][rV],
-         EV = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
-       if (ZV) {
-         eV = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], EV = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
- ... (35 more removed lines; see GitHub link above)
+     function MH(...HH) {
+       return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
+         for (oH(HH[WH[13]] = WH[2], HH[-WH[5]] = 'JwQzaD(U?:t$%4+Y;R[.SXHu>n"1s3#AjL@VB7TNgx)!9<8p&E=IbhP^}oy~qr`26*Omef/_Zc|C0dvF]MGW{,5liKk', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[0]].length, HH[WH[10]] = [], HH[WH[8]] = WH[1], HH[WH[9]] = WH[1], HH[WH[7]] = -WH … [truncated]
+           if (HH[WH[6]] = HH[-WH[5]].indexOf(HH[WH[0]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
+             if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
+             else {
+               oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[8]] |= HH[WH[7]] << HH[WH[9]], HH[WH[9]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+               do {
+                 oH(HH[WH[10]].push(HH[WH[8]] & WH[12]), HH[WH[8]] >>= WH[11], HH[WH[9]] -= WH[11])
+               } while (HH[WH[9]] > WH[7]);
+               HH[WH[7]] = -WH[2]
+             } return HH[WH[7]] > -WH[2] && HH[WH[10]].push((HH[WH[8]] | HH[WH[7]] << HH[WH[9]]) & WH[12]), xH(HH[WH[10]])
+       }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L430-L435` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L803-L804) · [Before (L430-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L430-L435)

```diff
-     function nV(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const JV = new UV.b(VV, xV);
-       eV.sideOrientation = UV.b._GetDefaultSideOrientation(eV.sideOrientation), JV._originalBuilderSideOrientation = eV.sideOrientation;
-       return QV(eV).applyToMesh(JV, eV.updatable), JV
+     function xH(...HH) {
+       return HH[WH[13]] = WH[2], typeof EH !== WH[14] && EH ? (new EH).decode(new XH(HH[WH[1]])) : typeof GH !== WH[14] && GH ? GH.from(HH[WH[1]]).toString("utf-8") : QH(HH[WH[1]])
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L457-L482` → after: `L807-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L807-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L807-L834) · [Before (L457-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L457-L482)

```diff
-     function nV(VV) {
-       const eV = [],
-         xV = [],
-         JV = VV.lines,
-         YV = VV.colors,
-         yV = [];
-       let pV = 0;
-       for (let UV = 0; UV < JV.length; UV++) {
-         const VV = JV[UV];
-         for (let JV = 0; JV < VV.length; JV++) {
-           const {
-             x: QV,
-             y: nV,
-             z: wV
-           } = VV[JV];
-           if (xV.push(QV, nV, wV), YV) {
- ... (10 more removed lines; see GitHub link above)
+     function vH() {}
+     oH(tH = {}, zH = ['?"xC%^7.M2X*uGsu7"9d&Cy8nRi|vQ', 'sP"1>be81*(QD;4', ",/kINrQ[pYX(V+v1", "K`St{vE24~Z?oaA3]/z=bZ5%&OF24;Xx^*%A@V9>C}/8[Mcna|et^GsB@q5mJ", "@|;LwBb#&[+yJ1yV>_9t<dJ[=%*E_/MN!Iw", ">jcIY0bb`hmX:{VR/7@I[MtyU^u(S~!.P<_E;", "G<%dS0!V4[:;4;jRq`~?DZ8QUSfc,])n>Y{hT,N … [truncated]
+       var HH, BH, LH, AH = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }];
+       oH(HH = void 0, BH = []);
+       try {
+         oH(HH = Object, BH[WH[21]]("".__proto__.constructor.name))
+       } catch (XH) {}
+       HH: for (LH = WH[1]; LH < AH[WH[13]]; LH++) try {
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L484-L487` → after: `L836-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L836-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L836-L866) · [Before (L484-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L484-L487)

```diff
-       }
-       const QV = new UV.c;
-       return QV.indices = eV, QV.positions = xV, YV && (QV.colors = yV), QV
-     }
+     }());
+     const PH = rH()[MH(WH[22])](),
+       TH = rH()[MH(WH[22])](),
+       UH = rH()[MH(WH[22])](),
+       VH = rH()[MH(WH[22])](),
+       OH = rH()[MH(WH[22])](),
+       bH = rH()[MH(WH[22])](),
+       kH = rH()[MH(WH[22])](),
+       mH = (...HH) => {
+         function BH(...HH) {
+           return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(HH) {
+             var BH, LH, AH, rH, SH, hH, tH;
+             for (oH(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = WH[1], SH = WH[1], hH = -WH[2]), tH = WH[1]; tH < LH; tH++) {
+               var zH = ']UrJZdVeGHcbhATWCIlFfugXM!}a{<62#vo[`j,~DPwi^8K$&)Lq*1+xyY%N"@BO._R;:tS4/Qp=|zk>(7m390sE5?n'.indexOf(BH[tH]);
+               if (zH !== -WH[2])
+                 if (hH < WH[1]) hH = zH;
+ ... (15 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L489-L507` → after: `L868-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L868-L869) · [Before (L489-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L489-L507)

```diff
-     function wV(VV) {
-       const eV = VV.dashSize || 3,
-         xV = VV.gapSize || 1,
-         YV = VV.dashNb || 200,
-         yV = VV.points,
-         pV = [],
-         QV = [],
-         nV = JV.o.Zero();
-       let wV, ZV, vV, rV = 0,
-         kV = 0;
-       for (vV = 0; vV < yV.length - 1; vV++) yV[vV + 1].subtractToRef(yV[vV], nV), rV += nV.length();
-       const bV = rV / YV,
-         EV = eV * bV / (eV + xV);
-       for (vV = 0; vV < yV.length - 1; vV++) {
-         yV[vV + 1].subtractToRef(yV[vV], nV), wV = Math.floor(nV.length() / bV), nV.normalize();
-         for (let VV = 0; VV < wV; VV++) ZV = bV * VV, pV.push(yV[vV].x + ZV * nV.x, yV[vV].y + ZV * nV.y, yV[vV].z + ZV * nV.z), pV.push(yV[vV].x + (ZV + EV) * nV.x, yV[vV].y + (ZV + EV) * nV.y, yV[vV].z + (ZV + EV) * nV.z), QV.push(kV, kV + 1), kV += 2
- ... (3 more removed lines; see GitHub link above)
+     function oH() {
+       oH = function() {}
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L509-L523` → after: `L871-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L871-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L871-L904) · [Before (L509-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L509-L523)

```diff
- 
-     function ZV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const JV = eV.instance,
-         YV = eV.lines,
-         UV = eV.colors;
-       if (JV) {
-         const VV = JV.getVerticesData(pV.j.PositionKind);
-         let eV, xV;
-         UV && (eV = JV.getVerticesData(pV.j.ColorKind));
-         let yV = 0,
-           QV = 0;
-         for (let JV = 0; JV < YV.length; JV++) {
-           const pV = YV[JV];
-           for (let YV = 0; YV < pV.length; YV++) VV[yV] = pV[YV].x, VV[yV + 1] = pV[YV].y, VV[yV + 2] = pV[YV].z, UV && eV && (xV = UV[JV], eV[QV] = xV[YV].r, eV[QV + 1] = xV[YV].g, eV[QV + 2] = xV[YV].b, eV[QV + 3] = xV[YV].a, QV += 4), yV += 3
+     hH = (...HH) => {
+       function BH(...HH) {
+         return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
+           for (oH(HH[WH[13]] = WH[2], HH[-WH[28]] = 'dMtkDOX_i=n:{yAz~[l1gT,P}LF>;Yrc"%f7pZ+Vvs`@m!$<(?4h3QSuo^59x&EKU])2e*6J0.N#8RbwB/ICqHjGWa|', HH[-WH[7]] = "" + (HH[WH[1]] || ""), HH[-WH[27]] = HH[-WH[7]].length, HH[WH[16]] = [], HH[WH[29]] = WH[1], HH[WH[30]] = WH[1], HH[WH[ … [truncated]
+             if (HH[WH[6]] = HH[-WH[28]].indexOf(HH[-WH[7]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
+               if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
+               else {
+                 oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[29]] |= HH[WH[7]] << HH[WH[30]], HH[WH[30]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                 do {
+                   oH(HH[WH[16]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[30]] -= WH[11])
+                 } while (HH[WH[30]] > WH[7]);
+                 HH[WH[7]] = -WH[2]
+               } return HH[WH[7]] > -WH[2] && HH[WH[16]].push((HH[WH[29]] | HH[WH[7]] << HH[WH[30]]) & WH[12]), xH(HH[WH[16]])
+         }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
+       }
+       HH[WH[13]] = WH[11];
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L532-L543` → after: `L907-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L907-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L907-L926) · [Before (L532-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L532-L543)

```diff
-     function vV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const JV = eV.colors ? [eV.colors] : null;
-       return ZV(VV, {
-         lines: [eV.points],
-         updatable: eV.updatable,
-         instance: eV.instance,
-         colors: JV,
-         useVertexAlpha: eV.useVertexAlpha,
-         material: eV.material
-       }, xV)
-     }
+         function QH(...HH) {
+           return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = uH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
+         }
+         oH(mH(TH, PH, kH), mH(UH, kH, PH), rH()[QH(130)](VH, kH, UH));
+         const MH = rH()[QH(WH[80])](kH),
+           bH = rH()[QH(WH[85])](PH, kH) / HH[WH[29]] / MH,
+           IH = Math[QH(WH[54])](bH, WH[1]) + WH[2];
+         if (HH[WH[29]] * HH[WH[29]] < rH()[WH[49]](UH)) {
+           function fH(...HH) {
+             for (oH(HH[WH[13]] = WH[2], HH[-WH[51]] = 'xlQNZDTeUWPpRBbKu($*7]mMV`/#58JH}%jf<k1vyq!c~wXo@+)>[;h0&6,Yd{23nI.E_?G=a^rFg4LC9iAszO|S":t', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[0]].length, HH[WH[16]] = [], HH[WH[34]] = WH[1], HH[WH[9]] = WH[1], HH[-WH[5 … [truncated]
+               if (HH[WH[52]] = HH[-WH[51]].indexOf(HH[WH[0]][HH[WH[3]]]), HH[WH[52]] !== -WH[2])
+                 if (HH[-WH[53]] < WH[1]) HH[-WH[53]] = HH[WH[52]];
+                 else {
+                   oH(HH[-WH[53]] += HH[WH[52]] * WH[22], HH[WH[34]] |= HH[-WH[53]] << HH[WH[9]], HH[WH[9]] += (HH[-WH[53]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                   do {
+                     oH(HH[WH[16]].push(HH[WH[34]] & WH[12]), HH[WH[34]] >>= WH[11], HH[WH[9]] -= WH[11])
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L545-L624` → after: `L928-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L928-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L928-L931) · [Before (L545-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L545-L624)

```diff
-     function rV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const UV = eV.points,
-         pV = eV.instance,
-         nV = eV.gapSize || 1,
-         ZV = eV.dashSize || 3;
-       if (pV) {
-         const VV = VV => {
-           const eV = JV.o.Zero(),
-             xV = VV.length / 6;
-           let YV, yV, QV, nV, wV = 0,
-             ZV = 0;
-           for (QV = 0; QV < UV.length - 1; QV++) UV[QV + 1].subtractToRef(UV[QV], eV), wV += eV.length();
-           const vV = wV / xV,
-             rV = pV._creationDataStorage.dashSize,
-             kV = rV * vV / (rV + pV._creationDataStorage.gapSize);
- ... (64 more removed lines; see GitHub link above)
+           function lH(HH) {
+             return typeof tH[HH] === WH[14] ? tH[HH] = fH(zH[HH]) : tH[HH]
+           }
+           rH()[lH(134)](PH, PH, UH, IH)
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L626-L655` → after: `L933-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L933-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L933-L952) · [Before (L626-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L626-L655)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(VV) {
-         const eV = this.material;
-         if (eV === VV) return;
-         const xV = eV && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(VV), xV && eV?.dispose()
-       }
-       _setInternalMaterial(VV) {
-         this._setMaterial(VV), this.material && (this.material.fillMode = nV.e.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (14 more removed lines; see GitHub link above)
+         oH(HH[WH[6]] = (0, SH.p)(HH[WH[6]], 1, Math[QH(WH[54])](WH[2], Math[QH(135)](WH[1], -bH, WH[2] - MH / HH[WH[29]]))), rH()[QH(136)](PH, PH, VH))
+       }
+       const EH = OH;
+       oH(rH()[BH(137)](EH, PH, kH), EH[WH[2]] = WH[1], HH[WH[50]] = rH()[BH(WH[47])](EH)), CH || (HH[WH[50]] *= HH[WH[6]]);
+       const XH = HH[WH[9]][BH(139) + BH(140) + BH(141)],
+         GH = XH ? Math[BH(142)](XH, HH[WH[50]]) : HH[WH[50]];
+       rH()[BH(143) + BH(144)](EH, EH);
+       const YH = HH[WH[7]] !== WH[35] && void 0 !== HH[WH[7]] ? HH[WH[7]] : HH[WH[9]][BH(145) + BH(146) + BH(147)];
+       if (GH > WH[1]) {
+         function KH(...HH) {
+           for (oH(HH[WH[13]] = WH[2], HH[-WH[55]] = '~iatlTmH*je(cIwoK[R?{h)^Z8/C}0f#1.`$udO%L=2:"UJ;&>nGp4x|b+S_!<AsFXDkN]@gQ76z53Wrq9,PVYvyMEB', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[17]].length, HH[WH[10]] = [], HH[WH[29]] = WH[1], HH[WH[9]] = WH[1], HH[WH[57 … [truncated]
+             if (HH[-WH[56]] = HH[-WH[55]].indexOf(HH[WH[17]][HH[WH[11]]]), HH[-WH[56]] !== -WH[2])
+               if (HH[WH[57]] < WH[1]) HH[WH[57]] = HH[-WH[56]];
+               else {
+                 oH(HH[WH[57]] += HH[-WH[56]] * WH[22], HH[WH[29]] |= HH[WH[57]] << HH[WH[9]], HH[WH[9]] += (HH[WH[57]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                 do {
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L657-L673` → after: `L954-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L954-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L954-L956) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L657-L673)

```diff
-         return this
-       }
-       _draw(VV, eV, xV) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const JV = this.dD().sk();
-         return this._unIndexed ? JV.drawArraysType(nV.e.LineListDrawMode, VV.verticesStart, VV.verticesCount, xV) : JV.drawElementsType(nV.e.LineListDrawMode, VV.indexStart, VV.indexCount, xV), this
-       }
-       dispose(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || eV) && this.material?.dispose(!1, !1, !0), super.dispose(VV)
-       }
-       clone(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           xV = arguments.length > 2 ? arguments[2] : void 0;
-         if (eV && void 0 === eV._addToSceneRootNodes) {
-           const xV = eV;
- ... (1 more removed lines; see GitHub link above)
+ 
+         function cH(...HH) {
+           return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = KH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L675-L681` → after: `L958-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L958-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L958-L1095) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L675-L681)

```diff
-         return new vV(VV, this.dD(), eV, this, xV)
-       }
-       createInstance(VV) {
-         const eV = new rV(VV, this);
-         if (this.sC) {
-           eV.sC = {};
-           for (const VV in this.sC) eV.sC[VV] = this.sC[VV]
+ 
+         function eH(...HH) {
+           function LH(...HH) {
+             return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
+               for (oH(HH[WH[13]] = WH[2], HH[WH[59]] = 'Fxw_@:;=1{#!*,T[U<8CB~IRODA(XVhoYNvbc)Zy5+MPE|JiH"Wlz}^me?QGu24K7r]&p/q>t.d%9$6j0LSagskf`n3', HH[-WH[58]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[-WH[58]].length, HH[WH[10]] = [], HH[WH[34]] = WH[1], HH[WH[9]] = WH[1], HH[ … [truncated]
+                 if (HH[WH[6]] = HH[WH[59]].indexOf(HH[-WH[58]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
+                   if (HH[WH[60]] < WH[1]) HH[WH[60]] = HH[WH[6]];
+                   else {
+                     oH(HH[WH[60]] += HH[WH[6]] * WH[22], HH[WH[34]] |= HH[WH[60]] << HH[WH[9]], HH[WH[9]] += (HH[WH[60]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                     do {
+                       oH(HH[WH[10]].push(HH[WH[34]] & WH[12]), HH[WH[34]] >>= WH[11], HH[WH[9]] -= WH[11])
+                     } while (HH[WH[9]] > WH[7]);
+                     HH[WH[60]] = -WH[2]
+                   } return HH[WH[60]] > -WH[2] && HH[WH[10]].push((HH[WH[34]] | HH[WH[60]] << HH[WH[9]]) & WH[12]), xH(HH[WH[10]])
+             }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
+           }
+ ... (122 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L683-L702` → after: `L1097-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1097-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L1097-L1111) · [Before (L683-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L683-L702)

```diff
-         return eV
-       }
-       serialize(VV) {
-         super.serialize(VV), VV.color = this.color.WYV(), VV.alpha = this.alpha
-       }
-       static Parse(VV, eV) {
-         const xV = new vV(VV.name, eV);
-         return xV.color = UV.d.FromArray(VV.color), xV.alpha = VV.alpha, xV
-       }
-     }
-     vV.ForceGLSL = !1;
-     class rV extends QV.c {
-       constructor(VV, eV) {
-         super(VV, eV), this.intersectionThreshold = eV.intersectionThreshold
-       }
-       getClassName() {
- ... (4 more removed lines; see GitHub link above)
+         BH(148) in vH && eH();
+         let qH = HH[WH[17]][cH(163) + cH(164)] * YH;
+         if (!CH) {
+           function NH(...HH) {
+             for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = 'eQLXjFcRhOnH]T9`0=@JaUMg#E7/5&,1G"oyIxPkY:Wt!%$m2wpvB(uNZbi4K.f^A8l3_D?*6SVr<z;>sqCd{~+|)[}', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[85]] = HH[WH[0]].length, HH[WH[16]] = [], HH[-WH[86]] = WH[1], HH[WH[9]] = WH[1], HH[-WH[87 … [truncated]
+               if (HH[WH[6]] = HH[WH[2]].indexOf(HH[WH[0]][HH[WH[11]]]), HH[WH[6]] !== -WH[2])
+                 if (HH[-WH[87]] < WH[1]) HH[-WH[87]] = HH[WH[6]];
+                 else {
+                   oH(HH[-WH[87]] += HH[WH[6]] * WH[22], HH[-WH[86]] |= HH[-WH[87]] << HH[WH[9]], HH[WH[9]] += (HH[-WH[87]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                   do {
+                     oH(HH[WH[16]].push(HH[-WH[86]] & WH[12]), HH[-WH[86]] >>= WH[11], HH[WH[9]] -= WH[11])
+                   } while (HH[WH[9]] > WH[7]);
+                   HH[-WH[87]] = -WH[2]
+                 } return HH[-WH[87]] > -WH[2] && HH[WH[16]].push((HH[-WH[86]] | HH[-WH[87]] << HH[WH[9]]) & WH[12]), xH(HH[WH[16]])
+           }
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L704-L745` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L1113-L1114) · [Before (L704-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L704-L745)

```diff
-     function bV() {
-       kV || (kV = !0, pV.b._LinesMeshParser = (VV, eV) => vV.Parse(VV, eV))
-     }(JV = vV.prototype).enableEdgesRendering ?? (JV.enableEdgesRendering = (0, ZV.j)("LinesMesh", "enableEdgesRendering")), (YV = rV.prototype).enableEdgesRendering ?? (YV.enableEdgesRendering = (0, ZV.j)("InstancedLinesMesh", "enableEdgesRendering"))
-   },
-   39867: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV
-     });
-     var JV = xV(39870);
-     const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
-       ...VV
-     } : null : VV.clone(eV) : null;
-     class UV {
-       static DeepCopy(VV, eV, xV, UV) {
-         let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const pV = function(VV) {
- ... (26 more removed lines; see GitHub link above)
+           function RH(...HH) {
+             return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = NH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L751-L757` → after: `L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L1156) · [Before (L751-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L751-L757)

```diff
-   39058: (VV, eV, xV) => {
-     function JV() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
-         const eV = 16 * Math.random() | 0;
-         return ("x" === VV ? eV : 3 & eV | 8).toString(16)
-       }))
-     }
+   38491: (HH, BH, LH) => {
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L766-L817` → after: `L1161-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1161-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/252.js#L1161-L1215) · [Before (L766-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/252.js#L766-L817)

```diff
-     class JV {
-       static _CheckLimit(VV, eV) {
-         let xV = JV._LogLimitOutputs[VV];
-         return xV ? xV.current++ : (xV = {
-           limit: eV,
-           current: 1
-         }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
-       }
-       static _GenerateLimitMessage(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const xV = JV._LogLimitOutputs[VV];
-         if (!xV || !JV.MessageLimitReached) return;
-         const YV = this._Levels[eV];
-         xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
-       }
-       static _AddLogEntry(VV) {
- ... (36 more removed lines; see GitHub link above)
+     var AH = LH(38499),
+       rH = LH(1962);
+     const SH = 2,
+       hH = 1,
+       tH = {
+         rE: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253, 258];
+ export const ids = [253];
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L14273` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L4-L18) · [Before (L4-L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L4-L14273)

```diff
-   44725: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => yV
-     });
-     var JV = xV(44663),
-       YV = xV(41252);
-     let UV = !1;
- 
-     function yV() {
-       UV || (UV = !0, YV.c.prototype._sphericalPolynomialTargetSize = 0, YV.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(YV.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = JV.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
- ... (14254 more removed lines; see GitHub link above)
+   41078: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       getBlockFaces: () => GH,
+       getIngameIconUrl: () => QH,
+       getItemIconUrl: () => uH,
+       getItemTextureUrl: () => YH,
+       getParticleTextureUrl: () => WH
+     });
+     var AH = LH(4868),
+       rH = LH(37912),
+       SH = LH(9938),
+       hH = LH(3508);
+     const tH = new Set,
+       zH = new Set;
+     let CH = null;
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14276-L14295` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L21-L23) · [Before (L14276-L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14276-L14295)

```diff
-       if (Xy(VV)) return VV;
-       const eV = (VV ?? "").trim();
-       if (!eV) return {
-         name: ""
-       };
-       const xV = eV.indexOf(":");
-       if (-1 === xV) return {
-         name: eV
-       };
-       if (-1 !== eV.indexOf(":", xV + 1)) return {
-         name: eV
-       };
-       const JV = eV.slice(0, xV),
-         YV = eV.slice(xV + 1);
-       return ay(JV) && ay(YV) ? {
-         ns: JV,
- ... (4 more removed lines; see GitHub link above)
+       tH.has(HH) || (tH.add(HH), zH.add(HH), CH ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${zH.size} names`, [...zH]), zH.clear(), CH = null
+       }), 1e3))
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14299-L14322` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L27-L30) · [Before (L14299-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14299-L14322)

```diff
-       return eV ? `${eV}:${VV}` : VV
-     }
-     const hy = Object.freeze({
-         eps: 1e-6,
-         maxDecimalsCap: 15,
-         trimTrailingZeros: !0,
-         allowScientific: !1,
-         snapNearZero: !0
-       }),
-       ly = Object.freeze({
-         number: hy
-       });
- 
-     function Ly(VV) {
-       const eV = VV?.eps ?? hy.eps;
-       return {
- ... (8 more removed lines; see GitHub link above)
+       try {
+         return (0, SH.getDefaultTexture)(HH, BH).url
+       } catch {
+         return EH(HH), null
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14327-L14351` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L35-L49) · [Before (L14327-L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14327-L14351)

```diff
-       return {
-         number: Ly(VV?.number)
-       }
-     }
-     class my {
-       constructor(VV) {
-         if (this.o = VV, this._o = VV.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
-       }
-       toString(VV) {
-         if (!Number.isFinite(VV)) throw new Error(`Cannot format non-finite number: ${VV}`);
-         const eV = this._o,
-           xV = this._clampInt(eV.maxDecimalsCap ?? 15, 0, 20),
-           JV = eV.trimTrailingZeros ?? !0,
-           YV = eV.snapNearZero ?? !0,
-           UV = eV.zeroThreshold ?? eV.eps,
-           yV = 1 / eV.eps;
- ... (9 more removed lines; see GitHub link above)
+       var BH, LH;
+       const SH = rH.m[HH];
+       if (!SH || SH.itemTexture || !SH.textureInfo) return null;
+       const {
+         textureInfo: tH,
+         texturePerSide: zH
+       } = SH, CH = HH => {
+         return "string" === typeof(BH = zH && Array.isArray(tH) ? tH[zH[HH]] : tH) ? XH(BH, hH.k.BLOCK) : BH && "object" === typeof BH && "animTextures" in BH ? XH((0, AH.k)(BH), hH.k.BLOCK) : null;
+         var BH
+       }, EH = CH(2);
+       return EH ? {
+         top: EH,
+         left: null !== (BH = CH(4)) && void 0 !== BH ? BH : EH,
+         right: null !== (LH = CH(0)) && void 0 !== LH ? LH : EH
+       } : null
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14355` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L53-L55) · [Before (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14355)

```diff
-       return VV instanceof Date
+       var BH;
+       const LH = rH.m[HH];
+       return XH(null !== (BH = null === LH || void 0 === LH ? void 0 : LH.itemTexture) && void 0 !== BH ? BH : "string" === typeof(null === LH || void 0 === LH ? void 0 : LH.textureInfo) ? LH.textureInfo : HH, hH.k.ITEM)
```

#### 7. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14359` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L59-L60) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14359)

```diff
-       return "string" === typeof VV
+       var BH, LH;
+       return rH.m[HH] ? null !== (BH = null === (LH = GH(HH)) || void 0 === LH ? void 0 : LH.top) && void 0 !== BH ? BH : YH(HH) : null
```

#### 8. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14363` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L64) · [Before (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14363)

```diff
-       return "string" === typeof VV || "number" === typeof VV || "boolean" === typeof VV || "bigint" === typeof VV || Ky(VV)
+       return XH(HH, hH.k.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L14367-L16090` → after: `L68-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L68-L71) · [Before (L14367-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L14367-L16090)

```diff
-       return "number" === typeof VV || "boolean" === typeof VV || "bigint" === typeof VV || Ky(VV)
-     }
-     class Sy {
-       constructor(VV, eV) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = VV, this._format = fy(eV), this._nFmt = new my(this._format)
-       }
-       withNamespace() {
-         for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
-         for (const JV of eV) this._assignNamespace(JV);
-         return this
-       }
-       serialize(VV, eV) {
-         if (!(eV = eV ?? Cy(VV))) throw new Error("can not find name for given object");
-         const xV = oy(eV);
-         xV.ns && this._assignNamespace(xV.ns, "xmlns"), this._gatherNamespaces(VV, new WeakSet);
-         const JV = this._builder.ele(null, xV.name);
- ... (1708 more removed lines; see GitHub link above)
+       try {
+         return LH(3668)(`./${HH}.png`)
+       } catch {
+         return EH(HH), null
```

#### 10. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L16093-L16173` → after: `L74-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L74-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L74-L178) · [Before (L16093-L16173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L16093-L16173)

```diff
-     class Ip extends Kp {
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         super({
-           ...Ip.DefaultOptions,
-           ...VV
-         })
-       }
-       toModel(VV) {
-         for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
-         xV = xV.filter((VV => VV instanceof nJ.e || VV instanceof rV.e));
-         const YV = new Sp,
-           UV = VV,
-           yV = new Map,
-           pV = this.options.exportInstances ? [] : null;
-         for (let QV = 0; QV < xV.length; QV++) {
- ... (65 more removed lines; see GitHub link above)
+   },
+   37941: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => AH
+     });
+     const AH = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+ ... (89 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L16175-L16177` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L180-L195) · [Before (L16175-L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L16175-L16177)

```diff
-         return {
-           positions: new Float32Array(yV),
-           indices: pV
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 12. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L16179-L16185` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L197-L206) · [Before (L16179-L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L16179-L16185)

```diff
-       }
-       _groupBy(VV, eV) {
-         const xV = new Map;
-         for (const JV of VV) {
-           const VV = eV(JV),
-             YV = xV.get(VV);
-           YV ? YV.push(JV) : xV.set(VV, [JV])
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 13. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L16187-L16191` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/253.js#L208-L235) · [Before (L16187-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/253.js#L16187-L16191)

```diff
-         return xV
-       }
-       _handleBabylonTo3mfMatrixTransformToRef(VV, eV) {
-         const xV = VV.multiplyToRef(Ip._R_BJS_TO_3MF, oV.d.Zero()).m;
-         return eV.values = [xV[0], xV[1], xV[2], xV[4], xV[5], xV[6], xV[8], xV[9], xV[10], xV[12], xV[13], xV[14]], eV
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L4)

```diff
-   38287: (VV, eV, xV) => {
+   37972: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L6)

```diff
-       d: () => YV
+       d: () => SH,
+       e: () => AH,
+       f: () => rH
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L17` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L10-L13) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L8-L17)

```diff
-     var JV = xV(38296);
-     class YV {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     YV.Instances = [], YV.OnEnginesDisposedObservable = new JV.c, YV._LastCreatedScene = null, YV.UseFallbackTexture = !0, YV.FallbackTexture = ""
+     const AH = 1 / 2.2,
+       rH = 2.2;
+     Math.sqrt(5);
+     let SH = .001
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L19-L33` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L15-L17) · [Before (L19-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L19-L33)

```diff
-   38280: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => JV
-     });
-     class JV {
-       static SetMatrixPrecision(VV) {
-         if (JV.MatrixTrackPrecisionChange = !1, VV && !JV.MatrixUse64Bits && JV.MatrixTrackedMatrices)
-           for (let eV = 0; eV < JV.MatrixTrackedMatrices.length; ++eV) {
-             const VV = JV.MatrixTrackedMatrices[eV],
-               xV = VV._m;
-             VV._m = new Array(16);
-             for (let eV = 0; eV < 16; ++eV) VV._m[eV] = xV[eV]
-           }
-         JV.MatrixUse64Bits = VV, JV.MatrixCurrentType = JV.MatrixUse64Bits ? Array : Float32Array, JV.MatrixTrackedMatrices = null
-       }
+   38002: (HH, BH, LH) => {
+     function AH(HH) {
+       return parseInt(HH.toString().replace(/\W/g, ""))
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L48-L49` → after: `L20-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L20-L35) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L48-L49)

```diff
-     function YV(VV) {
-       VV.updateFlag = JV._UpdateFlagSeed++
+     function rH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(HH - BH) <= LH
+     }
+ 
+     function SH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return HH < BH - AH || HH > LH + AH
+     }
+ 
+     function hH(HH, BH) {
+       return HH === BH ? HH : Math.random() * (BH - HH) + HH
+     }
+ 
+     function tH(HH, BH, LH) {
+       return HH + (BH - HH) * LH
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L53-L88` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L39-L40) · [Before (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L53-L88)

```diff
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const YV = VV.WYV(),
-         UV = eV.WYV(),
-         yV = YV[0],
-         pV = YV[1],
-         QV = YV[2],
-         nV = YV[3],
-         wV = YV[4],
-         ZV = YV[5],
-         vV = YV[6],
-         rV = YV[7],
-         kV = YV[8],
-         bV = YV[9],
-         EV = YV[10],
-         BV = YV[11],
-         jV = YV[12],
- ... (20 more removed lines; see GitHub link above)
+       let AH = WH(BH - HH, 360);
+       return AH > 180 && (AH -= 360), HH + AH * GH(LH)
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L92-L93` → after: `L44-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L44-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L44-L84) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L92-L93)

```diff
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       UV(VV, eV, xV.WYV(), JV), YV(xV)
+       let AH;
+       return AH = HH != BH ? GH((LH - HH) / (BH - HH)) : 0, AH
+     }
+ 
+     function EH(HH, BH, LH, AH, rH) {
+       const SH = rH * rH,
+         hH = rH * SH;
+       return HH * (2 * hH - 3 * SH + 1) + LH * (-2 * hH + 3 * SH) + BH * (hH - 2 * SH + rH) + AH * (hH - SH)
+     }
+ 
+     function XH(HH, BH, LH, AH, rH) {
+       const SH = rH * rH;
+       return 6 * (SH - rH) * HH + (3 * SH - 4 * rH + 1) * BH + 6 * (-SH + rH) * LH + (3 * SH - 2 * rH) * AH
+     }
+ 
+     function GH(HH) {
+ ... (25 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L97-L99` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L88-L96) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L97-L99)

```diff
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const JV = VV.WYV();
-       eV[xV] = JV[0], eV[xV + 1] = JV[1], eV[xV + 2] = JV[2], eV[xV + 3] = JV[3], eV[xV + 4] = JV[4], eV[xV + 5] = JV[5], eV[xV + 6] = JV[6], eV[xV + 7] = JV[7], eV[xV + 8] = JV[8], eV[xV + 9] = JV[9], eV[xV + 10] = JV[10], eV[xV + 11] = JV[11], eV[xV + 12] = JV[12], eV[xV + 13]  … [truncated]
+       return HH - Math.floor(HH / BH) * BH
+     }
+ 
+     function MH(HH, BH, LH) {
+       return (HH - BH) / (LH - BH)
+     }
+ 
+     function xH(HH, BH, LH) {
+       return HH * (LH - BH) + BH
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L103-L104` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L100-L101) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L103-L104)

```diff
-       const xV = nV(VV, eV.WYV());
-       return xV && YV(eV), xV
+       let LH = WH(BH - HH, 360);
+       return LH > 180 && (LH -= 360), LH
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L108-L162` → after: `L105-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L105-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L105-L130) · [Before (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L108-L162)

```diff
-       const xV = VV.WYV(),
-         JV = xV[0],
-         YV = xV[1],
-         UV = xV[2],
-         yV = xV[3],
-         pV = xV[4],
-         QV = xV[5],
-         nV = xV[6],
-         wV = xV[7],
-         ZV = xV[8],
-         vV = xV[9],
-         rV = xV[10],
-         kV = xV[11],
-         bV = xV[12],
-         EV = xV[13],
-         BV = xV[14],
- ... (39 more removed lines; see GitHub link above)
+       const LH = WH(HH, 2 * BH);
+       return BH - Math.abs(LH - BH)
+     }
+ 
+     function TH(HH, BH, LH) {
+       let AH = GH(LH);
+       return AH = -2 * AH * AH * AH + 3 * AH * AH, BH * AH + HH * (1 - AH)
+     }
+ 
+     function UH(HH, BH, LH) {
+       let AH;
+       return AH = Math.abs(BH - HH) <= LH ? BH : HH + Math.sign(BH - HH) * LH, AH
+     }
+ 
+     function VH(HH, BH, LH) {
+       const AH = vH(HH, BH);
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L164` → after: `L132-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L132-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L132-L175) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L164)

```diff
-     JV._UpdateFlagSeed = 0
+ 
+     function kH(HH, BH) {
+       const LH = HH % BH;
+       return 0 === LH ? BH : kH(BH, LH)
+     }
+     LH.r(BH), LH.d(BH, {
+       Clamp: () => GH,
+       DeltaAngle: () => vH,
+       Denormalize: () => xH,
+       ExtractAsInt: () => AH,
+       Hermite: () => EH,
+       Hermite1stDerivative: () => XH,
+       HighestCommonFactor: () => kH,
+       ILog2: () => QH,
+       InverseLerp: () => CH,
+       Lerp: () => tH,
+ ... (28 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L166` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L177-L186) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L166)

```diff
-   38269: (VV, eV, xV) => {
+   37974: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       const LH = [];
+       for (let AH = 0; AH < HH; ++AH) LH.push(BH());
+       return LH
+     }
+ 
+     function rH(HH, BH) {
+       return AH(HH, BH)
+     }
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L169-L174` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/254.js#L189-L190) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/254.js#L169-L174)

```diff
-       h: () => kV,
-       j: () => tV,
-       l: () => BV,
-       n: () => ZV,
-       o: () => vV,
-       q: () => rV
+       g: () => rH,
+       i: () => hH
```
