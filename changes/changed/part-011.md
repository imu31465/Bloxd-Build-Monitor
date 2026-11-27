# Changed — Bundle Modifications Report (Part 011 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `11 / 86` (**254** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/165.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/165.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd)

#### 6. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L57-L63` → after: `L41-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L41-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L41-L60) · [Before (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L57-L63)

```diff
-       muteGameDuring(BB) {
-         return this.fullScreenAdsInFlight++, DB.c.set({
-           soundOnFromAd: !1
-         }), BB.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && DB.c.set({
-             soundOnFromAd: !0
-           })
+       failPopup(WW) {
+         var iW;
+         const OW = this.popupWindowPromiseReject;
+         null === (iW = this.popupWindow) || void 0 === iW || iW.close(), this.resetPopupState(), null === OW || void 0 === OW || OW(WW)
+       }
+       openDiscordOAuthWindow() {
+         const WW = xW.d.discordClientID;
+         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${WW}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
+       }
+       async showDiscordAuthPrompt() {
+         return new Promise(((WW, iW) => {
+           ZW.NotificationProvider.showPromptPopup({
+             title: "Discord Login Required",
+             confirmText: "Continue",
+             confirmTooltip: "Open Discord login window",
+             cancelText: "Cancel",
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L66-L77` → after: `L63-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L63-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L63-L72) · [Before (L66-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L66-L77)

```diff
-       playRewarded(BB, OB) {
-         const GB = this.adUnitIds.rewarded;
-         this.muteGameDuring(QB.e.request("ads.showRewarded", {
-           placementId: GB
-         })).then((GB => {
-           let {
-             rewarded: YB
-           } = GB;
-           YB ? BB() : OB()
-         }), (BB => {
-           console.warn(`AD ${GB}: AdMob rewarded failed:`, BB), OB()
-         }))
+       signInWithPopup() {
+         if (null !== this.popupWindowPromise) return this.popupWindowPromise;
+         const WW = new Promise(((WW, iW) => {
+           this.popupWindowPromiseResolve = WW, this.popupWindowPromiseReject = iW
+         }));
+         return this.popupWindowPromise = WW, wW.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
+           this.failPopup(new Error("Discord authentication timed out"))
+         }), lW), this.openPopup(WW).catch((iW => {
+           this.popupWindowPromise === WW && this.failPopup(iW instanceof Error ? iW : new Error(String(iW)))
+         })), WW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L79-L87` → after: `L74-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L74-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L74-L87) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L79-L87)

```diff
-       playVideoAd(BB, OB) {
-         const GB = this.adUnitIds.interstitial;
-         this.muteGameDuring(QB.e.request("ads.showInterstitial", {
-           placementId: GB
-         })).then((() => {
-           BB()
-         }), (OB => {
-           console.warn(`AD ${GB}: AdMob interstitial failed:`, OB), BB()
-         }))
+       async openPopup(WW) {
+         let iW = this.openDiscordOAuthWindow();
+         if (!iW) {
+           if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== WW) return;
+           iW = this.openDiscordOAuthWindow()
+         }
+         if (console.log("Discord OAuth window opened:", iW), !iW) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
+         this.popupWindow = iW;
+         const OW = window.setInterval((() => {
+           iW.closed && this.popupWindowPromise === WW && (window.clearInterval(OW), this.popupWindowCheckInterval = null, window.setTimeout((() => {
+             this.popupWindowPromise === WW && this.failPopup(new AW("Discord authentication was cancelled - popup window was closed"))
+           }), 1e3))
+         }), 200);
+         this.popupWindowCheckInterval = OW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L89-L108` → after: `L89-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L89-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L89-L102) · [Before (L89-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L89-L108)

```diff
-       renderBanner(BB) {
-         const OB = (0, jB.d)(BB),
-           GB = this.adUnitIds.banners[OB];
-         if (void 0 === GB) return;
-         const YB = document.getElementById(BB.divId);
-         if (!YB) return void console.warn(`AD ${OB}: AdMob renderBanner called but div ${BB.divId} is not in DOM`);
-         const DB = YB.getBoundingClientRect(),
-           oB = window.innerWidth,
-           MB = window.innerHeight;
-         if (0 === oB || 0 === MB) return void console.warn(`AD ${OB}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const PB = {
-           x1: yB.b.clamp(DB.left / oB * 100, 0, 100),
-           y1: yB.b.clamp(DB.top / MB * 100, 0, 100),
-           x2: yB.b.clamp(DB.right / oB * 100, 0, 100),
-           y2: yB.b.clamp(DB.bottom / MB * 100, 0, 100)
-         };
- ... (4 more removed lines; see GitHub link above)
+       async exchangeAuthorizationCodeForAccessToken(WW, iW) {
+         const {
+           accessToken: OW,
+           refreshToken: mW
+         } = await LW()((async () => await (0, NW.postJsonWithMetricsCookiesAndJsonResponse)(`${cW.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+           authorizationCode: WW,
+           bloxdClientEnvironment: xW.d.clientEnvironment,
+           instanceId: null
+         }, {
+           retries: 0
+         }, iW.getMetricsCookies())), {
+           retries: 3
+         });
+         return wW.e.setItem(this.bloxdDiscordRefreshTokenKey, mW), OW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L110-L115` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L104-L106) · [Before (L110-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L110-L115)

```diff
-       clearBanner(BB) {
-         const OB = (0, jB.d)(BB),
-           GB = this.bannerPlacementByBloxdId.get(OB);
-         void 0 !== GB && (this.bannerPlacementByBloxdId.delete(OB), this.bannerFirstResponseSeen.delete(GB), console.log(`AD ${OB}: AdMob clearBanner placementId=${GB}`), QB.e.emit("ads.hideBanner", {
-           placementId: GB
-         }))
+       hasCurrentUser() {
+         const WW = wW.e.getItem(this.bloxdDiscordRefreshTokenKey);
+         return !(0, tW.K)(WW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L117-L118` → after: `L108-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L108-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L108-L133) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L117-L118)

```diff
-       canShowBloxdAd(BB) {
-         return !1
+       async getCurrentUser(WW) {
+         const iW = wW.e.getItem(this.bloxdDiscordRefreshTokenKey);
+         if (!iW) return null;
+         let OW;
+         try {
+           const mW = await LW()((async () => {
+             try {
+               return await (0, NW.postJsonWithMetricsCookiesAndJsonResponse)(`${cW.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
+                 refreshToken: iW
+               }, {
+                 retries: 0
+               }, WW.getMetricsCookies())
+             } catch (OW) {
+               if (jW(OW)) throw new(LW().AbortError)(OW);
+               throw OW
+             }
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/166.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/166.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172)

#### 1. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/166.js#L4)

```diff
-   7280: (BB, OB, GB) => {
+   7708: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/166.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/166.js#L6)

```diff
-       AdinPlaySdkAdaptor: () => MB
+       BloxdFirebaseSdk: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L8-L36` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/166.js#L8-L31) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/166.js#L8-L36)

```diff
-     var YB = GB(1341),
-       DB = GB(1168),
-       QB = GB(224),
-       oB = GB(3262),
-       jB = GB(3268);
- 
-     function yB(BB) {
-       let OB = 0;
-       BB("addEventListener", 2, ((BB, GB) => {
-         if (!GB) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         !1 === BB.gdprApplies && (0, oB.noteNoGdprChoiceComing)();
-         const YB = function(BB) {
-           const OB = "useractioncomplete" === BB.eventStatus || "tcloaded" === BB.eventStatus && !!BB.tcString;
-           return BB.gdprApplies && OB ? jB.d.every((OB => !0 === BB.purpose.consents[OB])) : null
-         }(BB);
-         if (null === YB) return;
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(1964),
+       EW = OW(3960),
+       NW = OW(109),
+       PW = OW(100),
+       LW = OW(1787),
+       cW = OW(2152);
+     const wW = {
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
+     };
+     var tW = OW(1888),
+       ZW = OW(1813);
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L38-L101` → after: `L33-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L33-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/166.js#L33-L72) · [Before (L38-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/166.js#L38-L101)

```diff
-       static async setup() {
-         return (0, QB.canonicaliseZonesWhenIdle)(JB), (0, oB.setUpGtag)({
-             tcfCmp: !0
-           }), await (0, DB.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
-           function() {
-             if (window.__tcfapi) return void yB(window.__tcfapi);
-             let BB = 0;
-             const OB = window.setInterval((() => {
-               BB++;
-               const GB = window.__tcfapi;
-               GB ? (window.clearInterval(OB), yB(GB)) : BB >= 150 && window.clearInterval(OB)
-             }), 200)
-           }(), new MB
-       }
-       playRewarded(BB, OB) {
-         if ("undefined" !== typeof window.aiptag.adplayer) {
- ... (48 more removed lines; see GitHub link above)
+       static async setupInternal() {
+         const WW = await Promise.all([OW.e(303), OW.e(302)]).then((() => OW(42026))),
+           iW = await Promise.all([OW.e(303), OW.e(304)]).then((() => OW(42045))),
+           lW = await Promise.all([OW.e(303), OW.e(305)]).then((() => OW(42048))),
+           AW = WW.initializeApp({
+             ...wW,
+             measurementId: EW.bloxdGa4MeasurementId
+           });
+         (0, EW.setUpGtag)(), window.gtag("config", EW.bloxdGa4MeasurementId), (0, EW.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const bW = iW.getAnalytics(AW),
+           jW = {
+             portal: NW.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         iW.setUserProperties(bW, jW);
+         const UW = lW.initializeAuth(AW, {
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L103` → after: `L74-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L74-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/166.js#L74-L160) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/166.js#L103)

```diff
-         }))
+         }));
+         class SW extends xW {
+           setUserProperties(WW) {
+             iW.setUserProperties(bW, WW)
+           }
+           onIdTokenChanged(WW) {
+             lW.onIdTokenChanged(UW, WW)
+           }
+           canSignIn() {
+             return !0
+           }
+           async signInWithPopup(WW) {
+             var iW;
+             const OW = await lW.signInWithPopup(UW, KW[WW]);
+             return null !== (iW = null === OW || void 0 === OW ? void 0 : OW.user) && void 0 !== iW ? iW : null
+           }
+ ... (71 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/167.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/167.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/167.js#L4)

```diff
-   7289: (BB, OB, GB) => {
+   7717: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/167.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/167.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => QB
+       BloxdDiscordActivitySdk: () => sW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L8-L12` → after: `L8-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L8-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/167.js#L8-L67) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/167.js#L8-L12)

```diff
-     var YB = GB(1341),
-       DB = GB(1168);
-     class QB extends YB.c {
-       constructor() {
-         super(), this.name = "adsense"
+     var mW = OW(7720),
+       EW = OW(1220),
+       NW = OW(1172),
+       PW = OW(643),
+       LW = OW(1244),
+       cW = OW(1856),
+       wW = OW(1351),
+       tW = OW(805),
+       ZW = OW(25),
+       xW = OW(1189),
+       lW = OW(3245),
+       AW = function(WW) {
+         return WW.APPLICATION_COMMANDS = "applications.commands", WW.IDENTIFY = "identify", WW.EMAIL = "email", WW.GUILDS = "guilds", WW.READ_DM_CHANNELS = "dm_channels.read", WW.WRITE_ACTIVITIES = "rpc.activities.write", WW
+       }(AW || {}),
+       bW = function(WW) {
+         return WW[WW.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", WW[WW.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", WW[WW.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", WW[WW.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", WW[WW.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", WW[WW.RATELIMITE … [truncated]
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L21` → after: `L70-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L70-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/167.js#L70-L99) · [Before (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/167.js#L15-L21)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(BB) {
-           window.adsbygoogle.push(BB)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
+         console.log("Setting up Discord SDK with client id", xW.d.discordClientID);
+         const WW = new mW.e(xW.d.discordClientID);
+         let iW = !1;
+         setTimeout((() => {
+           iW || (console.warn("Discord SDK took too long to initialize"), (0, cW.reloadBloxd)())
+         }), 15e3), await WW.ready(), iW = !0;
+         try {
+           const {
+             enabled: iW
+           } = await WW.commands.encourageHardwareAcceleration();
+           iW || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (EW) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", EW)
+         }
+         const OW = new sW(WW);
+         return OW.isMobilePlatform() && (OW.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L23-L47` → after: `L101-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L101-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/167.js#L101-L268) · [Before (L23-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/167.js#L23-L47)

```diff
-         }), await (0, DB.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new QB
-       }
-       playVideoAd(BB, OB) {
-         console.log("playPreroll requested");
-         let GB = !1;
-         const YB = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), GB = !0, BB()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === OB ? "start" : "next",
-           name: OB,
-           beforeAd: () => {
- ... (9 more removed lines; see GitHub link above)
+         }
+         iW === this.activityUpdateId && await this.discordSdk.commands.setActivity({
+           activity: {
+             type: jW.PLAYING,
+             details: OW,
+             state: mW,
+             assets: {
+               large_image: "icon",
+               large_text: OW
+             },
+             timestamps: {
+               start: this.startTime
+             }
+           }
+         }).catch((WW => {
+           console.error(`Failed to update Discord activity rich presence with description="${OW}":`, WW)
+ ... (152 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/168.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/168.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L4)

```diff
-   7295: (BB, OB, GB) => {
+   7720: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => LN,
+       i: () => DO
+     });
+     var mW = {};
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L6` → after: `L11-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L11-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L6)

```diff
-       AditudeSdkAdaptor: () => oB
+       c: () => Nm,
+       h: () => cm,
+       g: () => Lm,
+       l: () => zO,
+       n: () => rO,
+       o: () => um,
+       p: () => Wm,
+       r: () => em,
+       u: () => ym,
+       v: () => dm,
+       y: () => FO,
+       z: () => Jm,
+       D: () => nm,
+       E: () => om,
+       K: () => QO,
+       I: () => mm,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L8-L12` → after: `L30-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L30-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L30-L349) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L8-L12)

```diff
-     var YB = GB(1341),
-       DB = GB(1168);
-     const QB = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
+     var EW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+ 
+     function NW(WW) {
+       return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
+     }
+     var PW = {
+       exports: {}
+     };
+     ! function(WW) {
+       var iW = Object.prototype.hasOwnProperty,
+         OW = "~";
+ 
+       function mW() {}
+ 
+       function EW(WW, iW, OW) {
+         this.cZ = WW, this.context = iW, this.once = OW || !1
+ ... (304 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L14` → after: `L351-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L351-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L351-L361) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L14)

```diff
-     class oB extends YB.c {
+ 
+     function kW(WW, iW) {
+       const OW = UW({
+         issueData: iW,
+         data: WW.data,
+         path: WW.path,
+         errorMaps: [WW.common.contextualErrorMap, WW.schemaErrorMap, jW(), AW].filter((WW => !!WW))
+       });
+       WW.common.issues.push(OW)
+     }
+     class sW {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L16-L36` → after: `L363-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L363-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L363-L366) · [Before (L16-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L16-L36)

```diff
-         super(), this.name = "aditude"
-       }
-       static async setup() {
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, DB.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new oB
-       }
-       playVideoAd(BB, OB) {
-         this.playVideoOrRewarded("video", BB, BB)
-       }
-       playRewarded(BB, OB) {
-         this.playVideoOrRewarded("rewarded", BB, OB)
-       }
-       renderBanner(BB) {
-         const OB = this.getBaseDivId(BB.adId, BB.width, BB.height);
-         window.tude.cmd.push((function() {
- ... (5 more removed lines; see GitHub link above)
+         this.value = "valid"
+       }
+       RA() {
+         "valid" === this.value && (this.value = "RA")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L38-L39` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L368-L369) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L38-L39)

```diff
-       getBaseDivId(BB, OB, GB) {
-         return `pb-slot-bloxdio-${OB}-${GB}${BB>1?`-${BB}`:""}`
+       abort() {
+         "aborted" !== this.value && (this.value = "aborted")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L41` → after: `L371-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L371-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L371-L523) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L41)

```diff
-       playVideoOrRewarded(BB, OB, GB) {
+       static mergeArray(WW, iW) {
+         const OW = [];
+         for (const mW of iW) {
+           if ("aborted" === mW.status) return MW;
+           "RA" === mW.status && WW.RA(), OW.push(mW.value)
+         }
+         return {
+           status: WW.value,
+           value: OW
+         }
+       }
+       static async mergeObjectAsync(WW, iW) {
+         const OW = [];
+         for (const mW of iW) OW.push({
+           key: await mW.key,
+           value: await mW.value
+ ... (137 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L43-L45` → after: `L525-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L525-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L525-L780) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L43-L45)

```diff
-         let DB = !1;
-         const oB = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", DB = !0
+         const mW = {
+             common: {
+               issues: [],
+               async: null !== (OW = null === iW || void 0 === iW ? void 0 : iW.async) && void 0 !== OW && OW,
+               contextualErrorMap: null === iW || void 0 === iW ? void 0 : iW.errorMap
+             },
+             path: (null === iW || void 0 === iW ? void 0 : iW.path) || [],
+             schemaErrorMap: this._def.errorMap,
+             parent: null,
+             data: WW,
+             parsedType: ZW(WW)
+           },
+           EW = this._parseSync({
+             data: WW,
+             path: mW.path,
+             parent: mW
+ ... (240 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L47-L48` → after: `L782-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L782-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L782-L1864) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L47-L48)

```diff
-           jB = (BB, OB) => {
-             console.error(`AD: Error while playing Aditude video ad: ${BB}:`, OB), oB(), GB()
+           message: cW.message
+         }), iW.RA());
+         else if ("toLowerCase" === cW.kind) WW.data = WW.data.toLowerCase();
+         else if ("toUpperCase" === cW.kind) WW.data = WW.data.toUpperCase();
+         else if ("startsWith" === cW.kind) WW.data.startsWith(cW.value) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
+           code: xW.invalid_string,
+           validation: {
+             startsWith: cW.value
+           },
+           message: cW.message
+         }), iW.RA());
+         else if ("endsWith" === cW.kind) WW.data.endsWith(cW.value) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
+           code: xW.invalid_string,
+           validation: {
+             endsWith: cW.value
+           },
+ ... (1067 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L50-L76` → after: `L1866-L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L1866-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/168.js#L1866-L1969) · [Before (L50-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/168.js#L50-L76)

```diff
-         if (console.log(`AD: Requesting Aditude ${BB} ad`), void 0 === (null === (YB = window.tude) || void 0 === YB ? void 0 : YB.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${BB} ad playing`), void jB("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: QB[BB],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((GB => {
-               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), GB.on("playerClose", ((GB, YB) => {
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${BB} ad`), oB(), OB()
-               })).on("adPrefetchError", ((BB, OB) => {
-                 console.log("AD: Inside Aditude player.on adPrefetchError"), jB("Prefetch error", OB)
-               })).on("adError", ((BB, OB) => {
-                 console.log("AD: Inside Aditude player.on adError"), jB("Generic error", OB)
-               }));
- ... (11 more removed lines; see GitHub link above)
+           return {
+             result: await WW._parseAsync({
+               data: iW.data,
+               path: iW.path,
+               parent: OW
+             }),
+             ctx: OW
+           }
+         }))).then((function(WW) {
+           for (const iW of WW)
+             if ("valid" === iW.result.status) return iW.result;
+           for (const mW of WW)
+             if ("RA" === mW.result.status) return iW.common.issues.push(...mW.ctx.common.issues), mW.result;
+           const OW = WW.map((WW => new lW(WW.ctx.common.issues)));
+           return kW(iW, {
+             code: xW.invalid_union,
+ ... (88 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/169.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/169.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L5-L2809` → after: `L4-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/169.js#L4-L89) · [Before (L5-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/169.js#L5-L2809)

```diff
-   7322: (BB, OB, GB) => {
-     var YB = GB(7327);
-     OB.b = {
-       prefix: YB.prefix,
-       iconName: YB.iconName,
-       icon: [YB.width, YB.height, YB.aliases, YB.unicode, YB.svgPathData]
-     }, OB.f = OB.b, YB.prefix, YB.iconName, YB.width, YB.height, YB.aliases, YB.unicode, YB.svgPathData, YB.aliases
-   },
-   7330: (BB, OB) => {
-     var GB = "alarm-clock",
-       YB = [9200],
-       DB = "f34e",
-       QB = "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 … [truncated]
-     OB.b = {
-       prefix: "fas",
-       iconName: GB,
- ... (2789 more removed lines; see GitHub link above)
+   7726: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       BloxdMsnAccountSdk: () => ZW,
+       MsnSdkAdaptor: () => bW
+     });
+     var mW = OW(1343),
+       EW = OW(1162),
+       NW = OW(4712),
+       PW = OW(643),
+       LW = OW(1830);
+     const cW = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let wW = null;
+ 
+     function tW() {
+       return wW ??= async function() {
+         await (0, EW.d)(cW, {}, !1);
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2811-L2812` → after: `L91-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L91-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/169.js#L91-L210) · [Before (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/169.js#L2811-L2812)

```diff
-       DB = YB,
-       QB = YB
+       AW = {
+         leaderboard: {
+           1: ["right", "left"],
+           5: ["top", "left"]
+         },
+         square: {
+           1: []
+         },
+         skyscraper: {
+           2: []
+         }
+       };
+     class bW extends mW.c {
+       constructor() {
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+       }
+ ... (104 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/170.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/170.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L4-L17` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/170.js#L4-L6) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/170.js#L4-L17)

```diff
-   8854: (BB, OB) => {
-     var GB = "youtube",
-       YB = [61802],
-       DB = "f167",
-       QB = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     OB.d = {
-       prefix: "fab",
-       iconName: GB,
-       icon: [576, 512, YB, DB, QB]
-     }, OB.e = OB.d
-   },
-   7465: (BB, OB) => {
-     Object.defineProperty(OB, "__esModule", {
-       value: !0
+   7730: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       GameDistributionSdkAdaptor: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L19-L225` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/170.js#L8-L12) · [Before (L19-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/170.js#L19-L225)

```diff
-     var GB = "bolt",
-       YB = [9889, "zap"],
-       DB = "f0e7",
-       QB = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
-     OB.definition = {
-       prefix: "fas",
-       iconName: GB,
-       icon: [448, 512, YB, DB, QB]
-     }, OB.faBolt = OB.definition, OB.prefix = "fas", OB.iconName = GB, OB.width = 448, OB.height = 512, OB.ligatures = YB, OB.unicode = DB, OB.svgPathData = QB, OB.aliases = YB
-   },
-   8266: (BB, OB) => {
-     var GB = "person-military-pointing",
-       YB = [],
-       DB = "e54a",
-       QB = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
-     OB.b = {
- ... (191 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     class NW extends mW.c {
+       constructor(WW) {
+         super(), this.setOnEndCb = WW, this.name = "gamedistribution"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L227-L289` → after: `L14-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L14-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/170.js#L14-L46) · [Before (L227-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/170.js#L227-L289)

```diff
-       uB.push(...KB);
-       ("boolean" === typeof BB.player ? BB.player : Array.isArray(BB.ranks)) && "" !== SB && GB.isFriend(SB) && uB.push({
-         kind: "rank",
-         rank: pB
-       }), "number" === typeof BB.IM && uB.push({
-         kind: "text",
-         text: ` ${BB.IM}m`,
-         size: jB.d.DEFAULT_FONT_SIZE,
-         colour: "#cef3ff"
-       });
-       const mB = nB ? (0, jB.h)(nB, jB.d.DEFAULT_SUBTITLE_FONT_SIZE, GB) : null,
-         IB = "string" === typeof VB.backgroundColor ? VB.backgroundColor : "#22283b",
-         FB = "string" === typeof VB.subtitleBackgroundColor ? VB.subtitleBackgroundColor : "#1a1e2d",
-         iB = qB(VB.healthbar),
-         LB = qB(VB.border),
-         gB = Array.isArray(BB.effects) ? BB.effects.filter((BB => "string" === typeof BB && ZB.has(BB))) : [],
- ... (47 more removed lines; see GitHub link above)
+       static async setup() {
+         let WW;
+         let iW;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: OW => {
+             const mW = () => {
+               iW && (window.adCompleteSoResume(), iW = !1), WW && (WW(), WW = null)
+             };
+             switch (OW.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), iW = !1, WW ? (WW(), WW = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L292-L696` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/170.js#L49-L52) · [Before (L292-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/170.js#L292-L696)

```diff
-           if (LB) {
-             const OB = [];
-             WB(LB, "nametag") && OB.push({
-               x: tB,
-               y: BO,
-               width: xB,
-               height: XB.height + (mB ? wB.height : 0)
-             }), YB && WB(LB, "healthbar") && OB.push(YB), OB.length > 0 && function(BB, OB, GB) {
-               const YB = RB(OB),
-                 DB = YB / 2,
-                 QB = BB => BB.width > 0 && BB.height > 0,
-                 oB = GB.map((BB => ({
-                   x: BB.x + DB,
-                   y: BB.y + DB,
-                   width: BB.width - YB,
-                   height: BB.height - YB
- ... (389 more removed lines; see GitHub link above)
+         }, await (0, EW.d)("https://html5.api.gamedistribution.com/main.min.js", {
+           id: "gamedistribution-jssdk"
+         }), new NW((iW => {
+           WW = iW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L699-L700` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/170.js#L55-L56) · [Before (L699-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/170.js#L699-L700)

```diff
-       loadFor(BB) {
-         !this.restWanted && IB.test(BB) && this.loadRest()
+       playVideoAd(WW, iW) {
+         this.setOnEndCb(WW), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L702-L820` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/170.js#L58-L64) · [Before (L702-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/170.js#L702-L820)

```diff
-     }(aB);
- 
-     function TB(BB) {
-       Object.assign(gB, BB), gB.loadsFontRest && eB.loadRest(), aB(!1)
-     }
- 
-     function bB(BB) {
-       BB !== rB && (rB = BB, aB())
-     }
- 
-     function CB(BB) {
-       if ("none" === wB || null === BB) return;
-       BB(iB, "all" === wB ? 0 : LB, new Uint8Array(0)) && (wB = "none")
-     }
-     const HB = new Map,
-       vB = new Map;
- ... (103 more removed lines; see GitHub link above)
+       willRequestBanner() {
+         return void 0 !== window.gdsdk.AdType.Display
+       }
+       renderBanner(WW) {
+         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(WW.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, WW.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
+           containerId: WW.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((WW => console.info(WW)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/171.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/171.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L4-L6)

```diff
-   9540: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => jB
+   7737: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CoolMathGamesSdkAdaptor: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L8-L1025` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L8-L16) · [Before (L8-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L8-L1025)

```diff
-     var YB = GB(16),
-       DB = GB(1175),
-       QB = GB(5480),
-       oB = GB(1282);
- 
-     function jB(BB) {
-       let {
-         note: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, DB.H)(), {
-         clientEscMenuOptions: jB
-       } = (0, YB.o)(["clientEscMenuOptions"]);
-       return (0, oB.jsx)(QB.c, {
-         label: GB("touchSettings:actionButtons"),
- ... (1002 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     class NW extends mW.c {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1027-L1075` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L18-L21) · [Before (L1027-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L1027-L1075)

```diff
-     }
- 
-     function kO(BB, OB, GB) {
-       let {
-         keysAbove: YB
-       } = GB;
-       const DB = [...BB.documentElement.classList].filter((BB => !VO.has(BB) && !nO.has(BB))),
-         QB = [...OB.documentElement.classList].filter((BB => nO.has(BB))),
-         oB = [WO, AO.hotbar, AO.hasShop, AO.hasBag];
-       YB && oB.push(AO.keysAbove), OB.documentElement.className = [...DB, ...oB, ...QB].join(" ")
-     }
-     const dO = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
- 
-     function KO(BB, OB, GB, YB, DB) {
-       const QB = (0, mB.C)(GB, YB, "joystick"),
-         oB = (0, vB.w)((0, vB.L)(GB, YB, DB), YB),
- ... (33 more removed lines; see GitHub link above)
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const WW = document.getElementsByClassName("ads-popup");
+         for (const iW of WW) iW instanceof HTMLElement && (iW.style.position = "fixed")
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1077-L1155` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L23-L24) · [Before (L1077-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L1077-L1155)

```diff
-     }
- 
-     function FO(BB, OB) {
-       const [GB, YB] = IO(BB, "hotbar", (OB => {
-         const GB = GB => {
-           var YB, DB;
-           return OB(GB), null !== (YB = null === (DB = BB.querySelector(".HotBarGameItemsContainer")) || void 0 === DB ? void 0 : DB.getBoundingClientRect().width) && void 0 !== YB ? YB : 0
-         };
-         return [GB(1), GB(mB.j)]
-       }));
-       return GB <= 0 ? mB.j : Math.min(mB.j, Math.max(1, Math.floor(YB / GB / OB + 1e-6) * OB))
-     }
-     const iO = 3,
-       LO = .5,
-       gO = BB => BB.right - BB.left;
-     const rO = (BB, OB) => Math.abs((0, bB.d)(BB).x - (0, bB.d)(OB).x) + Math.abs((0, bB.d)(BB).y - (0, bB.d)(OB).y) + Math.abs(gO(BB) - gO(OB));
- ... (63 more removed lines; see GitHub link above)
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1157-L1382` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L26-L27) · [Before (L1157-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L1157-L1382)

```diff
-       return PB !== AB && DB(AB), AB
-     }
- 
-     function wO(BB, OB, GB, YB, DB) {
-       let [QB, oB, jB] = OB;
-       const yB = mB.x[BB],
-         JB = {};
-       yB.scale && gO(YB) > 0 && Math.abs(gO(GB) - gO(YB)) > LO && (JB.scale = Math.max(mB.l, Math.min(mB.j, jB * gO(GB) / gO(YB))));
-       const MB = (0, bB.d)(GB).x - (0, bB.d)(YB).x,
-         PB = (0, bB.d)(GB).y - (0, bB.d)(YB).y;
-       return yB.move && (Math.abs(MB) > LO || Math.abs(PB) > LO) && (JB.dx = QB + MB / DB.width, JB.dy = oB + PB / DB.height), void 0 === JB.scale && void 0 === JB.dx ? null : JB
-     }
-     let EO = 0;
- 
-     function cO() {
-       return EO > 0
- ... (210 more removed lines; see GitHub link above)
+       static async setup() {
+         return await (0, EW.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, EW.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new NW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1384-L2452` → after: `L29-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L29-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L29-L32) · [Before (L1384-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L1384-L2452)

```diff
-     }
-     var bO = GB(9570);
- 
-     function CO(BB, OB) {
-       return Object.keys(BB).filter((BB => BB !== OB)).map((OB => BB[OB]))
-     }
- 
-     function HO(BB) {
-       return BB.map((BB => {
-         let {
-           id: OB,
-           box: GB
-         } = BB;
-         return `${OB}:${GB.left},${GB.top},${GB.right},${GB.bottom}`
-       })).join(";")
-     }
- ... (1053 more removed lines; see GitHub link above)
+       playVideoAd(WW, iW) {
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L2454-L2904` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L34-L36) · [Before (L2454-L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L2454-L2904)

```diff
-         },
-         onReset: BB => {
-           BO(BB, mB.c)
-         },
-         locked: sB,
-         lockable: YO,
-         onLocked: GO,
-         note: (OB, GB) => {
-           const YB = GB && qB.length > 0 ? BB("hudLayout:overlapsNote", {
-             names: (0, uB.u)(qB, gB, BB, rB)
-           }) : null;
-           if (GB && EB(OB, LB)) return (0, VB.jsxs)(VB.Fragment, {
-             children: [YB && (0, VB.jsx)("span", {
-               children: YB
-             }), (0, VB.jsx)("span", {
-               children: BB("hudLayout:floatingJoystickNote")
- ... (435 more removed lines; see GitHub link above)
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), WW()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L2906-L3081` → after: `L38-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L38-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L38-L42) · [Before (L2906-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L2906-L3081)

```diff
-       dB.length > 0 && (kB = PB("controls:sharedBindingsWarning") + " ", kB += dB.join(", "));
-       const uB = () => {
-           pB(!1), AB(null), RB("controls:clickToEnterNewBinding"), nB(null)
-         },
-         mB = () => "BindingInput_" + OB;
-       return (0, VB.jsxs)("div", {
-         className: yB()("ControlRow", {
-           WarningBorder: null !== kB
-         }),
-         children: [(0, VB.jsxs)("div", {
-           className: "ControlRowInner",
-           children: [(0, VB.jsxs)("div", {
-             className: "ControlName",
-             children: [PB(QB.w[OB].translationKey, QB.w[OB].params), MB && zB && (0, VB.jsx)(ZB.c, {
-               glyph: zB,
-               className: "ControlPadGlyph"
- ... (160 more removed lines; see GitHub link above)
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3197-L3227` → after: `L45-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L45-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/171.js#L45-L50) · [Before (L3197-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/171.js#L3197-L3227)

```diff
-   },
-   9344: (BB, OB, GB) => {
-     GB.d(OB, {
-       A: () => SB,
-       B: () => nB,
-       E: () => ZB,
-       I: () => yB,
-       J: () => MB,
-       b: () => NB,
-       f: () => fB,
-       i: () => VB,
-       l: () => AB,
-       n: () => pB,
-       p: () => qB,
-       q: () => zB,
-       t: () => lB,
- ... (15 more removed lines; see GitHub link above)
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/172.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/172.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049)

#### 1. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/172.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/172.js#L4-L9)

```diff
-   37263: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => ZB,
-       e: () => NB,
-       h: () => zB,
-       l: () => PB
+   7742: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AdMobSdkAdaptor: () => ZW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L11-L82` → after: `L8-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L8-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/172.js#L8-L103) · [Before (L11-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/172.js#L11-L82)

```diff
-     var YB = GB(34790),
-       DB = GB(37267),
-       QB = GB(37270),
-       oB = GB(9391),
-       jB = GB(1480),
-       yB = GB(56),
-       JB = GB(70),
-       MB = GB(1282);
- 
-     function PB() {
-       var BB;
-       return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
-         children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
-       })
-     }
- 
- ... (56 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(25),
+       NW = OW(1787),
+       PW = OW(136),
+       LW = OW(4712),
+       cW = OW(344),
+       wW = OW(1836);
+     const tW = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+ ... (80 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L84-L107` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/172.js#L105-L108) · [Before (L84-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/172.js#L84-L107)

```diff
-         return pB.add(BB), BB(), () => {
-           pB.delete(BB)
-         }
-       }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
-     }
-   },
-   9391: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => QB,
-       d: () => DB
-     });
-     let YB = null;
-     const DB = function(BB) {
-         const OB = {
-           cycle: BB,
-           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
- ... (8 more removed lines; see GitHub link above)
+         this.bannerPlacementByBloxdId.set(iW, OW), console.log(`AD ${iW}: AdMob renderBanner placementId=${OW} box=`, ZW), (0, wW.i)("site_sdk"), NW.d.emit("ads.showBanner", {
+           placementId: OW,
+           ...ZW
+         })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L109-L127` → after: `L110-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L110-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/172.js#L110-L118) · [Before (L109-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/172.js#L109-L127)

```diff
-   },
-   39205: (BB, OB, GB) => {
-     function YB(BB, OB, GB) {
-       var YB;
-       const {
-         width: DB,
-         height: QB
-       } = GB, oB = null !== (YB = BB.text) && void 0 !== YB ? YB : BB, jB = (oB.x / 100 - .5) * DB, yB = (oB.y / 100 - .5) * QB, JB = DB / 2 - OB.x;
-       if (null !== BB.text && Math.abs(jB) <= JB && yB >= OB.top - QB / 2 && yB <= QB / 2 - OB.bottom) return {
-         x: oB.x,
-         y: oB.y
-       };
-       const MB = Math.min(0 === jB ? 1 / 0 : JB / Math.abs(jB), yB > 0 ? (QB / 2 - OB.bottom) / yB : yB < 0 ? (OB.top - QB / 2) / yB : 1 / 0);
-       return !Number.isFinite(MB) || MB < 0 ? {
-         x: 50,
-         y: 50
- ... (3 more removed lines; see GitHub link above)
+       clearBanner(WW) {
+         const iW = (0, LW.c)(WW),
+           OW = this.bannerPlacementByBloxdId.get(iW);
+         void 0 !== OW && (this.bannerPlacementByBloxdId.delete(iW), this.bannerFirstResponseSeen.delete(OW), console.log(`AD ${iW}: AdMob clearBanner placementId=${OW}`), NW.d.emit("ads.hideBanner", {
+           placementId: OW
+         }))
+       }
+       canShowBloxdAd(WW) {
+         return !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/173.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/173.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/173.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/173.js#L4-L15)

```diff
-   37270: (BB, OB, GB) => {
-     GB.d(OB, {
-       D: () => pB,
-       G: () => RB,
-       e: () => QB,
-       i: () => qB,
-       l: () => ZB,
-       m: () => jB,
-       q: () => zB,
-       u: () => NB,
-       y: () => PB,
-       z: () => WB
+   7751: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AdinPlaySdkAdaptor: () => tW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L17-L20` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/173.js#L8-L12) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/173.js#L17-L20)

```diff
-     var YB = GB(16),
-       DB = GB(25);
-     const QB = "clientGameInventoryButtonsChanged",
-       oB = new Map;
+     var mW = OW(1343),
+       EW = OW(1162),
+       NW = OW(212),
+       PW = OW(3960),
+       LW = OW(3966);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L22-L25` → after: `L14-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L14-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/173.js#L14-L30) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/173.js#L22-L25)

```diff
-     function jB() {
-       return [...oB.values()].sort(((BB, OB) => {
-         var GB, YB;
-         return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
+     function cW(WW) {
+       let iW = 0;
+       WW("addEventListener", 2, ((WW, OW) => {
+         if (!OW) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         !1 === WW.gdprApplies && (0, PW.noteNoGdprChoiceComing)();
+         const mW = function(WW) {
+           const iW = "useractioncomplete" === WW.eventStatus || "tcloaded" === WW.eventStatus && !!WW.tcString;
+           return WW.gdprApplies && iW ? LW.b.every((iW => !0 === WW.purpose.consents[iW])) : null
+         }(WW);
+         if (null === mW) return;
+         const EW = ++iW;
+         if (!mW) return void(0, PW.updateAnalyticsConsent)(!1);
+         const NW = window.__tcfapi;
+         NW ? NW("getNonIABVendorConsents", 2, ((WW, OW) => {
+           var mW;
+           EW === iW && (0, PW.updateAnalyticsConsent)(OW && !0 === (null === (mW = WW.nonIabVendorConsents) || void 0 === mW ? void 0 : mW[5]))
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L28-L40` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/173.js#L33-L36) · [Before (L28-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/173.js#L28-L40)

```diff
-     let yB = null;
- 
-     function JB(BB) {
-       yB = BB
-     }
-     let MB = !1;
- 
-     function PB(BB) {
-       MB = !0;
-       try {
-         BB.onClick()
-       } finally {
-         MB = !1
+     const wW = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class tW extends mW.c {
+       constructor() {
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = wW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L42-L78` → after: `L38-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L38-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/173.js#L38-L103) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/173.js#L42-L78)

```diff
-       BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
-     }
- 
-     function zB() {
-       return MB
-     }
- 
-     function lB() {
-       return jB().filter((BB => BB.panel && !BB.disabled))
-     }
- 
-     function pB(BB) {
-       const OB = lB(),
-         GB = OB.findIndex((BB => BB.id === yB));
-       return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
-     }
- ... (21 more removed lines; see GitHub link above)
+       static async setup() {
+         return (0, NW.canonicaliseZonesWhenIdle)(wW), (0, PW.setUpGtag)({
+             tcfCmp: !0
+           }), await (0, EW.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
+           function() {
+             if (window.__tcfapi) return void cW(window.__tcfapi);
+             let WW = 0;
+             const iW = window.setInterval((() => {
+               WW++;
+               const OW = window.__tcfapi;
+               OW ? (window.clearInterval(iW), cW(OW)) : WW >= 150 && window.clearInterval(iW)
+             }), 200)
+           }(), new tW
+       }
+       playRewarded(WW, iW) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+ ... (50 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/174.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/174.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390)

#### 1. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L4-L30` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L6) · [Before (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L30)

```diff
-   39804: (BB, OB, GB) => {
-     function YB(BB) {
-       return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
-     }
-     GB.d(OB, {
-       b: () => YB
-     })
-   },
-   39782: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => QB,
-       e: () => oB
-     });
-     var YB = GB(25);
-     let DB = !1;
- 
- ... (11 more removed lines; see GitHub link above)
+   7753: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AdsenseForGamesSdkAdaptor: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L32-L1859` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/174.js#L8-L10) · [Before (L32-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/174.js#L32-L1859)

```diff
-     var YB = GB(25),
-       DB = GB(2050);
- 
-     function QB(BB) {
-       let {
-         taskId: OB,
-         progress: GB
-       } = BB;
-       const YB = DB.e.get("_tasks");
-       null !== YB && void 0 !== YB && YB[OB] && DB.e.apply({
-         _tasks: {
-           ...YB,
-           [OB]: {
-             ...YB[OB],
-             progress: GB
-           }
- ... (1812 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     class NW extends mW.c {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L1861-L2332` → after: `L12-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L12-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/174.js#L12-L40) · [Before (L1861-L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/174.js#L1861-L2332)

```diff
-         super(...arguments), (0, BG.d)(this, "meshKind", gO, this), (0, BG.d)(this, "meshOpts", rO, this), (0, BG.d)(this, "pose", XO, this), (0, BG.d)(this, "leaderboardTop", wO, this)
-       }
-     }, gO = (0, OG.b)(LO.prototype, "meshKind", [mO], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
-       initializer: null
-     }), rO = (0, OG.b)(LO.prototype, "meshOpts", [IO], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
-       initializer: null
-     }), XO = (0, OG.b)(LO.prototype, "pose", [FO], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
- ... (456 more removed lines; see GitHub link above)
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(WW) {
+           window.adsbygoogle.push(WW)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, EW.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+           "data-ad-client": "ca-pub-5991928098122027",
+           "data-ad-frequency-hint": "120s",
+           type: "text/javascript"
+         }), console.log("Loaded adsense for games"), new NW
+ ... (13 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L3975-L3976` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/174.js#L43-L44) · [Before (L3975-L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/174.js#L3975-L3976)

```diff
-           onReconnected: OB => {
-             BB.onReconnected(OB)
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L3978-L3979` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/174.js#L46-L47) · [Before (L3978-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/174.js#L3978-L3979)

```diff
-           onGaveUp: OB => {
-             !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, OB)
+           adBreakDone: iW => {
+             console.log("adBreakDone called", iW), clearTimeout(mW), OW || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), WW())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/175.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/175.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/175.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/175.js#L4-L7)

```diff
-   39813: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => jB,
-       e: () => QB
+   7756: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AditudeSdkAdaptor: () => PW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L37` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/175.js#L8-L16) · [Before (L9-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L37)

```diff
-     var YB = GB(4505);
-     let DB = null;
- 
-     function QB(BB) {
-       return null !== DB && BB === DB
-     }
- 
-     function oB() {
-       this.IH = !1, this.stopPropagation = !1, this.iH = !1, this.disabled = !1
-     }
-     class jB {
-       constructor(BB, OB) {
-         this.version = "0.7.0";
-         var GB = Object.assign({}, new oB, OB || {});
-         this.element = BB || document, this.IH = !!GB.IH, this.stopPropagation = !!GB.stopPropagation, this.iH = !!GB.iH, this.disabled = !!GB.disabled, this.filterEvents = (BB, OB) => !0, this.ignoreEvent = BB => !1, this.down = new YB.EventEmitter, this.up = new YB.EventEmitter … [truncated]
-           dx: 0,
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     const NW = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class PW extends mW.c {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L39-L44` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L21) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/175.js#L39-L44)

```diff
-       bind(BB) {
-         for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
-         GB.forEach((OB => {
-           var GB = this._keyBindmap[OB] || [];
-           GB.includes(BB) || (GB.push(BB), this._keyBindmap[OB] = GB)
-         })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, EW.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new PW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L46-L51` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/175.js#L23-L24) · [Before (L46-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/175.js#L46-L51)

```diff
-       unbind(BB) {
-         for (var OB in this._keyBindmap) {
-           var GB = this._keyBindmap[OB],
-             YB = GB.indexOf(BB);
-           YB > -1 && GB.splice(YB, 1)
-         }
+       playVideoAd(WW, iW) {
+         this.playVideoOrRewarded("video", WW, WW)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L53-L60` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/175.js#L26-L27) · [Before (L53-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/175.js#L53-L60)

```diff
-       getBindings() {
-         var BB = {};
-         for (var OB in this._keyBindmap) {
-           this._keyBindmap[OB].forEach((GB => {
-             BB[GB] = BB[GB] || [], BB[GB].push(OB)
-           }))
-         }
-         return BB
+       playRewarded(WW, iW) {
+         this.playVideoOrRewarded("rewarded", WW, iW)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L62-L63` → after: `L29-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L29-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/175.js#L29-L78) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/175.js#L62-L63)

```diff
-       kP() {
-         yB(this.gH), yB(this.pressCount), yB(this.releaseCount)
+       renderBanner(WW) {
+         const iW = this.getBaseDivId(WW.adId, WW.width, WW.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: WW.divId,
+             baseDivId: iW
+           }])
+         }))
+       }
+       getBaseDivId(WW, iW, OW) {
+         return `pb-slot-bloxdio-${iW}-${OW}${WW>1?`-${WW}`:""}`
+       }
+       playVideoOrRewarded(WW, iW, OW) {
+         var mW;
+         let EW = !1;
+         const PW = () => {
+ ... (34 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/176.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/176.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L5-L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L5-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/176.js#L5-L2834) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/176.js#L4)

```diff
-   9614: (BB, OB, GB) => {
+   7784: (WW, iW, OW) => {
+     var mW = OW(7787);
+     iW.e = {
+       prefix: mW.prefix,
+       iconName: mW.iconName,
+       icon: [mW.width, mW.height, mW.aliases, mW.unicode, mW.svgPathData]
+     }, iW.g = iW.e, mW.prefix, mW.iconName, mW.width, mW.height, mW.aliases, mW.unicode, mW.svgPathData, mW.aliases
+   },
+   7791: (WW, iW) => {
+     var OW = "alarm-clock",
+       mW = [9200],
+       EW = "f34e",
+       NW = "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 … [truncated]
+     iW.c = {
+       prefix: "fas",
+       iconName: OW,
+ ... (2814 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L6-L62` → after: `L2836-L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L2836-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/176.js#L2836-L2845) · [Before (L6-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/176.js#L6-L62)

```diff
-       c: () => QB,
-       d: () => DB
-     });
-     let YB = !1;
- 
-     function DB() {
-       YB = !0
-     }
- 
-     function QB() {
-       return YB
-     }
-   },
-   9608: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       loadWasmPlay: () => zB,
- ... (41 more removed lines; see GitHub link above)
+       b: () => EW,
+       c: () => NW
+     });
+     var mW = {
+         prefix: "fas",
+         iconName: "shirt",
+         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       },
+       EW = mW,
+       NW = mW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/177.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/177.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L4-L6` → after: `L4-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/177.js#L4-L28) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/177.js#L4-L6)

```diff
-   9636: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       pageBody: () => YB
+   9346: (WW, iW) => {
+     var OW = "youtube",
+       mW = [61802],
+       EW = "f167",
+       NW = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     iW.d = {
+       prefix: "fab",
+       iconName: OW,
+       icon: [576, 512, mW, EW, NW]
+     }, iW.h = iW.d
+   },
+   37371: (WW, iW) => {
+     var OW = "anchor",
+       mW = [9875],
+       EW = "f13d",
+       NW = "M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 96c0-53 43-96 96-96s96 43 96 96c0 41.8-26.7 77.4-64 90.5l0 257.9c62.9-14.3 110.2-69.7 111.9-136.5l-16.1 14.1c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11- … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L8-L42` → after: `L30-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L30-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L256) · [Before (L8-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/177.js#L8-L42)

```diff
-     const YB = {
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
-         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
-       }, {
- ... (19 more removed lines; see GitHub link above)
+     var OW = "bolt",
+       mW = [9889, "zap"],
+       EW = "f0e7",
+       NW = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     iW.definition = {
+       prefix: "fas",
+       iconName: OW,
+       icon: [448, 512, mW, EW, NW]
+     }, iW.faBolt = iW.definition, iW.prefix = "fas", iW.iconName = OW, iW.width = 448, iW.height = 512, iW.ligatures = mW, iW.unicode = EW, iW.svgPathData = NW, iW.aliases = mW
+   },
+   7998: (WW, iW) => {
+     var OW = "circle",
+       mW = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915],
+       EW = "f111",
+       NW = "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z";
+     iW.c = {
+ ... (211 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/178.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/178.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L4-L6` → after: `L5-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/178.js#L5-L18) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/178.js#L4-L6)

```diff
-   9640: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       pageBody: () => YB
+   37371: (WW, iW) => {
+     var OW = "anchor",
+       mW = [9875],
+       EW = "f13d",
+       NW = "M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 96c0-53 43-96 96-96s96 43 96 96c0 41.8-26.7 77.4-64 90.5l0 257.9c62.9-14.3 110.2-69.7 111.9-136.5l-16.1 14.1c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11- … [truncated]
+     iW.e = {
+       prefix: "fas",
+       iconName: OW,
+       icon: [576, 512, mW, EW, NW]
+     }, iW.i = iW.e
+   },
+   7912: (WW, iW) => {
+     Object.defineProperty(iW, "__esModule", {
+       value: !0
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L8-L32` → after: `L20-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L20-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/178.js#L20-L204) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/178.js#L8-L32)

```diff
-     const YB = {
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
- ... (9 more removed lines; see GitHub link above)
+     var OW = "bolt",
+       mW = [9889, "zap"],
+       EW = "f0e7",
+       NW = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     iW.definition = {
+       prefix: "fas",
+       iconName: OW,
+       icon: [448, 512, mW, EW, NW]
+     }, iW.faBolt = iW.definition, iW.prefix = "fas", iW.iconName = OW, iW.width = 448, iW.height = 512, iW.ligatures = mW, iW.unicode = EW, iW.svgPathData = NW, iW.aliases = mW
+   },
+   7998: (WW, iW) => {
+     var OW = "circle",
+       mW = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915],
+       EW = "f111",
+       NW = "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z";
+     iW.c = {
+ ... (169 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/179.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/179.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/179.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/179.js#L4-L6)

```diff
-   9644: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       pageBody: () => YB
+   10104: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L34` → after: `L60-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L60-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/179.js#L60-L1145) · [Before (L9-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L34)

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
- ... (10 more removed lines; see GitHub link above)
+       floating: "settingsMenu:joystickFloating",
+       fixed_shown: "settingsMenu:joystickFixed",
+       fixed_hidden: "settingsMenu:joystickHidden"
+     };
+     var YW = OW(1556),
+       yW = OW(10106),
+       TW = OW(3383),
+       JW = OW(3448);
+     var hW = OW(10114);
+     var HW = OW(1422),
+       nW = OW(10122),
+       uW = OW(1479),
+       oW = OW(1391),
+       dW = OW(10125);
+ 
+     function eW(WW) {
+ ... (1070 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L36-L38` → after: `L1147-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L1147-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/179.js#L1147-L1253) · [Before (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/179.js#L36-L38)

```diff
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
-       }]
+         vars: cW,
+         safe: cW,
+         classes: cW
+       }), cW.style.setProperty("--preview-joystick-shift-left", `${tW[3]}px`), cW.style.setProperty("--preview-joystick-shift-bottom", `${tW[2]}px`), cW.style.setProperty("--preview-joystick-scale", String(NW[2])), (0, Yi.e)(cW, iW, OW, mW);
+       for (const ZW of ei) cW.style.setProperty(ZW, WW.documentElement.style.getPropertyValue(ZW) || "0px")
+     }
+ 
+     function gi() {
+       return (0, FW.G)(tW.d.get("notchSize"), window.innerWidth, window.innerHeight)
+     }
+ 
+     function Di(WW) {
+       return (0, FW.s)(gi(), (0, FW.N)(WW))
+     }
+ 
+     function Vi(WW, iW, OW) {
+ ... (91 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/180.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/180.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L4-L7` → after: `L4-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L4-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/180.js#L4-L536) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/180.js#L4-L7)

```diff
-   9651: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       pageBody: () => YB
-     });
+   10146: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => uW,
+       f: () => eW
+     });
+     var mW = OW(62),
+       EW = OW(27),
+       NW = OW(3457),
+       PW = OW(4613),
+       LW = OW(10154);
+     const cW = 6,
+       wW = 4,
+       tW = ["HudMove-inventory", "HudLocked-inventory"];
+ 
+     function ZW(WW) {
+       let {
+ ... (517 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L36` → after: `L538-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L538-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/180.js#L538-L1022) · [Before (L9-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L36)

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
- ... (12 more removed lines; see GitHub link above)
+         sprint: "joystick",
+         quickChat: "chat",
+         jump: "cluster",
+         crouch: "cluster",
+         attack: "cluster",
+         use: "cluster",
+         extra: "cluster",
+         game: "cluster",
+         zoom: "cluster",
+         drop: "cluster",
+         arrows: "hotbar",
+         inventory: "hotbar",
+         shop: "inventory",
+         bag: "inventory",
+         ...Object.fromEntries(EW.L.map((WW => [WW, "menu"])))
+       },
+ ... (469 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/181.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/181.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L4-L6` → after: `L4-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L4-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/181.js#L4-L267) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/181.js#L4-L6)

```diff
-   9656: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       pageBody: () => YB
+   37868: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => jW,
+       h: () => UW,
+       l: () => xW,
+       o: () => ZW
+     });
+     var mW = OW(35220),
+       EW = OW(3361),
+       NW = OW(3368),
+       PW = OW(9954),
+       LW = OW(1526),
+       cW = OW(62),
+       wW = OW(80),
+       tW = OW(1283);
+ 
+ ... (248 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L35` → after: `L270-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L270-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/181.js#L270-L1020) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L35)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
-       faq: [{
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
-       }, {
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
-       }, {
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
-       }, {
-         question: "What is the Ultra Lucky Block?",
- ... (11 more removed lines; see GitHub link above)
+         zoom: 1,
+         x: 0,
+         y: 0
+       },
+       EW = 12,
+       NW = {
+         x0: 0,
+         y0: 0,
+         x1: 1,
+         y1: 1
+       },
+       PW = .45;
+ 
+     function LW(WW, iW, OW) {
+       return Math.min(OW, Math.max(iW, WW))
+     }
+ ... (735 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/182.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/182.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914)

#### 1. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L4-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/182.js#L4-L129) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/182.js#L4)

```diff
-   9662: (BB, OB, GB) => {
+   37868: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => jW,
+       h: () => UW,
+       l: () => xW,
+       o: () => ZW
+     });
+     var mW = OW(35220),
+       EW = OW(3361),
+       NW = OW(3368),
+       PW = OW(9954),
+       LW = OW(1526),
+       cW = OW(62),
+       wW = OW(80),
+       tW = OW(1283);
+ 
+ ... (110 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L6-L38` → after: `L131-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L131-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/182.js#L131-L242) · [Before (L6-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/182.js#L6-L38)

```diff
-       pageBody: () => YB
-     });
-     const YB = {
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
-       faq: [{
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
-       }, {
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
-       }, {
-         question: "Why did my build disappear?",
- ... (17 more removed lines; see GitHub link above)
+       Smp2OnboardingUi: () => bW
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(40542),
+       LW = OW(27),
+       cW = OW(37868),
+       wW = OW(2983),
+       tW = OW(2032),
+       ZW = OW(3599),
+       xW = OW(25),
+       lW = OW(40534),
+       AW = OW(1283);
+ 
+     function bW(WW) {
+ ... (96 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/183.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/183.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95)

#### 1. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/183.js#L4-L25) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/183.js#L4)

```diff
-   9671: (BB, OB, GB) => {
+   9997: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(10006),
+       EW = OW(643),
+       NW = OW(136);
+ 
+     function PW(WW) {
+       var iW, OW;
+       if ((0, EW.K)(WW)) return !0;
+       const PW = null !== (iW = null === (OW = NW.siteUsedData[NW.siteUsed]) || void 0 === OW ? void 0 : OW.adConfig.showRewardedAds) && void 0 !== iW && iW;
+       for (const EW in WW) {
+         const iW = WW[EW];
+         if (null !== iW && void 0 !== iW && iW.items)
+           for (const WW in iW.items)
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L6` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/183.js#L27-L29) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/183.js#L6)

```diff
-       pageBody: () => YB
+       getClientGameLeaderboardKey: () => mW.u,
+       getClientGameMapKey: () => mW.x,
+       shopIsEmpty: () => EW.b
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L8-L41` → after: `L31-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/183.js#L31-L36) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/183.js#L8-L41)

```diff
-     const YB = {
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
-       }, {
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
-       }, {
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
-       }, {
- ... (18 more removed lines; see GitHub link above)
+     var mW = OW(3361),
+       EW = OW(9997)
+   },
+   10006: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return !WW.hidden && (iW || !WW.isRewardedAd)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/184.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/184.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533)

#### 1. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L4-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/184.js#L4-L39) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/184.js#L4)

```diff
-   9676: (BB, OB, GB) => {
+   10049: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW,
+       e: () => wW,
+       i: () => ZW,
+       l: () => tW,
+       p: () => cW,
+       q: () => lW
+     });
+     var mW = OW(27),
+       EW = OW(2111),
+       NW = OW(1479),
+       PW = OW(1459);
+     const LW = WW => {
+         var iW, OW;
+         return (0, PW.k)() && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getGlyphForNoaAction(WW)) && void 0 !== iW ? iW : null
+ ... (20 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L6` → after: `L41-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L41-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/184.js#L41-L587) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/184.js#L6)

```diff
-       pageBody: () => YB
+       openCharacterPreview: () => si
+     });
+     var mW = OW(39274),
+       EW = OW(2365),
+       NW = OW(625),
+       PW = OW(38320),
+       LW = OW(3090),
+       cW = OW(38307),
+       wW = OW(41359),
+       tW = OW(41604),
+       ZW = OW(42569),
+       xW = OW(38235),
+       lW = OW(41760),
+       AW = OW(38369),
+       bW = OW(41782),
+       jW = OW(42616),
+ ... (531 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L9-L25` → after: `L608-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L608-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/184.js#L608-L735) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/184.js#L9-L25)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
-       faq: [{
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
-       }, {
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
-       }, {
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
-       }, {
-         question: "What happens to monsters when the sun comes up?",
- ... (1 more removed lines; see GitHub link above)
+         redTeam: NW.d,
+         blueTeam: jW.f,
+         greenTeam: sW.g,
+         yellowTeam: UW.f,
+         cyanTeam: cW.e,
+         whiteTeam: lW.faPlus,
+         pinkTeam: tW.h,
+         grayTeam: ZW.f,
+         blackTeam: bW.g,
+         orangeTeam: kW.g,
+         lilacTeam: PW.f,
+         purpleTeam: xW.f,
+         magentaTeam: LW.g,
+         brownTeam: mW.i,
+         limeTeam: EW.faBolt,
+         lightGrayTeam: wW.d,
+ ... (112 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L27-L28` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/184.js#L737-L738) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/184.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         healthFraction: .5,
+         colour: "#ffaa00"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L30-L32` → after: `L740-L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L740-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/184.js#L740-L1421) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/184.js#L30-L32)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
-       }]
+         healthFraction: 1,
+         colour: "#00ff00"
+       }],
+       lW = 64,
+       AW = 69,
+       bW = {
+         icon: PW.e,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "#f38ab6",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+       };
+ 
+ ... (666 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/185.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/185.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L4-L6` → after: `L4-L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L4-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/185.js#L4-L3960) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/185.js#L4-L6)

```diff
-   9685: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       pageBody: () => YB
+   40305: (WW, iW, OW) => {
+     function mW(WW) {
+       return !(!WW.lobbyLeaderboardInfo && !WW.lobbyManage)
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+   40287: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW,
+       d: () => PW
+     });
+     var mW = OW(27);
+     let EW = !1;
+ 
+ ... (3941 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L9-L35` → after: `L4225-L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L4225-L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/185.js#L4225-L4571) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/185.js#L9-L35)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
-       faq: [{
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
-       }, {
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
-       }, {
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
-       }, {
-         question: "Do mobs carry guns in Bloxd?",
- ... (11 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       LW = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function cW(WW, iW) {
+       if (WW instanceof EW.c) return {
+         at: PW[iW],
+         code: 0
+       };
+       const OW = (0, mW.f)(WW),
+ ... (331 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/186.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/186.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L4` → after: `L4-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L4-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/186.js#L4-L34) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/186.js#L4)

```diff
-   9687: (BB, OB, GB) => {
+   10198: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       f: () => PW
+     });
+     var mW = OW(172);
+     class EW {
+       constructor() {
+         this.marks = new Map, this.fromTap = !1
+       }
+       mark(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
+         this.marks.has(WW) || this.marks.set(WW, iW)
+       }
+       marked() {
+         return mW.U.flatMap((WW => {
+ ... (15 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L6` → after: `L36-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/186.js#L36-L39) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/186.js#L6)

```diff
-       pageBody: () => YB
+       importClientLoad: () => ZW,
+       loadWasmPlay: () => AW,
+       loadWasmPlayAhead: () => bW,
+       loadWasmPreviews: () => jW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L8-L35` → after: `L41-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L41-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/186.js#L41-L84) · [Before (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/186.js#L8-L35)

```diff
-     const YB = {
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
-       }, {
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
-       }, {
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
-       }, {
- ... (12 more removed lines; see GitHub link above)
+     var mW = OW(4337),
+       EW = OW(3153),
+       NW = OW(2283),
+       PW = OW(5348),
+       LW = OW(4746),
+       cW = OW(5368),
+       wW = OW(10198);
+     let tW = null;
+ 
+     function ZW() {
+       return Promise.all([OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(161), OW.e(255), OW.e(71)]).then((() => OW(42198)))
+     }
+ 
+     function xW() {
+       return Promise.all([OW.e(88), OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(222), OW.e(161), OW.e(250), OW.e(242), OW.e(103), OW.e(246), OW.e(255), OW.e(76)]).then((() => OW(42371)))
+     }
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/187.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/187.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623)

#### 1. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L4)

```diff
-   9690: (BB, OB, GB) => {
+   10229: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L30-L31` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/187.js#L30-L40) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/187.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
+       }, {
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
+       }, {
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/188.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/188.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L4)

```diff
-   9699: (BB, OB, GB) => {
+   10234: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/188.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/188.js#L30-L37)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
-       }, {
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/189.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/189.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L4)

```diff
-   9706: (BB, OB, GB) => {
+   10238: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L30-L31)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/189.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/189.js#L33-L34)

```diff
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
+       }, {
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/190.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/190.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L4)

```diff
-   9715: (BB, OB, GB) => {
+   10240: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L9-L13)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L15-L16)

```diff
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L18-L19)

```diff
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L21-L22)

```diff
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L24-L25)

```diff
-         question: "Which modes does Sky Islands have?",
-         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L27-L28)

```diff
-         question: "Where do you find diamonds in Sky Islands?",
-         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/190.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/190.js#L30-L31)

```diff
-         question: "What is a diamond bounty?",
-         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+       }, {
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/191.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/191.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L4)

```diff
-   9723: (BB, OB, GB) => {
+   10243: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L30-L31)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/191.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/191.js#L33-L37)

```diff
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
-       }, {
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/192.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/192.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07)

#### 1. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L4)

```diff
-   9728: (BB, OB, GB) => {
+   10249: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/192.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/192.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+       }, {
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/193.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/193.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081)

#### 1. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L4)

```diff
-   9736: (BB, OB, GB) => {
+   10253: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L30-L31` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/193.js#L30-L40) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/193.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/194.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/194.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L4)

```diff
-   9740: (BB, OB, GB) => {
+   10261: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L9-L13)

```diff
-       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
-       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
-       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
-       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
-       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L15-L16)

```diff
-         question: "What is Bloxd Fishing?",
-         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L18-L19)

```diff
-         question: "How many fish are in Bloxd Fishing?",
-         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L21-L22)

```diff
-         question: "How do I catch Mythic fish in Bloxd Fishing?",
-         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L24-L25)

```diff
-         question: "Where can I get better rods?",
-         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L27-L28)

```diff
-         question: "How do I travel between islands?",
-         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/194.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/194.js#L30-L31)

```diff
-         question: "What are the catch minigames?",
-         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/195.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/195.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359)

#### 1. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L4)

```diff
-   9742: (BB, OB, GB) => {
+   10263: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L9-L13)

```diff
-       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
-       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
-       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
-       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
-       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L15-L16)

```diff
-         question: "What is Cube Warfare?",
-         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L18-L19)

```diff
-         question: "What modes are in Cube Warfare?",
-         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L21-L22)

```diff
-         question: "How does team deathmatch work in Cube Warfare?",
-         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L24-L25)

```diff
-         question: "What is Gun Game in Bloxd Cube Warfare?",
-         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L27-L28)

```diff
-         question: "How do I unlock new guns in Cube Warfare?",
-         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L30-L31)

```diff
-         question: "How many guns are in Cube Warfare?",
-         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L33-L43` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/195.js#L33-L34) · [Before (L33-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/195.js#L33-L43)

```diff
-         question: "What are killstreaks in Cube Warfare?",
-         answer: "Rewards for taking down opponents without being eliminated, like Healthup, Hitem, Speedy and Autoblocks. There are 3 tiers, and your streak resets when you go down."
-       }, {
-         question: "What is Collect Diamonds?",
-         answer: "A match modifier for Free-For-All and Team Deathmatch. You need 30 diamonds to win in FFA, or 100 as a team. When someone's taken down they drop all their diamonds, so you can steal theirs. Shoot the diamonds placed around the map and they'll drop too. Those resp … [truncated]
-       }, {
-         question: "What is the Explosives modifier?",
-         answer: "You keep getting explosives all match, and every takedown gives you more."
-       }, {
-         question: "What maps are in Cube Warfare?",
-         answer: "Snowbase, Sienna and Cabins, among others. You get to vote for the next one."
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/196.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/196.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L4)

```diff
-   9744: (BB, OB, GB) => {
+   10265: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L9-L13)

```diff
-       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
-       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
-       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
-       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
-       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L15-L16)

```diff
-         question: "What is Bloxd Frontline?",
-         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L18-L19)

```diff
-         question: "How does a team win in Bloxd Frontline?",
-         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L21-L22)

```diff
-         question: "What do kits do in Bloxd Frontline?",
-         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L24-L25)

```diff
-         question: "How do I unlock new kits?",
-         answer: "Spend gold on a mystery kit draw. Draw one you already own and you'll get gems instead, which you can use to buy a specific locked kit."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L27-L28)

```diff
-         question: "Does Bloxd Frontline have vehicles?",
-         answer: "Yep. They spawn at each base and around the map. Guns and explosives can destroy them, so drive carefully."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L30-L31)

```diff
-         question: "How is Frontline different from Cube Warfare?",
-         answer: "Frontline is 12v12 objective play with points, kits and vehicles. Cube Warfare is quicker Free-For-All, Team Deathmatch and Gun Game fights where killstreaks matter most."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/196.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/196.js#L33-L34)

```diff
-         question: "Can I squad up with friends in Bloxd Frontline?",
-         answer: "Yes. Party up with your friends and you'll play together as a squad."
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/197.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/197.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L4)

```diff
-   9753: (BB, OB, GB) => {
+   10274: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L9-L13)

```diff
-       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
-       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
-       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
-       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
-       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L15-L16)

```diff
-         question: "What is Bloxd Pirates?",
-         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Pirates?",
-         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L21-L22)

```diff
-         question: "How do cannons work in Bloxd Pirates?",
-         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L24-L25)

```diff
-         question: "Which kits can I pick in Bloxd Pirates?",
-         answer: "There are 26, each with its own items or powers. The Scout can double jump, the Scoundrel can go invisible and the Portalmaster makes portals. You pick one in the lobby and unlock more with Gold or gems."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L27-L28)

```diff
-         question: "How do I get Gold in Bloxd Pirates?",
-         answer: "A win is worth 25 Gold. You also get 5 Gold for every spawn block you break and every final kill."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/197.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/197.js#L30-L31)

```diff
-         question: "What maps are in Bloxd Pirates?",
-         answer: "There are 11: Classic, Classic (4 Teams), Scurvy Shore, Cutthroat Cliffs, Treasure Island, Double Trouble, Stowaway Seas, Woesome Waters, Cannon Storm, Scorched Sails and Dynasty Docks."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/198.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/198.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L4)

```diff
-   9762: (BB, OB, GB) => {
+   10280: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L9-L13)

```diff
-       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
-       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
-       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
-       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
-       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L15-L16)

```diff
-         question: "What is Bloxd Infection?",
-         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L18-L19)

```diff
-         question: "How does the infection spread in Bloxd Infection?",
-         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L21-L22)

```diff
-         question: "How do humans win?",
-         answer: "Get through all the obstacles and escape before you're infected."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L24-L25)

```diff
-         question: "How do zombies win?",
-         answer: "By infecting every human before they escape."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L27-L28)

```diff
-         question: "How are points earned?",
-         answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L30-L31)

```diff
-         question: "What kits are in Bloxd Infection?",
-         answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/198.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/198.js#L33-L34)

```diff
-         question: "What's the player limit in Infection?",
-         answer: "18 players per match."
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/199.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/199.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df)

#### 1. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L4)

```diff
-   9769: (BB, OB, GB) => {
+   10282: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L9-L13)

```diff
-       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
-       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
-       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
-       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
-       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L15-L16)

```diff
-         question: "What is Bloxd Murder Mystery?",
-         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L18-L19)

```diff
-         question: "What are the roles in Murder Mystery?",
-         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L21-L22)

```diff
-         question: "Who wins a round of Murder Mystery?",
-         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
+         question: "How many phases are in Bloxd One Block?",
+         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L24-L25)

```diff
-         question: "How do I get a gun?",
-         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
+         question: "How do I get to the Hub in One Block?",
+         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L27-L28)

```diff
-         question: "How long is a round?",
-         answer: "4 minutes."
+         question: "Where do One Block coins come from?",
+         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L30-L31)

```diff
-         question: "How many people do you need to play Murder Mystery?",
-         answer: "You need at least 2 to start, and a round can hold up to 12."
+         question: "How do I open my portal in One Block?",
+         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/199.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/199.js#L33-L37)

```diff
-         question: "Can I play Murder Mystery with friends?",
-         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
-       }, {
-         question: "How do I earn gold?",
-         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
+         question: "Can I have more than one island?",
+         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/200.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/200.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L4)

```diff
-   9772: (BB, OB, GB) => {
+   10287: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L9-L13)

```diff
-       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
-       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
-       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
-       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
-       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
+       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
+       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
+       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
+       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
+       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L15-L16)

```diff
-         question: "What is Bloxd Escape the Forest?",
-         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
+         question: "What is Bloxd Sky Islands?",
+         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L18-L19)

```diff
-         question: "In Escape the Forest, how do you survive 99 nights?",
-         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
+         question: "How is the winner decided in Bloxd Sky Islands?",
+         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L21-L22)

```diff
-         question: "How many players can team up in Escape the Forest?",
-         answer: "Up to 6 in each game, and others can join to spectate."
+         question: "How do I claim an island in Sky Islands?",
+         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L24-L25)

```diff
-         question: "Where are the lost kids?",
-         answer: "Out in the forest. Level up your fire to find more of them, then go searching. Every kid you find adds to your day count."
+         question: "Which modes does Sky Islands have?",
+         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L27-L28)

```diff
-         question: "What happens if you go down?",
-         answer: "A teammate can revive you with a Revive Splash Potion. You can fire a Call for Help flare too, and the Respawn Pod can bring back players who die."
+         question: "Where do you find diamonds in Sky Islands?",
+         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/200.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/200.js#L30-L34)

```diff
-         question: "How do you escape the forest?",
-         answer: "Follow Maverick the wizard's guidance to the frozen forest, collect the portal keystones, open the portal and send the kids home."
-       }, {
-         question: "Is there anything after night 99?",
-         answer: "You've beaten the challenge by then, but how much longer can you survive? Your best number of nights survived shows on your nametag."
+         question: "What is a diamond bounty?",
+         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/201.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/201.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L4)

```diff
-   9776: (BB, OB, GB) => {
+   10290: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L9-L13)

```diff
-       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
-       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
-       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
-       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
-       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
+       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
+       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
+       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
+       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L15-L16)

```diff
-         question: "What is Bloxd Containment Breach?",
-         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+         question: "What is Bloxd Build a Factory?",
+         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L18-L19)

```diff
-         question: "How many players can play Containment Breach?",
-         answer: "Up to 6 on Normal, or up to 4 on Hard."
+         question: "How do you build a rocket in Bloxd Build a Factory?",
+         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L21-L22)

```diff
-         question: "Can I play Containment Breach solo?",
-         answer: "Not on your own, sorry. A run needs at least 2 players, so bring a friend or team up with someone in the lobby."
+         question: "What's the goal in Build a Factory?",
+         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L24-L25)

```diff
-         question: "What happens when you go down in Containment Breach?",
-         answer: "You become a ghost until a teammate revives you with a splash healing potion. If everyone ends up as a ghost, the run is lost."
+         question: "How often does the Build a Factory world reset?",
+         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L27-L28)

```diff
-         question: "How do I upgrade guns in Containment Breach?",
-         answer: "Go to the Loadout NPC and spend gold and boss parts there. Gold comes from kills, and your squad gets a boss part every time it contains an anomaly."
+         question: "What is the Persistent world in Build a Factory?",
+         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/201.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/201.js#L30-L31)

```diff
-         question: "Can I choose which anomaly I fight?",
-         answer: "Yes. Buy a Locator from the Locator NPC and arm it before you deploy. It shatters after one use."
+         question: "How do you get to the Moon in Build a Factory?",
+         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+       }, {
+         question: "What does Lunite do?",
+         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+       }, {
+         question: "What's the difference between Build a Factory and Build a Factory 2?",
+         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/202.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/202.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783)

#### 1. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L4)

```diff
-   9782: (BB, OB, GB) => {
+   10296: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L9-L13)

```diff
-       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
-       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
-       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
-       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
-       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
+       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
+       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
+       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
+       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L15-L16)

```diff
-         question: "What is Bloxd Horror Hotel?",
-         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+         question: "What is Build a Factory 2 on Bloxd?",
+         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L18-L19)

```diff
-         question: "Does Horror Hotel really have infinite rooms?",
-         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+         question: "Is Build a Factory 2 an idle factory game?",
+         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L21-L22)

```diff
-         question: "How do I upgrade my room in Horror Hotel?",
-         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+         question: "How do I unlock new machines in Build a Factory 2?",
+         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L24-L25)

```diff
-         question: "What is the max room level in Horror Hotel?",
-         answer: "Level 22. Once you hit it, your room is maxed out."
+         question: "What's the best way to power my factory?",
+         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L27-L28)

```diff
-         question: "Can friends visit my hotel room?",
-         answer: "Yes, as long as their room level is high enough. You can also choose whether to allow visitors, editors and PvP."
+         question: "What are the Wilds?",
+         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/202.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/202.js#L30-L31)

```diff
-         question: "Is Horror Hotel scary?",
-         answer: "A bit! It's spooky, with odd guests, eerie sounds and a skinwalker lurking about. It's creepy rather than gory, and you can explore at your own pace."
+         question: "Can friends help build my factory?",
+         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/203.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/203.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L7242` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/203.js#L4) · [Before (L4-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L7242)

```diff
-   9908: (BB, OB) => {
-     OB.discordURLBuilder = function(BB) {
-       var OB;
-       const GB = (null === (OB = null === window || void 0 === window ? void 0 : window.location) || void 0 === OB ? void 0 : OB.hostname) || "localhost",
-         YB = BB.hostname.split("."),
-         DB = !BB.hostname.includes("trycloudflare.com") && !BB.hostname.includes("discordsays.com") && YB.length > 2 ? `/${YB[0]}` : "";
-       return BB.pathname.startsWith("/.proxy") ? `${BB.protocol}//${GB}${DB}${BB.pathname}${BB.search}` : `${BB.protocol}//${GB}/.proxy/colyseus${DB}${BB.pathname}${BB.search}`
-     }
-   },
-   9891: (BB, OB, GB) => {
-     var YB, DB, QB, oB, jB = GB(9800),
-       yB = GB(9899),
-       JB = GB(9861);
-     YB = new WeakMap, DB = new WeakMap, QB = new WeakMap, oB = new WeakMap, OB.Auth = class {
-       constructor(BB) {
-         this.http = BB, this.settings = {
- ... (7223 more removed lines; see GitHub link above)
+   10303: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L7244-L7784` → after: `L6-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L6-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/203.js#L6-L32) · [Before (L7244-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/203.js#L7244-L7784)

```diff
-       __addDisposableResource: () => gB,
-       __assign: () => QB,
-       __asyncDelegator: () => fB,
-       __asyncGenerator: () => UB,
-       __asyncValues: () => kB,
-       __await: () => nB,
-       __awaiter: () => pB,
-       __classPrivateFieldGet: () => FB,
-       __classPrivateFieldIn: () => LB,
-       __classPrivateFieldSet: () => iB,
-       __createBinding: () => ZB,
-       __decorate: () => jB,
-       __disposeResources: () => XB,
-       __esDecorate: () => JB,
-       __exportStar: () => NB,
-       __extends: () => DB,
- ... (525 more removed lines; see GitHub link above)
+       pageBody: () => mW
+     });
+     const mW = {
+       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a busy little town. You work jobs around town, buy a car, do up your house and hang out with other players, and there's no rush to do any of … [truncated]
+       howToPlay: ["You start with a free house on your own plot in town. Then pick a job: drill for ore at the Quarry and sell it to Nugget, blast buildings at the Demolition Yard, harvest crops for Tillie at Greenville Farm or chop trees for Timbertooth at the Lumber Mill. At Gr … [truncated]
+       features: ["Unlock and Switch Between Houses on Your Own Plot", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "Buy Cars at the Dealership and Call Them to You", "Fast Travel to Every Job You've Visited",  … [truncated]
+       tips: ["Rest in your bed when your energy drops. Low energy means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "At the Quarry, press F when your backpack's full to go straight back to Nugget", "Golden crops are worth far more than plai … [truncated]
+       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       faq: [{
+         question: "What is Bloxd Greenville?",
+         answer: "A town life sim where you build a home, earn gold from jobs around town and hang out with other players."
+       }, {
+         question: "How do I earn gold in Greenville?",
+         answer: "Work a job: sell ore to Nugget at the Quarry, blast buildings at the Demolition Yard, fill orders for Tillie and Timbertooth, or help out at Greenville Grocers. Keep your energy up as well, because low energy cuts your earnings."
+       }, {
+         question: "Can I build my own house in Greenville?",
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/204.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/204.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/204.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/204.js#L4-L7)

```diff
-   10027: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => DB,
-       g: () => QB
+   10305: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       pageBody: () => mW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L9-L1403` → after: `L8-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/204.js#L8-L33) · [Before (L9-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/204.js#L9-L1403)

```diff
-     var YB = GB(9974);
-     const DB = "Air",
-       QB = Object.freeze(new YB.g(DB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27710: BB => {
-     BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33808: BB => {
-     BB.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33813: BB => {
-     BB.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27719: BB => {
-     BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1379 more removed lines; see GitHub link above)
+     const mW = {
+       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
+       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
+       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
+       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
+       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       faq: [{
+         question: "What is Bloxd Fishing?",
+         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+       }, {
+         question: "How many fish are in Bloxd Fishing?",
+         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+       }, {
+         question: "How do I catch Mythic fish in Bloxd Fishing?",
+         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+       }, {
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/205.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/205.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530)

#### 1. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L4-L12` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/205.js#L4-L44) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/205.js#L4-L12)

```diff
-   38383: (BB, OB, GB) => {
-     var YB = GB(38392);
- 
-     function DB(BB) {
-       for (var OB, GB, DB = 0, QB = BB.length, oB = 0; oB < BB.length;) {
-         for (OB = BB[oB], GB = 0; oB < QB && BB[oB] === OB;) ++oB, ++GB;
-         DB += YB.log2(GB) / 7 | 0, DB += YB.log2(OB >>> 0) / 7 | 0, DB += 2
-       }
-       return DB
+   10309: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       pageBody: () => mW
+     });
+     const mW = {
+       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
+       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
+       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
+       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
+       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       faq: [{
+         question: "What is Cube Warfare?",
+         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+       }, {
+         question: "What modes are in Cube Warfare?",
+         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+ ... (25 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/206.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/206.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/206.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/206.js#L4)

```diff
-   41493: (BB, OB, GB) => {
+   10315: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/206.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/206.js#L6-L8)

```diff
-       FORMER_BLOCK_IMAGE_NAMES: () => YB.e,
-       textureAnimationData: () => DB.t,
-       textureNameToIndex: () => DB.u
+       pageBody: () => mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L10-L31` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/206.js#L8-L35) · [Before (L10-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/206.js#L10-L31)

```diff
-     var YB = GB(39417),
-       DB = GB(9927)
-   },
-   10027: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => DB,
-       g: () => QB
-     });
-     var YB = GB(9974);
-     const DB = "Air",
-       QB = Object.freeze(new YB.g(DB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   39417: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB,
-       g: () => DB
- ... (6 more removed lines; see GitHub link above)
+     const mW = {
+       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
+       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
+       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
+       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
+       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
+       faq: [{
+         question: "What is Bloxd Frontline?",
+         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
+       }, {
+         question: "How does a team win in Bloxd Frontline?",
+         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
+       }, {
+         question: "What do kits do in Bloxd Frontline?",
+         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
+       }, {
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/207.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/207.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/207.js#L4-L8)

```diff
-   41624: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => yB,
-       h: () => jB,
-       l: () => oB
+   10324: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       pageBody: () => mW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L75-L1365` → after: `L9-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/207.js#L9-L32) · [Before (L75-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/207.js#L75-L1365)

```diff
-       fire: function(BB) {
-         if ("connection" === BB.type) {
-           const OB = BB.phase === YB.E.Activated && BB.conn !== yB && BB.conn > JB,
-             GB = (BB.phase === YB.E.Left || BB.phase === YB.E.Closed) && BB.conn === yB;
-           return void(OB || GB ? (yB = OB ? BB.conn : 0, qB(!0)) : BB.phase === YB.E.Resumed && 0 !== yB && BB.conn > JB && (yB = BB.conn, qB(!0, jB)))
-         }
-         const OB = QB.get(BB.ty);
-         if (OB && BB.conn === yB && 0 !== yB)
-           for (const YB of OB) try {
-             YB(BB)
-           } catch (GB) {
-             (0, DB.j)(GB, pB)
-           }
-       },
-       close: function(BB) {
-         JB = Math.max(JB, BB, yB), 0 !== yB && (yB = 0, qB(!1))
- ... (1275 more removed lines; see GitHub link above)
+       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
+       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
+       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
+       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
+       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
+       faq: [{
+         question: "What is Bloxd Pirates?",
+         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
+       }, {
+         question: "How do you win in Bloxd Pirates?",
+         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
+       }, {
+         question: "How do cannons work in Bloxd Pirates?",
+         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
+       }, {
+         question: "Which kits can I pick in Bloxd Pirates?",
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/208.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/208.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/208.js#L4-L6)

```diff
-   39843: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB
+   10329: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       pageBody: () => mW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1215-L1296` → after: `L9-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/208.js#L9-L35) · [Before (L1215-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/208.js#L1215-L1296)

```diff
-       Rm: 0,
-       Wm: 0
-     };
- 
-     function QB() {
-       return {
-         position: [0, 0, 0],
-         heading: 0,
-         pitch: 0,
-         fov: 0
-       }
-     }
- 
-     function oB(BB, OB) {
-       return OB[0] = BB[0], OB[1] = BB[1], OB[2] = BB[2], OB
-     }
- ... (66 more removed lines; see GitHub link above)
+       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
+       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
+       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
+       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
+       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
+       faq: [{
+         question: "What is Bloxd Infection?",
+         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
+       }, {
+         question: "How does the infection spread in Bloxd Infection?",
+         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
+       }, {
+         question: "How do humans win?",
+         answer: "Get through all the obstacles and escape before you're infected."
+       }, {
+         question: "How do zombies win?",
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/209.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/209.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L4)

```diff
-   34619: (BB, OB, GB) => {
+   10332: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L7)

```diff
-       getLatestPublishedUpdateLog: () => jB,
-       updateLogsData: () => oB
+       pageBody: () => mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L9-L29` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L8-L16) · [Before (L9-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L9-L29)

```diff
-     var YB = GB(849),
-       DB = GB(331);
-     const QB = "\xa0\xa0\xa0\xa0",
-       oB = [{
-         author: ["Oliver", "Harry"],
-         date: new Date("2026-11-17T16:00:00Z"),
-         title: "\u2728Characters are back in the Store!\u2728",
-         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
-         image: "CosmeticPacks.jpg",
-         onClickImage: {
-           type: "openMenu",
-           menu: DB.p.COSMETIC_SHOP
-         },
-         callToAction: {
-           color: "rainbow",
-           label: "Go to Store!",
- ... (5 more removed lines; see GitHub link above)
+     const mW = {
+       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
+       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
+       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
+       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
+       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
+       faq: [{
+         question: "What is Bloxd Murder Mystery?",
+         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L31-L51` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L18-L19) · [Before (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L31-L51)

```diff
-         author: ["pegasys", "Harry"],
-         date: new Date("2026-11-12T14:00:00Z"),
-         title: "Build a Factory 2: Nuclear Expansion \u2622\ufe0f",
-         description: "Power your Core into the Atomic tiers and build a Nuclear Reactor!\n\n Keep it cool with Cryo from the Coolant Mixer, smash particles in the Collider, catch Isotope comets and suit up in Nova gear with a Jetpack. Then head down to the Wilds and test an Atomi … [truncated]
-         image: "build_a_factory_2_nuclear.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "buildAFactory2"
-         },
-         mobileNotification: {
-           title: "Build a Factory 2: Nuclear Expansion \u2622\ufe0f",
-           body: "Build a Nuclear Reactor, fly with a Jetpack and test an Atomic Bomb!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Go nuclear",
- ... (5 more removed lines; see GitHub link above)
+         question: "What are the roles in Murder Mystery?",
+         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L53-L69` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L21-L22) · [Before (L53-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L53-L69)

```diff
-         author: "Tom",
-         date: new Date("2026-11-11T10:00:00Z"),
-         title: "New Shader Packs Page! \ud83c\udfa8",
-         description: "Players using WebGPU can browse and share shaders!",
-         image: "shader_packs.jpg",
-         onClickImage: {
-           type: "navigate",
-           to: "/shader-packs"
-         },
-         callToAction: {
-           color: "blue",
-           label: "shaderPackListing:browse",
-           action: {
-             type: "navigate",
-             to: "/shader-packs"
-           }
- ... (1 more removed lines; see GitHub link above)
+         question: "Who wins a round of Murder Mystery?",
+         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L71-L91` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L24-L25) · [Before (L71-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L71-L91)

```diff
-         author: ["pegasys", "AnxietreeDev"],
-         date: new Date("2026-11-04T12:00:00Z"),
-         title: "New Lucky Bedwars Map: Snowdrift! \u2744\ufe0f",
-         description: "Battle across frozen islands and icy towers in Snowdrift - play now in Lucky Bedwars!",
-         image: "lucky_bedwars_snowdrift.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "luckyBedwars"
-         },
-         mobileNotification: {
-           title: "New Lucky Bedwars Map: Snowdrift! \u2744\ufe0f",
-           body: "Play the new Lucky Bedwars map - Snowdrift!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
- ... (5 more removed lines; see GitHub link above)
+         question: "How do I get a gun?",
+         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L93-L109` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L27-L28) · [Before (L93-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L93-L109)

```diff
-         author: "ellie",
-         date: YB.d,
-         title: "Skyblock: Wild Infernos! \ud83d\udd25",
-         description: "A fire mage has vanished into the Wild Infernos, and Emberwatch Outpost needs your help!\n\n Climb the Tower of Doom, escape the Shuffling Crypt and earn the Magmaward, the only armour that survives the volcano. Finish Lorenzo's combat lessons in the Hub and … [truncated]
-         image: "skyblock_wild_infernos.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "skyblock"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Brave the Infernos",
-           action: {
-             type: "playGame",
-             game: "skyblock"
-           }
- ... (1 more removed lines; see GitHub link above)
+         question: "How long is a round?",
+         answer: "4 minutes."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L111-L119` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L30-L31) · [Before (L111-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L111-L119)

```diff
-         author: ["pegasys", "Oliver", "Xander"],
-         date: new Date("2026-10-28T12:00:00Z"),
-         title: "New Game: Trick or Treat \ud83c\udf83",
-         description: "Race around a haunted town grabbing glowing jack o'lanterns!\n\n Knock on doors for treats, throw tricks at your rivals, hunt down the Great Pumpkin and run from the crones. Whoever holds the most treats at midnight wins!\n\n The event has ended. Everyone wh … [truncated]
-         image: "trick_or_treat.jpg",
-         mobileNotification: {
-           title: "New Game: Trick or Treat \ud83c\udf83",
-           body: "Race a haunted town for treats and earn the new Halloween profile effect!"
-         }
+         question: "How many people do you need to play Murder Mystery?",
+         answer: "You need at least 2 to start, and a round can hold up to 12."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L121-L137` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L33-L34) · [Before (L121-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L121-L137)

```diff
-         author: ["januaryboy", "Oliver"],
-         date: new Date("2026-10-27T12:00:00Z"),
-         title: "New Texture Pack: January 16x16 \ud83c\udfa8",
-         description: "A brand new 16x16 texture pack by januaryboy, giving every block, crop and model a fresh, crisp look!\n\n Pick it in Settings > Texture Pack.",
-         image: "january_16x16_texture_pack.jpg",
-         onClickImage: {
-           type: "openSettings",
-           category: "texturePack"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "openSettings",
-             category: "texturePack"
-           }
- ... (1 more removed lines; see GitHub link above)
+         question: "Can I play Murder Mystery with friends?",
+         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L139-L2779` → after: `L36-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/209.js#L36-L38) · [Before (L139-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/209.js#L139-L2779)

```diff
-         author: "pegasys",
-         date: new Date("2026-10-22T12:00:00Z"),
-         title: "New Game: Build a Factory 2 \ud83c\udfed",
-         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
-         image: "build_a_factory_2.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "buildAFactory2"
-         },
-         mobileNotification: {
-           title: "New Game: Build a Factory 2 \ud83c\udfed",
-           body: "Build machines on your own floating island and watch them work - even while you're away!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Start building",
- ... (2625 more removed lines; see GitHub link above)
+         question: "How do I earn gold?",
+         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
+       }]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L11892` → after: `L4-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L36) · [Before (L4-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L11892)

```diff
-   34621: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(BB, OB, GB) {
-               BB.exports = GB(7588)
-             },
-             5036: function(BB, OB, GB) {
-               GB(1719), GB(5677), GB(6394), GB(5334), GB(6969), GB(2021), GB(8328), GB(2129);
-               var YB = GB(1287);
-               BB.exports = YB.Promise
-             },
-             2582: function(BB, OB, GB) {
-               GB(1646), GB(6394), GB(2004), GB(462), GB(8407), GB(2429), GB(1172), GB(8288), GB(1274), GB(8201), GB(6626), GB(3211), GB(9952), GB(15), GB(9831), GB(7521), GB(2972), GB(6956), GB(5222), GB(2257);
-               var YB = GB(1287);
- ... (11873 more removed lines; see GitHub link above)
+   10336: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       pageBody: () => mW
+     });
+     const mW = {
+       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
+       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
+       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
+       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
+       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
+       faq: [{
+         question: "What is Bloxd Escape the Forest?",
+         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
+       }, {
+         question: "In Escape the Forest, how do you survive 99 nights?",
+         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/211.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/211.js#L2)

```diff
- export const ids = [211, 212];
+ export const ids = [211];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/211.js#L4)

```diff
-   34624: (BB, OB, GB) => {
+   10343: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/211.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/211.js#L6-L7)

```diff
-       reportJsMainStall: () => jB,
-       resetJsMainStallReport: () => yB
+       pageBody: () => mW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L9-L15` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/211.js#L8-L32) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/211.js#L9-L15)

```diff
-     var YB = GB(34626),
-       DB = GB(1856),
-       QB = GB(34631);
-     let oB = !1;
- 
-     function jB(BB, OB, GB, jB) {
-       oB || (oB = !0, (0, DB.reportClientError)("wasm_load", (0, QB.b)(BB, OB, GB, jB, (0, QB.d)()), "JS-mainStall", !0, YB.CAPPED_COUNTS_VISIT_CAP))
+     const mW = {
+       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
+       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
+       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
+       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
+       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       faq: [{
+         question: "What is Bloxd Containment Breach?",
+         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+       }, {
+         question: "How many players can play Containment Breach?",
+         answer: "Up to 6 on Normal, or up to 4 on Hard."
+       }, {
+         question: "Can I play Containment Breach solo?",
+         answer: "Not on your own, sorry. A run needs at least 2 players, so bring a friend or team up with someone in the lobby."
+       }, {
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/212.js#L4)

```diff
-   34626: (BB, OB, GB) => {
+   10345: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/212.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/212.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => QB,
-       reportCappedWasmFailure: () => yB,
-       reportUncappedWasmFailure: () => jB,
-       reportWasmCrash: () => DB,
-       reportWasmFailure: () => oB
+       pageBody: () => mW
```
