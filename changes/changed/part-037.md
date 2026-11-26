# Changed — Bundle Modifications Report (Part 037 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `37 / 116` (**273** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 036](part-036.md) · [Part 038 →](part-038.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 49. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L996-L999` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1428) · [Before (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L996-L999)

```diff
-       VV = (0, UV.L)(VV), async function(VV, eV) {
-         const xV = await VV;
-         window[`ga-disable-${xV}`] = !eV
-       }(Ce[VV.app.options.appId], eV).catch((VV => Be.error(VV)))
+       return `${HH}/${BH}`
```

#### 50. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1003` → after: `L1432-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1432-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1432-L1441) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1003)

```diff
-       he ? he("set", VV) : ge(VV)
+       const BH = function(HH) {
+         return HH.map(((BH, LH) => {
+           const AH = HH[LH + 1];
+           return void 0 === AH ? BH.endMs : Math.min(BH.endMs, AH.startMs)
+         }))
+       }(HH);
+       return HH.map(((HH, LH) => ({
+         ...HH,
+         endMs: BH[LH]
+       }))).filter((HH => HH.endMs > HH.startMs))
```

#### 51. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1006-L1008` → after: `L1444-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1444-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1444-L1450) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1006-L1008)

```diff
-     function xx(VV, eV, xV, JV) {
-       VV = (0, UV.L)(VV), async function(VV, eV, xV, JV, YV) {
-         if (YV && YV.global) VV("event", xV, JV);
+     function HL(HH, BH) {
+       let LH = 0,
+         AH = HH.length - 1;
+       for (; LH <= AH;) {
+         const rH = LH + AH >> 1,
+           SH = HH[rH];
+         if (BH < SH.startMs) AH = rH - 1;
```

#### 52. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1010-L1012` → after: `L1452-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1452-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1452-L1903) · [Before (L1010-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1010-L1012)

```diff
-           const YV = await eV;
-           VV("event", xV, Object.assign(Object.assign({}, JV), {
-             send_to: YV
+           if (!(BH >= SH.endMs)) return SH;
+           LH = rH + 1
+         }
+       }
+       return null
+     }
+ 
+     function BL(HH, BH) {
+       return (BH - HH.startMs) / 1e3
+     }
+ 
+     function LL(HH) {
+       return Math.max(.4, .1 * HH)
+     }
+ 
+     function AL(HH) {
+ ... (436 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1015` → after: `L1909-L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1909-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L1909-L1984) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1015)

```diff
-       }(he, Ce[VV.app.options.appId], eV, xV, JV).catch((VV => Be.error(VV)))
+       }), [HH]), BH
+     }
+ 
+     function YL(HH) {
+       let {
+         controller: BH,
+         labels: LH
+       } = HH;
+       const {
+         bits: AH,
+         presses: rH
+       } = GL(BH), SH = HH => function(HH, BH) {
+         return 0 !== (HH & 1 << hH.indexOf(BH))
+       }(AH, HH);
+       return (0, WH.jsxs)("div", {
+         className: "brv-input",
+ ... (60 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1019` → after: `L2006-L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2006-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2006-L2015) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1019)

```diff
-       he ? he("consent", "update", VV) : Re(VV)
+       let {
+         path: BH
+       } = HH;
+       return (0, WH.jsx)("svg", {
+         viewBox: "0 0 24 24",
+         "aria-hidden": !0,
+         children: (0, WH.jsx)("path", {
+           d: BH
+         })
+       })
```

#### 55. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1021-L1023` → after: `L2017-L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2017-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2017-L2023) · [Before (L1021-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1021-L1023)

```diff
-     const Yx = "@firebase/analytics",
-       Ux = "0.10.0";
-     (0, JV.v)(new yV.e(be, ((VV, eV) => {
+     const WL = {
+       play: "M7 4v16l13-8z",
+       pause: "M6 4h4v16H6zm8 0h4v16h-4z",
+       fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
+     };
+ 
+     function ML(HH) {
```

#### 56. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1025` → after: `L2025-L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2025-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2025-L2027) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1025)

```diff
-         options: xV
+         label: BH,
+         onClick: LH,
+         children: AH
```

#### 57. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1027-L1030` → after: `L2029-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2029-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2029-L2294) · [Before (L1027-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1027-L1030)

```diff
-       return Ke(VV.getProvider("app").getImmediate(), VV.getProvider("installations-internal").getImmediate(), xV)
-     }), "PUBLIC")), (0, JV.v)(new yV.e("analytics-internal", (function(VV) {
-       try {
-         const eV = VV.getProvider(be).getImmediate();
+       return (0, WH.jsx)("button", {
+         type: "button",
+         className: "brv-button",
+         title: BH,
+         "aria-label": BH,
+         onClick: LH,
+         children: AH
+       })
+     }
+ 
+     function xL(HH) {
+       if (!document.fullscreenEnabled) return;
+       (document.fullscreenElement === HH ? document.exitFullscreen() : HH.requestFullscreen()).catch((HH => {
+         console.warn("Couldn't toggle fullscreen.", HH)
+       }))
+     }
+ ... (250 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1032` → after: `L2296-L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2296-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2296-L2364) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1032)

```diff
-           logEvent: (VV, xV, JV) => xx(eV, VV, xV, JV)
+           play: HH("studio:replayPlay"),
+           pause: HH("studio:replayPause"),
+           speed: HH("studio:replaySpeed"),
+           skipInactive: HH("studio:replaySkipIdle"),
+           fullscreen: HH("studio:replayFullscreen"),
+           tabHidden: HH("studio:replayTabHidden"),
+           videoFailed: HH("studio:replayVideoFailed"),
+           nothingToShow: HH("studio:replayNothingToShow"),
+           videoGap: HH("studio:replayVideoGap"),
+           error: HH("general:error"),
+           graphicsCrash: HH("studio:replayMarkerGraphicsCrash"),
+           death: HH("studio:replayMarkerDeath"),
+           fps: BH => HH("studio:replayFps", {
+             fps: BH
+           }),
+           keys: HH("studio:replayKeys"),
+ ... (53 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1034-L1036` → after: `L2366-L2405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2366-L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2366-L2405) · [Before (L1034-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1034-L1036)

```diff
-       } catch (eV) {
-         throw qe.create("interop-component-reg-failed", {
-           reason: eV
+       }), [BH, LH, CH]), "loading" === tH.status ? (0, WH.jsx)("div", {
+         className: "StudioReplaysMessage",
+         children: (0, WH.jsx)(kH.d, {})
+       }) : "preparing" === tH.status ? (0, WH.jsxs)("div", {
+         className: "StudioReplaysMessage",
+         children: [(0, WH.jsx)(kH.d, {}), hH("studio:replayPreparing")]
+       }) : "error" === tH.status ? (0, WH.jsxs)("div", {
+         className: "StudioReplaysMessage",
+         children: [tH.message, (0, WH.jsx)(mH.W, {
+           onClick: () => {
+             EH((HH => HH + 1))
+           },
+           children: hH("general:tryAgain")
+         })]
+       }) : (0, WH.jsx)(vL, {
+         className: "StudioReplayPlayer",
+ ... (24 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1039` → after: `L2538-L2639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2538-L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/294.js#L2538-L2639) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/294.js#L1039)

```diff
-     }), "PRIVATE")), (0, JV.O)(Yx, Ux), (0, JV.O)(Yx, Ux, "esm2017")
+ 
+       function cH(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         MH !== xH && (lH.current = MH), EH((LH => {
+           (0, bH.j)(LH, OL, MH), (0, bH.j)(LH, bL, (0, IH.j)(HH)), BH && (0, bH.j)(LH, kL, null)
+         }))
+       }
+       if ((0, AH.useEffect)((() => {
+           null !== YH && YH !== lH.current && vH(YH)
+         }), [YH]), (0, AH.useEffect)((() => {
+           VH.current && null !== UH.current && (VH.current = !1, UH.current.scrollIntoView({
+             block: "nearest",
+             behavior: "smooth"
+           }))
+         }), [xH, zH.status]), "loading" === zH.status) return (0, WH.jsx)("div", {
+         className: "StudioReplaysTab StudioReplaysMessage",
+ ... (86 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (268 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1)

```diff
- /*! For license information please see pxmq3aq.295.f9fd278f.chunk.js.LICENSE.txt */
+ /*! For license information please see cwj32u.295.30defb0f.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5-L91` → after: `L5-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5-L39) · [Before (L5-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L5-L91)

```diff
-     41819: (VV, eV, xV) => {
-         xV.r(eV), xV.d(eV, {
-           ActionCodeOperation: () => vV,
-           ActionCodeURL: () => Ie,
-           AuthCredential: () => oe,
-           AuthErrorCodes: () => BV,
-           EmailAuthCredential: () => Ke,
-           EmailAuthProvider: () => Oe,
-           FacebookAuthProvider: () => Jx,
-           FactorId: () => QV,
-           GithubAuthProvider: () => Ux,
-           GoogleAuthProvider: () => Yx,
-           OAuthCredential: () => ue,
-           OAuthProvider: () => xx,
-           OperationType: () => ZV,
-           PhoneAuthCredential: () => Se,
- ... (71 more removed lines; see GitHub link above)
+   41798: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => mh,
+       d: () => oh,
+       h: () => zz
+     });
+     var AH, rH = Object.defineProperty,
+       SH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? rH(HH, BH, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: LH
+       }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH),
+       hH = Object.defineProperty,
+       tH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? hH(HH, BH, {
+         enumerable: !0,
+ ... (19 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L93-L140` → after: `L41-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L41-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L41-L69) · [Before (L93-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L93-L140)

```diff
-         function UV(VV, eV) {
-           var xV = {};
-           for (var JV in VV) Object.prototype.hasOwnProperty.call(VV, JV) && eV.indexOf(JV) < 0 && (xV[JV] = VV[JV]);
-           if (null != VV && "function" === typeof Object.getOwnPropertySymbols) {
-             var YV = 0;
-             for (JV = Object.getOwnPropertySymbols(VV); YV < JV.length; YV++) eV.indexOf(JV[YV]) < 0 && Object.prototype.propertyIsEnumerable.call(VV, JV[YV]) && (xV[JV[YV]] = VV[JV[YV]])
-           }
-           return xV
-         }
-         Object.create;
-         Object.create;
-         "function" === typeof SuppressedError && SuppressedError;
-         var yV = xV(41802),
-           pV = xV(41787);
-         const QV = {
-             PHONE: "phone",
- ... (32 more removed lines; see GitHub link above)
+     function YH(HH) {
+       if (XH[HH]) return XH[HH];
+       const BH = globalThis[HH],
+         LH = BH.prototype,
+         AH = HH in CH ? CH[HH] : void 0,
+         rH = Boolean(AH && AH.every((HH => {
+           var BH, AH;
+           return Boolean(null == (AH = null == (BH = Object.getOwnPropertyDescriptor(LH, HH)) ? void 0 : BH.get) ? void 0 : AH.toString().includes("[native code]"))
+         }))),
+         SH = HH in EH ? EH[HH] : void 0,
+         hH = Boolean(SH && SH.every((HH => {
+           var BH;
+           return "function" === typeof LH[HH] && (null == (BH = LH[HH]) ? void 0 : BH.toString().includes("[native code]"))
+         })));
+       if (rH && hH && !globalThis.Zone) return XH[HH] = BH.prototype, BH.prototype;
+       try {
+ ... (13 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L142-L144` → after: `L71-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L71-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L71-L153) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L142-L144)

```diff
-         function rV() {
-           return {
-             "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
+     function QH(HH, BH, LH) {
+       var AH, rH;
+       const SH = null == (AH = uH[HH]) ? void 0 : AH[LH];
+       if (SH) return SH.call(BH);
+       const hH = YH(HH),
+         tH = null == (rH = Object.getOwnPropertyDescriptor(hH, LH)) ? void 0 : rH.get;
+       return tH ? ((uH[HH] || (uH[HH] = {}))[LH] = tH, tH.call(BH)) : BH[LH]
+     }
+     const WH = {};
+ 
+     function MH(HH, BH, LH) {
+       const AH = `${HH}.${String(LH)}`;
+       if (WH[AH]) return WH[AH].bind(BH);
+       const rH = YH(HH)[LH];
+       return "function" !== typeof rH ? BH[LH] : (WH[AH] = rH, rH.bind(BH))
+     }
+ ... (67 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L147-L253` → after: `L158-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L158-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L158-L373) · [Before (L147-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L147-L253)

```diff
-         const kV = function() {
-             return {
-               "admin-restricted-operation": "This operation is restricted to administrators only.",
-               "argument-error": "",
-               "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
-               "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
-               "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
-               "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
-               "cordova-not-ready": "Cordova framework is not ready.",
-               "cors-unsupported": "This browser is not supported.",
-               "credential-already-in-use": "This credential is already associated with a different user account.",
-               "custom-token-mismatch": "The custom token corresponds to a different audience.",
-               "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
-               "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
-               "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
-               "email-change-needs-verification": "Multi-factor users must always have a verified email.",
- ... (91 more removed lines; see GitHub link above)
+       }
+     };
+ 
+     function PH(HH) {
+       return HH.nodeType === HH.ELEMENT_NODE
+     }
+ 
+     function TH(HH) {
+       const BH = HH && "host" in HH && "mode" in HH && vH.host(HH) || null;
+       return Boolean(BH && "shadowRoot" in BH && vH.shadowRoot(BH) === HH)
+     }
+ 
+     function UH(HH) {
+       return "[object ShadowRoot]" === Object.prototype.toString.call(HH)
+     }
+ 
+ ... (200 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L255-L365` → after: `L375-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L375-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L375-L409) · [Before (L255-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L255-L365)

```diff
-           },
-           bV = rV,
-           EV = new JV.g("auth", "Firebase", {
-             "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
-           }),
-           BV = {
-             ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
-             ARGUMENT_ERROR: "auth/argument-error",
-             APP_NOT_AUTHORIZED: "auth/app-not-authorized",
-             APP_NOT_INSTALLED: "auth/app-not-installed",
-             CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
-             CODE_EXPIRED: "auth/code-expired",
-             CORDOVA_NOT_READY: "auth/cordova-not-ready",
-             CORS_UNSUPPORTED: "auth/cors-unsupported",
-             CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
-             CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
- ... (95 more removed lines; see GitHub link above)
+         }
+         return rH.push(HH), rH
+       }(HH, BH).join("/* rr_split */")
+     }
+     let DH = 1;
+     const wH = new RegExp("[^a-z0-9-_:]");
+ 
+     function ZH() {
+       return DH++
+     }
+     let dH, aH;
+     const sH = /^[^ \t\n\r\u000c]+/,
+       JH = /^[, \t\n\r\u000c]+/;
+     const iH = new WeakMap;
+ 
+     function pH(HH, BH) {
+ ... (19 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L368-L370` → after: `L412-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L412-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L412-L439) · [Before (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L368-L370)

```diff
-           if (jV.logLevel <= yV.d.ERROR) {
-             for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
-             jV.error(`Auth (${YV.e}): ${VV}`, ...xV)
+           let AH;
+           const rH = HH.exec(BH.substring(LH));
+           return rH ? (AH = rH[0], LH += AH.length, AH) : ""
+         }
+         const rH = [];
+         for (; AH(JH), !(LH >= BH.length);) {
+           let SH = AH(sH);
+           if ("," === SH.slice(-1)) SH = pH(HH, SH.substring(0, SH.length - 1)), rH.push(SH);
+           else {
+             let AH = "";
+             SH = pH(HH, SH);
+             let hH = !1;
+             for (;;) {
+               const HH = BH.charAt(LH);
+               if ("" === HH) {
+                 rH.push((SH + AH).trim());
+ ... (12 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L374-L377` → after: `L446-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L446-L448) · [Before (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L374-L377)

```diff
-         function tV(VV) {
-           for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
-           throw AV(VV, ...xV)
-         }
+     function LB(HH, BH, LH) {
+       return ["video", "audio"].includes(HH) && "autoplay" === oH(BH)
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L379-L382` → after: `L450-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L450-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L450-L480) · [Before (L379-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L379-L382)

```diff
-         function FV(VV) {
-           for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
-           return AV(VV, ...xV)
-         }
+     function AB(HH, BH, LH) {
+       if (!HH) return !1;
+       if (HH.nodeType !== HH.ELEMENT_NODE) return !!LH && AB(vH.parentNode(HH), BH, LH);
+       for (let AH = HH.classList.length; AH--;) {
+         const LH = HH.classList[AH];
+         if (BH.test(LH)) return !0
+       }
+       return !!LH && AB(vH.parentNode(HH), BH, LH)
+     }
+ 
+     function rB(HH, BH, LH, AH) {
+       let rH;
+       if (PH(HH)) {
+         if (rH = HH, !vH.childNodes(rH).length) return !1
+       } else {
+         if (null === vH.parentElement(HH)) return !1;
+ ... (15 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L384-L386` → after: `L482-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L482-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L482-L657) · [Before (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L384-L386)

```diff
-         function TV(VV, eV, xV) {
-           const YV = Object.assign(Object.assign({}, bV()), {
-             [eV]: xV
+     function SB(HH, BH) {
+       const {
+         doc: LH,
+         mirror: AH,
+         blockClass: rH,
+         blockSelector: SH,
+         needsMask: hH,
+         inlineStylesheet: tH,
+         maskInputOptions: CH = {},
+         maskTextFn: EH,
+         maskInputFn: XH,
+         dataURLOptions: GH = {},
+         inlineImages: YH,
+         recordCanvas: uH,
+         keepIframeSrcFn: QH,
+         newlyAddedElement: WH = !1,
+ ... (160 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L388-L391` → after: `L659-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L659-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L659-L695) · [Before (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L388-L391)

```diff
-           return new JV.g("auth", "Firebase", YV).create(eV, {
-             appName: VV.name
-           })
-         }
+         case HH.TEXT_NODE:
+           return function(HH, BH) {
+             const {
+               needsMask: LH,
+               maskTextFn: AH,
+               rootId: rH,
+               cssCaptured: SH
+             } = BH, hH = vH.parentNode(HH), tH = hH && hH.tagName;
+             let CH = "";
+             const EH = "STYLE" === tH || void 0,
+               XH = "SCRIPT" === tH || void 0;
+             XH ? CH = "SCRIPT_PLACEHOLDER" : SH || (CH = vH.textContent(HH), EH && CH && (CH = gH(CH, HB(BH.doc))));
+             !EH && !XH && CH && LH && (CH = AH ? AH(CH, vH.parentElement(HH)) : CH.replace(/[\S]/g, "*"));
+             return {
+               type: zH.Text,
+               textContent: CH || "",
+ ... (21 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L393-L395` → after: `L697-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L697-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L697-L699) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L393-L395)

```diff
-         function PV(VV, eV, xV) {
-           if (!(eV instanceof xV)) throw xV.name !== eV.constructor.name && tV(VV, "argument-error"), TV(VV, "argument-error", `Type of ${eV.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
-         }
+     function hB(HH) {
+       return void 0 === HH || null === HH ? "" : HH.toLowerCase()
+     }
```

#### 13. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L397-L402` → after: `L701-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L701-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L701-L830) · [Before (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L397-L402)

```diff
-         function AV(VV) {
-           for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
-           if ("string" !== typeof VV) {
-             const eV = xV[0],
-               JV = [...xV.slice(1)];
-             return JV[0] && (JV[0].appName = VV.name), VV._errorFactory.create(eV, ...JV)
+     function tB(HH) {
+       return !0 === HH || "all" === HH ? {
+         script: !0,
+         comment: !0,
+         headFavicon: !0,
+         headWhitespace: !0,
+         headMetaSocial: !0,
+         headMetaRobots: !0,
+         headMetaHttpEquiv: !0,
+         headMetaVerification: !0,
+         headMetaAuthorship: "all" === HH,
+         headMetaDescKeywords: "all" === HH,
+         headTitleMutations: "all" === HH
+       } : HH || {}
+     }
+ 
+ ... (114 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L406-L410` → after: `L833-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L833-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L833-L955) · [Before (L406-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L406-L410)

```diff
- 
-         function NV(VV, eV) {
-           if (!VV) {
-             for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
-             throw AV(eV, ...JV)
+         let TH = null;
+         if (PH(HH) && (TH = vH.shadowRoot(HH)))
+           for (const HH of Array.from(vH.childNodes(TH))) {
+             const LH = zB(HH, BH);
+             LH && (UH(TH) && (LH.isShadow = !0), qH.childNodes.push(LH))
+           }
+       }
+       const NH = vH.parentNode(HH);
+       return NH && TH(NH) && UH(NH) && (qH.isShadow = !0), qH.type === zH.Element && "iframe" === qH.tagName && function(HH, BH, LH) {
+         const AH = HH.contentWindow;
+         if (!AH) return;
+         let rH, SH = !1;
+         try {
+           rH = AH.document.readyState
+         } catch (tH) {
+           return
+ ... (107 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L414-L417` → after: `L960-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L960-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L960-L962) · [Before (L414-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L414-L417)

```diff
-         function XV(VV) {
-           const eV = "INTERNAL ASSERTION FAILED: " + VV;
-           throw qV(eV), new Error(eV)
-         }
+     function GB(HH) {
+       return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
+     }
```

#### 16. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L419-L421` → after: `L964-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L964-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L964-L987) · [Before (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L419-L421)

```diff
-         function MV(VV, eV) {
-           VV || XV(eV)
-         }
+     function YB(HH) {
+       if (HH.__esModule) return HH;
+       var BH = HH.default;
+       if ("function" == typeof BH) {
+         var LH = function HH() {
+           return this instanceof HH ? Reflect.construct(BH, arguments, this.constructor) : BH.apply(this, arguments)
+         };
+         LH.prototype = BH.prototype
+       } else LH = {};
+       return Object.defineProperty(LH, "__esModule", {
+         value: !0
+       }), Object.keys(HH).forEach((function(BH) {
+         var AH = Object.getOwnPropertyDescriptor(HH, BH);
+         Object.defineProperty(LH, BH, AH.get ? AH : {
+           enumerable: !0,
+           get: function() {
+ ... (8 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L423-L426` → after: `L989-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L989-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L989-L1031) · [Before (L423-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L423-L426)

```diff
-         function zV() {
-           var VV;
-           return "undefined" !== typeof self && (null === (VV = self.location) || void 0 === VV ? void 0 : VV.href) || ""
-         }
+     function WB() {
+       if (uB) return QB.exports;
+       uB = 1;
+       var HH = String,
+         BH = function() {
+           return {
+             isColorSupported: !1,
+             reset: HH,
+             bold: HH,
+             dim: HH,
+             italic: HH,
+             underline: HH,
+             inverse: HH,
+             hidden: HH,
+             strikethrough: HH,
+             black: HH,
+ ... (27 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L428-L429` → after: `L1033-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1033-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1033-L1069) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L428-L429)

```diff
-         function GV() {
-           return "http:" === WV() || "https:" === WV()
+     function PB() {
+       if (vB) return xB;
+       vB = 1;
+       let HH = WB(),
+         BH = MB;
+       class LH extends Error {
+         constructor(HH, BH, AH, rH, SH, hH) {
+           super(HH), this.name = "CssSyntaxError", this.reason = HH, SH && (this.file = SH), rH && (this.source = rH), hH && (this.plugin = hH), "undefined" !== typeof BH && "undefined" !== typeof AH && ("number" === typeof BH ? (this.line = BH, this.column = AH) : (this.line = B … [truncated]
+         }
+         setMessage() {
+           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
+         }
+         showSourceCode(LH) {
+           if (!this.source) return "";
+           let AH = this.source;
+           null == LH && (LH = HH.isColorSupported), BH && LH && (AH = BH(AH));
+ ... (21 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L431-L434` → after: `L1071-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1071-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1071-L1073) · [Before (L431-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L431-L434)

```diff
- 
-         function WV() {
-           var VV;
-           return "undefined" !== typeof self && (null === (VV = self.location) || void 0 === VV ? void 0 : VV.protocol) || null
+         toString() {
+           let HH = this.showSourceCode();
+           return HH && (HH = "\n\n" + HH + "\n"), this.name + ": " + this.message + HH
```

#### 20. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L436-L441` → after: `L1075-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1075-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1075-L1123) · [Before (L436-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L436-L441)

```diff
-         class RV {
-           constructor(VV, eV) {
-             this.shortDelay = VV, this.longDelay = eV, MV(eV > VV, "Short delay should be less than long delay!"), this.isMobile = (0, JV._)() || (0, JV.bb)()
-           }
-           get() {
-             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (GV() || (0, JV.Q)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
+       }
+       return xB = LH, LH.default = LH, xB
+     }
+     var TB, UB, VB, OB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, jB, nB, FB, DB, wB, ZB, dB, aB, sB, JB, iB, pB, yB, HL, BL, LL, AL, rL, SL, hL, tL, zL, CL, EL, XL, GL, YL, uL, QL, WL, ML, xL, vL, PL, TL, UL = {};
+ 
+     function VL() {
+       return TB || (TB = 1, UL.isClean = Symbol("isClean"), UL.my = Symbol("my")), UL
+     }
+ 
+     function OL() {
+       if (VB) return UB;
+       VB = 1;
+       const HH = {
+         after: "\n",
+         beforeClose: "\n",
+         beforeComment: "\n",
+ ... (33 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L444-L450` → after: `L1127-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1127-L1129) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L444-L450)

```diff
- 
-         function gV(VV, eV) {
-           MV(VV.emulator, "Emulator should always be set here");
-           const {
-             url: xV
-           } = VV.emulator;
-           return eV ? `${xV}${eV.startsWith("/")?eV.slice(1):eV}` : xV
+         block(HH, BH) {
+           let LH, AH = this.raw(HH, "between", "beforeOpen");
+           this.builder(BH + AH + "{", HH, "start"), HH.nodes && HH.nodes.length ? (this.body(HH), LH = this.raw(HH, "after")) : LH = this.raw(HH, "after", "emptyBody"), LH && this.builder(LH), this.builder("}", HH, "end")
```

#### 22. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L452-L457` → after: `L1131-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1131-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1131-L1138) · [Before (L452-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L452-L457)

```diff
-         class DV {
-           static initialize(VV, eV, xV) {
-             this.fetchImpl = VV, eV && (this.headersImpl = eV), xV && (this.responseImpl = xV)
-           }
-           static fetch() {
-             return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void XV("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+         body(HH) {
+           let BH = HH.nodes.length - 1;
+           for (; BH > 0 && "comment" === HH.nodes[BH].type;) BH -= 1;
+           let LH = this.raw(HH, "semicolon");
+           for (let AH = 0; AH < HH.nodes.length; AH++) {
+             let rH = HH.nodes[AH],
+               SH = this.raw(rH, "before");
+             SH && this.builder(SH), this.stringify(rH, BH !== AH || LH)
```

#### 23. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L459-L463` → after: `L1140-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1140-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1140-L1170) · [Before (L459-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L459-L463)

```diff
-           static headers() {
-             return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void XV("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
-           }
-           static response() {
-             return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void XV("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+         }
+         comment(HH) {
+           let BH = this.raw(HH, "left", "commentLeft"),
+             LH = this.raw(HH, "right", "commentRight");
+           this.builder("/*" + BH + HH.text + LH + "*/", HH)
+         }
+         decl(HH, BH) {
+           let LH = this.raw(HH, "between", "colon"),
+             AH = HH.prop + LH + this.rawValue(HH, "value");
+           HH.important && (AH += HH.raws.important || " !important"), BH && (AH += ";"), this.builder(AH, HH)
+         }
+         document(HH) {
+           this.body(HH)
+         }
+         raw(BH, LH, AH) {
+           let rH;
+ ... (15 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L466-L537` → after: `L1175-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1175-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1175-L1179) · [Before (L466-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L466-L537)

```diff
-         const iV = {
-             CREDENTIAL_MISMATCH: "custom-token-mismatch",
-             MISSING_CUSTOM_TOKEN: "internal-error",
-             INVALID_IDENTIFIER: "invalid-email",
-             MISSING_CONTINUE_URI: "internal-error",
-             INVALID_PASSWORD: "wrong-password",
-             MISSING_PASSWORD: "missing-password",
-             EMAIL_EXISTS: "email-already-in-use",
-             PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
-             INVALID_IDP_RESPONSE: "invalid-credential",
-             INVALID_PENDING_TOKEN: "invalid-credential",
-             FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
-             MISSING_REQ_TYPE: "internal-error",
-             EMAIL_NOT_FOUND: "user-not-found",
-             RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
-             EXPIRED_OOB_CODE: "expired-action-code",
- ... (56 more removed lines; see GitHub link above)
+         rawBeforeClose(HH) {
+           let BH;
+           return HH.walk((HH => {
+             if (HH.nodes && HH.nodes.length > 0 && "undefined" !== typeof HH.raws.after) return BH = HH.raws.after, BH.includes("\n") && (BH = BH.replace(/[^\n]+$/, "")), !1
+           })), BH && (BH = BH.replace(/\S/g, "")), BH
```

#### 25. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L539-L557` → after: `L1181-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1181-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1181-L1224) · [Before (L539-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L539-L557)

```diff
-         async function cV(VV, eV, xV) {
-           VV._canInitEmulator = !1;
-           const YV = Object.assign(Object.assign({}, iV), eV);
-           try {
-             const eV = new LV(VV),
-               JV = await Promise.race([xV(), eV.promise]);
-             eV.clearNetworkTimeout();
-             const UV = await JV.json();
-             if ("needConfirmation" in UV) throw fV(VV, "account-exists-with-different-credential", UV);
-             if (JV.ok && !("errorMessage" in UV)) return UV;
-             {
-               const eV = JV.ok ? UV.errorMessage : UV.error.message,
-                 [xV, yV] = eV.split(" : ");
-               if ("FEDERATED_USER_ID_ALREADY_LINKED" === xV) throw fV(VV, "credential-already-in-use", UV);
-               if ("EMAIL_EXISTS" === xV) throw fV(VV, "email-already-in-use", UV);
-               if ("USER_DISABLED" === xV) throw fV(VV, "user-disabled", UV);
- ... (3 more removed lines; see GitHub link above)
+         rawBeforeComment(HH, BH) {
+           let LH;
+           return HH.walkComments((HH => {
+             if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
+           })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeDecl") : LH && (LH = LH.replace(/\S/g, "")), LH
+         }
+         rawBeforeDecl(HH, BH) {
+           let LH;
+           return HH.walkDecls((HH => {
+             if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
+           })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeRule") : LH && (LH = LH.replace(/\S/g, "")), LH
+         }
+         rawBeforeOpen(HH) {
+           let BH;
+           return HH.walk((HH => {
+             if ("decl" !== HH.type && (BH = HH.raws.between, "undefined" !== typeof BH)) return !1
+ ... (28 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L559-L564` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1226) · [Before (L559-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L559-L564)

```diff
-           } catch (UV) {
-             if (UV instanceof JV.j) throw UV;
-             tV(VV, "network-request-failed", {
-               message: String(UV)
-             })
-           }
+           })), BH
```

#### 27. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L566-L571` → after: `L1228-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1228-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1228-L1232) · [Before (L566-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L566-L571)

```diff
-         async function hV(VV, eV, xV, JV) {
-           let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-           const UV = await oV(VV, eV, xV, JV, YV);
-           return "mfaPendingCredential" in UV && tV(VV, "multi-factor-auth-required", {
-             _serverResponse: UV
-           }), UV
+         rawSemicolon(HH) {
+           let BH;
+           return HH.walk((HH => {
+             if (HH.nodes && HH.nodes.length && "decl" === HH.last.type && (BH = HH.raws.semicolon, "undefined" !== typeof BH)) return !1
+           })), BH
```

#### 28. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L573-L576` → after: `L1234-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1234-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1234-L1237) · [Before (L573-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L573-L576)

```diff
- 
-         function lV(VV, eV, xV, JV) {
-           const YV = `${eV}${xV}?${JV}`;
-           return VV.config.emulator ? gV(VV.config, YV) : `${VV.config.apiScheme}://${YV}`
+         rawValue(HH, BH) {
+           let LH = HH[BH],
+             AH = HH.raws[BH];
+           return AH && AH.value === LH ? AH.raw : LH
```

#### 29. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L578-L586` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1239-L1240) · [Before (L578-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L578-L586)

```diff
-         class LV {
-           constructor(VV) {
-             this.auth = VV, this.timer = null, this.promise = new Promise(((VV, eV) => {
-               this.timer = setTimeout((() => eV(FV(this.auth, "network-request-failed"))), CV.get())
-             }))
-           }
-           clearNetworkTimeout() {
-             clearTimeout(this.timer)
-           }
+         root(HH) {
+           this.body(HH), HH.raws.after && this.builder(HH.raws.after)
```

#### 30. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L588-L595` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1242-L1243) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L588-L595)

```diff
- 
-         function fV(VV, eV, xV) {
-           const JV = {
-             appName: VV.name
-           };
-           xV.email && (JV.email = xV.email), xV.phoneNumber && (JV.phoneNumber = xV.phoneNumber);
-           const YV = FV(VV, eV, JV);
-           return YV.customData._tokenResponse = xV, YV
+         rule(HH) {
+           this.block(HH, this.rawValue(HH, "selector")), HH.raws.ownSemicolon && this.builder(HH.raws.ownSemicolon, HH, "end")
```

#### 31. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L597-L602` → after: `L1245-L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1245-L1247) · [Before (L597-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L597-L602)

```diff
- 
-         function mV(VV) {
-           if (VV) try {
-             const eV = new Date(Number(VV));
-             if (!isNaN(eV.getTime())) return eV.toUTCString()
-           } catch (eV) {}
+         stringify(HH, BH) {
+           if (!this[HH.type]) throw new Error("Unknown AST node type " + HH.type + ". Maybe you need to change PostCSS stringifier.");
+           this[HH.type](HH, BH)
```

#### 32. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L605-L607` → after: `L1253-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1253-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1253-L1298) · [Before (L605-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L605-L607)

```diff
-         function KV(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           return (0, JV.L)(VV).getIdToken(eV)
+     function bL() {
+       if (bB) return OB;
+       bB = 1;
+       let HH = OL();
+ 
+       function BH(BH, LH) {
+         new HH(LH).stringify(BH)
+       }
+       return OB = BH, BH.default = BH, OB
+     }
+ 
+     function kL() {
+       if (mB) return kB;
+       mB = 1;
+       let {
+         isClean: HH,
+ ... (30 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L609-L616` → after: `L1300-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1300-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1300-L1347) · [Before (L609-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L609-L616)

```diff
-         async function HV(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const xV = (0, JV.L)(VV),
-             YV = await xV.getIdToken(eV),
-             UV = sV(YV);
-           NV(UV && UV.exp && UV.auth_time && UV.iat, xV.auth, "internal-error");
-           const yV = "object" === typeof UV.firebase ? UV.firebase : void 0,
-             pV = null === yV || void 0 === yV ? void 0 : yV.sign_in_provider;
+         after(HH) {
+           return this.parent.insertAfter(this, HH), this
+         }
+         assign() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           for (let BH in HH) this[BH] = HH[BH];
+           return this
+         }
+         before(HH) {
+           return this.parent.insertBefore(this, HH), this
+         }
+         cleanRaws(HH) {
+           delete this.raws.before, delete this.raws.after, HH || delete this.raws.between
+         }
+         clone() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+ ... (32 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L618-L624` → after: `L1349-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1349-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1349-L1350) · [Before (L618-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L618-L624)

```diff
-             claims: UV,
-             token: YV,
-             authTime: mV(uV(UV.auth_time)),
-             issuedAtTime: mV(uV(UV.iat)),
-             expirationTime: mV(uV(UV.exp)),
-             signInProvider: pV || null,
-             signInSecondFactor: (null === yV || void 0 === yV ? void 0 : yV.sign_in_second_factor) || null
+             get: (HH, BH) => "proxyOf" === BH ? HH : "root" === BH ? () => HH.root().toProxy() : HH[BH],
+             set: (HH, BH, LH) => (HH[BH] === LH || (HH[BH] = LH, "prop" !== BH && "value" !== BH && "name" !== BH && "params" !== BH && "important" !== BH && "text" !== BH || HH.markDirty()), !0)
```

#### 35. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L627-L629` → after: `L1353-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1353-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1353-L1358) · [Before (L627-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L627-L629)

```diff
- 
-         function uV(VV) {
-           return 1e3 * Number(VV)
+         markDirty() {
+           if (this[HH]) {
+             this[HH] = !1;
+             let BH = this;
+             for (; BH = BH.parent;) BH[HH] = !1
+           }
```

#### 36. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L631-L639` → after: `L1360-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1360-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1360-L1369) · [Before (L631-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L631-L639)

```diff
- 
-         function sV(VV) {
-           const [eV, xV, YV] = VV.split(".");
-           if (void 0 === eV || void 0 === xV || void 0 === YV) return qV("JWT malformed, contained fewer than 3 sections"), null;
-           try {
-             const VV = (0, JV.o)(xV);
-             return VV ? JSON.parse(VV) : (qV("Failed to decode base64 JWT payload"), null)
-           } catch (UV) {
-             return qV("Caught error parsing JWT payload as JSON", null === UV || void 0 === UV ? void 0 : UV.toString()), null
+         next() {
+           if (!this.parent) return;
+           let HH = this.parent.index(this);
+           return this.parent.nodes[HH + 1]
+         }
+         positionBy(HH, BH) {
+           let LH = this.source.start;
+           if (HH.index) LH = this.positionInside(HH.index, BH);
+           else if (HH.word) {
+             let AH = (BH = this.toString()).indexOf(HH.word); - 1 !== AH && (LH = this.positionInside(AH, BH))
```

#### 37. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L642-L652` → after: `L1373-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1373-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1373-L1380) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L642-L652)

```diff
-         async function SV(VV, eV) {
-           if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return eV;
-           try {
-             return await eV
-           } catch (xV) {
-             throw xV instanceof JV.j && function(VV) {
-               let {
-                 code: eV
-               } = VV;
-               return "auth/user-disabled" === eV || "auth/user-token-expired" === eV
-             }(xV) && VV.auth.currentUser === VV && await VV.auth.signOut(), xV
+         positionInside(HH, BH) {
+           let LH = BH || this.toString(),
+             AH = this.source.start.column,
+             rH = this.source.start.line;
+           for (let SH = 0; SH < HH; SH++) "\n" === LH[SH] ? (AH = 1, rH += 1) : AH += 1;
+           return {
+             column: AH,
+             line: rH
```

#### 38. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L655-L657` → after: `L1383-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1383-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1383-L1430) · [Before (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L655-L657)

```diff
-         class IV {
-           constructor(VV) {
-             this.user = VV, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
+         prev() {
+           if (!this.parent) return;
+           let HH = this.parent.index(this);
+           return this.parent.nodes[HH - 1]
+         }
+         rangeBy(HH) {
+           let BH = {
+               column: this.source.start.column,
+               line: this.source.start.line
+             },
+             LH = this.source.end ? {
+               column: this.source.end.column + 1,
+               line: this.source.end.line
+             } : {
+               column: BH.column + 1,
+               line: BH.line
+ ... (32 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L659-L660` → after: `L1432-L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1432-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1432-L1457) · [Before (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L659-L660)

```diff
-           _start() {
-             this.isRunning || (this.isRunning = !0, this.schedule())
+           return this
+         }
+         root() {
+           let HH = this;
+           for (; HH.parent && "document" !== HH.parent.type;) HH = HH.parent;
+           return HH
+         }
+         toJSON(HH, BH) {
+           let LH = {},
+             AH = null == BH;
+           BH = BH || new Map;
+           let rH = 0;
+           for (let SH in this) {
+             if (!Object.prototype.hasOwnProperty.call(this, SH)) continue;
+             if ("parent" === SH || "proxyCache" === SH) continue;
+             let HH = this[SH];
+ ... (10 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L662-L663` → after: `L1459-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1459-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1459-L1520) · [Before (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L662-L663)

```diff
-           _stop() {
-             this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
+           return AH && (LH.inputs = [...BH.keys()].map((HH => HH.toJSON()))), LH
+         }
+         toProxy() {
+           return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
+         }
+         toString() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH;
+           HH.stringify && (HH = HH.stringify);
+           let BH = "";
+           return HH(this, (HH => {
+             BH += HH
+           })), BH
+         }
+         warn(HH, BH, LH) {
+           let AH = {
+             node: this
+ ... (46 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L665-L669` → after: `L1522-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1522-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1522-L1581) · [Before (L665-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L665-L669)

```diff
-           getInterval(VV) {
-             var eV;
-             if (VV) {
-               const VV = this.errorBackoff;
-               return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), VV
+         }
+       }, fB
+     }
+ 
+     function IL() {
+       if (cB) return KB;
+       cB = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+       } = MB, {
+         existsSync: LH,
+         readFileSync: AH
+       } = MB, {
+         dirname: rH,
+         join: SH
+ ... (44 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L671-L673` → after: `L1583-L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1583-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1583-L1588) · [Before (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L671-L673)

```diff
-               this.errorBackoff = 3e4;
-               const VV = (null !== (eV = this.user.stsTokenManager.expirationTime) && void 0 !== eV ? eV : 0) - Date.now() - 3e5;
-               return Math.max(0, VV)
+               let HH = AH(LH);
+               if (HH) {
+                 let BH = this.loadFile(HH);
+                 if (!BH) throw new Error("Unable to load previous source map: " + HH.toString());
+                 return BH
+               }
```

#### 43. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L675-L688` → after: `L1590-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1590-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1590-L1594) · [Before (L675-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L675-L688)

```diff
-           }
-           schedule() {
-             let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-             if (!this.isRunning) return;
-             const eV = this.getInterval(VV);
-             this.timerId = setTimeout((async () => {
-               await this.iteration()
-             }), eV)
-           }
-           async iteration() {
-             try {
-               await this.user.getIdToken(!0)
-             } catch (VV) {
-               return void("auth/network-request-failed" === (null === VV || void 0 === VV ? void 0 : VV.code) && this.schedule(!0))
+           } else {
+             if (this.inline) return this.decodeInline(this.annotation);
+             if (this.annotation) {
+               let HH = this.annotation;
+               return LH && (HH = SH(rH(LH), HH)), this.loadFile(HH)
```

#### 44. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L693-L698` → after: `L1598-L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1598-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1598-L1633) · [Before (L693-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L693-L698)

```diff
-         class dV {
-           constructor(VV, eV) {
-             this.createdAt = VV, this.lastLoginAt = eV, this._initializeTime()
-           }
-           _initializeTime() {
-             this.lastSignInTime = mV(this.lastLoginAt), this.creationTime = mV(this.createdAt)
+         startWith(HH, BH) {
+           return !!HH && HH.substr(0, BH.length) === BH
+         }
+         withContent() {
+           return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
+         }
+       }
+       return KB = hH, hH.default = hH, KB
+     }
+ 
+     function fL() {
+       if (qB) return eB;
+       qB = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+ ... (20 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L700-L701` → after: `L1635-L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1635-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1635-L1698) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L700-L701)

```diff
-           _copy(VV) {
-             this.createdAt = VV.createdAt, this.lastLoginAt = VV.lastLoginAt, this._initializeTime()
+           this.file || (this.id = "<input css " + hH(6) + ">"), this.map && (this.map.file = this.from)
+         }
+         error(HH, BH, LH) {
+           let rH, SH, hH, tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+           if (BH && "object" === typeof BH) {
+             let HH = BH,
+               AH = LH;
+             if ("number" === typeof HH.offset) {
+               let AH = this.fromOffset(HH.offset);
+               BH = AH.line, LH = AH.col
+             } else BH = HH.line, LH = HH.column;
+             if ("number" === typeof AH.offset) {
+               let HH = this.fromOffset(AH.offset);
+               SH = HH.line, hH = HH.col
+             } else SH = AH.line, hH = AH.column
+           } else if (!LH) {
+ ... (48 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L703-L707` → after: `L1700-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1700-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1700-L1702) · [Before (L703-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L703-L707)

```diff
-           toJSON() {
-             return {
-               createdAt: this.createdAt,
-               lastLoginAt: this.lastLoginAt
-             }
+           return {
+             col: HH - LH[AH] + 1,
+             line: AH + 1
```

#### 47. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L710-L739` → after: `L1705-L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1705-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1705-L1825) · [Before (L710-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L710-L739)

```diff
-         async function OV(VV) {
-           var eV;
-           const xV = VV.auth,
-             JV = await VV.getIdToken(),
-             YV = await SV(VV, async function(VV, eV) {
-               return oV(VV, "POST", "/v1/accounts:lookup", eV)
-             }(xV, {
-               idToken: JV
-             }));
-           NV(null === YV || void 0 === YV ? void 0 : YV.users.length, xV, "internal-error");
-           const yV = YV.users[0];
-           VV._notifyReloadListener(yV);
-           const pV = (null === (eV = yV.providerUserInfo) || void 0 === eV ? void 0 : eV.length) ? yV.providerUserInfo.map((VV => {
-             var {
-               providerId: eV
-             } = VV, xV = UV(VV, ["providerId"]);
- ... (14 more removed lines; see GitHub link above)
+         mapResolve(HH) {
+           return /^\w+:\/\//.test(HH) ? HH : SH(this.map.consumer().sourceRoot || this.map.root || ".", HH)
+         }
+         origin(HH, BH, SH, hH) {
+           if (!this.map) return !1;
+           let tH, zH, CH = this.map.consumer(),
+             EH = CH.originalPositionFor({
+               column: BH,
+               line: HH
+             });
+           if (!EH.source) return !1;
+           "number" === typeof SH && (tH = CH.originalPositionFor({
+             column: hH,
+             line: SH
+           })), zH = rH(EH.source) ? AH(EH.source) : new URL(EH.source, this.map.consumer().sourceRoot || AH(this.map.mapFile));
+           let XH = {
+ ... (105 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L741-L750` → after: `L1827-L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1827-L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1827-L1835) · [Before (L741-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L741-L750)

```diff
-               uid: yV.localId,
-               displayName: yV.displayName || null,
-               photoURL: yV.photoUrl || null,
-               email: yV.email || null,
-               emailVerified: yV.emailVerified || !1,
-               phoneNumber: yV.phoneNumber || null,
-               tenantId: yV.tenantId || null,
-               providerData: QV,
-               metadata: new dV(yV.createdAt, yV.lastLoginAt),
-               isAnonymous: rV
+               generated: {
+                 column: 0,
+                 line: 0
+               },
+               original: {
+                 column: 0,
+                 line: 0
+               },
+               source: ""
```

#### 49. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L752-L756` → after: `L1837-L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1837-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1837-L1844) · [Before (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L752-L756)

```diff
-           Object.assign(VV, kV)
-         }
-         async function Ve(VV) {
-           const eV = (0, JV.L)(VV);
-           await OV(eV), await eV.auth._persistUserIfCurrent(eV), eV.auth._notifyListenersIfCurrent(eV)
+           this.stringify(this.root, ((BH, tH, zH) => {
+             if (this.css += BH, tH && "end" !== zH && (hH.generated.line = AH, hH.generated.column = rH - 1, tH.source && tH.source.start ? (hH.source = this.sourcePath(tH), hH.original.line = tH.source.start.line, hH.original.column = tH.source.start.column - 1, this.map.addMapp … [truncated]
+               let HH = tH.parent || {
+                 raws: {}
+               };
+               ("decl" === tH.type || "atrule" === tH.type && !tH.nodes) && tH === HH.last && !HH.raws.semicolon || (tH.source && tH.source.end ? (hH.source = this.sourcePath(tH), hH.original.line = tH.source.end.line, hH.original.column = tH.source.end.column - 1, hH.generated.li … [truncated]
+             }
+           }))
```

#### 50. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L758-L806` → after: `L1846-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1846-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1846-L1895) · [Before (L758-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L758-L806)

```diff
-         class ee {
-           constructor() {
-             this.refreshToken = null, this.accessToken = null, this.expirationTime = null
-           }
-           get isExpired() {
-             return !this.expirationTime || Date.now() > this.expirationTime - 3e4
-           }
-           updateFromServerResponse(VV) {
-             NV(VV.idToken, "internal-error"), NV("undefined" !== typeof VV.idToken, "internal-error"), NV("undefined" !== typeof VV.refreshToken, "internal-error");
-             const eV = "expiresIn" in VV && "undefined" !== typeof VV.expiresIn ? Number(VV.expiresIn) : function(VV) {
-               const eV = sV(VV);
-               return NV(eV, "internal-error"), NV("undefined" !== typeof eV.exp, "internal-error"), NV("undefined" !== typeof eV.iat, "internal-error"), Number(eV.exp) - Number(eV.iat)
-             }(VV.idToken);
-             this.updateTokensAndExpiration(VV.idToken, VV.refreshToken, eV)
-           }
-           async getToken(VV) {
- ... (33 more removed lines; see GitHub link above)
+         isAnnotation() {
+           return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((HH => HH.annotation)))
+         }
+         isInline() {
+           if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
+           let HH = this.mapOpts.annotation;
+           return ("undefined" === typeof HH || !0 === HH) && (!this.previous().length || this.previous().some((HH => HH.inline)))
+         }
+         isMap() {
+           return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
+         }
+         isSourcesContent() {
+           return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((HH => HH.withContent()))
+         }
+         outputFile() {
+           return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
+ ... (34 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L834-L842` → after: `L1898-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1898-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1898-L1901) · [Before (L834-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L834-L842)

```diff
-           }
-           _assign(VV) {
-             this.accessToken = VV.accessToken, this.refreshToken = VV.refreshToken, this.expirationTime = VV.expirationTime
-           }
-           _clone() {
-             return Object.assign(new ee, this.toJSON())
-           }
-           _performRefresh() {
-             return XV("not implemented")
+           }));
+           else if (this.css) {
+             let HH = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
+             this.map.setSourceContent(HH, this.css)
```

#### 52. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L845-L849` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1904-L1905) · [Before (L845-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L845-L849)

```diff
- 
-         function xe(VV, eV) {
-           NV("string" === typeof VV || "undefined" === typeof VV, "internal-error", {
-             appName: eV
-           })
+         sourcePath(HH) {
+           return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(HH.source.input.from) : this.toUrl(this.path(HH.source.input.from))
```

#### 53. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L851-L972` → after: `L1907-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1907-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1907-L1915) · [Before (L851-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L851-L972)

```diff
-         class Je {
-           constructor(VV) {
-             var {
-               uid: eV,
-               auth: xV,
-               stsTokenManager: JV
-             } = VV, YV = UV(VV, ["uid", "auth", "stsTokenManager"]);
-             this.providerId = "firebase", this.proactiveRefresh = new IV(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = eV, this.auth = xV, this.stsTokenManager = JV, this.accessToken = JV.accessToken, this.displayName = YV.displayName || null, this.ema … [truncated]
-           }
-           async getIdToken(VV) {
-             const eV = await SV(this, this.stsTokenManager.getToken(this.auth, VV));
-             return NV(eV, this.auth, "internal-error"), this.accessToken !== eV && (this.accessToken = eV, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), eV
-           }
-           getIdTokenResult(VV) {
-             return HV(this, VV)
-           }
- ... (106 more removed lines; see GitHub link above)
+         toBase64(HH) {
+           return Buffer ? Buffer.from(HH).toString("base64") : window.btoa(unescape(encodeURIComponent(HH)))
+         }
+         toFileUrl(HH) {
+           let BH = this.memoizedFileURLs.get(HH);
+           if (BH) return BH;
+           if (hH) {
+             let BH = hH(HH).toString();
+             return this.memoizedFileURLs.set(HH, BH), BH
```

#### 54. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L975` → after: `L1919-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1919-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1919-L1927) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L975)

```diff
-         const Ye = new Map;
+         toUrl(HH) {
+           let BH = this.memoizedURLs.get(HH);
+           if (BH) return BH;
+           "\\" === SH && (HH = HH.replace(/\\/g, "/"));
+           let LH = encodeURI(HH).replace(/[#?]/g, encodeURIComponent);
+           return this.memoizedURLs.set(HH, LH), LH
+         }
+       }
+     }
```

#### 55. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L977-L980` → after: `L1929-L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1929-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L1929-L2061) · [Before (L977-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L977-L980)

```diff
-         function Ue(VV) {
-           MV(VV instanceof Function, "Expected a class definition");
-           let eV = Ye.get(VV);
-           return eV ? (MV(eV instanceof VV, "Instance stored in cache mismatched with class"), eV) : (eV = new VV, Ye.set(VV, eV), eV)
+     function KL() {
+       if (jB) return RB;
+       jB = 1;
+       let HH = kL();
+       class BH extends HH {
+         constructor(HH) {
+           super(HH), this.type = "comment"
+         }
+       }
+       return RB = BH, BH.default = BH, RB
+     }
+ 
+     function cL() {
+       if (FB) return nB;
+       FB = 1;
+       let HH, BH, LH, AH, {
+ ... (117 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L982-L1000` → after: `L2063-L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2063-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2063-L2066) · [Before (L982-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L982-L1000)

```diff
-         class ye {
-           constructor() {
-             this.type = "NONE", this.storage = {}
-           }
-           async _isAvailable() {
-             return !0
-           }
-           async _set(VV, eV) {
-             this.storage[VV] = eV
-           }
-           async _get(VV) {
-             const eV = this.storage[VV];
-             return void 0 === eV ? null : eV
-           }
-           async _remove(VV) {
-             delete this.storage[VV]
- ... (3 more removed lines; see GitHub link above)
+         replaceValues(HH, BH, LH) {
+           return LH || (LH = BH, BH = {}), this.walkDecls((AH => {
+             BH.props && !BH.props.includes(AH.prop) || BH.fast && !AH.value.includes(BH.fast) || (AH.value = AH.value.replace(HH, LH))
+           })), this.markDirty(), this
```

#### 57. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1002-L1003` → after: `L2068-L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2068-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2068-L2134) · [Before (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1002-L1003)

```diff
-         ye.type = "NONE";
-         const pe = ye;
+         some(HH) {
+           return this.nodes.some(HH)
+         }
+         walk(HH) {
+           return this.each(((BH, LH) => {
+             let AH;
+             try {
+               AH = HH(BH, LH)
+             } catch (rH) {
+               throw BH.addToError(rH)
+             }
+             return !1 !== AH && BH.walk && (AH = BH.walk(HH)), AH
+           }))
+         }
+         walkAtRules(HH, BH) {
+           return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
+ ... (51 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1005-L1006` → after: `L2136-L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2136-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2136-L2250) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1005-L1006)

```diff
-         function Qe(VV, eV, xV) {
-           return `firebase:${VV}:${eV}:${xV}`
+     function eL() {
+       if (wB) return DB;
+       wB = 1;
+       let HH, BH, LH = cL();
+       class AH extends LH {
+         constructor(HH) {
+           super({
+             type: "document",
+             ...HH
+           }), this.nodes || (this.nodes = [])
+         }
+         toResult() {
+           let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new HH(new BH, this, LH).stringify()
+         }
+       }
+ ... (99 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1008-L1052` → after: `L2252-L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2252-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2252-L2434) · [Before (L1008-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1008-L1052)

```diff
-         class ne {
-           constructor(VV, eV, xV) {
-             this.persistence = VV, this.auth = eV, this.userKey = xV;
-             const {
-               config: JV,
-               name: YV
-             } = this.auth;
-             this.fullUserKey = Qe(this.userKey, JV.apiKey, YV), this.fullPersistenceKey = Qe("persistence", JV.apiKey, YV), this.boundEventHandler = eV._onStorageEvent.bind(eV), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
-           }
-           setCurrentUser(VV) {
-             return this.persistence._set(this.fullUserKey, VV.toJSON())
-           }
-           async getCurrentUser() {
-             const VV = await this.persistence._get(this.fullUserKey);
-             return VV ? Je._fromJSON(this.auth, VV) : null
-           }
- ... (29 more removed lines; see GitHub link above)
+         removeChild(HH, BH) {
+           let LH = this.index(HH);
+           return !BH && 0 === LH && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[LH].raws.before), super.removeChild(HH)
+         }
+         toResult() {
+           let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new HH(new BH, this, LH).stringify()
+         }
+       }
+       return AH.registerLazyResult = BH => {
+         HH = BH
+       }, AH.registerProcessor = HH => {
+         BH = HH
+       }, LL = AH, AH.default = AH, LH.registerRoot(AH), LL
+     }
+ 
+ ... (167 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1054-L1060` → after: `L2436-L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2436-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2436-L2455) · [Before (L1054-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1054-L1060)

```diff
-             } catch (QV) {}
-             const pV = JV.filter((VV => VV._shouldAllowMigration));
-             return YV._shouldAllowMigration && pV.length ? (YV = pV[0], yV && await YV._set(UV, yV.toJSON()), await Promise.all(eV.map((async VV => {
-               if (VV !== YV) try {
-                 await VV._remove(UV)
-               } catch (QV) {}
-             }))), new ne(YV, VV, xV)) : new ne(YV, VV, xV)
+             }
+           }, pB
+         }(),
+         LH = KL(),
+         AH = RL(),
+         rH = jL(),
+         SH = FL();
+       const hH = {
+         empty: !0,
+         space: !0
+       };
+       return zL = class {
+         constructor(HH) {
+           this.input = HH, this.root = new rH, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
+             input: HH,
+             start: {
+ ... (4 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1063-L1080` → after: `L2458-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2458-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2458-L2488) · [Before (L1063-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1063-L1080)

```diff
- 
-         function we(VV) {
-           const eV = VV.toLowerCase();
-           if (eV.includes("opera/") || eV.includes("opr/") || eV.includes("opios/")) return "Opera";
-           if (ke(eV)) return "IEMobile";
-           if (eV.includes("msie") || eV.includes("trident/")) return "IE";
-           if (eV.includes("edge/")) return "Edge";
-           if (Ze(eV)) return "Firefox";
-           if (eV.includes("silk/")) return "Silk";
-           if (Ee(eV)) return "Blackberry";
-           if (Be(eV)) return "Webos";
-           if (ve(eV)) return "Safari";
-           if ((eV.includes("chrome/") || re(eV)) && !eV.includes("edge/")) return "Chrome";
-           if (be(eV)) return "Android";
-           {
-             const eV = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
- ... (2 more removed lines; see GitHub link above)
+         atrule(HH) {
+           let BH, LH, rH, SH = new AH;
+           SH.name = HH[1].slice(1), "" === SH.name && this.unnamedAtrule(SH, HH), this.init(SH, HH[2]);
+           let hH = !1,
+             tH = !1,
+             zH = [],
+             CH = [];
+           for (; !this.tokenizer.endOfFile();) {
+             if (BH = (HH = this.tokenizer.nextToken())[0], "(" === BH || "[" === BH ? CH.push("(" === BH ? ")" : "]") : "{" === BH && CH.length > 0 ? CH.push("}") : BH === CH[CH.length - 1] && CH.pop(), 0 === CH.length) {
+               if (";" === BH) {
+                 SH.source.end = this.hT(HH[2]), SH.source.end.offset++, this.semicolon = !0;
+                 break
+               }
+               if ("{" === BH) {
+                 tH = !0;
+                 break
+ ... (15 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1082-L1087` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2490) · [Before (L1082-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1082-L1087)

```diff
-           return "Other"
-         }
- 
-         function Ze() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /firefox\//i.test(VV)
+           SH.raws.between = this.spacesAndCommentsFromEnd(zH), zH.length ? (SH.raws.afterName = this.spacesAndCommentsFromStart(zH), this.raw(SH, "params", zH), hH && (HH = zH[zH.length - 1], SH.source.end = this.hT(HH[3] || HH[2]), SH.source.end.offset++, this.spaces = SH.raws.b … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1089-L1092` → after: `L2492-L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2492-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2492-L2497) · [Before (L1089-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1089-L1092)

```diff
- 
-         function ve() {
-           const VV = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)()).toLowerCase();
-           return VV.includes("safari/") && !VV.includes("chrome/") && !VV.includes("crios/") && !VV.includes("android")
+         checkMissedSemicolon(HH) {
+           let BH = this.colon(HH);
+           if (!1 === BH) return;
+           let LH, AH = 0;
+           for (let rH = BH - 1; rH >= 0 && (LH = HH[rH], "space" === LH[0] || (AH += 1, 2 !== AH)); rH--);
+           throw this.input.error("Missed semicolon", "word" === LH[0] ? LH[3] + 1 : LH[2])
```

#### 64. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1094-L1097` → after: `L2499-L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2499-L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2499-L2573) · [Before (L1094-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1094-L1097)

```diff
- 
-         function re() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /crios\//i.test(VV)
+         colon(HH) {
+           let BH, LH, AH, rH = 0;
+           for (let [SH, hH] of HH.entries()) {
+             if (BH = hH, LH = BH[0], "(" === LH && (rH += 1), ")" === LH && (rH -= 1), 0 === rH && ":" === LH) {
+               if (AH) {
+                 if ("word" === AH[0] && "progid" === AH[1]) continue;
+                 return SH
+               }
+               this.doubleColon(BH)
+             }
+             AH = BH
+           }
+           return !1
+         }
+         comment(HH) {
+           let BH = new LH;
+ ... (59 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1099-L1102` → after: `L2575-L2580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2575-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2575-L2580) · [Before (L1099-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1099-L1102)

```diff
- 
-         function ke() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /iemobile/i.test(VV)
+         doubleColon(HH) {
+           throw this.input.error("Double colon", {
+             offset: HH[2]
+           }, {
+             offset: HH[2] + HH[1].length
+           })
```

#### 66. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1104-L1107` → after: `L2582-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2582-L2584) · [Before (L1104-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1104-L1107)

```diff
- 
-         function be() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /android/i.test(VV)
+         emptyRule(HH) {
+           let BH = new SH;
+           this.init(BH, HH[2]), BH.selector = "", BH.raws.between = "", this.current = BH
```

#### 67. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1109-L1112` → after: `L2586-L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2586-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2586-L2587) · [Before (L1109-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1109-L1112)

```diff
- 
-         function Ee() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /blackberry/i.test(VV)
+         end(HH) {
+           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hT(HH … [truncated]
```

#### 68. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1114-L1117` → after: `L2589-L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2589-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2589-L2590) · [Before (L1114-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1114-L1117)

```diff
- 
-         function Be() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /webos/i.test(VV)
+         endFile() {
+           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hT(this.tokenizer.positio … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1119-L1122` → after: `L2592-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2592-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2592-L2596) · [Before (L1119-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1119-L1122)

```diff
- 
-         function je() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return /iphone|ipad|ipod/i.test(VV) || /macintosh/i.test(VV) && /mobile/i.test(VV)
+         freeSemicolon(HH) {
+           if (this.spaces += HH[1], this.current.nodes) {
+             let HH = this.current.nodes[this.current.nodes.length - 1];
+             HH && "rule" === HH.type && !HH.raws.ownSemicolon && (HH.raws.ownSemicolon = this.spaces, this.spaces = "")
+           }
```

#### 70. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1124-L1127` → after: `L2598-L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2598-L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2598-L2642) · [Before (L1124-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1124-L1127)

```diff
- 
-         function qe() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
-           return je(VV) || be(VV) || Be(VV) || Ee(VV) || /windows phone/i.test(VV) || ke(VV)
+         hT(HH) {
+           let BH = this.input.fromOffset(HH);
+           return {
+             column: BH.col,
+             line: BH.line,
+             offset: HH
+           }
+         }
+         init(HH, BH) {
+           this.current.push(HH), HH.source = {
+             input: this.input,
+             start: this.hT(BH)
+           }, HH.raws.before = this.spaces, this.spaces = "", "comment" !== HH.type && (this.semicolon = !1)
+         }
+         other(HH) {
+           let BH = !1,
+ ... (29 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1129-L1134` → after: `L2644-L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2644-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2644-L2654) · [Before (L1129-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1129-L1134)

```diff
- 
-         function te(VV) {
-           let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-           switch (VV) {
-             case "Browser":
-               eV = we((0, JV.P)());
+         parse() {
+           let HH;
+           for (; !this.tokenizer.endOfFile();) switch (HH = this.tokenizer.nextToken(), HH[0]) {
+             case "space":
+               this.spaces += HH[1];
+               break;
+             case ";":
+               this.freeSemicolon(HH);
+               break;
+             case "}":
+               this.end(HH);
```

#### 72. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1136-L1137` → after: `L2656-L2663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2656-L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2656-L2663) · [Before (L1136-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1136-L1137)

```diff
-             case "Worker":
-               eV = `${we((0,JV.P)())}-${VV}`;
+             case "comment":
+               this.comment(HH);
+               break;
+             case "at-word":
+               this.atrule(HH);
+               break;
+             case "{":
+               this.emptyRule(HH);
```

#### 73. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1140` → after: `L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2666) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1140)

```diff
-               eV = VV
+               this.other(HH)
```

#### 74. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1142-L1143` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2668) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1142-L1143)

```diff
-           const UV = xV.length ? xV.join(",") : "FirebaseCore-web";
-           return `${eV}/JsCore/${YV.e}/${UV}`
+           this.endFile()
```

#### 75. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1145-L1146` → after: `L2670-L2683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2670-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2670-L2683) · [Before (L1145-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1145-L1146)

```diff
-         async function Fe(VV, eV) {
-           return oV(VV, "GET", "/v2/recaptchaConfig", aV(VV, eV))
+         precheckMissedSemicolon() {}
+         raw(HH, BH, LH, AH) {
+           let rH, SH, tH, zH, CH = LH.length,
+             EH = "",
+             XH = !0;
+           for (let GH = 0; GH < CH; GH += 1) rH = LH[GH], SH = rH[0], "space" !== SH || GH !== CH - 1 || AH ? "comment" === SH ? (zH = LH[GH - 1] ? LH[GH - 1][0] : "empty", tH = LH[GH + 1] ? LH[GH + 1][0] : "empty", hH[zH] || hH[tH] || "," === EH.slice(-1) ? XH = !1 : EH += rH[1] … [truncated]
+           if (!XH) {
+             let AH = LH.reduce(((HH, BH) => HH + BH[1]), "");
+             HH.raws[BH] = {
+               raw: AH,
+               value: EH
+             }
+           }
+           HH[BH] = EH
```

#### 76. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1148-L1150` → after: `L2685-L2688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2685-L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2685-L2688) · [Before (L1148-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1148-L1150)

```diff
- 
-         function Te(VV) {
-           return void 0 !== VV && void 0 !== VV.getResponse
+         rule(HH) {
+           HH.pop();
+           let BH = new SH;
+           this.init(BH, HH[0][2]), BH.raws.between = this.spacesAndCommentsFromEnd(HH), this.raw(BH, "selector", HH), this.current = BH
```

#### 77. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1152-L1154` → after: `L2690-L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2690-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2690-L2693) · [Before (L1152-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1152-L1154)

```diff
- 
-         function Pe(VV) {
-           return void 0 !== VV && void 0 !== VV.enterprise
+         spacesAndCommentsFromEnd(HH) {
+           let BH, LH = "";
+           for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH || "comment" === BH);) LH = HH.pop()[1] + LH;
+           return LH
```

#### 78. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1156-L1160` → after: `L2695-L2698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2695-L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2695-L2698) · [Before (L1156-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1156-L1160)

```diff
-         class Ae {
-           constructor(VV) {
-             if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === VV.recaptchaKey) throw new Error("recaptchaKey undefined");
-             this.siteKey = VV.recaptchaKey.split("/")[3], this.emailPasswordEnabled = VV.recaptchaEnforcementState.some((VV => "EMAIL_PASSWORD_PROVIDER" === VV.provider && "OFF" !== VV.enforcementState))
-           }
+         spacesAndCommentsFromStart(HH) {
+           let BH, LH = "";
+           for (; HH.length && (BH = HH[0][0], "space" === BH || "comment" === BH);) LH += HH.shift()[1];
+           return LH
```

#### 79. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1162-L1174` → after: `L2700-L2703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2700-L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2700-L2703) · [Before (L1162-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1162-L1174)

```diff
- 
-         function Ne(VV) {
-           return new Promise(((eV, xV) => {
-             const JV = document.createElement("script");
-             JV.setAttribute("src", VV), JV.onload = eV, JV.onerror = VV => {
-                 const eV = FV("internal-error");
-                 eV.customData = VV, xV(eV)
-               }, JV.type = "text/javascript", JV.charset = "UTF-8",
-               function() {
-                 var VV, eV;
-                 return null !== (eV = null === (VV = document.getElementsByTagName("head")) || void 0 === VV ? void 0 : VV[0]) && void 0 !== eV ? eV : document
-               }().appendChild(JV)
-           }))
+         spacesFromEnd(HH) {
+           let BH, LH = "";
+           for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH);) LH = HH.pop()[1] + LH;
+           return LH
```

#### 80. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1176-L1234` → after: `L2705-L2719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2705-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2705-L2719) · [Before (L1176-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1176-L1234)

```diff
- 
-         function Xe(VV) {
-           return `__${VV}${Math.floor(1e6*Math.random())}`
-         }
-         class Me {
-           constructor(VV) {
-             this.type = "recaptcha-enterprise", this.auth = Re(VV)
-           }
-           async verify() {
-             let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
-               eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
- 
-             function xV(eV, xV, JV) {
-               const YV = window.grecaptcha;
-               Pe(YV) ? YV.enterprise.ready((() => {
-                 YV.enterprise.execute(eV, {
- ... (43 more removed lines; see GitHub link above)
+         stringFrom(HH, BH) {
+           let LH = "";
+           for (let AH = BH; AH < HH.length; AH++) LH += HH[AH][1];
+           return HH.splice(BH, HH.length - BH), LH
+         }
+         unclosedBlock() {
+           let HH = this.current.source.start;
+           throw this.input.error("Unclosed block", HH.line, HH.column)
+         }
+         unclosedBracket(HH) {
+           throw this.input.error("Unclosed bracket", {
+             offset: HH[2]
+           }, {
+             offset: HH[2] + 1
+           })
```

#### 81. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1236-L1254` → after: `L2721-L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2721-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2721-L2726) · [Before (L1236-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1236-L1254)

```diff
-         async function ze(VV, eV, xV) {
-           let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-           const YV = new Me(VV);
-           let UV;
-           try {
-             UV = await YV.verify(xV)
-           } catch (pV) {
-             UV = await YV.verify(xV, !0)
-           }
-           const yV = Object.assign({}, eV);
-           return JV ? Object.assign(yV, {
-             captchaResp: UV
-           }) : Object.assign(yV, {
-             captchaResponse: UV
-           }), Object.assign(yV, {
-             clientType: "CLIENT_TYPE_WEB"
- ... (3 more removed lines; see GitHub link above)
+         unexpectedClose(HH) {
+           throw this.input.error("Unexpected }", {
+             offset: HH[2]
+           }, {
+             offset: HH[2] + 1
+           })
```

#### 82. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1256-L1261` → after: `L2728-L2837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2728-L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2728-L2837) · [Before (L1256-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1256-L1261)

```diff
-         class Ge {
-           constructor(VV) {
-             this.auth = VV, this.queue = []
-           }
-           pushCallback(VV, eV) {
-             const xV = eV => new Promise(((xV, JV) => {
+         unknownWord(HH) {
+           throw this.input.error("Unknown word", {
+             offset: HH[0][2]
+           }, {
+             offset: HH[0][2] + HH[0][1].length
+           })
+         }
+         unnamedAtrule(HH, BH) {
+           throw this.input.error("At-rule without name", {
+             offset: BH[2]
+           }, {
+             offset: BH[2] + BH[1].length
+           })
+         }
+       }
+     }
+ ... (94 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1263` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2839) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1263)

```diff
-                 xV(VV(eV))
+                 SH = HH(LH, AH)
```

#### 84. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1265` → after: `L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2841) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1265)

```diff
-                 JV(YV)
+                 this.processed = !0, this.error = zH
```

#### 85. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1267-L1271` → after: `L2843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2843) · [Before (L1267-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1267-L1271)

```diff
-             }));
-             xV.onAbort = eV, this.queue.push(xV);
-             const JV = this.queue.length - 1;
-             return () => {
-               this.queue[JV] = () => Promise.resolve()
+               SH && !SH[BH] && rH.rebuild(SH)
```

#### 86. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1274-L1278` → after: `L2872-L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2872-L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2872-L2896) · [Before (L1274-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1274-L1278)

```diff
-           async runMiddleware(VV) {
-             if (this.auth.currentUser === VV) return;
-             const eV = [];
-             try {
-               for (const xV of this.queue) await xV(VV), xV.onAbort && eV.push(xV.onAbort)
+           return HH
+         }
+         prepareVisitors() {
+           this.listeners = {};
+           let HH = (HH, BH, LH) => {
+             this.listeners[BH] || (this.listeners[BH] = []), this.listeners[BH].push([HH, LH])
+           };
+           for (let BH of this.plugins)
+             if ("object" === typeof BH)
+               for (let LH in BH) {
+                 if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!XH[LH])
+                   if ("object" === typeof BH[LH])
+                     for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
+                   else "function" === typeof BH[LH] && HH(BH, LH, BH[LH])
+               }
+ ... (9 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1280-L1286` → after: `L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2898) · [Before (L1280-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1280-L1286)

```diff
-               eV.reverse();
-               for (const VV of eV) try {
-                 VV()
-               } catch (JV) {}
-               throw this.auth._errorFactory.create("login-blocked", {
-                 originalMessage: null === xV || void 0 === xV ? void 0 : xV.message
-               })
+               throw this.handleError(BH)
```

#### 88. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1289-L1303` → after: `L2901-L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2901-L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2901-L2926) · [Before (L1289-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1289-L1303)

```diff
-         }
-         class We {
-           constructor(VV, eV, xV, JV) {
-             this.app = VV, this.heartbeatServiceProvider = eV, this.appCheckServiceProvider = xV, this.config = JV, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ge(this), this.idTokenSubscription = new  … [truncated]
-               appVerificationDisabledForTesting: !1
-             }, this.frameworks = [], this.name = VV.name, this.clientVersion = JV.sdkClientVersion
-           }
-           _initializeWithPersistence(VV, eV) {
-             return eV && (this._popupRedirectResolver = Ue(eV)), this._initializationPromise = this.queue((async () => {
-               var xV, JV;
-               if (!this._deleted && (this.persistenceManager = await ne.create(this, VV), !this._deleted)) {
-                 if (null === (xV = this._popupRedirectResolver) || void 0 === xV ? void 0 : xV._shouldInitProactively) try {
-                   await this._popupRedirectResolver._initialize(this)
-                 } catch (YV) {}
-                 await this.initializeCurrentUser(eV), this.lastNotifiedUid = (null === (JV = this.currentUser) || void 0 === JV ? void 0 : JV.uid) || null, this._deleted || (this._isInitialized = !0)
+           if (this.prepareVisitors(), this.hasListener) {
+             let BH = this.result.root;
+             for (; !BH[HH];) {
+               BH[HH] = !0;
+               let AH = [uH(BH)];
+               for (; AH.length > 0;) {
+                 let HH = this.visitTick(AH);
+                 if (GH(HH)) try {
+                   await HH
+                 } catch (LH) {
+                   let HH = AH[AH.length - 1].node;
+                   throw this.handleError(LH, HH)
+                 }
+               }
+             }
+             if (this.listeners.OnceExit)
+ ... (10 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1312-L1329` → after: `L2929-L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2929-L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2929-L2937) · [Before (L1312-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1312-L1329)

```diff
-           async initializeCurrentUser(VV) {
-             var eV;
-             const xV = await this.assertedPersistence.getCurrentUser();
-             let JV = xV,
-               YV = !1;
-             if (VV && this.config.authDomain) {
-               await this.getOrInitRedirectPersistenceManager();
-               const xV = null === (eV = this.redirectUser) || void 0 === eV ? void 0 : eV._redirectEventId,
-                 UV = null === JV || void 0 === JV ? void 0 : JV._redirectEventId,
-                 yV = await this.tryRedirectSignIn(VV);
-               xV && xV !== UV || !(null === yV || void 0 === yV ? void 0 : yV.user) || (JV = yV.user, YV = !0)
-             }
-             if (!JV) return this.directlySetCurrentUser(null);
-             if (!JV._redirectEventId) {
-               if (YV) try {
-                 await this.beforeStateQueue.runMiddleware(JV)
- ... (2 more removed lines; see GitHub link above)
+           return this.processed = !0, this.stringify()
+         }
+         runOnRoot(HH) {
+           this.result.lastPlugin = HH;
+           try {
+             if ("object" === typeof HH && HH.Once) {
+               if ("document" === this.result.root.type) {
+                 let BH = this.result.root.nodes.map((BH => HH.Once(BH, this.helpers)));
+                 return GH(BH[0]) ? Promise.all(BH) : BH
```

#### 90. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1331` → after: `L2939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2939) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1331)

```diff
-               return JV ? this.reloadAndSetCurrentUserOrClear(JV) : this.directlySetCurrentUser(null)
+               return HH.Once(this.result.root, this.helpers)
```

#### 91. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1333` → after: `L2941-L2943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2941-L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2941-L2943) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1333)

```diff
-             return NV(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === JV._redirectEventId ? this.directlySetCurrentUser(JV) : this.reloadAndSetCurrentUserOrClear(JV … [truncated]
+             if ("function" === typeof HH) return HH(this.result.root, this.result)
+           } catch (BH) {
+             throw this.handleError(BH)
```

#### 92. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1335-L1336` → after: `L2945-L2982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2945-L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2945-L2982) · [Before (L1335-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1335-L1336)

```diff
-           async tryRedirectSignIn(VV) {
-             let eV = null;
+         }
+         stringify() {
+           if (this.error) throw this.error;
+           if (this.stringified) return this.result;
+           this.stringified = !0, this.sync();
+           let HH = this.result.opts,
+             BH = AH;
+           HH.syntax && (BH = HH.syntax.stringify), HH.stringifier && (BH = HH.stringifier), BH.stringify && (BH = BH.stringify);
+           let rH = new LH(BH, this.result.root, this.result.opts).generate();
+           return this.result.css = rH[0], this.result.map = rH[1], this.result
+         }
+         sync() {
+           if (this.error) throw this.error;
+           if (this.processed) return this.result;
+           if (this.processed = !0, this.processing) throw this.getAsyncError();
+           for (let HH of this.plugins) {
+ ... (22 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1338` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2984) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1338)

```diff
-               eV = await this._popupRedirectResolver._completeRedirectFn(this, VV, !0)
+               HH = rH(BH, this.helpers)
```

#### 94. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1340` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2986) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1340)

```diff
-               await this._setRedirectUser(null)
+               throw this.handleError(LH, BH.proxyOf)
```

#### 95. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1342` → after: `L2988-L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2988-L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2988-L2989) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1342)

```diff
-             return eV
+             if ("root" !== BH.type && "document" !== BH.type && !BH.parent) return !0;
+             if (GH(HH)) throw this.getAsyncError()
```

#### 96. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1344` → after: `L2991-L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2991-L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L2991-L3001) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1344)

```diff
-           async reloadAndSetCurrentUserOrClear(VV) {
+         }
+         visitTick(BH) {
+           let LH = BH[BH.length - 1],
+             {
+               node: AH,
+               visitors: rH
+             } = LH;
+           if ("root" !== AH.type && "document" !== AH.type && !AH.parent) return void BH.pop();
+           if (rH.length > 0 && LH.visitorIndex < rH.length) {
+             let [HH, BH] = rH[LH.visitorIndex];
+             LH.visitorIndex += 1, LH.visitorIndex === rH.length && (LH.visitors = [], LH.visitorIndex = 0), this.result.lastPlugin = HH;
```

#### 97. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1346` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3003) · [Before (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1346)

```diff
-               await OV(VV)
+               return BH(AH.toProxy(), this.helpers)
```

#### 98. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1348` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3005) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1348)

```diff
-               if ("auth/network-request-failed" !== (null === eV || void 0 === eV ? void 0 : eV.code)) return this.directlySetCurrentUser(null)
+               throw this.handleError(hH, AH)
```

#### 99. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1380-L1387` → after: `L3008-L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3008-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3008-L3031) · [Before (L1380-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1380-L1387)

```diff
-           async initializeRecaptchaConfig() {
-             const VV = await Fe(this, {
-                 clientType: "CLIENT_TYPE_WEB",
-                 version: "RECAPTCHA_ENTERPRISE"
-               }),
-               eV = new Ae(VV);
-             if (null == this.tenantId ? this._agentRecaptchaConfig = eV : this._tenantRecaptchaConfigs[this.tenantId] = eV, eV.emailPasswordEnabled) {
-               new Me(this).verify()
+           if (0 !== LH.iterator) {
+             let rH, SH = LH.iterator;
+             for (; rH = AH.nodes[AH.indexes[SH]];)
+               if (AH.indexes[SH] += 1, !rH[HH]) return rH[HH] = !0, void BH.push(uH(rH));
+             LH.iterator = 0, delete AH.indexes[SH]
+           }
+           let SH = LH.events;
+           for (; LH.eventIndex < SH.length;) {
+             let BH = SH[LH.eventIndex];
+             if (LH.eventIndex += 1, 0 === BH) return void(AH.nodes && AH.nodes.length && (AH[HH] = !0, LH.iterator = AH.getIterator()));
+             if (this.listeners[BH]) return void(LH.visitors = this.listeners[BH])
+           }
+           BH.pop()
+         }
+         walkSync(BH) {
+           BH[HH] = !0;
+ ... (8 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1389-L1414` → after: `L3033-L3091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3033-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3033-L3091) · [Before (L1389-L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1389-L1414)

```diff
-           }
-           _getRecaptchaConfig() {
-             return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
-           }
-           _getPersistence() {
-             return this.assertedPersistence.persistence.type
-           }
-           _updateErrorMap(VV) {
-             this._errorFactory = new JV.g("auth", "Firebase", VV())
-           }
-           onAuthStateChanged(VV, eV, xV) {
-             return this.registerStateListener(this.authStateSubscription, VV, eV, xV)
-           }
-           beforeAuthStateChanged(VV, eV) {
-             return this.beforeStateQueue.pushCallback(VV, eV)
-           }
- ... (10 more removed lines; see GitHub link above)
+         }
+         warnings() {
+           return this.sync().warnings()
+         }
+         get content() {
+           return this.stringify().content
+         }
+         get css() {
+           return this.stringify().css
+         }
+         get map() {
+           return this.stringify().map
+         }
+         get messages() {
+           return this.sync().messages
+         }
+ ... (43 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1416-L1424` → after: `L3093-L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3093-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3093-L3098) · [Before (L1416-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1416-L1424)

```diff
-           }
-           async _setRedirectUser(VV, eV) {
-             const xV = await this.getOrInitRedirectPersistenceManager(eV);
-             return null === VV ? xV.removeCurrentUser() : xV.setCurrentUser(VV)
-           }
-           async getOrInitRedirectPersistenceManager(VV) {
-             if (!this.redirectPersistenceManager) {
-               const eV = VV && Ue(VV) || this._popupRedirectResolver;
-               NV(eV, this, "argument-error"), this.redirectPersistenceManager = await ne.create(this, [Ue(eV._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
+             async () {
+               return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
+             } catch (HH) {
+               return this.async().catch(HH)
+             } finally(HH) {
+               return this.async().then(HH, HH)
```

#### 102. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1426-L1499` → after: `L3100-L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3100-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3100-L3137) · [Before (L1426-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1426-L1499)

```diff
-             return this.redirectPersistenceManager
-           }
-           async _redirectUserForId(VV) {
-             var eV, xV;
-             return this._isInitialized && await this.queue((async () => {})), (null === (eV = this._currentUser) || void 0 === eV ? void 0 : eV._redirectEventId) === VV ? this._currentUser : (null === (xV = this.redirectUser) || void 0 === xV ? void 0 : xV._redirectEventId) === V … [truncated]
-           }
-           async _persistUserIfCurrent(VV) {
-             if (VV === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(VV)))
-           }
-           _notifyListenersIfCurrent(VV) {
-             VV === this.currentUser && this.notifyAuthListeners()
-           }
-           _key() {
-             return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
-           }
-           _startProactiveRefresh() {
- ... (58 more removed lines; see GitHub link above)
+             sync() {
+               if (this.error) throw this.error;
+               return this.result
+             }
+             then(HH, BH) {
+               return this.async().then(HH, BH)
+             }
+             toString() {
+               return this._css
+             }
+             warnings() {
+               return []
+             }
+             get content() {
+               return this.result.css
+             }
+ ... (22 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1501-L1510` → after: `L3139-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3139-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3139-L3144) · [Before (L1501-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1501-L1510)

```diff
-             }(`Error while retrieving App Check token: ${eV.error}`), null === eV || void 0 === eV ? void 0 : eV.token
-           }
-         }
- 
-         function Re(VV) {
-           return (0, JV.L)(VV)
-         }
-         class ge {
-           constructor(VV) {
-             this.auth = VV, this.observer = null, this.addObserver = (0, JV.w)((VV => this.observer = VV))
+               if (this.error) throw this.error;
+               return this._root = HH, HH
+             }
+             get[Symbol.toStringTag]() {
+               return "NoWorkResult"
+             }
```

#### 104. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1512-L1513` → after: `L3146-L3163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3146-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3146-L3163) · [Before (L1512-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1512-L1513)

```diff
-           get next() {
-             return NV(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
+           return uL = rH, rH.default = rH, uL
+         }(),
+         BH = ZL(),
+         LH = eL(),
+         AH = jL();
+       class rH {
+         constructor() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
+           this.version = "8.4.38", this.plugins = this.normalize(HH)
+         }
+         normalize(HH) {
+           let BH = [];
+           for (let LH of HH)
+             if (!0 === LH.postcss ? LH = LH() : LH.postcss && (LH = LH.postcss), "object" === typeof LH && Array.isArray(LH.plugins)) BH = BH.concat(LH.plugins);
+             else if ("object" === typeof LH && LH.postcssPlugin) BH.push(LH);
+           else if ("function" === typeof LH) BH.push(LH);
+ ... (2 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1517-L1527` → after: `L3197-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3197-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3197-L3384) · [Before (L1517-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1517-L1527)

```diff
-         function De(VV, eV) {
-           const xV = (0, YV.r)(VV, "auth");
-           if (xV.isInitialized()) {
-             const VV = xV.getImmediate(),
-               YV = xV.getOptions();
-             if ((0, JV.x)(YV, null !== eV && void 0 !== eV ? eV : {})) return VV;
-             tV(VV, "already-initialized")
-           }
-           return xV.initialize({
-             options: eV
-           })
+           function tH(zH, CH) {
+             if (Array.isArray(zH)) return zH.map((HH => tH(HH)));
+             let {
+               inputs: EH,
+               ...XH
+             } = zH;
+             if (EH) {
+               CH = [];
+               for (let HH of EH) {
+                 let LH = {
+                   ...HH,
+                   __proto__: rH.prototype
+                 };
+                 LH.map && (LH.map = {
+                   ...LH.map,
+                   __proto__: BH.prototype
+ ... (172 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1530-L1557` → after: `L3389-L3424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3389-L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3389-L3424) · [Before (L1530-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1530-L1557)

```diff
-         function ie(VV, eV, xV) {
-           const JV = Re(VV);
-           NV(JV._canInitEmulator, JV, "emulator-config-failed"), NV(/^https?:\/\//.test(eV), JV, "invalid-emulator-scheme");
-           const YV = !!(null === xV || void 0 === xV ? void 0 : xV.disableWarnings),
-             UV = Ce(eV),
-             {
-               host: yV,
-               port: pV
-             } = function(VV) {
-               const eV = Ce(VV),
-                 xV = /(\/\/)?([^?#/]+)/.exec(VV.substr(eV.length));
-               if (!xV) return {
-                 host: "",
-                 port: null
-               };
-               const JV = xV[2].split("@").pop() || "",
- ... (12 more removed lines; see GitHub link above)
+     function LA(HH, BH) {
+       var LH;
+       const {
+         doc: AH,
+         hackCss: rH,
+         cache: SH
+       } = BH;
+       switch (HH.type) {
+         case zH.Document:
+           return AH.implementation.createDocument(null, "", null);
+         case zH.DocumentType:
+           return AH.implementation.createDocumentType(HH.name || "html", HH.publicId, HH.systemId);
+         case zH.Element: {
+           const rH = function(HH) {
+             let BH = sL[HH.tagName] ? sL[HH.tagName] : HH.tagName;
+             return "link" === BH && HH.attributes._cssText && (BH = "style"), BH
+ ... (20 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1560-L1575` → after: `L3438-L3449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3438-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3438-L3449) · [Before (L1560-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1560-L1575)

```diff
-             }(eV),
-             QV = null === pV ? "" : `:${pV}`;
-           JV.config.emulator = {
-             url: `${UV}//${yV}${QV}/`
-           }, JV.settings.appVerificationDisabledForTesting = !0, JV.emulatorConfig = Object.freeze({
-             host: yV,
-             port: pV,
-             protocol: UV.replace(":", ""),
-             options: Object.freeze({
-               disableWarnings: YV
-             })
-           }), YV || function() {
-             function VV() {
-               const VV = document.createElement("p"),
-                 eV = VV.style;
-               VV.innerText = "Running in emulator mode. Do not use with production credentials.", eV.position = "fixed", eV.width = "100%", eV.backgroundColor = "#ffffff", eV.border = ".1em solid #000000", eV.color = "#b50000", eV.bottom = "0px", eV.left = "0px", eV.margin = "0px … [truncated]
+           }
+           for (const BH in tH) {
+             const LH = tH[BH];
+             if ("canvas" === rH && "rr_dataURL" === BH) {
+               const HH = AH.createElement("img");
+               HH.onload = () => {
+                 const BH = SH.getContext("2d");
+                 BH && BH.drawImage(HH, 0, 0, HH.width, HH.height)
+               }, HH.src = LH.toString(), SH.RRNodeType && (SH.rr_dataURL = LH.toString())
+             } else if ("img" === rH && "rr_dataURL" === BH) {
+               const BH = SH;
+               BH.currentSrc.startsWith("data:") || (BH.setAttribute("rrweb-original-src", HH.attributes.src), BH.src = LH.toString())
```

#### 108. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1577-L1580` → after: `L3451-L3479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3451-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3451-L3479) · [Before (L1577-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1577-L1580)

```diff
-             "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
-             "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", VV) : VV())
-           }()
-         }
+             if ("rr_width" === BH) SH.style.setProperty("width", LH.toString());
+             else if ("rr_height" === BH) SH.style.setProperty("height", LH.toString());
+             else if ("rr_mediaCurrentTime" === BH && "number" === typeof LH) SH.currentTime = LH;
+             else if ("rr_mediaState" === BH) switch (LH) {
+               case "played":
+                 SH.play().catch((HH => console.warn("media playback error", HH)));
+                 break;
+               case "paused":
+                 SH.pause()
+             } else "rr_mediaPlaybackRate" === BH && "number" === typeof LH ? SH.playbackRate = LH : "rr_mediaMuted" === BH && "boolean" === typeof LH ? SH.muted = LH : "rr_mediaLoop" === BH && "boolean" === typeof LH ? SH.loop = LH : "rr_mediaVolume" === BH && "number" === typeof … [truncated]
+           }
+           if (HH.isShadowHost)
+             if (SH.shadowRoot)
+               for (; SH.shadowRoot.firstChild;) SH.shadowRoot.removeChild(SH.shadowRoot.firstChild);
+             else SH.attachShadow({
+               mode: "open"
+ ... (13 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1582-L1585` → after: `L3481-L3525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3481-L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3481-L3525) · [Before (L1582-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1582-L1585)

```diff
-         function Ce(VV) {
-           const eV = VV.indexOf(":");
-           return eV < 0 ? "" : VV.substr(0, eV + 1)
-         }
+     function AA(HH, BH) {
+       const {
+         doc: LH,
+         mirror: AH,
+         skipChild: rH = !1,
+         hackCss: SH = !0,
+         afterAppend: hH,
+         cache: tH
+       } = BH;
+       if (AH.has(HH.id)) {
+         const BH = AH.yAH(HH.id),
+           LH = AH.getMeta(BH);
+         if (EH = HH, (CH = LH) && EH && CH.type === EH.type && (CH.type === zH.Document ? CH.compatMode === EH.compatMode : CH.type === zH.DocumentType ? CH.name === EH.name && CH.publicId === EH.publicId && CH.systemId === EH.systemId : CH.type === zH.Comment || CH.type === zH.T … [truncated]
+       }
+       var CH, EH;
+       let XH = LA(HH, {
+ ... (29 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1587-L1597` → after: `L3527-L3681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3527-L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3527-L3681) · [Before (L1587-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1587-L1597)

```diff
-         function ae(VV) {
-           if (!VV) return null;
-           const eV = Number(VV);
-           return isNaN(eV) ? null : eV
-         }
-         class oe {
-           constructor(VV, eV) {
-             this.providerId = VV, this.signInMethod = eV
-           }
-           toJSON() {
-             return XV("not implemented")
+     function rA(HH, BH) {
+       HA(BH);
+       const {
+         doc: LH,
+         onVisit: AH,
+         hackCss: rH = !0,
+         afterAppend: SH,
+         cache: hH,
+         mirror: tH = new bH
+       } = BH, CH = AA(HH, {
+         doc: LH,
+         mirror: tH,
+         skipChild: !1,
+         hackCss: rH,
+         afterAppend: SH,
+         cache: hH
+ ... (139 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1599-L1600` → after: `L3683-L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3683-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3683-L3784) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1599-L1600)

```diff
-           _getIdTokenResponse(VV) {
-             return XV("not implemented")
+         };
+       return YA.exports = BH(), YA.exports.createColors = BH, YA.exports
+     }
+     const QA = XA(Object.freeze(Object.defineProperty({
+       __proto__: null,
+       default: {}
+     }, Symbol.toStringTag, {
+       value: "Module"
+     })));
+     var WA, MA;
+ 
+     function xA() {
+       if (MA) return WA;
+       MA = 1;
+       let HH = uA(),
+         BH = QA;
+ ... (86 more added lines; see GitHub link above)
```

#### 112. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1602-L1603` → after: `L3786-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3786-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3786-L3799) · [Before (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1602-L1603)

```diff
-           _linkToIdToken(VV, eV) {
-             return XV("not implemented")
+           return LH
+         }
+         block(HH, BH) {
+           let LH, AH = this.raw(HH, "between", "beforeOpen");
+           this.builder(BH + AH + "{", HH, "start"), HH.nodes && HH.nodes.length ? (this.body(HH), LH = this.raw(HH, "after")) : LH = this.raw(HH, "after", "emptyBody"), LH && this.builder(LH), this.builder("}", HH, "end")
+         }
+         body(HH) {
+           let BH = HH.nodes.length - 1;
+           for (; BH > 0 && "comment" === HH.nodes[BH].type;) BH -= 1;
+           let LH = this.raw(HH, "semicolon");
+           for (let AH = 0; AH < HH.nodes.length; AH++) {
+             let rH = HH.nodes[AH],
+               SH = this.raw(rH, "before");
+             SH && this.builder(SH), this.stringify(rH, BH !== AH || LH)
```

#### 113. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1605-L1606` → after: `L3801-L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3801-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3801-L3831) · [Before (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1605-L1606)

```diff
-           _getReauthenticationResolver(VV) {
-             return XV("not implemented")
+         }
+         comment(HH) {
+           let BH = this.raw(HH, "left", "commentLeft"),
+             LH = this.raw(HH, "right", "commentRight");
+           this.builder("/*" + BH + HH.text + LH + "*/", HH)
+         }
+         decl(HH, BH) {
+           let LH = this.raw(HH, "between", "colon"),
+             AH = HH.prop + LH + this.rawValue(HH, "value");
+           HH.important && (AH += HH.raws.important || " !important"), BH && (AH += ";"), this.builder(AH, HH)
+         }
+         document(HH) {
+           this.body(HH)
+         }
+         raw(BH, LH, AH) {
+           let rH;
+ ... (15 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1609-L1610` → after: `L3842-L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3842-L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3842-L3846) · [Before (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1609-L1610)

```diff
-         async function ce(VV, eV) {
-           return oV(VV, "POST", "/v1/accounts:resetPassword", aV(VV, eV))
+         rawBeforeComment(HH, BH) {
+           let LH;
+           return HH.walkComments((HH => {
+             if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
+           })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeDecl") : LH && (LH = LH.replace(/\S/g, "")), LH
```

#### 115. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1612-L1613` → after: `L3848-L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3848-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3848-L3852) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1612-L1613)

```diff
-         async function he(VV, eV) {
-           return oV(VV, "POST", "/v1/accounts:update", eV)
+         rawBeforeDecl(HH, BH) {
+           let LH;
+           return HH.walkDecls((HH => {
+             if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
+           })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeRule") : LH && (LH = LH.replace(/\S/g, "")), LH
```

#### 116. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1615-L1616` → after: `L3854-L3858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3854-L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3854-L3858) · [Before (L1615-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1615-L1616)

```diff
-         async function le(VV, eV) {
-           return hV(VV, "POST", "/v1/accounts:signInWithPassword", aV(VV, eV))
+         rawBeforeOpen(HH) {
+           let BH;
+           return HH.walk((HH => {
+             if ("decl" !== HH.type && (BH = HH.raws.between, "undefined" !== typeof BH)) return !1
+           })), BH
```

#### 117. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1618-L1619` → after: `L3860-L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3860-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3860-L3864) · [Before (L1618-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1618-L1619)

```diff
-         async function Le(VV, eV) {
-           return oV(VV, "POST", "/v1/accounts:sendOobCode", aV(VV, eV))
+         rawBeforeRule(HH) {
+           let BH;
+           return HH.walk((LH => {
+             if (LH.nodes && (LH.parent !== HH || HH.first !== LH) && "undefined" !== typeof LH.raws.before) return BH = LH.raws.before, BH.includes("\n") && (BH = BH.replace(/[^\n]+$/, "")), !1
+           })), BH && (BH = BH.replace(/\S/g, "")), BH
```

#### 118. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1621-L1622` → after: `L3866-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3866-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3866-L3870) · [Before (L1621-L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1621-L1622)

```diff
-         async function fe(VV, eV) {
-           return Le(VV, eV)
+         rawColon(HH) {
+           let BH;
+           return HH.walkDecls((HH => {
+             if ("undefined" !== typeof HH.raws.between) return BH = HH.raws.between.replace(/[^\s:]/g, ""), !1
+           })), BH
```

#### 119. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1624-L1625` → after: `L3872-L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3872-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3872-L3876) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1624-L1625)

```diff
-         async function me(VV, eV) {
-           return Le(VV, eV)
+         rawEmptyBody(HH) {
+           let BH;
+           return HH.walk((HH => {
+             if (HH.nodes && 0 === HH.nodes.length && (BH = HH.raws.after, "undefined" !== typeof BH)) return !1
+           })), BH
```

#### 120. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1627-L1705` → after: `L3878-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3878-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3878-L3885) · [Before (L1627-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1627-L1705)

```diff
-         class Ke extends oe {
-           constructor(VV, eV, xV) {
-             let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-             super("password", xV), this._email = VV, this._password = eV, this._tenantId = JV
-           }
-           static _fromEmailAndPassword(VV, eV) {
-             return new Ke(VV, eV, "password")
-           }
-           static _fromEmailAndCode(VV, eV) {
-             return new Ke(VV, eV, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-           }
-           toJSON() {
-             return {
-               email: this._email,
-               password: this._password,
-               signInMethod: this.signInMethod,
- ... (63 more removed lines; see GitHub link above)
+         rawIndent(HH) {
+           if (HH.raws.indent) return HH.raws.indent;
+           let BH;
+           return HH.walk((LH => {
+             let AH = LH.parent;
+             if (AH && AH !== HH && AH.parent && AH.parent === HH && "undefined" !== typeof LH.raws.before) {
+               let HH = LH.raws.before.split("\n");
+               return BH = HH[HH.length - 1], BH = BH.replace(/\S/g, ""), !1
```

#### 121. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1707-L1710` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3887) · [Before (L1707-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1707-L1710)

```diff
-           }
-           _getReauthenticationResolver(VV) {
-             return this._getIdTokenResponse(VV)
-           }
+           })), BH
```

#### 122. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1712-L1713` → after: `L3889-L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3889-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3889-L3893) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1712-L1713)

```diff
-         async function He(VV, eV) {
-           return hV(VV, "POST", "/v1/accounts:signInWithIdp", aV(VV, eV))
+         rawSemicolon(HH) {
+           let BH;
+           return HH.walk((HH => {
+             if (HH.nodes && HH.nodes.length && "decl" === HH.last.type && (BH = HH.raws.semicolon, "undefined" !== typeof BH)) return !1
+           })), BH
```

#### 123. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1715-L1721` → after: `L3895-L3957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3895-L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3895-L3957) · [Before (L1715-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1715-L1721)

```diff
-         class ue extends oe {
-           constructor() {
-             super(...arguments), this.pendingToken = null
-           }
-           static _fromParams(VV) {
-             const eV = new ue(VV.providerId, VV.signInMethod);
-             return VV.idToken || VV.accessToken ? (VV.idToken && (eV.idToken = VV.idToken), VV.accessToken && (eV.accessToken = VV.accessToken), VV.nonce && !VV.pendingToken && (eV.nonce = VV.nonce), VV.pendingToken && (eV.pendingToken = VV.pendingToken)) : VV.oauthToken && VV.oa … [truncated]
+         rawValue(HH, BH) {
+           let LH = HH[BH],
+             AH = HH.raws[BH];
+           return AH && AH.value === LH ? AH.raw : LH
+         }
+         root(HH) {
+           this.body(HH), HH.raws.after && this.builder(HH.raws.after)
+         }
+         rule(HH) {
+           this.block(HH, this.rawValue(HH, "selector")), HH.raws.ownSemicolon && this.builder(HH.raws.ownSemicolon, HH, "end")
+         }
+         stringify(HH, BH) {
+           if (!this[HH.type]) throw new Error("Unknown AST node type " + HH.type + ". Maybe you need to change PostCSS stringifier.");
+           this[HH.type](HH, BH)
+         }
+       }
+ ... (47 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1723-L1732` → after: `L3959-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3959-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L3959-L4004) · [Before (L1723-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1723-L1732)

```diff
-           toJSON() {
-             return {
-               idToken: this.idToken,
-               accessToken: this.accessToken,
-               secret: this.secret,
-               nonce: this.nonce,
-               pendingToken: this.pendingToken,
-               providerId: this.providerId,
-               signInMethod: this.signInMethod
-             }
+           return HH
+         }
+         after(HH) {
+           return this.parent.insertAfter(this, HH), this
+         }
+         assign() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           for (let BH in HH) this[BH] = HH[BH];
+           return this
+         }
+         before(HH) {
+           return this.parent.insertBefore(this, HH), this
+         }
+         cleanRaws(HH) {
+           delete this.raws.before, delete this.raws.after, HH || delete this.raws.between
+         }
+ ... (30 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1734-L1766` → after: `L4006-L4011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4006-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4006-L4011) · [Before (L1734-L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1734-L1766)

```diff
-           static fromJSON(VV) {
-             const eV = "string" === typeof VV ? JSON.parse(VV) : VV,
-               {
-                 providerId: xV,
-                 signInMethod: JV
-               } = eV,
-               YV = UV(eV, ["providerId", "signInMethod"]);
-             if (!xV || !JV) return null;
-             const yV = new ue(xV, JV);
-             return yV.idToken = YV.idToken || void 0, yV.accessToken = YV.accessToken || void 0, yV.secret = YV.secret, yV.nonce = YV.nonce, yV.pendingToken = YV.pendingToken || null, yV
-           }
-           _getIdTokenResponse(VV) {
-             return He(VV, this.buildRequest())
-           }
-           _linkToIdToken(VV, eV) {
-             const xV = this.buildRequest();
- ... (17 more removed lines; see GitHub link above)
+           return new LH(HH)
+         }
+         getProxyProcessor() {
+           return {
+             get: (HH, BH) => "proxyOf" === BH ? HH : "root" === BH ? () => HH.root().toProxy() : HH[BH],
+             set: (HH, BH, LH) => (HH[BH] === LH || (HH[BH] = LH, "prop" !== BH && "value" !== BH && "name" !== BH && "params" !== BH && "important" !== BH && "text" !== BH || HH.markDirty()), !0)
```

#### 126. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1769-L1780` → after: `L4014-L4018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4014-L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4014-L4018) · [Before (L1769-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1769-L1780)

```diff
-         const se = {
-           USER_NOT_FOUND: "user-not-found"
-         };
-         class Se extends oe {
-           constructor(VV) {
-             super("phone", "phone"), this.params = VV
-           }
-           static _fromVerification(VV, eV) {
-             return new Se({
-               verificationId: VV,
-               verificationCode: eV
-             })
+         markDirty() {
+           if (this[HH]) {
+             this[HH] = !1;
+             let BH = this;
+             for (; BH = BH.parent;) BH[HH] = !1
```

#### 127. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1782-L1786` → after: `L4020-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4020-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4020-L4030) · [Before (L1782-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1782-L1786)

```diff
-           static _fromTokenResponse(VV, eV) {
-             return new Se({
-               phoneNumber: VV,
-               temporaryProof: eV
-             })
+         }
+         next() {
+           if (!this.parent) return;
+           let HH = this.parent.index(this);
+           return this.parent.nodes[HH + 1]
+         }
+         positionBy(HH, BH) {
+           let LH = this.source.start;
+           if (HH.index) LH = this.positionInside(HH.index, BH);
+           else if (HH.word) {
+             let AH = (BH = this.toString()).indexOf(HH.word); - 1 !== AH && (LH = this.positionInside(AH, BH))
```

#### 128. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1788-L1791` → after: `L4032-L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4032-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4032-L4041) · [Before (L1788-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1788-L1791)

```diff
-           _getIdTokenResponse(VV) {
-             return async function(VV, eV) {
-               return hV(VV, "POST", "/v1/accounts:signInWithPhoneNumber", aV(VV, eV))
-             }(VV, this._makeVerificationRequest())
+           return LH
+         }
+         positionInside(HH, BH) {
+           let LH = BH || this.toString(),
+             AH = this.source.start.column,
+             rH = this.source.start.line;
+           for (let SH = 0; SH < HH; SH++) "\n" === LH[SH] ? (AH = 1, rH += 1) : AH += 1;
+           return {
+             column: AH,
+             line: rH
```

#### 129. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1793-L1818` → after: `L4043-L4056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4043-L4056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4043-L4056) · [Before (L1793-L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1793-L1818)

```diff
-           _linkToIdToken(VV, eV) {
-             return async function(VV, eV) {
-               const xV = await hV(VV, "POST", "/v1/accounts:signInWithPhoneNumber", aV(VV, eV));
-               if (xV.temporaryProof) throw fV(VV, "account-exists-with-different-credential", xV);
-               return xV
-             }(VV, Object.assign({
-               idToken: eV
-             }, this._makeVerificationRequest()))
-           }
-           _getReauthenticationResolver(VV) {
-             return async function(VV, eV) {
-               return hV(VV, "POST", "/v1/accounts:signInWithPhoneNumber", aV(VV, Object.assign(Object.assign({}, eV), {
-                 operation: "REAUTH"
-               })), se)
-             }(VV, this._makeVerificationRequest())
-           }
- ... (10 more removed lines; see GitHub link above)
+         }
+         prev() {
+           if (!this.parent) return;
+           let HH = this.parent.index(this);
+           return this.parent.nodes[HH - 1]
+         }
+         rangeBy(HH) {
+           let BH = {
+               column: this.source.start.column,
+               line: this.source.start.line
+             },
+             LH = this.source.end ? {
+               column: this.source.end.column + 1,
+               line: this.source.end.line
```

#### 130. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1820-L1826` → after: `L4058-L4059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4058-L4059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4058-L4059) · [Before (L1820-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1820-L1826)

```diff
-               sessionInfo: xV,
-               code: JV
-             }
-           }
-           toJSON() {
-             const VV = {
-               providerId: this.providerId
+               column: BH.column + 1,
+               line: BH.line
```

#### 131. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1828-L1883` → after: `L4061-L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4061-L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4061-L4091) · [Before (L1828-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1828-L1883)

```diff
-             return this.params.phoneNumber && (VV.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (VV.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (VV.verificationCode = this.params.verificationCode), this.params.verification … [truncated]
-           }
-           static fromJSON(VV) {
-             "string" === typeof VV && (VV = JSON.parse(VV));
-             const {
-               verificationId: eV,
-               verificationCode: xV,
-               phoneNumber: JV,
-               temporaryProof: YV
-             } = VV;
-             return xV || eV || JV || YV ? new Se({
-               verificationId: eV,
-               verificationCode: xV,
-               phoneNumber: JV,
-               temporaryProof: YV
-             }) : null
- ... (40 more removed lines; see GitHub link above)
+           if (HH.word) {
+             let AH = this.toString(),
+               rH = AH.indexOf(HH.word); - 1 !== rH && (BH = this.positionInside(rH, AH), LH = this.positionInside(rH + HH.word.length, AH))
+           } else HH.start ? BH = {
+             column: HH.start.column,
+             line: HH.start.line
+           } : HH.index && (BH = this.positionInside(HH.index)), HH.end ? LH = {
+             column: HH.end.column,
+             line: HH.end.line
+           } : "number" === typeof HH.endIndex ? LH = this.positionInside(HH.endIndex) : HH.index && (LH = this.positionInside(HH.index + 1));
+           return (LH.line < BH.line || LH.line === BH.line && LH.column <= BH.column) && (LH = {
+             column: BH.column + 1,
+             line: BH.line
+           }), {
+             end: LH,
+             start: BH
+ ... (15 more added lines; see GitHub link above)
```

#### 132. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1886-L1888` → after: `L4095-L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4095-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4095-L4098) · [Before (L1886-L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1886-L1888)

```diff
- 
-         function de(VV) {
-           return Ie.parseLink(VV)
+         root() {
+           let HH = this;
+           for (; HH.parent && "document" !== HH.parent.type;) HH = HH.parent;
+           return HH
```

#### 133. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1890-L1899` → after: `L4100-L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4100-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4100-L4118) · [Before (L1890-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1890-L1899)

```diff
-         class Oe {
-           constructor() {
-             this.providerId = Oe.PROVIDER_ID
-           }
-           static credential(VV, eV) {
-             return Ke._fromEmailAndPassword(VV, eV)
-           }
-           static credentialWithLink(VV, eV) {
-             const xV = Ie.parseLink(eV);
-             return NV(xV, "argument-error"), Ke._fromEmailAndCode(VV, xV.code, xV.tenantId)
+         toJSON(HH, BH) {
+           let LH = {},
+             AH = null == BH;
+           BH = BH || new Map;
+           let rH = 0;
+           for (let SH in this) {
+             if (!Object.prototype.hasOwnProperty.call(this, SH)) continue;
+             if ("parent" === SH || "proxyCache" === SH) continue;
+             let HH = this[SH];
+             if (Array.isArray(HH)) LH[SH] = HH.map((HH => "object" === typeof HH && HH.toJSON ? HH.toJSON(null, BH) : HH));
+             else if ("object" === typeof HH && HH.toJSON) LH[SH] = HH.toJSON(null, BH);
+             else if ("source" === SH) {
+               let AH = BH.get(HH.input);
+               null == AH && (AH = rH, BH.set(HH.input, rH), rH++), LH[SH] = {
+                 end: HH.end,
+                 inputId: AH,
+ ... (3 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1902-L1915` → after: `L4122-L4123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4122-L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4122-L4123) · [Before (L1902-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1902-L1915)

```diff
-         Oe.PROVIDER_ID = "password", Oe.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Oe.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
-         class Vx {
-           constructor(VV) {
-             this.providerId = VV, this.defaultLanguageCode = null, this.customParameters = {}
-           }
-           setDefaultLanguage(VV) {
-             this.defaultLanguageCode = VV
-           }
-           setCustomParameters(VV) {
-             return this.customParameters = VV, this
-           }
-           getCustomParameters() {
-             return this.customParameters
-           }
+         toProxy() {
+           return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
```

#### 135. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1917-L1926` → after: `L4125-L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4125-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4125-L4131) · [Before (L1917-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1917-L1926)

```diff
-         class ex extends Vx {
-           constructor() {
-             super(...arguments), this.scopes = []
-           }
-           addScope(VV) {
-             return this.scopes.includes(VV) || this.scopes.push(VV), this
-           }
-           getScopes() {
-             return [...this.scopes]
-           }
+         toString() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH;
+           HH.stringify && (HH = HH.stringify);
+           let BH = "";
+           return HH(this, (HH => {
+             BH += HH
+           })), BH
```

#### 136. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1928-L1948` → after: `L4133-L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4133-L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4133-L4181) · [Before (L1928-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1928-L1948)

```diff
-         class xx extends ex {
-           static credentialFromJSON(VV) {
-             const eV = "string" === typeof VV ? JSON.parse(VV) : VV;
-             return NV("providerId" in eV && "signInMethod" in eV, "argument-error"), ue._fromParams(eV)
-           }
-           credential(VV) {
-             return this._credential(Object.assign(Object.assign({}, VV), {
-               nonce: VV.rawNonce
-             }))
-           }
-           _credential(VV) {
-             return NV(VV.idToken || VV.accessToken, "argument-error"), ue._fromParams(Object.assign(Object.assign({}, VV), {
-               providerId: this.providerId,
-               signInMethod: this.providerId
-             }))
-           }
- ... (5 more removed lines; see GitHub link above)
+         warn(HH, BH, LH) {
+           let AH = {
+             node: this
+           };
+           for (let rH in LH) AH[rH] = LH[rH];
+           return HH.warn(BH, AH)
+         }
+         get proxyOf() {
+           return this
+         }
+       }
+       return OA = hH, hH.default = hH, OA
+     }
+ 
+     function br() {
+       if (mA) return kA;
+ ... (33 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1950-L1973` → after: `L4183-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4183-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4183-L4255) · [Before (L1950-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1950-L1973)

```diff
-           static oauthCredentialFromTaggedObject(VV) {
-             let {
-               _tokenResponse: eV
-             } = VV;
-             if (!eV) return null;
-             const {
-               oauthIdToken: xV,
-               oauthAccessToken: JV,
-               oauthTokenSecret: YV,
-               pendingToken: UV,
-               nonce: yV,
-               providerId: pV
-             } = eV;
-             if (!JV && !YV && !xV && !UV) return null;
-             if (!pV) return null;
-             try {
- ... (8 more removed lines; see GitHub link above)
+         }
+       }, oA
+     }
+ 
+     function mr() {
+       if (lA) return fA;
+       lA = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+       } = QA, {
+         existsSync: LH,
+         readFileSync: AH
+       } = QA, {
+         dirname: rH,
+         join: SH
+ ... (57 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1977-L2003` → after: `L4259-L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4259-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4259-L4293) · [Before (L1977-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L1977-L2003)

```diff
-         class Jx extends ex {
-           constructor() {
-             super("facebook.com")
-           }
-           static credential(VV) {
-             return ue._fromParams({
-               providerId: Jx.PROVIDER_ID,
-               signInMethod: Jx.FACEBOOK_SIGN_IN_METHOD,
-               accessToken: VV
-             })
-           }
-           static credentialFromResult(VV) {
-             return Jx.credentialFromTaggedObject(VV)
-           }
-           static credentialFromError(VV) {
-             return Jx.credentialFromTaggedObject(VV.customData || {})
- ... (11 more removed lines; see GitHub link above)
+         startWith(HH, BH) {
+           return !!HH && HH.substr(0, BH.length) === BH
+         }
+         withContent() {
+           return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
+         }
+       }
+       return fA = hH, hH.default = hH, fA
+     }
+ 
+     function or() {
+       if (cA) return KA;
+       cA = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+ ... (19 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2007-L2024` → after: `L4298-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4298-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4298-L4359) · [Before (L2007-L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2007-L2024)

```diff
-         Jx.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Jx.PROVIDER_ID = "facebook.com";
-         class Yx extends ex {
-           constructor() {
-             super("google.com"), this.addScope("profile")
-           }
-           static credential(VV, eV) {
-             return ue._fromParams({
-               providerId: Yx.PROVIDER_ID,
-               signInMethod: Yx.GOOGLE_SIGN_IN_METHOD,
-               idToken: VV,
-               accessToken: eV
-             })
-           }
-           static credentialFromResult(VV) {
-             return Yx.credentialFromTaggedObject(VV)
-           }
- ... (2 more removed lines; see GitHub link above)
+         error(HH, BH, LH) {
+           let rH, SH, hH, tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+           if (BH && "object" === typeof BH) {
+             let HH = BH,
+               AH = LH;
+             if ("number" === typeof HH.offset) {
+               let AH = this.fromOffset(HH.offset);
+               BH = AH.line, LH = AH.col
+             } else BH = HH.line, LH = HH.column;
+             if ("number" === typeof AH.offset) {
+               let HH = this.fromOffset(AH.offset);
+               SH = HH.line, hH = HH.col
+             } else SH = AH.line, hH = AH.column
+           } else if (!LH) {
+             let HH = this.fromOffset(BH);
+             BH = HH.line, LH = HH.col
+ ... (46 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2026-L2040` → after: `L4361-L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4361-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4361-L4363) · [Before (L2026-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2026-L2040)

```diff
-           static credentialFromTaggedObject(VV) {
-             let {
-               _tokenResponse: eV
-             } = VV;
-             if (!eV) return null;
-             const {
-               oauthIdToken: xV,
-               oauthAccessToken: JV
-             } = eV;
-             if (!xV && !JV) return null;
-             try {
-               return Yx.credential(xV, JV)
-             } catch (YV) {
-               return null
-             }
+           return {
+             col: HH - LH[AH] + 1,
+             line: AH + 1
```

#### 141. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2043-L2052` → after: `L4366-L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4366-L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4366-L4461) · [Before (L2043-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2043-L2052)

```diff
-         Yx.GOOGLE_SIGN_IN_METHOD = "google.com", Yx.PROVIDER_ID = "google.com";
-         class Ux extends ex {
-           constructor() {
-             super("github.com")
-           }
-           static credential(VV) {
-             return ue._fromParams({
-               providerId: Ux.PROVIDER_ID,
-               signInMethod: Ux.GITHUB_SIGN_IN_METHOD,
-               accessToken: VV
+         mapResolve(HH) {
+           return /^\w+:\/\//.test(HH) ? HH : SH(this.map.consumer().sourceRoot || this.map.root || ".", HH)
+         }
+         origin(HH, BH, SH, hH) {
+           if (!this.map) return !1;
+           let tH, zH, CH = this.map.consumer(),
+             EH = CH.originalPositionFor({
+               column: BH,
+               line: HH
+             });
+           if (!EH.source) return !1;
+           "number" === typeof SH && (tH = CH.originalPositionFor({
+             column: hH,
+             line: SH
+           })), zH = rH(EH.source) ? AH(EH.source) : new URL(EH.source, this.map.consumer().sourceRoot || AH(this.map.mapFile));
+           let XH = {
+ ... (80 more added lines; see GitHub link above)
```

#### 142. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2054-L2072` → after: `L4463-L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4463-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4463-L4477) · [Before (L2054-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2054-L2072)

```diff
-           }
-           static credentialFromResult(VV) {
-             return Ux.credentialFromTaggedObject(VV)
-           }
-           static credentialFromError(VV) {
-             return Ux.credentialFromTaggedObject(VV.customData || {})
-           }
-           static credentialFromTaggedObject(VV) {
-             let {
-               _tokenResponse: eV
-             } = VV;
-             if (!eV || !("oauthAccessToken" in eV)) return null;
-             if (!eV.oauthAccessToken) return null;
-             try {
-               return Ux.credential(eV.oauthAccessToken)
-             } catch (xV) {
- ... (3 more removed lines; see GitHub link above)
+           } else this.map = new BH({
+             file: this.outputFile(),
+             ignoreInvalidMapping: !0
+           }), this.map.addMapping({
+             generated: {
+               column: 0,
+               line: 1
+             },
+             original: {
+               column: 0,
+               line: 1
+             },
+             source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
+           });
+           return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
```

#### 143. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2074-L2113` → after: `L4479-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4479-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4479-L4503) · [Before (L2074-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2074-L2113)

```diff
-         Ux.GITHUB_SIGN_IN_METHOD = "github.com", Ux.PROVIDER_ID = "github.com";
-         class yx extends oe {
-           constructor(VV, eV) {
-             super(VV, VV), this.pendingToken = eV
-           }
-           _getIdTokenResponse(VV) {
-             return He(VV, this.buildRequest())
-           }
-           _linkToIdToken(VV, eV) {
-             const xV = this.buildRequest();
-             return xV.idToken = eV, He(VV, xV)
-           }
-           _getReauthenticationResolver(VV) {
-             const eV = this.buildRequest();
-             return eV.autoCreate = !1, He(VV, eV)
-           }
- ... (24 more removed lines; see GitHub link above)
+         generateString() {
+           this.css = "", this.map = new BH({
+             file: this.outputFile(),
+             ignoreInvalidMapping: !0
+           });
+           let HH, LH, AH = 1,
+             rH = 1,
+             SH = "<no source>",
+             hH = {
+               generated: {
+                 column: 0,
+                 line: 0
+               },
+               original: {
+                 column: 0,
+                 line: 0
+ ... (9 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2115` → after: `L4505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4505) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2115)

```diff
-           }
+           }))
```

#### 145. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2117-L2144` → after: `L4507-L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4507-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4507-L4557) · [Before (L2117-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2117-L2144)

```diff
-         class px extends Vx {
-           constructor(VV) {
-             NV(VV.startsWith("saml."), "argument-error"), super(VV)
-           }
-           static credentialFromResult(VV) {
-             return px.samlCredentialFromTaggedObject(VV)
-           }
-           static credentialFromError(VV) {
-             return px.samlCredentialFromTaggedObject(VV.customData || {})
-           }
-           static credentialFromJSON(VV) {
-             const eV = yx.fromJSON(VV);
-             return NV(eV, "argument-error"), eV
-           }
-           static samlCredentialFromTaggedObject(VV) {
-             let {
- ... (12 more removed lines; see GitHub link above)
+         isAnnotation() {
+           return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((HH => HH.annotation)))
+         }
+         isInline() {
+           if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
+           let HH = this.mapOpts.annotation;
+           return ("undefined" === typeof HH || !0 === HH) && (!this.previous().length || this.previous().some((HH => HH.inline)))
+         }
+         isMap() {
+           return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
+         }
+         isSourcesContent() {
+           return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((HH => HH.withContent()))
+         }
+         outputFile() {
+           return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
+ ... (35 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2148-L2181` → after: `L4565-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4565-L4566) · [Before (L2148-L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2148-L2181)

```diff
-         class Qx extends ex {
-           constructor() {
-             super("twitter.com")
-           }
-           static credential(VV, eV) {
-             return ue._fromParams({
-               providerId: Qx.PROVIDER_ID,
-               signInMethod: Qx.TWITTER_SIGN_IN_METHOD,
-               oauthToken: VV,
-               oauthTokenSecret: eV
-             })
-           }
-           static credentialFromResult(VV) {
-             return Qx.credentialFromTaggedObject(VV)
-           }
-           static credentialFromError(VV) {
- ... (18 more removed lines; see GitHub link above)
+         sourcePath(HH) {
+           return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(HH.source.input.from) : this.toUrl(this.path(HH.source.input.from))
```

#### 147. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2183-L2184` → after: `L4568-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4568-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4568-L4569) · [Before (L2183-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2183-L2184)

```diff
-         async function nx(VV, eV) {
-           return hV(VV, "POST", "/v1/accounts:signUp", aV(VV, eV))
+         toBase64(HH) {
+           return Buffer ? Buffer.from(HH).toString("base64") : window.btoa(unescape(encodeURIComponent(HH)))
```

#### 148. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2186-L2210` → after: `L4571-L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4571-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4571-L4576) · [Before (L2186-L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2186-L2210)

```diff
-         Qx.TWITTER_SIGN_IN_METHOD = "twitter.com", Qx.PROVIDER_ID = "twitter.com";
-         class wx {
-           constructor(VV) {
-             this.user = VV.user, this.providerId = VV.providerId, this._tokenResponse = VV._tokenResponse, this.operationType = VV.operationType
-           }
-           static async _fromIdTokenResponse(VV, eV, xV) {
-             let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             const YV = await Je._fromIdTokenResponse(VV, xV, JV),
-               UV = Zx(xV);
-             return new wx({
-               user: YV,
-               providerId: UV,
-               _tokenResponse: xV,
-               operationType: eV
-             })
-           }
- ... (9 more removed lines; see GitHub link above)
+         toFileUrl(HH) {
+           let BH = this.memoizedFileURLs.get(HH);
+           if (BH) return BH;
+           if (hH) {
+             let BH = hH(HH).toString();
+             return this.memoizedFileURLs.set(HH, BH), BH
```

#### 149. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2214-L2215` → after: `L4590-L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4590-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4590-L4722) · [Before (L2214-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2214-L2215)

```diff
-         function Zx(VV) {
-           return VV.providerId ? VV.providerId : "phoneNumber" in VV ? "phone" : null
+     function fr() {
+       if (NA) return gA;
+       NA = 1;
+       let HH = Or();
+       class BH extends HH {
+         constructor(HH) {
+           super(HH), this.type = "comment"
+         }
+       }
+       return gA = BH, BH.default = BH, gA
+     }
+ 
+     function lr() {
+       if (jA) return RA;
+       jA = 1;
+       let HH, BH, LH, AH, {
+ ... (117 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2217-L2229` → after: `L4724-L4727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4724-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4724-L4727) · [Before (L2217-L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2217-L2229)

```diff
-         async function vx(VV) {
-           var eV;
-           const xV = Re(VV);
-           if (await xV._initializationPromise, null === (eV = xV.currentUser) || void 0 === eV ? void 0 : eV.isAnonymous) return new wx({
-             user: xV.currentUser,
-             providerId: null,
-             operationType: "signIn"
-           });
-           const JV = await nx(xV, {
-               returnSecureToken: !0
-             }),
-             YV = await wx._fromIdTokenResponse(xV, "signIn", JV, !0);
-           return await xV._updateCurrentUser(YV.user), YV
+         replaceValues(HH, BH, LH) {
+           return LH || (LH = BH, BH = {}), this.walkDecls((AH => {
+             BH.props && !BH.props.includes(AH.prop) || BH.fast && !AH.value.includes(BH.fast) || (AH.value = AH.value.replace(HH, LH))
+           })), this.markDirty(), this
```

#### 151. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2231-L2238` → after: `L4729-L4738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4729-L4738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4729-L4738) · [Before (L2231-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2231-L2238)

```diff
-         class rx extends JV.j {
-           constructor(VV, eV, xV, JV) {
-             var YV;
-             super(eV.code, eV.message), this.operationType = xV, this.user = JV, Object.setPrototypeOf(this, rx.prototype), this.customData = {
-               appName: VV.name,
-               tenantId: null !== (YV = VV.tenantId) && void 0 !== YV ? YV : void 0,
-               _serverResponse: eV.customData._serverResponse,
-               operationType: xV
+         some(HH) {
+           return this.nodes.some(HH)
+         }
+         walk(HH) {
+           return this.each(((BH, LH) => {
+             let AH;
+             try {
+               AH = HH(BH, LH)
+             } catch (rH) {
+               throw BH.addToError(rH)
```

#### 152. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2240-L2243` → after: `L4740-L4741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4740-L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4740-L4741) · [Before (L2240-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2240-L2243)

```diff
-           }
-           static _fromErrorAndOperation(VV, eV, xV, JV) {
-             return new rx(VV, eV, xV, JV)
-           }
+             return !1 !== AH && BH.walk && (AH = BH.walk(HH)), AH
+           }))
```

#### 153. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2245-L2249` → after: `L4743-L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4743-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4743-L4754) · [Before (L2245-L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2245-L2249)

```diff
- 
-         function kx(VV, eV, xV, JV) {
-           return ("reauthenticate" === eV ? xV._getReauthenticationResolver(VV) : xV._getIdTokenResponse(VV)).catch((xV => {
-             if ("auth/multi-factor-auth-required" === xV.code) throw rx._fromErrorAndOperation(VV, xV, eV, JV);
-             throw xV
+         walkAtRules(HH, BH) {
+           return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
+             if ("atrule" === LH.type && HH.test(LH.name)) return BH(LH, AH)
+           })) : this.walk(((LH, AH) => {
+             if ("atrule" === LH.type && LH.name === HH) return BH(LH, AH)
+           })) : (BH = HH, this.walk(((HH, LH) => {
+             if ("atrule" === HH.type) return BH(HH, LH)
+           })))
+         }
+         walkComments(HH) {
+           return this.walk(((BH, LH) => {
+             if ("comment" === BH.type) return HH(BH, LH)
```

#### 154. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2253-L2259` → after: `L4797-L4911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4797-L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4797-L4911) · [Before (L2253-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2253-L2259)

```diff
-         function bx(VV) {
-           return new Set(VV.map((VV => {
-             let {
-               providerId: eV
-             } = VV;
-             return eV
-           })).filter((VV => !!VV)))
+     function Kr() {
+       if (FA) return nA;
+       FA = 1;
+       let HH, BH, LH = lr();
+       class AH extends LH {
+         constructor(HH) {
+           super({
+             type: "document",
+             ...HH
+           }), this.nodes || (this.nodes = [])
+         }
+         toResult() {
+           let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new HH(new BH, this, LH).stringify()
+         }
+       }
+ ... (99 more added lines; see GitHub link above)
```

#### 155. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2261-L2299` → after: `L4913-L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4913-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L4913-L5149) · [Before (L2261-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2261-L2299)

```diff
-         async function Ex(VV, eV) {
-           const xV = (0, JV.L)(VV);
-           await jx(!0, xV, eV);
-           const {
-             providerUserInfo: YV
-           } = await async function(VV, eV) {
-             return oV(VV, "POST", "/v1/accounts:update", eV)
-           }(xV.auth, {
-             idToken: await xV.getIdToken(),
-             deleteProvider: [eV]
-           }), UV = bx(YV || []);
-           return xV.providerData = xV.providerData.filter((VV => UV.has(VV.providerId))), UV.has("phone") || (xV.phoneNumber = null), await xV.auth._persistUserIfCurrent(xV), xV
-         }
-         async function Bx(VV, eV) {
-           let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-           const JV = await SV(VV, eV._linkToIdToken(VV.auth, await VV.getIdToken()), xV);
- ... (23 more removed lines; see GitHub link above)
+         removeChild(HH, BH) {
+           let LH = this.index(HH);
+           return !BH && 0 === LH && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[LH].raws.before), super.removeChild(HH)
+         }
+         toResult() {
+           let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new HH(new BH, this, LH).stringify()
+         }
+       }
+       return AH.registerLazyResult = BH => {
+         HH = BH
+       }, AH.registerProcessor = HH => {
+         BH = HH
+       }, Hr = AH, AH.default = AH, LH.registerRoot(AH), Hr
+     }
+ 
+ ... (221 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2302-L2307` → after: `L5153-L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5153-L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5153-L5158) · [Before (L2302-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2302-L2307)

```diff
-         async function tx(VV, eV) {
-           let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-           const JV = "signIn",
-             YV = await kx(VV, JV, eV),
-             UV = await wx._fromIdTokenResponse(VV, JV, YV);
-           return xV || await VV._updateCurrentUser(UV.user), UV
+         checkMissedSemicolon(HH) {
+           let BH = this.colon(HH);
+           if (!1 === BH) return;
+           let LH, AH = 0;
+           for (let rH = BH - 1; rH >= 0 && (LH = HH[rH], "space" === LH[0] || (AH += 1, 2 !== AH)); rH--);
+           throw this.input.error("Missed semicolon", "word" === LH[0] ? LH[3] + 1 : LH[2])
```

#### 157. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2309-L2310` → after: `L5160-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5160-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5160-L5234) · [Before (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2309-L2310)

```diff
-         async function Fx(VV, eV) {
-           return tx(Re(VV), eV)
+         colon(HH) {
+           let BH, LH, AH, rH = 0;
+           for (let [SH, hH] of HH.entries()) {
+             if (BH = hH, LH = BH[0], "(" === LH && (rH += 1), ")" === LH && (rH -= 1), 0 === rH && ":" === LH) {
+               if (AH) {
+                 if ("word" === AH[0] && "progid" === AH[1]) continue;
+                 return SH
+               }
+               this.doubleColon(BH)
+             }
+             AH = BH
+           }
+           return !1
+         }
+         comment(HH) {
+           let BH = new LH;
+ ... (59 more added lines; see GitHub link above)
```

#### 158. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2312-L2314` → after: `L5236-L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5236-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5236-L5241) · [Before (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2312-L2314)

```diff
-         async function Tx(VV, eV) {
-           const xV = (0, JV.L)(VV);
-           return await jx(!1, xV, eV.providerId), Bx(xV, eV)
+         doubleColon(HH) {
+           throw this.input.error("Double colon", {
+             offset: HH[2]
+           }, {
+             offset: HH[2] + HH[1].length
+           })
```

#### 159. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2316-L2317` → after: `L5243-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5243-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5243-L5245) · [Before (L2316-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2316-L2317)

```diff
-         async function Px(VV, eV) {
-           return qx((0, JV.L)(VV), eV)
+         emptyRule(HH) {
+           let BH = new SH;
+           this.init(BH, HH[2]), BH.selector = "", BH.raws.between = "", this.current = BH
```

#### 160. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2319-L2327` → after: `L5247-L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5247-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5247-L5248) · [Before (L2319-L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2319-L2327)

```diff
-         async function Ax(VV, eV) {
-           const xV = Re(VV),
-             JV = await async function(VV, eV) {
-               return hV(VV, "POST", "/v1/accounts:signInWithCustomToken", aV(VV, eV))
-             }(xV, {
-               token: eV,
-               returnSecureToken: !0
-             }), YV = await wx._fromIdTokenResponse(xV, "signIn", JV);
-           return await xV._updateCurrentUser(YV.user), YV
+         end(HH) {
+           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hT(HH … [truncated]
```

#### 161. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2329-L2335` → after: `L5250-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5250-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5250-L5251) · [Before (L2329-L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2329-L2335)

```diff
-         class Nx {
-           constructor(VV, eV) {
-             this.factorId = VV, this.uid = eV.mfaEnrollmentId, this.enrollmentTime = new Date(eV.enrolledAt).toUTCString(), this.displayName = eV.displayName
-           }
-           static _fromServerResponse(VV, eV) {
-             return "phoneInfo" in eV ? Xx._fromServerResponse(VV, eV) : "totpInfo" in eV ? Mx._fromServerResponse(VV, eV) : tV(VV, "internal-error")
-           }
+         endFile() {
+           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hT(this.tokenizer.positio … [truncated]
```

#### 162. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2337-L2339` → after: `L5253-L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5253-L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5253-L5256) · [Before (L2337-L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2337-L2339)

```diff
-         class Xx extends Nx {
-           constructor(VV) {
-             super("phone", VV), this.phoneNumber = VV.phoneInfo
+         freeSemicolon(HH) {
+           if (this.spaces += HH[1], this.current.nodes) {
+             let HH = this.current.nodes[this.current.nodes.length - 1];
+             HH && "rule" === HH.type && !HH.raws.ownSemicolon && (HH.raws.ownSemicolon = this.spaces, this.spaces = "")
```

#### 163. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2341-L2342` → after: `L5258-L5297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5258-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5258-L5297) · [Before (L2341-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2341-L2342)

```diff
-           static _fromServerResponse(VV, eV) {
-             return new Xx(eV)
+         }
+         hT(HH) {
+           let BH = this.input.fromOffset(HH);
+           return {
+             column: BH.col,
+             line: BH.line,
+             offset: HH
+           }
+         }
+         init(HH, BH) {
+           this.current.push(HH), HH.source = {
+             input: this.input,
+             start: this.hT(BH)
+           }, HH.raws.before = this.spaces, this.spaces = "", "comment" !== HH.type && (this.semicolon = !1)
+         }
+         other(HH) {
+ ... (24 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2345-L2347` → after: `L5305-L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5305-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5305-L5327) · [Before (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2345-L2347)

```diff
-         class Mx extends Nx {
-           constructor(VV) {
-             super("totp", VV)
+         parse() {
+           let HH;
+           for (; !this.tokenizer.endOfFile();) switch (HH = this.tokenizer.nextToken(), HH[0]) {
+             case "space":
+               this.spaces += HH[1];
+               break;
+             case ";":
+               this.freeSemicolon(HH);
+               break;
+             case "}":
+               this.end(HH);
+               break;
+             case "comment":
+               this.comment(HH);
+               break;
+             case "at-word":
+ ... (7 more added lines; see GitHub link above)
```

#### 165. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2349-L2350` → after: `L5329-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5329-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5329-L5342) · [Before (L2349-L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2349-L2350)

```diff
-           static _fromServerResponse(VV, eV) {
-             return new Mx(eV)
+           this.endFile()
+         }
+         precheckMissedSemicolon() {}
+         raw(HH, BH, LH, AH) {
+           let rH, SH, tH, zH, CH = LH.length,
+             EH = "",
+             XH = !0;
+           for (let GH = 0; GH < CH; GH += 1) rH = LH[GH], SH = rH[0], "space" !== SH || GH !== CH - 1 || AH ? "comment" === SH ? (zH = LH[GH - 1] ? LH[GH - 1][0] : "empty", tH = LH[GH + 1] ? LH[GH + 1][0] : "empty", hH[zH] || hH[tH] || "," === EH.slice(-1) ? XH = !1 : EH += rH[1] … [truncated]
+           if (!XH) {
+             let AH = LH.reduce(((HH, BH) => HH + BH[1]), "");
+             HH.raws[BH] = {
+               raw: AH,
+               value: EH
+             }
```

#### 166. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2353-L2356` → after: `L5346-L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5346-L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5346-L5349) · [Before (L2353-L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2353-L2356)

```diff
- 
-         function zx(VV, eV, xV) {
-           var JV;
-           NV((null === (JV = xV.url) || void 0 === JV ? void 0 : JV.length) > 0, VV, "invalid-continue-uri"), NV("undefined" === typeof xV.dynamicLinkDomain || xV.dynamicLinkDomain.length > 0, VV, "invalid-dynamic-link-domain"), eV.continueUrl = xV.url, eV.dynamicLinkDomain = xV. … [truncated]
+         rule(HH) {
+           HH.pop();
+           let BH = new SH;
+           this.init(BH, HH[0][2]), BH.raws.between = this.spacesAndCommentsFromEnd(HH), this.raw(BH, "selector", HH), this.current = BH
```

#### 167. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2358-L2376` → after: `L5351-L5364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5351-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5351-L5364) · [Before (L2358-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2358-L2376)

```diff
-         async function Gx(VV, eV, xV) {
-           var JV;
-           const YV = Re(VV),
-             UV = {
-               requestType: "PASSWORD_RESET",
-               email: eV,
-               clientType: "CLIENT_TYPE_WEB"
-             };
-           if (null === (JV = YV._getRecaptchaConfig()) || void 0 === JV ? void 0 : JV.emailPasswordEnabled) {
-             const VV = await ze(YV, UV, "getOobCode", !0);
-             xV && zx(YV, VV, xV), await fe(YV, VV)
-           } else xV && zx(YV, UV, xV), await fe(YV, UV).catch((async VV => {
-             if ("auth/missing-recaptcha-token" !== VV.code) return Promise.reject(VV);
-             {
-               console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
-               const VV = await ze(YV, UV, "getOobCode", !0);
- ... (3 more removed lines; see GitHub link above)
+         spacesAndCommentsFromEnd(HH) {
+           let BH, LH = "";
+           for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH || "comment" === BH);) LH = HH.pop()[1] + LH;
+           return LH
+         }
+         spacesAndCommentsFromStart(HH) {
+           let BH, LH = "";
+           for (; HH.length && (BH = HH[0][0], "space" === BH || "comment" === BH);) LH += HH.shift()[1];
+           return LH
+         }
+         spacesFromEnd(HH) {
+           let BH, LH = "";
+           for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH);) LH = HH.pop()[1] + LH;
+           return LH
```

#### 168. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2378-L2381` → after: `L5366-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5366-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5366-L5379) · [Before (L2378-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2378-L2381)

```diff
-         async function Wx(VV, eV, xV) {
-           await ce((0, JV.L)(VV), {
-             oobCode: eV,
-             newPassword: xV
+         stringFrom(HH, BH) {
+           let LH = "";
+           for (let AH = BH; AH < HH.length; AH++) LH += HH[AH][1];
+           return HH.splice(BH, HH.length - BH), LH
+         }
+         unclosedBlock() {
+           let HH = this.current.source.start;
+           throw this.input.error("Unclosed block", HH.line, HH.column)
+         }
+         unclosedBracket(HH) {
+           throw this.input.error("Unclosed bracket", {
+             offset: HH[2]
+           }, {
+             offset: HH[2] + 1
```

#### 169. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2384-L2388` → after: `L5382-L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5382-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5382-L5386) · [Before (L2384-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2384-L2388)

```diff
-         async function Rx(VV, eV) {
-           await async function(VV, eV) {
-             return oV(VV, "POST", "/v1/accounts:update", aV(VV, eV))
-           }((0, JV.L)(VV), {
-             oobCode: eV
+         unexpectedClose(HH) {
+           throw this.input.error("Unexpected }", {
+             offset: HH[2]
+           }, {
+             offset: HH[2] + 1
```

#### 170. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2391-L2416` → after: `L5389-L5394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5389-L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5389-L5394) · [Before (L2391-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2391-L2416)

```diff
-         async function gx(VV, eV) {
-           const xV = (0, JV.L)(VV),
-             YV = await ce(xV, {
-               oobCode: eV
-             }),
-             UV = YV.requestType;
-           switch (NV(UV, xV, "internal-error"), UV) {
-             case "EMAIL_SIGNIN":
-               break;
-             case "VERIFY_AND_CHANGE_EMAIL":
-               NV(YV.newEmail, xV, "internal-error");
-               break;
-             case "REVERT_SECOND_FACTOR_ADDITION":
-               NV(YV.mfaInfo, xV, "internal-error");
-             default:
-               NV(YV.email, xV, "internal-error")
- ... (10 more removed lines; see GitHub link above)
+         unknownWord(HH) {
+           throw this.input.error("Unknown word", {
+             offset: HH[0][2]
+           }, {
+             offset: HH[0][2] + HH[0][1].length
+           })
```

#### 171. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2418-L2447` → after: `L5396-L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5396-L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5396-L5401) · [Before (L2418-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2418-L2447)

```diff
-         async function Dx(VV, eV) {
-           const {
-             data: xV
-           } = await gx((0, JV.L)(VV), eV);
-           return xV.email
-         }
-         async function ix(VV, eV, xV) {
-           var JV;
-           const YV = Re(VV),
-             UV = {
-               returnSecureToken: !0,
-               email: eV,
-               password: xV,
-               clientType: "CLIENT_TYPE_WEB"
-             };
-           let yV;
- ... (14 more removed lines; see GitHub link above)
+         unnamedAtrule(HH, BH) {
+           throw this.input.error("At-rule without name", {
+             offset: BH[2]
+           }, {
+             offset: BH[2] + BH[1].length
+           })
```

#### 172. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2450-L2460` → after: `L5406-L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5406-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5406-L5411) · [Before (L2450-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2450-L2460)

```diff
-         function Cx(VV, eV, xV) {
-           return Fx((0, JV.L)(VV), Oe.credential(eV, xV))
-         }
-         async function ax(VV, eV, xV) {
-           var JV;
-           const YV = Re(VV),
-             UV = {
-               requestType: "EMAIL_SIGNIN",
-               email: eV,
-               clientType: "CLIENT_TYPE_WEB"
-             };
+     function Fr() {
+       if (Cr) return zr;
+       Cr = 1;
+       let HH = lr(),
+         BH = nr(),
+         LH = or();
```

#### 173. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2462-L2476` → after: `L5413-L5424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5413-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5413-L5424) · [Before (L2462-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2462-L2476)

```diff
-           function yV(VV, eV) {
-             NV(eV.handleCodeInApp, YV, "argument-error"), eV && zx(YV, VV, eV)
-           }
-           if (null === (JV = YV._getRecaptchaConfig()) || void 0 === JV ? void 0 : JV.emailPasswordEnabled) {
-             const VV = await ze(YV, UV, "getOobCode", !0);
-             yV(VV, xV), await me(YV, VV)
-           } else yV(UV, xV), await me(YV, UV).catch((async VV => {
-             if ("auth/missing-recaptcha-token" !== VV.code) return Promise.reject(VV);
-             {
-               console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
-               const VV = await ze(YV, UV, "getOobCode", !0);
-               yV(VV, xV), await me(YV, VV)
-             }
-           }))
-         }
+       function AH(HH, AH) {
+         let rH = new LH(HH, AH),
+           SH = new BH(rH);
+         try {
+           SH.parse()
+         } catch (hH) {
+           throw hH
+         }
+         return SH.root
+       }
+       return zr = AH, AH.default = AH, HH.registerParse(AH), zr
+     }
```

#### 174. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2478-L2552` → after: `L5426-L5463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5426-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5426-L5463) · [Before (L2478-L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2478-L2552)

```diff
-         function ox(VV, eV) {
-           const xV = Ie.parseLink(eV);
-           return "EMAIL_SIGNIN" === (null === xV || void 0 === xV ? void 0 : xV.operation)
-         }
-         async function cx(VV, eV, xV) {
-           const YV = (0, JV.L)(VV),
-             UV = Oe.credentialWithLink(eV, xV || zV());
-           return NV(UV._tenantId === (YV.tenantId || null), YV, "tenant-id-mismatch"), Fx(YV, UV)
-         }
-         async function hx(VV, eV) {
-           const xV = {
-               identifier: eV,
-               continueUri: GV() ? zV() : "http://localhost"
-             },
-             {
-               signinMethods: YV
- ... (59 more removed lines; see GitHub link above)
+     function Dr() {
+       if (Xr) return Er;
+       Xr = 1;
+       let {
+         isClean: HH,
+         my: BH
+       } = Tr(), LH = Ir(), AH = Vr(), rH = lr(), SH = Kr(), hH = (cr(), qr()), tH = Fr(), zH = Nr();
+       const CH = {
+           atrule: "AtRule",
+           comment: "Comment",
+           decl: "Declaration",
+           document: "Document",
+           root: "Root",
+           rule: "Rule"
+         },
+         EH = {
+ ... (22 more added lines; see GitHub link above)
```

#### 175. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2554-L2556` → after: `L5465-L5467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5465-L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5465-L5467) · [Before (L2554-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2554-L2556)

```diff
-         function mx(VV, eV) {
-           return Hx((0, JV.L)(VV), eV, null)
-         }
+       function GH(HH) {
+         return "object" === typeof HH && "function" === typeof HH.then
+       }
```

#### 176. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2558-L2575` → after: `L5469-L5531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5469-L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5469-L5531) · [Before (L2558-L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2558-L2575)

```diff
-         function Kx(VV, eV) {
-           return Hx((0, JV.L)(VV), null, eV)
-         }
-         async function Hx(VV, eV, xV) {
-           const {
-             auth: JV
-           } = VV, YV = {
-             idToken: await VV.getIdToken(),
-             returnSecureToken: !0
-           };
-           eV && (YV.email = eV), xV && (YV.password = xV);
-           const UV = await SV(VV, he(JV, YV));
-           await VV._updateTokensIfNecessary(UV, !0)
-         }
-         class ux {
-           constructor(VV, eV) {
- ... (2 more removed lines; see GitHub link above)
+       function YH(HH) {
+         let BH = !1,
+           LH = CH[HH.type];
+         return "decl" === HH.type ? BH = HH.prop.toLowerCase() : "atrule" === HH.type && (BH = HH.name.toLowerCase()), BH && HH.append ? [LH, LH + "-" + BH, 0, LH + "Exit", LH + "Exit-" + BH] : BH ? [LH, LH + "-" + BH, LH + "Exit", LH + "Exit-" + BH] : HH.append ? [LH, 0, LH + "E … [truncated]
+       }
+ 
+       function uH(HH) {
+         let BH;
+         return BH = "document" === HH.type ? ["Document", 0, "DocumentExit"] : "root" === HH.type ? ["Root", 0, "RootExit"] : YH(HH), {
+           eventIndex: 0,
+           events: BH,
+           iterator: 0,
+           node: HH,
+           visitorIndex: 0,
+           visitors: []
+         }
+ ... (47 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2578-L2580` → after: `L5535-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5535-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5535-L5560) · [Before (L2578-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2578-L2580)

```diff
-         class sx extends ux {
-           constructor(VV, eV, xV, JV) {
-             super(VV, eV, xV), this.username = JV
+         prepareVisitors() {
+           this.listeners = {};
+           let HH = (HH, BH, LH) => {
+             this.listeners[BH] || (this.listeners[BH] = []), this.listeners[BH].push([HH, LH])
+           };
+           for (let BH of this.plugins)
+             if ("object" === typeof BH)
+               for (let LH in BH) {
+                 if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!XH[LH])
+                   if ("object" === typeof BH[LH])
+                     for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
+                   else "function" === typeof BH[LH] && HH(BH, LH, BH[LH])
+               }
+           this.hasListener = Object.keys(this.listeners).length > 0
+         }
+ ... (10 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2582-L2585` → after: `L5562-L5588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5562-L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5562-L5588) · [Before (L2582-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2582-L2585)

```diff
-         }
-         class Sx extends ux {
-           constructor(VV, eV) {
-             super(VV, "facebook.com", eV)
+           if (this.prepareVisitors(), this.hasListener) {
+             let BH = this.result.root;
+             for (; !BH[HH];) {
+               BH[HH] = !0;
+               let AH = [uH(BH)];
+               for (; AH.length > 0;) {
+                 let HH = this.visitTick(AH);
+                 if (GH(HH)) try {
+                   await HH
+                 } catch (LH) {
+                   let HH = AH[AH.length - 1].node;
+                   throw this.handleError(LH, HH)
+                 }
+               }
+             }
+             if (this.listeners.OnceExit)
+ ... (11 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2588-L2590` → after: `L5592-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5592-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5592-L5604) · [Before (L2588-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2588-L2590)

```diff
-         class Ix extends sx {
-           constructor(VV, eV) {
-             super(VV, "github.com", eV, "string" === typeof(null === eV || void 0 === eV ? void 0 : eV.login) ? null === eV || void 0 === eV ? void 0 : eV.login : null)
+         runOnRoot(HH) {
+           this.result.lastPlugin = HH;
+           try {
+             if ("object" === typeof HH && HH.Once) {
+               if ("document" === this.result.root.type) {
+                 let BH = this.result.root.nodes.map((BH => HH.Once(BH, this.helpers)));
+                 return GH(BH[0]) ? Promise.all(BH) : BH
+               }
+               return HH.Once(this.result.root, this.helpers)
+             }
+             if ("function" === typeof HH) return HH(this.result.root, this.result)
+           } catch (BH) {
+             throw this.handleError(BH)
```

#### 180. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2593-L2595` → after: `L5607-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5607-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5607-L5650) · [Before (L2593-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2593-L2595)

```diff
-         class dx extends ux {
-           constructor(VV, eV) {
-             super(VV, "google.com", eV)
+         stringify() {
+           if (this.error) throw this.error;
+           if (this.stringified) return this.result;
+           this.stringified = !0, this.sync();
+           let HH = this.result.opts,
+             BH = AH;
+           HH.syntax && (BH = HH.syntax.stringify), HH.stringifier && (BH = HH.stringifier), BH.stringify && (BH = BH.stringify);
+           let rH = new LH(BH, this.result.root, this.result.opts).generate();
+           return this.result.css = rH[0], this.result.map = rH[1], this.result
+         }
+         sync() {
+           if (this.error) throw this.error;
+           if (this.processed) return this.result;
+           if (this.processed = !0, this.processing) throw this.getAsyncError();
+           for (let HH of this.plugins) {
+             if (GH(this.runOnRoot(HH))) throw this.getAsyncError()
+ ... (28 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2598-L2600` → after: `L5653-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5653-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5653-L5667) · [Before (L2598-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2598-L2600)

```diff
-         class Ox extends sx {
-           constructor(VV, eV, xV) {
-             super(VV, "twitter.com", eV, xV)
+         visitTick(BH) {
+           let LH = BH[BH.length - 1],
+             {
+               node: AH,
+               visitors: rH
+             } = LH;
+           if ("root" !== AH.type && "document" !== AH.type && !AH.parent) return void BH.pop();
+           if (rH.length > 0 && LH.visitorIndex < rH.length) {
+             let [HH, BH] = rH[LH.visitorIndex];
+             LH.visitorIndex += 1, LH.visitorIndex === rH.length && (LH.visitors = [], LH.visitorIndex = 0), this.result.lastPlugin = HH;
+             try {
+               return BH(AH.toProxy(), this.helpers)
+             } catch (hH) {
+               throw this.handleError(hH, AH)
+             }
```

#### 182. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2602-L2637` → after: `L5669-L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5669-L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5669-L5692) · [Before (L2602-L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2602-L2637)

```diff
-         }
- 
-         function VJ(VV) {
-           const {
-             user: eV,
-             _tokenResponse: xV
-           } = VV;
-           return eV.isAnonymous && !xV ? {
-             providerId: null,
-             isNewUser: !1,
-             profile: null
-           } : function(VV) {
-             var eV, xV;
-             if (!VV) return null;
-             const {
-               providerId: JV
- ... (20 more removed lines; see GitHub link above)
+           if (0 !== LH.iterator) {
+             let rH, SH = LH.iterator;
+             for (; rH = AH.nodes[AH.indexes[SH]];)
+               if (AH.indexes[SH] += 1, !rH[HH]) return rH[HH] = !0, void BH.push(uH(rH));
+             LH.iterator = 0, delete AH.indexes[SH]
+           }
+           let SH = LH.events;
+           for (; LH.eventIndex < SH.length;) {
+             let BH = SH[LH.eventIndex];
+             if (LH.eventIndex += 1, 0 === BH) return void(AH.nodes && AH.nodes.length && (AH[HH] = !0, LH.iterator = AH.getIterator()));
+             if (this.listeners[BH]) return void(LH.visitors = this.listeners[BH])
+           }
+           BH.pop()
+         }
+         walkSync(BH) {
+           BH[HH] = !0;
+ ... (8 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2641-L2643` → after: `L5695-L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5695-L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5695-L5696) · [Before (L2641-L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2641-L2643)

```diff
- 
-         function eJ(VV, eV) {
-           return (0, JV.L)(VV).setPersistence(eV)
+         warnings() {
+           return this.sync().warnings()
```

#### 184. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2645-L2647` → after: `L5698-L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5698-L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5698-L5699) · [Before (L2645-L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2645-L2647)

```diff
- 
-         function xJ(VV) {
-           return Re(VV).initializeRecaptchaConfig()
+         get content() {
+           return this.stringify().content
```

#### 185. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2649-L2651` → after: `L5701-L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5701-L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5701-L5702) · [Before (L2649-L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2649-L2651)

```diff
- 
-         function JJ(VV, eV, xV, YV) {
-           return (0, JV.L)(VV).onIdTokenChanged(eV, xV, YV)
+         get css() {
+           return this.stringify().css
```

#### 186. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2653-L2655` → after: `L5704-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5704-L5705) · [Before (L2653-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2653-L2655)

```diff
- 
-         function YJ(VV, eV, xV) {
-           return (0, JV.L)(VV).beforeAuthStateChanged(eV, xV)
+         get map() {
+           return this.stringify().map
```

#### 187. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2657-L2659` → after: `L5707-L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5707-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5707-L5708) · [Before (L2657-L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2657-L2659)

```diff
- 
-         function UJ(VV, eV, xV, YV) {
-           return (0, JV.L)(VV).onAuthStateChanged(eV, xV, YV)
+         get messages() {
+           return this.sync().messages
```

#### 188. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2661-L2663` → after: `L5710-L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5710-L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5710-L5711) · [Before (L2661-L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2661-L2663)

```diff
- 
-         function yJ(VV) {
-           (0, JV.L)(VV).useDeviceLanguage()
+         get opts() {
+           return this.result.opts
```

#### 189. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2665-L2667` → after: `L5713-L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5713-L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5713-L5714) · [Before (L2665-L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2665-L2667)

```diff
- 
-         function pJ(VV, eV) {
-           return (0, JV.L)(VV).updateCurrentUser(eV)
+         get processor() {
+           return this.result.processor
```

#### 190. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2669-L2671` → after: `L5716-L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5716-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5716-L5717) · [Before (L2669-L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2669-L2671)

```diff
- 
-         function QJ(VV) {
-           return (0, JV.L)(VV).signOut()
+         get root() {
+           return this.sync().root
```

#### 191. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2673-L2674` → after: `L5719-L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5719-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5719-L5720) · [Before (L2673-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2673-L2674)

```diff
-         async function nJ(VV) {
-           return (0, JV.L)(VV).delete()
+         get[Symbol.toStringTag]() {
+           return "LazyResult"
```

#### 192. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2676-L2691` → after: `L5722-L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5722-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5722-L5752) · [Before (L2676-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2676-L2691)

```diff
-         class wJ {
-           constructor(VV, eV, xV) {
-             this.type = VV, this.credential = eV, this.auth = xV
-           }
-           static _fromIdtoken(VV, eV) {
-             return new wJ("enroll", VV, eV)
-           }
-           static _fromMfaPendingCredential(VV) {
-             return new wJ("signin", VV)
-           }
-           toJSON() {
-             const VV = "enroll" === this.type ? "idToken" : "pendingCredential";
-             return {
-               multiFactorSession: {
-                 [VV]: this.credential
-               }
+       }
+       return MH.registerPostcss = HH => {
+         WH = HH
+       }, Er = MH, MH.default = MH, zH.registerLazyResult(MH), SH.registerLazyResult(MH), Er
+     }
+ 
+     function wr() {
+       if (Qr) return ur;
+       Qr = 1;
+       let HH = function() {
+           if (Yr) return Gr;
+           Yr = 1;
+           let HH = Ir(),
+             BH = Vr(),
+             LH = (cr(), Fr());
+           const AH = qr();
+ ... (15 more added lines; see GitHub link above)
```

#### 193. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2693-L2698` → after: `L5754-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5754-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5754-L5759) · [Before (L2693-L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2693-L2698)

```diff
-           }
-           static fromJSON(VV) {
-             var eV, xV;
-             if (null === VV || void 0 === VV ? void 0 : VV.multiFactorSession) {
-               if (null === (eV = VV.multiFactorSession) || void 0 === eV ? void 0 : eV.pendingCredential) return wJ._fromMfaPendingCredential(VV.multiFactorSession.pendingCredential);
-               if (null === (xV = VV.multiFactorSession) || void 0 === xV ? void 0 : xV.idToken) return wJ._fromIdtoken(VV.multiFactorSession.idToken)
+             async () {
+               return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
+             } catch (HH) {
+               return this.async().catch(HH)
+             } finally(HH) {
+               return this.async().then(HH, HH)
```

#### 194. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2700-L2727` → after: `L5761-L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5761-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5761-L5798) · [Before (L2700-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2700-L2727)

```diff
-             return null
-           }
-         }
-         class ZJ {
-           constructor(VV, eV, xV) {
-             this.session = VV, this.hints = eV, this.signInResolver = xV
-           }
-           static _fromError(VV, eV) {
-             const xV = Re(VV),
-               JV = eV.customData._serverResponse,
-               YV = (JV.mfaInfo || []).map((VV => Nx._fromServerResponse(xV, VV)));
-             NV(JV.mfaPendingCredential, xV, "internal-error");
-             const UV = wJ._fromMfaPendingCredential(JV.mfaPendingCredential);
-             return new ZJ(UV, YV, (async VV => {
-               const YV = await VV._process(xV, UV);
-               delete JV.mfaInfo, delete JV.mfaPendingCredential;
- ... (12 more removed lines; see GitHub link above)
+             sync() {
+               if (this.error) throw this.error;
+               return this.result
+             }
+             then(HH, BH) {
+               return this.async().then(HH, BH)
+             }
+             toString() {
+               return this._css
+             }
+             warnings() {
+               return []
+             }
+             get content() {
+               return this.result.css
+             }
+ ... (22 more added lines; see GitHub link above)
```

#### 195. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2729` → after: `L5800-L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5800-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5800-L5805) · [Before (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2729)

```diff
-             }))
+               if (this.error) throw this.error;
+               return this._root = HH, HH
+             }
+             get[Symbol.toStringTag]() {
+               return "NoWorkResult"
+             }
```

#### 196. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2731-L2733` → after: `L5807-L5824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5807-L5824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5807-L5824) · [Before (L2731-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2731-L2733)

```diff
-           async resolveSignIn(VV) {
-             const eV = VV;
-             return this.signInResolver(eV)
+           return Gr = rH, rH.default = rH, Gr
+         }(),
+         BH = Dr(),
+         LH = Kr(),
+         AH = Nr();
+       class rH {
+         constructor() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
+           this.version = "8.4.38", this.plugins = this.normalize(HH)
+         }
+         normalize(HH) {
+           let BH = [];
+           for (let LH of HH)
+             if (!0 === LH.postcss ? LH = LH() : LH.postcss && (LH = LH.postcss), "object" === typeof LH && Array.isArray(LH.plugins)) BH = BH.concat(LH.plugins);
+             else if ("object" === typeof LH && LH.postcssPlugin) BH.push(LH);
+           else if ("function" === typeof LH) BH.push(LH);
+ ... (2 more added lines; see GitHub link above)
```

#### 197. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2737-L2776` → after: `L5858-L5875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5858-L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5858-L5875) · [Before (L2737-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2737-L2776)

```diff
-         function vJ(VV, eV) {
-           var xV;
-           const YV = (0, JV.L)(VV),
-             UV = eV;
-           return NV(eV.customData.operationType, YV, "argument-error"), NV(null === (xV = UV.customData._serverResponse) || void 0 === xV ? void 0 : xV.mfaPendingCredential, YV, "argument-error"), ZJ._fromError(YV, UV)
-         }
-         class rJ {
-           constructor(VV) {
-             this.user = VV, this.enrolledFactors = [], VV._onReload((eV => {
-               eV.mfaInfo && (this.enrolledFactors = eV.mfaInfo.map((eV => Nx._fromServerResponse(VV.auth, eV))))
-             }))
-           }
-           static _fromUser(VV) {
-             return new rJ(VV)
-           }
-           async getSession() {
- ... (24 more removed lines; see GitHub link above)
+           function tH(zH, CH) {
+             if (Array.isArray(zH)) return zH.map((HH => tH(HH)));
+             let {
+               inputs: EH,
+               ...XH
+             } = zH;
+             if (EH) {
+               CH = [];
+               for (let HH of EH) {
+                 let LH = {
+                   ...HH,
+                   __proto__: rH.prototype
+                 };
+                 LH.map && (LH.map = {
+                   ...LH.map,
+                   __proto__: BH.prototype
+ ... (2 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2778-L2781` → after: `L5877-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5877-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5877-L5903) · [Before (L2778-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2778-L2781)

```diff
-             var JV, YV
-           }
-         }
-         const kJ = new WeakMap;
+             if (XH.nodes && (XH.nodes = zH.nodes.map((HH => tH(HH, CH)))), XH.source) {
+               let {
+                 inputId: HH,
+                 ...BH
+               } = XH.source;
+               XH.source = BH, null != HH && (XH.source.input = CH[HH])
+             }
+             if ("root" === XH.type) return new SH(XH);
+             if ("decl" === XH.type) return new HH(XH);
+             if ("rule" === XH.type) return new hH(XH);
+             if ("comment" === XH.type) return new LH(XH);
+             if ("atrule" === XH.type) return new AH(XH);
+             throw new Error("Unknown node type: " + zH.type)
+           }
+           return Wr = tH, tH.default = tH, Wr
+         }(),
+ ... (11 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2783-L2796` → after: `L5905-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5905-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L5905-L6239) · [Before (L2783-L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2783-L2796)

```diff
-         function bJ(VV) {
-           const eV = (0, JV.L)(VV);
-           return kJ.has(eV) || kJ.set(eV, rJ._fromUser(eV)), kJ.get(eV)
-         }
-         const EJ = "__sak";
-         class BJ {
-           constructor(VV, eV) {
-             this.storageRetriever = VV, this.type = eV
-           }
-           _isAvailable() {
-             try {
-               return this.storage ? (this.storage.setItem(EJ, "1"), this.storage.removeItem(EJ), Promise.resolve(!0)) : Promise.resolve(!1)
-             } catch (VV) {
-               return Promise.resolve(!1)
+       function xH() {
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         return 1 === BH.length && Array.isArray(BH[0]) && (BH = BH[0]), new rH(BH)
+       }
+       return xH.plugin = function(HH, BH) {
+         let LH, AH = !1;
+ 
+         function SH() {
+           console && console.warn && !AH && (AH = !0, console.warn(HH + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
+             NODE_ENV: "production",
+             PUBLIC_URL: "",
+             WDS_SOCKET_HOST: void 0,
+             WDS_SOCKET_PATH: void 0,
+             WDS_SOCKET_PORT: void 0,
+             FAST_REFRESH: !0,
+             REACT_APP_DEV_URLS: "false"
+ ... (319 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2798-L2822` → after: `L6241-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6241-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6241-L6328) · [Before (L2798-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2798-L2822)

```diff
-           }
-           _set(VV, eV) {
-             return this.storage.setItem(VV, JSON.stringify(eV)), Promise.resolve()
-           }
-           _get(VV) {
-             const eV = this.storage.getItem(VV);
-             return Promise.resolve(eV ? JSON.parse(eV) : null)
-           }
-           _remove(VV) {
-             return this.storage.removeItem(VV), Promise.resolve()
-           }
-           get storage() {
-             return this.storageRetriever()
-           }
-         }
-         class jJ extends BJ {
- ... (9 more removed lines; see GitHub link above)
+             LH.onChange && LH.onChange(LH.classes.join(" "))
+           })), hA(this, "remove", (function() {
+             for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
+             LH.classes = LH.classes.filter((HH => -1 === BH.indexOf(HH))), LH.onChange && LH.onChange(LH.classes.join(" "))
+           })), HH) {
+           const BH = HH.trim().split(/\s+/);
+           this.classes.push(...BH)
+         }
+         this.onChange = BH
+       }
+     }
+ 
+     function ES(HH, BH) {
+       return BH.parentNode && BH.parentNode.removeChild(BH), HH.lastChild ? (HH.lastChild.nextSibling = BH, BH.previousSibling = HH.lastChild) : (HH.firstChild = BH, BH.previousSibling = null), HH.lastChild = BH, BH.nextSibling = null, BH.parentNode = HH, BH.parentElement = HH, B … [truncated]
+     }
+ 
+ ... (72 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2824-L2830` → after: `L6330-L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6330-L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6330-L6373) · [Before (L2824-L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2824-L2830)

```diff
-             }(), this.fallbackToPolling = qe(), this._shouldAllowMigration = !0
-           }
-           forAllChangedKeys(VV) {
-             for (const eV of Object.keys(this.listeners)) {
-               const xV = this.storage.getItem(eV),
-                 JV = this.localCache[eV];
-               xV !== JV && VV(eV, JV, xV)
+               break;
+             case dr.Element: {
+               const rH = HH,
+                 SH = BH;
+               switch (SH.tagName) {
+                 case "IFRAME": {
+                   const rH = HH.contentDocument;
+                   if (!rH) break;
+                   MS(rH, BH.contentDocument, LH, AH);
+                   break
+                 }
+               }
+               SH.shadowRoot && (rH.shadowRoot || rH.attachShadow({
+                   mode: "open"
+                 }), xS(rH.shadowRoot, SH.shadowRoot, LH, AH)),
+                 function(HH, BH, LH) {
+ ... (28 more added lines; see GitHub link above)
```

#### 202. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2833-L2939` → after: `L6376-L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6376-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6376-L6404) · [Before (L2833-L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2833-L2939)

```diff
-           onStorageEvent(VV) {
-             let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (!VV.key) return void this.forAllChangedKeys(((VV, eV, xV) => {
-               this.notifyListeners(VV, xV)
-             }));
-             const xV = VV.key;
-             if (eV ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
-               const JV = this.storage.getItem(xV);
-               if (VV.newValue !== JV) null !== VV.newValue ? this.storage.setItem(xV, VV.newValue) : this.storage.removeItem(xV);
-               else if (this.localCache[xV] === VV.newValue && !eV) return
-             }
-             const YV = () => {
-                 const VV = this.storage.getItem(xV);
-                 (eV || this.localCache[xV] !== VV) && this.notifyListeners(xV, VV)
-               },
-               UV = this.storage.getItem(xV);
- ... (91 more removed lines; see GitHub link above)
+           return HH
+         }(HH, BH, LH, AH), xS(HH, BH, LH, AH),
+         function(HH, BH, LH) {
+           var AH;
+           switch (BH.RRNodeType) {
+             case dr.Document: {
+               const HH = BH.scrollData;
+               HH && LH.applyScroll(HH, !0);
+               break
+             }
+             case dr.Element: {
+               const AH = HH,
+                 SH = BH;
+               switch (SH.scrollData && LH.applyScroll(SH.scrollData, !0), SH.inputData && LH.applyInput(SH.inputData), SH.tagName) {
+                 case "AUDIO":
+                 case "VIDEO": {
+ ... (13 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2941-L2944` → after: `L6406-L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6406-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6406-L6426) · [Before (L2941-L2944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2941-L2944)

```diff
-                 } catch (eV) {
-                   return {
-                     fulfilled: !1,
-                     reason: eV
+                   rH.canvasMutations.forEach((BH => LH.applyCanvas(BH.event, BH.mutation, HH)));
+                   break
+                 }
+                 case "STYLE": {
+                   const HH = AH.sheet;
+                   HH && BH.rules.forEach((BH => LH.applyStyleSheetMutation(BH, HH)));
+                   break
+                 }
+                 case "DIALOG": {
+                   const HH = AH,
+                     BH = SH,
+                     LH = HH.open,
+                     hH = HH.matches("dialog:modal"),
+                     tH = BH.open,
+                     zH = BH.isModal,
+                     CH = hH !== zH,
+ ... (5 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2947-L2954` → after: `L6430-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6430-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6430-L6486) · [Before (L2947-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2947-L2954)

```diff
-               })))
-             }(yV);
-             eV.ports[0].postMessage({
-               status: "done",
-               eventId: xV,
-               eventType: JV,
-               response: pV
-             })
+               }
+               break
+             }
+             case dr.Text:
+             case dr.Comment:
+             case dr.CDATA:
+               HH.textContent !== BH.data && (HH.textContent = BH.data)
+           }(null == WS ? void 0 : WS.has(HH)) && (WS.delete(HH), null == (AH = LH.afterAppend) || AH.call(LH, HH, LH.mirror.getId(HH)))
+         }(HH, BH, LH)
+     }
+ 
+     function xS(HH, BH, LH, AH) {
+       const rH = Array.from(HH.childNodes),
+         SH = BH.childNodes;
+       if (0 === rH.length && 0 === SH.length) return;
+       let hH, tH, zH = 0,
+ ... (41 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2956-L2957` → after: `L6488-L6495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6488-L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6488-L6495) · [Before (L2956-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2956-L2957)

```diff
-           _subscribe(VV, eV) {
-             0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[VV] || (this.handlersMap[VV] = new Set), this.handlersMap[VV].add(eV)
+           rH[tH] = void 0
+         } else {
+           const BH = vS(uH, LH.mirror, AH);
+           "#document" === HH.nodeName && GH && (BH.nodeType === BH.DOCUMENT_TYPE_NODE && GH.nodeType === GH.DOCUMENT_TYPE_NODE || BH.nodeType === BH.ELEMENT_NODE && GH.nodeType === GH.ELEMENT_NODE) && (HH.removeChild(GH), LH.mirror.removeNodeFromMap(GH), GH = rH[++zH]);
+           try {
+             HH.insertBefore(BH, GH || null)
+           } catch (xH) {
+             console.warn(xH)
```

#### 206. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2959-L2960` → after: `L6497-L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6497-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6497-L6508) · [Before (L2959-L2960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2959-L2960)

```diff
-           _unsubscribe(VV, eV) {
-             this.handlersMap[VV] && eV && this.handlersMap[VV].delete(eV), eV && 0 !== this.handlersMap[VV].size || delete this.handlersMap[VV], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
+         }
+         uH = SH[++EH]
+       }
+       if (zH > CH) {
+         const BH = SH[XH + 1];
+         let rH = null;
+         for (BH && (rH = LH.mirror.yAH(AH.getId(BH))); EH <= XH; ++EH) {
+           const BH = vS(SH[EH], LH.mirror, AH);
+           try {
+             HH.insertBefore(BH, rH)
+           } catch (xH) {
+             console.warn(xH)
```

#### 207. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L2963-L3014` → after: `L6511-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6511-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6511-L6517) · [Before (L2963-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L2963-L3014)

```diff
- 
-         function PJ() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
-             eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
-             xV = "";
-           for (let JV = 0; JV < eV; JV++) xV += Math.floor(10 * Math.random());
-           return VV + xV
-         }
-         TJ.receivers = [];
-         class AJ {
-           constructor(VV) {
-             this.target = VV, this.handlers = new Set
-           }
-           removeMessageHandler(VV) {
-             VV.messageChannel && (VV.messageChannel.port1.removeEventListener("message", VV.jF), VV.messageChannel.port1.close()), this.handlers.delete(VV)
-           }
- ... (36 more removed lines; see GitHub link above)
+       } else if (EH > XH)
+         for (; zH <= CH; zH++) {
+           const BH = rH[zH];
+           if (BH && BH.parentNode === HH) try {
+             HH.removeChild(BH), LH.mirror.removeNodeFromMap(BH)
+           } catch (xH) {
+             console.warn(xH)
```

#### 208. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3018-L3020` → after: `L6525-L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6525-L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6525-L6558) · [Before (L3018-L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3018-L3020)

```diff
-         function NJ() {
-           return window
-         }
+     function vS(HH, BH, LH) {
+       const AH = LH.getId(HH),
+         rH = LH.getMeta(HH);
+       let SH = null;
+       if (AH > -1 && (SH = BH.yAH(AH)), null !== SH && PS(SH, HH)) return SH;
+       switch (HH.RRNodeType) {
+         case dr.Document:
+           SH = new Document;
+           break;
+         case dr.DocumentType:
+           SH = document.implementation.createDocumentType(HH.name, HH.publicId, HH.systemId);
+           break;
+         case dr.Element: {
+           let BH = HH.tagName.toLowerCase();
+           BH = QS[BH] || BH, SH = rH && "isSVG" in rH && (null == rH ? void 0 : rH.isSVG) ? document.createElementNS(uS.svg, BH) : document.createElement(HH.tagName);
+           break
+ ... (18 more added lines; see GitHub link above)
```

#### 209. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3022-L3041` → after: `L6560-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6560-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6560-L6562) · [Before (L3022-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3022-L3041)

```diff
-         function XJ() {
-           return "undefined" !== typeof NJ().WorkerGlobalScope && "function" === typeof NJ().importScripts
-         }
-         const MJ = "firebaseLocalStorageDb",
-           zJ = "firebaseLocalStorage",
-           GJ = "fbase_key";
-         class WJ {
-           constructor(VV) {
-             this.request = VV
-           }
-           toPromise() {
-             return new Promise(((VV, eV) => {
-               this.request.addEventListener("success", (() => {
-                 VV(this.request.result)
-               })), this.request.addEventListener("error", (() => {
-                 eV(this.request.error)
- ... (4 more removed lines; see GitHub link above)
+     function PS(HH, BH) {
+       return HH.nodeType === BH.nodeType && (HH.nodeType !== HH.ELEMENT_NODE || HH.tagName.toUpperCase() === BH.tagName)
+     }
```

#### 210. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3043-L3045` → after: `L6564-L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6564-L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6564-L6655) · [Before (L3043-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3043-L3045)

```diff
-         function RJ(VV, eV) {
-           return VV.transaction([zJ], eV ? "readwrite" : "readonly").objectStore(zJ)
-         }
+     function TS(HH, BH, LH, AH) {
+       const rH = LH.getId(HH),
+         SH = AH.getId(BH);
+       return -1 !== rH && rH === SH && PS(HH, BH)
+     }
+     class US extends BS {
+       constructor(HH) {
+         super(), hA(this, "UNSERIALIZED_STARTING_ID", -2), hA(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), hA(this, "mirror", new qS), hA(this, "scrollData", null), HH && (this.mirror = HH)
+       }
+       get unserializedId() {
+         return this._unserializedId--
+       }
+       createDocument(HH, BH, LH) {
+         return new US
+       }
+       createDocumentType(HH, BH, LH) {
+ ... (76 more added lines; see GitHub link above)
```

#### 211. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3047-L3074` → after: `L6657-L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6657-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6657-L6692) · [Before (L3047-L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3047-L3074)

```diff
-         function gJ() {
-           const VV = indexedDB.open(MJ, 1);
-           return new Promise(((eV, xV) => {
-             VV.addEventListener("error", (() => {
-               xV(VV.error)
-             })), VV.addEventListener("upgradeneeded", (() => {
-               const eV = VV.result;
-               try {
-                 eV.createObjectStore(zJ, {
-                   keyPath: GJ
-                 })
-               } catch (JV) {
-                 xV(JV)
-               }
-             })), VV.addEventListener("success", (async () => {
-               const xV = VV.result;
- ... (12 more removed lines; see GitHub link above)
+     function cS(HH, BH, LH, AH) {
+       let rH;
+       switch (HH.nodeType) {
+         case YS.DOCUMENT_NODE:
+           AH && "IFRAME" === AH.nodeName ? rH = AH.contentDocument : (rH = BH, rH.compatMode = HH.compatMode);
+           break;
+         case YS.DOCUMENT_TYPE_NODE: {
+           const LH = HH;
+           rH = BH.createDocumentType(LH.name, LH.publicId, LH.systemId);
+           break
+         }
+         case YS.ELEMENT_NODE: {
+           const LH = HH,
+             AH = (SH = LH) instanceof HTMLFormElement ? "FORM" : SH.tagName.toUpperCase();
+           rH = BH.createElement(AH);
+           const hH = rH;
+ ... (20 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3076-L3077` → after: `L6694-L6703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6694-L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6694-L6703) · [Before (L3076-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3076-L3077)

```diff
-           return new WJ(JV).toPromise()
-         }
+           break;
+         default:
+           return null
+       }
+       var SH;
+       let hH = LH.getMeta(HH);
+       return BH instanceof US && (hH || (hH = gS(rH, BH.unserializedId), LH.add(HH, hH)), BH.mirror.add(rH, {
+         ...hH
+       })), rH
+     }
```

#### 213. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3079-L3101` → after: `L6705-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6705-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6705-L6775) · [Before (L3079-L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3079-L3101)

```diff
-         function iJ(VV, eV) {
-           const xV = RJ(VV, !0).delete(eV);
-           return new WJ(xV).toPromise()
-         }
-         class CJ {
-           constructor() {
-             this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._w … [truncated]
-           }
-           async _openDb() {
-             return this.db || (this.db = await gJ()), this.db
-           }
-           async _withRetries(VV) {
-             let eV = 0;
-             for (;;) try {
-               const eV = await this._openDb();
-               return await VV(eV)
- ... (7 more removed lines; see GitHub link above)
+     function eS(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new CA,
+         LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new US;
+       return function HH(AH, rH) {
+         const SH = cS(AH, LH, BH, rH);
+         if (null !== SH)
+           if ("IFRAME" !== (null == rH ? void 0 : rH.nodeName) && AH.nodeType !== YS.DOCUMENT_FRAGMENT_NODE && (null == rH || rH.appendChild(SH), SH.parentNode = rH, SH.parentElement = rH), "IFRAME" === AH.nodeName) {
+             const BH = AH.contentDocument;
+             BH && HH(BH, SH)
+           } else AH.nodeType !== YS.DOCUMENT_NODE && AH.nodeType !== YS.ELEMENT_NODE && AH.nodeType !== YS.DOCUMENT_FRAGMENT_NODE || (AH.nodeType === YS.ELEMENT_NODE && AH.shadowRoot && HH(AH.shadowRoot, SH), AH.childNodes.forEach((BH => HH(BH, SH))))
+       }(HH, null), LH
+     }
+     class qS {
+       constructor() {
+         hA(this, "idNodeMap", new Map), hA(this, "nodeMetaMap", new WeakMap)
+       }
+ ... (55 more added lines; see GitHub link above)
```

#### 214. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3103-L3106` → after: `L6777-L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6777-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6777-L6868) · [Before (L3103-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3103-L3106)

```diff
-           async initializeReceiver() {
-             this.receiver = TJ._getInstance(XJ() ? self : null), this.receiver._subscribe("keyChanged", (async (VV, eV) => ({
-               keyProcessed: (await this._poll()).includes(eV.key)
-             }))), this.receiver._subscribe("ping", (async (VV, eV) => ["keyChanged"]))
+         }
+         case dr.Element:
+           return {
+             id: BH, type: HH.RRNodeType, tagName: HH.tagName.toLowerCase(), attributes: {}, childNodes: []
+           };
+         case dr.Text:
+         case dr.Comment:
+           return {
+             id: BH, type: HH.RRNodeType, textContent: HH.textContent || ""
+           };
+         case dr.CDATA:
+           return {
+             id: BH, type: HH.RRNodeType, textContent: ""
+           }
+       }
+     }
+ ... (76 more added lines; see GitHub link above)
```

#### 215. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3108-L3115` → after: `L6870-L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6870-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L6870-L7233) · [Before (L3108-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3108-L3115)

```diff
-           async initializeSender() {
-             var VV, eV;
-             if (this.activeServiceWorker = await async function() {
-                 if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
-                 try {
-                   return (await navigator.serviceWorker.ready).active
-                 } catch (VV) {
-                   return null
+         })), HH[BH] = rH, () => {
+           HH[BH] = AH
+         }
+       } catch {
+         return () => {}
+       }
+     }
+     /[1-9][0-9]{12}/.test(Date.now().toString()) || (sS = () => (new Date).getTime());
+     const iS = {
+       ownerDocument: function(HH) {
+         return wS("Node", HH, "ownerDocument")
+       },
+       childNodes: function(HH) {
+         return wS("Node", HH, "childNodes")
+       },
+       parentNode: function(HH) {
+ ... (348 more added lines; see GitHub link above)
```

#### 216. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3117-L3138` → after: `L7235-L7289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R7235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L7235-L7289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L7235-L7289) · [Before (L3117-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3117-L3138)

```diff
-               }(), !this.activeServiceWorker) return;
-             this.sender = new AJ(this.activeServiceWorker);
-             const xV = await this.sender._send("ping", {}, 800);
-             xV && (null === (VV = xV[0]) || void 0 === VV ? void 0 : VV.fulfilled) && (null === (eV = xV[0]) || void 0 === eV ? void 0 : eV.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
-           }
-           async notifyServiceWorker(VV) {
-             if (this.sender && this.activeServiceWorker && function() {
-                 var VV;
-                 return (null === (VV = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === VV ? void 0 : VV.controller) || null
-               }() === this.activeServiceWorker) try {
-               await this.sender._send("keyChanged", {
-                 key: VV
-               }, this.serviceWorkerReceiverAvailable ? 800 : 50)
-             } catch (eV) {}
-           }
-           async _isAvailable() {
- ... (6 more removed lines; see GitHub link above)
+               }
+             }
+             if (this.addedSet.delete(LH), !AH || -1 === rH) {
+               tH.add(LH);
+               continue
+             }
+             if (hH) {
+               this.droppedSet.add(LH);
+               continue
+             }
+             let EH = !1;
+             if (LH.nodeType === Node.TEXT_NODE) {
+               const HH = AH.tagName;
+               if ("TEXTAREA" === HH) continue;
+               "STYLE" === HH && BH.has(rH) && (EH = !0)
+             }
+ ... (39 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3140-L3145` → after: `L7291-L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L7291-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L7291-L7343) · [Before (L3140-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3140-L3145)

```diff
-           async _withPendingWrite(VV) {
-             this.pendingWrites++;
-             try {
-               await VV()
-             } finally {
-               this.pendingWrites--
+           const EH = {
+             texts: this.texts.map((HH => {
+               const BH = HH.node,
+                 LH = iS.parentNode(BH);
+               return LH && "TEXTAREA" === LH.tagName && this.genTextAreaValueMutation(LH), {
+                 id: this.mirror.getId(BH),
+                 value: HH.value
+               }
+             })).filter((HH => !BH.has(HH.id))).filter((HH => this.mirror.has(HH.id))),
+             attributes: this.attributes.map((HH => {
+               const {
+                 attributes: BH
+               } = HH;
+               if ("string" === typeof BH.style) {
+                 const LH = JSON.stringify(HH.styleDiff),
+                   AH = JSON.stringify(HH._unchangedStyles);
+ ... (37 more added lines; see GitHub link above)
```

#### 218. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3148-L3149` → after: `L7409-L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L7409-L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L7409-L7469) · [Before (L3148-L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3148-L3149)

```diff
-           async _set(VV, eV) {
-             return this._withPendingWrite((async () => (await this._withRetries((xV => DJ(xV, VV, eV))), this.localCache[VV] = eV, this.notifyServiceWorker(VV))))
+         })), SH(this, "genAdds", ((HH, BH) => {
+           if (!this.processedNodeManager.inOtherBuffer(HH, this) && !this.addedSet.has(HH) && !this.movedSet.has(HH)) {
+             if (this.mirror.hasNode(HH)) {
+               if (Ch(HH, this.mirror, this.slimDOMOptions)) return;
+               this.movedSet.add(HH);
+               let LH = null;
+               BH && this.mirror.hasNode(BH) && (LH = this.mirror.getId(BH)), LH && -1 !== LH && (this.movedMap[qh(this.mirror.getId(HH), LH)] = !0)
+             } else this.addedSet.add(HH), this.droppedSet.delete(HH);
+             th(HH, this.blockClass, this.blockSelector, !1) || (iS.childNodes(HH).forEach((HH => this.genAdds(HH))), xh(HH) && iS.childNodes(iS.shadowRoot(HH)).forEach((BH => {
+               this.processedNodeManager.add(BH, this), this.genAdds(BH, HH)
+             })))
+           }
+         }))
+       }
+       init(HH) {
+         ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", … [truncated]
+ ... (45 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3151-L3157` → after: `L7471-L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L7471-L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L7471-L7810) · [Before (L3151-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3151-L3157)

```diff
-           async _get(VV) {
-             const eV = await this._withRetries((eV => async function(VV, eV) {
-               const xV = RJ(VV, !1).get(eV),
-                 JV = await new WJ(xV).toPromise();
-               return void 0 === JV ? null : JV.value
-             }(eV, VV)));
-             return this.localCache[VV] = eV, eV
+         }
+       },
+       Dh = [];
+ 
+     function wh(HH) {
+       try {
+         if ("composedPath" in HH) {
+           const BH = HH.composedPath();
+           if (BH.length) return BH[0]
+         } else if ("path" in HH && HH.path.length) return HH.path[0]
+       } catch {}
+       return HH && HH.target
+     }
+ 
+     function Zh(HH, BH) {
+       const LH = new gh;
+ ... (324 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3159-L3160` → after: `L7812-L7822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L7812-L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L7812-L7822) · [Before (L3159-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3159-L3160)

```diff
-           async _remove(VV) {
-             return this._withPendingWrite((async () => (await this._withRetries((eV => iJ(eV, VV))), delete this.localCache[VV], this.notifyServiceWorker(VV))))
+ 
+           function YH(HH, LH) {
+             const rH = Jh.get(HH);
+             if (!rH || rH.text !== LH.text || rH.isChecked !== LH.isChecked) {
+               Jh.set(HH, LH);
+               const rH = AH.getId(HH);
+               Fh(BH)({
+                 ...LH,
+                 id: rH
+               })
+             }
```

#### 221. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3162-L3168` → after: `L7824-L8106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L7824-L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L7824-L8106) · [Before (L3162-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3162-L3168)

```diff
-           async _poll() {
-             const VV = await this._withRetries((VV => {
-               const eV = RJ(VV, !1).getAll();
-               return new WJ(eV).toPromise()
-             }));
-             if (!VV) return [];
-             if (0 !== this.pendingWrites) return [];
+           const uH = ("last" === EH.input ? ["change"] : ["input", "change"]).map((HH => pS(HH, Fh(GH), LH))),
+             QH = LH.defaultView;
+           if (!QH) return () => {
+             uH.forEach((HH => HH()))
+           };
+           const WH = QH.Object.getOwnPropertyDescriptor(QH.HTMLInputElement.prototype, "value"),
+             MH = [
+               [QH.HTMLInputElement.prototype, "value"],
+               [QH.HTMLInputElement.prototype, "checked"],
+               [QH.HTMLSelectElement.prototype, "value"],
+               [QH.HTMLTextAreaElement.prototype, "value"],
+               [QH.HTMLSelectElement.prototype, "selectedIndex"],
+               [QH.HTMLOptionElement.prototype, "selected"]
+             ];
+           return WH && WH.set && uH.push(...MH.map((HH => Lh(HH[0], HH[1], {
+             set() {
+ ... (267 more added lines; see GitHub link above)
```

#### 222. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3170-L3173` → after: `L8108-L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8108-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L8108-L8145) · [Before (L3170-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3170-L3173)

```diff
-               xV = new Set;
-             for (const {
-                 fbase_key: JV,
-                 value: YV
+               zH = HH.rangeCount || 0;
+             for (let BH = 0; BH < zH; BH++) {
+               const SH = HH.getRangeAt(BH),
+                 {
+                   startContainer: hH,
+                   startOffset: zH,
+                   endContainer: CH,
+                   endOffset: EH
+                 } = SH;
+               th(hH, AH, rH, !0) || th(CH, AH, rH, !0) || tH.push({
+                 start: LH.getId(hH),
+                 startOffset: zH,
+                 end: LH.getId(CH),
+                 endOffset: EH
+               })
+             }
+ ... (22 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3175-L3195` → after: `L8147-L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8147-L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L8147-L8257) · [Before (L3175-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3175-L3195)

```diff
-               of VV) xV.add(JV), JSON.stringify(this.localCache[JV]) !== JSON.stringify(YV) && (this.notifyListeners(JV, YV), eV.push(JV));
-             for (const JV of Object.keys(this.localCache)) this.localCache[JV] && !xV.has(JV) && (this.notifyListeners(JV, null), eV.push(JV));
-             return eV
-           }
-           notifyListeners(VV, eV) {
-             this.localCache[VV] = eV;
-             const xV = this.listeners[VV];
-             if (xV)
-               for (const JV of Array.from(xV)) JV(eV)
-           }
-           startPolling() {
-             this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
-           }
-           stopPolling() {
-             this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
-           }
- ... (5 more removed lines; see GitHub link above)
+               return HH.apply(this, [BH, AH, rH])
+             }
+           })) : () => {}
+         }(HH),
+         MH = [];
+       for (const xH of HH.plugins) MH.push(xH.observer(xH.callback, LH, xH.options));
+       return Fh((() => {
+         Dh.forEach((HH => HH.reset())), null == AH || AH.disconnect(), rH(), SH(), hH(), tH(), zH(), CH(), EH(), XH(), GH(), YH(), uH(), QH(), WH(), MH.forEach((HH => HH()))
+       }))
+     }
+ 
+     function Bt(HH) {
+       return "undefined" !== typeof window[HH]
+     }
+ 
+     function Lt(HH) {
+ ... (95 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3198` → after: `L8310-L8881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8310-L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L8310-L8881) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3198)

```diff
-         CJ.type = "LOCAL";
+         return !1
+       }
+       replace(HH, BH, LH, AH) {
+         for (const rH of AH)(Array.isArray(BH[rH]) || "number" === typeof BH[rH]) && (Array.isArray(BH[rH]) ? BH[rH] = HH.getIds(LH, BH[rH]) : BH[rH] = HH.getId(LH, BH[rH]));
+         return BH
+       }
+       replaceIds(HH, BH, LH) {
+         return this.replace(this.crossOriginIframeMirror, HH, BH, LH)
+       }
+       replaceStyleIds(HH, BH, LH) {
+         return this.replace(this.crossOriginIframeStyleMirror, HH, BH, LH)
+       }
+       replaceIdOnNode(HH, BH) {
+         this.replaceIds(HH, BH, ["id", "rootId"]), "childNodes" in HH && HH.childNodes.forEach((HH => {
+           this.replaceIdOnNode(HH, BH)
+         }))
+ ... (556 more added lines; see GitHub link above)
```

#### 225. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3200-L3209` → after: `L8883-L9097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8883-L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L8883-L9097) · [Before (L3200-L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3200-L3209)

```diff
-         const oJ = 1e12;
-         class cJ {
-           constructor(VV) {
-             this.auth = VV, this.counter = oJ, this._widgets = new Map
-           }
-           render(VV, eV) {
-             const xV = this.counter;
-             return this._widgets.set(xV, new hJ(VV, this.auth.name, eV || {})), this.counter++, xV
-           }
-           reset(VV) {
+         if (hH.timestamp = sS(), !(null == (SH = Dh[0]) ? void 0 : SH.isFrozen()) || hH.type === mh.FullSnapshot || hH.type === mh.IncrementalSnapshot && hH.data.source === oh.Mutation || Dh.forEach((HH => HH.unfreeze())), cH) null == BH || BH(jH(hH), rH);
+         else if (eH) {
+           const HH = {
+             type: "rrweb",
+             event: jH(hH),
+             origin: window.location.origin,
+             isCheckout: rH
+           };
+           window.parent.postMessage(HH, "*")
+         }
+         if (hH.type === mh.FullSnapshot) NH = hH, RH = 0;
+         else if (hH.type === mh.IncrementalSnapshot) {
+           if (hH.data.source === oh.Mutation && hH.data.isAttachIframe) return;
+           RH++;
+           const HH = AH && RH >= AH,
+             BH = LH && hH.timestamp - NH.timestamp > LH;
+ ... (199 more added lines; see GitHub link above)
```

#### 226. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3211-L3212` → after: `L9099-L9221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9099-L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9099-L9221) · [Before (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3211-L3212)

```diff
-             const xV = VV || oJ;
-             null === (eV = this._widgets.get(xV)) || void 0 === eV || eV.delete(), this._widgets.delete(xV)
+             return Fh(Ht)({
+               mutationCb: nH,
+               mousemoveCb: (HH, BH) => Ut({
+                 type: mh.IncrementalSnapshot,
+                 data: {
+                   source: BH,
+                   positions: HH
+                 }
+               }),
+               mouseInteractionCb: HH => Ut({
+                 type: mh.IncrementalSnapshot,
+                 data: {
+                   source: oh.MouseInteraction,
+                   ...HH
+                 }
+               }),
+ ... (107 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3214-L3217` → after: `L9223-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9223-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9223-L9599) · [Before (L3214-L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3214-L3217)

```diff
-           getResponse(VV) {
-             var eV;
-             const xV = VV || oJ;
-             return (null === (eV = this._widgets.get(xV)) || void 0 === eV ? void 0 : eV.getResponse()) || ""
+         }));
+         const LH = () => {
+           Vt(), HH.push(BH(document)), bt = !0
+         };
+         return ["interactive", "complete"].includes(document.readyState) ? LH() : (HH.push(pS("DOMContentLoaded", (() => {
+           Ut({
+             type: mh.DomContentLoaded,
+             data: {}
+           }), "DOMContentLoaded" === OH && LH()
+         }))), HH.push(pS("load", (() => {
+           Ut({
+             type: mh.Load,
+             data: {}
+           }), "load" === OH && LH()
+         }), window))), () => {
+           HH.forEach((HH => {
+ ... (361 more added lines; see GitHub link above)
```

#### 228. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3219-L3222` → after: `L9601-L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9601-L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9601-L9718) · [Before (L3219-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3219-L3222)

```diff
-           async execute(VV) {
-             var eV;
-             const xV = VV || oJ;
-             return null === (eV = this._widgets.get(xV)) || void 0 === eV || eV.execute(), ""
+         };
+       return SH
+     }
+     var wt = function(HH, BH) {
+       return HH.actions.forEach((function(LH) {
+         var AH = LH.exec;
+         return AH && AH(HH.context, BH)
+       }))
+     };
+ 
+     function Zt(HH) {
+       var BH = HH.initialState,
+         LH = Kt.NotStarted,
+         AH = new Set,
+         rH = {
+           _machine: HH,
+ ... (102 more added lines; see GitHub link above)
```

#### 229. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3225-L3248` → after: `L9721-L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9721-L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9721-L9783) · [Before (L3225-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3225-L3248)

```diff
-         class hJ {
-           constructor(VV, eV, xV) {
-             this.params = xV, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
-               this.execute()
-             };
-             const JV = "string" === typeof VV ? document.getElementById(VV) : VV;
-             NV(JV, "argument-error", {
-               appName: eV
-             }), this.container = JV, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
-           }
-           getResponse() {
-             return this.checkIfDeleted(), this.responseToken
-           }
-           delete() {
-             this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
-           }
- ... (8 more removed lines; see GitHub link above)
+       }, {
+         actions: {
+           castEvent: gt({
+             lastPlayedEvent: (HH, BH) => "CAST_EVENT" === BH.type ? BH.payload.event : HH.lastPlayedEvent
+           }),
+           recordTimeOffset: gt(((HH, BH) => {
+             let LH = HH.timeOffset;
+             return "payload" in BH && "timeOffset" in BH.payload && (LH = BH.payload.timeOffset), {
+               ...HH,
+               timeOffset: LH,
+               baselineTime: HH.events[0].timestamp + LH
+             }
+           })),
+           play(HH) {
+             var BH;
+             const {
+ ... (47 more added lines; see GitHub link above)
```

#### 230. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3250-L3257` → after: `L9785-L9801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9785-L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9785-L9801) · [Before (L3250-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3250-L3257)

```diff
-                 callback: VV,
-                 "expired-callback": eV
-               } = this.params;
-               if (VV) try {
-                 VV(this.responseToken)
-               } catch (xV) {}
-               this.timerId = window.setTimeout((() => {
-                 if (this.timerId = null, this.responseToken = null, eV) try {
+                 event: HH
+               } = BH.payload;
+               ft(HH, AH);
+               let hH = SH.length - 1;
+               if (!SH[hH] || SH[hH].timestamp <= HH.timestamp) SH.push(HH);
+               else {
+                 let BH = -1,
+                   LH = 0;
+                 for (; LH <= hH;) {
+                   const BH = Math.floor((LH + hH) / 2);
+                   SH[BH].timestamp <= HH.timestamp ? LH = BH + 1 : hH = BH - 1
+                 } - 1 === BH && (BH = LH), SH.splice(BH, 0, HH)
+               }
+               const tH = HH.timestamp < AH,
+                 zH = LH(HH, tH);
+               tH ? zH() : rH.isActive() && rH.addAction({
+ ... (1 more added lines; see GitHub link above)
```

#### 231. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3259-L3266` → after: `L9803-L9811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9803-L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9803-L9811) · [Before (L3259-L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3259-L3266)

```diff
-                 } catch (xV) {}
-                 this.isVisible && this.execute()
-               }), 6e4)
-             }), 500))
-           }
-           checkIfDeleted() {
-             if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
-           }
+                 },
+                 delay: HH.delay
+               })
+             }
+             return {
+               ...HH,
+               events: SH
+             }
+           }))
```

#### 232. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3268-L3296` → after: `L9813-L9860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9813-L9860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9813-L9860) · [Before (L3268-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3268-L3296)

```diff
-         const lJ = Xe("rcb"),
-           LJ = new RV(3e4, 6e4);
-         class fJ {
-           constructor() {
-             var VV;
-             this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (VV = NJ().grecaptcha) || void 0 === VV ? void 0 : VV.render)
-           }
-           load(VV) {
-             let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-             return NV(function(VV) {
-               return VV.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(VV)
-             }(eV), VV, "argument-error"), this.shouldResolveImmediately(eV) && Te(NJ().grecaptcha) ? Promise.resolve(NJ().grecaptcha) : new Promise(((xV, YV) => {
-               const UV = NJ().setTimeout((() => {
-                 YV(FV(VV, "network-request-failed"))
-               }), LJ.get());
-               NJ()[lJ] = () => {
- ... (13 more removed lines; see GitHub link above)
+       }))
+     }
+     const st = new Map;
+ 
+     function Jt(HH, BH) {
+       let LH = st.get(HH);
+       return LH || (LH = new Map, st.set(HH, LH)), LH.has(BH) || LH.set(BH, []), LH.get(BH)
+     }
+ 
+     function it(HH, BH, LH) {
+       return async AH => {
+         if (AH && "object" === typeof AH && "rr_type" in AH) {
+           if (LH && (LH.isUnchanged = !1), "ImageBitmap" === AH.rr_type && "args" in AH) {
+             const rH = await it(HH, BH, LH)(AH.args);
+             return await createImageBitmap.apply(null, rH)
+           }
+ ... (32 more added lines; see GitHub link above)
```

#### 233. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3298-L3299` → after: `L9862-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9862-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9862-L9866) · [Before (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3298-L3299)

```diff
-           clearedOneInstance() {
-             this.counter--
+           if ("data" in AH && "Blob" === AH.rr_type) {
+             const rH = await Promise.all(AH.data.map(it(HH, BH, LH)));
+             return new Blob(rH, {
+               type: AH.type
+             })
```

#### 234. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3301-L3303` → after: `L9868-L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9868-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9868-L9888) · [Before (L3301-L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3301-L3303)

```diff
-           shouldResolveImmediately(VV) {
-             var eV;
-             return !!(null === (eV = NJ().grecaptcha) || void 0 === eV ? void 0 : eV.render) && (VV === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
+         } else if (Array.isArray(AH)) {
+           return await Promise.all(AH.map(it(HH, BH, LH)))
+         }
+         return AH
+       }
+     }
+     const pt = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
+     async function yt(HH) {
+       let {
+         mutation: BH,
+         target: LH,
+         type: AH,
+         imageMap: rH,
+         errorHandler: SH
+       } = HH;
+       try {
+ ... (5 more added lines; see GitHub link above)
```

#### 235. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3305-L3308` → after: `L9890-L9929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9890-L9929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9890-L9929) · [Before (L3305-L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3305-L3308)

```diff
-         }
-         class mJ {
-           async load(VV) {
-             return new cJ(VV)
+         }(LH, AH);
+         if (!HH) return;
+         if (BH.setter) return void(HH[BH.property] = BH.args[0]);
+         const SH = HH[BH.property],
+           hH = await Promise.all(BH.args.map(it(rH, HH)));
+         ! function(HH, BH) {
+           if (!(null == BH ? void 0 : BH.constructor)) return;
+           const {
+             name: LH
+           } = BH.constructor;
+           if (!pt.includes(LH)) return;
+           const AH = Jt(HH, LH);
+           AH.includes(BH) || AH.push(BH)
+         }(HH, SH.apply(HH, hH))
+       } catch (hH) {
+         SH(BH, hH)
+ ... (24 more added lines; see GitHub link above)
```

#### 236. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3310` → after: `L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9931) · [Before (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3310)

```diff
-           clearedOneInstance() {}
+           return
```

#### 237. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3312-L3337` → after: `L9933-L9945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9933-L9945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9933-L9945) · [Before (L3312-L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3312-L3337)

```diff
-         const KJ = "recaptcha",
-           HJ = {
-             theme: "light",
-             type: "image"
-           };
-         class uJ {
-           constructor(VV) {
-             let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, HJ),
-               xV = arguments.length > 2 ? arguments[2] : void 0;
-             this.parameters = eV, this.type = KJ, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Re(xV), this.isInvisible = "invisible" === this.parameters.size, NV("undefined" !== type … [truncated]
-             const JV = "string" === typeof VV ? document.getElementById(VV) : VV;
-             NV(JV, this.auth, "argument-error"), this.container = JV, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new mJ : new fJ, this.validateStartingState()
-           }
-           async verify() {
-             this.assertNotDestroyed();
-             const VV = await this.render(),
- ... (10 more removed lines; see GitHub link above)
+         await async function(HH) {
+           let {
+             event: BH,
+             mutations: LH,
+             target: AH,
+             imageMap: rH,
+             errorHandler: SH
+           } = HH;
+           const hH = AH.getContext("2d");
+           if (!hH) return void SH(LH[0], new Error("Canvas context is null"));
+           const tH = LH.map((async HH => Promise.all(HH.args.map(it(rH, hH)))));
+           (await Promise.all(tH)).forEach(((HH, AH) => {
+             const tH = LH[AH];
```

#### 238. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3339` → after: `L9947-L9949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9947-L9949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9947-L9949) · [Before (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3339)

```diff
-               this.assertNotDestroyed()
+               if (tH.setter) return void(hH[tH.property] = tH.args[0]);
+               const LH = hH[tH.property];
+               "drawImage" === tH.property && "string" === typeof tH.args[0] ? (rH.get(BH), LH.apply(hH, tH.args)) : LH.apply(hH, HH)
```

#### 239. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3341` → after: `L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9951) · [Before (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3341)

```diff
-               return Promise.reject(VV)
+               SH(tH, zH)
```

#### 240. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3343-L3352` → after: `L9953-L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R9953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L9953-L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L9953-L10141) · [Before (L3343-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3343-L3352)

```diff
-             return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((VV => {
-               throw this.renderPromise = null, VV
-             }))), this.renderPromise
-           }
-           _reset() {
-             this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
-           }
-           clear() {
-             this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((VV => {
-               this.container.removeChild(VV)
+           }))
+         }({
+           event: BH,
+           mutations: tH,
+           target: AH,
+           imageMap: rH,
+           errorHandler: hH
+         })
+       } catch (tH) {
+         hH(LH, tH)
+       }
+     }
+     class Bz {
+       constructor(HH) {
+         SH(this, "mediaMap", new Map), SH(this, "warn"), SH(this, "service"), SH(this, "speedService"), SH(this, "emitter"), SH(this, "getCurrentTime"), SH(this, "metadataCallbackMap", new Map), this.warn = HH.warn, this.service = HH.service, this.speedService = HH.speedService,  … [truncated]
+           this.syncAllMediaElements()
+ ... (173 more added lines; see GitHub link above)
```

#### 241. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3355-L3363` → after: `L10144-L10290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10144-L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10144-L10290) · [Before (L3355-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3355-L3363)

```diff
-           validateStartingState() {
-             NV(!this.parameters.sitekey, this.auth, "argument-error"), NV(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), NV("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
-           }
-           makeTokenCallback(VV) {
-             return eV => {
-               if (this.tokenChangeListeners.forEach((VV => VV(eV))), "function" === typeof VV) VV(eV);
-               else if ("string" === typeof VV) {
-                 const xV = NJ()[VV];
-                 "function" === typeof xV && xV(eV)
+         }
+       },
+       Sz = "[replayer]",
+       hz = {
+         duration: 500,
+         lineCap: "round",
+         lineWidth: 3,
+         strokeStyle: "red"
+       };
+ 
+     function tz(HH) {
+       return HH.type == mh.IncrementalSnapshot && (HH.data.source == oh.TouchMove || HH.data.source == oh.MouseInteraction && HH.data.type == Ih.TouchStart)
+     }
+     class zz {
+       constructor(HH, BH) {
+         var LH = this;
+ ... (131 more added lines; see GitHub link above)
```

#### 242. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3366-L3375` → after: `L10298-L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10298-L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10298-L10366) · [Before (L3366-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3366-L3375)

```diff
-           }
-           assertNotDestroyed() {
-             NV(!this.destroyed, this.auth, "internal-error")
-           }
-           async makeRenderPromise() {
-             if (await this.init(), !this.widgetId) {
-               let VV = this.container;
-               if (!this.isInvisible) {
-                 const eV = document.createElement("div");
-                 VV.appendChild(eV), VV = eV
+             if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
+               for (const HH in this.legacy_missingNodeRetryMap) try {
+                 const BH = this.legacy_missingNodeRetryMap[HH],
+                   AH = vS(BH.node, this.mirror, this.virtualDom.mirror);
+                 MS(AH, BH.node, LH, this.virtualDom.mirror), BH.node = AH
+               } catch (BH) {
+                 this.warn(BH)
+               }
+             this.constructedStyleMutations.forEach((HH => {
+               this.applyStyleSheetMutation(HH)
+             })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((HH => {
+               this.applyAdoptedStyleSheet(HH)
+             })), this.adoptedStyleSheets = []
+           }
+           if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove(" … [truncated]
+             const [HH, BH] = this.lastMouseDownEvent;
+ ... (53 more added lines; see GitHub link above)
```

#### 243. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3404-L3406` → after: `L10370-L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10370-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10370-L10380) · [Before (L3404-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3404-L3406)

```diff
-           confirm(VV) {
-             const eV = Se._fromVerification(this.verificationId, VV);
-             return this.onConfirmation(eV)
+         }, {
+           actions: {
+             setSpeed: (HH, BH) => {
+               "payload" in BH && HH.timer.setSpeed(BH.payload.speed)
+             },
+             recordSpeed: gt({
+               normalSpeed: HH => HH.timer.speed
+             }),
+             restoreSpeed: HH => {
+               HH.timer.setSpeed(HH.normalSpeed)
+             }
```

#### 244. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3409-L3425` → after: `L10407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10407) · [Before (L3409-L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3409-L3425)

```diff
-         async function SJ(VV, eV, xV) {
-           const YV = Re(VV),
-             UV = await OJ(YV, eV, (0, JV.L)(xV));
-           return new sJ(UV, (VV => Fx(YV, VV)))
-         }
-         async function IJ(VV, eV, xV) {
-           const YV = (0, JV.L)(VV);
-           await jx(!1, YV, "phone");
-           const UV = await OJ(YV.auth, eV, (0, JV.L)(xV));
-           return new sJ(UV, (VV => Tx(YV, VV)))
-         }
-         async function dJ(VV, eV, xV) {
-           const YV = (0, JV.L)(VV),
-             UV = await OJ(YV.auth, eV, (0, JV.L)(xV));
-           return new sJ(UV, (VV => Px(YV, VV)))
-         }
- ... (1 more removed lines; see GitHub link above)
+         tH && setTimeout((() => {
```

#### 245. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3427-L3463` → after: `L10409-L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10409-L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10409-L10527) · [Before (L3427-L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3427-L3463)

```diff
-           const YV = await xV.verify();
-           try {
-             let UV;
-             if (NV("string" === typeof YV, VV, "argument-error"), NV(xV.type === KJ, VV, "argument-error"), UV = "string" === typeof eV ? {
-                 phoneNumber: eV
-               } : eV, "session" in UV) {
-               const eV = UV.session;
-               if ("phoneNumber" in UV) {
-                 NV("enroll" === eV.type, VV, "internal-error");
-                 const xV = await
-                 function(VV, eV) {
-                   return oV(VV, "POST", "/v2/accounts/mfaEnrollment:start", aV(VV, eV))
-                 }(VV, {
-                   idToken: eV.credential,
-                   phoneEnrollmentInfo: {
-                     phoneNumber: UV.phoneNumber,
- ... (21 more removed lines; see GitHub link above)
+           this.firstFullSnapshot || (this.firstFullSnapshot = tH, this.rebuildFullSnapshot(tH), null == (HH = this.iframe.contentWindow) || HH.scrollTo(tH.data.initialOffset))
+         }), 1), this.service.state.context.events.find(tz) && this.mouse.classList.add("touch-device")
+       }
+       get timer() {
+         return this.service.state.context.timer
+       }
+       on(HH, BH) {
+         return this.emitter.on(HH, BH), this
+       }
+       off(HH, BH) {
+         return this.emitter.off(HH, BH), this
+       }
+       setConfig(HH) {
+         Object.keys(HH).forEach((BH => {
+           HH[BH], this.config[BH] = HH[BH]
+         })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof HH.speed && this.speedService.send({
+ ... (103 more added lines; see GitHub link above)
```

#### 246. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3465-L3472` → after: `L10529-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10529-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10529-L10531) · [Before (L3465-L3472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3465-L3472)

```diff
-                 sessionInfo: eV
-               } = await async function(VV, eV) {
-                 return oV(VV, "POST", "/v1/accounts:sendVerificationCode", aV(VV, eV))
-               }(VV, {
-                 phoneNumber: UV.phoneNumber,
-                 recaptchaToken: YV
-               });
-               return eV
+                 events: LH
+               } = this.service.state.context;
+               this.mediaManager.addMediaElements(BH, HH.timestamp - LH[0].timestamp, this.mirror)
```

#### 247. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3474-L3512` → after: `L10533-L10617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10533-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10533-L10617) · [Before (L3474-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3474-L3512)

```diff
-           } finally {
-             xV._reset()
-           }
-         }
-         async function VY(VV, eV) {
-           await Bx((0, JV.L)(VV), eV)
-         }
-         class eY {
-           constructor(VV) {
-             this.providerId = eY.PROVIDER_ID, this.auth = Re(VV)
-           }
-           verifyPhoneNumber(VV, eV) {
-             return OJ(this.auth, VV, (0, JV.L)(eV))
-           }
-           static credential(VV, eV) {
-             return Se._fromVerification(VV, eV)
- ... (23 more removed lines; see GitHub link above)
+             for (const HH of this.config.plugins || []) HH.onBuild && HH.onBuild(BH, {
+               id: rH,
+               replayer: this
+             })
+           };
+         this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), rA(HH.data.node, {
+           doc: this.iframe.contentDocument,
+           afterAppend: rH,
+           cache: this.cache,
+           mirror: this.mirror,
+           UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
+         }), rH(this.iframe.contentDocument, HH.data.node.id);
+         for (const {
+             mutationInQueue: tH,
+             builtNode: zH
+           }
+ ... (69 more added lines; see GitHub link above)
```

#### 248. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3514-L3538` → after: `L10619-L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10619-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10619-L10684) · [Before (L3514-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3514-L3538)

```diff
-         eY.PROVIDER_ID = "phone", eY.PHONE_SIGN_IN_METHOD = "phone";
-         class JY extends oe {
-           constructor(VV) {
-             super("custom", "custom"), this.params = VV
-           }
-           _getIdTokenResponse(VV) {
-             return He(VV, this._buildIdpRequest())
-           }
-           _linkToIdToken(VV, eV) {
-             return He(VV, this._buildIdpRequest(eV))
-           }
-           _getReauthenticationResolver(VV) {
-             return He(VV, this._buildIdpRequest())
-           }
-           _buildIdpRequest(VV) {
-             const eV = {
- ... (9 more removed lines; see GitHub link above)
+       }
+       waitForStylesheetLoad() {
+         var HH;
+         const BH = null == (HH = this.iframe.contentDocument) ? void 0 : HH.head;
+         if (BH) {
+           const HH = new Set;
+           let LH, AH = this.service.state;
+           const rH = () => {
+             AH = this.service.state
+           };
+           this.emitter.on(ch.Start, rH), this.emitter.on(ch.Pause, rH);
+           const SH = () => {
+             this.emitter.off(ch.Start, rH), this.emitter.off(ch.Pause, rH)
+           };
+           BH.querySelectorAll('link[rel="stylesheet"]').forEach((BH => {
+             BH.sheet || (HH.add(BH), BH.addEventListener("load", (() => {
+ ... (50 more added lines; see GitHub link above)
```

#### 249. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3541-L3574` → after: `L10687-L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10687-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10687-L10710) · [Before (L3541-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3541-L3574)

```diff
- 
-         function YY(VV) {
-           return tx(VV.auth, new JY(VV), VV.bypassAuthState)
-         }
- 
-         function UY(VV) {
-           const {
-             auth: eV,
-             user: xV
-           } = VV;
-           return NV(xV, eV, "internal-error"), qx(xV, new JY(VV), VV.bypassAuthState)
-         }
-         async function yY(VV) {
-           const {
-             auth: eV,
-             user: xV
- ... (18 more removed lines; see GitHub link above)
+       }
+       applyIncremental(HH, BH) {
+         var LH, AH, rH;
+         const {
+           data: SH
+         } = HH;
+         switch (SH.source) {
+           case oh.Mutation:
+             try {
+               this.applyMutation(SH, BH)
+             } catch (hH) {
+               this.warn(`Exception in mutation ${hH.message||hH}`, SH)
+             }
+             break;
+           case oh.Drag:
+           case oh.TouchMove:
+ ... (8 more added lines; see GitHub link above)
```

#### 250. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3576-L3578` → after: `L10712-L10733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10712-L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10712-L10733) · [Before (L3576-L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3576-L3578)

```diff
-             }))
-           }
-           async onAuthEvent(VV) {
+             } else SH.positions.forEach((LH => {
+               const AH = {
+                 doAction: () => {
+                   this.moveAndHover(LH.x, LH.y, LH.id, BH, SH)
+                 },
+                 delay: LH.timeOffset + HH.timestamp - this.service.state.context.baselineTime
+               };
+               this.timer.addAction(AH)
+             })), this.timer.addAction({
+               doAction() {},
+               delay: HH.delay - (null == (LH = SH.positions[0]) ? void 0 : LH.timeOffset)
+             });
+             break;
+           case oh.MouseInteraction: {
+             if (-1 === SH.id) break;
+             const HH = new Event(oH(Ih[SH.type])),
+ ... (6 more added lines; see GitHub link above)
```

#### 251. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3580-L3596` → after: `L10735-L10832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10735-L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10735-L10832) · [Before (L3580-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3580-L3596)

```diff
-               urlResponse: eV,
-               sessionId: xV,
-               postBody: JV,
-               tenantId: YV,
-               error: UV,
-               type: yV
-             } = VV;
-             if (UV) return void this.reject(UV);
-             const pV = {
-               auth: this.auth,
-               requestUri: eV,
-               sessionId: xV,
-               tenantId: YV || void 0,
-               postBody: JV || void 0,
-               user: this.user,
-               bypassAuthState: this.bypassAuthState
- ... (1 more removed lines; see GitHub link above)
+               triggerFocus: AH
+             } = this.config;
+             switch (SH.type) {
+               case Ih.Blur:
+                 "blur" in LH && LH.blur();
+                 break;
+               case Ih.Focus:
+                 AH && LH.focus && LH.focus({
+                   preventScroll: !0
+                 });
+                 break;
+               case Ih.Click:
+               case Ih.TouchStart:
+               case Ih.TouchEnd:
+               case Ih.MouseDown:
+               case Ih.MouseUp:
+ ... (82 more added lines; see GitHub link above)
```

#### 252. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3598` → after: `L10834-L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10834-L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10834-L10835) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3598)

```diff
-               this.resolve(await this.getIdpTask(yV)(pV))
+               const HH = new FontFace(SH.family, SH.buffer ? new Uint8Array(JSON.parse(SH.fontSource)) : SH.fontSource, SH.descriptors);
+               null == (rH = this.iframe.contentDocument) || rH.fonts.add(HH)
```

#### 253. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3600` → after: `L10837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10837) · [Before (L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3600)

```diff
-               this.reject(QV)
+               this.warn(hH)
```

#### 254. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3602-L3618` → after: `L10839-L10843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10839-L10843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10839-L10843) · [Before (L3602-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3602-L3618)

```diff
-           }
-           onError(VV) {
-             this.reject(VV)
-           }
-           getIdpTask(VV) {
-             switch (VV) {
-               case "signInViaPopup":
-               case "signInViaRedirect":
-                 return YY;
-               case "linkViaPopup":
-               case "linkViaRedirect":
-                 return yY;
-               case "reauthViaPopup":
-               case "reauthViaRedirect":
-                 return UY;
-               default:
- ... (1 more removed lines; see GitHub link above)
+             break;
+           case oh.Selection:
+             if (BH) {
+               this.lastSelectionData = SH;
+               break
```

#### 255. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3621-L3628` → after: `L10860-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10860-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10860-L10871) · [Before (L3621-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3621-L3628)

```diff
-           resolve(VV) {
-             MV(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(VV), this.unregisterAndCleanUp()
-           }
-           reject(VV) {
-             MV(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(VV), this.unregisterAndCleanUp()
-           }
-           unregisterAndCleanUp() {
-             this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
+         const LH = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
+         HH.removes = HH.removes.filter((BH => !!LH.yAH(BH.id) || (this.warnNodeNotFound(HH, BH.id), !1))), HH.removes.forEach((BH => {
+           var AH;
+           const rH = LH.yAH(BH.id);
+           if (!rH) return;
+           let SH = LH.yAH(BH.parentId);
+           if (!SH) return this.warnNodeNotFound(HH, BH.parentId);
+           if (BH.isShadow && xh(SH) && (SH = SH.shadowRoot), LH.removeNodeFromMap(rH), SH) try {
+             SH.removeChild(rH), this.usingVirtualDom && "#text" === rH.nodeName && "STYLE" === SH.nodeName && (null == (AH = SH.rules) ? void 0 : AH.length) > 0 && (SH.rules = [])
+           } catch (tH) {
+             if (!(tH instanceof DOMException)) throw tH;
+             this.warn("parent could not remove child in mutation", SH, rH, HH)
```

#### 256. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3630-L3632` → after: `L10873-L10937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10873-L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10873-L10937) · [Before (L3630-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3630-L3632)

```diff
-         }
-         const QY = new RV(2e3, 1e4);
-         async function nY(VV, eV, xV) {
+         }));
+         const AH = {
+             ...this.legacy_missingNodeRetryMap
+           },
+           rH = [],
+           SH = HH => {
+             var BH, SH;
+             if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
+             let hH = LH.yAH(HH.parentId);
+             if (!hH) return HH.node.type === eh.Document ? this.newDocumentQueue.push(HH) : rH.push(HH);
+             HH.node.isShadow && (xh(hH) || hH.attachShadow({
+               mode: "open"
+             }), hH = hH.shadowRoot);
+             let tH = null,
+               zH = null;
+             if (HH.previousId && (tH = LH.yAH(HH.previousId)), HH.nextId && (zH = LH.yAH(HH.nextId)), (HH => {
+ ... (49 more added lines; see GitHub link above)
```

#### 257. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3634-L3672` → after: `L10939-L10941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10939-L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10939-L10941) · [Before (L3634-L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3634-L3672)

```diff
-           PV(VV, eV, Vx);
-           const YV = xY(JV, xV);
-           return new vY(JV, "signInViaPopup", eV, YV).executeNotNull()
-         }
-         async function wY(VV, eV, xV) {
-           const YV = (0, JV.L)(VV);
-           PV(YV.auth, eV, Vx);
-           const UV = xY(YV.auth, xV);
-           return new vY(YV.auth, "reauthViaPopup", eV, UV, YV).executeNotNull()
-         }
-         async function ZY(VV, eV, xV) {
-           const YV = (0, JV.L)(VV);
-           PV(YV.auth, eV, Vx);
-           const UV = xY(YV.auth, xV);
-           return new vY(YV.auth, "linkViaPopup", eV, UV, YV).executeNotNull()
-         }
- ... (23 more removed lines; see GitHub link above)
+           if (rH.length = 0, Date.now() - hH > 500) {
+             this.warn("Timeout in the loop, please check the resolve tree data:", HH);
+             break
```

#### 258. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3674-L3684` → after: `L10943-L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10943-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10943-L10946) · [Before (L3674-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3674-L3684)

```diff
-           cleanUp() {
-             this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, vY.currentPopupAction = null
-           }
-           pollUserCancellation() {
-             const VV = () => {
-               var eV, xV;
-               (null === (xV = null === (eV = this.authWindow) || void 0 === eV ? void 0 : eV.window) || void 0 === xV ? void 0 : xV.closed) ? this.pollId = window.setTimeout((() => {
-                 this.pollId = null, this.reject(FV(this.auth, "popup-closed-by-user"))
-               }), 8e3): this.pollId = window.setTimeout(VV, QY.get())
-             };
-             VV()
+           for (const BH of HH) {
+             LH.yAH(BH.value.parentId) ? uh(BH, (HH => {
+               SH(HH)
+             })) : this.debug("Drop resolve tree since there is no parent for the root node.", BH)
```

#### 259. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3687-L3692` → after: `L10949-L10954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10949-L10954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10949-L10954) · [Before (L3687-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3687-L3692)

```diff
-         vY.currentPopupAction = null;
-         const rY = "pendingRedirect",
-           kY = new Map;
-         class bY extends pY {
-           constructor(VV, eV) {
-             super(VV, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], eV, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
+         Object.keys(AH).length && Object.assign(this.legacy_missingNodeRetryMap, AH), Th(HH.texts).forEach((BH => {
+           var AH;
+           const rH = LH.yAH(BH.id);
+           if (!rH) {
+             if (HH.removes.find((HH => HH.id === BH.id))) return;
+             return this.warnNodeNotFound(HH, BH.id)
```

#### 260. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3694-L3705` → after: `L10956-L11002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R10956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L10956-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L10956-L11002) · [Before (L3694-L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3694-L3705)

```diff
-           async execute() {
-             let VV = kY.get(this.auth._key());
-             if (!VV) {
-               try {
-                 const eV = await async function(VV, eV) {
-                   const xV = qY(eV),
-                     JV = jY(VV);
-                   if (!await JV._isAvailable()) return !1;
-                   const YV = "true" === await JV._get(xV);
-                   return await JV._remove(xV), YV
-                 }(this.resolver, this.auth) ? await super.execute() : null;
-                 VV = () => Promise.resolve(eV)
+           const SH = rH.parentElement;
+           if (BH.value && SH && "STYLE" === SH.tagName ? rH.textContent = JL(BH.value, this.cache) : rH.textContent = BH.value, this.usingVirtualDom) {
+             const HH = rH.parentNode;
+             (null == (AH = null == HH ? void 0 : HH.rules) ? void 0 : AH.length) > 0 && (HH.rules = [])
+           }
+         })), HH.attributes.forEach((BH => {
+           var AH;
+           const rH = LH.yAH(BH.id);
+           if (!rH) {
+             if (HH.removes.find((HH => HH.id === BH.id))) return;
+             return this.warnNodeNotFound(HH, BH.id)
+           }
+           for (const HH in BH.attributes)
+             if ("string" === typeof HH) {
+               const hH = BH.attributes[HH];
+               if (null === hH) rH.removeAttribute(HH), "open" === HH && Az(rH, BH);
+ ... (31 more added lines; see GitHub link above)
```

#### 261. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3707` → after: `L11004-L11016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11004-L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11004-L11016) · [Before (L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3707)

```diff
-                 VV = () => Promise.reject(eV)
+                 this.warn("An error occurred may due to the checkout feature.", tH)
+               } else if ("style" === HH) {
+                 const HH = hH,
+                   BH = rH;
+                 for (const LH in HH)
+                   if (!1 === HH[LH]) BH.style.removeProperty(LH);
+                   else if (HH[LH] instanceof Array) {
+                   const AH = HH[LH];
+                   BH.style.setProperty(LH, AH[0], AH[1])
+                 } else {
+                   const AH = HH[LH];
+                   BH.style.setProperty(LH, AH)
+                 }
```
