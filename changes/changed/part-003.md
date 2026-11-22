# Changed — Bundle Modifications Report (Part 003 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `3 / 47` (**292** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 002](part-002.md) · [Part 004 →](part-004.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/110.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/110.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a)

#### 29. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L734` → after: `L413-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L413-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L413-L429) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L734)

```diff
-           }(QQ)
+             const fk = Dk.customTexturePackKey;
+             if (!fk) return void(tk.e.isUsingTemporaryTexturePack() && ((0, Vk.reloadBloxd)(), await new Promise((() => {}))));
+             if (tk.e.isUsingTemporaryTexturePack() && tk.e.getTemporaryTexturePackSource() === fk) return;
+             const Sk = Mk.NotificationProvider.showCustomPopup({
+               body: kk => (0, Ok.jsx)(ee, {
+                 schematicId: ik,
+                 texturePackKey: fk,
+                 onClose: kk
+               }),
+               disableExitButton: !0,
+               disablePressBackgroundToClose: !0
+             });
+             await Sk.getResult()
+           }(qk), ek = rk;
+           rk = kk.catch((kk => {
+             console.error("Failed to check for custom texture pack", kk)
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L736` → after: `L431-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L431-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L431-L568) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L736)

```diff
-       }
+         const hk = null !== sk.current;
+         sk.current = null, (0, re.e)(null);
+         const ak = () => {
+           Lk ? (0, mk.navigateToHomePage)() : (dk.current = hk, Dk(-1))
+         };
+         let Wk = !1;
+         const Xk = ik.pathname + ik.search,
+           Bk = () => !Wk && Yk.current === Xk;
+         return rk.then((kk => {
+           let {
+             shouldMatchmake: ik,
+             discordContext: Sk
+           } = kk;
+           Bk() && (ik ? we(null !== Sk && void 0 !== Sk ? Sk : bk.lobbyName, Sk ? "classic" : bk.gameNameWithVariation, bk.directJoinVmUrl).then((kk => {
+             if (null !== kk && Bk())
+               if (kk.isError()) {
+ ... (122 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L740-L768` → after: `L596-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L596-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L596-L617) · [Before (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L740-L768)

```diff
-       let {
-         packUse: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, MQ.y)(), {
-         webGpuUsable: LQ,
-         inUse: qQ,
-         busy: oQ,
-         errorKey: DQ,
-         use: kQ
-       } = FQ;
-       return (0, WQ.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, WQ.jsxs)(uQ.m, {
-           disabled: !0 !== LQ || qQ,
- ... (13 more removed lines; see GitHub link above)
+       return kk = function(kk, ek) {
+         var ik;
+         const Dk = new URLSearchParams(ek),
+           fk = Dk.get("lobby"),
+           Sk = Dk.get("vm"),
+           bk = null !== (ik = fk) && void 0 !== ik ? ik : kk.lobbyName,
+           rk = null !== Sk && void 0 !== Sk ? Sk : kk.directJoinVmUrl;
+         if (bk === kk.lobbyName && rk === kk.directJoinVmUrl) return kk;
+         return {
+           ...kk,
+           lobbyName: bk,
+           directJoinVmUrl: rk
+         }
+       }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
+         if ((0, Sk.F)(kk.directJoinVmUrl)) return kk;
+         const ek = (0, fk.ab)(kk.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L772-L780` → after: `L628-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L628-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L628-L629) · [Before (L772-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L772-L780)

```diff
-       var QQ;
-       const {
-         t: FQ
-       } = (0, MQ.y)(), wQ = (0, mQ.useNavigatePreserveSearch)(), {
-         packId: oQ
-       } = (0, qQ.y)(), {
-         userContext: DQ,
-         isUserContextUpdating: kQ
-       } = (0, AQ.e)(), [HQ, bQ] = (0, LQ.useState)(null), [YQ, eQ] = (0, LQ.useState)(null), [GQ, pQ] = (0, LQ.useState)(0), cQ = (0, LQ.useRef)(0);
+       Dk = !0
+     }
```

#### 33. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L782-L842` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L631-L632) · [Before (L782-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L782-L842)

```diff
-       function CQ() {
-         var QQ;
-         null !== (QQ = (0, mQ.getPreviousLocation)()) && void 0 !== QQ && QQ.startsWith(iQ.W) ? wQ(-1) : wQ(iQ.W)
-       }(0, xQ.c)(CQ), (0, TQ.d)(), (0, LQ.useEffect)((() => {
-         if (kQ || void 0 === oQ) return;
-         const QQ = ++cQ.current;
-         eQ(null), tQ.b.getShaderPack(DQ, oQ).then((FQ => {
-           cQ.current === QQ && bQ(FQ)
-         })).catch((FQ => {
-           cQ.current === QQ && (console.error("Failed to get the shader pack", FQ), bQ(null), eQ({
-             error: FQ
-           }))
-         }))
-       }), [oQ, DQ, kQ, GQ]);
-       const SQ = () => {
-           pQ((QQ => QQ + 1))
- ... (45 more removed lines; see GitHub link above)
+     function Sk() {
+       return Dk
```

#### 34. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L845-L864` → after: `L649-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L649-L650) · [Before (L845-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L845-L864)

```diff
-     function ZQ(QQ) {
-       let {
-         item: FQ,
-         favourites: wQ,
-         packUse: LQ
-       } = QQ;
-       const qQ = wQ.isFavourite(FQ.packId);
-       return (0, WQ.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [eQ.featureFlags.settings.canUseShaderPacks && (0, WQ.jsx)(gQ, {
-           packUse: LQ
-         }), (0, WQ.jsx)(uQ.w, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             wQ.toggle(FQ.packId)
-           },
- ... (4 more removed lines; see GitHub link above)
+     function Mk() {
+       return Promise.all([ik.e(74), ik.e(77), ik.e(89), ik.e(76), ik.e(134), ik.e(267), ik.e(160), ik.e(197), ik.e(137), ik.e(87), ik.e(268), ik.e(63)]).then((() => ik(40256)))
```

#### 35. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L867-L956` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L653-L654) · [Before (L867-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L867-L956)

```diff
-     function yQ(QQ) {
-       let {
-         item: FQ,
-         ownerPreview: wQ,
-         bloxdhubSlug: LQ,
-         actions: qQ
-       } = QQ;
-       const {
-         t: kQ
-       } = (0, MQ.y)(), vQ = (0, YQ.t)(), uQ = null === LQ ? null : (0, oQ.e)(LQ);
-       return (0, WQ.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [FQ.description && (0, WQ.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: FQ.description
-         }), (0, WQ.jsxs)("div", {
- ... (74 more removed lines; see GitHub link above)
+     function Kk() {
+       Promise.all([ik.e(72), ik.e(75), ik.e(74), ik.e(73), ik.e(89), ik.e(86), ik.e(265), ik.e(191), ik.e(221), ik.e(243), ik.e(268), ik.e(46)]).then((() => ik(40591))).catch((() => {}))
```

#### 36. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L959-L985` → after: `L657-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L657-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L657-L677) · [Before (L959-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L959-L985)

```diff
-     function BQ(QQ) {
-       let {
-         label: FQ,
-         time: wQ,
-         now: LQ
-       } = QQ;
-       const {
-         t: qQ,
-         selectedLanguage: oQ
-       } = (0, MQ.y)(), DQ = new Date(wQ);
-       let vQ = DQ.toLocaleDateString();
-       if (LQ - wQ <= 30 * kQ.j) {
-         const QQ = (0, MQ.k)(oQ.code, "shaderPackListing:timeAgo");
-         vQ = qQ("shaderPackListing:timeAgo", {
-           time: (0, kQ.db)(QQ, wQ, LQ)
-         })
- ... (11 more removed lines; see GitHub link above)
+     function xk() {
+       return bk.c.cancelDownloadForJoin(), (0, rk.b)(), (0, fk.g)(), (0, Pk.d)(), (0, Sk.i)(), Kk(), Promise.all([ik.e(77), ik.e(89), ik.e(134), ik.e(267), ik.e(137), ik.e(58)]).then((() => ik(40634))).then((kk => {
+         let {
+           startJoinLoad: ek
+         } = kk;
+         ek()
+       }), (() => {})), mk ??= Mk().then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
+         Dk.e.showGamePack(kk)
+       })), kk)), (kk => {
+         throw mk = null, kk
+       })), mk
+     }
+ 
+     function nk() {
+       return Kk(), ik.e(269).then((() => ik(40641))).catch((() => {})), Mk().then((() => {}))
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L988` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L680) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L988)

```diff
-   4867: (QQ, FQ, wQ) => {
+   8718: (kk, ek, ik) => {
```

#### 38. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L990` → after: `L682-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L682-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L682-L686) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L990)

```diff
-       c: () => DQ
+       e: () => Sk,
+       i: () => bk,
+       m: () => rk,
+       n: () => mk,
+       r: () => Pk
```

#### 39. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L992-L994` → after: `L688-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L688-L689) · [Before (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L992-L994)

```diff
-     var LQ = wQ(1070),
-       qQ = wQ.n(LQ),
-       oQ = wQ(1107);
+     var Dk = ik(189),
+       fk = ik(4563);
```

#### 40. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L997-L1035` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L692) · [Before (L997-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L997-L1035)

```diff
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
-       return (0, oQ.jsx)("div", {
-         className: qQ()("SegmentedToggle", kQ),
-         role: "group",
-         "aria-label": DQ,
-         "data-pad-tabs": uQ,
- ... (23 more removed lines; see GitHub link above)
+       return bk(kk) === Dk.c.gameOrPluginOnPlayerAuthRejected.code
```

#### 41. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L1037-L1076` → after: `L694-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L694-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L694-L699) · [Before (L1037-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L1037-L1076)

```diff
-   },
-   4875: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => oQ,
-       c: () => DQ
-     });
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
- ... (24 more removed lines; see GitHub link above)
+ 
+     function bk(kk) {
+       return "object" === typeof kk && null !== kk ? kk.code : void 0
+     }
+ 
+     function rk(kk) {
```

#### 42. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L1078-L1079` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/110.js#L701-L711) · [Before (L1078-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/110.js#L1078-L1079)

```diff
-       let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
+       return null !== (ek = Object.keys(fk.c).find((ek => fk.c[ek] === kk))) && void 0 !== ek ? ek : null
+     }
+ 
+     function Pk(kk) {
+       return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const mk = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/111.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/111.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4)

#### 1. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L5-L19436` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L4) · [Before (L5-L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L5-L19436)

```diff
-   6038: function(QQ, FQ, wQ) {
-     var LQ;
-     ! function() {
-       var qQ, oQ = 1e9,
-         DQ = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         kQ = !0,
-         vQ = "[DecimalError] ",
-         mQ = vQ + "Invalid argument: ",
-         uQ = vQ + "Exponent out of range: ",
-         HQ = Math.floor,
- ... (19416 more removed lines; see GitHub link above)
+   4926: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19440` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L8-L9) · [Before (L19440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19440)

```diff
-       m: () => mQ
+       m: () => Hk,
+       q: () => pk
```

#### 3. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19442` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L11-L21) · [Before (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19442)

```diff
-     wQ(5240), wQ(53), wQ(5095);
+     var Dk = ik(60),
+       fk = ik(4935),
+       Sk = ik(4319),
+       bk = ik(1345),
+       rk = ik(4946),
+       Pk = ik(1021),
+       mk = ik.n(Pk),
+       Mk = ik(1333),
+       Kk = ik(1688),
+       xk = ik(4951),
+       nk = ik(1066);
```

#### 4. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19445-L19460` → after: `L24-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L24-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L24-L67) · [Before (L19445-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19445-L19460)

```diff
-       return LQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, LQ(QQ)
-     }
- 
-     function qQ(QQ, FQ) {
-       var wQ = Object.keys(QQ);
-       if (Object.getOwnPropertySymbols) {
-         var LQ = Object.getOwnPropertySymbols(QQ);
-         FQ && (LQ = LQ.filter((function(FQ) {
-           return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
-         }))), wQ.push.apply(wQ, LQ)
-       }
-       return wQ
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

#### 5. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19464-L19472` → after: `L71-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L71-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L71-L131) · [Before (L19464-L19472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19464-L19472)

```diff
-       for (var FQ = 1; FQ < arguments.length; FQ++) {
-         var wQ = null != arguments[FQ] ? arguments[FQ] : {};
-         FQ % 2 ? qQ(Object(wQ), !0).forEach((function(FQ) {
-           DQ(QQ, FQ, wQ[FQ])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : qQ(Object(wQ)).forEach((function(FQ) {
-           Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
-         }))
-       }
-       return QQ
+       let {
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
+         disabled: Hk = !1,
+         selectableMax: wk,
+         cappedNote: pk,
+         onChangeComplete: yk
+       } = kk;
+ ... (45 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19475-L19488` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L135-L137) · [Before (L19475-L19488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19475-L19488)

```diff
-     function DQ(QQ, FQ, wQ) {
-       return (FQ = function(QQ) {
-         var FQ = function(QQ, FQ) {
-           if ("object" != LQ(QQ) || !QQ) return QQ;
-           var wQ = QQ[Symbol.toPrimitive];
-           if (void 0 !== wQ) {
-             var qQ = wQ.call(QQ, FQ || "default");
-             if ("object" != LQ(qQ)) return qQ;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === FQ ? String : Number)(QQ)
-         }(QQ, "string");
-         return "symbol" == LQ(FQ) ? FQ : FQ + ""
-       }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
+     function lk(kk) {
+       var ek;
+       let {
```

#### 7. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19490-L19524` → after: `L139-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L139-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L139-L176) · [Before (L19490-L19524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19490-L19524)

```diff
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : QQ[FQ] = wQ, QQ
-     }
-     var kQ = Math.PI / 180,
-       vQ = function(QQ) {
-         return 180 * QQ / Math.PI
-       },
-       mQ = function(QQ, FQ, wQ, LQ) {
-         return {
-           x: QQ + Math.cos(-kQ * LQ) * wQ,
-           y: FQ + Math.sin(-kQ * LQ) * wQ
-         }
-       },
-       uQ = function(QQ, FQ) {
- ... (19 more removed lines; see GitHub link above)
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
+         disabled: Ck = !1
+       } = kk;
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19526-L19629` → after: `L178-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L178-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L178-L233) · [Before (L19526-L19629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19526-L19629)

```diff
-         var kQ = (wQ - qQ) / DQ,
-           mQ = Math.acos(kQ);
-         return LQ > oQ && (mQ = 2 * Math.PI - mQ), {
-           radius: DQ,
-           angle: vQ(mQ),
-           angleInRadian: mQ
-         }
-       },
-       HQ = function(QQ, FQ) {
-         var wQ = FQ.startAngle,
-           LQ = FQ.endAngle,
-           qQ = Math.floor(wQ / 360),
-           oQ = Math.floor(LQ / 360);
-         return QQ + 360 * Math.min(qQ, oQ)
-       },
-       bQ = function(QQ, FQ) {
- ... (88 more removed lines; see GitHub link above)
+         return kk.addEventListener("keyup", ek), () => {
+           kk.removeEventListener("keyup", ek)
+         }
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
+ ... (40 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19633-L19637` → after: `L237-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L237-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L237-L258) · [Before (L19633-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19633-L19637)

```diff
-       return cQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, cQ(QQ)
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
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19639-L19666` → after: `L260-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L260-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L260-L290) · [Before (L19639-L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19639-L19666)

```diff
-     var CQ = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
-         mouseout: "onMouseOut",
-         mouseenter: "onMouseEnter",
-         mouseleave: "onMouseLeave",
-         touchcancel: "onTouchCancel",
-         touchend: "onTouchEnd",
-         touchmove: "onTouchMove",
-         touchstart: "onTouchStart",
-         contextmenu: "onContextMenu",
-         dblclick: "onDoubleClick"
-       },
- ... (12 more removed lines; see GitHub link above)
+   },
+   6513: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => Gk
+     });
+     var Dk = ik(60),
+       fk = ik(1496),
+       Sk = ik(6396),
+       bk = ik(1207),
+       rk = ik(314),
+       Pk = ik(1327),
+       mk = ik(1479),
+       Mk = ik(1410),
+       Kk = ik(1345),
+       xk = ik(2540),
+       nk = ik(2671),
+ ... (15 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19668-L19675` → after: `L292-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L292-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L292-L453) · [Before (L19668-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19668-L19675)

```diff
-     function OQ(QQ, FQ) {
-       var wQ = [],
-         LQ = [];
-       return LQ = Array.isArray(FQ) ? FQ.map((function(QQ) {
-         return SQ(QQ)
-       })) : [SQ(FQ)], RQ(QQ).forEach((function(QQ) {
-         var FQ = qQ()(QQ, "type.displayName") || qQ()(QQ, "type.name"); - 1 !== LQ.indexOf(FQ) && wQ.push(QQ)
-       })), wQ
+     function Vk(kk) {
+       let {
+         details: ek,
+         owner: ik,
+         onChanged: fk
+       } = kk;
+       const {
+         t: bk
+       } = (0, pk.D)(), rk = (0, mk.useNavigatePreserveSearch)(), {
+         userContext: Kk
+       } = (0, Hk.d)(), [xk, nk] = (0, Dk.useState)(!1), [Uk, lk] = (0, Dk.useState)(null), [yk, Yk] = (0, Dk.useState)(!1), {
+         packId: Vk,
+         name: Fk,
+         description: uk,
+         live: qk
+       } = ek;
+ ... (146 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19678-L19680` → after: `L464-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L464-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L464-L538) · [Before (L19678-L19680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19678-L19680)

```diff
-     function sQ(QQ, FQ) {
-       var wQ = OQ(QQ, FQ);
-       return wQ && wQ[0]
+     function hk(kk) {
+       let {
+         item: ek
+       } = kk;
+       const {
+         t: ik
+       } = (0, pk.D)(), [fk] = (0, Qk.h)(), [bk, rk] = (0, Dk.useState)(fk), [Pk, mk] = (0, Dk.useState)(!1), [Mk, Kk] = (0, Dk.useState)(!1), {
+         s3Url: xk
+       } = zk.clientSideServerUrls, {
+         width: nk,
+         height: Uk
+       } = Sk.x.large, Hk = (0, Sk.y)(xk, ek, bk, "large"), {
+         renderVersion: wk
+       } = ek;
+       return (0, sk.jsxs)("div", {
+         className: "ShaderPackPreviews",
+ ... (59 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19682-L19720` → after: `L540-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L540-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L540-L551) · [Before (L19682-L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19682-L19720)

```diff
-     var rQ = function(QQ) {
-         if (!QQ || !QQ.props) return !1;
-         var FQ = QQ.props,
-           wQ = FQ.width,
-           LQ = FQ.height;
-         return !(!(0, AQ.t)(wQ) || wQ <= 0 || !(0, AQ.t)(LQ) || LQ <= 0)
-       },
-       IQ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
-       UQ = function(QQ) {
-         return QQ && QQ.type && vQ()(QQ.type) && IQ.indexOf(QQ.type) >= 0
-       },
-       NQ = function(QQ) {
-         return QQ && "object" === cQ(QQ) && "clipDot" in QQ
-       },
-       TQ = function(QQ, FQ, wQ) {
-         if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
- ... (23 more removed lines; see GitHub link above)
+ 
+     function ak(kk) {
+       let {
+         fullUrl: ek,
+         largeUrl: ik,
+         alt: fk,
+         onClose: Sk
+       } = kk;
+       const bk = (0, Dk.useRef)(null);
+       return (0, qk.u)("popup", bk, Sk), (0, Dk.useEffect)((() => {
+         function kk(kk) {
+           "Escape" === kk.key && (kk.stopPropagation(), Sk())
```

#### 14. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19722-L19733` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L553-L554) · [Before (L19722-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19722-L19733)

```diff
-         return !0
-       },
-       zQ = function(QQ, FQ) {
-         if (DQ()(QQ) && DQ()(FQ)) return !0;
-         if (!DQ()(QQ) && !DQ()(FQ)) {
-           var wQ = QQ.props || {},
-             LQ = wQ.children,
-             qQ = pQ(wQ, MQ),
-             oQ = FQ.props || {},
-             kQ = oQ.children,
-             vQ = pQ(oQ, GQ);
-           return LQ && kQ ? (0, tQ.e)(qQ, vQ) && KQ(LQ, kQ) : !LQ && !kQ && (0, tQ.e)(qQ, vQ)
+         return window.addEventListener("keydown", kk, !0), () => {
+           window.removeEventListener("keydown", kk, !0)
```

#### 15. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19735-L19750` → after: `L556-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L556-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L556-L566) · [Before (L19735-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19735-L19750)

```diff
-         return !1
-       },
-       lQ = function(QQ, FQ) {
-         var wQ = [],
-           LQ = {};
-         return RQ(QQ).forEach((function(QQ, qQ) {
-           if (UQ(QQ)) wQ.push(QQ);
-           else if (QQ) {
-             var oQ = SQ(QQ.type),
-               DQ = FQ[oQ] || {},
-               kQ = DQ.handler,
-               vQ = DQ.once;
-             if (kQ && (!vQ || !LQ[oQ])) {
-               var mQ = kQ(QQ, oQ, qQ);
-               wQ.push(mQ), LQ[oQ] = !0
-             }
+       }), [Sk]), (0, Fk.createPortal)((0, sk.jsxs)("div", {
+         ref: bk,
+         className: "ShaderPackFullSize",
+         onClick: Sk,
+         children: [(0, sk.jsx)("img", {
+           className: "ShaderPackFullSizeImage",
+           src: ek,
+           alt: fk,
+           draggable: !1,
+           style: {
+             backgroundImage: `url(${ik})`
```

#### 16. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19752-L19768` → after: `L568-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L568-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L568-L572) · [Before (L19752-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19752-L19768)

```diff
-         })), wQ
-       },
-       jQ = function(QQ) {
-         var FQ = QQ && QQ.type;
-         return FQ && CQ[FQ] ? CQ[FQ] : null
-       },
-       aQ = function(QQ, FQ) {
-         return RQ(FQ).indexOf(QQ)
-       }
-   },
-   5269: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ) {
-       for (var wQ in QQ)
-         if ({}.hasOwnProperty.call(QQ, wQ) && (!{}.hasOwnProperty.call(FQ, wQ) || QQ[wQ] !== FQ[wQ])) return !1;
-       for (var LQ in FQ)
-         if ({}.hasOwnProperty.call(FQ, LQ) && !{}.hasOwnProperty.call(QQ, LQ)) return !1;
- ... (1 more removed lines; see GitHub link above)
+         }), (0, sk.jsx)(Mk.n, {
+           className: "ShaderPackFullSizeClose",
+           onClick: Sk
+         })]
+       }), document.body)
```

#### 17. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19770-L19780` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L574) · [Before (L19770-L19780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19770-L19780)

```diff
-     wQ.d(FQ, {
-       e: () => LQ
-     })
-   },
-   6044: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => uQ
-     });
-     var LQ = wQ(5887),
-       qQ = wQ(5974),
-       oQ = wQ(5252);
+     const Wk = 5;
```

#### 18. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19783-L19788` → after: `L577-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L577-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L577-L587) · [Before (L19783-L19788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19783-L19788)

```diff
-       return DQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, DQ(QQ)
-     }
+       let {
+         item: ek,
+         packUrl: ik,
+         baselineUrl: fk
+       } = kk;
+       const {
+         t: bk
+       } = (0, pk.D)(), [rk, Pk] = (0, Dk.useState)(50), mk = (0, Dk.useRef)(!1), Mk = (0, Dk.useRef)(null), {
+         width: Kk,
+         height: xk
+       } = Sk.x.large;
```

#### 19. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19790-L19796` → after: `L589-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L589-L590) · [Before (L19790-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19790-L19796)

```diff
-     function kQ(QQ, FQ) {
-       var wQ = Object.keys(QQ);
-       if (Object.getOwnPropertySymbols) {
-         var LQ = Object.getOwnPropertySymbols(QQ);
-         FQ && (LQ = LQ.filter((function(FQ) {
-           return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
-         }))), wQ.push.apply(wQ, LQ)
+       function nk(kk) {
+         Pk((ek => (0, uk.d)(ek + kk, 0, 100)))
```

#### 20. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19801-L19808` → after: `L593-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L593-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L593-L595) · [Before (L19801-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19801-L19808)

```diff
-     function vQ(QQ) {
-       for (var FQ = 1; FQ < arguments.length; FQ++) {
-         var wQ = null != arguments[FQ] ? arguments[FQ] : {};
-         FQ % 2 ? kQ(Object(wQ), !0).forEach((function(FQ) {
-           mQ(QQ, FQ, wQ[FQ])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : kQ(Object(wQ)).forEach((function(FQ) {
-           Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
-         }))
+       function Uk(kk) {
+         const ek = kk.currentTarget.getBoundingClientRect();
+         Pk((0, uk.d)((kk.clientX - ek.left) / ek.width * 100, 0, 100))
```

#### 21. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19810-L19871` → after: `L597-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L597-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L597-L657) · [Before (L19810-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19810-L19871)

```diff
-       return QQ
-     }
- 
-     function mQ(QQ, FQ, wQ) {
-       return (FQ = function(QQ) {
-         var FQ = function(QQ, FQ) {
-           if ("object" != DQ(QQ) || !QQ) return QQ;
-           var wQ = QQ[Symbol.toPrimitive];
-           if (void 0 !== wQ) {
-             var LQ = wQ.call(QQ, FQ || "default");
-             if ("object" != DQ(LQ)) return LQ;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === FQ ? String : Number)(QQ)
-         }(QQ, "string");
-         return "symbol" == DQ(FQ) ? FQ : FQ + ""
- ... (46 more removed lines; see GitHub link above)
+       return (0, Ik.f)(Mk, {
+         adjust: kk => {
+           nk(kk * Wk)
+         },
+         setFraction: kk => {
+           Pk(100 * kk)
+         },
+         endDrag: () => {}
+       }), (0, sk.jsxs)("div", {
+         ref: Mk,
+         className: "ShaderPackCompare",
+         "data-pad-slider": "",
+         "data-pad-focusable": "",
+         role: "slider",
+         tabIndex: 0,
+         "aria-label": bk("shaderPackListing:compare"),
+ ... (45 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19901-L19905` → after: `L662-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L662-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L662-L675) · [Before (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19901-L19905)

```diff
-       return DQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, DQ(QQ)
+       let {
+         side: ek,
+         onClick: ik,
+         children: Dk
+       } = kk;
+       return (0, sk.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${ek}`,
+         onClick: ik,
+         children: (0, sk.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: Dk
+         })
+       })
```

#### 23. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19907-L19953` → after: `L677-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L677-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L677-L687) · [Before (L19907-L19953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19907-L19953)

```diff
-     var kQ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "a … [truncated]
-       vQ = ["points", "pathLength"],
-       mQ = {
-         svg: ["viewBox", "children"],
-         polygon: vQ,
-         polyline: vQ
-       },
-       uQ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus" … [truncated]
-       HQ = function(QQ, FQ) {
-         if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
-         var wQ = QQ;
-         if ((0, LQ.isValidElement)(QQ) && (wQ = QQ.props), !oQ()(wQ)) return null;
-         var qQ = {};
-         return Object.keys(wQ).forEach((function(QQ) {
-           uQ.includes(QQ) && (qQ[QQ] = FQ || function(FQ) {
-             return wQ[QQ](wQ, FQ)
- ... (31 more removed lines; see GitHub link above)
+     var Bk = ik(4926),
+       ck = ik(280),
+       Tk = ik(6505);
+     const Zk = {
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
```

#### 24. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19956-L19978` → after: `L690-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L690-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L690-L730) · [Before (L19956-L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19956-L19978)

```diff
-       if ("object" === typeof QQ && null !== QQ) {
-         var FQ = QQ.$$typeof;
-         switch (FQ) {
-           case LQ:
-             switch (QQ = QQ.type) {
-               case oQ:
-               case kQ:
-               case DQ:
-               case bQ:
-               case YQ:
-                 return QQ;
-               default:
-                 switch (QQ = QQ && QQ.$$typeof) {
-                   case uQ:
-                   case mQ:
-                   case HQ:
- ... (7 more removed lines; see GitHub link above)
+       const {
+         userContext: ek
+       } = (0, Hk.d)(), [fk, Sk] = (0, Dk.useState)(null), [bk, rk] = (0, Dk.useState)(!1), [Pk, mk] = (0, Dk.useState)(!1), [Mk, Kk] = (0, Dk.useState)(null), xk = null === kk || void 0 === kk ? void 0 : kk.packId, nk = null === kk || void 0 === kk ? void 0 : kk.sourceHash;
+       return (0, Dk.useEffect)((() => {
+         if (rk(!1), Kk(null), void 0 === xk) return;
+         let kk = !1;
+         return Promise.all([(0, lk.hasUsableWebGpuAdapter)(), (0, Tk.f)()]).then((ek => {
+           let [ik, Dk] = ek;
+           var fk;
+           kk || (Sk(ik), rk((null === Dk || void 0 === Dk || null === (fk = Dk.listing) || void 0 === fk ? void 0 : fk.packId) === xk && Dk.listing.sourceHash === nk))
+         })).catch((ek => {
+           console.error("Failed to check whether this shader pack can be used", ek), kk || Sk(!1)
+         })), () => {
+           kk = !0
+         }
+       }), [xk, nk]), {
+ ... (25 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19980-L19981` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L732) · [Before (L19980-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19980-L19981)

```diff
-           case qQ:
-             return FQ
+           }(kk)
```

#### 26. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19985-L19992` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L736) · [Before (L19985-L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19985-L19992)

```diff
-     wQ = Symbol.for("react.module.reference"), FQ.isFragment = function(QQ) {
-       return eQ(QQ) === oQ
-     }
-   },
-   5258: (QQ, FQ, wQ) => {
-     QQ.exports = wQ(5263)
-   },
-   4909: (QQ, FQ, wQ) => {
+ 
```

#### 27. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L19994-L20009` → after: `L738-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L738-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L738-L766) · [Before (L19994-L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L19994-L20009)

```diff
-       var FQ, wQ, qQ = "";
-       if ("string" == typeof QQ || "number" == typeof QQ) qQ += QQ;
-       else if ("object" == typeof QQ)
-         if (Array.isArray(QQ)) {
-           var oQ = QQ.length;
-           for (FQ = 0; FQ < oQ; FQ++) QQ[FQ] && (wQ = LQ(QQ[FQ])) && (qQ && (qQ += " "), qQ += wQ)
-         } else
-           for (wQ in QQ) QQ[wQ] && (qQ && (qQ += " "), qQ += wQ);
-       return qQ
-     }
-     wQ.d(FQ, {
-       b: () => qQ
-     });
-     const qQ = function() {
-       for (var QQ, FQ, wQ = 0, qQ = "", oQ = arguments.length; wQ < oQ; wQ++)(QQ = arguments[wQ]) && (FQ = LQ(QQ)) && (qQ && (qQ += " "), qQ += FQ);
-       return qQ
+       let {
+         packUse: ek
+       } = kk;
+       const {
+         t: ik
+       } = (0, pk.D)(), {
+         webGpuUsable: Dk,
+         inUse: fk,
+         busy: Sk,
+         errorKey: bk,
+         use: rk
+       } = ek;
+       return (0, sk.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, sk.jsxs)(Mk.r, {
+           disabled: !0 !== Dk || fk,
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20021-L20029` → after: `L770-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L770-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L770-L778) · [Before (L20021-L20029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20021-L20029)

```diff
-       var QQ, FQ, wQ = (0, qQ.e)().unknown(void 0),
-         DQ = wQ.domain,
-         kQ = wQ.range,
-         vQ = 0,
-         mQ = 1,
-         uQ = !1,
-         HQ = 0,
-         bQ = 0,
-         YQ = .5;
+       var kk;
+       const {
+         t: ek
+       } = (0, pk.D)(), ik = (0, mk.useNavigatePreserveSearch)(), {
+         packId: Sk
+       } = (0, fk.y)(), {
+         userContext: bk,
+         isUserContextUpdating: rk
+       } = (0, Hk.d)(), [Kk, xk] = (0, Dk.useState)(null), [nk, lk] = (0, Dk.useState)(null), [yk, Yk] = (0, Dk.useState)(0), Lk = (0, Dk.useRef)(0);
```

#### 29. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20032-L20068` → after: `L781-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L781-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L781-L840) · [Before (L20032-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20032-L20068)

```diff
-         var wQ = DQ().length,
-           LQ = mQ < vQ,
-           qQ = LQ ? mQ : vQ,
-           oQ = LQ ? vQ : mQ;
-         QQ = (oQ - qQ) / Math.max(1, wQ - HQ + 2 * bQ), uQ && (QQ = Math.floor(QQ)), qQ += (oQ - qQ - QQ * (wQ - HQ)) * YQ, FQ = QQ * (1 - HQ), uQ && (qQ = Math.round(qQ), FQ = Math.round(FQ));
-         var xQ = function(QQ, FQ, wQ) {
-           QQ = +QQ, FQ = +FQ, wQ = (qQ = arguments.length) < 2 ? (FQ = QQ, QQ = 0, 1) : qQ < 3 ? 1 : +wQ;
-           for (var LQ = -1, qQ = 0 | Math.max(0, Math.ceil((FQ - QQ) / wQ)), oQ = new Array(qQ); ++LQ < qQ;) oQ[LQ] = QQ + LQ * wQ;
-           return oQ
-         }(wQ).map((function(FQ) {
-           return qQ + QQ * FQ
-         }));
-         return kQ(LQ ? xQ.reverse() : xQ)
-       }
-       return delete wQ.unknown, wQ.domain = function(QQ) {
-         return arguments.length ? (DQ(QQ), xQ()) : DQ()
- ... (21 more removed lines; see GitHub link above)
+         var kk;
+         null !== (kk = (0, mk.getPreviousLocation)()) && void 0 !== kk && kk.startsWith(jk.S) ? ik(-1) : ik(jk.S)
+       }(0, Uk.b)(Ck), (0, Qk.d)(), (0, Dk.useEffect)((() => {
+         if (rk || void 0 === Sk) return;
+         const kk = ++Lk.current;
+         lk(null), wk.b.getShaderPack(bk, Sk).then((ek => {
+           Lk.current === kk && xk(ek)
+         })).catch((ek => {
+           Lk.current === kk && (console.error("Failed to get the shader pack", ek), xk(null), lk({
+             error: ek
+           }))
+         }))
+       }), [Sk, bk, rk, yk]);
+       const Ak = () => {
+           Yk((kk => kk + 1))
+         },
+ ... (44 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20148-L20149` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L845-L847) · [Before (L20148-L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20148-L20149)

```diff
-         _intern: wQ,
-         _key: LQ
+         item: ek,
+         favourites: ik,
+         packUse: Dk
```

#### 31. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20151-L20152` → after: `L849-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L849-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L849-L862) · [Before (L20151-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20151-L20152)

```diff
-       const qQ = LQ(FQ);
-       return wQ.has(qQ) ? wQ.get(qQ) : FQ
+       const fk = ik.isFavourite(ek.packId);
+       return (0, sk.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [lk.featureFlags.settings.canUseShaderPacks && (0, sk.jsx)(gk, {
+           packUse: Dk
+         }), (0, sk.jsx)(Mk.x, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             ik.toggle(ek.packId)
+           },
+           isLiked: !0 === fk,
+           isLoading: null === fk
+         })]
+       })
```

#### 32. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20155` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L865) · [Before (L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20155)

```diff
-     function oQ(QQ, FQ) {
+     function Rk(kk) {
```

#### 33. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20157-L20158` → after: `L867-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L867-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L867-L870) · [Before (L20157-L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20157-L20158)

```diff
-         _intern: wQ,
-         _key: LQ
+         item: ek,
+         ownerPreview: ik,
+         bloxdhubSlug: Dk,
+         actions: fk
```

#### 34. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20160-L20161` → after: `L872-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L872-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L872-L954) · [Before (L20160-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20160-L20161)

```diff
-       const qQ = LQ(FQ);
-       return wQ.has(qQ) ? wQ.get(qQ) : (wQ.set(qQ, FQ), FQ)
+       const {
+         t: rk
+       } = (0, pk.D)(), Pk = (0, nk.n)(), Mk = null === Dk ? null : (0, Sk.h)(Dk);
+       return (0, sk.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [ek.description && (0, sk.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: ek.description
+         }), (0, sk.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+           children: [(null !== ik || null !== Mk) && (0, sk.jsx)("div", {
+             className: "ShaderPackAuthor",
+             children: null !== ik ? (0, sk.jsxs)(sk.Fragment, {
+               children: [(0, sk.jsx)(xk.d, {
+                 playerSocialPreview: ik,
+                 showLocation: !1,
+ ... (67 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20164` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L957) · [Before (L20164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20164)

```diff
-     function DQ(QQ, FQ) {
+     function Jk(kk) {
```

#### 36. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20166-L20167` → after: `L959-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L959-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L959-L961) · [Before (L20166-L20167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20166-L20167)

```diff
-         _intern: wQ,
-         _key: LQ
+         label: ek,
+         time: ik,
+         now: Dk
```

#### 37. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20169-L20191` → after: `L963-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L963-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L963-L972) · [Before (L20169-L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20169-L20191)

```diff
-       const qQ = LQ(FQ);
-       return wQ.has(qQ) && (FQ = wQ.get(qQ), wQ.delete(qQ)), FQ
-     }
- 
-     function kQ(QQ) {
-       return null !== QQ && "object" === typeof QQ ? QQ.valueOf() : QQ
-     }
-     var vQ = wQ(5986);
-     const mQ = Symbol("implicit");
- 
-     function uQ() {
-       var QQ = new LQ,
-         FQ = [],
-         wQ = [],
-         qQ = mQ;
- 
- ... (7 more removed lines; see GitHub link above)
+       const {
+         t: fk,
+         selectedLanguage: Sk
+       } = (0, pk.D)(), bk = new Date(ik);
+       let Pk = bk.toLocaleDateString();
+       if (Dk - ik <= 30 * rk.g) {
+         const kk = (0, pk.n)(Sk.code, "shaderPackListing:timeAgo");
+         Pk = fk("shaderPackListing:timeAgo", {
+           time: (0, rk.T)(kk, ik, Dk)
+         })
```

#### 38. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20193-L20204` → after: `L974-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L974-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L974-L983) · [Before (L20193-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20193-L20204)

```diff
-       return oQ.domain = function(wQ) {
-         if (!arguments.length) return FQ.slice();
-         FQ = [], QQ = new LQ;
-         for (const LQ of wQ) QQ.has(LQ) || QQ.set(LQ, FQ.push(LQ) - 1);
-         return oQ
-       }, oQ.range = function(QQ) {
-         return arguments.length ? (wQ = Array.from(QQ), oQ) : wQ.slice()
-       }, oQ.unknown = function(QQ) {
-         return arguments.length ? (qQ = QQ, oQ) : qQ
-       }, oQ.copy = function() {
-         return uQ(FQ, wQ).unknown(qQ)
-       }, vQ.h.apply(oQ, arguments), oQ
+       return (0, sk.jsx)(Kk.i, {
+         tooltipInner: bk.toLocaleString(),
+         children: (0, sk.jsxs)("div", {
+           children: [(0, sk.jsx)("dt", {
+             children: ek
+           }), (0, sk.jsx)("dd", {
+             children: Pk
+           })]
+         })
+       })
```

#### 39. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20207` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L986) · [Before (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20207)

```diff
-   6046: (QQ, FQ, wQ) => {
+   4946: (kk, ek, ik) => {
```

#### 40. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20211` → after: `L990-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L990-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L990-L992) · [Before (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20211)

```diff
-     Array.prototype.slice;
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(1066);
```

#### 41. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20214-L20221` → after: `L995-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L995-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L995-L1033) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20214-L20221)

```diff
-       return "object" === typeof QQ && "length" in QQ ? QQ : Array.from(QQ)
-     }
-   },
-   5945: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return function() {
-         return QQ
-       }
+       let {
+         options: ek,
+         value: ik,
+         onChange: Dk,
+         ariaLabel: bk,
+         className: rk,
+         reselectable: Pk = !1,
+         keepsFocus: mk = !1,
+         padTabs: Mk
+       } = kk;
+       const Kk = void 0 !== Mk;
+       return (0, Sk.jsx)("div", {
+         className: fk()("SegmentedToggle", rk),
+         role: "group",
+         "aria-label": bk,
+         "data-pad-tabs": Mk,
+ ... (23 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20227` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L1036) · [Before (L20227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20227)

```diff
-   5947: (QQ, FQ, wQ) => {
+   4951: (kk, ek, ik) => {
```

#### 43. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20229` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L1038-L1039) · [Before (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20229)

```diff
-       e: () => mQ
+       c: () => Sk,
+       f: () => bk
```

#### 44. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20231-L20307` → after: `L1041-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1041-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L1041-L1064) · [Before (L20231-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20231-L20307)

```diff
-     const LQ = Math.PI,
-       qQ = 2 * LQ,
-       oQ = 1e-6,
-       DQ = qQ - oQ;
- 
-     function kQ(QQ) {
-       this._ += QQ[0];
-       for (let FQ = 1, wQ = QQ.length; FQ < wQ; ++FQ) this._ += arguments[FQ] + QQ[FQ]
-     }
-     class vQ {
-       constructor(QQ) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == QQ ? kQ : function(QQ) {
-           let FQ = Math.floor(QQ);
-           if (!(FQ >= 0)) throw new Error(`invalid digits: ${QQ}`);
-           if (FQ > 15) return kQ;
-           const wQ = 10 ** FQ;
- ... (61 more removed lines; see GitHub link above)
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
+           if (kk.current) return ((kk, ek) => (fk.set(kk, ek), () => {
+             fk.get(kk) === ek && fk.delete(kk)
+           }))(kk.current, {
+             adjust: kk => {
+               ik.current.adjust(kk)
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20326` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L1067) · [Before (L20326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20326)

```diff
-   5787: (QQ, FQ, wQ) => {
+   6505: (kk, ek, ik) => {
```

#### 46. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20328` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L1069-L1070) · [Before (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20328)

```diff
-       d: () => oQ
+       c: () => fk,
+       f: () => Sk
```

#### 47. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L20330-L20339` → after: `L1072-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L1072-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/111.js#L1072-L1077) · [Before (L20330-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/111.js#L20330-L20339)

```diff
-     var LQ = !0,
-       qQ = "Invariant failed";
- 
-     function oQ(QQ, FQ) {
-       if (!QQ) {
-         if (LQ) throw new Error(qQ);
-         var wQ = "function" === typeof FQ ? FQ() : FQ,
-           oQ = wQ ? "".concat(qQ, ": ").concat(wQ) : qQ;
-         throw new Error(oQ)
-       }
+     var Dk = ik(38);
+     const fk = "shaderPack";
+     async function Sk() {
+       var kk;
+       let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (kk = await Dk.e.getItem(fk, ek)) && void 0 !== kk ? kk : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/112.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/112.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e)

#### 1. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L5-L30` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L4-L7) · [Before (L5-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L5-L30)

```diff
-   6280: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       Graph: () => XQ,
-       debug: () => Iw,
-       default: () => Nw,
-       graphlib: () => oQ,
-       layout: () => Yw,
-       util: () => Uw,
-       version: () => oF
-     });
-     var LQ = Object.defineProperty,
-       qQ = (QQ, FQ, wQ) => ((QQ, FQ, wQ) => FQ in QQ ? LQ(QQ, FQ, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: wQ
- ... (10 more removed lines; see GitHub link above)
+   4970: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => mk,
+       e: () => Pk
```

#### 2. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L32-L242` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L9-L13) · [Before (L32-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L32-L242)

```diff
-     var DQ = Object.defineProperty,
-       kQ = (QQ, FQ) => {
-         for (var wQ in FQ) DQ(QQ, wQ, {
-           get: FQ[wQ],
-           enumerable: !0
-         })
-       },
-       vQ = class {
-         constructor(QQ) {
-           this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () … [truncated]
-         }
-         isDirected() {
-           return this._isDirected
-         }
-         isMultigraph() {
-           return this._isMultigraph
- ... (195 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1410),
+       Sk = ik(1172),
+       bk = ik(99),
+       rk = ik(1066);
```

#### 3. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L244-L277` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L15-L16) · [Before (L244-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L244-L277)

```diff
-     function mQ(QQ, FQ) {
-       QQ[FQ] ? QQ[FQ]++ : QQ[FQ] = 1
-     }
- 
-     function uQ(QQ, FQ) {
-       void 0 !== QQ[FQ] && !--QQ[FQ] && delete QQ[FQ]
-     }
- 
-     function HQ(QQ, FQ, wQ, LQ) {
-       let qQ = "" + FQ,
-         oQ = "" + wQ;
-       if (!QQ && qQ > oQ) {
-         let QQ = qQ;
-         qQ = oQ, oQ = QQ
-       }
-       return qQ + "\x01" + oQ + "\x01" + (void 0 === LQ ? "\0" : LQ)
- ... (18 more removed lines; see GitHub link above)
+     function Pk() {
+       return !(0, bk.isMobile)()
```

#### 4. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L281-L368` → after: `L20-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L20-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L20-L38) · [Before (L281-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L281-L368)

```diff
-       return QQ.nodes().map((FQ => {
-         let wQ = QQ.node(FQ),
-           LQ = QQ.parent(FQ),
-           qQ = {
-             v: FQ
-           };
-         return void 0 !== wQ && (qQ.value = wQ), void 0 !== LQ && (qQ.parent = LQ), qQ
-       }))
-     }
- 
-     function AQ(QQ) {
-       return QQ.edges().map((FQ => {
-         let wQ = QQ.edge(FQ),
-           LQ = {
-             v: FQ.v,
-             w: FQ.w
- ... (72 more removed lines; see GitHub link above)
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
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L370-L490` → after: `L40-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L40-L50) · [Before (L370-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L370-L490)

```diff
-         }));
-         let uQ = kQ.length;
-         for (let HQ = 1; HQ < uQ && (qQ = !1, DQ++, mQ(), qQ); HQ++);
-         if (DQ === uQ - 1 && (qQ = !1, mQ(), qQ)) throw new Error("The graph contains a negative weight cycle");
-         return oQ
-       }(QQ, String(FQ), wQ || MQ, LQ || function(FQ) {
-         var wQ;
-         return null != (wQ = QQ.outEdges(FQ)) ? wQ : []
-       })
-     }
- 
-     function pQ(QQ) {
-       let FQ, wQ = {},
-         LQ = [];
- 
-       function qQ(LQ) {
- ... (105 more removed lines; see GitHub link above)
+         }), Pk() && (0, rk.jsx)(fk.f, {
+           disabled: ek,
+           onClick: ik,
+           children: mk("general:chooseFolder")
+         }), (0, rk.jsx)(fk.f, {
+           disabled: ek,
+           onClick: () => {
+             Mk.current.click()
+           },
+           children: mk("general:chooseZip")
+         })]
```

#### 6. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L494-L497` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L63-L67) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L494-L497)

```diff
-     function iQ(QQ, FQ, wQ) {
-       return QQ.nodes().reduce((function(LQ, qQ) {
-         return LQ[qQ] = SQ(QQ, qQ, FQ, wQ), LQ
-       }), {})
+     function Sk(kk, ek) {
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const Dk = {};
+       for (const fk in ik) Dk[fk] = `\0${fk}\0`;
+       return kk(ek, Dk).replace(/\0(\w+)\0/g, ((kk, ek) => ik[ek]))
```

#### 7. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L501-L534` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L71) · [Before (L501-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L501-L534)

```diff
-       let FQ = 0,
-         wQ = [],
-         LQ = {},
-         qQ = [];
- 
-       function oQ(DQ) {
-         var kQ;
-         let vQ = LQ[DQ] = {
-           onStack: !0,
-           lowlink: FQ,
-           index: FQ++
-         };
-         if (wQ.push(DQ), null == (kQ = QQ.successors(DQ)) || kQ.forEach((function(QQ) {
-             if (QQ in LQ) {
-               let FQ = LQ[QQ];
-               null != FQ && FQ.onStack && (vQ.lowlink = Math.min(vQ.lowlink, FQ.index))
- ... (18 more removed lines; see GitHub link above)
+       return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
```

#### 8. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L538-L586` → after: `L75-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L75-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L75-L78) · [Before (L538-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L538-L586)

```diff
-       return WQ(QQ).filter((function(FQ) {
-         var wQ;
-         let LQ = FQ[0];
-         return !!LQ && (FQ.length > 1 || 1 === FQ.length && (null != (wQ = QQ.outEdges(LQ, LQ)) ? wQ : []).length > 0)
-       }))
-     }
-     var OQ = () => 1;
- 
-     function sQ(QQ, FQ, wQ) {
-       return function(QQ, FQ, wQ) {
-         let LQ = {},
-           qQ = QQ.nodes();
-         return qQ.forEach((function(QQ) {
-           let oQ = {};
-           LQ[QQ] = oQ, oQ[QQ] = {
-             distance: 0,
- ... (33 more removed lines; see GitHub link above)
+       const ek = new Map(kk.map((kk => [Pk(kk).join("."), kk])));
+       if (0 === ek.size) return [];
+       const ik = Mk([...ek.values()]);
+       return 0 === ik[0].length ? [] : ik
```

#### 9. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L595-L603` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L82) · [Before (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L595-L603)

```diff
-       let FQ = {},
-         wQ = {},
-         LQ = [];
-       if (QQ.sinks().forEach((function qQ(oQ) {
-           var DQ;
-           if (oQ in wQ) throw new rQ;
-           oQ in FQ || (wQ[oQ] = !0, FQ[oQ] = !0, null == (DQ = QQ.predecessors(oQ)) || DQ.forEach(qQ), delete wQ[oQ], LQ.push(oQ))
-         })), Object.keys(FQ).length !== QQ.nodeCount()) throw new rQ;
-       return LQ
+       return fk.map((ek => ek(kk)))
```

#### 10. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L607-L676` → after: `L87-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L87-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L87-L95) · [Before (L607-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L607-L676)

```diff
-       try {
-         IQ(QQ)
-       } catch (FQ) {
-         if (FQ instanceof rQ) return !1;
-         throw FQ
-       }
-       return !0
-     }
- 
-     function NQ(QQ, FQ, wQ, LQ, qQ) {
-       Array.isArray(FQ) || (FQ = [FQ]);
-       let oQ = FQ => {
-           var wQ;
-           return null != (wQ = QQ.isDirected() ? QQ.successors(FQ) : QQ.neighbors(FQ)) ? wQ : []
-         },
-         DQ = {};
- ... (54 more removed lines; see GitHub link above)
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

#### 11. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L783-L787` → after: `L101-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L101-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L101-L105) · [Before (L783-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L783-L787)

```diff
-       let wQ = Date.now();
-       try {
-         return FQ()
-       } finally {
-         console.log(QQ + " time: " + (Date.now() - wQ) + "ms")
+       const ik = new Map;
+       for (const fk of kk) {
+         var Dk;
+         const kk = ek(fk);
+         ik.set(kk, [...null !== (Dk = ik.get(kk)) && void 0 !== Dk ? Dk : [], fk])
```

#### 12. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L790-L844` → after: `L109-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L109-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L109-L129) · [Before (L790-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L790-L844)

```diff
- 
-     function yQ(QQ, FQ) {
-       return FQ()
-     }
-     var BQ = 0;
- 
-     function dQ(QQ) {
-       return QQ + "" + ++BQ
-     }
- 
-     function QF(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == FQ && (FQ = QQ, QQ = 0);
-       let LQ = QQ => QQ < FQ;
-       wQ < 0 && (LQ = QQ => FQ < QQ);
-       let qQ = [];
- ... (39 more removed lines; see GitHub link above)
+   },
+   6432: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       ShaderPackPublishForm: () => yk
+     });
+     var Dk = ik(60),
+       fk = ik(6396),
+       Sk = ik(194),
+       bk = ik(4965),
+       rk = ik(1033),
+       Pk = ik(1410),
+       mk = ik(1648),
+       Mk = ik(1095),
+       Kk = ik(6436),
+       xk = ik(6445),
+       nk = ik(1459),
+ ... (5 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L952-L968` → after: `L133-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L133-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L133-L159) · [Before (L952-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L952-L968)

```diff
-       wQ.out ? wQ.in ? null == (oQ = QQ[wQ.out - wQ.in + FQ]) || oQ.enqueue(wQ) : null == (qQ = QQ[QQ.length - 1]) || qQ.enqueue(wQ) : null == (LQ = QQ[0]) || LQ.enqueue(wQ)
-     }
- 
-     function YF(QQ, FQ) {
-       var wQ;
-       ("greedy" === QQ.graph().acyclicer ? uF(QQ, (wQ = QQ, QQ => wQ.edge(QQ).weight)) : function(QQ, FQ) {
-         let wQ = [],
-           LQ = {},
-           qQ = {};
- 
-         function oQ(FQ) {
-           Object.hasOwn(qQ, FQ) || (qQ[FQ] = !0, LQ[FQ] = !0, QQ.outEdges(FQ).forEach((QQ => {
-             Object.hasOwn(LQ, QQ.w) ? wQ.push(QQ) : oQ(QQ.w)
-           })), delete LQ[FQ])
-         }
- 
- ... (1 more removed lines; see GitHub link above)
+       let {
+         existing: yk,
+         onPublished: Lk
+       } = kk;
+       const {
+         t: Ak
+       } = (0, Uk.D)(), {
+         userContext: jk,
+         isUserContextUpdating: sk
+       } = (0, Mk.d)(), [dk, Vk] = (0, Dk.useState)(null), [Fk, uk] = (0, Dk.useState)(0), [qk, Ik] = (0, Dk.useState)(null !== (ek = null === yk || void 0 === yk ? void 0 : yk.name) && void 0 !== ek ? ek : ""), zk = (0, Dk.useRef)(qk), Qk = (0, Dk.useRef)(""), vk = kk => {
+         zk.current = kk, Ik(kk)
+       }, [Ek, hk] = (0, Dk.useState)(null !== (ik = null === yk || void 0 === yk ? void 0 : yk.description) && void 0 !== ik ? ik : ""), ak = (0, Dk.useRef)(Ek), Wk = (0, Dk.useRef)(""), tk = kk => {
+         ak.current = kk, hk(kk)
+       }, [Xk, Bk] = (0, Dk.useState)(!1), {
+         loading: ck,
+         error: Tk,
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L970-L1119` → after: `L161-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L161-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L161-L179) · [Before (L970-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L970-L1119)

```diff
-           Object.hasOwn(qQ, oQ) || (qQ[oQ] = !0, LQ[oQ] = !0, null == (kQ = QQ.outEdges(oQ)) || kQ.forEach((qQ => {
-             var kQ, vQ;
-             Object.hasOwn(LQ, qQ.w) || (null == (kQ = FQ.node(oQ)) ? void 0 : kQ.rank) > (null == (vQ = FQ.node(qQ.w)) ? void 0 : vQ.rank) && function(QQ, FQ, wQ) {
-               let LQ = new Set;
- 
-               function qQ(FQ) {
-                 var oQ;
-                 if (QQ.sources().includes(FQ)) return !0;
-                 LQ.add(FQ);
-                 for (let DQ of null != (oQ = QQ.inEdges(FQ)) ? oQ : [])
-                   if ((DQ.v !== wQ.v || DQ.w !== wQ.w) && !LQ.has(DQ.v) && qQ(DQ.v)) return !0;
-                 return !1
-               }
-               return qQ(FQ)
-             }(QQ, qQ.w, qQ) ? wQ.push(qQ) : DQ(qQ.w)
-           })), delete LQ[oQ])
- ... (134 more removed lines; see GitHub link above)
+           if ("" !== zk.current.trim() && zk.current !== Qk.current || (Qk.current = (0, fk.V)(kk.manifest.name.trim(), fk.F), vk(Qk.current)), "" === ak.current.trim() || ak.current === Wk.current) Wk.current = (0, fk.V)((null !== (Dk = kk.manifest.description) && void 0 !== Dk  … [truncated]
+           uk((kk => kk + 1))
+         }
+       })), gk = !sk && !jk.isLoggedIn() && !Sk.b.offlineMode, Gk = qk.trim(), Nk = Gk.length < fk.G, Rk = null !== dk && !1 !== (null === (Kk = dk.validation) || void 0 === Kk ? void 0 : Kk.ok) && !ck && !Nk && !gk && !sk;
+       return (0, pk.jsxs)("div", {
+         className: "ShaderPackPublishForm",
+         children: [(0, pk.jsx)("p", {
+           className: "ShaderPackPublishIntro",
+           children: yk ? Ak("shaderPackListing:uploadIntro", {
+             minutes: String(fk.K / 6e4)
+           }) : Ak("shaderPackListing:publishIntro")
+         }), (0, pk.jsx)(Ck, {}), gk && (0, pk.jsx)("div", {
+           className: "ShaderPackPublishNote Warning",
+           children: Ak("shaderPackListing:publishNeedsLogin")
+         }), (0, pk.jsx)(xk.e, {
+           busy: ck,
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1121-L1196` → after: `L181-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L181-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L181-L268) · [Before (L1121-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1121-L1196)

```diff
-         }
-       })), DQ
-     }
- 
-     function OF(QQ, FQ) {
-       arguments.length < 2 && (FQ = QQ.nodes()[0]), sF(QQ, {}, 1, FQ)
-     }
- 
-     function sF(QQ, FQ, wQ, LQ, qQ) {
-       let oQ = wQ,
-         DQ = QQ.node(LQ);
-       FQ[LQ] = !0;
-       let kQ = QQ.neighbors(LQ);
-       return kQ && kQ.forEach((qQ => {
-         Object.hasOwn(FQ, qQ) || (wQ = sF(QQ, FQ, wQ, qQ, LQ))
-       })), DQ.low = oQ, DQ.lim = wQ++, qQ ? DQ.parent = qQ : delete DQ.parent, wQ
- ... (60 more removed lines; see GitHub link above)
+         }), dk && (0, pk.jsxs)("div", {
+           className: "ShaderPackPublishSummary",
+           children: [(0, pk.jsx)("div", {
+             className: "ShaderPackPublishPackName",
+             children: dk.pack.manifest.name
+           }), (0, pk.jsxs)("div", {
+             className: "ShaderPackPublishPackSize",
+             children: [Ak("shaderPackListing:sizeValue", {
+               kilobytes: String((0, lk.O)(dk.sourceBytes))
+             }), " \xb7", " ", Ak("shaderPackListing:filesValue", {
+               files: String(dk.pack.files.length)
+             })]
+           }), (0, pk.jsx)(Yk, {
+             picked: dk
+           })]
+         }), !yk && (0, pk.jsxs)(pk.Fragment, {
+ ... (72 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1256-L1307` → after: `L272-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L272-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L272-L310) · [Before (L1256-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1256-L1307)

```diff
-       let FQ = fQ(QQ, "root", {}, "_root"),
-         wQ = function(QQ) {
-           let FQ = {};
- 
-           function wQ(LQ, qQ) {
-             let oQ = QQ.children(LQ);
-             oQ && oQ.length && oQ.forEach((QQ => wQ(QQ, qQ + 1))), FQ[LQ] = qQ
-           }
-           return QQ.children(LF).forEach((QQ => wQ(QQ, 1))), FQ
-         }(QQ),
-         LQ = Object.values(wQ),
-         qQ = gQ(Math.max, LQ) - 1,
-         oQ = 2 * qQ + 1;
-       QQ.graph().nestingRoot = FQ, QQ.edges().forEach((FQ => QQ.edge(FQ).minlen *= oQ));
-       let DQ = function(QQ) {
-         return QQ.edges().reduce(((FQ, wQ) => FQ + QQ.edge(wQ).weight), 0)
- ... (36 more removed lines; see GitHub link above)
+       let {
+         picked: ek
+       } = kk;
+       const {
+         t: ik
+       } = (0, Uk.D)(), {
+         validation: Dk
+       } = ek;
+       return null === Dk ? (0, pk.jsx)("div", {
+         className: "ShaderPackPublishNote",
+         children: ik("shaderPackListing:publishUnchecked")
+       }) : Dk.ok ? (0, pk.jsxs)(pk.Fragment, {
+         children: [(0, pk.jsxs)("div", {
+           className: "ShaderPackPublishNote Ready",
+           children: [(0, pk.jsx)(rk.d, {
+             name: "circle-check"
+ ... (23 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1310-L1331` → after: `L313-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L313-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L313-L329) · [Before (L1310-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1310-L1331)

```diff
-     var XF = function(QQ) {
-       QQ.children(LF).forEach((function FQ(wQ) {
-         let LQ = QQ.children(wQ),
-           qQ = QQ.node(wQ);
-         if (LQ.length && LQ.forEach(FQ), qQ && Object.hasOwn(qQ, "minRank")) {
-           qQ.borderLeft = [], qQ.borderRight = [];
-           for (let FQ = qQ.minRank, LQ = qQ.maxRank + 1; FQ < LQ; ++FQ) fF(QQ, "borderLeft", "_bl", wQ, qQ, FQ), fF(QQ, "borderRight", "_br", wQ, qQ, FQ)
-         }
-       }))
-     };
- 
-     function fF(QQ, FQ, wQ, LQ, qQ, oQ) {
-       let DQ = {
-           width: 0,
-           height: 0,
-           rank: oQ,
- ... (6 more removed lines; see GitHub link above)
+     const Lk = "\0";
+ 
+     function Ck() {
+       const {
+         t: kk
+       } = (0, Uk.D)(), [ek, ik] = kk("shaderPackListing:bloxdhubHelp", {
+         site: Lk
+       }).split(Lk);
+       return (0, pk.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [ek, (0, pk.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: fk.i,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: fk.e
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1336-L1363` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L361) · [Before (L1336-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1336-L1363)

```diff
-       var FQ;
-       let wQ = null == (FQ = QQ.graph().rankdir) ? void 0 : FQ.toLowerCase();
-       ("bt" === wQ || "rl" === wQ) && function(QQ) {
-         QQ.nodes().forEach((FQ => EF(QQ.node(FQ)))), QQ.edges().forEach((FQ => {
-           var wQ;
-           let LQ = QQ.edge(FQ);
-           null == (wQ = LQ.points) || wQ.forEach(EF), Object.hasOwn(LQ, "y") && EF(LQ)
-         }))
-       }(QQ), ("lr" === wQ || "rl" === wQ) && (function(QQ) {
-         QQ.nodes().forEach((FQ => nF(QQ.node(FQ)))), QQ.edges().forEach((FQ => {
-           var wQ;
-           let LQ = QQ.edge(FQ);
-           null == (wQ = LQ.points) || wQ.forEach(nF), Object.hasOwn(LQ, "x") && nF(LQ)
-         }))
-       }(QQ), hF(QQ))
-     }
- ... (12 more removed lines; see GitHub link above)
+       return kk === Dk
```

#### 19. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1367-L1368` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L365) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1367-L1368)

```diff
-       let FQ = QQ.x;
-       QQ.x = QQ.y, QQ.y = FQ
+       return [...kk.features]
```

#### 20. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1372-L1438` → after: `L372-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L372-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L372-L381) · [Before (L1372-L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1372-L1438)

```diff
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         wQ = {},
-         LQ = QQ.nodes().filter((FQ => !QQ.children(FQ).length)),
-         qQ = LQ.map((FQ => QQ.node(FQ).rank)),
-         oQ = QF(gQ(Math.max, qQ) + 1).map((() => []));
-       return LQ.sort(((FQ, wQ) => QQ.node(FQ).rank - QQ.node(wQ).rank)).forEach((function LQ(qQ) {
-         if (wQ[qQ]) return;
-         wQ[qQ] = !0;
-         let DQ = QQ.node(qQ);
-         oQ[DQ.rank].push(qQ);
-         let kQ = QQ.successors(qQ);
-         kQ && [...kQ].sort(((wQ, LQ) => function(wQ, LQ) {
-           let qQ = QQ.node(wQ),
-             oQ = QQ.node(LQ);
-           return qF(FQ, qQ, oQ)
-         }(wQ, LQ))).forEach(LQ)
- ... (51 more removed lines; see GitHub link above)
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
```

#### 21. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1440-L1448` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L383-L387) · [Before (L1440-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1440-L1448)

```diff
-           let FQ = [];
- 
-           function wQ(QQ) {
-             return FQ => {
-               FQ.merged || (void 0 === FQ.barycenter || void 0 === QQ.barycenter || FQ.barycenter >= QQ.barycenter) && function(QQ, FQ) {
-                 let wQ = 0,
-                   LQ = 0;
-                 QQ.weight && (wQ += QQ.barycenter * QQ.weight, LQ += QQ.weight), FQ.weight && (wQ += FQ.barycenter * FQ.weight, LQ += FQ.weight), QQ.vs = FQ.vs.concat(QQ.vs), QQ.barycenter = wQ / LQ, QQ.weight = LQ, QQ.i = Math.min(FQ.i, QQ.i), FQ.merged = !0
-               }(QQ, FQ)
+           if (0 === kk.length) return "The pack has no .wgsl files.";
+           if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
+           const ek = new Set;
+           for (const {
+               path: ik
```

#### 22. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1451-L1462` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L395-L396) · [Before (L1451-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1451-L1462)

```diff
- 
-           function LQ(FQ) {
-             return wQ => {
-               wQ.in.push(FQ), 0 === --wQ.indegree && QQ.push(wQ)
-             }
-           }
-           for (; QQ.length;) {
-             let qQ = QQ.pop();
-             FQ.push(qQ), qQ.in.reverse().forEach(wQ(qQ)), qQ.out.forEach(LQ(qQ))
-           }
-           return FQ.filter((QQ => !QQ.merged)).map((QQ => FF(QQ, ["vs", "i", "barycenter", "weight"])))
-         }(Object.values(wQ).filter((QQ => !QQ.indegree)))
+           return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
+         }(ek) ?? ek
```

#### 23. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1465-L1514` → after: `L399-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L399-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L399-L401) · [Before (L1465-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1465-L1514)

```diff
-     function BF(QQ, FQ, wQ, LQ, qQ) {
-       let oQ = {},
-         DQ = null,
-         kQ = null,
-         vQ = qQ;
-       "boolean" == typeof FQ ? (vQ = FQ, oQ = {}) : FQ && (oQ = FQ, DQ = null != wQ ? wQ : null, kQ = null != LQ ? LQ : null);
-       let mQ = function(QQ, FQ) {
-           let wQ = {
-             lhs: [],
-             rhs: []
-           };
-           return QQ.forEach((QQ => {
-             FQ(QQ) ? wQ.lhs.push(QQ) : wQ.rhs.push(QQ)
-           })), wQ
-         }(QQ, (QQ => Object.hasOwn(QQ, "barycenter"))),
-         uQ = mQ.lhs,
- ... (34 more removed lines; see GitHub link above)
+     function Mk(kk) {
+       const ek = {};
+       for (const ik of kk) ek[ik.path] = ik.source;
```

#### 24. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1518-L1608` → after: `L405-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L405-L406) · [Before (L1518-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1518-L1608)

```diff
-     function Qw(QQ, FQ, wQ, LQ, qQ) {
-       var oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ;
-       let tQ = null,
-         eQ = qQ;
-       "boolean" == typeof LQ ? (eQ = LQ, tQ = null) : void 0 !== LQ && (tQ = LQ);
-       let MQ = QQ.children(FQ),
-         GQ = QQ.node(FQ),
-         pQ = GQ ? GQ.borderLeft : void 0,
-         cQ = GQ ? GQ.borderRight : void 0,
-         CQ = {};
-       pQ && (MQ = MQ.filter((QQ => QQ !== pQ && QQ !== cQ)));
-       let SQ = function(QQ) {
-         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((FQ => {
-           let wQ = QQ.inEdges(FQ);
-           if (!wQ || !wQ.length) return {
-             v: FQ
- ... (75 more removed lines; see GitHub link above)
+     function Kk(kk, ek) {
+       return kk < ek ? -1 : kk > ek ? 1 : 0
```

#### 25. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1611-L1639` → after: `L409-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L409-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L409-L413) · [Before (L1611-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1611-L1639)

```diff
-     function Fw(QQ, FQ, wQ, LQ) {
-       LQ || (LQ = QQ.nodes());
-       let qQ = function(QQ) {
-           let FQ;
-           for (; QQ.hasNode(FQ = dQ("_root")););
-           return FQ
-         }(QQ),
-         oQ = new XQ({
-           compound: !0
-         }).setGraph({
-           root: qQ
-         }).setDefaultNodeLabel((FQ => QQ.node(FQ)));
-       return LQ.forEach((LQ => {
-         let DQ = QQ.node(LQ),
-           kQ = QQ.parent(LQ);
-         if (DQ.rank === FQ || DQ.minRank <= FQ && FQ <= DQ.maxRank) {
- ... (13 more removed lines; see GitHub link above)
+     function xk(kk) {
+       const ek = new TextEncoder;
+       let ik = 0;
+       for (const {
+           source: Dk
```

#### 26. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1641` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L415-L416) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1641)

```diff
-       })), oQ
+         of kk) ik += ek.encode(Dk).byteLength;
+       return ik
```

#### 27. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1645-L1810` → after: `L420-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L420-L423) · [Before (L1645-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1645-L1810)

```diff
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       if ("function" == typeof FQ.customOrder) return void FQ.customOrder(QQ, ww);
-       let LQ = PQ(QQ),
-         qQ = Lw(QQ, QF(1, LQ + 1), "inEdges"),
-         oQ = Lw(QQ, QF(LQ - 1, -1, -1), "outEdges"),
-         DQ = gF(QQ, wQ);
-       if (ow(QQ, DQ), FQ.disableOptimalOrderHeuristic) return;
-       let kQ, vQ = Number.POSITIVE_INFINITY,
-         mQ = FQ.constraints || [];
-       for (let uQ = 0, HQ = 0; HQ < 4; ++uQ, ++HQ) {
-         qw(uQ % 2 ? qQ : oQ, uQ % 4 >= 2, mQ, wQ), DQ = JQ(QQ);
-         let FQ = PF(QQ, DQ);
-         FQ < vQ ? (HQ = 0, kQ = Object.assign({}, DQ), vQ = FQ) : FQ === vQ && (kQ = structuredClone(DQ))
-       }
-       ow(QQ, kQ)
- ... (150 more removed lines; see GitHub link above)
+       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
+       if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
+       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
+       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
```

#### 28. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1814-L1920` → after: `L428-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L428-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L428-L435) · [Before (L1814-L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1814-L1920)

```diff
-       let wQ, LQ = JQ(QQ),
-         qQ = Object.assign(function(QQ, FQ) {
-           let wQ = {};
-           return FQ.length && FQ.reduce((function(FQ, LQ) {
-             let qQ = 0,
-               oQ = 0,
-               DQ = FQ.length,
-               kQ = LQ[LQ.length - 1];
-             return LQ.forEach(((FQ, vQ) => {
-               let mQ = function(QQ, FQ) {
-                   if (QQ.node(FQ).dummy) {
-                     let wQ = QQ.predecessors(FQ);
-                     if (wQ) return wQ.find((FQ => QQ.node(FQ).dummy))
-                   }
-                 }(QQ, FQ),
-                 uQ = mQ ? QQ.node(mQ).order : DQ;
- ... (91 more removed lines; see GitHub link above)
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Dk = new Map;
+       ek.forEach(((kk, ek) => {
+         let {
+           numAnimStates: ik,
+           animStartIdx: fk
+         } = kk;
+         for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
```

#### 29. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L1922-L2014` → after: `L437-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L437-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L437-L441) · [Before (L1922-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L1922-L2014)

```diff
-       let DQ = function(QQ, FQ) {
-         return Object.values(FQ).reduce(((FQ, wQ) => {
-           let LQ = Number.NEGATIVE_INFINITY,
-             qQ = Number.POSITIVE_INFINITY;
-           Object.entries(wQ).forEach((FQ => {
-             let [wQ, oQ] = FQ, DQ = function(QQ, FQ) {
-               return QQ.node(FQ).width
-             }(QQ, wQ) / 2;
-             LQ = Math.max(oQ + DQ, LQ), qQ = Math.min(oQ - DQ, qQ)
-           }));
-           let oQ = LQ - qQ;
-           return oQ < FQ[0] && (FQ = [oQ, wQ]), FQ
-         }), [Number.POSITIVE_INFINITY, null])[1]
-       }(QQ, oQ);
-       return function(QQ, FQ) {
-           let wQ = Object.values(FQ),
- ... (77 more removed lines; see GitHub link above)
+       const fk = Object.entries(kk),
+         Sk = new Map;
+       for (const [Hk, wk] of fk) {
+         const kk = Uk.exec(Hk);
+         "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
```

#### 30. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L2016-L2077` → after: `L443-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L443-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L443-L457) · [Before (L2016-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L2016-L2077)

```diff
-     }
- 
-     function Aw(QQ, FQ, wQ) {
-       var LQ;
-       let qQ = QQ.nodes().filter((FQ => QQ.children(FQ).length)),
-         oQ = {};
-       qQ.forEach((LQ => {
-         let qQ = QQ.node(LQ);
-         if (qQ && qQ.rankdir) {
-           let DQ = new XQ({
-             multigraph: !0,
-             compound: !0
-           });
-           DQ.setGraph({
-             rankdir: qQ.rankdir
-           });
- ... (46 more removed lines; see GitHub link above)
+       const bk = kk => {
+           const ek = Uk.exec(kk);
+           return ek && Sk.has(ek[1]) ? {
+             root: ek[1],
+             rotation: Number(ek[2]) - 1
+           } : null
+         },
+         rk = new Set(fk.map((kk => {
+           let [ek] = kk;
+           return bk(ek)?.root ?? ek
+         }))),
+         Pk = (kk, ik) => {
+           const Dk = kk.replace(/_?0$/, "");
+           return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
+         },
```

#### 31. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L2079-L2083` → after: `L459-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L459-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L459-L470) · [Before (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L2079-L2083)

```diff
-       qQ.forEach((FQ => {
-         let wQ = QQ.node(FQ);
-         wQ && wQ.rankdir && oQ[FQ] && kQ.set(FQ, (QQ.children(FQ) || []).filter((QQ => QQ !== FQ)))
-       }));
-       let vQ = new Set([...kQ.values()].flat()),
+       for (const [Uk, Hk] of fk) mk.set(Hk, Pk(bk(Uk)?.root ?? Uk, Hk));
+       const Mk = fk.reduce(((kk, ek) => {
+           let [, ik] = ek;
+           return Math.max(kk, ik + 1)
+         }), 0),
+         Kk = Array.from({
+           length: Mk
+         }, ((kk, ek) => ({
+           id: ek + 1,
+           rotation: 0
+         }))),
+         xk = new Map,
```

#### 32. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L2085-L2177` → after: `L472-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L472-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L472-L496) · [Before (L2085-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L2085-L2177)

```diff
-       kQ.forEach(((FQ, wQ) => {
-         vQ.has(wQ) || mQ.set(wQ, (FQ => {
-           let wQ = [],
-             LQ = (QQ.children(FQ) || []).filter((QQ => QQ !== FQ));
-           for (; LQ.length > 0;) {
-             let FQ = LQ.shift();
-             wQ.push(FQ), (QQ.children(FQ) || []).filter((QQ => QQ !== FQ)).forEach((QQ => LQ.push(QQ)))
-           }
-           return wQ
-         })(wQ))
-       }));
-       let uQ = new Set([...mQ.values()].flat()),
-         HQ = QQ => {
-           for (let [FQ, wQ] of mQ)
-             if (wQ.includes(QQ)) return FQ;
-           return QQ
- ... (77 more removed lines; see GitHub link above)
+       for (const [Uk, Hk] of fk) {
+         const kk = bk(Uk),
+           ek = Dk.get(Hk);
+         if (void 0 !== ek) {
+           const ik = mk.get(ek);
+           nk.set(Uk, {
+             name: Uk,
+             texture: ik,
+             kind: "frame"
+           }), kk && !nk.has(kk.root) && nk.set(kk.root, {
+             name: kk.root,
+             texture: ik,
+             kind: "frame"
+           });
+           continue
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L2179-L2488` → after: `L498-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L498-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L498-L519) · [Before (L2179-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L2179-L2488)

```diff
-             node: LQ,
-             parent: qQ
-           } = FQ;
-           QQ.setNode(wQ, LQ), void 0 !== qQ && QQ.setParent(wQ, qQ)
-         })), DQ.forEach((FQ => {
-           let {
-             edge: wQ,
-             label: LQ
-           } = FQ;
-           QQ.setEdge(wQ, LQ)
-         })), LQ.nodes().forEach((FQ => {
-           if (FQ === wQ) return;
-           let qQ = LQ.node(FQ),
-             oQ = QQ.node(FQ);
-           oQ && qQ && "number" == typeof qQ.x && "number" == typeof qQ.y && (oQ.x = uQ + (qQ.x - bQ), oQ.y = HQ + (qQ.y - YQ))
-         })), delete mQ._dagreClusterSubgraph
- ... (294 more removed lines; see GitHub link above)
+             rotation: kk.rotation
+           }, xk.set(ik, ek), nk.set(Uk, {
+             name: Uk,
+             texture: ik,
+             kind: "rotation"
+           })
+         } else xk.set(ik, Hk + 1)
+       }
+       for (const Uk of xk.keys()) nk.delete(Uk);
+       for (const [Uk, Hk] of ik) {
+         const kk = xk.get(Hk);
+         void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
+       }
+       return {
+         named: [...xk].sort(((kk, ek) => {
+           let [ik] = kk, [Dk] = ek;
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L2490-L2493` → after: `L521-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L521-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/112.js#L521-L523) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/112.js#L2490-L2493)

```diff
-         }))
-       }(QQ))), {
-         graph: QQ,
-         rawNodes: mQ
+         })),
+         aliases: [...nk.values()],
+         layers: Kk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L2)

```diff
- export const ids = [113];
+ export const ids = [113, 116, 135, 136];
```

#### 2. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L4-L6)

```diff
-   37813: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => oQ
+   4961: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk.g,
+       e: () => fk,
+       g: () => Dk.l
```

#### 3. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8-L67` → after: `L10-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L10-L32) · [Before (L8-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L8-L67)

```diff
-     var LQ = wQ(37822),
-       qQ = wQ.n(LQ);
- 
-     function oQ(QQ) {
-       var FQ = [],
-         wQ = [],
-         LQ = null;
- 
-       function oQ(wQ, qQ) {
-         var oQ = LQ[wQ],
-           kQ = LQ[qQ];
-         oQ && kQ && (function(QQ, FQ, wQ, LQ) {
-           if (QQ.vkQ) return FQ.vkQ ? function(QQ, FQ) {
-             var wQ = (QQ[3] - QQ[0]) / 2,
-               LQ = (FQ[3] - FQ[0]) / 2,
-               qQ = QQ[0] + wQ - (FQ[0] + LQ),
- ... (44 more removed lines; see GitHub link above)
+     var Dk = ik(4965);
+     const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
+       strict: kk,
+       program: ek
+     })))))
+   },
+   40066: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Kk,
+       installListedShaderPack: () => Mk
+     });
+     var Dk = ik(6396),
+       fk = ik(4965),
+       Sk = ik(1177),
+       bk = ik(6451),
+       rk = ik(4961),
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L69-L80` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L34-L37) · [Before (L69-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L69-L80)

```diff
- 
-       function DQ(QQ, FQ) {
-         var wQ = (QQ[3] - QQ[0]) / 2,
-           LQ = QQ[0] + wQ,
-           qQ = QQ[2] + wQ,
-           oQ = kQ(LQ, FQ[0], FQ[3]) - LQ,
-           DQ = kQ(qQ, FQ[2], FQ[5]) - qQ;
-         return oQ * oQ + DQ * DQ <= wQ * wQ
-       }
- 
-       function kQ(QQ, FQ, wQ) {
-         return QQ < FQ ? FQ : QQ > wQ ? wQ : QQ
+       const ik = await Kk(kk, ek);
+       return "failed" === ik.kind ? ik : await (0, Pk.saveShaderPack)(ik.stored, ek) ? ((0, Pk.markShaderPackChangePending)(), ik) : {
+         kind: "failed",
+         reason: "save"
```

#### 5. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L83-L101` → after: `L40-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L40-L56) · [Before (L83-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L83-L101)

```diff
-   },
-   37874: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return {
-         name: "collideTerrain",
-         order: 0,
-         state: {
-           callback: null
-         },
-         uC: function(FQ, wQ) {
-           var LQ = QQ.entities;
-           LQ.ukQ(FQ) && (LQ.lQQ(FQ).body.ob = function(wQ) {
-             var LQ = QQ.bC.HkQ(FQ).callback;
-             LQ && LQ(wQ, FQ)
-           })
-         },
- ... (3 more removed lines; see GitHub link above)
+     async function Kk(kk, ek) {
+       const ik = await async function(kk) {
+         let {
+           packId: ek,
+           sourceHash: ik
+         } = kk;
+         try {
+           const kk = await fetch(`${Sk.clientSideServerUrls.s3Url}/${(0,Dk.Q)(ek,ik)}`, {
+             headers: {
+               Accept: "application/json"
+             }
+           });
+           if (!kk.ok) return console.error(`Failed to download shader pack ${ek} (${kk.status})`), null;
+           const fk = await kk.json();
+           return "object" !== typeof fk || null === fk ? (console.error(`Shader pack ${ek}'s source isn't an object`), null) : fk
+         } catch (fk) {
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L103-L115` → after: `L58-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L58-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L58-L83) · [Before (L103-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L103-L115)

```diff
-       }
-     }
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => LQ
-     })
-   },
-   37892: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return {
-         name: "jQQ",
-         order: 99,
-         state: {
-           aU: 1.5
+       }(kk);
+       if (null === ik) return {
+         kind: "failed",
+         reason: "download"
+       };
+       if (!(0, rk.g)(ik.apiVersion)) return {
+         kind: "failed",
+         reason: "apiVersion"
+       };
+       const bk = (0, fk.r)(ik.files);
+       if ("string" === typeof bk) return console.error(`A listed shader pack breaks the pack rules: ${bk}`), {
+         kind: "failed",
+         reason: "invalid"
+       };
+       const Mk = await (0, mk.c)(ek, bk);
+       if (!1 === (null === Mk || void 0 === Mk ? void 0 : Mk.ok)) return {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L117-L121` → after: `L85-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L85-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L85-L92) · [Before (L117-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L117-L121)

```diff
-         uC: null,
-         rU: null,
-         system: function(FQ, wQ) {
-           for (var LQ = QQ.camera.fn, oQ = 0; oQ < wQ.length; oQ++) qQ(wQ[oQ], LQ, QQ)
-         }
+         files: bk
+       };
+       return {
+         kind: "loaded",
+         stored: (0, Pk.toStoredShaderPack)(Kk, Mk, {
+           packId: kk.packId,
+           sourceHash: kk.sourceHash
+         })
```

#### 8. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L126-L130` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L123-L128) · [Before (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L126-L130)

```diff
-       if (wQ.bC.bkQ(QQ.eT)) {
-         var LQ = wQ.bC.rFQ(QQ.eT).mesh;
-         if (LQ.metadata) {
-           var qQ = FQ < QQ.aU;
-           wQ.Zx.W4(LQ, !qQ)
+       return {
+         manifest: kk.manifest,
+         files: (0, Dk.t)(kk.files),
+         validation: ek,
+         ...ik && {
+           listing: ik
```

#### 9. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L146-L148` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L134-L139) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L146-L148)

```diff
-       let FQ = 0;
-       const wQ = qQ().create(),
-         LQ = qQ().create();
+       return Object.keys(kk.files).map((ek => ({
+         path: ek,
+         source: kk.files[ek]
+       })))
+     }
+     let nk = Promise.resolve();
```

#### 10. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L150-L195` → after: `L141-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L141-L143) · [Before (L150-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L150-L195)

```diff
-       function oQ(DQ, kQ) {
-         if (DQ.YkQ === FQ) return;
-         DQ.YkQ = FQ;
-         const vQ = QQ.bC.pwQ(DQ.dY);
-         vQ && oQ(vQ, kQ);
-         const mQ = QQ.bC.ZE(DQ.eT),
-           uQ = QQ.bC.ZE(DQ.dY);
-         if (uQ)
-           if (DQ.RwQ ? DQ.RwQ(wQ, kQ, DQ.offset) : qQ().copy(wQ, DQ.offset), kQ) qQ().add(mQ.Fy, uQ.Fy, wQ);
-           else {
-             const FQ = mQ.Mb || QQ.Mb;
-             for (let QQ = 0; QQ < 3; QQ++) LQ[QQ] = uQ.position[QQ] - FQ[QQ] + wQ[QQ];
-             QQ.bC.AkQ(DQ.eT, LQ)
-           }
-         else DQ.WwQ || (DQ.xkQ && DQ.xkQ(DQ.eT), QQ.bC.lT(DQ.eT, QQ.bC.names.gC))
-       }
- ... (30 more removed lines; see GitHub link above)
+     function Uk(kk) {
+       const ek = nk.then(kk);
+       return nk = ek.catch((() => {})), ek
```

#### 11. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L210-L215` → after: `L147-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L147-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L147-L162) · [Before (L210-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L210-L215)

```diff
-       const wQ = FQ.cqQ || FQ;
-       void 0 === wQ.bK?.aLightLevels && (wQ.hT("aLightLevels", 4), wQ.bK.aLightLevels = (0, oQ.l)());
-       const {
-         bK: LQ
-       } = FQ;
-       !LQ || void 0 !== LQ.aLightLevels && null !== LQ.aLightLevels && LQ.aLightLevels !== wQ.bK?.aLightLevels || (LQ.aLightLevels = (0, oQ.l)()), QQ.Zx.QwQ && wQ.material && QQ.Zx.QwQ(wQ.material)
+       return Uk((() => lk(kk, ek)))
+     }
+ 
+     function wk(kk, ek, ik) {
+       return Uk((async () => JSON.stringify(await (0, rk.f)()) === JSON.stringify(kk) && (null === ek ? (await pk(), !0) : lk(ek, ik))))
+     }
+     async function lk(kk, ek) {
+       const ik = await Sk.e.setItem(rk.c, kk);
+       return ik && uk(kk, ek), ik
+     }
+     async function pk() {
+       await Sk.e.removeItem(rk.c), Sk.f.removeItem(bk.e)
+     }
+ 
+     function yk() {
+       return Uk(pk)
```

#### 12. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L219-L221` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L166) · [Before (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L219-L221)

```diff
-       const wQ = (0, oQ.k)(FQ);
-       for (const LQ of wQ) mQ(QQ, LQ);
-       return wQ
+       return "active" === Lk(kk, ek).kind
```

#### 13. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L224-L280` → after: `L169-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L169-L190) · [Before (L224-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L224-L280)

```diff
-     function HQ(QQ) {
-       return {
-         name: "mesh",
-         order: 100,
-         state: {
-           XN: null,
-           nwQ: null,
-           mesh: null,
-           offset: null,
-           MkQ: null,
-           aA: !1,
-           GkQ: !0,
-           PwQ: !0,
-           pkQ: null,
-           ckQ: null,
-           CkQ: -1
- ... (41 more removed lines; see GitHub link above)
+     function Lk(kk, ek) {
+       var ik;
+       return null === kk ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : jk(kk) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) || kk.validation.fromRecheck ? null === ek ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : dk(kk, ek) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : kk.validation.ok ? {
+         kind: "active"
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L283-L297` → after: `L193-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L193-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L193-L199) · [Before (L283-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L283-L297)

```diff
-   },
-   37803: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       PhysicsState: () => oQ,
-       default: () => DQ,
-       setFloatingYValue: () => mQ,
-       OkQ: () => vQ,
-       skQ: () => uQ
-     });
-     var LQ = wQ(334),
-       qQ = wQ.n(LQ);
-     class oQ {
-       constructor() {
-         this.body = null, this.cL = null, this.dH = null
-       }
+ 
+     function Ck() {
+       Sk.g.setItem(mk, performance.timeOrigin)
+     }
+ 
+     function Ak() {
+       return Sk.g.getItem(mk) === performance.timeOrigin
```

#### 15. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L301-L328` → after: `L203-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L203-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L203-L207) · [Before (L301-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L301-L328)

```diff
-       return {
-         name: "physics",
-         order: 40,
-         state: new oQ,
-         uC: function(FQ, wQ) {
-           wQ.dH = QQ, wQ.cL = null, wQ.body = QQ.physics.bb(), vQ(wQ, QQ.bC.ZE(wQ.eT))
-         },
-         rU: function(FQ, wQ) {
-           if (QQ.bC.hasPosition(wQ.eT)) {
-             var LQ = QQ.bC.ZE(wQ.eT);
-             uQ(wQ, LQ), HQ(wQ, LQ, 0, !1)
-           }
-           QQ.physics.Yb(wQ.body)
-         },
-         system: function(FQ, wQ) {
-           for (var LQ = 0; LQ < wQ.length; LQ++) {
- ... (12 more removed lines; see GitHub link above)
+       return !(0, fk.g)(kk.manifest.apiVersion)
+     }
+ 
+     function sk(kk) {
+       return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
```

#### 16. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L333-L335` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L211-L212) · [Before (L333-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L333-L335)

```diff
-       var wQ = QQ.body.hH,
-         LQ = FQ.hwQ;
-       qQ().copy(wQ.base, LQ), qQ().set(wQ.vec, FQ.width, FQ.height, FQ.width), qQ().add(wQ.max, wQ.base, wQ.vec), mQ(QQ, FQ, QQ.cL)
+       var ik;
+       return (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.headerVersion) !== sk(ek)
```

#### 17. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L338-L341` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L215-L218) · [Before (L338-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L338-L341)

```diff
-     function mQ(QQ, FQ, wQ) {
-       QQ.cL = wQ;
-       const LQ = FQ.Mb ?? QQ.dH.Mb;
-       QQ.body.mV = null !== wQ ? wQ - LQ[1] : null
+     function Vk(kk) {
+       return Uk((async () => {
+         uk(await (0, rk.f)(!0), kk)
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L344-L348` → after: `L221-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L221-L224) · [Before (L344-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L344-L348)

```diff
-     function uQ(QQ, FQ) {
-       var wQ = QQ.body.hH.base,
-         LQ = FQ.width / 2,
-         qQ = FQ.xFQ;
-       qQ[0] = wQ[0] + LQ, qQ[1] = wQ[1], qQ[2] = wQ[2] + LQ
+     function Fk() {
+       return Uk((async () => {
+         Sk.f.removeItem(bk.e)
+       }))
```

#### 19. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L351-L353` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L227-L228) · [Before (L351-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L351-L353)

```diff
-     function HQ(QQ, FQ, wQ, LQ) {
-       var oQ = QQ.body.Qt;
-       qQ().sq(kQ, FQ.xFQ, oQ, wQ), LQ && qQ().lerp(kQ, FQ.Fy, kQ, .3), qQ().copy(FQ.Fy, kQ)
+     function uk(kk, ek) {
+       Yk(kk, ek) ? Sk.f.setItem(bk.e, !0) : Sk.f.removeItem(bk.e)
```

#### 20. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L356` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L231) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L356)

```diff
-   37794: (QQ, FQ, wQ) => {
+   6477: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L358-L360` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L233-L234) · [Before (L358-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L358-L360)

```diff
-       PositionState: () => qQ,
-       default: () => oQ,
-       IkQ: () => DQ
+       loadShaderPackTextures: () => bk,
+       shaderPackTextures: () => rk
```

#### 22. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L362-L367` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L236-L238) · [Before (L362-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L362-L367)

```diff
-     const LQ = wQ(334);
-     class qQ {
-       constructor() {
-         this.position = null, this.width = .8, this.height = .8, this.xFQ = null, this.Fy = null, this.hwQ = null, this.Mb = null
-       }
-     }
+     var Dk = ik(4965);
+     let fk = null,
+       Sk = null;
```

#### 23. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L369-L388` → after: `L240-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L240-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L240-L248) · [Before (L369-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L369-L388)

```diff
-     function oQ(QQ) {
-       return {
-         name: "position",
-         order: 41,
-         state: new qQ,
-         uC: function(FQ, wQ) {
-           var qQ = [0, 0, 0];
-           wQ.position && LQ.copy(qQ, wQ.position), wQ.position = qQ, wQ.xFQ = LQ.create(), wQ.Fy = LQ.create(), wQ.hwQ = new Float32Array(6), QQ.OFQ(wQ.position, null, wQ.xFQ), LQ.copy(wQ.Fy, wQ.xFQ), DQ(wQ)
-         },
-         rU: null,
-         system: function(FQ, wQ) {
-           for (var LQ = 0; LQ < wQ.length; LQ++) {
-             var qQ = wQ[LQ],
-               oQ = qQ.Mb ?? QQ.Mb,
-               kQ = qQ.position,
-               vQ = qQ.xFQ;
- ... (4 more removed lines; see GitHub link above)
+     function bk() {
+       return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ek,
+           textureNameToIndex: ik,
+           textureAnimationData: Sk
+         } = kk;
+         return fk ??= (0, Dk.h)(ik, Sk, ek), fk
+       })), Sk
```

#### 24. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L391-L415` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L251-L253) · [Before (L391-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L391-L415)

```diff
-     function DQ(QQ) {
-       var FQ = QQ.width / 2,
-         wQ = QQ.xFQ,
-         LQ = QQ.hwQ;
-       LQ[0] = wQ[0] - FQ, LQ[1] = wQ[1], LQ[2] = wQ[2] - FQ, LQ[3] = wQ[0] + FQ, LQ[4] = wQ[1] + QQ.height, LQ[5] = wQ[2] + FQ
-     }
-   },
-   37810: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       var FQ = "UkQ";
-       return {
-         name: FQ,
-         order: 99,
-         state: {
-           time: 100.1
-         },
- ... (9 more removed lines; see GitHub link above)
+     function rk() {
+       if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return fk
```

#### 25. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L421` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L256) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L421)

```diff
-   37782: (QQ, FQ, wQ) => {
+   6493: (kk, ek, ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L424-L425` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L259) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L424-L425)

```diff
-       c: () => GQ,
-       e: () => YQ
+       c: () => rk
```

#### 27. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L427-L661` → after: `L261-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L261-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L261-L271) · [Before (L427-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L427-L661)

```diff
-     var LQ = wQ(37787),
-       qQ = wQ.n(LQ),
-       oQ = wQ(334),
-       DQ = wQ.n(oQ),
-       kQ = wQ(37794),
-       vQ = wQ(37803);
-     class mQ {
-       constructor() {
-         this.runs = 0, this.loopMs = 0, this.byComponent = new Map
-       }
-       reset() {
-         this.runs = 0, this.loopMs = 0, this.byComponent.clear()
-       }
-       addSystem(QQ, FQ, wQ) {
-         let LQ = this.byComponent.get(QQ);
-         LQ || (LQ = {
- ... (219 more removed lines; see GitHub link above)
+     var Dk = ik(6498),
+       fk = ik(6477),
+       Sk = ik(115);
+     const bk = 100;
+     async function rk(kk, ek) {
+       var ik;
+       let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ik = navigator.gpu) && void 0 !== ik ? ik : null;
+       const bk = kk.B5(ek, (0, fk.shaderPackTextures)());
+       if (bk.errors.length > 0) return mk(kk, bk.errors, bk.offInStrict);
+       const rk = await async function(kk) {
+         if (!kk) return null;
```

#### 28. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L663-L667` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L273-L274) · [Before (L663-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L663-L667)

```diff
-           this.pT(mQ, this.names.position, {
-             position: QQ || DQ().create(),
-             width: FQ,
-             height: wQ
-           })
+           const ek = await (0, Sk.t)(kk);
+           return ek ? await ek.requestDevice() : null
```

#### 29. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L669-L677` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L276) · [Before (L669-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L669-L677)

```diff
-           return console.error(bQ.stack), mQ
-         }
-         if (oQ) {
-           this.pT(mQ, this.names.physics);
-           var uQ = this.lV(mQ),
-             HQ = this.names.UkQ;
-           uQ.kb = function() {
-             vQ.fkQ(mQ, HQ)
-           }
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ek), null
```

#### 30. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L679-L684` → after: `L278-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L278-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L278-L308) · [Before (L679-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L679-L684)

```diff
-         return LQ && (qQ || (qQ = DQ().create()), this.pT(mQ, this.names.mesh, {
-           mesh: LQ,
-           offset: qQ
-         })), kQ && this.pT(mQ, this.names.EY, {
-           size: FQ
-         }), mQ
+       }(Dk);
+       if (!rk) return null;
+       let Pk = !1;
+       rk.lost.then((() => {
+         Pk = !0
+       }));
+       try {
+         const ek = await Promise.all(bk.validationModules.map((ek => async function(kk, ek, ik) {
+           ek.pushErrorScope("validation");
+           const Dk = ek.createShaderModule({
+               code: ik.code
+             }),
+             fk = ek.popErrorScope(),
+             {
+               messages: Sk
+             } = await Dk.getCompilationInfo(),
+ ... (15 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L687-L691` → after: `L311-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L311-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L311-L324) · [Before (L687-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L687-L691)

```diff
- 
-     function eQ(QQ, FQ, wQ, LQ, qQ) {
-       var oQ = QQ[FQ] + wQ,
-         DQ = QQ[FQ] + LQ;
-       Math.abs(oQ - Math.round(oQ)) < .002 && (QQ[FQ] += .002), Math.abs(DQ - Math.round(DQ)) < .001 && (QQ[FQ] -= .001)
+     async function Pk(kk, ek) {
+       var ik;
+       if (!(0, Dk.shaderPackNeedsCheck)(kk, ek) || (0, Dk.isOtherApiVersion)(kk)) return kk;
+       const fk = await rk(ek, (0, Dk.storedShaderPackFiles)(kk));
+       if (!fk) return kk;
+       const Sk = !1 === (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) && !kk.validation.fromRecheck,
+         bk = {
+           ...kk,
+           validation: Sk ? fk : {
+             ...fk,
+             fromRecheck: !0
+           }
+         };
+       return await (0, Dk.replaceShaderPack)(kk, bk, ek) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), bk
```

#### 32. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L694-L695` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L327-L334) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L694-L695)

```diff
-     function MQ(QQ, FQ) {
-       return !(QQ[0] > FQ[3]) && (!(QQ[1] > FQ[4]) && (!(QQ[2] > FQ[5]) && (!(QQ[3] < FQ[0]) && (!(QQ[4] < FQ[1]) && !(QQ[5] < FQ[2])))))
+     function mk(kk, ek, ik) {
+       return {
+         headerVersion: (0, Dk.pageShaderPackValidationVersion)(kk),
+         ok: 0 === ek.length,
+         errors: ek.slice(0, bk),
+         moreErrors: Math.max(0, ek.length - bk),
+         offInStrict: ik
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L699` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L337) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L699)

```diff
-   37082: (QQ, FQ, wQ) => {
+   4965: (kk, ek, ik) => {
```

#### 34. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L701` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L339-L340) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L701)

```diff
-       d: () => LF,
+       b: () => rk,
+       c: () => bk,
```

#### 35. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L703-L712` → after: `L342-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L342-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L342-L348) · [Before (L703-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L703-L712)

```diff
-       k: () => dQ,
-       n: () => FF,
-       q: () => gQ,
-       s: () => PQ,
-       u: () => yQ,
-       y: () => nQ,
-       C: () => ZQ,
-       D: () => uF,
-       E: () => BQ,
-       H: () => QF
+       h: () => Hk,
+       i: () => Kk,
+       l: () => fk,
+       p: () => Sk,
+       r: () => mk,
+       t: () => Mk,
+       u: () => xk
```

#### 36. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L714-L759` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L350) · [Before (L714-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L714-L759)

```diff
-     wQ(334), wQ(2797);
-     var LQ = wQ(37085),
-       qQ = wQ(36688),
-       oQ = wQ(37093),
-       DQ = wQ(37007),
-       kQ = wQ(37036),
-       vQ = wQ(37074),
-       mQ = wQ(37048),
-       uQ = wQ(37152);
-     class HQ {
-       constructor() {
-         this.pending = []
-       }
-       get size() {
-         return this.pending.length
-       }
- ... (30 more removed lines; see GitHub link above)
+     const Dk = 5;
```

#### 37. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L761-L765` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L352-L353) · [Before (L761-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L761-L765)

```diff
-     function xQ(QQ, FQ, wQ, LQ) {
-       const qQ = QQ.getBuffer();
-       if (!qQ || !QQ.isUpdatable()) return;
-       const oQ = QQ._engine;
-       oQ.oA >= 2 ? (AQ(oQ, qQ, FQ, wQ, LQ), tQ(oQ)) : QQ.updateDirectly(FQ.subarray(wQ, LQ), wQ)
+     function fk(kk) {
+       return kk === Dk
```

#### 38. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L768-L769` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L356-L357) · [Before (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L768-L769)

```diff
-     function AQ(QQ, FQ, wQ, LQ, qQ) {
-       QQ.bindArrayBuffer(FQ), QQ._gl.bufferSubData(QQ._gl.ARRAY_BUFFER, LQ * Float32Array.BYTES_PER_ELEMENT, wQ, LQ, qQ - LQ)
+     function Sk(kk) {
+       return [...kk.features]
```

#### 39. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L773-L777` → after: `L364-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L364-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L364-L371) · [Before (L773-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L773-L777)

```diff
-       QQ._cachedVertexBuffers = null
-     }
-     class eQ {
-       constructor(QQ) {
-         this.engine = QQ, this.pages = []
+       if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
+       const ek = [];
+       for (const [ik, Dk] of Object.entries(kk)) {
+         if ("string" !== typeof Dk) return `${ik} isn't text.`;
+         ek.push({
+           path: ik,
+           source: Dk
+         })
```

#### 40. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L779-L38202` → after: `L373-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L373-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L373-L379) · [Before (L779-L38202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L779-L38202)

```diff
-       static forEngine(QQ) {
-         const FQ = QQ;
-         if (!(FQ.oA >= 2) || !MQ.test(FQ.getGlInfo().renderer)) return null;
-         let wQ = GQ.get(QQ);
-         if (!wQ) {
-           const LQ = new eQ(FQ);
-           wQ = LQ, GQ.set(QQ, LQ);
-           const qQ = QQ.onContextRestoredObservable.add((() => {
-             for (const QQ of LQ.pages) QQ.restore()
-           }));
-           QQ.zN.addOnce((() => {
-             QQ.onContextRestoredObservable.remove(qQ), LQ.dispose(), GQ.delete(QQ)
-           }))
-         }
-         return wQ
-       }
- ... (37408 more removed lines; see GitHub link above)
+       return ek.sort(((kk, ek) => Kk(kk.path, ek.path))),
+         function(kk) {
+           if (0 === kk.length) return "The pack has no .wgsl files.";
+           if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
+           const ek = new Set;
+           for (const {
+               path: ik
```

#### 41. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38204-L38211` → after: `L381-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L381-L385) · [Before (L38204-L38211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38204-L38211)

```diff
-             if ((FQ[MQ[121]] & MQ[124]) == MQ[59] && (RQ(FQ[MQ[1]] = HQ(), FQ[MQ[46]] = HQ(), FQ[MQ[31]] = HQ(), FQ[MQ[26]] = (FQ[MQ[121]] & MQ[16]) << MQ[44] | FQ[MQ[1]] << MQ[17] | FQ[MQ[46]] << MQ[14] | FQ[MQ[31]]), FQ[MQ[26]] >= MQ[37] && FQ[MQ[26]] <= MQ[125])) return FQ[MQ[ … [truncated]
-             throw Error(LQ(174))
-           }
- 
-           function YQ(...FQ) {
-             for (RQ(FQ[MQ[4]] = MQ[1], QQ[-MQ[78]] = LQ(FQ[MQ[0]]), QQ[MQ[46]] = QQ[-MQ[78]].length, QQ[MQ[6]] = MQ[0], FQ[MQ[1]] = [], FQ[MQ[5]] = MQ[11]);
-               (FQ[MQ[5]] = bQ()) !== MQ[63];) FQ[MQ[1]].push(FQ[MQ[5]]);
-             return qQ(FQ[MQ[1]])
+             of kk) {
+             const kk = nk(ik);
+             if (null !== kk) return kk;
+             if (ek.has(ik)) return `The pack has two files at ${ik}.`;
+             ek.add(ik)
```

#### 42. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38213-L38220` → after: `L387-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L387-L388) · [Before (L38213-L38220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38213-L38220)

```diff
-           QQ[MQ[4]] = MQ[1], QQ[MQ[70]] = String.fromCharCode, RQ(QQ[-MQ[78]] = MQ[11], QQ[MQ[46]] = MQ[11], QQ[MQ[6]] = MQ[11]), RQ(QQ[MQ[0]].version = wQ(MQ[105]), QQ[MQ[0]].encode = vQ, QQ[MQ[0]].decode = YQ)
-         }(typeof exports === GQ(MQ[41]) + FQ(176) ? this.utf8 = {} : exports)
-       }(), RQ(qQ()[FQ(MQ[127])](CQ, QQ[MQ[0]][MQ[126]][MQ[0]], MQ[0], QQ[MQ[0]][MQ[126]][MQ[6]]), qQ()[FQ(MQ[127])](SQ, MQ[0], MQ[0], MQ[1]), qQ().ek(SQ, SQ, qQ()[FQ(178)], QQ[MQ[1]]));
-       const wQ = qQ()[FQ(179)](CQ, SQ);
-       qQ().sq(iQ, CQ, SQ, -wQ);
-       const LQ = QQ[MQ[12]] / MQ[128],
-         oQ = MQ[1] - Math[FQ(180)](-QQ[MQ[6]] * LQ);
-       RQ(qQ()[FQ(181)](iQ, iQ, -oQ * QQ[MQ[0]].GD / LQ), QQ[MQ[0]][FQ(182) + FQ(MQ[55])](iQ))
+           return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
+         }(ek) ?? ek
```

#### 43. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38444-L38446` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L392-L394) · [Before (L38444-L38446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38444-L38446)

```diff
-       for (const FQ of qQ.b)
-         if (HQ[FQ].meshItemName === QQ) return FQ;
-       return null
+       const ek = {};
+       for (const ik of kk) ek[ik.path] = ik.source;
+       return ek
```

#### 44. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38450-L38633` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L398) · [Before (L38450-L38633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38450-L38633)

```diff
-       const wQ = QQ.validBlockIds;
-       if (Array.isArray(wQ)) return wQ.includes(FQ);
-       if (FQ === vQ) return !1;
-       if ("solidBlocks" === wQ) return !0 !== oQ.h[FQ].wY;
-       if ("solidBlocksOrFluid" === wQ) return !0;
-       throw new Error(`Unsupported validBlockIds for ${FQ}: ${JSON.stringify(wQ)}`)
-     }
-     const AQ = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
-       },
-       tQ = {
-         "Yellow Balloon": {
- ... (168 more removed lines; see GitHub link above)
+       return kk < ek ? -1 : kk > ek ? 1 : 0
```

#### 45. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38637-L38682` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L402-L405) · [Before (L38637-L38682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38637-L38682)

```diff
-       return QQ === LQ.r.DEFAULT || function(QQ) {
-         return cQ.has(QQ) || CQ.has(QQ)
-       }(QQ)
-     }
-   },
-   36753: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ,
-       h: () => oQ,
-       j: () => LQ,
-       n: () => qQ
-     });
-     let LQ = function(QQ) {
-         return QQ[QQ.Linear = 0] = "Linear", QQ[QQ.CatmullRomSpline = 1] = "CatmullRomSpline", QQ
-       }({}),
-       qQ = function(QQ) {
- ... (30 more removed lines; see GitHub link above)
+       const ek = new TextEncoder;
+       let ik = 0;
+       for (const {
+           source: Dk
```

#### 46. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38699` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L412-L415) · [Before (L38699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38699)

```diff
-       return QQ.vV && QQ.GD > 0 && QQ.depenetrate && null === QQ.mV
+       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
+       if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
+       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
+       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
```

#### 47. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38701-L38704` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L417) · [Before (L38701-L38704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38701-L38704)

```diff
-     const mQ = {
-       base: [0, 0, 0],
-       max: [0, 0, 0]
-     };
+     const Uk = /^(.*)\[rot\[([1-4])$/;
```

#### 48. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38706-L38738` → after: `L419-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L419-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L419-L433) · [Before (L38706-L38738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38706-L38738)

```diff
-     function uQ(QQ, FQ, wQ) {
-       const oQ = wQ.base[1],
-         vQ = Math.floor(oQ),
-         uQ = DQ(QQ, wQ, vQ),
-         HQ = uQ - oQ;
-       if (!(HQ >= LQ)) return 0;
-       if (kQ(FQ, wQ, vQ)) return 0;
-       const bQ = mQ;
-       for (let LQ = 0; LQ < 3; LQ++) bQ.base[LQ] = wQ.base[LQ], bQ.max[LQ] = wQ.max[LQ];
-       bQ.base[1] += HQ, bQ.max[1] += HQ;
-       const YQ = Math.floor(bQ.max[1] - qQ);
-       for (let LQ = Math.floor(uQ); LQ <= YQ; LQ++)
-         if (kQ(FQ, bQ, LQ) || DQ(QQ, bQ, LQ) !== -1 / 0) return 0;
-       return HQ
-     }
-   },
- ... (17 more removed lines; see GitHub link above)
+     function Hk(kk, ek) {
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
```

#### 49. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38740-L38757` → after: `L435-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L435-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L435-L478) · [Before (L38740-L38757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38740-L38757)

```diff
-       chooseRandomEnchantmentAttributes(QQ, FQ, wQ) {
-         const qQ = [...wQ],
-           oQ = {
-             enchantments: {},
-             enchantmentTier: FQ,
-             id: (0, LQ.d)()
-           },
-           DQ = kQ[FQ];
-         for (let LQ = 0; LQ < DQ; LQ++) {
-           var mQ;
-           if (0 === qQ.length) {
-             console.warn("Ran out of enchantments to choose from");
-             break
-           }
-           const {
-             enchantments: FQ
- ... (2 more removed lines; see GitHub link above)
+       const bk = kk => {
+           const ek = Uk.exec(kk);
+           return ek && Sk.has(ek[1]) ? {
+             root: ek[1],
+             rotation: Number(ek[2]) - 1
+           } : null
+         },
+         rk = new Set(fk.map((kk => {
+           let [ek] = kk;
+           return bk(ek)?.root ?? ek
+         }))),
+         Pk = (kk, ik) => {
+           const Dk = kk.replace(/_?0$/, "");
+           return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
+         },
+         mk = new Map;
+ ... (28 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38759` → after: `L480-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L480-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L480-L496) · [Before (L38759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38759)

```diff
-         return oQ
+         const ik = mk.get(Hk),
+           fk = kk?.root ?? Uk;
+         if (ik !== fk && nk.set(fk, {
+             name: fk,
+             texture: ik,
+             kind: "frame"
+           }), kk) {
+           const ek = Sk.get(kk.root);
+           Kk[Hk] = {
+             id: ek,
+             rotation: kk.rotation
+           }, xk.set(ik, ek), nk.set(Uk, {
+             name: Uk,
+             texture: ik,
+             kind: "rotation"
+           })
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L38761-L39260` → after: `L498-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L498-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/113.js#L498-L515) · [Before (L38761-L39260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/113.js#L38761-L39260)

```diff
-     }
-     const oQ = {
-         Sword: ["Damage", "Attack Speed", "Critical Damage"],
-         Spear: ["Damage", "Attack Speed", "Critical Damage"],
-         Dagger: ["Damage", "Attack Speed", "Critical Damage"],
-         Mace: ["Damage", "Attack Speed", "Critical Damage"],
-         Whip: ["Damage", "Attack Speed", "Critical Damage"],
-         Helmet: ["Protection", "Health", "Health Regen"],
-         Chestplate: ["Protection", "Health", "Health Regen"],
-         Leggings: ["Protection", "Health", "Health Regen"],
-         Boots: ["Protection", "Health", "Health Regen"],
-         Gauntlets: ["Protection", "Health", "Health Regen"],
-         Bow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
-         Crossbow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
-         Pickaxe: ["Break Speed", "Momentum", "Mining Yield", "Mining Aura"],
-         Spade: ["Break Speed", "Momentum", "Digging Aura"],
- ... (484 more removed lines; see GitHub link above)
+       for (const Uk of xk.keys()) nk.delete(Uk);
+       for (const [Uk, Hk] of ik) {
+         const kk = xk.get(Hk);
+         void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
+       }
+       return {
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
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/114.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/114.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731)

#### 1. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L2)

```diff
- export const ids = [114];
+ export const ids = [114, 116, 135, 136];
```

#### 2. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L4-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L4-L189) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L4)

```diff
-   36240: (QQ, FQ, wQ) => {
+   4961: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk.g,
+       e: () => fk,
+       g: () => Dk.l
+     });
+     var Dk = ik(4965);
+     const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
+       strict: kk,
+       program: ek
+     })))))
+   },
+   6498: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       forgetShaderPackActiveHint: () => Fk,
+       isOtherApiVersion: () => jk,
+ ... (170 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L7-L40` → after: `L192-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L192-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L192-L274) · [Before (L7-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L7-L40)

```diff
-       f: () => CQ
-     });
-     wQ(9074);
-     var LQ = wQ(53),
-       qQ = wQ(1447),
-       oQ = wQ(1897),
-       DQ = wQ(1927),
-       kQ = wQ(17),
-       vQ = wQ(2345),
-       mQ = wQ(36242),
-       uQ = wQ(36248),
-       HQ = wQ(9030),
-       bQ = wQ(9067),
-       YQ = wQ(9082),
-       xQ = wQ(1107);
-     const AQ = (0, LQ.memo)((function() {
- ... (18 more removed lines; see GitHub link above)
+       c: () => bk,
+       g: () => Dk,
+       h: () => Hk,
+       i: () => Kk,
+       l: () => fk,
+       p: () => Sk,
+       r: () => mk,
+       t: () => Mk,
+       u: () => xk
+     });
+     const Dk = 5;
+ 
+     function fk(kk) {
+       return kk === Dk
+     }
+ 
+ ... (67 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L42` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L276-L277) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L42)

```diff
-           isDown: FQ
+           numAnimStates: ik,
+           animStartIdx: fk
```

#### 5. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L44` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L279) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L44)

```diff
-         pQ.current = FQ, GQ.current && (GQ.current.style.transform = (0, bQ.c)(FQ, sQ.current.growOnClick)), "shapes" === sQ.current.style && IQ(FQ)
+         for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
```

#### 6. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L46-L261` → after: `L281-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L281-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L281-L353) · [Before (L46-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L46-L261)

```diff
-       const UQ = (0, HQ.d)(FQ, wQ.touchActionButtons);
-       return (null !== (QQ = (0, mQ.c)(eQ, AQ)) && void 0 !== QQ ? QQ : (0, mQ.j)(iQ, cQ > 1, UQ, MQ)) ? "movement" === oQ || "cursor" === oQ ? null : (0, xQ.jsxs)(xQ.Fragment, {
-         children: [RQ && (0, xQ.jsx)(WQ, {
-           custom: OQ.forGuns && "shapes" === OQ.style ? OQ : null,
-           touch: FQ
-         }), !RQ && (0, xQ.jsx)(bQ.b, {
-           settings: OQ,
-           touch: FQ,
-           pressRef: GQ,
-           pressed: "shapes" === OQ.style ? rQ : pQ.current
-         })]
-       }) : null
-     }));
- 
-     function tQ() {
-       return oQ.gameBridge.lookup("cameraZoom", null)
- ... (200 more removed lines; see GitHub link above)
+       const fk = Object.entries(kk),
+         Sk = new Map;
+       for (const [Hk, wk] of fk) {
+         const kk = Uk.exec(Hk);
+         "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
+       }
+       const bk = kk => {
+           const ek = Uk.exec(kk);
+           return ek && Sk.has(ek[1]) ? {
+             root: ek[1],
+             rotation: Number(ek[2]) - 1
+           } : null
+         },
+         rk = new Set(fk.map((kk => {
+           let [ek] = kk;
+           return bk(ek)?.root ?? ek
+ ... (57 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L264-L442` → after: `L356-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L356-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L356-L360) · [Before (L264-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L264-L442)

```diff
-         cell: qQ,
-         fills: bQ,
-         outlines: vQ > 0 ? YQ : [],
-         ring: xQ,
-         ringOutline: AQ
-       }
-     }
- 
-     function mQ(QQ, FQ) {
-       return Math.round(QQ.circleRadius * FQ * 2 + kQ(QQ.circleThickness, FQ))
-     }
- 
-     function uQ(QQ, FQ) {
-       return Math.max(2 - FQ, 2 * Math.round((QQ - FQ) / 2) + FQ)
-     }
- 
- ... (163 more removed lines; see GitHub link above)
+         named: [...xk].sort(((kk, ek) => {
+           let [ik] = kk, [Dk] = ek;
+           return ik < Dk ? -1 : ik > Dk ? 1 : 0
+         })).map((kk => {
+           let [ek, ik] = kk;
```

#### 8. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L444-L445` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L362-L363) · [Before (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L444-L445)

```diff
-             x: LQ / wQ - QQ.left,
-             y: qQ / wQ - QQ.top
+             name: ek,
+             id: ik
```

#### 9. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L447-L1103` → after: `L365-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L365-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/114.js#L365-L370) · [Before (L447-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/114.js#L447-L1103)

```diff
-         }(xQ, eQ.cell, AQ),
-         GQ = (0, DQ.k)(FQ.color),
-         CQ = (0, DQ.k)(FQ.outlineColor),
-         WQ = (0, oQ.useRef)(0);
-       (0, oQ.useLayoutEffect)((() => {
-         if (uQ) return uQ.current = QQ => {
-           var FQ;
-           WQ.current = QQ, null === (FQ = HQ.current) || void 0 === FQ || FQ.querySelectorAll("[data-arm]").forEach((FQ => {
-             Object.assign(FQ.style, SQ(function(QQ) {
-               return {
-                 x: Number(QQ.dataset.x),
-                 y: Number(QQ.dataset.y),
-                 arm: QQ.dataset.arm
-               }
-             }(FQ), QQ, tQ.current))
-           }))
- ... (641 more removed lines; see GitHub link above)
+         })),
+         aliases: [...nk.values()],
+         layers: Kk
+       }
+     }
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/115.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/115.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387)

#### 1. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115];
+ export const ids = [115, 116, 135];
```

#### 2. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/115.js#L4)

```diff
-   6320: (QQ, FQ, wQ) => {
+   4961: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L6-L7` → after: `L6-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L6-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/115.js#L6-L27) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/115.js#L6-L7)

```diff
-       b: () => LQ
-     });
+       c: () => Dk.g,
+       e: () => fk,
+       g: () => Dk.l
+     });
+     var Dk = ik(4965);
+     const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
+       strict: kk,
+       program: ek
+     })))))
+   },
+   38787: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       ShaderPackPage: () => Pk,
+       harnessShaderPackMode: () => xk,
+       setHarnessUrlShaderPack: () => Kk,
+       shaderPackPage: () => Mk
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L9-L45` → after: `L29-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/115.js#L29-L40) · [Before (L9-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/115.js#L9-L45)

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
- ... (21 more removed lines; see GitHub link above)
+       status: "none"
+     };
+     class Pk {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
+       }
+       preload() {
+         if (null === this.stored) {
+           if ((0, Sk.k)(Dk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), mk().then((kk => {
+             kk && fk.f.removeItem(Sk.e)
+           })), this.stored;
+           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
```

#### 5. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L47-L166` → after: `L42-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L42-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/115.js#L42-L313) · [Before (L47-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/115.js#L47-L166)

```diff
-       },
-       canCustomiseChar: !0,
-       defaultBlock: "Block of Gold",
-       cantChangeError: "You cannot modify this block",
-       cantBreakError: null,
-       cantBuildError: null,
-       touchscreenActionButton: null,
-       strictFluidBuckets: !0,
-       preserveProtectedFluidSources: !1,
-       fillBrokenBlocksWithWater: !1,
-       canUseZoomKey: !0,
-       canAltAction: !0,
-       canSeeNametagsThroughWalls: !0,
-       showBasicMovementControls: !0,
-       middleTextTop: "",
-       middleTextUpper: "",
- ... (104 more removed lines; see GitHub link above)
+         return this.stored
+       }
+       prefetchHint() {
+         return (0, Sk.h)(Dk.featureFlags.settings.canUseShaderPacks)
+       }
+       async loadActive() {
+         const kk = await this.load();
+         return "active" === kk.status ? kk.pack : null
+       }
+       load() {
+         return this.pagePack ??= this.read().catch((kk => (console.error("Failed to load the shader pack", kk), rk))).then((kk => (this.resolved ??= kk, kk))), this.pagePack
+       }
+       hasNone() {
+         var kk;
+         return "none" === (null === (kk = this.resolved) || void 0 === kk ? void 0 : kk.status)
+       }
+ ... (256 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/116.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/116.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6)

#### 1. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116, 390];
+ export const ids = [116, 135];
```

#### 2. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L4)

```diff
-   35981: (QQ, FQ, wQ) => {
+   6477: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L6)

```diff
-       default: () => KF
+       loadShaderPackTextures: () => bk,
+       shaderPackTextures: () => rk
```

#### 4. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L8-L40` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L9-L11) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L8-L40)

```diff
-     var LQ = wQ(307),
-       qQ = wQ(3380),
-       oQ = wQ(3415),
-       DQ = wQ(3408),
-       kQ = wQ(3399),
-       vQ = wQ(1207),
-       mQ = wQ(27),
-       uQ = wQ(1725),
-       HQ = wQ(1367),
-       bQ = wQ(1451),
-       YQ = wQ(1070),
-       xQ = wQ.n(YQ),
-       AQ = wQ(1682),
-       tQ = wQ(53),
-       eQ = wQ(71),
-       MQ = wQ(2278),
- ... (17 more removed lines; see GitHub link above)
+     var Dk = ik(4965);
+     let fk = null,
+       Sk = null;
```

#### 5. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L42-L245` → after: `L13-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L13-L21) · [Before (L42-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L42-L245)

```diff
-     function lQ(QQ) {
-       var FQ;
-       let {
-         eventName: wQ
-       } = QQ;
-       const {
-         t: LQ
-       } = (0, vQ.y)(), qQ = OQ.i[wQ], [oQ, DQ] = (0, tQ.useState)((() => Date.now() >= qQ.endsAt.getTime())), [kQ, mQ] = (0, tQ.useState)("overall"), uQ = function(QQ, FQ) {
-         const {
-           userContext: wQ,
-           isUserContextUpdating: LQ
-         } = (0, cQ.e)(), qQ = `${QQ}:${FQ}`, [oQ, DQ] = (0, tQ.useState)({
-           requestKey: qQ,
-           leaderboard: {
-             status: "loading"
-           }
- ... (188 more removed lines; see GitHub link above)
+     function bk() {
+       return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ek,
+           textureNameToIndex: ik,
+           textureAnimationData: Sk
+         } = kk;
+         return fk ??= (0, Dk.h)(ik, Sk, ek), fk
+       })), Sk
```

#### 6. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L248-L292` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L24-L26) · [Before (L248-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L248-L292)

```diff
-     function jQ(QQ) {
-       let {
-         event: FQ,
-         progress: wQ
-       } = QQ;
-       const {
-         t: LQ
-       } = (0, vQ.y)(), qQ = null !== wQ && FQ.prizeGoals.some(((QQ, FQ) => wQ[FQ] >= QQ.target));
-       return (0, TQ.jsxs)("div", {
-         className: "GameEventPanelGoals",
-         children: [(0, TQ.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: LQ(qQ ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, TQ.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: FQ.prizeGoals.map(((QQ, FQ) => {
- ... (29 more removed lines; see GitHub link above)
+     function rk() {
+       if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return fk
```

#### 7. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L294-L298` → after: `L28-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L28-L42) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L294-L298)

```diff
-     var aQ = wQ(1539),
-       XQ = wQ(1595),
-       fQ = wQ(1053),
-       VQ = wQ(720),
-       hQ = wQ(3356);
+   },
+   4965: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => rk,
+       c: () => bk,
+       g: () => Dk,
+       h: () => Hk,
+       i: () => Kk,
+       l: () => fk,
+       p: () => Sk,
+       r: () => mk,
+       t: () => Mk,
+       u: () => xk
+     });
+     const Dk = 5;
```

#### 8. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L301-L394` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L45) · [Before (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L301-L394)

```diff
-       let {
-         gameNameWithVariation: FQ
-       } = QQ;
-       const wQ = (0, aQ.G)(FQ),
-         [LQ, qQ] = (0, tQ.useState)(null);
-       if ((0, tQ.useEffect)((() => {
-           if (!wQ) return;
-           let QQ = !0;
-           return (0, XQ.i)(wQ).then((FQ => {
-             QQ && qQ(FQ)
-           })).catch((QQ => {
-             console.error(`Failed to load the page copy for ${wQ.name}`, QQ)
-           })), () => {
-             QQ = !1
-           }
-         }), [wQ]), !wQ || !LQ || LQ.name !== wQ.name) return null;
- ... (78 more removed lines; see GitHub link above)
+       return kk === Dk
```

#### 9. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L421-L442` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L49) · [Before (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L421-L442)

```diff
-       let {
-         preview: FQ,
-         isBroken: wQ
-       } = QQ;
-       const LQ = null === FQ ? null : (0, oQ.e)(FQ, "small"),
-         DQ = (0, qQ.f)(null !== LQ && void 0 !== LQ ? LQ : oQ.q);
-       return null === FQ ? (0, TQ.jsx)("div", {
-         className: xQ()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: wQ
-         }),
-         children: (0, TQ.jsx)(EQ.c, {
-           name: wQ ? "triangle-exclamation" : "star"
-         })
-       }) : (0, TQ.jsx)("div", {
-         className: xQ()("FeaturedGamesPopupSlotThumbnail", kQ.j),
-         style: (0, kQ.f)(DQ),
- ... (6 more removed lines; see GitHub link above)
+       return [...kk.features]
```

#### 10. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L446-L551` → after: `L56-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L56-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L56-L80) · [Before (L446-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L446-L551)

```diff
-       let {
-         schematicId: FQ,
-         gameName: wQ
-       } = QQ;
-       const {
-         userContext: qQ
-       } = (0, cQ.e)(), oQ = (0, xF.c)(), [DQ, kQ] = (0, tQ.useState)(null), [vQ, mQ] = (0, tQ.useState)(null), [uQ, HQ] = (0, tQ.useState)(!1), YQ = (0, tQ.useCallback)((() => {
-         mQ(null), sQ.b.getFeaturedGames(qQ).then((QQ => {
-           oQ.current && kQ(QQ.slots)
-         })).catch((QQ => {
-           console.error("Failed to get featured games", QQ), oQ.current && mQ("Failed to load featured games")
-         }))
-       }), [qQ, oQ]);
-       (0, tQ.useEffect)((() => {
-         YQ()
-       }), [YQ]);
- ... (90 more removed lines; see GitHub link above)
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
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L560-L582` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L84-L86) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L560-L582)

```diff
-       let {
-         customLobbies: FQ,
-         favouriteLobbies: wQ,
-         toggleLikeLobby: LQ,
-         showReport: qQ
-       } = QQ;
-       const [oQ, DQ] = (0, tQ.useState)(pF);
-       return (0, tQ.useEffect)((() => {
-         if (oQ >= FQ.length) return;
-         let QQ = !0;
-         return (0, GF.d)().then((() => {
-           QQ && DQ(oQ + cF)
-         })), () => {
-           QQ = !1
-         }
-       }), [oQ, FQ.length]), (0, TQ.jsx)(TQ.Fragment, {
- ... (7 more removed lines; see GitHub link above)
+       const ek = {};
+       for (const ik of kk) ek[ik.path] = ik.source;
+       return ek
```

#### 12. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L613-L630` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L90) · [Before (L613-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L613-L630)

```diff
-       const wQ = HF.f[QQ.schematicId];
-       return {
-         listedVariations: [],
-         backgroundImage: (0, oQ.e)(QQ, "large"),
-         badges: [],
-         category: QQ.gameCategory,
-         title: void 0 !== (null === wQ || void 0 === wQ ? void 0 : wQ.title) ? FQ(wQ.title) : QQ.name,
-         variationTitle: null,
-         description: void 0 !== (null === wQ || void 0 === wQ ? void 0 : wQ.description) ? FQ(wQ.description) : QQ.description,
-         ownerSocialPreviewWithoutLocation: "owner" in QQ ? QQ.owner : null,
-         ccu: QQ.ccu,
-         favourites: QQ.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in QQ ? QQ.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
-         canCreateCustomLobbies: !0,
- ... (2 more removed lines; see GitHub link above)
+       return kk < ek ? -1 : kk > ek ? 1 : 0
```

#### 13. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L634-L638` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L94-L97) · [Before (L634-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L634-L638)

```diff
-       var FQ, wQ, LQ;
-       return null !== (FQ = null !== (wQ = (0, sF.k)() ? function(QQ) {
-         for (const [FQ, wQ] of Object.entries(rF)) {
-           const LQ = [FQ, ...wQ.map((QQ => (0, oF.Sb)(FQ, QQ)))];
-           if (LQ.includes(QQ)) return LQ
+       const ek = new TextEncoder;
+       let ik = 0;
+       for (const {
+           source: Dk
```

#### 14. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L640-L652` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L99-L100) · [Before (L640-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L640-L652)

```diff
-         return null
-       }(QQ) : null) && void 0 !== wQ ? wQ : null === (LQ = HF.e[QQ]) || void 0 === LQ ? void 0 : LQ.listedVariations) && void 0 !== FQ ? FQ : null
-     }
- 
-     function KF() {
-       const {
-         gameNameWithVariation: QQ
-       } = (0, yQ.y)();
-       if ((0, tQ.useEffect)(RF.r, []), QQ && (0, LF.q)(QQ)) return (0, TQ.jsx)(zF, {
-         urlId: QQ
-       }, QQ);
-       const FQ = QQ && (0, qF.f)(QQ) ? QQ : "firstParty";
-       return (0, TQ.jsx)(lF, {}, FQ)
+         of kk) ik += ek.encode(Dk).byteLength;
+       return ik
```

#### 15. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L656-L689` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L104-L107) · [Before (L656-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L656-L689)

```diff
-       let {
-         urlId: FQ
-       } = QQ;
-       const {
-         userContext: wQ,
-         isUserContextUpdating: LQ
-       } = (0, cQ.e)(), qQ = (0, tQ.useMemo)((() => (0, ZQ.h)(FQ)), [FQ]);
-       (0, tQ.useMemo)((() => {
-         if (null === qQ) return;
-         const QQ = gQ.userContextManager.peekCurrentUserContext();
-         (null !== QQ ? sQ.b.getGame(QQ, qQ.schematicId) : gQ.userContextManager.getCurrentUserContext().then((QQ => sQ.b.getGame(QQ, qQ.schematicId)))).catch((QQ => {
-           console.error(`Failed to get the custom game ${qQ.schematicId}`, QQ), (0, ZQ.f)(FQ)
-         }))
-       }), [qQ, FQ]);
-       const [oQ, DQ] = (0, tQ.useState)(null), kQ = (0, PQ.b)();
-       (0, tQ.useEffect)((() => {
- ... (18 more removed lines; see GitHub link above)
+       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
+       if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
+       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
+       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
```

#### 16. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L692-L805` → after: `L111-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L111-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L111-L170) · [Before (L692-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L692-L805)

```diff
-     function lF(QQ) {
-       var FQ, wQ, DQ, YQ, OQ, rQ, IQ, NQ;
-       let {
-         gameNameWithVariation: KQ,
-         knownCustomGame: zQ = null
-       } = QQ;
-       const {
-         t: jQ
-       } = (0, vQ.y)();
-       (0, uF.h)();
-       const XQ = (0, uF.m)(),
-         {
-           userContext: fQ,
-           isUserContextUpdating: VQ
-         } = (0, cQ.e)(),
-         hQ = (0, WF.e)(),
- ... (98 more removed lines; see GitHub link above)
+     function Hk(kk, ek) {
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
+ ... (44 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L807-L838` → after: `L172-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L172-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L172-L186) · [Before (L807-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L807-L838)

```diff
-       }), []), (0, CQ.d)("Enter", (QQ => {
-         const FQ = QQ.target instanceof Element ? QQ.target : null;
-         if (QQ.defaultPrevented || null !== FQ && void 0 !== FQ && FQ.closest("input, textarea, select")) return;
-         const wQ = null === FQ || void 0 === FQ ? void 0 : FQ.closest("a, button");
-         wQ && wQ !== Fw.current || (QQ.preventDefault(), uw())
-       })), (0, SQ.c)(BQ.navigateToHomePage);
-       const ww = VF.length > 0 || hF.length > 0,
-         Lw = !aF.useRejoinLastLobbyButton || 0 === VF.length,
-         qw = RF && null === aF.ownerSocialPreviewWithoutLocation,
-         ow = fQ.getPlayerName() === (null === pF || void 0 === pF || null === (FQ = pF.owner) || void 0 === FQ ? void 0 : FQ.name),
-         Dw = null !== (wQ = null === (DQ = aF.badges.find((QQ => "event" === QQ.type))) || void 0 === DQ ? void 0 : DQ.event) && void 0 !== wQ ? wQ : null,
-         kw = Lw ? bQ.m : bQ.f,
-         vw = (0, TQ.jsx)(HQ.f, {
-           tooltipInner: (0, TQ.jsx)("div", {
-             children: jQ("homePage:quickPlayInfo")
-           }),
- ... (16 more removed lines; see GitHub link above)
+         const ik = mk.get(Hk),
+           fk = kk?.root ?? Uk;
+         if (ik !== fk && nk.set(fk, {
+             name: fk,
+             texture: ik,
+             kind: "frame"
+           }), kk) {
+           const ek = Sk.get(kk.root);
+           Kk[Hk] = {
+             id: ek,
+             rotation: kk.rotation
+           }, xk.set(ik, ek), nk.set(Uk, {
+             name: Uk,
+             texture: ik,
+             kind: "rotation"
```

#### 18. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L840-L892` → after: `L188-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L188-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L188-L203) · [Before (L840-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L840-L892)

```diff
-         });
-       (0, tQ.useEffect)((() => {
-         if (!RF || VQ) return;
-         let QQ = !0;
-         const FQ = (0, qF.l)(LF.gameNameWithVariation);
-         return sQ.b.getGame(fQ, FQ).then((FQ => {
-           QQ && Qw(FQ)
-         })).catch((FQ => {
-           console.error("Failed to get Custom Game information", FQ), QQ && (0, BQ.navigateToHomePage)()
-         })), sQ.b.getFavouriteGames(fQ).then((wQ => {
-           QQ && lF((QQ => ({
-             ...QQ,
-             isFavourite: wQ.includes(FQ)
-           })))
-         })).catch((FQ => {
-           console.error("Failed to get favourite games", FQ), QQ && KF(!0)
- ... (37 more removed lines; see GitHub link above)
+         } else xk.set(ik, Hk + 1)
+       }
+       for (const Uk of xk.keys()) nk.delete(Uk);
+       for (const [Uk, Hk] of ik) {
+         const kk = xk.get(Hk);
+         void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
+       }
+       return {
+         named: [...xk].sort(((kk, ek) => {
+           let [ik] = kk, [Dk] = ek;
+           return ik < Dk ? -1 : ik > Dk ? 1 : 0
+         })).map((kk => {
+           let [ek, ik] = kk;
+           return {
+             name: ek,
+             id: ik
```

#### 19. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L894-L1525` → after: `L205-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L205-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/116.js#L205-L208) · [Before (L894-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/116.js#L894-L1525)

```diff
-         }), [fQ, PF]),
-         bw = (null === pF || void 0 === pF ? void 0 : pF.schematicId) === (0, qF.l)(QF.gameNameWithVariation) ? pF : null,
-         Yw = bw && (0, aQ.K)(QF.gameNameWithVariation, (QQ => jQ(QQ)), bw);
-       (0, dQ.h)(bw && (0, aQ.B)(QF.gameNameWithVariation, bw));
-       const xw = nQ.featureFlags.canUseCustomLobbies && !0 === aF.canCreateCustomLobbies,
-         Aw = (0, TQ.jsx)("div", {
-           className: "GameInformationPageContentAnchor",
-           children: (0, TQ.jsx)(JQ, {
-             gameNameWithVariation: LF.gameNameWithVariation
-           })
-         });
-       return (0, TQ.jsx)(TQ.Fragment, {
-         children: (0, TQ.jsxs)("article", {
-           className: xQ()("GameInformation", {
-             GameInformationFadeIn: XF,
-             GameInformationReleaseCountdown: "releaseCountdown" === (null === (YQ = aF.countdownInformation) || void 0 === YQ ? void 0 : YQ.type)
- ... (616 more removed lines; see GitHub link above)
+         })),
+         aliases: [...nk.values()],
+         layers: Kk
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 1. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L4-L6` → after: `L5-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L5-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L5-L2584) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L4-L6)

```diff
-   6344: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => AQ
+   6044: function(kk, ek, ik) {
+     var Dk;
+     ! function() {
+       var fk, Sk = 1e9,
+         bk = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         rk = !0,
+         Pk = "[DecimalError] ",
+         mk = Pk + "Invalid argument: ",
+         Mk = Pk + "Exponent out of range: ",
+         Kk = Math.floor,
+ ... (2564 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L21-L30` → after: `L2590-L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L2590-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L2590-L2625) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L21-L30)

```diff
-         t: QQ
-       } = (0, LQ.y)(), FQ = !(0, oQ.shouldUseUkPrivacyPolicy)();
-       return (0, bQ.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, bQ.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: QQ("homePage:privacyPolicy")
-         }), (0, bQ.jsx)("p", {
-           children: (0, bQ.jsxs)("em", {
-             children: ["Last updated: ", uQ.g.toLocaleDateString()]
+         circular: ek = !1,
+         createInternalComparator: ik,
+         createState: Dk,
+         strict: fk = !1
+       } = kk, Sk = function(kk) {
+         let {
+           circular: ek,
+           createCustomConfig: ik,
+           strict: Dk
+         } = kk, fk = {
+           areArrayBuffersEqual: wk,
+           areArraysEqual: Dk ? sk : lk,
+           areDataViewsEqual: pk,
+           areDatesEqual: yk,
+           areErrorsEqual: Yk,
+           areFunctionsEqual: Lk,
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L32-L642` → after: `L2627-L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L2627-L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L2627-L4483) · [Before (L32-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L32-L642)

```diff
-         }), (0, bQ.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, bQ.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, bQ.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
-         }), (0, bQ.jsx)("p", {
-           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
-         }), (0, bQ.jsx)("h2", {
-           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
-         }), (0, bQ.jsx)("h3", {
-           children: "2.1 Visitors"
-         }), (0, bQ.jsx)("h4", {
-           children: "2.1.1 Data Collection and Usage"
-         }), (0, bQ.jsxs)("p", {
-           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
- ... (595 more removed lines; see GitHub link above)
+         }
+         return fk
+       }(kk), bk = vk(Sk);
+       var rk;
+       return function(kk) {
+         let {
+           circular: ek,
+           comparator: ik,
+           createState: Dk,
+           equals: fk,
+           strict: Sk
+         } = kk;
+         if (Dk) return function(kk, bk) {
+           const {
+             cache: rk = (ek ? new WeakMap : void 0),
+             meta: Pk
+ ... (1841 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L645-L822` → after: `L5746-L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L5746-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L5746-L5767) · [Before (L645-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L645-L822)

```diff
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Usage data, pages visited, interactions on the site"
-               })
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Analyzes website usage to help us understand how the site is used and improve user experience."
-               })
-             })]
-           }), (0, bQ.jsxs)("tr", {
-             children: [(0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: (0, bQ.jsx)("a", {
-                   href: "https://docs.bytebrew.io/BBSettings/privacypolicy",
-                   children: "ByteBrew"
-                 })
- ... (162 more removed lines; see GitHub link above)
+             } else if ("horizontal" === ik) {
+               var Fk = wk.scale,
+                 uk = bk + ek,
+                 qk = uk - Pk,
+                 Ik = uk + Pk,
+                 zk = Fk(xk - lk),
+                 Qk = Fk(xk + yk);
+               Yk.push({
+                 x1: qk,
+                 y1: Qk,
+                 x2: Ik,
+                 y2: Qk
+               }), Yk.push({
+                 x1: uk,
+                 y1: zk,
+                 x2: uk,
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L824-L826` → after: `L5769-L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L5769-L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L5769-L7157) · [Before (L824-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L824-L826)

```diff
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Purpose"
+             }
+             return Dk.createElement(Sk.d, mk({
+               className: "recharts-errorBar",
+               key: "bar-".concat(Yk.map((function(kk) {
+                 return "".concat(kk.x1, "-").concat(kk.x2, "-").concat(kk.y1, "-").concat(kk.y2)
+               })))
+             }, pk), Yk.map((function(kk) {
+               return Dk.createElement("line", mk({}, kk, {
+                 key: "line-".concat(kk.x1, "-").concat(kk.x2, "-").concat(kk.y1, "-").concat(kk.y2)
+               }))
+             })))
+           }));
+           return Dk.createElement(Sk.d, {
+             className: "recharts-errorBars"
+           }, yk)
+         }
+ ... (1373 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L828-L830` → after: `L7159-L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L7159-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L7159-L7176) · [Before (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L828-L830)

```diff
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Example"
+             } else bk[ek] = Sk = nk(nk({}, Sk), {}, {
+               tickCoord: Sk.coordinate
+             });
+             Mk(kk, Sk.tickCoord, rk, Pk, mk) && (Pk = Sk.tickCoord + kk * (rk() / 2 + fk), bk[ek] = nk(nk({}, Sk), {}, {
+               isShow: !0
+             }))
+           }, lk = 0; lk < Hk; lk++) wk(lk);
+         return bk
+       }(jk, sk, Ak, Kk, Uk, "preserveStartEnd" === wk) : function(kk, ek, ik, Dk, fk) {
+         for (var Sk = (Dk || []).slice(), bk = Sk.length, rk = ek.start, Pk = ek.end, mk = function(ek) {
+             var Dk, mk = Sk[ek],
+               Kk = function() {
+                 return void 0 === Dk && (Dk = ik(mk, ek)), Dk
+               };
+             if (ek === bk - 1) {
+               var xk = kk * (mk.coordinate + kk * Kk() / 2 - Pk);
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L832-L868` → after: `L7178-L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R7178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L7178-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L7178-L8074) · [Before (L832-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L832-L868)

```diff
-             })]
-           }), (0, bQ.jsxs)("tr", {
-             children: [(0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Functional Cookies"
-               })
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Ensure the website works properly by enabling basic functions like navigation and settings."
-               })
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Remembering your game settings, progress or language preferences."
-               })
-             })]
-           }), (0, bQ.jsxs)("tr", {
- ... (21 more removed lines; see GitHub link above)
+             } else Sk[ek] = mk = nk(nk({}, mk), {}, {
+               tickCoord: mk.coordinate
+             });
+             Mk(kk, mk.tickCoord, Kk, rk, Pk) && (Pk = mk.tickCoord - kk * (Kk() / 2 + fk), Sk[ek] = nk(nk({}, mk), {}, {
+               isShow: !0
+             }))
+           }, Kk = bk - 1; Kk >= 0; Kk--) mk(Kk);
+         return Sk
+       }(jk, sk, Ak, Kk, Uk), Yk.filter((function(kk) {
+         return kk.isShow
+       })))
+     }
+   },
+   6262: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Pk
+ ... (881 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L870-L872` → after: `L8076-L9945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L8076-L9945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L8076-L9945) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L870-L872)

```diff
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsxs)("p", {
-                 children: ["Ensuring the same ad doesn\u2019t appear too frequently or detecting fraudulent ad interactions", FQ ? ", and when you consent, showing you ads that are more relevant to your interests." : "."]
+             })), ik.detachDragEndListener()
+           })), Tk(ik, "handleLeaveWrapper", (function() {
+             (ik.state.isTravellerMoving || ik.state.isSlideMoving) && (ik.leaveTimer = window.setTimeout(ik.handleDragEnd, ik.props.leaveTimeOut))
+           })), Tk(ik, "handleEnterSlideOrTraveller", (function() {
+             ik.setState({
+               isTextActive: !0
+             })
+           })), Tk(ik, "handleLeaveSlideOrTraveller", (function() {
+             ik.setState({
+               isTextActive: !1
+             })
+           })), Tk(ik, "handleSlideDragStart", (function(kk) {
+             var ek = Ok(kk) ? kk.changedTouches[0] : kk;
+             ik.setState({
+               isTravellerMoving: !1,
+               isSlideMoving: !0,
+ ... (1854 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L874-L878` → after: `L9947-L18647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9947-L18647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L9947-L18647) · [Before (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L874-L878)

```diff
-             })]
-           }), (0, bQ.jsxs)("tr", {
-             children: [(0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Notice Acceptance Cookies"
+             })), Yk
+           },
+           uk = function(kk, Dk) {
+             var fk = kk.props,
+               Sk = kk.dataStartIndex,
+               bk = kk.dataEndIndex,
+               rk = kk.updateId;
+             if (!(0, jk.w)({
+                 props: fk
+               })) return null;
+             var Pk = fk.children,
+               mk = fk.layout,
+               xk = fk.stackOffset,
+               Hk = fk.data,
+               wk = fk.reverseStackOrder,
+               lk = ti(mk),
+ ... (8685 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L880-L882` → after: `L18649-L18687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R18649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L18649-L18687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L18649-L18687) · [Before (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L880-L882)

```diff
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Record whether you have acknowledged or accepted notices, such as our cookie policy."
+             }
+           }
+         return Sk
+       },
+       Eb = function(kk) {
+         var ek = kk.barGap,
+           ik = kk.barCategoryGap,
+           Dk = kk.bandSize,
+           fk = kk.sizeList,
+           Sk = void 0 === fk ? [] : fk,
+           bk = kk.maxBarSize,
+           rk = Sk.length;
+         if (rk < 1) return null;
+         var Pk, mk = (0, Lb.l)(ek, Dk, 0, !0),
+           Mk = [];
+         if (Sk[0].barSize === +Sk[0].barSize) {
+ ... (23 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L884-L886` → after: `L18689-L18708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R18689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L18689-L18708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L18689-L18708) · [Before (L884-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L884-L886)

```diff
-             }), (0, bQ.jsx)("td", {
-               children: (0, bQ.jsx)("p", {
-                 children: "Storing your acceptance of our cookie banner or other notifications."
+             })), Dk
+           }), Mk)
+         } else {
+           var Hk = (0, Lb.l)(ik, Dk, 0, !0);
+           Dk - 2 * Hk - (rk - 1) * mk <= 0 && (mk = 0);
+           var wk = (Dk - 2 * Hk - (rk - 1) * mk) / rk;
+           wk > 1 && (wk >>= 0);
+           var lk = bk === +bk ? Math.min(wk, bk) : wk;
+           Pk = Sk.reduce((function(kk, ek, ik) {
+             var Dk = [].concat(sb(kk), [{
+               item: ek.item,
+               position: {
+                 offset: Hk + (wk + mk) * ik + (wk - lk) / 2,
+                 size: lk
+               }
+             }]);
+ ... (4 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L888-L1059` → after: `L18710-L19079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R18710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L18710-L19079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L18710-L19079) · [Before (L888-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L888-L1059)

```diff
-             })]
-           })]
-         }), (0, bQ.jsx)("h3", {
-           children: "4.3 Managing Cookies"
-         }), (0, bQ.jsx)("p", {
-           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
-         }), (0, bQ.jsxs)("ul", {
-           children: [(0, bQ.jsx)("li", {
-             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
-           }), (0, bQ.jsx)("li", {
-             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
-           }), (0, bQ.jsx)("li", {
-             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
-           }), (0, bQ.jsx)("li", {
-             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
-           })]
- ... (156 more removed lines; see GitHub link above)
+             })), Dk
+           }), Mk)
+         }
+         return Pk
+       },
+       hb = function(kk, ek, ik, Dk) {
+         var fk = ik.children,
+           Sk = ik.width,
+           bk = ik.margin,
+           rk = Sk - (bk.left || 0) - (bk.right || 0),
+           Pk = (0, Ab.d)({
+             children: fk,
+             legendWidth: rk
+           });
+         if (Pk) {
+           var mk = Dk || {},
+ ... (354 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L1062-L1074` → after: `L19194-L19562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R19194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L19194-L19562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L19194-L19562) · [Before (L1062-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L1062-L1074)

```diff
-     function xQ() {
-       const {
-         adMobPrivacyOptionsRequired: QQ
-       } = (0, vQ.l)(["adMobPrivacyOptionsRequired"]);
-       if (!QQ) return null;
-       return (0, bQ.jsx)(DQ.f, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await mQ.d.request("ads.showPrivacyOptions", {})
-             } catch (QQ) {
-               console.error("Failed to open AdMob privacy options:", QQ)
+     function fk(kk) {
+       return fk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
+         return typeof kk
+       } : function(kk) {
+         return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
+       }, fk(kk)
+     }
+ 
+     function Sk(kk, ek) {
+       var ik = Object.keys(kk);
+       if (Object.getOwnPropertySymbols) {
+         var Dk = Object.getOwnPropertySymbols(kk);
+         ek && (Dk = Dk.filter((function(ek) {
+           return Object.getOwnPropertyDescriptor(kk, ek).enumerable
+         }))), ik.push.apply(ik, Dk)
+       }
+ ... (353 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L1076-L1078` → after: `L19564-L19871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R19564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L19564-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L19564-L19871) · [Before (L1076-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L1076-L1078)

```diff
-           })()
-         },
-         children: "Manage Privacy Choices"
+           }(ek),
+           Uk = nk.startAngle,
+           Hk = nk.endAngle,
+           wk = rk;
+         if (Uk <= Hk) {
+           for (; wk > Hk;) wk -= 360;
+           for (; wk < Uk;) wk += 360;
+           xk = wk >= Uk && wk <= Hk
+         } else {
+           for (; wk > Uk;) wk -= 360;
+           for (; wk < Hk;) wk += 360;
+           xk = wk >= Hk && wk <= Uk
+         }
+         return xk ? Sk(Sk({}, ek), {}, {
+           radius: bk,
+           angle: Kk(wk, ek)
+ ... (292 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L1083-L1088` → after: `L20079-L20123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R20079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L20079-L20123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L20079-L20123) · [Before (L1083-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L1083-L1088)

```diff
-       return (0, bQ.jsxs)(bQ.Fragment, {
-         children: [(0, qQ.d)() && (0, bQ.jsx)(bQ.Fragment, {
-           children: (0, bQ.jsx)(DQ.f, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, kQ.w)()
+       return bk(Sk.apply(null, arguments).paddingInner(1))
+     }
+   },
+   5988: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           this.range(kk);
+           break;
+         default:
+           this.range(ek).domain(kk)
+       }
+       return this
+     }
+ ... (29 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L1090-L1095` → after: `L20125-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R20125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L20125-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/117.js#L20125-L20339) · [Before (L1090-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/117.js#L1090-L1095)

```diff
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, bQ.jsx)(xQ, {}), (0, bQ.jsx)(HQ.c, {
-           className: "PrivacyPolicyLinks"
-         }), (0, bQ.jsx)(YQ, {})]
-       })
+             _key: {
+               value: ek
+             }
+           }), null != kk)
+           for (const [ik, Dk] of kk) this.set(ik, Dk)
+       }
+       get(kk) {
+         return super.get(fk(this, kk))
+       }
+       has(kk) {
+         return super.has(fk(this, kk))
+       }
+       set(kk, ek) {
+         return super.set(Sk(this, kk), ek)
+       }
+       delete(kk) {
+ ... (199 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 1. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/118.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/118.js#L4)

```diff
-   6353: (QQ, FQ, wQ) => {
+   6295: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L6` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/118.js#L7-L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/118.js#L6)

```diff
-       default: () => oQ
+       Graph: () => tk,
+       debug: () => Ii,
+       default: () => Qi,
+       graphlib: () => Sk,
+       layout: () => Ui,
+       util: () => zi,
+       version: () => be
```

#### 3. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L8-L184` → after: `L15-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/118.js#L15-L888) · [Before (L8-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/118.js#L8-L184)

```diff
-     var LQ = wQ(1207),
-       qQ = wQ(1107);
- 
-     function oQ() {
-       const {
-         t: QQ
-       } = (0, LQ.y)();
-       return (0, qQ.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, qQ.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: QQ("homePage:termsOfService")
-         }), (0, qQ.jsx)("p", {
-           children: (0, qQ.jsx)("em", {
-             children: "Last updated: July 15, 2025"
-           })
- ... (161 more removed lines; see GitHub link above)
+     var Dk = Object.defineProperty,
+       fk = (kk, ek, ik) => ((kk, ek, ik) => ek in kk ? Dk(kk, ek, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: ik
+       }) : kk[ek] = ik)(kk, "symbol" != typeof ek ? ek + "" : ek, ik),
+       Sk = {};
+     ((kk, ek) => {
+       for (var ik in ek) Dk(kk, ik, {
+         get: ek[ik],
+         enumerable: !0
+       })
+     })(Sk, {
+       Graph: () => tk,
+       alg: () => lk
+ ... (858 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L186-L200` → after: `L890-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L890-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/118.js#L890-L1085) · [Before (L186-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/118.js#L186-L200)

```diff
-         }), (0, qQ.jsx)("h3", {
-           children: "13. Governing Law and Dispute Resolution"
-         }), (0, qQ.jsx)("p", {
-           children: (0, qQ.jsxs)("ul", {
-             children: [(0, qQ.jsx)("li", {
-               children: "Governing Law: These Terms are governed by the laws of England and Wales."
-             }), (0, qQ.jsx)("li", {
-               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
-             }), (0, qQ.jsx)("li", {
-               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
-             }), (0, qQ.jsx)("li", {
-               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
-             }), (0, qQ.jsx)("li", {
-               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
-             })]
+         })), kk.edges().forEach((kk => {
+           let Sk = ik.edge(kk.v, kk.w) || 0,
+             bk = ek(kk),
+             rk = Sk + bk;
+           ik.setEdge(kk.v, kk.w, rk);
+           let Pk = ik.node(kk.v),
+             mk = ik.node(kk.w);
+           fk = Math.max(fk, Pk.out += bk), Dk = Math.max(Dk, mk.in += bk)
+         }));
+         let Sk = function(kk) {
+             let ek = [];
+             for (let ik = 0; ik < kk; ik++) ek.push(ik);
+             return ek
+           }(fk + Dk + 3).map((() => new me)),
+           bk = Dk + 1;
+         return ik.nodes().forEach((kk => {
+ ... (180 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L202-L220` → after: `L1087-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L1087-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/118.js#L1087-L1307) · [Before (L202-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/118.js#L202-L220)

```diff
-         }), (0, qQ.jsx)("h3", {
-           children: "14. Severability"
-         }), (0, qQ.jsx)("p", {
-           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
-         }), (0, qQ.jsx)("h3", {
-           children: "15. Contact Information"
-         }), (0, qQ.jsxs)("p", {
-           children: ["If you have any questions about these Terms, please contact us at:", (0, qQ.jsxs)("ul", {
-             children: [(0, qQ.jsx)("li", {
-               children: "Email: privacy@bloxd.io"
-             }), (0, qQ.jsx)("li", {
-               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
-             })]
-           })]
-         }), (0, qQ.jsx)("h3", {
-           children: "16. Entire Agreement"
- ... (3 more removed lines; see GitHub link above)
+         })), ek
+       }(kk), we(kk);
+       let ek, ik, Dk = pe(kk);
+       for (Fe(Dk), de(Dk, kk); ek = qe(Dk);) ik = Ie(Dk, kk, ek), ze(Dk, kk, ek, ik)
+     }
+ 
+     function de(kk, ek) {
+       let ik = Ae(kk, kk.nodes());
+       ik = ik.slice(0, ik.length - 1), ik.forEach((ik => function(kk, ek, ik) {
+         let Dk = kk.node(ik).parent,
+           fk = kk.edge(ik, Dk);
+         fk.cutvalue = Ve(kk, ek, ik)
+       }(kk, ek, ik)))
+     }
+ 
+     function Ve(kk, ek, ik) {
+ ... (205 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/119.js#L4-L476) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/119.js#L4)

```diff
-   6356: (QQ, FQ, wQ) => {
+   36842: (kk, ek, ik) => {
+     var Dk = {
+       "./67/67_Atlas.png": 26742,
+       "./67/67_Model.glb": 32831,
+       "./67/67_Reconstructed.glb": 32840,
+       "./67/variations/0_67_default.png": 26749,
+       "./Armour Collector/Armour Collector_Atlas.png": 26757,
+       "./Armour Collector/Armour Collector_Model.glb": 32842,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 32850,
+       "./Armour Collector/variations/0_armour collector_default.png": 26760,
+       "./Bear/BearSaddle_Atlas.png": 26767,
+       "./Bear/Bear_Atlas.png": 26772,
+       "./Bear/Bear_Model.glb": 32855,
+       "./Bear/variations/0_bear_default.png": 26774,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 26783,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 32864,
+ ... (457 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8-L18` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/119.js#L480-L481) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/119.js#L8-L18)

```diff
-     var LQ = wQ(1515),
-       qQ = wQ(1551),
-       oQ = wQ(2903),
-       DQ = wQ(2194),
-       kQ = wQ(1451),
-       vQ = wQ(1503),
-       mQ = wQ(1140),
-       uQ = wQ(1074),
-       HQ = wQ(1207),
-       bQ = wQ(1079),
-       YQ = wQ(1107);
+     var Dk = ik(37861),
+       fk = ik.n(Dk);
```

#### 3. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L20-L21` → after: `L483-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L483-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/119.js#L483-L683) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/119.js#L20-L21)

```diff
-     function xQ() {
-       var QQ;
+     function Sk(kk) {
+       var ek = [],
+         ik = [],
+         Dk = null;
+ 
+       function Sk(ik, fk) {
+         var Sk = Dk[ik],
+           rk = Dk[fk];
+         Sk && rk && (function(kk, ek, ik, Dk) {
+           if (kk.ybk) return ek.ybk ? function(kk, ek) {
+             var ik = (kk[3] - kk[0]) / 2,
+               Dk = (ek[3] - ek[0]) / 2,
+               fk = kk[0] + ik - (ek[0] + Dk),
+               Sk = kk[2] + ik - (ek[2] + Dk),
+               bk = ik + Dk;
+             return fk * fk + Sk * Sk <= bk * bk
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L23-L70` → after: `L685-L39433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L685-L39433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/119.js#L685-L39433) · [Before (L23-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/119.js#L23-L70)

```diff
-         t: FQ
-       } = (0, HQ.y)(), {
-         pack: wQ
-       } = (0, LQ.y)(), {
-         userContext: xQ
-       } = (0, mQ.e)();
-       if (wQ) {
-         const QQ = qQ.e[wQ];
-         if (null === QQ || void 0 === QQ || !QQ.purchasable) return (0, YQ.jsx)(vQ.NavigatePreserveSearch, {
-           to: "/"
-         })
-       }
-       const AQ = wQ ? qQ.e[wQ] : null,
-         tQ = wQ ? oQ.l[(0, DQ.o)(wQ)] : null,
-         eQ = void 0 !== (null === AQ || void 0 === AQ ? void 0 : AQ.characterSet) || null !== AQ && void 0 !== AQ && AQ.singleItem ? AQ.displayName : `${null!==(QQ=null===AQ||void 0===AQ?void 0:AQ.displayName)&&void 0!==QQ?QQ:wQ} Pack`,
-         MQ = AQ ? `Your ${eQ} is Ready!` : "Welcome To Super Rank!",
- ... (32 more removed lines; see GitHub link above)
+         Iq: Dk
+       } = ek;
+       !Dk || void 0 !== Dk.aLightLevels && null !== Dk.aLightLevels && Dk.aLightLevels !== ik.Iq?.aLightLevels || (Dk.aLightLevels = (0, Sk.o)()), kk.yH.yek && ik.material && kk.yH.yek(ik.material)
+     }
+ 
+     function Mk(kk, ek) {
+       const ik = (0, Sk.k)(ek);
+       for (const Dk of ik) mk(kk, Dk);
+       return ik
+     }
+ 
+     function Kk(kk) {
+       return {
+         name: "mesh",
+         order: 100,
+         state: {
+ ... (38733 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/120.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/120.js#L4-L6)

```diff
-   6360: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => bQ
+   36160: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Hk,
+       e: () => Ck
```

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L8-L16` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/120.js#L9-L58) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/120.js#L8-L16)

```diff
-     var LQ = wQ(1348),
-       qQ = wQ(53),
-       oQ = wQ(106),
-       DQ = wQ(1515),
-       kQ = wQ(1243),
-       vQ = wQ(307),
-       mQ = wQ(634);
-     const uQ = new URL(kQ.q[vQ.c.PRODUCTION]).origin;
-     var HQ = wQ(1107);
+     ik(33737);
+     var Dk = ik(60),
+       fk = ik(1406),
+       Sk = ik(1893),
+       bk = ik(1922),
+       rk = ik(22),
+       Pk = ik(2414),
+       mk = ik(36164),
+       Mk = ik(36167),
+       Kk = ik(33723),
+       xk = ik(33735),
+       nk = ik(33750),
+       Uk = ik(1066);
+     const Hk = (0, Dk.memo)((function() {
+       var kk;
+       const {
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L19-L27` → after: `L61-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L61-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/120.js#L61-L452) · [Before (L19-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/120.js#L19-L27)

```diff
-       const QQ = (0, DQ.y)();
-       return (0, qQ.useEffect)((() => {
-         const FQ = oQ.currentUrl.getSearchParam("code");
-         oQ.currentUrl.removeSearchParam("code"), null === FQ && (console.error("No authorization code found in the URL"), window.close());
-         const wQ = {
-           type: `oauth_authentication_${QQ.providerName}`,
-           code: FQ
-         };
-         for (const QQ of (qQ = window.location.origin) === uQ ? [qQ, `https://${mQ.d}`] : [qQ]) {
+       return Sk.gameBridge.lookup("cameraZoom", null)
+     }
+     const lk = [{
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }],
+       pk = {
+         current: null
+       },
+       yk = {
+         current: null
+ ... (376 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L29` → after: `L454-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L454-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/120.js#L454-L464) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/120.js#L29)

```diff
-           null === (LQ = window.opener) || void 0 === LQ || LQ.postMessage(wQ, QQ)
+           sk.current = kk, null === (ek = Kk.current) || void 0 === ek || ek.querySelectorAll("[data-arm]").forEach((ek => {
+             Object.assign(ek.style, Ak(function(kk) {
+               return {
+                 x: Number(kk.dataset.x),
+                 y: Number(kk.dataset.y),
+                 arm: kk.dataset.arm
+               }
+             }(ek), kk, wk.current))
+           }))
+         }, () => {
+           Mk.current = null
```

#### 5. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L31-L39` → after: `L466-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L466-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/120.js#L466-L499) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/120.js#L31-L39)

```diff
-         var qQ;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, HQ.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, HQ.jsx)(LQ.c, {
-           showFace: !0,
-           loading: !0
+       }), [Mk]);
+       const dk = null !== mk && void 0 !== mk ? mk : sk.current;
+       return (0, xk.jsx)("div", {
+         ref: Kk,
+         className: fk()("CrosshairShapes", {
+           CrosshairInPreview: ik,
+           CrosshairInEditor: Dk || ik,
+           CrosshairSpreads: void 0 !== Mk
+         }),
+         children: (0, xk.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: pk.x,
+             top: pk.y,
+             opacity: ek.opacity / 100
+           },
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L43` → after: `L503-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L503-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/120.js#L503-L1103) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/120.js#L43)

```diff
-   }
+   },
+   33743: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Mk,
+       f: () => wk,
+       h: () => Hk
+     });
+     var Dk = ik(33727);
+     const fk = "XH1-",
+       Sk = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       bk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       rk = ["color", "outlineColor"],
+       Pk = 1 + 3 * rk.length + bk.length + 1,
+       mk = Math.ceil(8 * Pk / Math.log2(62)),
+       Mk = fk.length + mk;
+ 
+ ... (585 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/121.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/121.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a)

#### 1. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/121.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/121.js#L4-L6)

```diff
-   6362: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => zQ
+   6333: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Dk
```

#### 2. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L8-L427` → after: `L8-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L8-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/121.js#L8-L166) · [Before (L8-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/121.js#L8-L427)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1515),
-       oQ = wQ(1070),
-       DQ = wQ.n(oQ),
-       kQ = wQ(307),
-       vQ = wQ(6374),
-       mQ = wQ(1079),
-       uQ = wQ(1503),
-       HQ = wQ(4409),
-       bQ = wQ(1451),
-       YQ = wQ(3029),
-       xQ = wQ(4415),
-       AQ = wQ(1682),
-       tQ = wQ(4400),
-       eQ = wQ(1140),
-       MQ = wQ(17),
- ... (404 more removed lines; see GitHub link above)
+     const Dk = {
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+ ... (143 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/122.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/122.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260)

#### 1. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122];
+ export const ids = [122, 396];
```

#### 2. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L4-L6)

```diff
-   6377: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => kQ
+   35898: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => Ee
```

#### 3. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L8)

```diff
-     var LQ = wQ(1070),
+     var Dk = ik(302),
+       fk = ik(3456),
+       Sk = ik(3487),
+       bk = ik(3480),
+       rk = ik(3475),
+       Pk = ik(1172),
+       mk = ik(38),
+       Mk = ik(1688),
+       Kk = ik(1345),
+       xk = ik(1410),
+       nk = ik(1021),
```

#### 4. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L10-L11` → after: `L20-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L20-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L20-L40) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L10-L11)

```diff
-       oQ = wQ(1207),
-       DQ = wQ(1107);
+       Hk = ik(1648),
+       wk = ik(60),
+       lk = ik(75),
+       pk = ik(2351),
+       yk = ik(1311),
+       Yk = ik(1587),
+       Lk = ik(1095),
+       Ck = ik(3383),
+       Ak = ik(4496),
+       jk = ik(3442),
+       sk = ik(1858),
+       dk = ik(3454),
+       Vk = ik(1702),
+       Fk = ik(1459),
+       uk = ik(2130),
+       qk = ik(1327),
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L15-L16` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L45) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L15-L16)

```diff
-         item: FQ,
-         className: wQ
+         eventName: ik
```

#### 6. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L20-L24` → after: `L49-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L49-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L49-L243) · [Before (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L20-L24)

```diff
-       } = (0, oQ.y)();
-       return null === FQ.renderId || FQ.previewsOutdated ? (0, DQ.jsx)("div", {
-         className: qQ()("ShaderPackPreviewsNotice", wQ),
-         children: (0, DQ.jsx)("span", {
-           children: LQ(null === FQ.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
+       } = (0, Pk.D)(), fk = Vk.e[ik], [Sk, bk] = (0, wk.useState)((() => Date.now() >= fk.endsAt.getTime())), [rk, mk] = (0, wk.useState)("overall"), Mk = function(kk, ek) {
+         const {
+           userContext: ik,
+           isUserContextUpdating: Dk
+         } = (0, Lk.d)(), fk = `${kk}:${ek}`, [Sk, bk] = (0, wk.useState)({
+           requestKey: fk,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, wk.useEffect)((() => {
+           if (Dk) return;
+           let Sk, rk = !1;
+           const Pk = async () => {
+             if ("visible" === document.visibilityState) try {
+               const Dk = await Fk.b.getGameEventLeaderboard(ik, {
+ ... (179 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L26` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L245) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L26)

```diff
-       }) : null
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L42-L44` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L250-L251) · [Before (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L42-L44)

```diff
-         selected: FQ,
-         onSelect: wQ,
-         imageUrl: LQ
+         event: ek,
+         progress: ik
```

#### 9. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L48-L139` → after: `L255-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L255-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L255-L289) · [Before (L48-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L48-L139)

```diff
-       } = (0, DQ.y)();
-       return (0, vQ.jsx)("div", {
-         className: "ShaderPackViewPicker",
-         children: oQ.E.map((QQ => {
-           const oQ = LQ(QQ);
-           return (0, vQ.jsxs)("button", {
-             type: "button",
-             "aria-pressed": QQ === FQ,
-             className: qQ()("ShaderPackViewOption", {
-               Selected: QQ === FQ
-             }),
-             onClick: () => {
-               wQ(QQ)
-             },
-             children: [null !== oQ && (0, vQ.jsx)("img", {
-               src: oQ,
- ... (76 more removed lines; see GitHub link above)
+       } = (0, Pk.D)(), fk = null !== ik && ek.prizeGoals.some(((kk, ek) => ik[ek] >= kk.target));
+       return (0, Qk.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, Qk.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: Dk(fk ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, Qk.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: ek.prizeGoals.map(((kk, ek) => {
+             const fk = null === ik ? null : Math.min(ik[ek], kk.target);
+             return (0, Qk.jsxs)(wk.Fragment, {
+               children: [ek > 0 && (0, Qk.jsx)("div", {
+                 className: "GameEventPanelGoalsOr",
+                 children: Dk("gameEvents:goalsOr")
+               }), (0, Qk.jsxs)("div", {
+                 className: Uk()("GameEventPanelGoal", {
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L141-L142` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L291-L292) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L141-L142)

```diff
-         }
-       }
+         })]
+       })
```

#### 11. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L144-L177` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L294-L298) · [Before (L144-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L144-L177)

```diff
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
-       bb: () => kQ,
-       d: () => MQ,
- ... (18 more removed lines; see GitHub link above)
+     var Wk = ik(1519),
+       tk = ik(1569),
+       Xk = ik(1012),
+       Bk = ik(714),
+       ck = ik(3433);
```

#### 12. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L180` → after: `L301-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L301-L394) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L180)

```diff
-       return `${DQ}/${encodeURIComponent(QQ)}`
+       let {
+         gameNameWithVariation: ek
+       } = kk;
+       const ik = (0, Wk.E)(ek),
+         [Dk, fk] = (0, wk.useState)(null);
+       if ((0, wk.useEffect)((() => {
+           if (!ik) return;
+           let kk = !0;
+           return (0, tk.g)(ik).then((ek => {
+             kk && fk(ek)
+           })).catch((kk => {
+             console.error(`Failed to load the page copy for ${ik.name}`, kk)
+           })), () => {
+             kk = !1
+           }
+         }), [ik]), !ik || !Dk || Dk.name !== ik.name) return null;
+ ... (78 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L182` → after: `L396-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L396-L418) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L182)

```diff
-     let mQ = null;
+     var Zk = ik(1033),
+       Ok = ik(99),
+       gk = ik(1104),
+       Gk = ik(33809),
+       Nk = ik(1628),
+       Rk = ik(1496),
+       Jk = ik(1479),
+       ke = ik(1579),
+       ee = ik(1417),
+       ie = ik(1333),
+       De = ik(35902),
+       fe = ik(1216),
+       Se = ik(996),
+       be = ik(314),
+       re = ik(1005),
+       Pe = ik(1512),
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L185-L193` → after: `L421-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L421-L442) · [Before (L185-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L185-L193)

```diff
-       mQ = QQ
-     }
- 
-     function HQ() {
-       return mQ
-     }
- 
-     function bQ() {
-       mQ = null
+       let {
+         preview: ek,
+         isBroken: ik
+       } = kk;
+       const Dk = null === ek ? null : (0, Sk.g)(ek, "small"),
+         bk = (0, fk.d)(null !== Dk && void 0 !== Dk ? Dk : Sk.r);
+       return null === ek ? (0, Qk.jsx)("div", {
+         className: Uk()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: ik
+         }),
+         children: (0, Qk.jsx)(Zk.d, {
+           name: ik ? "triangle-exclamation" : "star"
+         })
+       }) : (0, Qk.jsx)("div", {
+         className: Uk()("FeaturedGamesPopupSlotThumbnail", rk.k),
+         style: (0, rk.g)(bk),
+ ... (6 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L197-L205` → after: `L446-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L446-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L446-L469) · [Before (L197-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L197-L205)

```diff
-       return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
-     }
-     const xQ = ["terrain", "water", "models", "sunShadows", "strict"],
-       AQ = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
-         strict: "shaderPackListing:filterAllGames"
+       let {
+         schematicId: ek,
+         gameName: ik
+       } = kk;
+       const {
+         userContext: fk
+       } = (0, Lk.d)(), Sk = (0, He.e)(), [bk, rk] = (0, wk.useState)(null), [Pk, mk] = (0, wk.useState)(null), [Mk, Kk] = (0, wk.useState)(!1), nk = (0, wk.useCallback)((() => {
+         mk(null), Fk.b.getFeaturedGames(fk).then((kk => {
+           Sk.current && rk(kk.slots)
+         })).catch((kk => {
+           console.error("Failed to get featured games", kk), Sk.current && mk("Failed to load featured games")
+         }))
+       }), [fk, Sk]);
+       (0, wk.useEffect)((() => {
+         nk()
+       }), [nk]);
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L207-L213` → after: `L471-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L471-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L471-L551) · [Before (L207-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L207-L213)

```diff
- 
-     function tQ(QQ, FQ) {
-       return QQ.withFeatures.includes(FQ) ? "with" : QQ.withoutFeatures.includes(FQ) ? "without" : null
-     }
- 
-     function eQ(QQ) {
-       return null === QQ ? "with" : "with" === QQ ? "without" : null
+       return (0, Qk.jsxs)("div", {
+         className: "FeaturedGamesPopupBody",
+         children: [(0, Qk.jsx)("h1", {
+           className: "FeaturedGamesPopupTitle",
+           children: "Featured Games"
+         }), !bk && !Pk && (0, Qk.jsx)("div", {
+           className: "FeaturedGamesPopupLoader",
+           children: (0, Qk.jsx)(qk.d, {})
+         }), Pk && (0, Qk.jsx)("div", {
+           className: "FeaturedGamesPopupError",
+           children: Pk
+         }), bk && (0, Qk.jsxs)(Qk.Fragment, {
+           children: [(0, Qk.jsx)("div", {
+             className: "FeaturedGamesPopupSlots",
+             children: bk.map((kk => {
+               const ik = kk.schematicId === ek,
+ ... (65 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L217` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L560-L582) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L217)

```diff
-       return "with" === QQ ? "only" : null === QQ ? "include" : void 0
+       let {
+         customLobbies: ek,
+         favouriteLobbies: ik,
+         toggleLikeLobby: Dk,
+         showReport: fk
+       } = kk;
+       const [Sk, bk] = (0, wk.useState)(Le);
+       return (0, wk.useEffect)((() => {
+         if (Sk >= ek.length) return;
+         let kk = !0;
+         return (0, Ye.f)().then((() => {
+           kk && bk(Sk + Ce)
+         })), () => {
+           kk = !1
+         }
+       }), [Sk, ek.length]), (0, Qk.jsx)(Qk.Fragment, {
+ ... (7 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L221-L222` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L613) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L221-L222)

```diff
-       const wQ = tQ(QQ, FQ),
-         LQ = QQ => QQ.filter((QQ => QQ !== FQ));
+       const ik = xe.h[kk.schematicId];
```

#### 19. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L224-L225` → after: `L615-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L615-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L615-L629) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L224-L225)

```diff
-         withFeatures: null === wQ ? [...QQ.withFeatures, FQ] : LQ(QQ.withFeatures),
-         withoutFeatures: "with" === wQ ? [...QQ.withoutFeatures, FQ] : LQ(QQ.withoutFeatures)
+         listedVariations: [],
+         backgroundImage: (0, Sk.g)(kk, "large"),
+         badges: [],
+         category: kk.gameCategory,
+         title: void 0 !== (null === ik || void 0 === ik ? void 0 : ik.title) ? ek(ik.title) : kk.name,
+         variationTitle: null,
+         description: void 0 !== (null === ik || void 0 === ik ? void 0 : ik.description) ? ek(ik.description) : kk.description,
+         ownerSocialPreviewWithoutLocation: "owner" in kk ? kk.owner : null,
+         ccu: kk.ccu,
+         favourites: kk.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in kk ? kk.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+         canCreateCustomLobbies: !0,
+         countdownInformation: null
```

#### 20. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L238-L249` → after: `L635-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L635-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L635-L641) · [Before (L238-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L238-L249)

```diff
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
-       }
+       return null !== (ek = null !== (ik = (0, ue.m)() ? function(kk) {
+         for (const [ek, ik] of Object.entries(qe)) {
+           const Dk = [ek, ...ik.map((kk => (0, be.Bb)(ek, kk)))];
+           if (Dk.includes(kk)) return Dk
+         }
+         return null
+       }(kk) : null) && void 0 !== ik ? ik : null === (Dk = xe.d[kk]) || void 0 === Dk ? void 0 : Dk.listedVariations) && void 0 !== ek ? ek : null
```

#### 21. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L252-L255` → after: `L644-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L644-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L644-L652) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L252-L255)

```diff
-     function sQ(QQ, FQ) {
-       var wQ;
-       const LQ = NQ(FQ);
-       (0, oQ.g)(QQ, pQ, "explore" === FQ.section ? null : FQ.section), (0, oQ.g)(QQ, cQ, FQ.sort === WQ ? null : FQ.sort), (0, oQ.g)(QQ, CQ, LQ === RQ ? null : LQ), (0, oQ.g)(QQ, SQ, FQ.searchQuery), (0, oQ.g)(QQ, iQ, null !== (wQ = MQ(FQ.banned)) && void 0 !== wQ ? wQ : null), ( … [truncated]
+     function Ee() {
+       const {
+         gameNameWithVariation: kk
+       } = (0, Rk.y)();
+       if ((0, wk.useEffect)(Ve.q, []), kk && (0, fe.k)(kk)) return (0, Qk.jsx)(he, {
+         urlId: kk
+       }, kk);
+       const ek = kk && (0, Se.j)(kk) ? kk : "firstParty";
+       return (0, Qk.jsx)(ae, {}, ek)
```

#### 22. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L259-L268` → after: `L656-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L656-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L656-L689) · [Before (L259-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L259-L268)

```diff
-       const FQ = new URLSearchParams;
-       return sQ(FQ, {
-         section: "explore",
-         sort: WQ,
-         withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${DQ}?${FQ.toString()}`
+       let {
+         urlId: ek
+       } = kk;
+       const {
+         userContext: ik,
+         isUserContextUpdating: Dk
+       } = (0, Lk.d)(), fk = (0, wk.useMemo)((() => (0, Nk.k)(ek)), [ek]);
+       (0, wk.useMemo)((() => {
+         if (null === fk) return;
+         const kk = gk.userContextManager.peekCurrentUserContext();
+         (null !== kk ? Fk.b.getGame(kk, fk.schematicId) : gk.userContextManager.getCurrentUserContext().then((kk => Fk.b.getGame(kk, fk.schematicId)))).catch((kk => {
+           console.error(`Failed to get the custom game ${fk.schematicId}`, kk), (0, Nk.i)(ek)
+         }))
+       }), [fk, ek]);
+       const [Sk, bk] = (0, wk.useState)(null), rk = (0, Gk.b)();
+       (0, wk.useEffect)((() => {
+ ... (18 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L272-L273` → after: `L693-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L693-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L693-L860) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L272-L273)

```diff
-       return NQ(QQ) === RQ
-     }
+       var ek, ik, bk, nk, Vk, uk, qk, zk;
+       let {
+         gameNameWithVariation: vk,
+         knownCustomGame: Ek = null
+       } = kk;
+       const {
+         t: ak
+       } = (0, Pk.D)();
+       (0, Ke.g)();
+       const tk = (0, Ke.m)(),
+         {
+           userContext: Xk,
+           isUserContextUpdating: Bk
+         } = (0, Lk.d)(),
+         ck = (0, de.e)(),
+         gk = (0, Jk.useNavigatePreserveSearch)(),
+ ... (152 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L275-L276` → after: `L862-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L862-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L862-L1269) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L275-L276)

```diff
-     function UQ(QQ) {
-       return null !== QQ.searchQuery || "with" === QQ.banned || NQ(QQ) !== RQ
+       function Ki(kk) {
+         (0, Fe.d)(), gk((0, yk.d)(fe.gameNameWithVariation, kk))
+       }(0, wk.useEffect)((() => {
+         Mi && (0, Jk.navigateToHomePage)()
+       }), [Mi]), (0, wk.useEffect)((() => {
+         if (!1 === te.canCreateCustomLobbies) return;
+         let kk = !0;
+         return null !== te.showWorldsInsteadOfCustomLobbies && !1 === Bk && (Ze(!0), Fk.b.getFavouriteLobbies(Xk).then((kk => {
+           Ne(kk)
+         })), Fk.b.getOpenCustomLobbies(Xk, {
+           gameNameWithVariation: te.showWorldsInsteadOfCustomLobbies ? "classic" : fe.gameNameWithVariation,
+           onlyOwnedLobbies: "owned" === Re,
+           onlyFavouriteLobbies: "favourite" === Re
+         }).then((ek => {
+           kk && (0, lk.unstable_batchedUpdates)((() => {
+             ge(ek), Ze(!1)
+ ... (392 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L280-L283` → after: `L1273-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1273-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1273-L1301) · [Before (L280-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L280-L283)

```diff
-       return xQ.flatMap((FQ => {
-         const wQ = tQ(QQ, FQ);
-         return "with" === wQ ? [FQ] : "without" === wQ ? [`-${FQ}`] : []
-       })).join(",")
+       let {
+         variation: ek,
+         isSelected: ik,
+         children: Dk
+       } = kk;
+       const Pk = xe.d[ek],
+         Mk = (0, Sk.l)(ek, (0, Sk.p)(Pk)),
+         Kk = (0, fk.d)(Mk),
+         xk = (0, bk.g)([(0, Sk.j)(ek, (0, Sk.e)(Pk))]);
+       return (0, Qk.jsxs)(Jk.LinkPreserveSearch, {
+         to: (0, Wk.y)(ek),
+         replace: !0,
+         className: Uk()("GameInformationVariation", rk.k, {
+           SelectedGameInformationVariation: ik
+         }),
+         onClick: kk => {
+ ... (13 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L285-L296` → after: `L1303-L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1303-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1303-L1318) · [Before (L285-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L285-L296)

```diff
-     const TQ = {
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       KQ = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
-       };
+   },
+   6357: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => lk
+     });
+     var Dk = ik(60),
+       fk = ik(1410),
+       Sk = ik(1459),
+       bk = ik(3447),
+       rk = ik(1095),
+       Pk = ik(1327),
+       mk = ik(1345),
+       Mk = ik(1033),
+       Kk = ik(1021),
+       xk = ik.n(Kk),
+       nk = ik(1066);
```

#### 27. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L299-L310` → after: `L1321-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1321-L1323) · [Before (L299-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L299-L310)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / QQ))
-     }
- 
-     function lQ(QQ, FQ, wQ, qQ) {
-       const oQ = [];
-       QQ.isBanned && oQ.push({
-         tone: "warning",
-         text: qQ("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: DQ
+       let {
+         info: ek,
+         className: ik
```

#### 28. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L312-L337` → after: `L1325-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1325-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1325-L1352) · [Before (L312-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L312-L337)

```diff
-       if (null === QQ.brokenError || DQ && !DQ.error || oQ.push({
-           tone: "warning",
-           text: qQ("shaderPackListing:ownerBroken"),
-           detail: QQ.brokenError
-         }), null !== DQ && void 0 !== DQ && DQ.error) oQ.push({
-         tone: "warning",
-         text: qQ(FQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
-         detail: (0, LQ.l)(DQ.error) ? null : DQ.error
-       });
-       else if (DQ) {
-         const QQ = null === DQ.renderNotBefore ? 0 : DQ.renderNotBefore - wQ,
-           LQ = String(Math.ceil(QQ / 6e4)),
-           kQ = qQ(FQ ? QQ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : QQ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
-             minutes: LQ
-           });
-         oQ.push({
- ... (10 more removed lines; see GitHub link above)
+       return (0, nk.jsxs)("div", {
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
+ ... (12 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L341` → after: `L1358-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1358-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1358-L1365) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L341)

```diff
-       return Math.max(1, Math.round(QQ / 1024))
+       wk.NotificationProvider.showCustomPopup({
+         body: () => (0, nk.jsx)(pk, {
+           ...kk
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 30. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L344-L345` → after: `L1368-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1368-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1368-L1458) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L344-L345)

```diff
-     function aQ(QQ, FQ, wQ) {
-       return QQ instanceof qQ.d && QQ.errorMessageForUser ? QQ.errorMessageForUser : FQ(wQ)
+     function pk(kk) {
+       let {
+         schematicId: ek,
+         canOverride: ik,
+         onApprovalChanged: Kk
+       } = kk;
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
+ ... (75 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L348` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1461) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L348)

```diff
-   6386: (QQ, FQ, wQ) => {
+   33809: (kk, ek, ik) => {
```

#### 32. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L352-L353` → after: `L1465-L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1465-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1465-L1466) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L352-L353)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(27);
+     var Dk = ik(60),
+       fk = ik(3521);
```

#### 33. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L355-L360` → after: `L1468-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1468-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1468-L1477) · [Before (L355-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L355-L360)

```diff
-     function oQ(QQ, FQ) {
-       var wQ;
-       const [oQ, DQ] = (0, LQ.useState)(null !== (wQ = qQ.i.getItem(QQ)) && void 0 !== wQ ? wQ : FQ);
-       return [oQ, FQ => {
-         qQ.i.setItem(QQ, FQ), DQ(FQ)
-       }]
+     function Sk() {
+       const [kk, ek] = (0, Dk.useState)(!1);
+       return (0, Dk.useLayoutEffect)((() => {
+         let kk = !0;
+         return (0, fk.f)().then((() => {
+           kk && ek(!0)
+         })), () => {
+           kk = !1
+         }
+       }), []), kk
```

#### 34. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L363` → after: `L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1480) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L363)

```diff
-   6374: (QQ, FQ, wQ) => {
+   8732: (kk, ek, ik) => {
```

#### 35. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L365-L381` → after: `L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1482) · [Before (L365-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L365-L381)

```diff
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
-       t: () => qQ,
-       u: () => pQ,
-       x: () => oQ,
- ... (1 more removed lines; see GitHub link above)
+       d: () => bk
```

#### 36. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L383-L416` → after: `L1484-L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1484-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1484-L1486) · [Before (L383-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L383-L416)

```diff
-     const LQ = ["forest", "desert", "water", "night", "cave"];
-     const qQ = {
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
-       oQ = ["popular", "updated", "newest"],
- ... (18 more removed lines; see GitHub link above)
+     var Dk = ik(1311),
+       fk = ik(1207),
+       Sk = ik(594);
```

#### 37. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L419-L424` → after: `L1489-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1489-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1489-L1510) · [Before (L419-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L419-L424)

```diff
-       var FQ;
-       return QQ === tQ || null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(eQ)) && void 0 !== FQ && FQ
-     }
- 
-     function GQ(QQ, FQ) {
-       return `shaderPacks/${QQ}/${FQ}.json`
+       return kk = function(kk, ek) {
+         var ik;
+         const Dk = new URLSearchParams(ek),
+           fk = Dk.get("lobby"),
+           Sk = Dk.get("vm"),
+           bk = null !== (ik = fk) && void 0 !== ik ? ik : kk.lobbyName,
+           rk = null !== Sk && void 0 !== Sk ? Sk : kk.directJoinVmUrl;
+         if (bk === kk.lobbyName && rk === kk.directJoinVmUrl) return kk;
+         return {
+           ...kk,
+           lobbyName: bk,
+           directJoinVmUrl: rk
+         }
+       }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
+         if ((0, Sk.F)(kk.directJoinVmUrl)) return kk;
+         const ek = (0, fk.ab)(kk.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L427-L428` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1520-L1521) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L427-L428)

```diff
-     function pQ(QQ, FQ, wQ, LQ) {
-       return null === FQ.renderId ? cQ(QQ, FQ.baselineVersion, wQ, LQ) : `${QQ}/${function(QQ,FQ,wQ,LQ){return`shaderPacks/${QQ}/${FQ}/${wQ}-${LQ}.webp`}(FQ.packId,FQ.renderId,wQ,LQ)}`
+     function fk() {
+       Dk = !0
```

#### 39. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L431-L432` → after: `L1524-L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L1524-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/122.js#L1524-L1525) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/122.js#L431-L432)

```diff
-     function cQ(QQ, FQ, wQ, LQ) {
-       return `${QQ}/${function(QQ,FQ,wQ){return`shaderPacks/baseline/${QQ}/${FQ}-${wQ}.webp`}(FQ,wQ,LQ)}`
+     function Sk() {
+       return Dk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/123.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/123.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496)

#### 1. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L4)

```diff
-   40482: (QQ, FQ, wQ) => {
+   6364: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L6)

```diff
-       ShaderPackCategory: () => UQ
+       default: () => Hk
```

#### 3. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L25` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L8-L17) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L8-L25)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1515),
-       oQ = wQ(1451),
-       DQ = wQ(1503),
-       kQ = wQ(1207),
-       vQ = wQ(96),
-       mQ = wQ(17),
-       uQ = wQ(1641),
-       HQ = wQ(6438),
-       bQ = wQ(282),
-       YQ = wQ(6481),
-       xQ = wQ(6476),
-       AQ = wQ(6485),
-       tQ = wQ(6371),
-       eQ = wQ(4837),
-       MQ = wQ(6427),
- ... (2 more removed lines; see GitHub link above)
+     var Dk = ik(1172),
+       fk = ik(131),
+       Sk = ik(224),
+       bk = ik(1410),
+       rk = ik(1291),
+       Pk = ik(22),
+       mk = ik(1659),
+       Mk = ik(3361),
+       Kk = ik(3089),
+       xk = ik(1066);
```

#### 4. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L27-L105` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L19) · [Before (L27-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L27-L105)

```diff
-     function cQ(QQ, FQ) {
-       const wQ = (0, YQ.storedPackOutcome)(QQ, FQ);
-       return "none" !== wQ.kind || "noCompiler" === wQ.reason
-     }
-     var CQ = wQ(1070),
-       SQ = wQ.n(CQ),
-       iQ = wQ(6429),
-       WQ = wQ(1079),
-       RQ = wQ(6422),
-       OQ = wQ(1107);
-     const sQ = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
- ... (63 more removed lines; see GitHub link above)
+     function nk() {
```

#### 5. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L108-L150` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L22-L24) · [Before (L108-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L108-L150)

```diff
-       } = (0, kQ.y)(), [qQ, DQ] = (0, LQ.useState)(null), [mQ, uQ] = (0, LQ.useState)(null), [pQ, CQ] = (0, LQ.useState)(null), [SQ] = (0, LQ.useState)(bQ.g), [iQ, WQ] = (0, LQ.useState)(!0), [RQ, sQ] = (0, LQ.useState)(!1), {
-         loading: rQ,
-         error: UQ,
-         setError: TQ,
-         onFiles: KQ
-       } = (0, GQ.g)((async QQ => {
-         const FQ = await (0, HQ.loadPageShaderPackCompiler)();
-         if (!FQ) return void TQ(wQ("shaderPack:compilerUnavailable"));
-         uQ(FQ);
-         const LQ = (0, YQ.toStoredShaderPack)(QQ, await (0, xQ.f)(FQ, QQ.files));
-         await (0, YQ.saveShaderPack)(LQ, FQ) ? (DQ(LQ), zQ(qQ, LQ, FQ)) : TQ(wQ("shaderPack:saveFailed"))
-       }));
- 
-       function zQ(QQ, wQ, LQ) {
-         (function(QQ, FQ, wQ, LQ) {
-           return wQ || cQ(QQ, LQ) || cQ(FQ, LQ)
- ... (27 more removed lines; see GitHub link above)
+       } = (0, Dk.D)(), ek = !(0, Sk.shouldUseUkPrivacyPolicy)();
+       return (0, xk.jsxs)("div", {
+         className: "LegalText",
```

#### 6. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L152-L159` → after: `L26-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L26-L30) · [Before (L152-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L152-L159)

```diff
-           className: "ShaderPackIntro",
-           children: wQ("shaderPack:intro")
-         }), (0, OQ.jsx)(NQ, {
-           to: tQ.W,
-           className: "ShaderPackBrowseLink",
-           children: (0, OQ.jsx)(oQ.m, {
-             className: "ShaderPackBrowseButton",
-             children: wQ("shaderPackListing:browse")
+           className: "BloxdInformationHeader FullyFancyText",
+           children: kk("homePage:privacyPolicy")
+         }), (0, xk.jsx)("p", {
+           children: (0, xk.jsxs)("em", {
+             children: ["Last updated: ", Mk.h.toLocaleDateString()]
```

#### 7. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L161-L178` → after: `L32-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L32-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L32-L573) · [Before (L161-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L161-L178)

```diff
-         }), !1 === pQ && (0, OQ.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: wQ(SQ ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== UQ && (0, OQ.jsxs)("div", {
-           className: "ShaderPackCategoryError",
-           children: [wQ("general:error"), ": ", UQ]
-         }), qQ && (0, OQ.jsxs)("div", {
-           className: "SettingBox ShaderPackSummary",
-           children: [(0, OQ.jsxs)("div", {
-             className: "ShaderPackSummaryHeader",
-             children: [(0, OQ.jsxs)("div", {
-               children: [(0, OQ.jsx)("div", {
-                 className: "ShaderPackName",
-                 children: qQ.manifest.name
-               }), qQ.manifest.author && (0, OQ.jsx)("div", {
-                 className: "ShaderPackAuthor",
- ... (2 more removed lines; see GitHub link above)
+         }), (0, xk.jsx)("p", {
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, xk.jsx)("h2", {
+           children: "1. Who We Are"
+         }), (0, xk.jsx)("p", {
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
+         }), (0, xk.jsx)("p", {
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+         }), (0, xk.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, xk.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, xk.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, xk.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+ ... (526 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L180-L188` → after: `L575-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L575-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L575-L590) · [Before (L180-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L180-L188)

```diff
-               }), qQ.manifest.description && (0, OQ.jsx)("div", {
-                 className: "ShaderPackDescription",
-                 children: qQ.manifest.description
-               }), qQ.listing && (0, OQ.jsx)("div", {
-                 className: "ShaderPackAuthor",
-                 children: (0, OQ.jsx)(NQ, {
-                   to: (0, tQ.Z)(qQ.listing.packId),
-                   className: "ShaderPackListingLink",
-                   children: wQ("shaderPackListing:openPackPage")
+               })
+             }), (0, xk.jsx)("td", {
+               children: (0, xk.jsxs)("p", {
+                 children: ["Advertiser data, ad performance data", ek ? ", personalized with your consent" : ""]
+               })
+             }), (0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: "Manages and optimizes the display of advertisements on our website."
+               })
+             })]
+           }), (0, xk.jsxs)("tr", {
+             children: [(0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: (0, xk.jsx)("a", {
+                   href: "https://nitropay.com/privacy",
+                   children: "Nitro (NitroPay)"
```

#### 9. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L190-L204` → after: `L592-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L592-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L592-L618) · [Before (L190-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L190-L204)

```diff
-               })]
-             }), (0, OQ.jsx)(oQ.G, {
-               disabled: iQ || rQ,
-               onClick: async function() {
-                 WQ(!0), TQ(null), await (0, YQ.removeShaderPack)(), DQ(null), WQ(!1), zQ(qQ, null, mQ)
-               },
-               children: wQ("shaderPack:removePack")
-             })]
-           }), (0, OQ.jsx)(IQ, {
-             stored: qQ,
-             checking: RQ,
-             webGpuUsable: pQ,
-             changePending: (0, YQ.isShaderPackChangePending)(),
-             compiler: mQ,
-             t: wQ
+               })
+             }), (0, xk.jsx)("td", {
+               children: (0, xk.jsxs)("p", {
+                 children: ["Advertiser data, ad performance data", ek ? ", personalized with your consent" : ""]
+               })
+             }), (0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: "Manages and delivers in-game advertisements on our website, and manages advertising consent and opt-out choices."
+               })
+             })]
+           }), (0, xk.jsxs)("tr", {
+             children: [(0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: (0, xk.jsx)("a", {
+                   href: "https://policies.google.com/privacy",
+                   children: "Google AdMob"
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L206-L209` → after: `L620-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L620-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L620-L1057) · [Before (L206-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L206-L209)

```diff
-         }), (0, OQ.jsx)(GQ.c, {
-           busy: iQ || rQ || RQ,
-           disabled: iQ || rQ || RQ || !0 !== pQ,
-           onFiles: KQ
+         }), (0, xk.jsx)("h4", {
+           children: "Analytics"
+         }), (0, xk.jsxs)("table", {
+           children: [(0, xk.jsxs)("tr", {
+             children: [(0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, xk.jsx)("td", {
+               children: (0, xk.jsx)("p", {
+                 children: "What They Do"
+               })
+ ... (422 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L214-L219` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L1062) · [Before (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L214-L219)

```diff
-     function NQ(QQ) {
-       let {
-         to: FQ,
-         className: wQ,
-         children: LQ
-       } = QQ;
+     function Uk() {
```

#### 12. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L221-L229` → after: `L1064-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1064-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L1064-L1068) · [Before (L221-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L221-L229)

```diff
-         gameState: oQ
-       } = (0, mQ.l)(["gameState"]), {
-         pathname: kQ,
-         search: vQ
-       } = (0, qQ.r)(), HQ = "landingPage" !== oQ && "studio" !== oQ;
-       return (0, OQ.jsx)(DQ.LinkPreserveSearch, {
-         to: FQ,
-         className: wQ,
-         target: HQ ? "_blank" : void 0,
+         adMobPrivacyOptionsRequired: kk
+       } = (0, Pk.n)(["adMobPrivacyOptionsRequired"]);
+       if (!kk) return null;
+       return (0, xk.jsx)(bk.f, {
+         className: "PrivacyChoicesButton",
```

#### 13. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L231` → after: `L1070-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1070-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L1070-L1076) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L231)

```diff
-           HQ || ((0, tQ.H)(`${kQ}${vQ}`), (0, uQ.f)())
+           (async () => {
+             try {
+               await mk.b.request("ads.showPrivacyOptions", {})
+             } catch (kk) {
+               console.error("Failed to open AdMob privacy options:", kk)
+             }
+           })()
```

#### 14. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L233` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L1078) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L233)

```diff
-         children: LQ
+         children: "Manage Privacy Choices"
```

#### 15. `bundles/bloxd.io/chunks/js/123.js` (Changed code · before: `L281-L509` → after: `L1083-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ad0bb4e655a74d749b136b4b7513ae19696c784d907763721a977c49a21a3496) · [After (L1083-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/123.js#L1083-L1095) · [Before (L281-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/123.js#L281-L509)

```diff
-       return mQ
-     }
- 
-     function bQ() {
-       mQ = null
-     }
- 
-     function YQ(QQ) {
-       return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
-     }
-     const xQ = ["terrain", "water", "models", "sunShadows", "strict"],
-       AQ = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
- ... (213 more removed lines; see GitHub link above)
+       return (0, xk.jsxs)(xk.Fragment, {
+         children: [(0, fk.e)() && (0, xk.jsx)(xk.Fragment, {
+           children: (0, xk.jsx)(bk.f, {
+             className: "PrivacyChoicesButton",
+             onClick: () => {
+               (0, rk.r)()
+             },
+             children: "Adjust Discord Privacy Choices"
+           })
+         }), (0, xk.jsx)(Uk, {}), (0, xk.jsx)(Kk.e, {
+           className: "PrivacyPolicyLinks"
+         }), (0, xk.jsx)(nk, {})]
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/124.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/124.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c)

#### 1. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/124.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/124.js#L2)

```diff
- export const ids = [124, 127, 128, 131];
+ export const ids = [124];
```

#### 2. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/124.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/124.js#L4-L8)

```diff
-   6429: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ.h,
-       i: () => qQ,
-       m: () => LQ.m
+   6370: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L10-L255` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/124.js#L8-L9) · [Before (L10-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/124.js#L10-L255)

```diff
-     var LQ = wQ(6414);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
-       strict: QQ,
-       program: FQ
-     })))))
-   },
-   39921: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => HQ,
-       installListedShaderPack: () => uQ
-     });
-     var LQ = wQ(6374),
-       qQ = wQ(6414),
-       oQ = wQ(1213),
-       DQ = wQ(6438),
-       kQ = wQ(6429),
- ... (230 more removed lines; see GitHub link above)
+     var Dk = ik(1172),
+       fk = ik(1066);
```

#### 4. `bundles/bloxd.io/chunks/js/124.js` (Changed code · before: `L258-L679` → after: `L12-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a43a3d6166eb7a0559ea92ed8852b97546ac366a1709c764d07b598a474f462c) · [After (L12-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/124.js#L12-L221) · [Before (L258-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/124.js#L258-L679)

```diff
-       return xQ(MQ)
-     }
- 
-     function pQ(QQ, FQ) {
-       return "active" === cQ(QQ, FQ).kind
-     }
- 
-     function cQ(QQ, FQ) {
-       var wQ;
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) || QQ.validation.fromRecheck ? null === FQ ? {
- ... (406 more removed lines; see GitHub link above)
+       const {
+         t: kk
+       } = (0, Dk.D)();
+       return (0, fk.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, fk.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: kk("homePage:termsOfService")
+         }), (0, fk.jsx)("p", {
+           children: (0, fk.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, fk.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, fk.jsx)("h3", {
+           children: "1. General Information"
+ ... (194 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/125.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/125.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c)

#### 1. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L4)

```diff
-   6406: (QQ, FQ, wQ) => {
+   6372: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L6)

```diff
-       ShaderPackPublishForm: () => GQ
+       default: () => Uk
```

#### 3. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L23` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L8-L18) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L8-L23)

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
+     var Dk = ik(1496),
+       fk = ik(1530),
+       Sk = ik(2946),
+       bk = ik(2246),
+       rk = ik(1410),
+       Pk = ik(1479),
+       mk = ik(1095),
+       Mk = ik(1030),
+       Kk = ik(1172),
+       xk = ik(1033),
+       nk = ik(1066);
```

#### 4. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L25-L30` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L20-L21) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L25-L30)

```diff
-     function GQ(QQ) {
-       var FQ, wQ, HQ;
-       let {
-         existing: GQ,
-         onPublished: cQ
-       } = QQ;
+     function Uk() {
+       var kk;
```

#### 5. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L34-L58` → after: `L27-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L27-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L27-L41) · [Before (L34-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L34-L58)

```diff
-         userContext: iQ,
-         isUserContextUpdating: WQ
-       } = (0, uQ.e)(), [RQ, OQ] = (0, LQ.useState)(null), [sQ, rQ] = (0, LQ.useState)(0), [IQ, UQ] = (0, LQ.useState)(null !== (FQ = null === GQ || void 0 === GQ ? void 0 : GQ.name) && void 0 !== FQ ? FQ : ""), NQ = (0, LQ.useRef)(IQ), TQ = (0, LQ.useRef)(""), KQ = QQ => {
-         NQ.current = QQ, UQ(QQ)
-       }, [zQ, lQ] = (0, LQ.useState)(null !== (wQ = null === GQ || void 0 === GQ ? void 0 : GQ.description) && void 0 !== wQ ? wQ : ""), jQ = (0, LQ.useRef)(zQ), aQ = (0, LQ.useRef)(""), XQ = QQ => {
-         jQ.current = QQ, lQ(QQ)
-       }, [fQ, VQ] = (0, LQ.useState)(!1), {
-         loading: hQ,
-         error: JQ,
-         setError: EQ,
-         onFiles: nQ
-       } = (0, bQ.g)((async QQ => {
-         const FQ = await (0, AQ.loadPageShaderPackCompiler)();
-         if (!FQ) return void EQ(SQ("shaderPack:compilerUnavailable"));
-         const wQ = await (0, tQ.f)(FQ, QQ.files);
-         if (OQ({
- ... (9 more removed lines; see GitHub link above)
+         userContext: Uk
+       } = (0, mk.d)();
+       if (ik) {
+         const kk = fk.e[ik];
+         if (null === kk || void 0 === kk || !kk.purchasable) return (0, nk.jsx)(Pk.NavigatePreserveSearch, {
+           to: "/"
+         })
+       }
+       const Hk = ik ? fk.e[ik] : null,
+         wk = ik ? Sk.j[(0, bk.m)(ik)] : null,
+         lk = void 0 !== (null === Hk || void 0 === Hk ? void 0 : Hk.characterSet) || null !== Hk && void 0 !== Hk && Hk.singleItem ? Hk.displayName : `${null!==(kk=null===Hk||void 0===Hk?void 0:Hk.displayName)&&void 0!==kk?kk:ik} Pack`,
+         pk = Hk ? `Your ${lk} is Ready!` : "Welcome To Super Rank!",
+         yk = Hk ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+         Yk = Hk ? !Uk.getOwnedCosmeticPacks().includes(ik) : !Uk.playerHasRank("super"),
+         Lk = Hk ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L60-L74` → after: `L43-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L43-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L43-L55) · [Before (L60-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L60-L74)

```diff
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
-           }
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [wk && (0, nk.jsx)(wk, {}), !Hk && (0, nk.jsx)(Mk.e, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+           customClass: "SuperRankWelcomeIconShower"
+         }), (0, nk.jsx)("div", {
+           className: "PurchaseWelcomeTitle FullyFancyText",
+           children: pk
+         }), (0, nk.jsx)("div", {
+           className: "PurchaseWelcomeText",
+           children: yk
```

#### 7. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L76-L88` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L57-L61) · [Before (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L76-L88)

```diff
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
+           className: "PurchaseWelcomeWarning",
+           children: [(0, nk.jsx)(xk.d, {
+             name: "circle-info"
+           }), (0, nk.jsx)("div", {
+             children: Lk
```

#### 8. `bundles/bloxd.io/chunks/js/125.js` (Changed code · before: `L90-L160` → after: `L63-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7058768b01a3ddffbf5b947469787b92ba19ca3d2bf1f92ce6c80c431b85203c) · [After (L63-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/125.js#L63-L68) · [Before (L90-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/125.js#L90-L160)

```diff
-         }), !GQ && (0, MQ.jsxs)(MQ.Fragment, {
-           children: [(0, MQ.jsxs)("label", {
-             className: "ShaderPackPublishField",
-             children: [(0, MQ.jsx)("span", {
-               children: SQ("general:name")
-             }), (0, MQ.jsx)(mQ.b, {
-               className: "ShaderPackPublishInput",
-               defaultValue: IQ,
-               maxLength: qQ.z,
-               onValueChange: KQ
-             }, sQ), RQ && ZQ && (0, MQ.jsx)("span", {
-               className: "ShaderPackPublishHint",
-               children: SQ("shaderPackListing:nameTooShort", {
-                 min: String(qQ.B)
-               })
-             })]
- ... (55 more removed lines; see GitHub link above)
+         }), (0, nk.jsx)(Pk.LinkPreserveSearch, {
+           to: "/",
+           children: (0, nk.jsx)(rk.r, {
+             className: "PurchaseWelcomeContinue",
+             children: ek("general:continue")
+           })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/126.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/126.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b)

#### 1. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/126.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/126.js#L2)

```diff
- export const ids = [126, 128, 131];
+ export const ids = [126];
```

#### 2. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/126.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/126.js#L4-L6)

```diff
-   6422: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
+   6378: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => xk
```

#### 3. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L8-L175` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/126.js#L8-L16) · [Before (L8-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/126.js#L8-L175)

```diff
-     var LQ = wQ(6427),
-       qQ = wQ(1107);
-     const oQ = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
- 
-     function DQ(QQ) {
-       let {
-         diagnostics: FQ,
-         more: wQ = 0,
-         t: DQ
-       } = QQ;
- ... (152 more removed lines; see GitHub link above)
+     var Dk = ik(1327),
+       fk = ik(60),
+       Sk = ik(107),
+       bk = ik(1496),
+       rk = ik(1212),
+       Pk = ik(302),
+       mk = ik(610);
+     const Mk = new URL(rk.k[Pk.d.PRODUCTION]).origin;
+     var Kk = ik(1066);
```

#### 4. `bundles/bloxd.io/chunks/js/126.js` (Changed code · before: `L178-L285` → after: `L19-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-07de8eb96e4e8f0fe77135048befec55afab851636a7ddae1433d089f37fa33b) · [After (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/126.js#L19-L39) · [Before (L178-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/126.js#L178-L285)

```diff
-       return new xQ("shaderPack:loadZipDamaged")
-     }
- 
-     function NQ() {
-       return new xQ("shaderPack:loadZip64")
-     }
-     const TQ = 33554432,
-       KQ = 65536;
-     async function zQ(QQ) {
-       if (1 === QQ.length && QQ[0].name.toLowerCase().endsWith(".zip")) {
-         const FQ = QQ[0];
-         if (FQ.size > TQ) throw new xQ("shaderPack:loadZipTooBig", {
-           megabytes: String(TQ / 1048576)
-         });
-         return async function(QQ) {
-           return lQ(sQ(QQ).map((FQ => ({
- ... (92 more removed lines; see GitHub link above)
+       const kk = (0, bk.y)();
+       return (0, fk.useEffect)((() => {
+         const ek = Sk.currentUrl.getSearchParam("code");
+         Sk.currentUrl.removeSearchParam("code"), null === ek && (console.error("No authorization code found in the URL"), window.close());
+         const ik = {
+           type: `oauth_authentication_${kk.providerName}`,
+           code: ek
+         };
+         for (const kk of (fk = window.location.origin) === Mk ? [fk, `https://${mk.c}`] : [fk]) {
+           var Dk;
+           null === (Dk = window.opener) || void 0 === Dk || Dk.postMessage(ik, kk)
+         }
+         var fk;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/127.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/127.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009)

#### 1. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127, 128, 131];
+ export const ids = [127];
```

#### 2. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L4-L8)

```diff
-   6429: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ.h,
-       i: () => qQ,
-       m: () => LQ.m
+   6386: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => Ek
```

#### 3. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L10-L32` → after: `L8-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L8-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L8-L164) · [Before (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L10-L32)

```diff
-     var LQ = wQ(6414);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
-       strict: QQ,
-       program: FQ
-     })))))
-   },
-   39921: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => HQ,
-       installListedShaderPack: () => uQ
-     });
-     var LQ = wQ(6374),
-       qQ = wQ(6414),
-       oQ = wQ(1213),
-       DQ = wQ(6438),
-       kQ = wQ(6429),
- ... (7 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1496),
+       Sk = ik(1021),
+       bk = ik.n(Sk),
+       rk = ik(302),
+       Pk = ik(6396),
+       mk = ik(1033),
+       Mk = ik(1479),
+       Kk = ik(4505),
+       xk = ik(1410),
+       nk = ik(3098),
+       Uk = ik(4508),
+       Hk = ik(1648),
+       wk = ik(4496),
+       lk = ik(1095),
+       pk = ik(22),
+ ... (141 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L34-L37` → after: `L166-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L166-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L166-L186) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L34-L37)

```diff
-       const wQ = await HQ(QQ, FQ);
-       return "failed" === wQ.kind ? wQ : await (0, vQ.saveShaderPack)(wQ.stored, FQ) ? ((0, vQ.markShaderPackChangePending)(), wQ) : {
-         kind: "failed",
-         reason: "save"
+ 
+     function Ek() {
+       var kk, ek, ik, Sk;
+       const {
+         t: Ak
+       } = (0, Ck.D)(), jk = (0, Mk.useNavigatePreserveSearch)(), dk = (0, fk.p)(), {
+         userContext: Fk,
+         isUserContextUpdating: Ik
+       } = (0, lk.d)(), [Ek, hk] = (0, uk.h)(), [ak, Wk] = (0, uk.f)(), tk = (0, Dk.useRef)(!1), [Xk, Bk] = (0, Kk.o)(), ck = (0, sk.I)(Xk), [Tk, Zk] = (0, Dk.useState)(null !== (kk = ck.searchQuery) && void 0 !== kk ? kk : ""), Ok = (0, Dk.useRef)(null), {
+         searchQuery: gk
+       } = ck;
+       (0, Dk.useEffect)((() => {
+         Zk(null !== gk && void 0 !== gk ? gk : ""), Ok.current && (Ok.current.value = null !== gk && void 0 !== gk ? gk : "")
+       }), [gk]);
+       const [Gk, Nk] = (0, Dk.useState)(null), [Rk, Jk] = (0, Dk.useState)(!1), [ke, ee] = (0, Dk.useState)(!1), [ie, De] = (0, Dk.useState)(0), fe = (0, Dk.useRef)(0), Se = JSON.stringify(ck), be = (0, sk.q)();
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L39-L91` → after: `L188-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L188-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L188-L206) · [Before (L39-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L39-L91)

```diff
-     }
-     async function HQ(QQ, FQ) {
-       const wQ = await async function(QQ) {
-         let {
-           packId: FQ,
-           sourceHash: wQ
-         } = QQ;
-         try {
-           const QQ = await fetch(`${oQ.clientSideServerUrls.s3Url}/${(0,LQ.J)(FQ,wQ)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!QQ.ok) return console.error(`Failed to download shader pack ${FQ} (${QQ.status})`), null;
-           const qQ = await QQ.json();
-           return "object" !== typeof qQ || null === qQ ? (console.error(`Shader pack ${FQ}'s source isn't an object`), null) : qQ
- ... (37 more removed lines; see GitHub link above)
+ 
+       function Pe(kk) {
+         Bk((ek => {
+           (0, sk.ob)(ek, {
+             ...ck,
+             pageNumber: 1,
+             ...kk
+           })
+         }))
+       }
+ 
+       function me() {
+         const kk = Tk.trim() || null;
+         Pe({
+           searchQuery: kk,
+           ...null !== kk && !tk.current && (0, sk.u)(ck) && {
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L93-L321` → after: `L208-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L208-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L208-L231) · [Before (L93-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L93-L321)

```diff
-       }
-     }
-   },
-   6481: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       forgetShaderPackActiveHint: () => sQ,
-       isOtherApiVersion: () => iQ,
-       isShaderPackActive: () => pQ,
-       isShaderPackChangePending: () => SQ,
-       markShaderPackChangePending: () => CQ,
-       pageShaderPackValidationVersion: () => WQ,
-       reconcileStoredShaderPackHint: () => OQ,
-       removeShaderPack: () => GQ,
-       replaceShaderPack: () => tQ,
-       saveShaderPack: () => AQ,
-       shaderPackNeedsCheck: () => RQ,
- ... (213 more removed lines; see GitHub link above)
+       }(0, wk.b)(re), (0, uk.d)(), (0, Dk.useEffect)((() => {
+         if (Ik) return;
+         const kk = ++fe.current,
+           ek = JSON.parse(Se);
+         Jk(!0), ee(!1), async function(kk) {
+           if ("mine" === kk.section) return {
+             kind: "owned",
+             packs: await yk.b.getOwnedShaderPacks(Fk)
+           };
+           const ek = "favourites" === kk.section,
+             ik = ek && (0, sk.u)(kk),
+             Dk = await yk.b.getShaderPacks(Fk, {
+               sort: ek ? sk.f : kk.sort,
+               features: ik ? [] : kk.withFeatures,
+               withoutFeatures: ik ? [] : kk.withoutFeatures,
+               searchQuery: kk.searchQuery,
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L324-L380` → after: `L252-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L252-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L252-L424) · [Before (L324-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L324-L380)

```diff
-       return await (0, LQ.replaceShaderPack)(QQ, DQ, FQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), DQ
-     }
- 
-     function mQ(QQ, FQ, wQ) {
-       return {
-         headerVersion: (0, LQ.pageShaderPackValidationVersion)(QQ),
-         ok: 0 === FQ.length,
-         errors: FQ.slice(0, DQ),
-         moreErrors: Math.max(0, FQ.length - DQ),
-         offInStrict: wQ
-       }
-     }
-   },
-   6414: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ,
- ... (41 more removed lines; see GitHub link above)
+       return (0, Vk.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+         children: [(0, Vk.jsx)(xk.e, {
+           onClick: re,
+           children: Ak(null === be ? "homePage:backToGames" : "shaderPackListing:backToSettings")
+         }), (0, Vk.jsxs)("div", {
+           className: "ShaderPackBrowseHeader",
+           children: [(0, Vk.jsxs)("div", {
+             className: "ShaderPackBrowseHeaderRow",
+             children: [(0, Vk.jsx)("h1", {
+               className: "VisuallyHidden",
+               children: Ak("shaderPackListing:title")
+             }), (0, Vk.jsxs)("div", {
+               className: "ShaderPackBrowseTabs",
+               children: [(0, Vk.jsx)("div", {
+                 className: bk()("ShaderPackBrowseSort", {
+ ... (157 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/127.js` (Changed code · before: `L382-L511` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-386880278d0036aaf58d385d79a92f0ffaf4614204c2e6fff2627a7a36b63009) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/127.js#L426-L427) · [Before (L382-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/127.js#L382-L511)

```diff
-           return HQ(QQ) > oQ ? `The pack's .wgsl files are over ${oQ/1024} KB in total.` : null
-         }(FQ) ?? FQ
-     }
- 
-     function mQ(QQ) {
-       const FQ = {};
-       for (const wQ of QQ) FQ[wQ.path] = wQ.source;
-       return FQ
-     }
- 
-     function uQ(QQ, FQ) {
-       return QQ < FQ ? -1 : QQ > FQ ? 1 : 0
-     }
- 
-     function HQ(QQ) {
-       const FQ = new TextEncoder;
- ... (114 more removed lines; see GitHub link above)
+         })]
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/128.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/128.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf)

#### 1. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128, 131];
+ export const ids = [128];
```

#### 2. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L4-L14` → after: `L4-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L4-L27) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L4-L14)

```diff
-   6429: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ.h,
-       i: () => qQ,
-       m: () => LQ.m
-     });
-     var LQ = wQ(6414);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
-       strict: QQ,
-       program: FQ
-     })))))
+   6400: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => rk
+     });
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(1172),
+       bk = ik(1066);
+ 
+     function rk(kk) {
+       let {
+         item: ek,
+         className: ik
+       } = kk;
+       const {
+         t: Dk
+ ... (8 more added lines; see GitHub link above)
```
