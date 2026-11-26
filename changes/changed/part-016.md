# Changed — Bundle Modifications Report (Part 016 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `16 / 116` (**339** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (101 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 77. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1742-L1746` → after: `L1627-L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1627-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1627-L1643) · [Before (L1742-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L1742-L1746)

```diff
-       const eV = (0, re.d)(VV.ccu.data.length, VV);
-       return VV.ccu.data.map(((VV, xV) => ({
-         dateMs: eV[xV],
-         band: VV
-       })))
+       let {
+         schematic: BH,
+         onSchematicUpdate: LH,
+         onClose: AH,
+         inSourceWorld: SH
+       } = HH;
+       rH.NotificationProvider.showCustomPopup({
+         body: HH => (0, PH.jsx)(XB, {
+           schematic: BH,
+           onSchematicUpdate: LH,
+           onClose: HH,
+           inSourceWorld: SH
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: AH,
+         unlockPointerKey: "schematicPagePopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1750-L30727` → after: `L1662-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1662-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1662-L1710) · [Before (L1750-L30727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L1750-L30727)

```diff
-       const eV = (0, re.d)(VV.ccu.data.length, VV);
-       return VV.ccu.data.map(((VV, xV) => ({
-         dateMs: eV[xV],
-         band: Jx(VV)
-       })))
-     }
- 
-     function Zx(VV) {
-       return null === VV.p20 || null === VV.p80 ? null : [VV.p20, VV.p80]
-     }
- 
-     function vx(VV, eV) {
-       if (null === eV) return VV;
-       const xV = new Map;
-       for (const JV of eV) xV.set(JV.dateMs, JV.band);
-       return VV.map((VV => {
- ... (28962 more removed lines; see GitHub link above)
+       let {
+         editor: BH,
+         className: LH,
+         publishRefusal: AH = null
+       } = HH;
+       const {
+         t: YH
+       } = (0, SH.B)(), {
+         schematicData: uH,
+         formEnabled: QH,
+         publishFormEnabled: WH,
+         publishSuspendedUntil: MH
+       } = BH, xH = !QH || !WH, vH = (0, XH.g)();
+       return (0, GH.jsxs)("div", {
+         className: rH()("PublishButtonContainer", LH),
+         children: [BH.canEditSourceWorld && (0, GH.jsxs)(tH.i, {
+ ... (33 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30729-L30730` → after: `L1712-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1712-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1712-L1717) · [Before (L30729-L30730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30729-L30730)

```diff
-           }), (0, ye.jsx)(PV.c, {
-             editor: yV
+           }), (0, GH.jsxs)(tH.i, {
+             onClick: BH.playGame,
+             disabled: xH,
+             children: [(0, GH.jsx)(hH.c, {
+               name: "joystick"
+             }), " ", YH("general:playGame")]
```

#### 80. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30732` → after: `L1719-L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1719-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1719-L1726) · [Before (L30732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30732)

```diff
-         })
+         }), !QH && (0, GH.jsx)(CH.d, {
+           loaderType: "Secondary"
+         }), !uH.gamePublished && null !== MH && (0, GH.jsx)("div", {
+           className: "PublishSuspendedNotice",
+           children: vH(MH)
+         }), BH.askingPublishingPolicy && (0, GH.jsx)(EH.c, {
+           onAnswer: BH.answerPublishingPolicy
+         })]
```

#### 81. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30734-L30767` → after: `L1728-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1728-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1728-L1732) · [Before (L30734-L30767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30734-L30767)

```diff
-     })]
-   })
- }
- 
- function jH() {
-   const {
-     t: VV
-   } = (0, rV.A)(), {
-     gameAnalyticsId: eV
-   } = (0, YV.A)(), xV = (0, XV.useNavigatePreserveSearch)(), {
-     userContext: UV,
-     isUserContextUpdating: yV
-   } = (0, kV.d)();
-   (0, zV.l)();
-   const QV = (0, zV.r)(),
-     [nV, ZV] = (0, JV.useState)({
- ... (18 more removed lines; see GitHub link above)
+     }
+   },
+   5473: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rH
```

#### 82. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30769-L30786` → after: `L1734-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1734-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1734-L1738) · [Before (L30769-L30786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30769-L30786)

```diff
-     const VV = (0, pV.j)(eV);
-     if (null === VV) {
-       const VV = (0, vV.e)(eV);
-       if (!VV) return (0, wV.Hc)(eV) ? void xV((0, oK.m)((0, pV.e)(eV)), {
-         replace: !0
-       }) : void ZV({
-         status: "error"
-       });
-       if (!UV.playerHasRank("developer")) return void ZV({
-         status: "notAuthorised"
-       });
-       let JV = !1;
-       ZV({
-         status: "loaded",
-         game: {
-           type: "firstPartyGame",
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(1131);
+     async function rH(HH) {
+       const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
+         headers: {
+           Accept: "application/json"
```

#### 83. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30789-L30948` → after: `L1741-L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1741-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1741-L1743) · [Before (L30789-L30948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30789-L30948)

```diff
-       const YV = (0, pV.i)(VV, !0);
-       return EV.b.getGamesByAnalyticsIds(UV, [YV]).then((VV => {
-         JV || ZV((eV => {
-           var xV, JV;
-           return "loaded" !== eV.status || "firstPartyGame" !== eV.game.type ? eV : {
-             status: "loaded",
-             game: {
-               ...eV.game,
-               rankCategories: null !== (xV = null === (JV = VV[YV]) || void 0 === JV ? void 0 : JV.rankCategories) && void 0 !== xV ? xV : []
-             }
-           }
-         }))
-       })).catch((VV => {
-         console.error("Failed to load first party game ranks", VV)
-       })), () => {
-         JV = !0
- ... (144 more removed lines; see GitHub link above)
+       if (404 === BH.status || 403 === BH.status) return null;
+       if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
+       return await BH.json()
```

#### 84. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30950-L30978` → after: `L1745-L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1745-L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1745-L1755) · [Before (L30950-L30978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30950-L30978)

```diff
-     return {
-       minX: VV.min[0],
-       maxX: VV.max[0],
-       minZ: VV.min[2],
-       maxZ: VV.max[2],
-       values: eV
-     }
-   }
-   xV.d(eV, {
-     A: () => TV,
-     B: () => QV,
-     E: () => rV,
-     I: () => AV,
-     K: () => EV,
-     M: () => bV,
-     P: () => qV,
- ... (13 more removed lines; see GitHub link above)
+   },
+   5438: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => tH,
+       d: () => zH,
+       g: () => CH
+     });
+     var AH = LH(45),
+       rH = LH(1502),
+       SH = LH(1123),
+       hH = LH(1061);
```

#### 85. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30980-L31019` → after: `L1757-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1757-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1757-L1758) · [Before (L30980-L31019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L30980-L31019)

```diff
-   function UV(VV, eV, xV) {
-     let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YV;
-     const UV = eV.length;
-     if (0 === UV) return null;
-     const yV = new Array(xV).fill(1 / 0),
-       pV = new Array(xV).fill(-1 / 0),
-       QV = Array.from({
-         length: xV
-       }, (() => new Map)),
-       nV = Array.from({
-         length: xV
-       }, (() => new Map));
-     let wV = 0;
-     for (let YV = 0; YV < UV; YV++) {
-       wV += eV[YV];
-       for (let JV = 0; JV < xV; JV++) {
- ... (24 more removed lines; see GitHub link above)
+     function tH() {
+       let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
```

#### 86. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31021-L31030` → after: `L1760-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1760-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1760-L1782) · [Before (L31021-L31030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31021-L31030)

```diff
-         axis: UV,
-         isLow: ZV
-       } = YV, EV = ZV ? yV[UV] : pV[UV];
-       for (const JV of null !== (bV = nV[UV].get(EV)) && void 0 !== bV ? bV : []) {
-         var bV;
-         if (!vV[JV]) {
-           vV[JV] = 1, rV -= eV[JV];
-           for (let YV = 0; YV < xV; YV++) {
-             const UV = VV[JV * xV + YV];
-             QV[YV].set(UV, QV[YV].get(UV) - eV[JV])
+         userContext: BH
+       } = (0, hH.e)(), [LH, SH] = (0, AH.useState)((() => ({
+         loading: HH && BH.isLoggedIn(),
+         eligibility: null
+       })));
+       if ((0, AH.useEffect)((() => {
+           if (!HH || !BH.isLoggedIn()) return void SH({
+             loading: !1,
+             eligibility: null
+           });
+           let LH = !1;
+           return rH.d.getCreatorEligibility(BH).then((HH => {
+             LH || SH({
+               loading: !1,
+               eligibility: HH
+             })
+ ... (7 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31135-L31263` → after: `L1799-L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1799-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1799-L1809) · [Before (L31135-L31263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31135-L31263)

```diff
-   function BV(VV) {
-     const eV = Math.max(0, Math.min(1, VV)) * (kV.length - 1),
-       xV = Math.min(kV.length - 2, Math.floor(eV)),
-       JV = eV - xV,
-       YV = kV[xV],
-       UV = kV[xV + 1];
-     return [0, 1, 2].map((VV => Math.round(YV[VV] + (UV[VV] - YV[VV]) * JV)))
-   }
-   const jV = .2,
-     qV = .5,
-     tV = .03;
- 
-   function FV(VV) {
-     return Object.values(VV.values).flatMap((VV => Object.values(VV)))
-   }
- 
- ... (113 more removed lines; see GitHub link above)
+     function zH() {
+       const {
+         t: HH,
+         selectedLanguage: BH
+       } = (0, SH.B)();
+       return (LH, AH) => HH(LH, {
+         date: (0, SH.h)(BH.code, LH, AH, {
+           dateStyle: "medium",
+           timeStyle: "short"
+         })
+       })
```

#### 88. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31280-L31339` → after: `L1812-L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1812-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1812-L1825) · [Before (L31280-L31339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31280-L31339)

```diff
-   function FV(VV) {
-     return tV.filter((eV => qV[eV](VV)))
-   }
- 
-   function TV(VV) {
-     return new Date(VV).toLocaleString(void 0, {
-       month: "short",
-       day: "numeric",
-       hour: "2-digit",
-       minute: "2-digit",
-       hourCycle: "h23"
-     })
-   }
- 
-   function PV(VV, eV) {
-     return VV instanceof YV.b && null !== VV.errorMessageForUser ? VV.errorMessageForUser : eV
- ... (44 more removed lines; see GitHub link above)
+     function CH() {
+       const {
+         t: HH,
+         selectedLanguage: BH
+       } = (0, SH.B)();
+       return LH => {
+         const AH = "worldBuilder:publishSuspended";
+         return HH(AH, {
+           date: (0, SH.h)(BH.code, AH, LH, {
+             dateStyle: "medium",
+             timeStyle: "short",
+             timeZone: "UTC"
+           })
+         })
```

#### 89. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31342-L31413` → after: `L1828-L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1828-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1828-L1847) · [Before (L31342-L31413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31342-L31413)

```diff
-   }
- 
-   function GV(VV) {
-     return {
-       videoSegments: VV.videoSegments.map((VV => {
-         const {
-           sequence: eV,
-           startMs: xV,
-           endMs: JV,
-           width: YV,
-           height: UV
-         } = VV;
-         return {
-           ..."url" in VV ? {
-             url: VV.url
-           } : {
- ... (56 more removed lines; see GitHub link above)
+   },
+   5560: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => vH
+     });
+     var AH = LH(45),
+       rH = LH(1306),
+       SH = LH(1005),
+       hH = LH(152),
+       tH = LH(2363),
+       zH = LH(1543),
+       CH = LH(15),
+       EH = LH(1998),
+       XH = LH(1502),
+       GH = LH(4991),
+       YH = LH(1352),
+ ... (4 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31415-L31420` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1849) · [Before (L31415-L31420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31415-L31420)

```diff
-   function yV(VV) {
-     const eV = VV.plays.data.length,
-       xV = Date.parse(`${VV.endDay}T00:00:00Z`);
-     return VV.plays.data.map(((JV, yV) => {
-       const pV = VV.totalDurationMs.data[yV],
-         QV = VV.playtimeSamples.data[yV];
+     function xH(HH, BH) {
```

#### 91. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31422-L31428` → after: `L1851-L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1851-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1851-L1871) · [Before (L31422-L31428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31422-L31428)

```diff
-         dateMs: xV - (eV - 1 - yV) * YV,
-         plays: JV,
-         uniquePlayers: VV.uniquePlayers.data[yV],
-         avgSessionMs: UV(pV, QV),
-         totalDurationMs: pV,
-         playtimeSamples: QV,
-         sessionsPerPlayer: VV.sessionsPerPlayer.data[yV]
+         schematicId: HH.schematicId,
+         name: HH.name,
+         description: HH.description,
+         gamePublished: BH,
+         gameCategory: HH.gameCategory,
+         defaultGamemode: HH.defaultGamemode,
+         voidDeathHeight: HH.voidDeathHeight,
+         disableKeepInventory: HH.disableKeepInventory,
+         disableTpRequests: HH.disableTpRequests,
+         disableLobbySpawn: HH.disableLobbySpawn,
+         disableMobs: HH.disableMobs,
+         disableSpawnProtection: HH.disableSpawnProtection,
+         disableFallDamage: HH.disableFallDamage,
+         worldBorder: HH.worldBorder,
+         hideLobbyCode: HH.hideLobbyCode,
+         enableSmpMarketplace: HH.enableSmpMarketplace,
+ ... (5 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31480-L31488` → after: `L1875-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1875-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1875-L1886) · [Before (L31480-L31488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31480-L31488)

```diff
-   function EV(VV, eV) {
-     return BV(Math.max(0, ...VV.map((VV => eV(VV).length))))
-   }
- 
-   function BV(VV) {
-     return Math.max(rV, Math.ceil(VV * ZV) + vV)
-   }
-   const jV = [1, 2, 5],
-     qV = 6;
+     function vH(HH) {
+       var BH, LH;
+       let {
+         onNavigateAway: vH,
+         inSourceWorld: PH = !1,
+         canManage: TH = !0
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: UH
+       } = (0, QH.e)(), VH = (0, WH.useNavigatePreserveSearch)(), [OH, bH] = (0, AH.useState)({
+         ...HH
+       }), [kH, mH] = (0, AH.useState)("Enter"), [oH, IH] = (0, AH.useState)(void 0), [fH, lH] = (0, AH.useState)(!1), KH = (0, AH.useRef)(xH(HH, HH.gamePublished)), cH = (0, AH.useRef)(void 0), eH = "Enter" === kH, qH = null !== (BH = null === (LH = (0, MH.c)(TH).eligibility) ||  … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31490-L31503` → after: `L1888-L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1888-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1888-L1892) · [Before (L31490-L31503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31490-L31503)

```diff
-   function tV(VV, eV) {
-     if (!(VV > 0)) return;
-     const xV = 10 ** Math.floor(Math.log10(VV / qV)),
-       JV = eV ? xV : Math.max(1, xV);
-     let YV;
-     for (const pV of [JV, 10 * JV])
-       for (const xV of jV) {
-         const JV = xV * pV;
-         if (!eV && !Number.isInteger(JV)) continue;
-         const UV = Math.ceil(VV / JV - 1e-9);
-         UV > qV || (void 0 === YV || UV * JV < YV.intervals * YV.step) && (YV = {
-           step: JV,
-           intervals: UV
-         })
+       function RH(HH, BH) {
+         bH((LH => ({
+           ...LH,
+           [HH]: BH
+         })))
```

#### 94. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31505-L31625` → after: `L1894-L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1894-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1894-L1896) · [Before (L31505-L31625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31505-L31625)

```diff
-     if (void 0 === YV) return;
-     const {
-       step: UV,
-       intervals: yV
-     } = YV;
-     return Array.from({
-       length: yV + 1
-     }, ((VV, eV) => Number((eV * UV).toPrecision(12))))
-   }
- 
-   function FV(VV, eV) {
-     const xV = VV.reduce(((VV, eV) => VV + eV), 0);
-     if (0 === xV) return null;
-     let JV = xV;
-     const YV = VV.map(((VV, eV) => {
-       const YV = {
- ... (105 more removed lines; see GitHub link above)
+       const jH = (0, AH.useCallback)((HH => {
+         cH.current = HH, IH(HH)
+       }), []);
```

#### 95. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31627-L31694` → after: `L1898-L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1898-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1898-L1899) · [Before (L31627-L31694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31627-L31694)

```diff
-   function kV(VV) {
-     let {
-       isEnabled: eV,
-       claimedKeyCodes: xV,
-       Lv: pV,
-       onZoomChange: QV
-     } = VV;
-     const nV = (0, JV.useRef)(pV);
-     nV.current = pV;
-     const kV = (0, JV.useRef)({
-       hn: new Set,
-       isRunning: !1,
-       flyAccel: new YV.c,
-       verticalDirection: 0,
-       frame: null,
-       lastTimeMs: 0
- ... (52 more removed lines; see GitHub link above)
+       function nH() {
+         return (0, zH.z)((0, SH.t)(OH.schematicId), OH)
```

#### 96. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31708-L31740` → after: `L1902-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1902-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1902-L1914) · [Before (L31708-L31740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31708-L31740)

```diff
-   function QV(VV) {
-     return null !== VV && "object" === typeof VV && "p20" in VV && "p50" in VV && "p80" in VV
-   }
-   const nV = new class {
-     async makeStudioApiRequest(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
-         JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-           retries: 0,
-           minTimeout: 3e3
-         };
-       return await (0, UV.postJsonWithMetricsCookiesAndJsonResponse)(`${YV.clientSideServerUrls.indexUrl}${VV}`, xV, JV, eV.getMetricsCookies())
-     }
-     async getGameStats(VV, eV) {
-       const xV = {
-           gameAnalyticsId: eV
-         },
- ... (17 more removed lines; see GitHub link above)
+       function FH(HH, BH) {
+         mH("Loading");
+         const LH = xH(OH, HH),
+           AH = oH !== cH.current ? oH : void 0;
+         XH.d.updateSchematic(UH, LH, AH, BH).then((BH => {
+           let {
+             customTexturePackKey: AH
+           } = BH;
+           mH("Success"), RH("customTexturePackKey", AH), KH.current = LH, cH.current = void 0, IH(void 0), !HH || OH.gamePublished || vH || uH.h.showGamePublished(OH.name, nH()), setTimeout((() => {
+             RH("gamePublished", HH), mH("Enter")
+           }), 1e3)
+         })).catch((HH => {
+           if (HH instanceof hH.e && HH.errorMessageForUser === tH.C && void 0 === BH) return mH("Enter"), void lH(!0);
```

#### 97. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31742-L31842` → after: `L1916-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1916-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1916-L1951) · [Before (L31742-L31842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31742-L31842)

```diff
-           return "number" === typeof(null === VV || void 0 === VV ? void 0 : VV.ccuEndBucketMs) && "number" === typeof VV.bucketMinutes && Array.isArray(null === (eV = VV.ccu) || void 0 === eV ? void 0 : eV.data)
-         }(YV)) throw new Error("Malformed studio game ccu response");
-       return YV
-     }
-     async getGameCustomEvents(VV, eV) {
-       const xV = {
-         gameAnalyticsId: eV
-       };
-       return await this.makeStudioApiRequest("/index/studio/get-game-custom-events", VV, xV)
-     }
-     async getGameEventTimingsAbsolute(VV, eV, xV) {
-       const JV = {
-         gameAnalyticsId: eV,
-         period: xV
-       };
-       return await this.makeStudioApiRequest("/index/studio/get-game-event-timings-absolute", VV, JV)
- ... (85 more removed lines; see GitHub link above)
+           (console.error("Failed to save schematic:", HH), mH("Error"), HH instanceof hH.e && HH.errorMessageForUser) && YH.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+             subtitle: HH.errorMessageForUser,
+             textOpts: {
+               subtitle: null !== (LH = HH.errorMessageTranslationParams) && void 0 !== LH ? LH : void 0
+             },
+             confirmText: "general:ok"
+           });
+           setTimeout((() => {
+             mH("Enter")
+           }), 1e3)
+         }))
+       }
+       return {
+         schematicData: OH,
+         updateSchematicData: RH,
+ ... (20 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31862-L31871` → after: `L1954-L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1954-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1954-L1956) · [Before (L31862-L31871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31862-L31871)

```diff
-         JV = await this.makeStudioApiRequest("/index/studio/list-replays", VV, xV);
-       if (! function(VV) {
-           return Array.isArray(null === VV || void 0 === VV ? void 0 : VV.recordings) && "number" === typeof VV.dailyQuota
-         }(JV)) throw new Error("Malformed studio replay list response");
-       return JV
-     }
-     async getReplay(VV, eV, xV) {
-       const JV = {
-           gameAnalyticsId: eV,
-           recordingId: xV
+         askingPublishingPolicy: fH,
+         answerPublishingPolicy: function(HH) {
+           lH(!1), HH && FH(!0, tH.D)
```

#### 99. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31873-L31884` → after: `L1958-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1958-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1958-L1967) · [Before (L31873-L31884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31873-L31884)

```diff
-         YV = await this.makeStudioApiRequest("/index/studio/get-replay", VV, JV);
-       if (! function(VV) {
-           return Array.isArray(null === VV || void 0 === VV ? void 0 : VV.windows) && Array.isArray(VV.videoSegments) && Array.isArray(VV.telemetrySegments) && ("ready" === VV.rrwebStatus || "preparing" === VV.rrwebStatus) && ("string" === typeof VV.rrwebUrl || null === VV.rrwebU … [truncated]
-         }(YV)) throw new Error("Malformed studio replay response");
-       return YV
-     }
-     async getReplaySegmentUrls(VV, eV, xV, YV, UV) {
-       const yV = {
-           gameAnalyticsId: eV,
-           recordingId: xV,
-           sequences: YV,
-           telemetrySequences: UV
+         editSourceWorld: function() {
+           mH("Loading"), GH.e.getSourceWorld(OH.schematicId).then((HH => {
+             EH.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, CH.l)("other"), VH((0, rH.b)("classic", HH)), null === vH || void 0 === vH || vH()
+           })).catch((HH => {
+             console.error("Failed to get source world:", HH), mH("Error"), setTimeout((() => {
+               mH("Enter")
+             }), 1e3)
+           }))
```

#### 100. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L31886-L32199` → after: `L1969-L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1969-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1969-L1972) · [Before (L31886-L32199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L31886-L32199)

```diff
-         pV = await this.makeStudioApiRequest(JV.H, VV, yV);
-       if (!Array.isArray(null === pV || void 0 === pV ? void 0 : pV.videoSegments) || !Array.isArray(pV.telemetrySegments)) throw new Error("Malformed studio replay segment URLs response");
-       return pV
-     }
-   }
- }, 6996: (VV, eV, xV) => {
-   xV.d(eV, {
-     e: () => YV
-   });
-   const JV = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
-     granularity: "grapheme"
-   }) : null;
- 
-   function YV(VV) {
-     return null === JV ? Array.from(VV) : Array.from(JV.segment(VV), (VV => {
-       let {
- ... (298 more removed lines; see GitHub link above)
+         playGame: function() {
+           EH.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), VH(nH()), null === vH || void 0 === vH || vH()
```

#### 101. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L32203-L32243` → after: `L1976-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/118.js#L1976-L1977) · [Before (L32203-L32243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/118.js#L32203-L32243)

```diff
-     return XV
-   }
- }, 7024: (VV, eV, xV) => {
-   xV.d(eV, {
-     e: () => yV,
-     i: () => YV,
-     j: () => QV,
-     n: () => UV,
-     o: () => nV,
-     q: () => JV,
-     s: () => pV
-   });
-   let JV = function(VV) {
-       return VV[VV.DEFAULT = 0] = "DEFAULT", VV[VV.BOAT = 1] = "BOAT", VV[VV.GLIDER = 2] = "GLIDER", VV[VV.BALLOON = 3] = "BALLOON", VV[VV.SLEEPING = 4] = "SLEEPING", VV[VV.RIDING_MOB = 5] = "RIDING_MOB", VV[VV.CAR = 6] = "CAR", VV[VV.HOVERCRAFT = 7] = "HOVERCRAFT", VV
-     }({}),
-     YV = function(VV) {
- ... (25 more removed lines; see GitHub link above)
+   },
+   5410: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L4)

```diff
-   5428: (VV, eV, xV) => {
+   37228: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L6-L8)

```diff
-       e: () => ZV,
-       i: () => wV,
-       k: () => vV
+       c: () => zH
```

#### 3. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L8) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L10-L12)

```diff
-     xV(5433);
-     var JV = xV(1220),
-       YV = xV(1146),
+     var AH = LH(1038),
```

#### 4. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14-L17` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L10-L12) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L14-L17)

```diff
-       yV = xV(1446),
-       pV = (xV(62), xV(4795)),
-       QV = xV(1414),
-       nV = xV(1321);
+       SH = LH(45),
+       hH = LH(4978),
+       tH = LH(1225);
```

#### 5. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L21-L26` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L16-L17) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L21-L26)

```diff
-         children: eV,
-         label: xV,
-         className: YV,
-         circleInfoText: pV,
-         disabled: wV,
-         onLabelClick: ZV
+         locked: BH,
+         children: LH
```

#### 6. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L28-L42` → after: `L19-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L19-L25) · [Before (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L28-L42)

```diff
-       const {
-         t: vV
-       } = (0, JV.A)(), rV = (0, nV.jsxs)("div", {
-         className: UV()("Label", {
-           ClickableLabel: void 0 !== ZV
-         }),
-         onClick: ZV,
-         children: [vV(xV), pV && (0, nV.jsx)(QV.b, {
-           name: "circle-info"
-         })]
-       });
-       return (0, nV.jsxs)("div", {
-         className: UV()("LabeledInput", {
-           [YV]: YV,
-           DisabledLabelInput: wV
+       const AH = (0, SH.useRef)(null),
+         zH = (0, hH.d)(AH, "y");
+       return (0, tH.jsx)("div", {
+         ref: AH,
+         className: rH()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: zH.before,
+           CreateCustomLobbyBodyMoreBelow: zH.after
```

#### 7. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L44-L50` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L27-L28) · [Before (L44-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L44-L50)

```diff
-         children: [pV && (0, nV.jsx)(yV.d, {
-           tooltipInner: (0, nV.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: vV(pV)
-           }),
-           children: rV
-         }), !pV && rV, eV]
+         "data-pad-ignore": BH || void 0,
+         children: LH
```

#### 8. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L55-L71` → after: `L51-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L51-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L51-L64) · [Before (L55-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L55-L71)

```diff
-       let {
-         checked: eV,
-         setChecked: xV
-       } = VV;
-       return (0, nV.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         onClick: VV => {
-           xV(!eV)
-         },
-         children: (0, nV.jsx)(pV.b, {
-           checked: eV,
-           onChange: VV => {
-             xV(VV.target.checked)
-           },
-           disabled: !1
- ... (1 more removed lines; see GitHub link above)
+       const BH = {
+         requested: !1,
+         closed: !1
+       };
+       tH.NotificationProvider.showCustomPopup({
+         body: LH => (0, uH.jsx)(WH, {
+           flow: BH,
+           close: LH,
+           ...HH
+         }),
+         middleScreenPopupClassName: "CreateCustomLobbyPopup",
+         onClose: () => {
+           BH.closed = !0, BH.requested || (0, YH.g)()
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L77-L79` → after: `L70-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L70-L75) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L77-L79)

```diff
-         checked: eV,
-         setChecked: xV,
-         disabled: JV
+         flow: BH,
+         close: LH,
+         onCreating: tH,
+         onCreated: QH,
+         onFailedClosed: WH,
+         join: MH
```

#### 10. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L81-L95` → after: `L77-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L77-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L77-L166) · [Before (L81-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L81-L95)

```diff
-       return (0, nV.jsx)("div", {
-         className: UV()("SwitchContainer", {
-           SwitchContainerDisabled: JV
-         }),
-         onClick: () => {
-           JV || xV(!eV)
-         },
-         children: (0, nV.jsx)(pV.b, {
-           className: "SwitchCheckbox",
-           checked: eV,
-           onChange: VV => {
-             xV(VV.target.checked)
-           },
-           disabled: !!JV
-         })
+       const {
+         t: xH
+       } = (0, hH.B)(), [vH, PH] = (0, rH.useState)(AH.u), [TH, UH] = (0, rH.useState)(!1), [VH, OH] = (0, rH.useState)(""), bH = (0, XH.c)();
+       (0, rH.useEffect)((() => {
+         (0, YH.n)()
+       }), []);
+       const kH = HH => ({
+         isEnabled: () => vH.plugins[HH],
+         vI: BH => {
+           (0, YH.h)({
+             plugin: HH,
+             enabled: BH
+           }), PH({
+             ...vH,
+             plugins: {
+               ...vH.plugins,
+ ... (74 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L99` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L170) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L99)

```diff
-   5442: (VV, eV, xV) => {
+   5418: (HH, BH, LH) => {
```

#### 12. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L101` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L172) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L101)

```diff
-       e: () => nV
+       d: () => CH
```

#### 13. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L103` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L174) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L103)

```diff
-     var JV = xV(1146),
+     var AH = LH(1038),
```

#### 14. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L105-L108` → after: `L176-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L176-L179) · [Before (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L105-L108)

```diff
-       UV = xV(5103),
-       yV = xV(1220),
-       pV = xV(1321);
-     const QV = [...UV.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+       SH = LH(5037),
+       hH = LH(1123),
+       tH = LH(1225);
+     const zH = [...SH.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
```

#### 15. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L116` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L187) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L116)

```diff
-       } = (0, yV.A)(), nV = VV.advancedMode ? QV.map((eV => [eV, VV.callbacks[eV]])) : UV.i.map((eV => [eV, VV.callbacks[eV]])), ZV = (0, pV.jsx)("div", {
+       } = (0, hH.B)(), CH = HH.advancedMode ? zH.map((BH => [BH, HH.callbacks[BH]])) : SH.n.map((BH => [BH, HH.callbacks[BH]])), XH = (0, tH.jsx)("div", {
```

#### 16. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L129` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L200) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L129)

```diff
-       return xV ? ZV : (0, pV.jsxs)("div", {
+       return LH ? XH : (0, tH.jsxs)("div", {
```

#### 17. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L143` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L214) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L143)

```diff
-           pW: JV
+           vI: AH
```

#### 18. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L149` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L220) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L149)

```diff
-       } = (0, yV.A)(), nV = xV();
+       } = (0, hH.B)(), CH = LH();
```

#### 19. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L163` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L234) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L163)

```diff
-             src: `/textures/games/classic/customGames/${eV}.png`,
+             src: `/textures/games/classic/customGames/${BH}.png`,
```

#### 20. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L200` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L271) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L200)

```diff
-   5425: (VV, eV, xV) => {
+   37219: (HH, BH, LH) => {
```

#### 21. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L204-L205` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L274) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L204-L205)

```diff
-       f: () => xe,
-       k: () => Ue
+       d: () => EH
```

#### 22. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L207-L216` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L276-L277) · [Before (L207-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L207-L216)

```diff
-     var JV = xV(62),
-       YV = xV(1439),
-       UV = xV(1551),
-       yV = xV(1772),
-       pV = xV(1220),
-       QV = xV(1408),
-       nV = xV(1446),
-       wV = xV(1414),
-       ZV = xV(1252),
-       vV = xV(1146),
+     LH(45);
+     var AH = LH(1038),
```

#### 23. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L218-L302` → after: `L279-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L279-L282) · [Before (L218-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L218-L302)

```diff
-       kV = xV(364),
-       bV = xV(5103),
-       EV = xV(1269),
-       BV = xV(5428),
-       jV = xV(3551),
-       qV = xV(5442),
-       tV = xV(1321);
- 
-     function FV(VV) {
-       let {
-         icon: eV,
-         title: xV,
-         disabled: JV,
-         children: YV
-       } = VV;
-       return (0, tV.jsxs)("div", {
- ... (69 more removed lines; see GitHub link above)
+       SH = LH(5037),
+       hH = LH(304),
+       tH = LH(1123),
+       zH = LH(1225);
```

#### 24. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L307-L310` → after: `L286-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L286-L289) · [Before (L307-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L307-L310)

```diff
-         schematicData: JV,
-         updateSchematicData: YV,
-         publishFormEnabled: UV,
-         formEnabled: yV
+         value: BH,
+         onChange: LH,
+         showAll: AH,
+         disabled: CH = !1
```

#### 25. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L314-L734` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L293) · [Before (L314-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L314-L734)

```diff
-       } = (0, pV.A)(), nV = !UV, wV = {
-         tpRequests: {
-           isEnabled: () => !JV.disableTpRequests,
-           pW: VV => YV("disableTpRequests", !VV)
-         },
-         spawnProtection: {
-           isEnabled: () => !JV.disableSpawnProtection,
-           pW: VV => YV("disableSpawnProtection", !VV)
-         },
-         spawnReset: {
-           isEnabled: () => !!JV.enableSpawnReset,
-           pW: VV => YV("enableSpawnReset", VV)
-         },
-         smpMarketplace: {
-           isEnabled: () => !!JV.enableSmpMarketplace,
-           pW: VV => YV("enableSmpMarketplace", VV)
- ... (405 more removed lines; see GitHub link above)
+       } = (0, tH.B)();
```

#### 26. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L736-L737` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L295-L296) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L736-L737)

```diff
-         className: rV()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: nV
+         className: rH()("BloxdForm GamemodeForm", {
+           BasicOptions: !AH
```

#### 27. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L739-L965` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L298) · [Before (L739-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L739-L965)

```diff
-         children: [nV && (0, tV.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, tV.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, tV.jsx)(wV.b, {
-               name: "check"
-             }), (0, tV.jsx)(gV.b, {})]
-           }), (0, tV.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: yV("thumbnail:thumbnailUploaded")
-           })]
-         }), (0, tV.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: yV("thumbnail:uploadThumbnail")
-         }), (0, tV.jsxs)("div", {
-           className: "ThumbnailUploaderBody",
- ... (211 more removed lines; see GitHub link above)
+         children: [(0, zH.jsx)("div", {
```

#### 28. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L967-L970` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L300) · [Before (L967-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L967-L970)

```diff
-           children: [kV("thumbnail:gameThumbnail"), RV && (0, tV.jsx)("span", {
-             className: rV()("ThumbnailActionMsg", `ThumbnailActionMsg--${RV.type}`),
-             children: RV.text
-           })]
+           children: EH("classic:defaultGamemode")
```

#### 29. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L973-L1259` → after: `L303-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L303-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L303-L306) · [Before (L973-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L973-L1259)

```diff
-           children: (0, tV.jsxs)("div", {
-             className: "ThumbnailGrid",
-             children: [(0, tV.jsxs)("div", {
-               className: rV()("ThumbnailGridItem ThumbnailGridItemDefault", {
-                 ThumbnailGridItemSelected: null === NV
-               }),
-               onClick: () => sV(null),
-               children: [(0, tV.jsx)(WV.d, {
-                 game: {
-                   schematicId: yV.schematicId,
-                   imageBlurhash: yV.imageBlurhash
-                 }
-               }), (0, tV.jsx)("div", {
-                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
-                 children: kV("general:default")
-               })]
- ... (271 more removed lines; see GitHub link above)
+           children: SH.H.map((HH => AH || (0, SH.y)(HH) ? (0, zH.jsx)("button", {
+             type: "button",
+             className: rH()("WorldGamemode", {
+               Selected: BH === HH
```

#### 30. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1262` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L310) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1262)

```diff
-               EV && (nV(null), xV(null), ZV(null))
+               LH(HH)
```

#### 31. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1264-L1473` → after: `L312-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L312-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L312-L316) · [Before (L1264-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1264-L1473)

```diff
-             children: (0, tV.jsx)("div", {
-               className: "TexturePackName",
-               children: "No Override"
-             })
-           }), Object.values(sV.r).map((VV => (0, tV.jsx)(IV.h, {
-             id: VV,
-             isSelected: VV === QV,
-             setSelected: jV,
-             disabled: !EV
-           }, VV)))]
-         }), QV === sV.r.CUSTOM && (0, tV.jsx)(dV.c, {
-           folderName: wV,
-           onTexturePackUpdated: jV,
-           disabled: !EV,
-           maxFileSizeMb: 25,
-           packOwner: "customGame"
- ... (194 more removed lines; see GitHub link above)
+             style: {
+               "--background-image": `url(${hH.w[HH]})`
+             },
+             children: hH.s[HH]
+           }, HH) : null))
```

#### 32. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1480-L1514` → after: `L323-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L323-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L323-L328) · [Before (L1480-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1480-L1514)

```diff
-         schematic: eV,
-         onSchematicUpdate: xV,
-         onClose: JV,
-         inSourceWorld: UV
-       } = VV;
-       YV.NotificationProvider.showCustomPopup({
-         body: VV => (0, tV.jsx)(Ye, {
-           schematic: eV,
-           onSchematicUpdate: xV,
-           onClose: VV,
-           inSourceWorld: UV
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: JV,
-         unlockPointerKey: "schematicPagePopup"
-       })
- ... (19 more removed lines; see GitHub link above)
+         mapTypes: BH,
+         value: LH,
+         onChange: AH,
+         showAll: CH,
+         disabled: EH = !1,
+         children: XH
```

#### 33. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1518-L1522` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L332) · [Before (L1518-L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1518-L1522)

```diff
-       } = (0, UV.A)(), {
-         schematicData: ZV,
-         formEnabled: vV,
-         publishFormEnabled: rV
-       } = eV, kV = !vV || !rV;
+       } = (0, tH.B)();
```

#### 34. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1524-L1549` → after: `L334-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L334-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L334-L345) · [Before (L1524-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1524-L1549)

```diff
-         className: YV()("PublishButtonContainer", xV),
-         children: [eV.canEditSourceWorld && (0, wV.jsxs)(pV.f, {
-           onClick: eV.editSourceWorld,
-           disabled: kV,
-           children: [(0, wV.jsx)(yV.b, {
-             name: "edit"
-           }), " ", JV("worldBuilder:editSourceWorld")]
-         }), !ZV.gamePublished && (0, wV.jsx)(QV.d, {
-           tooltipInner: (0, wV.jsx)("div", {
-             className: "PublishButtonTooltip",
-             children: JV("worldBuilder:publishAsGameDescription")
-           }),
-           children: (0, wV.jsxs)(pV.m, {
-             onClick: () => eV.saveSchematic(!0),
-             disabled: kV,
-             children: [(0, wV.jsx)(yV.b, {
- ... (10 more removed lines; see GitHub link above)
+         className: rH()("BloxdForm MapTypeForm", {
+           BasicOptions: !CH
+         }),
+         children: [(0, zH.jsx)("div", {
+           className: "SectionTitle",
+           children: GH("customLobby:mapType")
+         }), (0, zH.jsx)("div", {
+           className: "SectionBody",
+           children: BH.map((HH => CH || (0, SH.A)(HH) ? (0, zH.jsx)("button", {
+             type: "button",
+             className: rH()("MapType", {
+               Selected: LH === HH
```

#### 35. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1563-L1670` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L348-L349) · [Before (L1563-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1563-L1670)

```diff
-             children: [(0, wV.jsx)(yV.b, {
-               name: "joystick"
-             }), " ", JV("general:playGame")]
-           })]
-         }), !vV && (0, wV.jsx)(nV.d, {
-           loaderType: "Secondary"
-         })]
-       })
-     }
-   },
-   5486: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV
-     });
-     var JV = xV(1230);
-     async function YV(VV) {
- ... (92 more removed lines; see GitHub link above)
+             onClick: () => {
+               AH(HH)
```

#### 36. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1672-L1718` → after: `L351-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L351-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L351-L357) · [Before (L1672-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1672-L1718)

```diff
-             confirmText: "general:ok"
-           });
-           setTimeout((() => {
-             FV("Enter")
-           }), 1e3)
-         }))
-       }
-       return {
-         schematicData: jV,
-         updateSchematicData: GV,
-         setTexturePack: PV,
-         initializeTexturePack: WV,
-         updateState: tV,
-         formEnabled: XV,
-         publishFormEnabled: MV,
-         hasUnsavedChanges: zV,
- ... (31 more removed lines; see GitHub link above)
+             style: {
+               "--background-image": `url(${hH.n[HH]})`
+             },
+             children: hH.j[HH]
+           }, HH) : null))
+         }), XH]
+       })
```

#### 37. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1721` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/119.js#L360-L361) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/119.js#L1721)

```diff
-   5433: () => {}
+   5410: () => {},
+   37210: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L4)

```diff
-   37500: (VV, eV, xV) => {
+   5467: (HH, BH) => {
+     BH.e = function(HH, BH) {
+       if (HH && BH) {
+         var LH = Array.isArray(BH) ? BH : BH.split(","),
+           AH = HH.name || "",
+           rH = (HH.type || "").toLowerCase(),
+           SH = rH.replace(/\/.*$/, "");
+         return LH.some((function(HH) {
+           var BH = HH.trim().toLowerCase();
+           return "." === BH.charAt(0) ? AH.toLowerCase().endsWith(BH) : BH.endsWith("/*") ? SH === BH.replace(/\/.*$/, "") : rH === BH
+         }))
+       }
+       return !0
+     }
+   },
+   5446: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L8-L12` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L23-L25) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L8-L12)

```diff
-     var JV = xV(1146),
-       YV = xV.n(JV),
-       UV = xV(62),
-       yV = xV(5050),
-       pV = xV(1321);
+     var AH = LH(45),
+       rH = LH(5450),
+       SH = LH.n(rH);
```

#### 3. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L14-L29` → after: `L27-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L27-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L27-L52) · [Before (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L14-L29)

```diff
-     function QV(VV) {
-       let {
-         locked: eV,
-         children: xV
-       } = VV;
-       const JV = (0, UV.useRef)(null),
-         QV = (0, yV.d)(JV, "y");
-       return (0, pV.jsx)("div", {
-         ref: JV,
-         className: YV()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: QV.before,
-           CreateCustomLobbyBodyMoreBelow: QV.after
-         }),
-         "data-pad-ignore": eV || void 0,
-         children: xV
-       })
+     function hH(HH, BH, LH, AH) {
+       return new(LH || (LH = Promise))((function(rH, SH) {
+         function hH(HH) {
+           try {
+             zH(AH.next(HH))
+           } catch (BH) {
+             SH(BH)
+           }
+         }
+ 
+         function tH(HH) {
+           try {
+             zH(AH.throw(HH))
+           } catch (BH) {
+             SH(BH)
+           }
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L50-L53` → after: `L55-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L55-L63) · [Before (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L50-L53)

```diff
-     function bV(VV) {
-       const eV = {
-         requested: !1,
-         closed: !1
+     function tH(HH, BH) {
+       var LH, AH, rH, SH, hH = {
+         label: 0,
+         sent: function() {
+           if (1 & rH[0]) throw rH[1];
+           return rH[1]
+         },
+         trys: [],
+         ops: []
```

#### 5. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L55-L63` → after: `L65-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L65-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L65-L126) · [Before (L55-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L55-L63)

```diff
-       pV.NotificationProvider.showCustomPopup({
-         body: xV => (0, kV.jsx)(EV, {
-           flow: eV,
-           close: xV,
-           ...VV
-         }),
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           eV.closed = !0, eV.requested || (0, rV.i)()
+       return SH = {
+         next: tH(0),
+         throw: tH(1),
+         return: tH(2)
+       }, "function" === typeof Symbol && (SH[Symbol.iterator] = function() {
+         return this
+       }), SH;
+ 
+       function tH(tH) {
+         return function(zH) {
+           return function(tH) {
+             if (LH) throw new TypeError("Generator is already executing.");
+             for (; SH && (SH = 0, tH[0] && (hH = 0)), hH;) try {
+               if (LH = 1, AH && (rH = 2 & tH[0] ? AH.return : tH[0] ? AH.throw || ((rH = AH.return) && rH.call(AH), 0) : AH.next) && !(rH = rH.call(AH, tH[1])).done) return rH;
+               switch (AH = 0, rH && (tH = [2 & tH[0], rH.value]), tH[0]) {
+                 case 0:
+ ... (46 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L65` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L128) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L65)

```diff
-       })
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L68-L95` → after: `L132-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L132-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L132-L142) · [Before (L68-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L68-L95)

```diff
-     function EV(VV) {
-       let {
-         flow: eV,
-         close: xV,
-         onCreating: pV,
-         onCreated: bV,
-         onFailedClosed: EV,
-         join: BV
-       } = VV;
-       const {
-         t: jV
-       } = (0, yV.A)(), [qV, tV] = (0, YV.useState)(JV.r), [FV, TV] = (0, YV.useState)(!1), [PV, AV] = (0, YV.useState)(""), NV = (0, ZV.e)();
-       (0, YV.useEffect)((() => {
-         (0, rV.o)()
-       }), []);
-       const XV = VV => ({
- ... (12 more removed lines; see GitHub link above)
+     function zH(HH, BH) {
+       var LH = "function" === typeof Symbol && HH[Symbol.iterator];
+       if (!LH) return HH;
+       var AH, rH, SH = LH.call(HH),
+         hH = [];
+       try {
+         for (;
+           (void 0 === BH || BH-- > 0) && !(AH = SH.next()).done;) hH.push(AH.value)
+       } catch (tH) {
+         rH = {
+           error: tH
```

#### 8. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L97-L143` → after: `L144-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L144-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L144-L254) · [Before (L97-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L97-L143)

```diff
-       });
-       return (0, kV.jsxs)("div", {
-         className: "CreateCustomLobby",
-         children: [(0, kV.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, kV.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: jV("homePage:myWorld")
-           })
-         }), (0, kV.jsx)(QV.c, {
-           locked: FV,
-           children: (0, kV.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [(0, kV.jsx)(vV.d, {
-               value: qV.defaultGamemode,
-               onChange: VV => {
- ... (31 more removed lines; see GitHub link above)
+       } finally {
+         try {
+           AH && !AH.done && (LH = SH.return) && LH.call(SH)
+         } finally {
+           if (rH) throw rH.error
+         }
+       }
+       return hH
+     }
+ 
+     function CH(HH, BH, LH) {
+       if (LH || 2 === arguments.length)
+         for (var AH, rH = 0, SH = BH.length; rH < SH; rH++) !AH && rH in BH || (AH || (AH = Array.prototype.slice.call(BH, 0, rH)), AH[rH] = BH[rH]);
+       return HH.concat(AH || Array.prototype.slice.call(BH))
+     }
+     Object.create;
+ ... (95 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L145-L158` → after: `L256-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L256-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L256-L387) · [Before (L145-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L145-L158)

```diff
-         }), (0, kV.jsxs)("div", {
-           className: "CreateCustomLobbyFooter",
-           children: [(0, kV.jsx)(wV.m, {
-             className: "CreateCustomLobbyButton",
-             padDefaultFocus: !0,
-             loading: FV,
-             onClick: () => {
-               eV.requested = !0, TV(!0), pV(!0), AV(""), (0, rV.k)(qV), UV.e.createPersonalWorld(qV).then((VV => {
-                 pV(!1);
-                 const JV = bV(VV);
-                 !eV.closed && NV.current ? (xV(), BV(VV)) : JV || (0, rV.i)()
-               }), (VV => {
-                 if (console.error("Failed to create personal world:", VV), pV(!1), eV.requested = !1, eV.closed || !NV.current) return (0, rV.i)(), void EV(VV);
-                 AV(VV.message), TV(!1)
+         }
+         return HH
+       }(HH);
+       if ("string" !== typeof LH.path) {
+         var AH = HH.webkitRelativePath;
+         Object.defineProperty(LH, "path", {
+           value: "string" === typeof BH ? BH : "string" === typeof AH && AH.length > 0 ? AH : HH.name,
+           writable: !1,
+           configurable: !1,
+           enumerable: !0
+         })
+       }
+       return LH
+     }
+     var GH = [".DS_Store", "Thumbs.db"];
+ 
+ ... (116 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L160-L167` → after: `L389-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L389-L394) · [Before (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L160-L167)

```diff
-             },
-             children: jV("general:play")
-           }), PV && (0, kV.jsx)("div", {
-             className: "CreateCustomLobbyError AnimFadeInScaleUp",
-             children: PV
-           })]
-         })]
-       })
+             }))
+           }), (function(HH) {
+             LH(HH)
+           }))
+         }()
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L182-L197` → after: `L398-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L398-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L398-L407) · [Before (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L182-L197)

```diff
-       const {
-         disabled: eV,
-         hideWrapper: xV
-       } = VV, {
-         t: JV
-       } = (0, yV.A)(), nV = VV.advancedMode ? QV.map((eV => [eV, VV.callbacks[eV]])) : UV.i.map((eV => [eV, VV.callbacks[eV]])), ZV = (0, pV.jsx)("div", {
-         className: YV()("PluginsGrid", {
-           SectionBody: !xV
-         }),
-         children: nV.map((VV => {
-           let [xV, JV] = VV;
-           return (0, pV.jsx)(wV, {
-             plugin: xV,
-             callbacks: JV,
-             disabled: eV
-           }, xV)
+       return hH(this, void 0, void 0, (function() {
+         return tH(this, (function(BH) {
+           return [2, new Promise((function(BH, LH) {
+             HH.file((function(LH) {
+               var AH = XH(LH, HH.fullPath);
+               BH(AH)
+             }), (function(HH) {
+               LH(HH)
+             }))
+           }))]
```

#### 12. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L199-L206` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L409) · [Before (L199-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L199-L206)

```diff
-       });
-       return xV ? ZV : (0, pV.jsxs)("div", {
-         className: "BloxdForm",
-         children: [(0, pV.jsx)("div", {
-           className: "SectionTitle",
-           children: JV("worldBuilder:pluginsSection")
-         }), ZV]
-       })
+       }))
```

#### 13. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L210-L250` → after: `L414-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L414-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L414-L486) · [Before (L210-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L210-L250)

```diff
-       let {
-         plugin: eV,
-         callbacks: {
-           isEnabled: xV,
-           pW: JV
-         },
-         disabled: UV
-       } = VV;
-       const {
-         t: QV
-       } = (0, yV.A)(), nV = xV();
-       return (0, pV.jsxs)("div", {
-         className: YV()("PluginCard", {
-           PluginCardEnabled: nV,
-           PluginCardDisabledForm: UV
-         }),
- ... (25 more removed lines; see GitHub link above)
+       return function(HH) {
+         if (Array.isArray(HH)) return KH(HH)
+       }(HH) || function(HH) {
+         if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
+       }(HH) || lH(HH) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function mH(HH, BH) {
+       var LH = Object.keys(HH);
+       if (Object.getOwnPropertySymbols) {
+         var AH = Object.getOwnPropertySymbols(HH);
+         BH && (AH = AH.filter((function(BH) {
+           return Object.getOwnPropertyDescriptor(HH, BH).enumerable
+         }))), LH.push.apply(LH, AH)
+ ... (57 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L252-L259` → after: `L488-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L488-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L488-L516) · [Before (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L252-L259)

```diff
-     const ZV = {
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+ 
+     function KH(HH, BH) {
+       (null == BH || BH > HH.length) && (BH = HH.length);
+       for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
+       return AH
+     }
+     var cH = "file-invalid-type",
+       eH = "file-too-large",
+       qH = "file-too-small",
+       gH = "too-many-files",
+       NH = function(HH) {
+         HH = Array.isArray(HH) && 1 === HH.length ? HH[0] : HH;
+         var BH = Array.isArray(HH) ? "one of ".concat(HH.join(", ")) : HH;
+         return {
+           code: cH,
+           message: "File type must be ".concat(BH)
+ ... (13 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L262-L268` → after: `L519-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L519-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L519-L563) · [Before (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L262-L268)

```diff
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
+         code: gH,
+         message: "Too many files"
+       };
+ 
+     function FH(HH, BH) {
+       var LH = "application/x-moz-file" === HH.type || (0, bH.e)(HH, BH);
+       return [LH, LH ? null : NH(BH)]
+     }
+ 
+     function DH(HH, BH, LH) {
+       if (wH(HH.size))
+         if (wH(BH) && wH(LH)) {
+           if (HH.size > LH) return [!1, RH(LH)];
+           if (HH.size < BH) return [!1, jH(BH)]
+         } else {
+           if (wH(BH) && HH.size < BH) return [!1, jH(BH)];
+ ... (29 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L270-L282` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L565) · [Before (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L270-L282)

```diff
-   },
-   37497: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => nV,
-       g: () => wV
-     });
-     xV(62);
-     var JV = xV(1146),
-       YV = xV.n(JV),
-       UV = xV(5103),
-       yV = xV(364),
-       pV = xV(1220),
-       QV = xV(1321);
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L285-L318` → after: `L568-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L568-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L568-L572) · [Before (L285-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L285-L318)

```diff
-       let {
-         value: eV,
-         onChange: xV,
-         showAll: JV,
-         disabled: nV = !1
-       } = VV;
-       const {
-         t: wV
-       } = (0, pV.A)();
-       return (0, QV.jsxs)("div", {
-         className: YV()("BloxdForm GamemodeForm", {
-           BasicOptions: !JV
-         }),
-         children: [(0, QV.jsx)("div", {
-           className: "SectionTitle",
-           children: wV("classic:defaultGamemode")
- ... (18 more removed lines; see GitHub link above)
+       return "audio/*" === HH || "video/*" === HH || "image/*" === HH || "text/*" === HH || /\w+\/[-+.\w]+/g.test(HH)
+     }
+ 
+     function iH(HH) {
+       return /^.*\.[\w]+$/.test(HH)
```

#### 18. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L322-L323` → after: `L580-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L580-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L580-L653) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L322-L323)

```diff
-       let {
-         mapTypes: eV,
+       return function(HH) {
+         if (Array.isArray(HH)) return SB(HH)
+       }(HH) || function(HH) {
+         if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
+       }(HH) || rB(HH) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function AB(HH, BH) {
+       return function(HH) {
+         if (Array.isArray(HH)) return HH
+       }(HH) || function(HH, BH) {
+         var LH = null == HH ? null : "undefined" !== typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
+         if (null == LH) return;
+         var AH, rH, SH = [],
+ ... (58 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L325-L356` → after: `L655-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L655-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L655-L1075) · [Before (L325-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L325-L356)

```diff
-         onChange: JV,
-         showAll: nV,
-         disabled: wV = !1,
-         children: ZV
-       } = VV;
-       const {
-         t: vV
-       } = (0, pV.A)();
-       return (0, QV.jsxs)("div", {
-         className: YV()("BloxdForm MapTypeForm", {
-           BasicOptions: !nV
-         }),
-         children: [(0, QV.jsx)("div", {
-           className: "SectionTitle",
-           children: vV("customLobby:mapType")
-         }), (0, QV.jsx)("div", {
- ... (16 more removed lines; see GitHub link above)
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : HH[BH] = LH, HH
+     }
+ 
+     function CB(HH, BH) {
+       if (null == HH) return {};
+       var LH, AH, rH = function(HH, BH) {
+         if (null == HH) return {};
+         var LH, AH, rH = {},
+           SH = Object.keys(HH);
+         for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || (rH[LH] = HH[LH]);
+         return rH
+       }(HH, BH);
+       if (Object.getOwnPropertySymbols) {
+ ... (405 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L359-L361` → after: `L1078-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1078-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/120.js#L1078-L1116) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/120.js#L359-L361)

```diff
-   },
-   5433: () => {},
-   37489: () => {}
+ 
+     function uB(HH, BH) {
+       switch (BH.type) {
+         case "focus":
+           return tB(tB({}, HH), {}, {
+             Iq: !0
+           });
+         case "blur":
+           return tB(tB({}, HH), {}, {
+             Iq: !1
+           });
+         case "openDialog":
+           return tB(tB({}, GB), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/121.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/121.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a)

#### 1. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L43` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L4-L35) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L4-L43)

```diff
-   5478: (VV, eV) => {
-     eV.b = function(VV, eV) {
-       if (VV && eV) {
-         var xV = Array.isArray(eV) ? eV : eV.split(","),
-           JV = VV.name || "",
-           YV = (VV.type || "").toLowerCase(),
-           UV = YV.replace(/\/.*$/, "");
-         return xV.some((function(VV) {
-           var eV = VV.trim().toLowerCase();
-           return "." === eV.charAt(0) ? JV.toLowerCase().endsWith(eV) : eV.endsWith("/*") ? UV === eV.replace(/\/.*$/, "") : YV === eV
-         }))
-       }
-       return !0
-     }
-   },
-   5448: (VV, eV, xV) => {
- ... (24 more removed lines; see GitHub link above)
+   5489: (HH, BH, LH) => {
+     function AH(HH) {
+       return AH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
+         return typeof HH
+       } : function(HH) {
+         return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
+       }, AH(HH)
+     }
+     Object.defineProperty(BH, "__esModule", {
+       value: !0
+     }), BH.default = void 0;
+     var rH = XH(LH(1038)),
+       SH = function(HH, BH) {
+         if (!BH && HH && HH.__esModule) return HH;
+         if (null === HH || "object" !== AH(HH) && "function" !== typeof HH) return {
+           default: HH
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L45-L52` → after: `L37-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L37-L43) · [Before (L45-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L45-L52)

```diff
-         function QV(VV) {
-           var eV;
-           VV.done ? YV(VV.value) : (eV = VV.value, eV instanceof xV ? eV : new xV((function(VV) {
-             VV(eV)
-           }))).then(yV, pV)
-         }
-         QV((JV = JV.apply(VV, eV || [])).next())
-       }))
+     function EH(HH) {
+       if ("function" !== typeof WeakMap) return null;
+       var BH = new WeakMap,
+         LH = new WeakMap;
+       return (EH = function(HH) {
+         return HH ? LH : BH
+       })(HH)
```

#### 3. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L55-L127` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L46-L48) · [Before (L55-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L55-L127)

```diff
-     function pV(VV, eV) {
-       var xV, JV, YV, UV, yV = {
-         label: 0,
-         sent: function() {
-           if (1 & YV[0]) throw YV[1];
-           return YV[1]
-         },
-         trys: [],
-         ops: []
-       };
-       return UV = {
-         next: pV(0),
-         throw: pV(1),
-         return: pV(2)
-       }, "function" === typeof Symbol && (UV[Symbol.iterator] = function() {
-         return this
- ... (57 more removed lines; see GitHub link above)
+     function XH(HH) {
+       return HH && HH.__esModule ? HH : {
+         default: HH
```

#### 4. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L133-L142` → after: `L53-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L53-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L53-L80) · [Before (L133-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L133-L142)

```diff
-       var xV = "function" === typeof Symbol && VV[Symbol.iterator];
-       if (!xV) return VV;
-       var JV, YV, UV = xV.call(VV),
-         yV = [];
-       try {
-         for (;
-           (void 0 === eV || eV-- > 0) && !(JV = UV.next()).done;) yV.push(JV.value)
-       } catch (pV) {
-         YV = {
-           error: pV
+       var LH = "undefined" !== typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
+       if (!LH) {
+         if (Array.isArray(HH) || (LH = function(HH, BH) {
+             if (!HH) return;
+             if ("string" === typeof HH) return YH(HH, BH);
+             var LH = Object.prototype.toString.call(HH).slice(8, -1);
+             "Object" === LH && HH.constructor && (LH = HH.constructor.name);
+             if ("Map" === LH || "Set" === LH) return Array.from(HH);
+             if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return YH(HH, BH)
+           }(HH)) || BH && HH && "number" === typeof HH.length) {
+           LH && (HH = LH);
+           var AH = 0,
+             rH = function() {};
+           return {
+             s: rH,
+             n: function() {
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L144-L148` → after: `L82-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L82-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L82-L102) · [Before (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L144-L148)

```diff
-       } finally {
-         try {
-           JV && !JV.done && (xV = UV.return) && xV.call(UV)
-         } finally {
-           if (YV) throw YV.error
+         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }
+       var SH, hH = !0,
+         tH = !1;
+       return {
+         s: function() {
+           LH = LH.call(HH)
+         },
+         n: function() {
+           var HH = LH.next();
+           return hH = HH.done, HH
+         },
+         e: function(HH) {
+           tH = !0, SH = HH
+         },
+         f: function() {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L245-L267` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L108-L109) · [Before (L245-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L245-L267)

```diff
-       var xV = function(VV) {
-         var eV = VV.name;
-         if (eV && -1 !== eV.lastIndexOf(".") && !VV.type) {
-           var xV = eV.split(".").pop().toLowerCase(),
-             JV = wV.get(xV);
-           JV && Object.defineProperty(VV, "type", {
-             value: JV,
-             writable: !1,
-             configurable: !1,
-             enumerable: !0
-           })
-         }
-         return VV
-       }(VV);
-       if ("string" !== typeof xV.path) {
-         var JV = VV.webkitRelativePath;
- ... (7 more removed lines; see GitHub link above)
+       (null == BH || BH > HH.length) && (BH = HH.length);
+       for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
```

#### 7. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L300-L327` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L114) · [Before (L300-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L300-L327)

```diff
-       return yV(this, void 0, void 0, (function() {
-         var xV;
-         return pV(this, (function(JV) {
-           switch (JV.label) {
-             case 0:
-               return VV.items ? (xV = jV(VV.items).filter((function(VV) {
-                 return "file" === VV.kind
-               })), "drop" !== eV ? [2, xV] : [4, Promise.all(xV.map(qV))]) : [3, 2];
-             case 1:
-               return [2, BV(tV(JV.sent()))];
-             case 2:
-               return [2, BV(jV(VV.files).map((function(VV) {
-                 return ZV(VV)
-               })))]
-           }
-         }))
- ... (12 more removed lines; see GitHub link above)
+       for (var LH = 0; LH < BH.length; LH++) {
```

#### 8. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L329` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L116) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L329)

```diff
-         eV.push(JV)
+         AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, AH.key, AH)
```

#### 9. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L340-L394` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L120-L123) · [Before (L340-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L340-L394)

```diff
-     function tV(VV) {
-       return VV.reduce((function(VV, eV) {
-         return nV(nV([], QV(VV), !1), QV(Array.isArray(eV) ? tV(eV) : [eV]), !1)
-       }), [])
-     }
- 
-     function FV(VV) {
-       var eV = VV.getAsFile();
-       if (!eV) return Promise.reject("".concat(VV, " is not a File"));
-       var xV = ZV(eV);
-       return Promise.resolve(xV)
-     }
- 
-     function TV(VV) {
-       return yV(this, void 0, void 0, (function() {
-         return pV(this, (function(eV) {
- ... (39 more removed lines; see GitHub link above)
+     function QH(HH, BH) {
+       return QH = Object.setPrototypeOf || function(HH, BH) {
+         return HH.__proto__ = BH, HH
+       }, QH(HH, BH)
```

#### 10. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L398-L409` → after: `L127-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L127-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L127-L148) · [Before (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L398-L409)

```diff
-       return yV(this, void 0, void 0, (function() {
-         return pV(this, (function(eV) {
-           return [2, new Promise((function(eV, xV) {
-             VV.file((function(xV) {
-               var JV = ZV(xV, VV.fullPath);
-               eV(JV)
-             }), (function(VV) {
-               xV(VV)
-             }))
-           }))]
-         }))
-       }))
+       var BH = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
+         try {
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
+         } catch (HH) {
+           return !1
+         }
+       }();
+       return function() {
+         var LH, rH = xH(HH);
+         if (BH) {
+           var SH = xH(this).constructor;
+           LH = Reflect.construct(rH, arguments, SH)
+         } else LH = rH.apply(this, arguments);
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L414-L430` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L152) · [Before (L414-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L414-L430)

```diff
-       return function(VV) {
-         if (Array.isArray(VV)) return gV(VV)
-       }(VV) || function(VV) {
-         if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
-       }(VV) || RV(VV) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function MV(VV, eV) {
-       var xV = Object.keys(VV);
-       if (Object.getOwnPropertySymbols) {
-         var JV = Object.getOwnPropertySymbols(VV);
-         eV && (JV = JV.filter((function(eV) {
-           return Object.getOwnPropertyDescriptor(VV, eV).enumerable
-         }))), xV.push.apply(xV, JV)
- ... (1 more removed lines; see GitHub link above)
+       if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
```

#### 12. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L435-L443` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L157-L159) · [Before (L435-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L435-L443)

```diff
-       for (var eV = 1; eV < arguments.length; eV++) {
-         var xV = null != arguments[eV] ? arguments[eV] : {};
-         eV % 2 ? MV(Object(xV), !0).forEach((function(eV) {
-           GV(VV, eV, xV[eV])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : MV(Object(xV)).forEach((function(eV) {
-           Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
-         }))
-       }
-       return VV
+       return xH = Object.setPrototypeOf ? Object.getPrototypeOf : function(HH) {
+         return HH.__proto__ || Object.getPrototypeOf(HH)
+       }, xH(HH)
```

#### 13. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L454-L472` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L170-L182) · [Before (L454-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L454-L472)

```diff
- 
-     function WV(VV, eV) {
-       return function(VV) {
-         if (Array.isArray(VV)) return VV
-       }(VV) || function(VV, eV) {
-         var xV = null == VV ? null : "undefined" !== typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
-         if (null == xV) return;
-         var JV, YV, UV = [],
-           yV = !0,
-           pV = !1;
-         try {
-           for (xV = xV.call(VV); !(yV = (JV = xV.next()).done) && (UV.push(JV.value), !eV || UV.length !== eV); yV = !0);
-         } catch (QV) {
-           pV = !0, YV = QV
-         } finally {
-           try {
- ... (3 more removed lines; see GitHub link above)
+     var PH = {
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

#### 14. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L507-L526` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L187-L200) · [Before (L507-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L507-L526)

```diff
-         return {
-           code: iV,
-           message: "File is larger than ".concat(VV, " ").concat(1 === VV ? "byte" : "bytes")
-         }
-       },
-       hV = function(VV) {
-         return {
-           code: CV,
-           message: "File is smaller than ".concat(VV, " ").concat(1 === VV ? "byte" : "bytes")
-         }
-       },
-       lV = {
-         code: aV,
-         message: "Too many files"
-       };
- 
- ... (4 more removed lines; see GitHub link above)
+         ! function(HH, BH) {
+           if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
+           Object.defineProperty(HH, "prototype", {
+             value: Object.create(BH && BH.prototype, {
+               constructor: {
+                 value: HH,
+                 writable: !0,
+                 configurable: !0
+               }
+             }),
+             writable: !1
+           }), BH && QH(HH, BH)
+         }(hH, HH);
+         var BH, LH, AH, SH = WH(hH);
```

#### 15. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L528-L536` → after: `L202-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L202-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L202-L465) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L528-L536)

```diff
-     function fV(VV, eV, xV) {
-       if (mV(VV.size))
-         if (mV(eV) && mV(xV)) {
-           if (VV.size > xV) return [!1, cV(xV)];
-           if (VV.size < eV) return [!1, hV(eV)]
-         } else {
-           if (mV(eV) && VV.size < eV) return [!1, hV(eV)];
-           if (mV(xV) && VV.size > xV) return [!1, cV(xV)]
-         } return [!0, null]
+         function hH(HH, BH) {
+           var LH;
+           return function(HH, BH) {
+             if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
+           }(this, hH), vH(MH(LH = SH.call(this, HH, BH)), "handleFormat", (function(HH) {
+             var BH = LH.props.format;
+             return BH ? BH(HH) : HH
+           })), vH(MH(LH), "handleUpdate", (function() {
+             if (LH.slider) {
+               var HH = LH.props.orientation,
+                 BH = (0, zH.capitalize)(PH.orientation[HH].dimension),
+                 AH = LH.slider["offset".concat(BH)],
+                 rH = LH.handle["offset".concat(BH)];
+               LH.setState({
+                 limit: AH - rH,
+                 grab: rH / 2
+ ... (248 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L539-L541` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L471) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L539-L541)

```diff
-     function mV(VV) {
-       return void 0 !== VV && null !== VV
-     }
+     function rH() {}
```

#### 17. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L543-L545` → after: `L473-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L473-L480) · [Before (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L543-L545)

```diff
-     function KV(VV) {
-       return "function" === typeof VV.isPropagationStopped ? VV.isPropagationStopped() : "undefined" !== typeof VV.cancelBubble && VV.cancelBubble
-     }
+     function SH() {}
+     SH.resetWarningCache = rH, HH.exports = function() {
+       function HH(HH, BH, LH, rH, SH, hH) {
+         if (hH !== AH) {
+           var tH = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw tH.name = "Invariant Violation", tH
+         }
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L547-L550` → after: `L482-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L482-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L482-L509) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L547-L550)

```diff
-     function HV(VV) {
-       return VV.dataTransfer ? Array.prototype.some.call(VV.dataTransfer.types, (function(VV) {
-         return "Files" === VV || "application/x-moz-file" === VV
-       })) : !!VV.target && !!VV.target.files
+       function BH() {
+         return HH
+       }
+       HH.isRequired = HH;
+       var LH = {
+         array: HH,
+         bigint: HH,
+         bool: HH,
+         func: HH,
+         number: HH,
+         object: HH,
+         string: HH,
+         symbol: HH,
+         any: HH,
+         arrayOf: BH,
+         element: HH,
+ ... (12 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L553-L555` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L585-L587) · [Before (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L553-L555)

```diff
-     function uV(VV) {
-       VV.preventDefault()
-     }
+             function tH() {
+               hH(SH)
+             }
```

#### 20. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L557-L565` → after: `L589-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L589-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L589-L649) · [Before (L557-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L557-L565)

```diff
-     function sV() {
-       for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
-       return function(VV) {
-         for (var xV = arguments.length, JV = new Array(xV > 1 ? xV - 1 : 0), YV = 1; YV < xV; YV++) JV[YV - 1] = arguments[YV];
-         return eV.some((function(eV) {
-           return !KV(VV) && eV && eV.apply(void 0, [VV].concat(JV)), KV(VV)
-         }))
-       }
-     }
+             function zH() {
+               var HH = Date.now();
+               if (LH) {
+                 if (HH - rH < 2) return;
+                 AH = !0
+               } else LH = !0, AH = !1, setTimeout(tH, BH);
+               rH = HH
+             }
+             return zH
+           }(this.refresh.bind(this), 20)
+         }
+         return HH.prototype.addObserver = function(HH) {
+           ~this.observers_.indexOf(HH) || this.observers_.push(HH), this.connected_ || this.connect_()
+         }, HH.prototype.removeObserver = function(HH) {
+           var BH = this.observers_,
+             LH = BH.indexOf(HH);
+ ... (45 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L568` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L652) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L568)

```diff
-       return "audio/*" === VV || "video/*" === VV || "image/*" === VV || "text/*" === VV || /\w+\/[-+.\w]+/g.test(VV)
+       return parseFloat(HH) || 0
```

#### 22. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L572` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L656-L659) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L572)

```diff
-       return /^.*\.[\w]+$/.test(VV)
+       for (var BH = [], LH = 1; LH < arguments.length; LH++) BH[LH - 1] = arguments[LH];
+       return BH.reduce((function(BH, LH) {
+         return BH + YH(HH["border-" + LH + "-width"])
+       }), 0)
```

#### 23. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L580-L606` → after: `L663-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L663-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L663-L671) · [Before (L580-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L580-L606)

```diff
-       return function(VV) {
-         if (Array.isArray(VV)) return Ue(VV)
-       }(VV) || function(VV) {
-         if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
-       }(VV) || Ye(VV) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function Je(VV, eV) {
-       return function(VV) {
-         if (Array.isArray(VV)) return VV
-       }(VV) || function(VV, eV) {
-         var xV = null == VV ? null : "undefined" !== typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
-         if (null == xV) return;
-         var JV, YV, UV = [],
- ... (11 more removed lines; see GitHub link above)
+       var BH = HH.clientWidth,
+         LH = HH.clientHeight;
+       if (!BH && !LH) return GH;
+       var AH = XH(HH).getComputedStyle(HH),
+         rH = function(HH) {
+           for (var BH = {}, LH = 0, AH = ["top", "right", "bottom", "left"]; LH < AH.length; LH++) {
+             var rH = AH[LH],
+               SH = HH["padding-" + rH];
+             BH[rH] = YH(SH)
```

#### 24. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L608-L635` → after: `L673-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L673-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L673-L684) · [Before (L608-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L608-L635)

```diff
-         }
-         return UV
-       }(VV, eV) || Ye(VV, eV) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function Ye(VV, eV) {
-       if (VV) {
-         if ("string" === typeof VV) return Ue(VV, eV);
-         var xV = Object.prototype.toString.call(VV).slice(8, -1);
-         return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? Ue(VV, eV) : void 0
-       }
-     }
- 
-     function Ue(VV, eV) {
- ... (12 more removed lines; see GitHub link above)
+           return BH
+         }(AH),
+         SH = rH.left + rH.right,
+         hH = rH.top + rH.bottom,
+         tH = YH(AH.width),
+         zH = YH(AH.height);
+       if ("border-box" === AH.boxSizing && (Math.round(tH + SH) !== BH && (tH -= uH(AH, "left", "right") + SH), Math.round(zH + hH) !== LH && (zH -= uH(AH, "top", "bottom") + hH)), ! function(HH) {
+           return HH === XH(HH).document.documentElement
+         }(HH)) {
+         var CH = Math.round(tH + SH) - BH,
+           EH = Math.round(zH + hH) - LH;
+         1 !== Math.abs(CH) && (tH -= CH), 1 !== Math.abs(EH) && (zH -= EH)
```

#### 25. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L637` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L686) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L637)

```diff
-       return xV
+       return xH(rH.left, rH.top, tH, zH)
```

#### 26. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L641-L649` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L695-L698) · [Before (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L641-L649)

```diff
-       for (var eV = 1; eV < arguments.length; eV++) {
-         var xV = null != arguments[eV] ? arguments[eV] : {};
-         eV % 2 ? ye(Object(xV), !0).forEach((function(eV) {
-           Qe(VV, eV, xV[eV])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : ye(Object(xV)).forEach((function(eV) {
-           Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
-         }))
-       }
-       return VV
+       return rH ? WH(HH) ? function(HH) {
+         var BH = HH.getBBox();
+         return xH(0, 0, BH.width, BH.height)
+       }(HH) : QH(HH) : GH
```

#### 27. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L652-L672` → after: `L701-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L701-L706) · [Before (L652-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L652-L672)

```diff
-     function Qe(VV, eV, xV) {
-       return eV in VV ? Object.defineProperty(VV, eV, {
-         value: xV,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : VV[eV] = xV, VV
-     }
- 
-     function ne(VV, eV) {
-       if (null == VV) return {};
-       var xV, JV, YV = function(VV, eV) {
-         if (null == VV) return {};
-         var xV, JV, YV = {},
-           UV = Object.keys(VV);
-         for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || (YV[xV] = VV[xV]);
- ... (5 more removed lines; see GitHub link above)
+     function xH(HH, BH, LH, AH) {
+       return {
+         x: HH,
+         y: BH,
+         width: LH,
+         height: AH
```

#### 28. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L676-L683` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L709-L711) · [Before (L676-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L676-L683)

```diff
-     var we = (0, JV.forwardRef)((function(VV, eV) {
-       var xV = VV.children,
-         YV = re(ne(VV, dV)),
-         UV = YV.open,
-         yV = ne(YV, OV);
-       return (0, JV.useImperativeHandle)(eV, (function() {
-         return {
-           open: UV
+     var vH = function() {
+         function HH(HH) {
+           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xH(0, 0, 0, 0), this.target = HH
```

#### 29. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L685-L701` → after: `L713-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L713-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L713-L743) · [Before (L685-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L685-L701)

```diff
-       }), [UV]), JV.createElement(JV.Fragment, null, xV(pe(pe({}, yV), {}, {
-         open: UV
-       })))
-     }));
-     we.displayName = "Dropzone";
-     var Ze = {
-       disabled: !1,
-       getFilesFromEvent: function(VV) {
-         return yV(this, void 0, void 0, (function() {
-           return pV(this, (function(eV) {
-             return rV(VV) && rV(VV.dataTransfer) ? [2, EV(VV.dataTransfer, VV.type)] : function(VV) {
-               return rV(VV) && rV(VV.target)
-             }(VV) ? [2, kV(VV)] : Array.isArray(VV) && VV.every((function(VV) {
-               return "getFile" in VV && "function" === typeof VV.getFile
-             })) ? [2, bV(VV)] : [2, []]
-           }))
- ... (1 more removed lines; see GitHub link above)
+         return HH.prototype.isActive = function() {
+           var HH = MH(this.target);
+           return this.contentRect_ = HH, HH.width !== this.broadcastWidth || HH.height !== this.broadcastHeight
+         }, HH.prototype.broadcastRect = function() {
+           var HH = this.contentRect_;
+           return this.broadcastWidth = HH.width, this.broadcastHeight = HH.height, HH
+         }, HH
+       }(),
+       PH = function(HH, BH) {
+         var LH = function(HH) {
+           var BH = HH.x,
+             LH = HH.y,
+             AH = HH.width,
+             rH = HH.height,
+             SH = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
+             hH = Object.create(SH.prototype);
+ ... (15 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L703-L835` → after: `L745-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L745-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L745-L755) · [Before (L703-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L703-L835)

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
-     we.defaultProps = Ze, we.propTypes = {
-       children: UV().func,
-       accept: UV().objectOf(UV().arrayOf(UV().string)),
- ... (117 more removed lines; see GitHub link above)
+       TH = function() {
+         function HH(HH, BH, LH) {
+           if (this.activeObservations_ = [], this.observations_ = new AH, "function" !== typeof HH) throw new TypeError("The callback provided as parameter 1 is not a function.");
+           this.callback_ = HH, this.controller_ = BH, this.callbackCtx_ = LH
+         }
+         return HH.prototype.observe = function(HH) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(HH instanceof XH(HH).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var BH = this.observations_;
+             BH.has(HH) || (BH.set(HH, new vH(HH)), this.controller_.addObserver(this), this.controller_.refresh())
```

#### 31. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L837-L845` → after: `L757-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L757-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L757-L762) · [Before (L837-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L837-L845)

```diff
-       }), [aV, OV, iV, Ye]);
-       var ye = (0, JV.useRef)([]),
-         we = function(VV) {
-           CV.current && CV.current.contains(VV.target) || (VV.preventDefault(), ye.current = [])
-         };
-       (0, JV.useEffect)((function() {
-         return tV && (document.addEventListener("dragover", uV, !1), document.addEventListener("drop", we, !1)),
-           function() {
-             tV && (document.removeEventListener("dragover", uV), document.removeEventListener("drop", we))
+         }, HH.prototype.unobserve = function(HH) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(HH instanceof XH(HH).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var BH = this.observations_;
+             BH.has(HH) && (BH.delete(HH), BH.size || this.controller_.removeObserver(this))
```

#### 32. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L847-L889` → after: `L764-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L764-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L764-L769) · [Before (L847-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L847-L889)

```diff
-       }), [CV, tV]), (0, JV.useEffect)((function() {
-         return !YV && qV && CV.current && CV.current.focus(),
-           function() {}
-       }), [CV, qV, YV]);
-       var re = (0, JV.useCallback)((function(VV) {
-           NV ? NV(VV) : console.error(VV)
-         }), [NV]),
-         Ee = (0, JV.useCallback)((function(VV) {
-           VV.preventDefault(), VV.persist(), Ge(VV), ye.current = [].concat(xe(ye.current), [VV.target]), HV(VV) && Promise.resolve(UV(VV)).then((function(eV) {
-             if (!KV(VV) || AV) {
-               var xV = eV.length,
-                 JV = xV > 0 && function(VV) {
-                   var eV = VV.files,
-                     xV = VV.accept,
-                     JV = VV.minSize,
-                     YV = VV.maxSize,
- ... (27 more removed lines; see GitHub link above)
+         }, HH.prototype.disconnect = function() {
+           this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
+         }, HH.prototype.gatherActive = function() {
+           var HH = this;
+           this.clearActive(), this.observations_.forEach((function(BH) {
+             BH.isActive() && HH.activeObservations_.push(BH)
```

#### 33. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L891-L1042` → after: `L771-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L771-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L771-L777) · [Before (L891-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L891-L1042)

```diff
-         }), [UV, wV, re, AV, RV, pV, yV, QV, nV, MV]),
-         Be = (0, JV.useCallback)((function(VV) {
-           VV.preventDefault(), VV.persist(), Ge(VV);
-           var eV = HV(VV);
-           if (eV && VV.dataTransfer) try {
-             VV.dataTransfer.dropEffect = "copy"
-           } catch (xV) {}
-           return eV && vV && vV(VV), !1
-         }), [vV, AV]),
-         je = (0, JV.useCallback)((function(VV) {
-           VV.preventDefault(), VV.persist(), Ge(VV);
-           var eV = ye.current.filter((function(VV) {
-               return CV.current && CV.current.contains(VV)
-             })),
-             xV = eV.indexOf(VV.target); - 1 !== xV && eV.splice(xV, 1), ye.current = eV, eV.length > 0 || (hV({
-             type: "setDraggedFiles",
- ... (136 more removed lines; see GitHub link above)
+         }, HH.prototype.broadcastActive = function() {
+           if (this.hasActive()) {
+             var HH = this.callbackCtx_,
+               BH = this.activeObservations_.map((function(HH) {
+                 return new PH(HH.target, HH.broadcastRect())
+               }));
+             this.callback_.call(HH, BH, HH), this.clearActive()
```

#### 34. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1044-L1111` → after: `L779-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L779-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L779-L796) · [Before (L1044-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L1044-L1111)

```diff
-         }), [CV, Te, Pe, Ae, Ne, Ee, Be, je, te, TV, PV, YV]),
-         Re = (0, JV.useCallback)((function(VV) {
-           VV.stopPropagation()
-         }), []),
-         ge = (0, JV.useMemo)((function() {
-           return function() {
-             var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               eV = VV.refKey,
-               xV = void 0 === eV ? "ref" : eV,
-               JV = VV.onChange,
-               YV = VV.onClick,
-               UV = ne(VV, ee);
-             return pe(pe({}, Qe({
-               accept: RV,
-               multiple: QV,
-               type: "file",
- ... (52 more removed lines; see GitHub link above)
+         }, HH.prototype.clearActive = function() {
+           this.activeObservations_.splice(0)
+         }, HH.prototype.hasActive = function() {
+           return this.activeObservations_.length > 0
+         }, HH
+       }(),
+       UH = "undefined" !== typeof WeakMap ? new WeakMap : new AH,
+       VH = function HH(BH) {
+         if (!(this instanceof HH)) throw new TypeError("Cannot call a class as a function.");
+         if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+         var LH = CH.getInstance(),
+           AH = new TH(BH, LH, this);
+         UH.set(this, AH)
+       };
+     ["observe", "unobserve", "disconnect"].forEach((function(HH) {
+       VH.prototype[HH] = function() {
+ ... (2 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L1113-L1115` → after: `L798-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/121.js#L798-L799) · [Before (L1113-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/121.js#L1113-L1115)

```diff
-     }
- 
-     function be() {}
+     }));
+     const OH = "undefined" !== typeof SH.ResizeObserver ? SH.ResizeObserver : VH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/122.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/122.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260)

#### 1. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122];
+ export const ids = [122, 706];
```

#### 2. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L469` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L4-L5) · [Before (L4-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L4-L469)

```diff
-   5517: (VV, eV, xV) => {
-     function JV(VV) {
-       return JV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
-         return typeof VV
-       } : function(VV) {
-         return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
-       }, JV(VV)
-     }
-     Object.defineProperty(eV, "__esModule", {
-       value: !0
-     }), eV.default = void 0;
-     var YV = ZV(xV(1146)),
-       UV = function(VV, eV) {
-         if (!eV && VV && VV.__esModule) return VV;
-         if (null === VV || "object" !== JV(VV) && "function" !== typeof VV) return {
-           default: VV
- ... (450 more removed lines; see GitHub link above)
+   5454: (HH, BH, LH) => {
+     var AH = LH(5462);
```

#### 3. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L512-L515` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L48-L51) · [Before (L512-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L512-L515)

```diff
-   5453: (VV, eV, xV) => {
-     VV.exports = xV(5461)()
-   },
-   5469: VV => {
+   5450: (HH, BH, LH) => {
+     HH.exports = LH(5454)()
+   },
+   5462: HH => {
```

#### 4. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L518` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L54) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L518)

```diff
-   5520: (VV, eV, xV) => {
+   7147: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L522-L529` → after: `L58-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L58-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L58-L146) · [Before (L522-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L522-L529)

```diff
-     var JV = function() {
-         if ("undefined" !== typeof Map) return Map;
- 
-         function VV(VV, eV) {
-           var xV = -1;
-           return VV.some((function(VV, JV) {
-             return VV[0] === eV && (xV = JV, !0)
-           })), xV
+     var AH = LH(1509),
+       rH = LH(1455),
+       SH = LH(1123),
+       hH = LH(7149),
+       tH = LH(7129),
+       zH = LH(7111),
+       CH = LH(1225);
+ 
+     function EH() {
+       const {
+         t: HH
+       } = (0, SH.B)(), BH = (0, AH.useNavigatePreserveSearch)();
+       return (0, tH.d)(), (0, CH.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, CH.jsx)("div", {
+           className: "ShaderPackPublishBack",
+ ... (73 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L531-L570` → after: `L148-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L148-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L148-L223) · [Before (L531-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L531-L570)

```diff
-         return function() {
-           function eV() {
-             this.__entries__ = []
-           }
-           return Object.defineProperty(eV.prototype, "size", {
-             get: function() {
-               return this.__entries__.length
-             },
-             enumerable: !0,
-             configurable: !0
-           }), eV.prototype.get = function(eV) {
-             var xV = VV(this.__entries__, eV),
-               JV = this.__entries__[xV];
-             return JV && JV[1]
-           }, eV.prototype.set = function(eV, xV) {
-             var JV = VV(this.__entries__, eV);
- ... (24 more removed lines; see GitHub link above)
+       }), [HH, BH]), {
+         isFavourite: HH => null === LH ? null : LH.has(HH),
+         toggle: function(BH) {
+           if (null === LH || hH.current.has(BH)) return;
+           hH.current.add(BH);
+           const AH = !LH.has(BH);
+           tH(BH, AH), (AH ? SH.d.favouriteShaderPack(HH, BH) : SH.d.unfavouriteShaderPack(HH, BH)).catch((HH => {
+             console.error("Failed to change a favourite shader pack", HH), tH(BH, !AH)
+           })).finally((() => {
+             hH.current.delete(BH)
+           }))
+         }
+       }
+     }
+   },
+   7111: (HH, BH, LH) => {
+ ... (60 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L572-L598` → after: `L225-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L225-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L225-L427) · [Before (L572-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L572-L598)

```diff
-     var pV = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
-       QV = "undefined" !== typeof MutationObserver,
-       nV = function() {
-         function VV() {
-           this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(VV, eV) {
-             var xV = !1,
-               JV = !1,
-               YV = 0;
- 
-             function UV() {
-               xV && (xV = !1, VV()), JV && QV()
-             }
- 
-             function pV() {
-               yV(UV)
-             }
- ... (11 more removed lines; see GitHub link above)
+ 
+     function WH(HH, BH) {
+       return HH.withFeatures.includes(BH) ? "with" : HH.withoutFeatures.includes(BH) ? "without" : null
+     }
+ 
+     function MH(HH) {
+       return null === HH ? "with" : "with" === HH ? "without" : null
+     }
+ 
+     function xH(HH) {
+       return "with" === HH ? "only" : null === HH ? "include" : void 0
+     }
+ 
+     function vH(HH, BH) {
+       const LH = WH(HH, BH),
+         AH = HH => HH.filter((HH => HH !== BH));
+ ... (187 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L646-L698` → after: `L430-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L430-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L430-L462) · [Before (L646-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L646-L698)

```diff
-       ZV = function(VV) {
-         return VV && VV.ownerDocument && VV.ownerDocument.defaultView || UV
-       },
-       vV = jV(0, 0, 0, 0);
- 
-     function rV(VV) {
-       return parseFloat(VV) || 0
-     }
- 
-     function kV(VV) {
-       for (var eV = [], xV = 1; xV < arguments.length; xV++) eV[xV - 1] = arguments[xV];
-       return eV.reduce((function(eV, xV) {
-         return eV + rV(VV["border-" + xV + "-width"])
-       }), 0)
-     }
- 
- ... (37 more removed lines; see GitHub link above)
+       SH = ["popular", "updated", "newest"],
+       hH = 3,
+       tH = 32,
+       zH = 300;
+ 
+     function CH(HH, BH) {
+       return HH.slice(0, BH).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const EH = 64,
+       XH = 512,
+       GH = 18e5;
+ 
+     function YH(HH) {
+       const BH = HH,
+         LH = null === BH || void 0 === BH ? void 0 : BH.files;
+       return "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.apiVersion) && "string" === typeof BH.name && (null === BH.author || "string" === typeof BH.author) && (void 0 === BH.keepCircleShadows || "boolean" === typeof BH.keepCircleShadows) && "object" === typeof … [truncated]
+ ... (17 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L702-L799` → after: `L466-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/122.js#L466-L471) · [Before (L702-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/122.js#L702-L799)

```diff
-       return {
-         x: VV,
-         y: eV,
-         width: xV,
-         height: JV
-       }
-     }
-     var qV = function() {
-         function VV(VV) {
-           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = jV(0, 0, 0, 0), this.target = VV
-         }
-         return VV.prototype.isActive = function() {
-           var VV = BV(this.target);
-           return this.contentRect_ = VV, VV.width !== this.broadcastWidth || VV.height !== this.broadcastHeight
-         }, VV.prototype.broadcastRect = function() {
-           var VV = this.contentRect_;
- ... (82 more removed lines; see GitHub link above)
+       return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
+     }
+ 
+     function UH(HH, BH, LH, AH) {
+       return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/123.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/123.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496)

#### 1. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123, 706];
+ export const ids = [123, 176];
```

#### 2. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L4-L54` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L4) · [Before (L4-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L4-L54)

```diff
-   5461: (VV, eV, xV) => {
-     var JV = xV(5469);
- 
-     function YV() {}
- 
-     function UV() {}
-     UV.resetWarningCache = YV, VV.exports = function() {
-       function VV(VV, eV, xV, YV, UV, yV) {
-         if (yV !== JV) {
-           var pV = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw pV.name = "Invariant Violation", pV
-         }
-       }
- 
-       function eV() {
-         return VV
- ... (35 more removed lines; see GitHub link above)
+   9611: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L58-L66` → after: `L8-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L8-L51) · [Before (L58-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L58-L66)

```diff
-     var JV = xV(1612),
-       YV = xV(1551),
-       UV = xV(1220),
-       yV = xV(7164),
-       pV = xV(7141),
-       QV = xV(7130),
-       nV = xV(1321);
- 
-     function wV() {
+     var AH = LH(1520),
+       rH = LH(15),
+       SH = LH(5069),
+       hH = LH(45),
+       tH = LH(1450);
+     var zH = LH(1998),
+       CH = LH(1509),
+       EH = LH(1352),
+       XH = LH(1123),
+       GH = LH(9615),
+       YH = LH(9619),
+       uH = LH(4991),
+       QH = LH(152),
+       WH = LH(1070),
+       MH = LH(18),
+       xH = LH(1188),
+ ... (28 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L69-L78` → after: `L54-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L54-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L54-L156) · [Before (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L69-L78)

```diff
-       } = (0, UV.A)(), eV = (0, JV.useNavigatePreserveSearch)();
-       return (0, pV.e)(), (0, nV.jsxs)("div", {
-         className: "ShaderPackPublishPage AnimFadeIn",
-         children: [(0, nV.jsx)("div", {
-           className: "ShaderPackPublishBack",
-           children: (0, nV.jsx)(YV.b, {
-             onClick: () => {
-               eV(QV.Y)
-             },
-             children: VV("shaderPackListing:backToPacks")
+       } = (0, XH.B)();
+       return (0, hH.useEffect)((() => {
+         jH.d.skipPlayWait()
+       }), []), (0, nH.jsx)(qH.m, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, nH.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [AH("customTexturePack:downloadPrompt"), (0, nH.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: AH("customTexturePack:authorWarning")
+           }), (0, nH.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: AH("customTexturePack:existingPackSaved")
+           })]
+         }),
+ ... (87 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L80-L87` → after: `L158-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L158-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L158-L243) · [Before (L80-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L80-L87)

```diff
-         }), (0, nV.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: VV("shaderPackListing:publishTitle")
-         }), (0, nV.jsx)(yV.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: VV => {
-             eV((0, QV.db)(VV.packId), {
-               replace: !0
+         })
+       }) : "error" === rH ? (0, nH.jsx)(qH.m, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: tH,
+         confirm: {
+           text: "customTexturePack:refreshPage",
+           onClick: () => {
+             window.location.reload()
+           }
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: EH
+         }
+       }) : "refused" === rH ? (0, nH.jsx)(qH.m, {
+ ... (70 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L90` → after: `L246-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L246-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L246-L573) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L90)

```diff
-         })]
+           return MH.k.AX("matchmakeAndPlayStepCompleted", {
+             step: QH.h.LOAD_REQUIRED_LIBS,
+             totalSubSteps: 1
+           }), (0, SH.matchmakeAndPlayMaybeUnloaded)(HH, BH, LH, AH, rH)
+         }(HH, BH, LH, tH, AH), EH = CH.isError() ? CH.asError() : null;
+         if (AH.aborted) return EH && uB(CH), zH.gameBridge.send("leaveGame", {
+           reloadPath: null
+         }), null;
+         if (null !== EH && void 0 !== EH && EH.debugResult.xB) return console.log("Join cancelled:", EH.message), null;
+         if (EH) return CH;
+         const {
+           gameNameWithVariation: XH,
+           lobbyName: GH
+         } = CH.getValue();
+         return GB(), (0, tB.K)().setGameViewShown(!0), tH.recordJoin(XH, GH), (0, TH.K)(), CH
+       }
+ ... (312 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L94` → after: `L577-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L577-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L577-L836) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L94)

```diff
-   7141: (VV, eV, xV) => {
+   5473: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rH
+     });
+     var AH = LH(1131);
+     async function rH(HH) {
+       const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === BH.status || 403 === BH.status) return null;
+       if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
+       return await BH.json()
+     }
+   },
+ ... (244 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L97-L99` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L839) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L97-L99)

```diff
-       g: () => rV,
-       j: () => ZV,
-       n: () => kV
+       g: () => zH
```

#### 9. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L101-L136` → after: `L841-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L841-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L841-L849) · [Before (L101-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L101-L136)

```diff
-     var JV = xV(62),
-       YV = xV(7132),
-       UV = xV(1603),
-       yV = xV(7130),
-       pV = xV(7147),
-       QV = xV(1168);
-     const nV = "shaderPackListingView",
-       wV = "shaderPackListingFilterOpen";
- 
-     function ZV() {
-       var VV;
-       const [eV, xV] = (0, pV.c)(nV, YV.L[0]);
-       return [null !== (VV = YV.L.find((VV => VV === eV))) && void 0 !== VV ? VV : YV.L[0], xV]
-     }
- 
-     function vV() {
- ... (20 more removed lines; see GitHub link above)
+     var AH = LH(317);
+ 
+     function rH(HH) {
+       if (!HH.startsWith("{")) return HH;
+       let BH;
+       try {
+         BH = JSON.parse(HH)
+       } catch {
+         return HH
```

#### 10. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L138-L271` → after: `L851-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L851-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L851-L866) · [Before (L138-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L138-L271)

```diff
-       return (0, JV.useEffect)((() => {
-         if (eV) return;
-         let xV = !1;
-         return UV.b.getFavouriteShaderPacks(VV).then((VV => {
-           xV || YV(new Set(VV))
-         })).catch((VV => {
-           console.error("Failed to get favourite shader packs", VV), xV || YV(new Set)
-         })), () => {
-           xV = !0
-         }
-       }), [VV, eV]), {
-         isFavourite: VV => null === xV ? null : xV.has(VV),
-         toggle: function(eV) {
-           if (null === xV || yV.current.has(eV)) return;
-           yV.current.add(eV);
-           const JV = !xV.has(eV);
- ... (118 more removed lines; see GitHub link above)
+       return function(HH) {
+         if (null === (0, AH.Pe)(HH)) return !1;
+         const {
+           params: BH
+         } = HH;
+         return void 0 === BH || "object" === typeof BH && null !== BH && Object.values(BH).every((HH => "string" === typeof HH))
+       }(BH) ? BH : HH
+     }
+     var SH = LH(1123),
+       hH = LH(1194);
+ 
+     function tH(HH) {
+       return (0, SH.u)(hH.g.get().getCurrentLanguageCode(), HH.translationKey, HH.params)
+     }
+ 
+     function zH(HH) {
```

#### 11. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L273-L470` → after: `L868-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L868-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/123.js#L868-L878) · [Before (L273-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/123.js#L273-L470)

```diff
-       (0, UV.k)(VV, tV, "explore" === eV.section ? null : eV.section), (0, UV.k)(VV, FV, eV.sort === NV ? null : eV.sort), (0, UV.k)(VV, TV, JV === XV ? null : JV), (0, UV.k)(VV, PV, eV.searchQuery), (0, UV.k)(VV, AV, null !== (xV = jV(eV.banned)) && void 0 !== xV ? xV : null), ( … [truncated]
-     }
- 
-     function GV(VV) {
-       const eV = new URLSearchParams;
-       return zV(eV, {
-         section: "explore",
-         sort: NV,
-         withFeatures: "strict" === VV ? [VV] : [VV, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${yV}?${eV.toString()}`
-     }
- 
- ... (182 more removed lines; see GitHub link above)
+       return "string" === typeof BH ? BH : tH(BH)
+     }
+ 
+     function CH(HH) {
+       const BH = rH(HH);
+       return "string" === typeof BH ? BH : tH({
+         translationKey: "moderation:kicked",
+         params: {
+           reason: tH(BH)
+         }
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/124.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/124.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c)

#### 1. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L4-L6)

```diff
-   9518: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       default: () => Fe
+   5473: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rH
```

#### 2. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L8-L635` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L8) · [Before (L8-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L8-L635)

```diff
-     var JV = xV(1625),
-       YV = xV(27),
-       UV = xV(5145),
-       yV = xV(62),
-       pV = xV(1542);
-     var QV = xV(2051),
-       nV = xV(1612),
-       wV = xV(1439),
-       ZV = xV(1220),
-       vV = xV(165),
-       rV = xV(206),
-       kV = xV(1099),
-       bV = xV(1117),
-       EV = xV(1252),
-       BV = xV(2517),
-       jV = xV(1603),
- ... (612 more removed lines; see GitHub link above)
+     var AH = LH(1131);
```

#### 3. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L637` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L10) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L637)

```diff
-       const eV = await fetch(`${JV.clientSideServerUrls.s3Url}/${VV}`, {
+       const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
```

#### 4. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L643` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L16) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L643)

```diff
-       if (!eV.ok) throw new Error(`Failed to download the texture pack (${eV.status})`);
+       if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
```

#### 5. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L647-L649` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L20-L22) · [Before (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L647-L649)

```diff
-   9541: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => yV
+   42361: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       gamePackSource: () => SH
```

#### 6. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L651-L653` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L24-L25) · [Before (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L651-L653)

```diff
-     var JV = xV(1397),
-       YV = xV(1252),
-       UV = xV(657);
+     var AH = LH(5473),
+       rH = LH(1502);
```

#### 7. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L656-L802` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/124.js#L28-L31) · [Before (L656-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/124.js#L656-L802)

```diff
-       return VV = function(VV, eV) {
-         var xV;
-         const JV = new URLSearchParams(eV),
-           YV = JV.get("lobby"),
-           UV = JV.get("vm"),
-           yV = null !== (xV = YV) && void 0 !== xV ? xV : VV.lobbyName,
-           pV = null !== UV && void 0 !== UV ? UV : VV.directJoinVmUrl;
-         if (yV === VV.lobbyName && pV === VV.directJoinVmUrl) return VV;
-         return {
-           ...VV,
-           lobbyName: yV,
-           directJoinVmUrl: pV
-         }
-       }(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), VV = function(VV) {
-         if ((0, UV.J)(VV.directJoinVmUrl)) return VV;
-         const eV = (0, YV.U)(VV.directJoinVmUrl);
- ... (131 more removed lines; see GitHub link above)
+       return {
+         packKey: async BH => (await rH.d.getGame(HH, BH, !0)).customTexturePackKey,
+         fetchPack: AH.b
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/125.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/125.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c)

#### 1. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L2)

```diff
- export const ids = [125];
+ export const ids = [124, 125];
```

#### 2. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L4)

```diff
-   5500: (VV, eV, xV) => {
+   5473: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L6-L9)

```diff
-       e: () => kV,
-       i: () => tV,
-       m: () => bV,
-       q: () => qV
+       b: () => rH
```

#### 4. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L11-L21` → after: `L8-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L8-L25) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L11-L21)

```diff
-     var JV = xV(62),
-       YV = xV(5508),
-       UV = xV(4795),
-       yV = xV(1446),
-       pV = xV(5529),
-       QV = xV(1146),
-       nV = xV.n(QV),
-       wV = xV(1439),
-       ZV = xV(1838),
-       vV = xV(5536),
-       rV = xV(1321);
+     var AH = LH(1131);
+     async function rH(HH) {
+       const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === BH.status || 403 === BH.status) return null;
+       if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
+       return await BH.json()
+     }
+   },
+   42361: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       gamePackSource: () => SH
+     });
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L24-L266` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L28-L31) · [Before (L24-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L24-L266)

```diff
-       let {
-         label: eV,
-         onClick: xV,
-         checked: JV,
-         circleInfoText: YV,
-         className: pV,
-         disabled: QV,
-         note: wV
-       } = VV;
-       return (0, rV.jsxs)("div", {
-         "aria-disabled": QV || void 0,
-         "data-pad-focusable": !0,
-         className: nV()("SettingBox CheckboxContainer", {
-           [pV]: pV,
-           SettingBoxDisabled: QV
-         }),
- ... (227 more removed lines; see GitHub link above)
+       return {
+         packKey: async BH => (await rH.d.getGame(HH, BH, !0)).customTexturePackKey,
+         fetchPack: AH.b
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L269` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L34) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L269)

```diff
-   7219: (VV, eV, xV) => {
+   54549: (HH, BH, LH) => {
```

#### 7. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L271` → after: `L36-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L36-L40) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L271)

```diff
-       default: () => IV
+       fetchGuestContext: () => GH,
+       guestJoinTarget: () => vH,
+       guestJoinWithPack: () => uH,
+       guestPackForGame: () => YH,
+       invalidateGuestTrafficCode: () => xH
```

#### 8. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L273-L300` → after: `L42-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L42-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L42-L49) · [Before (L273-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L273-L300)

```diff
-     var JV = xV(62),
-       YV = xV(1625),
-       UV = xV(7132),
-       yV = xV(1252),
-       pV = xV(375),
-       QV = xV(1643),
-       nV = xV(1408),
-       wV = xV(1612),
-       ZV = xV(1551),
-       vV = xV(1446),
-       rV = xV(1708),
-       kV = xV(2903),
-       bV = xV(3013),
-       EV = xV(5031),
-       BV = xV(1168),
-       jV = xV(1603),
- ... (12 more removed lines; see GitHub link above)
+     var AH = LH(1131),
+       rH = LH(1502),
+       SH = LH(81),
+       hH = LH(37341),
+       tH = LH(1070),
+       zH = LH(42075),
+       CH = LH(42361),
+       EH = LH(42027);
```

#### 9. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L302-L776` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L51-L52) · [Before (L302-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L302-L776)

```diff
-     function GV(VV) {
-       let {
-         details: eV,
-         owner: xV,
-         onChanged: YV
-       } = VV;
-       const {
-         t: yV
-       } = (0, tV.A)(), pV = (0, wV.useNavigatePreserveSearch)(), {
-         userContext: QV
-       } = (0, BV.d)(), [vV, rV] = (0, JV.useState)(!1), [kV, bV] = (0, JV.useState)(null), [EV, qV] = (0, JV.useState)(!1), {
-         packId: FV,
-         name: TV,
-         description: GV,
-         live: WV
-       } = eV;
- ... (459 more removed lines; see GitHub link above)
+     function XH() {
+       if (SH.featureFlags.useTurnstile) throw new zH.TurnstilePageError
```

#### 10. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L780-L852` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L56) · [Before (L780-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L780-L852)

```diff
-       var VV;
-       const {
-         t: eV
-       } = (0, tV.A)(), xV = (0, wV.useNavigatePreserveSearch)(), {
-         packId: UV
-       } = (0, YV.A)(), {
-         userContext: yV,
-         isUserContextUpdating: pV
-       } = (0, BV.d)(), [vV, kV] = (0, JV.useState)(null), [bV, qV] = (0, JV.useState)(null), [FV, TV] = (0, JV.useState)(0), PV = (0, JV.useRef)(0);
- 
-       function AV() {
-         var VV;
-         null !== (VV = (0, wV.getPreviousLocation)()) && void 0 !== VV && VV.startsWith(XV.Y) ? xV(-1) : xV(XV.Y)
-       }(0, EV.d)(AV), (0, CV.e)(), (0, JV.useEffect)((() => {
-         if (pV || void 0 === UV) return;
-         const VV = ++PV.current;
- ... (57 more removed lines; see GitHub link above)
+       return (0, tH.fetchAnonymousUserContext)(!0).catch((HH => (console.warn("the guest context didn't load", HH), null)))
```

#### 11. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L854-L874` → after: `L58-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L58-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L58-L65) · [Before (L854-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L854-L874)

```diff
- 
-     function dV(VV) {
-       let {
-         item: eV,
-         favourites: xV,
-         packUse: JV
-       } = VV;
-       const YV = xV.isFavourite(eV.packId);
-       return (0, MV.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [qV.featureFlags.settings.canUseShaderPacks && (0, MV.jsx)(SV, {
-           packUse: JV
-         }), (0, MV.jsx)(ZV.s, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             xV.toggle(eV.packId)
- ... (5 more removed lines; see GitHub link above)
+     async function YH(HH, BH, LH, AH) {
+       try {
+         const rH = await LH;
+         if (null === rH) return void console.warn(`the texture pack step for ${HH} has no guest context: the pack in play stays`);
+         await BH.packForGame(HH, (0, CH.gamePackSource)(rH), AH)
+       } catch (rH) {
+         console.warn(`the texture pack step for ${HH} failed: the pack in play stays`, rH)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L876-L966` → after: `L67-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L67-L70) · [Before (L876-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L876-L966)

```diff
- 
-     function OV(VV) {
-       let {
-         item: eV,
-         ownerPreview: xV,
-         bloxdhubSlug: JV,
-         actions: YV
-       } = VV;
-       const {
-         t: pV
-       } = (0, tV.A)(), QV = (0, bV.s)(), nV = null === JV ? null : (0, UV.g)(JV);
-       return (0, MV.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [eV.description && (0, MV.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: eV.description
- ... (75 more removed lines; see GitHub link above)
+     async function uH(HH, BH, LH, AH) {
+       XH();
+       const rH = GH();
+       return await LH(((BH, LH) => YH(HH, BH, rH, LH))), vH(HH, BH, AH(), await rH)
```

#### 13. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L968-L995` → after: `L72-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L72-L80) · [Before (L968-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L968-L995)

```diff
- 
-     function Ve(VV) {
-       let {
-         label: eV,
-         time: xV,
-         now: JV
-       } = VV;
-       const {
-         t: YV,
-         selectedLanguage: UV
-       } = (0, tV.A)(), yV = new Date(xV);
-       let QV = yV.toLocaleDateString();
-       if (JV - xV <= 30 * pV.e) {
-         const VV = (0, tV.m)(UV.code, "shaderPackListing:timeAgo");
-         QV = YV("shaderPackListing:timeAgo", {
-           time: (0, pV.bb)(VV, xV, JV)
- ... (12 more removed lines; see GitHub link above)
+     let QH = null,
+       WH = null;
+     async function MH() {
+       if ((null === QH || QH.hasExpired()) && (WH ??= (0, tH.fetchAnonymousUserContext)(!0).then((HH => {
+           QH = HH
+         })).finally((() => {
+           WH = null
+         })), await WH), null === QH) throw new Error("no guest context to post as");
+       return QH.getMetricsCookies()
```

#### 14. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L1088-L1089` → after: `L84-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L84-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/125.js#L84-L108) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/125.js#L1088-L1089)

```diff
-       let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
+       await (null === (HH = QH) || void 0 === HH ? void 0 : HH.invalidateTrafficCode())
+     }
+     async function vH(HH, BH, LH) {
+       let SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+       XH();
+       const zH = null !== SH && void 0 !== SH ? SH : await (0, tH.fetchAnonymousUserContext)(!0);
+       if (QH = zH, zH.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
+       const CH = await rH.d.matchmakePlayer(zH, BH, HH, (0, hH.e)()),
+         GH = performance.now();
+       if (!("gameServerHost" in CH)) throw new Error(`matchmaking refused: ${CH.failReason}`);
+       const YH = AH.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(CH.gameServerHost);
+       if (YH.isError()) throw new Error(`no socket URL for ${CH.gameServerHost}: ${YH.asError().message}`);
+       const uH = {
+         endpoint: YH.getValue(),
+         gameNameWithVariation: CH.gameNameWithVariation,
+         lobbyName: CH.lobbyName
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/126.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/126.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b)

#### 1. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L4)

```diff
-   5564: (VV, eV, xV) => {
+   5478: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L7` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L8-L9) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L7)

```diff
-       g: () => nV
+       f: () => QH,
+       i: () => vH
```

#### 3. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L9-L18` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L11-L21) · [Before (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L9-L18)

```diff
-     var JV = xV(62),
-       YV = xV(1551),
-       UV = xV(1220),
-       yV = xV(99),
-       pV = xV(3561),
-       QV = xV(1321);
- 
-     function nV() {
-       return !(0, yV.isMobile)()
-     }
+     var AH = LH(45),
+       rH = LH(5485),
+       SH = LH(4745),
+       hH = LH(1365),
+       tH = LH(5506),
+       zH = LH(1038),
+       CH = LH.n(zH),
+       EH = LH(1352),
+       XH = LH(1789),
+       GH = LH(5513),
+       YH = LH(1225);
```

#### 4. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L23-L24` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L31) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L23-L24)

```diff
-         openFolderPicker: xV,
-         onFiles: yV
+         note: EH
```

#### 5. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L30-L50` → after: `L34-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L34-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L34-L65) · [Before (L30-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L30-L50)

```diff
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
-         children: [(0, QV.jsx)("input", {
-           ref: ZV,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(VV) {
-             const eV = Array.from(VV.target.files);
-             VV.target.value = "", yV(eV)
-           }
-         }), nV() && (0, QV.jsx)(YV.f, {
-           disabled: eV,
-           onClick: xV,
-           children: wV("general:chooseFolder")
-         }), (0, QV.jsx)(YV.f, {
- ... (5 more removed lines; see GitHub link above)
+         "aria-disabled": zH || void 0,
+         "data-pad-focusable": !0,
+         className: CH()("SettingBox CheckboxContainer", {
+           [tH]: tH,
+           SettingBoxDisabled: zH
+         }),
+         onClick: () => {
+           zH || LH(!AH)
+         },
+         children: [(0, YH.jsxs)("div", {
+           className: "CheckboxInputAndText",
+           children: [(0, YH.jsx)("label", {
+             className: "CheckboxClickableLabel",
+             children: (0, YH.jsx)(SH.d, {
+               className: "SettingsCheckbox",
+               checked: AH,
+ ... (16 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L72` → after: `L71-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L71-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L71-L133) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L72)

```diff
-       return null === VV.file ? null : VV.line > 0 ? `${VV.file}:${VV.line}` : VV.file
+       let {
+         name: BH,
+         onChange: LH,
+         min: rH,
+         max: SH,
+         step: tH,
+         initValue: zH,
+         circleInfoText: EH,
+         format: XH,
+         className: GH,
+         padStep: uH,
+         disabled: QH = !1,
+         selectableMax: WH,
+         cappedNote: MH,
+         note: vH,
+         onChangeComplete: PH
+ ... (47 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L76-L79` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L138-L139) · [Before (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L76-L79)

```diff
-       const eV = new Map(VV.map((VV => [QV(VV).join("."), VV])));
-       if (0 === eV.size) return [];
-       const xV = wV([...eV.values()]);
-       return 0 === xV[0].length ? [] : xV
+       var BH;
+       return (null !== (BH = String(HH).split(".")[1]) && void 0 !== BH ? BH : "").length
```

#### 8. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L83` → after: `L143-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L143-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L143-L232) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L83)

```diff
-       return YV.map((eV => eV(VV)))
+       let {
+         value: BH,
+         min: LH,
+         max: SH,
+         step: hH,
+         onChange: tH,
+         orientation: zH,
+         reverse: CH,
+         setIsChanging: EH,
+         tooltip: XH,
+         labels: uH,
+         handleLabel: QH,
+         format: xH,
+         onChangeStart: vH,
+         onChangeComplete: PH,
+         padStep: TH,
+ ... (74 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L85-L98` → after: `L234-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L234-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L234-L243) · [Before (L85-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L85-L98)

```diff
-     const nV = YV.map((VV => new Set(JV.g.map(VV)).size));
- 
-     function wV(VV) {
-       const eV = YV.map((eV => new Set(VV.map(eV)))),
-         xV = eV.reduce(((VV, eV) => VV * eV.size), 1),
-         JV = eV.every(((VV, eV) => 1 === VV.size || VV.size === nV[eV]));
-       if (xV === VV.length && JV) return [YV.filter(((VV, xV) => 1 === eV[xV].size)).map((eV => eV(VV[0])))];
-       let UV = null;
-       for (let yV = 0; yV < YV.length; yV++) {
-         if (1 === eV[yV].size) continue;
-         const xV = ZV(VV, YV[yV]).flatMap(wV);
-         (null === UV || xV.length < UV.length) && (UV = xV)
-       }
-       return UV
+     async function vH() {
+       const HH = EH.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await HH.getResult() && (0, XH.reloadBloxd)()
```

#### 10. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L101-L108` → after: `L246-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L246-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L246-L268) · [Before (L101-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L101-L108)

```diff
-     function ZV(VV, eV) {
-       const xV = new Map;
-       for (const YV of VV) {
-         var JV;
-         const VV = eV(YV);
-         xV.set(VV, [...null !== (JV = xV.get(VV)) && void 0 !== JV ? JV : [], YV])
-       }
-       return [...xV.values()]
+     function PH(HH) {
+       let {
+         label: BH,
+         options: LH,
+         value: AH,
+         onChange: rH,
+         circleInfoText: SH
+       } = HH;
+       return (0, YH.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, YH.jsxs)("div", {
+           className: "SliderText",
+           children: [BH, SH && (0, YH.jsx)(hH.e, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: SH
+           })]
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L111` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L271) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L111)

```diff
-   7164: (VV, eV, xV) => {
+   7216: (HH, BH, LH) => {
```

#### 12. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L113` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L273) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L113)

```diff
-       ShaderPackPublishForm: () => qV
+       default: () => iH
```

#### 13. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L115-L121` → after: `L275-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L275-L277) · [Before (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L115-L121)

```diff
-     var JV = xV(62),
-       YV = xV(7132),
-       UV = xV(212),
-       yV = xV(5561),
-       pV = xV(1414),
-       QV = xV(1551),
-       nV = xV(1772),
+     var AH = LH(45),
+       rH = LH(1520),
+       SH = LH(7114),
```

#### 14. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L123-L130` → after: `L279-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L279-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L279-L302) · [Before (L123-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L123-L130)

```diff
-       ZV = xV(7169),
-       vV = xV(7174),
-       rV = xV(1603),
-       kV = xV(1220),
-       bV = xV(7176),
-       EV = xV(7208),
-       BV = xV(7130),
-       jV = xV(1321);
+       tH = LH(317),
+       zH = LH(1543),
+       CH = LH(1313),
+       EH = LH(1509),
+       XH = LH(1455),
+       GH = LH(1365),
+       YH = LH(1631),
+       uH = LH(2833),
+       QH = LH(2968),
+       WH = LH(4961),
+       MH = LH(1061),
+       xH = LH(1502),
+       vH = LH(81),
+       PH = LH(1123);
+     const TH = LH.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
+     var UH = LH(1038),
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L135-L136` → after: `L306-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L306-L308) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L135-L136)

```diff
-         existing: qV,
-         onPublished: FV
+         details: BH,
+         owner: LH,
+         onChanged: rH
```

#### 16. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L140-L163` → after: `L312-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L312-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L312-L328) · [Before (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L140-L163)

```diff
-       } = (0, kV.A)(), {
-         userContext: AV,
-         isUserContextUpdating: NV
-       } = (0, wV.d)(), [XV, MV] = (0, JV.useState)(null), [zV, GV] = (0, JV.useState)(0), [WV, RV] = (0, JV.useState)(null !== (eV = null === qV || void 0 === qV ? void 0 : qV.name) && void 0 !== eV ? eV : ""), gV = (0, JV.useRef)(WV), DV = (0, JV.useRef)(""), iV = VV => {
-         gV.current = VV, RV(VV)
-       }, [CV, aV] = (0, JV.useState)(null !== (xV = null === qV || void 0 === qV ? void 0 : qV.description) && void 0 !== xV ? xV : ""), oV = (0, JV.useRef)(CV), cV = (0, JV.useRef)(""), hV = VV => {
-         oV.current = VV, aV(VV)
-       }, [lV, LV] = (0, JV.useState)(!1), {
-         loading: fV,
-         error: mV,
-         setError: KV,
-         onFiles: HV
-       } = (0, vV.c)((async VV => {
-         const eV = await (0, bV.loadPageShaderPackCompiler)();
-         if (!eV) return void KV(PV("shaderPack:compilerUnavailable"));
-         const xV = await (0, EV.d)(eV, VV.files);
- ... (8 more removed lines; see GitHub link above)
+       } = (0, PH.B)(), tH = (0, EH.useNavigatePreserveSearch)(), {
+         userContext: zH
+       } = (0, MH.e)(), [GH, YH] = (0, AH.useState)(!1), [uH, QH] = (0, AH.useState)(null), [WH, vH] = (0, AH.useState)(!1), {
+         packId: TH,
+         name: UH,
+         description: IH,
+         live: fH
+       } = BH;
+       async function lH(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
+         YH(!0), QH(null);
+         try {
+           await HH(), BH()
+         } catch (LH) {
+           console.error("Failed to change a shader pack", LH), QH((0, kH.s)(LH, hH, "shaderPackListing:ownerActionFailed"))
+         } finally {
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L165-L186` → after: `L330-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L330-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L330-L342) · [Before (L165-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L165-L186)

```diff
-       })), uV = !NV && !AV.isLoggedIn() && !UV.b.offlineMode, sV = WV.trim(), SV = sV.length < YV.H, IV = null !== XV && !1 !== (null === (ZV = XV.validation) || void 0 === ZV ? void 0 : ZV.ok) && !fV && !SV && !uV && !NV;
-       return (0, jV.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, jV.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: qV ? PV("shaderPackListing:uploadIntro", {
-             minutes: String(YV.O / 6e4)
-           }) : PV("shaderPackListing:publishIntro")
-         }), (0, jV.jsx)(TV, {}), uV && (0, jV.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: PV("shaderPackListing:publishNeedsLogin")
-         }), (0, jV.jsx)(vV.b, {
-           busy: fV,
-           disabled: fV || lV,
-           onFiles: VV => {
-             MV(null), HV(VV)
- ... (6 more removed lines; see GitHub link above)
+       }
+       const KH = (0, kH.p)(zH);
+       return (0, mH.jsxs)("section", {
+         className: "ShaderPackOwnerPanel",
+         children: [(0, mH.jsx)("h2", {
+           className: "ShaderPackSectionTitle",
+           children: hH("general:manage")
+         }), (0, kH.R)(LH, !(null === fH || void 0 === fH || !fH.renderId), Date.now(), hH).map((HH => (0, mH.jsxs)("div", {
+           className: VH()("ShaderPackOwnerNotice", {
+             Warning: "warning" === HH.tone
+           }),
+           children: [(0, mH.jsx)(OH.c, {
+             name: "warning" === HH.tone ? "triangle-exclamation" : "circle-info"
```

#### 18. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L188-L192` → after: `L344-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L344-L346) · [Before (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L188-L192)

```diff
-             className: "ShaderPackPublishPackSize",
-             children: [PV("shaderPackListing:sizeValue", {
-               kilobytes: String((0, BV.T)(XV.sourceBytes))
-             }), " \xb7", " ", PV("shaderPackListing:filesValue", {
-               files: String(XV.pack.files.length)
+             children: [HH.text, HH.detail && (0, mH.jsx)("pre", {
+               className: "ShaderPackOwnerNoticeDetail",
+               children: HH.detail
```

#### 19. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L197-L223` → after: `L349-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L349-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L349-L354) · [Before (L197-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L197-L223)

```diff
-         }), !qV && (0, jV.jsxs)(jV.Fragment, {
-           children: [(0, jV.jsxs)("label", {
-             className: "ShaderPackPublishField",
-             children: [(0, jV.jsx)("span", {
-               children: PV("general:name")
-             }), (0, jV.jsx)(nV.d, {
-               className: "ShaderPackPublishInput",
-               defaultValue: WV,
-               maxLength: YV.D,
-               onValueChange: iV
-             }, zV), XV && SV && (0, jV.jsx)("span", {
-               className: "ShaderPackPublishHint",
-               children: PV("shaderPackListing:nameTooShort", {
-                 min: String(YV.H)
-               })
-             })]
- ... (11 more removed lines; see GitHub link above)
+         }, HH.text))), BH.ban && (0, mH.jsxs)("div", {
+           className: "ShaderPackOwnerNotice Warning",
+           children: [(0, mH.jsx)(OH.c, {
+             name: "ban"
+           }), (0, mH.jsxs)("div", {
+             children: ["Banned by ", BH.ban.byName, " on ", new Date(BH.ban.at).toLocaleString()]
```

#### 20. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L226` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L357) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L226)

```diff
-           className: "ShaderPackPublishNote Error",
+           className: "ShaderPackOwnerError",
```

#### 21. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L228-L267` → after: `L359-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L359-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L359-L463) · [Before (L228-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L228-L267)

```diff
-         }), (0, jV.jsxs)(QV.m, {
-           className: "ShaderPackPublishButton",
-           disabled: !IV,
-           loading: lV,
-           onClick: () => {
-             !async function() {
-               var VV;
-               if (!XV) return;
-               const {
-                 name: eV,
-                 description: xV
-               } = null !== qV && void 0 !== qV ? qV : {
-                 name: sV,
-                 description: CV.trim()
-               }, JV = {
-                 packId: null !== (VV = null === qV || void 0 === qV ? void 0 : qV.packId) && void 0 !== VV ? VV : null,
- ... (24 more removed lines; see GitHub link above)
+         }), (0, mH.jsxs)("div", {
+           className: "ShaderPackOwnerActions",
+           children: [(0, mH.jsxs)(XH.W, {
+             disabled: GH,
+             onClick: () => {
+               !async function() {
+                 const HH = await bH.NotificationProvider.showInputPopup({
+                   title: "shaderPackListing:renameTitle",
+                   initialValue: UH,
+                   maxLength: SH.F,
+                   submitText: "general:save",
+                   validate: HH => HH.trim().length < SH.H ? hH("shaderPackListing:nameTooShort", {
+                     min: String(SH.H)
+                   }) : null
+                 }).getResult();
+                 "notificationTornDown" !== HH && "submit" === (null === HH || void 0 === HH ? void 0 : HH.type) && HH.value.trim() !== UH && await lH((() => xH.d.updateShaderPack(zH, {
+ ... (89 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L274` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L478) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L274)

```diff
-         picked: eV
+         item: BH
```

#### 23. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L278-L279` → after: `L482-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L482-L488) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L278-L279)

```diff
-       } = (0, kV.A)(), {
-         validation: JV
+       } = (0, PH.B)(), [rH] = (0, qH.i)(), [hH, tH] = (0, AH.useState)(rH), [zH, CH] = (0, AH.useState)(!1), [EH, XH] = (0, AH.useState)(!1), {
+         s3Url: GH
+       } = eH.clientSideServerUrls, {
+         width: YH,
+         height: uH
+       } = SH.w.large, QH = (0, SH.x)(GH, BH, hH, "large"), {
+         renderVersion: WH
```

#### 24. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L281-L298` → after: `L490-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L490-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L490-L540) · [Before (L281-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L281-L298)

```diff
-       return null === JV ? (0, jV.jsx)("div", {
-         className: "ShaderPackPublishNote",
-         children: xV("shaderPackListing:publishUnchecked")
-       }) : JV.ok ? (0, jV.jsxs)(jV.Fragment, {
-         children: [(0, jV.jsxs)("div", {
-           className: "ShaderPackPublishNote Ready",
-           children: [(0, jV.jsx)(pV.b, {
-             name: "circle-check"
-           }), " ", xV("shaderPackListing:publishReady")]
-         }), JV.offInStrict.length > 0 && (0, jV.jsxs)(jV.Fragment, {
-           children: [(0, jV.jsxs)("div", {
-             className: "ShaderPackPublishNote Warning",
-             children: [(0, jV.jsx)(pV.b, {
-               name: "triangle-exclamation"
-             }), " ", xV("shaderPack:offInStrict")]
-           }), (0, jV.jsx)(ZV.d, {
- ... (2 more removed lines; see GitHub link above)
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackPreviews",
+         children: [(0, mH.jsx)(NH.d, {
+           selected: hH,
+           onSelect: HH => {
+             tH(HH), CH(!1)
+           },
+           imageUrl: HH => (0, SH.x)(GH, BH, HH, "thumb")
+         }), (0, mH.jsxs)("div", {
+           className: "ShaderPackPreviewStage",
+           children: [!zH && (0, mH.jsxs)("button", {
+             type: "button",
+             className: "ShaderPackPreviewMain",
+             title: null === WH ? void 0 : LH("shaderPackListing:fullSize"),
+             disabled: null === WH,
+             onClick: () => {
+ ... (35 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L300-L310` → after: `L542-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L542-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L542-L548) · [Before (L300-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L300-L310)

```diff
-         })]
-       }) : (0, jV.jsxs)(jV.Fragment, {
-         children: [(0, jV.jsxs)("div", {
-           className: "ShaderPackPublishNote Error",
-           children: [(0, jV.jsx)(pV.b, {
-             name: "triangle-exclamation"
-           }), " ", xV("shaderPackListing:publishHasErrors")]
-         }), (0, jV.jsx)(ZV.d, {
-           diagnostics: JV.errors,
-           more: JV.moreErrors,
-           t: xV
+         }), EH && (0, mH.jsx)(jH, {
+           fullUrl: (0, SH.x)(GH, BH, hH, "full"),
+           largeUrl: QH,
+           alt: LH(kH._[hH]),
+           onClose: () => {
+             XH(!1)
+           }
```

#### 26. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L316-L331` → after: `L553-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L553-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L553-L584) · [Before (L316-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L316-L331)

```diff
-     function TV() {
-       const {
-         t: VV
-       } = (0, kV.A)(), [eV, xV] = VV("shaderPackListing:bloxdhubHelp", {
-         site: FV
-       }).split(FV);
-       return (0, jV.jsxs)("p", {
-         className: "ShaderPackPublishIntro",
-         children: [eV, (0, jV.jsx)("a", {
-           className: "ShaderPackPublishLink",
-           href: YV.h,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: YV.d
-         }), xV]
-       })
+     function jH(HH) {
+       let {
+         fullUrl: BH,
+         largeUrl: LH,
+         alt: rH,
+         onClose: SH
+       } = HH;
+       const hH = (0, AH.useRef)(null);
+       return (0, KH.r)("popup", hH, SH), (0, AH.useEffect)((() => {
+         function HH(HH) {
+           "Escape" === HH.key && (HH.stopPropagation(), SH())
+         }
+         return window.addEventListener("keydown", HH, !0), () => {
+           window.removeEventListener("keydown", HH, !0)
+         }
+       }), [SH]), (0, fH.createPortal)((0, mH.jsxs)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L362` → after: `L589-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L589-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L589-L670) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L362)

```diff
-       return VV === JV
+       let {
+         item: BH,
+         packUrl: LH,
+         baselineUrl: rH
+       } = HH;
+       const {
+         t: hH
+       } = (0, PH.B)(), [tH, zH] = (0, AH.useState)(50), CH = (0, AH.useRef)(!1), EH = (0, AH.useRef)(null), {
+         width: XH,
+         height: GH
+       } = SH.w.large;
+ 
+       function YH(HH) {
+         zH((BH => (0, lH.f)(BH + HH, 0, 100)))
+       }
+ 
+ ... (66 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L366` → after: `L674-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L674-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L674-L687) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L366)

```diff
-       return [...VV.features]
+       let {
+         side: BH,
+         onClick: LH,
+         children: AH
+       } = HH;
+       return (0, mH.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${BH}`,
+         onClick: LH,
+         children: (0, mH.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: AH
+         })
+       })
```

#### 29. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L368-L370` → after: `L689-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L689-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L689-L699) · [Before (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L368-L370)

```diff
-     const yV = 262144,
-       pV = 256,
-       QV = 256;
+     var wH = LH(5478),
+       ZH = LH(293),
+       dH = LH(7209);
+     const aH = {
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
```

#### 30. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L373-L388` → after: `L702-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L702-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L702-L742) · [Before (L373-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L373-L388)

```diff
-       if ("object" !== typeof VV || null === VV || Array.isArray(VV)) return "The pack has no files.";
-       const eV = [];
-       for (const [xV, JV] of Object.entries(VV)) {
-         if ("string" !== typeof JV) return `${xV} isn't text.`;
-         eV.push({
-           path: xV,
-           source: JV
-         })
-       }
-       return eV.sort(((VV, eV) => ZV(VV.path, eV.path))),
-         function(VV) {
-           if (0 === VV.length) return "The pack has no .wgsl files.";
-           if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
-           const eV = new Set;
-           for (const {
-               path: xV
+       const {
+         userContext: BH
+       } = (0, MH.e)(), [rH, SH] = (0, AH.useState)(null), [hH, tH] = (0, AH.useState)(!1), [zH, CH] = (0, AH.useState)(!1), [EH, XH] = (0, AH.useState)(null), GH = null === HH || void 0 === HH ? void 0 : HH.packId, YH = null === HH || void 0 === HH ? void 0 : HH.sourceHash;
+       return (0, AH.useEffect)((() => {
+         if (tH(!1), XH(null), void 0 === GH) return;
+         let HH = !1;
+         return Promise.all([(0, vH.hasUsableWebGpuAdapter)(), (0, dH.e)()]).then((BH => {
+           let [LH, AH] = BH;
+           var rH;
+           HH || (SH(LH), tH((null === AH || void 0 === AH || null === (rH = AH.listing) || void 0 === rH ? void 0 : rH.packId) === GH && AH.listing.sourceHash === YH))
+         })).catch((BH => {
+           console.error("Failed to check whether this shader pack can be used", BH), HH || SH(!1)
+         })), () => {
+           HH = !0
+         }
+       }), [GH, YH]), {
+ ... (25 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L390-L397` → after: `L744-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L744-L746) · [Before (L390-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L390-L397)

```diff
-             of VV) {
-             const VV = rV(xV);
-             if (null !== VV) return VV;
-             if (eV.has(xV)) return `The pack has two files at ${xV}.`;
-             eV.add(xV)
-           }
-           return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
-         }(eV) ?? eV
+           }(HH)
+         }
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L401-L403` → after: `L750-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L750-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L750-L778) · [Before (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L401-L403)

```diff
-       const eV = {};
-       for (const xV of VV) eV[xV.path] = xV.source;
-       return eV
+       let {
+         packUse: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, PH.B)(), {
+         webGpuUsable: AH,
+         inUse: rH,
+         busy: SH,
+         errorKey: hH,
+         use: tH
+       } = BH;
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, mH.jsxs)(XH.u, {
+           disabled: !0 !== AH || rH,
+ ... (13 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L406-L407` → after: `L781-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L781-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L781-L854) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L406-L407)

```diff
-     function ZV(VV, eV) {
-       return VV < eV ? -1 : VV > eV ? 1 : 0
+     function iH() {
+       var HH;
+       const {
+         t: BH
+       } = (0, PH.B)(), LH = (0, EH.useNavigatePreserveSearch)(), {
+         packId: SH
+       } = (0, rH.A)(), {
+         userContext: hH,
+         isUserContextUpdating: tH
+       } = (0, MH.e)(), [GH, uH] = (0, AH.useState)(null), [QH, vH] = (0, AH.useState)(null), [TH, UH] = (0, AH.useState)(0), VH = (0, AH.useRef)(0);
+ 
+       function OH() {
+         var HH;
+         null !== (HH = (0, EH.getPreviousLocation)()) && void 0 !== HH && HH.startsWith(kH.P) ? LH(-1) : LH(kH.P)
+       }(0, WH.c)(OH), (0, qH.d)(), (0, AH.useEffect)((() => {
+         if (tH || void 0 === SH) return;
+ ... (58 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L411-L417` → after: `L858-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L858-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L858-L876) · [Before (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L411-L417)

```diff
-       const eV = new TextEncoder;
-       let xV = 0;
-       for (const {
-           source: JV
-         }
-         of VV) xV += eV.encode(JV).byteLength;
-       return xV
+       let {
+         item: BH,
+         favourites: LH,
+         packUse: AH
+       } = HH;
+       const rH = LH.isFavourite(BH.packId);
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [vH.featureFlags.settings.canUseShaderPacks && (0, mH.jsx)(JH, {
+           packUse: AH
+         }), (0, mH.jsx)(XH.C, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             LH.toggle(BH.packId)
+           },
+           isLiked: !0 === rH,
+ ... (3 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L421-L424` → after: `L880-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L880-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L880-L968) · [Before (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L421-L424)

```diff
-       if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
-       if (VV.length > QV) return `A file path is over ${QV} characters.`;
-       if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
-       return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
+       let {
+         item: BH,
+         ownerPreview: LH,
+         bloxdhubSlug: AH,
+         actions: rH
+       } = HH;
+       const {
+         t: tH
+       } = (0, PH.B)(), zH = (0, QH.s)(), CH = null === AH ? null : (0, SH.g)(AH);
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [BH.description && (0, mH.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: BH.description
+         }), (0, mH.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+ ... (73 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L428-L442` → after: `L971-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L971-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L971-L986) · [Before (L428-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L428-L442)

```diff
-     function bV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const JV = new Map;
-       eV.forEach(((VV, eV) => {
-         let {
-           numAnimStates: xV,
-           animStartIdx: YV
-         } = VV;
-         for (let UV = 1; UV < xV; UV++) JV.set(YV + UV - 1, eV)
-       }));
-       const YV = Object.entries(VV),
-         UV = new Map;
-       for (const [bV, EV] of YV) {
-         const VV = kV.exec(bV);
-         "1" === VV?.[2] && UV.set(VV[1], EV + 1)
+     function HB(HH) {
+       let {
+         label: BH,
+         time: LH,
+         now: AH
+       } = HH;
+       const {
+         t: rH,
+         selectedLanguage: SH
+       } = (0, PH.B)(), hH = new Date(LH);
+       let zH = hH.toLocaleDateString();
+       if (AH - LH <= 30 * tH.j) {
+         const HH = (0, PH.n)(SH.code, "shaderPackListing:timeAgo");
+         zH = rH("shaderPackListing:timeAgo", {
+           time: (0, tH._)(HH, LH, AH)
+         })
```

#### 37. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L444-L503` → after: `L988-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L988-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L988-L1076) · [Before (L444-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L444-L503)

```diff
-       const yV = VV => {
-           const eV = kV.exec(VV);
-           return eV && UV.has(eV[1]) ? {
-             root: eV[1],
-             rotation: Number(eV[2]) - 1
-           } : null
-         },
-         pV = new Set(YV.map((VV => {
-           let [eV] = VV;
-           return yV(eV)?.root ?? eV
-         }))),
-         QV = (VV, xV) => {
-           const JV = VV.replace(/_?0$/, "");
-           return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
-         },
-         nV = new Map;
- ... (44 more removed lines; see GitHub link above)
+       return (0, mH.jsx)(GH.g, {
+         tooltipInner: hH.toLocaleString(),
+         children: (0, mH.jsxs)("div", {
+           children: [(0, mH.jsx)("dt", {
+             children: BH
+           }), (0, mH.jsx)("dd", {
+             children: zH
+           })]
+         })
+       })
+     }
+   },
+   5506: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+ ... (73 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L505-L524` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/126.js#L1078) · [Before (L505-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/126.js#L505-L524)

```diff
-         } else vV.set(xV, bV + 1)
-       }
-       for (const kV of vV.keys()) rV.delete(kV);
-       for (const [kV, bV] of xV) {
-         const VV = vV.get(bV);
-         void 0 === VV || vV.has(kV) || (vV.set(kV, VV), rV.delete(kV))
-       }
-       return {
-         named: [...vV].sort(((VV, eV) => {
-           let [xV] = VV, [JV] = eV;
-           return xV < JV ? -1 : xV > JV ? 1 : 0
-         })).map((VV => {
-           let [eV, xV] = VV;
-           return {
-             name: eV,
-             id: xV
- ... (4 more removed lines; see GitHub link above)
+         }), [HH])
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/127.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/127.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009)

#### 1. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127, 130, 151, 152];
+ export const ids = [127];
```

#### 2. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L4)

```diff
-   5556: (VV, eV, xV) => {
+   5539: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L6-L8)

```diff
-       d: () => JV.f,
-       g: () => YV,
-       j: () => JV.o
+       c: () => EH,
+       d: () => CH
```

#### 4. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L10` → after: `L9-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L9-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L9-L340) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L10)

```diff
-     var JV = xV(5561);
+     var AH = LH(45),
+       rH = LH(1455),
+       SH = LH(1123),
+       hH = LH(81),
+       tH = LH(3484),
+       zH = LH(1225);
+ 
+     function CH() {
+       return !(0, hH.isMobile)()
+     }
+ 
+     function EH(HH) {
+       let {
+         disabled: BH,
+         openFolderPicker: LH,
+         onFiles: hH
+ ... (316 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L16-L337` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L346) · [Before (L16-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L16-L337)

```diff
-   41773: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => ZV,
-       installListedShaderPack: () => wV
-     });
-     var JV = xV(7132),
-       YV = xV(5561),
-       UV = xV(1230),
-       yV = xV(7176),
-       pV = xV(5556),
-       QV = xV(7212),
-       nV = xV(7208);
-     async function wV(VV) {
-       const eV = await (0, yV.loadPageShaderPackCompiler)();
-       if (null === eV) return {
-         kind: "failed",
- ... (306 more removed lines; see GitHub link above)
+   5531: (HH, BH, LH) => {
```

#### 6. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L344-L346` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L355) · [Before (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L344-L346)

```diff
-       o: () => YV,
-       p: () => UV,
-       s: () => nV,
+       q: () => CH,
```

#### 7. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L348` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L357) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L348)

```diff
-       x: () => vV
+       u: () => GH
```

#### 8. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L367` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L376) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L367)

```diff
-         if ("string" !== typeof JV) return `${xV} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 9. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L376` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L385) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L376)

```diff
-           if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 10. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L384` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L393) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L384)

```diff
-             if (eV.has(xV)) return `The pack has two files at ${xV}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 11. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L387` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L396) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L387)

```diff
-           return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 12. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L412-L415` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L421-L424) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L412-L415)

```diff
-       if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
-       if (VV.length > QV) return `A file path is over ${QV} characters.`;
-       if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
-       return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 13. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L448` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/127.js#L457) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/127.js#L448)

```diff
-           return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/128.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/128.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf)

#### 1. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128, 130, 151, 152];
+ export const ids = [128, 131, 152, 153];
```

#### 2. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L4)

```diff
-   5556: (VV, eV, xV) => {
+   5523: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L6-L8)

```diff
-       d: () => JV.f,
-       g: () => YV,
-       j: () => JV.o
+       b: () => AH.e,
+       e: () => rH,
+       g: () => AH.l
```

#### 4. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L10)

```diff
-     var JV = xV(5561);
+     var AH = LH(5531);
```

#### 5. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L16` → after: `L16-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L16-L96) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L16)

```diff
-   7212: (VV, eV, xV) => {
+   41811: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => XH,
+       installListedShaderPack: () => EH
+     });
+     var AH = LH(7114),
+       rH = LH(5531),
+       SH = LH(1131),
+       hH = LH(7165),
+       tH = LH(5523),
+       zH = LH(7201),
+       CH = LH(7196);
+     async function EH(HH) {
+       const BH = await (0, hH.loadPageShaderPackCompiler)();
+       if (null === BH) return {
+         kind: "failed",
+ ... (65 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L33-L38` → after: `L113-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L113-L118) · [Before (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L33-L38)

```diff
-     var JV = xV(5561),
-       YV = xV(5556),
-       UV = xV(40),
-       yV = xV(3907),
-       pV = xV(7216),
-       QV = xV(7191);
+     var AH = LH(5531),
+       rH = LH(5523),
+       SH = LH(30),
+       hH = LH(3831),
+       tH = LH(7209),
+       zH = LH(7179);
```

#### 7. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L71` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L151) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L71)

```diff
-       return kV((async () => JSON.stringify(await (0, pV.f)()) === JSON.stringify(VV) && (null === eV ? (await jV(), !0) : BV(eV, xV))))
+       return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
```

#### 8. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L74` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L154) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L74)

```diff
-       const xV = await UV.i.setItem(pV.d, VV);
+       const LH = await SH.c.setItem(tH.c, HH);
```

#### 9. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L78` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L158) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L78)

```diff
-       await UV.i.removeItem(pV.d), UV.m.removeItem(yV.d)
+       await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
```

#### 10. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L115` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L195) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L115)

```diff
-       UV.q.setItem(nV, performance.timeOrigin)
+       SH.f.setItem(CH, performance.timeOrigin)
```

#### 11. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L119-L127` → after: `L199-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L199-L207) · [Before (L119-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L119-L127)

```diff
-       return UV.q.getItem(nV) === performance.timeOrigin
-     }
- 
-     function AV(VV) {
-       return !(0, YV.j)(VV.manifest.apiVersion)
-     }
- 
-     function NV(VV) {
-       return wV ??= VV.lD((0, QV.shaderPackTextures)()), wV
+       return SH.f.getItem(CH) === performance.timeOrigin
+     }
+ 
+     function OH(HH) {
+       return !(0, rH.g)(HH.manifest.apiVersion)
+     }
+ 
+     function bH(HH) {
+       return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
```

#### 12. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L137` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L217) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L137)

```diff
-         GV(await (0, pV.f)(!0), VV)
+         IH(await (0, tH.e)(!0), HH)
```

#### 13. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L143` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L223) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L143)

```diff
-         UV.m.removeItem(yV.d)
+         SH.e.removeItem(hH.d)
```

#### 14. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L148` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L228) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L148)

```diff
-       tV(VV, eV) ? UV.m.setItem(yV.d, !0) : UV.m.removeItem(yV.d)
+       PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
```

#### 15. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L151-L164` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L231) · [Before (L151-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L151-L164)

```diff
-   7216: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV,
-       f: () => UV
-     });
-     var JV = xV(40);
-     const YV = "shaderPack";
-     async function UV() {
-       var VV;
-       let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
-     }
-   },
-   7191: (VV, eV, xV) => {
+   7179: (HH, BH, LH) => {
```

#### 16. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L169` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L236) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L169)

```diff
-     var JV = xV(5561);
+     var AH = LH(5531);
```

#### 17. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L174` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L241) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L174)

```diff
-       return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
```

#### 18. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L180` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L247) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L180)

```diff
-         return YV ??= (0, JV.j)(xV, UV, eV), YV
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 19. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L189` → after: `L256-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L256-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L256-L337) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L189)

```diff
-   5561: (VV, eV, xV) => {
+   7196: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => zH,
+       d: () => tH
+     });
+     var AH = LH(7201),
+       rH = LH(7179),
+       SH = LH(105);
+     const hH = 100;
+     async function tH(HH, BH) {
+       var LH;
+       let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
+       const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
+       if (hH.errors.length > 0) return CH(HH, hH.errors, hH.offInStrict);
+       const tH = await async function(HH) {
+         if (!HH) return null;
+ ... (66 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L196-L198` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L346) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L196-L198)

```diff
-       o: () => YV,
-       p: () => UV,
-       s: () => nV,
+       q: () => CH,
```

#### 21. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L200` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L348) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L200)

```diff
-       x: () => vV
+       u: () => GH
```

#### 22. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L219` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L367) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L219)

```diff
-         if ("string" !== typeof JV) return `${xV} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 23. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L228` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L376) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L228)

```diff
-           if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 24. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L236` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L384) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L236)

```diff
-             if (eV.has(xV)) return `The pack has two files at ${xV}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 25. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L239` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L387) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L239)

```diff
-           return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 26. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L264-L267` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L412-L415) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L264-L267)

```diff
-       if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
-       if (VV.length > QV) return `A file path is over ${QV} characters.`;
-       if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
-       return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 27. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L300` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/128.js#L448) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/128.js#L300)

```diff
-           return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/129.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/129.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15)

#### 1. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129, 130, 151];
+ export const ids = [129, 131, 152, 153];
```

#### 2. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L4)

```diff
-   5556: (VV, eV, xV) => {
+   5523: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L6-L10` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L6-L10) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L6-L10)

```diff
-       d: () => JV.f,
-       g: () => YV,
-       j: () => JV.o
-     });
-     var JV = xV(5561);
+       b: () => AH.e,
+       e: () => rH,
+       g: () => AH.l
+     });
+     var AH = LH(5531);
```

#### 4. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L16)

```diff
-   40443: (VV, eV, xV) => {
+   7201: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L18-L40` → after: `L18-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L18-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L18-L48) · [Before (L18-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L18-L40)

```diff
-       ShaderPackPage: () => QV,
-       harnessShaderPackMode: () => vV,
-       setHarnessUrlShaderPack: () => ZV,
-       shaderPackPage: () => wV
-     });
-     var JV = xV(99),
-       YV = xV(40),
-       UV = (xV(3911), xV(5556), xV(3907)),
-       yV = xV(7216);
-     xV(7191);
-     const pV = {
-       status: "none"
-     };
-     class QV {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
- ... (7 more removed lines; see GitHub link above)
+       forgetShaderPackActiveHint: () => oH,
+       isOtherApiVersion: () => OH,
+       isShaderPackActive: () => PH,
+       isShaderPackChangePending: () => VH,
+       markShaderPackChangePending: () => UH,
+       pageShaderPackValidationVersion: () => bH,
+       reconcileStoredShaderPackHint: () => mH,
+       removeShaderPack: () => vH,
+       replaceShaderPack: () => WH,
+       saveShaderPack: () => QH,
+       shaderPackNeedsCheck: () => kH,
+       storedPackOutcome: () => TH,
+       storedShaderPackFiles: () => GH,
+       toStoredShaderPack: () => XH
+     });
+     var AH = LH(5531),
+ ... (15 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L42-L77` → after: `L50-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L50-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L50-L75) · [Before (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L42-L77)

```diff
-         return this.stored
-       }
-       prefetchHint() {
-         return (0, UV.e)(JV.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const VV = await this.load();
-         return "active" === VV.status ? VV.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((VV => (console.error("Failed to load the shader pack", VV), pV))).then((VV => (this.resolved ??= VV, VV))), this.pagePack
-       }
-       hasNone() {
-         var VV;
-         return "none" === (null === (VV = this.resolved) || void 0 === VV ? void 0 : VV.status)
-       }
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function GH(HH) {
+       return Object.keys(HH.files).map((BH => ({
+         path: BH,
+         source: HH.files[BH]
+       })))
+     }
+     let YH = Promise.resolve();
+ 
+     function uH(HH) {
+       const BH = YH.then(HH);
+       return YH = BH.catch((() => {})), BH
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L80-L93` → after: `L78-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L78-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L78-L148) · [Before (L80-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L80-L93)

```diff
-       if (!(0, UV.h)(JV.featureFlags.settings.canUseShaderPacks)) return null;
-       try {
-         const VV = await (0, yV.f)(!0);
-         return VV || YV.m.setItem(UV.d, !1), VV
-       } catch (VV) {
-         return console.error("Failed to read the stored shader pack", VV), YV.m.removeItem(UV.d), null
-       }
-     }
-     const wV = new QV;
- 
-     function ZV(VV, eV) {}
- 
-     function vV() {
-       return null
+       await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
+     }
+ 
+     function vH() {
+       return uH(xH)
+     }
+ 
+     function PH(HH, BH) {
+       return "active" === TH(HH, BH).kind
+     }
+ 
+     function TH(HH, BH) {
+       var LH;
+       return null === HH ? {
+         kind: "none",
+         reason: "nothingStored"
+ ... (55 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L96` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L151) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L96)

```diff
-   7216: (VV, eV, xV) => {
+   7209: (HH, BH, LH) => {
```

#### 9. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L98-L101` → after: `L153-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L153-L156) · [Before (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L98-L101)

```diff
-       d: () => YV,
-       f: () => UV
-     });
-     var JV = xV(40);
+       c: () => rH,
+       e: () => SH
+     });
+     var AH = LH(30);
```

#### 10. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L106` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L161) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L106)

```diff
-       return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
+       return null !== (HH = await AH.c.getItem(rH, BH)) && void 0 !== HH ? HH : null
```

#### 11. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L109` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L164) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L109)

```diff
-   7191: (VV, eV, xV) => {
+   7179: (HH, BH, LH) => {
```

#### 12. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L114` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L169) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L114)

```diff
-     var JV = xV(5561);
+     var AH = LH(5531);
```

#### 13. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L119` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L174) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L119)

```diff
-       return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
```

#### 14. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L125` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L180) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L125)

```diff
-         return YV ??= (0, JV.j)(xV, UV, eV), YV
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 15. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L134` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L189) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L134)

```diff
-   5561: (VV, eV, xV) => {
+   5531: (HH, BH, LH) => {
```

#### 16. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L141-L143` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L198) · [Before (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L141-L143)

```diff
-       o: () => YV,
-       p: () => UV,
-       s: () => nV,
+       q: () => CH,
```

#### 17. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L145` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L200) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L145)

```diff
-       x: () => vV
+       u: () => GH
```

#### 18. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L164` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L219) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L164)

```diff
-         if ("string" !== typeof JV) return `${xV} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 19. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L173` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L228) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L173)

```diff
-           if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 20. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L181` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L236) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L181)

```diff
-             if (eV.has(xV)) return `The pack has two files at ${xV}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 21. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L184` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L239) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L184)

```diff
-           return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 22. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L209-L212` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L264-L267) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L209-L212)

```diff
-       if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
-       if (VV.length > QV) return `A file path is over ${QV} characters.`;
-       if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
-       return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 23. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L245` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/129.js#L300) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/129.js#L245)

```diff
-           return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/130.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/130.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a)

#### 1. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 151];
+ export const ids = [130, 131, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L4-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L4-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L4-L109) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L4)

```diff
-   7191: (VV, eV, xV) => {
+   5523: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => AH.e,
+       e: () => rH,
+       g: () => AH.l
+     });
+     var AH = LH(5531);
+     const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
+       strict: HH,
+       program: BH
+     })))))
+   },
+   40182: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       ShaderPackPage: () => zH,
+       harnessShaderPackMode: () => GH,
+ ... (90 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L9` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L114) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L9)

```diff
-     var JV = xV(5561);
+     var AH = LH(5531);
```

#### 4. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L14` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L119) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L14)

```diff
-       return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
```

#### 5. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L20` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L125) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L20)

```diff
-         return YV ??= (0, JV.j)(xV, UV, eV), YV
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
```

#### 6. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L29` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L134) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L29)

```diff
-   5561: (VV, eV, xV) => {
+   5531: (HH, BH, LH) => {
```

#### 7. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L36-L38` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L143) · [Before (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L36-L38)

```diff
-       o: () => YV,
-       p: () => UV,
-       s: () => nV,
+       q: () => CH,
```

#### 8. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L40` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L145) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L40)

```diff
-       x: () => vV
+       u: () => GH
```

#### 9. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L59` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L164) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L59)

```diff
-         if ("string" !== typeof JV) return `${xV} isn't text.`;
+         if ("string" !== typeof AH) return `${LH} isn't text.`;
```

#### 10. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L68` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L173) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L68)

```diff
-           if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
+           if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
```

#### 11. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L76` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L181) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L76)

```diff
-             if (eV.has(xV)) return `The pack has two files at ${xV}.`;
+             if (BH.has(LH)) return `The pack has two files at ${LH}.`;
```

#### 12. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L79` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L184) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L79)

```diff
-           return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
+           return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
```

#### 13. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L104-L107` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L209-L212) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L104-L107)

```diff
-       if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
-       if (VV.length > QV) return `A file path is over ${QV} characters.`;
-       if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
-       return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
```

#### 14. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L140` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/130.js#L245) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/130.js#L140)

```diff
-           return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
+           return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/131.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/131.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430)

#### 1. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L2)

```diff
- export const ids = [131];
+ export const ids = [131, 152];
```

#### 2. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L4-L6)

```diff
-   34898: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => nV
+   7179: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       loadShaderPackTextures: () => hH,
+       shaderPackTextures: () => tH
```

#### 3. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L8-L240` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L9-L26) · [Before (L8-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L8-L240)

```diff
-     var JV = xV(2645);
-     const YV = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
- 
-     function UV(VV) {
-       return new Promise(((eV, xV) => {
-         VV.onsuccess = () => {
-           eV(VV.result)
-         }, VV.onerror = () => {
-           xV(VV.error)
-         }
-       }))
-     }
- 
-     function yV(VV) {
-       return new Promise(((eV, xV) => {
-         VV.oncomplete = () => {
- ... (217 more removed lines; see GitHub link above)
+     var AH = LH(5531);
+     let rH = null,
+       SH = null;
+ 
+     function hH() {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: BH,
+           textureNameToIndex: LH,
+           textureAnimationData: SH
+         } = HH;
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
+       })), SH
+     }
+ 
+     function tH() {
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L243` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L29) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L243)

```diff
-   35048: (VV, eV, xV) => {
+   5531: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L247` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L34-L40) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L247)

```diff
-       i: () => pV
+       f: () => QH,
+       j: () => XH,
+       l: () => rH,
+       n: () => SH,
+       q: () => CH,
+       t: () => EH,
+       u: () => GH
```

#### 6. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L249-L250` → after: `L42-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L42-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L42-L87) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L249-L250)

```diff
-     var JV = xV(34892);
-     const YV = new TextEncoder;
+     const AH = 5;
+ 
+     function rH(HH) {
+       return HH === AH
+     }
+ 
+     function SH(HH) {
+       return [...HH.features]
+     }
+     const hH = 262144,
+       tH = 256,
+       zH = 256;
+ 
+     function CH(HH) {
+       if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
+       const BH = [];
+ ... (30 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L253-L284` → after: `L90-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L90-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L90-L97) · [Before (L253-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L253-L284)

```diff
-       return new Blob([YV.encode(`${JSON.stringify(VV)}\n`), eV], {
-         type: "text/plain"
-       })
-     }
-     class yV {
-       constructor(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-         this.token = VV, this.relay = eV, this.nowMs = xV, this.refused = !1, this.skipUntilMs = 0
-       }
-       async send(VV, eV, xV, YV, yV) {
-         if (this.goesDirect(eV, xV)) return null;
-         const pV = UV({
-             token: this.token,
-             contentType: xV,
-             target: VV
-           }, eV),
- ... (16 more removed lines; see GitHub link above)
+       return HH < BH ? -1 : HH > BH ? 1 : 0
+     }
+ 
+     function GH(HH) {
+       const BH = new TextEncoder;
+       let LH = 0;
+       for (const {
+           source: AH
```

#### 8. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L286-L344` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L99-L109) · [Before (L286-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L286-L344)

```diff
-         return "refused" === nV.outcome ? (console.info(`Session replay's part joiner refused to relay (${nV.reason}); uploading straight to storage.`), this.refused = !0, null) : nV.status
-       }
-       beacon(VV, eV, xV, JV) {
-         if (this.goesDirect(eV, xV)) return null;
-         const YV = UV({
-           token: this.token,
-           contentType: xV,
-           target: VV
-         }, eV);
-         return JV.sendUploadBeacon(this.relay.url, YV, YV.size)
-       }
-       goesDirect(VV, eV) {
-         return this.refused || this.nowMs() < this.skipUntilMs || VV.byteLength > this.relay.maxBytes || "video/mp4" === eV
-       }
-     }
- 
- ... (43 more removed lines; see GitHub link above)
+         of HH) LH += BH.encode(AH).byteLength;
+       return LH
+     }
+ 
+     function YH(HH) {
+       if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
+       if (HH.length > zH) return `A file path is over ${zH} characters.`;
+       if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
+       return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
+     }
+     const uH = /^(.*)\[rot\[([1-4])$/;
```

#### 9. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L347-L422` → after: `L112-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L112-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L112-L170) · [Before (L347-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L347-L422)

```diff
-       if ((VV < 200 || VV > 299) && (!eV || 412 !== VV)) throw new UV.d(`Segment PUT failed with ${VV}`, VV)
-     }
-     class ZV {
-       constructor(VV) {
-         var eV;
-         let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         this.segmentUploadUrl = VV, this.deadline = void 0, this.relay = void 0, this.deadline = xV.deadline, this.relay = null !== (eV = xV.relay) && void 0 !== eV ? eV : null
-       }
-       requestPutUrl(VV) {
-         return this.presign(VV)
-       }
-       requestPostTargets(VV) {
-         return this.presign(VV)
-       }
-       async presign(VV) {
-         const eV = await fetch(this.segmentUploadUrl, {
- ... (60 more removed lines; see GitHub link above)
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const AH = new Map;
+       BH.forEach(((HH, BH) => {
+         let {
+           numAnimStates: LH,
+           animStartIdx: rH
+         } = HH;
+         for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
+       }));
+       const rH = Object.entries(HH),
+         SH = new Map;
+       for (const [QH, WH] of rH) {
+         const HH = uH.exec(QH);
+         "1" === HH?.[2] && SH.set(HH[1], WH + 1)
+       }
+       const hH = HH => {
+ ... (43 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L424-L451` → after: `L172-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L172-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L172-L194) · [Before (L424-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L424-L451)

```diff
-       }
-       async requestPostTargets(VV) {
-         return {
-           targets: Array.from({
-             length: VV.parts.count
-           }, (() => ({
-             url: "",
-             fields: {}
-           }))),
-           expiresInSecs: 900
-         }
-       }
-       put() {
-         return Promise.resolve()
-       }
-       post() {
- ... (12 more removed lines; see GitHub link above)
+         const LH = CH.get(QH),
+           rH = HH?.root ?? uH;
+         if (LH !== rH && YH.set(rH, {
+             name: rH,
+             texture: LH,
+             kind: "frame"
+           }), HH) {
+           const BH = SH.get(HH.root);
+           XH[QH] = {
+             id: BH,
+             rotation: HH.rotation
+           }, GH.set(LH, BH), YH.set(uH, {
+             name: uH,
+             texture: LH,
+             kind: "rotation"
+           })
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L453-L745` → after: `L196-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L196-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/131.js#L196-L209) · [Before (L453-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/131.js#L453-L745)

```diff
-         bytes: (0, JV.b)(eV),
-         inflatedBytes: eV.byteLength
-       }
-     }
-   },
-   35045: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => UV
-     });
-     const JV = 20;
-     let YV = Date.now() - performance.now();
- 
-     function UV() {
-       const VV = performance.now(),
-         eV = Date.now();
-       return Math.abs(eV - (VV + YV)) > JV && (YV = eV - VV), VV + YV
- ... (277 more removed lines; see GitHub link above)
+         named: [...GH].sort(((HH, BH) => {
+           let [LH] = HH, [AH] = BH;
+           return LH < AH ? -1 : LH > AH ? 1 : 0
+         })).map((HH => {
+           let [BH, LH] = HH;
+           return {
+             name: BH,
+             id: LH
+           }
+         })),
+         aliases: [...YH.values()],
+         layers: XH
+       }
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/132.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/132.js` (1088 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f)

#### 1. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L1)

```diff
- /*! For license information please see pxmq3aq.132.8ddc2e35.chunk.js.LICENSE.txt */
+ /*! For license information please see cwj32u.132.0c3f5e7a.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L5)

```diff
-   6759: function(VV, eV, xV) {
+   6731: function(HH, BH, LH) {
```

#### 3. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L63)

```diff
-         for (eV = 0, xV = (JV = UV.d.length) < (YV = VV.d.length) ? JV : YV; eV < xV; ++eV)
+         for (BH = 0, LH = (AH = SH.d.length) < (rH = HH.d.length) ? AH : rH; BH < LH; ++BH)
```

#### 4. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L133)

```diff
-         return VV && eV > xV ? eV : xV
+         return HH && BH > LH ? BH : LH
```

#### 5. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L141)

```diff
-         for (VV = PV(nV), pV = !1, 0 == (YV = Math.sqrt(+nV)) || YV == 1 / 0 ? (((eV = tV(nV.d)).length + VV) % 2 == 0 && (eV += "0"), YV = Math.sqrt(eV), VV = ZV((VV + 1) / 2) - (VV < 0 || VV % 2), JV = new wV(eV = YV == 1 / 0 ? "1e" + VV : (eV = YV.toExponential()).slice(0, eV. … [truncated]
+         for (HH = VH(CH), tH = !1, 0 == (rH = Math.sqrt(+CH)) || rH == 1 / 0 ? (((BH = PH(CH.d)).length + HH) % 2 == 0 && (BH += "0"), rH = Math.sqrt(BH), HH = XH((HH + 1) / 2) - (HH < 0 || HH % 2), AH = new EH(BH = rH == 1 / 0 ? "1e" + HH : (BH = rH.toExponential()).slice(0, BH. … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L163)

```diff
-         return eV ? ++xV : UV.shift(), VV.d = UV, VV.e = xV, pV ? zV(VV, vV.precision) : VV
+         return BH ? ++LH : SH.shift(), HH.d = SH, HH.e = LH, tH ? oH(HH, GH.precision) : HH
```

#### 7. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L167)

```diff
-         return xV = new JV(xV), void 0 === VV ? xV : (qV(VV, 0, UV), void 0 === eV ? eV = JV.rounding : qV(eV, 0, 8), zV(xV, VV + PV(xV) + 1, eV))
+         return LH = new AH(LH), void 0 === HH ? LH : (vH(HH, 0, SH), void 0 === BH ? BH = AH.rounding : vH(BH, 0, 8), oH(LH, HH + VH(LH) + 1, BH))
```

#### 8. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L175)

```diff
-         return void 0 === VV ? WV(YV) : (qV(VV, 0, UV), void 0 === eV ? eV = yV.rounding : qV(eV, 0, 8), xV = WV((JV = zV(new yV(YV), VV + PV(YV) + 1, eV)).abs(), !1, VV + PV(JV) + 1), YV.isneg() && !YV.isZero() ? "-" + xV : xV)
+         return void 0 === HH ? fH(rH) : (vH(HH, 0, SH), void 0 === BH ? BH = hH.rounding : vH(BH, 0, 8), LH = fH((AH = oH(new hH(rH), HH + VH(rH) + 1, BH)).abs(), !1, HH + VH(AH) + 1), rH.isneg() && !rH.isZero() ? "-" + LH : LH)
```

#### 9. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L194)

```diff
-           if ((xV = rV < 0 ? -rV : rV) <= bV) {
+           if ((LH = YH < 0 ? -YH : YH) <= QH) {
```

#### 10. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L252)

```diff
-               ZV = 0, (pV = eV(gV, BV, XV, jV)) < 0 ? (qV = BV[0], XV != jV && (qV = qV * kV + (BV[1] || 0)), (ZV = qV / NV | 0) > 1 ? (ZV >= kV && (ZV = kV - 1), 1 == (pV = eV(vV = VV(gV, ZV), BV, rV = vV.length, jV = BV.length)) && (ZV--, xV(vV, XV < rV ? MV : gV, rV))) : (0 == … [truncated]
+               XH = 0, (tH = BH(KH, MH, kH, xH)) < 0 ? (vH = MH[0], kH != xH && (vH = vH * uH + (MH[1] || 0)), (XH = vH / bH | 0) > 1 ? (XH >= uH && (XH = uH - 1), 1 == (tH = BH(GH = HH(KH, XH), MH, YH = GH.length, xH = MH.length)) && (XH--, LH(GH, kH < YH ? mH : KH, YH))) : (0 == … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L333)

```diff
-         if (0 == JV ? (BV.length = bV, UV = 1, bV--) : (BV.length = bV + 1, UV = vV(10, 7 - JV), BV[bV] = YV > 0 ? (rV / vV(10, yV - YV) % vV(10, YV) | 0) * UV : 0), nV)
+         if (0 == AH ? (MH.length = QH, SH = 1, QH--) : (MH.length = QH + 1, SH = GH(10, 7 - AH), MH[QH] = rH > 0 ? (YH / GH(10, hH - rH) % GH(10, rH) | 0) * SH : 0), CH)
```

#### 12. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L378)

```diff
-         return eV ? (xV && (JV = xV - yV) > 0 ? UV = UV.charAt(0) + "." + UV.slice(1) + NV(JV) : yV > 1 && (UV = UV.charAt(0) + "." + UV.slice(1)), UV = UV + (YV < 0 ? "e" : "e+") + YV) : YV < 0 ? (UV = "0." + NV(-YV - 1) + UV, xV && (JV = xV - yV) > 0 && (UV += NV(JV))) : YV >=  … [truncated]
+         return BH ? (LH && (AH = LH - hH) > 0 ? SH = SH.charAt(0) + "." + SH.slice(1) + bH(AH) : hH > 1 && (SH = SH.charAt(0) + "." + SH.slice(1)), SH = SH + (rH < 0 ? "e" : "e+") + rH) : rH < 0 ? (SH = "0." + bH(-rH - 1) + SH, LH && (AH = LH - hH) > 0 && (SH += bH(AH))) : rH >=  … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L426-L427` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L426-L427) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L426-L427)

```diff
-   6344: (VV, eV, xV) => {
-     var JV = xV(5817)(xV(5645), "DataView");
+   6282: (HH, BH, LH) => {
+     var AH = LH(5778)(LH(5615), "DataView");
```

#### 14. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L430-L435` → after: `L430-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L430-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L430-L435) · [Before (L430-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L430-L435)

```diff
-   5805: (VV, eV, xV) => {
-     var JV = xV(5808),
-       YV = xV(5842),
-       UV = xV(5851),
-       yV = xV(5859),
-       pV = xV(5865);
+   5763: (HH, BH, LH) => {
+     var AH = LH(5772),
+       rH = LH(5819),
+       SH = LH(5821),
+       hH = LH(5829),
+       tH = LH(5835);
```

#### 15. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L447-L452` → after: `L447-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L447-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L447-L452) · [Before (L447-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L447-L452)

```diff
-   5874: (VV, eV, xV) => {
-     var JV = xV(5881),
-       YV = xV(5885),
-       UV = xV(5902),
-       yV = xV(5907),
-       pV = xV(5913);
+   5843: (HH, BH, LH) => {
+     var AH = LH(5847),
+       rH = LH(5852),
+       SH = LH(5872),
+       hH = LH(5876),
+       tH = LH(5878);
```

#### 16. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L464-L465` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L464-L465) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L464-L465)

```diff
-   5916: (VV, eV, xV) => {
-     var JV = xV(5817)(xV(5645), "Map");
+   5886: (HH, BH, LH) => {
+     var AH = LH(5778)(LH(5615), "Map");
```

#### 17. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L468-L473` → after: `L468-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L468-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L468-L473) · [Before (L468-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L468-L473)

```diff
-   5795: (VV, eV, xV) => {
-     var JV = xV(5800),
-       YV = xV(5919),
-       UV = xV(5939),
-       yV = xV(5944),
-       pV = xV(5951);
+   5750: (HH, BH, LH) => {
+     var AH = LH(5755),
+       rH = LH(5895),
+       SH = LH(5913),
+       hH = LH(5920),
+       tH = LH(5923);
```

#### 18. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L485-L486` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L485-L486) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L485-L486)

```diff
-   6348: (VV, eV, xV) => {
-     var JV = xV(5817)(xV(5645), "Promise");
+   6289: (HH, BH, LH) => {
+     var AH = LH(5778)(LH(5615), "Promise");
```

#### 19. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L489-L490` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L489-L490) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L489-L490)

```diff
-   6350: (VV, eV, xV) => {
-     var JV = xV(5817)(xV(5645), "Set");
+   6292: (HH, BH, LH) => {
+     var AH = LH(5778)(LH(5615), "Set");
```

#### 20. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L493-L496` → after: `L493-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L493-L496) · [Before (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L493-L496)

```diff
-   6186: (VV, eV, xV) => {
-     var JV = xV(5795),
-       YV = xV(6195),
-       UV = xV(6203);
+   6129: (HH, BH, LH) => {
+     var AH = LH(5750),
+       rH = LH(6131),
+       SH = LH(6136);
```

#### 21. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L505-L511` → after: `L505-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L505-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L505-L511) · [Before (L505-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L505-L511)

```diff
-   6136: (VV, eV, xV) => {
-     var JV = xV(5874),
-       YV = xV(6144),
-       UV = xV(6147),
-       yV = xV(6152),
-       pV = xV(6159),
-       QV = xV(6166);
+   6082: (HH, BH, LH) => {
+     var AH = LH(5843),
+       rH = LH(6087),
+       SH = LH(6092),
+       hH = LH(6099),
+       tH = LH(6101),
+       zH = LH(6107);
```

#### 22. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L519-L520` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L519-L520) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L519-L520)

```diff
-   5691: (VV, eV, xV) => {
-     var JV = xV(5645).Symbol;
+   5657: (HH, BH, LH) => {
+     var AH = LH(5615).Symbol;
```

#### 23. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L523-L524)

```diff
-   6224: (VV, eV, xV) => {
-     var JV = xV(5645).Uint8Array;
+   6157: (HH, BH, LH) => {
+     var AH = LH(5615).Uint8Array;
```

#### 24. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L527-L528` → after: `L527-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L527-L528) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L527-L528)

```diff
-   6357: (VV, eV, xV) => {
-     var JV = xV(5817)(xV(5645), "WeakMap");
+   6299: (HH, BH, LH) => {
+     var AH = LH(5778)(LH(5615), "WeakMap");
```

#### 25. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L531)

```diff
-   6476: VV => {
+   6445: HH => {
```

#### 26. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L546)

```diff
-   6818: VV => {
+   6794: HH => {
```

#### 27. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L553)

```diff
-   6257: VV => {
+   6188: HH => {
```

#### 28. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L562-L563` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L562-L563) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L562-L563)

```diff
-   6552: (VV, eV, xV) => {
-     var JV = xV(6560);
+   6521: (HH, BH, LH) => {
+     var AH = LH(6529);
```

#### 29. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L568)

```diff
-   6582: VV => {
+   6549: HH => {
```

#### 30. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L575-L581` → after: `L575-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L575-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L575-L581) · [Before (L575-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L575-L581)

```diff
-   6275: (VV, eV, xV) => {
-     var JV = xV(6284),
-       YV = xV(6101),
-       UV = xV(5724),
-       yV = xV(6287),
-       pV = xV(6070),
-       QV = xV(6297),
+   6205: (HH, BH, LH) => {
+     var AH = LH(6212),
+       rH = LH(6055),
+       SH = LH(5695),
+       hH = LH(6221),
+       tH = LH(6020),
+       zH = LH(6237),
```

#### 31. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L595)

```diff
-   5963: VV => {
+   5941: HH => {
```

#### 32. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L601)

```diff
-   6092: VV => {
+   6041: HH => {
```

#### 33. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L607)

```diff
-   6207: VV => {
+   6141: HH => {
```

#### 34. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L614)

```diff
-   6644: VV => {
+   6610: HH => {
```

#### 35. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L619-L620` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L619-L620) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L619-L620)

```diff
-   5891: (VV, eV, xV) => {
-     var JV = xV(5896);
+   5858: (HH, BH, LH) => {
+     var AH = LH(5867);
```

#### 36. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L627-L628` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L627-L628) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L627-L628)

```diff
-   6805: (VV, eV, xV) => {
-     var JV = xV(6499);
+   6786: (HH, BH, LH) => {
+     var AH = LH(6464);
```

#### 37. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L638-L640` → after: `L638-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L638-L640) · [Before (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L638-L640)

```diff
-   6421: (VV, eV, xV) => {
-     var JV = xV(6428),
-       YV = xV(6440)(JV);
+   6388: (HH, BH, LH) => {
+     var AH = LH(6391),
+       rH = LH(6407)(AH);
```

#### 38. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L643-L644` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L643-L644) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L643-L644)

```diff
-   6821: (VV, eV, xV) => {
-     var JV = xV(6421);
+   6802: (HH, BH, LH) => {
+     var AH = LH(6388);
```

#### 39. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L652-L653)

```diff
-   6719: (VV, eV, xV) => {
-     var JV = xV(5680);
+   6693: (HH, BH, LH) => {
+     var AH = LH(5648);
```

#### 40. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L664` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L664) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L664)

```diff
-   6566: VV => {
+   6534: HH => {
```

#### 41. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L671-L673` → after: `L671-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L671-L673) · [Before (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L671-L673)

```diff
-   6086: (VV, eV, xV) => {
-     var JV = xV(6092),
-       YV = xV(6096);
+   6032: (HH, BH, LH) => {
+     var AH = LH(6041),
+       rH = LH(6048);
```

#### 42. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L684-L685` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L684-L685) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L684-L685)

```diff
-   6432: (VV, eV, xV) => {
-     var JV = xV(6434)();
+   6396: (HH, BH, LH) => {
+     var AH = LH(6405)();
```

#### 43. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L688-L690` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L688-L690) · [Before (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L688-L690)

```diff
-   6428: (VV, eV, xV) => {
-     var JV = xV(6432),
-       YV = xV(6266);
+   6391: (HH, BH, LH) => {
+     var AH = LH(6396),
+       rH = LH(6200);
```

#### 44. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L695-L697` → after: `L695-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L695-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L695-L697) · [Before (L695-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L695-L697)

```diff
-   5752: (VV, eV, xV) => {
-     var JV = xV(5758),
-       YV = xV(5966);
+   5716: (HH, BH, LH) => {
+     var AH = LH(5719),
+       rH = LH(5949);
```

#### 45. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L700)

```diff
-       return xV && xV == UV ? VV : void 0
+       return LH && LH == SH ? HH : void 0
```

#### 46. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L703-L705` → after: `L703-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L703-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L703-L705) · [Before (L703-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L703-L705)

```diff
-   6246: (VV, eV, xV) => {
-     var JV = xV(6092),
-       YV = xV(5724);
+   6180: (HH, BH, LH) => {
+     var AH = LH(6041),
+       rH = LH(5695);
```

#### 47. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L708)

```diff
-       return YV(VV) ? UV : JV(UV, xV(VV))
+       return rH(HH) ? SH : AH(SH, LH(HH))
```

#### 48. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L711-L714` → after: `L711-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L711-L714) · [Before (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L711-L714)

```diff
-   5689: (VV, eV, xV) => {
-     var JV = xV(5691),
-       YV = xV(5695),
-       UV = xV(5699),
+   5655: (HH, BH, LH) => {
+     var AH = LH(5657),
+       rH = LH(5663),
+       SH = LH(5671),
```

#### 49. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L720)

```diff
-   6721: VV => {
+   6695: HH => {
```

#### 50. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L725)

```diff
-   6386: VV => {
+   6342: HH => {
```

#### 51. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L730-L733` → after: `L730-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L730-L733) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L730-L733)

```diff
-   6560: (VV, eV, xV) => {
-     var JV = xV(6566),
-       YV = xV(6574),
-       UV = xV(6580);
+   6529: (HH, BH, LH) => {
+     var AH = LH(6534),
+       rH = LH(6536),
+       SH = LH(6540);
```

#### 52. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L738-L740` → after: `L738-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L738-L740) · [Before (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L738-L740)

```diff
-   6108: (VV, eV, xV) => {
-     var JV = xV(5689),
-       YV = xV(5705);
+   6062: (HH, BH, LH) => {
+     var AH = LH(5655),
+       rH = LH(5680);
```

#### 53. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L745-L747` → after: `L745-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L745-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L745-L747) · [Before (L745-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L745-L747)

```diff
-   6171: (VV, eV, xV) => {
-     var JV = xV(6177),
-       YV = xV(5705);
+   6111: (HH, BH, LH) => {
+     var AH = LH(6118),
+       rH = LH(5680);
```

#### 54. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L749)

```diff
-       return eV === xV || (null == eV || null == xV || !YV(eV) && !YV(xV) ? eV !== eV && xV !== xV : JV(eV, xV, UV, yV, VV, pV))
+       return BH === LH || (null == BH || null == LH || !rH(BH) && !rH(LH) ? BH !== BH && LH !== LH : AH(BH, LH, SH, hH, HH, tH))
```

#### 55. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L752-L760` → after: `L752-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L752-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/132.js#L752-L760) · [Before (L752-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/132.js#L752-L760)

```diff
-   6177: (VV, eV, xV) => {
-     var JV = xV(6136),
-       YV = xV(6180),
-       UV = xV(6220),
-       yV = xV(6235),
-       pV = xV(6340),
-       QV = xV(5724),
-       nV = xV(6287),
-       wV = xV(6297),
+   6118: (HH, BH, LH) => {
+     var AH = LH(6082),
+       rH = LH(6122),
+       SH = LH(6149),
+       hH = LH(6175),
+       tH = LH(6277),
+       zH = LH(5695),
+       CH = LH(6221),
+       EH = LH(6237),
```
