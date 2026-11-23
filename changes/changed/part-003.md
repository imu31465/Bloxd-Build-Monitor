# Changed — Bundle Modifications Report (Part 003 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `3 / 50` (**283** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 002](part-002.md) · [Part 004 →](part-004.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/110.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/110.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae)

#### 20. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L579-L583` → after: `L250-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L250-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L250-L254) · [Before (L579-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L579-L583)

```diff
-       let {
-         item: Eq,
-         packUrl: gq,
-         baselineUrl: lq
-       } = qq;
+       const zC = CC.asError();
+       if (zC.debugResult.wZ || (0, qz.c)(zC.debugResult.error)) return;
+       console.log("Failed to join lobby:", zC.message);
+       const ZC = "timedOut" === zC.debugResult.gameServerUnreachable;
+       (0, wz.reportClientError)("matchmake_failed", zC.message, ZC ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : NC.l[zC.code]);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L585-L597` → after: `L256-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L256-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L256-L260) · [Before (L585-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L585-L597)

```diff
-         t: mq
-       } = (0, Hq.v)(), [xq, Aq] = (0, Yq.useState)(50), cq = (0, Yq.useRef)(!1), uq = (0, Yq.useRef)(null), {
-         width: Bq,
-         height: Wq
-       } = Oq.p.large;
- 
-       function Nq(qq) {
-         Aq((Eq => (0, iq.e)(Eq + qq, 0, 100)))
-       }
- 
-       function aq(qq) {
-         const Eq = qq.currentTarget.getBoundingClientRect();
-         Aq((0, iq.e)((qq.clientX - Eq.left) / Eq.width * 100, 0, 100))
+         error: QC
+       } = zC.debugResult;
+       if (QC instanceof lC.l && "default" !== QC.packSource) {
+         const CC = (0, bz.d)("js", "game" === QC.packSource ? "game" : "page", (0, bz.g)(QC));
+         (0, wz.reportClientError)("texture_pack", QC, CC)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L664-L677` → after: `L265-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L265-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L265-L329) · [Before (L664-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L664-L677)

```diff
-       let {
-         side: Eq,
-         onClick: gq,
-         children: Yq
-       } = qq;
-       return (0, vq.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${Eq}`,
-         onClick: gq,
-         children: (0, vq.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: Yq
-         })
-       })
+       if (null === CC || void 0 === CC || !CC.isError()) return !1;
+       const zC = CC.asError();
+       return zC.code === NC.l.REQUEST_TO_MATCHMAKING && !(0, qz.c)(zC.debugResult.error)
+     }
+     async function Sz(CC, zC, ZC) {
+       const QC = (0, fz.H)(zC);
+       async function nC(CC, zC, ZC, QC) {
+         var nC;
+         if (QC.aborted) return null;
+         null === wC.b.get("gameEntrySource") && (0, wC.g)("directPlayUrl"), Fz.z && (0, DC.h)().catch((() => {})), wC.b.set({
+           gameState: "findingLobby"
+         }), vC.o.bp("loadingScreenState", "loadingPage:findingLobby");
+         const fC = await RC.userContextManager.getCurrentUserContext();
+         oC.gameBridge.send("setRequestedGame", {
+           gameNameWithVariation: zC,
+           discordContext: CC instanceof uC.d ? CC.getSerialisableParams() : null
+ ... (49 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L691` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L332) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L691)

```diff
-     function Xq(qq) {
+     function pz() {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L693-L699` → after: `L334-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L334-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L334-L355) · [Before (L693-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L693-L699)

```diff
-         userContext: Eq
-       } = (0, Vq.c)(), [lq, Oq] = (0, Yq.useState)(null), [mq, xq] = (0, Yq.useState)(!1), [Aq, cq] = (0, Yq.useState)(!1), [uq, Bq] = (0, Yq.useState)(null), Wq = null === qq || void 0 === qq ? void 0 : qq.packId, Nq = null === qq || void 0 === qq ? void 0 : qq.sourceHash;
-       return (0, Yq.useEffect)((() => {
-         if (xq(!1), Bq(null), void 0 === Wq) return;
-         let qq = !1;
-         return Promise.all([(0, jq.hasUsableWebGpuAdapter)(), (0, Fq.d)()]).then((Eq => {
-           let [gq, Yq] = Eq;
+         t: CC
+       } = (0, WC.y)(), zC = (0, qC.useNavigatePreserveSearch)(), ZC = (0, QC.v)(), MC = (0, QC.C)(), SC = (0, nC.useRef)({
+         t: CC,
+         navigate: zC
+       });
+       SC.current = {
+         t: CC,
+         navigate: zC
+       };
+       const AC = (0, nC.useRef)("");
+       AC.current = ZC.pathname + ZC.search;
+       const {
+         gameState: xC,
+         clientEscMenuOptions: IC
+       } = (0, wC.k)(["gameState", "clientEscMenuOptions"]), vC = (0, nC.useRef)(null), eC = (0, nC.useRef)(!1);
+       var cC;
+ ... (6 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L701-L705` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L357) · [Before (L701-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L701-L705)

```diff
-           qq || (Oq(gq), xq((null === Yq || void 0 === Yq || null === (lq = Yq.listing) || void 0 === lq ? void 0 : lq.packId) === Wq && Yq.listing.sourceHash === Nq))
-         })).catch((Eq => {
-           console.error("Failed to check whether this shader pack can be used", Eq), qq || Oq(!1)
-         })), () => {
-           qq = !0
+           CC = !1, BC.wanted = !1, null === (zC = OC) || void 0 === zC || zC.setGamePackConfirm(null), OC = null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L707-L714` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L359-L407) · [Before (L707-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L707-L714)

```diff
-       }), [Wq, Nq]), {
-         webGpuUsable: lq,
-         inUse: mq,
-         busy: Aq,
-         errorKey: uq,
-         use: () => {
-           null !== qq && async function(qq) {
-             cq(!0), Bq(null);
+       }), [cC]), (0, nC.useEffect)((() => {
+         var CC;
+         (0, bC.needGameClientNow)();
+         const {
+           t: zC,
+           navigate: QC
+         } = SC.current, nC = (0, zz.b)(MC, ZC.search);
+         if (MC.lobbyName && !new URLSearchParams(ZC.search).has("lobby")) return void QC((0, XC.b)(nC.gameNameWithVariation, nC.lobbyName), {
+           replace: !0
+         });
+         let fC = Promise.resolve({
+           shouldMatchmake: !0
+         });
+         if ("/play/discord-custom-lobby" === ZC.pathname) {
+           const CC = wC.b.get("discordContext");
+           if (!CC) return void QC("/");
+ ... (33 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L716-L728` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L409) · [Before (L716-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L716-L728)

```diff
-               const {
-                 installListedShaderPack: Yq
-               } = await Promise.all([gq.e(75), gq.e(132), gq.e(127)]).then((() => gq(40249))), lq = await Yq({
-                 packId: qq.packId,
-                 sourceHash: qq.sourceHash,
-                 name: qq.name,
-                 ownerName: qq.ownerName,
-                 description: qq.description
-               });
-               if ("failed" === lq.kind) return void Bq(sq[lq.reason]);
-               xq(!0), dq.e.recordShaderPackDownload(Eq, qq.packId).catch((qq => {
-                 console.error("Failed to count a shader pack's download", qq)
-               })), (0, Rq.l)()
+               QC = await GC.d.getGame(zC, ZC, !0)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L730-L732` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L411) · [Before (L730-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L730-L732)

```diff
-               console.error("Failed to use the shader pack", Yq), Bq("shaderPack:unexpectedError")
-             } finally {
-               cq(!1)
+               return void console.error("Failed to get game", nC)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L734` → after: `L413-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L413-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L413-L429) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L734)

```diff
-           }(qq)
+             const wC = QC.customTexturePackKey;
+             if (!wC) return void(sC.c.isUsingTemporaryTexturePack() && ((0, hC.reloadBloxd)(), await new Promise((() => {}))));
+             if (sC.c.isUsingTemporaryTexturePack() && sC.c.getTemporaryTexturePackSource() === wC) return;
+             const bC = FC.NotificationProvider.showCustomPopup({
+               body: CC => (0, yC.jsx)(Cz, {
+                 schematicId: ZC,
+                 texturePackKey: wC,
+                 onClose: CC
+               }),
+               disableExitButton: !0,
+               disablePressBackgroundToClose: !0
+             });
+             await bC.getResult()
+           }(dC), zC = fC;
+           fC = CC.catch((CC => {
+             console.error("Failed to check for custom texture pack", CC)
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L736` → after: `L431-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L431-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L431-L584) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L736)

```diff
-       }
+         const cC = null !== vC.current;
+         vC.current = null, (0, nz.f)(null);
+         const uC = () => {
+           xC ? (0, qC.navigateToHomePage)() : (eC.current = cC, QC(-1))
+         };
+         let rC = !1;
+         const TC = ZC.pathname + ZC.search,
+           aC = () => !rC && AC.current === TC;
+         return fC.then((CC => {
+           let {
+             shouldMatchmake: ZC,
+             discordContext: bC
+           } = CC;
+           aC() && (ZC ? Sz(null !== bC && void 0 !== bC ? bC : nC.lobbyName, bC ? "classic" : nC.gameNameWithVariation, nC.directJoinVmUrl).then((CC => {
+             if (null !== CC && aC())
+               if (CC.isError()) {
+ ... (138 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L740-L768` → after: `L596-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L596-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L596-L617) · [Before (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L740-L768)

```diff
-       let {
-         packUse: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, Hq.v)(), {
-         webGpuUsable: Yq,
-         inUse: lq,
-         busy: Oq,
-         errorKey: mq,
-         use: xq
-       } = Eq;
-       return (0, vq.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, vq.jsxs)(uq.p, {
-           disabled: !0 !== Yq || lq,
- ... (13 more removed lines; see GitHub link above)
+       return CC = function(CC, zC) {
+         var ZC;
+         const QC = new URLSearchParams(zC),
+           wC = QC.get("lobby"),
+           bC = QC.get("vm"),
+           nC = null !== (ZC = wC) && void 0 !== ZC ? ZC : CC.lobbyName,
+           fC = null !== bC && void 0 !== bC ? bC : CC.directJoinVmUrl;
+         if (nC === CC.lobbyName && fC === CC.directJoinVmUrl) return CC;
+         return {
+           ...CC,
+           lobbyName: nC,
+           directJoinVmUrl: fC
+         }
+       }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), CC = function(CC) {
+         if ((0, bC.H)(CC.directJoinVmUrl)) return CC;
+         const zC = (0, wC.hb)(CC.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L772-L780` → after: `L628-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L628-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L628-L629) · [Before (L772-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L772-L780)

```diff
-       var qq;
-       const {
-         t: Eq
-       } = (0, Hq.v)(), gq = (0, cq.useNavigatePreserveSearch)(), {
-         packId: Oq
-       } = (0, lq.v)(), {
-         userContext: mq,
-         isUserContextUpdating: xq
-       } = (0, Vq.c)(), [Bq, Wq] = (0, Yq.useState)(null), [Nq, jq] = (0, Yq.useState)(null), [oq, Pq] = (0, Yq.useState)(0), Qq = (0, Yq.useRef)(0);
+       QC = !0
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L782-L842` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L631-L632) · [Before (L782-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L782-L842)

```diff
-       function yq() {
-         var qq;
-         null !== (qq = (0, cq.getPreviousLocation)()) && void 0 !== qq && qq.startsWith(rq.V) ? gq(-1) : gq(rq.V)
-       }(0, aq.b)(yq), (0, Tq.e)(), (0, Yq.useEffect)((() => {
-         if (xq || void 0 === Oq) return;
-         const qq = ++Qq.current;
-         jq(null), dq.e.getShaderPack(mq, Oq).then((Eq => {
-           Qq.current === qq && Wq(Eq)
-         })).catch((Eq => {
-           Qq.current === qq && (console.error("Failed to get the shader pack", Eq), Wq(null), jq({
-             error: Eq
-           }))
-         }))
-       }), [Oq, mq, xq, oq]);
-       const tq = () => {
-           Pq((qq => qq + 1))
- ... (45 more removed lines; see GitHub link above)
+     function bC() {
+       return QC
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L845-L864` → after: `L649-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L649-L650) · [Before (L845-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L845-L864)

```diff
-     function Cq(qq) {
-       let {
-         item: Eq,
-         favourites: gq,
-         packUse: Yq
-       } = qq;
-       const lq = gq.isFavourite(Eq.packId);
-       return (0, vq.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [jq.featureFlags.settings.canUseShaderPacks && (0, vq.jsx)(wq, {
-           packUse: Yq
-         }), (0, vq.jsx)(uq.x, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             gq.toggle(Eq.packId)
-           },
- ... (4 more removed lines; see GitHub link above)
+     function FC() {
+       return Promise.all([ZC.e(74), ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(76), ZC.e(210), ZC.e(134), ZC.e(196), ZC.e(139), ZC.e(87), ZC.e(218), ZC.e(63)]).then((() => ZC(40510)))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L867-L956` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L653-L654) · [Before (L867-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L867-L956)

```diff
-     function Iq(qq) {
-       let {
-         item: Eq,
-         ownerPreview: gq,
-         bloxdhubSlug: Yq,
-         actions: lq
-       } = qq;
-       const {
-         t: xq
-       } = (0, Hq.v)(), Aq = (0, Nq.t)(), uq = null === Yq ? null : (0, Oq.g)(Yq);
-       return (0, vq.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [Eq.description && (0, vq.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: Eq.description
-         }), (0, vq.jsxs)("div", {
- ... (74 more removed lines; see GitHub link above)
+     function WC() {
+       Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(89), ZC.e(86), ZC.e(269), ZC.e(189), ZC.e(223), ZC.e(247), ZC.e(218), ZC.e(46)]).then((() => ZC(40832))).catch((() => {}))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L959-L985` → after: `L657-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L657-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L657-L667) · [Before (L959-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L959-L985)

```diff
-     function eq(qq) {
-       let {
-         label: Eq,
-         time: gq,
-         now: Yq
-       } = qq;
-       const {
-         t: lq,
-         selectedLanguage: Oq
-       } = (0, Hq.v)(), mq = new Date(gq);
-       let Aq = mq.toLocaleDateString();
-       if (Yq - gq <= 30 * xq.k) {
-         const qq = (0, Hq.h)(Oq.code, "shaderPackListing:timeAgo");
-         Aq = lq("shaderPackListing:timeAgo", {
-           time: (0, xq.lb)(qq, gq, Yq)
-         })
- ... (11 more removed lines; see GitHub link above)
+     function NC() {
+       return nC.e.cancelDownloadForJoin(), (0, fC.b)(), (0, wC.f)(), (0, oC.g)(), (0, bC.k)(), WC(), Promise.all([ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(210), ZC.e(134), ZC.e(139), ZC.e(58)]).then((() => ZC(40885))).then((CC => {
+         let {
+           startJoinLoad: zC
+         } = CC;
+         zC()
+       }), (() => {})), qC ??= FC().then((CC => (CC.startWasmPlay(), CC.followPageUiPack((CC => {
+         QC.c.showGamePack(CC)
+       })), CC)), (CC => {
+         throw qC = null, CC
+       })), qC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L996-L1035` → after: `L670-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L670-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L670-L677) · [Before (L996-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L996-L1035)

```diff
-     function mq(qq) {
-       let {
-         options: Eq,
-         value: gq,
-         onChange: Yq,
-         ariaLabel: mq,
-         className: xq,
-         reselectable: Aq = !1,
-         keepsFocus: cq = !1,
-         padTabs: uq
-       } = qq;
-       const Bq = void 0 !== uq;
-       return (0, Oq.jsx)("div", {
-         className: lq()("SegmentedToggle", xq),
-         role: "group",
-         "aria-label": mq,
- ... (24 more removed lines; see GitHub link above)
+     function MC() {
+       return WC(), ZC.e(271).then((() => ZC(40888))).catch((() => {})), FC().then((() => {}))
+     }
+ 
+     function gC() {
+       return FC().then((CC => {
+         CC.startWasmPreviews(), CC.prefetchWasmPreviews()
+       }))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L1038-L1069` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L680) · [Before (L1038-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L1038-L1069)

```diff
-   4866: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Oq,
-       i: () => mq
-     });
-     var Yq = gq(57);
-     const lq = new WeakMap,
-       Oq = qq => {
-         var Eq;
-         const gq = qq.closest("[data-pad-slider]");
-         return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
-       },
-       mq = (qq, Eq) => {
-         const gq = (0, Yq.useRef)(Eq);
-         gq.current = Eq, (0, Yq.useEffect)((() => {
-           if (qq.current) return ((qq, Eq) => (lq.set(qq, Eq), () => {
- ... (16 more removed lines; see GitHub link above)
+   8897: (CC, zC, ZC) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L1072` → after: `L683-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L683-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L683-L686) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L1072)

```diff
-       d: () => Oq
+       e: () => nC,
+       i: () => fC,
+       m: () => qC,
+       n: () => oC
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L1074-L1076` → after: `L688-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L688-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L688-L699) · [Before (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L1074-L1076)

```diff
-     var Yq = gq(38);
-     const lq = "shaderPack";
-     async function Oq() {
+     var QC = ZC(184),
+       wC = ZC(4562);
+ 
+     function bC(CC) {
+       return nC(CC) === QC.e.gameOrPluginOnPlayerAuthRejected.code
+     }
+ 
+     function nC(CC) {
+       return "object" === typeof CC && null !== CC ? CC.code : void 0
+     }
+ 
+     function fC(CC) {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L1078-L1079` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/110.js#L701-L711) · [Before (L1078-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/110.js#L1078-L1079)

```diff
-       let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
+       return null !== (zC = Object.keys(wC.c).find((zC => wC.c[zC] === CC))) && void 0 !== zC ? zC : null
+     }
+ 
+     function oC(CC) {
+       return "notWhitelisted" === CC ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const qC = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/111.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/111.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L5-L18349` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L21) · [Before (L5-L18349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L5-L18349)

```diff
-   6085: function(qq, Eq, gq) {
-     var Yq;
-     ! function() {
-       var lq, Oq = 1e9,
-         mq = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         xq = !0,
-         Aq = "[DecimalError] ",
-         cq = Aq + "Invalid argument: ",
-         uq = Aq + "Exponent out of range: ",
-         Bq = Math.floor,
- ... (18329 more removed lines; see GitHub link above)
+   4942: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => gC,
+       e: () => RC,
+       f: () => SC,
+       h: () => GC
+     });
+     var QC = ZC(48),
+       wC = ZC(4947),
+       bC = ZC(4300),
+       nC = ZC(1321),
+       fC = ZC(4971),
+       oC = ZC(1002),
+       qC = ZC.n(oC),
+       FC = ZC(1307),
+       WC = ZC(1645),
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18352-L18398` → after: `L24-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L24-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L24-L66) · [Before (L18352-L18398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18352-L18398)

```diff
-       var Eq = mm(qq, 2),
-         gq = Eq[0],
-         Yq = Eq[1],
-         lq = gq,
-         Oq = Yq;
-       return gq > Yq && (lq = Yq, Oq = gq), [lq, Oq]
-     }
- 
-     function um(qq, Eq, gq) {
-       if (qq.lte(0)) return new(UO())(0);
-       var Yq = lm.getDigitCount(qq.toNumber()),
-         lq = new(UO())(10).pow(Yq),
-         Oq = qq.div(lq),
-         mq = 1 !== Yq ? .05 : .1,
-         xq = new(UO())(Math.ceil(Oq.div(mq).toNumber())).add(gq).mul(mq).mul(lq);
-       return Eq ? xq : new(UO())(Math.ceil(xq))
- ... (31 more removed lines; see GitHub link above)
+       let {
+         label: zC,
+         onClick: ZC,
+         checked: QC,
+         circleInfoText: wC,
+         className: fC,
+         disabled: oC,
+         note: FC
+       } = CC;
+       return (0, MC.jsxs)("div", {
+         "aria-disabled": oC || void 0,
+         "data-pad-focusable": !0,
+         className: qC()("SettingBox CheckboxContainer", {
+           [fC]: fC,
+           SettingBoxDisabled: oC
+         }),
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18475-L18505` → after: `L71-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L71-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L71-L131) · [Before (L18475-L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18475-L18505)

```diff
-       return function(qq) {
-         if (Array.isArray(qq)) return Qm(qq)
-       }(qq) || function(qq) {
-         if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
-       }(qq) || function(qq, Eq) {
-         if (!qq) return;
-         if ("string" === typeof qq) return Qm(qq, Eq);
-         var gq = Object.prototype.toString.call(qq).slice(8, -1);
-         "Object" === gq && qq.constructor && (gq = qq.constructor.name);
-         if ("Map" === gq || "Set" === gq) return Array.from(qq);
-         if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Qm(qq, Eq)
-       }(qq) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
- ... (15 more removed lines; see GitHub link above)
+       let {
+         name: zC,
+         onChange: ZC,
+         min: wC,
+         max: bC,
+         step: fC,
+         initValue: oC,
+         circleInfoText: FC,
+         format: WC,
+         className: NC,
+         padStep: gC,
+         disabled: SC = !1,
+         selectableMax: pC,
+         cappedNote: GC,
+         onChangeComplete: RC
+       } = CC;
+ ... (45 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18509-L18533` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L136-L137) · [Before (L18509-L18533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18509-L18533)

```diff
-       for (var Eq = 1; Eq < arguments.length; Eq++) {
-         var gq = null != arguments[Eq] ? arguments[Eq] : {};
-         Eq % 2 ? ym(Object(gq), !0).forEach((function(Eq) {
-           rm(qq, Eq, gq[Eq])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : ym(Object(gq)).forEach((function(Eq) {
-           Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
-         }))
-       }
-       return qq
-     }
- 
-     function rm(qq, Eq, gq) {
-       return (Eq = function(qq) {
-         var Eq = function(qq, Eq) {
-           if ("object" != om(qq) || !qq) return qq;
-           var gq = qq[Symbol.toPrimitive];
- ... (9 more removed lines; see GitHub link above)
+       var zC;
+       let {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18535-L18927` → after: `L139-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L139-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L139-L168) · [Before (L18535-L18927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18535-L18927)

```diff
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : qq[Eq] = gq, qq
-     }
- 
-     function hm(qq, Eq, gq) {
-       return rO()(qq) || rO()(Eq) ? gq : (0, dm.z)(Eq) ? ZO()(qq, Eq, gq) : hO()(Eq) ? Eq(qq) : gq
-     }
- 
-     function nm(qq, Eq, gq, Yq) {
-       var lq = MO()(qq, (function(qq) {
-         return hm(qq, Eq)
-       }));
-       if ("number" === gq) {
-         var Oq = lq.filter((function(qq) {
- ... (377 more removed lines; see GitHub link above)
+         min: bC,
+         max: nC,
+         step: fC,
+         onChange: oC,
+         orientation: qC,
+         reverse: FC,
+         setIsChanging: WC,
+         tooltip: gC,
+         labels: SC,
+         handleLabel: PC,
+         format: GC,
+         onChangeStart: RC,
+         onChangeComplete: AC,
+         padStep: xC,
+         disabled: JC = !1
+       } = CC;
+ ... (14 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18929-L18937` → after: `L170-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L170-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L170-L188) · [Before (L18929-L18937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18929-L18937)

```diff
-         none: NO,
-         silhouette: function(qq, Eq) {
-           if ((gq = qq.length) > 0) {
-             for (var gq, Yq = 0, lq = qq[Eq[0]], Oq = lq.length; Yq < Oq; ++Yq) {
-               for (var mq = 0, xq = 0; mq < gq; ++mq) xq += qq[mq][Yq][1] || 0;
-               lq[Yq][1] += lq[Yq][0] = -xq / 2
-             }
-             NO(qq, Eq)
-           }
+         hC = (0, QC.useRef)(AC);
+       hC.current = AC, (0, QC.useEffect)((() => {
+         const CC = IC.current;
+         if (!CC) return;
+         const zC = CC => {
+           var zC;
+           pC.has(CC.key) && (null === (zC = hC.current) || void 0 === zC || zC.call(hC))
+         };
+         return CC.addEventListener("keyup", zC), () => {
+           CC.removeEventListener("keyup", zC)
+         }
+       }), []);
+       const KC = (0, QC.useRef)(!1);
+       return (0, NC.g)(iC, {
+         adjust: CC => {
+           if (JC) return;
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18939-L18952` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L190-L193) · [Before (L18939-L18952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18939-L18952)

```diff
-         wiggle: function(qq, Eq) {
-           if ((lq = qq.length) > 0 && (Yq = (gq = qq[Eq[0]]).length) > 0) {
-             for (var gq, Yq, lq, Oq = 0, mq = 1; mq < Yq; ++mq) {
-               for (var xq = 0, Aq = 0, cq = 0; xq < lq; ++xq) {
-                 for (var uq = qq[Eq[xq]], Bq = uq[mq][1] || 0, Wq = (Bq - (uq[mq - 1][1] || 0)) / 2, Nq = 0; Nq < xq; ++Nq) {
-                   var aq = qq[Eq[Nq]];
-                   Wq += (aq[mq][1] || 0) - (aq[mq - 1][1] || 0)
-                 }
-                 Aq += Bq, cq += Wq * Bq
-               }
-               gq[mq - 1][1] += gq[mq - 1][0] = Oq, Aq && (Oq -= cq / Aq)
-             }
-             gq[mq - 1][1] += gq[mq - 1][0] = Oq, NO(qq, Eq)
-           }
+         setFraction: CC => {
+           if (JC) return;
+           const zC = eC(bC + (FC ? 1 - CC : CC) * (nC - bC));
+           zC !== ZC && (KC.current || (KC.current = !0, null === RC || void 0 === RC || RC()), oC(zC))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18954-L19098` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L195-L196) · [Before (L18954-L19098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L18954-L19098)

```diff
-         positive: function(qq) {
-           var Eq = qq.length;
-           if (!(Eq <= 0))
-             for (var gq = 0, Yq = qq[0].length; gq < Yq; ++gq)
-               for (var lq = 0, Oq = 0; Oq < Eq; ++Oq) {
-                 var mq = zO()(qq[Oq][gq][1]) ? qq[Oq][gq][0] : qq[Oq][gq][1];
-                 mq >= 0 ? (qq[Oq][gq][0] = lq, qq[Oq][gq][1] = lq + mq, lq = qq[Oq][gq][1]) : (qq[Oq][gq][0] = 0, qq[Oq][gq][1] = 0)
-               }
-         }
-       },
-       Km = function(qq, Eq, gq) {
-         var Yq = Eq.map((function(qq) {
-             return qq.props.dataKey
-           })),
-           lq = wm[gq],
-           Oq = function() {
- ... (129 more removed lines; see GitHub link above)
+         endDrag: () => {
+           KC.current && (KC.current = !1, null === AC || void 0 === AC || AC())
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19100-L19155` → after: `L198-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L198-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L198-L219) · [Before (L19100-L19155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19100-L19155)

```diff
-         return gq[0]
-       },
-       Ex = function(qq, Eq) {
-         var gq, Yq = (null !== (gq = qq.type) && void 0 !== gq && gq.defaultProps ? tm(tm({}, qq.type.defaultProps), qq.props) : qq.props).stackId;
-         if ((0, dm.z)(Yq)) {
-           var lq = Eq[Yq];
-           if (lq) {
-             var Oq = lq.items.indexOf(qq);
-             return Oq >= 0 ? lq.stackedData[Oq] : null
-           }
-         }
-         return null
-       },
-       gx = function(qq, Eq, gq) {
-         return Object.keys(qq).reduce((function(Yq, lq) {
-           var Oq = qq[lq].stackedData.reduce((function(qq, Yq) {
- ... (40 more removed lines; see GitHub link above)
+       }), (0, MC.jsx)("div", {
+         ref: IC,
+         style: {
+           display: "contents"
+         },
+         children: (0, MC.jsx)(wC.b, {
+           value: ZC,
+           min: bC,
+           max: nC,
+           step: fC,
+           onChange: oC,
+           orientation: qC,
+           reverse: FC,
+           tooltip: gC,
+           labels: SC,
+           handleLabel: PC,
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19185-L19629` → after: `L222-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L222-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L222-L233) · [Before (L19185-L19629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19185-L19629)

```diff
-       }
-   },
-   6007: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Wq,
-       h: () => Bq
-     });
-     var Yq = gq(5856);
- 
-     function lq(qq) {
-       return lq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
-         return typeof qq
-       } : function(qq) {
-         return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
-       }, lq(qq)
-     }
- ... (429 more removed lines; see GitHub link above)
+       })
+     }
+     async function GC() {
+       const CC = FC.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await CC.getResult() && (0, WC.reloadBloxd)()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19633-L19637` → after: `L237-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L237-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L237-L258) · [Before (L19633-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19633-L19637)

```diff
-       return Qq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
-         return typeof qq
-       } : function(qq) {
-         return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
-       }, Qq(qq)
+       let {
+         label: zC,
+         options: ZC,
+         value: QC,
+         onChange: wC,
+         circleInfoText: bC
+       } = CC;
+       return (0, MC.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, MC.jsxs)("div", {
+           className: "SliderText",
+           children: [zC, bC && (0, MC.jsx)(nC.b, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: bC
+           })]
+         }), (0, MC.jsx)(fC.b, {
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19639-L19666` → after: `L260-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L260-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L260-L290) · [Before (L19639-L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19639-L19666)

```diff
-     var yq = {
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
+   6663: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => UC
+     });
+     var QC = ZC(48),
+       wC = ZC(1463),
+       bC = ZC(6560),
+       nC = ZC(1169),
+       fC = ZC(326),
+       oC = ZC(1295),
+       qC = ZC(1453),
+       FC = ZC(1388),
+       WC = ZC(1321),
+       NC = ZC(2575),
+       MC = ZC(2718),
+ ... (15 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19668-L19675` → after: `L292-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L292-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L292-L453) · [Before (L19668-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19668-L19675)

```diff
-     function nq(qq, Eq) {
-       var gq = [],
-         Yq = [];
-       return Yq = Array.isArray(Eq) ? Eq.map((function(qq) {
-         return tq(qq)
-       })) : [tq(Eq)], hq(qq).forEach((function(qq) {
-         var Eq = lq()(qq, "type.displayName") || lq()(qq, "type.name"); - 1 !== Yq.indexOf(Eq) && gq.push(qq)
-       })), gq
+     function hC(CC) {
+       let {
+         details: zC,
+         owner: ZC,
+         onChanged: wC
+       } = CC;
+       const {
+         t: nC
+       } = (0, GC.y)(), fC = (0, qC.useNavigatePreserveSearch)(), {
+         userContext: WC
+       } = (0, SC.e)(), [NC, MC] = (0, QC.useState)(!1), [gC, PC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(!1), {
+         packId: hC,
+         name: KC,
+         description: YC,
+         live: dC
+       } = zC;
+ ... (146 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19678-L19680` → after: `L464-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L464-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L464-L538) · [Before (L19678-L19680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19678-L19680)

```diff
-     function bq(qq, Eq) {
-       var gq = nq(qq, Eq);
-       return gq && gq[0]
+     function cC(CC) {
+       let {
+         item: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, GC.y)(), [wC] = (0, EC.f)(), [nC, fC] = (0, QC.useState)(wC), [oC, qC] = (0, QC.useState)(!1), [FC, WC] = (0, QC.useState)(!1), {
+         s3Url: NC
+       } = HC.clientSideServerUrls, {
+         width: MC,
+         height: gC
+       } = bC.s.large, SC = (0, bC.w)(NC, zC, nC, "large"), {
+         renderVersion: pC
+       } = zC;
+       return (0, vC.jsxs)("div", {
+         className: "ShaderPackPreviews",
+ ... (59 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19682-L19720` → after: `L540-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L540-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L540-L551) · [Before (L19682-L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19682-L19720)

```diff
-     var iq = function(qq) {
-         if (!qq || !qq.props) return !1;
-         var Eq = qq.props,
-           gq = Eq.width,
-           Yq = Eq.height;
-         return !(!(0, Vq.D)(gq) || gq <= 0 || !(0, Vq.D)(Yq) || Yq <= 0)
-       },
-       Zq = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
-       fq = function(qq) {
-         return qq && qq.type && Aq()(qq.type) && Zq.indexOf(qq.type) >= 0
-       },
-       Mq = function(qq) {
-         return qq && "object" === Qq(qq) && "clipDot" in qq
-       },
-       Tq = function(qq, Eq, gq) {
-         if (!qq || "function" === typeof qq || "boolean" === typeof qq) return null;
- ... (23 more removed lines; see GitHub link above)
+ 
+     function uC(CC) {
+       let {
+         fullUrl: zC,
+         largeUrl: ZC,
+         alt: wC,
+         onClose: bC
+       } = CC;
+       const nC = (0, QC.useRef)(null);
+       return (0, dC.u)("popup", nC, bC), (0, QC.useEffect)((() => {
+         function CC(CC) {
+           "Escape" === CC.key && (CC.stopPropagation(), bC())
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19722-L19733` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L553-L554) · [Before (L19722-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19722-L19733)

```diff
-         return !0
-       },
-       Sq = function(qq, Eq) {
-         if (mq()(qq) && mq()(Eq)) return !0;
-         if (!mq()(qq) && !mq()(Eq)) {
-           var gq = qq.props || {},
-             Yq = gq.children,
-             lq = Pq(gq, Hq),
-             Oq = Eq.props || {},
-             xq = Oq.children,
-             Aq = Pq(Oq, oq);
-           return Yq && xq ? (0, dq.b)(lq, Aq) && zq(Yq, xq) : !Yq && !xq && (0, dq.b)(lq, Aq)
+         return window.addEventListener("keydown", CC, !0), () => {
+           window.removeEventListener("keydown", CC, !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19735-L19750` → after: `L556-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L556-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L556-L566) · [Before (L19735-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19735-L19750)

```diff
-         return !1
-       },
-       pq = function(qq, Eq) {
-         var gq = [],
-           Yq = {};
-         return hq(qq).forEach((function(qq, lq) {
-           if (fq(qq)) gq.push(qq);
-           else if (qq) {
-             var Oq = tq(qq.type),
-               mq = Eq[Oq] || {},
-               xq = mq.handler,
-               Aq = mq.once;
-             if (xq && (!Aq || !Yq[Oq])) {
-               var cq = xq(qq, Oq, lq);
-               gq.push(cq), Yq[Oq] = !0
-             }
+       }), [bC]), (0, KC.createPortal)((0, vC.jsxs)("div", {
+         ref: nC,
+         className: "ShaderPackFullSize",
+         onClick: bC,
+         children: [(0, vC.jsx)("img", {
+           className: "ShaderPackFullSizeImage",
+           src: zC,
+           alt: wC,
+           draggable: !1,
+           style: {
+             backgroundImage: `url(${ZC})`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19752-L19768` → after: `L568-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L568-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L568-L572) · [Before (L19752-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19752-L19768)

```diff
-         })), gq
-       },
-       Gq = function(qq) {
-         var Eq = qq && qq.type;
-         return Eq && yq[Eq] ? yq[Eq] : null
-       },
-       Lq = function(qq, Eq) {
-         return hq(Eq).indexOf(qq)
-       }
-   },
-   5318: (qq, Eq, gq) => {
-     function Yq(qq, Eq) {
-       for (var gq in qq)
-         if ({}.hasOwnProperty.call(qq, gq) && (!{}.hasOwnProperty.call(Eq, gq) || qq[gq] !== Eq[gq])) return !1;
-       for (var Yq in Eq)
-         if ({}.hasOwnProperty.call(Eq, Yq) && !{}.hasOwnProperty.call(qq, Yq)) return !1;
- ... (1 more removed lines; see GitHub link above)
+         }), (0, vC.jsx)(FC.k, {
+           className: "ShaderPackFullSizeClose",
+           onClick: bC
+         })]
+       }), document.body)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19770-L19780` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L574) · [Before (L19770-L19780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19770-L19780)

```diff
-     gq.d(Eq, {
-       b: () => Yq
-     })
-   },
-   6095: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => uq
-     });
-     var Yq = gq(5931),
-       lq = gq(6014),
-       Oq = gq(5297);
+     const rC = 5;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19783-L19788` → after: `L577-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L577-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L577-L587) · [Before (L19783-L19788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19783-L19788)

```diff
-       return mq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
-         return typeof qq
-       } : function(qq) {
-         return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
-       }, mq(qq)
-     }
+       let {
+         item: zC,
+         packUrl: ZC,
+         baselineUrl: wC
+       } = CC;
+       const {
+         t: nC
+       } = (0, GC.y)(), [fC, oC] = (0, QC.useState)(50), qC = (0, QC.useRef)(!1), FC = (0, QC.useRef)(null), {
+         width: WC,
+         height: NC
+       } = bC.s.large;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19790-L19796` → after: `L589-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L589-L590) · [Before (L19790-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19790-L19796)

```diff
-     function xq(qq, Eq) {
-       var gq = Object.keys(qq);
-       if (Object.getOwnPropertySymbols) {
-         var Yq = Object.getOwnPropertySymbols(qq);
-         Eq && (Yq = Yq.filter((function(Eq) {
-           return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
-         }))), gq.push.apply(gq, Yq)
+       function MC(CC) {
+         oC((zC => (0, YC.c)(zC + CC, 0, 100)))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19801-L19808` → after: `L593-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L593-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L593-L595) · [Before (L19801-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19801-L19808)

```diff
-     function Aq(qq) {
-       for (var Eq = 1; Eq < arguments.length; Eq++) {
-         var gq = null != arguments[Eq] ? arguments[Eq] : {};
-         Eq % 2 ? xq(Object(gq), !0).forEach((function(Eq) {
-           cq(qq, Eq, gq[Eq])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : xq(Object(gq)).forEach((function(Eq) {
-           Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
-         }))
+       function gC(CC) {
+         const zC = CC.currentTarget.getBoundingClientRect();
+         oC((0, YC.c)((CC.clientX - zC.left) / zC.width * 100, 0, 100))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19810-L19871` → after: `L597-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L597-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L597-L657) · [Before (L19810-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19810-L19871)

```diff
-       return qq
-     }
- 
-     function cq(qq, Eq, gq) {
-       return (Eq = function(qq) {
-         var Eq = function(qq, Eq) {
-           if ("object" != mq(qq) || !qq) return qq;
-           var gq = qq[Symbol.toPrimitive];
-           if (void 0 !== gq) {
-             var Yq = gq.call(qq, Eq || "default");
-             if ("object" != mq(Yq)) return Yq;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === Eq ? String : Number)(qq)
-         }(qq, "string");
-         return "symbol" == mq(Eq) ? Eq : Eq + ""
- ... (46 more removed lines; see GitHub link above)
+       return (0, mC.g)(FC, {
+         adjust: CC => {
+           MC(CC * rC)
+         },
+         setFraction: CC => {
+           oC(100 * CC)
+         },
+         endDrag: () => {}
+       }), (0, vC.jsxs)("div", {
+         ref: FC,
+         className: "ShaderPackCompare",
+         "data-pad-slider": "",
+         "data-pad-focusable": "",
+         role: "slider",
+         tabIndex: 0,
+         "aria-label": nC("shaderPackListing:compare"),
+ ... (45 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19901-L19905` → after: `L662-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L662-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L662-L675) · [Before (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19901-L19905)

```diff
-       return mq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
-         return typeof qq
-       } : function(qq) {
-         return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
-       }, mq(qq)
+       let {
+         side: zC,
+         onClick: ZC,
+         children: QC
+       } = CC;
+       return (0, vC.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${zC}`,
+         onClick: ZC,
+         children: (0, vC.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: QC
+         })
+       })
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19907-L19953` → after: `L677-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L677-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L677-L687) · [Before (L19907-L19953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19907-L19953)

```diff
-     var xq = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "a … [truncated]
-       Aq = ["points", "pathLength"],
-       cq = {
-         svg: ["viewBox", "children"],
-         polygon: Aq,
-         polyline: Aq
-       },
-       uq = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus" … [truncated]
-       Bq = function(qq, Eq) {
-         if (!qq || "function" === typeof qq || "boolean" === typeof qq) return null;
-         var gq = qq;
-         if ((0, Yq.isValidElement)(qq) && (gq = qq.props), !Oq()(gq)) return null;
-         var lq = {};
-         return Object.keys(gq).forEach((function(qq) {
-           uq.includes(qq) && (lq[qq] = Eq || function(Eq) {
-             return gq[qq](gq, Eq)
- ... (31 more removed lines; see GitHub link above)
+     var aC = ZC(4942),
+       tC = ZC(296),
+       DC = ZC(6660);
+     const jC = {
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19956-L19978` → after: `L690-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L690-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L690-L730) · [Before (L19956-L19978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19956-L19978)

```diff
-       if ("object" === typeof qq && null !== qq) {
-         var Eq = qq.$$typeof;
-         switch (Eq) {
-           case Yq:
-             switch (qq = qq.type) {
-               case Oq:
-               case xq:
-               case mq:
-               case Wq:
-               case Nq:
-                 return qq;
-               default:
-                 switch (qq = qq && qq.$$typeof) {
-                   case uq:
-                   case cq:
-                   case Bq:
- ... (7 more removed lines; see GitHub link above)
+       const {
+         userContext: zC
+       } = (0, SC.e)(), [wC, bC] = (0, QC.useState)(null), [nC, fC] = (0, QC.useState)(!1), [oC, qC] = (0, QC.useState)(!1), [FC, WC] = (0, QC.useState)(null), NC = null === CC || void 0 === CC ? void 0 : CC.packId, MC = null === CC || void 0 === CC ? void 0 : CC.sourceHash;
+       return (0, QC.useEffect)((() => {
+         if (fC(!1), WC(null), void 0 === NC) return;
+         let CC = !1;
+         return Promise.all([(0, PC.hasUsableWebGpuAdapter)(), (0, DC.e)()]).then((zC => {
+           let [ZC, QC] = zC;
+           var wC;
+           CC || (bC(ZC), fC((null === QC || void 0 === QC || null === (wC = QC.listing) || void 0 === wC ? void 0 : wC.packId) === NC && QC.listing.sourceHash === MC))
+         })).catch((zC => {
+           console.error("Failed to check whether this shader pack can be used", zC), CC || bC(!1)
+         })), () => {
+           CC = !0
+         }
+       }), [NC, MC]), {
+ ... (25 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19980-L19981` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L732) · [Before (L19980-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19980-L19981)

```diff
-           case lq:
-             return Eq
+           }(CC)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19985-L19992` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L736) · [Before (L19985-L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19985-L19992)

```diff
-     gq = Symbol.for("react.module.reference"), Eq.isFragment = function(qq) {
-       return jq(qq) === Oq
-     }
-   },
-   5305: (qq, Eq, gq) => {
-     qq.exports = gq(5314)
-   },
-   4907: (qq, Eq, gq) => {
+ 
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L19994-L20009` → after: `L738-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L738-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L738-L766) · [Before (L19994-L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L19994-L20009)

```diff
-       var Eq, gq, lq = "";
-       if ("string" == typeof qq || "number" == typeof qq) lq += qq;
-       else if ("object" == typeof qq)
-         if (Array.isArray(qq)) {
-           var Oq = qq.length;
-           for (Eq = 0; Eq < Oq; Eq++) qq[Eq] && (gq = Yq(qq[Eq])) && (lq && (lq += " "), lq += gq)
-         } else
-           for (gq in qq) qq[gq] && (lq && (lq += " "), lq += gq);
-       return lq
-     }
-     gq.d(Eq, {
-       d: () => lq
-     });
-     const lq = function() {
-       for (var qq, Eq, gq = 0, lq = "", Oq = arguments.length; gq < Oq; gq++)(qq = arguments[gq]) && (Eq = Yq(qq)) && (lq && (lq += " "), lq += Eq);
-       return lq
+       let {
+         packUse: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, GC.y)(), {
+         webGpuUsable: QC,
+         inUse: wC,
+         busy: bC,
+         errorKey: nC,
+         use: fC
+       } = zC;
+       return (0, vC.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, vC.jsxs)(FC.o, {
+           disabled: !0 !== QC || wC,
+ ... (13 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20021-L20029` → after: `L770-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L770-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L770-L778) · [Before (L20021-L20029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20021-L20029)

```diff
-       var qq, Eq, gq = (0, lq.e)().unknown(void 0),
-         mq = gq.domain,
-         xq = gq.range,
-         Aq = 0,
-         cq = 1,
-         uq = !1,
-         Bq = 0,
-         Wq = 0,
-         Nq = .5;
+       var CC;
+       const {
+         t: zC
+       } = (0, GC.y)(), ZC = (0, qC.useNavigatePreserveSearch)(), {
+         packId: bC
+       } = (0, wC.C)(), {
+         userContext: nC,
+         isUserContextUpdating: fC
+       } = (0, SC.e)(), [WC, NC] = (0, QC.useState)(null), [MC, PC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(0), xC = (0, QC.useRef)(0);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20032-L20068` → after: `L781-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L781-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L781-L840) · [Before (L20032-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20032-L20068)

```diff
-         var gq = mq().length,
-           Yq = cq < Aq,
-           lq = Yq ? cq : Aq,
-           Oq = Yq ? Aq : cq;
-         qq = (Oq - lq) / Math.max(1, gq - Bq + 2 * Wq), uq && (qq = Math.floor(qq)), lq += (Oq - lq - qq * (gq - Bq)) * Nq, Eq = qq * (1 - Bq), uq && (lq = Math.round(lq), Eq = Math.round(Eq));
-         var aq = function(qq, Eq, gq) {
-           qq = +qq, Eq = +Eq, gq = (lq = arguments.length) < 2 ? (Eq = qq, qq = 0, 1) : lq < 3 ? 1 : +gq;
-           for (var Yq = -1, lq = 0 | Math.max(0, Math.ceil((Eq - qq) / gq)), Oq = new Array(lq); ++Yq < lq;) Oq[Yq] = qq + Yq * gq;
-           return Oq
-         }(gq).map((function(Eq) {
-           return lq + qq * Eq
-         }));
-         return xq(Yq ? aq.reverse() : aq)
-       }
-       return delete gq.unknown, gq.domain = function(qq) {
-         return arguments.length ? (mq(qq), aq()) : mq()
- ... (21 more removed lines; see GitHub link above)
+         var CC;
+         null !== (CC = (0, qC.getPreviousLocation)()) && void 0 !== CC && CC.startsWith(iC.W) ? ZC(-1) : ZC(iC.W)
+       }(0, gC.e)(JC), (0, EC.b)(), (0, QC.useEffect)((() => {
+         if (fC || void 0 === bC) return;
+         const CC = ++xC.current;
+         PC(null), pC.d.getShaderPack(nC, bC).then((zC => {
+           xC.current === CC && NC(zC)
+         })).catch((zC => {
+           xC.current === CC && (console.error("Failed to get the shader pack", zC), NC(null), PC({
+             error: zC
+           }))
+         }))
+       }), [bC, nC, fC, RC]);
+       const IC = () => {
+           AC((CC => CC + 1))
+         },
+ ... (44 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20148-L20149` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L845-L847) · [Before (L20148-L20149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20148-L20149)

```diff
-         _intern: gq,
-         _key: Yq
+         item: zC,
+         favourites: ZC,
+         packUse: QC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20151-L20152` → after: `L849-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L849-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L849-L862) · [Before (L20151-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20151-L20152)

```diff
-       const lq = Yq(Eq);
-       return gq.has(lq) ? gq.get(lq) : Eq
+       const wC = ZC.isFavourite(zC.packId);
+       return (0, vC.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [PC.featureFlags.settings.canUseShaderPacks && (0, vC.jsx)(LC, {
+           packUse: QC
+         }), (0, vC.jsx)(FC.x, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             ZC.toggle(zC.packId)
+           },
+           isLiked: !0 === wC,
+           isLoading: null === wC
+         })]
+       })
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20155` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L865) · [Before (L20155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20155)

```diff
-     function Oq(qq, Eq) {
+     function OC(CC) {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20157-L20158` → after: `L867-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L867-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L867-L870) · [Before (L20157-L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20157-L20158)

```diff
-         _intern: gq,
-         _key: Yq
+         item: zC,
+         ownerPreview: ZC,
+         bloxdhubSlug: QC,
+         actions: wC
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20160-L20161` → after: `L872-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L872-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L872-L954) · [Before (L20160-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20160-L20161)

```diff
-       const lq = Yq(Eq);
-       return gq.has(lq) ? gq.get(lq) : (gq.set(lq, Eq), Eq)
+       const {
+         t: fC
+       } = (0, GC.y)(), oC = (0, MC.q)(), FC = null === QC ? null : (0, bC.e)(QC);
+       return (0, vC.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [zC.description && (0, vC.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: zC.description
+         }), (0, vC.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+           children: [(null !== ZC || null !== FC) && (0, vC.jsx)("div", {
+             className: "ShaderPackAuthor",
+             children: null !== ZC ? (0, vC.jsxs)(vC.Fragment, {
+               children: [(0, vC.jsx)(NC.f, {
+                 playerSocialPreview: ZC,
+                 showLocation: !1,
+ ... (67 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20164` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L957) · [Before (L20164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20164)

```diff
-     function mq(qq, Eq) {
+     function kC(CC) {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20166-L20167` → after: `L959-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L959-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L959-L961) · [Before (L20166-L20167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20166-L20167)

```diff
-         _intern: gq,
-         _key: Yq
+         label: zC,
+         time: ZC,
+         now: QC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20169-L20191` → after: `L963-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L963-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L963-L972) · [Before (L20169-L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20169-L20191)

```diff
-       const lq = Yq(Eq);
-       return gq.has(lq) && (Eq = gq.get(lq), gq.delete(lq)), Eq
-     }
- 
-     function xq(qq) {
-       return null !== qq && "object" === typeof qq ? qq.valueOf() : qq
-     }
-     var Aq = gq(6021);
-     const cq = Symbol("implicit");
- 
-     function uq() {
-       var qq = new Yq,
-         Eq = [],
-         gq = [],
-         lq = cq;
- 
- ... (7 more removed lines; see GitHub link above)
+       const {
+         t: wC,
+         selectedLanguage: bC
+       } = (0, GC.y)(), nC = new Date(ZC);
+       let oC = nC.toLocaleDateString();
+       if (QC - ZC <= 30 * fC.e) {
+         const CC = (0, GC.m)(bC.code, "shaderPackListing:timeAgo");
+         oC = wC("shaderPackListing:timeAgo", {
+           time: (0, fC.U)(CC, ZC, QC)
+         })
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20193-L20204` → after: `L974-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L974-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L974-L983) · [Before (L20193-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20193-L20204)

```diff
-       return Oq.domain = function(gq) {
-         if (!arguments.length) return Eq.slice();
-         Eq = [], qq = new Yq;
-         for (const Yq of gq) qq.has(Yq) || qq.set(Yq, Eq.push(Yq) - 1);
-         return Oq
-       }, Oq.range = function(qq) {
-         return arguments.length ? (gq = Array.from(qq), Oq) : gq.slice()
-       }, Oq.unknown = function(qq) {
-         return arguments.length ? (lq = qq, Oq) : lq
-       }, Oq.copy = function() {
-         return uq(Eq, gq).unknown(lq)
-       }, Aq.e.apply(Oq, arguments), Oq
+       return (0, vC.jsx)(WC.d, {
+         tooltipInner: nC.toLocaleString(),
+         children: (0, vC.jsxs)("div", {
+           children: [(0, vC.jsx)("dt", {
+             children: zC
+           }), (0, vC.jsx)("dd", {
+             children: oC
+           })]
+         })
+       })
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20207` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L986) · [Before (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20207)

```diff
-   6098: (qq, Eq, gq) => {
+   4971: (CC, zC, ZC) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20209` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L988) · [Before (L20209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20209)

```diff
-       e: () => Yq
+       b: () => nC
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20211` → after: `L990-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L990-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L990-L992) · [Before (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20211)

```diff
-     Array.prototype.slice;
+     var QC = ZC(1002),
+       wC = ZC.n(QC),
+       bC = ZC(1056);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20214-L20221` → after: `L995-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L995-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L995-L1033) · [Before (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20214-L20221)

```diff
-       return "object" === typeof qq && "length" in qq ? qq : Array.from(qq)
-     }
-   },
-   5979: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return function() {
-         return qq
-       }
+       let {
+         options: zC,
+         value: ZC,
+         onChange: QC,
+         ariaLabel: nC,
+         className: fC,
+         reselectable: oC = !1,
+         keepsFocus: qC = !1,
+         padTabs: FC
+       } = CC;
+       const WC = void 0 !== FC;
+       return (0, bC.jsx)("div", {
+         className: wC()("SegmentedToggle", fC),
+         role: "group",
+         "aria-label": nC,
+         "data-pad-tabs": FC,
+ ... (23 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20227` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L1036) · [Before (L20227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20227)

```diff
-   5982: (qq, Eq, gq) => {
+   4979: (CC, zC, ZC) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20229` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L1038-L1039) · [Before (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20229)

```diff
-       c: () => cq
+       c: () => bC,
+       g: () => nC
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20231-L20307` → after: `L1041-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1041-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L1041-L1064) · [Before (L20231-L20307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20231-L20307)

```diff
-     const Yq = Math.PI,
-       lq = 2 * Yq,
-       Oq = 1e-6,
-       mq = lq - Oq;
- 
-     function xq(qq) {
-       this._ += qq[0];
-       for (let Eq = 1, gq = qq.length; Eq < gq; ++Eq) this._ += arguments[Eq] + qq[Eq]
-     }
-     class Aq {
-       constructor(qq) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == qq ? xq : function(qq) {
-           let Eq = Math.floor(qq);
-           if (!(Eq >= 0)) throw new Error(`invalid digits: ${qq}`);
-           if (Eq > 15) return xq;
-           const gq = 10 ** Eq;
- ... (61 more removed lines; see GitHub link above)
+     var QC = ZC(48);
+     const wC = new WeakMap,
+       bC = CC => {
+         var zC;
+         const ZC = CC.closest("[data-pad-slider]");
+         return ZC && null !== (zC = wC.get(ZC)) && void 0 !== zC ? zC : null
+       },
+       nC = (CC, zC) => {
+         const ZC = (0, QC.useRef)(zC);
+         ZC.current = zC, (0, QC.useEffect)((() => {
+           if (CC.current) return ((CC, zC) => (wC.set(CC, zC), () => {
+             wC.get(CC) === zC && wC.delete(CC)
+           }))(CC.current, {
+             adjust: CC => {
+               ZC.current.adjust(CC)
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20326` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L1067) · [Before (L20326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20326)

```diff
-   5831: (qq, Eq, gq) => {
+   6660: (CC, zC, ZC) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20328` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L1069-L1070) · [Before (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20328)

```diff
-       d: () => Oq
+       c: () => wC,
+       e: () => bC
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L20330-L20339` → after: `L1072-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L1072-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/111.js#L1072-L1077) · [Before (L20330-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/111.js#L20330-L20339)

```diff
-     var Yq = !0,
-       lq = "Invariant failed";
- 
-     function Oq(qq, Eq) {
-       if (!qq) {
-         if (Yq) throw new Error(lq);
-         var gq = "function" === typeof Eq ? Eq() : Eq,
-           Oq = gq ? "".concat(lq, ": ").concat(gq) : lq;
-         throw new Error(Oq)
-       }
+     var QC = ZC(38);
+     const wC = "shaderPack";
+     async function bC() {
+       var CC;
+       let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/112.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/112.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295)

#### 1. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L5-L30` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L4-L7) · [Before (L5-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L5-L30)

```diff
-   6302: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       Graph: () => Jq,
-       debug: () => ig,
-       default: () => fg,
-       graphlib: () => Oq,
-       layout: () => Ng,
-       util: () => Zg,
-       version: () => OE
-     });
-     var Yq = Object.defineProperty,
-       lq = (qq, Eq, gq) => ((qq, Eq, gq) => Eq in qq ? Yq(qq, Eq, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: gq
- ... (10 more removed lines; see GitHub link above)
+   5008: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       f: () => qC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L32-L242` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L9-L14) · [Before (L32-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L32-L242)

```diff
-     var mq = Object.defineProperty,
-       xq = (qq, Eq) => {
-         for (var gq in Eq) mq(qq, gq, {
-           get: Eq[gq],
-           enumerable: !0
-         })
-       },
-       Aq = class {
-         constructor(qq) {
-           this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () … [truncated]
-         }
-         isDirected() {
-           return this._isDirected
-         }
-         isMultigraph() {
-           return this._isMultigraph
- ... (195 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(1388),
+       bC = ZC(1143),
+       nC = ZC(77),
+       fC = ZC(3123),
+       oC = ZC(1056);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L244-L277` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L16-L17) · [Before (L244-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L244-L277)

```diff
-     function cq(qq, Eq) {
-       qq[Eq] ? qq[Eq]++ : qq[Eq] = 1
-     }
- 
-     function uq(qq, Eq) {
-       void 0 !== qq[Eq] && !--qq[Eq] && delete qq[Eq]
-     }
- 
-     function Bq(qq, Eq, gq, Yq) {
-       let lq = "" + Eq,
-         Oq = "" + gq;
-       if (!qq && lq > Oq) {
-         let qq = lq;
-         lq = Oq, Oq = qq
-       }
-       return lq + "\x01" + Oq + "\x01" + (void 0 === Yq ? "\0" : Yq)
- ... (18 more removed lines; see GitHub link above)
+     function qC() {
+       return !(0, nC.isMobile)()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L281-L368` → after: `L21-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L21-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L21-L39) · [Before (L281-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L281-L368)

```diff
-       return qq.nodes().map((Eq => {
-         let gq = qq.node(Eq),
-           Yq = qq.parent(Eq),
-           lq = {
-             v: Eq
-           };
-         return void 0 !== gq && (lq.value = gq), void 0 !== Yq && (lq.parent = Yq), lq
-       }))
-     }
- 
-     function Vq(qq) {
-       return qq.edges().map((Eq => {
-         let gq = qq.edge(Eq),
-           Yq = {
-             v: Eq.v,
-             w: Eq.w
- ... (72 more removed lines; see GitHub link above)
+       let {
+         disabled: zC,
+         openFolderPicker: ZC,
+         onFiles: nC
+       } = CC;
+       const {
+         t: FC
+       } = (0, bC.y)(), WC = (0, QC.useRef)(null);
+       return (0, oC.jsxs)("div", {
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, oC.jsx)("input", {
+           ref: WC,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L370-L490` → after: `L41-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L41-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L41-L51) · [Before (L370-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L370-L490)

```diff
-         }));
-         let uq = xq.length;
-         for (let Bq = 1; Bq < uq && (lq = !1, mq++, cq(), lq); Bq++);
-         if (mq === uq - 1 && (lq = !1, cq(), lq)) throw new Error("The graph contains a negative weight cycle");
-         return Oq
-       }(qq, String(Eq), gq || Hq, Yq || function(Eq) {
-         var gq;
-         return null != (gq = qq.outEdges(Eq)) ? gq : []
-       })
-     }
- 
-     function Pq(qq) {
-       let Eq, gq = {},
-         Yq = [];
- 
-       function lq(Yq) {
- ... (105 more removed lines; see GitHub link above)
+         }), qC() && (0, oC.jsx)(wC.g, {
+           disabled: zC,
+           onClick: ZC,
+           children: FC("general:chooseFolder")
+         }), (0, oC.jsx)(wC.g, {
+           disabled: zC,
+           onClick: () => {
+             (0, fC.c)(WC.current)
+           },
+           children: FC("general:chooseZip")
+         })]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L494-L497` → after: `L64-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L64-L68) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L494-L497)

```diff
-     function rq(qq, Eq, gq) {
-       return qq.nodes().reduce((function(Yq, lq) {
-         return Yq[lq] = tq(qq, lq, Eq, gq), Yq
-       }), {})
+     function bC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const QC = {};
+       for (const wC in ZC) QC[wC] = `\0${wC}\0`;
+       return CC(zC, QC).replace(/\0(\w+)\0/g, ((CC, zC) => ZC[zC]))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L501-L534` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L72) · [Before (L501-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L501-L534)

```diff
-       let Eq = 0,
-         gq = [],
-         Yq = {},
-         lq = [];
- 
-       function Oq(mq) {
-         var xq;
-         let Aq = Yq[mq] = {
-           onStack: !0,
-           lowlink: Eq,
-           index: Eq++
-         };
-         if (gq.push(mq), null == (xq = qq.successors(mq)) || xq.forEach((function(qq) {
-             if (qq in Yq) {
-               let Eq = Yq[qq];
-               null != Eq && Eq.onStack && (Aq.lowlink = Math.min(Aq.lowlink, Eq.index))
- ... (18 more removed lines; see GitHub link above)
+       return null === CC.file ? null : CC.line > 0 ? `${CC.file}:${CC.line}` : CC.file
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L538-L586` → after: `L76-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L76-L79) · [Before (L538-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L538-L586)

```diff
-       return vq(qq).filter((function(Eq) {
-         var gq;
-         let Yq = Eq[0];
-         return !!Yq && (Eq.length > 1 || 1 === Eq.length && (null != (gq = qq.outEdges(Yq, Yq)) ? gq : []).length > 0)
-       }))
-     }
-     var nq = () => 1;
- 
-     function bq(qq, Eq, gq) {
-       return function(qq, Eq, gq) {
-         let Yq = {},
-           lq = qq.nodes();
-         return lq.forEach((function(qq) {
-           let Oq = {};
-           Yq[qq] = Oq, Oq[qq] = {
-             distance: 0,
- ... (33 more removed lines; see GitHub link above)
+       const zC = new Map(CC.map((CC => [oC(CC).join("."), CC])));
+       if (0 === zC.size) return [];
+       const ZC = FC([...zC.values()]);
+       return 0 === ZC[0].length ? [] : ZC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L595-L603` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L83) · [Before (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L595-L603)

```diff
-       let Eq = {},
-         gq = {},
-         Yq = [];
-       if (qq.sinks().forEach((function lq(Oq) {
-           var mq;
-           if (Oq in gq) throw new iq;
-           Oq in Eq || (gq[Oq] = !0, Eq[Oq] = !0, null == (mq = qq.predecessors(Oq)) || mq.forEach(lq), delete gq[Oq], Yq.push(Oq))
-         })), Object.keys(Eq).length !== qq.nodeCount()) throw new iq;
-       return Yq
+       return wC.map((zC => zC(CC)))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L607-L676` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L88-L96) · [Before (L607-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L607-L676)

```diff
-       try {
-         Zq(qq)
-       } catch (Eq) {
-         if (Eq instanceof iq) return !1;
-         throw Eq
-       }
-       return !0
-     }
- 
-     function Mq(qq, Eq, gq, Yq, lq) {
-       Array.isArray(Eq) || (Eq = [Eq]);
-       let Oq = Eq => {
-           var gq;
-           return null != (gq = qq.isDirected() ? qq.successors(Eq) : qq.neighbors(Eq)) ? gq : []
-         },
-         mq = {};
- ... (54 more removed lines; see GitHub link above)
+       const zC = wC.map((zC => new Set(CC.map(zC)))),
+         ZC = zC.reduce(((CC, zC) => CC * zC.size), 1),
+         QC = zC.every(((CC, zC) => 1 === CC.size || CC.size === qC[zC]));
+       if (ZC === CC.length && QC) return [wC.filter(((CC, ZC) => 1 === zC[ZC].size)).map((zC => zC(CC[0])))];
+       let bC = null;
+       for (let nC = 0; nC < wC.length; nC++) {
+         if (1 === zC[nC].size) continue;
+         const ZC = WC(CC, wC[nC]).flatMap(FC);
+         (null === bC || ZC.length < bC.length) && (bC = ZC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L783-L787` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L102-L106) · [Before (L783-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L783-L787)

```diff
-       let gq = Date.now();
-       try {
-         return Eq()
-       } finally {
-         console.log(qq + " time: " + (Date.now() - gq) + "ms")
+       const ZC = new Map;
+       for (const wC of CC) {
+         var QC;
+         const CC = zC(wC);
+         ZC.set(CC, [...null !== (QC = ZC.get(CC)) && void 0 !== QC ? QC : [], wC])
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L790-L844` → after: `L110-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L110-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L110-L130) · [Before (L790-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L790-L844)

```diff
- 
-     function Iq(qq, Eq) {
-       return Eq()
-     }
-     var eq = 0;
- 
-     function Dq(qq) {
-       return qq + "" + ++eq
-     }
- 
-     function qE(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       null == Eq && (Eq = qq, qq = 0);
-       let Yq = qq => qq < Eq;
-       gq < 0 && (Yq = qq => Eq < qq);
-       let lq = [];
- ... (39 more removed lines; see GitHub link above)
+   },
+   6594: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       ShaderPackPublishForm: () => RC
+     });
+     var QC = ZC(48),
+       wC = ZC(6560),
+       bC = ZC(189),
+       nC = ZC(5002),
+       fC = ZC(1013),
+       oC = ZC(1388),
+       qC = ZC(1593),
+       FC = ZC(1076),
+       WC = ZC(6596),
+       NC = ZC(6600),
+       MC = ZC(1439),
+ ... (5 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L952-L968` → after: `L134-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L134-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L134-L160) · [Before (L952-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L952-L968)

```diff
-       gq.out ? gq.in ? null == (Oq = qq[gq.out - gq.in + Eq]) || Oq.enqueue(gq) : null == (lq = qq[qq.length - 1]) || lq.enqueue(gq) : null == (Yq = qq[0]) || Yq.enqueue(gq)
-     }
- 
-     function NE(qq, Eq) {
-       var gq;
-       ("greedy" === qq.graph().acyclicer ? uE(qq, (gq = qq, qq => gq.edge(qq).weight)) : function(qq, Eq) {
-         let gq = [],
-           Yq = {},
-           lq = {};
- 
-         function Oq(Eq) {
-           Object.hasOwn(lq, Eq) || (lq[Eq] = !0, Yq[Eq] = !0, qq.outEdges(Eq).forEach((qq => {
-             Object.hasOwn(Yq, qq.w) ? gq.push(qq) : Oq(qq.w)
-           })), delete Yq[Eq])
-         }
- 
- ... (1 more removed lines; see GitHub link above)
+       let {
+         existing: RC,
+         onPublished: xC
+       } = CC;
+       const {
+         t: IC
+       } = (0, gC.y)(), {
+         userContext: iC,
+         isUserContextUpdating: vC
+       } = (0, FC.e)(), [eC, hC] = (0, QC.useState)(null), [KC, YC] = (0, QC.useState)(0), [dC, mC] = (0, QC.useState)(null !== (zC = null === RC || void 0 === RC ? void 0 : RC.name) && void 0 !== zC ? zC : ""), HC = (0, QC.useRef)(dC), EC = (0, QC.useRef)(""), lC = CC => {
+         HC.current = CC, mC(CC)
+       }, [XC, cC] = (0, QC.useState)(null !== (ZC = null === RC || void 0 === RC ? void 0 : RC.description) && void 0 !== ZC ? ZC : ""), uC = (0, QC.useRef)(XC), rC = (0, QC.useRef)(""), sC = CC => {
+         uC.current = CC, cC(CC)
+       }, [TC, aC] = (0, QC.useState)(!1), {
+         loading: tC,
+         error: DC,
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L970-L1119` → after: `L162-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L162-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L162-L180) · [Before (L970-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L970-L1119)

```diff
-           Object.hasOwn(lq, Oq) || (lq[Oq] = !0, Yq[Oq] = !0, null == (xq = qq.outEdges(Oq)) || xq.forEach((lq => {
-             var xq, Aq;
-             Object.hasOwn(Yq, lq.w) || (null == (xq = Eq.node(Oq)) ? void 0 : xq.rank) > (null == (Aq = Eq.node(lq.w)) ? void 0 : Aq.rank) && function(qq, Eq, gq) {
-               let Yq = new Set;
- 
-               function lq(Eq) {
-                 var Oq;
-                 if (qq.sources().includes(Eq)) return !0;
-                 Yq.add(Eq);
-                 for (let mq of null != (Oq = qq.inEdges(Eq)) ? Oq : [])
-                   if ((mq.v !== gq.v || mq.w !== gq.w) && !Yq.has(mq.v) && lq(mq.v)) return !0;
-                 return !1
-               }
-               return lq(Eq)
-             }(qq, lq.w, lq) ? gq.push(lq) : mq(lq.w)
-           })), delete Yq[Oq])
- ... (134 more removed lines; see GitHub link above)
+           if ("" !== HC.current.trim() && HC.current !== EC.current || (EC.current = (0, wC.P)(CC.manifest.name.trim(), wC.y), lC(EC.current)), "" === uC.current.trim() || uC.current === rC.current) rC.current = (0, wC.P)((null !== (QC = CC.manifest.description) && void 0 !== QC  … [truncated]
+           YC((CC => CC + 1))
+         }
+       })), LC = !vC && !iC.isLoggedIn() && !bC.e.offlineMode, UC = dC.trim(), BC = UC.length < wC.A, OC = null !== eC && !1 !== (null === (WC = eC.validation) || void 0 === WC ? void 0 : WC.ok) && !tC && !BC && !LC && !vC;
+       return (0, GC.jsxs)("div", {
+         className: "ShaderPackPublishForm",
+         children: [(0, GC.jsx)("p", {
+           className: "ShaderPackPublishIntro",
+           children: RC ? IC("shaderPackListing:uploadIntro", {
+             minutes: String(wC.E / 6e4)
+           }) : IC("shaderPackListing:publishIntro")
+         }), (0, GC.jsx)(JC, {}), LC && (0, GC.jsx)("div", {
+           className: "ShaderPackPublishNote Warning",
+           children: IC("shaderPackListing:publishNeedsLogin")
+         }), (0, GC.jsx)(NC.e, {
+           busy: tC,
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1121-L1196` → after: `L182-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L182-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L182-L269) · [Before (L1121-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1121-L1196)

```diff
-         }
-       })), mq
-     }
- 
-     function nE(qq, Eq) {
-       arguments.length < 2 && (Eq = qq.nodes()[0]), bE(qq, {}, 1, Eq)
-     }
- 
-     function bE(qq, Eq, gq, Yq, lq) {
-       let Oq = gq,
-         mq = qq.node(Yq);
-       Eq[Yq] = !0;
-       let xq = qq.neighbors(Yq);
-       return xq && xq.forEach((lq => {
-         Object.hasOwn(Eq, lq) || (gq = bE(qq, Eq, gq, lq, Yq))
-       })), mq.low = Oq, mq.lim = gq++, lq ? mq.parent = lq : delete mq.parent, gq
- ... (60 more removed lines; see GitHub link above)
+         }), eC && (0, GC.jsxs)("div", {
+           className: "ShaderPackPublishSummary",
+           children: [(0, GC.jsx)("div", {
+             className: "ShaderPackPublishPackName",
+             children: eC.pack.manifest.name
+           }), (0, GC.jsxs)("div", {
+             className: "ShaderPackPublishPackSize",
+             children: [IC("shaderPackListing:sizeValue", {
+               kilobytes: String((0, PC.S)(eC.sourceBytes))
+             }), " \xb7", " ", IC("shaderPackListing:filesValue", {
+               files: String(eC.pack.files.length)
+             })]
+           }), (0, GC.jsx)(AC, {
+             picked: eC
+           })]
+         }), !RC && (0, GC.jsxs)(GC.Fragment, {
+ ... (72 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1256-L1307` → after: `L273-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L273-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L273-L311) · [Before (L1256-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1256-L1307)

```diff
-       let Eq = kq(qq, "root", {}, "_root"),
-         gq = function(qq) {
-           let Eq = {};
- 
-           function gq(Yq, lq) {
-             let Oq = qq.children(Yq);
-             Oq && Oq.length && Oq.forEach((qq => gq(qq, lq + 1))), Eq[Yq] = lq
-           }
-           return qq.children(YE).forEach((qq => gq(qq, 1))), Eq
-         }(qq),
-         Yq = Object.values(gq),
-         lq = wq(Math.max, Yq) - 1,
-         Oq = 2 * lq + 1;
-       qq.graph().nestingRoot = Eq, qq.edges().forEach((Eq => qq.edge(Eq).minlen *= Oq));
-       let mq = function(qq) {
-         return qq.edges().reduce(((Eq, gq) => Eq + qq.edge(gq).weight), 0)
- ... (36 more removed lines; see GitHub link above)
+       let {
+         picked: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, gC.y)(), {
+         validation: QC
+       } = zC;
+       return null === QC ? (0, GC.jsx)("div", {
+         className: "ShaderPackPublishNote",
+         children: ZC("shaderPackListing:publishUnchecked")
+       }) : QC.ok ? (0, GC.jsxs)(GC.Fragment, {
+         children: [(0, GC.jsxs)("div", {
+           className: "ShaderPackPublishNote Ready",
+           children: [(0, GC.jsx)(fC.c, {
+             name: "circle-check"
+ ... (23 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1310-L1331` → after: `L314-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L314-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L314-L330) · [Before (L1310-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1310-L1331)

```diff
-     var JE = function(qq) {
-       qq.children(YE).forEach((function Eq(gq) {
-         let Yq = qq.children(gq),
-           lq = qq.node(gq);
-         if (Yq.length && Yq.forEach(Eq), lq && Object.hasOwn(lq, "minRank")) {
-           lq.borderLeft = [], lq.borderRight = [];
-           for (let Eq = lq.minRank, Yq = lq.maxRank + 1; Eq < Yq; ++Eq) kE(qq, "borderLeft", "_bl", gq, lq, Eq), kE(qq, "borderRight", "_br", gq, lq, Eq)
-         }
-       }))
-     };
- 
-     function kE(qq, Eq, gq, Yq, lq, Oq) {
-       let mq = {
-           width: 0,
-           height: 0,
-           rank: Oq,
- ... (6 more removed lines; see GitHub link above)
+     const xC = "\0";
+ 
+     function JC() {
+       const {
+         t: CC
+       } = (0, gC.y)(), [zC, ZC] = CC("shaderPackListing:bloxdhubHelp", {
+         site: xC
+       }).split(xC);
+       return (0, GC.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [zC, (0, GC.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: wC.f,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: wC.b
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1336-L1363` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L362) · [Before (L1336-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1336-L1363)

```diff
-       var Eq;
-       let gq = null == (Eq = qq.graph().rankdir) ? void 0 : Eq.toLowerCase();
-       ("bt" === gq || "rl" === gq) && function(qq) {
-         qq.nodes().forEach((Eq => sE(qq.node(Eq)))), qq.edges().forEach((Eq => {
-           var gq;
-           let Yq = qq.edge(Eq);
-           null == (gq = Yq.points) || gq.forEach(sE), Object.hasOwn(Yq, "y") && sE(Yq)
-         }))
-       }(qq), ("lr" === gq || "rl" === gq) && (function(qq) {
-         qq.nodes().forEach((Eq => XE(qq.node(Eq)))), qq.edges().forEach((Eq => {
-           var gq;
-           let Yq = qq.edge(Eq);
-           null == (gq = Yq.points) || gq.forEach(XE), Object.hasOwn(Yq, "x") && XE(Yq)
-         }))
-       }(qq), UE(qq))
-     }
- ... (12 more removed lines; see GitHub link above)
+       return CC === QC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1367-L1368` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L366) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1367-L1368)

```diff
-       let Eq = qq.x;
-       qq.x = qq.y, qq.y = Eq
+       return [...CC.features]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1372-L1438` → after: `L373-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L373-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L373-L382) · [Before (L1372-L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1372-L1438)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         gq = {},
-         Yq = qq.nodes().filter((Eq => !qq.children(Eq).length)),
-         lq = Yq.map((Eq => qq.node(Eq).rank)),
-         Oq = qE(wq(Math.max, lq) + 1).map((() => []));
-       return Yq.sort(((Eq, gq) => qq.node(Eq).rank - qq.node(gq).rank)).forEach((function Yq(lq) {
-         if (gq[lq]) return;
-         gq[lq] = !0;
-         let mq = qq.node(lq);
-         Oq[mq.rank].push(lq);
-         let xq = qq.successors(lq);
-         xq && [...xq].sort(((gq, Yq) => function(gq, Yq) {
-           let lq = qq.node(gq),
-             Oq = qq.node(Yq);
-           return lE(Eq, lq, Oq)
-         }(gq, Yq))).forEach(Yq)
- ... (51 more removed lines; see GitHub link above)
+       if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
+       const zC = [];
+       for (const [ZC, QC] of Object.entries(CC)) {
+         if ("string" !== typeof QC) return `${ZC} isn't text.`;
+         zC.push({
+           path: ZC,
+           source: QC
+         })
+       }
+       return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1440-L1448` → after: `L384-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L384-L388) · [Before (L1440-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1440-L1448)

```diff
-           let Eq = [];
- 
-           function gq(qq) {
-             return Eq => {
-               Eq.merged || (void 0 === Eq.barycenter || void 0 === qq.barycenter || Eq.barycenter >= qq.barycenter) && function(qq, Eq) {
-                 let gq = 0,
-                   Yq = 0;
-                 qq.weight && (gq += qq.barycenter * qq.weight, Yq += qq.weight), Eq.weight && (gq += Eq.barycenter * Eq.weight, Yq += Eq.weight), qq.vs = Eq.vs.concat(qq.vs), qq.barycenter = gq / Yq, qq.weight = Yq, qq.i = Math.min(Eq.i, qq.i), Eq.merged = !0
-               }(qq, Eq)
+           if (0 === CC.length) return "The pack has no .wgsl files.";
+           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
+           const zC = new Set;
+           for (const {
+               path: ZC
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1451-L1462` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L396-L397) · [Before (L1451-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1451-L1462)

```diff
- 
-           function Yq(Eq) {
-             return gq => {
-               gq.in.push(Eq), 0 === --gq.indegree && qq.push(gq)
-             }
-           }
-           for (; qq.length;) {
-             let lq = qq.pop();
-             Eq.push(lq), lq.in.reverse().forEach(gq(lq)), lq.out.forEach(Yq(lq))
-           }
-           return Eq.filter((qq => !qq.merged)).map((qq => EE(qq, ["vs", "i", "barycenter", "weight"])))
-         }(Object.values(gq).filter((qq => !qq.indegree)))
+           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
+         }(zC) ?? zC
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1465-L1514` → after: `L400-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L400-L402) · [Before (L1465-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1465-L1514)

```diff
-     function eE(qq, Eq, gq, Yq, lq) {
-       let Oq = {},
-         mq = null,
-         xq = null,
-         Aq = lq;
-       "boolean" == typeof Eq ? (Aq = Eq, Oq = {}) : Eq && (Oq = Eq, mq = null != gq ? gq : null, xq = null != Yq ? Yq : null);
-       let cq = function(qq, Eq) {
-           let gq = {
-             lhs: [],
-             rhs: []
-           };
-           return qq.forEach((qq => {
-             Eq(qq) ? gq.lhs.push(qq) : gq.rhs.push(qq)
-           })), gq
-         }(qq, (qq => Object.hasOwn(qq, "barycenter"))),
-         uq = cq.lhs,
- ... (34 more removed lines; see GitHub link above)
+     function FC(CC) {
+       const zC = {};
+       for (const ZC of CC) zC[ZC.path] = ZC.source;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1518-L1608` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L406-L407) · [Before (L1518-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1518-L1608)

```diff
-     function qg(qq, Eq, gq, Yq, lq) {
-       var Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq;
-       let dq = null,
-         jq = lq;
-       "boolean" == typeof Yq ? (jq = Yq, dq = null) : void 0 !== Yq && (dq = Yq);
-       let Hq = qq.children(Eq),
-         oq = qq.node(Eq),
-         Pq = oq ? oq.borderLeft : void 0,
-         Qq = oq ? oq.borderRight : void 0,
-         yq = {};
-       Pq && (Hq = Hq.filter((qq => qq !== Pq && qq !== Qq)));
-       let tq = function(qq) {
-         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Eq => {
-           let gq = qq.inEdges(Eq);
-           if (!gq || !gq.length) return {
-             v: Eq
- ... (75 more removed lines; see GitHub link above)
+     function WC(CC, zC) {
+       return CC < zC ? -1 : CC > zC ? 1 : 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1611-L1639` → after: `L410-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L410-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L410-L414) · [Before (L1611-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1611-L1639)

```diff
-     function Eg(qq, Eq, gq, Yq) {
-       Yq || (Yq = qq.nodes());
-       let lq = function(qq) {
-           let Eq;
-           for (; qq.hasNode(Eq = Dq("_root")););
-           return Eq
-         }(qq),
-         Oq = new Jq({
-           compound: !0
-         }).setGraph({
-           root: lq
-         }).setDefaultNodeLabel((Eq => qq.node(Eq)));
-       return Yq.forEach((Yq => {
-         let mq = qq.node(Yq),
-           xq = qq.parent(Yq);
-         if (mq.rank === Eq || mq.minRank <= Eq && Eq <= mq.maxRank) {
- ... (13 more removed lines; see GitHub link above)
+     function NC(CC) {
+       const zC = new TextEncoder;
+       let ZC = 0;
+       for (const {
+           source: QC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1641` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L416-L417) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1641)

```diff
-       })), Oq
+         of CC) ZC += zC.encode(QC).byteLength;
+       return ZC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1645-L1810` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L421-L424) · [Before (L1645-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1645-L1810)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       if ("function" == typeof Eq.customOrder) return void Eq.customOrder(qq, gg);
-       let Yq = Kq(qq),
-         lq = Yg(qq, qE(1, Yq + 1), "inEdges"),
-         Oq = Yg(qq, qE(Yq - 1, -1, -1), "outEdges"),
-         mq = wE(qq, gq);
-       if (Og(qq, mq), Eq.disableOptimalOrderHeuristic) return;
-       let xq, Aq = Number.POSITIVE_INFINITY,
-         cq = Eq.constraints || [];
-       for (let uq = 0, Bq = 0; Bq < 4; ++uq, ++Bq) {
-         lg(uq % 2 ? lq : Oq, uq % 4 >= 2, cq, gq), mq = Fq(qq);
-         let Eq = KE(qq, mq);
-         Eq < Aq ? (Bq = 0, xq = Object.assign({}, mq), Aq = Eq) : Eq === Aq && (xq = structuredClone(mq))
-       }
-       Og(qq, xq)
- ... (150 more removed lines; see GitHub link above)
+       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
+       if (CC.length > oC) return `A file path is over ${oC} characters.`;
+       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
+       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1814-L1920` → after: `L429-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L429-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L429-L436) · [Before (L1814-L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1814-L1920)

```diff
-       let gq, Yq = Fq(qq),
-         lq = Object.assign(function(qq, Eq) {
-           let gq = {};
-           return Eq.length && Eq.reduce((function(Eq, Yq) {
-             let lq = 0,
-               Oq = 0,
-               mq = Eq.length,
-               xq = Yq[Yq.length - 1];
-             return Yq.forEach(((Eq, Aq) => {
-               let cq = function(qq, Eq) {
-                   if (qq.node(Eq).dummy) {
-                     let gq = qq.predecessors(Eq);
-                     if (gq) return gq.find((Eq => qq.node(Eq).dummy))
-                   }
-                 }(qq, Eq),
-                 uq = cq ? qq.node(cq).order : mq;
- ... (91 more removed lines; see GitHub link above)
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const QC = new Map;
+       zC.forEach(((CC, zC) => {
+         let {
+           numAnimStates: ZC,
+           animStartIdx: wC
+         } = CC;
+         for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1922-L2014` → after: `L438-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L438-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L438-L442) · [Before (L1922-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L1922-L2014)

```diff
-       let mq = function(qq, Eq) {
-         return Object.values(Eq).reduce(((Eq, gq) => {
-           let Yq = Number.NEGATIVE_INFINITY,
-             lq = Number.POSITIVE_INFINITY;
-           Object.entries(gq).forEach((Eq => {
-             let [gq, Oq] = Eq, mq = function(qq, Eq) {
-               return qq.node(Eq).width
-             }(qq, gq) / 2;
-             Yq = Math.max(Oq + mq, Yq), lq = Math.min(Oq - mq, lq)
-           }));
-           let Oq = Yq - lq;
-           return Oq < Eq[0] && (Eq = [Oq, gq]), Eq
-         }), [Number.POSITIVE_INFINITY, null])[1]
-       }(qq, Oq);
-       return function(qq, Eq) {
-           let gq = Object.values(Eq),
- ... (77 more removed lines; see GitHub link above)
+       const wC = Object.entries(CC),
+         bC = new Map;
+       for (const [SC, pC] of wC) {
+         const CC = gC.exec(SC);
+         "1" === CC?.[2] && bC.set(CC[1], pC + 1)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L2016-L2077` → after: `L444-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L444-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L444-L458) · [Before (L2016-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L2016-L2077)

```diff
-     }
- 
-     function Vg(qq, Eq, gq) {
-       var Yq;
-       let lq = qq.nodes().filter((Eq => qq.children(Eq).length)),
-         Oq = {};
-       lq.forEach((Yq => {
-         let lq = qq.node(Yq);
-         if (lq && lq.rankdir) {
-           let mq = new Jq({
-             multigraph: !0,
-             compound: !0
-           });
-           mq.setGraph({
-             rankdir: lq.rankdir
-           });
- ... (46 more removed lines; see GitHub link above)
+       const nC = CC => {
+           const zC = gC.exec(CC);
+           return zC && bC.has(zC[1]) ? {
+             root: zC[1],
+             rotation: Number(zC[2]) - 1
+           } : null
+         },
+         fC = new Set(wC.map((CC => {
+           let [zC] = CC;
+           return nC(zC)?.root ?? zC
+         }))),
+         oC = (CC, ZC) => {
+           const QC = CC.replace(/_?0$/, "");
+           return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
+         },
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L2079-L2083` → after: `L460-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L460-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L460-L471) · [Before (L2079-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L2079-L2083)

```diff
-       lq.forEach((Eq => {
-         let gq = qq.node(Eq);
-         gq && gq.rankdir && Oq[Eq] && xq.set(Eq, (qq.children(Eq) || []).filter((qq => qq !== Eq)))
-       }));
-       let Aq = new Set([...xq.values()].flat()),
+       for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
+       const FC = wC.reduce(((CC, zC) => {
+           let [, ZC] = zC;
+           return Math.max(CC, ZC + 1)
+         }), 0),
+         WC = Array.from({
+           length: FC
+         }, ((CC, zC) => ({
+           id: zC + 1,
+           rotation: 0
+         }))),
+         NC = new Map,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L2085-L2177` → after: `L473-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L473-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L473-L497) · [Before (L2085-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L2085-L2177)

```diff
-       xq.forEach(((Eq, gq) => {
-         Aq.has(gq) || cq.set(gq, (Eq => {
-           let gq = [],
-             Yq = (qq.children(Eq) || []).filter((qq => qq !== Eq));
-           for (; Yq.length > 0;) {
-             let Eq = Yq.shift();
-             gq.push(Eq), (qq.children(Eq) || []).filter((qq => qq !== Eq)).forEach((qq => Yq.push(qq)))
-           }
-           return gq
-         })(gq))
-       }));
-       let uq = new Set([...cq.values()].flat()),
-         Bq = qq => {
-           for (let [Eq, gq] of cq)
-             if (gq.includes(qq)) return Eq;
-           return qq
- ... (77 more removed lines; see GitHub link above)
+       for (const [gC, SC] of wC) {
+         const CC = nC(gC),
+           zC = QC.get(SC);
+         if (void 0 !== zC) {
+           const ZC = qC.get(zC);
+           MC.set(gC, {
+             name: gC,
+             texture: ZC,
+             kind: "frame"
+           }), CC && !MC.has(CC.root) && MC.set(CC.root, {
+             name: CC.root,
+             texture: ZC,
+             kind: "frame"
+           });
+           continue
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L2179-L2488` → after: `L499-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L499-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L499-L520) · [Before (L2179-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L2179-L2488)

```diff
-             node: Yq,
-             parent: lq
-           } = Eq;
-           qq.setNode(gq, Yq), void 0 !== lq && qq.setParent(gq, lq)
-         })), mq.forEach((Eq => {
-           let {
-             edge: gq,
-             label: Yq
-           } = Eq;
-           qq.setEdge(gq, Yq)
-         })), Yq.nodes().forEach((Eq => {
-           if (Eq === gq) return;
-           let lq = Yq.node(Eq),
-             Oq = qq.node(Eq);
-           Oq && lq && "number" == typeof lq.x && "number" == typeof lq.y && (Oq.x = uq + (lq.x - Wq), Oq.y = Bq + (lq.y - Nq))
-         })), delete cq._dagreClusterSubgraph
- ... (294 more removed lines; see GitHub link above)
+             rotation: CC.rotation
+           }, NC.set(ZC, zC), MC.set(gC, {
+             name: gC,
+             texture: ZC,
+             kind: "rotation"
+           })
+         } else NC.set(ZC, SC + 1)
+       }
+       for (const gC of NC.keys()) MC.delete(gC);
+       for (const [gC, SC] of ZC) {
+         const CC = NC.get(SC);
+         void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
+       }
+       return {
+         named: [...NC].sort(((CC, zC) => {
+           let [ZC] = CC, [QC] = zC;
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L2490-L2493` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/112.js#L522-L524) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/112.js#L2490-L2493)

```diff
-         }))
-       }(qq))), {
-         graph: qq,
-         rawNodes: cq
+         })),
+         aliases: [...MC.values()],
+         layers: WC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/113.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/113.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L2)

```diff
- export const ids = [113];
+ export const ids = [113, 116, 136, 137];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L474` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L14) · [Before (L4-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L474)

```diff
-   37266: (qq, Eq, gq) => {
-     var Yq = {
-       "./67/67_Atlas.png": 27551,
-       "./67/67_Model.glb": 33537,
-       "./67/67_Reconstructed.glb": 33540,
-       "./67/variations/0_67_default.png": 27554,
-       "./Armour Collector/Armour Collector_Atlas.png": 27560,
-       "./Armour Collector/Armour Collector_Model.glb": 33546,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 33554,
-       "./Armour Collector/variations/0_armour collector_default.png": 27562,
-       "./Bear/BearSaddle_Atlas.png": 27571,
-       "./Bear/Bear_Atlas.png": 27573,
-       "./Bear/Bear_Model.glb": 33560,
-       "./Bear/variations/0_bear_default.png": 27582,
-       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27588,
-       "./Bobino Musculino/Bobino Musculino_Model.glb": 33563,
- ... (455 more removed lines; see GitHub link above)
+   4998: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC.j,
+       f: () => wC,
+       i: () => QC.q
+     });
+     var QC = ZC(5002);
+     const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
+       strict: CC,
+       program: zC
+     })))))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L476-L478` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L16-L19) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L476-L478)

```diff
-   38255: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Oq
+   40318: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => WC,
+       installListedShaderPack: () => FC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L480-L539` → after: `L21-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L21-L32) · [Before (L480-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L480-L539)

```diff
-     var Yq = gq(38258),
-       lq = gq.n(Yq);
- 
-     function Oq(qq) {
-       var Eq = [],
-         gq = [],
-         Yq = null;
- 
-       function Oq(gq, lq) {
-         var Oq = Yq[gq],
-           xq = Yq[lq];
-         Oq && xq && (function(qq, Eq, gq, Yq) {
-           if (qq.qxq) return Eq.qxq ? function(qq, Eq) {
-             var gq = (qq[3] - qq[0]) / 2,
-               Yq = (Eq[3] - Eq[0]) / 2,
-               lq = qq[0] + gq - (Eq[0] + Yq),
- ... (44 more removed lines; see GitHub link above)
+     var QC = ZC(6560),
+       wC = ZC(5002),
+       bC = ZC(1149),
+       nC = ZC(6609),
+       fC = ZC(4998),
+       oC = ZC(6658),
+       qC = ZC(6651);
+     async function FC(CC) {
+       const zC = await (0, nC.loadPageShaderPackCompiler)();
+       if (null === zC) return {
+         kind: "failed",
+         reason: "compiler"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L541-L552` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L34-L37) · [Before (L541-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L541-L552)

```diff
- 
-       function mq(qq, Eq) {
-         var gq = (qq[3] - qq[0]) / 2,
-           Yq = qq[0] + gq,
-           lq = qq[2] + gq,
-           Oq = xq(Yq, Eq[0], Eq[3]) - Yq,
-           mq = xq(lq, Eq[2], Eq[5]) - lq;
-         return Oq * Oq + mq * mq <= gq * gq
-       }
- 
-       function xq(qq, Eq, gq) {
-         return qq < Eq ? Eq : qq > gq ? gq : qq
+       const ZC = await WC(CC, zC);
+       return "failed" === ZC.kind ? ZC : await (0, oC.saveShaderPack)(ZC.stored, zC) ? ((0, oC.markShaderPackChangePending)(), ZC) : {
+         kind: "failed",
+         reason: "save"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L555-L573` → after: `L40-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L40-L56) · [Before (L555-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L555-L573)

```diff
-   },
-   38322: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return {
-         name: "collideTerrain",
-         order: 0,
-         state: {
-           callback: null
-         },
-         Fy: function(Eq, gq) {
-           var Yq = qq.entities;
-           Yq.gxq(Eq) && (Yq.sqq(Eq).body.qW = function(gq) {
-             var Yq = qq.Iy.Yxq(Eq).callback;
-             Yq && Yq(gq, Eq)
-           })
-         },
- ... (3 more removed lines; see GitHub link above)
+     async function WC(CC, zC) {
+       const ZC = await async function(CC) {
+         let {
+           packId: zC,
+           sourceHash: ZC
+         } = CC;
+         try {
+           const CC = await fetch(`${bC.clientSideServerUrls.s3Url}/${(0,QC.J)(zC,ZC)}`, {
+             headers: {
+               Accept: "application/json"
+             }
+           });
+           if (!CC.ok) return console.error(`Failed to download shader pack ${zC} (${CC.status})`), null;
+           const wC = await CC.json();
+           return "object" !== typeof wC || null === wC ? (console.error(`Shader pack ${zC}'s source isn't an object`), null) : wC
+         } catch (wC) {
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L575-L587` → after: `L58-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L58-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L58-L83) · [Before (L575-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L575-L587)

```diff
-       }
-     }
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Yq
-     })
-   },
-   38348: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return {
-         name: "Xqq",
-         order: 99,
-         state: {
-           NJ: 1.5
+       }(CC);
+       if (null === ZC) return {
+         kind: "failed",
+         reason: "download"
+       };
+       if (!(0, fC.i)(ZC.apiVersion)) return {
+         kind: "failed",
+         reason: "apiVersion"
+       };
+       const nC = (0, wC.s)(ZC.files);
+       if ("string" === typeof nC) return console.error(`A listed shader pack breaks the pack rules: ${nC}`), {
+         kind: "failed",
+         reason: "invalid"
+       };
+       const FC = await (0, qC.c)(zC, nC);
+       if (!1 === (null === FC || void 0 === FC ? void 0 : FC.ok)) return {
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L589-L593` → after: `L85-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L85-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L85-L92) · [Before (L589-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L589-L593)

```diff
-         Fy: null,
-         OJ: null,
-         system: function(Eq, gq) {
-           for (var Yq = qq.camera.xI, Oq = 0; Oq < gq.length; Oq++) lq(gq[Oq], Yq, qq)
-         }
+         files: nC
+       };
+       return {
+         kind: "loaded",
+         stored: (0, oC.toStoredShaderPack)(WC, FC, {
+           packId: CC.packId,
+           sourceHash: CC.sourceHash
+         })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L598-L602` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L123-L128) · [Before (L598-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L598-L602)

```diff
-       if (gq.Iy.lxq(qq.Zk)) {
-         var Yq = gq.Iy.SEq(qq.Zk).mesh;
-         if (Yq.metadata) {
-           var lq = Eq < qq.NJ;
-           gq.Ma.t5(Yq, !lq)
+       return {
+         manifest: CC.manifest,
+         files: (0, QC.w)(CC.files),
+         validation: zC,
+         ...ZC && {
+           listing: ZC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L618-L620` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L134-L139) · [Before (L618-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L618-L620)

```diff
-       let Eq = 0;
-       const gq = lq().create(),
-         Yq = lq().create();
+       return Object.keys(CC.files).map((zC => ({
+         path: zC,
+         source: CC.files[zC]
+       })))
+     }
+     let MC = Promise.resolve();
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L622-L667` → after: `L141-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L141-L143) · [Before (L622-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L622-L667)

```diff
-       function Oq(mq, xq) {
-         if (mq.Oxq === Eq) return;
-         mq.Oxq = Eq;
-         const Aq = qq.Iy.hgq(mq.FN);
-         Aq && Oq(Aq, xq);
-         const cq = qq.Iy.qI(mq.Zk),
-           uq = qq.Iy.qI(mq.FN);
-         if (uq)
-           if (mq.Tgq ? mq.Tgq(gq, xq, mq.offset) : lq().copy(gq, mq.offset), xq) lq().add(cq.dD, uq.dD, gq);
-           else {
-             const Eq = cq.BW || qq.BW;
-             for (let qq = 0; qq < 3; qq++) Yq[qq] = uq.position[qq] - Eq[qq] + gq[qq];
-             qq.Iy.xxq(mq.Zk, Yq)
-           }
-         else mq.Mgq || (mq.mxq && mq.mxq(mq.Zk), qq.Iy.Lk(mq.Zk, qq.Iy.names.HZ))
-       }
- ... (30 more removed lines; see GitHub link above)
+     function gC(CC) {
+       const zC = MC.then(CC);
+       return MC = zC.catch((() => {})), zC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L682-L687` → after: `L147-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L147-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L147-L162) · [Before (L682-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L682-L687)

```diff
-       const gq = Eq.Plq || Eq;
-       void 0 === gq.uR?.aLightLevels && (gq.xR("aLightLevels", 4), gq.uR.aLightLevels = (0, Oq.m)());
-       const {
-         uR: Yq
-       } = Eq;
-       !Yq || void 0 !== Yq.aLightLevels && null !== Yq.aLightLevels && Yq.aLightLevels !== gq.uR?.aLightLevels || (Yq.aLightLevels = (0, Oq.m)()), qq.Ma.Agq && gq.material && qq.Ma.Agq(gq.material)
+       return gC((() => PC(CC, zC)))
+     }
+ 
+     function pC(CC, zC, ZC) {
+       return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
+     }
+     async function PC(CC, zC) {
+       const ZC = await bC.g.setItem(fC.c, CC);
+       return ZC && YC(CC, zC), ZC
+     }
+     async function GC() {
+       await bC.g.removeItem(fC.c), bC.i.removeItem(nC.b)
+     }
+ 
+     function RC() {
+       return gC(GC)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L691-L693` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L166) · [Before (L691-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L691-L693)

```diff
-       const gq = (0, Oq.i)(Eq);
-       for (const Yq of gq) cq(qq, Yq);
-       return gq
+       return "active" === xC(CC, zC).kind
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L696-L752` → after: `L169-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L169-L190) · [Before (L696-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L696-L752)

```diff
-     function Bq(qq) {
-       return {
-         name: "mesh",
-         order: 100,
-         state: {
-           KJ: null,
-           egq: null,
-           mesh: null,
-           offset: null,
-           uxq: null,
-           yV: !1,
-           Bxq: !0,
-           qYq: !0,
-           Wxq: null,
-           Nxq: null,
-           axq: -1
- ... (41 more removed lines; see GitHub link above)
+     function xC(CC, zC) {
+       var ZC;
+       return null === CC ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : iC(CC) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : eC(CC, zC) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : CC.validation.ok ? {
+         kind: "active"
+ ... (6 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L755-L769` → after: `L193-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L193-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L193-L199) · [Before (L755-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L755-L769)

```diff
-   },
-   38244: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       PhysicsState: () => Oq,
-       default: () => mq,
-       setFloatingYValue: () => cq,
-       oxq: () => Aq,
-       Pxq: () => uq
-     });
-     var Yq = gq(317),
-       lq = gq.n(Yq);
-     class Oq {
-       constructor() {
-         this.body = null, this.QY = null, this.wB = null
-       }
+ 
+     function JC() {
+       bC.k.setItem(qC, performance.timeOrigin)
+     }
+ 
+     function IC() {
+       return bC.k.getItem(qC) === performance.timeOrigin
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L773-L800` → after: `L203-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L203-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L203-L207) · [Before (L773-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L773-L800)

```diff
-       return {
-         name: "physics",
-         order: 40,
-         state: new Oq,
-         Fy: function(Eq, gq) {
-           gq.wB = qq, gq.QY = null, gq.body = qq.physics.OW(), Aq(gq, qq.Iy.qI(gq.Zk))
-         },
-         OJ: function(Eq, gq) {
-           if (qq.Iy.hasPosition(gq.Zk)) {
-             var Yq = qq.Iy.qI(gq.Zk);
-             uq(gq, Yq), Bq(gq, Yq, 0, !1)
-           }
-           qq.physics.mW(gq.body)
-         },
-         system: function(Eq, gq) {
-           for (var Yq = 0; Yq < gq.length; Yq++) {
- ... (12 more removed lines; see GitHub link above)
+       return !(0, wC.i)(CC.manifest.apiVersion)
+     }
+ 
+     function vC(CC) {
+       return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L805-L807` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L211-L212) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L805-L807)

```diff
-       var gq = qq.body.GB,
-         Yq = Eq.Cgq;
-       lq().copy(gq.base, Yq), lq().set(gq.vec, Eq.width, Eq.height, Eq.width), lq().add(gq.max, gq.base, gq.vec), cq(qq, Eq, qq.QY)
+       var ZC;
+       return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L810-L813` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L215-L218) · [Before (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L810-L813)

```diff
-     function cq(qq, Eq, gq) {
-       qq.QY = gq;
-       const Yq = Eq.BW ?? qq.wB.BW;
-       qq.body.kF = null !== gq ? gq - Yq[1] : null
+     function hC(CC) {
+       return gC((async () => {
+         YC(await (0, fC.e)(!0), CC)
+       }))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L816-L820` → after: `L221-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L221-L224) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L816-L820)

```diff
-     function uq(qq, Eq) {
-       var gq = qq.body.GB.base,
-         Yq = Eq.width / 2,
-         lq = Eq.PEq;
-       lq[0] = gq[0] + Yq, lq[1] = gq[1], lq[2] = gq[2] + Yq
+     function KC() {
+       return gC((async () => {
+         bC.i.removeItem(nC.b)
+       }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L823-L825` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L227-L228) · [Before (L823-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L823-L825)

```diff
-     function Bq(qq, Eq, gq, Yq) {
-       var Oq = qq.body.JV;
-       lq().sq(xq, Eq.PEq, Oq, gq), Yq && lq().lerp(xq, Eq.dD, xq, .3), lq().copy(Eq.dD, xq)
+     function YC(CC, zC) {
+       AC(CC, zC) ? bC.i.setItem(nC.b, !0) : bC.i.removeItem(nC.b)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L828` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L231) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L828)

```diff
-   38240: (qq, Eq, gq) => {
+   6630: (CC, zC, ZC) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L830-L832` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L233-L234) · [Before (L830-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L830-L832)

```diff
-       PositionState: () => lq,
-       default: () => Oq,
-       yxq: () => mq
+       loadShaderPackTextures: () => nC,
+       shaderPackTextures: () => fC
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L834-L839` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L236-L238) · [Before (L834-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L834-L839)

```diff
-     const Yq = gq(317);
-     class lq {
-       constructor() {
-         this.position = null, this.width = .8, this.height = .8, this.PEq = null, this.dD = null, this.Cgq = null, this.BW = null
-       }
-     }
+     var QC = ZC(5002);
+     let wC = null,
+       bC = null;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L841-L860` → after: `L240-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L240-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L240-L248) · [Before (L841-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L841-L860)

```diff
-     function Oq(qq) {
-       return {
-         name: "position",
-         order: 41,
-         state: new lq,
-         Fy: function(Eq, gq) {
-           var lq = [0, 0, 0];
-           gq.position && Yq.copy(lq, gq.position), gq.position = lq, gq.PEq = Yq.create(), gq.dD = Yq.create(), gq.Cgq = new Float32Array(6), qq.TEq(gq.position, null, gq.PEq), Yq.copy(gq.dD, gq.PEq), mq(gq)
-         },
-         OJ: null,
-         system: function(Eq, gq) {
-           for (var Yq = 0; Yq < gq.length; Yq++) {
-             var lq = gq[Yq],
-               Oq = lq.BW ?? qq.BW,
-               xq = lq.position,
-               Aq = lq.PEq;
- ... (4 more removed lines; see GitHub link above)
+     function nC() {
+       return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: zC,
+           textureNameToIndex: ZC,
+           textureAnimationData: bC
+         } = CC;
+         return wC ??= (0, QC.k)(ZC, bC, zC), wC
+       })), bC
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L863-L887` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L251-L253) · [Before (L863-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L863-L887)

```diff
-     function mq(qq) {
-       var Eq = qq.width / 2,
-         gq = qq.PEq,
-         Yq = qq.Cgq;
-       Yq[0] = gq[0] - Eq, Yq[1] = gq[1], Yq[2] = gq[2] - Eq, Yq[3] = gq[0] + Eq, Yq[4] = gq[1] + qq.height, Yq[5] = gq[2] + Eq
-     }
-   },
-   38248: (qq, Eq, gq) => {
-     function Yq(qq) {
-       var Eq = "txq";
-       return {
-         name: Eq,
-         order: 99,
-         state: {
-           time: 100.1
-         },
- ... (9 more removed lines; see GitHub link above)
+     function fC() {
+       if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return wC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L893` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L256) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L893)

```diff
-   38220: (qq, Eq, gq) => {
+   6651: (CC, zC, ZC) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L895-L897` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L258-L259) · [Before (L895-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L895-L897)

```diff
-       c: () => dq,
-       g: () => oq,
-       h: () => Nq
+       b: () => oC,
+       c: () => fC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L899-L1133` → after: `L261-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L261-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L261-L271) · [Before (L899-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L899-L1133)

```diff
-     var Yq = gq(38224),
-       lq = gq.n(Yq),
-       Oq = gq(317),
-       mq = gq.n(Oq),
-       xq = gq(38240),
-       Aq = gq(38244);
-     class cq {
-       constructor() {
-         this.runs = 0, this.loopMs = 0, this.byComponent = new Map
-       }
-       reset() {
-         this.runs = 0, this.loopMs = 0, this.byComponent.clear()
-       }
-       addSystem(qq, Eq, gq) {
-         let Yq = this.byComponent.get(qq);
-         Yq || (Yq = {
- ... (219 more removed lines; see GitHub link above)
+     var QC = ZC(6658),
+       wC = ZC(6630),
+       bC = ZC(94);
+     const nC = 100;
+     async function fC(CC, zC) {
+       var ZC;
+       let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZC = navigator.gpu) && void 0 !== ZC ? ZC : null;
+       const nC = CC.K3(zC, (0, wC.shaderPackTextures)());
+       if (nC.errors.length > 0) return qC(CC, nC.errors, nC.offInStrict);
+       const fC = await async function(CC) {
+         if (!CC) return null;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1135-L1139` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L273-L274) · [Before (L1135-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1135-L1139)

```diff
-           this.zk(cq, this.names.position, {
-             position: qq || mq().create(),
-             width: Eq,
-             height: gq
-           })
+           const zC = await (0, bC.z)(CC);
+           return zC ? await zC.requestDevice() : null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1141-L1149` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L276) · [Before (L1141-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1141-L1149)

```diff
-           return console.error(Wq.stack), cq
-         }
-         if (Oq) {
-           this.zk(cq, this.names.physics);
-           var uq = this.FX(cq),
-             Bq = this.names.txq;
-           uq.gW = function() {
-             Aq.Mxq(cq, Bq)
-           }
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", zC), null
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1151-L1156` → after: `L278-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L278-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L278-L308) · [Before (L1151-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1151-L1156)

```diff
-         return Yq && (lq || (lq = mq().create()), this.zk(cq, this.names.mesh, {
-           mesh: Yq,
-           offset: lq
-         })), xq && this.zk(cq, this.names.GN, {
-           size: Eq
-         }), cq
+       }(QC);
+       if (!fC) return null;
+       let oC = !1;
+       fC.lost.then((() => {
+         oC = !0
+       }));
+       try {
+         const zC = await Promise.all(nC.validationModules.map((zC => async function(CC, zC, ZC) {
+           zC.pushErrorScope("validation");
+           const QC = zC.createShaderModule({
+               code: ZC.code
+             }),
+             wC = zC.popErrorScope(),
+             {
+               messages: bC
+             } = await QC.getCompilationInfo(),
+ ... (15 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1159-L1163` → after: `L311-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L311-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L311-L324) · [Before (L1159-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1159-L1163)

```diff
- 
-     function jq(qq, Eq, gq, Yq, lq) {
-       var Oq = qq[Eq] + gq,
-         mq = qq[Eq] + Yq;
-       Math.abs(Oq - Math.round(Oq)) < .002 && (qq[Eq] += .002), Math.abs(mq - Math.round(mq)) < .001 && (qq[Eq] -= .001)
+     async function oC(CC, zC) {
+       var ZC;
+       if (!(0, QC.shaderPackNeedsCheck)(CC, zC) || (0, QC.isOtherApiVersion)(CC)) return CC;
+       const wC = await fC(zC, (0, QC.storedShaderPackFiles)(CC));
+       if (!wC) return CC;
+       const bC = !1 === (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) && !CC.validation.fromRecheck,
+         nC = {
+           ...CC,
+           validation: bC ? wC : {
+             ...wC,
+             fromRecheck: !0
+           }
+         };
+       return await (0, QC.replaceShaderPack)(CC, nC, zC) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), nC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1166-L1167` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L327-L334) · [Before (L1166-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1166-L1167)

```diff
-     function Hq(qq, Eq) {
-       return !(qq[0] > Eq[3]) && (!(qq[1] > Eq[4]) && (!(qq[2] > Eq[5]) && (!(qq[3] < Eq[0]) && (!(qq[4] < Eq[1]) && !(qq[5] < Eq[2])))))
+     function qC(CC, zC, ZC) {
+       return {
+         headerVersion: (0, QC.pageShaderPackValidationVersion)(CC),
+         ok: 0 === zC.length,
+         errors: zC.slice(0, nC),
+         moreErrors: Math.max(0, zC.length - nC),
+         offInStrict: ZC
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1171` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L337) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1171)

```diff
-   37489: (qq, Eq, gq) => {
+   5002: (CC, zC, ZC) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1173-L1174` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L339) · [Before (L1173-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1173-L1174)

```diff
-       b: () => YE,
-       e: () => cE,
+       c: () => fC,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1176-L1178` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L341-L343) · [Before (L1176-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1176-L1178)

```diff
-       h: () => EE,
-       l: () => wq,
-       n: () => Kq,
+       j: () => QC,
+       k: () => SC,
+       m: () => WC,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1181-L1184` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L347-L348) · [Before (L1181-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1181-L1184)

```diff
-       t: () => Cq,
-       x: () => uE,
-       z: () => eq,
-       D: () => qE
+       w: () => FC,
+       y: () => NC
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1186-L1217` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L350) · [Before (L1186-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1186-L1217)

```diff
-     gq(317), gq(2778);
-     var Yq = gq(37497),
-       lq = gq(37131),
-       Oq = gq(37499),
-       mq = gq(37417),
-       xq = gq(37451),
-       Aq = gq(37485),
-       cq = gq(37465),
-       uq = gq(37586);
-     class Bq {
-       constructor() {
-         this.pending = []
-       }
-       get size() {
-         return this.pending.length
-       }
- ... (16 more removed lines; see GitHub link above)
+     const QC = 5;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1219-L1225` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L352-L353) · [Before (L1219-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1219-L1225)

```diff
-     function Wq(qq, Eq, gq, Yq, lq, Oq) {
-       if ("number" !== typeof gq) {
-         for (let Yq = 0; Yq < gq.length; Yq++)
-           if (!Nq(qq[Eq + Yq], gq[Yq])) return !1;
-         return !0
-       }
-       return !!Nq(qq[Eq], gq) && (void 0 === Yq || !!Nq(qq[Eq + 1], Yq) && (void 0 === lq || !!Nq(qq[Eq + 2], lq) && (void 0 === Oq || Nq(qq[Eq + 3], Oq))))
+     function wC(CC) {
+       return CC === QC
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1228-L1230` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L356-L357) · [Before (L1228-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1228-L1230)

```diff
-     function Nq(qq, Eq) {
-       const gq = Math.fround(Eq);
-       return qq === gq && (0 !== gq || 1 / qq === 1 / gq)
+     function bC(CC) {
+       return [...CC.features]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1233-L37838` → after: `L363-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L363-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L363-L371) · [Before (L1233-L37838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L1233-L37838)

```diff
-     function aq(qq, Eq, gq, Yq) {
-       const lq = qq.getBuffer();
-       if (!lq || !qq.isUpdatable()) return;
-       const Oq = qq._engine;
-       Oq.Ra >= 2 ? (Vq(Oq, lq, Eq, gq, Yq), dq(Oq)) : qq.updateDirectly(Eq.subarray(gq, Yq), gq)
-     }
- 
-     function Vq(qq, Eq, gq, Yq, lq) {
-       qq.bindArrayBuffer(Eq), qq._gl.bufferSubData(qq._gl.ARRAY_BUFFER, Yq * Float32Array.BYTES_PER_ELEMENT, gq, Yq, lq - Yq)
-     }
- 
-     function dq(qq) {
-       qq._cachedVertexBuffers = null
-     }
-     class jq {
-       constructor(qq) {
- ... (36590 more removed lines; see GitHub link above)
+     function qC(CC) {
+       if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
+       const zC = [];
+       for (const [ZC, QC] of Object.entries(CC)) {
+         if ("string" !== typeof QC) return `${ZC} isn't text.`;
+         zC.push({
+           path: ZC,
+           source: QC
+         })
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L37840-L37854` → after: `L373-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L373-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L373-L385) · [Before (L37840-L37854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L37840-L37854)

```diff
-       qq[Hq[12]] = Hq[9], Eq(114) in Qq && function(...qq) {
-         function Eq(...qq) {
-           return qq[Hq[12]] = Hq[0], qq[Hq[2]][Hq[0]] * Hq[63] + (qq[Hq[2]][Hq[2]] < Hq[2] ? Hq[62] | qq[Hq[2]][Hq[2]] : qq[Hq[2]][Hq[2]])
-         }
- 
-         function gq(...qq) {
-           switch (qq[Hq[12]] = Hq[0], ((qq[Hq[2]] & Hq[62]) !== Hq[2]) * Hq[0] + (qq[Hq[2]] < Hq[2]) * Hq[18]) {
-             case Hq[2]:
-               return [qq[Hq[2]] % Hq[62], Math.trunc(qq[Hq[2]] / Hq[63])];
-             case Hq[0]:
-               return [qq[Hq[2]] % Hq[62] - Hq[62], Math.trunc(qq[Hq[2]] / Hq[63]) + Hq[0]];
-             case Hq[18]:
-               return [((qq[Hq[2]] + Hq[62]) % Hq[62] + Hq[62]) % Hq[62], Math.round(qq[Hq[2]] / Hq[63])];
-             case Hq[14]:
-               return [qq[Hq[2]] % Hq[62], Math.trunc(qq[Hq[2]] / Hq[63])]
+       return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
+         function(CC) {
+           if (0 === CC.length) return "The pack has no .wgsl files.";
+           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
+           const zC = new Set;
+           for (const {
+               path: ZC
+             }
+             of CC) {
+             const CC = MC(ZC);
+             if (null !== CC) return CC;
+             if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
+             zC.add(ZC)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L37856-L37863` → after: `L387-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L387-L388) · [Before (L37856-L37863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L37856-L37863)

```diff
-         }
-         qq[Hq[12]] = Hq[2], hq(qq[Hq[15]] = Eq([Hq[18], Hq[9]]), qq[Hq[0]] = Eq([Hq[0], Hq[18]]), qq[-Hq[64]] = qq[Hq[15]] + qq[Hq[0]], qq[Hq[35]] = qq[-Hq[64]] - qq[Hq[0]], qq[Hq[30]] = qq[Hq[35]] * Hq[18], qq[-Hq[65]] = qq[Hq[30]] / Hq[18], console.log(gq(qq[-Hq[64]])), console … [truncated]
-       }(), hq(lq()[Eq(Hq[67])](yq, qq[Hq[2]][Hq[66]][Hq[2]], Hq[2], qq[Hq[2]][Hq[66]][Hq[18]]), lq()[Eq(Hq[67])](tq, Hq[2], Hq[2], Hq[0]), lq().tm(tq, tq, lq()[Eq(116)], qq[Hq[0]]));
-       const gq = lq()[Eq(117)](yq, tq);
-       lq().sq(rq, yq, tq, -gq);
-       const Yq = qq[Hq[14]] / Hq[68],
-         Oq = Hq[0] - Math[Eq(118)](-qq[Hq[18]] * Yq);
-       hq(lq()[Eq(119)](rq, rq, -Oq * qq[Hq[2]].Am / Yq), qq[Hq[2]][Eq(120) + Eq(121)](rq))
+           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
+         }(zC) ?? zC
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38087-L38089` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L392-L394) · [Before (L38087-L38089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38087-L38089)

```diff
-       for (const Eq of lq.c)
-         if (Bq[Eq].meshItemName === qq) return Eq;
-       return null
+       const zC = {};
+       for (const ZC of CC) zC[ZC.path] = ZC.source;
+       return zC
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38093-L38276` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L398) · [Before (L38093-L38276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38093-L38276)

```diff
-       const gq = qq.validBlockIds;
-       if (Array.isArray(gq)) return gq.includes(Eq);
-       if (Eq === Aq) return !1;
-       if ("solidBlocks" === gq) return !0 !== Oq.i[Eq].wW;
-       if ("solidBlocksOrFluid" === gq) return !0;
-       throw new Error(`Unsupported validBlockIds for ${Eq}: ${JSON.stringify(gq)}`)
-     }
-     const Vq = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
-       },
-       dq = {
-         "Yellow Balloon": {
- ... (168 more removed lines; see GitHub link above)
+       return CC < zC ? -1 : CC > zC ? 1 : 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38280-L38325` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L402-L405) · [Before (L38280-L38325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38280-L38325)

```diff
-       return qq === Yq.t.DEFAULT || function(qq) {
-         return Qq.has(qq) || yq.has(qq)
-       }(qq)
-     }
-   },
-   37183: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq,
-       g: () => Oq,
-       k: () => Yq,
-       l: () => lq
-     });
-     let Yq = function(qq) {
-         return qq[qq.Linear = 0] = "Linear", qq[qq.CatmullRomSpline = 1] = "CatmullRomSpline", qq
-       }({}),
-       lq = function(qq) {
- ... (30 more removed lines; see GitHub link above)
+       const zC = new TextEncoder;
+       let ZC = 0;
+       for (const {
+           source: QC
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38342` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L412-L415) · [Before (L38342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38342)

```diff
-       return qq.JF && qq.Am > 0 && qq.depenetrate && null === qq.kF
+       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
+       if (CC.length > oC) return `A file path is over ${oC} characters.`;
+       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
+       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38344-L38347` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L417) · [Before (L38344-L38347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38344-L38347)

```diff
-     const cq = {
-       base: [0, 0, 0],
-       max: [0, 0, 0]
-     };
+     const gC = /^(.*)\[rot\[([1-4])$/;
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38349-L38377` → after: `L419-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L419-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L419-L496) · [Before (L38349-L38377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38349-L38377)

```diff
-     function uq(qq, Eq, gq) {
-       const Oq = gq.base[1],
-         Aq = Math.floor(Oq),
-         uq = mq(qq, gq, Aq),
-         Bq = uq - Oq;
-       if (!(Bq >= Yq)) return 0;
-       if (xq(Eq, gq, Aq)) return 0;
-       const Wq = cq;
-       for (let Yq = 0; Yq < 3; Yq++) Wq.base[Yq] = gq.base[Yq], Wq.max[Yq] = gq.max[Yq];
-       Wq.base[1] += Bq, Wq.max[1] += Bq;
-       const Nq = Math.floor(Wq.max[1] - lq);
-       for (let Yq = Math.floor(uq); Yq <= Nq; Yq++)
-         if (xq(Eq, Wq, Yq) || mq(qq, Wq, Yq) !== -1 / 0) return 0;
-       return Bq
-     }
-   },
- ... (13 more removed lines; see GitHub link above)
+     function SC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const QC = new Map;
+       zC.forEach(((CC, zC) => {
+         let {
+           numAnimStates: ZC,
+           animStartIdx: wC
+         } = CC;
+         for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
+       }));
+       const wC = Object.entries(CC),
+         bC = new Map;
+       for (const [SC, pC] of wC) {
+         const CC = gC.exec(SC);
+         "1" === CC?.[2] && bC.set(CC[1], pC + 1)
+       }
+ ... (62 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38379-L38381` → after: `L498-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L498-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L498-L501) · [Before (L38379-L38381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38379-L38381)

```diff
-       getPossibleEnchantmentsForItem(qq) {
-         var Eq;
-         return null !== (Eq = Oq[this.suffixMapping[qq]]) && void 0 !== Eq ? Eq : []
+       for (const gC of NC.keys()) MC.delete(gC);
+       for (const [gC, SC] of ZC) {
+         const CC = NC.get(SC);
+         void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38383-L38395` → after: `L503-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L503-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L503-L511) · [Before (L38383-L38395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38383-L38395)

```diff
-       chooseRandomEnchantmentAttributes(qq, Eq, gq) {
-         const lq = [...gq],
-           Oq = {
-             enchantments: {},
-             enchantmentTier: Eq,
-             id: (0, Yq.d)()
-           },
-           mq = xq[Eq];
-         for (let Yq = 0; Yq < mq; Yq++) {
-           var cq;
-           if (0 === lq.length) {
-             console.warn("Ran out of enchantments to choose from");
-             break
+       return {
+         named: [...NC].sort(((CC, zC) => {
+           let [ZC] = CC, [QC] = zC;
+           return ZC < QC ? -1 : ZC > QC ? 1 : 0
+         })).map((CC => {
+           let [zC, ZC] = CC;
+           return {
+             name: zC,
+             id: ZC
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L38397-L38402` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/113.js#L513-L515) · [Before (L38397-L38402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/113.js#L38397-L38402)

```diff
-           const {
-             enchantments: Eq
-           } = Oq, gq = lq[Math.floor(qq.next() * lq.length)];
-           Eq[gq] = (null !== (cq = Eq[gq]) && void 0 !== cq ? cq : 0) + 1, Eq[gq] >= Aq && lq.splice(lq.indexOf(gq), 1)
-         }
-         return Oq
+         })),
+         aliases: [...MC.values()],
+         layers: WC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/114.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/114.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L2)

```diff
- export const ids = [114];
+ export const ids = [114, 116, 136, 137];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L4)

```diff
-   36669: (qq, Eq, gq) => {
+   4998: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L6-L22` → after: `L6-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L6-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L6-L89) · [Before (L6-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L6-L22)

```diff
-       b: () => Vq,
-       f: () => yq
-     });
-     gq(9251);
-     var Yq = gq(57),
-       lq = gq(1416),
-       Oq = gq(1904),
-       mq = gq(1942),
-       xq = gq(24),
-       Aq = gq(2383),
-       cq = gq(36674),
-       uq = gq(36681),
-       Bq = gq(9207),
-       Wq = gq(9246),
-       Nq = gq(9263),
-       aq = gq(1070);
- ... (1 more removed lines; see GitHub link above)
+       b: () => QC.j,
+       f: () => wC,
+       i: () => QC.q
+     });
+     var QC = ZC(5002);
+     const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
+       strict: CC,
+       program: zC
+     })))))
+   },
+   6658: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       forgetShaderPackActiveHint: () => KC,
+       isOtherApiVersion: () => iC,
+       isShaderPackActive: () => AC,
+       isShaderPackChangePending: () => IC,
+ ... (68 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L24-L89` → after: `L91-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L91-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L91-L130) · [Before (L24-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L24-L89)

```diff
-       const {
-         isTouchScreen: Eq,
-         clientEscMenuOptions: gq,
-         scriptedCameraFacing: Oq,
-         crosshairShownOverride: Vq,
-         crosshairGameView: jq
-       } = (0, xq.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Hq = (0, Aq.h)("gunshotOrigin"), oq = (0, Yq.useRef)(null), Pq = (0, Yq.useRef)(!1), [Qq, tq] = (0, Yq.useState)(dq);
-       (0, lq.f)("cameraZoomSet", tq), (0, Yq.useEffect)((() => {
-         tq(dq())
-       }), []);
-       const rq = (0, mq.g)("heldItemAim"),
-         hq = rq.gun,
-         nq = (0, Nq.f)(),
-         bq = (0, Yq.useRef)(nq);
-       bq.current = nq;
-       const [iq, Zq] = (0, Yq.useState)(!1);
- ... (50 more removed lines; see GitHub link above)
+       return null === CC ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : iC(CC) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : eC(CC, zC) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : CC.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L91-L176` → after: `L132-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L132-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L132-L148) · [Before (L91-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L91-L176)

```diff
-       if (null === (Eq = oq.current) || void 0 === Eq || Eq.call(oq, tq(qq)), jq[0].current) {
-         const Eq = `${(0,cq.f)(qq)}vh`;
-         jq[0].current.style.transform = `translateX(calc(0px - ${Eq}))`, jq[1].current.style.transform = `translateX(calc(0px + ${Eq}))`, jq[2].current.style.transform = `translateY(calc(0px - ${Eq}))`, jq[3].current.style.transform = `translateY(calc(0px + ${Eq}))`
-       }
-       Hq.current && (Hq.current.style.filter = `blur(${Math.round(qq/10)}px)`)
-     }
- 
-     function vq(qq) {
-       let {
-         custom: Eq,
-         touch: gq
-       } = qq;
-       const Oq = (0, lq.h)("aimingOverlay", "none"),
-         mq = "1.2vh",
-         xq = "0.3vh";
-       (0, Yq.useEffect)((() => {
- ... (70 more removed lines; see GitHub link above)
+       return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
+     }
+ 
+     function hC(CC) {
+       return gC((async () => {
+         YC(await (0, fC.e)(!0), CC)
+       }))
+     }
+ 
+     function KC() {
+       return gC((async () => {
+         bC.i.removeItem(nC.b)
+       }))
+     }
+ 
+     function YC(CC, zC) {
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L179` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L151) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L179)

```diff
-   9246: (qq, Eq, gq) => {
+   6660: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L182-L316` → after: `L154-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L154-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L154-L185) · [Before (L182-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L182-L316)

```diff
-       g: () => aq
-     });
-     gq(9251);
-     var Yq = gq(1018),
-       lq = gq.n(Yq),
-       Oq = gq(57),
-       mq = gq(9216);
- 
-     function xq(qq, Eq) {
-       return Math.max(1, Math.round(qq * Eq))
-     }
- 
-     function Aq(qq, Eq) {
-       const gq = Eq * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         Yq = function(qq, Eq) {
-           if (qq.lines) return xq(qq.lineThickness, Eq) % 2;
- ... (119 more removed lines; see GitHub link above)
+       e: () => bC
+     });
+     var QC = ZC(38);
+     const wC = "shaderPack";
+     async function bC() {
+       var CC;
+       let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
+     }
+   },
+   6630: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       loadShaderPackTextures: () => nC,
+       shaderPackTextures: () => fC
+     });
+     var QC = ZC(5002);
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L504` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L189) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L504)

```diff
-   9254: (qq, Eq, gq) => {
+   5002: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L506-L599` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L191-L192) · [Before (L506-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L506-L599)

```diff
-       b: () => uq,
-       e: () => dq,
-       i: () => Vq
-     });
-     var Yq = gq(9216);
-     const lq = "XH1-",
-       Oq = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       mq = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       xq = ["color", "outlineColor"],
-       Aq = 1 + 3 * xq.length + mq.length + 1,
-       cq = Math.ceil(8 * Aq / Math.log2(62)),
-       uq = lq.length + cq;
- 
-     function Bq(qq) {
-       let Eq = 90;
-       for (const gq of qq) Eq = 31 * Eq + gq & 255;
- ... (78 more removed lines; see GitHub link above)
+       c: () => fC,
+       g: () => nC,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L602` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L195) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L602)

```diff
-       n: () => Aq,
+       m: () => WC,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L604-L611` → after: `L197-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L197-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L197-L292) · [Before (L604-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L604-L611)

```diff
-       u: () => xq,
-       v: () => mq
-     });
-     const Yq = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
+       r: () => bC,
+       s: () => qC,
+       w: () => FC,
+       y: () => NC
+     });
+     const QC = 5;
+ 
+     function wC(CC) {
+       return CC === QC
+     }
+ 
+     function bC(CC) {
+       return [...CC.features]
+     }
+     const nC = 262144,
+       fC = 256,
+ ... (80 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L613-L616` → after: `L294-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L294-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L294-L300) · [Before (L613-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L613-L616)

```diff
-         outline: {
-           min: 0,
-           max: 4,
-           step: .1
+         fC = new Set(wC.map((CC => {
+           let [zC] = CC;
+           return nC(zC)?.root ?? zC
+         }))),
+         oC = (CC, ZC) => {
+           const QC = CC.replace(/_?0$/, "");
+           return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L618-L661` → after: `L302-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L302-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L302-L330) · [Before (L618-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L618-L661)

```diff
-         size: {
-           min: 25,
-           max: 400,
-           step: 5
-         },
-         lineLength: {
-           min: .5,
-           max: 40,
-           step: .5
-         },
-         lineThickness: {
-           min: .5,
-           max: 10,
-           step: .5
-         },
-         gap: {
- ... (28 more removed lines; see GitHub link above)
+         qC = new Map;
+       for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
+       const FC = wC.reduce(((CC, zC) => {
+           let [, ZC] = zC;
+           return Math.max(CC, ZC + 1)
+         }), 0),
+         WC = Array.from({
+           length: FC
+         }, ((CC, zC) => ({
+           id: zC + 1,
+           rotation: 0
+         }))),
+         NC = new Map,
+         MC = new Map;
+       for (const [gC, SC] of wC) {
+         const CC = nC(gC),
+ ... (13 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L663-L699` → after: `L332-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L332-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L332-L354) · [Before (L663-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L663-L699)

```diff
-       },
-       lq = Object.freeze({
-         style: "classic",
-         color: 16777215,
-         opacity: 100,
-         outline: 1.2,
-         outlineColor: 0,
-         growOnClick: !0,
-         size: 100,
-         lines: !0,
-         lineLength: 6,
-         lineThickness: 2,
-         gap: 3,
-         tStyle: !1,
-         dot: !1,
-         dotSize: 2,
- ... (21 more removed lines; see GitHub link above)
+         const ZC = qC.get(SC),
+           wC = CC?.root ?? gC;
+         if (ZC !== wC && MC.set(wC, {
+             name: wC,
+             texture: ZC,
+             kind: "frame"
+           }), CC) {
+           const zC = bC.get(CC.root);
+           WC[SC] = {
+             id: zC,
+             rotation: CC.rotation
+           }, NC.set(ZC, zC), MC.set(gC, {
+             name: gC,
+             texture: ZC,
+             kind: "rotation"
+           })
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L701-L899` → after: `L356-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L356-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L356-L363) · [Before (L701-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L701-L899)

```diff
-         ...qq,
-         [Eq]: Yq
-       }
-     }
- 
-     function xq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(lq).every((Yq => gq.includes(Yq) || qq[Yq] === Eq[Yq]))
-     }
- 
-     function Aq(qq) {
-       return xq(qq, lq)
-     }
- 
-     function cq(qq) {
-       return `#${qq.toString(16).padStart(6,"0")}`
- ... (183 more removed lines; see GitHub link above)
+         named: [...NC].sort(((CC, zC) => {
+           let [ZC] = CC, [QC] = zC;
+           return ZC < QC ? -1 : ZC > QC ? 1 : 0
+         })).map((CC => {
+           let [zC, ZC] = CC;
+           return {
+             name: zC,
+             id: ZC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L901-L1103` → after: `L365-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L365-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/114.js#L365-L370) · [Before (L901-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/114.js#L901-L1103)

```diff
-         };
-         return Oq
-       }
-       liveHowl() {
-         return this._unloaded ? null : this._howl
-       }
-       loaded() {
-         return "loaded" === this._howl.state()
-       }
-       unloadOnceIdle() {
-         (0, mq.d)(this._howl, (() => {
-           this._unloaded = !0
-         }))
-       }
-       setGlobalVolume(qq) {
-         this._volumeMultiplier.setMultiplierType("globalVolume", qq), this._howl.volume(qq)
- ... (187 more removed lines; see GitHub link above)
+         })),
+         aliases: [...MC.values()],
+         layers: WC
+       }
+     }
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/115.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/115.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115];
+ export const ids = [115, 116, 136];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/115.js#L4)

```diff
-   6354: (qq, Eq, gq) => {
+   4998: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L8-L45` → after: `L101-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L101-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/115.js#L101-L202) · [Before (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/115.js#L8-L45)

```diff
-     const Yq = {
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
- ... (22 more removed lines; see GitHub link above)
+     var QC = ZC(38);
+     const wC = "shaderPack";
+     async function bC() {
+       var CC;
+       let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
+     }
+   },
+   6630: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       loadShaderPackTextures: () => nC,
+       shaderPackTextures: () => fC
+     });
+     var QC = ZC(5002);
+     let wC = null,
+       bC = null;
+ ... (86 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L47-L166` → after: `L204-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L204-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/115.js#L204-L313) · [Before (L47-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/115.js#L47-L166)

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
+         of CC) ZC += zC.encode(QC).byteLength;
+       return ZC
+     }
+ 
+     function MC(CC) {
+       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
+       if (CC.length > oC) return `A file path is over ${oC} characters.`;
+       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
+       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
+     }
+     const gC = /^(.*)\[rot\[([1-4])$/;
+ 
+     function SC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const QC = new Map;
+       zC.forEach(((CC, zC) => {
+ ... (94 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/116.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/116.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116, 390];
+ export const ids = [116, 136];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L4)

```diff
-   36394: (qq, Eq, gq) => {
+   6630: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L6)

```diff
-       default: () => zE
+       loadShaderPackTextures: () => nC,
+       shaderPackTextures: () => fC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L8-L40` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L9-L11) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L8-L40)

```diff
-     var Yq = gq(296),
-       lq = gq(3383),
-       Oq = gq(3428),
-       mq = gq(3422),
-       xq = gq(3416),
-       Aq = gq(1183),
-       cq = gq(38),
-       uq = gq(1710),
-       Bq = gq(1341),
-       Wq = gq(1422),
-       Nq = gq(1018),
-       aq = gq.n(Nq),
-       Vq = gq(1659),
-       dq = gq(57),
-       jq = gq(71),
-       Hq = gq(2330),
- ... (17 more removed lines; see GitHub link above)
+     var QC = ZC(5002);
+     let wC = null,
+       bC = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L42-L245` → after: `L13-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L13-L21) · [Before (L42-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L42-L245)

```diff
-     function pq(qq) {
-       var Eq;
-       let {
-         eventName: gq
-       } = qq;
-       const {
-         t: Yq
-       } = (0, Aq.v)(), lq = nq.h[gq], [Oq, mq] = (0, dq.useState)((() => Date.now() >= lq.endsAt.getTime())), [xq, cq] = (0, dq.useState)("overall"), uq = function(qq, Eq) {
-         const {
-           userContext: gq,
-           isUserContextUpdating: Yq
-         } = (0, Qq.c)(), lq = `${qq}:${Eq}`, [Oq, mq] = (0, dq.useState)({
-           requestKey: lq,
-           leaderboard: {
-             status: "loading"
-           }
- ... (188 more removed lines; see GitHub link above)
+     function nC() {
+       return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: zC,
+           textureNameToIndex: ZC,
+           textureAnimationData: bC
+         } = CC;
+         return wC ??= (0, QC.k)(ZC, bC, zC), wC
+       })), bC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L248-L292` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L24-L26) · [Before (L248-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L248-L292)

```diff
-     function Gq(qq) {
-       let {
-         event: Eq,
-         progress: gq
-       } = qq;
-       const {
-         t: Yq
-       } = (0, Aq.v)(), lq = null !== gq && Eq.prizeGoals.some(((qq, Eq) => gq[Eq] >= qq.target));
-       return (0, Tq.jsxs)("div", {
-         className: "GameEventPanelGoals",
-         children: [(0, Tq.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: Yq(lq ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, Tq.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: Eq.prizeGoals.map(((qq, Eq) => {
- ... (29 more removed lines; see GitHub link above)
+     function fC() {
+       if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return wC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L294-L298` → after: `L28-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L28-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L28-L42) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L294-L298)

```diff
-     var Lq = gq(1532),
-       Jq = gq(1580),
-       kq = gq(1006),
-       Rq = gq(702),
-       Uq = gq(3358);
+   },
+   5002: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => fC,
+       g: () => nC,
+       j: () => QC,
+       k: () => SC,
+       m: () => WC,
+       q: () => wC,
+       r: () => bC,
+       s: () => qC,
+       w: () => FC,
+       y: () => NC
+     });
+     const QC = 5;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L301-L394` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L45) · [Before (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L301-L394)

```diff
-       let {
-         gameNameWithVariation: Eq
-       } = qq;
-       const gq = (0, Lq.C)(Eq),
-         [Yq, lq] = (0, dq.useState)(null);
-       if ((0, dq.useEffect)((() => {
-           if (!gq) return;
-           let qq = !0;
-           return (0, Jq.i)(gq).then((Eq => {
-             qq && lq(Eq)
-           })).catch((qq => {
-             console.error(`Failed to load the page copy for ${gq.name}`, qq)
-           })), () => {
-             qq = !1
-           }
-         }), [gq]), !gq || !Yq || Yq.name !== gq.name) return null;
- ... (78 more removed lines; see GitHub link above)
+       return CC === QC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L421-L442` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L49) · [Before (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L421-L442)

```diff
-       let {
-         preview: Eq,
-         isBroken: gq
-       } = qq;
-       const Yq = null === Eq ? null : (0, Oq.e)(Eq, "small"),
-         mq = (0, lq.e)(null !== Yq && void 0 !== Yq ? Yq : Oq.l);
-       return null === Eq ? (0, Tq.jsx)("div", {
-         className: aq()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: gq
-         }),
-         children: (0, Tq.jsx)(sq.d, {
-           name: gq ? "triangle-exclamation" : "star"
-         })
-       }) : (0, Tq.jsx)("div", {
-         className: aq()("FeaturedGamesPopupSlotThumbnail", xq.i),
-         style: (0, xq.e)(mq),
- ... (6 more removed lines; see GitHub link above)
+       return [...CC.features]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L446-L551` → after: `L56-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L56-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L56-L80) · [Before (L446-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L446-L551)

```diff
-       let {
-         schematicId: Eq,
-         gameName: gq
-       } = qq;
-       const {
-         userContext: lq
-       } = (0, Qq.c)(), Oq = (0, aE.c)(), [mq, xq] = (0, dq.useState)(null), [Aq, cq] = (0, dq.useState)(null), [uq, Bq] = (0, dq.useState)(!1), Nq = (0, dq.useCallback)((() => {
-         cq(null), bq.e.getFeaturedGames(lq).then((qq => {
-           Oq.current && xq(qq.slots)
-         })).catch((qq => {
-           console.error("Failed to get featured games", qq), Oq.current && cq("Failed to load featured games")
-         }))
-       }), [lq, Oq]);
-       (0, dq.useEffect)((() => {
-         Nq()
-       }), [Nq]);
- ... (90 more removed lines; see GitHub link above)
+       if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
+       const zC = [];
+       for (const [ZC, QC] of Object.entries(CC)) {
+         if ("string" !== typeof QC) return `${ZC} isn't text.`;
+         zC.push({
+           path: ZC,
+           source: QC
+         })
+       }
+       return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
+         function(CC) {
+           if (0 === CC.length) return "The pack has no .wgsl files.";
+           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
+           const zC = new Set;
+           for (const {
+               path: ZC
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L560-L582` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L84-L86) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L560-L582)

```diff
-       let {
-         customLobbies: Eq,
-         favouriteLobbies: gq,
-         toggleLikeLobby: Yq,
-         showReport: lq
-       } = qq;
-       const [Oq, mq] = (0, dq.useState)(PE);
-       return (0, dq.useEffect)((() => {
-         if (Oq >= Eq.length) return;
-         let qq = !0;
-         return (0, oE.b)().then((() => {
-           qq && mq(Oq + QE)
-         })), () => {
-           qq = !1
-         }
-       }), [Oq, Eq.length]), (0, Tq.jsx)(Tq.Fragment, {
- ... (7 more removed lines; see GitHub link above)
+       const zC = {};
+       for (const ZC of CC) zC[ZC.path] = ZC.source;
+       return zC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L613-L630` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L90) · [Before (L613-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L613-L630)

```diff
-       const gq = BE.f[qq.schematicId];
-       return {
-         listedVariations: [],
-         backgroundImage: (0, Oq.e)(qq, "large"),
-         badges: [],
-         category: qq.gameCategory,
-         title: void 0 !== (null === gq || void 0 === gq ? void 0 : gq.title) ? Eq(gq.title) : qq.name,
-         variationTitle: null,
-         description: void 0 !== (null === gq || void 0 === gq ? void 0 : gq.description) ? Eq(gq.description) : qq.description,
-         ownerSocialPreviewWithoutLocation: "owner" in qq ? qq.owner : null,
-         ccu: qq.ccu,
-         favourites: qq.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in qq ? qq.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
-         canCreateCustomLobbies: !0,
- ... (2 more removed lines; see GitHub link above)
+       return CC < zC ? -1 : CC > zC ? 1 : 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L634-L638` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L94-L97) · [Before (L634-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L634-L638)

```diff
-       var Eq, gq, Yq;
-       return null !== (Eq = null !== (gq = (0, bE.l)() ? function(qq) {
-         for (const [Eq, gq] of Object.entries(iE)) {
-           const Yq = [Eq, ...gq.map((qq => (0, OE.Ub)(Eq, qq)))];
-           if (Yq.includes(qq)) return Yq
+       const zC = new TextEncoder;
+       let ZC = 0;
+       for (const {
+           source: QC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L640-L652` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L99-L100) · [Before (L640-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L640-L652)

```diff
-         return null
-       }(qq) : null) && void 0 !== gq ? gq : null === (Yq = BE.c[qq]) || void 0 === Yq ? void 0 : Yq.listedVariations) && void 0 !== Eq ? Eq : null
-     }
- 
-     function zE() {
-       const {
-         gameNameWithVariation: qq
-       } = (0, Iq.v)();
-       if ((0, dq.useEffect)(hE.o, []), qq && (0, YE.o)(qq)) return (0, Tq.jsx)(SE, {
-         urlId: qq
-       }, qq);
-       const Eq = qq && (0, lE.j)(qq) ? qq : "firstParty";
-       return (0, Tq.jsx)(pE, {}, Eq)
+         of CC) ZC += zC.encode(QC).byteLength;
+       return ZC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L656-L689` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L104-L107) · [Before (L656-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L656-L689)

```diff
-       let {
-         urlId: Eq
-       } = qq;
-       const {
-         userContext: gq,
-         isUserContextUpdating: Yq
-       } = (0, Qq.c)(), lq = (0, dq.useMemo)((() => (0, Cq.j)(Eq)), [Eq]);
-       (0, dq.useMemo)((() => {
-         if (null === lq) return;
-         const qq = wq.userContextManager.peekCurrentUserContext();
-         (null !== qq ? bq.e.getGame(qq, lq.schematicId) : wq.userContextManager.getCurrentUserContext().then((qq => bq.e.getGame(qq, lq.schematicId)))).catch((qq => {
-           console.error(`Failed to get the custom game ${lq.schematicId}`, qq), (0, Cq.g)(Eq)
-         }))
-       }), [lq, Eq]);
-       const [Oq, mq] = (0, dq.useState)(null), xq = (0, Kq.d)();
-       (0, dq.useEffect)((() => {
- ... (18 more removed lines; see GitHub link above)
+       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
+       if (CC.length > oC) return `A file path is over ${oC} characters.`;
+       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
+       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L692-L805` → after: `L111-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L111-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L111-L170) · [Before (L692-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L692-L805)

```diff
-     function pE(qq) {
-       var Eq, gq, mq, Nq, nq, iq, Zq, Mq;
-       let {
-         gameNameWithVariation: zq,
-         knownCustomGame: Sq = null
-       } = qq;
-       const {
-         t: Gq
-       } = (0, Aq.v)();
-       (0, uE.e)();
-       const Jq = (0, uE.j)(),
-         {
-           userContext: kq,
-           isUserContextUpdating: Rq
-         } = (0, Qq.c)(),
-         Uq = (0, vE.f)(),
- ... (98 more removed lines; see GitHub link above)
+     function SC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const QC = new Map;
+       zC.forEach(((CC, zC) => {
+         let {
+           numAnimStates: ZC,
+           animStartIdx: wC
+         } = CC;
+         for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
+       }));
+       const wC = Object.entries(CC),
+         bC = new Map;
+       for (const [SC, pC] of wC) {
+         const CC = gC.exec(SC);
+         "1" === CC?.[2] && bC.set(CC[1], pC + 1)
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L807-L838` → after: `L172-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L172-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L172-L186) · [Before (L807-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L807-L838)

```diff
-       }), []), (0, yq.c)("Enter", (qq => {
-         const Eq = qq.target instanceof Element ? qq.target : null;
-         if (qq.defaultPrevented || null !== Eq && void 0 !== Eq && Eq.closest("input, textarea, select")) return;
-         const gq = null === Eq || void 0 === Eq ? void 0 : Eq.closest("a, button");
-         gq && gq !== Eg.current || (qq.preventDefault(), ug())
-       })), (0, tq.b)(eq.navigateToHomePage);
-       const gg = RE.length > 0 || UE.length > 0,
-         Yg = !LE.useRejoinLastLobbyButton || 0 === RE.length,
-         lg = hE && null === LE.ownerSocialPreviewWithoutLocation,
-         Og = kq.getPlayerName() === (null === PE || void 0 === PE || null === (Eq = PE.owner) || void 0 === Eq ? void 0 : Eq.name),
-         mg = null !== (gq = null === (mq = LE.badges.find((qq => "event" === qq.type))) || void 0 === mq ? void 0 : mq.event) && void 0 !== gq ? gq : null,
-         xg = Yg ? Wq.p : Wq.g,
-         Ag = (0, Tq.jsx)(Bq.e, {
-           tooltipInner: (0, Tq.jsx)("div", {
-             children: Gq("homePage:quickPlayInfo")
-           }),
- ... (16 more removed lines; see GitHub link above)
+         const ZC = qC.get(SC),
+           wC = CC?.root ?? gC;
+         if (ZC !== wC && MC.set(wC, {
+             name: wC,
+             texture: ZC,
+             kind: "frame"
+           }), CC) {
+           const zC = bC.get(CC.root);
+           WC[SC] = {
+             id: zC,
+             rotation: CC.rotation
+           }, NC.set(ZC, zC), MC.set(gC, {
+             name: gC,
+             texture: ZC,
+             kind: "rotation"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L840-L892` → after: `L188-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L188-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L188-L203) · [Before (L840-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L840-L892)

```diff
-         });
-       (0, dq.useEffect)((() => {
-         if (!hE || Rq) return;
-         let qq = !0;
-         const Eq = (0, lE.o)(YE.gameNameWithVariation);
-         return bq.e.getGame(kq, Eq).then((Eq => {
-           qq && qg(Eq)
-         })).catch((Eq => {
-           console.error("Failed to get Custom Game information", Eq), qq && (0, eq.navigateToHomePage)()
-         })), bq.e.getFavouriteGames(kq).then((gq => {
-           qq && pE((qq => ({
-             ...qq,
-             isFavourite: gq.includes(Eq)
-           })))
-         })).catch((Eq => {
-           console.error("Failed to get favourite games", Eq), qq && zE(!0)
- ... (37 more removed lines; see GitHub link above)
+         } else NC.set(ZC, SC + 1)
+       }
+       for (const gC of NC.keys()) MC.delete(gC);
+       for (const [gC, SC] of ZC) {
+         const CC = NC.get(SC);
+         void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
+       }
+       return {
+         named: [...NC].sort(((CC, zC) => {
+           let [ZC] = CC, [QC] = zC;
+           return ZC < QC ? -1 : ZC > QC ? 1 : 0
+         })).map((CC => {
+           let [zC, ZC] = CC;
+           return {
+             name: zC,
+             id: ZC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L894-L1525` → after: `L205-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L205-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/116.js#L205-L208) · [Before (L894-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/116.js#L894-L1525)

```diff
-         }), [kq, KE]),
-         Wg = (null === PE || void 0 === PE ? void 0 : PE.schematicId) === (0, lE.o)(qE.gameNameWithVariation) ? PE : null,
-         Ng = Wg && (0, Lq.G)(qE.gameNameWithVariation, (qq => Gq(qq)), Wg);
-       (0, Dq.g)(Wg && (0, Lq.x)(qE.gameNameWithVariation, Wg));
-       const ag = Xq.featureFlags.canUseCustomLobbies && !0 === LE.canCreateCustomLobbies,
-         Vg = (0, Tq.jsx)("div", {
-           className: "GameInformationPageContentAnchor",
-           children: (0, Tq.jsx)(Fq, {
-             gameNameWithVariation: YE.gameNameWithVariation
-           })
-         });
-       return (0, Tq.jsx)(Tq.Fragment, {
-         children: (0, Tq.jsxs)("article", {
-           className: aq()("GameInformation", {
-             GameInformationFadeIn: JE,
-             GameInformationReleaseCountdown: "releaseCountdown" === (null === (Nq = LE.countdownInformation) || void 0 === Nq ? void 0 : Nq.type)
- ... (616 more removed lines; see GitHub link above)
+         })),
+         aliases: [...MC.values()],
+         layers: WC
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L4-L6` → after: `L5-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L5-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L5-L2584) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L4-L6)

```diff
-   6390: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Vq
+   6220: function(CC, zC, ZC) {
+     var QC;
+     ! function() {
+       var wC, bC = 1e9,
+         nC = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         fC = !0,
+         oC = "[DecimalError] ",
+         qC = oC + "Invalid argument: ",
+         FC = oC + "Exponent out of range: ",
+         WC = Math.floor,
+ ... (2564 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L21-L30` → after: `L2590-L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L2590-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L2590-L2625) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L21-L30)

```diff
-         t: qq
-       } = (0, Yq.v)(), Eq = !(0, Oq.shouldUseUkPrivacyPolicy)();
-       return (0, Wq.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, Wq.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: qq("homePage:privacyPolicy")
-         }), (0, Wq.jsx)("p", {
-           children: (0, Wq.jsxs)("em", {
-             children: ["Last updated: ", uq.l.toLocaleDateString()]
+         circular: zC = !1,
+         createInternalComparator: ZC,
+         createState: QC,
+         strict: wC = !1
+       } = CC, bC = function(CC) {
+         let {
+           circular: zC,
+           createCustomConfig: ZC,
+           strict: QC
+         } = CC, wC = {
+           areArrayBuffersEqual: pC,
+           areArraysEqual: QC ? vC : PC,
+           areDataViewsEqual: GC,
+           areDatesEqual: RC,
+           areErrorsEqual: AC,
+           areFunctionsEqual: xC,
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L32-L781` → after: `L2627-L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L2627-L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L2627-L4483) · [Before (L32-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L32-L781)

```diff
-         }), (0, Wq.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, Wq.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, Wq.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
-         }), (0, Wq.jsx)("p", {
-           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
-         }), (0, Wq.jsx)("h2", {
-           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
-         }), (0, Wq.jsx)("h3", {
-           children: "2.1 Visitors"
-         }), (0, Wq.jsx)("h4", {
-           children: "2.1.1 Data Collection and Usage"
-         }), (0, Wq.jsxs)("p", {
-           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
- ... (734 more removed lines; see GitHub link above)
+         }
+         return wC
+       }(CC), nC = lC(bC);
+       var fC;
+       return function(CC) {
+         let {
+           circular: zC,
+           comparator: ZC,
+           createState: QC,
+           equals: wC,
+           strict: bC
+         } = CC;
+         if (QC) return function(CC, nC) {
+           const {
+             cache: fC = (zC ? new WeakMap : void 0),
+             meta: oC
+ ... (1841 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L784-L786` → after: `L5746-L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L5746-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L5746-L5767) · [Before (L784-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L784-L786)

```diff
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Public YouTube channel identifiers submitted by creators"
+             } else if ("horizontal" === ZC) {
+               var KC = pC.scale,
+                 YC = nC + zC,
+                 dC = YC - oC,
+                 mC = YC + oC,
+                 HC = KC(NC - PC),
+                 EC = KC(NC + RC);
+               AC.push({
+                 x1: dC,
+                 y1: EC,
+                 x2: mC,
+                 y2: EC
+               }), AC.push({
+                 x1: YC,
+                 y1: HC,
+                 x2: YC,
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L788-L790` → after: `L5769-L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L5769-L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L5769-L7157) · [Before (L788-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L788-L790)

```diff
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Retrieves and displays publicly available YouTube content."
+             }
+             return QC.createElement(bC.c, qC({
+               className: "recharts-errorBar",
+               key: "bar-".concat(AC.map((function(CC) {
+                 return "".concat(CC.x1, "-").concat(CC.x2, "-").concat(CC.y1, "-").concat(CC.y2)
+               })))
+             }, GC), AC.map((function(CC) {
+               return QC.createElement("line", qC({}, CC, {
+                 key: "line-".concat(CC.x1, "-").concat(CC.x2, "-").concat(CC.y1, "-").concat(CC.y2)
+               }))
+             })))
+           }));
+           return QC.createElement(bC.c, {
+             className: "recharts-errorBars"
+           }, RC)
+         }
+ ... (1373 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L792-L822` → after: `L7159-L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L7159-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L7159-L7176) · [Before (L792-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L792-L822)

```diff
-             })]
-           })]
-         }), (0, Wq.jsx)("h3", {
-           children: "3.4 YouTube API Services"
-         }), (0, Wq.jsxs)("p", {
-           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
-             href: "https://www.youtube.com/t/terms",
-             children: "YouTube Terms of Service"
-           }), "."]
-         }), (0, Wq.jsxs)("p", {
-           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, Wq.jsx)("a", {
-             href: "http://www.google.com/policies/privacy",
-             children: "http://www.google.com/policies/privacy"
-           }), "."]
-         }), (0, Wq.jsx)("p", {
-           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
- ... (15 more removed lines; see GitHub link above)
+             } else nC[zC] = bC = MC(MC({}, bC), {}, {
+               tickCoord: bC.coordinate
+             });
+             FC(CC, bC.tickCoord, fC, oC, qC) && (oC = bC.tickCoord + CC * (fC() / 2 + wC), nC[zC] = MC(MC({}, bC), {}, {
+               isShow: !0
+             }))
+           }, PC = 0; PC < SC; PC++) pC(PC);
+         return nC
+       }(iC, vC, IC, WC, gC, "preserveStartEnd" === pC) : function(CC, zC, ZC, QC, wC) {
+         for (var bC = (QC || []).slice(), nC = bC.length, fC = zC.start, oC = zC.end, qC = function(zC) {
+             var QC, qC = bC[zC],
+               WC = function() {
+                 return void 0 === QC && (QC = ZC(qC, zC)), QC
+               };
+             if (zC === nC - 1) {
+               var NC = CC * (qC.coordinate + CC * WC() / 2 - oC);
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L824-L868` → after: `L7178-L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR7178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L7178-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L7178-L8074) · [Before (L824-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L824-L868)

```diff
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Purpose"
-               })
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Example"
-               })
-             })]
-           }), (0, Wq.jsxs)("tr", {
-             children: [(0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Functional Cookies"
-               })
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
- ... (29 more removed lines; see GitHub link above)
+             } else bC[zC] = qC = MC(MC({}, qC), {}, {
+               tickCoord: qC.coordinate
+             });
+             FC(CC, qC.tickCoord, WC, fC, oC) && (oC = qC.tickCoord - CC * (WC() / 2 + wC), bC[zC] = MC(MC({}, qC), {}, {
+               isShow: !0
+             }))
+           }, WC = nC - 1; WC >= 0; WC--) qC(WC);
+         return bC
+       }(iC, vC, IC, WC, gC), AC.filter((function(CC) {
+         return CC.isShow
+       })))
+     }
+   },
+   6415: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => oC
+ ... (881 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L870-L872` → after: `L8076-L9945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L8076-L9945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L8076-L9945) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L870-L872)

```diff
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsxs)("p", {
-                 children: ["Ensuring the same ad doesn\u2019t appear too frequently or detecting fraudulent ad interactions", Eq ? ", and when you consent, showing you ads that are more relevant to your interests." : "."]
+             })), ZC.detachDragEndListener()
+           })), DC(ZC, "handleLeaveWrapper", (function() {
+             (ZC.state.isTravellerMoving || ZC.state.isSlideMoving) && (ZC.leaveTimer = window.setTimeout(ZC.handleDragEnd, ZC.props.leaveTimeOut))
+           })), DC(ZC, "handleEnterSlideOrTraveller", (function() {
+             ZC.setState({
+               isTextActive: !0
+             })
+           })), DC(ZC, "handleLeaveSlideOrTraveller", (function() {
+             ZC.setState({
+               isTextActive: !1
+             })
+           })), DC(ZC, "handleSlideDragStart", (function(CC) {
+             var zC = yC(CC) ? CC.changedTouches[0] : CC;
+             ZC.setState({
+               isTravellerMoving: !1,
+               isSlideMoving: !0,
+ ... (1854 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L874-L878` → after: `L9947-L18647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L9947-L18647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L9947-L18647) · [Before (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L874-L878)

```diff
-             })]
-           }), (0, Wq.jsxs)("tr", {
-             children: [(0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Notice Acceptance Cookies"
+             })), AC
+           },
+           YC = function(CC, QC) {
+             var wC = CC.props,
+               bC = CC.dataStartIndex,
+               nC = CC.dataEndIndex,
+               fC = CC.updateId;
+             if (!(0, iC.D)({
+                 props: wC
+               })) return null;
+             var oC = wC.children,
+               qC = wC.layout,
+               NC = wC.stackOffset,
+               SC = wC.data,
+               pC = wC.reverseStackOrder,
+               PC = cZ(qC),
+ ... (8685 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L880-L882` → after: `L18649-L18687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR18649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L18649-L18687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L18649-L18687) · [Before (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L880-L882)

```diff
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Record whether you have acknowledged or accepted notices, such as our cookie policy."
+             }
+           }
+         return bC
+       },
+       En = function(CC) {
+         var zC = CC.barGap,
+           ZC = CC.barCategoryGap,
+           QC = CC.bandSize,
+           wC = CC.sizeList,
+           bC = void 0 === wC ? [] : wC,
+           nC = CC.maxBarSize,
+           fC = bC.length;
+         if (fC < 1) return null;
+         var oC, qC = (0, Gn.j)(zC, QC, 0, !0),
+           FC = [];
+         if (bC[0].barSize === +bC[0].barSize) {
+ ... (23 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L884-L886` → after: `L18689-L18708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR18689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L18689-L18708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L18689-L18708) · [Before (L884-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L884-L886)

```diff
-             }), (0, Wq.jsx)("td", {
-               children: (0, Wq.jsx)("p", {
-                 children: "Storing your acceptance of our cookie banner or other notifications."
+             })), QC
+           }), FC)
+         } else {
+           var SC = (0, Gn.j)(ZC, QC, 0, !0);
+           QC - 2 * SC - (fC - 1) * qC <= 0 && (qC = 0);
+           var pC = (QC - 2 * SC - (fC - 1) * qC) / fC;
+           pC > 1 && (pC >>= 0);
+           var PC = nC === +nC ? Math.min(pC, nC) : pC;
+           oC = bC.reduce((function(CC, zC, ZC) {
+             var QC = [].concat(Jn(CC), [{
+               item: zC.item,
+               position: {
+                 offset: SC + (pC + qC) * ZC + (pC - PC) / 2,
+                 size: PC
+               }
+             }]);
+ ... (4 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L888-L1059` → after: `L18710-L19079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR18710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L18710-L19079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L18710-L19079) · [Before (L888-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L888-L1059)

```diff
-             })]
-           })]
-         }), (0, Wq.jsx)("h3", {
-           children: "4.3 Managing Cookies"
-         }), (0, Wq.jsx)("p", {
-           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
-         }), (0, Wq.jsxs)("ul", {
-           children: [(0, Wq.jsx)("li", {
-             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
-           }), (0, Wq.jsx)("li", {
-             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
-           }), (0, Wq.jsx)("li", {
-             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
-           }), (0, Wq.jsx)("li", {
-             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
-           })]
- ... (156 more removed lines; see GitHub link above)
+             })), QC
+           }), FC)
+         }
+         return oC
+       },
+       Xn = function(CC, zC, ZC, QC) {
+         var wC = ZC.children,
+           bC = ZC.width,
+           nC = ZC.margin,
+           fC = bC - (nC.left || 0) - (nC.right || 0),
+           oC = (0, An.d)({
+             children: wC,
+             legendWidth: fC
+           });
+         if (oC) {
+           var qC = QC || {},
+ ... (354 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L1062-L1074` → after: `L19194-L19562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR19194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L19194-L19562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L19194-L19562) · [Before (L1062-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L1062-L1074)

```diff
-     function aq() {
-       const {
-         adMobPrivacyOptionsRequired: qq
-       } = (0, Aq.j)(["adMobPrivacyOptionsRequired"]);
-       if (!qq) return null;
-       return (0, Wq.jsx)(mq.g, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await cq.c.request("ads.showPrivacyOptions", {})
-             } catch (qq) {
-               console.error("Failed to open AdMob privacy options:", qq)
+     function wC(CC) {
+       return wC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
+         return typeof CC
+       } : function(CC) {
+         return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
+       }, wC(CC)
+     }
+ 
+     function bC(CC, zC) {
+       var ZC = Object.keys(CC);
+       if (Object.getOwnPropertySymbols) {
+         var QC = Object.getOwnPropertySymbols(CC);
+         zC && (QC = QC.filter((function(zC) {
+           return Object.getOwnPropertyDescriptor(CC, zC).enumerable
+         }))), ZC.push.apply(ZC, QC)
+       }
+ ... (353 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L1076-L1078` → after: `L19564-L19871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR19564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L19564-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L19564-L19871) · [Before (L1076-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L1076-L1078)

```diff
-           })()
-         },
-         children: "Manage Privacy Choices"
+           }(zC),
+           gC = MC.startAngle,
+           SC = MC.endAngle,
+           pC = fC;
+         if (gC <= SC) {
+           for (; pC > SC;) pC -= 360;
+           for (; pC < gC;) pC += 360;
+           NC = pC >= gC && pC <= SC
+         } else {
+           for (; pC > gC;) pC -= 360;
+           for (; pC < SC;) pC += 360;
+           NC = pC >= SC && pC <= gC
+         }
+         return NC ? bC(bC({}, zC), {}, {
+           radius: nC,
+           angle: WC(pC, zC)
+ ... (292 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L1083-L1088` → after: `L20079-L20123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR20079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L20079-L20123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L20079-L20123) · [Before (L1083-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L1083-L1088)

```diff
-       return (0, Wq.jsxs)(Wq.Fragment, {
-         children: [(0, lq.c)() && (0, Wq.jsx)(Wq.Fragment, {
-           children: (0, Wq.jsx)(mq.g, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, xq.y)()
+       return nC(bC.apply(null, arguments).paddingInner(1))
+     }
+   },
+   6159: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           this.range(CC);
+           break;
+         default:
+           this.range(zC).domain(CC)
+       }
+       return this
+     }
+ ... (29 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L1090-L1095` → after: `L20125-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR20125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L20125-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/117.js#L20125-L20339) · [Before (L1090-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/117.js#L1090-L1095)

```diff
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, Wq.jsx)(aq, {}), (0, Wq.jsx)(Bq.d, {
-           className: "PrivacyPolicyLinks"
-         }), (0, Wq.jsx)(Nq, {})]
-       })
+             _key: {
+               value: zC
+             }
+           }), null != CC)
+           for (const [ZC, QC] of CC) this.set(ZC, QC)
+       }
+       get(CC) {
+         return super.get(wC(this, CC))
+       }
+       has(CC) {
+         return super.has(wC(this, CC))
+       }
+       set(CC, zC) {
+         return super.set(bC(this, CC), zC)
+       }
+       delete(CC) {
+ ... (199 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/118.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/118.js#L4)

```diff
-   6398: (qq, Eq, gq) => {
+   6445: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L6` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/118.js#L7-L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/118.js#L6)

```diff
-       default: () => Oq
+       Graph: () => sC,
+       debug: () => YZ,
+       default: () => mZ,
+       graphlib: () => bC,
+       layout: () => MZ,
+       util: () => dZ,
+       version: () => bz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L8-L184` → after: `L15-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L15-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/118.js#L15-L888) · [Before (L8-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/118.js#L8-L184)

```diff
-     var Yq = gq(1183),
-       lq = gq(1070);
- 
-     function Oq() {
-       const {
-         t: qq
-       } = (0, Yq.v)();
-       return (0, lq.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, lq.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: qq("homePage:termsOfService")
-         }), (0, lq.jsx)("p", {
-           children: (0, lq.jsx)("em", {
-             children: "Last updated: July 15, 2025"
-           })
- ... (161 more removed lines; see GitHub link above)
+     var QC = Object.defineProperty,
+       wC = (CC, zC, ZC) => ((CC, zC, ZC) => zC in CC ? QC(CC, zC, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: ZC
+       }) : CC[zC] = ZC)(CC, "symbol" != typeof zC ? zC + "" : zC, ZC),
+       bC = {};
+     ((CC, zC) => {
+       for (var ZC in zC) QC(CC, ZC, {
+         get: zC[ZC],
+         enumerable: !0
+       })
+     })(bC, {
+       Graph: () => sC,
+       alg: () => PC
+ ... (858 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L186-L200` → after: `L890-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L890-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/118.js#L890-L1085) · [Before (L186-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/118.js#L186-L200)

```diff
-         }), (0, lq.jsx)("h3", {
-           children: "13. Governing Law and Dispute Resolution"
-         }), (0, lq.jsx)("p", {
-           children: (0, lq.jsxs)("ul", {
-             children: [(0, lq.jsx)("li", {
-               children: "Governing Law: These Terms are governed by the laws of England and Wales."
-             }), (0, lq.jsx)("li", {
-               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
-             }), (0, lq.jsx)("li", {
-               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
-             }), (0, lq.jsx)("li", {
-               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
-             }), (0, lq.jsx)("li", {
-               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
-             })]
+         })), CC.edges().forEach((CC => {
+           let bC = ZC.edge(CC.v, CC.w) || 0,
+             nC = zC(CC),
+             fC = bC + nC;
+           ZC.setEdge(CC.v, CC.w, fC);
+           let oC = ZC.node(CC.v),
+             qC = ZC.node(CC.w);
+           wC = Math.max(wC, oC.out += nC), QC = Math.max(QC, qC.in += nC)
+         }));
+         let bC = function(CC) {
+             let zC = [];
+             for (let ZC = 0; ZC < CC; ZC++) zC.push(ZC);
+             return zC
+           }(wC + QC + 3).map((() => new oz)),
+           nC = QC + 1;
+         return ZC.nodes().forEach((CC => {
+ ... (180 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L202-L220` → after: `L1087-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1087-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/118.js#L1087-L1307) · [Before (L202-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/118.js#L202-L220)

```diff
-         }), (0, lq.jsx)("h3", {
-           children: "14. Severability"
-         }), (0, lq.jsx)("p", {
-           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
-         }), (0, lq.jsx)("h3", {
-           children: "15. Contact Information"
-         }), (0, lq.jsxs)("p", {
-           children: ["If you have any questions about these Terms, please contact us at:", (0, lq.jsxs)("ul", {
-             children: [(0, lq.jsx)("li", {
-               children: "Email: privacy@bloxd.io"
-             }), (0, lq.jsx)("li", {
-               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
-             })]
-           })]
-         }), (0, lq.jsx)("h3", {
-           children: "16. Entire Agreement"
- ... (3 more removed lines; see GitHub link above)
+         })), zC
+       }(CC), Sz(CC);
+       let zC, ZC, QC = Pz(CC);
+       for (hz(QC), vz(QC, CC); zC = Yz(QC);) ZC = dz(QC, CC, zC), mz(QC, CC, zC, ZC)
+     }
+ 
+     function vz(CC, zC) {
+       let ZC = Jz(CC, CC.nodes());
+       ZC = ZC.slice(0, ZC.length - 1), ZC.forEach((ZC => function(CC, zC, ZC) {
+         let QC = CC.node(ZC).parent,
+           wC = CC.edge(ZC, QC);
+         wC.cutvalue = ez(CC, zC, ZC)
+       }(CC, zC, ZC)))
+     }
+ 
+     function ez(CC, zC, ZC) {
+ ... (205 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/119.js#L4-L476) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/119.js#L4)

```diff
-   6405: (qq, Eq, gq) => {
+   37105: (CC, zC, ZC) => {
+     var QC = {
+       "./67/67_Atlas.png": 27108,
+       "./67/67_Model.glb": 33193,
+       "./67/67_Reconstructed.glb": 33202,
+       "./67/variations/0_67_default.png": 27117,
+       "./Armour Collector/Armour Collector_Atlas.png": 27122,
+       "./Armour Collector/Armour Collector_Model.glb": 33205,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33210,
+       "./Armour Collector/variations/0_armour collector_default.png": 27124,
+       "./Bear/BearSaddle_Atlas.png": 27130,
+       "./Bear/Bear_Atlas.png": 27139,
+       "./Bear/Bear_Model.glb": 33219,
+       "./Bear/variations/0_bear_default.png": 27146,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27155,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33222,
+ ... (457 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8-L70` → after: `L480-L39439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L480-L39439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/119.js#L480-L39439) · [Before (L8-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/119.js#L8-L70)

```diff
-     var Yq = gq(1512),
-       lq = gq(1540),
-       Oq = gq(2904),
-       mq = gq(2243),
-       xq = gq(1422),
-       Aq = gq(1498),
-       cq = gq(1101),
-       uq = gq(1023),
-       Bq = gq(1183),
-       Wq = gq(1025),
-       Nq = gq(1070);
- 
-     function aq() {
-       var qq;
-       const {
-         t: Eq
- ... (47 more removed lines; see GitHub link above)
+     var QC = ZC(38091),
+       wC = ZC.n(QC);
+ 
+     function bC(CC) {
+       var zC = [],
+         ZC = [],
+         QC = null;
+ 
+       function bC(ZC, wC) {
+         var bC = QC[ZC],
+           fC = QC[wC];
+         bC && fC && (function(CC, zC, ZC, QC) {
+           if (CC.lnC) return zC.lnC ? function(CC, zC) {
+             var ZC = (CC[3] - CC[0]) / 2,
+               QC = (zC[3] - zC[0]) / 2,
+               wC = CC[0] + ZC - (zC[0] + QC),
+ ... (38944 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/120.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/120.js#L4-L6)

```diff
-   6409: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Wq
+   36496: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => SC,
+       c: () => JC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L8-L16` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/120.js#L9-L58) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/120.js#L8-L16)

```diff
-     var Yq = gq(1326),
-       lq = gq(57),
-       Oq = gq(106),
-       mq = gq(1512),
-       xq = gq(1216),
-       Aq = gq(296),
-       cq = gq(611);
-     const uq = new URL(xq.k[Aq.e.PRODUCTION]).origin;
-     var Bq = gq(1070);
+     ZC(34125);
+     var QC = ZC(48),
+       wC = ZC(1383),
+       bC = ZC(1840),
+       nC = ZC(1877),
+       fC = ZC(20),
+       oC = ZC(2369),
+       qC = ZC(36502),
+       FC = ZC(36508),
+       WC = ZC(34107),
+       NC = ZC(34118),
+       MC = ZC(34141),
+       gC = ZC(1056);
+     const SC = (0, QC.memo)((function() {
+       var CC;
+       const {
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L19-L27` → after: `L61-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L61-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/120.js#L61-L452) · [Before (L19-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/120.js#L19-L27)

```diff
-       const qq = (0, mq.v)();
-       return (0, lq.useEffect)((() => {
-         const Eq = Oq.currentUrl.getSearchParam("code");
-         Oq.currentUrl.removeSearchParam("code"), null === Eq && (console.error("No authorization code found in the URL"), window.close());
-         const gq = {
-           type: `oauth_authentication_${qq.providerName}`,
-           code: Eq
-         };
-         for (const qq of (lq = window.location.origin) === uq ? [lq, `https://${cq.e}`] : [lq]) {
+       return bC.gameBridge.lookup("cameraZoom", null)
+     }
+     const PC = [{
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }],
+       GC = {
+         current: null
+       },
+       RC = {
+         current: null
+ ... (376 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L29` → after: `L454-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L454-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/120.js#L454-L464) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/120.js#L29)

```diff
-           null === (Yq = window.opener) || void 0 === Yq || Yq.postMessage(gq, qq)
+           vC.current = CC, null === (zC = WC.current) || void 0 === zC || zC.querySelectorAll("[data-arm]").forEach((zC => {
+             Object.assign(zC.style, IC(function(CC) {
+               return {
+                 x: Number(CC.dataset.x),
+                 y: Number(CC.dataset.y),
+                 arm: CC.dataset.arm
+               }
+             }(zC), CC, pC.current))
+           }))
+         }, () => {
+           FC.current = null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L31-L39` → after: `L466-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L466-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/120.js#L466-L499) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/120.js#L31-L39)

```diff
-         var lq;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, Bq.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, Bq.jsx)(Yq.e, {
-           showFace: !0,
-           loading: !0
+       }), [FC]);
+       const eC = null !== qC && void 0 !== qC ? qC : vC.current;
+       return (0, NC.jsx)("div", {
+         ref: WC,
+         className: wC()("CrosshairShapes", {
+           CrosshairInPreview: ZC,
+           CrosshairInEditor: QC || ZC,
+           CrosshairSpreads: void 0 !== FC
+         }),
+         children: (0, NC.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: GC.x,
+             top: GC.y,
+             opacity: zC.opacity / 100
+           },
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L43` → after: `L503-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L503-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/120.js#L503-L1103) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/120.js#L43)

```diff
-   }
+   },
+   34134: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       c: () => pC,
+       g: () => SC
+     });
+     var QC = ZC(34116);
+     const wC = "XH1-",
+       bC = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       nC = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       fC = ["color", "outlineColor"],
+       oC = 1 + 3 * fC.length + nC.length + 1,
+       qC = Math.ceil(8 * oC / Math.log2(62)),
+       FC = wC.length + qC;
+ 
+ ... (585 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L6)

```diff
-   6414: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Sq
+   6490: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L8-L427` → after: `L8-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L8-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/121.js#L8-L166) · [Before (L8-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/121.js#L8-L427)

```diff
-     var Yq = gq(57),
-       lq = gq(1512),
-       Oq = gq(1018),
-       mq = gq.n(Oq),
-       xq = gq(296),
-       Aq = gq(6424),
-       cq = gq(1025),
-       uq = gq(1498),
-       Bq = gq(4387),
-       Wq = gq(1422),
-       Nq = gq(3040),
-       aq = gq(4393),
-       Vq = gq(1659),
-       dq = gq(4379),
-       jq = gq(1101),
-       Hq = gq(24),
- ... (404 more removed lines; see GitHub link above)
+     const QC = {
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/122.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/122.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994)

#### 1. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122];
+ export const ids = [122, 396];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L6)

```diff
-   6428: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => xq
+   36221: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => lz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L8)

```diff
-     var Yq = gq(1018),
+     var QC = ZC(310),
+       wC = ZC(3464),
+       bC = ZC(3498),
+       nC = ZC(3490),
+       fC = ZC(3487),
+       oC = ZC(1143),
+       qC = ZC(38),
+       FC = ZC(1645),
+       WC = ZC(1321),
+       NC = ZC(1388),
+       MC = ZC(1002),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L10-L11` → after: `L20-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L20-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L20-L40) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L10-L11)

```diff
-       Oq = gq(1183),
-       mq = gq(1070);
+       SC = ZC(1593),
+       pC = ZC(48),
+       PC = ZC(60),
+       GC = ZC(2311),
+       RC = ZC(1284),
+       AC = ZC(1542),
+       xC = ZC(1076),
+       JC = ZC(3403),
+       IC = ZC(4491),
+       iC = ZC(3450),
+       vC = ZC(1811),
+       eC = ZC(3460),
+       hC = ZC(1657),
+       KC = ZC(1439),
+       YC = ZC(2086),
+       dC = ZC(1295),
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L15-L16` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L45) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L15-L16)

```diff
-         item: Eq,
-         className: gq
+         eventName: ZC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L20-L24` → after: `L49-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L49-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L49-L243) · [Before (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L20-L24)

```diff
-       } = (0, Oq.v)();
-       return null === Eq.renderId || Eq.previewsOutdated ? (0, mq.jsx)("div", {
-         className: lq()("ShaderPackPreviewsNotice", gq),
-         children: (0, mq.jsx)("span", {
-           children: Yq(null === Eq.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
+       } = (0, oC.y)(), wC = hC.g[ZC], [bC, nC] = (0, pC.useState)((() => Date.now() >= wC.endsAt.getTime())), [fC, qC] = (0, pC.useState)("overall"), FC = function(CC, zC) {
+         const {
+           userContext: ZC,
+           isUserContextUpdating: QC
+         } = (0, xC.e)(), wC = `${CC}:${zC}`, [bC, nC] = (0, pC.useState)({
+           requestKey: wC,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, pC.useEffect)((() => {
+           if (QC) return;
+           let bC, fC = !1;
+           const oC = async () => {
+             if ("visible" === document.visibilityState) try {
+               const QC = await KC.d.getGameEventLeaderboard(ZC, {
+ ... (179 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L26` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L245) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L26)

```diff
-       }) : null
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L42-L44` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L250-L251) · [Before (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L42-L44)

```diff
-         selected: Eq,
-         onSelect: gq,
-         imageUrl: Yq
+         event: zC,
+         progress: ZC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L48` → after: `L255-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L255-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L255-L319) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L48)

```diff
-       } = (0, mq.v)();
+       } = (0, oC.y)(), wC = null !== ZC && zC.prizeGoals.some(((CC, zC) => ZC[zC] >= CC.target));
+       return (0, EC.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, EC.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: QC(wC ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, EC.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: zC.prizeGoals.map(((CC, zC) => {
+             const wC = null === ZC ? null : Math.min(ZC[zC], CC.target);
+             return (0, EC.jsxs)(pC.Fragment, {
+               children: [zC > 0 && (0, EC.jsx)("div", {
+                 className: "GameEventPanelGoalsOr",
+                 children: QC("gameEvents:goalsOr")
+               }), (0, EC.jsxs)("div", {
+                 className: gC()("GameEventPanelGoal", {
+ ... (49 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L50-L69` → after: `L321-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L321-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L321-L345) · [Before (L50-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L50-L69)

```diff
-         className: "ShaderPackViewPicker",
-         children: Oq.E.map((qq => {
-           const Oq = Yq(qq);
-           return (0, Aq.jsxs)("button", {
-             type: "button",
-             "aria-pressed": qq === Eq,
-             className: lq()("ShaderPackViewOption", {
-               Selected: qq === Eq
-             }),
-             onClick: () => {
-               gq(qq)
-             },
-             children: [null !== Oq && (0, Aq.jsx)("img", {
-               src: Oq,
-               alt: "",
-               loading: "lazy",
- ... (4 more removed lines; see GitHub link above)
+         className: "GamePageContent",
+         children: (0, EC.jsxs)("div", {
+           className: "GamePageContentColumns",
+           children: [(0, EC.jsxs)("section", {
+             className: "GamePageContentSection",
+             children: [(0, EC.jsx)("h2", {
+               children: bC.whatIs
+             }), QC.whatIs.map((CC => (0, EC.jsx)("p", {
+               children: CC
+             }, CC)))]
+           }), (0, EC.jsxs)("section", {
+             className: "GamePageContentSection",
+             children: [(0, EC.jsx)("h2", {
+               children: bC.howToPlay
+             }), QC.howToPlay.map((CC => (0, EC.jsx)("p", {
+               children: CC
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L71-L72` → after: `L347-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L347-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L347-L393) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L71-L72)

```diff
-           }, qq)
-         }))
+           }), (0, EC.jsxs)("aside", {
+             className: "GamePageContentSection",
+             children: [(0, EC.jsx)("h2", {
+               children: bC.tips
+             }), (0, EC.jsx)("ul", {
+               children: QC.tips.map((CC => (0, EC.jsx)("li", {
+                 children: CC
+               }, CC)))
+             })]
+           }), (0, EC.jsxs)("section", {
+             className: "GamePageContentSection GamePageContentFaq",
+             children: [(0, EC.jsx)("h2", {
+               children: bC.faq
+             }), QC.faq.map((CC => {
+               let {
+                 question: zC,
+ ... (31 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L75-L84` → after: `L396-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L396-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L396-L410) · [Before (L75-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L75-L84)

```diff
-   },
-   6431: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Wq,
-       h: () => Nq,
-       l: () => Bq,
-       m: () => aq
-     });
-     var Yq = gq(57),
-       lq = gq(6424),
+     var jC = ZC(1013),
+       yC = ZC(77),
+       LC = ZC(1078),
+       UC = ZC(34202),
+       BC = ZC(1575),
+       OC = ZC(1463),
+       kC = ZC(1453),
+       VC = ZC(1540),
+       Cz = ZC(1394),
+       zz = ZC(1307),
+       Zz = ZC(36223),
+       Qz = ZC(1178),
+       wz = ZC(970),
+       bz = ZC(326),
+       nz = ZC(979),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L86-L90` → after: `L412-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L412-L418) · [Before (L86-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L86-L90)

```diff
-       mq = gq(6422),
-       xq = gq(6434),
-       Aq = gq(1101);
-     const cq = "shaderPackListingView",
-       uq = "shaderPackListingFilterOpen";
+       oz = ZC(8912),
+       qz = ZC(20),
+       Fz = ZC(2465),
+       Wz = ZC(728),
+       Nz = ZC(1169),
+       Mz = ZC(6513),
+       gz = ZC(3452);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L92-L105` → after: `L420-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L420-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L420-L442) · [Before (L92-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L92-L105)

```diff
-     function Bq() {
-       var qq;
-       const [Eq, gq] = (0, xq.b)(cq, lq.E[0]);
-       return [null !== (qq = lq.E.find((qq => qq === Eq))) && void 0 !== qq ? qq : lq.E[0], gq]
-     }
- 
-     function Wq() {
-       (0, Yq.useEffect)((() => () => {
-         window.location.pathname.startsWith(mq.V) || (0, mq.g)()
-       }), [])
-     }
- 
-     function Nq() {
-       return (0, xq.b)(uq, !1)
+     function Sz(CC) {
+       let {
+         preview: zC,
+         isBroken: ZC
+       } = CC;
+       const QC = null === zC ? null : (0, bC.g)(zC, "small"),
+         nC = (0, wC.e)(null !== QC && void 0 !== QC ? QC : bC.p);
+       return null === zC ? (0, EC.jsx)("div", {
+         className: gC()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: ZC
+         }),
+         children: (0, EC.jsx)(jC.c, {
+           name: ZC ? "triangle-exclamation" : "star"
+         })
+       }) : (0, EC.jsx)("div", {
+         className: gC()("FeaturedGamesPopupSlotThumbnail", fC.k),
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L108` → after: `L445-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L445-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L445-L449) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L108)

```diff
-     function aq() {
+     function pz(CC) {
+       let {
+         schematicId: zC,
+         gameName: ZC
+       } = CC;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L110-L117` → after: `L451-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L451-L456) · [Before (L110-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L110-L117)

```diff
-         userContext: qq,
-         isUserContextUpdating: Eq
-       } = (0, Aq.c)(), [gq, lq] = (0, Yq.useState)(null), mq = (0, Yq.useRef)(new Set);
- 
-       function xq(qq, Eq) {
-         lq((gq => {
-           const Yq = new Set(gq);
-           return Eq ? Yq.add(qq) : Yq.delete(qq), Yq
+         userContext: wC
+       } = (0, xC.e)(), bC = (0, gz.e)(), [nC, fC] = (0, pC.useState)(null), [oC, qC] = (0, pC.useState)(null), [FC, WC] = (0, pC.useState)(!1), MC = (0, pC.useCallback)((() => {
+         qC(null), KC.d.getFeaturedGames(wC).then((CC => {
+           bC.current && fC(CC.slots)
+         })).catch((CC => {
+           console.error("Failed to get featured games", CC), bC.current && qC("Failed to load featured games")
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L119-L124` → after: `L458-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L458-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L458-L464) · [Before (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L119-L124)

```diff
-       }
-       return (0, Yq.useEffect)((() => {
-         if (Eq) return;
-         let gq = !1;
-         return Oq.e.getFavouriteShaderPacks(qq).then((qq => {
-           gq || lq(new Set(qq))
+       }), [wC, bC]);
+       (0, pC.useEffect)((() => {
+         MC()
+       }), [MC]);
+       const gC = (CC, zC) => {
+         FC || (WC(!0), KC.d.setFeaturedGame(wC, CC, zC).then((() => {
+           bC.current && MC()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L126-L205` → after: `L466-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L466-L469) · [Before (L126-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L126-L205)

```diff
-           console.error("Failed to get favourite shader packs", qq), gq || lq(new Set)
-         })), () => {
-           gq = !0
-         }
-       }), [qq, Eq]), {
-         isFavourite: qq => null === gq ? null : gq.has(qq),
-         toggle: function(Eq) {
-           if (null === gq || mq.current.has(Eq)) return;
-           mq.current.add(Eq);
-           const Yq = !gq.has(Eq);
-           xq(Eq, Yq), (Yq ? Oq.e.favouriteShaderPack(qq, Eq) : Oq.e.unfavouriteShaderPack(qq, Eq)).catch((qq => {
-             console.error("Failed to change a favourite shader pack", qq), xq(Eq, !Yq)
-           })).finally((() => {
-             mq.current.delete(Eq)
-           }))
-         }
- ... (64 more removed lines; see GitHub link above)
+           console.error("Failed to set featured game", CC), bC.current && qC("Failed to update the featured slot")
+         })).finally((() => {
+           bC.current && WC(!1)
+         })))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L207-L213` → after: `L471-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L471-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L471-L551) · [Before (L207-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L207-L213)

```diff
- 
-     function dq(qq, Eq) {
-       return qq.withFeatures.includes(Eq) ? "with" : qq.withoutFeatures.includes(Eq) ? "without" : null
-     }
- 
-     function jq(qq) {
-       return null === qq ? "with" : "with" === qq ? "without" : null
+       return (0, EC.jsxs)("div", {
+         className: "FeaturedGamesPopupBody",
+         children: [(0, EC.jsx)("h1", {
+           className: "FeaturedGamesPopupTitle",
+           children: "Featured Games"
+         }), !nC && !oC && (0, EC.jsx)("div", {
+           className: "FeaturedGamesPopupLoader",
+           children: (0, EC.jsx)(dC.d, {})
+         }), oC && (0, EC.jsx)("div", {
+           className: "FeaturedGamesPopupError",
+           children: oC
+         }), nC && (0, EC.jsxs)(EC.Fragment, {
+           children: [(0, EC.jsx)("div", {
+             className: "FeaturedGamesPopupSlots",
+             children: nC.map((CC => {
+               const ZC = CC.schematicId === zC,
+ ... (65 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L217` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L560-L582) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L217)

```diff
-       return "with" === qq ? "only" : null === qq ? "include" : void 0
+       let {
+         customLobbies: zC,
+         favouriteLobbies: ZC,
+         toggleLikeLobby: QC,
+         showReport: wC
+       } = CC;
+       const [bC, nC] = (0, pC.useState)(Az);
+       return (0, pC.useEffect)((() => {
+         if (bC >= zC.length) return;
+         let CC = !0;
+         return (0, Rz.e)().then((() => {
+           CC && nC(bC + xz)
+         })), () => {
+           CC = !1
+         }
+       }), [bC, zC.length]), (0, EC.jsx)(EC.Fragment, {
+ ... (7 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L221-L222` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L613) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L221-L222)

```diff
-       const gq = dq(qq, Eq),
-         Yq = qq => qq.filter((qq => qq !== Eq));
+       const ZC = Wz.f[CC.schematicId];
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L224-L225` → after: `L615-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L615-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L615-L629) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L224-L225)

```diff
-         withFeatures: null === gq ? [...qq.withFeatures, Eq] : Yq(qq.withFeatures),
-         withoutFeatures: "with" === gq ? [...qq.withoutFeatures, Eq] : Yq(qq.withoutFeatures)
+         listedVariations: [],
+         backgroundImage: (0, bC.g)(CC, "large"),
+         badges: [],
+         category: CC.gameCategory,
+         title: void 0 !== (null === ZC || void 0 === ZC ? void 0 : ZC.title) ? zC(ZC.title) : CC.name,
+         variationTitle: null,
+         description: void 0 !== (null === ZC || void 0 === ZC ? void 0 : ZC.description) ? zC(ZC.description) : CC.description,
+         ownerSocialPreviewWithoutLocation: "owner" in CC ? CC.owner : null,
+         ccu: CC.ccu,
+         favourites: CC.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in CC ? CC.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+         canCreateCustomLobbies: !0,
+         countdownInformation: null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L238-L249` → after: `L635-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L635-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L635-L641) · [Before (L238-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L238-L249)

```diff
-       const mq = qq.get(Pq),
-         xq = (null !== (Eq = qq.get(yq)) && void 0 !== Eq ? Eq : hq).split(","),
-         Aq = qq.get(rq);
-       return {
-         section: "favourites" === mq || "mine" === mq ? mq : "explore",
-         sort: null !== (gq = Yq.v.find((Eq => Eq === qq.get(Qq)))) && void 0 !== gq ? gq : vq,
-         withFeatures: aq.filter((qq => xq.includes(qq) && !xq.includes(`-${qq}`))),
-         withoutFeatures: aq.filter((qq => xq.includes(`-${qq}`))),
-         searchQuery: (null === (lq = qq.get(tq)) || void 0 === lq ? void 0 : lq.slice(0, Yq.I)) || null,
-         pageNumber: (0, Oq.e)(qq.get(Oq.d)),
-         banned: "only" === Aq ? "with" : "include" === Aq ? null : "without"
-       }
+       return null !== (zC = null !== (ZC = (0, Kz.n)() ? function(CC) {
+         for (const [zC, ZC] of Object.entries(Yz)) {
+           const QC = [zC, ...ZC.map((CC => (0, bz.Bb)(zC, CC)))];
+           if (QC.includes(CC)) return QC
+         }
+         return null
+       }(CC) : null) && void 0 !== ZC ? ZC : null === (QC = Wz.d[CC]) || void 0 === QC ? void 0 : QC.listedVariations) && void 0 !== zC ? zC : null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L252-L255` → after: `L644-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L644-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L644-L689) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L252-L255)

```diff
-     function bq(qq, Eq) {
-       var gq;
-       const Yq = Mq(Eq);
-       (0, Oq.f)(qq, Pq, "explore" === Eq.section ? null : Eq.section), (0, Oq.f)(qq, Qq, Eq.sort === vq ? null : Eq.sort), (0, Oq.f)(qq, yq, Yq === hq ? null : Yq), (0, Oq.f)(qq, tq, Eq.searchQuery), (0, Oq.f)(qq, rq, null !== (gq = Hq(Eq.banned)) && void 0 !== gq ? gq : null), ( … [truncated]
+     function lz() {
+       const {
+         gameNameWithVariation: CC
+       } = (0, OC.C)();
+       if ((0, pC.useEffect)(ez.m, []), CC && (0, Qz.r)(CC)) return (0, EC.jsx)(Xz, {
+         urlId: CC
+       }, CC);
+       const zC = CC && (0, wz.i)(CC) ? CC : "firstParty";
+       return (0, EC.jsx)(cz, {}, zC)
+     }
+ 
+     function Xz(CC) {
+       let {
+         urlId: zC
+       } = CC;
+       const {
+ ... (30 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L259-L268` → after: `L693-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L693-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L693-L1269) · [Before (L259-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L259-L268)

```diff
-       const Eq = new URLSearchParams;
-       return bq(Eq, {
-         section: "explore",
-         sort: vq,
-         withFeatures: "strict" === qq ? [qq] : [qq, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${mq}?${Eq.toString()}`
+       var zC, ZC, nC, MC, hC, YC, dC, HC;
+       let {
+         gameNameWithVariation: lC,
+         knownCustomGame: XC = null
+       } = CC;
+       const {
+         t: uC
+       } = (0, oC.y)();
+       (0, Fz.j)();
+       const sC = (0, Fz.r)(),
+         {
+           userContext: TC,
+           isUserContextUpdating: aC
+         } = (0, xC.e)(),
+         tC = (0, vz.h)(),
+         LC = (0, kC.useNavigatePreserveSearch)(),
+ ... (561 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L272` → after: `L1273-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1273-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1273-L1301) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L272)

```diff
-       return Mq(qq) === hq
+       let {
+         variation: zC,
+         isSelected: ZC,
+         children: QC
+       } = CC;
+       const oC = Wz.d[zC],
+         FC = (0, bC.k)(zC, (0, bC.n)(oC)),
+         WC = (0, wC.e)(FC),
+         NC = (0, nC.g)([(0, bC.i)(zC, (0, bC.e)(oC))]);
+       return (0, EC.jsxs)(kC.LinkPreserveSearch, {
+         to: (0, rC.v)(zC),
+         replace: !0,
+         className: gC()("GameInformationVariation", fC.k, {
+           SelectedGameInformationVariation: ZC
+         }),
+         onClick: CC => {
+ ... (13 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L276` → after: `L1322-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1322-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1322-L1363) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L276)

```diff
-       return null !== qq.searchQuery || "with" === qq.banned || Mq(qq) !== hq
+       let {
+         info: zC,
+         className: ZC
+       } = CC;
+       const {
+         statusText: QC,
+         rowText: wC
+       } = (0, MC.g)();
+       return (0, gC.jsxs)("div", {
+         className: NC()("GameApprovalInfoDetails", ZC),
+         children: [(0, gC.jsxs)("div", {
+           className: NC()("GameApprovalInfoSummary", zC.overallPassed ? "Passed" : "Failed"),
+           children: [(0, gC.jsx)(FC.c, {
+             name: zC.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, gC.jsx)("span", {
+             children: QC(zC.status)
+ ... (26 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L280-L283` → after: `L1369-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1369-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1369-L1376) · [Before (L280-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L280-L283)

```diff
-       return aq.flatMap((Eq => {
-         const gq = dq(qq, Eq);
-         return "with" === gq ? [Eq] : "without" === gq ? [`-${Eq}`] : []
-       })).join(",")
+       PC.NotificationProvider.showCustomPopup({
+         body: () => (0, gC.jsx)(RC, {
+           ...CC
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L299` → after: `L1380-L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1380-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1380-L1469) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L299)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / qq))
+       let {
+         schematicId: zC,
+         canOverride: ZC,
+         onApprovalChanged: WC
+       } = CC;
+       const {
+         t: NC
+       } = (0, pC.y)(), {
+         userContext: MC
+       } = (0, fC.e)(), PC = (0, nC.e)(), [GC, RC] = (0, QC.useState)(null), [AC, xC] = (0, QC.useState)(null), [JC, IC] = (0, QC.useState)(!1), iC = (0, QC.useCallback)((() => {
+         xC(null), bC.d.getGameApprovalInfo(MC, zC).then((CC => {
+           PC.current && RC(CC)
+         })).catch((CC => {
+           console.error("Failed to get game approval info", CC), PC.current && xC(NC("studio:approvalLoadFailed"))
+         }))
+       }), [MC, zC, PC, NC]);
+ ... (74 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L302-L308` → after: `L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1488) · [Before (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L302-L308)

```diff
-     function pq(qq, Eq, gq, lq) {
-       const Oq = [];
-       qq.isBanned && Oq.push({
-         tone: "warning",
-         text: lq("shaderPackListing:ownerBanned"),
-         detail: null
-       });
+     function nC() {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L310-L331` → after: `L1490-L1546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1490-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1490-L1546) · [Before (L310-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L310-L331)

```diff
-         pending: mq
-       } = qq;
-       if (null === qq.brokenError || mq && !mq.error || Oq.push({
-           tone: "warning",
-           text: lq("shaderPackListing:ownerBroken"),
-           detail: qq.brokenError
-         }), null !== mq && void 0 !== mq && mq.error) Oq.push({
-         tone: "warning",
-         text: lq(Eq ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
-         detail: (0, Yq.k)(mq.error) ? null : mq.error
-       });
-       else if (mq) {
-         const qq = null === mq.renderNotBefore ? 0 : mq.renderNotBefore - gq,
-           Yq = String(Math.ceil(qq / 6e4)),
-           xq = lq(Eq ? qq > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : qq > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
-             minutes: Yq
- ... (6 more removed lines; see GitHub link above)
+         t: CC,
+         selectedLanguage: zC
+       } = (0, wC.y)();
+       return {
+         statusText: zC => CC(bC[zC]),
+         rowText: ZC => {
+           const bC = (CC, ZC) => (0, QC.U)((0, wC.m)(zC.code, CC), 0, ZC);
+           switch (ZC.kind) {
+             case "ownerAccountAge": {
+               const zC = ZC.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: CC("studio:approvalAccountAgeLabel"),
+                 value: CC(zC, {
+                   age: bC(zC, ZC.accountAgeMs),
+                   days: ZC.minAccountAgeDays
+                 })
+ ... (41 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L341-L345` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1551) · [Before (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L341-L345)

```diff
-       return Math.max(1, Math.round(qq / 1024))
-     }
- 
-     function Lq(qq, Eq, gq) {
-       return qq instanceof lq.b && qq.errorMessageForUser ? qq.errorMessageForUser : Eq(gq)
+       return null === CC.manualOverride && CC.rows.some((CC => "reportHold" === CC.kind && !CC.passed))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L348` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1554) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L348)

```diff
-   6434: (qq, Eq, gq) => {
+   34202: (CC, zC, ZC) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L350` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1556) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L350)

```diff
-       b: () => Oq
+       e: () => bC
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L352-L353` → after: `L1558-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1558-L1559) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L352-L353)

```diff
-     var Yq = gq(57),
-       lq = gq(38);
+     var QC = ZC(48),
+       wC = ZC(3419);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L355-L360` → after: `L1561-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1561-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1561-L1570) · [Before (L355-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L355-L360)

```diff
-     function Oq(qq, Eq) {
-       var gq;
-       const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
-       return [Oq, Eq => {
-         lq.i.setItem(qq, Eq), mq(Eq)
-       }]
+     function bC() {
+       const [CC, zC] = (0, QC.useState)(!1);
+       return (0, QC.useLayoutEffect)((() => {
+         let CC = !0;
+         return (0, wC.e)().then((() => {
+           CC && zC(!0)
+         })), () => {
+           CC = !1
+         }
+       }), []), CC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L363` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1573) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L363)

```diff
-   6424: (qq, Eq, gq) => {
+   8912: (CC, zC, ZC) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L365-L381` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1575) · [Before (L365-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L365-L381)

```diff
-       D: () => mq,
-       E: () => Yq,
-       G: () => Wq,
-       I: () => uq,
-       K: () => oq,
-       N: () => Bq,
-       R: () => cq,
-       e: () => Nq,
-       g: () => Vq,
-       i: () => aq,
-       k: () => Hq,
-       m: () => Qq,
-       n: () => Aq,
-       p: () => lq,
-       r: () => Pq,
-       v: () => Oq,
- ... (1 more removed lines; see GitHub link above)
+       b: () => nC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L383-L410` → after: `L1577-L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1577-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1577-L1579) · [Before (L383-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L383-L410)

```diff
-     const Yq = ["forest", "desert", "water", "night", "cave"];
-     const lq = {
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
-       Oq = ["popular", "updated", "newest"],
- ... (12 more removed lines; see GitHub link above)
+     var QC = ZC(1284),
+       wC = ZC(1169),
+       bC = ZC(600);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L413-L424` → after: `L1582-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1582-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1582-L1603) · [Before (L413-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L413-L424)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(qq)}`
-     }
-     const dq = "Screenshot generation failed.",
-       jq = "Its screenshots couldn't be generated:";
- 
-     function Hq(qq) {
-       var Eq;
-       return qq === dq || null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.startsWith(jq)) && void 0 !== Eq && Eq
-     }
- 
-     function oq(qq, Eq) {
-       return `shaderPacks/${qq}/${Eq}.json`
+       return CC = function(CC, zC) {
+         var ZC;
+         const QC = new URLSearchParams(zC),
+           wC = QC.get("lobby"),
+           bC = QC.get("vm"),
+           nC = null !== (ZC = wC) && void 0 !== ZC ? ZC : CC.lobbyName,
+           fC = null !== bC && void 0 !== bC ? bC : CC.directJoinVmUrl;
+         if (nC === CC.lobbyName && fC === CC.directJoinVmUrl) return CC;
+         return {
+           ...CC,
+           lobbyName: nC,
+           directJoinVmUrl: fC
+         }
+       }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), CC = function(CC) {
+         if ((0, bC.H)(CC.directJoinVmUrl)) return CC;
+         const zC = (0, wC.hb)(CC.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L427-L428` → after: `L1613-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1613-L1614) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L427-L428)

```diff
-     function Pq(qq, Eq, gq, Yq) {
-       return null === Eq.renderId ? Qq(qq, Eq.baselineVersion, gq, Yq) : `${qq}/${function(qq,Eq,gq,Yq){return`shaderPacks/${qq}/${Eq}/${gq}-${Yq}.webp`}(Eq.packId,Eq.renderId,gq,Yq)}`
+     function wC() {
+       QC = !0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L431-L432` → after: `L1617-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L1617-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/122.js#L1617-L1618) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/122.js#L431-L432)

```diff
-     function Qq(qq, Eq, gq, Yq) {
-       return `${qq}/${function(qq,Eq,gq){return`shaderPacks/baseline/${qq}/${Eq}-${gq}.webp`}(Eq,gq,Yq)}`
+     function bC() {
+       return QC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/123.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/123.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L4)

```diff
-   40813: (qq, Eq, gq) => {
+   6529: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L6)

```diff
-       ShaderPackCategory: () => fq
+       default: () => SC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L25` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L8-L17) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L8-L25)

```diff
-     var Yq = gq(57),
-       lq = gq(1512),
-       Oq = gq(1422),
-       mq = gq(1498),
-       xq = gq(1183),
-       Aq = gq(96),
-       cq = gq(24),
-       uq = gq(1622),
-       Bq = gq(6496),
-       Wq = gq(275),
-       Nq = gq(6531),
-       aq = gq(6526),
-       Vq = gq(6535),
-       dq = gq(6422),
-       jq = gq(4828),
-       Hq = gq(6473),
- ... (2 more removed lines; see GitHub link above)
+     var QC = ZC(1143),
+       wC = ZC(113),
+       bC = ZC(216),
+       nC = ZC(1388),
+       fC = ZC(1263),
+       oC = ZC(20),
+       qC = ZC(1609),
+       FC = ZC(3389),
+       WC = ZC(3110),
+       NC = ZC(1056);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L27-L105` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L19) · [Before (L27-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L27-L105)

```diff
-     function Qq(qq, Eq) {
-       const gq = (0, Nq.storedPackOutcome)(qq, Eq);
-       return "none" !== gq.kind || "noCompiler" === gq.reason
-     }
-     var yq = gq(1018),
-       tq = gq.n(yq),
-       rq = gq(6482),
-       vq = gq(1025),
-       hq = gq(6467),
-       nq = gq(1070);
-     const bq = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
- ... (63 more removed lines; see GitHub link above)
+     function MC() {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L108-L150` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L22-L24) · [Before (L108-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L108-L150)

```diff
-       } = (0, xq.v)(), [lq, mq] = (0, Yq.useState)(null), [cq, uq] = (0, Yq.useState)(null), [Pq, yq] = (0, Yq.useState)(null), [tq] = (0, Yq.useState)(Wq.f), [rq, vq] = (0, Yq.useState)(!0), [hq, bq] = (0, Yq.useState)(!1), {
-         loading: iq,
-         error: fq,
-         setError: Tq,
-         onFiles: zq
-       } = (0, oq.c)((async qq => {
-         const Eq = await (0, Bq.loadPageShaderPackCompiler)();
-         if (!Eq) return void Tq(gq("shaderPack:compilerUnavailable"));
-         uq(Eq);
-         const Yq = (0, Nq.toStoredShaderPack)(qq, await (0, aq.e)(Eq, qq.files));
-         await (0, Nq.saveShaderPack)(Yq, Eq) ? (mq(Yq), Sq(lq, Yq, Eq)) : Tq(gq("shaderPack:saveFailed"))
-       }));
- 
-       function Sq(qq, gq, Yq) {
-         (function(qq, Eq, gq, Yq) {
-           return gq || Qq(qq, Yq) || Qq(Eq, Yq)
- ... (27 more removed lines; see GitHub link above)
+       } = (0, QC.y)(), zC = !(0, bC.shouldUseUkPrivacyPolicy)();
+       return (0, NC.jsxs)("div", {
+         className: "LegalText",
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L152-L159` → after: `L26-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L26-L30) · [Before (L152-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L152-L159)

```diff
-           className: "ShaderPackIntro",
-           children: gq("shaderPack:intro")
-         }), (0, nq.jsx)(Mq, {
-           to: dq.V,
-           className: "ShaderPackBrowseLink",
-           children: (0, nq.jsx)(Oq.p, {
-             className: "ShaderPackBrowseButton",
-             children: gq("shaderPackListing:browse")
+           className: "BloxdInformationHeader FullyFancyText",
+           children: CC("homePage:privacyPolicy")
+         }), (0, NC.jsx)("p", {
+           children: (0, NC.jsxs)("em", {
+             children: ["Last updated: ", FC.k.toLocaleDateString()]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L161-L178` → after: `L32-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L32-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L32-L573) · [Before (L161-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L161-L178)

```diff
-         }), !1 === Pq && (0, nq.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: gq(tq ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== fq && (0, nq.jsxs)("div", {
-           className: "ShaderPackCategoryError",
-           children: [gq("general:error"), ": ", fq]
-         }), lq && (0, nq.jsxs)("div", {
-           className: "SettingBox ShaderPackSummary",
-           children: [(0, nq.jsxs)("div", {
-             className: "ShaderPackSummaryHeader",
-             children: [(0, nq.jsxs)("div", {
-               children: [(0, nq.jsx)("div", {
-                 className: "ShaderPackName",
-                 children: lq.manifest.name
-               }), lq.manifest.author && (0, nq.jsx)("div", {
-                 className: "ShaderPackAuthor",
- ... (2 more removed lines; see GitHub link above)
+         }), (0, NC.jsx)("p", {
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, NC.jsx)("h2", {
+           children: "1. Who We Are"
+         }), (0, NC.jsx)("p", {
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
+         }), (0, NC.jsx)("p", {
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+         }), (0, NC.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, NC.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, NC.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, NC.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+ ... (526 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L180-L188` → after: `L575-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L575-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L575-L590) · [Before (L180-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L180-L188)

```diff
-               }), lq.manifest.description && (0, nq.jsx)("div", {
-                 className: "ShaderPackDescription",
-                 children: lq.manifest.description
-               }), lq.listing && (0, nq.jsx)("div", {
-                 className: "ShaderPackAuthor",
-                 children: (0, nq.jsx)(Mq, {
-                   to: (0, dq.$)(lq.listing.packId),
-                   className: "ShaderPackListingLink",
-                   children: gq("shaderPackListing:openPackPage")
+               })
+             }), (0, NC.jsx)("td", {
+               children: (0, NC.jsxs)("p", {
+                 children: ["Advertiser data, ad performance data", zC ? ", personalized with your consent" : ""]
+               })
+             }), (0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: "Manages and optimizes the display of advertisements on our website."
+               })
+             })]
+           }), (0, NC.jsxs)("tr", {
+             children: [(0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: (0, NC.jsx)("a", {
+                   href: "https://nitropay.com/privacy",
+                   children: "Nitro (NitroPay)"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L190-L204` → after: `L592-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L592-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L592-L618) · [Before (L190-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L190-L204)

```diff
-               })]
-             }), (0, nq.jsx)(Oq.L, {
-               disabled: rq || iq,
-               onClick: async function() {
-                 vq(!0), Tq(null), await (0, Nq.removeShaderPack)(), mq(null), vq(!1), Sq(lq, null, cq)
-               },
-               children: gq("shaderPack:removePack")
-             })]
-           }), (0, nq.jsx)(Zq, {
-             stored: lq,
-             checking: hq,
-             webGpuUsable: Pq,
-             changePending: (0, Nq.isShaderPackChangePending)(),
-             compiler: cq,
-             t: gq
+               })
+             }), (0, NC.jsx)("td", {
+               children: (0, NC.jsxs)("p", {
+                 children: ["Advertiser data, ad performance data", zC ? ", personalized with your consent" : ""]
+               })
+             }), (0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: "Manages and delivers in-game advertisements on our website, and manages advertising consent and opt-out choices."
+               })
+             })]
+           }), (0, NC.jsxs)("tr", {
+             children: [(0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: (0, NC.jsx)("a", {
+                   href: "https://policies.google.com/privacy",
+                   children: "Google AdMob"
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L206-L209` → after: `L620-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L620-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L620-L1057) · [Before (L206-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L206-L209)

```diff
-         }), (0, nq.jsx)(oq.b, {
-           busy: rq || iq || hq,
-           disabled: rq || iq || hq || !0 !== Pq,
-           onFiles: zq
+         }), (0, NC.jsx)("h4", {
+           children: "Analytics"
+         }), (0, NC.jsxs)("table", {
+           children: [(0, NC.jsxs)("tr", {
+             children: [(0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, NC.jsx)("td", {
+               children: (0, NC.jsx)("p", {
+                 children: "What They Do"
+               })
+ ... (422 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L214-L219` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L1062) · [Before (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L214-L219)

```diff
-     function Mq(qq) {
-       let {
-         to: Eq,
-         className: gq,
-         children: Yq
-       } = qq;
+     function gC() {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L221-L229` → after: `L1064-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1064-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L1064-L1068) · [Before (L221-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L221-L229)

```diff
-         gameState: Oq
-       } = (0, cq.j)(["gameState"]), {
-         pathname: xq,
-         search: Aq
-       } = (0, lq.q)(), Bq = "landingPage" !== Oq && "studio" !== Oq;
-       return (0, nq.jsx)(mq.LinkPreserveSearch, {
-         to: Eq,
-         className: gq,
-         target: Bq ? "_blank" : void 0,
+         adMobPrivacyOptionsRequired: CC
+       } = (0, oC.k)(["adMobPrivacyOptionsRequired"]);
+       if (!CC) return null;
+       return (0, NC.jsx)(nC.g, {
+         className: "PrivacyChoicesButton",
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L231` → after: `L1070-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1070-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/123.js#L1070-L1076) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/123.js#L231)

```diff
-           Bq || ((0, dq.C)(`${xq}${Aq}`), (0, uq.f)())
+           (async () => {
+             try {
+               await qC.d.request("ads.showPrivacyOptions", {})
+             } catch (CC) {
+               console.error("Failed to open AdMob privacy options:", CC)
+             }
+           })()
```
