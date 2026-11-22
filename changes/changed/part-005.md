# Changed — Bundle Modifications Report (Part 005 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `5 / 47` (**291** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 11. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L2776-L2913` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L79) · [Before (L2776-L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L2776-L2913)

```diff
-         }) : null, FQ && (0, cQ.jsx)(Nw, {}), tQ && (0, cQ.jsx)(YQ.e, {
-           label: QQ("settingsMenu:ezBridging"),
-           checked: wQ.ezBridging,
-           onClick: QQ => {
-             uQ.c.setClientEscMenuOptions({
-               ezBridging: QQ
-             })
-           },
-           circleInfoText: QQ("settingsMenu:ezBridgingInfo")
-         }), eQ && (0, cQ.jsx)(YQ.e, {
-           label: QQ("settingsMenu:ezTowering"),
-           checked: wQ.ezTowering,
-           onClick: QQ => {
-             uQ.c.setClientEscMenuOptions({
-               ezTowering: QQ
-             })
- ... (122 more removed lines; see GitHub link above)
+         })), window.adStartSoPause(kk)) : (kk(), console.error("AIP ad lib not loaded, no ad playing"))
```

#### 12. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L2915-L3043` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L81-L82) · [Before (L2915-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L2915-L3043)

```diff
-       OQ.length > 0 && (RQ = HQ("controls:sharedBindingsWarning") + " ", RQ += OQ.join(", "));
-       const rQ = () => {
-           xQ(!1), pQ(null), MQ("controls:clickToEnterNewBinding"), SQ(null)
-         },
-         IQ = () => "BindingInput_" + FQ;
-       return (0, cQ.jsxs)("div", {
-         className: vQ()("ControlRow", {
-           WarningBorder: null !== RQ
-         }),
-         children: [(0, cQ.jsxs)("div", {
-           className: "ControlRowInner",
-           children: [(0, cQ.jsxs)("div", {
-             className: "ControlName",
-             children: [HQ(oQ.x[FQ].translationKey, oQ.x[FQ].params), uQ && bQ && (0, cQ.jsx)(tQ.b, {
-               glyph: bQ,
-               className: "ControlPadGlyph"
- ... (113 more removed lines; see GitHub link above)
+       renderBanner(kk) {
+         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
```

#### 13. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L3045` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L84-L85) · [Before (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L3045)

```diff
-           value: LQ
+           divId: ek,
+           alias: ik
```

#### 14. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L3047-L3095` → after: `L87-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L87-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L87-L92) · [Before (L3047-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L3047-L3095)

```diff
-         return {
-           value: LQ,
-           start: null !== (FQ = QQ.selectionStart) && void 0 !== FQ ? FQ : LQ.length,
-           end: null !== (wQ = QQ.selectionEnd) && void 0 !== wQ ? wQ : LQ.length
-         }
-       },
-       YQ = (QQ, FQ, wQ) => {
-         if (QQ.readOnly) return;
-         const qQ = QQ instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
-         Object.getOwnPropertyDescriptor(qQ, "value").set.call(QQ, FQ.value), HQ(QQ) && QQ.setSelectionRange(FQ.start, FQ.end), (0, LQ.f)(QQ, new InputEvent("input", {
-           bubbles: !0,
-           inputType: wQ
-         }))
-       };
-     let xQ = !1;
-     const AQ = (QQ, FQ) => !!document.execCommand(QQ, !1, FQ) || (xQ || (xQ = !0, console.warn(`execCommand("${QQ}") failed; the on-screen keyboard is setting the value directly`)), !1),
- ... (33 more removed lines; see GitHub link above)
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: ek,
+             alias: ik
+           })
+         })), console.log("AD: Requested aip banner", document.getElementById(kk.divId), ik ? `(alias: ${ik})` : "")
```

#### 15. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L3097-L3164` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L94-L97) · [Before (L3097-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L3097-L3164)

```diff
-   },
-   8604: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => kQ
-     });
-     var LQ = wQ(17),
-       qQ = wQ(3305),
-       oQ = wQ(1362),
-       DQ = wQ(1395);
-     const kQ = async () => {
-       if ((0, DQ.d)()) {
-         if (!0 !== await oQ.NotificationProvider.showPromptPopup({
-             title: "controller:menusLeaveGameTitle",
-             confirmText: "controller:menusLeaveGameLeave",
-             cancelText: "controller:menusLeaveGameStay",
-             destructive: !0
- ... (52 more removed lines; see GitHub link above)
+       clearBanner(kk) {
+         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.destroy(kk.divId)
+         })), console.log(`AD: Clearing aip banner ad ${kk.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
```

#### 16. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L3166-L3237` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L99-L102) · [Before (L3166-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L3166-L3237)

```diff
-   },
-   8421: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ,
-       f: () => mQ,
-       j: () => AQ,
-       m: () => HQ,
-       o: () => xQ,
-       p: () => oQ,
-       s: () => YQ,
-       t: () => DQ,
-       w: () => bQ
-     });
-     const LQ = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(", … [truncated]
-       qQ = (QQ, FQ) => {
-         if ("function" === typeof QQ.checkVisibility) return !QQ.checkVisibility({
- ... (56 more removed lines; see GitHub link above)
+       setBannerAutoRefreshEnabled(kk, ek) {
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.setAutoRefresh(kk.divId, ek)
+         }))
```

#### 17. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L3239-L3381` → after: `L104-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L104-L109) · [Before (L3239-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L3239-L3381)

```diff
-   },
-   8408: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       B: () => mQ,
-       D: () => RQ,
-       F: () => CQ,
-       I: () => SQ,
-       L: () => tQ,
-       P: () => vQ,
-       R: () => uQ,
-       d: () => eQ,
-       f: () => WQ,
-       g: () => cQ,
-       k: () => pQ,
-       m: () => xQ,
-       p: () => AQ,
- ... (127 more removed lines; see GitHub link above)
+       newPageSession() {
+         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
+           window.__VM.push((function(kk, ek) {
+             ek.Instances.pageManager.newPageSession(!1)
+           }))
+         }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/152.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/152.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f)

#### 1. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L4)

```diff
-   8537: (QQ, FQ, wQ) => {
+   7950: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L6-L8)

```diff
-       e: () => IQ,
-       i: () => RQ,
-       m: () => OQ
+       e: () => mk
```

#### 3. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L10-L32` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L8-L12) · [Before (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L10-L32)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(4388),
-       oQ = wQ(1140),
-       DQ = wQ(1447),
-       kQ = wQ(22),
-       vQ = wQ(3288),
-       mQ = wQ(2153),
-       uQ = wQ(1254),
-       HQ = wQ(8582),
-       bQ = wQ(1897),
-       YQ = wQ(1927),
-       xQ = wQ(1207),
-       AQ = wQ(17),
-       tQ = wQ(1641),
-       eQ = wQ(1070),
-       MQ = wQ.n(eQ),
- ... (7 more removed lines; see GitHub link above)
+     var Dk = ik(2849);
+     const fk = [1, 8, 9],
+       Sk = 5,
+       bk = 200,
+       rk = 150;
```

#### 4. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L34-L43` → after: `L14-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L14-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L14-L31) · [Before (L34-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L34-L43)

```diff
-     function RQ() {
-       return null !== WQ
-     }
- 
-     function OQ() {
-       return "pad" === WQ
-     }
- 
-     function sQ() {
-       return "inGame" === AQ.c.get("gameState") && !(0, tQ.m)()
+     function Pk(kk, ek) {
+       let ik = 0;
+       kk("addEventListener", 2, ((kk, bk) => {
+         if (!bk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const rk = function(kk) {
+           const ek = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
+           return kk.gdprApplies && ek ? fk.every((ek => !0 === kk.purpose.consents[ek])) : null
+         }(kk);
+         if (null === rk) return;
+         const Pk = ++ik;
+         if (!rk) return void(0, Dk.B)(!1);
+         if ("nitro" === ek) return void(0, Dk.B)(!0);
+         const mk = window.__tcfapi;
+         mk ? mk("getNonIABVendorConsents", 2, ((kk, ek) => {
+           var fk;
+           Pk === ik && (0, Dk.B)(ek && !0 === (null === (fk = kk.nonIabVendorConsents) || void 0 === fk ? void 0 : fk[Sk]))
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L47` → after: `L35-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L35-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L35-L41) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L47)

```diff
-       return (0, pQ.t)(QQ, uQ.q, pQ.d, pQ.f, pQ.i)
+       if (window.__tcfapi) return void Pk(window.__tcfapi, kk);
+       let ek = 0;
+       const ik = window.setInterval((() => {
+         ek++;
+         const Dk = window.__tcfapi;
+         Dk ? (window.clearInterval(ik), Pk(Dk, kk)) : ek >= rk && window.clearInterval(ik)
+       }), bk)
```

#### 6. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L49-L183` → after: `L43-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L43-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L43-L63) · [Before (L49-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L49-L183)

```diff
-     const IQ = (0, LQ.memo)((function() {
-       const {
-         t: QQ
-       } = (0, xQ.y)(), {
-         userContext: FQ
-       } = (0, oQ.e)(), [wQ, AQ] = (0, LQ.useState)(null), [eQ, RQ] = (0, LQ.useState)(null), OQ = (0, LQ.useRef)(null), IQ = (0, LQ.useCallback)((QQ => {
-         OQ.current = QQ, RQ(QQ)
-       }), []), UQ = (0, LQ.useRef)(0), NQ = (0, LQ.useRef)(null), TQ = (0, LQ.useRef)({
-         x: 0,
-         y: 0
-       }), [KQ, zQ] = (0, LQ.useState)(0), lQ = (0, LQ.useMemo)((() => function(QQ) {
-         const FQ = [];
-         for (let LQ = 0; LQ < uQ.q; LQ++) {
-           var wQ;
-           FQ.push(null !== (wQ = QQ[LQ]) && void 0 !== wQ ? wQ : null)
-         }
- ... (119 more removed lines; see GitHub link above)
+   },
+   7966: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       NitroSdkAdaptor: () => Pk
+     });
+     var Dk = ik(1298),
+       fk = ik(1163),
+       Sk = ik(7950),
+       bk = ik(2849);
+     const rk = "NitroOutstreamVideo";
+     class Pk extends Dk.e {
+       constructor() {
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+       }
+       static async setup() {
+         return window.nitroAds = window.nitroAds || {
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L185-L306` → after: `L65-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L65-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L65-L103) · [Before (L185-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L185-L306)

```diff
-           children: [(0, iQ.jsxs)("svg", {
-             className: "EmoteWheelSvg",
-             viewBox: `0 0 ${pQ.k} ${pQ.k}`,
-             children: [lQ.map(((FQ, wQ) => {
-               const LQ = null !== FQ,
-                 qQ = JQ && wQ === eQ;
-               return (0, iQ.jsx)("path", {
-                 d: rQ(wQ),
-                 className: MQ()("EmoteWheelWedge", {
-                   EmoteWheelWedgeHighlighted: qQ,
-                   EmoteWheelWedgeDisabled: !LQ
-                 }),
-                 onClick: QQ => {
-                   QQ.stopPropagation(), null !== FQ && (QQ => {
-                     XQ(), fQ(QQ)
-                   })(FQ)
- ... (106 more removed lines; see GitHub link above)
+           addUserToken: function() {
+             for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+             window.nitroAds.queue.push(["addUserToken", ek])
+           },
+           queue: []
+         }, document.addEventListener("nitroAds.rendered", (kk => {
+           var ek, ik, Dk;
+           const fk = document.getElementById(null !== (ek = null === (ik = kk.detail) || void 0 === ik || null === (Dk = ik.adInfo) || void 0 === Dk ? void 0 : Dk.adUnitCode) && void 0 !== ek ? ek : "");
+           null !== fk && void 0 !== fk && fk.classList.contains("NitroBanner") && fk.classList.toggle("NitroBannerUnfilled", "blank" === kk.detail.type)
+         })), (0, bk.A)(), await (0, fk.d)("https://s.nitropay.com/ads-2842.js", {
+           "data-cfasync": "false"
+         }), (0, Sk.e)("nitro"), new Pk
+       }
+       playVideoAd(kk, ek) {
+         this.showVideoAd(kk, kk)
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L319-L327` → after: `L107-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L107-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L107-L116) · [Before (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L319-L327)

```diff
-         this.setState({
-           ...this.state,
-           messages: [LQ, ...this.state.messages].slice(0, qQ.h)
-         })
-       }
-       selectNextChannel() {
-         const QQ = mQ.b.get("chatChannels");
-         if (QQ) {
-           const FQ = QQ.findIndex((QQ => {
+         let Pk = !1;
+         const mk = (kk, ek) => {
+             if (!Pk) {
+               if (!kk) return console.log(`AD: Nitro video not filled: ${ek}`), void bk(!1);
+               Pk = !0, clearTimeout(lk), lk = setTimeout((() => {
+                 console.log("AD: Nitro video never completed"), bk(!1)
+               }), 12e4)
+             }
+           },
+           Mk = kk => {
```

#### 9. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L329-L362` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L118-L119) · [Before (L329-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L329-L362)

```diff
-             return QQ.channelName === (null === (FQ = this.state.channel) || void 0 === FQ ? void 0 : FQ.channelName)
-           }));
-           this.setState({
-             ...this.state,
-             channel: QQ[(FQ + 1) % QQ.length]
-           })
-         }
-       }
-       setState(QQ) {
-         this.state = QQ;
-         for (const FQ of this.listeners) FQ()
-       }
-     };
- 
-     function bQ() {
-       const [QQ, FQ] = (0, LQ.useState)(HQ.getState);
- ... (18 more removed lines; see GitHub link above)
+             (null === (ek = kk.detail) || void 0 === ek ? void 0 : ek.id) === rk && mk("filled" === kk.detail.status, kk.detail.status)
+           },
```

#### 10. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L365-L380` → after: `L122-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L122-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L122-L150) · [Before (L365-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L365-L380)

```diff
-             const DQ = null !== (LQ = null === (oQ = wQ.byId[QQ]) || void 0 === oQ ? void 0 : oQ.name) && void 0 !== LQ ? LQ : null;
-             return null !== DQ && (DQ === FQ || (0, vQ.b)(DQ, qQ) === FQ)
-           };
-         if (null !== wQ.localId && kQ(wQ.localId)) return void HQ.addMessage(null, [{
-           str: "You cannot report yourself."
-         }]);
-         for (const QQ of wQ.ids)
-           if (kQ(QQ)) return oQ.l.GA("OpenReportMenu", {
-             playerEId: QQ,
-             playerName: wQ.byId[QQ].name,
-             Om: null,
-             serverChatMsgId: null
-           }), void console.log("Opening report menu...");
-         HQ.addMessage(null, [{
-           str: "Player not found in lobby."
-         }])
+             (null === (ek = kk.detail) || void 0 === ek || null === (ik = ek.adInfo) || void 0 === ik ? void 0 : ik.adUnitCode) === rk && mk("blank" !== kk.detail.type, kk.detail.type)
+           },
+           xk = kk => {
+             var ek;
+             (null === (ek = kk.detail) || void 0 === ek ? void 0 : ek.adUnitCode) === rk && bk(!0)
+           },
+           nk = document.createElement("button");
+         nk.className = "NitroVideoSkip", nk.disabled = !0, nk.addEventListener("click", (() => {
+           console.log("AD: Nitro video skipped"), bk(!0)
+         }));
+         let Uk = Math.ceil(15);
+         const Hk = () => {
+           if (Uk <= 0) return clearInterval(wk), nk.textContent = "Skip Ad", void(nk.disabled = !1);
+           nk.textContent = `Skip ad in ${Uk}s`, Uk--
+         };
+         Hk();
+ ... (13 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L382-L407` → after: `L152-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L152-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L152-L182) · [Before (L382-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L382-L407)

```diff
-       DQ.gameBridge.send("sendChatMessage", {
-           Om: QQ,
-           channelName: null !== (FQ = null === (wQ = HQ.getState().channel) || void 0 === wQ ? void 0 : wQ.channelName) && void 0 !== FQ ? FQ : null
-         }),
-         function(QQ) {
-           var FQ;
-           const wQ = null !== (FQ = kQ.i.getItem("recentlySentChatMsgs")) && void 0 !== FQ ? FQ : [];
-           wQ.push(QQ), wQ.length > uQ && wQ.shift();
-           kQ.i.setItem("recentlySentChatMsgs", wQ)
-         }(QQ)
-     }
- 
-     function xQ() {
-       var QQ;
-       return null !== (QQ = kQ.i.getItem("recentlySentChatMsgs")) && void 0 !== QQ ? QQ : []
-     }
- ... (10 more removed lines; see GitHub link above)
+       renderBanner(kk) {
+         const {
+           divId: ek,
+           width: ik,
+           height: Dk
+         } = kk, fk = `${ek}-nitro`;
+         let Sk = document.getElementById(fk);
+         null === Sk && (Sk = document.createElement("div"), Sk.id = fk, Sk.className = "NitroBanner", Sk.style.setProperty("--nitro-slot-width", `${ik}px`), Sk.style.setProperty("--nitro-slot-height", `${Dk}px`), document.getElementById(ek).appendChild(Sk));
+         const bk = [
+           [String(ik), String(Dk)]
+         ];
+         Promise.resolve(window.nitroAds.createAd(fk, {
+           sizes: bk
+         })).catch((kk => {
+           console.error(`AD: Nitro failed to create banner ${fk}:`, kk)
+         })), console.log(`AD: Requested Nitro banner ${fk}`)
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L410-L1110` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/152.js#L185) · [Before (L410-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/152.js#L410-L1110)

```diff
-   },
-   8492: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ,
-       i: () => oQ
-     });
-     var LQ = wQ(1951);
-     const qQ = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       oQ = QQ => "string" === typeof QQ.icon && "" !== QQ.icon && "string" === typeof QQ.keycode && qQ.test(QQ.keycode),
-       DQ = QQ => "Space" === QQ ? "_" : LQ.j[QQ]
-   },
-   8541: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => qQ
-     });
-     var LQ = wQ(17);
- ... (685 more removed lines; see GitHub link above)
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/153.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/153.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3)

#### 1. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/153.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/153.js#L4-L15)

```diff
-   36238: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => oQ,
-       g: () => AQ,
-       i: () => tQ,
-       m: () => kQ,
-       n: () => bQ,
-       o: () => eQ,
-       q: () => HQ,
-       u: () => GQ,
-       v: () => xQ,
-       w: () => MQ
+   7957: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       AdsenseForGamesSdkAdaptor: () => Sk
```

#### 2. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L17-L40` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/153.js#L8-L12) · [Before (L17-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/153.js#L17-L40)

```diff
-     var LQ = wQ(17),
-       qQ = wQ(22);
-     const oQ = "clientGameInventoryButtonsChanged",
-       DQ = new Map;
- 
-     function kQ() {
-       return [...DQ.values()].sort(((QQ, FQ) => {
-         var wQ, LQ;
-         return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
-       }))
-     }
-     let vQ = null;
- 
-     function mQ(QQ) {
-       vQ = QQ
-     }
- ... (8 more removed lines; see GitHub link above)
+     var Dk = ik(1298),
+       fk = ik(1163);
+     class Sk extends Dk.e {
+       constructor() {
+         super(), this.name = "adsense"
```

#### 3. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L42-L78` → after: `L14-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L14-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/153.js#L14-L49) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/153.js#L42-L78)

```diff
-       QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
-     }
- 
-     function bQ() {
-       return uQ
-     }
- 
-     function YQ() {
-       return kQ().filter((QQ => QQ.panel && !QQ.disabled))
-     }
- 
-     function xQ(QQ) {
-       const FQ = YQ(),
-         wQ = FQ.findIndex((QQ => QQ.id === vQ));
-       return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
-     }
- ... (21 more removed lines; see GitHub link above)
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(kk) {
+           window.adsbygoogle.push(kk)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, fk.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+           "data-ad-client": "ca-pub-5991928098122027",
+           "data-ad-frequency-hint": "120s",
+           type: "text/javascript"
+         }), console.log("Loaded adsense for games"), new Sk
+       }
+       playVideoAd(kk, ek) {
+ ... (20 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 1. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/154.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/154.js#L4)

```diff
-   40583: (QQ, FQ, wQ) => {
+   7961: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/154.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/154.js#L6)

```diff
-       openCharacterPreview: () => nQ
+       AditudeSdkAdaptor: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L8-L29` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/154.js#L8-L16) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/154.js#L8-L29)

```diff
-     var LQ = wQ(37639),
-       qQ = wQ(2676),
-       oQ = wQ(600),
-       DQ = wQ(36768),
-       kQ = wQ(2153),
-       vQ = wQ(36753),
-       mQ = wQ(39211),
-       uQ = wQ(39491),
-       HQ = wQ(40496),
-       bQ = wQ(36688),
-       YQ = wQ(39678),
-       xQ = wQ(36870),
-       AQ = wQ(39692),
-       tQ = wQ(40539),
-       eQ = wQ(36679),
-       MQ = wQ(1237),
- ... (6 more removed lines; see GitHub link above)
+     var Dk = ik(1298),
+       fk = ik(1163);
+     const Sk = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class bk extends Dk.e {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 4. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L31-L39` → after: `L18-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L18-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/154.js#L18-L78) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/154.js#L31-L39)

```diff
-       write(QQ) {
-         this.pose.pose(QQ);
-         const {
-           rotations: FQ
-         } = this.pose;
-         for (let wQ = 0; wQ < this.nodes.length; wQ++) {
-           const QQ = 4 * wQ;
-           this.nodes[wQ].rotationQuaternion.set(FQ[QQ], FQ[QQ + 1], FQ[QQ + 2], FQ[QQ + 3])
-         }
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, fk.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new bk
+       }
+       playVideoAd(kk, ek) {
+         this.playVideoOrRewarded("video", kk, kk)
+       }
+       playRewarded(kk, ek) {
+         this.playVideoOrRewarded("rewarded", kk, ek)
+       }
+       renderBanner(kk) {
+         const ek = this.getBaseDivId(kk.adId, kk.width, kk.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: kk.divId,
+ ... (45 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L4-L8)

```diff
-   40492: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       openMobLineupPreview: () => XQ,
-       openMobPreview: () => aQ,
-       openPetPreview: () => fQ
+   8700: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => rk
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L10-L37` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L8-L11) · [Before (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L10-L37)

```diff
-     var LQ = wQ(39211),
-       qQ = wQ(39491),
-       oQ = wQ(40496),
-       DQ = wQ(36870),
-       kQ = wQ(36688),
-       vQ = wQ(39678),
-       mQ = wQ(40518),
-       uQ = wQ(38009),
-       HQ = wQ(36777),
-       bQ = wQ(36753),
-       YQ = wQ(36679),
-       xQ = wQ(37911),
-       AQ = wQ(37909),
-       tQ = wQ(37639),
-       eQ = wQ(37697),
-       MQ = wQ(37665),
- ... (12 more removed lines; see GitHub link above)
+     var Dk = ik(22),
+       fk = ik(1172),
+       Sk = ik(4926),
+       bk = ik(1066);
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L39-L44` → after: `L13-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L13-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L13-L134) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L39-L44)

```diff
-     function IQ() {
-       if (null !== OQ) return OQ;
-       const QQ = document.createElement("canvas");
-       QQ.classList.add("MobPreviewCanvas");
-       const FQ = new LQ.b(QQ, !0, {
-         preserveDrawingBuffer: !0
+     function rk(kk) {
+       let {
+         note: ek
+       } = kk;
+       const {
+         t: ik
+       } = (0, fk.D)(), {
+         clientEscMenuOptions: rk
+       } = (0, Dk.n)(["clientEscMenuOptions"]);
+       return (0, bk.jsx)(Sk.e, {
+         label: ik("touchSettings:actionButtons"),
+         checked: rk.touchActionButtons,
+         onClick: kk => {
+           Dk.b.setClientEscMenuOptions({
+             touchActionButtons: kk
+           })
+ ... (106 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L46-L56` → after: `L136-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L136-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L136-L149) · [Before (L46-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L46-L56)

```diff
-       FQ.SLQ = (0, pQ.d)().Zx.engine.SLQ;
-       const wQ = new qQ.d(FQ);
-       wQ.clearColor = new DQ.b(0, 0, 0, 0), wQ.ambientColor = new DQ.Color3(1, 1, 1);
-       const mQ = new oQ.b("Tt", Math.PI / 2, Math.PI / 2, CQ, kQ.Ox.Zero(), wQ),
-         uQ = new vQ.b("light", new kQ.Ox(-.1, 1, -.3), wQ);
-       return uQ.diffuse = new DQ.Color3(1, 1, 1), uQ.specular = new DQ.Color3(1, 1, 1), uQ.groundColor = new DQ.Color3(.5, .5, .5), OQ = {
-         engine: FQ,
-         lA: wQ,
-         canvas: QQ,
-         camera: mQ
-       }, OQ
+       const Kk = (0, Fk.q)(ik, ek);
+       return (0, Lk.jsx)(mk.X, {
+         className: bk,
+         ariaLabel: Mk(Kk ? "hudLayout:showElement" : "hudLayout:hideElement", {
+           name: ak(ek, fk, Mk, Sk)
+         }),
+         pressed: !Kk,
+         onClick: () => {
+           Pk(ek, !Kk)
+         },
+         children: (0, Lk.jsx)(dk.d, {
+           name: Kk ? "eye-slash" : "eye"
+         })
+       })
```

#### 5. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L60-L62` → after: `L153-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L153-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L153-L187) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L60-L62)

```diff
-       return sQ[QQ] ??= (0, tQ.w)(QQ, IQ().lA, !0).catch((FQ => {
-         throw delete sQ[QQ], FQ
-       })), sQ[QQ]
+       var ek;
+       let {
+         id: ik,
+         elements: fk,
+         actionButtons: Sk,
+         keyNames: bk,
+         className: rk,
+         keepPlace: Pk,
+         onlyWhenMoved: Mk,
+         locked: Kk,
+         onReset: xk
+       } = kk;
+       const {
+         t: nk
+       } = (0, Dk.D)(), Uk = Ek[ik], Hk = (0, Fk.K)(null !== (ek = fk[ik]) && void 0 !== ek ? ek : Fk.m);
+       return !Uk.move && !Uk.scale || Mk && Hk ? (0, Lk.jsx)(tk, {
+ ... (19 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L66-L69` → after: `L191-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L191-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L191-L224) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L66-L69)

```diff
-       let FQ = rQ.get(QQ);
-       return FQ || (FQ = GQ.w[QQ].loadModel(IQ().lA, !1).then((QQ => (QQ.Qr(!1), QQ)), (FQ => {
-         throw rQ.delete(QQ), FQ
-       })), rQ.set(QQ, FQ)), FQ
+       let {
+         id: ek,
+         actionButtons: ik,
+         keyNames: fk,
+         className: Sk,
+         keepPlace: bk,
+         locked: rk,
+         lockable: Pk,
+         onLocked: Mk
+       } = kk;
+       const {
+         t: Kk
+       } = (0, Dk.D)();
+       return Pk || rk ? (0, Lk.jsx)(mk.X, {
+         className: Sk,
+         ariaLabel: Kk(rk ? "hudLayout:unlockElement" : "hudLayout:lockElement", {
+ ... (18 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L75-L84` → after: `L229-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L229-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L229-L233) · [Before (L75-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L75-L84)

```diff
-         mobType: qQ,
-         variation: oQ,
-         animation: DQ
-       } = QQ, vQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, CQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const WQ = null !== (FQ = null === vQ || void 0 === vQ ? void 0 : vQ.size) && void 0 !== FQ ? FQ : 1,
-         RQ = null !== (wQ = null === vQ || void 0 === vQ ? void 0 : vQ.cosmetics) && void 0 !== wQ ? wQ : [],
-         OQ = null !== (LQ = null === vQ || void 0 === vQ ? void 0 : vQ.nC) && void 0 !== LQ ? LQ : null;
-       let sQ = !1,
-         rQ = null,
-         TQ = null;
+         className: ek,
+         open: ik,
+         name: fk,
+         onToggle: Sk
+       } = kk;
```

#### 8. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L86-L122` → after: `L235-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L235-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L235-L253) · [Before (L86-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L86-L122)

```diff
-         engine: KQ,
-         lA: zQ
-       } = IQ(), lQ = zQ.onBeforeRenderObservable.add((() => {
-         var QQ;
-         null === (QQ = TQ) || void 0 === QQ || QQ.render(KQ.getDeltaTime())
-       })), jQ = null === OQ ? null : NQ(OQ).catch((QQ => (console.error(`Mob preview: could not load ${OQ}`, QQ), null)));
-       return Promise.all([UQ(qQ), jQ]).then((QQ => {
-         var FQ, wQ, LQ;
-         let [vQ, UQ] = QQ;
-         if (sQ) return;
-         const NQ = (0, pQ.d)().Zx.aN,
-           {
-             hitBoxDimensions: KQ
-           } = (0, uQ.b)(qQ),
-           zQ = SQ / Math.max(KQ.height, KQ.width);
-         if (rQ = (0, tQ.m)(qQ, zQ * WQ, !0, !0), NQ.setPosition(rQ, CQ, -KQ.height * zQ / 2, 0), NQ.setRotationEulerY(rQ, iQ), vQ.meshApi instanceof MQ.c && RQ.length > 0)
- ... (21 more removed lines; see GitHub link above)
+         t: bk
+       } = (0, Dk.D)();
+       return (0, Lk.jsx)(mk.X, {
+         className: ek,
+         ariaLabel: bk(ik ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
+           name: fk
+         }),
+         pressed: ik,
+         analyticsClick: {
+           id: "hud_layout.children",
+           value: ik ? "close" : "open"
+         },
+         onClick: () => {
+           Sk(!ik)
+         },
+         children: (0, Lk.jsx)(dk.d, {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L126-L130` → after: `L257-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L257-L260) · [Before (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L126-L130)

```diff
-       return TQ({
-         mobType: "NPC",
-         variation: null,
-         animation: QQ.animation
-       }, QQ, FQ)
+       var ik;
+       kk.contains(document.activeElement) && ek.focus({
+         preventScroll: !0
+       }), null === (ik = (0, Vk.h)()) || void 0 === ik || ik.handOverPadFocus(kk, ek)
```

#### 10. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L134-L160` → after: `L264-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L264-L266) · [Before (L134-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L134-L160)

```diff
-       let {
-         mobType: FQ,
-         variation: wQ,
-         metaInfo: LQ,
-         tamed: qQ
-       } = QQ, oQ = !1, DQ = null, kQ = 0;
-       const vQ = (0, pQ.d)(),
-         mQ = vQ.Zx.aN,
-         uQ = QQ => {
-           kQ += RQ * (QQ / 1e3) % (2 * Math.PI), mQ.setRotationEulerY(DQ, kQ)
-         };
-       return UQ(FQ).then((QQ => {
-         if (oQ) return;
-         DQ = (0, tQ.m)(FQ, WQ, !0, !0), mQ.setPosition(DQ, 0, -WQ, 0), QQ.meshApi.updateVariation(DQ, FQ, wQ);
-         const kQ = {
-           wool: "Sheared" !== LQ,
- ... (11 more removed lines; see GitHub link above)
+       const ek = kk.closest("[data-hud-row]"),
+         ik = null === ek || void 0 === ek ? void 0 : ek.querySelector(".HudElementRowName");
+       return !(!ek || !ik) && (Zk(ek, ik), !0)
```

#### 11. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L162-L188` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L268-L271) · [Before (L162-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L162-L188)

```diff
-     class lQ {
-       constructor(QQ, FQ) {
-         this.place = FQ, this.remove = null;
-         const {
-           engine: wQ,
-           lA: LQ,
-           canvas: qQ
-         } = IQ();
-         QQ.appendChild(qQ), wQ.resize(), wQ.runRenderLoop((() => {
-           LQ.render()
-         }))
-       }
-       show(QQ) {
-         var FQ;
-         null === (FQ = this.remove) || void 0 === FQ || FQ.call(this), this.remove = this.place(QQ)
-       }
- ... (11 more removed lines; see GitHub link above)
+     const gk = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
+ 
+     function Gk(kk, ek) {
+       return "joystick" === kk && !ek
```

#### 12. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L190-L212` → after: `L273-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L273-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L273-L291) · [Before (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L190-L212)

```diff
-     class jQ {
-       constructor(QQ) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new lQ(QQ, (() => () => {}))
-       }
-       show(QQ) {
-         QQ.figures !== this.view.figures && this.preload(QQ.figures), this.view = QQ, this.place()
-       }
-       resize(QQ, FQ) {
-         this.preview.resize(QQ, FQ), this.aspect = QQ / FQ, this.place()
-       }
-       close() {
-         this.preview.close();
-         for (const QQ of this.placed) null === QQ || void 0 === QQ || QQ.remove();
- ... (7 more removed lines; see GitHub link above)
+ 
+     function Nk() {
+       const {
+         t: kk
+       } = (0, Dk.D)();
+       return (0, Lk.jsx)(mk.X, {
+         className: "HudFixJoystickButton",
+         analyticsClick: {
+           id: "hud_layout.fix_joystick"
+         },
+         onClick: kk => {
+           const ek = kk.currentTarget;
+           if (!Ok(ek)) {
+             const kk = function(kk) {
+               var ek, ik;
+               const Dk = [kk.previousElementSibling, kk.nextElementSibling].find((kk => kk instanceof HTMLElement && kk.matches(gk)));
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L214-L229` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L293-L294) · [Before (L214-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L214-L229)

```diff
-           of QQ) null !== wQ && NQ(wQ).catch(FQ)
-       }
-       place() {
-         const {
-           figures: QQ,
-           shown: FQ
-         } = this.view, wQ = QQ.map(((wQ, LQ) => {
-           var qQ;
-           const oQ = null !== (qQ = this.placed[LQ]) && void 0 !== qQ ? qQ : null;
-           if (!FQ[LQ]) return null === oQ || void 0 === oQ || oQ.remove(), null;
-           const DQ = (kQ = (LQ + .5) / QQ.length, vQ = this.aspect, (.5 - kQ) * (2 * CQ * Math.tan(IQ().camera.fov / 2)) * vQ);
-           var kQ, vQ;
-           return null !== oQ && oQ.figure === wQ && oQ.x === DQ ? oQ : (null === oQ || void 0 === oQ || oQ.remove(), {
-             figure: wQ,
-             x: DQ,
-             remove: KQ(wQ, DQ)
+           Mk.b.setClientEscMenuOptions({
+             joystickMode: "fixed_shown"
```

#### 14. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L231-L234` → after: `L296-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L296-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L296-L298) · [Before (L231-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L231-L234)

```diff
-         }));
-         for (const LQ of this.placed.slice(QQ.length)) null === LQ || void 0 === LQ || LQ.remove();
-         this.placed = wQ
-       }
+         },
+         children: kk("hudLayout:fixJoystick")
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L237-L238` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L319-L320) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L237-L238)

```diff
-     function aQ(QQ) {
-       return new lQ(QQ, TQ)
+     function Pe(kk, ek) {
+       kk.replaceChildren(...[...ek.childNodes].map((kk => kk.cloneNode(!0))))
```

#### 16. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L242` → after: `L327-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L327-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L327-L360) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L242)

```diff
-       return new jQ(QQ)
+       let {
+         id: ek,
+         slot: ik,
+         icon: Dk,
+         label: Sk,
+         hidden: bk,
+         className: rk,
+         face: mk
+       } = kk;
+       const Mk = (0, fk.useRef)(null);
+       return (0, fk.useLayoutEffect)((() => {
+         mk && Mk.current && Pe(Mk.current, mk)
+       }), [mk]), (0, Lk.jsxs)("div", {
+         className: Pk()("TouchKeyHit", `TouchSlot${ik}`, rk, {
+           HudPreviewGhost: bk.has(ek)
+         }),
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L246` → after: `L364-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L364-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L364-L376) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L246)

```diff
-       return new lQ(QQ, zQ)
+       let {
+         item: ek,
+         selected: ik
+       } = kk;
+       const Dk = (0, fk.useRef)(null);
+       return (0, fk.useLayoutEffect)((() => {
+         Dk.current && Pe(Dk.current, ek)
+       }), [ek]), (0, Lk.jsx)("div", {
+         ref: Dk,
+         className: Pk()("InvenItem", {
+           Selected: ik
+         })
+       })
```

#### 18. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L248-L257` → after: `L378-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L378-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L378-L391) · [Before (L248-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L248-L257)

```diff
-   },
-   38328: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => bQ
-     });
-     var LQ = wQ(36786),
-       qQ = wQ(36797),
-       oQ = wQ(37032),
-       DQ = wQ(36803),
-       kQ = wQ(36795);
+     const xe = {
+         emotes: "face-smile",
+         perspective: "video",
+         scoreboard: "list",
+         tasks: "bars",
+         cosmetics: "shirt",
+         invite: "user-plus",
+         settings: "gear"
+       },
+       ne = kk => void 0 === kk ? {} : {
+         style: {
+           "--parked": kk
+         }
+       };
```

#### 19. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L260-L270` → after: `L394-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L394-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L394-L417) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L260-L270)

```diff
-       return `\n\t\t\t\t${(0,kQ.E)(QQ,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, kQ.I)(QQ, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, kQ.I)(QQ, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, kQ.q)(QQ, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       let {
+         id: ek,
+         hidden: ik,
+         parked: Dk,
+         unslotted: fk = !1
+       } = kk;
+       return (0, Lk.jsx)("div", {
+         className: Pk()("TopRightIcon", fe.g[ek], {
+           HudPreviewGhost: ik.has(ek),
+           [De.b]: void 0 !== Dk,
+           [De.d]: fk
+         }),
+         ...ne(Dk),
+         children: (0, Lk.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           ...me(ek),
+ ... (8 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L273-L277` → after: `L420-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L420-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L420-L481) · [Before (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L273-L277)

```diff
-     function mQ(QQ, FQ) {
-       let wQ = (0, kQ.Pb)(QQ, "skele" + (FQ - 1));
-       for (let qQ = FQ - 2; qQ >= 0; qQ--) wQ = (0, kQ.Gb)(QQ, `boneIdx == ${qQ}`, (0, kQ.Pb)(QQ, `skele${qQ}`), wQ);
-       const LQ = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,kQ.I)(QQ,"int","boneIdx",(0,kQ.Kb)(QQ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,kQ.I)(QQ,"vec3","bone",wQ)}\n\t\t\t\t${(0,kQ.I)(QQ,"vec2","pivot",(0,kQ.q)(QQ,"vec2","0.0",`${(0,kQ.Vb)(QQ,"position")}.z`))}\n\t\t\t\t${(0,kQ.ib)(QQ)?`posit … [truncated]
+     function He(kk) {
+       let {
+         portraitPhone: ek,
+         icons: ik,
+         pinnedIcon: Dk,
+         hidden: Sk,
+         moved: bk,
+         trayState: rk
+       } = kk;
+       const mk = ek ? (0, De.A)(ik) : [],
+         Mk = ik.filter((kk => "settings" === kk)),
+         Kk = ik.filter((kk => "settings" !== kk && !mk.includes(kk))).reverse(),
+         xk = mk.length > 0 && "gone" === rk,
+         nk = [...Mk, ...xk ? ["tray"] : [], ...Kk].filter((kk => "tray" === kk || Sk.has(kk) && !bk.has(kk))),
+         Uk = kk => {
+           const ek = nk.indexOf(kk);
+ ... (46 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L281` → after: `L485-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L485-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L485-L552) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L281)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,kQ.q)(QQ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       let {
+         next: ek,
+         hidden: ik
+       } = kk;
+       return (0, Lk.jsx)("div", {
+         className: Pk()("HotBarArrow", ek ? "Next" : "Previous", {
+           HudPreviewGhost: ik
+         }),
+         ...me("arrows"),
+         children: (0, Lk.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           children: (0, Lk.jsx)("div", {
+             className: "ScaleOnHover",
+             children: (0, Lk.jsx)(dk.d, {
+               name: ek ? "caret-right" : "caret-left"
+             })
+ ... (52 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L284-L289` → after: `L555-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L555-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L555-L561) · [Before (L284-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L284-L289)

```diff
-         x: 0,
-         y: 0,
-         z: 0,
-         bwQ(QQ, FQ) {
-           return this.x = QQ[FQ], this.y = QQ[FQ + 1], this.z = QQ[FQ + 2], this
-         }
+         J: "jump",
+         C: "crouch",
+         A: "attack",
+         P: "attack",
+         U: "use",
+         X: "extra",
+         G: "game"
```

#### 23. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L292-L343` → after: `L564-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L564-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L564-L565) · [Before (L292-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L292-L343)

```diff
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (QQ, FQ) => ({
-           ...(0, LQ.e)("CAPE"),
-           BLOXD_CAPE_BONES: `${QQ}`,
-           BLOXD_CAPE_MAX_Y: (0, qQ.rb)(FQ)
-         }),
-         getUniforms(QQ) {
-           return (0, oQ.e)(function(QQ) {
-             const FQ = [];
-             for (let wQ = 0; wQ < QQ; wQ++) FQ.push({
-               name: `skele${wQ}`,
-               type: "highp vec3"
-             });
-             return FQ
- ... (36 more removed lines; see GitHub link above)
+         J: "JumpKey",
+         C: "CrouchKey"
```

#### 24. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L346-L365` → after: `L569-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L569-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L569-L573) · [Before (L346-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L346-L365)

```diff
-         name: "TextSampler",
-         className: "TextSamplerMaterialPlugin",
-         priority: 60,
-         defines: () => (0, LQ.e)("TEXT_SAMPLER"),
-         getUniforms: QQ => (0, qQ.e)(vQ, "fragment", QQ),
-         bind(QQ) {
-           QQ.updateFloat(kQ, this.lodBias)
-         },
-         uniformsVersion: () => 0,
-         getCustomCode(QQ, FQ) {
-           if ("fragment" !== QQ) return null;
-           const wQ = (0, oQ.T)(FQ, `vec4 ${mQ}(sampler2D s, vec2 uv, float bias)`, `fn ${mQ}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             LQ = (0, oQ.T)(FQ, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             qQ = `${(0,oQ.bb)(FQ,"vDiffuseUV")} + uvOffset`,
-             DQ = (0, oQ.T)(FQ, `${mQ}(diffuseSampler, ${qQ}, ${(0,oQ.Pb)(FQ,kQ)})`, `${mQ}(diffuseSampler, diffuseSamplerSampler, ${qQ}, ${(0,oQ.Pb)(FQ,kQ)})`);
-           return {
- ... (4 more removed lines; see GitHub link above)
+         0: "swords",
+         1: "hammer",
+         2: "cube",
+         3: "cubes",
+         5: "cookie"
```

#### 25. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L429-L433` → after: `L576-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L576-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L576-L882) · [Before (L429-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L429-L433)

```diff
-     function eQ(QQ, FQ) {
-       return Object.assign((function(QQ, wQ, LQ, qQ) {
-         return FQ(this.featureState, QQ, wQ, LQ, qQ)
-       }), {
-         gY: QQ
+     function Ce(kk) {
+       let {
+         presence: ek,
+         portraitPhone: ik,
+         hidden: fk,
+         actionButtons: Sk,
+         joystickFixed: bk,
+         keysAbove: rk,
+         auraBar: mk,
+         trayState: Mk,
+         moved: xk
+       } = kk;
+       const {
+         t: nk
+       } = (0, Dk.D)(), {
+         faces: Uk,
+ ... (291 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L438-L446` → after: `L895-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L895-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L895-L1008) · [Before (L438-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L438-L446)

```diff
-       const FQ = class extends YQ.d {
-           constructor(FQ, wQ) {
-             const LQ = (0, AQ.jb)(FQ),
-               qQ = LQ && (0, AQ.z)(LQ, QQ.name);
-             for (var oQ = arguments.length, DQ = new Array(oQ > 2 ? oQ - 2 : 0), kQ = 2; kQ < oQ; kQ++) DQ[kQ - 2] = arguments[kQ];
-             super(FQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...DQ), !1), this.featureState = void 0, this.featureState = wQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, AQ.C)(this._material, QQ, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return QQ.className
+       var ek;
+       let {
+         selected: ik,
+         layout: fk,
+         actionButtons: Sk,
+         keyNames: bk,
+         overlaps: rk,
+         scaleCaps: Mk,
+         joystickFixed: Kk,
+         onScale: xk,
+         onHidden: nk,
+         onReset: Uk,
+         locked: Hk,
+         lockable: wk,
+         onLocked: lk,
+         extra: pk
+ ... (98 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L448-L449` → after: `L1010-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1010-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1010-L1022) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L448-L449)

```diff
-           isCompatible(QQ) {
-             return QQ === tQ.d.GLSL || QQ === tQ.d.WGSL
+         };
+       let Pk = null;
+       const mk = () => {
+           Pk !== (0 === Sk.size) && (Pk = 0 === Sk.size, null === Dk || void 0 === Dk || Dk(Pk))
+         },
+         Mk = kk => {
+           const ek = kk.cloneNode(!0);
+           if ("LINK" === ek.tagName) {
+             Sk.add(ek);
+             const kk = () => {
+               Sk.delete(ek), mk()
+             };
+             ek.addEventListener("load", kk), ek.addEventListener("error", kk), ik && ek.addEventListener("load", ik)
```

#### 28. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L452-L462` → after: `L1026-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1026-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1026-L1050) · [Before (L452-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L452-L462)

```diff
-         wQ = (0, xQ.j)(QQ);
-       for (const [LQ, qQ] of Object.entries(xQ.e)) {
-         const oQ = QQ[LQ];
-         if (oQ) {
-           const QQ = wQ[LQ];
-           Object.defineProperty(FQ.prototype, qQ, {
-             value: eQ(oQ, QQ),
-             writable: !0,
-             configurable: !0
-           })
-         }
+         Kk = () => {
+           const Dk = function(kk) {
+               const ek = [...kk.body.children].filter((kk => kk.matches(Qe)));
+               return [...kk.head.querySelectorAll(Qe), ...ek]
+             }(kk).filter(rk),
+             bk = new Set(Dk);
+           for (const [kk, ek] of fk) bk.has(kk) || (ek.remove(), fk.delete(kk), Sk.delete(ek));
+           let Pk = null;
+           for (let kk = Dk.length - 1; kk >= 0; kk--) {
+             const Sk = Dk[kk];
+             let bk = fk.get(Sk);
+             bk ? "STYLE" === Sk.tagName && bk.textContent !== Sk.textContent && (bk.textContent = Sk.textContent, null === ik || void 0 === ik || ik()) : (bk = Mk(Sk), fk.set(Sk, bk), ek.head.insertBefore(bk, Pk)), Pk = bk
+           }
+           mk()
+         };
+       Kk();
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L472-L475` → after: `L1055-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1055-L1056) · [Before (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L472-L475)

```diff
-       let LQ = CQ.get(wQ);
-       LQ || (LQ = new Map, CQ.set(wQ, LQ));
-       const {
-         url: qQ
+       let {
+         keysAbove: Dk
```

#### 30. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L477-L508` → after: `L1058-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1058-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1058-L1061) · [Before (L477-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L477-L508)

```diff
-       let oQ = LQ.get(qQ);
-       return oQ || (oQ = async function(QQ, FQ, wQ) {
-         const {
-           width: LQ,
-           height: qQ
-         } = QQ.getSize(), oQ = Math.round(qQ / LQ), kQ = FQ && FQ.byteLength === LQ * LQ * oQ * 4 ? FQ : QQ._readPixelsSync();
-         return new cQ.e(kQ, LQ, LQ, oQ, pQ.b.TEXTUREFORMAT_RGBA, wQ, !0, !1, DQ.b.NEAREST_NEAREST_MIPLINEAR)
-       }(QQ, FQ, wQ), LQ.set(qQ, oQ), oQ.catch((() => {
-         LQ.delete(qQ)
-       }))), oQ
-     }
-     var iQ = wQ(37399);
-     class WQ extends(MQ(vQ.l)) {
-       constructor(QQ, FQ) {
-         super(QQ, FQ), FQ.textures.forEach(((QQ, FQ) => {
-           QQ.mirror.onLoadObservable.add((QQ => {
- ... (16 more removed lines; see GitHub link above)
+       const fk = [...kk.documentElement.classList].filter((kk => !qe.has(kk) && !ze.has(kk))),
+         Sk = [...ek.documentElement.classList].filter((kk => ze.has(kk))),
+         bk = [Fe, ue.hotbar, ue.hasShop, ue.hasBag];
+       Dk && bk.push(ue.keysAbove), ek.documentElement.className = [...fk, ...bk, ...Sk].join(" ")
```

#### 31. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L510-L526` → after: `L1063-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1063-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1063-L1080) · [Before (L510-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L510-L526)

```diff
-     var RQ = wQ(40554),
-       OQ = wQ(39731),
-       sQ = wQ(36688),
-       rQ = wQ(40563),
-       IQ = wQ(39835),
-       UQ = wQ(39725),
-       NQ = wQ(40518),
-       TQ = wQ(37152),
-       KQ = wQ(40571);
-     class zQ extends RQ.c {
-       getData() {
-         return null
-       }
-       _rebuild() {}
-       restore() {
-         super._rebuild()
- ... (1 more removed lines; see GitHub link above)
+     const he = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
+ 
+     function ae(kk, ek, ik, Dk, fk) {
+       const Sk = (0, Fk.x)(ik, Dk, "joystick"),
+         bk = (0, fe.u)((0, fe.H)(ik, Dk, fk), Dk),
+         rk = bk.classes.filter((kk => !Ie.has(kk))),
+         Pk = ek.documentElement;
+       (0, fe.M)({
+         ...bk,
+         classes: rk
+       }, {
+         vars: Pk,
+         safe: Pk,
+         classes: Pk
+       });
+       const mk = (0, fe.A)(ik.hudLayouts[Dk].hudSafe, window.innerWidth, window.innerHeight, We(), (0, fe.J)(ek));
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L528-L556` → after: `L1082-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1082-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1082-L1084) · [Before (L528-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L528-L556)

```diff
-     const lQ = {
-       Mesh: rQ.c,
-       TransformNode: NQ.e,
-       Dx: RQ.c,
-       VertexBuffer: RQ.d,
-       BoundingInfo: OQ.d,
-       Ox: sQ.Ox,
-       ArenaBuffer: zQ,
-       SubMesh: UQ.c,
-       VertexData: IQ.c,
-       MirroredGeometry: KQ.e,
-       meshFromArrays: KQ.i,
-       plainMeshFromArrays: KQ.k
-     };
-     (0, TQ.d)(lQ);
-     var jQ = wQ(37019);
- ... (13 more removed lines; see GitHub link above)
+ 
+     function We() {
+       return (0, fe.G)(Mk.b.get("notchSize"), window.innerWidth, window.innerHeight)
```

#### 33. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L559-L589` → after: `L1087-L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1087-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1087-L1097) · [Before (L559-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L559-L589)

```diff
-     function XQ(QQ, FQ) {
-       if (!(FQ instanceof LQ.StandardMaterial) || FQ.specularTexture) return;
-       const {
-         r: wQ,
-         g: qQ,
-         b: oQ
-       } = FQ.specularColor;
-       0 === wQ && 0 === qQ && 0 === oQ && (QQ.SPECULARTERM = !1)
-     }(0, uQ.g)({
-       disableUnusedSpecularTerm: XQ
-     });
-     var fQ = wQ(36897),
-       VQ = wQ(37158);
-     const hQ = new RegExp(`^#define ${mQ.c}\\s*$`, "m");
-     class JQ extends(MQ(mQ.j)) {
-       constructor(QQ, FQ) {
- ... (15 more removed lines; see GitHub link above)
+     function te(kk) {
+       return (0, fe.l)(We(), (0, fe.J)(kk))
+     }
+ 
+     function Xe(kk, ek, ik) {
+       const Dk = kk.documentElement.style,
+         fk = (0, fe.C)(ek),
+         Sk = Dk.getPropertyValue(fk);
+       try {
+         return ik((kk => {
+           Dk.setProperty(fk, String(kk))
```

#### 34. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L591-L604` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1099-L1100) · [Before (L591-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L591-L604)

```diff
-       }
-       prewarmDither(QQ) {
-         if (this.kx || QQ.vW()) return !1;
-         const FQ = new UQ.c(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
-         this.featureState.prewarmingDither = !0;
-         try {
-           this._material.isReadyForSubMesh(QQ, FQ)
-         } finally {
-           this.featureState.prewarmingDither = !1
-         }
-         return null !== FQ.effect
-       }
-       dispose(QQ) {
-         this.kx = !0, super.dispose(QQ)
+       } finally {
+         "" === Sk ? Dk.removeProperty(fk) : Dk.setProperty(fk, Sk)
```

#### 35. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L610` → after: `L1105-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1105-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1105-L1112) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L610)

```diff
-       EQ.set(QQ, FQ)
+       const [ik, Dk] = Xe(kk, "hotbar", (ek => {
+         const ik = ik => {
+           var Dk, fk;
+           return ek(ik), null !== (Dk = null === (fk = kk.querySelector(".HotBarGameItemsContainer")) || void 0 === fk ? void 0 : fk.getBoundingClientRect().width) && void 0 !== Dk ? Dk : 0
+         };
+         return [ik(1), ik(Fk.e)]
+       }));
+       return ik <= 0 ? Fk.e : Math.min(Fk.e, Math.max(1, Math.floor(Dk / ik / ek + 1e-6) * ek))
```

#### 36. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L612-L774` → after: `L1114-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1114-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1114-L1152) · [Before (L612-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L612-L774)

```diff
-     nQ(kQ.e, GQ), nQ(vQ.l, WQ), nQ(mQ.j, JQ), nQ(uQ.h, aQ), (0, HQ.d)({
-       create: (QQ, FQ) => {
-         const wQ = new LQ.StandardMaterial(QQ.name, FQ);
-         return (0, fQ.p)(QQ, wQ), wQ.detailMap._pluginDefineNames
-       },
-       write: (QQ, FQ, wQ) => {
-         (0, fQ.S)(QQ.mirror, FQ, wQ)
-       },
-       addFeature: (QQ, FQ, wQ) => {
-         const LQ = EQ.get(FQ.feature);
-         if (!LQ) throw new Error(`${FQ.feature.name} has no plugin class (registerPluginClass)`);
-         new LQ(QQ.mirror, FQ.state, ...wQ)
-       },
-       texture: (QQ, FQ, wQ) => {
-         let {
-           url: LQ,
- ... (147 more removed lines; see GitHub link above)
+     const ce = 3,
+       Te = .5,
+       oe = kk => kk.right - kk.left;
+     const Ze = (kk, ek) => Math.abs((0, ie.c)(kk).x - (0, ie.c)(ek).x) + Math.abs((0, ie.c)(kk).y - (0, ie.c)(ek).y) + Math.abs(oe(kk) - oe(ek));
+ 
+     function Oe(kk, ek, ik, Dk, fk) {
+       let {
+         canKeep: Sk = () => !0,
+         passes: bk = ce,
+         before: rk,
+         keysAboveOf: Pk
+       } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
+       const mk = void 0 !== Pk && Pk(kk) !== Pk(ek),
+         Mk = ek.hudLayouts[ik].hudLocked.filter((kk => Sk(kk) && !(mk && "inventory" === kk))),
+         Kk = new Set(Mk);
+       if (0 === Kk.size) return ek;
+ ... (23 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L776-L785` → after: `L1154-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1154-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1154-L1162) · [Before (L776-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L776-L785)

```diff
-         return FQ._updatable = DQ, FQ._boundingInfo = new oQ.d(this.extend.minimum, this.extend.maximum), FQ.relink(), FQ
-       }
-       static mergeMeshes(QQ, FQ, wQ, LQ, qQ, oQ) {
-         const vQ = QQ[0].iN(),
-           mQ = new kQ.c(QQ[0].name + "_merged", vQ),
-           HQ = new uQ(DQ.c.RandomId(), vQ, void 0, !1, mQ);
-         try {
-           if (!kQ.c.MergeMeshes(QQ, FQ, wQ, mQ, qQ, oQ)) return mQ.dispose(), null
-         } catch (bQ) {
-           throw mQ.dispose(), bQ
+         if (0 === kk.size) break;
+         let fk = lk;
+         for (const [ek, Dk] of kk) fk = (0, Fk.eb)(fk, ik, ek, Dk);
+         const Sk = Uk(fk);
+         if (!Sk) return ek;
+         let bk = lk;
+         for (const [ek, Dk] of kk) {
+           const kk = Sk[ek];
+           kk && Ze(Hk[ek], kk) < Ze(Hk[ek], wk[ek]) - Te ? bk = (0, Fk.eb)(bk, ik, ek, Dk) : Kk.delete(ek)
```

#### 38. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L787` → after: `L1164-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1164-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1164-L1166) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L787)

```diff
-         return HQ.relink(), mQ
+         if (bk === lk) break;
+         const rk = [...kk.keys()].every((kk => Kk.has(kk)));
+         if (lk = bk, wk = rk ? Sk : Uk(lk), !wk) return ek
```

#### 39. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L789-L793` → after: `L1168-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1168-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1168-L1390) · [Before (L789-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L789-L793)

```diff
-       removeVerticesData(QQ) {
-         this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
-       }
-       dispose() {
-         this.release(), super.dispose()
+       return fk(lk), lk
+     }
+ 
+     function ge(kk, ek, ik, Dk, fk) {
+       let [Sk, bk, rk] = ek;
+       const Pk = Fk.r[kk],
+         mk = {};
+       Pk.scale && oe(Dk) > 0 && Math.abs(oe(ik) - oe(Dk)) > Te && (mk.scale = Math.max(Fk.i, Math.min(Fk.e, rk * oe(ik) / oe(Dk))));
+       const Mk = (0, ie.c)(ik).x - (0, ie.c)(Dk).x,
+         Kk = (0, ie.c)(ik).y - (0, ie.c)(Dk).y;
+       return Pk.move && (Math.abs(Mk) > Te || Math.abs(Kk) > Te) && (mk.dx = Sk + Mk / fk.width, mk.dy = bk + Kk / fk.height), void 0 === mk.scale && void 0 === mk.dx ? null : mk
+     }
+     let Ge = 0;
+ 
+     function Ne() {
+       return Ge > 0
+ ... (207 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L795-L797` → after: `L1392-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1392-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1392-L1412) · [Before (L795-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L795-L797)

```diff
-       releaseUnlessInstanced(QQ) {
-         var FQ;
-         QQ && null !== (FQ = this.getVertexBuffer(QQ)) && void 0 !== FQ && FQ.getIsInstanced() || this.release()
+     }
+ 
+     function ii(kk, ek) {
+       return Object.keys(kk).filter((kk => kk !== ek)).map((ek => kk[ek]))
+     }
+ 
+     function Di(kk) {
+       const ek = [],
+         ik = ek => (0, Fk.M)(ek) && !kk.documentElement.classList.contains((0, fe.x)(ek));
+       for (const bk of kk.querySelectorAll(`[${hk}]`)) {
+         const kk = ik(bk.getAttribute(hk)) ? bk.querySelector(".ScaleOnHover") : null,
+           Dk = (null !== kk && void 0 !== kk ? kk : bk).getBoundingClientRect();
+         (Dk.width > 0 || Dk.height > 0) && ek.push({
+           id: bk.getAttribute(hk),
+           box: {
+             left: Dk.left,
+ ... (5 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L799-L800` → after: `L1414-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1414-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1414-L1430) · [Before (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L799-L800)

```diff
-       release() {
-         this.model && ((0, mQ.B)(this.model), this.model = null)
+       const Dk = kk => (0, ie.A)(ek.filter((ek => {
+           let {
+             id: ik
+           } = ek;
+           return kk(ik)
+         })).map((kk => {
+           let {
+             box: ek
+           } = kk;
+           return ek
+         }))),
+         fk = {};
+       for (const bk of new Set(ek.map((kk => kk.id)))) fk[bk] = Dk((kk => kk === bk));
+       const Sk = Dk((kk => Ik.has(kk)));
+       return Sk && (fk.cluster = Sk), {
+         boxes: fk,
+ ... (1 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L805-L819` → after: `L1435-L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1435-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1435-L1535) · [Before (L805-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L805-L819)

```diff
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kQ.c(QQ, wQ);
-       const qQ = (0, mQ.m)(FQ),
-         {
-           positions: oQ,
-           normals: HQ,
-           uvs: bQ,
-           indices: YQ,
-           named: xQ = {}
-         } = FQ,
-         AQ = new vQ.c;
-       AQ.positions = oQ, AQ.normals = null !== HQ && void 0 !== HQ ? HQ : null, AQ.uvs = null !== bQ && void 0 !== bQ ? bQ : null, AQ.indices = YQ;
-       const tQ = new uQ(DQ.c.RandomId(), wQ, AQ, !1, LQ);
-       for (const {
-           kind: DQ,
-           components: kQ
+       const Dk = ek.right - ek.left,
+         fk = ek.bottom - ek.top;
+       return Xe(kk, "cluster", (ek => {
+         const Sk = ik => {
+             ek(ik);
+             const Dk = [...kk.querySelectorAll(`[${hk}]:not(.HudPreviewGhost)`)].filter((kk => Ik.has(kk.getAttribute(hk)))).map((kk => {
+                 const ek = kk.getBoundingClientRect();
+                 return {
+                   left: ek.left,
+                   top: ek.top,
+                   right: ek.right,
+                   bottom: ek.bottom
+                 }
+               })),
+               fk = (0, ie.A)(Dk);
+             return fk ? {
+ ... (85 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L821-L822` → after: `L1537-L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1537-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1537-L1545) · [Before (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L821-L822)

```diff
-         of qQ.vertexAttributes) DQ in xQ && LQ.setVerticesData(DQ, xQ[DQ], !1, kQ);
-       return tQ.link(qQ), LQ
+       }), [mk, Ak, Pk, bk]), {
+         doc: mk,
+         boxes: Kk.boxes,
+         pieces: Kk.pieces,
+         insets: nk,
+         keysAbove: Hk,
+         ready: lk,
+         settled: yk
+       }
```

#### 44. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L825-L832` → after: `L1562-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1562-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1562-L1652) · [Before (L825-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L825-L832)

```diff
-     function bQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const qQ = new kQ.c(QQ, wQ),
-         {
-           positions: oQ,
-           normals: DQ,
-           uvs: mQ,
-           indices: uQ
+     function Mi(kk, ek, ik, Dk, fk) {
+       const Sk = ik[kk],
+         bk = (Sk.left + Sk.right) / 2,
+         rk = (Sk.top + Sk.bottom) / 2,
+         Pk = (7.5 * ek.length + 14) / Dk,
+         mk = 18 / Dk,
+         Mk = {
+           Above: {
+             left: bk - Pk / 2,
+             top: Sk.top - mk,
+             right: bk + Pk / 2,
+             bottom: Sk.top
+           },
+           Below: {
+             left: bk - Pk / 2,
+             top: Sk.bottom,
+ ... (75 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L834-L839` → after: `L1654-L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1654-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1654-L1898) · [Before (L834-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L834-L839)

```diff
-       return Object.assign(new vQ.c, {
-         positions: oQ,
-         normals: DQ,
-         uvs: mQ,
-         indices: uQ
-       }).applyToMesh(qQ, LQ), qQ
+         const Dk = ik.find((kk => "inventory" === kk.id));
+         if (!Dk || !ek.inventory) return ek;
+         const fk = (0, ie.c)(ek.inventory),
+           Sk = oe(Dk.box) / 2,
+           bk = (Dk.box.bottom - Dk.box.top) / 2;
+         return {
+           ...ek,
+           inventory: {
+             left: fk.x - Sk,
+             top: fk.y - bk,
+             right: fk.x + Sk,
+             bottom: fk.y + bk
+           }
+         }
+       }(Di(Wk))) : null), [Wk, Zk, Ok]), Gk = (0, fk.useCallback)((kk => !!Wk && (Ok(kk), Si(Wk))), [Wk, Ok]), Nk = (0, fk.useRef)(null), Jk = (0, fk.useRef)(null), ke = (0, fk.useRef)(ik);
+       ke.current = ik;
+ ... (229 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L841-L851` → after: `L1900-L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1900-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1900-L1907) · [Before (L841-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L841-L851)

```diff
-   },
-   8582: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => uQ,
-       g: () => kQ,
-       h: () => vQ
-     });
-     var LQ = wQ(2148),
-       qQ = wQ(1254),
-       oQ = wQ(2153);
-     const DQ = ",";
+ 
+     function ni(kk, ek) {
+       (0, fk.useEffect)((() => {
+         var ik;
+         null === (ik = kk.current) || void 0 === ik || ik.toggleAttribute("inert", ek)
+       }), [kk, ek])
+     }
+     const Ui = "hudFullScreen";
```

#### 47. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L854-L861` → after: `L1910-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1910-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L1910-L2026) · [Before (L854-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L854-L861)

```diff
-       if (!QQ) return [];
-       const FQ = new Set,
-         wQ = [];
-       for (const LQ of QQ.split(DQ)) {
-         const QQ = LQ.trim();
-         if ((0, oQ.g)(QQ) && !FQ.has(QQ) && (FQ.add(QQ), wQ.push(QQ), wQ.length >= qQ.q)) break
-       }
-       return wQ
+       let {
+         onScale: ek,
+         onHidden: ik,
+         onReset: Sk,
+         locked: bk,
+         lockable: rk,
+         onLocked: Pk,
+         onClose: Mk,
+         ...Kk
+       } = kk;
+       const {
+         t: xk
+       } = (0, Dk.D)(), nk = (0, fk.useRef)(null);
+       (0, Jk.u)("popup", nk, Mk),
+       function(kk) {
+         const ek = (0, fk.useRef)(kk);
+ ... (101 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L865-L869` → after: `L2031-L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L2031-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L2031-L2323) · [Before (L865-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L865-L869)

```diff
-       const FQ = new Set,
-         wQ = [];
-       for (const LQ of QQ)
-         if ((0, oQ.g)(LQ) && !FQ.has(LQ) && (FQ.add(LQ), wQ.push(LQ), wQ.length >= qQ.q)) break;
-       return wQ.join(DQ)
+       let {
+         info: ek,
+         tuple: ik,
+         props: fk
+       } = kk;
+       const {
+         t: Sk
+       } = (0, Dk.D)();
+       return (0, Lk.jsx)(nk.m, {
+         name: Sk("hudLayout:size"),
+         min: Fk.i,
+         max: Fk.e,
+         step: je,
+         initValue: ik[2],
+         disabled: fk.locked.has(ek.id),
+         selectableMax: fk.scaleCaps[ek.id],
+ ... (277 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L873` → after: `L2327-L2856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR2327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L2327-L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L2327-L2856) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L873)

```diff
-       return vQ(oQ.d)
+       var kk, ek;
+       const {
+         t: ik
+       } = (0, Dk.D)(), Sk = (0, Fk.bb)(), {
+         clientEscMenuOptions: bk
+       } = (0, Mk.n)(["clientEscMenuOptions"]), rk = (0, Li.g)(), Pk = Sk.hudLayouts[rk], [Kk, xk] = (0, fk.useState)(null), {
+         rowIconsOpen: Uk,
+         onRowIconsOpen: Hk,
+         select: wk
+       } = function(kk, ek) {
+         const [ik, Dk] = (0, fk.useState)((() => Fk.B.some((ek => void 0 !== kk.hudElements[ek] || kk.hudLocked.includes(ek))))), Sk = (0, fk.useCallback)((kk => {
+           ek(kk), (0, Fk.M)(kk) && Dk(!0)
+         }), [ek]);
+         return {
+           rowIconsOpen: ik,
+           onRowIconsOpen: Dk,
+ ... (514 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L877-L878` → after: `L2860-L2887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR2860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L2860-L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L2860-L2887) · [Before (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L877-L878)

```diff
-       var FQ;
-       return "emote" === QQ ? mQ() : null !== (FQ = HQ[QQ][0]) && void 0 !== FQ ? FQ : bQ[QQ]
+       let {
+         title: ek,
+         defaultOpen: ik,
+         children: Dk
+       } = kk;
+       const [Sk, bk] = (0, fk.useState)(ik);
+       return (0, Lk.jsxs)("div", {
+         className: Pk()("ControlsSection", {
+           Collapsed: !Sk
+         }),
+         children: [(0, Lk.jsxs)("div", {
+           className: "ControlsSectionHeader",
+           "data-pad-focusable": !0,
+           onClick: () => {
+             bk(!Sk)
+           },
+ ... (12 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L880` → after: `L2889-L3211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L2889-L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L2889-L3211) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L880)

```diff
-     const HQ = qQ.w.reduce(((QQ, FQ) => {
+ 
+     function Wi(kk) {
+       let {
+         noaAction: ek,
+         forceUpdate: ik,
+         clashesWith: rk,
+         showPadGlyph: Mk
+       } = kk;
+       const {
+         t: Kk
+       } = (0, Dk.D)(), xk = (0, lk.e)(ek), [nk, Uk] = (0, fk.useState)(!1), [Hk, pk] = (0, fk.useState)("controls:clickToEnterNewBinding"), [yk, Yk] = (0, fk.useState)(null), [Ck, Ak] = (0, fk.useState)(null), jk = (0, fk.useRef)(null);
+       (0, fk.useEffect)((() => {
+         nk && jk.current && jk.current.focus()
+       }), [nk]);
+       const sk = Sk.u[ek].filter((kk => bk.j[kk]));
+       let dk = null;
+ ... (307 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L882-L884` → after: `L3213-L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR3213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L3213-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L3213-L3269) · [Before (L882-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L882-L884)

```diff
-         for (const oQ in LQ.d[FQ]) {
-           var qQ;
-           "default" === (null === (qQ = (0, LQ.i)(FQ, oQ)) || void 0 === qQ ? void 0 : qQ.cosmeticPack) && wQ.push(oQ)
+         for (const ik of Pk(kk)) !rk(ik) && Sk(ik) && ek.push(ik);
+         return ek
+       },
+       Mk = new WeakMap,
+       Kk = kk => {
+         const ek = Mk.get(kk);
+         if (ek && xk(ek, kk)) return !0;
+         for (const ik of Pk(kk))
+           if (!rk(ik) && Sk(ik)) return Mk.set(kk, ik), !0;
+         return Mk.delete(kk), !1
+       },
+       xk = (kk, ek) => ek.contains(kk) && kk.matches(Dk) && !rk(kk) && Sk(kk),
+       nk = (kk, ek) => xk(kk, ek) && !bk(kk),
+       Uk = kk => {
+         for (const ek of kk.querySelectorAll("[data-pad-initial-area]"))
+           if (!fk(ek, !1)) return !0;
+ ... (41 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L886-L888` → after: `L3271-L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L3271-L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/155.js#L3271-L3382) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/155.js#L886-L888)

```diff
-         return QQ[FQ] = wQ, QQ
-       }), {}),
-       bQ = qQ.w.reduce(((QQ, FQ) => (QQ[FQ] = Object.keys(LQ.d[FQ])[0], QQ)), {})
+       },
+       Mk = (kk, ek, ik) => ({
+         bubbles: !0,
+         cancelable: !0,
+         composed: !0,
+         view: window,
+         clientX: kk.x,
+         clientY: kk.y,
+         screenX: kk.x,
+         screenY: kk.y,
+         button: ek,
+         buttons: ik,
+         pointerId: 1,
+         pointerType: "mouse",
+         isPrimary: !0
+       }),
+ ... (96 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (91 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 1. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L55` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L4) · [Before (L4-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4-L55)

```diff
-   38642: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
-     }
-     wQ.d(FQ, {
-       b: () => LQ
-     })
-   },
-   38620: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => oQ,
-       e: () => DQ
-     });
-     var LQ = wQ(22);
-     let qQ = !1;
- 
- ... (36 more removed lines; see GitHub link above)
+   8624: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L59-L1627` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L8) · [Before (L59-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L59-L1627)

```diff
-       g: () => xQ
-     });
-     var LQ = wQ(2753);
-     const qQ = 0,
-       oQ = 2,
-       DQ = 3,
-       kQ = 4;
-     class vQ {
-       constructor(QQ, FQ) {
-         this.width = QQ, this.MH = FQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * FQ)
-       }
-       push(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wQ = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
-         for (let LQ = 0; LQ < this.width; LQ++) wQ[LQ] = QQ[FQ + LQ];
-         return this.next = (this.next + 1) % this.MH, this.size = Math.min(this.size + 1, this.MH), wQ
- ... (1553 more removed lines; see GitHub link above)
+       j: () => Vk
```

#### 3. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1629-L1997` → after: `L10-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L10-L24) · [Before (L1629-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L1629-L1997)

```diff
-     var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ, nQ, gQ, PQ, ZQ, yQ, BQ, dQ, QF, FF, wF, LF, qF, oF, DF, kF, vF, mF, uF, HF, bF, YF, xF, AF, tF, eF, MF,  … [truncated]
-       dF = wQ(36762),
-       Qw = wQ(38579),
-       Fw = wQ(38582),
-       ww = wQ(8877),
-       Lw = wQ(617),
-       qw = wQ(609),
-       ow = wQ(36419);
-     let Dw = (LQ = (0, ww.type)("number"), qQ = (0, ww.type)("number"), oQ = (0, ww.type)("number"), DQ = (0, ww.type)("number"), kQ = (0, ww.type)("number"), vQ = (0, ww.type)("number"), mQ = (0, ww.type)("string"), uQ = class extends ww.Schema {
-         constructor() {
-           super(...arguments), (0, Qw.e)(this, "id", HQ, this), (0, Qw.e)(this, "amount", bQ, this), (0, Qw.e)(this, "x", YQ, this), (0, Qw.e)(this, "y", xQ, this), (0, Qw.e)(this, "z", AQ, this), (0, Qw.e)(this, "size", tQ, this), (0, Qw.e)(this, "attributes", eQ, this)
-         }
-       }, HQ = (0, Fw.c)(uQ.prototype, "id", [LQ], {
-         configurable: !0,
-         enumerable: !0,
-         writable: !0,
- ... (353 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(4482),
+       Sk = ik(1095),
+       bk = ik(1406),
+       rk = ik(26),
+       Pk = ik(3398),
+       mk = ik(2201),
+       Mk = ik(1218),
+       Kk = ik(8658),
+       xk = ik(1893),
+       nk = ik(1922),
+       Uk = ik(1172),
+       Hk = ik(22),
+       wk = ik(1614),
+       lk = ik(1021),
```

#### 4. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1999-L2599` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L26-L31) · [Before (L1999-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L1999-L2599)

```diff
-       rw = wQ(37483),
-       Iw = wQ(36677),
-       Uw = wQ(37611),
-       Nw = wQ(37657);
-     class Tw {
-       constructor(QQ, FQ) {
-         this.bloxd = QQ, this.eId = FQ, this.dH = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
-       }
-       initClient(QQ) {
-         var FQ, wQ, LQ;
-         this.colyseusEntity = QQ, this.meshKind = QQ.meshKind, this.meshOpts = QQ.meshOpts, this.leaderboardTop = QQ.leaderboardTop, this.dH.bC.add([QQ.x, QQ.y, QQ.z], 1, 1, null, null, !1, !1, this.eId), this.dH.bC.pT(this.eId, "smoothToServerPos");
-         const qQ = "Person" === this.meshKind;
-         this.dH.bC.pT(this.eId, "meshRotation", {
-           isServerControlled: !0,
-           ...qQ ? {
-             defaultRotationsPerSecond: .5
- ... (585 more removed lines; see GitHub link above)
+       yk = ik(8631),
+       Yk = ik(8637),
+       Lk = ik(8645),
+       Ck = ik(8556),
+       Ak = ik(8647),
+       jk = (ik(8653), ik(1066));
```

#### 5. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2603-L2861` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L35) · [Before (L2603-L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L2603-L2861)

```diff
-       return null !== dw || (dw = {
-         ...Object.fromEntries(qw.l.map((QQ => {
-           const {
-             Fm: FQ
-           } = (0, Vw.e)(QQ);
-           return [QQ, FQ]
-         }))),
-         Pebble: xw.b,
-         Snowball: xw.b,
-         "Snowball Launcher": xw.b,
-         "Reinforced Pebble": xw.b,
-         Bullet: xw.b,
-         "Reinforced Ball": xw.b,
-         Ball: xw.b,
-         Mango: xw.b,
-         "Moonstone Orb": xw.b,
- ... (243 more removed lines; see GitHub link above)
+       return null !== sk
```

#### 6. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2922-L2923` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L39) · [Before (L2922-L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L2922-L2923)

```diff
-       var QQ, FQ;
-       return !(null === (QQ = (0, RQ.c)().client) || void 0 === QQ || null === (FQ = QQ.freeCameraController) || void 0 === FQ || !FQ.movesFly())
+       return "pad" === sk
```

#### 7. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2976` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L43) · [Before (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L2976)

```diff
-       OF = function() {}
+       return "inGame" === Hk.b.get("gameState") && !(0, wk.s)()
```

#### 8. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2980-L3087` → after: `L47-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L47-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L47-L68) · [Before (L2980-L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L2980-L3087)

```diff
-       function FQ() {
-         return QQ.bC.owQ(QQ.WK)
-       }
-       FF(QQ.inputs.down), FF(QQ.inputs.up);
-       for (const LQ of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
-         const FQ = (FQ, wQ) => {
-           var qQ, oQ;
-           if (QF()) {
-             var DQ;
-             const qQ = dQ[LQ];
-             var kQ, vQ;
-             if (qQ) null === (kQ = (0, RQ.c)().client) || void 0 === kQ || null === (vQ = kQ.freeCameraController) || void 0 === vQ || vQ.handlefreeCamKeyPress(qQ, FQ, wQ);
-             return void(wQ || null !== (DQ = (0, RQ.c)().client) && void 0 !== DQ && DQ.isReplayMode() || (QQ.bC.HwQ()[LQ] = !1))
-           }
-           if (null !== (qQ = (0, RQ.c)().client) && void 0 !== qQ && null !== (oQ = qQ.freeCameraController) && void 0 !== oQ && oQ.isKeyPressOverriden(FQ)) return;
-           QQ.bC.HwQ()[LQ] = wQ
- ... (92 more removed lines; see GitHub link above)
+       return (0, Yk.p)(kk, Mk.o, Yk.d, Yk.f, Yk.g)
+     }
+     const qk = (0, Dk.memo)((function() {
+       const {
+         t: kk
+       } = (0, Uk.D)(), {
+         userContext: ek
+       } = (0, Sk.d)(), [ik, Hk] = (0, Dk.useState)(null), [lk, dk] = (0, Dk.useState)(null), Vk = (0, Dk.useRef)(null), qk = (0, Dk.useCallback)((kk => {
+         Vk.current = kk, dk(kk)
+       }), []), Ik = (0, Dk.useRef)(0), zk = (0, Dk.useRef)(null), Qk = (0, Dk.useRef)({
+         x: 0,
+         y: 0
+       }), [vk, Ek] = (0, Dk.useState)(0), hk = (0, Dk.useMemo)((() => function(kk) {
+         const ek = [];
+         for (let Dk = 0; Dk < Mk.o; Dk++) {
+           var ik;
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3089-L3101` → after: `L70-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L70-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L70-L102) · [Before (L3089-L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3089-L3101)

```diff
-       const hQ = QQ => {
-           (0, LQ.sendColyMessage)(uQ.kh, QQ, !0)
-         },
-         qF = QQ => {
-           (0, LQ.sendColyMessage)(uQ.oh, {
-             Zm: QQ,
-             ym: kF()
-           }, !0)
-         };
-       for (const LQ of ["SpecialAction1", "SpecialAction2"]) QQ.inputs.down.on(LQ, (() => {
-         hQ(LQ)
-       })), QQ.inputs.up.on(LQ, (() => {
-         qF(LQ)
+       const ak = (0, Dk.useRef)(!1),
+         Wk = (0, Dk.useCallback)((function(kk) {
+           let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           "pad" === kk && (0, Lk.g)(), ak.current = ek, Qk.current = {
+             x: 0,
+             y: 0
+           }, qk(null), Hk(kk)
+         }), [qk]),
+         tk = (0, Dk.useCallback)((() => {
+           Hk(null), qk(null), Qk.current = {
+             x: 0,
+             y: 0
+           }
+         }), [qk]),
+         Xk = (0, Dk.useCallback)((kk => {
+           if (Date.now() < Ik.current) return;
+ ... (17 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3104-L3130` → after: `L105-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L105-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L105-L107) · [Before (L3104-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3104-L3130)

```diff
-         const QQ = FQ();
-         QQ.isGun() && QQ.reload(Date.now())
-       };
-       QQ.inputs.down.on("ReloadGun", DF);
-       const kF = () => {
-         let FQ = "a";
-         return QQ.physics.testSolid.toString().includes("pb") || (FQ = "b"), FQ
-       };
-       QQ.inputs.down.on("OpenInventory", (QQ => {
-         QQ.preventDefault(), (0, nQ.w)(QQ, "inventory", (0, fQ.c)((0, RQ.d)()))
-       })), QQ.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
-       const vF = QQ => {
-         xQ.l.GA("DropItemKeyPressed", QQ)
-       };
-       QQ.inputs.down.on("DropItem", (() => {
-         vF(QQ.bC.HwQ().crouch)
- ... (11 more removed lines; see GitHub link above)
+         const kk = Vk.current,
+           ek = null !== kk ? hk[kk] : null;
+         null !== ek && "pad" === ik && Date.now() < Ik.current || (tk(), null !== ek && Xk(ek))
```

#### 11. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3132-L3143` → after: `L109-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L109-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L109-L124) · [Before (L3132-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3132-L3143)

```diff
-       for (let LQ = 1; LQ <= 10; LQ++) QQ.inputs.down.on("HotBarSlot" + LQ.toString(), (() => {
-         uF(LQ)
-       }));
-       QQ.inputs.down.on("OpenTasksAndLeaderboard", (FQ => {
-         const wQ = (0, gQ.j)();
-         wQ ? (0, nQ.y)(FQ, !0, wQ) : (0, nQ.w)(FQ, "retentionFeatures", !(!QQ.mC._tasks && !QQ.mC._availableLeaderboards))
-       })), QQ.inputs.down.on("OpenCodeEditor", (FQ => {
-         (0, nQ.y)(FQ, (0, sQ.b)((0, OQ.c)()), (() => {
-           xQ.l.GA("EditLobbyCode", QQ.bC.Qp(QQ.WK).map(Math.floor))
-         }))
-       })), QQ.inputs.bind("ToggleFullCoordinateOverlay", "F3"), QQ.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
-         xQ.l.GA("toggleFullCoordinateOverlay")
+       (0, bk.c)("emoteWheelPadAim", (kk => {
+         if ("pad" !== ik) return;
+         const ek = (0, Yk.C)(kk, Mk.o, Vk.current);
+         qk(null !== ek && null !== hk[ek] ? ek : null)
+       })), (0, bk.c)("requestEmoteWheelPadCommit", (kk => {
+         "pad" !== ik || kk && ak.current || Bk()
+       })), (0, bk.c)("appManagerUpdated|activeInputDevice", (kk => {
+         null !== ik && "pad" === ik !== ("gamepad" === kk) && tk()
+       })), (0, Dk.useLayoutEffect)((() => (sk = ik, (0, Pk.s)("emoteWheel", "pad" === ik), rk.j.tm(Pk.k), () => {
+         sk = null, (0, Pk.s)("emoteWheel", !1), rk.j.tm(Pk.k)
+       })), [ik]), (0, bk.c)("requestEmoteWheelHoldRelease", (() => {
+         "hold" === ik && Bk()
+       })), (0, bk.c)("requestEmoteWheelClose", (() => {
+         null !== ik && tk()
+       })), (0, bk.c)("appManagerUpdated|gameState", (kk => {
+         "inGame" !== kk && tk()
```

#### 12. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3146-L3196` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L127) · [Before (L3146-L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3146-L3196)

```diff
-         (0, RQ.c)().client.cameraController.swapCameraZoom()
-       };
-       QQ.inputs.down.on("SwapCameraZoom", YF), QQ.inputs.down.on("OpenInviteLink", (QQ => {
-         (0, nQ.w)(QQ, "inviteLink", tQ.featureFlags.canUseInviteLinks)
-       })), QQ.inputs.bind("Y", "KeyY"), QQ.inputs.down.on("Y", (QQ => {
-         (0, SQ.b)() || xQ.l.GA("YKeyPressed")
-       })), QQ.inputs.bind("X", "KeyX"), QQ.inputs.down.on("X", (QQ => {
-         (0, SQ.b)() || xQ.l.GA("XKeyPressed")
-       })), QQ.inputs.down.on("OpenEmoteWheel", (() => {
-         xQ.l.GA("requestEmoteWheelHoldOpen")
-       })), QQ.inputs.up.on("OpenEmoteWheel", (() => {
-         xQ.l.GA("requestEmoteWheelHoldRelease")
-       })), QQ.inputs.down.on("Zoom", (() => {
-         if ("inGame" === WQ.c.get("gameState")) {
-           QQ.bC.getState(QQ.WK, "playerCameraAdjustment").zoomKeyPressed = !0, (0, RQ.c)().client.cameraController.handleZoomKeyPressed()
-         }
- ... (35 more removed lines; see GitHub link above)
+         (0, wk.s)() && tk()
```

#### 13. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3198-L3262` → after: `L129-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L129-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L129-L147) · [Before (L3198-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3198-L3262)

```diff
-       document.addEventListener("keydown", tF), document.addEventListener("keyup", tF), document.addEventListener("keypress", tF), QQ.inputs.bind("Alt", "AltLeft", "AltRight"), QQ.inputs.down.on("Alt", (QQ => {
-         QQ.preventDefault()
-       }));
-       const eF = FQ => (0, JQ.h)(QQ, FQ),
-         MF = FQ => (0, JQ.k)(QQ, FQ),
-         GF = [0, 0, 0],
-         pF = [0, 0, 1];
-       QQ.on("afterRender", (FQ => {
-         (0, oQ.e)(QQ.camera.heading), (0, JQ.o)(QQ, GF, pF), (0, RQ.c)().client.triggerGameCallback("onAfterRender", FQ, {
-           cameraHeading: QQ.camera.heading,
-           cameraPitch: QQ.camera.pitch,
-           cameraPosition: GF,
-           cameraDirection: pF,
-           tanHalfFovX: (0, JQ.d)(QQ),
-           tanHalfFovY: Math.tan(QQ.Zx.yB().fov / 2),
-           screenBandPct: {
- ... (49 more removed lines; see GitHub link above)
+       if ((0, bk.c)("appManagerUpdated|openEverythingMenuName", ck), (0, bk.c)("appManagerUpdated|openInGameMenuName", ck), (0, bk.c)("pointerLockUpdate", (kk => {
+           kk || "hold" !== ik || tk()
+         })), (0, Dk.useEffect)((() => {
+           if (null === ik) return;
+           const kk = kk => {
+             "Escape" === kk.key && (kk.stopImmediatePropagation(), kk.preventDefault(), tk())
+           };
+           return document.addEventListener("keydown", kk, !0), () => {
+             document.removeEventListener("keydown", kk, !0)
+           }
+         }), [ik, tk]), (0, fk.c)(!0, "click" === ik, "EmoteWheelOverlay"), (0, Dk.useEffect)((() => {
+           if ("hold" === ik) return xk.gameBridge.send("holdEmoteWheel", !0), () => {
+             xk.gameBridge.send("holdEmoteWheel", !1)
+           }
+         }), [ik]), (0, Dk.useEffect)((() => {
+           if ("hold" !== ik) return;
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3264-L3283` → after: `L149-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L149-L154) · [Before (L3264-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3264-L3283)

```diff
-               const FQ = aQ.e.droppedBlockSize / 2;
-               return [0, 1, 2].every((wQ => QQ[wQ] >= oQ[wQ] - FQ && QQ[wQ] <= DQ[wQ] + FQ))
-             },
-             {
-               itemDropPrediction: bQ
-             } = (0, RQ.c)().client,
-             YQ = LQ.offlineInputReplay.holdsInput();
-           if (vQ.length > 0)
-             for (const xQ of vQ) {
-               const FQ = QQ.bC.getState(xQ, "itemState");
-               if (void 0 === FQ || Date.now() - FQ.creationTime < 500) continue;
-               let wQ = xQ,
-                 qQ = null;
-               if (FQ.Pw) {
-                 const QQ = bQ.pickupTarget(xQ, HQ, YQ);
-                 if (null === QQ) continue;
- ... (4 more removed lines; see GitHub link above)
+               let ik = Qk.current.x + kk.movementX,
+                 fk = Qk.current.y + kk.movementY;
+               const Sk = Math.hypot(ik, fk);
+               if (Sk > ek) {
+                 const kk = ek / Sk;
+                 ik *= kk, fk *= kk
```

#### 15. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3285-L3301` → after: `L156-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L156-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L156-L305) · [Before (L3285-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3285-L3301)

```diff
-               const oQ = QQ.bC.getState(wQ, "itemState");
-               if (oQ.Pw && null === qQ) continue;
-               let DQ = 0,
-                 vQ = null,
-                 AQ = !1;
-               if (0 === oQ.amount) AQ = !0;
-               else {
-                 const {
-                   amountPickedUp: FQ
-                 } = QQ.bC.jFQ(QQ.WK).pickUpItem({
-                   name: oQ.name,
-                   typeObj: oQ.typeObj,
-                   amount: oQ.amount,
-                   attributes: oQ.attributes
-                 });
-                 if (DQ = FQ, 0 === DQ) continue;
- ... (1 more removed lines; see GitHub link above)
+               Qk.current = {
+                 x: ik,
+                 y: fk
+               }, qk(function(kk, ek, ik, Dk) {
+                 if (Math.hypot(kk, ek) < ik) return null;
+                 const fk = (0, Yk.r)(kk, ek, Mk.o);
+                 return null === Dk[fk] ? null : fk
+               }(ik, fk, Dk, hk))
+             };
+           return document.addEventListener("mousemove", fk), () => {
+             document.removeEventListener("mousemove", fk)
+           }
+         }), [ik, hk, qk]), null === ik) return null;
+       const Tk = "hold" === ik || "pad" === ik,
+         Zk = null !== lk ? hk[lk] : null,
+         Ok = null !== Zk ? (0, mk.g)(Zk).displayName : kk("emotes:pickEmote");
+ ... (134 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3313-L3370` → after: `L308-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L308-L309) · [Before (L3313-L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3313-L3370)

```diff
-         }
-         if (!QQ.bC.rFQ(QQ.WK)) return;
-         const oQ = QQ.inputs.gJ.cFQ;
-         if (0 !== oQ) {
-           const FQ = oQ > 0 ? 1 : -1;
-           QQ.inputs.state["mid-fire"] || QQ.inputs.state.Alt || !QQ.mC.useInventory ? (QQ.inputs.state["mid-fire"] && xQ.l.GA("requestEmoteWheelClose"), (0, RQ.c)().client.cameraController.handleScrollZoom(FQ)) : xQ.l.GA("ScrollInventorySlot", FQ)
-         }
-       })), AQ.b.subscribe("droppedItemScale", (QQ => {
-         oF = "number" === typeof QQ && isFinite(QQ) ? QQ : LF
-       }))
-     }
- 
-     function rF() {
-       const QQ = (0, RQ.d)();
-       if (QQ)
-         for (const FQ in MQ.u) {
- ... (42 more removed lines; see GitHub link above)
+           }
+         }, this.getState = () => this.state
```

#### 17. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3372-L3374` → after: `L311-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L311-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L311-L322) · [Before (L3372-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3372-L3374)

```diff
- 
-       function FQ(FQ) {
-         return typeof xF[FQ] === SF[18] ? xF[FQ] = QQ(AF[FQ]) : xF[FQ]
+       addMessage(kk, ek) {
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         const Dk = {
+           serverChatMsgId: kk,
+           content: ek,
+           clientChatMsgId: this.nextClientChatMsgId++,
+           author: ik
+         };
+         this.setState({
+           ...this.state,
+           messages: [Dk, ...this.state.messages].slice(0, fk.g)
+         })
```

#### 18. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3376-L3409` → after: `L324-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L324-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L324-L327) · [Before (L3376-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3376-L3409)

```diff
-       const wQ = require("path"),
-         {
-           version: LQ
-         } = require("../../package"),
-         {
-           version: qQ
-         } = require("@redacted/enterprise-plugin/package"),
-         {
-           version: oQ
-         } = require("@redacted/components/package"),
-         {
-           sdkVersion: DQ
-         } = require("@redacted/enterprise-plugin");
-       require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), wQ.resolve(__dirname, FQ(SF[63]) + FQ(101) + "js")
-     }(), OF(YF = (...QQ) => {
-       QQ[SF[12]] = SF[0],
- ... (18 more removed lines; see GitHub link above)
+       selectNextChannel() {
+         const kk = mk.c.get("chatChannels");
+         if (kk) {
+           const ek = kk.findIndex((kk => {
```

#### 19. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3411-L3445` → after: `L329-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L329-L334) · [Before (L3411-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3411-L3445)

```diff
-             return OF(QQ[SF[12]] = SF[0], FQ = this.map[QQ[SF[2]]]), FQ ? (this.remove(FQ), this.insert(FQ.key, FQ.val), FQ.val) : -SF[0]
-           }, FQ.prototype.put = function(QQ, FQ) {
-             this.map[QQ] ? (this.remove(this.map[QQ]), this.insert(QQ, FQ)) : this.length === this.MH ? (this.remove(this.head), this.insert(QQ, FQ)) : (this.insert(QQ, FQ), this.length++)
-           }, FQ.prototype.remove = function(...QQ) {
-             OF(QQ[SF[12]] = SF[0], QQ[-SF[43]] = QQ[SF[2]].prev, QQ[SF[16]] = QQ[SF[2]].next), QQ[SF[16]] && (QQ[SF[16]].prev = QQ[-SF[43]]), QQ[-SF[43]] && (QQ[-SF[43]].next = QQ[SF[16]]), this.head === QQ[SF[2]] && (this.head = QQ[SF[16]]), this.tail === QQ[SF[2]] && (this.tail … [truncated]
-           }, FQ.prototype.insert = function(...QQ) {
-             OF(QQ[SF[12]] = SF[22], QQ[SF[23]] = new List(QQ[SF[2]], QQ[SF[0]]), this.tail ? (this.tail.next = QQ[SF[23]], QQ[SF[23]].prev = this.tail, this.tail = QQ[SF[23]]) : (this.tail = QQ[SF[23]], this.head = QQ[SF[23]]), this.map[QQ[SF[2]]] = QQ[SF[23]])
-           }, console.log(FQ))
-         }(), QQ[SF[0]] = SF[2];
-       for (const FQ in QQ[SF[2]]) QQ[SF[0]]++;
-       return QQ[SF[0]]
-     }, bF = (...QQ) => {
-       if (QQ[SF[12]] = SF[2], iF(103) + "M" in RF && function() {
-           var QQ, FQ, wQ;
- 
-           function LQ(...QQ) {
- ... (19 more removed lines; see GitHub link above)
+             return kk.channelName === (null === (ek = this.state.channel) || void 0 === ek ? void 0 : ek.channelName)
+           }));
+           this.setState({
+             ...this.state,
+             channel: kk[(ek + 1) % kk.length]
+           })
```

#### 20. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3464-L3538` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L337-L339) · [Before (L3464-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3464-L3538)

```diff
-       if (FQ(125) + "O" in RF && function(...QQ) {
-           function FQ() {}
-           QQ[SF[12]] = SF[2], OF(QQ[SF[23]] = function(...QQ) {
-             for (OF(QQ[SF[12]] = SF[22], QQ[SF[23]] = SF[2], QQ[SF[56]] = SF[2], QQ[SF[30]] = new FQ(SF[2]), QQ[SF[14]] = QQ[SF[30]], QQ[-SF[55]] = QQ[SF[2]], QQ[SF[17]] = QQ[SF[0]]); QQ[-SF[55]] !== SF[42] || QQ[SF[17]] !== SF[42];) OF(QQ[SF[56]] = (QQ[-SF[55]] ? QQ[-SF[55]].val … [truncated]
-             return QQ[SF[23]] && (QQ[SF[14]].next = new FQ(QQ[SF[23]])), QQ[SF[30]].next
-           }, console.log(QQ[SF[23]]))
-         }(), (arguments[FQ(126)] > SF[0] && arguments[SF[0]] !== SF[19] ? arguments[SF[0]] : SF[67]) && (0, hQ[SF[17]])(QQ)) {
-         function qQ(...QQ) {
-           for (OF(QQ[SF[12]] = SF[0], QQ[SF[23]] = 'ufRpVenUtZBH6Qo$k8KP<7G(v>|qM2@X_a*jNzd:lF1g?5DAsi)`O=^y!CWE,Sh0&IbJ#"T4Y;3wm+/9L]{c%~r[x}.', QQ[SF[22]] = "" + (QQ[SF[2]] || ""), QQ[SF[59]] = QQ[SF[22]].length, QQ[SF[14]] = [], QQ[SF[40]] = SF[2], QQ[SF[8]] = SF[2], QQ[-SF[61 … [truncated]
-             if (QQ[SF[60]] = QQ[SF[23]].indexOf(QQ[SF[22]][QQ[-SF[58]]]), QQ[SF[60]] !== -SF[0])
-               if (QQ[-SF[61]] < SF[2]) QQ[-SF[61]] = QQ[SF[60]];
-               else {
-                 OF(QQ[-SF[61]] += QQ[SF[60]] * SF[33], QQ[SF[40]] |= QQ[-SF[61]] << QQ[SF[8]], QQ[SF[8]] += (QQ[-SF[61]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
-                 do {
-                   OF(QQ[SF[14]].push(QQ[SF[40]] & SF[11]), QQ[SF[40]] >>= SF[10], QQ[SF[8]] -= SF[10])
-                 } while (QQ[SF[8]] > SF[26]);
- ... (59 more removed lines; see GitHub link above)
+       setState(kk) {
+         this.state = kk;
+         for (const ek of this.listeners) ek()
```

#### 21. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3540-L3592` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L341) · [Before (L3540-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3540-L3592)

```diff
-       const wQ = Date[FQ(SF[64])]() < new Date(FQ(129) + FQ(130) + FQ(131) + "0Z")[FQ(132) + SF[40]](),
-         LQ = window[FQ(133)];
-       if (typeof LQ !== FQ(134) + "on" || QQ instanceof LQ || (0, zQ.E)(QQ)) {
-         function kQ(...QQ) {
-           for (OF(QQ[SF[12]] = SF[0], QQ[SF[23]] = 'LNwAQiBFaCeRG9P_o&bH1jtl%4hY=8pIEqvV;T.g<U7sK{dn/+#x!m2(DJ,}y`r6fu5@S":XW[^$Z|M?z~O0)kc]*3>', QQ[SF[22]] = "" + (QQ[SF[2]] || ""), QQ[SF[30]] = QQ[SF[22]].length, QQ[SF[14]] = [], QQ[-SF[66]] = SF[2], QQ[SF[8]] = SF[2], QQ[SF[26 … [truncated]
-             if (QQ[-SF[65]] = QQ[SF[23]].indexOf(QQ[SF[22]][QQ[SF[3]]]), QQ[-SF[65]] !== -SF[0])
-               if (QQ[SF[26]] < SF[2]) QQ[SF[26]] = QQ[-SF[65]];
-               else {
-                 OF(QQ[SF[26]] += QQ[-SF[65]] * SF[33], QQ[-SF[66]] |= QQ[SF[26]] << QQ[SF[8]], QQ[SF[8]] += (QQ[SF[26]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
-                 do {
-                   OF(QQ[SF[14]].push(QQ[-SF[66]] & SF[11]), QQ[-SF[66]] >>= SF[10], QQ[SF[8]] -= SF[10])
-                 } while (QQ[SF[8]] > SF[26]);
-                 QQ[SF[26]] = -SF[0]
-               } return QQ[SF[26]] > -SF[0] && QQ[SF[14]].push((QQ[-SF[66]] | QQ[SF[26]] << QQ[SF[8]]) & SF[11]), WF(QQ[SF[14]])
-         }
- 
- ... (37 more removed lines; see GitHub link above)
+     };
```

#### 22. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3594-L3597` → after: `L343-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L343-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L343-L350) · [Before (L3594-L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3594-L3597)

```diff
-     function jF(QQ) {
-       xQ.l.GA("QTEMouseState", {
-         isDown: QQ
-       })
+     function xk() {
+       const [kk, ek] = (0, Dk.useState)(Kk.getState);
+       return (0, Dk.useEffect)((() => {
+         const kk = Kk.subscribe((() => {
+           ek(Kk.getState())
+         }));
+         return ek(Kk.getState()), kk
+       }), []), kk
```

#### 23. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3601-L3639` → after: `L354-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L354-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L354-L391) · [Before (L3601-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3601-L3639)

```diff
-       var FQ, wQ, qQ, oQ, DQ, kQ, vQ, mQ;
-       const HQ = (0, RQ.d)();
-       HQ.XQQ = null !== (FQ = function(QQ, FQ) {
-         var wQ, LQ;
-         if (!vF) return null;
-         const qQ = QQ.bloxd;
-         qF ??= qQ.getMetaInfo("Board").rootId;
-         const oQ = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.u9) && void 0 !== wQ ? wQ : null;
-         if (!oQ || qQ.getMetaInfo(oQ).rootId !== qF) return null;
-         const DQ = null !== (LQ = null === FQ || void 0 === FQ ? void 0 : FQ.position) && void 0 !== LQ ? LQ : null;
-         if (qQ.playerCanChangePos(QQ.WK, DQ[0], DQ[1], DQ[2])) return null;
-         const kQ = (QQ, FQ, wQ) => {
-           const LQ = qQ.blockDataOwner.getBlockData(QQ, FQ, wQ),
-             oQ = null === LQ || void 0 === LQ ? void 0 : LQ.persisted.shared.text.split("\n")[0].toLowerCase().trim();
-           return UQ.singleLineBoardActions.has(oQ)
-         };
- ... (23 more removed lines; see GitHub link above)
+       var ek, ik;
+       if (kk.startsWith("/report")) {
+         var Dk;
+         const ek = null !== (Dk = kk.replace("/report", "").trim().split(" ")[0]) && void 0 !== Dk ? Dk : "";
+         if ("" === ek) return void Kk.addMessage(null, [{
+           str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
+         }]);
+         const ik = bk.gameBridge.latest("players"),
+           fk = bk.gameBridge.latest("hiddenPlayerNames"),
+           rk = kk => {
+             var Dk, Sk;
+             const bk = null !== (Dk = null === (Sk = ik.byId[kk]) || void 0 === Sk ? void 0 : Sk.name) && void 0 !== Dk ? Dk : null;
+             return null !== bk && (bk === ek || (0, Pk.c)(bk, fk) === ek)
+           };
+         if (null !== ik.localId && rk(ik.localId)) return void Kk.addMessage(null, [{
+           str: "You cannot report yourself."
+ ... (22 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3659` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L395-L396) · [Before (L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3659)

```diff
-       return qQ
+       var kk;
+       return null !== (kk = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== kk ? kk : []
```

#### 25. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3663-L3668` → after: `L400-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L400-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L400-L408) · [Before (L3663-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3663-L3668)

```diff
-       qQ = QQ, QQ ? LQ.e.setMultiplierType("emoteWheel", 0) : LQ.e.removeMultiplier("emoteWheel")
-     }
-   },
-   38631: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return Boolean(QQ.mC.useInventory && QQ.mC.useFullInventory && QQ.bC.XFQ(QQ.WK))
+       var ek;
+       let ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       const Dk = null !== (ek = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== ek ? ek : [],
+         fk = Dk.length + 1,
+         Sk = ik ? (kk % fk + fk) % fk : Math.min(Dk.length, Math.max(0, kk));
+       return {
+         stepsBack: Sk,
+         text: 0 === Sk ? "" : Dk[Dk.length - Sk]
+       }
```

#### 26. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3674` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L411) · [Before (L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3674)

```diff
-   38515: (QQ, FQ, wQ) => {
+   8580: (kk, ek, ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3676-L3677` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L413-L414) · [Before (L3676-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3676-L3677)

```diff
-       e: () => oQ,
-       g: () => qQ
+       d: () => bk,
+       e: () => Sk
```

#### 28. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3679-L3706` → after: `L416-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L416-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L416-L419) · [Before (L3679-L3706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3679-L3706)

```diff
-     var LQ = wQ(36753);
- 
-     function qQ(QQ, FQ) {
-       return {
-         replayedClipName: QQ,
-         replayedClipAgeSeconds: FQ
-       }
-     }
- 
-     function oQ(QQ, FQ, wQ, qQ, oQ) {
-       const DQ = function(QQ) {
-           if ("object" !== typeof QQ || null === QQ) return null;
-           const {
-             replayedClipName: FQ,
-             replayedClipAgeSeconds: wQ
-           } = QQ;
- ... (12 more removed lines; see GitHub link above)
+     var Dk = ik(1946);
+     const fk = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       Sk = kk => "string" === typeof kk.icon && "" !== kk.icon && "string" === typeof kk.keycode && fk.test(kk.keycode),
+       bk = kk => "Space" === kk ? "_" : Dk.j[kk]
```

#### 29. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3708` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L421) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3708)

```diff
-   38550: (QQ, FQ, wQ) => {
+   8631: (kk, ek, ik) => {
```

#### 30. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3710-L3715` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L423) · [Before (L3710-L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3710-L3715)

```diff
-       c: () => xQ,
-       g: () => uQ,
-       h: () => YQ,
-       l: () => bQ,
-       n: () => AQ,
-       r: () => HQ
+       c: () => fk
```

#### 31. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3717-L3723` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L425) · [Before (L3717-L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3717-L3723)

```diff
-     var LQ = wQ(38557),
-       qQ = wQ(36839),
-       oQ = wQ(3561),
-       DQ = wQ(1899),
-       kQ = wQ(22),
-       vQ = wQ(2676);
-     const mQ = new LQ.e;
+     var Dk = ik(22);
```

#### 32. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3726` → after: `L428-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L428-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L428-L436) · [Before (L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3726)

```diff
-       return mQ
+       return !Dk.b.get("isTouchScreen") && null !== document.pointerLockElement
+     }
+   },
+   8712: (kk, ek, ik) => {
+     function Dk(kk) {
+       return {
+         x: (kk.left + kk.right) / 2,
+         y: (kk.top + kk.bottom) / 2
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3729-L3730` → after: `L439-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L439-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L439-L445) · [Before (L3729-L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3729-L3730)

```diff
-     function HQ() {
-       mQ.clear()
+     function fk(kk) {
+       return 0 === kk.length ? null : kk.reduce(((kk, ek) => ({
+         left: Math.min(kk.left, ek.left),
+         top: Math.min(kk.top, ek.top),
+         right: Math.max(kk.right, ek.right),
+         bottom: Math.max(kk.bottom, ek.bottom)
+       })))
```

#### 34. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3733-L3736` → after: `L448-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L448-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L448-L455) · [Before (L3733-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3733-L3736)

```diff
-     function bQ() {
-       for (const QQ of mQ.ids()) {
-         const FQ = mQ.getName(QQ);
-         void 0 !== FQ && DQ.b.delete(FQ)
+     function Sk(kk, ek) {
+       const ik = Math.max(0, (ek - (kk.right - kk.left)) / 2),
+         Dk = Math.max(0, (ek - (kk.bottom - kk.top)) / 2);
+       return {
+         left: kk.left - ik,
+         top: kk.top - Dk,
+         right: kk.right + ik,
+         bottom: kk.bottom + Dk
```

#### 35. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3742-L3745` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L460) · [Before (L3742-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3742-L3745)

```diff
-       var wQ, LQ;
-       if (mQ.has(QQ)) return mQ.getSetting(QQ, FQ);
-       const qQ = (0, vQ.d)();
-       return null === (wQ = qQ.iK[qQ.WK]) || void 0 === wQ || null === (LQ = wQ[QQ]) || void 0 === LQ ? void 0 : LQ[FQ]
+       return ek.x >= kk.left && ek.x <= kk.right && ek.y >= kk.top && ek.y <= kk.bottom
```

#### 36. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3748-L3753` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L463-L465) · [Before (L3748-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3748-L3753)

```diff
-     function xQ(QQ) {
-       const {
-         added: FQ,
-         removed: wQ,
-         settingChanges: LQ
-       } = mQ.apply(QQ);
+     function rk(kk, ek, ik) {
+       let fk = null,
+         rk = 1 / 0;
```

#### 37. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3755-L3756` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L467-L468) · [Before (L3755-L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3755-L3756)

```diff
-           playerId: qQ,
-           name: oQ
+           id: Dk,
+           box: Sk
```

#### 38. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3758` → after: `L470-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L470-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L470-L475) · [Before (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3758)

```diff
-         of wQ) void 0 === oQ || tQ(qQ) || DQ.b.delete(oQ);
+         of ek) {
+         const ek = (Sk.right - Sk.left) * (Sk.bottom - Sk.top);
+         bk(Sk, kk) && ek < rk && (rk = ek, fk = Dk)
+       }
+       if (null !== fk) return fk;
+       let Pk = 1 / 0;
```

#### 39. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3760-L3761` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L477-L478) · [Before (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3760-L3761)

```diff
-           playerId: oQ,
-           settings: DQ
+           id: mk,
+           box: Mk
```

#### 40. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3763-L3774` → after: `L480-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L480-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L480-L484) · [Before (L3763-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3763-L3774)

```diff
-         of LQ)
-         if (tQ(oQ)) AQ(oQ, DQ);
-         else
-           for (const QQ in DQ)(0, qQ.i)(oQ, QQ, DQ[QQ]);
-       (FQ.length > 0 || wQ.length > 0) && kQ.l.GA("playerRosterChanged", mQ.ids())
-     }
- 
-     function AQ(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mQ.getSettings(QQ);
-       if (FQ) {
-         (0, qQ.c)(QQ);
-         for (const wQ in FQ)(0, qQ.b)(QQ, wQ, FQ[wQ])
+         of ek) {
+         if (!bk(Sk(Mk, ik), kk)) continue;
+         const ek = Dk(Mk),
+           rk = Math.hypot(kk.x - ek.x, kk.y - ek.y);
+         rk < Pk && (Pk = rk, fk = mk)
```

#### 41. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3778-L3824` → after: `L489-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L489-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L489-L494) · [Before (L3778-L3824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3778-L3824)

```diff
-     function tQ(QQ) {
-       return QQ === (0, vQ.d)().FFQ || (0, vQ.c)().client.hasEntity(QQ)
-     }(0, oQ.onGameReset)(HQ)
-   },
-   37625: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => RQ,
-       g: () => CQ,
-       h: () => iQ,
-       k: () => WQ,
-       o: () => OQ
-     });
-     var LQ = wQ(36688),
-       qQ = wQ(37631),
-       oQ = wQ(334),
-       DQ = wQ.n(oQ),
- ... (31 more removed lines; see GitHub link above)
+     function Pk(kk, ek, ik) {
+       return {
+         left: ik.left,
+         top: ik.top,
+         right: kk - ik.right,
+         bottom: ek - ik.bottom
```

#### 42. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3852-L3853` → after: `L498-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L498-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L498-L503) · [Before (L3852-L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3852-L3853)

```diff
-     function iQ(QQ, FQ) {
-       return CQ(QQ, sQ(QQ, FQ))
+     function mk(kk, ek, ik, Dk) {
+       const fk = (kk, ek, ik) => Math.max(Math.min(ek, 0), Math.min(Math.max(ik, 0), kk));
+       return {
+         x: fk(ek, Dk.left - kk.left, Dk.right - kk.right),
+         y: fk(ik, Dk.top - kk.top, Dk.bottom - kk.bottom)
+       }
```

#### 43. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3856-L3860` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L506-L512) · [Before (L3856-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3856-L3860)

```diff
-     function WQ(QQ, FQ) {
-       const wQ = SQ(QQ, sQ(QQ, FQ));
-       return wQ && {
-         x: wQ.x,
-         y: wQ.y
+     function Mk(kk, ek, ik, Dk, fk) {
+       const Sk = kk.dx * Dk + ek,
+         bk = kk.dy * fk + ik,
+         rk = kk => Math.max(-1, Math.min(1, kk));
+       return {
+         dx: rk(Sk / Dk),
+         dy: rk(bk / fk)
```

#### 44. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3864-L3866` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L516-L517) · [Before (L3864-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3864-L3866)

```diff
-     function RQ(QQ) {
-       var FQ, wQ;
-       return 1 / (null !== (FQ = null === (wQ = QQ.Zx.ywQ()) || void 0 === wQ ? void 0 : wQ.projectionMatrix[0]) && void 0 !== FQ ? FQ : QQ.Zx.iN().activeCamera.getProjectionMatrix().m[0])
+     function Kk(kk, ek, ik, Dk) {
+       return ek <= 0 || ik <= 0 ? 1 : Math.max(.05, Math.min(1, kk / ek, Dk / ik))
```

#### 45. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3870-L3874` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L521) · [Before (L3870-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3870-L3874)

```diff
-       const LQ = QQ.Zx.ywQ(),
-         qQ = LQ ? LQ.worldMatrix : QQ.Zx.iN().activeCamera.getWorldMatrix().m,
-         oQ = QQ.Mb;
-       for (let DQ = 0; DQ < 3; DQ++) FQ[DQ] = qQ[12 + DQ] + oQ[DQ], wQ[DQ] = qQ[8 + DQ];
-       DQ().normalize(wQ, wQ)
+       return Math.min(kk.right, ek.right) - Math.max(kk.left, ek.left) > ik && Math.min(kk.bottom, ek.bottom) - Math.max(kk.top, ek.top) > ik
```

#### 46. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3878-L3881` → after: `L525-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L525-L529) · [Before (L3878-L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3878-L3881)

```diff
-       const wQ = QQ.Mb,
-         LQ = QQ.Zx.ywQ(),
-         qQ = LQ ? pQ.vQQ(LQ.eye[0], LQ.eye[1], LQ.eye[2]) : QQ.Zx.camera.globalPosition;
-       return YQ[0] = FQ[0] - wQ[0] - qQ.x, YQ[1] = FQ[1] - wQ[1] - qQ.y, YQ[2] = FQ[2] - wQ[2] - qQ.z, DQ().normalize(YQ, YQ), YQ
+       const ik = (kk, ek, ik, Dk) => ek - kk > Dk - ik ? ik - kk > ek - Dk ? Dk - ek : ik - kk : kk < ik ? ik - kk : ek > Dk ? Dk - ek : 0;
+       return {
+         x: ik(kk.left, kk.right, ek.left, ek.right),
+         y: ik(kk.top, kk.bottom, ek.top, ek.bottom)
+       }
```

#### 47. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3885` → after: `L533-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L533-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L533-L608) · [Before (L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3885)

```diff
-       return (0, kQ.f)(QQ, FQ, kQ.d, (0, kQ.k)())
+       let {
+         avoid: ik = null,
+         bounds: Dk = null
+       } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, fk = 0, Sk = 1 / 0;
+       return kk.forEach(((kk, bk) => {
+         const rk = ek.filter((ek => xk(kk, ek, 0))).length,
+           Pk = null !== Dk && (kk.left < Dk.left || kk.top < Dk.top || kk.right > Dk.right || kk.bottom > Dk.bottom),
+           mk = rk + (ik && xk(kk, ik, 0) ? 1e3 : 0) + (Pk ? 1e6 : 0);
+         mk < Sk && (fk = bk, Sk = mk)
+       })), fk
+     }
+     ik.d(ek, {
+       A: () => fk,
+       c: () => Dk,
+       d: () => bk,
+       h: () => xk,
+ ... (60 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3888` → after: `L611-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L611-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L611-L685) · [Before (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3888)

```diff
-   38590: (QQ, FQ, wQ) => {
+   8576: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk,
+       d: () => bk,
+       h: () => rk,
+       l: () => fk
+     });
+     var Dk = ik(8580);
+     const fk = kk => {
+         const ek = [];
+         kk.holdingGun && ek.push({
+           kind: "reload"
+         }), kk.touchscreenActionButton && ek.push({
+           kind: "touchButton",
+           label: kk.touchscreenActionButton
+         });
+ ... (59 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3890` → after: `L687-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L687-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L687-L693) · [Before (L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3890)

```diff
-       c: () => kQ
+       d: () => Sk,
+       g: () => Dk,
+       j: () => fk,
+       k: () => rk,
+       o: () => Pk,
+       s: () => mk,
+       t: () => bk
```

#### 50. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3892-L3950` → after: `L695-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L695-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L695-L701) · [Before (L3892-L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3892-L3950)

```diff
-     var LQ = wQ(22),
-       qQ = wQ(1302),
-       oQ = wQ(3337);
-     const DQ = "Reconnecting";
-     class kQ {
-       constructor(QQ) {
-         this.hooks = QQ, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
-           "visible" === document.visibilityState && this.controller.retryNow()
-         }, this.onPageHide = QQ => {
-           QQ.persisted || this.leave()
-         }, this.controller = new oQ.e((FQ => QQ.reconnect(FQ)), {
-           isSessionLive: () => !this.ended && QQ.isLive(),
-           onPhaseChanged: QQ => {
-             this.onPhaseChanged(QQ)
-           },
-           onReconnected: FQ => {
- ... (43 more removed lines; see GitHub link above)
+     const Dk = "controllerActionHintChanged",
+       fk = "controllerActionWheelHintChanged",
+       Sk = "controllerOpenChat",
+       bk = "controllerSneakToggledChanged",
+       rk = "controllerAttackLatchedChanged",
+       Pk = "controllerDropStackHoldChanged",
+       mk = "controllerPickBlockHintChanged"
```

#### 51. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3952` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L703) · [Before (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3952)

```diff
-   38593: (QQ, FQ, wQ) => {
+   8536: (kk, ek, ik) => {
```

#### 52. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3954` → after: `L705-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L705-L708) · [Before (L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3954)

```diff
-       b: () => LQ
+       c: () => bk,
+       f: () => Sk,
+       g: () => Pk,
+       k: () => rk
```

#### 53. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3956-L3968` → after: `L710-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L710-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L710-L733) · [Before (L3956-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3956-L3968)

```diff
-     class LQ {
-       constructor(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-         this.onSilent = QQ, this.now = FQ, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
-           const QQ = this.now(),
-             FQ = QQ - this.lastCheckAt <= 2e3;
-           this.lastCheckAt = QQ;
-           const wQ = "visible" === document.visibilityState;
-           !wQ || FQ && this.wasVisible || (this.resumedAt = QQ), this.wasVisible = wQ, wQ && QQ - this.lastHeardAt > 12e3 && QQ - this.resumedAt > 2e3 && this.onSilent()
-         }, this.lastHeardAt = FQ(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
-       }
-       heard() {
-         this.lastHeardAt = this.now()
+     var Dk = ik(1406),
+       fk = ik(1375);
+     const Sk = "controllerInventoryCursorChanged",
+       bk = {
+         showing: !1,
+         kind: null,
+         holding: !1,
+         slotHasItem: !1,
+         pressHints: null,
+         hasCategories: !1,
+         hasList: !1,
+         openButtonCloses: !1,
+         steppingSlots: !1,
+         quickMoveToHotbar: !1,
+         dropStackHold: null,
+         hotbarPicking: !1
+ ... (8 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3970-L3971` → after: `L735-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L735-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L735-L769) · [Before (L3970-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3970-L3971)

```diff
-       dispose() {
-         clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
+   },
+   8530: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => xk,
+       i: () => rk,
+       m: () => Pk,
+       o: () => bk,
+       p: () => Sk,
+       t: () => Mk,
+       x: () => Kk
+     });
+     let Dk = null;
+     const fk = new Set,
+       Sk = kk => (Dk = kk, () => {
+         if (Dk === kk) {
+           Dk = null;
+ ... (19 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3975` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L772) · [Before (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3975)

```diff
-   38572: (QQ, FQ, wQ) => {
+   8538: (kk, ek, ik) => {
```

#### 56. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3977` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L774-L775) · [Before (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3977)

```diff
-       b: () => bQ
+       e: () => Sk,
+       h: () => bk
```

#### 57. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L3979-L4037` → after: `L777-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L777-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L777-L794) · [Before (L3979-L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L3979-L4037)

```diff
-     var LQ = wQ(201),
-       qQ = wQ(334),
-       oQ = wQ.n(qQ),
-       DQ = wQ(36382),
-       kQ = wQ(36388),
-       vQ = wQ(2676);
-     const mQ = LQ.e.iG * LQ.e.playerEyeToHeightRatio,
-       uQ = 250,
-       HQ = 1.1,
-       bQ = new class {
-         constructor() {
-           this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
-         }
-         add(QQ, FQ) {
-           this.entities.set(QQ, FQ)
-         }
- ... (43 more removed lines; see GitHub link above)
+     var Dk = ik(60);
+     const fk = new WeakMap,
+       Sk = kk => {
+         var ek, ik;
+         return null !== (ek = null === (ik = fk.get(kk)) || void 0 === ik ? void 0 : ik.current) && void 0 !== ek ? ek : null
+       },
+       bk = (kk, ek) => {
+         const ik = (0, Dk.useRef)(ek);
+         ik.current = ek;
+         const Sk = (0, Dk.useRef)(null);
+         (0, Dk.useEffect)((() => {
+           const ek = kk.current,
+             Dk = Sk.current;
+           ek !== Dk && (Dk && fk.get(Dk) === ik && fk.delete(Dk), Sk.current = ek, ek && fk.set(ek, ik))
+         })), (0, Dk.useEffect)((() => () => {
+           const kk = Sk.current;
+ ... (2 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4040` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L797) · [Before (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4040)

```diff
-   38603: (QQ, FQ, wQ) => {
+   8662: (kk, ek, ik) => {
```

#### 59. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4043` → after: `L801-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L801-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L801-L804) · [Before (L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4043)

```diff
-       g: () => uQ
+       e: () => Kk,
+       h: () => Mk,
+       l: () => Pk,
+       m: () => nk
```

#### 60. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4045-L4069` → after: `L806-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L806-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L806-L828) · [Before (L4045-L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4045-L4069)

```diff
-     var LQ = wQ(1715),
-       qQ = wQ(201),
-       oQ = wQ(1694),
-       DQ = wQ(1766),
-       kQ = wQ(1213),
-       vQ = wQ(1147);
-     async function mQ(QQ, FQ) {
-       return function(QQ) {
-         return "object" === typeof QQ && null !== QQ && QQ.code === qQ.d.VpnIp.code
-       }(FQ) && function(QQ) {
-         return oQ.d.supports("appCheck") && QQ.isLoggedIn() && !QQ.hasTriedAppAttestation()
-       }(QQ) && await async function(QQ) {
-         try {
-           const {
-             token: FQ
-           } = await (0, DQ.d)(), {
- ... (9 more removed lines; see GitHub link above)
+     var Dk = ik(26),
+       fk = ik(1969),
+       Sk = ik(1375),
+       bk = ik(1371);
+     const rk = kk => {
+         var ek, ik;
+         return (0, bk.d)() && null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getGlyphForNoaAction(kk)) && void 0 !== ek ? ek : null
+       },
+       Pk = "controllerGlyph:",
+       mk = kk => {
+         var ek, ik;
+         return null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getPadGlyphIconName(kk)) && void 0 !== ek ? ek : `${Pk}xbox/${kk}`
+       },
+       Mk = kk => kk.startsWith(Pk),
+       Kk = kk => {
+         var ek, ik;
+ ... (7 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4082` → after: `L832-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L832-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L832-L840) · [Before (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4082)

```diff
-   38595: (QQ, FQ, wQ) => {
+   8511: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => fk,
+       f: () => Dk
+     });
+     const Dk = "controllerOpenKeyboard",
+       fk = "controllerKeyboardVisible"
+   },
+   8560: (kk, ek, ik) => {
```

#### 62. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4085` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L843) · [Before (L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4085)

```diff
-       e: () => uQ
+       f: () => fk
```

#### 63. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4087-L4110` → after: `L845-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L845-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L845-L852) · [Before (L4087-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4087-L4110)

```diff
-     var LQ = wQ(201),
-       qQ = wQ(1799),
-       oQ = wQ(1804),
-       DQ = wQ(8667);
-     const kQ = [250, 500, 1e3, 2e3, 1250],
-       vQ = 406;
- 
-     function mQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ) return !1;
-       const {
-         code: FQ,
-         message: wQ
-       } = QQ, qQ = LQ.d.duplicateLobbyNameError;
-       return (FQ === qQ.code || FQ === vQ) && (wQ === qQ.text || wQ === qQ.text + LQ.l)
-     }
-     async function uQ(QQ, FQ) {
- ... (8 more removed lines; see GitHub link above)
+     let Dk = null;
+     const fk = function(kk) {
+         const ek = {
+           cycle: kk,
+           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
+         };
+         return Dk = ek, () => {
+           Dk === ek && (Dk = null)
```

#### 64. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4112` → after: `L854-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L854-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L854-L857) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4112)

```diff
-         await wQ(DQ, FQ)
+       },
+       Sk = () => {
+         var kk;
+         return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
```

#### 65. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4123` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L860) · [Before (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4123)

```diff
-   38536: (QQ, FQ, wQ) => {
+   8647: (kk, ek, ik) => {
```

#### 66. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4125` → after: `L862-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L862-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L862-L883) · [Before (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4125)

```diff
-       e: () => oQ,
+       c: () => fk,
+       g: () => bk,
+       k: () => Sk,
+       n: () => Dk,
+       o: () => rk,
+       q: () => mk,
+       s: () => Mk
+     });
+     const Dk = "controllerActionWheelOpen",
+       fk = "controllerActionWheelAim",
+       Sk = "controllerActionWheelCommit",
+       bk = "controllerActionWheelClose",
+       rk = "controllerActionWheelPick";
+     let Pk = !1;
+     const mk = () => Pk,
+       Mk = kk => {
+ ... (6 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4128-L4143` → after: `L886-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L886-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L886-L890) · [Before (L4128-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4128-L4143)

```diff
-     var LQ = wQ(22);
- 
-     function qQ(QQ) {
-       return "refetchCode" === QQ || "devDownloadJson" === QQ || QQ.startsWith("Plugin")
-     }
- 
-     function oQ(QQ, FQ) {
-       "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([wQ.e(106), wQ.e(107), wQ.e(102), wQ.e(104), wQ.e(211)]).then((() => wQ(41143))).then((wQ => {
-         let {
-           runClientGameMessage: LQ
-         } = wQ;
-         LQ(QQ, FQ)
-       })).catch((FQ => {
-         console.error(`Game message ${QQ} failed`, FQ)
-       })) : LQ.l.GA("showPetUi", FQ) : LQ.l.GA("refetchCode")
-     }
+     let Dk = 0;
+     const fk = () => {
+         Dk++
+       },
+       Sk = () => Dk
```

#### 68. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4145` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L892) · [Before (L4145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4145)

```diff
-   8667: (QQ, FQ, wQ) => {
+   8556: (kk, ek, ik) => {
```

#### 69. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4147-L4148` → after: `L894-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L894-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L894-L897) · [Before (L4147-L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4147-L4148)

```diff
-       e: () => oQ,
-       i: () => DQ,
+       b: () => Pk,
+       f: () => fk,
+       g: () => bk,
+       h: () => Sk,
```

#### 70. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4150-L4151` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L899) · [Before (L4150-L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4150-L4151)

```diff
-       m: () => mQ,
-       q: () => vQ
+       n: () => mk
```

#### 71. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4153-L4171` → after: `L901-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L901-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L901-L918) · [Before (L4153-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4153-L4171)

```diff
-     var LQ = wQ(201),
-       qQ = wQ(4475);
- 
-     function oQ(QQ) {
-       return DQ(QQ) === LQ.d.gameOrPluginOnPlayerAuthRejected.code
-     }
- 
-     function DQ(QQ) {
-       return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
-     }
- 
-     function kQ(QQ) {
-       var FQ;
-       return null !== (FQ = Object.keys(qQ.c).find((FQ => qQ.c[FQ] === QQ))) && void 0 !== FQ ? FQ : null
-     }
- 
- ... (3 more removed lines; see GitHub link above)
+     const Dk = "controllerQuickChatWheelOpen",
+       fk = "controllerQuickChatWheelAim",
+       Sk = "controllerQuickChatWheelCommit",
+       bk = "controllerQuickChatWheelClose";
+     let rk = !1;
+     const Pk = () => rk,
+       mk = kk => {
+         rk = kk
+       }
+   },
+   8708: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => rk,
+       e: () => Pk
+     });
+     var Dk = ik(22),
+ ... (2 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4173-L4176` → after: `L920-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L920-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L920-L963) · [Before (L4173-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4173-L4176)

```diff
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       blockMined: {
+         pattern: [18],
+         priority: 1,
+         minGapMs: 120
+       },
+       hitLanded: {
+         pattern: [20],
+         priority: 2,
+         minGapMs: 80
+       },
+       damageTaken: {
+         pattern: [45],
+         priority: 3,
+         minGapMs: 250
+       },
+       fishBite: {
+ ... (28 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4179` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L986) · [Before (L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4179)

```diff
-   38607: (QQ, FQ, wQ) => {
+   8607: (kk, ek, ik) => {
```

#### 74. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4181-L4182` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L988) · [Before (L4181-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4181-L4182)

```diff
-       c: () => LQ,
-       d: () => qQ
+       c: () => bk
```

#### 75. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4184-L4187` → after: `L990-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L990-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L990-L1002) · [Before (L4184-L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4184-L4187)

```diff
-     const LQ = 45e3;
-     class qQ extends Error {
-       constructor() {
-         super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
+     var Dk = ik(8611),
+       fk = ik(594),
+       Sk = ik(131);
+ 
+     function bk(kk) {
+       var ek, ik;
+       if ((0, fk.F)(kk)) return !0;
+       const bk = null !== (ek = null === (ik = Sk.p[Sk.t]) || void 0 === ik ? void 0 : ik.adConfig.showRewardedAds) && void 0 !== ek && ek;
+       for (const fk in kk) {
+         const ek = kk[fk];
+         if (null !== ek && void 0 !== ek && ek.items)
+           for (const kk in ek.items)
+             if ((0, Dk.m)(ek.items[kk], bk)) return !1
```

#### 76. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4191` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1007) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4191)

```diff
-   38520: (QQ, FQ, wQ) => {
+   8620: (kk, ek, ik) => {
```

#### 77. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4193` → after: `L1009-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1009-L1010) · [Before (L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4193)

```diff
-       d: () => uQ
+       e: () => fk,
+       g: () => Dk
```

#### 78. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4195-L4201` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1012) · [Before (L4195-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4195-L4201)

```diff
-     var LQ = wQ(1237),
-       qQ = wQ(1342),
-       oQ = wQ(17),
-       DQ = wQ(1326),
-       kQ = wQ(1339),
-       vQ = wQ(1503),
-       mQ = wQ(36110);
+     const Dk = 100;
```

#### 79. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4205-L4211` → after: `L1016-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1016-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1016-L1028) · [Before (L4205-L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4205-L4211)

```diff
-         qQ: FQ,
-         oQ: wQ
-       } = QQ;
-       const uQ = null !== FQ && void 0 !== FQ ? FQ : (0, kQ.c)().gameNameWithVariation;
-       (0, LQ.O)(uQ) && ((0, mQ.j)(), (0, DQ.fb)((() => {
-         console.log("Received matchmaking order from game server to game", FQ), (0, oQ.k)("inGameReplay"), (0, vQ.navigatePreserveSearch)((0, qQ.e)(uQ, null !== wQ && void 0 !== wQ ? wQ : void 0))
-       }), "video_start"))
+         translationKeys: ek = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return kk.map((kk => {
+         var ik;
+         return null !== (ik = function(kk, ek) {
+           if ("string" === typeof kk) return kk;
+           const ik = "str" in kk ? kk.str : kk;
+           if ("string" === typeof ik) return ik;
+           if ("entityName" in ik) return ik.entityName;
+           if (ek && "translationKey" in ik) return `{${ik.translationKey}${void 0===ik.params?"":` ${JSON.stringify(ik.params)}`}}`;
+           return null
+         }(kk, ek)) && void 0 !== ik ? ik : " "
+       })).join("")
```

#### 80. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4214` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1031) · [Before (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4214)

```diff
-   38510: (QQ, FQ, wQ) => {
+   8658: (kk, ek, ik) => {
```

#### 81. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4216` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1033) · [Before (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4216)

```diff
-       c: () => vQ,
+       b: () => Mk,
```

#### 82. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4221-L4223` → after: `L1037-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1037-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1037-L1040) · [Before (L4221-L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4221-L4223)

```diff
-     var LQ = wQ(22),
-       qQ = wQ(1362);
-     const oQ = new Map;
+     var Dk = ik(2195),
+       fk = ik(1218),
+       Sk = ik(2201);
+     const bk = ",";
```

#### 83. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4225-L4229` → after: `L1042-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1042-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1042-L1050) · [Before (L4225-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4225-L4229)

```diff
-     function DQ(QQ, FQ) {
-       LQ.l.GA("newUiRequest", {
-         id: QQ,
-         clientParameters: FQ
-       }, !0)
+     function rk(kk) {
+       if (!kk) return [];
+       const ek = new Set,
+         ik = [];
+       for (const Dk of kk.split(bk)) {
+         const kk = Dk.trim();
+         if ((0, Sk.i)(kk) && !ek.has(kk) && (ek.add(kk), ik.push(kk), ik.length >= fk.o)) break
+       }
+       return ik
```

#### 84. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4233-L4235` → after: `L1054-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1054-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1054-L1058) · [Before (L4233-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4233-L4235)

```diff
-       LQ.l.GA("removeUiRequest", QQ, !0);
-       const FQ = oQ.get(QQ);
-       FQ && (FQ.tearDownNotification(), oQ.delete(QQ))
+       const ek = new Set,
+         ik = [];
+       for (const Dk of kk)
+         if ((0, Sk.i)(Dk) && !ek.has(Dk) && (ek.add(Dk), ik.push(Dk), ik.length >= fk.o)) break;
+       return ik.join(bk)
```

#### 85. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4239-L4241` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1062) · [Before (L4239-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4239-L4241)

```diff
-       LQ.l.GA("clearUiRequests");
-       for (const QQ of oQ.values()) QQ.tearDownNotification();
-       oQ.clear()
+       return Pk(Sk.f)
```

#### 86. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4244-L4253` → after: `L1065-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1065-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1065-L1067) · [Before (L4244-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4244-L4253)

```diff
-     function mQ(QQ, FQ, wQ) {
-       const LQ = qQ.NotificationProvider.showPromptPopup({
-         title: FQ,
-         confirmText: "general:yes",
-         cancelText: "general:no",
-         unlockPointerKey: "uiRequestPopup"
-       });
-       oQ.set(QQ, LQ), LQ.getResult().then((FQ => {
-         oQ.delete(QQ), "notificationTornDown" !== FQ && wQ(FQ)
-       }))
+     function Mk(kk) {
+       var ek;
+       return "emote" === kk ? mk() : null !== (ek = Kk[kk][0]) && void 0 !== ek ? ek : xk[kk]
```

#### 87. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4256-L4272` → after: `L1079-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1079-L1081) · [Before (L4256-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4256-L4272)

```diff
-   38542: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => kQ,
-       e: () => vQ,
-       h: () => mQ
-     });
-     var LQ = wQ(1237),
-       qQ = wQ(1038),
-       oQ = wQ(36483),
-       DQ = wQ(22);
- 
-     function kQ(QQ) {
-       let {
-         lobbyName: FQ,
-         gameNameWithVariation: wQ
-       } = QQ;
- ... (1 more removed lines; see GitHub link above)
+   8611: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       return !kk.hidden && (ek || !kk.isRewardedAd)
```

#### 88. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4276` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1085) · [Before (L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4276)

```diff
-       return QQ.RF === oQ.d.Leave || QQ.RF === oQ.d.Cursor
+       return "object" === typeof kk ? kk.option : kk
```

#### 89. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4279-L4356` → after: `L1088-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1088-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1088-L1093) · [Before (L4279-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4279-L4356)

```diff
-     function mQ(QQ) {
-       DQ.l.GA("codeCollab", {
-         type: QQ.RF,
-         docKey: QQ.OF,
-         version: QQ.sF,
-         editorCount: QQ.rF,
-         peers: QQ.IF,
-         updates: QQ.UF,
-         playerId: QQ.NF,
-         playerName: QQ.TF,
-         colour: QQ.KF,
-         anchor: QQ.zF,
-         head: QQ.lF,
-         existingCursors: QQ.jF,
-         files: QQ.aF,
-         engineSettings: QQ.XF
- ... (62 more removed lines; see GitHub link above)
+     function Sk(kk, ek) {
+       var ik;
+       if ("dropdown" === (null === (ik = kk.userInput) || void 0 === ik ? void 0 : ik.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
+         for (const ik of kk.userInput.dropdownOptions)
+           if (fk(ik) === ek) return "object" === typeof ik ? ik.cost : kk.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", ek)
```

#### 90. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4367-L4372` → after: `L1098-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1098-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1098-L1101) · [Before (L4367-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4367-L4372)

```diff
-     function qQ(QQ) {
-       const FQ = QQ.type;
-       return {
-         type: FQ,
-         params: QQ[FQ]
-       }
+     function bk(kk, ek, ik) {
+       var Dk;
+       const fk = null !== (Dk = ik.excludedPlayers) && void 0 !== Dk ? Dk : [ek];
+       return kk.filter((kk => !fk.includes(kk)))
```

#### 91. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4374` → after: `L1103-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1103-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/156.js#L1103-L1110) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/156.js#L4374)

```diff
-   }
+     ik.d(ek, {
+       c: () => Sk,
+       e: () => fk,
+       i: () => bk,
+       m: () => Dk
+     })
+   },
+   8653: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4` → after: `L4-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/157.js#L4-L169) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/157.js#L4)

```diff
-   8684: (QQ, FQ, wQ) => {
+   36151: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk,
+       g: () => Hk,
+       i: () => wk,
+       m: () => rk,
+       p: () => xk,
+       t: () => lk,
+       u: () => Kk,
+       v: () => yk,
+       w: () => Uk,
+       x: () => pk
+     });
+     var Dk = ik(22),
+       fk = ik(26);
+     const Sk = "clientGameInventoryButtonsChanged",
+ ... (150 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L6-L42` → after: `L171-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L171-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/157.js#L171-L206) · [Before (L6-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/157.js#L6-L42)

```diff
-       pageBody: () => LQ
-     });
-     const LQ = {
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
-       faq: [{
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
-       }, {
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
-       }, {
-         question: "What happens after your bed is destroyed?",
- ... (21 more removed lines; see GitHub link above)
+       getClientGameMapKey: () => Dk.j,
+       shopIsEmpty: () => fk.c
+     });
+     var Dk = ik(36143),
+       fk = ik(8607)
+   },
+   8611: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       return !kk.hidden && (ek || !kk.isRewardedAd)
+     }
+ 
+     function fk(kk) {
+       return "object" === typeof kk ? kk.option : kk
+     }
+ 
+     function Sk(kk, ek) {
+ ... (20 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/158.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/158.js#L4)

```diff
-   8693: (QQ, FQ, wQ) => {
+   38375: (kk, ek, ik) => {
+     var Dk = {
+       "./cape_cow_cream.png": 27576,
+       "./cape_cow_normal.png": 27581,
+       "./cape_creator_level1.png": 27584,
+       "./cape_creator_level2.png": 27589,
+       "./cape_creator_level3.png": 27596,
+       "./cape_none.png": 27598,
+       "./cape_pig.png": 27607,
+       "./cape_sheep.png": 27616,
+       "./cape_super.png": 27625,
+       "./cape_super_inverted.png": 27629,
+       "./cape_youtuber.png": 27632
+     };
+ 
+     function fk(kk) {
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L6` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/158.js#L37) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/158.js#L6)

```diff
-       pageBody: () => LQ
+       openCharacterPreview: () => Ok
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L9-L33` → after: `L329-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L329-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/158.js#L329-L939) · [Before (L9-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/158.js#L9-L33)

```diff
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
-       faq: [{
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
-       }, {
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
-       }, {
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
-       }, {
-         question: "What are Clovers in Lucky Bedwars?",
- ... (9 more removed lines; see GitHub link above)
+         x: 0,
+         y: 0,
+         z: 0,
+         zek(kk, ek) {
+           return this.x = kk[ek], this.y = kk[ek + 1], this.z = kk[ek + 2], this
+         }
+       },
+       xk = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (kk, ek) => ({
+           ...(0, Dk.e)("CAPE"),
+           BLOXD_CAPE_BONES: `${kk}`,
+           BLOXD_CAPE_MAX_Y: (0, fk.rb)(ek)
+         }),
+ ... (595 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   8702: (QQ, FQ, wQ) => {
+   40671: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/159.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/159.js#L6)

```diff
-       pageBody: () => LQ
+       openMobLineupPreview: () => tk,
+       openMobPreview: () => Wk,
+       openPetPreview: () => Xk
```

#### 3. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L9-L39` → after: `L284-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L284-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/159.js#L284-L894) · [Before (L9-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/159.js#L9-L39)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
-       faq: [{
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
-       }, {
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
-       }, {
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
-       }, {
-         question: "What are the best Skywars kits?",
- ... (15 more removed lines; see GitHub link above)
+         x: 0,
+         y: 0,
+         z: 0,
+         zek(kk, ek) {
+           return this.x = kk[ek], this.y = kk[ek + 1], this.z = kk[ek + 2], this
+         }
+       },
+       xk = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (kk, ek) => ({
+           ...(0, Dk.e)("CAPE"),
+           BLOXD_CAPE_BONES: `${kk}`,
+           BLOXD_CAPE_MAX_Y: (0, fk.rb)(ek)
+         }),
+ ... (595 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4-L7` → after: `L4-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/160.js#L4-L363) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/160.js#L4-L7)

```diff
-   8706: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       pageBody: () => LQ
-     });
+   38662: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk,
+       f: () => bk
+     });
+     var Dk = ik(26);
+     let fk = !1;
+ 
+     function Sk() {
+       return fk
+     }
+ 
+     function bk(kk) {
+       fk !== kk && (fk = kk, Dk.j.tm("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (344 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L35` → after: `L365-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L365-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/160.js#L365-L819) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/160.js#L9-L35)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
-       faq: [{
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
-       }, {
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
-       }, {
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
-       }, {
-         question: "What items can you get in Lucky Towers?",
- ... (11 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       rk = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function Pk(kk, ek) {
+       if (kk instanceof fk.e) return {
+         at: bk[ek],
+         code: 0
+       };
+       const ik = (0, Dk.i)(kk),
+ ... (439 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   8708: (QQ, FQ, wQ) => {
+   8738: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L24-L25)

```diff
-         question: "What is the Ultra Lucky Block?",
-         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L27-L28)

```diff
-         question: "What's inside Bloxd lucky blocks?",
-         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L30-L31)

```diff
-         question: "Can other players attack me in my base?",
-         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
```

#### 9. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L33-L34` → after: `L33-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/161.js#L33-L40) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/161.js#L33-L34)

```diff
-         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
-         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
+       }, {
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   8716: (QQ, FQ, wQ) => {
+   8747: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L9-L13)

```diff
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L15-L16)

```diff
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L18-L19)

```diff
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L21-L22)

```diff
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L24-L25)

```diff
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
-         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L27-L28)

```diff
-         question: "Can I make a private server in Bloxd Survival?",
-         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/162.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/162.js#L30-L37)

```diff
-         question: "What happens if I log out during a fight?",
-         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
-       }, {
-         question: "Will my world still be there tomorrow?",
-         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
-       }, {
-         question: "Which Bloxd survival mode should I play?",
-         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   8724: (QQ, FQ, wQ) => {
+   8754: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L9-L13)

```diff
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L15-L16)

```diff
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L18-L19)

```diff
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L21-L22)

```diff
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L24-L25)

```diff
-         question: "Are there mobs in Bloxd Peaceful?",
-         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L27-L28)

```diff
-         question: "What's the difference between Peaceful and Survival in Bloxd?",
-         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L30-L31)

```diff
-         question: "Is Bloxd Peaceful good for beginners?",
-         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L33-L34)

```diff
-         question: "Can I play Bloxd Peaceful with friends?",
-         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
```

#### 10. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L36-L40` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/163.js#L36-L37) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/163.js#L36-L40)

```diff
-         question: "How do I keep my builds safe in Peaceful?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
-       }, {
-         question: "How do I save my progress in Bloxd Peaceful?",
-         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   8728: (QQ, FQ, wQ) => {
+   8756: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L9-L13)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L15-L16)

```diff
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L21-L22)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L24-L25)

```diff
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/164.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/164.js#L30-L31)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+       }, {
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   8735: (QQ, FQ, wQ) => {
+   8759: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L9-L13)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L15-L16)

```diff
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L18-L19)

```diff
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L21-L22)

```diff
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L24-L25)

```diff
-         question: "Do mobs carry guns in Bloxd?",
-         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L27-L28)

```diff
-         question: "Can my pets use guns?",
-         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L30-L31)

```diff
-         question: "Can I turn guns on in a private server?",
-         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/165.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/165.js#L33-L34)

```diff
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   8737: (QQ, FQ, wQ) => {
+   8765: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L9-L13)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L15-L16)

```diff
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L21-L22)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L24-L25)

```diff
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L27-L28)

```diff
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L30-L31)

```diff
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
```

#### 9. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/166.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/166.js#L33-L34)

```diff
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   8745: (QQ, FQ, wQ) => {
+   8771: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L30-L31` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/167.js#L30-L40) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/167.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+       }, {
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   8752: (QQ, FQ, wQ) => {
+   8776: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/168.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/168.js#L30-L37)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
-       }, {
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L4)

```diff
-   8757: (QQ, FQ, wQ) => {
+   8778: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L30-L31)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
```

#### 9. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/169.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/169.js#L33-L34)

```diff
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/170.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/170.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251)

#### 1. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L4)

```diff
-   8762: (QQ, FQ, wQ) => {
+   8787: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L9-L13)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L15-L16)

```diff
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L18-L19)

```diff
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L21-L22)

```diff
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L24-L25)

```diff
-         question: "Which modes does Sky Islands have?",
-         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L27-L28)

```diff
-         question: "Where do you find diamonds in Sky Islands?",
-         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/170.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/170.js#L30-L31)

```diff
-         question: "What is a diamond bounty?",
-         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
+       }, {
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/171.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/171.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d)

#### 1. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L4)

```diff
-   8768: (QQ, FQ, wQ) => {
+   8793: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/171.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/171.js#L30-L37)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
-       }, {
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
-       }, {
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/172.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/172.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413)

#### 1. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L4)

```diff
-   8776: (QQ, FQ, wQ) => {
+   8802: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/172.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/172.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+       }, {
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/173.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/173.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e)

#### 1. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L4)

```diff
-   8782: (QQ, FQ, wQ) => {
+   8810: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
```

#### 3. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
```

#### 4. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
```

#### 5. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "How many phases are in Bloxd One Block?",
+         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
```

#### 6. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "How do I get to the Hub in One Block?",
+         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
```

#### 7. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "Where do One Block coins come from?",
+         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
```

#### 8. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/173.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/173.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
+         question: "How do I open my portal in One Block?",
+         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+       }, {
+         question: "Can I have more than one island?",
+         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/174.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/174.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045)

#### 1. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/174.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/174.js#L4)

```diff
-   8791: (QQ, FQ, wQ) => {
+   8817: (kk, ek, ik) => {
```
